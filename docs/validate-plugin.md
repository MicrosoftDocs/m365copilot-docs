---
title: Test and validate your plugin for Microsoft 365 Copilot
description: Install and test the exact packaged plugin, validate access and behavior, and decide whether it's ready to publish.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: how-to
---

# Test and validate your plugin for Microsoft 365 Copilot

Validate and test the exact versioned artifact that you created in [Package your plugin](package-plugin.md). This is the third step in Package and test: validate the package, install it, and confirm its access, behavior, and supported Microsoft 365 experiences.

The components and external services referenced by the plugin must already work individually and together. This article tests the packaged plugin; it doesn't replace component-level testing or certification.

> [!IMPORTANT]
> Use the exact artifact you intend to publish. If your packaging route doesn't support your intended components and target experiences, return to [Package your plugin](package-plugin.md) and choose a supported route.

## Before you begin

Prepare:

- The exact versioned plugin package you intend to release.
- The installation or sideloading procedure for your packaging route.
- A test environment and identities with the required access.
- Representative scenarios and expected results for each target Microsoft 365 experience.

## Validate the package

Use the validation procedure for your packaging route.

| Packaging route | Validation procedure |
|---|---|
| Work IQ Dev Tools | After you create the package, use `wiqd agent validate --mode deep` to validate the resolved app package. In automated workflows, inspect the JSON `data.valid` result instead of relying only on the process exit code. See [Validation and Microsoft Validation Layer](https://microsoft.github.io/wiqd/concepts/validation-mvl/). |
| Alpha WIQD plugin package | After `wiqd plugin package` creates the artifact, run `wiqd plugin validate --mode deep`. This package-first validation checks the top-level app manifest, skills, and remote MCP connectors that static plugin validation doesn't cover. In automated workflows, inspect the structured validation result rather than relying only on the process exit code. See [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/#validation-as-a-first-class-step). |
| Microsoft 365 Agents Toolkit | Use **Validate app package using validation rules** or run `atk validate --app-package-file-path <path>`. See [Validate your app](/microsoftteams/platform/toolkit/teamsfx-preview-and-customize-app-manifest?context=/microsoft-365/copilot/extensibility/context#validate-your-app). |
| Copilot Studio | Complete the [publish and configure workflow](/microsoft-copilot-studio/microsoft-365-copilot-extend-with-agents#publish-and-configure-an-agent-for-microsoft-365-copilot) and resolve errors before you download the `.zip`. |
| Another plugin-specific workflow | Follow the validation procedure documented for that package type. |

Confirm that the generated artifact passes the requirements defined for its package type, uses the intended identity, version, and environment, and contains no credentials, secrets, test data, logs, or unrelated files.

Fix package errors, create a new package version, and repeat validation before installing it.

## Install or sideload the package

1. Use the installation or sideloading procedure for your packaging route.
1. Install the exact artifact that passed package validation.
1. Record the artifact version, test environment, identity, and installation result.
1. Confirm that the installed plugin and expected components are recognized.

If installation fails, fix the package, create a new version, reinstall it, and retest.

## Test the packaged plugin

1. Run the complete user scenarios through the installed plugin.
1. Confirm that the expected components load and the correct components are selected.
1. Test the success, failure, and recovery scenarios required by the components and Microsoft 365 experiences your plugin supports.
1. Record the expected and actual result for each scenario.

If a component fails its own requirements, return to its build or component-validation guidance. Don't redefine a component failure as a plugin-package success.

## Test authentication and access

Test:

- Sign-in, consent, token renewal, and reconnection.
- Denied access, insufficient permissions, missing connections, and unavailable services.
- Data and actions outside the user's permissions.

Record the identities, permissions, authentication, consent, connections, endpoints, and service versions tested.

## Test supported experiences

Install and test the package in every Microsoft 365 experience you intend to support. Don't infer support in one experience from results in another.

Record the experiences, environments, limitations, unsupported combinations, and accepted risks for the release.

## Evaluate agent quality when required

If the package includes an agent and agent-quality evaluation is part of the release criteria, evaluate the exact deployed version and add the results to the publishing-readiness record. Start with the [agent evaluation overview](evaluation-overview.md).

Agent evaluation measures response quality and regressions. It doesn't replace package validation, installation testing, access testing, or testing in each supported Microsoft experience.

## Determine release readiness

Assign one result:

- **Ready** - The exact plugin package passed all required checks and has no unresolved release blocker.
- **Blocked** - A package, reference, access, compatibility, or runtime failure prevents publishing.
- **Ready with limitations** - Required checks passed, and the remaining limitations are documented, accepted, and suitable for disclosure in the publishing process.

For every blocking failure, record the owner and required resolution. Fix the issue, repackage the plugin, reinstall the new artifact, and repeat the affected tests.

The plugin is ready to publish only when this exact artifact has passed the required package, installation, access, scenario, experience, and applicable agent-quality checks.

Continue to [publish and distribute the plugin](publish.md).

## Next steps

- [Package your plugin](package-plugin.md)
- [Evaluate agent quality](evaluation-overview.md)
- [Choose how to publish and distribute your plugin](publish.md)
