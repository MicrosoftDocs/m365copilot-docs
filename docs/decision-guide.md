---
title: Your Copilot agent options for Microsoft 365
description: Understand which type Microsoft 365 Copilot agents works best for you
author: girliemac
ms.author: timura
ms.topic: conceptual
ms.date: 10/18/2024
ms.custom: [copilot-learning-hub]
---

# Your Copilot agent options for Microsoft 365

When it comes to deciding on your approach to AI development, there are numerous options to consider, including Microsoft 365 Copilot extensibility options and Azure AI solutions. This guide aims to streamline your journey through the options for Microsoft 365, assisting you in identifying the most suitable solution aligned with your specific needs and goals.

## Extend Copilot's models or build a custom engine agent?

When you're looking to create a fully customized end-to-end AI product to cater to your business needs, you typically choose language models and orchestration for your Retrieval-Augmented Generation (RAG) solutions.

However, with Microsoft 365 Copilot, you also have a choice of extending Copilot's private instances of Large Language Models (LLMs) and the Azure OpenAI service. Copilot's LLM is grounded in each tenant's Microsoft 365 content so it can work with the documents, messages, and other business content people use every day. When you extend Copilot, you provide specific knowledge sources and skills that Copilot's [orchestration layer](orchestrator.md) uses to generate responses.

:::row:::
    :::column:::
        ### Reasons to extend Microsoft 365 Copilot

        - You want to take advantage of Copilot's model and orchestrator.
        - You have external data that you want to make available to Copilot to reason over via a [Microsoft Graph connector](overview-graph-connector.md).
        - You have an existing API that could be used as an [API plugin](overview-api-plugins.md) for read and write access to real-time data.
        - You have an existing [Teams message extension](overview-message-extension-bot.md) that you can use as a plugin.
    :::column-end:::
    :::column:::
        **Reasons to build a custom engine agent**

        - You want to use specific models (LLM or small language model (SLM)) for your service.
        - You need agentic AI support.
        - You want your service to be independent from Microsoft 365 Copilot, accessible to all Microsoft 365 users regardless of their Copilot licensing status.
    :::column-end:::
:::row-end:::

**Extend Microsoft 365 Copilot if any of the following apply:**

- You want to take advantage of Copilot's model and orchestrator.
- You have external data that you want to make available to Copilot to reason over via a [Microsoft Graph connector](overview-graph-connector.md).
- You have an existing API that could be used as an [API plugin](overview-api-plugins.md) for read and write access to real-time data.
- You have an existing [Teams message extension](overview-message-extension-bot.md) that you can use as a plugin.

**Build a custom agent if any of the following apply:**

- You want to use specific models (LLM or small language model (SLM)) for your service.
- You need agentic AI support.
- You want your service to be independent from Microsoft 365 Copilot, accessible to all Microsoft 365 users regardless of their Copilot licensing status.

## Extending Microsoft 365 Copilot

Extending Microsoft 365 Copilot for enterprise users

- Your service can be a part of the Microsoft ecosystem, enabling your users to benefit from the user experience of Microsoft products and allowing you to reach millions of users.
- You can build an AI solution for organizations to boost employee productivity across businesses.
- You can apply people-centric data with Microsoft Graph to provide more personalized experience for your users.
- You can use Graph Connectors, SharePoint site libraries, or Dataverse tables that are used in the workflow as your RAG data source.

> [!TIP]
> Are you a business decision maker? Check out the [Microsoft Copilot Scenario Library](https://adoption.microsoft.com/copilot-scenario-library/)

### Types of Microsoft 365 Copilot extensibility

Now, it's important to understand the variety of methods available for applying the capabilities of external services, apps, and data. Let's find out which extensibility options are for you—

#### Declarative agents

🎯 [**Declarative agents**](overview-declarative-agent.md) are designed to enhance the user experience by allowing the creation of personalized chat experiences to provide tailored interactions and responses, with a similar look-and-feel with Microsoft Copilot interface in Business Chat, also as a 1:1 chat in Teams. Build a declarative agent if you want a specific agent for particular tasks and domain knowledge.

:::image type="content" source="assets/images/declarative-copilot-ui.png" alt-text="A fictional declarative agent UI." lightbox="assets/images/declarative-copilot-ui.png" border="false":::

When & why to use declarative agents:

- Layer on top of the full capability ​of Microsoft 365 Copilot​
- Scenario that requires ​focus or specialization
- Scope to specific data sources including domain knowledge​
- Custom instructions to enable nuanced interpretation of data received from sources like plugins​ and connectors

#### Connectors

Use connectors to ingest external data to your agents.

🎯 [**Graph connectors**](overview-graph-connector.md) enable data ingestion from various sources to Microsoft Graph, facilitating unified data access and insights across Microsoft 365 and other services. **They can work either standalone, or with declarative agents**.

🎯 [**Power Platform connectors**](/microsoft-copilot-studio/copilot-plugins-overview?context=/microsoft-365-copilot/extensibility/context) enable Power Platform applications to interact with external services and data sources in real-time.

#### Plugins

**Plugins** add skills and actions to Microsoft 365. Plugins have a few different types that are built differently. There are the growing number of agents you build. Your options include:

- 🎯 [**API plugins**](overview-api-plugins.md) can work with declarative agents by calling REST APIs via OpenAPI service.
- 🎯 [**Teams Message Extensions**](overview-message-extension-bot.md) for Teams are the search and action capability for Teams that now work as a standalone plugins too.
- 🎯 [**Actions in Copilot Studio**](/microsoft-copilot-studio/copilot-plugins-overview?context=/microsoft-365-copilot/extensibility/context), which connects Microsoft 365 and the Power Platform environment. Actions include **Prompts**, **Flows**, and **Connectors**. If you prefer developing without much coding, these options are for you.

> [!NOTE]
> Currently, API plugins are only available as actions that works within declarative agents. They don't work as standalone plugin at this moment.

> [!TIP]
> If you've built message extensions for Teams before, you can immediately see the value of Copilot extensibility, but if you want to build the latest and greatest, try building API plugins and Graph Connectors!

### Tool options: Pro-code or low-code?

Your journey varies based on your desired outcomes and your coding expertise. Whether you're a seasoned coder or prefer low-code or no-code solutions, there's a suite of tools tailored to your development style.

How you build and which tools you use are up to you. Your choices are:

- 🎯 **Pro-code** options are declarative agents, API plugins, message extensions, and Graph connectors. [**Teams Toolkit**](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals) for [Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension) would be your best friend for the development to tailor your agents.

- 🎯 **Low-code** or **no-code** options are declarative agents, all Copilot Studio actions, and Power Platform connectors as knowledge source. You can develop rapidly with user-friendly interface on [**Copilot Studio**](/microsoft-copilot-studio/fundamentals-what-is-copilot-studio).

:::image type="content" source="assets/images/decision-making-guide.png" alt-text="A diagram that shows various developer options." border="false" lightbox="assets/images/decision-making-guide.png":::

## Option 2: Building a custom engine agent for Microsoft 365

With Azure AI services, you can craft a custom AI chatbot for Teams and Microsoft 365 applications. If you’re seeking a custom bot solution on Teams chat, then building your own agents is the perfect fit for you.

:::image type="content" source="assets/images/teams-ai-library.png" alt-text="A diagram that explains how a custom engine agent in Teams work" lightbox="/microsoftteams/platform/assets/images/bots/teams-ai-library.png" border="false":::

### How does it differ from extending Copilot?

This diagram provides a comparison between Copilot extensions (Connectors, plugins, and declarative agents) and building custom engine agents:

:::image type="content" source="assets/images/copilot-ext-vs-cec.png" alt-text="This diagram compares options between extending Copilot and custom engine agents for M365" lightbox="assets/images/copilot-ext-vs-cec.png" border="false":::

Custom engine agents are based on a bring your own model (BYOM) premise. With custom engine agents, your agent is independent of Microsoft 365 Copilot and its LLM and orchestrator.

By using custom engine agents, you can achieve:
- Deterministic workflows
- Custom citations and authoritative sources to the responses
- Tenant-specific intent

🎯 Learn more on building your own [**custom engine agents**](overview-custom-engine-agent.md).

### Tool options: Pro-code or low-code?

How you build and which tools you use are up to you. Your choices are:

- 🎯 **Pro-code**: If you prefer coding for full customization, develop one with [**Teams Toolkit**](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals) for [Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension). You can start with either:
  - [**Teams AI Library**](/microsoftteams/platform/bots/how-to/teams%20conversational%20ai/teams-conversation-ai-overview) to code, or
  - [**Azure OpenAI Studio**](https://oai.azure.com/) to configure then export the generated code to Teams Toolkit to deploy to Teams!

- 🎯 **Low-code** or **no-code**: You can develop rapidly with user-friendly interface on [**Copilot Studio**](/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) to build Copilot Studio custom agents.

## Next step

Learn prerequisites for building connectors and plugins:

> [!div class="nextstepaction"]
> [Set up your dev environment](prerequisites.md)

### See also

- [Microsoft Graph connectors overview](overview-graph-connector.md)
- [Declarative agent overview](overview-declarative-agent.md)
- [API plugins overview](overview-api-plugins.md)
- [Copilot Studio plugins overview](overview-business-applications.md)
- [Teams Message extensions overview](overview-message-extension-bot.md)
- [Teams AI Library](/microsoftteams/platform/bots/how-to/teams%20conversational%20ai/teams-conversation-ai-overview)
- [Azure AI app development](/azure/developer/intro/azure-ai-for-developers)
