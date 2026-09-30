---
title: Choose Capabilities for Your Microsoft 365 Copilot Plugin
description: Select the agents, skills, connectors, and MCP servers your Microsoft 365 Copilot plugin needs and decide what to build or reuse.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: concept-article
---

# Choose capabilities for your plugin

Building on the decisions you made when you [planned your plugin](planning-guide.md), decide which components the plugin needs. A plugin can bring together one or more agents, skills, Copilot connectors, and MCP-based components. It doesn't need to include every component type.

At the end of this article, you'll know which components your plugin needs and what you can reuse or must build.

## Map requirements to components

Start with what the solution must know and do.

| Requirement | Component to consider | Learn more |
|---|---|---|
| Provide a goal-directed conversational experience with defined instructions, knowledge, and tools | Declarative agent | [Declarative agents](overview-declarative-agent.md) |
| Reuse instructions, workflows, prompts, scripts, or business expertise | Skill | [Skills](plugin-type-skills.md) |
| Provide approved access to enterprise or third-party data and services | Copilot connector | [Connectors](plugin-type-connectors.md) |
| Expose tools and resources from a remote service for discovery and invocation | MCP server | [MCP servers](plugin-type-mcp-servers.md) |

These components remain distinct. The plugin packages the selected components so that supported Microsoft experiences can discover, distribute, and manage them consistently.

> [!IMPORTANT]
> Component packaging, availability, and behavior vary by Microsoft experience and development tool. Confirm current support before you finalize your component choices.

## Choose how the components work together

Common compositions include:

- An agent with skills that provide reusable workflows or specialized expertise.
- An agent with a connector that provides approved organizational knowledge.
- An agent with an MCP-based component that exposes tools or resources from a remote server.
- Skills and connectors packaged for a supported experience that already provides the agent experience.
- A plugin with multiple components that address one business scenario.

Choose the smallest set of components that satisfies the requirements. Don't add a component only because a development tool supports it.

## Decide what to build or reuse

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

A packaged reference doesn't transfer ownership of an independently operated service. For example, packaging MCP connection information doesn't make the plugin publisher responsible for operating the remote MCP server unless the publisher also owns that service.

## Summarize your component decisions

For each component you select, note:

| Component | Why it's needed | Build or reuse | Owner | Dependencies |
|---|---|---|---|---|
| Agent, skill, connector, or MCP-based component | Requirement that it satisfies | Reuse, configure, extend, or build | Accountable team or person | Identity, data, service, hosting, or policy requirements |

You're ready to [choose development tools](choose-plugin-development-tools.md) when:

- Every solution requirement maps to a selected component or an identified gap.
- You know which components can be reused.
- You know which components need to be created or extended.
- Each component has an owner and documented dependencies.

## Related content

- [Plan your plugin](planning-guide.md)
- [Declarative agents](overview-declarative-agent.md)
- [Skills](plugin-type-skills.md)
- [Connectors](plugin-type-connectors.md)
- [MCP servers](plugin-type-mcp-servers.md)
