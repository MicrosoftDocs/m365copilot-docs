---
title: Plan your plugin
description: Define the users, outcome, experiences, requirements, reusable assets, constraints, and responsibilities for a Microsoft 365 Copilot plugin.
#customer intent: As a solution owner, I want to plan my plugin so that I can choose the appropriate capabilities and identify requirements before implementation.
author: jessicaaawu
ms.author: wujessica
ms.topic: article
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.custom: [copilot-learning-hub]
---

# Plan your plugin

Prepare for your plugin by defining who needs it, what they need to accomplish, and which products they use. Use this checklist to record your choices and the questions you need to resolve before you build.

Your capability and distribution choices can remain provisional while you work through this checklist. Refine them as you confirm requirements for the products and routes you're considering.

## Describe what the solution needs to do

Start with the user's task rather than how you'll implement it. Record:

- What information or business context does the solution need?
- What questions, tasks, or workflows should it support?
- Does it only need to retrieve information, or must it also create, update, send, or delete anything?
- Which Microsoft 365 data, external data sources, APIs, or services are involved?
- Which actions could have consequential effects and need confirmation or human oversight?

Use these answers to compare possible capabilities and identify constraints in the planning checklist. You don't need to select the components or development tools yet.

## Planning checklist

| Decision | What to record | Guidance |
|---|---|---|
| Outcome and users | The job your plugin should help people complete, its intended users, and how you'll measure success. | [What is a plugin?](plugins-overview.md) |
| Target products | Where users need to find and use the plugin, including any region or release-state constraints. | [Check product requirements](#check-product-requirements) |
| Build or reuse | Existing plugins that could meet the need, or components you can reuse, their owners, and any gaps you need to build. | Browse the [Copilot Plugin Catalog](https://aka.ms/CopilotPluginCatalog) for existing plugins; see [Build or reuse capabilities](build-reuse-plugin.md) for component reuse. |
| Capabilities | The smallest set of capabilities that meets the users' needs, and how those capabilities work together. | [Choose capabilities for your plugin](choose-plugin-components.md) |
| Licensing and cost | User and maker licenses, usage-based charges, external hosting, and ongoing support costs for the products and route you choose. | [Plan licensing and cost](cost-considerations.md) |
| Identity and authentication | Required identities, authentication methods, permissions, consent, and connections for each component and external service. | [Plan identity, authentication, and permissions](data-privacy-security.md#plan-identity-authentication-and-permissions) |
| Data, privacy, and security | Data sources and flows, access boundaries, privacy and compliance requirements, and actions that need human oversight. | [Plan data, privacy, and security](data-privacy-security.md) |
| Distribution route | Whether you intend to share for testing, publish to your organization, or publish for customers across organizations, and the admin and user actions that follow. | [Publish or share your plugin](publish.md) |
| Maintenance | Who owns the plugin and its external services, support, monitoring, updates, ownership handover, and retirement. | [Monitor, update, and retire](improve-plugin.md) |

If your goal is to use Microsoft 365 work context or Copilot capabilities in an application or custom agent that you host, see [Build Copilot-powered apps and agents](apps-agents-overview.md).

## Check product requirements

Confirm requirements in the documentation for each product you plan to use:

- [Agent Builder](agent-builder.md) for declarative agents built in Microsoft 365 Copilot.
- [Copilot Studio](/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) for its agent authoring and publishing paths.
- [Copilot Cowork](/copilot/cowork/) for extending Cowork.
- [Copilot connectors](overview-copilot-connector.md) for external data access.

Check the product's supported capabilities, authentication, package, licensing, and distribution requirements. Don't assume that passing checks in one product establishes support in another.

## Carry the plan forward

Keep your checklist with the project. For each unresolved question, record who can answer it and whether the answer could change the capabilities, target product, cost, or publishing route.

Before you begin implementation, confirm that you have permission to reuse the selected assets and that each component and external dependency has an owner.

## Next step

> [!div class="nextstepaction"]
> [Choose capabilities for your plugin](choose-plugin-components.md)

Then continue to [Build or reuse capabilities for your plugin](build-reuse-plugin.md).

## Related content

- [Plugins for Microsoft 365 Copilot](plugins-overview.md)
- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Data, privacy, and security](data-privacy-security.md)
- [Licensing and cost considerations](cost-considerations.md)
- [Build Copilot-powered apps and agents](apps-agents-overview.md)
- [For builders](builder-guide.md)
- [For administrators](administrator-guide.md)
- [For ISVs and software publishers](isv-publisher-guide.md)
