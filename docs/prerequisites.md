---
title: Set Up Your Development Environment to Extend Microsoft 365 Copilot
description: Learn the prerequisites for extending Microsoft 365 Copilot with agents, plugins, and connectors.
author: maisarissi
ms.author: maisarissi
ms.topic: how-to
ms.date: 01/15/2025
---

# Set up your development environment for Microsoft 365 Copilot

You can build agents to extend, enrich, and customize Microsoft 365 Copilot for the unique way your customers work. This article describes how to set up your development environment to extend Microsoft 365 Copilot.

Microsoft 365 Copilot Chat is a broadly accessible AI chat interface that is available to all Microsoft 365 users. Copilot Chat users have access to agents that extend its capabilities and can be grounded on instructions or the web. Users in tenants that have metering enabled and users with Microsoft 365 Copilot licenses have access to agents with enhanced capabilities, such as grounding with SharePoint data and Microsoft Graph connectors.

For Microsoft 365 Copilot license information, see [License options](/copilot/microsoft-365/microsoft-365-copilot-licensing).

## Copilot development environment

You have the following options for a Copilot development environment:

- A Microsoft 365 Developer Program sandbox subscription with a Microsoft 365 Copilot license (available in limited preview through the [Microsoft 365 Developer TAP membership](#microsoft-365-developer-program-sandbox-subscription-for-isvs)).

    > [!NOTE]
    > - Microsoft 365 Copilot isn't included in [Microsoft 365 Developer Program subscriptions](https://developer.microsoft.com/microsoft-365/dev-program#Subscription). Sandbox subscription availability is currently limited to Independent Software Vendor (ISV) partners who are part of TAP.

- A [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) sandbox subscription (without a Microsoft 365 Copilot license). Microsoft 365 Developer Program members who [qualify for a developer subscription](/office/developer-program/microsoft-365-developer-program-faq#who-qualifies-for-a-microsoft-365-e5-developer-subscription-) can use their subscription to develop agents with limited capabilities. At this time, because the subscription doesn't support commerce, you can't ground your agent on organizational data or add other capabilities. For details, see [Agent capabilities for Microsoft 365 users](#agent-capabilities-for-microsoft-365-users).

- An eligible [Microsoft 365 or Office 365 production environment](#organizations-with-microsoft-365-copilot-licenses) with a Microsoft 365 Copilot license.

    > [!NOTE]
    > When you build agents in production environments, you might encounter admin-imposed limitations. For example, administrators can block sideloading of custom apps or might not grant the necessary permissions required to build Microsoft Graph connectors. 

- A Microsoft 365 subscription without a Copilot license, such as [Microsoft 365 Business Basic](https://www.microsoft.com/microsoft-365/business/microsoft-365-business-basic), if you want to build and test agents for Microsoft 365 Copilot Chat, with limited capabilities. For details, see [Agent capabilities for Microsoft 365 users](#agent-capabilities-for-microsoft-365-users).

You can also purchase a Microsoft 365 Copilot license and set up a development environment independent of your production environment where you can be your own administrator.

### Microsoft 365 Developer Program sandbox subscription for ISVs

We recommend that ISV partners who build multi-tenant solutions acquire a new Microsoft 365 Developer Program sandbox subscription that includes Microsoft 365 Copilot. 

To get a developer subscription, join the [Microsoft 365 Developer Technology Adoption Program (TAP)](https://aka.ms/m365devtap).

### Organizations with Microsoft 365 Copilot licenses

You can develop Copilot extensibility solutions by working directly in a [Microsoft 365 production environment](/copilot/microsoft-365/microsoft-365-copilot-overview#availability) with a [Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/copilot/enterprise#FAQ) license.

Contact your Microsoft representative to add Copilot to your Microsoft plan. Enterprise customers need to be on the Current Channel or Monthly Enterprise Channel for Microsoft 365 apps to have access to Copilot.

### Organizations without Microsoft 365 Copilot licenses

You can develop Copilot extensibility solutions for users in organizations without Copilot licenses or users in tenants that allow metered usage, with some limitations to your agent capabilities. For more information, see [Agent capabilities for Microsoft 365 users](#agent-capabilities-for-microsoft-365-users).

## Requirements for Copilot extensibility options

You can extend Microsoft 365 Copilot with the intelligence of external services and data in several ways: 

- By building agents to customize Copilot.
- By adding skills with [Teams message extension plugins](overview-message-extension-bot.md) and [Copilot Studio actions](overview-business-applications.md).
- By extending the knowledge in Copilot with [Microsoft Graph connectors](overview-graph-connector.md).

To learn more and choose the best extensibility path for your users, see [Extensibility options for Copilot](decision-guide.md).

### Requirements for agents

To build agents, you need to complete prerequisites depending on the tool that you choose to use.

> [!NOTE]
> Some agent capabilities are only available to users in tenants with metered usage enabled or users with Microsoft 365 Copilot licenses. For example, if you want to build agents that are grounded in organizational data, you need to enable metering or purchase a Microsoft 365 Copilot license. For details, see [Agent capabilities for Microsoft 365 users](#agent-capabilities-for-microsoft-365-users).

#### Teams Toolkit requirements

Teams Toolkit is available to all Microsoft 365 users. You can use Teams Toolkit to build agents. If you want to build agents that are grounded on organizational data via SharePoint or Microsoft Graph connectors, you need to either set up billing in your tenant or purchase a Microsoft 365 Copilot license.

To build agents with Teams Toolkit and other IDEs, you must have your admin enable the ability to sideload a *custom app* to your tenant. 

To enable sideloading, from Teams admin center, select **Teams apps** > **Setup policies** > **Global (Org-wide default)**, and switch the  **Upload custom apps** toggle to **On**.

:::image type="content" source="./assets/images/tac-setup-policies.png" alt-text="Screenshot of org-wide setup policy with 'Upload custom apps' toggle enabled in Teams admin center":::

To manage your sideloaded custom apps, including agents, from the Teams client, go to **Apps** > **Manage your apps**.

#### Copilot Studio requirements

Copilot Studio is available to all Microsoft 365 users. You can use Copilot Studio and the Copilot Studio agent builder to create agents and actions. If you want to build agents that are grounded on organizational data via SharePoint or Microsoft Graph connectors, you need to either set up billing in your tenant or purchase a Copilot Studio license. For more information, see [Enabling agents in Microsoft 365 Copilot Chat](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/enabling-agents-in-microsoft-365-copilot-chat/).

The following steps are required for you to use Copilot Studio to build agents:

- Your Power Platform admin or Dynamics 365 admin must [enable Generative AI features](/power-platform/admin/geographical-availability-copilot) in Power Platform admin center.
- Your Microsoft 365 tenant admin must [deploy the Copilot Studio app in the Microsoft 365 admin center](/microsoft-copilot-studio/copilot-plugins-overview#deploy-the-copilot-studio-app-in-microsoft-365-admin-center-admin).

### Enabling developer mode

You can use *developer mode* in Copilot to test your test whether and how the orchestrator selects your plugin in response to a given prompt. 

To enable developer mode, in Copilot Chat, type `-developer on`. To disable developer mode, type `-developer off`.

:::image type="content" source="./assets/images/developer-mode-on.png" alt-text="Screenshot of `Microsoft 365 Copilot` session where user has typed `-developer on` to successfully enable developer mode":::

Developer mode is only available within Microsoft 365 Copilot (Copilot for Work) experiences. For more information, see [Debugging plugin selection](debugging-copilot-plugin.md).

## Microsoft 365 Copilot developer licenses

Accounts used to test agents that are grounded on organizational data or that include enhanced capabilities need a Microsoft 365 Copilot Developer license. Admins can manage Microsoft 365 Copilot Developer licenses in the Microsoft 365 admin center (under **Billing > Licenses**). You can also [use PowerShell to assign Microsoft 365 licenses to user accounts](/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell).

## Agent capabilities for Microsoft 365 users

Microsoft 365 Copilot Chat is available to all users in Microsoft 365 organizations. Copilot Chat users can access and use agents via the browser or the in-app experience in Teams.

> [!NOTE]
> Copilot Chat and the agent experience in Word and PowerPoint is available only to users with a Microsoft 365 Copilot license.

Some agent types and and agent capabilities are only available to licensed Microsoft 365 Copilot users or users in tenants that allow metered usage. 

The following table lists the agent types and agent capabilities that are available to users based on licensing and metered usage configuration in the tenant.

| Capability | Copilot Chat (no metered usage)* | Copilot Chat (metered usage) | Microsoft 365 Copilot (licensed) |
|:--------------------------|:---------------------------|:-----------------------------|:------------------------|
|Copilot Studio agent builder | :white_check_mark: * | :white_check_mark: | :white_check_mark: |
|Copilot Studio |  :white_check_mark: * |  :white_check_mark:   |  :white_check_mark:  |
|[**Declarative agents**](overview-declarative-agent.md)     | |  |  |
|Custom actions| :white_check_mark: | :white_check_mark: | :white_check_mark: |
|Custom instructions | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|Code interpreter | :x: | :white_check_mark: | :white_check_mark: |
|Image generator| :x: | :white_check_mark: | :white_check_mark: |
|Custom knowledge: File upload | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|Custom knowledge: Web search | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|Custom knowledge: SharePoint data grounding| :x: | :white_check_mark: | :white_check_mark: |
|Custom knowledge: Microsoft Graph connector grounding | :x: | :white_check_mark: | :white_check_mark: |
|[**Custom engine agents**](overview-custom-engine-agent.md)| :x: | :white_check_mark: | :white_check_mark: |


\* Usage limits apply to all included features.

## Frequently asked questions

#### Can I use my Microsoft 365 Developer Program subscription to develop with Copilot?

You can use your Microsoft 365 Developer Program subscription to build agents with limited capabilities that are grounded on web search. Because Microsoft 365 Developer Program subscriptions don't support commerce, you can't purchase Microsoft 365 Copilot licenses or enable metering, so you can't use your subscription to build agents grounded on organizational data or add other capabilities.

#### Can Microsoft 365 Developer Program ISV sandbox subscriptions with Copilot be renewed when the licenses expire?

Yes. If you continue to qualify for the ISV sandbox tenant (Microsoft 365 E5 developer subscription), your development environment renews automatically.

#### I'm not an ISV and I don't have a Microsoft 365 Copilot license. Can I get a Microsoft 365 Copilot development environment?

If you have a Microsoft 365 subscription, you can build and test agents in Microsoft 365 Copilot Chat, with limited capabilities. You need to enable metering in your tenant or purchase a Microsoft 365 Copilot license if you want to build agents that are grounded in organizational data. For details, see [Agent capabilities for Microsoft 365 users](#agent-capabilities-for-microsoft-365-users).

## Security and privacy

Copilot uses existing permissions and policies to deliver the most relevant information, building on our existing commitments to data security and data privacy in the enterprise. For information about how Copilot uses and protects organizational data, see [Data, Privacy, and Security for Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-privacy). For data privacy and security considerations for developing different Copilot extensibility solutions, see [Data, Privacy, and Security considerations of extending Microsoft 365 Copilot](data-privacy-security.md).
