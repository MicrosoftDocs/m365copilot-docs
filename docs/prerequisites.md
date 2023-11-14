---
title: Setup your developer environment for Microsoft Copilot for Microsoft 365 extensibility
description: Learn how to develop for Microsoft Copilot for Microsoft 365 in your environment
author: maisarissi
ms.author: maisarissi
ms.topic: how-to
ms.date: 11/14/2023
---

# Setup your developer environment for Microsoft Copilot for Microsoft 365 extensibility

Microsoft 365 apps like Word, Excel, PowerPoint, Outlook, and Teams can operate with [Microsoft Copilot for Microsoft 365](index.md). Developers can extend these experiences to enrich and customize Copilot for the unique way your customers need.

## Prerequisites

Microsoft Copilot for Microsoft 365 is [publicly available](https://techcommunity.microsoft.com/t5/microsoft-365-copilot/microsoft-365-copilot-is-generally-available/ba-p/3969331). Developers have two options for developer environments for Copilot: a sandbox Microsoft 365 tenant with Copilot, available in limited preview through TAP membership, or an enterprise customer's production environment with Microsoft Copilot for Microsoft 365 licenses.

When developing with Copilot in production environments, be aware of potential admin-imposed limitations. For instance, administrators can block sideloading of custom apps or may not grant the necessary permissions required to build Graph connectors. Sandbox tenants provide an environment where you can develop solutions independent of your production environment and be your own administrator.

### ISV Partners in Microsoft 365 Developer TAP

We recommend that our ISV partners, who build multi-tenant solutions, acquire a new sandbox Microsoft 365 tenant with Copilot. ISVs that want to do this must be a member of the [Microsoft 365 Developer Technology Adoption Program (TAP)](https://aka.ms/m365devtap).

#### Technical and licensing requirements for ISVs partners in the TAP

Developers must purchase the (free) Microsoft 365 E5 (25 license) Developer SKU V2 (without Windows and Audio-conferencing). This enables you to purchase up to 25 licenses for Microsoft Copilot for Microsoft 365 Developer.

### Enterprise customers with Microsoft Copilot for Microsoft 365

It is also possible to develop integrations by working directly in a production environment. To do this enterprise customers must purchase Microsoft Copilot for Microsoft 365 at a minimum of 300 licenses. Customers should call their Microsoft representative to get more information on how to acquire Copilot.

#### Technical and licensing requirements for enterprise users

Copilot users must have either a Microsoft 365 E3 or E5 license and a Microsoft Entra ID account, which gives them access to the Microsoft 365 apps and services that work with Copilot. Enterprise customers need to be on the Current Channel or Monthly Enterprise Channel for Microsoft 365 apps to have access to Copilot.

## Extensibility

Developers can extend Microsoft Copilot for Microsoft 365 with the intelligence of external services and data in two ways: building plugins with [Teams message extension plugins](overview-message-extension-bot.md) and [Power Platform connectors with plugins](overview-power-platform.md), or using [Microsoft Graph connectors](overview-graph-connector.md).

To learn more and choose the best extensibility path for you and your customer, see [Extensibility options for Copilot](decision-guide.md).

### Requirements for Microsoft Graph connector development

- A search administrator or global administrator must register an application and grant admin consent for the required Microsoft Graph permissions. As a developer working in production, this might not be an option. Any deployed Graph connector will be tenant-wide accessible unless the external items security is locked down.
- Indexing content with your connector is subject to the available index quota in the tenant. Standard Microsoft 365 Developer Tenant and M365 Copilot Developer tenant comes with quota to let developers start building connectors without any cost. To learn more, see [Microsoft Graph connectors license](/microsoftsearch/licensing).

### Requirements for Teams message extension development

Developers need the ability to [sideload the Teams message extension plugin](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload) in order to install, test and debug apps directly in your Teams environment without having to publish to your organization. An administrator must [enable custom app uploading](/microsoftteams/teams-custom-app-policies-and-settings#allow-users-to-upload-custom-apps) in your Microsoft 365 tenant (sandbox or production).

### Requirements for Power Platform connector development

A tenant administrator must enable the **M365 Copilot** setting in the [Power Platform admin center](https://admin.powerplatform.microsoft.com/). To enable this setting, go to [Power Platform admin center](https://admin.powerplatform.com/) > **Environment** > **Settings** > **Product** > **Features**, and then, turn **M365 Copilot** to **On**.

:::image type="content" source="assets/images/overview-business-applications/power-platform-setting.png" alt-text="This screenshot shows the Power Platform admin center to enable Microsoft 365 Copilot feature.":::

## Security and privacy

Copilot uses existing permissions and policies to deliver the most relevant information, building on top of our existing commitments to data security and data privacy in the enterprise. For details on how Copilot uses and protects organizational data, see [Data, Privacy, and Security for Microsoft Copilot for Microsoft 365](/microsoft-365-copilot/microsoft-365-copilot-privacy).

## Microsoft Copilot for Microsoft 365 developer license management

Accounts used to test Copilot extensibility need a Microsoft Copilot for Microsoft 365 Developer license. Admins can manage Microsoft Copilot for Microsoft 365 Developer licenses using the Microsoft 365 admin center (under **Billing > Licenses**). You can also [assign Microsoft 365 licenses to user accounts with PowerShell](/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell).

## Frequently asked questions

<!-- markdownlint-disable MD001 -->
#### Can I upgrade my standard Microsoft 365 license to a Microsoft Copilot license?

No. For standard Microsoft 365 licenses, Copilot is disabled. To have Microsoft Copilot for Microsoft 365, you need to buy a minimum of 300 licenses.

#### Can I use my standard Microsoft 365 developer tenant to develop with Microsoft Copilot for Microsoft 365?

No. You must qualify for and obtain the Microsoft 365 E5 Developer SKU V2 (without Windows and Audio-conferencing), and then purchase Microsoft Copilot for Microsoft 365 Developer. Currently this is only available to a limited set of ISVs in the TAP.

#### Can sandbox tenants with Copilot be renewed once the licenses expire?

Yes. If you continue to qualify for the Microsoft 365 E5 Developer SKU V2, your development environment will auto-renew.

#### I'm not an ISV and I don't have Microsoft Copilot licenses. Can I develop for Copilot for Microsoft 365?

Not at this time. There is currently no timeline for broader availability of sandbox tenants.
<!-- markdownlint-enable MD001 -->
