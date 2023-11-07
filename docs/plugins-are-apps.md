---
title: Copilot plugins are Microsoft 365 apps
description: Message extension plugins are also Microsoft 365 apps. Learn how to take advantage of the Microsoft 365 platform opportunity and extend the reach of your plugin.
author: JoshuaPartlow
ms.author: joshuapa
ms.topic: best-practice
ms.date: 11/14/2023
---

# Copilot plugins are Microsoft 365 apps

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

When you build a copilot message extension plugin you're also building an app that runs across the Microsoft 365 ecosystem. [Copilot for Microsoft 365](ecosystem.md) takes advantage of the [extensibility available to Microsoft Teams apps](/microsoftteams/platform/m365-apps/overview) by building upon Teams message extensions. That means that the copilot you create is also a [Teams search-based message extension](/microsoftteams/platform/m365-apps/extend-m365-teams-message-extension) that can freely flow across the Microsoft 365 experiences that support it and is part of the rich set of extensibility options that exist for Microsoft 365.

With Microsoft 365 you can create apps that are contextually aware of where they're running and can provide an ideal experience right where your customers are working. Saving users time in context switching between apps and simplifying the coding experience for you. When used as a copilot, your plugin is hosted within the relevant copilot for Microsoft 365 experience. When used as a Teams app, it  surfaces as a message extension in the relevant Microsoft 365 experience (Teams, Microsoft 365 app, Outlook).

## App development for Microsoft 365

 The Microsoft 365 ecosystem of apps supports users in collaborating with others, planning and organizing work, creating content, and working efficiently. In today’s productivity landscape, users roam freely across endpoints, interacting with cloud-powered apps that provide ubiquitous experiences. Some of those experiences managed by their enterprise, others not. Within this complex landscape Microsoft strives to meet customers where they are by embracing a cross-device, cross platform strategy that uses Microsoft 365 to deliver and greatly enhance productivity experiences.

Developers face many challenges in this landscape. Addressing the broad set of cross-device, cross-platform targets needed to meet customers’ experience expectations, while maintaining industry standards can be cost-prohibitive, as is defending users against ever expanding security threats. And the lack of access to data that can be isolated in other applications makes it difficult to drive sustained user engagement. The Microsoft 365 platform works to make it easier for solution creators to clear these hurdles to deliver new, intelligent, contextual solutions that drive engagement when and where users need them to be.

For developers, Microsoft 365 offers a platform for the creation of apps that can surface wherever users are, reducing context switching and enabling them to be more productive. Through the [extension of Microsoft Teams apps](/microsoftteams/platform/m365-apps/overview) across Microsoft Outlook and the Microsoft 365 app, you can create a single experience that functions in a tailored way, wherever your customers choose to use it. Some of the extensibility options and associated design surface are illustrated in the following graphic.

:::image type="content" source="assets/images/app-elements.png" alt-text="Shows an overview of extensible app elements for Microsoft Teams apps extended across Microsoft 365":::

### App model for Microsoft 365

The ability for apps to surface contextually across the Microsoft 365 app ecosystem is accomplished through a set of app capabilities that allow you to choose how your app appears and functions within Microsoft 365 app experiences, combined with a single manifest and app package that you can use to define your app to run across the Microsoft 365 experiences that support it.

From a development point of view, the foundation of this development experience is a Microsoft Teams app. With the latest releases of [Microsoft Teams JavaScript client library](/microsoftteams/platform/tabs/how-to/using-teams-client-library.md) (TeamsJS version 2.0.0 and later), [app manifest (previously called Teams app manifest)](/microsoftteams/platform/resources/schema/manifest-schema.md) (version 1.13 and later), and [Teams Toolkit](/microsoftteams/platform/toolkit/visual-studio-code-overview.md), you can build and update Teams apps to run in other high-usage Microsoft 365 products and publish them to the Microsoft commercial marketplace ([Microsoft AppSource](https://appsource.microsoft.com/)) or your organization's private app store.

#### App element support matrix

The Teams app platform continues to evolve and expand holistically into the Microsoft 365 ecosystem. Here's the current support of Teams app platform elements across Microsoft 365 (Teams, Outlook, and Microsoft 365 as application hosts):

| Teams app features| App manifest element | Teams support |Outlook support | Microsoft 365 app support | Notes |
|--|--|--|--|--|--|
| [**Tabs-personal scope**](/microsoftteams/platform/tabs/how-to/create-personal-tab.md)     |`staticTabs`  | Web, Desktop, Mobile | Web, Desktop, Mobile (Android, iOS) | Web, Desktop, Mobile (Android, iOS)| Channel and group scopes aren't supported for Microsoft 365. For more information, see [Teams JavaScript client library](/microsoftteams/platform/tabs/how-to/using-teams-client-sdk.md#microsoft-365-support-running-teams-apps-in-office-and-outlook).
| [**Message extensions-search-based**](/microsoftteams/platform/messaging-extensions/how-to/search-commands/define-search-command.md)| `composeExtensions` | Web, Desktop, Mobile| Web, Desktop | - |Action-based not yet supported for Microsoft 365. For more information, see [troubleshooting](/microsoftteams/platform/m365-apps/extend-m365-teams-message-extension.md#troubleshooting). |
| [**Link unfurling (including Stage View)**](/microsoftteams/platform/tabs/tabs-link-unfurling.md) | `composeExtensions.messageHandlers` | Web, Desktop | Web, Desktop | - | See notes on [link unfurling](/microsoftteams/platform/m365-apps/extend-m365-teams-message-extension.md#link-unfurling) and [Stage View](/microsoftteams/platform/m365-apps/extend-m365-teams-message-extension.md#stage-view)|
| [**Adaptive Card Loop components**](/microsoftteams/platform/m365-apps/design-loop-components.md)|`composeExtensions.messageHandlers`|Web (preview), Desktop (preview) |Web (preview), Desktop (only for [new Outlook](https://support.microsoft.com/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627) preview) |-| Viewable (not composable) in Teams/Outlook mobile preview (iOS, Android). See [notes](/microsoftteams/platform/m365-apps/cards-loop-component.md).|
| [**Stage View**](/microsoftteams/platform/m365-apps/extend-m365-teams-message-extension.md#stage-view)|`composeExtensions.messageHandlers`|Web, Desktop, Mobile|Web (preview), Desktop (preview)|-| Viewable/actionable (not composable) in Outlook mobile preview (iOS, Android). See [notes](/microsoftteams/platform/m365-apps/extend-m365-teams-message-extension.md#stage-view).|
| [**Office Add-ins**](/office/dev/add-ins/develop/json-manifest-overview) (preview) | `extensions` | - | Web, Desktop | - | Only available in [devPreview](/microsoftteams/platform/resources/schema/manifest-schema-dev-preview.md) app manifest version. See [notes](#app-manifest).|

#### App manifest

Using a single [app manifest](/microsoftteams/platform/resources/schema/manifest-schema.md) you can define a Teams app that extends across Microsoft 365, as well as a copilot for Microsoft 365. Additionally, with an aim toward simplifying and streamlining the Microsoft 365 developer ecosystem, Microsoft continues to expand the app manifest into other areas of Microsoft 365 with support for defining and deploying Office Add-ins in the [developer preview version](/microsoftteams/platform/resources/schema/manifest-schema-dev-preview.md) of the Microsoft Teams app manifest. Currently, this preview is limited to Outlook Add-ins running on subscription Microsoft 365 for Windows app. For more information, see [app manifest for Office Add-ins (preview)](/office/dev/add-ins/develop/json-manifest-overview).

#### TeamsJS library

The Microsoft Teams JavaScript client library (TeamsJS) can help you create hosted experiences in Teams, Microsoft 365 app, and Outlook, where your app content is hosted in an [iFrame](https://developer.mozilla.org/docs/Web/HTML/Element/iframe). Starting with version `2.0.0`, the TeamsJS library (`@microsoft/teams-js`, or simply `TeamsJS`) was refactored to enable [Teams apps to run in Outlook and Microsoft 365 app](/microsoftteams/platform/m365-apps/overview), in addition to Microsoft Teams. Currently, support within Microsoft 365 application hosts (including Microsoft 365 app and Outlook) for Teams apps varies, with support for a subset of the application types and capabilities you can build for the Teams platform. This support will expand over time. For a summary of host support for Teams apps, see [TeamsJS capability support across Microsoft 365](/microsoftteams/platform/m365-apps/teamsjs-support-m365.md).

#### Teams toolkit (v5)

[Teams Toolkit](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals.md) makes it simple to get started with app development for Microsoft Teams, and now copilots for Microsoft 365 as well, using Visual Studio Code.

* Start with a project template for common line-of-business app scenarios or from a sample.
* Save setup time with automated app registration and configuration.
* Run and debug to Teams directly from familiar tools.
* Smart defaults for hosting in Azure using infrastructure-as-code and Bicep.
* Create unique configurations like dev, test, and prod using the environment features.

> [!NOTE]
> Before you get started, we strongly recommend that you visit [Teams Toolkit v5 Guide](https://aka.ms/teamsfx-v5.0-guide) to learn key features, such as life cycles and actions.

## Planning your app

When thinking about creating an app that will live within and build upon the Microsoft 365 ecosystem of apps, it's important to consider how it will aid your users in doing their work and completing their daily tasks. After all, time saved in context switching not only makes for a more productive user, but also a happier one. By leveraging the ability of Microsoft Teams apps to extend across Microsoft 365, you can reduce the amount of code you need to write and maintain.

Additionally, by being thoughtful in your app planning, including how your copilot interacts with the other extensibility options of Microsoft 365, you can create an experience that's more cohesive and introduces less friction to users as they go about their work. To better understand how to accomplish that, it can be useful to think about some of the common categories of apps that tend to be created within the Microsoft 365 ecosystem and consider how you can take advantage of the extension opportunities available to you within Microsoft 365.

The following sections highlight common components of different app categories, though not exhaustive, these list are meant to help you get a general understanding of some possible features to consider during design. Some categories also provide app design playbooks to help you get started.

:::row:::
   :::column:::
      **Creation apps**

      :::image type="icon" source="assets/icons/teams-toolkit-sidebar-icon.png" link="#creation-apps" border="false":::
   :::column-end:::
   :::column span="":::
      **Business process apps**

      :::image type="icon" source="assets/icons/teams-toolkit-sidebar-icon.png" link="#business-process-apps" border="false":::
   :::column-end:::
   :::column span="":::
      **Content apps**

      :::image type="icon" source="assets/icons/teams-toolkit-sidebar-icon.png" link="#content-apps" border="false":::
   :::column-end:::
:::row-end:::

:::row:::
   :::column:::
      **Project management apps**

      :::image type="icon" source="assets/icons/teams-toolkit-sidebar-icon.png" link="#project-management-apps" border="false":::
   :::column-end:::
   :::column span="":::
      **System of record apps**

      :::image type="icon" source="assets/icons/teams-toolkit-sidebar-icon.png" link="#system-of-record-apps" border="false":::
   :::column-end:::
   :::column span="":::
      **Real-time collaboration apps**

      :::image type="icon" source="assets/icons/teams-toolkit-sidebar-icon.png" link="#real-time-collaboration-apps" border="false":::
   :::column-end:::
:::row-end:::

### Creation apps

> [!div class="nextstepaction"]
> [Download the Creation app playbook](https://aka.ms/creation-app-playbook)

Creation apps are used to create and manage digital content. They help users by enabling them to collaborate efficiently, access resources quickly, and start creating content fast. Some of the developer opportunities for this style of app are:

* **Real-time collaboration** - Invite team members or clients to collaborate, discuss, and get feedback in real-time.
* **Instant feedback and comments** - Receive and respond to essential notifications instantly. Preview files directly without switching apps.
* **Enable strategic decision making with stakeholders** - Review relevant information and inputs from stakeholders or customers for data-driven decision-making.
* **Customizable workspaces** - Add files and apps to your collaboration space for quick access, updates, and asynchronous reviews.
* **Efficient coordination** - Easily add files for your team or clients to review when creating events, emails, and messages. Quickly access relevant files in the context of meetings or teammates.
* **Integrated search** - Quickly find your resources across Microsoft, regardless of format.
* **Cross reference of information during content creation** - Quickly find and use project-related documents in the context of your creation.
* **Shortcuts to frequent creations** - Quickly access frequent creation to boost productivity and creativity.
* **Discover new apps and create with AI suggestions based on your ideas** - Discover AI-powered app suggestions tailored to your content.

### Business process apps

> [!div class="nextstepaction"]
> [Download the Business process app playbook](https://aka.ms/business-process-app-playbook)

Business process apps enable the automation of typical business processes for organizations such as employee expense management, purchase order management, and business travel management. Some of the developer opportunities for this style of app are::

* **Share documents with the correct set of people** - Easily access documents where you are working and invite team members or clients to view and collaborate on documents. Follow up with real-time notifications about reports to quickly respond or take action.
* **Digital signatures made simple** - Obtain signature on documents directly in Teams, Microsoft 365 app, or Outlook.
* **Instant in-line approvals** - Get approvals in real-time during discussions to keep your work moving and projects on track.
* **Tailor your notification channels to suit your customers needs** - Direct notifications from each app to the right channels and react promptly to critical updates while prioritizing and silencing others.
* **Access the latest information, updated in real-time wherever it’s shared** - Share live data that dynamically updates so your message is always relevant and up to date.
* **Reports at your fingertips** - Scan and access documents while communicating with teammates and clients across multiple devices and Microsoft 365 apps.
* **Easily reference data and files during meetings** - Access, reference, and share information real-time during meetings ensuring collaboration and informed decisions.

### Content apps

Apps used to create and edit simple content or information sharing. Some of the developer opportunities for this style of app are:

* **Integrate content where you are working** - Embed images, videos, audio clips, and other media directly into your projects.
* **Get started quickly** - Access to content templates to help users quickly create content such as videos and contracts.
* **Multi-device access** - Access and share your content across various devices.
* **Manage permissions** - Control access and share permissions to maintain security and compliance to your content.
* **Save time, share more** - View files or shared content, and edit in place, saving time that would otherwise be spent searching for information or switching between apps.
* **Streamline workflows** - Provide in-line completion of tasks and top actions such as converting files.
* **Realtime content sharing** - Consume content together in real time during meetings, making it possible to watch videos or collaboratively review documents to sign.
* **Easy project management** - Integrate with collaboration and project management tools to streamline content creation workflows.

### Project management apps

Apps that help to plan, organize and manage projects and collaborate virtually from anywhere. Some of the developer opportunities for this style of app are:

* **Track collaborators and give them access directly during meetings** - Add people from a meeting, collaborators to a board, and invite people to a board during a meeting.
* **Find and attach content to communications** - Attach or embed tasks or boards to an email, event, or message.
* **Collect action items and updates from communications** - Create a task out of a comment and import emails into project updates.
* **Stay informed and on track** - Receive notifications and updates where you work for the things you care about the most.  
* **Real-time collaboration** - Invite team members or clients to collaborate, discuss, and get feedback and input in real-time.

### System of record apps

Apps that enable the storage, management, querying and reporting of vast amounts of data, primarily for customer relationship management or enterprise resource planning. Some of the developer opportunities for this style of app are:

* **Facilitate easy communication and organization** - Set up stakeholder meetings and share related resources to prepare yourself and your team beforehand.
* **Prepare content using data from apps** - Create content such as PowerPoints and reports for upcoming meetings while referencing and adding data from multiple apps to your reports.
* **Share reports and resources with the team** - Generate reports and analyze data within your workflows and share relevant information and resources with the team.
* **Stay updated and take action** - Track inputs and data changes within the system to share information with the right people.

### Real-time collaboration apps

Apps that enable groups of people to collaborate virtually, in real-time, with support for co-authoring, chats, and other collaboration features. Some of the developer opportunities for this style of app are:

* **Get together to jam** - Brainstorm without having to share your screen
* **Join the action from any device** - Participate from any device from smartphone, tablet, or computer to accommodate diverse work styles and locations.
* **Reference work everywhere** - Quickly share links and embed content into emails, calendar invites, and messages
* **Cross-reference information during collaboration** - Quickly find and use content from multiple sources for projects while working with others and during meetings.
* **Manage access to content from where you are working** - Seamlessly manage access to your content right in your workspace for immediate, efficient, and secure content sharing.
* **Stay connected to the conversation the way you choose** - Efficiently communicate with your collaborators by managing your notifications to specific channels and promptly replying to critical comments.

## Additional resources

* [Teams message extension overview](/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions)
* [Message extension sample code](/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions)
* [Teams Toolkit for Visual Studio Code overview](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals?pivots=visual-studio-code-v5)

## Next steps

> [!div class="nextstepaction"]
> [Learn how to test and debug message extension apps](/microsoftteams/platform/m365-apps/extend-m365-teams-message-extension)
