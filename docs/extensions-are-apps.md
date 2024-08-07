---
title: Copilot extensions are apps for Microsoft 365
description: Copilot extensions are also apps for Microsoft 365, which use a unified process for packaging, publishing, and management.
author: JoshuaPartlow
ms.author: joshuapa
ms.topic: concept-article
ms.date: 08/15/2024
---

# Copilot extensions are apps for Microsoft 365

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

When you build a Copilot extension, you're also building an app for Microsoft 365. Apps for Microsoft 365 share a common manifest schema and packaging format, and unified distribution and management processes and tools. The end result is that your apps and Copilot extensions reach the widest possible audience and appear contextually within the workflow of your users.

This article will introduce key concepts and resources for building, publishing, and managing extensions for Copilot for Microsoft 365.

## App model for Microsoft 365

The Microsoft 365 ecosystem is evolving into an integrated app platform, where you can use a common app model to define and package your app. What started as a way to [extend Teams apps to run in other Microsoft 365 applications](/microsoftteams/platform/m365-apps/overview?context=/microsoft-365-copilot/extensibility/context) has since expanded to support the distribution of [Graph connectors](), [Outlook Add-ins](), and now Copilot extensions.

### App package

The app package for Microsoft 365, including Copilot extensions, is a zip file that contains one or more configuration (manifest) files and your app's icons. Your app logic and data storage are hosted elsewhere and accessed by the Microsoft 365 host application via HTTPS. You'll submit the app package to your admin to publish to your organization or to Partner Center to publish to Microsoft AppSource.

### App manifest

The app manifest for Microsoft 365 (previously known as *Teams app manifest*) is a JSON file that describes the functionality and characteristics of your app. At its core, the app manifest for Microsoft 365 is the schema for building [Teams apps](), however it has since expanded (as of version 1.17) to define apps that run across Microsoft 365 hosts, in addition to Teams.

Every app manifest must include the following information:

- `developer` - contains information about your company like it's name and website url.
- `name` - contains the name of your app experience, displayed to users in the Microsoft 365 application host.
- `localizationInfo` - contains information about default language and paths to additional language files.
- `icons` - contains paths to the icon files that will be used within the Microsoft 365 application host.
- Additional elements of your app - manifest sections define the integration points of your app, such as tabs, bots, and message extensions.

For detailed manifest guidance, see the [app manifest](/microsoftteams/platform/resources/schema/manifest-schema) schema documentation.

#### Defining copilot extensions

PLACEHOLDER for overview on DCs and API Plugins + links to reference docs.

### App icons

PLACEHOLDER explainer on required app icons

### Design tools

#### Microsoft 365 UI Kit

The [Microsoft 365 UI Kit](https://aka.ms/M365UIKit) (Preview) helps you to design apps that span the Microsoft 365 ecosystem. It includes core components, scenario-based templates, and best practices to help you create apps that keep your users in the flow of their work, including:

- App design guidance for apps running within Microsoft Teams, Microsoft Outlook, and Microsoft 365 app.
- Sample app templates and built-in UI components for crafting your designs, allowing you to get started quickly from a template or start from scratch if you’d prefer.  
- UI screens that reflect the current web and mobile experiences.
- Component properties and Figma variables to let you quickly and easily modify the look and feel of your designs (theme, layout, etc) to see how your app will look running within different app experiences.  
- Clear indications of areas of the app experience that are customizable.
- App submission to-do list to help you prepare the necessary requirements for app publication.

The Microsoft 365 UI Kit expands the *Teams design system* to work with apps that run across the Microsoft 365 ecosystem. To learn more about these foundational concepts, see [Designing your Microsoft Teams app](/microsoftteams/platform/concepts/design/design-teams-app-overview).

#### App playbooks

The Copilot and Microsoft 365 platform opportunity is to reach your users within the context of their work in Microsoft 365 products and services with a *write once, run everywhere* approach. The integrated Microsoft 365 platform enables you to take a more scenario-centered approach as you plan an app experience that helps keep users in the flow of their work and avoid context switching between apps to accomplish their task.

When planning your Microsoft 365 integrated app, its useful to first think holistically about the *category* of app best suited for the jobs to be done, rather than jumping immediately to implementation choices. The following *App type playbooks* illustrate workflows and opportunities for common categories of apps:

- [**Creation apps**](https://aka.ms/creation-app-playbook) used to create and manage digital content by enabling users to collaborate efficiently, access resources quickly, and start creating fast.
- [**Business process apps**](https://aka.ms/business-process-app-playbook) that enable the automation of typical business processes for organizations.
<!-- **Content apps** to create, edit, and share content.
- **Project management apps** that help plan, organize, and manage projects and facilitate collaboration.
- **System of record apps** that enable the storage, management, querying, and reporting of business data.
- **Real-time collaboration apps** that enable groups of people to synchronously co-author and communicate.-->

### Developer tools

#### Teams Toolkit

[Teams Toolkit](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals)  is the *Pro-code* option for building and debugging Copilot extensions and custom engine copilots. It provides support for all major Microsoft 365 platform extensibility surfaces, including Copilot for Microsoft 365 extensions, tabs, bots, message extensions, and Outlook Add-ins. Teams Toolkit is available as an extension for [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension) and [Visual Studio](/microsoftteams/platform/toolkit/toolkit-v4/install-teams-toolkit-vs).


#### Copilot Studio

[Microsoft Copilot Studio](/microsoft-copilot-studio/copilot-plugins-overview?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext) is the graphical *Low-code* option for copilot extensibility, including Copilot for Microsoft 365 extensions and also custom copilots. Copilot Studio (previously known as *Power Virtual Agents*) is available as a standalone web app ([copilotstudio.microsoft.com](https://copilotstudio.microsoft.com/)) and also as an [app for Microsoft Teams](https://aka.ms/PVATeamsApp?azure-portal=true).

#### Copilot developer mode

Copilot for Microsoft 365 [developer mode](./debugging-copilot-plugin.md) provides a way to test if and when the orchestrator selects your plugin with different prompts. When you enable developer mode from the Copilot chat prompt, a card with debug information is returned whenever the orchestrator searches specifically within your plugin to respond to a prompt.

## Distribution

MAC and Partner Center: Quick summary + link to [Publish](./publish.md)

## Management

Quick summary + link to [Manage](./manage.md)


## Additional resources

- [Plugins and connectors work across Microsoft 365 experiences](ecosystem.md#plugins-and-connectors-work-across-microsoft-365-experiences)
- [Manage extensions for Copilot in Microsoft 365 admin center](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=/microsoft-365-copilot/extensibility/context)
- [Publish extensions for Copilot for Microsoft 365](publish.md)
- [Teams apps across Microsoft 365](/microsoftteams/platform/m365-apps/overview?context=/microsoft-365-copilot/extensibility/context)
