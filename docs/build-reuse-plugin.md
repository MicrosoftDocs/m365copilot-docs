---
title: Build or Reuse Capabilities for Your Microsoft 365 Copilot Plugin
description: Build, configure, extend, or reuse the components required by your Microsoft 365 Copilot plugin before integration and packaging.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: how-to
---

# Build or reuse capabilities for your plugin

Use the components and development tools you selected to build the capabilities your solution needs. You might configure an existing component, extend it, or create a new one.

At this stage, make sure each component can perform its intended job in a development or test environment with its required dependencies available. You'll bring the components together, test the combined solution, and create the plugin package in [Package and test](integrate-test-plugin-components.md).

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
| Declarative agent | Create or adapt its instructions, knowledge, capabilities, and connections. | [Build a declarative agent](build-reuse-declarative-agents.md) |
| Skill | Create or reuse its instructions, resources, scripts, and dependencies. | [Build or reuse a skill](build-reuse-skills.md) |
| Copilot connector | Configure access to the required external content or service and verify the intended permissions. | [Build or reuse a connector](build-reuse-connectors.md) |
| MCP server | Build or reuse a remote server and verify that its required tools or resources are available. | [Build or reuse an MCP server](build-reuse-mcp-servers.md) |

The tools and procedures differ by component. Follow the linked guidance for the component and authoring tool you chose.

## Reuse an existing component

Before you rely on an existing component, check that it still meets your requirements. Confirm that you have access, that it works in the intended environment, and that its owner supports your planned use. Configure any required identity, permissions, data access, or connections, then test it with representative scenarios.

Record its owner, version or configuration, dependencies, and any limits that could affect integration or distribution.

## Build or extend a component

Use your selected tool to implement the capability your solution requires. Configure its identities, permissions, data, services, and connections, then test its behavior with representative scenarios.

Record its owner, version, dependencies, and known limitations. If the component depends on another service or connection, verify that the dependency is available and record anything that still needs to be tested with the combined solution.

## Check your work

Before you move on, confirm that:

- Each required component performs its intended job in the development or test environment.
- The identities, permissions, data, services, connections, and other dependencies needed for those tests are available.
- You know who owns each component and how it will be updated or supported.
- You've recorded unresolved issues and integration tests still to be done.

Next, [integrate and test your components](integrate-test-plugin-components.md) in **Package and test**. That stage covers how the components work together and the validation of the assembled plugin package.

## Related content

- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Set up your development environment](prerequisites.md)
- [Microsoft 365 Copilot extensibility samples](samples.md)
