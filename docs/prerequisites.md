---
title: Set Up Your Development Environment to Extend Microsoft 365 Copilot
description: Learn the prerequisites for extending Microsoft 365 Copilot with agents, plugins, and connectors.
author: maisarissi
ms.author: maisarissi
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 07/18/2025
---

# Set up your development environment for Microsoft 365 Copilot

You can build agents to extend, enrich, and customize Microsoft 365 Copilot for the unique way your customers work. This article describes how to set up your development environment to extend Microsoft 365 Copilot.

Microsoft 365 Copilot Chat is a broadly accessible AI chat interface that is available to all Microsoft 365 users. Copilot Chat users have access to agents that extend its capabilities and can be grounded on instructions or the web. Users in tenants that have [Copilot Studio metering enabled](#copilot-studio-message-usage-rates) and users with Microsoft 365 Copilot licenses have access to agents with enhanced capabilities, such as grounding with SharePoint data and Microsoft 365 Copilot connectors.

For Microsoft 365 Copilot license information, see [License options](/copilot/microsoft-365/microsoft-365-copilot-licensing).

## Copilot development environment

You have the following options for a Copilot development environment:

- A [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) sandbox subscription (without a Microsoft 365 Copilot license). Microsoft 365 Developer Program members who [qualify for a developer subscription](/office/developer-program/microsoft-365-developer-program-faq#who-qualifies-for-a-microsoft-365-e5-developer-subscription-) can use their subscription to develop agents with limited capabilities.

    At this time, because the subscription doesn't support commerce, you can't ground your agent on organizational data or add other capabilities. For details, see [Agent capabilities for Microsoft 365 users](#agent-capabilities-for-microsoft-365-users).

- An eligible [Microsoft 365 or Office 365 production environment](#organizations-with-microsoft-365-copilot-licenses) with a Microsoft 365 Copilot license.

    > [!NOTE]
    > When you build agents in production environments, you might encounter admin-imposed limitations. For example, administrators can block sideloading of custom apps or might not grant the necessary permissions required to build Copilot connectors.

- A Microsoft 365 subscription without a Copilot license, such as [Microsoft 365 Business Basic](https://www.microsoft.com/microsoft-365/business/microsoft-365-business-basic), if you want to build and test agents for Microsoft 365 Copilot Chat, with limited capabilities. For details, see [Agent capabilities for Microsoft 365 users](#agent-capabilities-for-microsoft-365-users).

You can also purchase a Microsoft 365 Copilot license and set up a development environment independent of your production environment, where you can be your own administrator.

### Organizations with Microsoft 365 Copilot licenses

You can develop Copilot extensibility solutions by working directly in a [Microsoft 365 production environment](/copilot/microsoft-365/microsoft-365-copilot-overview#availability) with a [Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/copilot/enterprise#FAQ) license.

Contact your Microsoft representative to add Copilot to your Microsoft plan. Enterprise customers need to be on the Current Channel or Monthly Enterprise Channel for Microsoft 365 apps to have access to Copilot.

### Organizations without Microsoft 365 Copilot licenses

You can develop Copilot extensibility solutions for users in organizations without Copilot licenses, with some limitations to your agent capabilities. If you want to take advantage of agent capabilities such as grounding on organizational data, you can enable [Copilot Studio metering](#copilot-studio-message-usage-rates). For more information, see [Agent capabilities for Microsoft 365 users](#agent-capabilities-for-microsoft-365-users).

## Requirements for Copilot extensibility options

You can extend Microsoft 365 Copilot with the intelligence of external services and data in several ways:

- By building agents to customize Copilot.
- By adding skills with [Teams message extension plugins](overview-message-extension-bot.md) and [Copilot Studio actions](overview-business-applications.md).
- By extending the knowledge in Copilot with [Copilot connectors](overview-copilot-connector.md).

To learn more and choose the best extensibility path for your users, see [Copilot extensibility planning guide](planning-guide.md) and [Agents overview](agents-overview.md).

### Requirements for agents

To build agents, you need to complete prerequisites depending on the tool that you choose to use.

> [!NOTE]
> Some agent capabilities are only available to users in tenants with Copilot Studio metered usage enabled or users with Microsoft 365 Copilot licenses. For example, if you want to build agents that are grounded in organizational data, you need to enable metering or purchase a Microsoft 365 Copilot license. For details, see [Agent capabilities for Microsoft 365 users](#agent-capabilities-for-microsoft-365-users).

#### Microsoft 365 Agents Toolkit requirements

You can use [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) to build agents without a Microsoft 365 Copilot license. If you want to build agents that are grounded on organizational data via SharePoint or Copilot connectors, you need to either set up billing in your tenant or purchase a Microsoft 365 Copilot license.

To build agents with Agents Toolkit and other IDEs, you must have your admin enable the ability to sideload a *custom app* to your tenant.

To enable sideloading, from Teams admin center, select **Teams apps** > **Setup policies** > **Global (Org-wide default)**, and switch the  **Upload custom apps** toggle to **On**.

:::image type="content" source="./assets/images/tac-setup-policies.png" alt-text="Screenshot of org-wide setup policy with 'Upload custom apps' toggle enabled in Teams admin center":::

To manage your sideloaded custom apps, including agents, from the Teams client, go to **Apps** > **Manage your apps**.

#### Copilot Studio requirements

Copilot Studio is available to all Microsoft 365 users. You can use Copilot Studio to create agents and actions. If you want to build agents that are grounded on organizational data via SharePoint or Copilot connectors, you need to either set up billing in your tenant or purchase a Copilot Studio license. For more information, see [Manage message capacity](/microsoft-copilot-studio/requirements-messages-management).

The following steps are required for you to use Copilot Studio to build agents:

- Your Power Platform admin or Dynamics 365 admin must [enable Generative AI features](/power-platform/admin/geographical-availability-copilot) in Power Platform admin center.
- Your Microsoft 365 tenant admin must [deploy the Copilot Studio app in the Microsoft 365 admin center](/microsoft-copilot-studio/copilot-plugins-overview#deploy-the-copilot-studio-app-in-microsoft-365-admin-center-admin).

### Enabling developer mode

You can use *developer mode* in Copilot to test whether and how the orchestrator selects your plugin in response to a given prompt.

To enable developer mode, in Copilot Chat, type `-developer on`. To disable developer mode, type `-developer off`.

:::image type="content" source="./assets/images/developer-mode-on.png" alt-text="Screenshot of `Microsoft 365 Copilot` session where user has typed `-developer on` to successfully enable developer mode":::

Developer mode is only available within Microsoft 365 Copilot (Copilot for Work) experiences. For more information, see [Debugging agents](debugging-copilot-agent.md).

## Microsoft 365 Copilot developer licenses

Accounts used to test agents that are grounded on organizational data or that include enhanced capabilities need a Microsoft 365 Copilot Developer license. Admins can manage Microsoft 365 Copilot Developer licenses in the Microsoft 365 admin center (under **Billing > Licenses**). You can also [use PowerShell to assign Microsoft 365 licenses to user accounts](/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell).

## Agent capabilities for Microsoft 365 users

Microsoft 365 Copilot Chat is available to all users in Microsoft 365 organizations. Copilot Chat users can access and use agents via the Microsoft 365 Copilot app, the browser, or the in-app experience in Teams.

> [!NOTE]
> Copilot Chat and the agent experience in Word and PowerPoint is available only to users with a Microsoft 365 Copilot license. The agent experience is currently not available in the Copilot Chat experience in Outlook.

Some agent types and and agent capabilities are only available to licensed Microsoft 365 Copilot users or users in tenants that allow metered usage.

The following table lists the agent types and agent capabilities that are available to users based on licensing and metered usage configuration in the tenant.

| Capability | Copilot Chat (no metered usage)* | Copilot Chat (metered usage) | Microsoft 365 Copilot (licensed) |
|:--------------------------|:---------------------------|:-----------------------------|:------------------------|
|Copilot Studio agent builder |  :white_check_mark: | :white_check_mark:\** | :white_check_mark: |
|Copilot Studio |  :white_check_mark: |  :white_check_mark:   |  :white_check_mark:  |
|[**Declarative agents**](overview-declarative-agent.md)     | |  |  |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custom actions| :white_check_mark: | :white_check_mark: | :white_check_mark: |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custom instructions | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Code interpreter | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Image generator| :white_check_mark: | :white_check_mark: | :white_check_mark: |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custom knowledge:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web search | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custom knowledge:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scoped web search | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custom knowledge:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copilot connectors</br> | :x: | :white_check_mark: | :white_check_mark: |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custom knowledge:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SharePoint data</br>| :x: | :white_check_mark: | :white_check_mark: |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custom knowledge:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Embedded file content</br>| :x: | :white_check_mark: | :white_check_mark: |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custom knowledge:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dataverse | :x: | :white_check_mark: | :white_check_mark: |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custom knowledge:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email | :x: | :x: | :white_check_mark: |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custom knowledge:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;People | :x: | :x: | :white_check_mark: |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Custom knowledge:</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Teams messages | :x: | :x: | :white_check_mark: |
|[**Custom engine agents**](overview-custom-engine-agent.md)| :white_check_mark: | :white_check_mark: | :white_check_mark: |

\* Usage limits apply to all included features.
\** Users who are configured with a pay-as-you-go plan in the Microsoft 365 admin center don't have access to embedded file content, SharePoint data, and Microsoft 365 Copilot connectors custom knowledge sources when they use Copilot Studio agent builder to create agents. 

> [!NOTE]
> For details about data, privacy, and security for web search in Microsoft 365 Copilot Chat and Microsoft 365 Copilot, see [Data, privacy, and security for web search](/copilot/microsoft-365/manage-public-web-access).

### Copilot Studio message usage rates

If you choose the metered pay-as-you-go option for Copilot Studio, utilization rates apply based on the type of agent and prompt.

Billing is based on message units. The total cost is calculated based on the sum of the messages used by your organization. The number of messages consumed by an agent depends on the complexity of the agent, how often customers interact with it, and the features they use.

The following table lists the utilization rates for different agent capabilities for Copilot Chat users and users with Microsoft 365 Copilot licenses. Note that interactions can use multiple usage rates; for example, an agent grounded in organizational data can use 12 messages (10 for organizational grounding and two for dynamic responses).

Each message unit costs $0.01.

| Agent capability | Copilot Chat (metered usage) | Microsoft 365 Copilot (licensed) |
|:-----------------|:-----------------------------|:---------------------------------|
|Web-grounded answers| 0 | 0|
|Classic answers | 1 message/$0.01 | 0 |
|Generative answers based on knowledge sources | 2 messages/$0.02 | 0 |
|Tenant data responses based on Copilot connector grounding | 10 messages/$0.10 | 0 |
|Agent actions via triggers, topics, agent flows, text & generative AI tools, and Power Platform connectors | 5 messages/$0.05 | 0 (Autonomous use message/$0.05) |
| **Text and generative AI tools** (Message rate per 10 responses)| | |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Basic| 1 message/$0.01 | 1 message/$0.01 |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Standard| 15 messages/$0.15 | 15 messages/$0.15 |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Premium| 100 messages/$1.00 | 100 messages/$1.00 |
|Agent flow actions (Message rate per 100 actions) | 13 message/$0.13| 13 message/$0.13 |

## Frequently asked questions

### Can I use my Microsoft 365 Developer Program subscription to develop with Copilot?

You can use your Microsoft 365 Developer Program subscription to build agents with limited capabilities that are grounded on web search. Because Microsoft 365 Developer Program subscriptions don't support commerce, you can't purchase Microsoft 365 Copilot licenses or enable metering, so you can't use your subscription to build agents grounded on organizational data or add other capabilities.

### I'm not an ISV and I don't have a Microsoft 365 Copilot license. Can I get a Microsoft 365 Copilot development environment?

If you have a Microsoft 365 subscription, you can build and test agents in Microsoft 365 Copilot Chat, with limited capabilities. You need to enable metering in your tenant or purchase a Microsoft 365 Copilot license if you want to build agents that are grounded in organizational data. For details, see [Agent capabilities for Microsoft 365 users](#agent-capabilities-for-microsoft-365-users).

## Security and privacy

Copilot uses existing permissions and policies to deliver the most relevant information, building on our existing commitments to data security and data privacy in the enterprise. For information about how Copilot uses and protects organizational data, see [Data, Privacy, and Security for Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-privacy). For data privacy and security considerations for developing different Copilot extensibility solutions, see [Data, Privacy, and Security considerations of extending Microsoft 365 Copilot](data-privacy-security.md).
