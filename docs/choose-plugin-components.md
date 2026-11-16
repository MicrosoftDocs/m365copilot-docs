---
title: Choose Capabilities for Your Microsoft 365 Copilot Plugin
description: Select the agents, skills, connectors, and MCP servers your Microsoft 365 Copilot plugin needs and decide what to build or reuse.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.topic: concept-article
---

# Choose capabilities for your plugin

Use your [plugin plan](planning-guide.md) to choose the capabilities that meet your users' needs. A plugin can include skills, tools, and optional agents. It doesn't need all three, and a single packaged skill is also a plugin.

Choose the smallest set of capabilities that satisfies the task. Confirm support in the target product before you decide what to build or reuse.

## Match capabilities to the task

Start with what the solution must know and do.

| Capability | What it does in a plugin | Learn more |
|---|---|---|
| Agent | Provides a specialized assistant for a role or workflow, with instructions, knowledge, and tools; plugins support declarative agents today. | [Declarative agents](overview-declarative-agent.md) |
| Skill | Provides reusable instructions for a task in a directory that contains `SKILL.md`. | [Skills in declarative agents](declarative-agent-skills.md) |
| Connector | Gives the solution access to apps or data through the connector model supported by the target product. | [Copilot connectors as plugin capabilities](plugin-type-connectors.md) |
| MCP server | Provides remotely hosted tools that the plugin connects to through MCP. | [MCP servers as plugin capabilities](plugin-type-mcp-servers.md) |

These components remain distinct. The plugin packages the selected components so that supported Microsoft experiences can discover, distribute, and manage them consistently.

If your plugin needs a connector, [compare synced and federated connector models](overview-copilot-connector.md#connector-models) to choose the model that meets your data access requirements.

> [!NOTE]
> Declarative agents can contain [API-based and MCP-based actions](overview-plugins.md). When the agent is included in a plugin package, these actions remain available only through the agent; they aren't independently exposed package-level capabilities. See [Plugins and declarative agent actions](plugins-overview.md#plugins-and-declarative-agent-actions) for the distinction.

## What's in the package and what's external

Skills and agent definitions are packaged capabilities. Remote MCP servers and connected services run separately from the package; the package can include the connection information or references needed to use them.

For each capability, identify both what you package and what must remain available outside the package. For example, a skill can guide a support workflow while an agent uses tools from a remote MCP server to work with the support system.

Package requirements and component support vary by product and distribution route. See [Package your plugin](package-plugin.md) before you finalize the package.

## Decide what to build or reuse

First, browse the [Copilot Plugin Catalog](https://aka.ms/CopilotPluginCatalog) to see whether an existing plugin meets your users' needs.

For each required component, look for an existing approved asset before you build something new.

| Decision | Questions |
|---|---|
| Reuse as-is | Does an existing component satisfy the requirements, target experiences, permissions, support, and distribution needs? |
| Reuse with configuration | Can you use an existing component by changing its instructions, connection, audience, or metadata without changing its runtime? |
| Extend | Can you add a skill, connector, MCP-based component, or other supported component to an existing agent or plugin? |
| Build new | Is there a requirement that no approved component can satisfy? |

Confirm that you have permission to reuse the asset and that its owner supports the intended audience, environment, and lifecycle.

## Record component dependencies

For every selected component, identify:

- The component owner and support contact.
- The target Microsoft experiences and users.
- Required identities, permissions, consent, and connections.
- Required data sources, APIs, services, and hosting.
- Availability, performance, and failure requirements.
- Security, privacy, responsible AI, and governance constraints.
- Version, compatibility, and distribution restrictions.

A packaged reference doesn't transfer ownership of an independently operated service. Confirm who operates and supports each connected service.

## Summarize your component decisions

For each component you select, note:

| Component | Why it's needed | Build or reuse | Owner | Dependencies |
|---|---|---|---|---|
| Agent, skill, connector, or MCP server | Requirement that it satisfies | Reuse, configure, extend, or build | Accountable team or person | Identity, data, service, hosting, or policy requirements |

You're ready to build or reuse capabilities when:

- Every solution requirement maps to a selected component or an identified gap.
- You know which components can be reused.
- You know which components need to be created or extended.
- Each component has an owner and documented dependencies.

## Next step

> [!div class="nextstepaction"]
> [Build or reuse capabilities for your plugin](build-reuse-plugin.md)

## Related content

- [Plan your plugin](planning-guide.md)
- [Declarative agents](overview-declarative-agent.md)
- [Skills in declarative agents](declarative-agent-skills.md)
- [Connectors](plugin-type-connectors.md)
- [MCP servers](plugin-type-mcp-servers.md)
- [MCP and API plugins for declarative agents](overview-plugins.md)
- [Choose development tools](choose-plugin-development-tools.md)
