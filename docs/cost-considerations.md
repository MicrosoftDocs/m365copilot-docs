---
title: Plan Licensing and Cost for Microsoft 365 Copilot Extensibility
description: Identify user licensing, consumption, hosting, development, publishing, and operational costs when you plan a Microsoft 365 Copilot plugin or another extensibility solution.
author: jessicaaawu
ms.author: wujessica
ms.topic: overview
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.custom: [copilot-learning-hub]
---

# Plan licensing and cost

Use this article while you [plan your plugin](planning-guide.md) or another Microsoft 365 Copilot extensibility solution. Record the cost categories that can affect the design now, and confirm the final licenses, meters, and service prices after you choose the capabilities and development tools.

## Identify cost categories

Account for:

- User and administrator licenses for the target Microsoft experiences.
- Usage-based consumption for agents, Copilot connectors, APIs, models, or other metered services.
- Development tools, test environments, and developer subscriptions.
- Hosting for APIs, applications, databases, remote MCP servers, and other external services.
- Identity, secrets, certificates, networking, storage, monitoring, and audit services.
- Marketplace, certification, publishing, and customer-onboarding requirements.
- Support, incident response, evaluation, servicing, deprecation, and retirement.

A plugin can bring together components that use different licensing and billing models. Record costs for the plugin experience and for each independently operated component or service.

## Licensing options for Microsoft 365 Copilot

Microsoft 365 Copilot is available with two different license options:

- **Microsoft 365 Copilot Chat** is included in your Microsoft 365 subscription at no additional charge. It provides access to web-based Copilot Chat and optional [pay-as-you-go access](/copilot/microsoft-365/pay-as-you-go/overview) to work-based chat. This option is ideal for occasional users of Copilot and agents.
- **Microsoft 365 Copilot add-on license** is available with an [eligible Microsoft 365 subscription](/copilot/microsoft-365/microsoft-365-copilot-licensing#microsoft-365-copilot-license). It includes both web-based and work-based Copilot Chat and unlocks embedded Copilot features in Word, Excel, Outlook, and Teams. This option is ideal for frequent users of Copilot and agents and users who want AI assistance integrated throughout their workflow.

Your license type determines access to Copilot capabilities and whether usage-based billing charges apply when using extensibility options like Copilot connectors or agents.

For more information about consumption costs, see [Copilot Studio licensing](/microsoft-copilot-studio/billing-licensing) and [Copilot Credits billing rates](/microsoft-copilot-studio/requirements-messages-management). For more information about licensing, see [License options for Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-licensing) and [Decide which Copilot is right for you](/microsoft-365-copilot/which-copilot-for-your-organization).

| **License type** | **Cost**   | **Best for** | **Extensibility consumption costs**  |
| ------- | ------ | ---------  | ------------ |
| Microsoft 365 Copilot   | Add-on license required | Frequent users       | No extra charges for accessing or using extensibility features (Copilot connectors, agents, plugins).   |
| Microsoft 365 Copilot Chat | Included for eligible Microsoft 365 users | Occasional users     | No charges for lightweight extensibility (instruction-based agents or public site grounding).<br><br>Usage-based billing charges apply for shared tenant data (SharePoint, Copilot connectors), metered in Copilot Credits via Copilot Studio. |
| No Copilot license or Microsoft 365 subscription              | N/A                                      | Not supported        | Can't access Copilot; extensibility features require a qualifying license.                                                                      |

### Access and usage

Users with a valid Microsoft 365 Copilot, Microsoft 365, or Office 365 license can access data from Copilot connectors in Copilot Chat, Copilot Search, and Microsoft Search.

If you build a connector and your admin configures it in the admin center, licensed users in your organization can automatically retrieve its data through Copilot Chat.

## Agents in Copilot

Agents are AI assistants that automate tasks and answer queries across the Microsoft 365 ecosystem, including Copilot Chat, Microsoft Teams, and other Microsoft 365 apps. This section covers the costs of declarative agents and custom engine agents.

### Declarative agents

<!-- markdownlint-disable MD024 -->

#### Usage Cost

To use a declarative agent, users must have a Microsoft 365 Copilot add-on license, or access to Microsoft 365 Copilot Chat through an eligible Microsoft 365 license.

If a user doesn't have a Copilot license and usage-based billing is enabled in the tenant, using declarative agents might result in consumption charges or limited functionality, depending on how the agent is built.

- Agents that rely on instructions or public website grounding **don't** incur extra costs.
- Agents that access shared tenant data (such as SharePoint or Copilot connectors) **generate usage-based billing charges** (metered in Copilot Credits) via Copilot Studio.

#### Hosting Cost

Declarative agents are hosted by Microsoft 365 Copilot and don't incur additional hosting costs.

### Custom engine agents

#### Usage Cost

Users don't need a Copilot license to access custom engine agents in Microsoft 365 Copilot Chat. However, usage costs vary based on the user's license:

- Users with a Microsoft 365 Copilot license don't incur additional charges.
- Users without a Microsoft 365 Copilot license might incur **usage-based billing charges** if the agent interacts with shared tenant data (SharePoint or Copilot connectors), metered in Copilot Credits via Copilot Studio.

#### Hosting Cost

Custom engine agents are hosted outside of Microsoft 365 Copilot using your own orchestrator and/or models. Hosting these agents might incur additional hosting costs, such as:

- **Copilot Studio** – For users with a Microsoft 365 Copilot add-on license, agents built in Copilot Studio for Teams, SharePoint, and Copilot Chat are included at no extra charge. Users without a Microsoft 365 Copilot license might need to purchase a Copilot Studio license or Power Platform plan, and usage-based billing (Copilot Credits) or Power Platform capacity limits might apply.
- **Azure AI Foundry** – For AI-powered processing, model hosting, and natural language understanding. See [Azure AI Foundry pricing](https://azure.microsoft.com/pricing/details/ai-foundry/).
- **Azure App Service** – For hosting services and APIs that support your agent. See [App Service pricing](https://azure.microsoft.com/pricing/details/app-service/).
- **Azure Bot Service** – For publishing agents across multiple channels. See [Azure AI Bot Service pricing](https://azure.microsoft.com/pricing/details/bot-services/).

> [!NOTE]
> Your total cost varies based on the AI models, orchestration complexity, and cloud services you use to deploy and maintain your agent.

<!-- markdownlint-enable MD024 -->

### Cost comparison: declarative agent vs custom engine agent

| Feature           | Declarative agents                                                                                                  | Custom engine agents                                                                                                   |
|-------------------|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **License requirements** | Requires Microsoft 365 Copilot add-on license, or Copilot Chat access through an eligible Microsoft 365 license.   | No additional license required.                                                                                         |
| **Hosting**       | Hosted by Microsoft 365 Copilot (no additional hosting costs).                                                       | Hosted externally (incurs hosting costs, such as Azure AI Foundry).                                                      |
| **Usage cost**    | For users with Microsoft 365 Copilot add-on licenses, no extra charges. <br><br>For users without licenses:<br> - No charges for agents with instructions only or grounded only in public data.<br> - Usage-based billing charges (Copilot Credits) for shared tenant data usage (for example, SharePoint, Copilot connectors). | Varies based on license.<br><br>Users with a Copilot license don't incur additional charges. Users without a Copilot license might incur usage-based billing charges (Copilot Credits) when shared data is used. |

## Work IQ API

The [Work IQ API](work-iq/api-overview.md) provides an AI-native interface to Microsoft 365 work intelligence. By using this API, you can build applications that query emails, meetings, files, and organizational knowledge by using natural language grounded in Microsoft 365 data.

You pay for use of the Work IQ API through a consumption-based model that uses Copilot Credits.

For more information, see the [Work IQ General Availability announcement](https://www.microsoft.com/en-us/licensing/news/work-iq-general-availability).

## Microsoft 365 Copilot APIs

The [Microsoft 365 Copilot APIs](copilot-apis-overview.md) are available at no additional cost to users with a Microsoft 365 Copilot license. Support for users without a Microsoft 365 Copilot license is currently not available.

## Related content

- [Plan your plugin](planning-guide.md)
- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Agents overview](agents-overview.md)
- [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md)
- [Microsoft 365 Copilot APIs overview](copilot-apis-overview.md)
- [Microsoft 365 Copilot APIs client libraries](sdks/api-libraries.md)
