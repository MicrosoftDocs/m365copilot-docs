---
title: Extend Microsoft 365 Copilot
description: Extend, enrich, and customize Microsoft 365 Copilot with external services, apps, and data
author: girliemac
ms.author: timura
ms.topic: overview
ms.date: 09/16/2024
ms.custom: [copilot-learning-hub]
---

# Extend Microsoft 365 Copilot

**Microsoft 365 Copilot** is an AI-powered productivity tool that keeps users in the flow of their work across Microsoft 365 applications like Outlook, Teams, and Word, grounding with Microsoft Graph data.

It offers *knowledge*, such as emails, chats, and documents that users have permission to access, and *skills*, such as understanding, summarizing, predicting, recalling, translating, and generating content.

:::image type="content" source="assets/images/anatomy-m365-copilot.png" alt-text="Visual representation of the Copilot for Microsoft 365 system: models, orchestrator, knowledge, skills, and UX" border="false":::

**Copilot extensibility** is the ability to customize and extend Microsoft 365 Copilot with additional knowledge and skills.

As a developer, you can extend Microsoft 365 Copilot to build **Copilot agents** to bring custom knowledge, skills, and process automation into Microsoft 365 Copilot, tailoring it to suit the unique needs of your customers.

Copilot agents are fundamentally composed of Custom Knowledge (via instructions and grounding data), Custom Skills (including Actions, Triggers, and Workflows), and Autonomy (including planning, learning, and escalation).

:::image type="content" source="assets/images/anatomy-agents.png" alt-text="Visual representation of the Copilot agents: models, orchestrator, knowledge, skills, anatomy, and UX" border="false":::

Additionally, IT Admins can configure appropriate Copilot connectors in [Microsoft 365 Admin Center](https://admin.microsoft.com) and [Power Platform Admin Center](https://admin.powerplatform.microsoft.com) to expand knowledge available to all users ​in their tenant, respecting data access limitations from the knowledge ​source itself.

:::image type="content" source="assets/images/skills-knowledge-chart.png" alt-text="Chart with organizational 'Knowledge' as the x-axis and user 'Skills' as the y-axis" border="false" lightbox="assets/images/skills-knowledge-chart.png":::

## Types of agents

Copilot agents can be built via a declarative or custom engine approach.

**Declarative agents** are essentially a collection of *custom knowledge* (via instructions and grounding data), and *custom skills* (including Actions, Triggers, and Workflows) hosted on top of Copilot orchestrator and foundation models powering a conversational experience. These agents can be integrated within Microsoft 365 and can utilize Copilot connectors to light up advanced functionality.​

On the other hand, **custom engine agents** are developed using custom foundation models and orchestrators and can be tailored to specific enterprise needs with your own stack. These include agents built with Copilot Studio, Teams AI library, Azure AI, etc. Custom agents work as standalone Teams apps, and in the future, as Copilot agents.

:::image type="content" source="assets/images/m365-extensibility-types.png" alt-text="This illustration shows types of extensibility options, Graph connector, plugins, and declarative agents" border="false" lightbox="assets/images/m365-extensibility-types.png":::

To find out which agents work the best for you, learn the differences at [Your agent options for Microsoft 365](decision-guide.md).

## Types of extensibility options

As you just learned, **declarative agents** comprise a collection of custom knowledge and custom skills. You can seamlessly integrate it within Microsoft 365 using Copilot connectors to unlock advanced functionality.

Declarative agents have:

- **Familiar user interface**, which look like and work like Microsoft Copilot
- **Domain-specific knowledge** applied for specific tasks, such as travel planner or nutrition assistant
- **Ability to integrate with plugins and connectors** to call specialized services and access domain expertise

📖 Learn more: [Declarative agents](overview-declarative-agent.md)

### Copilot connectors

Copilot connectors are building blocks of Copilot agents. They allow developers and IT admins to apply Custom Knowledge and to build Custom Skills and to Microsoft Copilot’s out-of-box features via Copilot agents. ​

There are two types of connectors—Microsoft **Graph connectors**, and **Power Platform connectors**.

#### Graph connectors

Graph connectors enable you to extend Microsoft Copilot by integrating external data sources into [Microsoft Graph](/graph/overview), enhancing Copilot's ability to reason over your enterprise content and provide more comprehensive responses. This integration allows Copilot to access and utilize a broader range of organizational knowledge.

With Graph connectors, you can:

- **Make the most of your external data** by giving Copilot the ability to access and summarize your diverse datasets from different sources, enabling more comprehensive insights
- **Use Copilot as a research aid**, letting Copilot find, summarize, and perform Q&A natively by using the dataset of your choice
- **Surface the intelligence of Copilot** in Microsoft Search, ContextIQ, and more to enhance the ways your users are already searching for answers

📖 Learn more: [Graph connectors overview](overview-graph-connector.md)

#### Power Platform connectors

Power Platform connectors are essential components that enable [Power Platform applications](https://www.microsoft.com/power-platform#products), such as Power Automate, Power Apps, and Logic Apps, to interact with external services and data sources. They also enhance the capabilities of Microsoft 365 Copilot by enabling it to integrate with a wide range of external services and data sources, perform custom actions, and access a broader range of data types.

Unlike Graph connectors, Power platform connectors are real-time data retrieval with read/write actions. For example, you can create a connector that allows your users to track an issue in real-time, also let them create actions, such as creating a ticket for the tracker.

📖 Learn more: [Connect and extend with Copilot Studio](/microsoft-copilot-studio/copilot-plugins-overview?context=/microsoft-365-copilot/extensibility/context)

### Plugins

Plugins are available as *actions* for declarative agents to interact with other systems to read or write information in near real-time.

- **Access real-time information** such as finding the latest news coverage on a product launch
- **Retrieve relational data** such as reporting on service tickets assigned to a given team member
- **Perform actions across apps** such as creating a new task in your organization's work tracking system

There are a few different ways to create plugins—**API plugins**, **Teams Message extensions**, and various **Copilot Studio Actions**.

📖 Learn more:
- Make an API into a Copilot plugin with [API plugins](overview-api-plugins.md)
- Teams [Message extensions](overview-message-extension-bot.md) are now work as plugins
- Create [Copilot Studio Actions](/microsoft-copilot-studio/copilot-plugins-overview?context=/microsoft-365-copilot/extensibility/context), if you prefer no-code/low-code

[!INCLUDE [disclaimer](includes/api-plugins-declarative-agents-only.md)]

## Copilot agent in-app experience

When you build Copilot agents, you can tailor the user experience by providing *In context* and *immersive* experiences.

- **In-context experience**: For example in Business Chat (BizChat), users can `@`-mention the agent and interact with it within the chat conversation with Microsoft 365 Copilot
- **Immersive experience**: This allows users to chat directly with the agent, providing an embedded experience

:::image type="content" source="assets/images/copilot-experiences.png" alt-text="This illustration shows two distinct copilot user experiences" border="false":::

To build **in-context experiences**, you can use plugins and declarative agents. *In-context* experiences bring additional information to the chat experience with Microsoft 365 Copilot, allowing it to reason over and provide responses in the context of the conversation. This also enables Microsoft 365 Copilot to interact with external systems. ​

To build an **immersive experience**, you use declarative agents. When a user activates a Copilot agent with an *immersive* experience, the conversation is a 1:1 interaction with the agent, tailored to its capabilities and scope.

## Extend Copilot for your scenario

Copilot extensibility helps your collaborative workspace to be more productive by bringing key information, common tools, and trusted processes to where people increasingly gather, learn, and work. Create something brand new for Copilot or integrate an existing app.

Here are some practical examples of what you can develop for your organization:

- **Issue tracking for engineering team**

    Take, for example, an engineering team that relies on project management software. You can build an agent that enables users to monitor open tickets. For instance, a user can request information on all issues assigned to them, and Copilot for Microsoft 365 can seamlessly retrieve and present this data from your plugin.

:::image type="content" source="assets/images/copilot-scenario-01.png" alt-text="This illustration shows an agent scenario where an engineer asks to show all open tickets for him" border="false":::

- **Product inventory for E-commerce**

    If your business operates in the realm of commerce, you can build an internal inventory agent by connecting it to your product database. For example, a user can ask Copilot to verify the availability of specific items, streamlining your internal processes.

- **Enterprise knowledge sharing**

    Consider a multinational corporation with a wealth of knowledge and insights stored in various formats, including documents, emails, and chat transcripts, that are spread across multiple systems. Microsoft Graph connectors can facilitate the consolidation of this data, making it searchable from a single, unified interface. This ensures that your organization's collective wisdom is readily accessible.

:::image type="content" source="assets/images/personas-extend-copilot.png" border="false" alt-text="Persona 1 - I am a developer, who manages the product database at an e-commerce company, and I want to build an inventory catalog agent that brings the product information for internal org. Persona 2 - I am a marketing manager, who aims to launch a new campaign for my products. And I want a tool that helps developing marketing assets tailored to the campaign." lightbox="assets/images/personas-extend-copilot.png":::

## Next step

Learn more about the two main paths for AI-driven business transformation: extending Microsoft 365 Copilot and building custom AI solutions from the ground up.

> [!div class="nextstepaction"]
> [Frequently asked questions](faq.md)

If you're ready to extend Copilot for Microsoft 365, learn more about your extensibility options.

> [!div class="nextstepaction"]
> [Choose your Copilot extensibility path](decision-guide.md)
