---
title: Package your plugin for Microsoft 365 Copilot
description: Choose a supported packaging path and create the exact versioned artifact you'll test.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/16/2026
ms.topic: how-to
ai-usage: ai-assisted
ms.custom: msecd-doc-authoring-1013
---

# Package your plugin for Microsoft 365 Copilot

Create the exact versioned plugin package you intend to test and release. This step comes after the plugin's components work together in the intended development or test environment.

> [!IMPORTANT]
> A `.zip` file isn't automatically a supported plugin package. Use a packaging route only when it supports the plugin's components and the Microsoft 365 experiences you intend to publish.

This article describes the Microsoft 365 app package used by the documented [Copilot Cowork plugin workflow](/copilot/cowork/cowork-plugin-development). Some tools create the package for you; other workflows let you assemble it manually. Use the selected product's guidance for the supported components, manifest version, and publishing route. A shared package format doesn't guarantee that every product supports the same capabilities.

Remote MCP servers, APIs, and other connected services run separately. The package includes the supported declarations or references needed to connect to them, not the running services.

## Before you begin

Complete [integration testing](integrate-test-plugin-components.md). Confirm that:

- You built and tested the components individually and together.
- You configured dependencies, authentication, permissions, connections, endpoints, and external services.
- You know which Microsoft 365 experiences the plugin must support.
- You recorded the component versions, known limitations, and unresolved issues.

Don't use packaging to resolve an unfinished component or integration. Return to [Build or reuse](build-reuse-plugin.md) when a required component doesn't work.

## Understand the Microsoft 365 app package

The package is a ZIP file with `manifest.json` and the referenced icons at its root. The [Microsoft 365 app manifest schema](/microsoft-365/extensibility/schema/) defines its identity, metadata, and capability declarations.

| Package content | Purpose |
|---|---|
| `manifest.json` | Identifies the app, version, developer, names, descriptions, icons, and supported capabilities. |
| Icons | The color and outline image files referenced by the app manifest. The Cowork workflow documents `color.png` and `outline.png`. |
| Agent skills | When included, skill folders contain `SKILL.md` and supported companion files. The app manifest references the folders through `agentSkills`. |
| Remote connector configuration | When included, `agentConnectors` entries in the app manifest identify remote MCP endpoints and the applicable authorization configuration. The server itself isn't packaged. |
| Referenced component files | Include the files required by the selected components, such as a tool-description file when the connector configuration references one, or agent definitions in a supported agent package. |

For example, the Cowork documentation shows a package with this layout:

```text
manifest.json
color.png
outline.png
skills/
  contract-analysis/
    SKILL.md
    references/
      clause-taxonomy.md
tools/
  contoso-legal-tools.json
```

The skill folders are present only when the plugin includes skills. The tool-description file is needed only when referenced by the connector configuration. Follow [Build plugins for Copilot Cowork](/copilot/cowork/cowork-plugin-development) for current file, schema-version, icon, and skill requirements rather than treating the example as a template for every product.

> [!NOTE]
> The [plugin manifest schema 2.4](plugin-manifest-2.4.md) describes an API or MCP action component for a declarative agent, not the outer Microsoft 365 app package. Those actions are available only to the containing agent. Use the app manifest schema for the outer package.

## Choose a supported packaging path

| Plugin package route | Create the package | Result |
|---|---|---|
| A Work IQ Dev Tools plugin project (recommended pro-code route for supported scenarios) | Follow the documented source validation and provisioning steps for the selected environment, then run `wiqd plugin package`. See [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/). | A versioned app package to validate before sharing or publishing. |
| A plugin package built with Microsoft 365 Agents Toolkit, when the selected workflow supports the plugin's components and target experiences | Select **Zip Teams App Package** or use the `teamsApp/zipAppPackage` lifecycle action. See [Customize an app manifest in Agents Toolkit](/microsoftteams/platform/toolkit/teamsfx-preview-and-customize-app-manifest?context=/microsoft-365/copilot/extensibility/context). | The plugin package produced by the supported workflow. |
| A manually assembled Cowork plugin package | Follow the manifest, skill, connector, icon, and ZIP layout instructions in [Build plugins for Copilot Cowork](/copilot/cowork/cowork-plugin-development#assemble-a-package-by-hand). | A Microsoft 365 app package for the documented Cowork route. |

If no packaging route supports your plugin's components and target experiences, stop. Choose a supported method or revise the plugin. Don't combine or rename artifacts to create an unsupported package.

For skills used directly in Copilot Chat, package plugin-level skills through the app manifest's `agentSkills` property. This differs from the declarative agent manifest's `agent_skills` property. A standalone `SKILL.md` or skill ZIP accepted by Chat isn't a complete plugin app package. See [Package a skill in a plugin](build-copilot-chat-skills.md#package-a-skill-in-a-plugin).

To automate WIQD source checks, candidate packaging, and package-first validation, see [Configure plugin CI/CD with Work IQ Dev Tools](plugin-ci-cd.md).

> [!NOTE]
> WIQD source validation isn't full validation of the built package. Validate the exact ZIP after packaging, using the current package-validation procedure in [Test and validate your plugin](validate-plugin.md).

## Identify the package and its dependencies

Choose the intended [publishing and distribution route](publish.md) before you assemble the release artifact. For every route, identify:

- **Identity:** The app ID, package version, and component identifiers.
- **Metadata:** Names, descriptions, developer information, icons, and applicable privacy and terms links.
- **Authentication:** The identity model, supported authorization configuration, permission and consent needs, and credential references.
- **Connections:** The endpoints, connection references, and environment-specific configuration.
- **External dependencies:** Remote services, data sources, owners, and setup needed outside the package.

Put only schema-supported declarations and references in the package. Keep operational details in the publishing-readiness record, and don't include credentials or secrets.

| Distribution route | What to confirm for this package |
|---|---|
| Direct sharing for testing | The selected audience, test environment, package identity and metadata, and the authentication, connections, and external services those testers need. |
| Organization distribution | The package identity and metadata for admin review, plus authentication, connection, permission, and external-service setup needed in the organization. |
| Public distribution | The package identity and metadata for the chosen submission route, plus authentication, connections, and external dependencies that customer organizations and users must configure. |

Sharing or publishing the package doesn't complete installation, assignment, consent, or connection setup. Follow the chosen route's current requirements; this article doesn't define a submission contract.

## Create the package

1. Open the packaging procedure for your selected plugin route.
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

Bring a publishing readiness record into [testing and validation](validate-plugin.md), and complete it before publishing. Record:

- Package or artifact identity and exact version.
- Components, remote services, and external references.
- Packaging tool and intended publishing method.
- Tested Microsoft 365 experiences and environments.
- Authentication, permission, consent, and connection requirements.
- Validation evidence and result.
- Known limitations, unsupported combinations, and accepted risks.
- Release owner and validation date.

## Next step

> [!div class="nextstepaction"]
> [Test and validate your plugin](validate-plugin.md)
