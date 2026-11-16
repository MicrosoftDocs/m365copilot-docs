---
title: Choose Development Tools for Your Microsoft 365 Copilot Plugin
description: Start with Work IQ Dev Tools, choose a documented authoring environment, and add component-specific tools only when your plugin scenario requires them.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.topic: concept-article
---

# Choose development tools for your plugin

During **Prepare**, turn your [capability choices](choose-plugin-components.md) into a build plan. Start with Work IQ Dev Tools for professional development, choose a documented environment, and add Microsoft 365 Agents Toolkit or an SDK only when the scenario needs it. You finish with a tool, source location, owner, and prerequisites for each component.

To build Copilot capabilities into an app you own, follow [Build Copilot-powered apps](apps-agents-overview.md) instead.

## Start with Work IQ Dev Tools

[Work IQ Dev Tools](https://microsoft.github.io/wiqd/) is the default professional-developer path for supported plugin scenarios. Use its guided workflow to create and compose a plugin, then validate, provision, package, and share it. Use direct CLI commands when you need repeatable execution or scripting.

Choose the command surface that owns your source:

| Your source and task | Start here | Boundary |
|---|---|---|
| A new plugin containing supported skills, plugin connectors for remote MCP servers, or an optional declarative agent | [Build a plugin with WIQD](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/) | `wiqd plugin add agent` scaffolds an agent component; it doesn't import an existing agent project. |
| An existing declarative-agent source project | [Agent component lifecycle](https://microsoft.github.io/wiqd/concepts/agent-lifecycle/) | Use the documented `wiqd agent` workflow for that project. |
| A supported Open Plugin, Claude plugin, or Cursor plugin source | [WIQD import and export](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/#import--export-interop) | Format conversion doesn't establish equivalent runtime behavior or host support. |
| A tested shared deployment for selected users | [Build a plugin with WIQD](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/) | Sharing grants access; it isn't organization catalog submission. |
| A tested plugin for the organization catalog | [Publishing and existing projects](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/#publishing-and-existing-projects) | `wiqd plugin publish` submits for administrator approval, not public Marketplace certification. |

Use explicit source validation for offline checks. The default validation mode is package validation against an existing ZIP; it can upload the package and require authentication. Neither mode replaces testing the actual capabilities in the intended experience.

## Choose your environment

The following table lists documented WIQD routes. It's not an exhaustive compatibility matrix:

| Environment | Use it for | Setup and constraints |
|---|---|---|
| GitHub Copilot CLI | Guided plugin authoring with the WIQD coding-assistant plugin | Install the host and its WIQD marketplace plugin, then start a new session. The marketplace plugin doesn't install the WIQD CLI. |
| Claude Code | Guided authoring with the WIQD plugin for that host | Follow the host-specific marketplace steps in [WIQD installation](https://microsoft.github.io/wiqd/getting-started/installation/). |
| Direct command line | Validation and repeatable plugin or agent lifecycle commands | Install the separate CLI. The installation-script route requires Node.js 24.15 or later and npm; Windows requires PowerShell 7 or later. |
| Visual Studio Code | Project editing and manifest diagnostics through the optional WIQD extension | Follow [WIQD installation](https://microsoft.github.io/wiqd/getting-started/installation/) for the current editor integration. Editor diagnostics don't replace final-package validation. |
| Trusted CI/CD pipelines | Core-backed provision, publish, and share operations, subject to the selected release's authentication limits | Follow [Plugin CI/CD guidance](plugin-ci-cd.md) and [Pipeline authentication](https://microsoft.github.io/wiqd/getting-started/ci-cd-authentication/). The [agent-project pipeline examples](https://microsoft.github.io/wiqd/getting-started/ci-cd-pipelines/) aren't a plugin-aware pipeline generator. |

For local tenant operations, sign in interactively before provisioning. For automation, use the published trusted-pipeline contract and secret storage. Don't run interactive `wiqd auth login` in CI or expose credentials to untrusted pull-request jobs. Core lifecycle authentication doesn't authenticate Work IQ queries, evaluations, or other extensions. Don't apply an agent-project command body unchanged to a plugin project.

For account, tenant, and tool prerequisites, use [Set up your development environment](prerequisites.md). A coding assistant can help author files, but it doesn't replace the component's authoring tool, runtime, permissions, or publishing requirements.

## Add component-specific tools when needed

Use these product routes when your selected component needs specific authoring or project controls. Follow the product's own procedure rather than treating the tools as interchangeable package formats.

| Requirement | Tool or product handoff |
|---|---|
| Lower-level control of a supported declarative-agent project, manifests, or integrations | [Microsoft 365 Agents Toolkit](/microsoftteams/platform/toolkit/overview-agents-toolkit?context=/microsoft-365/copilot/extensibility/context), using [JSON](build-declarative-agents.md) or [TypeSpec](build-declarative-agents-typespec.md) |
| A guided, managed declarative-agent authoring experience | [Agent Builder](agent-builder.md); use its own [skill procedure](agent-builder-add-skills.md) for supported skills |
| Managed workflows, Power Platform connectors, environments, and low-code agent logic | [Copilot Studio](/microsoft-copilot-studio/); use its [Microsoft 365 publishing channel](/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams) when applicable |
| An agent grounded in selected SharePoint sites or document libraries | [SharePoint agent guidance](/sharepoint/get-started-sharepoint-agents) and [upgrade guidance](/sharepoint/upgrade-sharepoint-agents) for the selected format |
| Skills or plugin connectors for Copilot Cowork | [Build plugins for Copilot Cowork](/copilot/cowork/cowork-plugin-development) for product-specific file, runtime, and testing requirements |
| A Copilot connector (synced) that ingests external content into Microsoft Graph | [Build your first custom Copilot connector](build-your-first-connector.md) |
| A remote MCP action in a declarative agent | [Build a plugin from an MCP server](build-mcp-plugins.md) |

Agent Builder in Copilot Studio doesn't currently support adding skills. Don't infer its capability set from the separate Agent Builder experience in Microsoft 365 Copilot. Standalone Copilot Studio agents appear in the Agent Registry, not under plugins.

For imported Cowork projects, check the current limitations in the [Cowork development guide](/copilot/cowork/cowork-plugin-development) before planning packaging or publishing.

Use an SDK on the [app path](apps-agents-overview.md) when you need your own orchestration, models, hosting, or runtime. Don't move custom engine app development into the plugin workflow just because it also uses Microsoft 365 services.

## Record the build plan

For each component, record:

- The task, intended experience, and documented component format.
- Whether you build a new component, configure existing source, or use a product-specific reuse workflow.
- The authoring tool, source repository or managed environment, and accountable owner.
- Required accounts, subscriptions, permissions, services, and test users.
- The tool that produces the artifact and the distribution method that accepts it.
- The runtime tests and evidence needed before **Package & test**.

A shared package doesn't mean an identical experience everywhere. Supported capabilities, availability and required setup vary by product, publishing route and rollout.

## Next step

Enter **Build or reuse** with [Build or reuse capabilities for your plugin](build-reuse-plugin.md). To create a new plugin, follow [Build a plugin with WIQD](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/). If you already have declarative-agent source, follow [Package an existing declarative agent as a plugin](quickstart-plugin.md).
