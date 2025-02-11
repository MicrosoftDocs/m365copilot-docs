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

[Agents for Microsoft 365 Copilot](#choosing-between-declarative-and-custom-engine-agents) are specialized assistants that are focused on a specific subject, powered by organizational knowledge and actions to automate business processes. This article focuses on two options for building agents: **declarative agents** and **custom engine agents**.  

## Choosing Between Declarative and Custom Engine Agents?

When extending Copilot with agents, you have a choice of tailoring Copilot with declarative agents or custom engine agents:

- [Declarative agents](#declarative-agents) allow you to configure Copilot for specific scenarios with custom instructions, additional knowledge, and actions to automate business processes.
- [Custom engine agents](#custom-engine-agents) are ideal for advanced scenarios requiring complex workflows, advanced orchestration, or specialized language models.

### Declarative agents

Declarative agents allow you to configure Copilot for specific scenarios with custom instructions, additional knowledge, and actions to automate business processes. Because declarative agents use Copilot’s existing AI infrastructure, model, and orchestrator, they're consistent with Microsoft 365’s security, compliance, and responsible AI.

**To configure a declarative agent, you can provide:**

- **Custom instructions** to shape Copilot’s responses, ensuring outputs are tailored to your organization’s specific needs or workflow.
- **Custom knowledge** to connect Microsoft 365 data sources (e.g. SharePoint, OneDrive) or external data via Microsoft Graph connectors.
- **Custom actions** to integrate with APIs to interact with external systems in real-time.

**Declarative agents have the following characteristics:**

- **Hosting:** Leverages Copilot's orchestrator, foundation model. No additional hosting is required.
- **Tooling:** Can be created using low-code tools such as Copilot Studio and pro-code tools like Visual Studio, VS Code, and Teams Toolkit.
- **Publishing channels:** Can be used in Microsoft 365 Copilot and Microsoft 365 apps like Teams, Word, Excel, and Outlook.  

### Custom engine agents

**Custom engine agents** allow you to build fully customized AI assistants. They're useful for scenarios that require complex workflows, orchestration, or specific language models. Custom Engine Agents may require you to provide additional hosting for models and orchestrators. Developers may also need to ensure their custom agent is compliant, secure, and adheres to responsible AI policies.

**To develop a custom agent, consider leveraging:**

- **Custom orchestration:** Take full control of workflows and integrate additional knowledge and external API calls. You can incorporate one or more language models to enhance functionality.
- **Custom models**: Choose the most suitable model for your use case, whether foundation large language models, small language models, fine-tuned models, or industry-specific models.  
- **Proactive agentic support**: Programmatically initiate workflows and actions.  

**Custom engine agents have the following characteristics:**

- **Hosting**: Requires additional hosting outside of Microsoft 365, typically with cloud services such as Azure or Copilot Studio at an additional cost.  
- **Tooling**: Orchestration can be built in low-code using Copilot Studio or in pro-code tools like Visual Studio, VS Code, and Teams Toolkit (using languages such as .NET, Python, and JavaScript, and frameworks like Semantic Kernel or LangChain).  
- **Publishing Channels**: Can be used in Microsoft 365 Copilot and Microsoft 365 apps like Teams, Word, Excel, and Outlook, as well as external apps and websites.  

## Comparison of agent features

The following table summarizes the key differences between declarative agents and custom engine agents to help you choose the right option for your use case:

| Aspect                 | Declarative Agents                                    | Custom Engine Agents                                               |
|------------------------|------------------------------------------------------|-------------------------------------------------------------------|
| **Use Case**          | Leverage Microsoft 365 Copilot for task-specific scenarios     | Complex workflows or custom AI systems                           |
| **Customization**     | Limited to Copilot’s models and actions              | Fully customizable, including choice of AI models and orchestration |
| **Proactive Automations** | Does not support proactive interactions and relies on user-initiated interactions. | Enables agents to trigger actions automatically, even without direct user input. |
| **Channels**          | Integrated into Microsoft 365 apps                    | Available for Microsoft 365 and external apps                             |
| **Setup Complexity**  | Can be developed with no/low-code tools (Copilot Studio) and pro-code tools (VS Code/Teams Toolkit) | Varies from simple setups in Copilot Studio to advanced pro-code implementations using Visual Studio and VS Code |
| **Engine Hosting**    | Hosted in Microsoft 365                              | Hosted in Microsoft 365 with Copilot Studio or externally with custom solutions such as Azure AI. |

### Build a declarative agent when

- You want your **agent to work within Copilot's orchestration and language models** to ensure consistency with security and compliance.
- You want a **faster implementation** or want to develop an agent with no or low-code.
- Your **user’s workflow is within Microsoft 365 apps** (i.e., SharePoint, OneDrive, Teams) and wants to work within the context of these applications (via @mentions or in Teams business chats).

### Build a custom engine agent when

- You have **built an existing conversational assistant outside of Copilot** and want to integrate it with Microsoft 365 and Copilot.
- You want to **use your own AI models**: Your agent may benefit from domain-specific models with specialized knowledge or multimodal models.  
- You want **advanced Teams integrations** (i.e., Meetings, Channels, etc.).  
- You want to **make your agent available outside of Microsoft 365 and Copilot**.  
- You want to **support proactive messaging**, which enables developers to define workflows and trigger agent behavior without the need for user interaction.
- You need **multiple system integration**, such as managing logistics by integrating data from GPS, warehouse systems, and customer databases.
- You need to implement **custom business logic** (i.e., specific rules for patient triage in a healthcare setting based on symptoms and medical history).
- You have **complex decision-making** (i.e., Evaluating loan applications based on multiple factors like credit score, income, and employment history).

:::image type="content" source="assets/images/cea-da-decision-guide.png" alt-text="A decision guide for choosing between declarative agents and custom engine agents." lightbox="assets/images/cea-da-decision-guide.png" border="false":::

## Next Steps

- Learn more about [declarative agents](overview-declarative-agent.md)
- Learn more about [custom engine agents](overview-custom-engine-agent.md)
- [Set up dev environment](prerequisites.md)

## Related content

- [API plugins overview](overview-api-plugins.md)
- [Microsoft Graph connectors overview](overview-graph-connector.md)
- [Samples Collection](Samples.md)
