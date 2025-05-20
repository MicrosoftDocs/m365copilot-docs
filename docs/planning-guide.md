---
title: Microsoft 365 Copilot Extensibility Planning Guide
description: Plan your Copilot extensibility journey by following the key steps and considerations.
author: jessicaaawu
ms.author: wujessica
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 05/19/2025
ms.custom: [copilot-learning-hub]
---

# Microsoft 365 Copilot extensibility planning guide

Microsoft 365 Copilot is an AI-powered productivity tool that combines knowledge and skills to assist users in the flow of their work. You can build extensibility solutions that tailor and enhance the Copilot experience for your users to meet your organization's unique business needs.

Planning is an important first step in designing and building your extensibility solution. This article provides the key steps to follow to help you plan your Copilot extensibility solution.

## Define your objectives

Before you design your Copilot extensibility solution, define the purpose and scope of what you plan to build. This involves the following steps:

- Identify the problem you're solving.
- Understand your target users.
- Define how your solution can address the business problem.

To start, define the specific challenge or productivity gap that you need to address. Identify the inefficiencies, pain points, or unmet needs that exist for your users. After you identify the problem that you need to solve, you can explore how to provide value by extending Copilot.

Next, consider what you know about your target users, and how you can help them with their productivity needs. Identify the user persona or personas you're targeting, and the outcomes you want to achieve for the organization. Consider the following questions:

- Will the number of potential users impact design choices, such as consumption costs?
- Do your users have Copilot licenses? If not, what are the adoption or licensing costs? For details, see [Consider costs](#consider-costs).

After you define the problem or business need that you need to address, identify how you can extend Copilot to solve or mitigate the problem. What do your users need Copilot to do? Use the information in the following table to guide your thinking.

| Business need | Copilot extensibility approach |
|:------------------|:---------|
| Improve decision-making, summarizations, or recommendations | Enhance Copilot's reasoning abilities. |
| Integrate organizational knowledge from databases, documents, or APIs | Enable Copilot to access and use external data. |
| Reduce manual tasks by building automated flows | Create automated workflows to streamline repetitive tasks. |
| Provide secure access to Copilot's capabilities within your own applications or custom agents | Access Copilot via Microsoft 365 Copilot APIs to ensure compliance and enterprise-grade security |

Also consider:

- Does the workflow involve **multiple steps or conditional decisions**? If so, design structured workflows or multi-step interactions for a smooth user experience.
- Does Copilot need to **dynamically adapt** to user inputs or changing contexts? If so, implement context-aware capabilities to adjust responses based on user needs in real-time.

## Define technical and data requirements

Determine the requirements that your extensibility solution needs to meet. Consider the following factors:

- **User experience requirements**

    Where will your users interact with Copilot? This might be within the context of Microsoft 365 apps (Copilot, Word, Excel, PowerPoint, Teams), or third-party apps or websites.

- **Data sources**

    Does Copilot or your solution require internal or external data, such as documents, applications, APIs, or databases? For example, do you need to:

  - Integrate external data into Microsoft 365 apps for contextually relevant responses?
  - Interact with real-time data for business workflows?
  - Interact with other applications to retrieve or update data, run commands, or trigger workflows?

- **Data source integration options**

    For each data source you need to integrate with Copilot, identify whether a Microsoft 365 Copilot connector (formerly Microsoft Graph connectors), [Power Platform plugin](/connectors/connector-reference/connector-reference-powerapps-connectors), or REST API is available. If an existing data source integration isn't available, decide whether you want to build a Copilot connector or an API to enable the integration. The following table provides an example.

    | Data source  | How do you want to use the data in Copilot?                                  | Data source integrations                |
    |--------------|----------------------------------------------------------------------------|------------------------------------------|
    | Salesforce   |<ul><li>As a knowledge source when asking questions about a customer.</li><li>To update opportunity details.</li></ul>           |<ul><li>Copilot connector</li><li>API or Power Platform Plugin</li></ul> |

- **Agentic and automation requirements**

    Identify triggers, scheduled workflows, and automation needs.

## Define your solution

Based on your assessment of your users' needs and the technical requirements for your solution, identify what type or types of Copilot extensibility options you'll build.

### Copilot connectors

Use Copilot connectors if you need Copilot to integrate external data into Microsoft 365 applications to provide contextually relevant responses. Depending on your scenario, you can choose to do one of the following:

- **Use prebuilt Copilot connectors**. Identify [prebuilt Copilot connectors](/microsoftsearch/pre-built-connectors-overview?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext) that you can configure in your tenant.
- **Build a custom Copilot connector**. If none of the existing connectors meet your needs, you can build your own. For more information, see [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md).

### Agents for Copilot

If Copilot connectors alone don't meet your needs, you can build an agent to tailor the Copilot experience for your business needs or to connect to your specific data sources.

If you decide to build an agent, you need to determine the following:

- The **type of agent** to build. Depending on your scenario, you might build a declarative agent or a custom engine agent.

  For information to help you choose the right type of agent to build, see [Your extensibility options for Microsoft 365 Copilot](agents-overview.md).

- Whether to use a **low-code or pro-code** approach to building your agent.

The following table lists the low-code and pro-code options that are available based on the type of agent you plan to build.

| Agent type        | Low-code tool options                                 | Pro-code tool options                                      |
|-------------------|--------------------------------------------------------|------------------------------------------------------------|
| Declarative agent | <ul><li>Copilot Studio agent builder</li><li>>Copilot Studio</li></ul>      | Visual Studio Code + Microsoft 365 Agents Toolkit ([an evolution of Teams Toolkit](https://aka.ms/M365AgentsToolkit))                          |
| Custom engine agent| Copilot Studio                                        | <ul><li>Visual Studio Code + Teams AI Library</li><li>Visual Studio Code + Microsoft 365 Agent SDK (Preview)</li><li>Visual Studio 2022</li><li>Semantic Kernel (optional)</li></ul> |

Next, identify the data sources or plugins your agent needs. Data sources might be Microsoft 365 data (Teams messages, email, people, SharePoint sites or folders), Copilot connectors (prebuilt or custom), or plugins (for real-time data access or external actions).

Finally, if your agent involves complex workflows, you might need a custom orchestrator. For information to help you design your solution, see [using Copilot Studio](/microsoft-copilot-studio/authoring-fundamentals), [Semantic Kernel](/semantic-kernel/overview/), or [LangChain](https://www.langchain.com/).

### Microsoft 365 Copilot APIs

If you want to integrate Copilot's capabilities into your custom application or agent, the [Microsoft 365 Copilot APIs](copilot-apis-overview.md) provide programmatic access to key features in Copilot, including:

- **Knowledge access** - Use the Retrieval API (available for public preview soon) and [AI Meeting Insights API](/microsoftteams/platform/graph-api/meeting-transcripts/meeting-insights) to securely access Microsoft 365 knowledge, including indexed enterprise data and AI-generated meeting content.

- **Conversational integration** - To embed Copilot-powered chat experiences into your own applications, the Copilot Chat API (available for public preview soon) allows you to send prompts and receive responses directly from Copilot.

- **Governance and insights** - If you're building a data governance solution—or looking to understand how users are interacting with Copilot—the [Copilot Interaction Export API](/microsoftteams/export-teams-content#microsoft-365-copilot-interactions--microsoft-365-chat-preview) allows you to export user prompts and responses. This can help you ensure compliance, monitor usage, and drive adoption strategies.

## Consider costs

Consider the cost implications of your solution design, from both the user and hosting perspectives. For more details, see [Cost considerations for Copilot Extensibility](cost-considerations.md).

## Address RAI and compliance considerations

Regardless of the solution you choose, you need to be sure that it meets RAI and compliance requirements. Consider the following:

- Does your Copilot extensibility solution require a specific LLM model or fine-tuning for specialized tasks, such as legal research or medical compliance? If so, for information about how to integrate the model with and optimize it for Copilot, see [How to Choose the Right Models for Your Apps | Azure AI](https://techcommunity.microsoft.com/blog/microsoftmechanicsblog/how-to-choose-the-right-models-for-your-apps--azure-ai/4271216?form=MG0AV3).
- Make sure that your solution applies [Responsible AI (RAI) principles](https://www.microsoft.com/ai/responsible-ai), data governance, and store publishing (for ISVs) requirements.

## Outline your development approach

After you choose your Copilot extensibility path, decide how you'll structure your development process. Choose the appropriate development tools, such as Teams Toolkit, Copilot Studio, Microsoft 365 Agents SDK or Azure AI based on your use case. To build your solution, start with a minimum viable product (MVP), and then refine based on feedback and performance.

The following table provides examples of extensibility solutions that use different Copilot extensibility options for various user scenarios.

| Extensibility type                         | Use case                        | Example                                                                 |
|-------------------------------------|---------------------------------|-------------------------------------------------------------------------|
| Copilot connector           | IT support assistant            | A global company integrates the ServiceNow connector to enhance IT support with Copilot. Employees use Copilot to search troubleshooting guides, check ticket statuses, and submit service requests. The connector pulls data from ServiceNow, enabling real-time access to knowledge base articles and IT tickets. This integration improves self-service capabilities, reduces resolution times, and enhances overall IT support efficiency. |
| Copilot connector           | Customer information integration | A sales team uses the Salesforce Copilot connector to improve customer retention and streamline workflows within Microsoft 365. Sales representatives can now quickly search and retrieve up-to-date customer data, such as Opportunities, Leads, and Accounts, directly from Copilot. With AI-assisted insights and recommendations, they can better personalize interactions and make informed decisions, boosting sales performance and reducing time spent switching between platforms. |
| Declarative agents + API plugin    | Healthcare compliance assistant | A hospital builds a declarative agent to assist medical staff in accessing compliance guidelines. The declarative agent pulls policies from SharePoint and uses an API plugin to retrieve real-time regulatory updates from government portals. |
| Declarative agent + API Plugin + Copilot connector | Project workflow optimizer  | A project management team creates an agent that integrates with GitHub and Jira to streamline workflows. The agent retrieves and updates Jira tickets, pulls GitHub PRs and code reviews, searches Teams chats and meeting notes, and uses Code Interpreter for project insights. It also suggests next steps and automates follow-ups to keep project managers informed and efficient. |
| Custom engine agents + API plugin  | Legal research AI               | A law firm creates a standalone AI agent using Azure OpenAI services. The agent uses a custom-trained LLM for case law analysis and integrates with external legal databases through API plugins. |
| Custom engine agent                | Manufacturing Predictive Maintenance Agent | A factory develops a custom engine agent that predicts machine failures. It collects sensor data from IoT devices, processes it with an LLM, and alerts engineers through Teams when anomalies are detected, enabling proactive maintenance and minimizing downtime. |
 Custom engine agent + Copilot APIs     | Consultant knowledge access    | A consulting firm builds a custom agent to help consultants prep for client meetings. The agent uses the Copilot Retrieval API to access up-to-date SharePoint data, ensuring secure, compliant information access that keeps client data isolated and protected. |

## Related content

- [Agents overview](agents-overview.md)
- [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md)
- [Set up your dev environment](prerequisites.md)
- [Choose your development tool](declarative-agent-tool-comparison.md)
- [Microsoft 365 Copilot APIs overview](copilot-apis-overview.md)
