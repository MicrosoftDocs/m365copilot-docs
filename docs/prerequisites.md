---
title: Set up your development environment for Copilot for Microsoft 365
description: Learn the prerequisites for extending Copilot for Microsoft 365 with plugins and connectors
author: maisarissi
ms.author: maisarissi
ms.topic: how-to
ms.date: 1/17/2024
---

# Set up your development environment for Copilot for Microsoft 365

Copilot for Microsoft 365 is [generally available](https://techcommunity.microsoft.com/t5/microsoft-365-copilot/microsoft-365-copilot-is-generally-available/ba-p/3969331), and extensibility for Copilot for Microsoft 365 is in public preview. [Copilot for Microsoft 365 is available to organizations](https://blogs.microsoft.com/blog/2024/01/15/bringing-the-full-power-of-copilot-to-more-people-and-businesses/) of all sizes (there is no seat purchase minimum). [Microsoft Copilot Pro](https://www.microsoft.com/store/b/copilotpro) (Copilot for individuals) does not currently support extensibility.

This topic summarizes the developer environment prerequisites and requirements to extend, enrich, and customize Copilot for Microsoft 365 for the unique way your customers work.

## Prerequisites

Developers have two ways to obtain a developer environment for Copilot: (1) with a sandbox Microsoft 365 tenant with Copilot (available in limited preview through [TAP membership](#isv-partners-in-microsoft-365-developer-tap)), or (2) through an enterprise customer production environment with Microsoft Copilot for Microsoft 365 licenses.

> [!NOTE]
> Copilot for Microsoft 365 is not publicly available with [Microsoft 365 Developer Program instant sandbox](https://developer.microsoft.com/microsoft-365/dev-program#Subscription) tenants for development and testing. Availability is currently limited to ISV partners in the TAP.

When developing with Copilot in production environments, be aware of potential admin-imposed limitations. For instance, administrators can block sideloading of custom apps or may not grant the necessary permissions required to build Graph connectors. Sandbox tenants provide an environment where you can develop solutions independent of your production environment and be your own administrator.

### ISV Partners in Microsoft 365 Developer TAP

We recommend that our ISV partners who build multi-tenant solutions acquire a new sandbox Microsoft 365 tenant with Copilot. ISVs that want to do this must be a member of the [Microsoft 365 Developer Technology Adoption Program (TAP)](https://aka.ms/m365devtap).

#### Technical and licensing requirements for ISVs partners in the TAP

Developers must acquire the Microsoft 365 E5 Developer SKU V2 (without Windows and Audio-conferencing). This provides up to 25 developer licenses for Copilot for Microsoft 365.

### Enterprise customers with Microsoft Copilot for Microsoft 365

It is also possible to develop Copilot integrations by working directly in an enterprise production environment. Customers should call their Microsoft representative to get more information on how to acquire Copilot.

#### Technical and licensing requirements for enterprise users

Copilot users must have either a Microsoft 365 E3 or E5 license and a Microsoft Entra ID account, which gives them access to the Microsoft 365 apps and services that work with Copilot. Enterprise customers need to be on the Current Channel or Monthly Enterprise Channel for Microsoft 365 apps to have access to Copilot.

## Extensibility

Developers can extend Microsoft Copilot for Microsoft 365 with the intelligence of external services and data in two ways: building plugins with [Teams message extension plugins](overview-message-extension-bot.md) and [AI plugins with Microsoft business applications](overview-business-applications.md), or using [Microsoft Graph connectors](overview-graph-connector.md).

To learn more and choose the best extensibility path for you and your customer, see [Extensibility options for Copilot](decision-guide.md).

### Requirements for Microsoft Graph connector development

- A search administrator or global administrator must register an application and grant admin consent for the required Microsoft Graph permissions. As a developer working in production, this might not be an option. Any deployed Graph connector will be tenant-wide accessible unless the external items security is locked down.
- Indexing content with your connector is subject to the available index quota in the tenant. Standard Microsoft 365 Developer Tenant and M365 Copilot Developer tenant comes with quota to let developers start building connectors without any cost. To learn more, see [Microsoft Graph connectors license](/microsoftsearch/licensing).

### Requirements for plugin development

During the public preview of plugins, customers who are licensed for Copilot in **production** will need an administrator to enable their tenant for the preview by submitting a support ticket using the sentence "enable plugins for Copilot for Microsoft 365" within the ticket, or making a request to their Microsoft Customer Success Account Manager.

#### Requirements for Teams message extension development

As a developer, you'll need the ability to [sideload custom apps](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload) in order to install, test and debug message extension apps and plugins directly in the Teams environment without having to publish to your organization. An administrator must [enable custom app uploading](/microsoftteams/teams-custom-app-policies-and-settings#allow-users-to-upload-custom-apps) in your Microsoft 365 tenant (sandbox or production).

## Security and privacy

Copilot uses existing permissions and policies to deliver the most relevant information, building on top of our existing commitments to data security and data privacy in the enterprise. For details on how Copilot uses and protects organizational data, see [Data, Privacy, and Security for Microsoft Copilot for Microsoft 365](/microsoft-365-copilot/microsoft-365-copilot-privacy). For data privacy and security considerations for developing different Copilot extensibility solutions, see [Data, Privacy, and Security considerations of extending Copilot for Microsoft 365](data-privacy-security.md).

## Microsoft Copilot for Microsoft 365 developer license management

Accounts used to test Copilot extensibility need a Microsoft Copilot for Microsoft 365 Developer license. Admins can manage Microsoft Copilot for Microsoft 365 Developer licenses using the Microsoft 365 admin center (under **Billing > Licenses**). You can also [assign Microsoft 365 licenses to user accounts with PowerShell](/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell).

## Frequently asked questions

<!-- markdownlint-disable MD001 -->
#### Can I upgrade my standard Microsoft 365 license to use Copilot for Microsoft 365?

Yes. If you have a Microsoft 365 Business Standard (E3) or Business Premium (E5) license, you can [purchase a license for Copilot for Microsoft 365](https://www.microsoft.com/microsoft-365/business/copilot-for-microsoft-365).

#### Can I use my standard Microsoft 365 sandbox tenant to develop with Microsoft Copilot for Microsoft 365?

No. Microsoft 365 sandbox tenants (Microsoft 365 E5 Developer SKU V2) with Copilot are currently available to a limited set of ISVs in the TAP.

#### Can sandbox tenants with Copilot be renewed once the licenses expire?

Yes. If you continue to qualify for the Microsoft 365 E5 Developer SKU V2, your development environment will auto-renew.

#### I'm not an ISV and I don't have Microsoft Copilot licenses. Can I develop for Copilot for Microsoft 365?

Not at this time. There is currently no timeline for broader availability of sandbox tenants.
<!-- markdownlint-enable MD001 -->
