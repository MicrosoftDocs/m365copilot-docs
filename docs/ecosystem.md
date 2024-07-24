---
title: Microsoft Copilot in the Microsoft 365 ecosystem
description: A plugin or connector written for Copilot will run across the Microsoft 365 ecosystem. Learn how to use the Microsoft 365 ecosystem to extend the reach of your apps, services, and data.
author: erikadoyle
ms.author: edoyle
ms.topic: overview
ms.date: 5/21/2024
---

# Microsoft Copilot in the Microsoft 365 ecosystem

When you extend Microsoft Copilot for Microsoft 365 with your external data through connectors and with your specialized skills through plugins, you're using the entire Microsoft 365 ecosystem to extend the reach of your apps, services, and data.

As part of the broader Microsoft 365 ecosystem, the value of your plugins and connectors are amplified in the following ways:

- As a **Developer**, you can *write once, and run anywhere* across the growing list of Microsoft 365 host applications for Copilot and integrated apps. Copilot seamlessly integrates your plugins and connectors with its entire list of skills and knowledge, making your *integration with Copilot the last one* you'll ever have to perform.

- Your **End-users** will *stay in the flow of their work*, using the apps and services supporting their workflow as skills and knowledge accessible through Copilot's natural language interface.

- **Business decision makers and IT admins** can *confidently adopt and centrally manage* your enterprise-grade technology, backed by the security and trust of Microsoft's commitment to Responsible AI.

The plugins and connectors you build for Copilot are part of the larger Copilot for Microsoft 365 system. The following diagram illustrates how a user's prompt is interpreted, rationalized, and processed into natural language results through the different native components of, and extensions to, the Copilot system.

:::image type="content" source="assets/images/copilot-architecture.png" alt-text="Diagram that shows the flow of data across components of Copilot and the Microsoft 365 ecosystem" lightbox="assets/images/copilot-architecture.png":::

*The Copilot system uses data from a plugin in two stages: (1) matching the users's prompt to the most relevant skill and parameters, and (2) determining which results from the plugin are the best response to the user's prompt. The first stage corresponds to steps 1-4 in the data flow diagram; the second stage happens as Copilot prepares a response back to the user.*

The plugins and connectors you build extend, enrich, and customize Copilot for the unique way your customers work. And as part of the broader Microsoft 365 ecosystem, your plugins and connectors benefit from enhanced discoverability and potential audience reach, centralized and trustworthy distribution and management, and a host of development tools and support.

This article will walk you through the resources of the Microsoft 365 ecosystem available to you as a developer of Copilot extensibility solutions.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

## Plugins and connectors work across Microsoft 365 experiences

There are over 350 million daily active users across applications in the Microsoft 365 ecosystem, including Teams, Outlook, Word, Excel, Power Point, and the Microsoft 365 app. When you write a plugin or connector, it can reach all the places Copilot extensibility is supported across Microsoft 365.

. . . but that's not all! Depending on the [way you extend Copilot](./decision-guide.md), your plugin or connector also runs outside of Copilot experiences. The following table lists alternate ways the skills and knowledge from your plugins and connectors are available to end-users within an organization:

|Copilot extensibility type|Microsoft 365 product availability|Learn more|
|----------|-----------|------------|
|[Teams message extension plugins](./overview-message-extension-bot.md)|Copilot for Microsoft 365, Teams, Outlook| [Plugins as Microsoft 365 apps](./plugins-are-apps.md) |
|[Power Platform connector plugins](/connectors/connectors)|Copilot for Microsoft 365, Power Automate, Power Apps, Azure Logic Apps| [Connectors overview](/connectors/connectors)|
|[Microsoft Graph connectors](./overview-graph-connector.md)|Copilot for Microsoft 365, Microsoft Search, Context IQ in Outlook and the web, Microsoft 365 app (microsoft365.com)|[Graph connector experiences](/graph/connecting-external-content-experiences?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)

Thanks to centralized publishing and management resources, administrators can easily share and confidently manage your Copilot extensibility solutions, ensuring they benefit the widest possible audience.

## Simplified distribution and management

Microsoft is simplifying the way plugins and other Microsoft 365 apps and services are published and managed, both within your organization and within in-product app stores of Microsoft 365 products.

### Unified manifest and app package

The Microsoft 365 ecosystem uses a single unified manifest and app packaging format for distributing plugins and connectors for Copilot, Office Add-ins, SharePoint Framework solutions, and Teams apps extended to work across Microsoft 365 experiences. The [app manifest](/microsoftteams/platform/resources/schema/manifest-schema) (previously called *Teams app manifest*) defines how your app (plugin or connector) integrates into Teams, Copilot, and other Microsoft 365 experiences. The [app package](/microsoftteams/platform/concepts/build-and-test/apps-package) consists of the app manifest and app icons (app logic and data storage are hosted independently).

### Microsoft 365 and Copilot program for Partner Center

For independent software vendors (ISVs), we're building out the **Microsoft 365 and Copilot** program (formerly known as *Office store*) within [Microsoft Partner Center](https://partner.microsoft.com) to be your home base for publishing Microsoft 365 apps, services, and Copilot extensibility solutions.

Once purchased and deployed by an organization, your plugins are incorporated into a unified catalog representing Copilot's available skill list.

To learn more, see [Publish plugins and connectors for Microsoft Copilot for Microsoft 365](./publish.md).

### Microsoft Admin Center

For line-of-business developers and IT admins, [Microsoft Admin Center](https://admin.microsoft.com) is your one stop to upload custom plugins and manage both custom and store-bought Microsoft 365 and Copilot extensibility solutions. Learn more about Copilot-related management options in the [Microsoft Copilot for Microsoft 365 extensibility](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps) section of Microsoft 365 admin center help documentation.

For details on deploying a custom plugin or connector to your organization, see [Publish plugins and connectors for Microsoft Copilot for Microsoft 365](./publish.md).

## Comprehensive tools and support

Microsoft 365 provides a rich set of developer resources for extending Microsoft Copilot, Teams, and other Microsoft 365 experiences.

### Teams Toolkit

[Teams Toolkit](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals) helps developers create and deploy Teams apps that work across Microsoft 365 and Copilot with integrated identity, access to cloud storage, data from Microsoft Graph, and other services in Azure and Microsoft 365 with a "zero-configuration" approach to the developer experience. Teams Toolkit is available as [Visual Studio Code extension](/microsoftteams/platform/toolkit/install-teams-toolkit), [Visual Studio workload](/microsoftteams/platform/toolkit/toolkit-v4/install-teams-toolkit-vs), and as the [TeamsFx command line interface](/microsoftteams/platform/toolkit/teams-toolkit-cli).

### Developer Portal for Teams

[Developer Portal for Teams](/microsoftteams/platform/concepts/build-and-test/teams-developer-portal) is the primary tool for configuring, distributing, and managing Microsoft Teams apps, including apps extended to run across Microsoft 365 and Microsoft Copilot. With Developer Portal, you can collaborate with colleagues on your app, and set up runtime environments.

## Microsoft security, trust, and commitment to Responsible AI

Copilot for Microsoft 365 is compliant with existing privacy, security, and compliance commitments to Microsoft 365 commercial customers, including the General Data Protection Regulation (GDPR) and European Union (EU) Data Boundary.  Copilot for Microsoft 365 presents only data that each individual can access using the same underlying controls for data access used in other Microsoft 365 services. For more infoormation, see Microsoft [privacy policy and service documentation](https://privacy.microsoft.com/) and [commitment to responsible AI](https://www.microsoft.com/ai/responsible-ai).

To learn more as a developer of Copilot extensibility solutions, see [Data, Privacy, and Security considerations of extending Copilot for Microsoft 365](./data-privacy-security.md).
