---
title: Test and validate your plugin for Microsoft 365 Copilot
description: Validate one exact plugin package, prove its installed version and runtime behavior, and retain access and regression evidence.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/13/2026
ai-usage: ai-assisted
ms.topic: how-to
---

# Test and validate your plugin for Microsoft 365 Copilot

Test the exact versioned artifact produced by [Create the plugin package](package-plugin.md). In **Package & test**, connect the component evidence to that ZIP, install it through a supported route, and verify the delivered version, access, and real runtime behavior in every claimed Microsoft experience.

Finish with this evidence: "I tested these components, packaged these exact references, installed this exact version, ran these scenarios, and kept these results." A successful schema check, provision command, or plausible response doesn't establish that chain.

## Before you begin

Have:

- Completed [component and integration tests](integrate-test-plugin-components.md), including known test data and expected results.
- The candidate ZIP, its package identity/version, and the component versions, endpoints, and connection references it contains.
- A development tenant, nonproduction data, an installation route supported for the package's components, and permission to use it.
- Test identities for permitted and restricted users; an authorized administrator for availability and blocking tests.
- Required licenses, sign-in, consent, connections, and external services for each target experience.
- A [test record](integrate-test-plugin-components.md#record-integration-results) for each scenario and identity.

Before testing, define the required package, installation, access, and runtime checks and the evidence that will establish each result. Use the [component-specific evidence criteria](integrate-test-plugin-components.md#how-to-judge-a-result) for runtime claims and the installation evidence described in [Confirm the delivered version](#confirm-the-delivered-version).

Get approval before uploading a package, installing it, granting consent, sharing it, or changing administration settings. These procedures change tenant state; use controlled test identities and audiences.

## Validate schemas and component references

Open the candidate ZIP without modifying it. Read its root `manifest.json`, recording `id`, `version`, and `manifestVersion`. Confirm that:

- The manifest uses the [Microsoft 365 app manifest schema](/microsoft-365/extensibility/schema/) required by your route.
- Included agent definitions and action manifests use their applicable schemas. An [API plugin manifest](plugin-manifest-2.4.md) describes an agent action, not the outer registry plugin.
- Referenced skill folders, companion files, icons, and tool descriptions exist at their declared package paths.
- Versions, identifiers, endpoints, and connection references match the component test records and intended environment.
- No credentials, secrets, logs, or unrelated test files are included.

For [Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/installation/), use the documented CLI prerequisites, including Node.js 24.15+, npm, and PowerShell 7+ for these Windows examples. An optional offline source check in the existing project is:

```powershell
wiqd plugin validate --mode source --env "<test-environment>"
```

**Verify:** Applicable source checks pass and skipped or uncovered capabilities are recorded.

Source mode checks saved declarative-agent diagnostics and basic project guards. It doesn't fully validate the app schema, skill content, root `agentConnectors[]`, or referenced API/OpenAPI content. A skill-only or connector-only project can have no applicable agent checks. Use `source` explicitly: the default mode is package validation, not an offline check.

## Validate the exact package

Select one ZIP file explicitly rather than relying on a build directory with multiple candidates. In PowerShell, replace the example path with your artifact:

```powershell
$packageFile = (Resolve-Path '.\appPackage\build\<candidate>.zip').Path
Get-FileHash -LiteralPath $packageFile -Algorithm SHA256
```

**Verify:** The resolved file is the intended candidate. Optionally retain the [locally calculated hash](/powershell/module/microsoft.powershell.utility/get-filehash) to detect subsequent changes; a local hash doesn't prove which bytes the host executes.

1. Before an authenticated validation, sign in with the intended Microsoft 365 identity:

   ```powershell
   wiqd auth login --interactive
   wiqd doctor
   ```

   **Verify:** Authentication and readiness checks succeed for the intended tenant.

1. With approval to upload this ZIP file to the platform validation service, run:

   ```powershell
   wiqd plugin validate --mode package --package-file "$packageFile"
   ```

   **Verify:** Findings for this exact ZIP file satisfy the required checks; retain the returned immutable JSON and HTML reports.

1. If your publishing route requires the additional marketplace policy and evidence checks, run:

   ```powershell
   wiqd plugin validate --mode marketplace --package-file "$packageFile"
   ```

   **Verify:** Required package, policy, and evidence checks pass, with no missing required evidence.

Both `package` and `marketplace` use the built ZIP file, upload it, and can require sign-in. They don't build it or sign in automatically. They also accept a ZIP file without its source project. Marketplace mode adds policy and evidence checks. Its report isn't official Store or Partner Center approval. Follow the current [WIQD validation contract](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/#validation-as-a-first-class-step), not the obsolete `deep`, `static`, or `manifest` mode names.

Read findings, coverage, skipped checks, and required evidence, not just the command's exit result. For a supported Agents Toolkit package route, use **Validate app package using validation rules** or `atk validate --app-package-file-path <path>` as documented in [Validate your app](/microsoftteams/platform/toolkit/teamsfx-preview-and-customize-app-manifest?context=/microsoft-365/copilot/extensibility/context#validate-your-app).

If anything changes in the ZIP file, create a new candidate and repeat validation. Remote service changes require relevant runtime retesting even when the ZIP file is unchanged.

## Install or sideload the package

Use a route that accepts your native Microsoft 365 app package and supports its components. A WIQD provisioning installation and testing link identifies a deployment; opening it doesn't establish that your final validated ZIP was installed.

### Personal exact-ZIP installation

Follow the [Cowork personal sideloading procedure](/copilot/cowork/cowork-plugin-development#step-7-test) for CLI installation, authentication, and package installation when that package and target experience are supported. Pass the exact file selected in [Validate the exact package](#validate-the-exact-package), using `$packageFile` as the value of `--file-path` and `Personal` as the scope.

**Verify:** Installation succeeds for the intended account. Save the returned `TitleId` and `AppId` alongside the package identity/version and installer output. In the supported experience, confirm that the installed plugin exposes the expected components and identity and that required connections are complete.

If policy disables the personal route or the route is unsupported for the candidate, use an approved compatible route rather than changing security controls.

### Cowork package upload

For a supported Cowork package, follow [Upload a plugin package](/copilot/cowork/cowork-customize#upload-a-plugin-package) and its sharing guidance. Choose the exact validated native Microsoft 365 ZIP file and limit access to the test identity or an explicitly authorized test audience. Follow [Use plugins with Cowork](/copilot/cowork/cowork-plugins) to enable the plugin and complete required connections in a new conversation.

**Verify:** The selected file and displayed plugin identity match the candidate record. The plugin is installed for the intended identity, expected skills and connector status appear, and protected operations use the intended connected account.

Foreign-format uploads can be converted automatically. Such a conversion isn't proof that your original Microsoft 365 ZIP was tested unchanged. Re-establish the artifact and validation evidence if the route transforms it.

### Confirm the delivered version

Keep an installation record that links the exact selected ZIP and its manifest `id` and `version` to the successful installation, intended account, and returned installation identities. For the documented personal sideloading route, retain the command with its resolved file path, the candidate's manifest metadata, and the installer output containing `TitleId` and `AppId`. For a supported native Cowork upload, retain the selected-file and successful upload/installation record with the displayed plugin identity and test account.

Use that chain as the installation evidence for the tested candidate. Correlate any version metadata exposed by the host or administration route with the candidate, and investigate mismatches before testing. Record installation evidence separately from invocation.

The cited personal installation steps don't document a universal installed-version query or server-side package hash. Neither is required by this procedure: the installation record establishes which candidate was submitted and successfully installed, not an independent verification of the bytes the host executes. If your release criteria require independent host-side version or byte verification, obtain that evidence; its absence remains **Unverified** and blocks that release claim. A provisioning link, plugin name, successful response, or local hash alone doesn't establish the installation chain.

For an administrator-managed candidate, follow the current [registry upload and installation procedure](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#upload-plugins-or-skills), scope the test users, and retain the accepted artifact and installation record. If the route accepts a different artifact type or can't establish its relationship to the validated ZIP, treat the artifact-binding check as unverified, not equivalent.

## Test the packaged plugin

Repeat the [complete integration scenarios](integrate-test-plugin-components.md#test-complete-user-scenarios) with the installed candidate, not the earlier development deployment:

1. Start a new conversation in each claimed experience. Use the same identity role, known record, input, and expected result as the component tests.

   **Verify:** The intended installed component is selected.

1. Collect the [component-specific evidence](integrate-test-plugin-components.md#how-to-judge-a-result). For remote calls, correlate authenticated service logs with the request, inputs, and returned data.

   **Verify:** Host evidence identifies the selected or loaded skill where applicable. Required tool calls have correlated invocation evidence, and their returned data contributes to the response.

1. Inspect output files and citations. Repeat the applicable [failure and boundary cases](integrate-test-plugin-components.md#test-failures-and-boundaries).

   **Verify:** Correctness, access boundaries, approvals, and failure behavior meet the predefined criteria.

For release-note skills, reuse `Added CSV export; Fixed duplicate rows; Updated help text.` Check Features, Fixes, Other, and promised files. For an MCP lookup, compare the exact title, status, and URL of the known issue with service logs. Use the [component-specific evidence tools](integrate-test-plugin-components.md#verify-components-in-the-integrated-scenario); an agent diagnostic route alone doesn't establish that a standalone installed plugin ran.

Keep correctness and invocation results separate. Missing evidence for a required check remains **Unverified**. Record unavailable additional diagnostics as limitations, not as verified execution details or automatic failures. Repeat discovery, connection, selection, and runtime tests separately in Chat and Cowork when claiming both.

## Test authentication and access

Have an authorized administrator prepare controlled test settings through [Set plugin availability for users](deploy-plugin.md#set-plugin-availability-for-users) and [Manage plugins, skills, and MCP servers](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers). Record original settings and restore them after the approved test. Use the same harmless lookup, or an equivalent scenario your plugin supports. For an inapplicable check, such as service consent in a skill-only scenario, record the reason rather than adding a capability.

| Test | Setup and action | Expected result |
| --- | --- | --- |
| Permitted user | Include the test identity in the approved audience. Sign in as that user and complete required consent/connections. | The supported scenario succeeds within that user's source permissions; invocation evidence identifies the expected capability. |
| Restricted user | Restrict availability to the approved audience, then test with an account outside that audience. | The user can't use the plugin. In the Copilot channel, the listing can remain discoverable as blocked; eligible users can request access. Visibility alone isn't a failure. |
| Denied consent | Use a test identity/connection without an existing grant. Decline the operation's required consent and retry the protected lookup. | The operation doesn't gain the requested protected access. Record the sign-in/consent error and ensure no protected result is presented as success. Unrelated permitted capabilities can still work. |
| Block and unblock | Have the administrator follow [Block a plugin or skill](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#block-a-plugin-or-skill) for the candidate. Repeat the request with a previously permitted user, then have the administrator select **Unblock** for the plugin and repeat the request again. | While blocked, the plugin and dependent agents can't be used. Associated MCP servers/connectors remain available to other plugins. After unblocking, the previously permitted user can use the plugin again, subject to the original availability, permission, and connection requirements. |

[Publisher-category restrictions](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#manage-plugin-availability-at-the-organization-level) are separate controls. If testing one, record the category and its policy result; don't change organization-wide settings merely to test one candidate. Test sign-in renewal/reconnection, source permissions, and missing connections where applicable.

For Microsoft Entra authorization-code authentication, [denied consent returns an authorization error](/entra/identity-platform/v2-oauth2-auth-code-flow#error-codes-for-authorization-endpoint-errors); use the actual provider error rather than expecting identical wording in every host.

## Test supported experiences

Record a result per experience, identity role, and scenario, including installation and delivered-version evidence. A pass in Cowork doesn't establish a pass in Chat or another host. Use the supported route for each; unresolved installation or version evidence prevents a release claim for that experience.

## Record agent-quality results

If an agent is included and your release criteria require quality evaluation, evaluate the corresponding deployed version and link its results to the candidate record. Start with [Agent evaluation overview](evaluation-overview.md). Quality scores don't replace package, installed-version, access, or invocation evidence.

## Repeat regression tests for a candidate

Rerun the recorded baseline scenarios, access tests, failure cases, and any required agent evaluation against the installed candidate. Add change-specific cases without removing the baseline. Retain both sets of [test records](integrate-test-plugin-components.md#record-integration-results), compare the results, and resolve regressions or required **Unverified** checks before approval.

For baseline preparation and the update lifecycle, including publishing, rollout, replacement, and rollback decisions, follow [Monitor, update, and retire your plugin or agent](improve-plugin.md). Don't assume automatic upgrades, preserved assignments, or a particular re-consent trigger. After rollout, repeat delivered-version and runtime verification.

## Determine release readiness

Complete the shared [test record](integrate-test-plugin-components.md#record-integration-results) with the package identity and version, exact ZIP file and optional hash, component versions and endpoints, environment, test identity role, scenario, expected and actual results, sanitized invocation evidence, status, and owner. Attach validation reports and installation and version evidence.

Assign one result:

- **Ready** - The exact candidate passed all required checks with complete evidence and no unresolved release blocker.
- **Blocked** - A required check failed or remains unverified, including artifact binding, delivered version, access, or invocation.
- **Ready with limitations** - Required checks passed; remaining nonblocking limitations are documented, accepted, and suitable for disclosure.

Apply the required checks and evidence criteria defined before testing. An accepted diagnostic limitation can't turn missing required evidence into a pass; additional diagnostics aren't mandatory when the required checks already have sufficient evidence. For each blocker, record an owner and resolution. Create a new candidate when the artifact changes, reinstall it, and repeat affected and regression tests.

## Related content

- [Create the plugin package](package-plugin.md)
- [Test your plugin components together](integrate-test-plugin-components.md)
- [Monitor, update, and retire your plugin or agent](improve-plugin.md)

## Next step

When required evidence is complete, continue to **Publish & distribute**:

> [!div class="nextstepaction"]
> [Publish and distribute your plugin](publish.md)
