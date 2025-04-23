---
title: Agents, Actions, and Connectors in the Microsoft 365 Ecosystem
description: Agents, actions, and connectors run across the Microsoft 365 ecosystem. Learn how the Microsoft 365 ecosystem extends the reach of your apps, services, and data.
author: erikadoyle
ms.author: edoyle
ms.topic: overview
ms.localizationpriority: medium
ms.date: 01/15/2025
---

# Copilot extensibility in the Microsoft 365 ecosystem

When you customize Microsoft 365 Copilot with agents and use actions and connectors to extend Copilot's skills and knowledge, you're taking advantage of the entire Microsoft 365 ecosystem to extend the reach of your apps, services, and data.

- As a developer, you can *write once and run anywhere* across the growing list of Microsoft 365 host applications and integrated apps. Copilot seamlessly integrates your agents, actions, and connectors with its list of skills and knowledge. You won't have to integrate with any other Microsoft 365 apps and services.

- Your users will *stay in the flow of their work*, using the apps and services that support their workflow as skills and knowledge that they access through Copilot's natural language interface.

- Business decision makers and IT admins can *confidently adopt and centrally manage* your enterprise-grade technology, backed by Microsoft's commitment to [Responsible AI](#microsoft-security-trust-and-commitment-to-responsible-ai).

The agents, actions, and connectors you build for Copilot are part of the larger Microsoft 365 Copilot system. The following diagram illustrates how a user's prompt is interpreted, rationalized, and processed into natural language results through different native components and agents of the Copilot system.

:::image type="content" source="assets/images/copilot-architecture.png" alt-text="Diagram that shows the flow of data across components of the Microsoft 365 Copilot ecosystem" lightbox="assets/images/copilot-architecture.png":::

> [!NOTE]
> Some agent capabilities are only available to users in tenants that allow metered usage or users that have a Microsoft 365 Copilot license. For details, see [Agent capabilities for Microsoft 365 users](prerequisites.md#agent-capabilities-for-microsoft-365-users).

You can extend, enrich, and customize Microsoft 365 Copilot for the unique way your customers work. As part of the broader Microsoft 365 ecosystem, your  agents benefit from enhanced discoverability and potential audience reach, centralized and trustworthy distribution and management, and comprehensive development tools and support.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

## Agent in-app experience

When you build agents, you can tailor the user experience by providing *in context* and *immersive* experiences.

- **In-context experience**: An in-app experience where users interact with Microsoft 365 Copilot Chat in the context of an app, such as a Teams chat or a Word document. Users can `@`-mention the agent and interact with it directly within the app experience.

  To build in-context experiences, you can use actions and declarative agents. *In-context* experiences bring additional information to the chat experience with Microsoft 365 Copilot, allowing it to reason over and provide responses in the context of the conversation. This also enables Microsoft 365 Copilot to interact with external systems.

- **Immersive experience**: The full experience of the Copilot app in Microsoft 365. Users chat directly with the agent embedded in Copilot.

    To build an immersive experience, you use declarative agents. When a user activates an agent with an *immersive* experience, the conversation is a 1:1 interaction with the agent, tailored to its capabilities and scope.

:::image type="content" source="assets/images/copilot-experiences.png" alt-text="This illustration shows two distinct copilot user experiences, in context and immersive" border="false":::

> [!NOTE]
> Microsoft 365 Copilot Chat is the full-featured and secure chat experience for Microsoft 365 Copilot. Microsoft 365 Copilot Chat is available on the web via the Microsoft 365 Copilot app and is integrated into Teams and Outlook.​

## Connector availability in Microsoft 365 experiences

Over 350 million users are active daily across applications in the Microsoft 365 ecosystem, including Teams, Outlook, Word, Excel, PowerPoint, and the Microsoft 365 Copilot app. When you write a connector, it can reach all the apps that support Copilot extensibility across Microsoft 365.

Your connector also runs outside of Copilot experiences. The following table lists all the ways the skills and knowledge from your connectors are available to users within an organization.

|Copilot extensibility type|Microsoft 365 product availability|Learn more|
|----------|-----------|------------|
|[Copilot connectors](/microsoft-copilot-studio/copilot-plugins-overview?context=/microsoft-365-copilot/extensibility/context)|Microsoft 365 Copilot, Power Automate, Power apps, Azure Logic apps| [Extend agent capabilities with Copilot connectors](/microsoft-copilot-studio/copilot-connectors-in-copilot-studio)|
|[Microsoft Graph connectors](./overview-graph-connector.md)|Microsoft 365 Copilot, Microsoft Search, Context IQ in Outlook and the web, Microsoft 365 Copilot app (microsoft365.com)|[Graph connector experiences](/graph/connecting-external-content-experiences?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)|

Microsoft is simplifying the way Microsoft 365 Copilot extensibility and other Microsoft 365 apps and services are published and managed, both within your organization and within in-product app stores of Microsoft 365 products.

## Unified app model

The Microsoft 365 ecosystem provides a unified app model for distributing and managing agents, Teams apps, Outlook Add-ins, SharePoint Framework solutions, and more. The app package for Microsoft 365 is a zip file that contains one or more configuration (manifest) files and your app icons.

To learn more, see [Agents are apps for Microsoft 365](agents-are-apps.md).

### Microsoft 365 and Copilot program for Partner Center

For independent software vendors (ISVs), the **Microsoft 365 and Copilot** program (formerly known as *Office store*) within [Microsoft Partner Center](https://partner.microsoft.com) is available for publishing Microsoft 365 apps, services, and Copilot extensibility solutions.

After your solution is purchased and deployed by an organization, your agent's actions are incorporated into a unified catalog that represents Copilot's available skill list.

To learn more, see [Publish agents for Microsoft 365 Copilot](./publish.md).

### Microsoft 365 admin center

Line-of-business developers and IT admins can publish agents and manage both custom and store-bought Microsoft 365 and Copilot extensibility solutions via the Microsoft 365 admin center ([admin.microsoft.com](https://admin.microsoft.com)).

For more information about deploying agents, actions, and Microsoft Graph connectors to your organization, see [Publish agents for Microsoft 365 Copilot](./publish.md).

To learn more about managing agents, see [Manage extensibility for Microsoft 365 Copilot](manage.md).

## Comprehensive tools and support

Microsoft 365 provides a rich set of developer resources for extending Microsoft 365 Copilot, Teams, and other Microsoft 365 experiences.

### Teams Toolkit

[Teams Toolkit](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals)  is the *pro-code* option for building and debugging agents and actions (plugins). It provides support for all major Microsoft 365 platform extensibility surfaces, including agents, tabs, bots, message extensions, and Outlook Add-ins. Teams Toolkit is available as an extension for [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension) and [Visual Studio](/microsoftteams/platform/toolkit/toolkit-v4/install-teams-toolkit-vs).

### Copilot Studio

[Microsoft Copilot Studio](/microsoft-copilot-studio/copilot-plugins-overview?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext) is the graphical *low-code* option for copilot extensibility, including Microsoft 365 agents, custom agents, and actions (plugins). Copilot Studio (previously known as *Power Virtual Agents*) is available as a standalone web app [copilotstudio.microsoft.com](https://copilotstudio.microsoft.com/) and also as an [app for Microsoft Teams](https://aka.ms/PVATeamsApp?azure-portal=true).

### Copilot developer mode

Microsoft 365 Copilot [developer mode](./debugging-copilot-agent.md) provides a way to test if and when the orchestrator uses your capabilities or selects your action with different prompts. When you enable developer mode from the Copilot chat prompt, a card with debug information is returned whenever the orchestrator searches specifically within your capabilities or actions to respond to a prompt.

## Microsoft security, trust, and commitment to Responsible AI

Microsoft 365 Copilot is compliant with existing privacy, security, and compliance commitments to Microsoft 365 commercial customers, including the General Data Protection Regulation (GDPR) and European Union (EU) Data Boundary. Microsoft 365 Copilot presents only data that each individual can access using the same underlying controls for data access used in other Microsoft 365 services. For more information, see Microsoft [privacy policy and service documentation](https://privacy.microsoft.com/) and [commitment to responsible AI](https://www.microsoft.com/ai/responsible-ai).

For more information for Copilot extensibility solution developers, see [Data, Privacy, and Security considerations for extending Microsoft 365 Copilot](./data-privacy-security.md).
