---
title: Publish Microsoft 365 Copilot Extensibility Solutions
description: Learn how to distribute Microsoft 365 Copilot agents, plugins, and Graph connectors to your organization or the Microsoft Commercial Marketplace.
author: erikadoyle
ms.author: edoyle
ms.topic: conceptual
ms.date: 9/16/2024
---
# Publish agents for Microsoft 365 Copilot

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

This article describes the current state of Microsoft 365 distribution options and procedures for Copilot extensibility. Depending on its intended purpose as a line-of-business or marketable software solution, agents, plugins, and Graph connectors can be published to your organization or to the Microsoft Commercial Marketplace through [Microsoft Partner Center](https://partner.microsoft.com).

The following table summarizes the distribution support for Copilot extensibility scenarios, according to single tenant (line-of-business) or multitenant (independent software vendor, or *ISV*) channels.

|Copilot extensibility type | Single tenant | Multitenant| Notes|
|----------|-----------|------------|-----------|
|[Agents](#copilot-agents) (declarative agents)| ✔️ |✔️*|*Supported for agents created with Teams Toolkit|
|[Teams message extension plugins](#teams-message-extension-plugins-for-copilot) | ✔️ |✔️||
|[Copilot Studio actions](#copilot-studio-actions-as-plugins-for-copilot)| ✔️|✔️||
|[Microsoft Graph connectors](#microsoft-graph-connectors-for-copilot)| ✔️| ✔️*| *Standalone connectors not supported; can be distributed as Teams apps for verified publishers|

The remainder of this article outlines the distribution processes for each Copilot extensibility type.

## Microsoft 365 and Copilot program

As an independent software publisher, you can distribute your Copilot app package through the  [Microsoft 365 and Copilot](/partner-center/marketplace/why-publish) program of Microsoft Partner Center.

:::image type="content" source="assets/images/microsoft-365-and-copilot-program.png" alt-text="Screenshot of Microsoft Partner Center opened to 'Account settings | Programs' and the 'Microsoft 365 and Copilot' program listed as an option.":::

Submission of your app package to the program requires compliance with the following certification policies for acceptance to in-product stores.

For agents, message extension plugins, and Microsoft Graph connectors:

- Microsoft Commercial Marketplace certification policies:
  - [100 General](/legal/marketplace/certification-policies#100-general)
  - [1140 Teams](/legal/marketplace/certification-policies#1140-teams) (including [1140.9 Copilot agents for Microsoft 365 Copilot](/legal/marketplace/certification-policies#11409-copilot-extensions-for-copilot-for-microsoft-365))
- [Validation guidelines for agents](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines)
- [Publisher verification](/entra/identity-platform/publisher-verification-overview)

For Copilot Studio actions (Power Platform connectors) as plugins:

- Microsoft Commercial Marketplace certification policies:
  - [100 General](/legal/marketplace/certification-policies#100-general)
  - [5000 Power Platform Connectors](/legal/marketplace/certification-policies#5000-power-platform-connectors) (including [5000.4 Connectors with AI Plugin](/legal/marketplace/certification-policies#50004-connectors-with-ai-plugin))
- [Prepare Power Platform connector and plugin files for certification](/connectors/custom-connectors/certification-submission)

## Agents

[Agents](./overview-declarative-copilot.md) are packaged, distributed, and managed using the same [Microsoft 365 app package](./agents-are-apps.md) as [Teams apps that are integrated](/microsoft-365/admin/manage/test-and-deploy-microsoft-365-apps) to run across the Microsoft 365 ecosystem.

When built with Copilot Studio, agents for Microsoft 365 Copilot can also be published to the organization from Copilot Studio. Distribution through Partner Center is not yet supported for agents created from Copilot Studio.

### Distribute an agent to your organization

If you use Copilot Studio to create a declarative agent for Microsoft 365 Copilot, you can use [Copilot Studio to publish your agent](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#publishing-a-copilot-extension) for sharing and/or submit it for [publish to your organization's catalog](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps#publish-extensions-for-copilot) by an admin.

If you use Teams Toolkit to build an agent for Microsoft 365 Copilot, [build your app package](/microsoftteams/platform/toolkit/publish#build-app-package) with Teams Toolkit and [upload it as a custom app package](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#upload-custom-teams-apps-that-work-on-outlook-and-the-microsoft-365-app) to the **Integrated Apps** section of Microsoft Admin Center ([admin.microsoft.com](https://admin.microsoft.com)). From there, admins can manage access, configure default settings, and review and consent to requested data and permissions.

### Distribute your agent through Microsoft Partner Center

Before submitting your agent to Partner Center, ensure it meets all applicable:

- [Microsoft Commercial Marketplace certification policies](#microsoft-365-and-copilot-program)
- [Store validation guidelines for Copilot extensibility](/microsoftteams/platform/messaging-extensions/high-quality-message-extension)

Once ready, submit your app package to Microsoft Partner Center through the **Microsoft 365 and Copilot program** as a *Teams app*.

Once validated and approved by Microsoft, your agent is an active offer in the Microsoft Commercial Marketplace and ready for IT enablement. Once enabled by an IT administrator, it appears in the **Copilot agents** category of the store within Microsoft Teams. Once deployed by an admin or acquired by a user, it will then appear as an installed agent for Microsoft 365 Copilot.

## Teams message extension plugins for Copilot

Teams message extension apps used as plugins for Copilot are packaged and distributed in the same way as [Teams apps that are integrated](/microsoft-365/admin/manage/test-and-deploy-microsoft-365-apps) to run across the Microsoft 365 ecosystem. As such, they're available to end-users both as plugins and [message extensions apps](/microsoftteams/platform/m365-apps/extend-m365-teams-message-extension) that work directly in [Microsoft Teams chat and Microsoft Outlook email](/microsoftteams/platform/m365-apps/overview#personal-tabs-and-messaging-extensions-in-outlook-and-microsoft-365-app) compose windows.

### Distribute a message extension plugin to your organization

Follow these [instructions to upload your custom app package](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#upload-custom-teams-apps-that-work-on-outlook-and-the-microsoft-365-app) to the **Integrated Apps** section of Microsoft Admin Center ([admin.microsoft.com](https://admin.microsoft.com)). From there, admins can manage access, configure default settings, and review and consent to the requested data and permissions for both your [app experience](/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#how-to-manage-the-availability-of-an-app-in-your-organization) and [plugin experience](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps).

### Distribute a message extension plugin through Microsoft Partner Center

Before submitting your message extension app to Partner Center, ensure it meets all applicable [Microsoft Commercial Marketplace certification policies](#microsoft-365-and-copilot-program) and also the [guidelines for high-quality message extension plugins](/microsoftteams/platform/messaging-extensions/high-quality-message-extension).

Once ready, submit your app package to Microsoft Partner Center through the **Microsoft 365 and Copilot program** as a *Teams app*.

Once validated and approved by Microsoft, your plugin is an active offer in the Microsoft Commercial Marketplace and ready for IT enablement. Once enabled by an IT administrator, it appears in the *Copilot agents* category of the store within Microsoft Teams. Once deployed by an admin or acquired by a user, it will then appear as an installed plugin for Microsoft 365 Copilot.

## Copilot Studio actions as plugins for Copilot

Power Platform connector actions as Copilot plugins can be shared across an organization or published broadly via Microsoft Partner Center. Once an action is published, your administrator has to review and enable the plugin for use.

### Distribute a Copilot Studio action to your organization

By default, Copilot Studio actions are only visible and usable in Copilot Studio by the person who created them. They can be authorized for sharing at the Power Platform object level. Follow these [instructions to publish a connector action](/microsoft-copilot-studio/microsoft-copilot-extend-action-connector#publish) from Copilot Studio.

Once published, an administrator must enable your connector action it before it can be used within Microsoft 365 Copilot or a custom agent, in addition to meeting the [end-user prerequisites for using actions](/microsoft-copilot-studio/copilot-plugins-overview#use-actions-in-microsoft-copilot) in Microsoft 365 Copilot.

### Distribute a Copilot Studio action through Microsoft Partner Center (preview)

Ensure your app meets [Power Platform certification criteria](/connectors/custom-connectors/certification-submission) and Microsoft Commercial Marketplace policies for [Power Platform Connectors](/legal/marketplace/certification-policies#5000-power-platform-connectors), then submit your [app package](/connectors/custom-connectors/certification-submission#connector-and-plugin-packaging-guide) to [Microsoft Partner Center](https://partner.microsoft.com) through the **Microsoft 365 and Copilot program** as a **Power Platform Connector**.

Once certified and published by Microsoft, your action is available for IT enablement in the Microsoft Admin Center, with *Copilot* listed as one of its *Host Products*. Once deployed, your action will appear as an installed plugin for Copilot.

For more info, see [Get your Power Platform connector and plugin certified](/connectors/custom-connectors/submit-certification).

## Microsoft Graph connectors for Copilot

Microsoft Graph connector publishing options depend on whether you have a standalone connector or a connector that's part of a Microsoft Teams app. While both scenarios are supported for single-tenant distribution, submission to the Microsoft Partner Center *Microsoft 365 and Copilot program* is currently limited to Graph connectors packaged within Teams apps.

### Distribute a Graph connector for Copilot to your organization

For **standalone Graph connectors**, follow these [instructions to set up and manage Microsoft Graph connectors](/microsoftsearch/configure-connector) in the Microsoft Admin Center ([admin.microsoft.com](https://admin.microsoft.com)).

For **Graph connectors within Teams apps**, follow these [instructions to deploy your connector using the Teams admin center](/graph/connecting-external-content-deploy-teams).

### Distribute a Graph connector for Copilot through Microsoft Partner Center

For **Graph connectors within Teams apps**, ensure your app meets all applicable [Microsoft Commercial Marketplace certification policies](#microsoft-365-and-copilot-program), then submit your app package to Microsoft Partner Center through the **Microsoft 365 and Copilot program** as a *Teams app*. For more info, see [Make your Microsoft Graph connector available for other organizations](/graph/connecting-external-content-deploy-teams#make-your-microsoft-graph-connector-available-for-other-organizations-in-the-teams-admin-center).

Once validated and approved by Microsoft, your app is an active offer in the Microsoft Commercial Marketplace and ready for IT enablement. Once enabled by an IT administrator, it appears in the **Copilot agents** category of the store within Microsoft Teams.

> [!NOTE]
> The *Microsoft 365 and Copilot program* for Microsoft Partner Center is currently limited to Graph connectors within Teams apps. Standalone Graph connector publishing through Partner Center is not currently available.
