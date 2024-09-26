---
title: Copilot in the Microsoft 365 ecosystem
description: A plugin or connector written for Copilot will run across the Microsoft 365 ecosystem. Learn how to leverage the Microsoft 365 ecosystem to extend the reach of your apps, services, and data.
author: erikadoyle
ms.author: edoyle
ms.topic: overview
ms.date: 9/16/2024
---

# Copilot in the Microsoft 365 ecosystem

When you customize Microsoft 365 Copilot with agents and extend its skills with plugins and knowledge with connectors, you're leveraging the entire Microsoft 365 ecosystem to extend the reach of your apps, services, and data.

As part of the broader Microsoft 365 ecosystem, the value of your agents, plugins, and connectors are amplified in the following ways:

- As a **Developer**, you can *write once, and run anywhere* across the growing list of Microsoft 365 host applications for Copilot and integrated apps. Copilot seamlessly integrates your agents, plugins, and connectors with its entire repertoire of skills and knowledge, making your *integration with Copilot the last one* you'll ever have to perform.

- Your **End-users** will *stay in the flow of their work*, leveraging the apps and services supporting their workflow as skills and knowledge accessible through Copilot's natural language interface.

- **Business decision makers and IT admins** can *confidently adopt and centrally manage* your enterprise-grade technology, backed by the security and trust of Microsoft's commitment to Responsible AI.

The agents, plugins, and connectors you build for Copilot are part of the larger Microsoft 365 Copilot system. The following diagram illustrates how a user's prompt is interpreted, rationalized, and processed into natural language results through different native components and agents of the Copilot system.

:::image type="content" source="assets/images/copilot-architecture.png" alt-text="Diagram that shows the flow of data across components of Microsoft 365 Copilot ecosystem" lightbox="assets/images/copilot-architecture.png":::

*The Copilot system uses data from a plugin in two stages: (1) matching the users's prompt to the most relevant skill and parameters, and (2) determining which results from the plugin are the best response to the user's prompt. The first stage corresponds to steps 1-4 in the data flow diagram; the second stage happens as Copilot prepares a response back to the user.*

You can build extend, enrich, and customize Copilot for the unique way your customers work. And as part of the broader Microsoft 365 ecosystem, your Copilot agents benefit from enhanced discoverability and potential audience reach, centralized and trustworthy distribution and management, and a host of development tools and support.

This article will walk you through the resources of the Microsoft 365 ecosystem available to you as a developer of Copilot extensibility solutions.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

## Plugins and connectors work across Microsoft 365 experiences

There are over 350 million daily active users across applications in the Microsoft 365 ecosystem, including Teams, Outlook, Word, Excel, Power Point, and the Microsoft 365 app. When you write a plugin or connector, it can reach all the places Copilot extensibility is supported across Microsoft 365.

. . . but that's not all! Depending on the [way you extend Copilot](./decision-guide.md), your plugin or connector also runs outside of Copilot experiences. The following table lists alternate ways the skills and knowledge from your plugins and connectors are available to end-users within an organization:

|Copilot extensibility type|Microsoft 365 product availability|Learn more|
|----------|-----------|------------|
|[Teams message extension plugins](./overview-message-extension-bot.md)|Microsoft 365 Copilot, Teams, Outlook| [Copilot agents are Microsoft 365 apps](./agents-are-apps.md) |
|[Power Platform connector plugins](/connectors/connectors)|Microsoft 365 Copilot, Power Automate, Power Apps, Azure Logic Apps| [Connectors overview](/connectors/connectors)|
|[Microsoft Graph connectors](./overview-graph-connector.md)|Microsoft 365 Copilot, Microsoft Search, Context IQ in Outlook and the web, Microsoft 365 app (microsoft365.com)|[Graph connector experiences](/graph/connecting-external-content-experiences?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)

Thanks to centralized publishing and management resources, administrators can easily share and confidently manage your Copilot extensibility solutions, ensuring they benefit the widest possible audience.

## Simplified distribution and management

Microsoft is simplifying the way Microsoft 365 Copilot extensibility and other Microsoft 365 apps and services are published and managed, both within your organization and within in-product app stores of Microsoft 365 products.

### Unified app model

The Microsoft 365 ecosystem provides a unified app model for distributing and managing Copilot agents, Teams apps, Outlook Add-ins, SharePoint Framework solutions, and more. The app package for Microsoft 365 is a zip file that contains one or more configuration (manifest) files and your app icons.

To learn more, see [Copilot agents are apps for Microsoft 365](agents-are-apps.md).

### Microsoft 365 and Copilot program for Partner Center

For independent software vendors (ISVs), we're building out the **Microsoft 365 and Copilot** program (formerly known as *Office store*) within Microsoft Partner Center ([partner.microsoft.com](https://partner.microsoft.com)) to be your home base for publishing Microsoft 365 apps, services, and Copilot extensibility solutions.

Once purchased and deployed by an organization, your agents plugins are incorporated into a unified catalog representing Copilot's available skill repertoire.

To learn more, see [Publish agents, plugins, and connectors for Microsoft 365 Copilot](./publish.md).

### Microsoft admin center

For line-of-business developers and IT admins, Microsoft Admin Center ([admin.microsoft.com](https://admin.microsoft.com)) is your one stop to publish Copilot agents and manage both custom and store-bought Microsoft 365 and Copilot extensibility solutions. 

For details on deploying agents, plugins, and Graph connectors to your organization, see [Publish agents for Copilot](./publish.md).

To learn more about managing Copilot agents, see [Manage extensibility for Microsoft 365 Copilot](manage.md).


## Comprehensive tools and support

Microsoft 365 provides a rich set of developer resources for extending Microsoft Copilot, Teams, and other Microsoft 365 experiences.

### Teams Toolkit

[Teams Toolkit](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals)  is the *Pro-code* option for building and debugging Copilot agents, plugins, and custom engine agents. It provides support for all major Microsoft 365 platform extensibility surfaces, including Copilot agents, tabs, bots, message extensions, and Outlook Add-ins. Teams Toolkit is available as an extension for [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension) and [Visual Studio](/microsoftteams/platform/toolkit/toolkit-v4/install-teams-toolkit-vs).


### Copilot Studio

[Microsoft Copilot Studio](/microsoft-copilot-studio/copilot-plugins-overview?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext) is the graphical *Low-code* option for copilot extensibility, including Microsoft 365 Copilot agents, custom agents, and actions (plugins). Copilot Studio (previously known as *Power Virtual Agents*) is available as a standalone web app ([copilotstudio.microsoft.com](https://copilotstudio.microsoft.com/)) and also as an [app for Microsoft Teams](https://aka.ms/PVATeamsApp?azure-portal=true).

### Copilot developer mode

Microsoft 365 Copilot [developer mode](./debugging-copilot-plugin.md) provides a way to test if and when the orchestrator selects your plugin with different prompts. When you enable developer mode from the Copilot chat prompt, a card with debug information is returned whenever the orchestrator searches specifically within your plugin to respond to a prompt.

## Microsoft security, trust, and commitment to Responsible AI

Microsoft 365 Copilot is compliant with existing privacy, security, and compliance commitments to Microsoft 365 commercial customers, including the General Data Protection Regulation (GDPR) and European Union (EU) Data Boundary.  Microsoft 365 Copilot presents only data that each individual can access using the same underlying controls for data access used in other Microsoft 365 services. For more info, see Microsoft [privacy policy and service documentation](https://privacy.microsoft.com/) and [commitment to responsible AI](https://www.microsoft.com/ai/responsible-ai).

To learn more as a developer of Copilot extensibility solutions, see [Data, Privacy, and Security considerations of extending Microsoft 365 Copilot](./data-privacy-security.md)
