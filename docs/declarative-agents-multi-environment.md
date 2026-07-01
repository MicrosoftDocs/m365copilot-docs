---
title: Manage environments and versions for declarative agents
description: Learn how to use environment files in the Microsoft 365 Agents Toolkit to deploy declarative agents across multiple environments and agent versions simultaneously.
author: sebastienlevert
ms.author: slevert
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 06/29/2026
---

# Manage environments and versions for declarative agents

As your declarative agent matures, you need to deploy it to multiple environments—development, staging, and production—and eventually run parallel versions so you can pilot new capabilities without disrupting existing users. Maintaining a separate set of manifest files for every environment and version combination doesn't scale.

The Microsoft 365 Agents Toolkit addresses both requirements, target environment and agent version, with the same mechanism: environment files. By defining one `.env.*` file per deployment target and using `${{VAR_NAME}}` placeholders throughout your manifest, declarative agent file, and `m365agents.yml`, you can provision any environment or version with a single command—`atk provision --env <target>`—without duplicating a single file.

## Two axes, one system

Environment management for declarative agents has two dimensions:

- **Target environments**: The same agent deployed to different tenants or app registrations—development, staging, production, or customer-specific tenants.
- **Agent versions**: Multiple variants of the same agent running in parallel—for example, v1 stable, v2 preview, or an experimental branch.

Both dimensions are handled the same way. You define an environment file for each deployment target, and the `${{VAR_NAME}}` placeholders in your manifest, declarative agent file, and `m365agents.yml` resolve at provision time.

## Model target environments

Most teams deploy to at least two environments—development and production—and many add a staging environment between them. Create one file per environment in the `env/` folder:

```text
env/
├── .env.dev
├── .env.dev.user
├── .env.staging
├── .env.staging.user
├── .env.prod
└── .env.prod.user
```

Each file defines the same variable names with environment-specific values:

```text
# env/.env.staging
TEAMS_APP_ID=33333333-3333-3333-3333-333333333333
AAD_CLIENT_ID=44444444-4444-4444-4444-444444444444
API_BASE_URL=https://api-staging.contoso.com
SHAREPOINT_SITE_URL=https://contoso.sharepoint.com/sites/hr-staging
AGENT_DISPLAY_NAME=HR Onboarding Buddy (Staging)
TEAMSFX_ENV=staging
```

> [!TIP]
> Include the environment name in the agent's display name for non-production tenants. For example, "HR Onboarding Buddy (Staging)" makes it immediately clear to testers which version they're using, which helps avoid confusion when reporting issues.

To target a different environment, pass the `--env` flag to each Agents Toolkit command:

```console
atk provision --env staging
atk deploy --env staging
atk publish --env staging
```

## Model multiple versions

Agent versions follow the same pattern as target environments. Each version is a deployment target with its own environment file. To deploy a version 2 (v2) agent alongside a version 1 (v1) agent in the same production tenant, add a `prod-v2` environment:

```text
env/
├── .env.dev
├── .env.staging
├── .env.prod          # v1, the stable one
├── .env.prod-v2       # v2, running side by side
└── ...corresponding .user files
```

Give `.env.prod-v2` a unique Teams app ID so both agents can coexist in the same tenant:

```text
# env/.env.prod-v2
TEAMS_APP_ID=55555555-5555-5555-5555-555555555555
AAD_CLIENT_ID=22222222-2222-2222-2222-222222222222
API_BASE_URL=https://api.contoso.com
SHAREPOINT_SITE_URL=https://contoso.sharepoint.com/sites/hr
AGENT_DISPLAY_NAME=HR Onboarding Buddy (Preview)
AGENT_VERSION=2.0.0
TEAMSFX_ENV=prod-v2
```

Use variables in your manifest for any value that differs between versions:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/teams/v1.24/MicrosoftTeams.schema.json",
  "manifestVersion": "1.24",
  "id": "${{TEAMS_APP_ID}}",
  "version": "${{AGENT_VERSION}}",
  "name": {
    "short": "${{AGENT_DISPLAY_NAME}}",
    "full": "${{AGENT_DISPLAY_NAME}} - Contoso"
  },
  "developer": {
    "name": "Contoso",
    "websiteUrl": "${{API_BASE_URL}}"
  },
  "copilotAgents": {
    "declarativeAgents": [
      {
        "id": "declarativeAgent",
        "file": "declarativeAgent.json"
      }
    ]
  }
}
```

The result is one manifest file that produces two distinct installable apps in the same tenant. Users who received the preview install see v2; all other users remain on v1.

> [!NOTE]
> The Teams app ID is the key to this pattern. The platform treats apps with different IDs as separate installations, regardless of how much code they share. This separation also enables A/B testing of agent personas without any impact on production users.

## Branch the agent definition itself

When version differences extend beyond variable values (for example, different instructions, a new capability, or a different set of plugins), you have two options for branching the agent definition itself.

**Option A**: Keep a single `declarativeAgent.json` and use variables for the values that differ. This approach works well when the differences are minor, such as a different instructions paragraph or a different SharePoint site URL.

**Option B**: Maintain a separate declarative agent file per version and reference it through a variable in the Teams app manifest:

```json
{
  "copilotAgents": {
    "declarativeAgents": [
      {
        "id": "declarativeAgent",
        "file": "declarativeAgent.${{AGENT_VARIANT}}.json"
      }
    ]
  }
}
```

In `m365agents.yml`, configure the package step to include `${{TEAMSFX_ENV}}` in the output artifact name so each environment produces a distinct zip file:

```yaml
provision:
  - uses: teamsApp/zipAppPackage
    with:
      manifestPath: ./appPackage/manifest.json
      outputZipPath: ./appPackage/build/appPackage.${{TEAMSFX_ENV}}.zip
      outputFolder: ./appPackage/build
```

When `AGENT_VARIANT=v1`, the build resolves to `declarativeAgent.v1.json`. When `AGENT_VARIANT=v2`, it resolves to `declarativeAgent.v2.json`. Both files are stored in the repository and reviewed in pull requests like any other source file, with no feature flags required.

Because the output zip path includes `${{TEAMSFX_ENV}}`, each environment produces a uniquely named artifact. For example, `appPackage.prod.zip` and `appPackage.prod-v2.zip` are written independently to `./appPackage/build/` and never overwrite each other.

## Automate deployments with CI/CD

To scale this pattern across all environments, use a matrix in GitHub Actions or Azure DevOps to provision each environment from a single workflow:

```yaml
strategy:
  matrix:
    include:
      - target: dev
        secret_name: AAD_SECRET_DEV
      - target: staging
        secret_name: AAD_SECRET_STAGING
      - target: prod
        secret_name: AAD_SECRET_PROD
      - target: prod-v2
        secret_name: AAD_SECRET_PROD_V2
steps:
  - uses: actions/checkout@v4
  - run: npm install -g @microsoft/m365agentstoolkit-cli
  - run: atk provision --env ${{ matrix.target }}
    env:
      SECRET_AAD_CLIENT_SECRET: ${{ secrets[matrix.secret_name] }}
  - run: atk deploy --env ${{ matrix.target }}
```

Each matrix job loads the correct `.env.*` file and retrieves its secret from the explicitly mapped GitHub secret. The explicit mapping is required because GitHub secret names only allow uppercase letters, digits, and underscores (for example, a target name like `prod-v2` can't be used directly as a secret name). With this configuration, promoting a change from staging to production becomes a workflow trigger rather than a manual step.

> [!WARNING]
> Don't store production secrets in `.env.prod`. Use `.env.prod.user` for local development and your CI/CD secret store for pipeline runs. Ensure the `.user` files are excluded by `.gitignore` and never committed. Your CI/CD pipeline should inject `SECRET_*` variables at runtime.

## Naming convention

Use the following naming convention for your environment files.

| Pattern | Description |
|---------|-------------|
| `.env.<target>` | Tenant or stage: dev, staging, prod |
| `.env.<target>-<variant>` | Version or branch within a target: prod-v2, prod-experimental |
| `.env.<target>.user` | Secrets for that target, never committed |
| `.env.local` | Agents Toolkit configuration in the project root (auto-generated during provisioning) |

This convention makes the `env/` folder self-documenting. Any team member can determine which environments exist and what each one targets.

## Benefits of this approach

Moving from one manifest per environment to one repo with many environment files changes how your team operates:

- **Parallel versions without code duplication**: Deploy v1 and v2 to the same production tenant for real-user pilots without forking your codebase.
- **Single-command promotion**: Passing `--env prod` is the complete promotion step. No file edits or manual merge steps required.
- **Consistent CI/CD across environments**: A single workflow handles every environment with identical steps, eliminating configuration drift between development and production.
- **Simplified onboarding**: A new team member can get started by filling in `.env.dev.user`. No manifest changes are required.
- **Auditable deployments**: Each environment has a single source-of-truth file. Comparing what changed between `prod` and `prod-v2` is a diff of two files.

This approach treats both target environments and agent versions as deployment targets, using the same tooling and conventions throughout.

## Related content

- [Microsoft 365 Agents Toolkit overview](/microsoftteams/platform/toolkit/agents-toolkit-fundamentals)
- [Agents Toolkit CLI reference](/microsoftteams/platform/toolkit/agents-toolkit-cli)
- [Provision and deploy with Agents Toolkit](/microsoftteams/platform/toolkit/provision)
- [Declarative agent manifest reference](declarative-agent-manifest-1.7.md)
- [Declarative agents overview](overview-declarative-agent.md)
- [Publish agents](publish.md)
