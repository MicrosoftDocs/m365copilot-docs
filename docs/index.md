---
title: Extend Microsoft 365 Copilot
description: Extend, enrich, and customize Microsoft 365 Copilot with external services, apps, and data.
author: girliemac
ms.author: timura
ms.topic: overview
ms.date: 10/08/2024
ms.custom: [copilot-learning-hub]
---

# Microsoft 365 Copilot extensibility overview

Microsoft 365 Copilot is an AI-powered productivity tool that keeps users in the flow of their work across Microsoft 365 applications like Outlook, Teams, and Word, grounded in data from Microsoft Graph.

It offers *knowledge*, such as emails, chats, and documents that users have permission to access, and *skills*, such as understanding, summarizing, predicting, recalling, translating, and generating content.

:::image type="content" source="assets/images/anatomy-m365-copilot.png" alt-text="Visual representation of the Microsoft 365 Copilot system: models, orchestrator, knowledge, skills, and UX" border="false":::

As a developer, you can customize and extend Microsoft 365 Copilot with additional knowledge and skills by building *Copilot agents*. With Copilot agents, you can bring custom knowledge, skills, and process automation into Microsoft 365 Copilot, tailoring it to suit the unique needs of your customers.

## What are Copilot agents?

Copilot agents are scoped versions of Microsoft 365 Copilot that act as AI assistants to automate and run business processes. Copilot agents enable customers to bring custom knowledge, skills, and process automation into Microsoft 365 Copilot for their specific needs. You can optimize Copilot agents for specific tasks, such as retrieving information, summarizing data, and taking actions like sending emails or updating records. 

Copilot agents include the following components:

- Custom knowledge (via instructions and grounding data)
- Custom skills (including actions, triggers, and workflows) 
- Autonomy (including planning, learning, and escalation)

:::image type="content" source="assets/images/anatomy-agents.png" alt-text="Visual representation of the Copilot agents: models, orchestrator, knowledge, skills, anatomy, and UX" border="false":::


Agents can be customized to meet specific business needs, such as human resources, analytics, project management, legal, image creation, and more. The following practical examples illustrate the types of agents you can develop for your organization.

- **Project management agent for engineering team**

    If your engineering team relies on project management software, you can build an agent that enables users to monitor open tickets. For example, a user can request information about all issues assigned to them, and your agent can seamlessly retrieve and present this data from your API.

- **Product inventory agent for e-commerce**

    If your business operates in the realm of commerce, you can build an internal inventory agent by connecting it to your product database. For example, a user can ask Microsoft 365 Copilot to verify the availability of specific items, streamlining your internal processes.

- **Image creation agent for marketing campaign**

   If you need images for your marketing campaign, you can create an agent that develops marketing assets specifically tailored to your campaign.

## Copilot extensibility options

You can build Copilot agents by using either a declarative or custom engine approach. This gives you, as a developer, the flexibility to choose how you want to build your agents, while providing the same experience to users.

**Declarative agents** are a collection of *custom knowledge* (via instructions and grounding data), and *custom skills* (including actions, triggers, and workflows) hosted on the Microsoft 365 Copilot orchestrator and foundation models to power a conversational experience. These agents can be integrated within Microsoft 365 and can use Copilot connectors and plugins to light up advanced functionality.​

**Custom engine agents** are developed using custom foundation models and orchestrators and can be tailored to specific enterprise needs with your own stack. These include agents built with Copilot Studio, Teams AI library, or Azure AI. Custom engine agents currently work as standalone Teams apps.

:::image type="content" source="assets/images/m365-extensibility-types.png" alt-text="This illustration declarative agents comprised of connectors and plugins, and custom engine agents" border="false" lightbox="assets/images/m365-extensibility-types.png":::

You can add knowledge and skills to Copilot agents via Copilot connectors and plugins.

:::image type="content" source="assets/images/skills-knowledge-chart.png" alt-text="Chart with organizational 'Knowledge' as the x-axis and user 'Skills' as the y-axis" border="false" lightbox="assets/images/skills-knowledge-chart.png":::

For more information about the two approaches to building agents, see [Your agent options for Microsoft 365](decision-guide.md).

### Copilot connectors

Copilot connectors are building blocks that enable you to add custom knowledge and custom skills to Copilot agents. You can extend your Copilot agents via the following types of Copilot connectors:

- Microsoft Graph connectors
- Power Platform connectors

IT Admins can configure appropriate Copilot connectors in [Microsoft 365 Admin Center](https://admin.microsoft.com) and [Power Platform Admin Center](https://admin.powerplatform.microsoft.com) to expand the knowledge available to all users ​in their tenant, while respecting data access limitations from the knowledge ​source itself.

#### Microsoft Graph connectors

Microsoft Graph connectors enable you to extend Microsoft 365 Copilot by integrating external data sources into [Microsoft Graph](/graph/overview), enhancing Copilot's ability to reason over your enterprise content and provide more comprehensive responses. This integration allows Copilot to access and utilize a broader range of organizational knowledge.

With Microsoft Graph connectors, you can:

- **Make the most of your external data** by giving Copilot the ability to access and summarize your diverse datasets from different sources, enabling more comprehensive insights.
- **Use Copilot as a research aid** to find, summarize, and perform Q&A natively by using the dataset of your choice.
- **Surface the intelligence of Copilot** in Microsoft Search, ContextIQ, and more to enhance the ways your users are already searching for answers.

For more information, see [Microsoft Graph connectors overview](overview-graph-connector.md).

#### Power Platform connectors

Power Platform connectors are essential components that enable [Power Platform applications](https://www.microsoft.com/power-platform#products), such as Power Automate, Power Apps, and Logic Apps, to interact with external services and data sources. They also enhance the capabilities of Microsoft 365 Copilot by enabling it to integrate with a wide range of external services and data sources, perform custom actions, and access a broader range of data types.

Unlike Microsoft Graph connectors, Power Platform connectors provide real-time data retrieval with read/write actions. For example, you can create a connector that allows your users to track an issue in real time and create actions, such as creating a ticket for the tracker.

For more information, see [Copilot connectors and actions](/microsoft-copilot-studio/copilot-plugins-overview?context=/microsoft-365-copilot/extensibility/context).

### Plugins

Plugins are available as *actions* for declarative agents to interact with other systems to read or write information in near real-time. Use plugins to:

- **Access real-time information** such as the latest news coverage for a product launch.
- **Retrieve relational data** such as reporting on service tickets assigned to a given team member.
- **Perform actions across apps** such as creating a new task in your organization's work tracking system.

You can create the following types of plugins:

- [API plugins](overview-api-plugins.md)
- [Teams message extensions](overview-message-extension-bot.md)
- [Copilot Studio actions](/microsoft-copilot-studio/copilot-plugins-overview?context=/microsoft-365-copilot/extensibility/context)

## Related content

- [Your Copilot agent options for Microsoft 365](decision-guide.md)
- [Declarative agents overview](overview-declarative-agent.md)
- [Custom engine agent overview](overview-custom-engine-agent.md)
