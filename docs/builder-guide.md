---
title: Build solutions for Microsoft 365 Copilot
description: Follow the Microsoft 365 Copilot plugin lifecycle as a builder, or find the separate guidance for apps and custom engine agents.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: overview
---

# Build solutions for Microsoft 365 Copilot

Choose what you want to build, then follow the applicable supported path. If you're building a plugin, follow the plugin lifecycle from planning through monitoring, updates, and retirement.

## Choose the applicable journey

| Your goal | Start with |
|---|---|
| Bring supported capabilities together in a plugin for Microsoft experiences | [Plugins for Microsoft 365 Copilot](plugins-overview.md) |
| Build an app that uses Microsoft 365 work context or Copilot capabilities | [Build Copilot-powered apps and agents](apps-agents-overview.md) |
| Build an agent with your own orchestration, models, hosting, or runtime | [Custom engine agents](overview-custom-engine-agent.md) |

For a complete comparison, see [Ways to extend Microsoft 365 Copilot](overview.md).

## Follow the plugin lifecycle

For a plugin, complete each stage in order.

| Step | Result | Start with |
|---|---|---|
| Prepare to build your plugin | Defined outcome, audience, target experiences, capabilities, tools, dependencies, constraints, and owners | [Plan your plugin](planning-guide.md) |
| Build or reuse capabilities | Working components with recorded versions, dependencies, owners, limitations, and development evidence | [Build or reuse capabilities for your plugin](build-reuse-plugin.md) |
| Package and test | Integrated components and an exact versioned package tested for structure, references, dependencies, permissions, target-experience behavior, and agent quality when required | [Integrate capabilities](integrate-test-plugin-components.md) |
| Publish and distribute | The tested plugin published or shared through a supported route, with the destination and next owner recorded | [Choose how to publish and distribute your plugin](publish.md) |
| Make available and govern | Intended users can access and use the plugin, required connections work, and applicable controls are applied | [Make plugins and agents available and govern access](govern-plugins.md) |
| Monitor, update, and retire | Usage and feedback reviewed, behavior evaluated when appropriate, updates tested and released, ownership or access adjusted, and retirement completed safely | [Monitor, update, and retire](improve-plugin.md) |

Define the required capabilities and target Microsoft experiences before you select a development tool. Then use [Choose development tools for your plugin](choose-plugin-development-tools.md) to compare the available authoring and packaging paths, including Microsoft 365 Agents Toolkit for supported Microsoft 365 app packages.

Before implementation, confirm that the required identities, environments, services, permissions, licenses, and owners are available.

## Related content

- [Plugins for Microsoft 365 Copilot](plugins-overview.md)
- [Plan your plugin](planning-guide.md)
- [Build Copilot-powered apps and agents](apps-agents-overview.md)
- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Build or reuse capabilities for your plugin](build-reuse-plugin.md)
