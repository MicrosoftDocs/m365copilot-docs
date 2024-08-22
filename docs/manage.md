---
title: Manage extensions for Microsoft 365 Copilot
description: Learn about admin controls for Microsoft 365 Copilot extensions
author: erikadoyle
ms.author: edoyle
ms.topic: conceptual
ms.date: 8/15/2024
---

# Manage extensions for Copilot for Microsoft 365

This article describes the different types of admin controls for managing Copilot extensions. Extensions for Microsoft 365 Copilot are packaged, distributed, and managed in the same way as other apps that run across the integrated Microsoft 365 platform. At its core, the integrated Microsoft 365 app platform extends the Teams app platform to provide a [unified app model](extensions-are-apps.md) for extensibility within the Microsoft 365 ecosystem. App management controls for Microsoft 365 are also converging to the centralized Microsoft admin center. However, some controls are still accessible only from Teams admin center.

The following table summarizes admin management tools for Copilot extensibility scenarios, according to distribution.

| Method of building Copilot extension | Published to AppSource (Store) | Published to organization | Uploaded for personal use|
|----------|-----------|------------|-----------|
|[Teams Toolkit](#manage-extensions-built-with-teams-toolkit) | Microsoft admin center | Teams admin center, Microsoft admin center| Teams admin center|
|[Copilot Studio](#manage-extensions-built-with-copilot-studio)| Microsoft admin center| Power Platform admin center, Microsoft admin center | Power Platform admin center|

## Manage extensions published to AppSource

Copilot extensions that are published to the Microsoft Commercial Marketplace (AppSource) and acquired from the in-product store are centrally managed from the **Integrated Apps** section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)). This is the case regardless of how the extension was built—with Copilot Studio, Teams Toolkit, or another IDE.

*Global Admin* and *Azure Application Admin* roles can deploy and uninstall apps, manage which apps are available to which users, and block apps from publish in Microsoft admin center.

:::image type="content" source="./assets/images/mac-integrated-apps.png" alt-text="Screenshot of the 'Integrated apps' section of Microsoft admin center":::

To learn more about managing published Copilot extensions, see [Manage extensions for Copilot in Microsoft admin center](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=/microsoft-365-copilot/extensibility/context).

## Manage extensions built with Teams Toolkit and other IDEs

Line-of-business apps for Microsoft 365, including Copilot extensions, that are published to your organization or for personal use are called *Custom apps*. Admins control who in your tenant can upload custom apps (either for publishing to the organization, or for personal use) from Teams admin center.

To allow users in a tenant to submit custom apps to their organization or upload for personal use, the following settings must be enabled. In Teams admin center, select Teams apps > Manage apps > Actions (dropdown control) > **Org-wide app settings**. Scroll to the **Custom apps** section and enable both toggles:

:::image type="content" source="./assets/images/tac-custom-apps.png" alt-text="Screenshot of the 'Custom apps' settings in Teams admin center with both toggles enabled":::



### Extensions published to your organization

Custom apps that are published to your organization are centrally managed from the [**Integrated Apps**](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=/microsoft-365-copilot/extensibility/context) section of Microsoft admin center ([admin.microsoft.com](https://admin.microsoft.com)), just like third-party apps acquired from the store. The only difference is that end-users will see these custom, line-of-business apps and extensions labeled with **Built for your org** in the in-product app store.

Admins can [upload Copilot extensions](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#upload-custom-teams-apps-that-work-on-outlook-and-the-microsoft-365-app) and [deploy them to their organization](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#deploy-a-teams-app-that-works-on-outlook-and-the-microsoft-365-app-via-the-integrated-apps-portal) from Microsoft admin center. Admins can also approve or reject custom apps submitted by other users for publish to the organization. Admins can also upload, deploy, and block apps from Teams admin center, however be aware that the [settings in Teams admin center override](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#what-happens-to-your-settings-on-teams-and-outlook) those made in Microsoft admin center for apps running in Teams. Best practice is to manage Copilot extensions from Microsoft admin center wherever possible.

### Extensions uploaded for personal use

Once packaged as Microsoft 365 apps, Copilot extensions can be uploaded (or *sideloaded*) by non-admins for personal use, such as for testing during the development process. Users can upload and deploy app packages directly from Teams Toolkit (Lifecycle > **Provision**), and also from Teams Toolkit CLI (`teamsapp install`) or Teams client (Apps > Manage your apps > Upload an app > **Upload a custom app**). Users can uninstall an app using Teams Toolkit CLI (`teamsapp uninstall`) or Teams client (from Apps > Manage your apps, select the app and then **Remove**).

Custom apps for personal use are managed by the user. However, admins have the ability to globally disable the ability to upload custom apps for personal use.

## Manage extensions built with Copilot Studio

Admin must first deploy Copilot Studio app:

https://learn.microsoft.com/en-us/microsoft-copilot-studio/copilot-plugins-overview?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext#use-actions-in-microsoft-copilot


### Copilot Studio apps published to your organization



### Copilot Studio extensions for personal use

Testing

https://learn.microsoft.com/en-us/microsoft-copilot-studio/copilot-plugins-overview?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext#testing

## See also

- Publish
- MAC
- TAC - Custom apps
- TAC - PP

https://learn.microsoft.com/microsoftteams/manage-apps
https://admin.teams.microsoft.com/policies/manage-apps

https://learn.microsoft.com/en-us/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#how-to-manage-the-availability-of-an-app-in-your-organization

Custom apps

Teams: https://learn.microsoft.com/microsoftteams/teams-custom-app-policies-and-settings

Power Platform: https://learn.microsoft.com/microsoftteams/manage-power-platform-apps
