---
title: Microsoft 365 Copilot Extensibility Planning Guide
description: This guide helps developers plan their Copilot extensibility journey with key considerations and steps.
author: jessicaaawu
ms.author: wujessica
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 3/24/2025
ms.custom: [copilot-learning-hub]
---

# Copilot extensibility planning guide

Microsoft 365 Copilot is an AI-powered productivity tool. You can build extensibility solutions that tailor and enhance the Copilot experience for your users to meet your organization’s unique business needs. This article provides the key steps to follow to help you plan your Copilot extensibility solution.

## Define your objectives

Before you start to build your Copilot extensibility solution, define the purpose and scope of your solution. This involves identifying the problem you’re solving, understanding your target users and mapping out relevant user scenarios.

### Identify the problem

Start by defining the specific challenge or productivity gap your solution addresses. Clearly articulate what inefficiencies, pain points, or unmet needs exist. Once the problem is defined, you can explore how Copilot can provide value.

### Identify your users

Who experiences the problem that you defined above, and how will your solution help them? What is the persona or personas of your target user, and what outcomes will be achieved for the user and the organization?

Consider:

- Will the number of users impact design choices, such as consumption costs?
- Do your users have Copilot licenses? If not, what are the adoption or cost considerations? See more in [cost considerations](#cost-considerations) below.

### Define your approach

Identify how your solution addresses the identified problem for your users. Specifically, what do your users need Copilot to do?

- Improve decision-making, summarizations, or recommendations? You might want to enhance Copilot’s reasoning abilities.
- Integrate organizational knowledge from databases, documents, or APIs? You might want to enable Copilot to access and use external data effectively.
- Reduce manual tasks by building automated flows? You might want to create automated workflows to streamline repetitive tasks.

### Define user prompts and interactions

Define the prompts and interactions users will use to engage with Copilot or the agent.

Consider:

- Does the workflow involve **multiple steps or conditional decisions**? You may want to design structured workflows or multi-step interactions for a smooth user experience.
- Does Copilot need to **dynamically adapt** to user inputs or changing contexts? You may want to implement context-aware capabilities to adjust responses based on user needs in real-time.

## Define technical and data requirements

Determine the requirements that your extensibility solution needs to meet.

Consider the following factors:

- **User experience requirements**
Where will your users interact with Copilot? This might be within the context of Microsoft 365 apps (Copilot, Word, Excel, PowerPoint, Teams), or in third-party apps or websites.

- **Data sources**
Does Copilot or your solution require internal or external data, such as documents, applications, APIs, or databases? For example:
  - Do you need to integrate external data into Microsoft 365 apps for contextually relevant responses?
  - Do you need to interact with real-time data for business workflows?
  - Do you need to interact with other applications to retrieve/update data, run commands, or trigger workflows?

- **Data source integration options**
For each data source you need to integrate with Copilot, identify whether a Microsoft Graph connector, [Power Platform plugin](/connectors/connector-reference/connector-reference-powerapps-connectors), or REST API is already available. If an existing data source integration isn’t available, decide whether you want to build a Microsoft Graph connector or an API to enable the integration. For example:

| Data Source  | How do you want to use the data in Copilot?                                  | Data Source Integrations                |
|--------------|----------------------------------------------------------------------------|------------------------------------------|
| Salesforce   | • As a knowledge source when asking questions about a customer.<br>• To update opportunity details.             | • Microsoft Graph connector<br>• API or Power Platform Plugin |

- **Agentic and automation requirements**
Identify triggers, scheduled workflows, and automation needs.

## Define your solution

Based on your assessment of your users’ needs and the technical requirements for your solution, identify what type or types of Copilot extensibility options you'll build.

### Microsoft Graph connectors

Use Microsoft Graph connectors if you need Copilot to integrate external data into Microsoft 365 applications to provide contextually relevant responses. Depending on your scenario, you can choose one of the following:

- **Use prebuilt Microsoft Graph connectors**: Identify [prebuilt Microsoft Graph connectors](/microsoftsearch/pre-built-connectors-overview?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext) that you can configure in your tenant.
- **Build a custom Microsoft Graph connector**: If no existing connector meets your needs, you can build your own. For more information, see [Build Microsoft Graph connectors for Microsoft 365 Copilot](overview-graph-connector.md).

### Copilot Agent
If Graph connectors alone don’t meet your needs, consider building a Copilot agent to tailor the Copilot experience for your business needs or to connect to your specific data sources.

If you decide to build an agent to extend Copilot, you also need to decide the following:

- **Choose the type of agent**:  
  Choose whether to build a declarative agent or a custom engine agent. For information to help you choose the right type of agent to build, see [Your extensibility options for Microsoft 365 Copilot](decision-guide.md).

- **Select your development approach**:  
  Decide whether to use a low-code or a pro-code approach to building your agent. The following table lists the low-code and pro-code development options for each type of agent.

| Agent Type        | Low-code Tool Options                                 | Pro-code Tool Options                                      |
|-------------------|--------------------------------------------------------|------------------------------------------------------------|
| Declarative Agent | • Copilot Studio agent builder<br>• Copilot Studio      | Visual Studio Code + Teams Toolkit                          |
| Custom Engine Agent| Copilot Studio                                        | • Visual Studio Code + Teams AI Library<br>• Visual Studio Code + Microsoft 365 Agent SDK (Preview)<br>• Visual Studio 2022<br>• (optionally Semantic Kernel) |

- **Define your data sources**:  
  Identify the data sources or plugins your agent needs. Data sources might be Microsoft 365 data (e.g., Teams messages, Mail, People, SharePoint sites, or folders), Microsoft Graph connectors (prebuilt or custom), or plugins (for real-time data access or external actions). For more information, see the [Microsoft Graph connectors gallery](/microsoftsearch/connectors-gallery).

- **Decide if you need a custom orchestrator**:  
  If your agent involves complex workflows, you might need a custom orchestrator. For information to help you design your solution, see [using Copilot Studio](/microsoft-copilot-studio/authoring-fundamentals), [Semantic Kernel](/semantic-kernel/overview/), or [LangChain](https://www.langchain.com/).

### Cost considerations

Consider the cost implications of your solution design, from both the user and the hosting perspective.

#### User License and Consumption Costs

When designing an agent for Microsoft 365 Copilot, it's important to understand access and usage costs. Users can either access agents through a license or pay per use. Your agent will be available to users in one of three ways:

- **M365 Copilot add-on user license:** Best for high-usage users (requires additional purchase).
- **M365 Copilot Chat license:** Included at no extra cost for eligible Microsoft 365 users ([see eligibility](/copilot/manage#microsoft-365--chat-eligibility)); ideal for occasional use.
- **No license:** Available for guests or external users with metered consumption costs.

For more information, see [License options for Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-licensing).

| License Type                | Cost                               | Best For                        | Agent Consumption Costs                                           |
|-----------------------------|------------------------------------|---------------------------------|-------------------------------------------------------------------|
| Microsoft 365 Copilot User license   | Add-on license required            | Regular to high-usage users    | No additional costs                                                |
| Microsoft 365 Copilot Chat license   | No additional costs for [eligible Microsoft 365 users](/copilot/microsoft-365/microsoft-365-copilot-licensing) | Occasional users              | No cost for instruction/public website grounding; metered charges for shared tenant data (e.g., SharePoint, Microsoft Graph Connectors) |
| No license                  | Pay-per-use                        | Guest or external users        | Metered consumption charges                                       |

For more information, see [Agents for Microsoft 365 Copilot Chat](/copilot/agents#enable-agents) and [Agent capabilities for Microsoft 365 users](prerequisites.md#agent-capabilities-for-microsoft-365-users).

#### Hosting Costs

Declarative agents are surfaced in Microsoft 365 at no additional cost. Hosting costs for custom engine agents depend on your architecture and your use of AI models and cloud services.

## Address AI and compliance considerations

Whatever solution you choose, you need to consider AI and compliance. Consider the following:

- Does your Copilot extensibility solution require a specific LLM model or fine-tuning for specialized tasks, such as legal research or medical compliance? If so, for information about how to integrate the model with and optimize it for Copilot, see [How to Choose the Right Models for Your Apps | Azure AI](https://techcommunity.microsoft.com/blog/microsoftmechanicsblog/how-to-choose-the-right-models-for-your-apps--azure-ai/4271216?form=MG0AV3).
- Make sure that your solution applies [Responsible AI (RAI) principles](https://www.microsoft.com/en-us/ai/responsible-ai), data governance, and store publishing (for ISVs) requirements.

## Outline your development approach

After you choose your Copilot extensibility path, decide how you'll structure your development process. Choose the appropriate development tools, such as Teams Toolkit, Copilot Studio, or Azure AI based on your use case.

To build your solution, start with a minimum viable product (MVP), and then refine based on feedback and performance.
The following table provides examples of extensibility solutions that use different Copilot extensibility options for various user scenarios.

The following table provides examples of extensibility solutions that use different Copilot extensibility options for various user scenarios.

| Technology                         | Use Case                        | Example                                                                 |
|-------------------------------------|---------------------------------|-------------------------------------------------------------------------|
| Microsoft Graph connector           | IT support assistant            | A global company integrates the ServiceNow connector to enhance IT support with Copilot. Employees use Copilot to search troubleshooting guides, check ticket statuses, and submit service requests. The connector pulls data from ServiceNow, enabling real-time access to knowledge base articles and IT tickets. This integration improves self-service capabilities, reduces resolution times, and enhances overall IT support efficiency. |
| Microsoft Graph connector           | Customer information integration | A sales team uses the Salesforce Microsoft Graph connector to improve customer retention and streamline workflows within Microsoft 365. Sales representatives can now quickly search and retrieve up-to-date customer data, such as Opportunities, Leads, and Accounts, directly from Copilot. With AI-assisted insights and recommendations, they can better personalize interactions and make informed decisions, boosting sales performance and reducing time spent switching between platforms. |
| Declarative agents + API plugin    | Healthcare compliance assistant | A hospital builds a declarative agent to assist medical staff in accessing compliance guidelines. The declarative agent pulls policies from SharePoint and uses an API plugin to retrieve real-time regulatory updates from government portals. |
| Declarative agent + API Plugin + Microsoft Graph connector | Project workflow optimizer  | A project management team creates a Copilot agent that integrates with GitHub and Jira to streamline workflows. The agent retrieves and updates Jira tickets, pulls GitHub PRs and code reviews, searches Teams chats and meeting notes, and uses Code Interpreter for project insights. It also suggests next steps and automates follow-ups to keep project managers informed and efficient. |
| Custom engine agents + API plugin  | Legal research AI               | A law firm creates a standalone AI agent using Azure OpenAI services. The agent uses a custom-trained LLM for case law analysis and integrates with external legal databases through API plugins. |
| Custom engine agent                | Manufacturing Predictive Maintenance Agent | A factory develops a custom engine agent that predicts machine failures. It collects sensor data from IoT devices, processes it with an LLM, and alerts engineers through Teams when anomalies are detected, enabling proactive maintenance and minimizing downtime. |

## Related content

- [Agents overview](decision-guide.md)
- [Microsoft Graph connectors overview](overview-graph-connector.md)
- [Set up your dev environment](prerequisites.md)
