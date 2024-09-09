---
title: Manage agents, plugins, and connectors for Microsoft 365 Copilot
description: Learn about admin controls for Microsoft 365 Copilot extensibility
author: erikadoyle
ms.author: edoyle
ms.topic: conceptual
ms.date: 9/16/2024
---

# Manage extensibility for Microsoft 365 Copilot

This article describes the admin controls for managing different Microsoft 365 Copilot extensibility types. 

Microsoft 365 Copilot agents, plugins, and connectors are packaged, distributed, and managed in the same way as other apps that run across the integrated Microsoft 365 platform. At its core, the integrated Microsoft 365 app platform extends the Teams app platform to provide a [unified app model](extensions-are-apps.md) for extensibility within the Microsoft 365 ecosystem. App management controls for Microsoft 365 are also converging to the centralized Microsoft admin center. However, some necessary controls are accessible only from other admin centers.

The following table summarizes admin management tools during the Copilot extensibility development process.

| Microsoft 365 Copilot extensibility type| Sideloaded for development or personal use|Published to organization|Published to AppSource (Store)|
|--|--|--|--|
|Copilot agents|- Enable upload of custom apps (Teams admin center)|
|Custom agents|- Enable upload of custom apps (Teams admin center)|
|Graph connectors|- Enable upload of custom apps (Teams admin center)|- Enable `ExternalConnection.ReadWrite.OwnedBy` and `ExternalItem.ReadWrite.OwnedBy` (Entra admin center)<br>-Surface data in Microsoft Search (Microsoft admin center)|-Surface data in Microsoft Search (Microsoft admin center)|
|Message extension plugins|- Enable upload of custom apps (Teams admin center)|- Deploy or remove plugins (Microsoft admin center)<br>- Manage access to specific users (Microsoft admin center)|- Deploy or remove plugins (Microsoft admin center)<br>- Manage access to specific users (Microsoft admin center)
|Copilot Studio actions|- Enable copilots and generative AI features (Power Platform admin center)

## Agents, actions, and connectors created in Copilot Studio

Copilot Studio provides a streamlined, low-code process for creating, sharing, and publishing Copilot agents and actions for line-of-business applications within an organization. In order to start building Microsoft 365 Copilot agents and actions with Copilot Studio, you'll need licenses for:

- Microsoft Copilot Studio (required for makers)
- Microsoft 365 Copilot (required for makers and end-users)

To access Copilot Studio, your Microsoft 365 tenant admin will need to [deploy Copilot Studio](/microsoft-copilot-studio/copilot-plugins-overview#deploy-the-microsoft-copilot-studio-app-admin) to your tenant from **Microsoft admin center**:

:::image type="content" source="assets/images/mac-integrated-apps-copilot-studio.png" alt-text="Copilot Studio shown as an available app within 'Integrated apps' section of Microsoft admin center":::

### Manage agents created in Copilot Studio

As part of the Copilot Studio authoring flow, you have the option to [test your extensions](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=microsoft-365-copilot/extensibility/context#finishing-and-testing) by sideloading them to the Microsoft 365 Copilot chat experience. 

Once ready for distribution, you can [publish your extension from Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=microsoft-365-copilot/extensibility/context#publishing-a-copilot-extension) as a share link, invitation to specific users or groups, submission to your organizational catalog (to be approved by admin), or as downloadable app package zip file.

Upon submission to the organizational catalog, admins manage approval and deployment for [Copilot Studio extensions in Microsoft admin center](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=microsoft-365-copilot/extensibility/context#publish-extensions-for-copilot).

Copilot extensions published for personal use or sharing can be managed by the extension creator in Copilot Studio from the [Availability Options](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365-copilot/extensibility/context#availablity-options) page.

#### Sharing custom agents created in Copilot Studio

Unlike Microsoft 365 Copilot agents, custom agents created with Copilot Studio require a further admin enablement in order to be published and shared to an organization. 

In **Teams admin center**, enable *Shared Power Apps* for your organization:

:::image type="content" source="assets/images/tac-shared-cs-apps.png" alt-text="'Manage apps' view of Teams admin center, with 'Shared Power Apps' outlined in red":::

Admins can also scope permissions to [specific users](/microsoftteams/manage-power-platform-apps#allow-microsoft-power-platform-apps-for-specific-users).

### Copilot Studio extensions published to your organization or for personal use

As part of the Copilot Studio authoring flow, you have the option to [test your extensions](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=microsoft-365-copilot/extensibility/context#finishing-and-testing) by sideloading them to the Microsoft 365 Copilot chat experience. 

Once ready for distribution, you can [publish your extension from Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=microsoft-365-copilot/extensibility/context#publishing-a-copilot-extension) as a share link, invitation to specific users or groups, submission to your organizational catalog (to be approved by admin), or as downloadable app package zip file.

Upon submission to the organizational catalog, admins manage approval and deployment for [Copilot Studio extensions in Microsoft admin center](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=microsoft-365-copilot/extensibility/context#publish-extensions-for-copilot).

Copilot extensions published for personal use or sharing can be managed by the extension creator in Copilot Studio from the [Availability Options](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365-copilot/extensibility/context#availablity-options) page.


 Admins can also scope permissions to specific users.

### Manage actions created in Copilot Studio

In order to developer Copilot actions, you'll need your Power Platform admin or Dynamics 365 admin to [enable copilots and generative AI features](/power-platform/admin/geographical-availability-copilot) in **Power Platform admin center**:

:::image type="content" source="assets/images/powerplatform-admin-center-genai-features.png" alt-text="Screenshot of Power Platform admin center with 'Generative AI features' card outlined in red":::

## Agents, plugins, and connectors built with Teams Toolkit

The Teams Toolkit extension for Visual Studio Code and Visual Studio provides a comprehensive, pro-code development environment for building Copilot agents, plugins, and Graph connectors for organizational or Microsoft AppSource (store) submission. All of these Copilot extensibility options are [packaged as Microsoft 365 apps](./extensions-are-apps.md).

In order to sideload your app package for testing, you'll need a license for Microsoft 365 Copilot and also your admin to enable the upload and use of *custom apps* in **Teams admin center**.

To allow non-admin users in a tenant to upload custom apps for personal use, the following setting must be enabled. From Teams admin center, select Teams apps > Setup policies > **Global (Org-wide default)** and enable **Upload custom apps**:

:::image type="content" source="./assets/images/tac-setup-policies.png" alt-text="Screenshot of org-wide setup policy with 'Upload custom apps' toggle enabled in Teams admin center":::

To allow users in an organization to interact with custom apps uploaded for personal use, the following setting must be enabled. From Teams admin center, select Teams apps > Manage apps > Actions (dropdown control) > **Org-wide app settings**. Scroll to the **Custom apps** section and enable **Let users interact with custom apps in preview**:

:::image type="content" source="./assets/images/tac-custom-apps.png" alt-text="Screenshot of the 'Custom apps' settings in Teams admin center with 'Let users interact with custom apps in preview' enabled":::

For more granular per-user and per-team settings, admins can create [app setup policies for custom apps](/microsoftteams/teams-custom-app-policies-and-settings#app-setup-policy-settings-for-custom-apps) in Teams admin center. For custom apps published to the organization, per-user access can be centrally managed from Microsoft admin center, as described in the next section.

Once packaged as Microsoft 365 apps, Copilot agents can be uploaded (or *sideloaded*) by non-admins for personal use, such as for testing during the development process. Users can upload and deploy app packages directly from:

- **Teams Toolkit client**: Select Lifecycle > **Provision**

- **Teams Toolkit CLI**: Use the command `teamsapp install` (and `teamsapp uninstall` to uninstall)

- **Teams client**: Select Apps > Manage your apps > Upload an app > **Upload a custom app** (and to uninstall, Apps > Manage your apps > [select the app] > **Remove**)

Custom apps for personal use are managed by the user.

## Copilot agents, plugins, and connectors published to Microsoft AppSource

Copilot agents, plugins, and connectors that are published to the Microsoft Commercial Marketplace (AppSource) and acquired from the in-product store are centrally managed from the **Integrated Apps** section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)).

*Global Admin* and *Azure Application Admin* roles can deploy and uninstall apps, manage which apps are available to which users, and block apps in Microsoft admin center.

:::image type="content" source="./assets/images/mac-integrated-apps.png" alt-text="Screenshot of the 'Integrated apps' section of Microsoft admin center":::

From Microsoft admin center, admins can:

- Enable/disable Copilot extensibility for the whole organization through Microsoft 365 admin center settings.
- Make available apps with agents for Copilot to specific users or groups.
- Install and uninstall apps with agents for Copilot for the whole organization or specific users or groups.
- Block or unblock apps with agents for Copilot for the whole organization.

To learn more about managing published Copilot agents and plugins, see [Manage extensions for Copilot in Microsoft admin center](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=/microsoft-365-copilot/extensibility/context).


### Agents published to your organization

Once [published](./publish.md) to your organization, Copilot agents (as *custom apps*) are centrally managed from the [**Integrated Apps**](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=/microsoft-365-copilot/extensibility/context) section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)), just like third-party apps acquired from the store. The only difference is that end-users will see these custom, line-of-business apps and extensions labeled with **Built for your org** in the in-product app store.

Custom apps for personal use are managed by the user.

## See also

[Set up your dev environment for Microsoft 365 Copilot](prerequisites.md)

[Publish extensions for Microsoft 365 Copilot](publish.md)


