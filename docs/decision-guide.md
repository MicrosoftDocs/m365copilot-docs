---
title: Microsoft 365 Copilot Extensibility Options
description: Understand which Microsoft 365 Copilot extensibility option works best for you
author: jessicaaawu
ms.author: wujessica
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 2/10/2025
ms.custom: [copilot-learning-hub]
---

# Your extensibility options for Microsoft 365 Copilot

Microsoft 365 Copilot is an AI-powered productivity tool that keeps users in the flow of their work across Microsoft 365 applications like Outlook, Teams, and Word, grounded in data from Microsoft Graph. While Copilot offers powerful capabilities, users may need to integrate additional knowledge, data sources, or applications to meet specific business needs.

[Microsoft Graph connectors](overview-graph-connector.md) enable organizations to bring in external data, allowing Copilot and agents to access and reason over a broader range of enterprise content.

Agents for Microsoft 365 Copilot are specialized assistants that are focused on a specific subject, powered by organizational knowledge and actions to automate business processes. This article focuses on two options for building agents: **declarative agents** and **custom engine agents**.  

## Extend Copilot's models or build a custom engine agent?

When you're looking to create a fully customized end-to-end AI product to cater to your business needs, you typically choose language models and orchestration for your Retrieval-Augmented Generation (RAG) solutions.

However, with Microsoft 365 Copilot, you also have a choice of extending Copilot's private instances of Large Language Models (LLMs) and the Azure OpenAI service. Copilot's LLM is grounded in each tenant's Microsoft 365 content so it can work with the documents, messages, and other business content people use every day. When you extend Copilot, you provide specific knowledge sources and skills that Copilot's [orchestration layer](orchestrator.md) uses to generate responses.

### When to build an agent by extending Copilot's model

- You want to take advantage of Copilot's model and orchestrator.
- You have external data that you want to make available to Copilot to reason over via a [Microsoft Graph connector](overview-graph-connector.md).
- You have an existing API that could be used as an [API plugin](overview-api-plugins.md) for read and write access to real-time data within an agent.

### When to build a custom engine agent

- You want to use specific models (LLM or small language model (SLM)) for your service.
- You need proactive agentic AI support.
- You want your service to be independent from Microsoft 365 Copilot, accessible to all Microsoft 365 users regardless of their Copilot licensing status.

:::image type="content" source="assets/images/m365-extensibility-decisions.png" alt-text="A diagram that helps you to decide which Microsoft 365 Copilot extensibility options are best for you." lightbox="assets/images/m365-extensibility-decisions.png" border="false" :::

## Extend Microsoft 365 Copilot

You can customize Copilot by building [declarative agents](#declarative-agents), optionally add actions and knowledge to Copilot and agents with [plugins](#plugins) and [Microsoft Graph connectors](#microsoft-graph-connectors).

> [!TIP]
> Are you a business decision maker? Check out the [Microsoft Copilot Scenario Library](https://adoption.microsoft.com/copilot-scenario-library/).

### Declarative agents

[Declarative agents](overview-declarative-agent.md) are designed to enhance the user experience by allowing the creation of personalized chat experiences to provide tailored interactions and responses. Declarative agents have the same look-and-feel as Microsoft 365 Copilot. Declarative agents can be combined with plugins and connectors to add skills and knowledge.

:::image type="content" source="assets/images/declarative-copilot-ui.png" alt-text="A fictional declarative agent UI." lightbox="assets/images/declarative-copilot-ui.png" border="false":::

Declarative agents are a great choice for the following cases.

- You want to layer on top of the full capability ​of Microsoft 365 Copilot​.
- Your scenario requires ​focus or specialization. For example, focusing knowledge on a specific set of documents or specializing in financial topics.
- You want to target specific roles or areas in your organization, like Human Resources, Sales, or Finance.
- You want to scope to specific data sources including domain knowledge​, Microsoft Graph connectors, and plugins.
- You want to enable nuanced interpretation of data received from data sources via custom instructions.

#### Plugins

Plugins add skills and actions to declarative agents.

- [API plugins](overview-api-plugins.md) extend declarative agents by calling REST APIs that have an OpenAPI description.
- [Actions in Copilot Studio](/microsoft-copilot-studio/copilot-plugins-overview?context=/microsoft-365-copilot/extensibility/context) connect Microsoft 365 Copilot and the Power Platform environment. Actions include **Prompts**, **Flows**, and **Connectors**. If you prefer developing without much coding, these options are for you.
- [Power Platform connectors](/microsoft-copilot-studio/copilot-plugins-overview?context=/microsoft-365-copilot/extensibility/context) enable declarative agents created with Microsoft Copilot Studio to interact with external services and data sources in real-time.

#### Microsoft Graph connectors

[Microsoft Graph connectors](overview-graph-connector.md) enable data ingestion from various sources to Microsoft Graph, facilitating unified data access and insights across Microsoft 365 and other services. Items ingested via a Microsoft Graph connector are available to Microsoft 365 Copilot as well as declarative agents.

### Extend Microsoft 365 Copilot with pro-code or low-code

Your journey varies based on your desired outcomes and your coding expertise. Whether you're a seasoned coder or prefer low-code or no-code solutions, there's a suite of tools tailored to your development style.

- Pro-code options are declarative agents, API plugins, and Microsoft Graph connectors. [Teams Toolkit](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals) for Visual Studio Code allows you to develop and tailor your agents.
- Low-code or no-code options are declarative agents built with the [Copilot Studio agent builder](copilot-studio-agent-builder.md), Copilot Studio actions, and Power Platform connectors. You can develop rapidly with a user-friendly interface in [Copilot Studio](/microsoft-copilot-studio/fundamentals-what-is-copilot-studio).

## Build a custom engine agent

With Azure AI services, you can create a [custom engine agent](overview-custom-engine-agent.md). Custom engine agents are based on a bring your own model premise. With custom engine agents, your agent is independent of Microsoft 365 Copilot and its LLM and orchestrator, however, both declarative agents and custom engine agents now have very similar user experience to end-users when running on Microsoft 365 Copilot Chat.

Custom engine agents are a great choice for the following cases.

- Your scenario requires usage of specific LLMs or SLMs.
- You need greater control over the UX or behavior of the agent.
- You want to publish your agents to users who are not on Microsoft 365.

### Build a custom engine agent with pro-code or low-code

How you build and which tools you use are up to you. Your choices are:

- The pro-code option allows for full customization. Develop with [Teams Toolkit](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals) for Visual Studio Code and start with either the [Teams AI Library](/microsoftteams/platform/bots/how-to/teams-conversational-ai/teams-conversation-ai-overview?context=/microsoft-365-copilot/extensibility/context), or [Azure OpenAI Studio](https://oai.azure.com/) to configure then export the generated code to Teams Toolkit.
- For low-code or no-code, you can develop custom agents rapidly with a user-friendly interface in [Copilot Studio](/microsoft-copilot-studio/fundamentals-what-is-copilot-studio).

## Related content

- [Declarative agent overview](overview-declarative-agent.md)
- [API plugins overview](overview-api-plugins.md)
- [Microsoft Graph connectors overview](overview-graph-connector.md)
- [Custom engine agent overview](overview-custom-engine-agent.md)
