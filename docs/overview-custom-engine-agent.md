---
title: Custom Engine Agents for Microsoft 365
description: Find information about custom engine agents, which are specialized chat experiences built on any large language model (LLM) and tailored for specific domain or workflows, and considerations for development and deployment.
author: jessicaaawu
ms.author: wujessica
ms.localizationpriority: medium
ms.date: 11/13/2025
ms.topic: overview
---

# Custom engine agents for Microsoft 365 overview

Custom engine agents expand the capabilities of Microsoft 365 Copilot by allowing organizations to build AI-powered assistants tailored to their specific needs. Unlike standard Copilot experiences, custom engine agents provide full control over orchestration, AI models, and data integrations, enabling businesses to create advanced workflows that align with their unique requirements. These agents can be created using [Copilot Studio](#low-code-approach), the [Microsoft 365 Agents SDK](#microsoft-365-agents-sdk), [Teams AI Library](#teams-ai-library) or [Microsoft Foundry](#integrate-microsoft-foundry-agents), depending on your preferred development approach and hosting environment.

This article guides you through capabilities and options for building a custom engine agent.

## What is a custom engine agent?

Custom engine agents are specialized Copilot agents designed to meet specific enterprise scenarios. Unlike declarative agents, they give developers the flexibility to bring their own orchestration and AI services. This allows full control over workflows, AI models, and integrations, enabling organizations to create advanced solutions.

:::image type="content" source="assets/images/agents-system-cea.png" alt-text="Anatomy of the Microsoft 365 Copilot custom engine agent" border="false":::

### Key characteristics of custom engine agents

Custom engine agents have the following characteristics:

- **Custom orchestration** – Define tailored workflows and connect to external systems to incorporate more knowledge or invoke actions.
- **Flexible AI models** – Choose from foundation models, fine-tuned models, or industry-specific AI to suit your use case.
- **Proactive automation** – Programmatically trigger workflows and take actions across enterprise applications.

## Development approaches for custom engine agents

You can use a low-code approach to build custom engine agents with Copilot Studio or a pro-code approach using development tools and SDKs, or integrate an existing Foundry agent with Microsoft 365. All options enable integration of external knowledge and actions into Microsoft 365 Copilot. However, they differ in complexity, required skill set, and the types of business scenarios they best support.

### Low-code approach

[Copilot Studio](/microsoft-copilot-studio/fundamentals-get-started?context=/microsoft-365-copilot/extensibility/context) is a fully managed SaaS platform that simplifies building custom engine agents—so you can focus on crafting effective agent experiences without worrying about infrastructure, hosting, or governance. It offers built-in compliance via Power Platform, along with prebuilt templates and connectors for Microsoft 365 and partner services. While it supports low-code development, the real value lies in its streamlined deployment and management.

This approach is ideal for organizations looking to build and scale custom engine agents quickly, without relying heavily on development resources.

### Pro-code approach

For pro-code development, you can use Visual Studio or Visual Studio Code with the [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) extension. This toolkit streamlines agent development by providing prebuilt templates, easy debugging, and streamlined deployment workflows—ideal for developers who want a fully customized experience.

When building agents with the toolkit, you can choose between two SDKs depending on your needs.

#### Microsoft 365 Agents SDK

The [Microsoft 365 Agents SDK](create-deploy-agents-sdk.md) is a framework designed for building full-stack, multi-channel agents that can operate across Microsoft 365 Copilot, Teams, partner platforms, custom applications, and websites.

It's ideal for use cases that require custom orchestration using frameworks like Semantic Kernel or LangChain, and supports integration with any AI models or services. This SDK is best suited for organizations or ISVs that need highly tailored agents with advanced capabilities and the ability to operate across multiple channels.

#### Teams AI Library

The [Teams AI Library](/microsoftteams/platform/bots/how-to/Teams%20conversational%20AI/teams-conversation-ai-overview?context=/microsoft-365-copilot/extensibility/context) is a framework tailored specifically for Microsoft Teams. It includes a built-in action planner orchestrator and supports GPT-based language models from Azure and OpenAI.

This option is ideal for organizations looking to build collaborative agents that operate within Teams channels and meetings. It's useful when building agents that interact in real time with users in a collaborative, team-based environment.

### Integrate Microsoft Foundry agents

[Microsoft Foundry](/azure/ai-foundry/what-is-azure-ai-foundry?context=/microsoft-365-copilot/extensibility/context) provides a platform for building, testing, and publishing intelligent agents using the Agent Framework SDK (formerly Semantic Kernel). These agents can be integrated into Microsoft 365 Copilot and Teams either via Foundry one-click publishing or the [Microsoft 365 Agents Toolkit](/microsoft-365/agents-sdk/create-new-toolkit-project-vsc?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext).

This approach is ideal for developers or organizations that already maintain AI logic and orchestration in Foundry and want to make those capabilities directly available in Microsoft 365.

The following table shows the two integration approaches for Foundry agents.

|  Feature      | [One-click publish from Foundry](https://ai.azure.com/?cid=learnDocs) | [Integrate with Microsoft 365 using Agents Toolkit](https://github.com/OfficeDev/microsoft-365-agents-toolkit-samples/tree/main/) |
|------------------|-------------------------------------|--------------------------------------------------------|
| Description  | Publish your Foundry agent directly to Microsoft 365 Copilot and Teams with minimal setup. Automatically provisions Azure Bot Service and Entra ID and packages your agent for distribution. | Connect an existing Foundry agent to Microsoft 365 Copilot via a proxy app built with the Microsoft 365 Agents Toolkit. Enables [Retrieval API](/microsoft-365-copilot/extensibility/api/ai-services/retrieval/overview) grounding for Microsoft 365 data, plus advanced customization, debugging, and multi-environment deployment. |
| Tooling      | Foundry portal                      | Visual Studio Code/Visual Studio with Microsoft 365 Agents Toolkit |
| Ideal for    | Rapid deployment and testing with minimal code changes | Scenarios requiring Microsoft 365 data grounding, custom logic, SSO, or managed infrastructure |

Both integration approaches connect the Foundry Agent Service to Microsoft 365 Copilot through a bot or proxy layer, allowing users to interact with Foundry agents directly within Microsoft 365 and Teams.

### Agent development tool comparison

The following table provides a quick comparison of the available approaches.

| Feature                         | Copilot Studio | Teams AI | Agents SDK | Foundry |
|---------------------------------|----------------|----------|------------|---------|
| **Development approach**        | Low-code | Pro-code | Pro-code | Low-code or Pro-code |
| **Tooling**                     | Copilot Studio UI | Visual Studio Code/Visual Studio with Teams AI Library | Visual Studio Code/Visual Studio with Microsoft 365 Agents Toolkit | Foundry Portal or Visual Studio Code/Visual Studio with Microsoft 365 Agents Toolkit |
| **Publishing**                  | My organization | My organization<br>ISV/store | My organization<br>ISV/store<br>10+ channels | My organization<br>ISV/store |
| **Channels**                    | Microsoft 365 Copilot, Teams, partner apps, mobile apps, and custom websites | Microsoft 365 Copilot, Teams | Microsoft 365 Copilot, Teams, partner apps, mobile apps, and custom websites | Microsoft 365 Copilot and Teams (other channels require custom integration) |
| **Productivity**                | Individual | Group | Group | Individual |
| **Orchestrator**                | Copilot Studio | Teams AI Action Planner | Bring your own (for example, Semantic Kernel, LangChain) | Bring your own (for example, Semantic Kernel or LangChain) |
| **AI Models**                   | Copilot Studio | Any model of your choice | Any model of your choice | Foundry OpenAI or custom models |
| **Supported programming languages** | Not applicable (low-code) | C#, TypeScript, JavaScript, Python | C#, JavaScript, Python | Python, C# |

### Key considerations

The following considerations apply to choosing your development tool:

- **Publishing scope** - Only agents built with the Teams AI Library, Microsoft 365 Agents SDK, or Foundry can be published to the Microsoft Commercial Store with the Agents Toolkit.
- **Group productivity** - For multi-user scenarios, especially in Teams, consider the Teams AI Library for its built-in support for collaborative channels and meetings. Foundry agents can also be used in Teams but may require additional setup for multi-user interactions.
- **Customization needs** - If you need full control over AI models or orchestration, opt for a pro-code approach with Microsoft 365 Agents SDK or Foundry via ATK.
- **Knowledge source access** - Copilot Studio agents have native access to Microsoft 365 and Copilot connector content. Agents built with a pro-code approach can access the same data via Microsoft Graph APIs. Pro-code agents, including those built with the Agents SDK or Foundry via Agents Toolkit, can access the same data via Microsoft Graph APIs and use the Retrieval API for grounding in Microsoft 365 data.

### Scenario examples

The following table provides scenario examples and the recommended development approach for each.

| Scenario                            | Description | Recommended approach |
|-------------------------------------|-------------|----------------------|
| **Legal case analysis**             | A law firm creates a standalone AI agent using Foundry. The agent uses a custom-trained LLM for case law analysis and integrates with external legal databases. The agent is used in the firm's case management system but should also be accessible within Microsoft 365 Copilot and have access to documents in SharePoint. | Use **Foundry** because it allows the firm to maintain custom AI logic and orchestration while making the agent accessible in Microsoft 365. Agents can be published via one-click publish for minimal setup or integrated through the Microsoft 365 Agents Toolkit to enable Retrieval API grounding, custom logic, and multi-environment deployment. |
| **Surgical planning in healthcare** | A hospital builds an agent for surgical teams to plan and schedule surgeries. The agent collaborates with doctors, nurses, and administrative staff and integrates with Patient Information and scheduling systems. The agent facilitates collaboration with all members of the team to plan, create appointments, resolve conflicts, and set reminders and notifications. | Use the **Teams AI Library** because the agent operates in a multi-user, collaborative environment. Publishing within Teams channels or meetings allows seamless interaction, while the built-in Action Planner orchestrator connects to scheduling and patient information systems. |
| **Employee onboarding assistant**   | A company wants to provide a lightweight AI assistant for new employees to answer HR FAQs, guide them through document completion, and point them to internal resources. The agent will mostly handle standard processes and documentation that are already available in Microsoft 365. | Use **Copilot Studio** because it enables rapid, low-code development and deployment. The agent can use built-in Microsoft 365 knowledge and connectors, making it ideal for straightforward workflows that don’t require custom AI models or multi-channel orchestration. |

## Design and deployment considerations

As you prepare to build and deploy your custom engine agent, consider the key factors described in this section to ensure performance, compliance, and sustainability.

> [!NOTE]
> Custom engine agents are supported in app manifest version 1.21 and later versions.

### AI model selection

Custom engine agents can utilize various AI models depending on the complexity of tasks and domain-specific requirements. Whether your agent needs a specific foundation model, a small language model, or a fine-tuned model for your scenario, selecting the right model is critical.

For more information, see [How to choose the right models for your apps](https://techcommunity.microsoft.com/blog/microsoftmechanicsblog/how-to-choose-the-right-models-for-your-apps--azure-ai/4271216).

### Responsible AI

Ensure that your custom agent is compliant, secure, and aligned with [Responsible AI (RAI) policies](/azure/well-architected/ai/responsible-ai) by adhering to RAI principles, enforcing data governance, and meeting store publishing requirements for ISVs.

### Cost considerations

Consider licensing, consumption, and hosting costs associated with your custom engine agent.

For more information, see [Cost considerations for Copilot extensibility](cost-considerations.md).

## Privacy and compliance

Custom engine agent prompts and responses in Copilot Chat and Teams are stored in compliance with Microsoft 365 product terms and conditions and are managed as per the customer's instructions. To view and manage this stored data, admins can use Content Search or Microsoft Purview.

## Related content

- [Create and deploy an agent with Copilot Studio](/microsoft-copilot-studio/fundamentals-get-started?context=/microsoft-365-copilot/extensibility/context)
- [Create and deploy an agent with Microsoft 365 Agents SDK](create-deploy-agents-sdk.md)
- [Microsoft Foundry one-click publishing to Microsoft 365](/azure/ai-foundry/what-is-azure-ai-foundry)
- [Create an agent using Microsoft 365 Agent Toolkit](/microsoft-365/agents-sdk/create-new-toolkit-project-vs?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)
- [Convert your declarative agent to a custom engine agent](convert-declarative-agent.md)
- [Teams AI Library](/microsoftteams/platform/bots/how-to/Teams%20conversational%20AI/teams-conversation-ai-overview?context=/microsoft-365-copilot/extensibility/context)
- [Bots overview](/microsoftteams/platform/bots/overview)
