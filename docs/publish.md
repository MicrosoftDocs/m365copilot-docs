---
title: Publish Agents for Microsoft 365 Copilot
description: Learn how to distribute agents for Microsoft 365 Copilot to your organization or the Microsoft Commercial Marketplace.
author: erikadoyle
ms.author: edoyle
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 06/17/2025
---
# Publish agents for Microsoft 365 Copilot

This article summarizes the distribution options and procedures for Microsoft 365 Copilot extensibility. Depending on their intended purpose as a line-of-business or marketable software solutions, agents and connectors for Copilot can be shared among users in a tenant, published to an organizational catalog, or offered in the Microsoft Commercial Marketplace through [Microsoft Partner Center](https://partner.microsoft.com).

## Microsoft 365 and Copilot program

As an independent software publisher, you can distribute your Copilot app package through the  [Microsoft 365 and Copilot](/partner-center/marketplace/why-publish) program of Microsoft Partner Center.

:::image type="content" source="assets/images/microsoft-365-and-copilot-program.png" alt-text="Screenshot of Microsoft Partner Center opened to 'Account settings | Programs' and the 'Microsoft 365 and Copilot' program listed as an option.":::

Before submitting your agent to Partner Center, ensure it meets all applicable:

- [Microsoft Commercial Marketplace certification policies](/legal/marketplace/certification-policies)
- [Store validation guidelines for agents for Copilot](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines?context=/microsoft-365-copilot/extensibility/context)
- [Responsible AI validation checks](rai-validation.md)
- (Optional) [Microsoft 365 App Compliance Program certification](/microsoft-365-app-certification/docs/certification)

When ready, [submit your app package](/partner-center/marketplace-offers/add-in-submission-guide#step-1-select-the-type-of-app-youre-submitting) to Microsoft Partner Center through the *Microsoft 365 and Copilot program* under the offer type **Apps and agents for Microsoft 365 and Copilot**.

When Microsoft validates and approves your app package, your agent is made available in the Microsoft Commercial Marketplace and ready for IT enablement. When it's enabled by an IT administrator, it appears in the **App store** within Microsoft 365 Copilot, Microsoft Teams, Outlook, Word, Excel, and PowerPoint. It also appears in the **Agents Store** within Microsoft 365 Copilot. When the agent deployed by an admin or acquired by a user, it appears as an installed agent for Microsoft 365 Copilot.

## Declarative agents built with Microsoft 365 Agents Toolkit

[Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) supports publishing agents to your organizational catalog and also submission to the Microsoft Commercial Marketplace. [Agents](./overview-declarative-copilot.md) are packaged, distributed, and managed using the same [Microsoft 365 app package](./agents-are-apps.md) as [Teams apps that are integrated](/microsoft-365/admin/manage/test-and-deploy-microsoft-365-apps) to run across the Microsoft 365 ecosystem.

[Responsible AI validation checks](./rai-validation.md) run on your declarative agent during manifest validation, including when you sideload or publish your agent.

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ✅ | [Create declarative agents using Agents Toolkit](build-declarative-agents.md) |
| Share with others | ❌ | |
| Submit to organizational catalog | ✅ | [Upload a custom app using Teams admin center](/microsoftteams/teams-custom-app-policies-and-settings#upload-a-custom-app-using-teams-admin-center?toc=/microsoftteams/platform/toc.json&bc=/microsoftteams/platform/breadcrumb/toc.json) |
| Submit to Microsoft Commercial Marketplace | ✅ | [Publish your app to the Teams Store](/microsoftteams/platform/concepts/deploy-and-publish/appsource/publish) |

## Declarative agents built with Copilot Studio agent builder

The [Copilot Studio agent builder](./copilot-studio-agent-builder.md) within Microsoft 365 Copilot enables you to build and  declarative agents for Microsoft 365 Copilot quickly, and easily share and distribute them within your organization.

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ✅ | [Create an agent with Copilot Studio agent builder](./copilot-studio-agent-builder-publish.md#create-the-agent) |
| Share with others | ✅ | [Share an agent with Copilot Studio agent builder](./copilot-studio-agent-builder-publish.md#create-the-agent) |
| Submit to organizational catalog | ✅ | [Share an agent with Copilot Studio agent builder](./copilot-studio-agent-builder-publish.md#create-the-agent) |
| Submit to Microsoft Commercial Marketplace | ❌ | |

## Copilot agents built with Copilot Studio

A Copilot agent built with Copilot Studio is more customizable and feature-rich version of a declarative agent created with [Copilot Studio agent builder](#declarative-agents-built-with-copilot-studio-agent-builder). Unlike a standalone Copilot Studio agent, a Copilot agent isn't automatically deployed to Microsoft 365 Copilot and Teams when published. Rather, you need to set its [availability options](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?branch=main#set-availability-options) to distribute the agent to share among individuals, groups, or to be published to the organization's catalog by an admin.

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ✅ | [Create a Copilot agent](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#create-a-copilot-agent?context=/microsoft-365-copilot/extensibility/context) |
| Share with others | ✅ | [Publishing a Copilot agent](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#publishing-a-copilot-agent) |
| Submit to organizational catalog | ✅ | [Publishing a Copilot agent](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#publishing-a-copilot-agent)|
| Submit to Microsoft Commercial Marketplace | ❌ | |

## Declarative agents built with SharePoint

Custom-built [SharePoint agents](https://support.microsoft.com/office/get-started-with-sharepoint-agents-69e2faf9-2c1e-4baa-8305-23e625021bcf) enable SharePoint site members with edit permissions to create and edit agents that are tailored to specific team needs and content. SharePoint agents are published in the sense that after they're created within SharePoint, they're made available to users with access to the SharePoint site to interact with. SharePoint agents can also be shared to Teams within group chats and meetings.

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ❌ | |
| Share with others | ✅ | [Share an agent in Teams](https://support.microsoft.com/office/share-an-agent-from-sharepoint-in-teams-6dcbf7b5-8c13-44e5-a68a-dbd71fb76ad3) |
| Submit to organizational catalog | ❌* | *Ready-made and Custom-built agents for SharePoint are a configurable part of each SharePoint site; they aren't published directly to an organizational catalog. Organizational access is scoped to users with permissions to the SharePoint site. |
| Submit to Microsoft Commercial Marketplace | ❌ | |

## Custom engine agent built with Agents Toolkit

Agents Toolkit supports publishing agents to your organizational catalog and also submission to the Microsoft Commercial Marketplace. [Agents](./overview-declarative-copilot.md) are packaged, distributed, and managed using the same [Microsoft 365 app package](./agents-are-apps.md) as [Teams apps that are integrated](/microsoft-365/admin/manage/test-and-deploy-microsoft-365-apps) to run across the Microsoft 365 ecosystem.

[Store submission requirements](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines?context=/microsoft-365-copilot/extensibility/context) include a number of [custom engine agent UX](./ux-custom-engine-agent.md) best practices to ensure the best possible user experience.

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ✅ | [Publish to individual scope](/microsoftteams/platform/toolkit/publish#publish-to-individual-scope-or-custom-app-upload-permission) |
| Share with others | ❌ | |
| Submit to organizational catalog | ✅ | [Publish apps using Agents Toolkit](/microsoftteams/platform/toolkit/publish) |
| Submit to Microsoft Commercial Marketplace | ✅ | [Publish your app to the Teams Store](/microsoftteams/platform/concepts/deploy-and-publish/appsource/publish) |

## Custom agents built with Copilot Studio

Custom agents built with Copilot Studio can be published to the [Microsoft 365 Copilot and Teams channel](/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams), in addition to other channels. When you publish to the Microsoft 365 Copilot and Teams channel, your custom agent is made available to organizational users in Teams and the Microsoft 365 Copilot app. Additionally, you can customize your agent's appearance as an agent for Microsoft 365 Copilot.

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ✅ | [Install an agent in Teams and Microsoft 365 Copilot](/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams#install-an-agent-in-teams-and-microsoft-365-copilot) |
| Share with others | ✅ | [Share a link so others can install an agent](/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams#share-a-link-so-others-can-install-an-agent) |
| Submit to organizational catalog | ✅ | [Show an agent to the organization](/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams#show-to-the-organization) |
| Submit to Microsoft Commercial Marketplace | ❌ | |

## Copilot connectors

Microsoft 365 Copilot connector (formerly Microsoft Graph connectors) publishing options depend on whether you have a standalone connector or a connector that's packaged using the same [Microsoft 365 app package](./agents-are-apps.md) as [Teams apps that are integrated](/microsoft-365/admin/manage/test-and-deploy-microsoft-365-apps) to run across the Microsoft 365 ecosystem. While both scenarios are supported for single-tenant distribution, submission to the Microsoft Partner Center Microsoft 365 and Copilot program is currently limited to Copilot connectors packaged as Microsoft 365 (Teams) apps.

| Distribution method | Support | Learn more |
|--|--|--|
| Sideload for personal use | ❌ | |
| Share with others | ❌ | |
| Submit to organizational catalog | ✅ | |
| Submit to Microsoft Commercial Marketplace | ✅* | [Make your Copilot connector available for other organizations](/graph/connecting-external-content-deploy-teams#make-your-microsoft-graph-connector-available-for-other-organizations-in-the-teams-admin-center)<br /><br />*Connectors that are packaged as *Apps for Microsoft 365* can be submitted to Partner Center by verified publishers. Standalone connector submission (to connectors gallery) isn't available. |
