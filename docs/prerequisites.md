---
title: Set up your development environment for Copilot for Microsoft 365
description: Learn the prerequisites for extending Copilot for Microsoft 365 with agents, plugins, and connectors.
author: maisarissi
ms.author: maisarissi
ms.topic: how-to
ms.date: 9/16/2024
---

# Set up your development environment for Copilot for Microsoft 365

Copilot for Microsoft 365 is [generally available](https://techcommunity.microsoft.com/t5/microsoft-365-copilot/microsoft-365-copilot-is-generally-available/ba-p/3969331), and extensibility for Copilot for Microsoft 365 is in public preview. Copilot for Microsoft 365 is [available to organizations](/copilot/microsoft-365/microsoft-365-copilot-overview#availability) of all sizes. There's no minimum license purchase, but there's a 12-month commitment after a one-month free trial. [Microsoft Copilot Pro](https://www.microsoft.com/store/b/copilotpro) (Copilot for individuals) doesn't currently support extensibility.

This article summarizes the developer environment prerequisites and requirements to extend, enrich, and customize Copilot for Microsoft 365 for the unique way your customers work.

## Prerequisites

Developers have two ways to obtain a developer environment for Copilot:

1. With a sandbox Microsoft 365 tenant with Copilot (available in limited preview through [Microsoft 365 Developer Technology Adoption Program (TAP) membership](#isv-partners-in-microsoft-365-developer-tap)).
2. With an eligible [Microsoft 365 or Office 365 production environment](#customers-with-existing-microsoft-365-and-copilot-licenses) with a Copilot for Microsoft 365 license.

> [!NOTE]
> Copilot for Microsoft 365 is not publicly available with [Microsoft 365 Developer Program instant sandbox](https://developer.microsoft.com/microsoft-365/dev-program#Subscription) tenants for development and testing. Sandbox tenant availability is currently limited to Independent Software Vendor (ISV) partners in the TAP.

When developing with Copilot in production environments, be aware of potential admin-imposed limitations. For instance, administrators can block sideloading of custom apps or might not grant the necessary permissions required to build Graph connectors. Sandbox tenants provide an environment where you can develop solutions independent of your production environment and be your own administrator.

### ISV Partners in Microsoft 365 Developer TAP

We recommend that our ISV partners who build multi-tenant solutions acquire a new sandbox Microsoft 365 tenant with Copilot. Interested ISVs must be members of the [Microsoft 365 Developer Technology Adoption Program (TAP)](https://aka.ms/m365devtap).

### Customers with existing Microsoft 365 and Copilot licenses

It's also possible to develop Copilot integrations by working directly in an eligible [Microsoft 365 production environment](/copilot/microsoft-365/microsoft-365-copilot-overview#availability) with a [Copilot for Microsoft 365](https://www.microsoft.com/microsoft-365/enterprise/copilot-for-microsoft-365) license.

Contact your Microsoft representative to add Copilot to your Microsoft plan.  Enterprise customers need to be on the Current Channel or Monthly Enterprise Channel for Microsoft 365 apps to have access to Copilot.

## Extensibility

Developers can extend Microsoft Copilot for Microsoft 365 with the intelligence of external services and data in several ways: through customizing Copilot with agents, adding skills through [Teams message extension plugins](overview-message-extension-bot.md) and [Copilot Studio actions](overview-business-applications.md), or extending Copilot's knowledge through [Microsoft Graph connectors](overview-graph-connector.md).

To learn more and choose the best extensibility path for you and your customer, see [Extensibility options for Copilot](decision-guide.md).

### Requirements for developing Microsoft Graph connector

- A search administrator or global administrator must [register an application](/graph/toolkit/get-started/add-aad-app-registration) and [grant admin consent](/graph/connecting-external-content-deploy-teams#update-microsoft-graph-permissions) for the required Microsoft Graph permissions in **Microsoft Entra admin center** ([entra.microsoft.com](https://entra.microsoft.com/)). As a developer working in production, this might not be an option. Any deployed Graph connector is tenant-wide accessible unless the external items security is locked down.
- A search administrator will also need to ensure that Microsoft Graph connections you intend for Microsoft Search and Microsoft 365 Copilot are enabled for [inline results](/microsoftsearch/connectors-in-all-vertical) through the **Search & intelligence** section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)).
- Indexing content with your connector is subject to the available index quota in the tenant. Standard Microsoft 365 Developer Tenant and Microsoft 365 Copilot Developer tenant comes with quota to let developers start building connectors without any cost. To learn more, see [Microsoft Graph connectors license](/microsoftsearch/licensing).

### Requirements for developing agents and plugins

In addition to a Microsoft 365 Copilot license, there are several additional prerequisites for building agents and plugins for Copilot.

#### Building with Teams Toolkit

To build agents and plugins with Teams Toolkit and other IDEs, you'll need your admin to enable the ability to sideload a *custom app* to your tenant. From Teams admin center, select Teams apps > Setup policies > **Global (Org-wide default)** and enable **Upload custom apps**:

:::image type="content" source="./assets/images/tac-setup-policies.png" alt-text="Screenshot of org-wide setup policy with 'Upload custom apps' toggle enabled in Teams admin center":::

You can manage your sideloaded custom apps, including Copilot agents, from the Teams client by selecting: Apps > **Manage your apps**.

#### Creating with Copilot Studio

To create agents and actions with Copilot Studio, you'll need:

- [A license for Microsoft Copilot Studio](/microsoft-copilot-studio/requirements-licensing-subscriptions) (or an existing Power Virtual Agents license).
- Your Power Platform admin or Dynamics 365 admin to [enable Generative AI features](/power-platform/admin/geographical-availability-copilot) in Power Platform admin center.
- Your Microsoft 365 tenant admin to [deploy the Copilot Studio app in the Microsoft 365 admin center](/microsoft-copilot-studio/copilot-plugins-overview#deploy-the-microsoft-copilot-studio-app-admin).

For more details, see Copilot Studio [Prerequisites for actions](/microsoft-copilot-studio/copilot-plugins-overview#use-actions-in-microsoft-copilot) and [Prerequisites for Copilot agents](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#prerequisites).


### Enabling developer mode

You can use *developer mode* for Copilot while testing your plugin to verify if and how the orchestrator selected your plugin for use in response to a given prompt. From Copilot for Microsoft 365 chat, you can enable developer mode by typing `-developer on` (or `off` to disable).

:::image type="content" source="./assets/images/developer-mode-on.png" alt-text="Screenshot of `Copilot for Microsoft 365` session where user has typed `-developer on` to successfully enable developer mode":::

Developer mode is only available within Copilot for Microsoft 365 (Copilot for Work) experiences and doesn't surface in Copilot for Web. For more info, see [Debugging plugin selection](debugging-copilot-plugin.md).

## Security and privacy

Copilot uses existing permissions and policies to deliver the most relevant information, building on top of our existing commitments to data security and data privacy in the enterprise. For details on how Copilot uses and protects organizational data, see [Data, Privacy, and Security for Microsoft Copilot for Microsoft 365](/microsoft-365-copilot/microsoft-365-copilot-privacy). For data privacy and security considerations for developing different Copilot extensibility solutions, see [Data, Privacy, and Security considerations of extending Copilot for Microsoft 365](data-privacy-security.md).

## Microsoft Copilot for Microsoft 365 developer license management

Accounts used to test Copilot extensibility need a Microsoft Copilot for Microsoft 365 Developer license. Admins can manage Microsoft Copilot for Microsoft 365 Developer licenses using the Microsoft 365 admin center (under **Billing > Licenses**). You can also [assign Microsoft 365 licenses to user accounts with PowerShell](/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell).

## Frequently asked questions

<!-- markdownlint-disable MD001 -->
#### Can I upgrade my Microsoft 365 business license to use Copilot for Microsoft 365?

Yes. If you have a Microsoft 365 Business Standard or Business Premium license, you can [purchase a license for Copilot for Microsoft 365](https://www.microsoft.com/microsoft-365/business/copilot-for-microsoft-365) on a one-year or three-year term basis.

#### Can I use my Microsoft 365 Developer Program instant sandbox tenant to develop with Microsoft Copilot for Microsoft 365?

No. Microsoft 365 Developer Program sandbox tenant doesn't support commerce and therefore you can't purchase Copilot for Microsoft 365 for it.

#### Can ISV sandbox tenants with Copilot be renewed once the licenses expire?

Yes. If you continue to qualify for the ISV sandbox tenant (Microsoft 365 E5 Developer SKU V2), your development environment auto-renews.

#### I'm not an ISV and I don't have a Microsoft Copilot license. Can I develop for Copilot for Microsoft 365?

Not at this time. There's currently no timeline for broader availability of sandbox tenants.
<!-- markdownlint-enable MD001 -->
