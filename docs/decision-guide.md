---
title: Your extensibility options for Microsoft Copilot
description: Understand which type of Microsoft Copilot for Microsoft 365 plugin or connector works best for you
author: girliemac
ms.author: timura
ms.topic: conceptual
ms.date: 08/10/2024
---

# Your extensibility options for Microsoft 365 Copilot

When it comes to deciding on your approach to AI development, there are numerous options to consider. Microsoft offers [Azure AI solutions](/azure/developer/intro/azure-ai-for-developers) and Microsoft Copilot extensibility options ranging the stack from AI infrastructure (IaaS) to platform (PaaS) to software (SaaS) services, and optimized AI infrastructure. 
This guide aims to streamline your journey through the options for Microsoft Copilot, assisting you in identifying the most suitable solution aligned with your specific needs and goals.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

## Extend Copilot or build a custom engine copilot?

When you're looking to create a fully customized end-to-end AI product to cater to your business needs, you typically choose language models and orchestration for your Retrieval-Augmented Generation (RAG) solutions.

On the other hand, you can extend Microsoft Copilot, which is powered by private instances of Large Language Models (LLMs) and the Azure OpenAI service. Copilot combines LLM responses with organizational context to provide relevant assistance. When you build extensions for Copilot, you can utilize the [orchestration layer](orchestrator.md) representing the interface between foundation LLMs, to select and execute the right content from the right plugin.

Here's your first decision-making point; extending Copilot to leverage the model and orchestrator, or build with your choice?

:::image type="content" source="assets/images/m365-extensibility-decisions.png" alt-text="A diagram that helps you to decide which Microsoft 365 extensibility options are best for you. Read the article on this page for the details." lightbox="assets/images/m365-extensibility-decisions.png" :::

- 🎯 If you want to **extending Microsoft Copilot**, go to the next section, [Option 1](#option-1-extending-microsoft-copilot)!
  - 🎯 Then, you have choices for extensions; build declarative copilots, plugins, or connectors. Find out about [extensibility types](#types-of-copilot-extensibility-for-microsoft-365)
- 🎯 Otherwise, jump to [Option 2](#option-2-building-a-custom-engine-copilot-for-microsoft-365) to **build your own copilots**!

## Option 1. Extending Microsoft Copilot

Okay, you want to leverage the Copilot orchestrator. Now, let's have a quick grasp of Microsoft Copilot—**Microsoft Copilot** is available for end-users across multiple Microsoft products, including: Microsoft 365 (Office) app, Teams, Outlook, PowerPoint, Word, Excel, Power Apps, Power Automate, Power Virtual Agents, Power Pages, and Dynamics 365.

And **Copilot for Microsoft 365** is available as "Work" profile with Copilot for Microsoft 365 subscription, designed for enterprise users to enhance productivity within Microsoft 365 applications.

By **extending Copilot for Microsoft 365** for enterprise users,

- Your service can be a part of the Microsoft ecosystem, enabling your users to benefit from the user experience of Microsoft products and allowing you to reach millions of users
- You can build an AI solutions for organizations to boost employee productivity across businesses
- You can apply people-centric data with Microsoft Graph to provide more personalized experience for your users
- You can use Graph Connector, SharePoint site library, or Dataverse table that is used in the workflow as your RAG data source

> [!TIP]
> Are you a business decision maker? Check out the [Microsoft Copilot Scenario Library](https://adoption.microsoft.com/copilot-scenario-library/)

### Types of copilot extensibility for Microsoft 365

Now, it’s important to understand the variety of methods available for applying the capabilities of external services, apps, and data.

> [!VIDEO https://www.youtube.com/embed/ILPOhVz9OdI]

There are two distinct extension interfaces for Microsoft Copilot for end-users: standalone plugins that connect REST APIs, and declarative copilots. As an analogy, you can view Microsoft Copilot as something like an operating system, where plugins are services, and declarative copilots are apps. 

Now, let's find out which extensibility options are for you—

To customize Microsoft Copilot to create a specific copilot for particular tasks and domain knowledge, build:

- 🎯 [**Declarative copilots**](overview-declarative-copilot.md), which are designed to enhance the user experience by allowing the creation of personalized chat experiences to provide tailored interactions and responses

:::image type="content" source="assets/images/declarative-copilot-ui.png" alt-text="A fictional declarative copilot UI." lightbox="assets/images/declarative-copilot-ui.png" border="false":::

To add unstructured data into Microsoft Graph, use:

- 🎯 [**Graph connectors**](overview-graph-connector.md), which enable data ingestion from various sources to Microsoft Graph, facilitating unified data access and insights across Microsoft 365 and other services. They can work either standalone, or with declarative copilots

And there are the growing number of extensions you build. Your options include:

- **Plugins**, which add skills and actions to Microsoft 365. Plugins have a few different types that are built differently
  - 🎯 [**API plugins**](overview-api-plugins.md) can work either standalone, or with declarative copilots by calling REST APIs via OpenAPI service.
  - 🎯 [**Teams Message Extensions**](overview-message-extension-bot.md) for Teams are the search and action capability for Teams that now work as plugins too.
  - 🎯 [**Actions in Copilot Studio**](/microsoft-copilot-studio/copilot-plugins-overview?context=/microsoft-365-copilot/extensibility/context), which connects Microsoft 365 and the Power Platform environment. Actions include **Conversational actions**, **Prompts**, **Flows**, and **Connectors**.

> [!TIP]
> If you've built message extensions for Teams before, you can immediately see the value of Copilot extensibility, but if you want to build the latest and greatest, try building API plugins and Graph Connectors!

### Tool options: Pro-code or low-code?

Your journey vary based on your desired outcomes and your coding expertise. Whether you’re a seasoned coder or prefer low-code or no-code solutions, there’s a suite of tools tailored to your development style.

How you build and which tools you should use is up to you. Your choices are:

- 🎯 **Pro-code** options are declarative copilots, API plugins, message extensions, and Graph connectors. [**Teams Toolkit**](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals) for [Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension) would be your best friend for the development to tailor your copilots.

- 🎯 **Low-code** or **no-code** options are declarative copilots, all Copilot Studio actions, and Graph connectors as knowledge source. You can develop rapidly with user-friendly interface on [**Copilot Studio**](/microsoft-copilot-studio/fundamentals-what-is-copilot-studio).

:::image type="content" source="assets/images/decision-making-guide.png" alt-text="A diagram that shows various developer options." lightbox="assets/images/decision-making-guide.png":::

#### Data types

Consider your data: how it's structured, the level of volume and activity you expect, and the required data access. When you want to add your own data, either with connectors or plugins, there are many factors that you want to consider.

| Solution | Data structure | Data volume | Data activity | Can modify data |
|-------|-------|---------|----------|----------|
| **Graph connectors** | Unstructured data (*e.g.* plain text documents, wiki pages, and PDF files) | Up to 5M items per connection | Up to 20 requests per second | No. Copilot only analyzes and extracts key information to summarize the data. |
| **Plugins** | Structured data (organized in a predefined manner, often in the form of tables with rows and columns)| Suitable for high volume data | Suitable for high activity | Yes. A user can modify the data via Adaptive Card UI. |
| **Copilot Studio Actions** | Structured data | Suitable for high volume data | Suitable for high activity | No. Copilot only summarizes the data. |

## Option 2: Building a custom engine copilot for Microsoft 365

With Azure AI services, you can craft a custom AI chatbot for Teams and Microsoft 365 applications. If you’re seeking a custom bot solution on Teams chat, then building your own copilots is the perfect fit for you.

:::image type="content" source="/microsoftteams/platform/assets/images/bots/teams-ai-library.png" alt-text="A diagram that explains how a custom engine copilot agent in Teams work" lightbox="/microsoftteams/platform/assets/images/bots/teams-ai-library.png" border="false":::

### How does it differ from Copilot extensions for Microsoft 365?

In the context of building copilots for Microsoft 365, there are several options available. This diagram provides a comparison between the **Copilot extensibility** options (Graph connectors, plugins, and declarative copilots, which can connect to Graph connectors and plugins) and the **custom engine copilot**:

:::image type="content" source="assets/images/copilot-ext-vs-cec.png" border="true" alt-text="This diagram compares options between Copilot extensions and custom engine copilots for M365" lightbox="assets/images/copilot-ext-vs-cec.png":::

The custom engine copilots operate on a BYO (Bring Your Own) model. So, your copilot is independent from Microsoft Copilot and its LLM and orchestrator.

Building custom engine copilots is an excellent choice if:

- You want to use models and orchestration of your choice
- You have prior experience in building Teams bots or are familiar with Teams bot development
- You aim to have your conversational AI bot accessible to all Microsoft 365 users, regardless of your Copilot licensing status

🎯 Learn more on building your own [**custom engine copilots**](overview-custom-engine-copilot.md).

### Tool options: Pro-code or low-code?

How you build and which tools you should use is up to you. Your choices are:

- 🎯 **Pro-code**: If you prefer coding for full customization, use **Teams AI Library** with [**Teams Toolkit**](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals) for [Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension)

- 🎯 **Low-code** or **no-code**: You can develop rapidly with user-friendly interface on [**Copilot Studio**](/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) to build Copilot Studio custom copilots.

## Next step

Learn prerequisites for building connectors and plugins:

> [!div class="nextstepaction"]
> [Set up your dev environment](prerequisites.md)

### See also

- [Microsoft Graph connectors overview](overview-graph-connector.md)
- [Declarative copilot overview](overview-declarative-copilot.md)
- [API plugins overview](overview-api-plugins.md)
- [Copilot Studio plugins overview](overview-business-applications.md)
- [Teams Message extensions overview](overview-message-extension-bot.md)
- [Teams AI Library](/microsoftteams/platform/bots/how-to/teams%20conversational%20ai/teams-conversation-ai-overview)