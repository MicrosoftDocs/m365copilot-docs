---
title: Choose Development Tools for Your Microsoft 365 Copilot Plugin
description: Compare Agent Builder, Work IQ Dev Tools, Microsoft 365 Agents Toolkit, Cowork, Copilot Studio, and GitHub Copilot, and choose the right development tools for your Microsoft 365 Copilot plugin.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: concept-article
---

# Choose development tools for your plugin

Building on the capabilities you selected in [Choose capabilities for your plugin](choose-plugin-components.md), select the development tools for each component. A plugin can use more than one tool. Choose tools based on the components, target experiences, authoring approach, lifecycle requirements, and current product support.

## Compare the development tools

Choose a starting point based on the authoring approach, component, and level of control you need.

| Audience or scenario | Recommended starting point |
|---|---|
| No-code builder | Agent Builder |
| Low-code maker who needs workflows and Power Platform integration | Copilot Studio |
| Pro-code developer building a supported declarative agent or an alpha plugin-package scenario with source control, terminal commands, or continuous integration | Work IQ Dev Tools (preview) |
| Pro-code developer who needs lower-level manifest, package, or command control | Microsoft 365 Agents Toolkit directly |
| Pro-code developer building a custom engine agent | Microsoft 365 Agents SDK or another supported custom-engine stack |
| Developer evaluating a deployed declarative agent | Work IQ Dev Tools for the guided workflow, or Agent Evaluations CLI directly for lower-level control |
| GitHub Copilot user | GitHub Copilot assists the selected authoring route; it doesn't own the Microsoft 365 package, publishing, or runtime |

The following matrix lists only component routes that are documented by the linked source. It isn't an exhaustive support matrix. If a combination isn't listed, confirm it in the current product documentation instead of inferring that it is supported or unsupported.

| Development tool | Documented component route | Target experience or host | Lifecycle role | Status and authoritative source |
|---|---|---|---|---|
| Agent Builder | Declarative agent | Microsoft 365 Copilot | Create, test, share, and submit an agent through the managed authoring experience | Documented route: [Agent Builder in Microsoft 365 Copilot](agent-builder.md) |
| Agent Builder | Custom skill added to an Agent Builder declarative agent | Microsoft 365 Copilot | Create or upload a reusable skill for the agent | Preview; Microsoft Frontier Program enrollment required: [Add custom skills in Agent Builder](agent-builder-add-skills.md) |
| Work IQ Dev Tools | Declarative agent project, including tool-supported API or remote MCP actions and preview agent skills | Microsoft 365 Copilot | Create, edit, validate, provision, package, publish to the organization, share, test, monitor, and evaluate the project | Preview; individual capabilities can require feature flags: [Work IQ Dev Tools documentation](https://aka.ms/wiqd/docs) |
| Work IQ Dev Tools | Microsoft 365 app package that composes a declarative agent, skill, or remote MCP connector in a documented combination | Microsoft 365 and Copilot experiences supported by the selected components and package | Create or import, compose, validate, provision, package, export, and share the plugin | The `wiqd plugin` command tree is alpha and doesn't publish to the public store: [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/) |
| Microsoft 365 Agents Toolkit | Declarative agent in a supported Microsoft 365 app package | Microsoft 365 Copilot | Create, validate, provision, package, test, and publish the app package | Documented route: [Build or reuse declarative agents](build-reuse-declarative-agents.md) |
| Microsoft 365 Agents Toolkit | Synced Copilot connector | Microsoft 365 Copilot and Microsoft Search | Build the connector, package the app, deploy the connection, and test indexed content | Documented route: [Build your first custom Copilot connector](build-your-first-connector.md) |
| Microsoft 365 Agents Toolkit | Remote MCP server used by a declarative agent | Microsoft 365 Copilot declarative agent | Add the MCP integration, package the app, and test the agent and server together | Documented route: [Build a plugin for a declarative agent from an MCP server](build-mcp-plugins.md) |
| Microsoft 365 Agents SDK | Custom engine agent | Microsoft 365 Copilot, Teams, and other supported channels | Build and host custom orchestration, models, integrations, and multi-channel agent experiences | Documented route: [Custom engine agents for Microsoft 365](overview-custom-engine-agent.md#microsoft-365-agents-sdk) |
| Cowork | Cowork plugin with supported skills and remote connectors | Copilot Cowork | Import or create, package, test, and publish the Cowork plugin | Documented route: [Build plugins for Copilot Cowork](/microsoft-365-copilot/cowork/cowork-plugin-development) |
| Copilot Studio | Agent with capabilities, knowledge, connectors, workflows, or tools supported by the selected Copilot Studio experience | Microsoft 365 Copilot through a supported Copilot Studio publishing channel | Build, test, publish, and manage the agent in the managed environment | Documented route; capability and channel support varies: [Build agents with Copilot Studio](/microsoft-copilot-studio/microsoft-365-copilot-extend-with-agents?context=/microsoft-365/copilot/extensibility/context) |
| GitHub Copilot | Code, configuration, tests, and independently hosted services used by another documented component route | Supported IDE, GitHub, or command-line development environment | Assist implementation; another tool owns the Microsoft 365 package, validation, publishing, and governance route | Development assistance, not a Microsoft 365 packaging route: [GitHub Copilot documentation](https://docs.github.com/copilot) |

The tools don't all perform the same function. An authoring or packaging tool creates the supported plugin artifacts. GitHub Copilot can assist with implementation, but it doesn't by itself choose the Microsoft 365 package, validation, publishing, or governance model.

## Agent Builder

Use the Microsoft 365 authoring experience when you need a guided way to create an agent or skill for a straightforward Microsoft 365 scenario.

Consider:

- The supported agent, skill, knowledge, and action capabilities.
- The intended users and sharing scope.
- Whether the scenario can use the managed Microsoft 365 runtime.
- Whether the solution requires advanced workflows, external integrations, or application lifecycle management.

For current Agent Builder capabilities, see [Agent Builder in Microsoft 365 Copilot](agent-builder.md). For skill support, see [Add skills with Agent Builder](agent-builder-add-skills.md).

## Work IQ Dev Tools

For pro-code declarative-agent development, start with Work IQ Dev Tools when its supported lifecycle fits your scenario. The preview tool provides a command-line and Visual Studio Code workflow for the declarative-agent lifecycle. Its separate `wiqd plugin` command tree is an alpha route for composing supported agents, skills, and remote MCP connectors in a Microsoft 365 app package.

Use Work IQ Dev Tools when you need:

- Source-controlled project files.
- Named development, staging, and production environments.
- Offline static validation, package-first deep validation, or live manifest diagnostics in Visual Studio Code.
- Terminal, JSON-output, or continuous integration workflows.
- Scriptable agent, action, skill, or alpha plugin-package configuration.
- Packaging, sharing, and organization publishing workflows supported by the selected command surface.
- Quality evaluations for a deployed declarative agent.
- Preview or experimental testing and monitoring through Work IQ DevUI or Work IQ commands.

Choose the WIQD surface that owns the task:

| Surface | Documented use | Status or boundary |
|---|---|---|
| `wiqd agent` | Create, edit, validate, provision, package, publish, share, manage collaborators, evaluate, inspect, and delete a declarative-agent project. | WIQD is in preview. Agent skills and some other capabilities require feature flags. |
| `wiqd plugin` | Create or import a Microsoft 365 app package, add supported agents, skills, or remote MCP connectors, validate, provision, package, export, share, and delete it. | The entire plugin command tree is alpha. It has no `wiqd plugin publish` command; public-store submission and administrator upload remain separate processes. |
| Work IQ Dev Tools extension for Visual Studio Code | Show Microsoft Validation Layer diagnostics, schema-aware completion, hovers, and supported quick fixes while you edit manifests. | Inner-loop static validation only; keep CLI validation in continuous integration. |
| `wiqd agent eval` | Run quality evaluations against a deployed declarative agent and produce result files or scorecards. | Applies to deployed declarative agents, not custom engine agents. |
| `wiqd agent list`, `ask`, and `monitor` | Find deployed declarative agents, send test prompts, and query the Microsoft 365 Insights Agent about usage and health. | Experimental Work IQ surface; requires Work IQ authentication. |
| `wiqd devui` | Test a deployed declarative agent in a local browser interface and inspect plugin selection, retrieval, citations, identifiers, and raw results. | Preview feature that must be enabled. |
| Copilot CLI agent `wiqd:wiqd` | Drive documented agent and plugin workflows conversationally instead of entering each WIQD command directly. | The installer includes this integration unless it is explicitly skipped. |

WIQD supports stable JSON output and documented exit codes for automation. Its trusted-pipeline authentication applies only to core lifecycle operations such as provision, publish, and share. It doesn't authenticate Work IQ monitoring, evaluations, or other extensions. See [CI/CD authentication](https://microsoft.github.io/wiqd/getting-started/ci-cd-authentication/) before you add WIQD commands to a pipeline.

Work IQ Dev Tools doesn't target custom engine agents. For custom orchestration, models, hosting, or multi-channel scenarios, use the [Microsoft 365 Agents SDK or another supported custom-engine approach](overview-custom-engine-agent.md#development-approaches-for-custom-engine-agents).

Work IQ Dev Tools is in preview, and the plugin command tree is alpha. Confirm current commands, feature flags, package requirements, and supported component types in the [Work IQ Dev Tools documentation](https://aka.ms/wiqd/docs).

## Microsoft 365 Agents Toolkit

Use Microsoft 365 Agents Toolkit directly when you need lower-level control of a supported Microsoft 365 app package or capabilities outside the supported Work IQ Dev Tools scope.

Use it when you need:

- Source-controlled project and manifest files.
- Visual Studio Code or command-line workflows.
- Import, validation, packaging, and publishing commands for a supported package route.
- Microsoft 365 app-package support for the selected agent, plugin, connector, or target experience.

Support varies by manifest schema, capability, package route, and Microsoft experience. For current tool capabilities, see [Microsoft 365 Agents Toolkit overview](/microsoftteams/platform/toolkit/overview-agents-toolkit?context=/microsoft-365/copilot/extensibility/context). For the Cowork plugin workflow, see [Build plugins for Copilot Cowork](/microsoft-365-copilot/cowork/cowork-plugin-development).

## Cowork

Cowork supports plugins packaged as Microsoft 365 app packages. Cowork plugins can include supported skills and connectors that give Cowork domain expertise and access to external data sources and APIs.

Use Cowork when:

- Cowork is a target experience for the plugin.
- The plugin uses the skills and connector models supported by Cowork.
- You need to import, create, package, or publish a Cowork plugin through its supported workflow.

For current package structure, manifest requirements, supported skill format, connector configuration, and publishing guidance, see [Build plugins for Copilot Cowork](/microsoft-365-copilot/cowork/cowork-plugin-development).

## Copilot Studio

Copilot Studio is a managed low-code environment for building AI-driven agents, workflows, and apps. Use it when the solution requires managed integrations, workflow logic, environments, governance, analytics, or enterprise lifecycle capabilities.

Consider:

- The selected Copilot Studio harness and the capabilities it supports.
- Required connectors, workflows, knowledge, tools, and external services.
- Development, test, and production environments.
- Data policies, role-based access, source control, deployment, and monitoring.
- Supported publishing destinations and target Microsoft experiences.

For current capabilities, see [Microsoft Copilot Studio documentation](/microsoft-copilot-studio/).

## GitHub Copilot

GitHub Copilot assists developers as they work with code and repositories. You can use it in supported IDEs, GitHub, or the command line to explain code, propose edits, create tests, and help implement plugin components and supporting services.

Use GitHub Copilot when:

- The plugin requires pro-code components or an independently hosted service.
- You want assistance creating skills, configuration, manifests, tests, APIs, or MCP servers.
- The implementation is maintained in a source-controlled repository.
- You use a GitHub Copilot experience or harness supported by the selected authoring environment.

GitHub Copilot doesn't replace the component-specific authoring, validation, packaging, or publishing requirements. For current capabilities, see [GitHub Copilot documentation](https://docs.github.com/copilot).

## Combine tools when required

A solution can use multiple tools. For example:

- Use Agent Builder to create an agent and GitHub Copilot to implement an external service.
- Use Work IQ Dev Tools for a source-controlled declarative-agent lifecycle and GitHub Copilot to assist with project changes and tests.
- Use Microsoft 365 Agents Toolkit to create or package a supported Microsoft 365 app and GitHub Copilot to assist with project files, services, and tests.
- Use Cowork to create the supported plugin package and another tool to build the remote connector or MCP service.
- Use Copilot Studio for an agent and managed workflow while another team maintains an external service.

For each component, identify the system of record, the owning team, and the tool that produces the artifact used in the plugin.

## Summarize your tool decisions

For each component, note the tool you'll use:

| Plugin component | Build or reuse | Development tool | Owner | Prerequisites |
|---|---|---|---|---|
| Agent, skill, connector, or MCP-based capability | Reuse, configure, extend, or build | Selected authoring or implementation tool | Accountable team or person | Access, environment, identity, service, or policy requirements |

You're ready to [build or reuse your plugin components](build-reuse-plugin.md) when:

- Every component has an implementation approach and owner.
- The selected tools support the component and target Microsoft experiences.
- Required licenses, environments, identities, permissions, and services are identified, with an owner for providing each dependency.
- Reused components are approved and accessible.
- Teams understand which tool and repository are the system of record.
- Known product, packaging, and distribution constraints are recorded.

## Related content

- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Compare tools for declarative agents](declarative-agent-tool-comparison.md)
- [Choose between Agent Builder and Copilot Studio](copilot-studio-experience.md)
- [Microsoft 365 Agents Toolkit overview](/microsoftteams/platform/toolkit/overview-agents-toolkit?context=/microsoft-365/copilot/extensibility/context)
- [Build or reuse capabilities for your plugin](build-reuse-plugin.md)
- [Set up your development environment](prerequisites.md)
