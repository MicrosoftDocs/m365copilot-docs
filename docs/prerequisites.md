---
title: Set Up Your Development Environment to Extend Microsoft 365 Copilot
description: Learn the prerequisites for extending Microsoft 365 Copilot with agents, plugins, and connectors.
author: maisarissi
ms.author: maisarissi
ms.topic: how-to
ms.date: 01/09/2025
---

# Set up your development environment for Microsoft 365 Copilot

You can build agents to extend, enrich, and customize Microsoft 365 Copilot for the unique way your customers work. This article describes how to set up your development environment to build Copilot extensibility solutions.

Microsoft 365 Copilot Chat is a broadly accessible, commercial AI chat interface that is available to all Microsoft 365 users. Copilot Chat users have access to agents that extend Microsoft 365 Copilot that are grounded on instructions or the web. Users in tenants that have metering enabled and users with Microsoft 365 Copilot licenses have access to Copilot agents with enhanced capabilities, such as grounding with SharePoint data and Microsoft Graph connectors.

For Microsoft 365 Copilot license information, see [License options](/copilot/microsoft-365/microsoft-365-copilot-licensing).

> [!NOTE]
> [Microsoft Copilot Pro](https://www.microsoft.com/store/b/copilotpro) (Copilot for individuals) doesn't currently support extensibility.

## Copilot development environment

You have the following options for a Copilot development environment:

- A Microsoft 365 Developer Program sandbox subscription with a Microsoft 365 Copilot license (available in limited preview through the [Microsoft 365 Developer TAP membership](#isv-partners-in-microsoft-365-developer-tap)).

    > [!NOTE]
    > Microsoft 365 Copilot isn't included in [Microsoft 365 Developer Program subscriptions](https://developer.microsoft.com/microsoft-365/dev-program#Subscription). Sandbox subscription availability is currently limited to Independent Software Vendor (ISV) partners who are part of TAP.

- An eligible [Microsoft 365 or Office 365 production environment](#customers-with-existing-microsoft-365-and-copilot-licenses) with a Microsoft 365 Copilot license.

    > [!NOTE]
    > When you build Copilot agents in production environments, you might encounter admin-imposed limitations. For example, administrators can block sideloading of custom apps or might not grant the necessary permissions required to build Microsoft Graph connectors. 

- A Microsoft 365 subscription without a Copilot license, such as [Microsoft 365 Business Basic](https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-business-basic), if you want to build and test agents for Microsoft 365 Copilot Chat, with limited capabilities. For details, see [Agent capabilities for Microsoft 365 users](#agent-capabilities-for-microsoft-365-users).

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

### Requirements for Microsoft Graph connectors

To build Microsoft Graph connectors, you must have a search administrator in your organization do the following:

- [Register an application](/graph/toolkit/get-started/add-aad-app-registration) and [grant admin consent](/graph/connecting-external-content-deploy-teams#update-microsoft-graph-permissions) for the required Microsoft Graph permissions in **Microsoft Entra admin center** ([entra.microsoft.com](https://entra.microsoft.com/)). 
    - This might not be an option if you're working in a production environment. Any deployed Microsoft Graph connector is accessible tenant-wide unless the external items security is locked down.
- Make sure that Microsoft Graph connections that you intend for Microsoft Search and Microsoft 365 Copilot are enabled for [inline results](/microsoftsearch/connectors-in-all-vertical) via the **Search & intelligence** section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)).

> [!NOTE]
> Indexing content with your connector is subject to the available index quota in the tenant. Standard Microsoft 365 and Microsoft 365 Copilot tenants include sufficient quota for you to start building connectors without incurring any costs. To learn more, see [Index quota](/microsoftsearch/licensing).

### Requirements for agents

In addition to a Microsoft 365 Copilot license, to build Copilot agents, you need to complete prerequisites depending on the tool that you choose to use. 

#### Teams Toolkit requirements

To build agents with Teams Toolkit and other IDEs, you must have your admin enable the ability to sideload a *custom app* to your tenant. 

To enable sideloading, from Teams admin center, select **Teams apps** > **Setup policies** > **Global (Org-wide default)**, and switch the  **Upload custom apps** toggle to **On**.

:::image type="content" source="./assets/images/tac-setup-policies.png" alt-text="Screenshot of org-wide setup policy with 'Upload custom apps' toggle enabled in Teams admin center":::

To manage your sideloaded custom apps, including agents, from the Teams client, go to **Apps** > **Manage your apps**.

#### Copilot Studio requirements

To use Copilot Studio to create agents and actions, you need the following:

- A [Microsoft Copilot Studio license](/microsoft-copilot-studio/requirements-licensing-subscriptions) (or an existing Power Virtual Agents license).
- Your Power Platform admin or Dynamics 365 admin must [enable Generative AI features](/power-platform/admin/geographical-availability-copilot) in Power Platform admin center.
- Your Microsoft 365 tenant admin must [deploy the Copilot Studio app in the Microsoft 365 admin center](/microsoft-copilot-studio/copilot-plugins-overview#deploy-the-copilot-studio-app-in-microsoft-365-admin-center-admin).

### Enabling developer mode

You can use *developer mode* in Copilot to test your test whether and how the orchestrator selects your plugin in response to a given prompt. 

To enable developer mode, in Copilot Chat, type `-developer on`. To disable developer mode, type `-developer off`.

:::image type="content" source="./assets/images/developer-mode-on.png" alt-text="Screenshot of `Microsoft 365 Copilot` session where user has typed `-developer on` to successfully enable developer mode":::

Developer mode is only available within Microsoft 365 Copilot (Copilot for Work) experiences. For more information, see [Debugging plugin selection](debugging-copilot-plugin.md).

## Microsoft 365 Copilot developer licenses

Accounts used to test Copilot extensibility need a Microsoft 365 Copilot Developer license. Admins can manage Microsoft 365 Copilot Developer licenses in the Microsoft 365 admin center (under **Billing > Licenses**). You can also [use PowerShell to assign Microsoft 365 licenses to user accounts](/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell).

## Agent capabilities for Microsoft 365 users

Microsoft 365 Copilot Chat is available to all users in Microsoft 365 organizations. Copilot Chat users can access and use agents via the browser or the in-app experience in Teams and Outlook.

Some agent types and and agent capabilities are only available to licensed Microsoft 365 Copilot users or users in tenants that allow metered usage.

The following table lists the Copilot agent types and agent capabilities that are available to Microsoft 365 Copilot users based on licensing and metered usage configuration in the tenant. 

| Agent type and capability | Copilot Chat (no metered usage) | Copilot Chat (metered usage) | Microsoft 365 Copilot (licensed) |
|:--------------------------|:---------------------------|:-----------------------------|:------------------------|
|**Declarative agents**     |  :white_check_mark: * |  :white_check_mark:  * |  :white_check_mark:  |
|Copilot Studio agent builder | :x: **| :white_check_mark: | :white_check_mark: |
|Custom actions| :white_check_mark: | :white_check_mark: | :white_check_mark: |
|Custom instructions and uploaded documents| :white_check_mark: | :white_check_mark: | :white_check_mark: |
|File upload | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|Code interpreter | :x: | :white_check_mark: | :white_check_mark: |
|Image generator| :x: | :white_check_mark: | :white_check_mark: |
|Web search | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|SharePoint data grounding| :x: | :white_check_mark: | :white_check_mark: |
|Microsoft Graph connector grounding | :x: | :white_check_mark: | :white_check_mark: |
|**Custom engine agents**| :x: | :white_check_mark: | :white_check_mark: |

\* Available with limited capabilities.

\** Coming soon.

## Frequently asked questions

#### Can I upgrade my Microsoft 365 business license to use Microsoft 365 Copilot?

Yes. If you have a Microsoft 365 Business Standard or Business Premium license, you can [purchase a license for Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/business/copilot-for-microsoft-365) on a one-year or three-year term basis.

#### Can I use my Microsoft 365 Developer Program instant sandbox to develop with Copilot?

No. Microsoft 365 Developer Program sandbox subscriptions don't support commerce and you can't purchase Microsoft 365 Copilot for it.

#### Can Microsoft 365 Developer Program ISV sandbox subscriptions with Copilot be renewed when the licenses expire?

Yes. If you continue to qualify for the ISV sandbox tenant (Microsoft 365 E5 Developer SKU V2), your development environment renews automatically.

#### I'm not an ISV and I don't have a Microsoft 365 Copilot license. Can I get a Microsoft 365 Copilot development environment?

Not at this time. Development environments that include Microsoft 365 Copilot are only available to ISVs currently through Microsoft 365 TAP.

## Security and privacy

Copilot uses existing permissions and policies to deliver the most relevant information, building on our existing commitments to data security and data privacy in the enterprise. For information about how Copilot uses and protects organizational data, see [Data, Privacy, and Security for Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-privacy). For data privacy and security considerations for developing different Copilot extensibility solutions, see [Data, Privacy, and Security considerations of extending Microsoft 365 Copilot](data-privacy-security.md).
