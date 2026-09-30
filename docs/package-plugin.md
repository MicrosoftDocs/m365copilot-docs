---
title: Package your plugin for Microsoft 365 Copilot
description: Choose a supported packaging path and create the exact versioned artifact you'll test.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: how-to
---

# Package your plugin for Microsoft 365 Copilot

Create the exact versioned artifact you intend to test and release. This is the second step in Package and test, after your completed components work together in the intended development or test environment.

> [!IMPORTANT]
> A `.zip` produced for an agent or Microsoft 365 app isn't automatically a plugin package for every combination of components. Use a route only when it supports the components and Microsoft 365 experiences you intend to publish.

Packaging is tool-specific. Some tools create the artifact automatically, while others require you to assemble manifests, metadata, configuration, and assets. Remote MCP servers, APIs, connector services, and other external services are referenced by the package rather than physically included in it.

## Before you begin

Complete [integration testing](integrate-test-plugin-components.md). Confirm that:

- The components are built and tested individually and together.
- Dependencies, authentication, permissions, connections, endpoints, and external services are configured.
- You know which Microsoft 365 experiences the plugin must support.
- The component versions, known limitations, and unresolved issues are recorded.

Don't use packaging to resolve an unfinished component or integration. Return to [Build or reuse](build-reuse-plugin.md) when a required component doesn't work.

## Choose your packaging path

| What did you build? | Create the package | Result |
|---|---|---|
| A declarative agent project supported by [Work IQ Dev Tools](https://microsoft.github.io/wiqd/) | Run [`wiqd agent validate`](https://microsoft.github.io/wiqd/concepts/validation-mvl/) for static project validation, then run [`wiqd agent package`](https://microsoft.github.io/wiqd/cli/reference/#wiqd-agent-package). Deep-validate the resolved package in the next step. | A deployable `.zip` for sideloading or upload. |
| An alpha WIQD plugin project that composes supported agents, skills, or remote MCP connectors | Run `wiqd plugin validate`, provision the selected environment to bind the package identity, then run `wiqd plugin package`. Deep-validate the built package in the next step. See [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/). | A deployable `.zip` for supported sharing or administrator upload. |
| A supported Microsoft 365 app-manifest project built with Microsoft 365 Agents Toolkit | Select **Zip Teams App Package** or use the `teamsApp/zipAppPackage` lifecycle action. See [Customize an app manifest in Agents Toolkit](/microsoftteams/platform/toolkit/teamsfx-preview-and-customize-app-manifest?context=/microsoft-365/copilot/extensibility/context). | `appPackage/build/appPackage.<environment>.zip`. |
| An agent for Microsoft 365 Copilot created in Copilot Studio | Select **Publish**, then use **Download as a .zip** from the availability options. See [Publish and configure an agent for Microsoft 365 Copilot](/microsoft-copilot-studio/microsoft-365-copilot-extend-with-agents#publish-and-configure-an-agent-for-microsoft-365-copilot). | A `.zip` for manual upload or submission to an administrator. |
| Components supported by another plugin-specific workflow | Follow the documented command, UI action, or automated workflow. | The installable artifact identified by that procedure. |

If a route doesn't support your intended components and target experiences, stop. Choose a supported route or revise the plugin. Don't combine or rename artifacts to create an unsupported package.

> [!NOTE]
> Static `wiqd plugin validate` checks only the declarative-agent surface and referenced API-plugin or OpenAPI files. A skill-only or connector-only plugin can pass the static check without its top-level capabilities being validated. Package-first deep validation is required to check the built app package.

## Create the package

1. Open the procedure for your selected route.
1. Select the intended environment and the exact component versions you tested.
1. Run the documented command, UI action, or automated workflow.
1. Record the artifact name, location, version, environment, and tool version.

## Check the generated artifact

Check that:

- The plugin identity and package version are correct.
- The package contains the expected manifests, metadata, configuration, and assets.
- The component declarations, files, identifiers, endpoints, and service references match the versions you tested.
- The package uses the intended environment configuration.
- Authentication, permission, consent, and connection requirements are declared without credentials, tokens, or secrets.
- The package doesn't contain temporary files, logs, test data, or unrelated artifacts.

## Record publishing readiness

Carry a publishing-readiness record into [testing and validation](validate-plugin.md), and complete it before publishing. Record:

- Package or artifact identity and exact version.
- Components, remote services, and external references.
- Packaging tool and intended publishing route.
- Tested Microsoft 365 experiences and environments.
- Authentication, permission, consent, and connection requirements.
- Validation evidence and result.
- Known limitations, unsupported combinations, and accepted risks.
- Release owner and validation date.

## Next: Test and validate your plugin

Continue to [validate and test the exact package](validate-plugin.md). Don't publish the artifact until it passes the applicable package, installation, access, scenario, experience, and agent-quality checks.
