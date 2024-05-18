---
title: Plugins are apps for Microsoft 365
description: Message extension plugins are also apps for Microsoft 365. Learn how to take advantage of the Microsoft 365 platform opportunity and extend the reach of your plugin.
author: JoshuaPartlow
ms.author: joshuapa
ms.topic: best-practice
ms.date: 05/20/2024
---

# Plugins are apps for Microsoft 365

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

When you build a message extension plugin, you're building an app that works across Microsoft 365 experiences. The way you extend [Microsoft Copilot for Microsoft 365](ecosystem.md) with plugins is the same way you [extend Teams apps](/microsoftteams/platform/m365-apps/overview) to run across Microsoft 365: using a common app manifest, app packaging format, and developer and admin tools designed to be interoperable across the Microsoft 365 ecosystem.

This article will introduce Microsoft 365 developer resources for plugin and app building, as well as present best practices for designing experiences that keep users in the flow of their work across the Microsoft 365 ecosystem.

## App development for Microsoft 365

The [Microsoft 365 ecosystem of apps](ecosystem.md) supports users in collaborating with others, planning and organizing work, creating content, and working efficiently. For developers, Microsoft 365 offers a platform for the creation of apps that can surface wherever users are, reducing context switching and enabling them to be more productive. By [extending Teams apps across Microsoft 365](/microsoftteams/platform/m365-apps/overview), you can create a tailored app experience that keeps users in the flow of their work across Microsoft 365 applications.

### App model for Microsoft 365

The ability for apps to surface contextually across the Microsoft 365 app ecosystem and publish to Microsoft Commercial Marketplace (or your organization's private app store) is facilitated through a unified [app manifest](/microsoftteams/platform/resources/schema/manifest-schema) and app packaging format. Along with that, development is supported with APIs in the [Microsoft Teams JavaScript client library](/microsoftteams/platform/tabs/how-to/using-teams-client-library) and with [Teams Toolkit](/microsoftteams/platform/toolkit/visual-studio-code-overview) developer tools.

#### App elements

The Teams app platform has been expanding into the Microsoft 365 ecosystem. For details about support of Teams app platform elements across Microsoft 365 application hosts (including Teams, Outlook, and Microsoft 365 app) see [Teams extensibility overview](/microsoftteams/platform/m365-apps/overview). Teams app elements that are extensible across additional Microsoft 365 app hosts include:

- Personal apps
- Message extensions
- Link unfurling
- Bots
- App tab in chat/channel
- Meeting extensions
- Office add-ins

Particularly relevant for Copilot extensibility are message extensions. [Message extensions](/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions) enable user to engage with your web services through buttons and forms within the Microsoft Teams client and are also one of the options for creating a plugin for Copilot for Microsoft 365.

#### App manifest

Using a unified [app manifest](/microsoftteams/platform/resources/schema/manifest-schema) for Microsoft 365, you can define [Teams apps that work across Microsoft 365](/microsoftteams/platform/m365-apps/overview) application hosts and also [Outlook add-ins](/office/dev/add-ins/quickstarts/outlook-quickstart-json-manifest) from a single app package.

#### Tools and libraries

The [Teams Toolkit](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension) for Visual Studio Code makes it simple to get started with app development for Microsoft Teams and now Copilot plugins for Microsoft 365 as well. You can start a project directly from samples and templates for common line-of-business app scenarios, as well as run and debug to Microsoft 365 apps. At the same time, many logistical tasks such as app registration, configuration, and deployment are streamlined for you. To learn more, see [Teams Toolkit overview](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals).

Along with Teams Toolkit, Microsoft Teams JavaScript client library (TeamsJS) can help you create hosted experiences in Teams, Microsoft 365 app, and Outlook. Starting with version 2.5.0, the TeamsJS library enables [Teams apps to run in other Microsoft 365 experiences](/microsoftteams/platform/m365-apps/overview), in addition to Microsoft Teams. For a summary of host application support for Teams apps, see [TeamsJS capability support across Microsoft 365](/microsoftteams/platform/m365-apps/teamsjs-support-m365).

## Designing your app

Designing an app that will span the Microsoft 365 ecosystem can be a complex challenge. You'll want to ensure your app feels consistent across the Microsoft 365 ecosystem, while also providing a tailored experience within the context of each Microsoft 365 host application. To help you address that challenge, you can use the Microsoft 365 UI Kit (preview), which provides both guidance and templates to help you create your app.

> [!div class="nextstepaction"]
> [Preview the Microsoft 365 UI Kit (Figma)](https://aka.ms/M365UIKit)

The Microsoft 365 UI Kit expands the *Teams design system* to work with apps that run across the Microsoft 365 ecosystem. To learn more about these foundational concepts, see [Designing your Microsoft Teams app](/microsoftteams/platform/concepts/design/design-teams-app-overview).

## Planning your app

When thinking about creating an app that will live within and build upon the Microsoft 365 ecosystem of apps, it's important to consider how it will aid your users in doing their work and completing their daily tasks. By being thoughtful in your app planning, including how your copilot plugins interact with the other extensibility options of Microsoft 365, you can create an experience that's more cohesive and introduces less friction to users as they go about their work.  

To better understand how to accomplish that, it can be useful to think about some of the common categories of apps that tend to be created within the Microsoft 365 ecosystem and consider how you can take advantage of the extension opportunities available to you within Microsoft 365.  

The following sections highlight common components of different app categories, with each app category representing unique solutions to a particular user need or problem. Using these examples, you can extract common workflows or patterns to address specific challenges for your app. For example, drawing inspiration from workflows of a project management app might spark ideas for how to provide users with tools to achieve efficient task management.

Though not exhaustive, this list is meant to help you get a general understanding of some possible features to consider during design. Some categories also provide app design playbooks to help you get started.

- [Creation apps](#creation-apps)
- [Business process apps](#business-process-apps)
- [Content apps](#content-apps)
- [Project management apps](#project-management-apps)
- [System of record apps](#system-of-record-apps)
- [Real-time collaboration apps](#real-time-collaboration-apps)

### Creation apps

Creation apps are used to create and manage digital content. They help users by enabling them to collaborate efficiently, access resources quickly, and start creating content fast. Some of the developer opportunities for this style of app are:

- **Real-time collaboration** - Invite team members or clients to collaborate, discuss, and get feedback in real-time.
- **Instant feedback and comments** - Receive and respond to essential notifications instantly. Preview files directly without switching apps.
- **Enable strategic decision making with stakeholders** - Review relevant information and inputs from stakeholders or customers for data-driven decision-making.
- **Customizable workspaces** - Add files and apps to your collaboration space for quick access, updates, and asynchronous reviews.
- **Collaborate efficiently** - Easily add files for your team or clients to review when creating events, emails, and messages. Quickly access relevant files in the context of meetings or teammates.
- **Integrated search** - Quickly find your resources across Microsoft, regardless of format.
- **Cross reference of information during content creation** - Quickly find and use project-related documents in the context of your creation.
- **Access and communicate the latest data** - Easily access, view, and share your project's most recent data all from a single app.
- **Shortcuts to frequent creations** - Quickly access frequent creation to boost productivity and creativity.
- **Discover new apps and create with AI suggestions based on your ideas** - Discover AI-powered app suggestions tailored to your content.

> [!div class="nextstepaction"]
> [Download the Creation app playbook](https://aka.ms/creation-app-playbook)

### Business process apps

Business process apps enable the automation of typical business processes for organizations, such as employee expense management, purchase order management, and business travel management. Some of the developer opportunities for this style of app are:

- **Share documents with the correct set of people** - Easily access documents where you are working and invite team members or clients to view and collaborate on documents. Follow up with real-time notifications about reports to quickly respond or take action.
- **Digital signatures made simple** - Obtain signature on documents directly in Teams, Microsoft 365 app, or Outlook.
- **Instant in-line approvals** - Get approvals in real-time during discussions to keep your work moving and projects on track.
- **Tailor your notification channels to suit your customers needs** - Direct notifications from each app to the right channels and react promptly to critical updates while prioritizing and silencing others.
- **Request information in a secure environment** - Request or follow up on information you need from your team members or clients while ensuring that the information is protected.
- **Access the latest information, updated in real-time wherever it’s shared** - Share live data that dynamically updates so your message is always relevant and up to date.
- **Reports at your fingertips** - Scan and access documents while communicating with teammates and clients across multiple devices and Microsoft 365 apps.
- **Easily reference data and files during meetings** - Access, reference, and share information real-time during meetings ensuring collaboration and informed decisions.

> [!div class="nextstepaction"]
> [Download the Business process app playbook](https://aka.ms/business-process-app-playbook)

### Content apps

Apps used to create and edit simple content or information sharing. Some of the developer opportunities for this style of app are:

- **Integrate content where you are working** - Embed images, videos, audio clips, and other media directly into your projects.
- **Get started quickly** - Access to content templates to help users quickly create content such as videos and contracts.
- **Multi-device access** - Access and share your content across various devices.
- **Manage permissions** - Control access and share permissions to maintain security and compliance to your content.
- **Save time, share more** - View files or shared content, and edit in place, saving time that would otherwise be spent searching for information or switching between apps.
- **Streamline workflows** - Provide in-line completion of tasks and top actions such as converting files.
- **Realtime content sharing** - Consume content together in real time during meetings, making it possible to watch videos or collaboratively review documents to sign.
- **Easy project management** - Integrate with collaboration and project management tools to streamline content creation workflows.

### Project management apps

Apps that help to plan, organize and manage projects and collaborate virtually from anywhere. Some of the developer opportunities for this style of app are:

- **Track collaborators and give them access directly during meetings** - Add people from a meeting, collaborators to a board, and invite people to a board during a meeting.
- **Find and attach content to communications** - Attach or embed tasks or boards to an email, event, or message.
- **Collect action items and updates from communications** - Create a task out of a comment and import emails into project updates.
- **Stay informed and on track** - Receive notifications and updates where you work for the things you care about the most.
- **Real-time collaboration** - Invite team members or clients to collaborate, discuss, and get feedback and input in real-time.

### System of record apps

Apps that enable the storage, management, querying and reporting of vast amounts of data, primarily for customer relationship management or enterprise resource planning. Some of the developer opportunities for this style of app are:

- **Facilitate easy communication and organization** - Set up stakeholder meetings and share related resources to prepare yourself and your team beforehand.
- **Prepare content using data from apps** - Create content such as PowerPoints and reports for upcoming meetings while referencing and adding data from multiple apps to your reports.
- **Share reports and resources with the team** - Generate reports and analyze data within your workflows and share relevant information and resources with the team.
- **Stay updated and take action** - Track inputs and data changes within the system to share information with the right people.

### Real-time collaboration apps

Apps that enable groups of people to collaborate virtually, in real-time, with support for co-authoring, chats, and other collaboration features. Some of the developer opportunities for this style of app are:

- **Get together to jam** - Brainstorm without having to share your screen
- **Join the action from any device** - Participate from any device from smartphone, tablet, or computer to accommodate diverse work styles and locations.
- **Reference work everywhere** - Quickly share links and embed content into emails, calendar invites, and messages
- **Cross-reference information during collaboration** - Quickly find and use content from multiple sources for projects while working with others and during meetings.
- **Manage access to content from where you are working** - Seamlessly manage access to your content right in your workspace for immediate, efficient, and secure content sharing.
- **Stay connected to the conversation the way you choose** - Efficiently communicate with your collaborators by managing your notifications to specific channels and promptly replying to critical comments.

## Additional resources

- [Teams apps across Microsoft 365](/microsoftteams/platform/m365-apps/overview)
- [Teams message extension across Microsoft 365](/microsoftteams/platform/m365-apps/extend-m365-teams-message-extension)
- [Message extension sample code](/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions)
- [Teams Toolkit for Visual Studio Code overview](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals?pivots=visual-studio-code-v5)

## Next step

> [!div class="nextstepaction"]
> [Extend a message extension as a Copilot plugin](/microsoftteams/platform/messaging-extensions/build-bot-based-plugin?context=/microsoft-365-copilot/extensibility/context)
