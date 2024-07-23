---
title: Set up your development environment for Copilot for Microsoft 365
description: Learn the prerequisites for extending Copilot for Microsoft 365 with plugins and connectors.
author: maisarissi
ms.author: maisarissi
ms.topic: how-to
ms.date: 1/17/2024
---

# Set up your development environment for Copilot for Microsoft 365

Copilot for Microsoft 365 is [generally available](https://techcommunity.microsoft.com/t5/microsoft-365-copilot/microsoft-365-copilot-is-generally-available/ba-p/3969331), and extensibility for Copilot for Microsoft 365 is in public preview. Copilot for Microsoft 365 is [available to organizations](/copilot/microsoft-365/microsoft-365-copilot-overview#availability) of all sizes. There's no minimum license purchase, but there's a 12-month commitment after a one-month free trial. [Microsoft Copilot Pro](https://www.microsoft.com/store/b/copilotpro) (Copilot for individuals) doesn't currently support extensibility.

This article summarizes the developer environment prerequisites and requirements to extend, enrich, and customize Copilot for Microsoft 365 for the unique way your customers work.

## Prerequisites

Developers have two ways to obtain a developer environment for Copilot:

1. With a sandbox Microsoft 365 tenant with Copilot (available in limited preview through [Microsoft 365 Developer Technology Adoption Program (TAP) membership](#isv-partners-in-microsoft-365-developer-tap)).
2. With an eligible Microsoft 365 or Office 365 production environment with a Copilot for Microsoft 365 license.

> [!NOTE]
> Copilot for Microsoft 365 is not publicly available with [Microsoft 365 Developer Program instant sandbox](https://developer.microsoft.com/microsoft-365/dev-program#Subscription) tenants for development and testing. Sandbox tenant availability is currently limited to Independent Software Vendor (ISV) partners in the TAP.

When developing with Copilot in production environments, be aware of potential admin-imposed limitations. For instance, administrators can block sideloading of custom apps or might not grant the necessary permissions required to build Graph connectors. Sandbox tenants provide an environment where you can develop solutions independent of your production environment and be your own administrator.

### ISV Partners in Microsoft 365 Developer TAP

We recommend that our ISV partners who build multi-tenant solutions acquire a new sandbox Microsoft 365 tenant with Copilot. Interested ISVs must be members of the [Microsoft 365 Developer Technology Adoption Program (TAP)](https://aka.ms/m365devtap).

### Customers with existing Microsoft 365 and Copilot licenses

It's also possible to develop Copilot integrations by working directly in an eligible [Microsoft 365 production environment](/copilot/microsoft-365/microsoft-365-copilot-overview#availability) with a [Copilot for Microsoft 365](https://www.microsoft.com/en-us/microsoft-365/enterprise/copilot-for-microsoft-365) license.

Contact your Microsoft representative to [add Copilot to your Microsoft plan](https://www.microsoft.com/microsoft-365/enterprise/copilot-for-microsoft-365#Pricing).  Enterprise customers need to be on the Current Channel or Monthly Enterprise Channel for Microsoft 365 apps to have access to Copilot.

## Extensibility

Developers can extend Microsoft Copilot for Microsoft 365 with the intelligence of external services and data in two ways: building plugins with [Teams message extension plugins](overview-message-extension-bot.md) and [AI plugins with Microsoft business applications](overview-business-applications.md), or using [Microsoft Graph connectors](overview-graph-connector.md).

To learn more and choose the best extensibility path for you and your customer, see [Extensibility options for Copilot](decision-guide.md).

### Requirements for Microsoft Graph connector development

- A search administrator or global administrator must register an application and grant admin consent for the required Microsoft Graph permissions. As a developer working in production, this might not be an option. Any deployed Graph connector is tenant-wide accessible unless the external items security is locked down.
- Indexing content with your connector is subject to the available index quota in the tenant. Standard Microsoft 365 Developer Tenant and Microsoft 365 Copilot Developer tenant comes with quota to let developers start building connectors without any cost. To learn more, see [Microsoft Graph connectors license](/microsoftsearch/licensing).

### Requirements for plugin development

During the public preview, customers with a Copilot license can extend Copilot and build plugins.

To create conversational and AI plugins that your end users can use in their chats with Microsoft Copilot, you need:

- [A license for Microsoft Copilot Studio (or an existing Power Virtual Agents license)](/microsoft-copilot-studio/requirements-licensing-subscriptions).
- [Licenses for Copilot for Microsoft 365](/microsoft-365-copilot/extensibility/overview-business-applications#get-copilot-for-microsoft-365-licenses-and-enable-plugins).
- Your Microsoft 365 tenant admin to [deploy the Dynamics 365 and Copilot Studio app in the Microsoft 365 admin center](/microsoft-copilot-studio/copilot-plugins-overview#deploy-the-microsoft-copilot-studio-app-admin).

For details see: [Create and configure copilot plugins with Copilot Studio](/microsoft-copilot-studio/copilot-plugins-overview#prerequisites).

#### Requirements for Teams message extension development

As a developer, you need the ability to [sideload custom apps](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload) in order to install, test, and debug message extension apps and plugins directly in the Teams environment without having to publish to your organization. An administrator must [enable custom app uploading](/microsoftteams/teams-custom-app-policies-and-settings#allow-users-to-upload-custom-apps) in your Microsoft 365 tenant (sandbox or production).

### Enabling developer mode

You can use *developer mode* for **M365 Chat** while testing your plugin to verify if and how the orchestrator selected your plugin for use in response to a given prompt. From  *M365 Chat*, you can enable developer mode by typing `-developer on` (or `off` to disable).

:::image type="content" source="./assets/images/developer-mode-on.png" alt-text="Screenshot of `M365 Chat` session where user has typed `-developer on` to successfully enable developer mode":::

Developer mode is only available within **M365 Chat** (Copilot for Microsoft 365) experiences and doesn't surface in Microsoft Copilot (Copilot with Bing) chat. For more info, see [Debugging plugin selection](debugging-copilot-plugin.md).

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
