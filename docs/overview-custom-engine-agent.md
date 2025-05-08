---
title: Custom Engine Agents for Microsoft 365
description: Find information about custom engine agents, which are specialized chat experiences built on any large language model (LLM) and tailored for specific domain or workflows, and considerations for development and deployment.
author: jessicaaawu
ms.author: wujessica
ms.localizationpriority: medium
ms.date: 05/05/2025
ms.topic: overview
---


# Custom engine agents for Microsoft 365 overview

Custom engine agents expand the capabilities of Microsoft 365 Copilot by allowing organizations to build AI-powered assistants tailored to their specific needs. Unlike standard Copilot experiences, custom engine agents provide full control over orchestration, AI models, and data integrations, enabling businesses to create advanced workflows that align with their unique requirements.  

This article guides you through capabilities and options for building a custom engine agent.

## What is a custom engine agent?

Custom engine agents are specialized Copilot agents designed to meet specific enterprise scenarios. Unlike declarative agents, they give developers the flexibility to bring their own orchestration and AI services. This allows full control over workflows, AI models, and integrations, enabling organizations to create advanced solutions.

:::image type="content" source="assets/images/agents-system-cea.png" alt-text="Anatomy of the Microsoft 365 Copilot custom engine agent" border="false":::

### Key characteristics of custom engine agents

Custom engine agents have the following characteristics:

- **Custom orchestration** – Define tailored workflows and connect to external systems to incorporate additional knowledge or invoke actions.
- **Flexible AI models** – Choose from foundation models, fine-tuned models, or industry-specific AI to suit your use case.
- **Proactive automation** – Programmatically trigger workflows and take actions across enterprise applications.

## Development approaches for custom engine agents

You can use a low-code approach to build custom engine agents with Copilot Studio or a pro-code approach using development tools and SDKs. All options enable integration of external knowledge and actions into Microsoft 365 Copilot. However, they differ in complexity, required skill set, and the types of business scenarios they best support.

### Low-code approach

[Copilot Studio](/microsoft-copilot-studio/fundamentals-get-started?context=/microsoft-365-copilot/extensibility/context) is a fully managed SaaS platform that simplifies building custom engine agents—so you can focus on crafting effective agent experiences without worrying about infrastructure, hosting, or governance. It offers built-in compliance via Power Platform, along with prebuilt templates and connectors for Microsoft 365 and third-party services. While it supports low-code development, the real value lies in its streamlined deployment and management.

This approach is ideal for organizations looking to build and scale custom engine agents quickly, without relying heavily on development resources.

### Pro-code approach

For pro-code development, you can use Visual Studio or Visual Studio Code with the Microsoft 365 Agents Toolkit (an evolution of Teams Toolkit) extension. This toolkit streamlines agent development by providing prebuilt templates, easy debugging, and streamlined deployment workflows—ideal for developers who want a fully customized experience.

When building gents with the toolkit, you can choose between two SDKs depending on your needs.

#### Microsoft 365 Agents SDK (preview)

The [Microsoft 365 Agents SDK (preview)](/microsoft-365/agents-sdk/) is a framework designed for building full-stack, multi-channel agents that can operate across Microsoft 365 Copilot, Teams, third-party platforms, custom applications, and websites.

It's ideal for use cases that require custom orchestration using frameworks like Semantic Kernel or LangChain, and supports integration with any AI models or services. This SDK is best suited for organizations or ISVs that need highly tailored agents with advanced capabilities and the ability to operate across multiple channels.

#### Teams AI Library

The [Teams AI Library](/microsoftteams/platform/bots/how-to/Teams%20conversational%20AI/teams-conversation-ai-overview?context=/microsoft-365-copilot/extensibility/context) is a framework tailored specifically for Microsoft Teams. It includes a built-in action planner orchestrator and supports GPT-based language models from Azure and OpenAI.

This option is ideal for organizations looking to build collaborative agents that operate within Teams channels and meetings. It's useful when building agents that interact in real time with users in a collaborative, team-based environment.

### Agent development tool comparison

The following table provides a quick comparison of the available approaches.

|       **Feature**              | **Copilot Studio**                                         | **Teams AI**                                              | **Agents SDK**                                               |
|---------------------|------------------------------------------------------------|------------------------------------------------------------|-------------------------------------------------------------|
| Development aproach        | Low-code                                                   | Pro-code                                                   | Pro-code                                                    |
| Toolin        | Copilot Studio UI                                          | Visual Studio Code/Visual Studio with Teams AI Library              | Visual Studio Code/Visual Studio with Microsoft 365 Agents Toolkit            |
| Publishing      | My organization</ br>ISV/store                                 | My organization</ br>ISV/store                                 | My organization</ br>ISV/store                                  |
| Channels        | Microsoft 365 Copilot, Teams, third-party apps, mobile apps, and custom websites | Microsoft 365 Copilot, Teams                          | Microsoft 365 Copilot, Teams, third-party apps, mobile apps, and custom websites |
| Productivity    | Individual                                                 | Group                                                      | Individual                                                  |
| Orchestrator    | Copilot Studio                                             | Teams AI Action Planner                                    | Bring your own (for example, Semantic Kernel, LangChain)          |
| AI Models       | Copilot Studio                                             | Any model of your choice                                   | Any model of your choice                                    |
| Supported programming languages | Not applicable (low-code)                            | C#, TypeScript, JavaScript, Python                          | C#, JavaScript, Python                                      |

### Key considerations

The following considerations apply to choosing your development tool:

- **Publishing scope** - Only agents built with the Teams AI Library or Microsoft 365 Agents SDK can be published to the Microsoft Commercial Store with the Agents Toolkit.
- **Group productivity** - For multiuser scenarios, especially in Teams, consider the Teams AI Library for its built-in support for collaborative channels and meetings.
- **Customization needs** - If you need full control over AI models or orchestration, opt for a pro-code approach with Microsoft 365 Agents SDK.
- **Knowledge source access** - Copilot Studio agents have native access to Microsoft 365 and Microsoft Graph connector content. Agents built with a pro-code approach can access the same data via Microsoft Graph APIs.

### Scenario examples

The following table provides scenario examples and the recommended development approach for each.

| **Scenario**                  | **Description**                                                                                                                                                                                                                                                                                                      | **Recommended approach**                                                                                                                                                                                                                                                                                    |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Legal case analysis**      | A law firm creates a standalone AI agent using Azure AI Foundry. The agent uses a custom-trained LLM for case law analysis and integrates with external legal databases. The agent is used in the firm's case management system but should also be accessible within Microsoft 365 Copilot and have access to documents in SharePoint. | Because the agent runs in both the law firm's internal case management system (a custom-built app) and Microsoft 365, use the **Microsoft 365 Agent SDK** for multi-channel publishing and integration with a custom trained LLM.                                     |
| **Surgical planning in healthcare** | A hospital builds an agent for surgical teams to plan and schedule surgeries. The agent collaborates with doctors, nurses, and administrative staff and integrates with Patient Information and scheduling systems. The agent facilitates collaboration with all members of the team to plan, create appointments, resolve conflicts, and set reminders and notifications. | Because the agent will be used in a team setting across multiple users, publishing this agent within a Teams channel or meeting will facilitate collaboration across all users. <br>This agent will be built with the **Teams AI Library** and can connect to the patient information and scheduling systems. |

## Design and deployment considerations

As you prepare to build and deploy your custom engine agent, consider the key factors described in this section to ensure performance, compliance, and sustainability.

### AI model selection

Custom engine agents can utilize various AI models depending on the complexity of tasks and domain-specific requirements. Whether your agent needs a specific foundation model, a small language model, or a fine-tuned model for your scenario, selecting the right model is critical.

For more information, see [How to choose the right models for your apps]([/azure/ai-services/openai/how-to/select-model](https://techcommunity.microsoft.com/blog/microsoftmechanicsblog/how-to-choose-the-right-models-for-your-apps--azure-ai/4271216)).

### Responsible AI

Ensure that your custom agent is compliant, secure, and aligned with [Responsible AI (RAI) policies](/azure/well-architected/ai/responsible-ai) by adhering to RAI principles, enforcing data governance, and meeting store publishing requirements for ISVs.

### Cost considerations

Consider licensing, consumption, and hosting costs associated with your custom engine agent.

For more information, see [Cost considerations for Copilot extensibility](cost-considerations.md).

## Related content

- [Create and deploy an agent with Copilot Studio](/microsoft-copilot-studio/fundamentals-get-started?context=/microsoft-365-copilot/extensibility/context)
- [Microsoft 365 Agents SDK](/microsoft-365/agents-sdk/)
- [Teams AI Library](/microsoftteams/platform/bots/how-to/Teams%20conversational%20AI/teams-conversation-ai-overview?context=/microsoft-365-copilot/extensibility/context)
- [Copilot extensibility planning guide](planning-guide.md)
