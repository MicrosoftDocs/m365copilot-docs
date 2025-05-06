---
title: Licensing and Cost Considerations for Copilot Extensibility Options
description: Find information about licensing and cost considerations to help you choose your Copilot extensibility options.
author: jessicaaawu
ms.author: wujessica
ms.topic: overview
ms.localizationpriority: medium
ms.date: 05/05/2025
ms.custom: [copilot-learning-hub]
---

# Licensing and cost considerations for Copilot extensibility options

Before extending Microsoft 365 Copilot with custom capabilities—such as integrating external data sources or building intelligent agents—it's important to understand the associated licensing and consumption costs.

Your Microsoft 365 Copilot license type determines access to extensibility features and whether additional usage charges apply. This article first outlines the available Copilot licensing options, then breaks down cost considerations for each extensibility path, including [Microsoft Graph connectors](#microsoft-graph-connectors) and [agents](#agents-in-copilot).

## Licensing options for Microsoft 365 Copilot

Microsoft 365 Copilot is available with two different license options:

- **Microsoft 365 Copilot Chat license** is included in your Microsoft 365 Subscription at no additional charge. It provides access to web-based Copilot Chat and optional [pay-as-you-go access](/copilot/microsoft-365/pay-as-you-go/overview) to work-based chat. Ideal for occasional users of Copilot and agents.
- **Microsoft 365 Copilot add-on license** is available with an [eligible Microsoft 365 subscription](/copilot/microsoft-365/microsoft-365-copilot-licensing#microsoft-365-copilot-license). It includes both web-based and work-based Copilot Chat and unlocks embedded Copilot features in Word, Excel, Outlook, and Teams. This is ideal for frequent users of M365 Copilot and agents and those who want AI assistance integrated throughout their workflow.

Your license type determines access to Copilot capabilities and whether metered consumption charges apply when using extensibility options like Microsoft Graph connectors or agents.

For more details on consumption costs, see [Billing rates and management](/copilot-studio/requirements-messages-management). For more information on licensing, see [License options for Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-licensing) and [Decide which Copilot is right for you](/microsoft-365-copilot//which-copilot-for-your-organization).

| **License type**              | **Cost**                                 | **Best for**        | **Extensibility consumption costs**                                                                                                                                       |
|-------------------------------------|------------------------------------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Microsoft 365 Copilot license**   | Add-on license required                   | Frequent users       | No additional charges for accessing or using extensibility features (e.g., Graph connectors, agents, plugins)                                                            |
| **Microsoft 365 Copilot Chat license** | Included for eligible Microsoft 365 users | Occasional users     | No charges for lightweight extensibility (e.g., instruction-based agents or public site grounding).<br>Metered charges apply for shared tenant data (e.g., SharePoint, Microsoft Graph connectors), tracked via Copilot Studio meters |
| **No Copilot license**              | N/A                                      | Not supported        | May be unable to access Copilot; extensibility features not guaranteed without a qualifying license                                                                      |

## Microsoft Graph connectors

Microsoft Graph connectors allow you to enrich Copilot with external data to enhance the contextual relevance of Copilot responses.

### Index quota and licensing

All eligible Microsoft 365 enterprise customers receive 50 million items of index quota at no extra cost. This quota is used for ingesting content via Microsoft Graph connectors. By default, each connection is capped at 5 million items. If you need a higher per-connection or overall quota, contact your Microsoft account manager or [submit this form](https://aka.ms/graphconnectorform). For details, see [Index quota for Microsoft Graph connectors](/microsoftsearch/licensing).

#### Eligible licenses

The following licenses qualify for the 50 million item quota:

- Microsoft 365 Business Basic / Standard / Premium  
- Microsoft 365 A3 / A5 / E3 / E5 / F1 / F3  
- Office 365 A3 / A5 / E1 / E3 / E5 / F3  

> **Note:** Connectors in preview status don't count against your quota. When the connector reaches general availability, it starts counting toward the quota.

### Access and usage

Users with a valid Microsoft 365 Copilot, Microsoft 365, or Office 365 license can access data from Microsoft Graph connectors in Copilot Chat and Microsoft Search.

If you build a connector, licensed users in your organization will automatically be able to retrieve its data through Copilot Chat.

## Agents in Copilot

Agents are AI assistants that automate tasks and answer queries across the Microsoft 365 ecosystem, including Copilot Chat, Microsoft Teams, and other Microsoft 365 apps. This section covers the costs of declarative agents and custom engine agents.

### Declarative agents

#### Usage Cost

To use a declarative agent, users must have a Microsoft 365 Copilot add-on license or the M365 Copilot Chat add-on license with an eligible M365 license.  
If a user does not have a Copilot license and metered usage is enabled in the tenant, using declarative agents may result in consumption charges or limited functionality—depending on how the agent is built.  

- Agents that rely on instructions or public website grounding do **not** incur extra costs.  
- Agents that access shared tenant data (such as SharePoint or Microsoft Graph connectors) **will** generate metered consumption charges via Copilot Studio.

#### Hosting Cost

Declarative agents are hosted by Microsoft 365 Copilot and do **not** incur additional hosting costs.

### Custom engine agents

#### Usage Cost

Users do **not** need a Copilot license to access custom engine agents in Microsoft 365 Copilot Chat. However, usage costs vary based on the user's license:

- Users with a Microsoft 365 Copilot license incur **no** additional charges.
- Users **without** a Copilot license may incur **metered consumption charges** if the agent interacts with shared tenant data (e.g., SharePoint or Microsoft Graph connectors), based on Copilot Studio meters.

#### Hosting Cost

Custom engine agents are hosted **outside** of Microsoft 365 Copilot using your own orchestrator and/or models. Hosting these agents may incur additional hosting costs, such as:

- **Copilot Studio** – For users with the Copilot Studio in Microsoft 365 Copilot add-on license, agents built in Copilot Studio for Microsoft Teams, SharePoint, and Copilot Chat are included at no extra charge.  
- **Azure AI Services** – For AI-powered processing and natural language understanding. See [Azure AI services pricing](https://azure.microsoft.com/pricing/details/cognitive-services/).  
- **Azure App Service** – For hosting services and APIs that support your agent. See [App Service pricing](https://azure.microsoft.com/pricing/details/app-service/).  
- **Azure Bot Service** – For publishing agents across multiple channels. See [Azure AI Bot Service pricing](https://azure.microsoft.com/pricing/details/bot-services/).

> Your total cost will vary based on the AI models, orchestration complexity, and cloud services you use to deploy and maintain your agent.

### Cost comparison: declarative agent vs custom engine agent

| Feature           | Declarative agents                                                                                                  | Custom engine agents                                                                                                   |
|-------------------|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **License requirements** | Requires Microsoft 365 Copilot add-on license or Copilot Chat with eligible Microsoft 365 license                | No additional license required                                                                                         |
| **Hosting**       | Hosted by Microsoft 365 Copilot (no additional hosting costs)                                                       | Hosted externally (incurs hosting costs, e.g., Azure AI Foundry)                                                      |
| **Usage cost**    | For users with Microsoft 365 Copilot add-on licenses, no additional charges. <br> For users without licenses:<br> - No charges for instruction-based or public site-grounded agents.<br> - Metered charges for shared tenant data usage (e.g., SharePoint, Microsoft Graph connectors). | Varies based on license:<br> - No charges with Copilot license.<br> - Metered charges without license if shared data is used. |

## Related content

- [Copilot extensibility planning guide](planning-guide.md)
- [Agents overview](agents-overview.md)
- [Microsoft Graph connectors overview](overview-graph-connector.md)
