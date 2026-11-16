---
title: Build solutions for Microsoft 365 Copilot
description: Follow the Microsoft 365 Copilot plugin lifecycle as a builder, or find the separate guidance for apps and custom engine agents.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/09/2026
ms.topic: overview
ai-usage: ai-assisted
ms.custom: msecd-doc-authoring-1013
---

# Build solutions for Microsoft 365 Copilot

Choose what you want to build, then follow the applicable supported path. If you're building a plugin, follow the plugin lifecycle from planning through monitoring, updates, and retirement.

## Choose where to start

| If you want to... | Start here |
|---|---|
| Package your capabilities, such as agents, skills, connectors, and MCP servers, as a plugin that people can use in Microsoft 365 Copilot and other supported Microsoft apps | [Plugins for Microsoft 365 Copilot](plugins-overview.md) |
| Use Copilot or Microsoft 365 data, such as email, files, and meetings, in your own app or agent | [Build Copilot-powered apps and agents](apps-agents-overview.md) |
| Build an agent that uses your own AI models, orchestration, and hosting | [Custom engine agents](overview-custom-engine-agent.md) |

If you already have a custom engine agent, you can package it in a plugin to manage a single version of it and publish it to supported Microsoft apps. You can also include related capabilities, such as skills, connectors, and MCP servers, in the same plugin.

Not sure which option fits? Compare all options in [Ways to extend Microsoft 365 Copilot](overview.md).

## Follow the plugin lifecycle

For a plugin, complete each stage in order.

| Step | Result | Start with |
|---|---|---|
| Prepare to build your plugin | Defined outcome, audience, target experiences, capabilities, tools, dependencies, constraints, and owners | [Plan your plugin](planning-guide.md) |
| Build or reuse capabilities | Working components with recorded versions, dependencies, owners, limitations, and development evidence | [Build or reuse capabilities for your plugin](build-reuse-plugin.md) |
| Package and test | Integrated components and an exact versioned package tested for structure, references, dependencies, permissions, target-experience behavior, and agent quality when required | [Integrate capabilities](integrate-test-plugin-components.md) |
| Publish or share | The tested plugin published or shared through a supported method, with the destination and next owner recorded | [Publish or share your plugin](publish.md) |
| Make available and govern | Intended users can access and use the plugin, required connections work, and applicable controls are applied | [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) |
| Monitor, update, and retire | Usage and feedback reviewed, behavior evaluated when appropriate, updates tested and released, ownership or access adjusted, and retirement completed safely | [Monitor](monitor-plugin.md), [improve and update](improve-plugin.md), or [retire](retire-plugin.md) |

Define the required capabilities and target Microsoft experiences before you select a development tool. For supported pro-code declarative-agent and plugin scenarios, Work IQ Dev Tools is recommended. Use [Choose development tools for your plugin](choose-plugin-development-tools.md) to confirm capability support and compare no-code, low-code, and other supported paths.

For a pro-code plugin workflow, use the [Work IQ Dev Tools documentation](https://aka.ms/wiqd/docs) on GitHub. Start with [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/) for the supported creation, validation, provisioning, packaging, and sharing procedure.

Before implementation, confirm that the required identities, environments, services, permissions, licenses, and owners are available.

## Related content

- [Plugins for Microsoft 365 Copilot](plugins-overview.md)
- [Plan your plugin](planning-guide.md)
- [Build Copilot-powered apps and agents](apps-agents-overview.md)
- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Build or reuse capabilities for your plugin](build-reuse-plugin.md)
- [Configure plugin CI/CD with Work IQ Dev Tools](plugin-ci-cd.md)
