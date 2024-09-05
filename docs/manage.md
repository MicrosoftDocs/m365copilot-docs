---
title: Manage extensions for Microsoft 365 Copilot
description: Learn about admin controls for Microsoft 365 Copilot extensions
author: erikadoyle
ms.author: edoyle
ms.topic: conceptual
ms.date: 8/15/2024
---

# Manage extensions for Copilot for Microsoft 365

This article describes the different types of admin controls for managing Copilot extensions. Extensions for Microsoft 365 Copilot are packaged, distributed, and managed in the same way as other apps that run across the integrated Microsoft 365 platform. At its core, the integrated Microsoft 365 app platform extends the Teams app platform to provide a [unified app model](extensions-are-apps.md) for extensibility within the Microsoft 365 ecosystem. App management controls for Microsoft 365 are also converging to the centralized Microsoft admin center. However, some necessary controls are accessible only from other admin centers.

The following table summarizes admin management tools for Copilot extensibility scenarios, according to distribution.

| Method of building Copilot extension | Published to AppSource (Store) | Published to organization | Uploaded for personal use|
|----------|-----------|------------|-----------|
|[Teams Toolkit](#manage-extensions-built-with-teams-toolkit-and-other-ides) | Microsoft admin center | Teams admin center,<br> Microsoft admin center| Teams admin center|
|[Copilot Studio](#manage-extensions-built-with-copilot-studio)| Microsoft admin center| Power Platform admin center,<br> Teams admin center,<br> Microsoft admin center | Power Platform admin center,<br> Teams admin center,<br> Microsoft admin center|

## Manage extensions published to AppSource

Copilot extensions that are published to the Microsoft Commercial Marketplace (AppSource) and acquired from the in-product store are centrally managed from the **Integrated Apps** section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)). This is the case regardless of how the extension was built—with Copilot Studio, Teams Toolkit, or another IDE.

*Global Admin* and *Azure Application Admin* roles can deploy and uninstall apps, manage which apps are available to which users, and block apps in Microsoft admin center.

:::image type="content" source="./assets/images/mac-integrated-apps.png" alt-text="Screenshot of the 'Integrated apps' section of Microsoft admin center":::

To learn more about managing published Copilot extensions, see [Manage extensions for Copilot in Microsoft admin center](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=/microsoft-365-copilot/extensibility/context).

## Manage extensions built with Teams Toolkit

Line-of-business apps for Microsoft 365, including Copilot extensions, that are published to your organization or for personal use are called **Custom apps**. Admins control who in your tenant can upload custom apps for personal use from Teams admin center. Settings to allow the upload and use of custom apps are *only available* in **Teams admin center**. 

To allow non-admin users in a tenant to upload custom apps for personal use, the following setting must be enabled. From Teams admin center, select Teams apps > Setup policies > **Global (Org-wide default)** and enable **Upload custom apps**:

:::image type="content" source="./assets/images/tac-setup-policies.png" alt-text="Screenshot of org-wide setup policy with 'Upload custom apps' toggle enabled in Teams admin center":::

To allow users in an organization to interact with custom apps uploaded for personal use, the following setting must be enabled. From Teams admin center, select Teams apps > Manage apps > Actions (dropdown control) > **Org-wide app settings**. Scroll to the **Custom apps** section and enable **Let users interact with custom apps in preview**:

:::image type="content" source="./assets/images/tac-custom-apps.png" alt-text="Screenshot of the 'Custom apps' settings in Teams admin center with 'Let users interact with custom apps in preview' enabled":::

For more granular per-user and per-team settings, admins can create [app setup policies for custom apps](/microsoftteams/teams-custom-app-policies-and-settings#app-setup-policy-settings-for-custom-apps) in Teams admin center. For custom apps published to the organization, per-user access can be centrally managed from Microsoft admin center, as described in the next section.

### Extensions published to your organization

Once [published](./publish.md) to your organization, Copilot extensions (as *custom apps*) are centrally managed from the [**Integrated Apps**](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=/microsoft-365-copilot/extensibility/context) section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)), just like third-party apps acquired from the store. The only difference is that end-users will see these custom, line-of-business apps and extensions labeled with **Built for your org** in the in-product app store.

From Microsoft admin center, admins can:

- Enable/disable Copilot extensibility for the whole organization through Microsoft 365 admin center settings.
- Make available an app with extensions for Copilot to specific users or groups.
- Install and uninstall apps with extensions for Copilot for the whole organization or specific users or groups.
- Block or unblock apps with extensions for Copilot for the whole organization.

For more info, see [Manage extensions for Copilot in the Microsoft 365 admin center](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=/microsoft-365-copilot/extensibility/context#manage-extensions-for-copilot-in-the-microsoft-365-admin-center).



Admins can also upload, deploy, and block apps from Teams admin center too, however be aware that the [settings in Teams admin center override](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#what-happens-to-your-settings-on-teams-and-outlook) those made in Microsoft admin center for apps running in Teams. 
Best practice is to manage Copilot extensions from Microsoft admin center wherever possible, then fine-tune any settings in Teams admin center that aren't available in Microsoft admin center or that are only applicable when running apps in Teams.

### Extensions uploaded for personal use

Once packaged as Microsoft 365 apps, Copilot extensions can be uploaded (or *sideloaded*) by non-admins for personal use, such as for testing during the development process. Users can upload and deploy app packages directly from:

- **Teams Toolkit client**: Select Lifecycle > **Provision**

- **Teams Toolkit CLI**: Use the command `teamsapp install` (and `teamsapp uninstall` to uninstall)

- **Teams client**: Select Apps > Manage your apps > Upload an app > **Upload a custom app** (and to uninstall, Apps > Manage your apps > [select the app] > **Remove**)

Custom apps for personal use are managed by the user. However, admins have the ability to globally disable the ability to upload custom apps for personal use [as described above](#manage-extensions-built-with-teams-toolkit-and-other-ides).

## Manage extensions built with Copilot Studio

Copilot extensions that are built with Copilot Studio require a different set of admin controls to enable deployment for organizational and personal use in Microsoft 365 Copilot. These enablements span across several admin centers. In addition to a Copilot Studio license for building extensions, you'll need:

In **Microsoft admin center**, your Microsoft 365 tenant admin to [deploy  Copilot Studio](/microsoft-copilot-studio/copilot-plugins-overview#deploy-the-microsoft-copilot-studio-app-admin) to your tenant:

:::image type="content" source="assets/images/mac-integrated-apps-copilot-studio.png" alt-text="Copilot Studio shown as an available app within 'Integrated apps' section of Microsoft admin center":::

In **Teams admin center**, your Teams admin to [allow Shared Copilot Extensions, Shared Copilots, and Shared Power Apps](/microsoftteams/manage-power-platform-apps#allow-or-block-microsoft-power-platform-apps-for-your-organization) for your oganization. Admins can also scope permissions to [specific users](/microsoftteams/manage-power-platform-apps#allow-microsoft-power-platform-apps-for-specific-users).

:::image type="content" source="assets/images/tac-shared-cs-apps.png" alt-text="'Manage apps' view of Teams admin center, with 'Shared Copilot Extensions', 'Shared Copilots', and 'Shared Power Apps' outlined in red":::

 In **Power Platform admin center**, your Power Platform admin or Dynamics 365 admin to [enable copilots and generative AI features](/power-platform/admin/geographical-availability-copilot):

:::image type="content" source="assets/images/powerplatform-admin-center-genai-features.png" alt-text="Screenshot of Power Platform admin center with 'Generative AI features' card outlined in red":::

### Copilot Studio extensions published to your organization or for personal use

As part of the Copilot Studio authoring flow, you have the option to [test your extensions](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=microsoft-365-copilot/extensibility/context#finishing-and-testing) by sideloading them to the Microsoft 365 Copilot chat experience. 

Once ready for distribution, you can [publish your extension from Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=microsoft-365-copilot/extensibility/context#publishing-a-copilot-extension) as a share link, invitation to specific users or groups, submission to your organizational catalog (to be approved by admin), or as downloadable app package zip file.

Upon submission to the organizational catalog, admins manage approval and deployment for [Copilot Studio extensions in Microsoft admin center](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=microsoft-365-copilot/extensibility/context#publish-extensions-for-copilot).

Copilot extensions published for personal use or sharing can be managed by the extension creator in Copilot Studio from the [Availability Options](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365-copilot/extensibility/context#availablity-options) page.

## See also

[Set up your dev envioronment for Microsoft 365 Copilot](prerequisites.md)

[Publish extensions for Microsoft 365 Copilot](publish.md)


