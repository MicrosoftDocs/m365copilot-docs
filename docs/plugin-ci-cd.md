---
title: Integrate Work IQ Dev Tools into Microsoft 365 Copilot plugin CI/CD
description: Use Work IQ Dev Tools to validate Microsoft 365 Copilot plugins in pull requests, test release candidates, and submit updates to your organization catalog.
author: rloutlaw
ms.author: routlaw
ms.service: microsoft-365-copilot
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/03/2026
ai-usage: ai-assisted
ms.custom: msecd-doc-authoring-1013
#customer intent: As a plugin developer, I want to automate validation, candidate testing, and release submission with Work IQ Dev Tools so that I can release tested plugin updates.
---

# Integrate Work IQ Dev Tools into Microsoft 365 Copilot plugin CI/CD

Use Work IQ Dev Tools (WIQD) to add continuous integration and continuous delivery (CI/CD) checks to your Microsoft 365 Copilot plugin project. This article separates inexpensive pull-request checks from authenticated candidate testing and approved release submission.

This guide is for developers integrating WIQD into an existing CI/CD system. It documents the requirements and command sequences, not how to set up a full CI/CD environment. You are expected to configure your system's jobs, triggers, runners, secrets, approvals, and artifact handling, and integrate the examples into that system. Before you begin, prepare the runner, environments, and credentials listed in [Prerequisites](#prerequisites).

The release destination is your tenant's organization app catalog, where an administrator approves submitted plugins before users can discover them. Direct sharing is a separate distribution method. This workflow doesn't automate administrator approval or public-store publication through Partner Center.

## Prerequisites

To run the WIQD commands in your existing pipelines or workflows, ensure you have:

- A source-controlled WIQD plugin project with its lifecycle files, component tests, and non-secret environment configuration. See [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/).
- An existing CI/CD system with source checkout, runners, protected secrets, and release approval controls. You know how to configure jobs, triggers, and artifact handling in that system.
- Node.js 24.15.0 or later and an exact approved WIQD release on the runner. Follow the [WIQD installation instructions](https://microsoft.github.io/wiqd/getting-started/installation/), and record the installed version with `wiqd --version`.
- PowerShell 7 to use the command examples in this article.
- A configured WIQD environment for tenant-backed commands. Follow [WIQD environment configuration](https://microsoft.github.io/wiqd/concepts/environments/) to prepare the environment files. Separate testing and production environments or Microsoft 365 tenants are optional, not prerequisites. `dev`, `staging`, and `prod` are conventional names, not guarantees about the tenant or deployment scope.
- A Microsoft 365 identity authorized for the selected provisioning, deep-validation, and publishing operations, with the required delegated consent. Grant only the permissions needed by those operations, as listed in the [WIQD consent and resource limits](https://microsoft.github.io/wiqd/getting-started/ci-cd-authentication/#consent-and-resource-limits).
- For declarative-agent evaluations, a provisioned target, a reviewed prompts file, an approved quality threshold, and separately configured evaluation authentication and EULA acceptance. Follow the [WIQD agent evaluation guide](https://microsoft.github.io/wiqd/extensions/provided/eval/) for detailed setup and requirements. Agent evaluation isn't required for plugins without agents, such as skill-only or tool-only plugins; keep their applicable component and target-experience tests.

Follow your CI/CD provider's documentation for platform setup and workflow authoring. For example, see [Create your first Azure pipeline](/azure/devops/pipelines/create-first-pipeline?view=azure-devops) or [Implement GitHub Actions](/training/modules/implement-github-actions/).

## Choose the pipeline scenarios

Configure separate jobs so that untrusted changes can't access deployment credentials or submit a release.

| Scenario | When to run | WIQD operations | Gate |
|---|---|---|---|
| Pull-request validation | When a pull request is opened and after each update to its proposed changes | Offline plugin validation; optional offline publishing readiness | Static checks pass, with their coverage limits recorded |
| Candidate build and testing | Approved changes on a trusted branch, or an authorized manual run | Provision the plugin in the selected environment, package, deep-validate, test, and evaluate applicable agents | Package, component, experience, and quality checks pass |
| Release submission | Approved candidate and release authorization | Confirm the release configuration and validated package, then publish to the organization app catalog | Successful submission followed by administrator approval and rollout verification |

Keep your project's component build and tests. WIQD doesn't provide a universal compile command for every plugin or update the remote services your plugin references.

If you adapt the [WIQD pipeline setup guide](https://microsoft.github.io/wiqd/getting-started/ci-cd-pipelines/) to a plugin project, use this article's `wiqd plugin` command sequences. That guide's `wiqd agent` lifecycle examples target agent projects, not standalone plugin projects.

## Add inexpensive pull request checks

Run offline validation without Microsoft 365 credentials. These checks don't provision resources, invoke an agent, or submit anything to the registry.

To add a static check to an existing job:

1. Check out the proposed source and install the approved WIQD release.
1. Run your project's applicable component tests.
1. Run the following WIQD step, replacing `.\plugins\contoso` with your project path and `dev` with the intended environment context.
1. Require native exit success and a JSON success envelope before the job can pass.

This GitHub Actions step checks the declarative-agent source surface in a standalone plugin project:

```yaml
- name: Validate plugin source
  shell: pwsh
  run: |
    $ErrorActionPreference = 'Stop'
    $PSNativeCommandUseErrorActionPreference = $false
    $text = wiqd plugin validate --path .\plugins\contoso --env dev --mode static --json
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
    $result = ($text -join "`n") | ConvertFrom-Json
    if ($result.status -cne 'success') { throw 'Plugin source validation failed.' }
```

The same PowerShell body can run in an Azure Pipelines `pwsh:` step. Don't inject lifecycle or evaluation credentials into either provider's untrusted pull request job.

Static validation covers declarative-agent manifests and referenced API-plugin or OpenAPI files. It doesn't validate the top-level app manifest, standalone skill content, or root connector declarations. A skill-only or connector-only plugin can pass because no declarative-agent checks apply, not because every component is valid.

For an additional offline publishing-readiness check, run the following command and apply the same exit-code and JSON checks:

```powershell
wiqd plugin publish --path .\plugins\contoso --env dev --dry-run --no-runtime --no-network --json
```

This check doesn't submit the plugin. Runtime and network checks are disabled, and declarative-agent phases are skipped when no agent is present. Neither offline check replaces package-first deep validation or tests in the target Microsoft 365 experience.

## Configure authentication for trusted jobs

Provisioning, deep validation, and publishing require credentials that the pull request job doesn't have. Review the documented authentication modes with your tenant administrator, confirm support in your selected WIQD release, and then inject credentials only into trusted steps.

> [!WARNING]
> Don't use username/password authentication. Use refresh-token mode once support in your selected WIQD release is confirmed. Use password mode only when your organization's security policy explicitly permits it. Don't weaken MFA or Conditional Access requirements to make the pipeline succeed. Refresh tokens are also sensitive credentials and require protected storage and restricted access.

> [!IMPORTANT]
> The [WIQD pipeline authentication guide](https://microsoft.github.io/wiqd/getting-started/ci-cd-authentication/#refresh-token-mode) marks refresh-token authentication as not yet released or fully validated. The refresh-token examples are integration guidance, not a confirmed production-ready authentication path. Confirm release availability, security approval, and live consent and operation checks for the exact WIQD version selected before using these examples.

| Mode | Required process inputs | Inputs to remove |
|---|---|---|
| Refresh token | `CI_ENABLED=true`, a tenant GUID in `M365_TENANT_ID`, and protected `M365_REFRESH_TOKEN` | Remove both `M365_ACCOUNT_NAME` and `M365_ACCOUNT_PASSWORD`, even empty definitions |
| Username and password | `CI_ENABLED=true`, protected `M365_ACCOUNT_NAME`, and protected `M365_ACCOUNT_PASSWORD` | Remove `M365_REFRESH_TOKEN`; `M365_TENANT_ID` is optional in this mode |

For refresh-token authentication:

1. Follow the private, local bootstrap procedure in [WIQD pipeline authentication](https://microsoft.github.io/wiqd/getting-started/ci-cd-authentication/).
1. Put the resulting token directly into your approved pipeline secret store. Don't commit it, pass it as a command argument, or include it in logs or artifacts.
1. Map the tenant and token into the trusted command process.
1. Verify the selected WIQD release, identity, runner, and required operations in a controlled run before enabling release submission.

For a trusted GitHub Actions step, use these environment bindings:

```yaml
env:
  CI_ENABLED: 'true'
  M365_TENANT_ID: ${{ vars.M365_TENANT_ID }}
  M365_REFRESH_TOKEN: ${{ secrets.M365_REFRESH_TOKEN }}
```

Azure Pipelines requires explicit `env` mapping for secret variables. Use these bindings and reject unresolved `$(NAME)` macros before invoking WIQD:

```yaml
env:
  CI_ENABLED: 'true'
  M365_TENANT_ID: $(M365_TENANT_ID)
  M365_REFRESH_TOKEN: $(M365_REFRESH_TOKEN)
```

These are environment bindings, not complete pipeline definitions. For both authentication modes and provider-specific checks, follow the [WIQD pipeline examples](https://microsoft.github.io/wiqd/getting-started/ci-cd-pipelines/#wire-authentication-and-commands-into-the-pipeline).

`CI_ENABLED` must be exactly lowercase `true`; generic `CI=true` isn't sufficient. Invoke lifecycle commands directly, not `wiqd auth login` in CI. These are delegated credentials, not an app-only identity, and they don't bypass MFA, Conditional Access, consent, or permissions.

WIQD doesn't rotate the pipeline secret store. When authentication requires human sign-in or consent, resolve the policy or consent issue and replace the secret through the documented local procedure. Don't switch to another identity automatically.

## Build and validate a candidate

Build and test a candidate in your selected WIQD environment before release submission. Testing can use the same tenant, environment configuration, and authorized Microsoft 365 identity as the release; a separate testing environment is optional. Keep related commands on the same project and environment state.

> [!WARNING]
> If the candidate and released plugin use the same plugin resource identity, provisioning can update resources used by existing users before catalog submission or administrator approval. Use that identity for candidate updates only when those changes are authorized and access is controlled. A separate candidate identity is optional, but isolates candidate changes from the released plugin.

To prepare a candidate:

1. Select the approved source revision and plugin package version.
1. If the selected environment is already provisioned, make its established environment state available through your approved secure persistence mechanism. Preserve all lifecycle-required values, not just the app ID. Don't restore credentials by downloading a project archive or auth cache.
1. Run component builds, tests, and offline plugin validation.
1. Provision or update the selected environment if needed for this candidate.
1. If provisioning changes inputs covered by static validation, revalidate the affected source.
1. Package the project.
1. Deep-validate the exact generated ZIP.
1. Keep the ZIP, validation result, source revision, package version, WIQD version, and environment identity with the candidate record.

The following PowerShell example covers a candidate that requires provisioning or an update to its tenant resources. Run it inside a trusted job after authentication is configured. If the selected environment is already identity-bound and no provisioning update is needed, omit the provision command. Repeat static validation only when its inputs have changed. Replace the project path and `dev` environment with your candidate configuration. The helper stops on native errors, malformed JSON, or an unsuccessful envelope.

The example writes the full validation JSON to `.artifacts\validation.json` as intermediate evidence. Restrict access and review the payload for tenant information, identifiers, URLs, and sensitive content before retaining or sharing it. Sanitize the evidence before upload; don't upload the artifact directory automatically.

```powershell
$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $false

function Invoke-WiqdJson([string[]]$Arguments) {
    $text = & wiqd @Arguments
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
    $result = ($text -join "`n") | ConvertFrom-Json
    if ($result.status -cne 'success') { throw 'WIQD operation failed.' }
    return $result
}

$project = (Resolve-Path .\plugins\contoso).Path
$environment = 'dev'
$artifactDirectory = Join-Path $PWD '.artifacts'
New-Item -ItemType Directory -Path $artifactDirectory -Force | Out-Null
$package = Join-Path $artifactDirectory 'plugin-dev.zip'
$common = @('--path', $project, '--env', $environment, '--json')

Invoke-WiqdJson (@('plugin', 'validate', '--mode', 'static') + $common) | Out-Null
Invoke-WiqdJson (@('plugin', 'provision') + $common) | Out-Null
Invoke-WiqdJson (@('plugin', 'validate', '--mode', 'static') + $common) | Out-Null
Invoke-WiqdJson (@('plugin', 'package', '--output', $package) + $common) | Out-Null
if (-not (Test-Path -LiteralPath $package -PathType Leaf)) { throw 'Package output is missing.' }
$validation = Invoke-WiqdJson (@('plugin', 'validate', '--mode', 'deep', '--package-file', $package) + $common)
$validation | ConvertTo-Json -Depth 100 | Set-Content -LiteralPath (Join-Path $artifactDirectory 'validation.json')
```

Deep validation submits the built ZIP to the platform's App Validation Library and reports its package checks. It doesn't establish runtime behavior, connection readiness, remote-service health, or Partner Center acceptance. It requires authenticated service access and isn't an offline pull-request check. Missing authentication, a service failure, or a rejected package blocks the candidate.

Provisioning normally precedes packaging because it writes the selected environment file and the `TEAMS_APP_ID` that packaging consumes. If the environment is already identity-bound and no provisioning update is needed, omit the provision command and package against that existing state. Re-provisioning uses that identity, but a fresh checkout doesn't preserve it automatically. Securely retain the stable IDs between runs; don't publish environment files, user-secret files, auth caches, or the entire workspace as artifacts.

Don't automatically retry provisioning or publishing after a timeout. Inspect the existing operation and resources before authorizing a rerun.

## Test and evaluate the deployed candidate

Test the candidate in every target experience, including its required connections, permissions, skills, and remote services. Package validation doesn't establish that every capability works at runtime.

For a plugin that includes a declarative agent, add a quality gate:

1. Identify the deployed declarative-agent component's title ID. Don't substitute the standalone plugin's catalog title ID.
1. Prepare a reviewed prompts file and acceptance threshold for representative tasks. Keep the suite unchanged when comparing the candidate with the baseline.
1. Configure the Eval CLI's Microsoft 365 agent-connection authentication and required tenant approval on the intended runner. Configure the selected judge's credentials separately, and complete the Eval CLI's required EULA consent outside CI.
1. Run `wiqd agent eval` against that deployed component and keep the result with the candidate.
1. Block release if the evaluation fails, the threshold isn't met, or the runner can't authenticate.

This example evaluates a deployed agent from the `evals\contoso` workspace. Put the reviewed prompts file at `evals\contoso\evals\prompts.json`, relative to the checkout root. The output path resolves relative to that workspace. Replace `<deployed-agent-title-id>` with the candidate component's title ID. The `0.85` threshold is an example; choose the quality bar required by your scenario.

```powershell
$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $false
$agentId = '<deployed-agent-title-id>'
$text = wiqd agent eval --path .\evals\contoso --agent-id $agentId --env dev --threshold 0.85 --output .evals\results.json --json
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
$result = ($text -join "`n") | ConvertFrom-Json
if ($result.status -cne 'success') { throw 'Agent evaluation failed.' }
```

The [WIQD Eval command reference](https://microsoft.github.io/wiqd/extensions/provided/eval/cli/) documents prompts-only workspaces and explicit agent IDs. The [Eval workflow](https://microsoft.github.io/wiqd/extensions/provided/eval/) documents threshold handling: a threshold miss and an upstream failure both return a nonzero exit, with different error codes in JSON.

Lifecycle refresh tokens don't authenticate evaluations. The Eval CLI uses its own Microsoft 365 authentication, while the judge uses separate GitHub Copilot or Azure credentials. The WIQD sources don't provide a complete unattended evaluation-credential bootstrap for arbitrary hosted runners. Qualify that setup on your runner before making it an automated gate; if it can't run unattended, require an authorized evaluation and its evidence rather than treating a skipped run as success.

`wiqd agent eval` isn't a whole-plugin evaluator and doesn't evaluate standalone skills, root connectors, or custom engine agents. For those capabilities, keep the component and target-experience tests required by [Validate and test your plugin](validate-plugin.md).

If testers need direct access, authorize the audience explicitly and follow [WIQD plugin sharing](https://microsoft.github.io/wiqd/cli/reference/#wiqd-plugin-share). Sharing requires `AGENT_SCOPE=shared` in the selected environment file and a corresponding shared deployment; naming an environment `dev` doesn't establish that scope. Don't relabel a personal deployment or copy its IDs to bypass the sharing requirement.

## Submit an approved update to the organization app catalog

Use a protected release job to submit an update to the organization app catalog. Candidate testing doesn't authorize production mutation or administrator approval.

To release an update:

1. Approve the candidate source revision, package version, validation results, evaluation evidence where applicable, and intended production audience.
1. Make the release target's established environment state available to the job. Preserve its existing plugin identity for an update rather than creating a new app registration on each run.
1. If the release uses a different environment configuration or plugin resource identity from the tested candidate, repeat the affected provisioning, packaging, validation, and tests for that target.
1. If only the authenticated Microsoft 365 identity changes, verify its tenant, delegated consent, permissions, and access to the required operations. An authentication-identity change alone doesn't require rebuilding the package.
1. Confirm that the package and deployment for the release target pass the applicable tests. If the effective configuration, package, and deployment state haven't changed, reuse the candidate evidence without repeating target validation.
1. Submit the provisioned project for the release target through WIQD and record the result.
1. Hand the submission to the administrator for approval, then verify the updated app-catalog entry, package version, availability, and user experience.

After validating the release target and authorizing submission, this command publishes the selected project's plugin to the organization app catalog. `prod` is an example environment name; use your configured release environment, which can be the same environment used for candidate testing.

```powershell
$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $false
$text = wiqd plugin publish --path .\plugins\contoso --env prod --json
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
$result = ($text -join "`n") | ConvertFrom-Json
if ($result.status -cne 'success') { throw 'Plugin submission failed.' }
```

Keep the publishing result with the release record.

`wiqd plugin publish` accepts a project and environment, not a previously built ZIP through `--package-file`. Deep-validating a captured ZIP doesn't prove that publishing submits those exact bytes. Keep the approved source and environment state fixed, qualify the publishing behavior of your pinned WIQD release, and verify the resulting submitted version. Don't describe this as an immutable ZIP-promotion workflow.

The [WIQD plugin guide](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/#validation-as-a-first-class-step) distinguishes these outcomes:

| Operation | Outcome | Remaining action |
|---|---|---|
| `wiqd plugin publish` | Submission to the tenant organization app catalog | Administrator approval before users can discover the plugin |
| `wiqd plugin share` | Direct access for named users or the tenant | Verify the authorized audience, installation, and connections |
| `wiqd plugin package` followed by Partner Center submission | Package prepared for a public-store process | Partner Center submission, certification, and publication aren't automated by WIQD |

WIQD doesn't document a plugin registry slot-promotion or rollback command. Establish the supported replacement or recovery procedure before release, and don't assume a package update restores separately operated services or permissions. Follow [Improve and update your plugin](improve-plugin.md) for rollout verification and recovery planning.

## Retain evidence and clean up candidates

Keep the evidence needed to trace an approved update without exposing tenant credentials or evaluation data to unauthorized readers.

1. Retain the approved source revision, WIQD release, package identities and versions, sanitized validation and evaluation results, and publishing status.
1. Restrict evaluation-result access because prompts and responses can contain organizational data.
1. Verify the production update before removing a candidate deployment.
1. If a temporary candidate has a separate resource identity and is no longer needed, authorize its deletion explicitly. Use the documented [WIQD plugin delete command](https://microsoft.github.io/wiqd/cli/reference/#wiqd-plugin-delete) only for that candidate's environment and identity.

Don't make destructive cleanup an unconditional pipeline stage or delete the released plugin's identity as part of candidate cleanup. If testing and release use the same identity, don't delete it as a temporary candidate.

## Related content

- [WIQD pipeline setup and authentication](https://microsoft.github.io/wiqd/getting-started/ci-cd-pipelines/)
- [Package your Microsoft 365 Copilot plugin](package-plugin.md)
- [Work IQ Dev Tools plugin sharing](https://microsoft.github.io/wiqd/cli/reference/#wiqd-plugin-share)
- [Publish or share your Microsoft 365 Copilot plugin](publish.md)
- [Publish your plugin to your organization](publish-plugin-organization.md)
- [Make your plugin available and govern access](govern-plugins.md)
