---
title: Custom engine agents for Microsoft 365
description: Custom engine agents are sophisticated conversational bots designed to harness the powerful capabilities of Large Language Models (LLMs) for seamless user interaction.
author: aycabas
ms.author: aycabas
ms.date: 11/06/2024
ms.topic: overview
---


# Custom engine agents for Microsoft 365 overview

Custom engine agents are conversational Teams bots designed to harness the powerful capabilities of Large Language Models (LLMs) for seamless user interaction. These advanced bots mark a significant departure from traditional bots, offering an extensive range of features that elevate the overall user experience.

:::image type="content" source="assets/images/teams-ai-library.png" alt-text="A diagram that shows how a custom engine agent in Teams works" lightbox="/microsoftteams/platform/assets/images/bots/teams-ai-library.png" border="false":::

Custom engine agents utilize LLM technology that allows them to easily understand and respond to user queries, creating dynamic and immersive interactions. Custom engine agents also offer advanced functionalities such as UI manipulation, task execution, and content creation. These capabilities make custom engine agents indispensable tools for streamlining workflows and boosting productivity.

[!INCLUDE [preview-disclaimer-copilot](includes/preview-disclaimer-copilot-no-license.md)]

## Build custom engine agents

There are two options for building custom engine agents. You can use the [Teams AI library](/microsoftteams/platform/bots/how-to/teams-conversational-ai/teams-conversation-ai-overview) and [Teams Toolkit](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals) to build your agent with code, or you can use [Microsoft Copilot Studio](/microsoft-copilot-studio/fundamentals-get-started?context=/microsoft-365-copilot/extensibility/context) to build an agent with little to no code.

### Teams AI library and Teams Toolkit

For enterprises seeking bot solutions that are precisely customized to user demands and scenarios, using the [Teams AI library](/microsoftteams/platform/bots/how-to/teams-conversational-ai/teams-conversation-ai-overview) is a great choice. The Teams AI library utilizes LLMs that adhere to Microsoft's UX principles and that are compatible with Teams and Microsoft 365. Developing custom engine agents with the Teams AI Library can provide more natural, intuitive, and specialized user interaction experiences. This option is advantageous for developers wishing to customize model selection and orchestration, applying prior experience in Teams bot development, or aiming to ensure accessibility for all Microsoft 365 users.

Developers can also utilize the [Teams Toolkit](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals) to construct their projects. The Teams Toolkit includes prebuilt templates for a seamless project launch, offering an ideal solution for quick starts, easy debugging, and deployment.

#### Explore templates to get started

Kickstart building your custom engine agents using Teams AI library with the prebuilt templates available in Teams Toolkit:

| Template | Description |
|:---------|:------------|
| [Basic AI ChatBot](/microsoftteams/platform/toolkit/build-a-basic-ai-chatbot-in-teams) | Build a basic AI chatbot for Teams using Teams AI library. |
| [AI Agent ChatBot](/microsoftteams/platform/toolkit/build-an-ai-agent-in-teams) | Build an AI agent chatbot for Teams that can make decisions and perform actions based on LLM reasoning. AI Agent template has options to start from scratch or use OpenAI Assistants API. |
| [Chat with your data](/microsoftteams/platform/toolkit/build-a-rag-bot-in-teams) | Expand AI bot's knowledge with your content to get more accurate answers to your questions. *Chat with your data* supports Azure AI Search, Microsoft Graph Search with Microsoft 365 and SharePoint content, and custom OpenAPI and data ingestion options.|

#### Take a tour of the sample scenarios

Explore sample scenarios available in [Teams AI library GitHub repository](https://github.com/microsoft/teams-ai) to understand more about the capabilities you can add in your custom engine agents:

| Sample      | Description | C# | JavaScript | Python |
|:------------|:------------|:---|:-----------|:-------|
| List bot | Harness the power of AI, simplify your workflow and bring order to your daily tasks with action chaining capabilities. | [C#](https://github.com/microsoft/teams-ai/tree/main/dotnet/samples/04.ai.d.chainedActions.listBot) | [JavaScript](https://github.com/microsoft/teams-ai/tree/main/js/samples/03.ai-concepts/d.chainedActions-listBot) |[Python](https://github.com/microsoft/teams-ai/tree/main/python/samples/04.ai.d.chainedActions.listBot)|
| DevOps bot | Perform DevOps actions such as create, update, triage, and summarize work items. | [C#](https://github.com/microsoft/teams-ai/tree/main/dotnet/samples/04.ai.e.chainedActions.devOpsBot) | [JavaScript](https://github.com/microsoft/teams-ai/tree/main/js/samples/04.ai-apps/b.devOpsBot) |[Python](https://github.com/microsoft/teams-ai/tree/main/python/samples/04.ai.e.chainedActions.devOpsBot)|
| Twenty questions bot | Use LLM capabilities and the concept of user intent by having users guess a secret within 20 questions, grounding the chatbot with some question and answer as a data source. | [C#](https://github.com/microsoft/teams-ai/tree/main/dotnet/samples/04.e.twentyQuestions) | [JavaScript](https://github.com/microsoft/teams-ai/tree/main/js/samples/03.ai-concepts/a.twentyQuestions) |[Python](https://github.com/microsoft/teams-ai/tree/main/python/samples/04.ai.a.twentyQuestions)|
| Math tutor assistant | Use OpenAI's Assistants API with the Code Interpreter tool and create an assistant that's an expert on math. | [C#](https://github.com/microsoft/teams-ai/tree/main/dotnet/samples/06.assistants.a.mathBot) | [JavaScript](https://github.com/microsoft/teams-ai/tree/main/js/samples/04.ai-apps/d.assistants-mathBot) |[Python](https://github.com/microsoft/teams-ai/tree/main/python/samples/06.assistants.a.mathBot)|
| Food ordering assistant | Call actions to order food from a fictional restaurant called The Pub with complex interactions. | [C#](https://github.com/microsoft/teams-ai/tree/main/dotnet/samples/06.assistants.b.orderBot) | [JavaScript](https://github.com/microsoft/teams-ai/tree/main/js/samples/04.ai-apps/e.assistants-orderBot) |[Python](https://github.com/microsoft/teams-ai/tree/main/python/samples/06.assistants.b.orderBot)|

### Microsoft Copilot Studio

Microsoft Copilot Studio empowers teams to quickly and easily create powerful copilots using a guided, no-code graphical experience without needing data scientists or developers.

[!INCLUDE [copilot-studio-agent-naming](includes/copilot-studio-agent-naming.md)]

## Related content

- [Teams AI library Overview](/microsoftteams/platform/bots/how-to/Teams%20conversational%20AI/teams-conversation-ai-overview?context=/microsoft-365-copilot/extensibility/context)
- [Get started with a Teams AI library tutorial](/microsoftteams/platform/teams-ai-library-tutorial)
- [Get started with Microsoft Copilot Studio](/microsoft-copilot-studio/fundamentals-get-started?context=/microsoft-365-copilot/extensibility/context)
- [Your agent options for Microsoft 365](decision-guide.md)
