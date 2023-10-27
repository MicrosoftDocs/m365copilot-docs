---
title: Publish copilot plugins and connectors for Microsoft 365
description: Learn how to distribute your copilot plugins and connectors to your organization or the Microsoft Commercial Marketplace
author: erikadoyle
ms.author: edoyle
ms.topic: conceptual
ms.date: 11/14/2023
---

# Publish plugins and connectors for Microsoft 365 Copilot

Depending on its intended purpose as a line-of-business or marketable software solution, plugins and connectors can be published to your organization or to the Microsoft Commercial Marketplace through [Microsoft Partner Center](https://partner.microsoft.com). This article describes the current state of distribution options and procedures for copilot extensibility.

The following table summarizes the distribution support for copilot extensibility scenarios, according to single tenant (line-of-business) or multi-tenant (independent software vendor, or *ISV*) channels.

|Copilot extensibility type  | Single tenant  | Multi-tenant| Notes|
|----------|-----------|------------|-----------|
|[Teams message extension plugins](#teams-message-extension-plugins) | ✔️ |✔️*| *Limited to invite-only ISV preview|
|[Power Platform connectors as plugins](#power-platform-connectors-as-plugins)| ✔️|✔️*|*Limited to invite-only ISV preview for verified publishers|
|[Microsoft Graph connectors](#microsoft-graph-connectors-for-copilot)| ✔️| ❌*| *Can be distributed as Teams apps, limited to invite-only ISV preview|

The remainder of this article outlines the distribution processes for each copilot extensibility type.

## Teams message extension plugins

Message extension copilot plugins are packaged and distributed in the same way as [Microsoft Teams apps that are integrated](/microsoft-365/admin/manage/test-and-deploy-microsoft-365-apps) to run across the Microsoft 365 ecosystem. As such, they are available to end-users both as copilot plugins and [message extensions apps](/microsoftteams/platform/m365-apps/extend-m365-teams-message-extension) that work directly in [Microsoft Teams chat and Microsoft Outlook email](/microsoftteams/platform/m365-apps/overview#personal-tabs-and-messaging-extensions-in-outlook-and-microsoft-365-app) compose windows.

### Distribute a message extension plugin to your organization

Follow these [instructions to upload your custom app package](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#upload-custom-teams-apps-that-work-on-outlook-and-the-microsoft-365-app) to the **Integrated Apps** portal of Microsoft Admin Center ([admin.microsoft.com](https://admin.microsoft.com)). From there, admins can manage access, configure default settings, and review and consent to the requested data and permissions for both your [app experience](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#how-to-manage-the-availability-of-an-app-in-your-organization) and [plugin experience](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps).

### Distribute a message extension plugin through in-product app stores

Submit your app package to [Microsoft Partner Center](https://partner.microsoft.com) through the **Microsoft 365 and Copilot program**.

TODO: Summarize validation/certification criteria for MEs, plugins

> [!NOTE]
> The *Microsoft 365 and Copilot program* for Microsoft Partner Center is currently limited for invite-only private preview. Please use this TODO [form to request invitation](https://www.microsoft.com/microsoft-365/blog/2023/05/09/introducing-the-microsoft-365-copilot-early-access-program-and-new-capabilities-in-copilot/) and obtain access.

TODO: Describe/screenshot plugin in Teams app store

## Power Platform connectors as plugins

The single-tenant distribution process for Power Platform connectors as copilot plugins is the same as for regular Power Platform connectors. However, the multi-tenant distribution process works a little differently and is currently open to only *verified publishers*.

### Distribute a Power Platform connector plugin to your organization

Follow these [instructions to share a custom connector](/connectors/custom-connectors/share) using Power Apps portal ([make.powerapps.com](https://make.powerapps.com)).

TODO: Summarize validation/certification criteria for PowerPlat connectors, plugins

### Distribute a Power Platform connector plugin through Microsoft Commercial Marketplace

Submit your app package to [Microsoft Partner Center](https://partner.microsoft.com) through the **Microsoft 365 and Copilot program**.

> [!NOTE]
> The *Microsoft 365 and Copilot program* for Microsoft Partner Center is currently limited for invite-only private preview for Power Platform [verified publishers](/connectors/custom-connectors/certification-submission). Independent publisher certification is not yet available.
>
> If you are a verified publisher, please use this TODO [form to request invitation](https://www.microsoft.com/microsoft-365/blog/2023/05/09/introducing-the-microsoft-365-copilot-early-access-program-and-new-capabilities-in-copilot/) and obtain access.

TODO: Describe/screenshot where plugin publishes to

## Microsoft Graph connectors for copilot

Microsoft Graph connector publishing options depend on whether you have a standalone connector or a connector that's part of a Microsoft Teams app. While both scenarios are supported for single-tenant distribution, submission to the Microsoft Partner Center *Microsoft 365 and Copilot program* is currently limited to Graph connectors packaged within Teams apps.

### Distribute a Graph connector for copilot to your organization

For **standalone Graph connectors**, follow these [instructions to set up and manage Microsoft Graph connectors](/microsoftsearch/configure-connector) in the Microsoft Admin Center ([admin.microsoft.com](https://admin.microsoft.com)).

For **Graph connectors within Teams apps**, follow these [instructions to upload your custom app package](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#upload-custom-teams-apps-that-work-on-outlook-and-the-microsoft-365-app) to the **Integrated Apps** portal of Microsoft Admin Center ([admin.microsoft.com](https://admin.microsoft.com)). From there, admins can manage access, configure default settings, and review and consent to the requested data and permissions for both your [app experience](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#how-to-manage-the-availability-of-an-app-in-your-organization) and [plugin experience](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps).

### Distribute a Graph connector for copilot to the Teams app store

For **Graph connectors within Teams apps**, submit your app package to [Microsoft Partner Center](https://partner.microsoft.com) through the **Microsoft 365 and Copilot program**.

TODO: Summarize validation/certification criteria for GCs within Teams apps (and/or as Copilot connectors)

> [!NOTE]
> The *Microsoft 365 and Copilot program* for Microsoft Partner Center is currently limited for invite-only private preview for Graph connectors within Teams apps. Standalone Graph connector publishing is not currently available.
>
> If you have a Graph connector within a Teams app, please use this TODO [form to request invitation](https://www.microsoft.com/microsoft-365/blog/2023/05/09/introducing-the-microsoft-365-copilot-early-access-program-and-new-capabilities-in-copilot/) and obtain access.

TODO: Describe plugin in Teams app store (link to ME section above)
