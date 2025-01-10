---
title: Set up your development environment for Microsoft 365 Copilot
description: Learn the prerequisites for extending Microsoft 365 Copilot with agents, plugins, and connectors.
author: maisarissi
ms.author: maisarissi
ms.topic: how-to
ms.date: 01/09/2025
---

# Set up your development environment for Microsoft 365 Copilot

Microsoft 365 Copilot is available to organizations of all sizes. For information about license requirements for MIcrosoft 365 Copilot, see [License options](/copilot/microsoft-365/microsoft-365-copilot-licensing). Unlicensed users and users in tenants with metering enabled also have access to Microsoft 365 Copilot Chat, which is a broadly accessible, commercial AI chat interface for all Microsoft 365 users.

> [!NOTE]
> [Microsoft Copilot Pro](https://www.microsoft.com/store/b/copilotpro) (Copilot for individuals) doesn't currently support extensibility.

This article describes the developer environment prerequisites and requirements to extend, enrich, and customize Microsoft 365 Copilot for the unique way your customers work.

## Prerequisites

You can get a development environment for Copilot in two ways:

- With a Microsoft 365 Developer Program sandbox subscription with a Copilot license (available in limited preview through the [Microsoft 365 Developer TAP membership](#isv-partners-in-microsoft-365-developer-tap)).
- With an eligible [Microsoft 365 or Office 365 production environment](#customers-with-existing-microsoft-365-and-copilot-licenses) with a Microsoft 365 Copilot license.

> [!NOTE]
> Microsoft 365 Copilot isn't included in [Microsoft 365 Developer Program subscriptions](https://developer.microsoft.com/microsoft-365/dev-program#Subscription). Sandbox tenant availability is currently limited to Independent Software Vendor (ISV) partners who are part of the TAP program.

When you build Copilot agents in production environments, be aware that you might encounter admin-imposed limitations. For example, administrators can block sideloading of custom apps or might not grant the necessary permissions required to build Microsoft Graph connectors. Sandbox tenants provide an environment where you can develop solutions independent of your production environment and be your own administrator.

### ISV Partners in Microsoft 365 Developer TAP

We recommend that ISV partners who build multi-tenant solutions acquire a new Microsoft 365 Developer Program sandbox subscription that includes Copilot. To get a developer subscription, join the [Microsoft 365 Developer Technology Adoption Program (TAP)](https://aka.ms/m365devtap).

### Organizations with Microsoft 365 and Copilot licenses

You can develop Copilot extensibility solutions by working directly in a [Microsoft 365 production environment](/copilot/microsoft-365/microsoft-365-copilot-overview#availability) with a [Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/enterprise/copilot-for-microsoft-365) license.

Contact your Microsoft representative to add Copilot to your Microsoft plan. Enterprise customers need to be on the Current Channel or Monthly Enterprise Channel for Microsoft 365 apps to have access to Copilot.

### Organizations with Microsoft 365 and without Copilot licenses

You can develop Copilot extensibility solutions for users in organizations without Copilot licenses or users in tenants that allow metered usage, with some limitations to the capabilities that you can include. For more information, see [Agent capabilities for licensed, metered, and unlicensed users](#agent-capabilities-for-licensed-metered-and-unlicensed-users).

## Extensibility options and requirements

Developers can extend Microsoft 365 Copilot with the intelligence of external services and data by: 

- Building agents to customize Copilot.
- Adding skills with [Teams message extension plugins](overview-message-extension-bot.md) and [Copilot Studio actions](overview-business-applications.md).
- Extending Copilot's knowledge with [Microsoft Graph connectors](overview-graph-connector.md).

To learn more and choose the best extensibility path for your users, see [Extensibility options for Copilot](decision-guide.md).

### Requirements for Microsoft Graph connectors

To build Microsoft Graph connectors, a search administrator must:

- [Register an application](/graph/toolkit/get-started/add-aad-app-registration) and [grant admin consent](/graph/connecting-external-content-deploy-teams#update-microsoft-graph-permissions) for the required Microsoft Graph permissions in **Microsoft Entra admin center** ([entra.microsoft.com](https://entra.microsoft.com/)). This might not be an option for developers working in production environments. Any deployed Microsoft Graph connector is accessible tenant-wide unless the external items security is locked down.
- Ensure that Microsoft Graph connections you intend for Microsoft Search and Microsoft 365 Copilot are enabled for [inline results](/microsoftsearch/connectors-in-all-vertical) through the **Search & intelligence** section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)).

Indexing content with your connector is subject to the available index quota in the tenant. Standard Microsoft 365 and Microsoft 365 Copilot tenants include sufficient quota for you to start building connectors without incurring any costs. To learn more, see [Index quota](/microsoftsearch/licensing).

### Requirements for agents

In addition to a Microsoft 365 Copilot license, to build Copilot agents, you'll need to complete prerequisites depending on what tool you choose to use. 

#### Teams Toolkit requirements

To build agents with Teams Toolkit and other IDEs, your admin needs to enable the ability to sideload a *custom app* to your tenant. 

To enable sideloading, from Teams admin center, select **Teams apps** > **Setup policies** > **Global (Org-wide default)** and enable **Upload custom apps**.

:::image type="content" source="./assets/images/tac-setup-policies.png" alt-text="Screenshot of org-wide setup policy with 'Upload custom apps' toggle enabled in Teams admin center":::

To manage your sideloaded custom apps, including agents, from the Teams client, go to **Apps** > **Manage your apps**.

#### Copilot Studio requirements

To create agents and actions with Copilot Studio, you need the following:

- A [Microsoft Copilot Studio license](/microsoft-copilot-studio/requirements-licensing-subscriptions) (or an existing Power Virtual Agents license).
- Your Power Platform admin or Dynamics 365 admin must [enable Generative AI features](/power-platform/admin/geographical-availability-copilot) in Power Platform admin center.
- Your Microsoft 365 tenant admin must [deploy the Copilot Studio app in the Microsoft 365 admin center](/microsoft-copilot-studio/copilot-plugins-overview#deploy-the-copilot-studio-app-in-microsoft-365-admin-center-admin).

### Enabling developer mode

You can use *developer mode* in Copilot to test your test whether and how the orchestrator selects your plugin in response to a given prompt. 

To enable developer mode, in Microsoft 365 Copilot Chat, type `-developer on`. To disable developer mode, type `developer off`.

:::image type="content" source="./assets/images/developer-mode-on.png" alt-text="Screenshot of `Microsoft 365 Copilot` session where user has typed `-developer on` to successfully enable developer mode":::

Developer mode is only available within Microsoft 365 Copilot (Copilot for Work) experiences. For more information, see [Debugging plugin selection](debugging-copilot-plugin.md).

## Microsoft 365 Copilot developer licenses

Accounts used to test Copilot extensibility need a Microsoft 365 Copilot Developer license. Admins can manage Microsoft 365 Copilot Developer licenses in the Microsoft 365 admin center (under **Billing > Licenses**). You can also [use PowerShell to assign Microsoft 365 licenses to user accounts](/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell).

## Agent capabilities for licensed, metered, and unlicensed users

Microsoft 365 Copilot Chat is available to unlicensed and licensed users via {list surface area information}. 

Some types of agents and agent capabilities are only available to licensed Microsoft 365 Copilot Chat users or users in tenants that allow metered usage. For details about agent availability in Microsoft 365 Copilot Chat, see the following table.

| Agent type and capability | Copilot Chat (no metered usage) | Copilot Chat (metered usage) | Copilot Chat (licensed) |
|:--------------------------|:---------------------------|:-----------------------------|:------------------------|
|**Declarative agents**     | 
|Copilot Studio agent builder | :x: | :white_check_mark: | :white_check_mark: |
|Custom actions| :white_check_mark: | :white_check_mark: | :white_check_mark: |
|Custom instructions and uploaded documents| :white_check_mark: | :white_check_mark: | :white_check_mark: |
|Code interpreter | :x: | :white_check_mark: | :white_check_mark: |
|Image generator| :x: | :white_check_mark: | :white_check_mark: |
|Web search | :white_check_mark: | :white_check_mark: | :white_check_mark: |
|SharePoint data grounding| :x: | :white_check_mark: | :white_check_mark: |
|Microsoft Graph connector grounding | :x: | :white_check_mark: | :white_check_mark: |
|**Custom engine agents**| :x: | :white_check_mark: | :white_check_mark: |

## Frequently asked questions

#### Can I upgrade my Microsoft 365 business license to use Microsoft 365 Copilot?

Yes. If you have a Microsoft 365 Business Standard or Business Premium license, you can [purchase a license for Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/business/copilot-for-microsoft-365) on a one-year or three-year term basis.

#### Can I use my Microsoft 365 Developer Program instant sandbox to develop with Copilot?

No. Microsoft 365 Developer Program sandbox subscriptions don't support commerce and you can't purchase Microsoft 365 Copilot for it.

#### Can ISV sandbox tenants with Copilot be renewed when the licenses expire?

Yes. If you continue to qualify for the ISV sandbox tenant (Microsoft 365 E5 Developer SKU V2), your development environment renews automatically.

#### I'm not an ISV and I don't have a Microsoft 365 Copilot license. Can I get Microsoft 365 Copilot development environment?

Not at this time. Currently dev environments that include Microsoft 365 Copilot are only available to ISVs through the Microsoft 365 TAP.

## Security and privacy

Copilot uses existing permissions and policies to deliver the most relevant information, building on our existing commitments to data security and data privacy in the enterprise. For information about how Copilot uses and protects organizational data, see [Data, Privacy, and Security for Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-privacy). For data privacy and security considerations for developing different Copilot extensibility solutions, see [Data, Privacy, and Security considerations of extending Microsoft 365 Copilot](data-privacy-security.md).
