---
title: Ways to extend Microsoft 365 Copilot
description: Decide whether to extend experiences inside Microsoft 365 Copilot or build Copilot-powered apps and custom agents, and then choose the applicable extension path.
#customer intent: As a builder, I want to decide where users will interact with my solution so that I can choose the applicable capabilities, tools, lifecycle, and distribution guidance.
author: jessicaaawu
ms.author: wujessica
ms.topic: overview
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.custom: [copilot-learning-hub]
---

# Ways to extend Microsoft 365 Copilot

<!-- markdownlint-disable MD033 -->
<a id="microsoft-365-copilot-extensibility-overview"></a>
<!-- markdownlint-enable MD033 -->

Start by deciding where people will use the experience:

- **Inside Microsoft 365 Copilot experiences.** Build or configure supported agents, connectors, skills, and tools, and then follow the package, distribution, and governance guidance for the selected route.
- **In your apps and custom agents.** Use APIs and SDKs to add Microsoft 365 work context and Copilot capabilities to experiences that you own and operate.

You can use both approaches in one solution. Choose the primary path based on the user experience, runtime, distribution model, and operating responsibilities.

## Choose where the experience lives

| Where people use the experience | Start with | Use it when |
|---|---|---|
| Inside Microsoft 365 Copilot experiences | [Plugins for Microsoft 365 Copilot](plugins-overview.md) | You want to build or configure a plugin with supported agents, skills, connectors, or MCP-based tools |
| In your apps and custom agents | [Build Copilot-powered apps and agents](apps-agents-overview.md) | You want to use Microsoft 365 work context or Copilot capabilities in an experience that you host and operate |

<!-- markdownlint-disable MD033 -->
<a id="extend-copilot-with-agents"></a>
<a id="what-are-agents"></a>
<a id="prebuilt-agents-you-can-integrate"></a>
<a id="build-your-own-agent"></a>
<a id="enhance-knowledge-in-copilot-with-connectors"></a>
<a id="use-prebuilt-copilot-connectors"></a>
<a id="build-a-custom-copilot-connector"></a>
<a id="microsoft-work-iq-api"></a>
<a id="microsoft-365-copilot-apis"></a>
<!-- markdownlint-enable MD033 -->

## Choose by what you want to create

| If you want to | Start with |
|---|---|
| Build a declarative agent that uses Copilot's orchestrator and models | [Declarative agents](overview-declarative-agent.md) |
| Add reusable instructions or workflows to a declarative agent | [Skills as plugin capabilities](plugin-type-skills.md) |
| Ground Microsoft 365 Copilot in approved external organizational data | [Microsoft 365 Copilot connectors](overview-copilot-connector.md) |
| Make remote MCP tools available through a supported route | [MCP servers and plugins](plugin-type-mcp-servers.md) |
| Maintain or evaluate a Teams message extension integration | [Message extensions](overview-message-extension-bot.md) |
| Build and distribute a plugin that brings supported capabilities together | [Plugins for Microsoft 365 Copilot](plugins-overview.md) |
| Build an application that uses Microsoft 365 work context | [Work IQ APIs](work-iq/index.md) |
| Add Copilot search, retrieval, chat, export, meeting, reporting, or administration capabilities to an application | [Microsoft 365 Copilot APIs](copilot-apis-overview.md) |
| Build an agent with your own orchestration, models, hosting, or runtime | [Custom engine agents](overview-custom-engine-agent.md) |

For help comparing declarative and custom engine agents, see [Compare declarative and custom engine agents](agents-overview.md).

## Combine both paths

A solution can combine multiple paths. For example:

- A declarative agent can call an external API or remote MCP server through a supported action.
- An application can use a Copilot API while a separately packaged agent gives users a related experience inside Microsoft 365 Copilot.
- A custom engine agent can use Work IQ APIs and also follow the package or distribution requirements of its target channel.

Using an API doesn't by itself select a package or distribution route. Each part of a combined solution retains its own identity, authentication, deployment, distribution, and governance requirements.

## Plan and continue

- [Plan your plugin](planning-guide.md) across data, identity, security, distribution, compatibility, cost, and ownership.
- [For builders](builder-guide.md), choose a development experience and implementation guidance.
- [For administrators](administrator-guide.md), prepare the organization and identify applicable controls.
- [For ISVs and software publishers](isv-publisher-guide.md), determine the supported customer distribution route.

## Related content

- [Plugins for Microsoft 365 Copilot](plugins-overview.md)
- [Build Copilot-powered apps and agents](apps-agents-overview.md)
- [Compare declarative and custom engine agents](agents-overview.md)
- [Custom engine agents](overview-custom-engine-agent.md)
- [Work IQ APIs](work-iq/index.md)
- [Microsoft 365 Copilot APIs overview](copilot-apis-overview.md)
