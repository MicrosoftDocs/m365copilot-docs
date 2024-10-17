---
title: Your Copilot agent options for Microsoft 365
description: Understand which type Microsoft 365 Copilot agents works best for you
author: girliemac
ms.author: timura
ms.topic: conceptual
ms.date: 10/16/2024
ms.custom: [copilot-learning-hub]
---

# Your Copilot agent options for Microsoft 365

When it comes to deciding on your approach to AI development, there are numerous options to consider, including Microsoft 365 Copilot extensibility options and Azure AI solutions. This guide aims to streamline your journey through the options for Microsoft 365, assisting you in identifying the most suitable solution aligned with your specific needs and goals.

## Extend Copilot's models or build a custom engine agent?

When you're looking to create a fully customized end-to-end AI product to cater to your business needs, you typically choose language models and orchestration for your Retrieval-Augmented Generation (RAG) solutions.

However, with Microsoft 365 Copilot, you also have a choice of *extending* Copilot's private instances of Large Language Models (LLMs) and the Azure OpenAI service. Copilot's LLM is grounded in each tenant's Microsoft 365 content so it can work with the documents, messages, and other business context people use every day. When you extend Copilot, you can utilize the [orchestration layer](orchestrator.md) representing the interface between foundation LLMs, to select and execute the right content from the right plugin.

📍 Here's your first decision-making point; extending Copilot to utilize the model and orchestrator, or build a custom agent with your choice?

:::image type="content" source="assets/images/m365-extensibility-decisions.png" alt-text="A diagram that helps you to decide which Microsoft 365 extensibility options are best for you. Read the article on this page for the details." border="false" lightbox="assets/images/m365-extensibility-decisions.png" :::

📍 Also, if you're looking to leverage agentic AI for executing complex, multi-step workflows, including proactive triggers, long-running tasks, and asynchronous processing, then custom engine agents are the way to go.

Now, let's determine which type of agent you should build:

**Extend Microsoft 365 Copilot if any of the following apply:**
- You want to build a service on top of Microsoft 365 Copilot, utilizing Copilot's model and orchestrator
- You have previously built an API plugin (so that you can now plug it into your agent)
- You have prior experience in building a Teams message extension (so that you can just update it as a plugin)

**Build a custom agents if any of the following apply:**
- You want to use specific models, either LLM or small language model (SLM), for your service
- You need agentic support
- You want your service to be independent from Microsoft 365 Copilot, accessible to all Microsoft 365 users regardless of their Copilot licensing status 

### Pick your option

- 🎯 If you want to **extend Microsoft Copilot**, go to the next section, [Option 1](#option-1-extending-microsoft-365-copilot)!
  - 🎯 Then, you have choices for agents; build declarative agents, plugins, or connectors. Find out about [extensibility types](#types-of-microsoft-365-copilot-extensibility)
- 🎯 Otherwise, jump to [Option 2](#option-2-building-a-custom-engine-agent-for-microsoft-365) to **build your own custom agents**!

<br/>

---

## Option 1. Extending Microsoft 365 Copilot

Okay, you want to leverage the Copilot orchestrator! Let's have a quick grasp—Microsoft 365 Copilot is designed for enterprise users with Microsoft 365 Copilot subscription, to enhance productivity within Microsoft 365 applications.

By **extending Microsoft 365 Copilot** for enterprise users,

- Your service can be a part of the Microsoft ecosystem, enabling your users to benefit from the user experience of Microsoft products and allowing you to reach millions of users
- You can build an AI solutions for organizations to boost employee productivity across businesses
- You can apply people-centric data with Microsoft Graph to provide more personalized experience for your users
- You can use Graph Connector, SharePoint site library, or Dataverse table that is used in the workflow as your RAG data source

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

The custom engine agents operate on a BYOM (Bring Your Own Model). So, your copilot is independent from Microsoft Copilot and its LLM and orchestrator.

With BYOM, your can achieve:
- Deterministic workflows
- Custom citations and authoritative sources to the responses
- tenant specific intent

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
