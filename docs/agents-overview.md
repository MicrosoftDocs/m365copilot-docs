---
title: Agents for Microsoft 365 Copilot
description: Choose the type of Microsoft 365 Copilot agent that works best for your scenario.
author: jessicaaawu
ms.author: wujessica
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 05/19/2025
ms.custom: [copilot-learning-hub]
---

# Agents for Microsoft 365 Copilot

Microsoft 365 Copilot is an AI-powered productivity tool that enhances workflows across Microsoft 365 applications like Copilot Chat, Outlook, Teams, and Word, using enterprise data from Microsoft Graph. Although Copilot provides powerful built-in capabilities, organizations often need to integrate additional knowledge, data sources, or applications to address specific use cases.

Agents extend the functionality of Copilot by acting as specialized AI assistants tailored to specific domains. These agents apply organizational knowledge and automation to streamline business processes, enhance decision making, and improve efficiency. Agents can retrieve information, summarize data, or even take actions like sending emails or updating records.  

You can use one of two approaches to build agents for Copilot: the [declarative](#declarative-agents) approach, which utilizes your instructions, knowledge, and actions along with Copilot's orchestrator and models, or the [custom engine](#custom-engine-agents) approach, where you bring your own orchestrator and models to create a fully tailored agent. This article describes the two approaches and provides information about when to use each.

## Why build an agent?

Microsoft 365 Copilot provides powerful AI-driven assistance, but Copilot alone might not fully address your organization's unique workflows, data sources, or automation needs. By building agents, you can:

- **Extend Copilot's knowledge** by integrating third‑party systems and data sources.  
- **Automate complex, multi‑step workflows** across Microsoft 365 and external applications.  
- **Deliver tailored user experiences** that surface where your users work—in Teams chats, Outlook, SharePoint, or custom apps.  

Agents enable secure, real-time interactions between Copilot and other enterprise systems. Microsoft and its partners offer a variety of prebuilt agents. You can also build your own using both low-code and pro-code tools to fit your specific requirements.

For example, the [Sales Agent for Copilot](https://www.microsoft.com/microsoft-365/blog/2025/03/05/new-sales-agents-accessible-in-microsoft-365-copilot-help-teams-close-more-deals-faster/?msockid=3be55ff297446b3b1fdd4a4e93446d12) can automate lead management by turning contacts into sales leads within Dynamics or Salesforce, setting up meetings, and reaching out to customers, all while securely accessing Microsoft 365 and enterprise data to personalize interactions and drive business outcomes.

By developing agents for Microsoft 365 Copilot, organizations can securely utilize enterprise data, take actions across applications, and enhance productivity — all within the flow of Teams, Outlook, Copilot, or other Microsoft 365 applications.

## Agent core components

Agents consist of the following core components:

- **Knowledge:** Tailor the agent's responses by providing it with specialized instructions and data sources.
- **Actions:** Develop actions, triggers, and workflows that automate business processes.

Beyond these core components, additional layers enhance an agent's functionality:

- The **orchestrator** acts as the central engine that manages how the agent interacts with knowledge, skills, and autonomy.
- The **foundation models** power the agent's reasoning, language understanding, and response generation, forming the intelligence layer behind every interaction.
- The **user experience layer** ensures seamless interaction between users and agents by integrating agents into Microsoft 365 applications or external platforms for an intuitive and efficient workflow.

By combining these elements, agents provide a powerful way to extend Copilot to automate tasks, integrate data, and deliver intelligent, context-aware assistance.

## Declarative agents

Declarative agents enable you to configure Copilot for specific scenarios by adding custom instructions, additional knowledge, and actions to automate business processes. Because declarative agents use Copilot's AI infrastructure, model, and orchestrator, they adhere to the security, compliance, and Responsible AI (RAI) requirements for Microsoft 365. The following image shows the basic anatomy of a declarative agent.

:::image type="content" source="assets/images/agents-system-da.png" alt-text="Anatomy of a declarative agent. Declarative agents use Copilot's built-in orchestrator and foundation models, enabling integration of custom instructions, knowledge, and actions with minimal code for seamless experiences across Microsoft 365 apps." lightbox="assets/images/agents-system-da.png" border="false":::

To configure a declarative agent, you provide:

- **Custom instructions** to shape Copilot's responses to your organization's specific needs or workflow.
- **Custom knowledge** to connect Microsoft 365 data sources (such as Teams messages, Copilot connectors, SharePoint, and OneDrive) or external data via Microsoft 365 Copilot connectors.
- **Custom actions** to integrate with APIs to interact with external systems in real-time.

Declarative agents have the following characteristics:

- **Hosting:** Use Copilot's orchestrator and foundation model. No additional hosting is required.
- **Tooling:** Build agents using low-code tools such as [Copilot Studio agent builder](https://www.microsoft.com) or pro-code tools like Visual Studio or Visual Studio Code and Microsoft 365 Agents Toolkit.
- **Channels:** Run in Microsoft 365 Copilot and Microsoft 365 apps like Teams, Word, Excel, and Outlook.

## Enable feedback for your agent

You can help improve the performance an accuracy of your declarative agents by enabling the feedback settings across all Microsoft 365 apps. When you do so, users can rate the responses your agents generate and provide logs, screenshots, and contact email addresses when they submit their feedback.

The [TechExcel: Elevate your Copilot for M365 Technical Proficiency](https://microsoft.github.io/TechExcel-Elevate-your-Copilot-for-M365-technical-proficiency/) tutorial provides detailed instructions and practice labs for a wide range of Copilot development use cases. For information about how to enable feedback for your agents, see [Lab 2, Exercise 3: Enable feedback settings for the Microsoft 365 apps](https://microsoft.github.io/TechExcel-Elevate-your-Copilot-for-M365-technical-proficiency/docs/L2Ex03/Ex03.html). 


## Custom engine agents

Custom engine agents are fully customized AI assistants. They're useful for scenarios that require complex workflows, orchestration, or specific language models. Building a custom engine agent might require you to provide additional hosting for models and orchestrators and to ensure that your custom agent is compliant, secure, and adheres to [responsible AI (RAI) policies](/azure/well-architected/ai/responsible-ai). The following image shows the basic the anatomy of a custom engine agent.

:::image type="content" source="assets/images/agents-system-cea.png" alt-text="Anatomy of a custom engine agent. The diagram shows how orchestrators integrate foundation models with knowledge, skills, and autonomy to deliver user experiences and collaborate with other agents." lightbox="assets/images/agents-system-cea.png" border="false":::

To develop a custom engine agent, you need:

- **Custom orchestration** to take full control of workflows and integrate additional knowledge and external API calls. You can incorporate one or more language models to enhance functionality.
- **Custom models** to choose the most suitable model for your use case, whether foundation large language, small language, fine-tuned, or industry-specific models.
- **Autonomy and proactive agentic support** to programmatically initiate workflows and actions, enabling agents to operate independently, make decisions, and escalate tasks as needed.

Custom engine agents have the following characteristics:

- **Hosting:** Require additional hosting outside of Microsoft 365, typically with cloud services such as Azure, at an additional cost.
- **Tooling:** Orchestration can be built using low-code Copilot Studio or pro-code tools like Visual Studio, Visual Studio Code, and Teams Toolkit, using languages such as .NET, Python, and JavaScript, and frameworks like Semantic Kernel or LangChain.
- **Channels:** Can run in Microsoft 365 Copilot and Microsoft 365 apps like Teams, Word, Excel, and Outlook, as well as external apps and websites such as customer service portals or internal dashboards.
- **Collaboration:** Supports agent-to-agent communication, allowing agents to delegate tasks and coordinate workflows—extending Copilot's capabilities across multiple agents within an organization.

## Choose what type of agent to build

This section describes the features and scenarios for declarative and custom engine agents to help you decide which type of agent to build.

The following table summarizes the key differences between declarative agents and custom engine agents to help you choose the right option for your use case.

| Feature                   | Declarative agents                                                                                     | Custom engine agents                                                                                      |
|---------------------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Use case                  | Use Microsoft 365 Copilot for focused scenarios.                                                        | Use complex workflows or advanced integrations.                                                            |
| Sharing and access        | Designed to be used by individuals.                                                                     | Support both individual use and group collaboration.                                                       |
| Customization             | Limited to Copilot's orchestrator and models.                                                           | Fully customizable, including choice of AI models and orchestration.                                       |
| Proactive interactions    | Not supported; rely on user-initiated interactions.                                                     | Enable agents to trigger actions automatically, even without direct user input.                            |
| Channels                  | Integrated into Microsoft 365 apps.                                                                     | Available for Microsoft 365 and external apps.                                                             |
| Setup complexity          | Can be developed with low-code tools (Copilot Studio) and pro-code tools (Visual Studio Code/Teams Toolkit). | Varies from simple setups in Copilot Studio to advanced pro-code implementations using Visual Studio or VS Code. |
| Engine hosting            | Hosted in Microsoft 365.                                                                                | Hosted in Microsoft 365 with Copilot Studio or externally with custom solutions such as Azure AI.         |
| Deployment options        | Within my organization or publish in the commercial store for my customers (ISVs).                      | Within my organization or publish in the commercial store for my customers (ISVs).                         |
| Compliance and security   | Inherits Microsoft 365 compliance, RAI, and security standards                                           | Must ensure your own compliance, RAI practices, and security measures.                                     |

The following flow chart summarizes the decision process for choosing what type of agent to build.

:::image type="content" source="assets/images/cea-da-decision-guide.png" alt-text="A decision guide for choosing between declarative agents and custom engine agents." lightbox="assets/images/cea-da-decision-guide.png" border="false":::

**Build a declarative agent when:**

- You want your agent to work within Copilot's orchestration and language models to ensure consistency with security and compliance.
- You want a faster implementation or want to develop an agent with no or low-code using tools like [Copilot Studio](/microsoft-copilot-studio/) or you're a developer who prefers a streamlined experience with pro-code options like [Visual Studio](https://visualstudio.microsoft.com/) or [Teams Toolkit](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals).
- Your user's workflow is within Microsoft 365 apps (SharePoint, OneDrive, Teams) and they want to work within the context of these applications (via @mentions or in Teams business chats). For example, An IT helpdesk agent that responds to @mentions in Teams or a document summarization agent invoked in SharePoint.

**Build a custom engine agent when:**

- Your agent requires custom orchestration to handle complex workflows, specific business logic, precise decision-making rules, or multiple system integrations. For example, a financial loan approval agent may have specific business rules, precise data gathering requirements, and multiple credit check systems to evaluate a candidate's application.
- You want to use your own AI models or your agent might benefit from domain-specific models with specialized knowledge or multimodal models.
- You want to enable group productivity, where multiple users can collaborate with or benefit from the same agent in a Teams channel or meeting.
- You've built an existing conversational assistant outside of Copilot and want to integrate it with Microsoft 365 and Copilot.
- You want to make your agent available outside of Microsoft 365 and Copilot.
- You want to support proactive messaging, which enables developers to define workflows and trigger agent behavior without the need for user interaction.

### Cost considerations

Consider the cost implications of your agent solution design, from both the user and hosting perspectives. For more details, see [Cost considerations for Copilot extensibility](cost-considerations.md).

## Related content

- [Declarative agents overview](overview-declarative-agent.md)
- [Custom engine agents overview](overview-custom-engine-agent.md)
- [Cost considerations](cost-considerations.md)
- [Samples collection](Samples.md)
