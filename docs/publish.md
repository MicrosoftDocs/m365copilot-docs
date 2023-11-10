---
title: Publish Copilot plugins and connectors for Microsoft 365
description: Learn how to distribute your Copilot plugins and connectors to your organization or the Microsoft Commercial Marketplace
author: erikadoyle
ms.author: edoyle
ms.topic: conceptual
ms.date: 11/14/2023
---

# Publish plugins and connectors for Microsoft Copilot for Microsoft 365

Depending on its intended purpose as a line-of-business or marketable software solution, plugins and connectors can be published to your organization or to the Microsoft Commercial Marketplace through [Microsoft Partner Center](https://partner.microsoft.com). This article describes the current state of distribution options and procedures for Copilot extensibility.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

The following table summarizes the distribution support for Copilot extensibility scenarios, according to single tenant (line-of-business) or multi-tenant (independent software vendor, or *ISV*) channels.

|Copilot extensibility type  | Single tenant  | Multi-tenant| Notes|
|----------|-----------|------------|-----------|
|[Teams message extension plugins](#teams-message-extension-plugins) | ✔️ |✔️| |
|[Power Platform connectors as plugins](#power-platform-connectors-as-plugins)| ✔️|✔️*|*Store submission limited to verified publishers|
|[Microsoft Graph connectors](#microsoft-graph-connectors-for-copilot)| ✔️| ❌*| *Standalone connectors not supported; can be distributed as Teams apps|

The remainder of this article outlines the distribution processes for each Copilot extensibility type.

## Teams message extension plugins

Message extension Copilot plugins are packaged and distributed in the same way as [Microsoft Teams apps that are integrated](/microsoft-365/admin/manage/test-and-deploy-microsoft-365-apps) to run across the Microsoft 365 ecosystem. As such, they are available to end-users both as Copilot plugins and [message extensions apps](/microsoftteams/platform/m365-apps/extend-m365-teams-message-extension) that work directly in [Microsoft Teams chat and Microsoft Outlook email](/microsoftteams/platform/m365-apps/overview#personal-tabs-and-messaging-extensions-in-outlook-and-microsoft-365-app) compose windows.

### Distribute a message extension plugin to your organization

Follow these [instructions to upload your custom app package](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#upload-custom-teams-apps-that-work-on-outlook-and-the-microsoft-365-app) to the **Integrated Apps** portal of Microsoft Admin Center ([admin.microsoft.com](https://admin.microsoft.com)). From there, admins can manage access, configure default settings, and review and consent to the requested data and permissions for both your [app experience](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#how-to-manage-the-availability-of-an-app-in-your-organization) and [plugin experience](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps).

### Distribute a message extension plugin to the Teams app store

Ensure your app meets validation criteria for [Teams Apps extensible as Microsoft Copilot for Microsoft 365 plugins](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines?branch=pr-en-us-9402#teams-apps-extensible-as-microsoft-365-copilot-plugin), then submit your app package to [Microsoft Partner Center](https://partner.microsoft.com) through the **Microsoft 365 and Copilot program**.

Once accepted, your plugin will appear in the **Works with Copilot** category of the Store within Microsoft Teams.

## Power Platform connectors as plugins

Power Platform connector plugins can be shared across an organization or published broadly to the in-product Teams app store. In both cases, Power Platform plugins can be used in Copilot for Microsoft 365 once the *Dynamics 365 and Copilot Studio* app is deployed from Microsoft Admin Center. From Microsoft Admin Center ([admin.microsoft.com](https://admin.microsoft.com)), open Settings > Integrated Apps > **Available Apps** and select **Dynamics 365 and Copilot Studio**.

### Distribute a Power Platform connector plugin to your organization

By default, Power Platform plugins are only visible and usable in Power Virtual Agent or Copilot Studio by the person who created them. They can be authorized for sharing at the Power Platform object level.

Follow these [instructions to share a custom connector](/connectors/custom-connectors/share) using Power Apps portal ([make.powerapps.com](https://make.powerapps.com/environments/customconnectors)).

In order to use the connector as a Copilot plugin, the *M365 Copilot* setting must first be enabled in Power Platform admin center. From Power Platform admin center, open Environment > Product > Settings > **Features** and select **M365 Copilot**.

### Distribute a Power Platform connector plugin to the Teams app store

Submit your app package to [Microsoft Partner Center](https://partner.microsoft.com) through the **Microsoft 365 and Copilot program**.

> [!NOTE]
> The *Microsoft 365 and Copilot program* for Microsoft Partner Center is currently limited to Power Platform [verified publishers](/connectors/custom-connectors/certification-submission). Independent publisher certification is not yet available.

Once accepted, your plugin will appear in the **Works with Copilot** category of the Store within Microsoft Teams.

## Microsoft Graph connectors for Copilot

Microsoft Graph connector publishing options depend on whether you have a standalone connector or a connector that's part of a Microsoft Teams app. While both scenarios are supported for single-tenant distribution, submission to the Microsoft Partner Center *Microsoft 365 and Copilot program* is currently limited to Graph connectors packaged within Teams apps.

### Distribute a Graph connector for Copilot to your organization

For **standalone Graph connectors**, follow these [instructions to set up and manage Microsoft Graph connectors](/microsoftsearch/configure-connector) in the Microsoft Admin Center ([admin.microsoft.com](https://admin.microsoft.com)).

For **Graph connectors within Teams apps**, follow these [instructions to upload your custom app package](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#upload-custom-teams-apps-that-work-on-outlook-and-the-microsoft-365-app) to the **Integrated Apps** portal of Microsoft Admin Center ([admin.microsoft.com](https://admin.microsoft.com)). From there, admins can manage access, configure default settings, and review and consent to the requested data and permissions for both your [app experience](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#how-to-manage-the-availability-of-an-app-in-your-organization) and [plugin experience](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps).

### Distribute a Graph connector for Copilot to the Teams app store

For **Graph connectors within Teams apps**, ensure your app meets validation criteria for [Apps extended across Microsoft 365 clients](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#apps-extended-across-microsoft-365-clients), then submit your app package to [Microsoft Partner Center](https://partner.microsoft.com) through the **Microsoft 365 and Copilot program**.

Once accepted, your plugin will appear in the **Works with Copilot** category of the Store within Microsoft Teams.

> [!NOTE]
> The *Microsoft 365 and Copilot program* for Microsoft Partner Center is currently limited to Graph connectors within Teams apps. Standalone Graph connector publishing through Partner Center is not currently available.
