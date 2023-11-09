---
title: Your developer environment for Microsoft Copilot for Microsoft 365 extensibility
description: Learn how to develop for Microsoft 365 Copilot in your environment
author: maisarissi
ms.author: maisarissi
ms.topic: how-to
ms.date: 11/14/2023
---

# Your developer environment for Microsoft Copilot for Microsoft 365 extensibility

Microsoft 365 apps like Word, Excel, PowerPoint, Outlook, and Teams can operate with [Microsoft Copilot for Microsoft 365](overview-graph-connector.md). Developers can extend these experiences to enrich and customize Copilot for the unique way your customers need.
This article provides an overview of [who can develop with Copilot](#development-prerequisites), [extensibility options](#extensibility), [security and privacy](#security-and-privacy), and [most frequently asked questions](#most-frequently-asked-questions).

## Development Prerequisites

Microsoft Copilot for Microsoft 365 is [publicly available](https://techcommunity.microsoft.com/t5/microsoft-365-copilot/microsoft-365-copilot-is-generally-available/ba-p/3969331) starting on November 1st. Therefore, to leverage Copilot, developers have two ways: limited preview for developer environment sandboxes through TAP membership or enterprise customers production environment who bought Microsoft Copilot for Microsoft 365.
When developing with Copilot in production environments, be aware of potential admin-imposed limitations. For instance, administrators can block sideloading of custom apps or may not grant the necessary permissions required to build Graph connectors. Microsoft 365 Copilot developer sandboxes provide an environment where you can develop solutions independent of your production environment and be your own administrator.

When developing with Copilot in production environments, be aware of potential admin-imposed limitations. For instance, administrators can block sideloading of custom apps or may not grant the necessary permissions required to build Graph connectors. Microsoft 365 Copilot developer sandboxes provide an environment where you can develop solutions independent of your production environment and be your own administrator.

### 1. ISVs Partners in Microsoft 365 Developer TAP

We recommend that our ISV partners, who build multi-tenant solutions, acquire a new M365 Copilot Developer Sandbox. ISVs that want to do this must be a member of the [Microsoft 365 Developer Technology Adoption Program (TAP)](https://aka.ms/m365devtap).

ISVs who wish to join the Microsoft 365 developer TAP must meet all the following requirements:

* Have in place or sign an active and valid non-disclosure agreement (NDA).
* Provide two named contacts with organizational (not personal) email address and job title.
* Complete one response per organization every six months on quarterly TAP Satisfaction survey.
* Have a Microsoft Partner Network (MPN) ID for partners.
* Undertake the active development of a Microsoft 365 integration.

#### Technical and licensing requirements for ISVs partners in the TAP

Developers must purchase the (free) Microsoft 365 E5 (25 license) Developer SKU V2 (without Windows and Audioconferencing). This enables you to purchase up to 25 licenses for Microsoft Copilot for Microsoft 365 Developer.

### 2.	Enterprise customers with Microsoft Copilot for Microsoft 365

It is also possible to develop integrations by working directly in a production environment. To do this enterprise customers must purchase Microsoft Copilot for Microsoft 365 at a minimum of 300 licenses and meet some technical requirements. Customers should call their Microsoft representative to get more information on how to acquire Copilot. 

#### Technical and licensing requirements for enterprise users

Copilot users must have either a Microsoft 365 E3 or E5 license and a Microsoft Entra ID account, which gives them access to the Microsoft 365 apps and services that work with Copilot. Enterprise customers need to be on the Current Channel or Monthly Enterprise Channel for Microsoft 365 apps to have access to Copilot. 

To learn more about the requirements, see Get started with [Microsoft Copilot for Microsoft 365](index.md).

## Extensibility

Developers can extend Microsoft Copilot for Microsoft 365 with the intelligence of external services and data in two ways: building plugins with [Teams message extension plugins](/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions?tabs=desktop) and [Power Platform connectors with plugins](/connectors/connectors), or using [Microsoft Graph connectors](/microsoftsearch/connectors-overview).

To learn more and choose the best extensibility path for you and your customer, see [Extensibility options for Copilot](decision-guide.md).

### Microsoft Graph connectors

Developing [Microsoft Graph connectors](overview-graph-connector.md) in your environment also requires:

* A search admin or global administrator must register an application and grant admin consent for the required [Microsoft Graph](https://aka.ms/graph) permissions. As a developer working in production, this might not be an option. Any deployed Graph connector will be tenant-wide accessible unless the external items security is locked down.
* Indexing content with your connector is subject to the available index quota in the tenant. Standard Microsoft 365 Developer Tenant and M365 Copilot Developer tenant comes with quota to let developers start building connectors without any cost. To learn more, see [Microsoft Graph connectors license](/microsoftsearch/licensing).

### Teams Message Extension plugins

When building [Message extensions for Microsoft Copilot for Microsoft 365](overview-message-extension-bot.md), you need to:

* Have the ability to [sideload the Teams message extension plugin](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload) so you can install, test and debug your app directly into your Teams environment without having to publish to your organization. For developers working with Microsoft Copilot for Microsoft 365 in production environments, this is possible as long as the [Teams admin hasn't blocked it](/microsoftteams/teams-custom-app-policies-and-settings#allow-users-to-upload-custom-apps). To get started with Teams message extension plugins, see [get ready to build your first message extension plugin](prerequisites-message-extension-bot.md).
* Make sure you are building [message extensions using Bot framework](prerequisites-message-extension-bot.md#build-message-extensions-using-bot-framework).
* If you have got a Teams message extension and want it to work with Copilot, you need to update the manifest with WYZ and republish the application.

### Power Platform connectors with plugins

[Power Platform connectors](connectors.md) empower low-code developers to work with Copilot as long as the [connector certification process](/connectors/custom-connectors/submit-certification) is complete. To publish your connector as Copilot plugin, the following steps are necessary:

* Enrich the current connector with plugins details. This is possible for every developer as long as the creation of custom connectors is not blocked by the tenant administrator.

## Security and privacy

Copilot uses existing permissions and policies to deliver the most relevant information, building on top of our existing commitments to data security and data privacy in the enterprise. For details on how Copilot uses and protects organizational data, see [Data, Privacy, and Security for Microsoft Copilot for Microsoft 365](/microsoft-365-copilot/microsoft-365-copilot-privacy).

## Microsoft Copilot for Microsoft 365 developer license management

As with other apps and services, admins can manage Microsoft Copilot for Microsoft 365 Developer licenses using the Microsoft 365 admin center (under **Billing > Licenses**). Here, you can assign a license to individual users or multiple users. You can also , and [assign Microsoft 365 licenses to user accounts with PowerShell](/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell).

## Frequently asked questions (FAQ)

-  Can I upgrade my standard Microsoft 365 license to a Microsoft Copilot license?
  -  No, you cannot. For standard Microsoft 365 licenses, Copilot is disabled. To have Microsoft Copilot for Microsoft 365, you need to buy a minimum of 300 licenses.
-  Can I use my standard Microsoft 365 developer tenant to develop with Microsoft Copilot for Microsoft 365?
  -  No. You must qualify for and purchase the (free) Microsoft 365 E5 Developer SKU V2 (without Windows and Audioconferencing) and then purchase Microsoft Copilot for Microsoft 365 developer. 
-  Can the M365 Copilot development environments be renewed once the licenses expire?
  -  Yes. If you continue to qualify for the (free) Microsoft 365 E5 Developer SKU V2 (without Windows and Audioconferencing) and then purchase Microsoft Copilot for Microsoft 365 developer, your development environment will autorenew and can renew your Copilot licenses.

## Next Steps
> [!div class="nextstepaction"]
>	[Choose your copilot extensibility path](decision-guide.md)
