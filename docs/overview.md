---
title: Ways to extend Microsoft 365 Copilot
description: Decide whether to extend experiences inside Microsoft 365 Copilot or build Copilot-powered apps and custom agents, and then choose the applicable extension path.
#customer intent: As a builder, I want to decide where users will interact with my solution so that I can choose the applicable capabilities, tools, lifecycle, and distribution guidance.
author: jessicaaawu
ms.author: wujessica
ms.topic: overview
ms.localizationpriority: medium
ms.date: 10/23/2026
ms.custom: [copilot-learning-hub]
---

# Ways to extend Microsoft 365 Copilot

Start by deciding where people will use the experience:

- **Inside Microsoft 365 Copilot experiences.** Build or configure supported agents, connectors, skills, and tools, and then follow the package, publishing, and governance guidance for the selected method.
- **In your apps and custom agents.** Use APIs and SDKs to add Microsoft 365 work context and Copilot capabilities to experiences that you own and operate.

You can use both approaches in one solution. Choose the primary path based on the user experience, runtime, distribution model, and operating responsibilities.

## Choose where the experience lives

| Where people use the experience | Start with | Use it when |
|---|---|---|
| Inside Microsoft 365 Copilot experiences | [Plugins for Microsoft 365 Copilot](plugins-overview.md) | You want to build or configure a plugin with supported agents, skills, connectors, or MCP-based tools |
| In your apps and custom agents | [Build Copilot-powered apps and agents](apps-agents-overview.md) | You want to use Microsoft 365 work context or Copilot capabilities in an experience that you host and operate |

## Choose by what you want to create

| If you want to | Start with |
|---|---|
| Build a declarative agent that uses Copilot's orchestrator and models | [Declarative agents](overview-declarative-agent.md) |
| Add reusable instructions or workflows to a declarative agent | [Skills as plugin capabilities](plugin-type-skills.md) |
| Ground Microsoft 365 Copilot in approved external organizational data | [Microsoft 365 Copilot connectors](overview-copilot-connector.md) |
| Make remote MCP tools available through a supported method | [MCP servers and plugins](plugin-type-mcp-servers.md) |
| Maintain or evaluate a Teams message extension integration | [Message extensions](overview-message-extension-bot.md) |
| Build and distribute a plugin that brings supported capabilities together | [Plugins for Microsoft 365 Copilot](plugins-overview.md) |
| Build an application that uses Microsoft 365 work context | [Work IQ APIs](work-iq/index.md) |
| Add Copilot search, retrieval, chat, export, meeting, reporting, or administration capabilities to an application | [Microsoft 365 Copilot APIs](copilot-apis-overview.md) |
| Build an agent with your own orchestration, models, hosting, or runtime | [Custom engine agents](overview-custom-engine-agent.md) |

For help comparing declarative and custom engine agents, see [Compare declarative and custom engine agents](agents-overview.md).

## Agent in-app experience

Plan how users will interact with the agent in each target Microsoft 365 experience:

- **In-context experience**: Users work with an agent within a supported app, such as Teams or Word, while continuing their work in that app.
- **Immersive experience**: Users have a dedicated conversation with an agent in Microsoft 365 Copilot, focused on its purpose, knowledge, and capabilities.

:::image type="content" source="assets/images/copilot-experiences.png" alt-text="Illustration of in-context and immersive agent experiences in Microsoft 365 Copilot." border="false":::

Availability and behavior depend on the agent type, host app, capabilities, licensing, and organizational policies. Don't assume that an agent or capability works in every Microsoft 365 app. For document-specific behavior, see [Work with documents in declarative agents](declarative-agent-document-interaction.md).

> [!IMPORTANT]
> An agent doesn't always inherit the user's sign-in from the host app. External actions and services can require a separate sign-in or consent, even when the user is already signed in to Microsoft 365. Plan the applicable [authentication requirements](plugin-authentication.md).

## Connector availability in Microsoft 365 experiences

Microsoft 365 Copilot connectors make external organizational content available to supported Copilot and Microsoft Search experiences. Synced connectors index content in Microsoft Graph; federated connectors retrieve content at query time. For model-specific capabilities and availability, see the [Copilot connectors overview](overview-copilot-connector.md).

Connectors used by Copilot Studio and Power Platform provide a different integration route for agents, apps, and workflows. Don't assume that the same connector configuration works across both models. See [Extend agent capabilities with Copilot connectors](/microsoft-copilot-studio/copilot-connectors-in-copilot-studio).

## Combine both paths

A solution can combine multiple paths. For example:

- A declarative agent can call an external API or remote MCP server through a supported action.
- An application can use a Copilot API while a separately packaged agent gives users a related experience inside Microsoft 365 Copilot.
- A custom engine agent can use Work IQ APIs and also follow the package or distribution requirements of its target channel.

Using an API doesn't by itself select a package or publishing method. Each part of a combined solution retains its own identity, authentication, deployment, distribution, and governance requirements.

## Unified app model

Microsoft 365 uses app packages to distribute supported agents and other app capabilities. A plugin package can bring together supported capabilities, but packaging alone doesn't make them available in every host app.

Choose a supported [packaging path](package-plugin.md), then follow the applicable [publishing or sharing guidance](publish.md). Organization distribution and public distribution have different review, access, and connection requirements. After distribution, [govern plugin access and connections](manage.md).

## Security and governance

For each component, identify its data flows, permissions, external services, and responsible AI requirements. Microsoft 365 access controls don't replace the security responsibilities of external services. See [Plan data, privacy, and security](data-privacy-security.md).

## Plan and continue

- [Plan your plugin](planning-guide.md) across data, identity, security, distribution, compatibility, cost, and ownership.
- [Choose development tools](choose-plugin-development-tools.md) for the selected capabilities. Use [developer mode](debugging-agents-copilot-studio.md) to inspect declarative-agent behavior while testing.
- [For builders](builder-guide.md), choose a development experience and implementation guidance.
- [For administrators](administrator-guide.md), prepare the organization and identify applicable controls.
- [For ISVs and software publishers](isv-publisher-guide.md), determine the supported customer publishing method.

## Related content

- [Plugins for Microsoft 365 Copilot](plugins-overview.md)
- [Build Copilot-powered apps and agents](apps-agents-overview.md)
- [Compare declarative and custom engine agents](agents-overview.md)
- [Custom engine agents](overview-custom-engine-agent.md)
- [Work IQ APIs](work-iq/index.md)
- [Microsoft 365 Copilot APIs overview](copilot-apis-overview.md)
