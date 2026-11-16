---
title: Build or Reuse Capabilities for Your Microsoft 365 Copilot Plugin
description: Build, configure, extend, or reuse the components required by your Microsoft 365 Copilot plugin before integration and packaging.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.topic: how-to
---

# Build or reuse capabilities for your plugin

Use the components and development tools you selected to build the capabilities your solution needs. You might configure an existing component, extend it, or create a new one.

In **Build or reuse**, ensure each component can perform its intended job with its required dependencies available. Begin testing how the components work together in the target product, and record any integration work that remains.

In **Package & test**, you'll [create the package](package-plugin.md) and [validate the exact artifact](validate-plugin.md) you intend to release. Component tests don't replace package validation.

## Before you begin

For each component, confirm:

- What it needs to do and whether you'll reuse, configure, extend, or build it.
- Which development tool and environment you'll use.
- Who owns it and who can help resolve access or dependency issues.
- Which data, identities, permissions, services, and connections it needs.

Set up your [development environment](prerequisites.md) before you begin. If you still need to select a component or tool, see [Choose capabilities for your plugin](choose-plugin-components.md) or [Choose development tools for your plugin](choose-plugin-development-tools.md).

## Follow the guidance for your components

Build only the components your solution needs. Follow the linked guidance for each one.

| Component | What to do | Guidance |
|---|---|---|
| Declarative agent | Create or adapt its instructions, knowledge, capabilities, and connections, including any agent-scoped API or MCP actions. | [Build a declarative agent](build-reuse-declarative-agents.md) |
| Skill | Create or reuse its instructions, resources, scripts, and dependencies. | [Build or reuse a skill](build-reuse-skills.md) |
| Copilot connector | Configure access to the required external content or service and verify the intended permissions. | [Build or reuse a connector](build-reuse-connectors.md) |
| MCP server | Build or reuse a remote server and verify that its required tools or resources are available. | [Build or reuse an MCP server](build-reuse-mcp-servers.md) |

The tools and procedures differ by component and target product. Follow the linked component guidance, then confirm the product's supported capabilities and integration path:

- [Agent Builder](agent-builder.md) for agents built in Microsoft 365 Copilot.
- [Copilot Studio](/microsoft-copilot-studio/) for agents and integrations supported by your selected Copilot Studio experience.
- [Copilot Cowork](/copilot/cowork/cowork-plugin-development) for Cowork plugin skills and remote connectors.
- [Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/), the recommended tool for supported source-controlled declarative-agent and plugin projects. Toolkit-based walkthroughs remain available for existing projects and workflows that require them.

A connector or external service can be a dependency without being included in the plugin package. API and MCP actions within a declarative agent are available only to that agent. Don't assume that a component or integration supported by one product works in another.

## Reuse an existing component

To find an existing plugin that could meet your needs without new development, browse the [Copilot Plugin Catalog](https://aka.ms/CopilotPluginCatalog). Discovering a complete plugin is different from reusing its components or source code; a listing doesn't grant permission to reuse them.

Before you rely on an existing component, check that it still meets your requirements. Confirm that you have access, that it works in the intended environment, and that its owner supports your planned use. Configure any required identity, permissions, data access, or connections, then test it with representative scenarios.

Record its owner, version or configuration, dependencies, and any limits that could affect integration or distribution.

## Build or extend a component

Use your selected tool to implement the capability your solution requires. Configure its identities, permissions, data, services, and connections, then test its behavior with representative scenarios.

Record its owner, version, dependencies, and known limitations. If the component depends on another service or connection, verify that the dependency is available and record anything that still needs to be tested with the combined solution.

## Configure authentication and protect data

Use your component and product guidance to configure identities, authentication, permissions, consent, and connections. Start with [Plugin authentication](plugin-authentication.md) for the applicable integration path, and keep credentials and secrets out of the package.

For API or MCP action sign-in and consent failures, see [Troubleshoot plugin authentication](plugin-authentication-troubleshooting.md).

Apply the requirements you recorded in [Plan data, privacy, and security](data-privacy-security.md). Confirm which data each component can read or change, whose permissions it uses, and how it handles denied access or unavailable dependencies.

## Check integration and quality

Test representative user tasks as you build, including the handoffs between components and external services. Use [Integrate and test your plugin components](integrate-test-plugin-components.md) for end-to-end scenarios, authentication checks, and failure cases in the target product.

If your solution includes an agent, define expected responses and evaluation criteria early. Use the [Agent evaluation overview](evaluation-overview.md) to plan quality checks and regression tests. Evaluation doesn't replace security, integration, or package validation.

## Check your work

Before you move on, confirm that:

- Each required component performs its intended job in the development or test environment.
- The identities, permissions, data, services, connections, and other dependencies needed for those tests are available.
- You checked authentication, data access, and failure behavior against the solution's requirements.
- You know who owns each component and how it will be updated or supported.
- You've recorded unresolved issues and integration tests still to be done.

## Next step

> [!div class="nextstepaction"]
> [Integrate and test your plugin components](integrate-test-plugin-components.md)

After the components work together, [package your plugin](package-plugin.md) and [validate the assembled package](validate-plugin.md).

## Related content

- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Set up your development environment](prerequisites.md)
- [Microsoft 365 Copilot extensibility samples](samples.md)
