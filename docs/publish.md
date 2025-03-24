---
title: Publish Agents for Microsoft 365 Copilot
description: Learn how to distribute agents for Microsoft 365 Copilot to your organization or the Microsoft Commercial Marketplace.
author: erikadoyle
ms.author: edoyle
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 3/17/2025
---
# Publish agents for Microsoft 365 Copilot

This article summarizes the distribution options and procedures for Microsoft 365 Copilot extensibility. Depending on their intended purpose as a line-of-business or marketable software solutions, Copilot agents and Microsoft Graph connectors can be shared among users in a tenant, published to an organizational catalog, or offered in the Microsoft Commercial Marketplace through [Microsoft Partner Center](https://partner.microsoft.com).

## Microsoft 365 and Copilot program

As an independent software publisher, you can distribute your Copilot app package through the  [Microsoft 365 and Copilot](/partner-center/marketplace/why-publish) program of Microsoft Partner Center.

:::image type="content" source="assets/images/microsoft-365-and-copilot-program.png" alt-text="Screenshot of Microsoft Partner Center opened to 'Account settings | Programs' and the 'Microsoft 365 and Copilot' program listed as an option.":::

To submit your app package to the Microsoft 365 and Copilot program in Partner Center, see the [Store step-by-step submission guide](/partner-center/marketplace-offers/add-in-submission-guide).

Before submitting your agent to Partner Center, ensure it meets all applicable:

- [Microsoft Commercial Marketplace certification policies](#microsoft-365-and-copilot-program)
- [Store validation guidelines for Copilot extensibility](/microsoftteams/platform/messaging-extensions/high-quality-message-extension)

Once ready, submit your app package to Microsoft Partner Center through the **Microsoft 365 and Copilot program** as a *Teams app*.

Once validated and approved by Microsoft, your agent is an active offer in the Microsoft Commercial Marketplace and ready for IT enablement. Once enabled by an IT administrator, it appears in the *Agents** category of the store within Microsoft Teams. Once deployed by an admin or acquired by a user, it will then appear as an installed agent for Microsoft 365 Copilot.

Your agent must pass [Responsible AI validation checks](rai-validation.md) before you can publish or sideload it.

## Agents built with Teams Toolkit

Overview summary of DCs, CEAs, MEs built with Toolkit.


### Custom engine agents

Overview summary of CEAs.

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ✅ | [Publish to individual scope](/microsoftteams/platform/toolkit/publish#publish-to-individual-scope-or-custom-app-upload-permission) |
| Share with others | | |
| Submit to organizational catalog | ✅ | [Publish apps using Teams Toolkit](/microsoftteams/platform/toolkit/publish) |
| Submit to Microsoft Commercial Marketplace | ✅ | [Publish your app to the Teams Store](/microsoftteams/platform/concepts/deploy-and-publish/appsource/publish) |

Preamble for app validation requirements (Teams store, Commercial Marketplace, M365 App Certification)

**Teams Store**

- [Validation guidelines for Copilot agents](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines)
- [Apps powered by Artificial Intelligence](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines)


**Microsoft Commercial Marketplace certification policies**
  - [100 General](/legal/marketplace/certification-policies#100-general)
  - [1140 Teams](/legal/marketplace/certification-policies#1140-teams) (including [1140.9 Agents for Microsoft 365 Copilot](/legal/marketplace/certification-policies#11409-copilot-extensions-for-copilot-for-microsoft-365))
- [Validation guidelines for agents](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines)
- [Publisher verification](/entra/identity-platform/publisher-verification-overview)

**Microsoft 365 App Compliance Program**

- [Microsoft 365 Certification framework overview](/microsoft-365-app-certification/docs/certification)

### Declarative agents


### Message extensions as agents

Teams message extension apps used as plugins for Copilot are packaged and distributed in the same way as [Teams apps that are integrated](/microsoft-365/admin/manage/test-and-deploy-microsoft-365-apps) to run across the Microsoft 365 ecosystem. As such, they're available to end-users both as plugins and [message extensions apps](/microsoftteams/platform/m365-apps/extend-m365-teams-message-extension) that work directly in [Microsoft Teams chat and Microsoft Outlook email](/microsoftteams/platform/m365-apps/overview#personal-tabs-and-messaging-extensions-in-outlook-and-microsoft-365-app) compose windows.

## Agents built with Microsoft Copilot Studio

For Copilot Studio actions (Power Platform connectors) as plugins:

- Microsoft Commercial Marketplace certification policies:
  - [100 General](/legal/marketplace/certification-policies#100-general)
  - [5000 Power Platform Connectors](/legal/marketplace/certification-policies#5000-power-platform-connectors) (including [5000.4 Connectors with AI Plugin](/legal/marketplace/certification-policies#50004-connectors-with-ai-plugin))
- [Prepare Power Platform connector and plugin files for certification](/connectors/custom-connectors/certification-submission)

If you use Copilot Studio to create a declarative agent for Microsoft 365 Copilot, you can use [Copilot Studio to publish your agent](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#publishing-a-copilot-extension) for sharing and/or submit it for [publish to your organization's catalog](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps#publish-extensions-for-copilot) by an admin.


## Agents built with Copilot Studio agent builder in Microsoft 365 Copilot

## Microsoft Graph connectors


Microsoft Graph connector publishing options depend on whether you have a standalone connector or a connector that's part of a Microsoft Teams app. While both scenarios are supported for single-tenant distribution, submission to the Microsoft Partner Center *Microsoft 365 and Copilot program* is currently limited to Microsoft Graph connectors packaged within Teams apps.

You can distribute standalone Microsoft Graph connectors through the Microsoft Admin Center ([admin.microsoft.com](https://admin.microsoft.com)). For details, see [Set up and manage Microsoft Graph connectors](/microsoftsearch/configure-connector).

You can distribute Microsoft Graph connectors within Teams apps via the Teams admin center. For details, see [Enable the simplified admin experience for your Microsoft Graph connector](/graph/connecting-external-content-deploy-teams).

For Microsoft Graph connectors within Teams apps, make sure that your app meets all applicable [Microsoft Commercial Marketplace certification policies](#microsoft-365-and-copilot-program), then submit your app package to Microsoft Partner Center through the Microsoft 365 and Copilot program as a *Teams app*. For more information, see [Make your Microsoft Graph connector available for other organizations](/graph/connecting-external-content-deploy-teams#make-your-microsoft-graph-connector-available-for-other-organizations-in-the-teams-admin-center).

## See also

Marketplace policies
Agents validation guidelines
Partner Center docs
