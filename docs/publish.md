---
title: Publish Agents for Microsoft 365 Copilot
description: Learn how to distribute agents for Microsoft 365 Copilot to your organization or the Microsoft Commercial Marketplace.
author: erikadoyle
ms.author: edoyle
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 4/18/2025
---
# Publish agents for Microsoft 365 Copilot

This article summarizes the distribution options and procedures for Microsoft 365 Copilot extensibility. Depending on their intended purpose as a line-of-business or marketable software solutions, agents and connectors for Copilot can be shared among users in a tenant, published to an organizational catalog, or offered in the Microsoft Commercial Marketplace through [Microsoft Partner Center](https://partner.microsoft.com).

## Microsoft 365 and Copilot program

As an independent software publisher, you can distribute your Copilot app package through the  [Microsoft 365 and Copilot](/partner-center/marketplace/why-publish) program of Microsoft Partner Center.

:::image type="content" source="assets/images/microsoft-365-and-copilot-program.png" alt-text="Screenshot of Microsoft Partner Center opened to 'Account settings | Programs' and the 'Microsoft 365 and Copilot' program listed as an option.":::

To submit your app package to the Microsoft 365 and Copilot program in Partner Center, see the [Store step-by-step submission guide](/partner-center/marketplace-offers/add-in-submission-guide).

Before submitting your agent to Partner Center, ensure it meets all applicable:

- [Microsoft Commercial Marketplace certification policies](/legal/marketplace/certification-policies)
- [Store validation guidelines for Copilot extensibility](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines?context=/microsoft-365-copilot/extensibility/context)
- [Responsible AI validation checks](rai-validation.md)
- (Optional) [Microsoft 365 App Compliance Program certification](/microsoft-365-app-certification/docs/certification)

Once ready, submit your app package to Microsoft Partner Center through the **Microsoft 365 and Copilot program** as under the offer type *Apps and agents for Microsoft 365 and Copilot*.

Once validated and approved by Microsoft, your agent is an active offer in the Microsoft Commercial Marketplace and ready for IT enablement. Once enabled by an IT administrator, it appears in the **Apps** store within Microsoft 365 Copilot and Microsoft Teams. Once deployed by an admin or acquired by a user, it will then appear as an installed agent for Microsoft 365 Copilot.

## Declarative agents built with Teams Toolkit

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ✅ | [Create declarative agents using Teams Toolkit](/microsoft-365-copilot/extensibility/build-declarative-agents?tabs=ttk&tutorial-step=1) |
| Share with others | ❌ | |
| Submit to organizational catalog | ✅ | [Upload a custom app using Teams admin center](/microsoftteams/teams-custom-app-policies-and-settings#upload-a-custom-app-using-teams-admin-center?toc=/microsoftteams/platform/toc.json&bc=/microsoftteams/platform/breadcrumb/toc.json) |
| Submit to Microsoft Commercial Marketplace | ✅ | [Publish your app to the Teams Store](/microsoftteams/platform/concepts/deploy-and-publish/appsource/publish) |

## Declarative agents built with Copilot Studio Agent builder

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ✅ | [Create an agent with Copilot Studio agent builder](/microsoft-365-copilot/extensibility/copilot-studio-agent-builder-publish#create-the-agent) |
| Share with others | ✅ | [Share an agent with Copilot Studio agent builder](/microsoft-365-copilot/extensibility/copilot-studio-agent-builder-publish#create-the-agent) |
| Submit to organizational catalog | ✅ | [Share an agent with Copilot Studio agent builder](/microsoft-365-copilot/extensibility/copilot-studio-agent-builder-publish#create-the-agent) |
| Submit to Microsoft Commercial Marketplace | ❌ | |

## Declarative agents built with Copilot Studio

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ✅ | [Create a Copilot agent](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#create-a-copilot-agent?context=/microsoft-365-copilot/extensibility/context) |
| Share with others | ✅ | [Publishing a Copilot agent](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#publishing-a-copilot-agent) |
| Submit to organizational catalog | ✅ | [Publishing a Copilot agent](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#publishing-a-copilot-agent)|
| Submit to Microsoft Commercial Marketplace | ❌ | |

## Declarative agents built with SharePoint

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ❌ | |
| Share with others | ✅ | [Share an agent in Teams](https://support.microsoft.com/office/share-an-agent-from-sharepoint-in-teams-6dcbf7b5-8c13-44e5-a68a-dbd71fb76ad3) |
| Submit to organizational catalog | ❌* | *Ready-made and Custom-built agents for SharePoint are a configurable part of each SharePoint site; they are not published directly to an organizational catalog. Organizational access is scoped to users with permissions to the SharePoint site. |
| Submit to Microsoft Commercial Marketplace | ❌ | |

## Custom engine agent built with Teams Toolkit

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ✅ | [Publish to individual scope](/microsoftteams/platform/toolkit/publish#publish-to-individual-scope-or-custom-app-upload-permission) |
| Share with others | ❌ | |
| Submit to organizational catalog | ✅ | [Publish apps using Teams Toolkit](/microsoftteams/platform/toolkit/publish) |
| Submit to Microsoft Commercial Marketplace | ✅ | [Publish your app to the Teams Store](/microsoftteams/platform/concepts/deploy-and-publish/appsource/publish) |

## Custom engine agent built with Copilot Studio

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ✅ | [Create and delete agents](/microsoft-copilot-studio/authoring-first-bot?context=/microsoft-365-copilot/extensibility/context) |
| Share with others | ✅ | [Share an agent for chat](/microsoft-copilot-studio/admin-share-bots#share-an-agent-for-chat) |
| Submit to organizational catalog | ✅ | [Share an agent for chat](/microsoft-copilot-studio/admin-share-bots#share-an-agent-for-chat) |
| Submit to Microsoft Commercial Marketplace | ❌  | |

## Graph connectors

<<<<<<< HEAD
| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ❌ | |
| Share with others | ❌ | |
| Submit to organizational catalog | ✅ | |
| Submit to Microsoft Commercial Marketplace | ✅* | [Make your Microsoft Graph connector available for other organizations](/graph/connecting-external-content-deploy-teams#make-your-microsoft-graph-connector-available-for-other-organizations-in-the-teams-admin-center) *Connectors that are packaged as *Apps for Microsoft 365* can be submitted to Partner Center by verified publishers. Standalone connector submission (to connectors gallery) is not available. |
