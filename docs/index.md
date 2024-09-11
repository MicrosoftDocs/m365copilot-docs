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

**Microsoft 365 Copilot** is an AI-powered productivity tool that keeps users in the flow of their work across Microsoft 365 applications like Outlook, Teams, and Word, using Microsoft Graph data.

It offers *knowledge*, such as emails, chats, and documents that users have permission to access, and *skills*, such as understanding, summarizing, predicting, recalling, translating, and generating content. 

:::image type="content" source="assets/images/copilot-system.png" alt-text="Visual representation of the Copilot for Microsoft 365 system: models, orchestrator, knowledge, skills, and UX" border="false":::

**Copilot extensibility** is the ability to customize and extend Microsoft 365 Copilot with additional knowledge and skills, including from other copilots. As a developer, you can extend Microsoft 365 Copilot with **Copilot extensions** to suit the unique needs of your customers.

Additionally, IT Admins can configure appropriate Copilot connectors in [Microsoft 365 Admin Center](https://admin.microsoft.com) and [Power Platform Admin Center](https://admin.powerplatform.microsoft.com) to expand knowledge available to all users ​in their tenant, respecting data access limitations from the knowledge ​source itself.

:::image type="content" source="assets/images/skills-knowledge-chart.png" alt-text="Chart with organizational 'Knowledge' as the x-axis and user 'Skills' as the y-axis showing that you can extend Copilot skills with plugins and extend Copilot knowledge with Graph connectors" border="false" lightbox="assets/images/skills-knowledge-chart.png":::

## Types of copilots

**Copilots** are intelligent AI assistants that use generative AI to help people achieve more, for examples, helping with creative tasks, generate insights, and execute automated workflows.

There are two types of copilots you can build—Declarative copilots and custom copilots.

**Declarative copilots**, also commonly known as **Copilot extensions**, in the end-user Copilot experience, are essentially a collection of *Custom Knowledge* (via instructions and grounding data), and *Custom Skills* (including Actions, Triggers, and Workflows) hosted on top of Copilot orchestrator and foundation models powering a conversational experience. These copilots can be integrated within Microsoft 365 and can utilize Copilot connectors to light up advanced functionality.​

On the other hand, **Custom copilots** are developed using custom foundation models and orchestrators and can be tailored to specific enterprise needs with your own stack. These include copilots built with Copilot Studio, Teams AI library, Azure AI, etc. Custom copilots currently work as standalone, Teams apps and, in the future, as Copilot extension experiences.

:::image type="content" source="assets/images/m365-extensibility-types.png" alt-text="This illustration shows types of extensibility options, Graph connector, plugins, and declarative copilots" border="true" lightbox="assets/images/m365-extensibility-types.png":::

To find out which copilots work the best for you, learn the differences at [Your copilot options for Microsoft 365](decision-guide.md).

## Types of Microsoft 365 Copilot extensibility

There are multiple ways to extend Microsoft 365 Copilot:

### Declarative copilots 

As you learned earlier, a declarative copilot comprises a collection of Custom Knowledge and Custom Skills. You can seamlessly integrate it within Microsoft 365 using Copilot connectors to unlock advanced functionality.

Declarative copilots have:

- **Familiar user interface** with Copilot for Microsoft 365
- **Domain-specific knowledge** applied for specific tasks, such as travel planner or nutrition assistant
- **Ability to integrate with plugins and connectors** to call specialized services and access domain expertise

📖 Learn more: [declarative copilots](overview-declarative-copilot.md)

### Copilot connectors

Copilot connectors are building blocks of Copilot extensions. They allow developers and IT admins to apply Custom Knowledge and to build Custom Skills and to Microsoft Copilot’s out-of-box features via Copilot extensions. ​

There are two types of connectors—Microsoft **Graph connectors**, and **Power Platform connectors**.

#### Graph connectors

Graph connectors enable you to extend Microsoft Copilot by integrating external data sources into [Microsoft Graph](/graph/overview), enhancing Copilot's ability to reason over your enterprise content and provide more comprehensive responses. This integration allows Copilot to access and utilize a broader range of organizational knowledge.

With Graph connectors, you can:

- **Make the most of your external data** by giving Copilot the ability to access and summarize your diverse datasets from different sources, enabling more comprehensive insights
- **Use Copilot as a research aid**, letting Copilot find, summarize, and perform Q&A natively by using the dataset of your choice
- **Surface the intelligence of Copilot** in Microsoft Search, ContextIQ, and more to enhance the ways your users are already searching for answers

There are three main steps to set up a Graph connector: (1) Create a connection, (2) Register your schema, and then (3) Ingest your content to the Microsoft Graph. 

📖 Learn more: [Graph connectors overview](overview-graph-connector.md)

#### Power Platform connectors

Power Platform connectors are essential components that enable [Power Platform applications](https://www.microsoft.com/power-platform#products), such as Power Automate, Power Apps, and Logic Apps, to interact with external services and data sources. They also enhance the capabilities of Microsoft 365 Copilot by enabling it to integrate with a wide range of external services and data sources, perform custom actions, and access a broader range of data types.

Unlike Graph connectors, Power platform connectors are real-time data retrieval with read/write actions. For example, you can create a connector that allows your users to track an issue in real-time, also let them create actions, such as creating a ticket for the tracker. 

📖 Learn more: [Connect and extend with Copilot Studio](/microsoft-copilot-studio/copilot-plugins-overview?context=/microsoft-365-copilot/extensibility/context)

### Plugins

Plugins enable copilots to interact with other systems to read or write information in near real time. With plugins, you can:

- **Access real-time information** such as finding the latest news coverage on a product launch
- **Retrieve relational data** such as reporting on service tickets assigned to a given team member
- **Perform actions across apps** such as creating a new task in your organization's work tracking system

There are a few different ways to create plugins—**API plugins**, **Teams Message extensions**, and various **Copilot Studio Actions**.

📖 Learn more:
- Make an API into a Copilot plugin with [API plugins](overview-api-plugins.md)
- Teams [Message extensions](overview-message-extension-bot.md) are now work as plugins
- Create [Copilot Studio Actions](/microsoft-copilot-studio/copilot-plugins-overview?context=/microsoft-365-copilot/extensibility/context), if you prefer no-code/low-code

[!INCLUDE [disclaimer](includes/api-plugins-dc-only.md)]

## Copilot extension user-experience

As a developer, you can extend Microsoft 365 Copilot by building Copilot extensions to tailor the user experience. When building Copilot extensions, you can provide *In context* and *immersive* experiences.

- **In-context experience**: where users can `@`-mention the extension and interact with it within the chat conversation with Microsoft 365 Copilot
- **Immersive experience**: allows users to chat directly with the extension, providing an embedded experience

:::image type="content" source="assets/images/copilot-experiences.png" alt-text="This illustration shows two distinct copilot user experiences" border="false":::

To build **in-context experiences**, you can use plugins and declarative copilots. *In-context* experiences bring additional information to the chat experience with Microsoft 365 Copilot, allowing it to reason over and provide responses in the context of the conversation. This also enables Microsoft 365 Copilot to interact with external systems. ​

To build an **immersive experience**, you use Declarative copilots. When a user activates a Copilot extension with an *immersive* experience, the conversation is a 1:1 interaction with the extension, tailored to its capabilities and scope.

## Extend Copilot for your scenario

Copilot extensibility helps your collaborative workspace to be more productive by bringing key information, common tools, and trusted processes to where people increasingly gather, learn, and work. Create something brand new for Copilot or integrate an existing app.

Here are some practical examples of what you can develop for your organization:

- **Issue tracking for engineering team**

    Take, for example, an engineering team that relies on project management software. You can build a custom tool that enables users to monitor open tickets. For instance, a user can request information on all issues assigned to them, and Copilot for Microsoft 365 can seamlessly retrieve and present this data from your plugin.

:::image type="content" source="assets/images/copilot-scenario-01.png" alt-text="This illustration shows a plugin scenario where an engineer asks to show all open tickets for him" border="false":::

- **Product inventory for E-commerce**

    If your business operates in the realm of commerce, you can build an internal inventory tool by connecting it to your product database. For example, a user can ask Copilot to verify the availability of specific items, streamlining your internal processes.

- **Enterprise knowledge sharing**

    Consider a multinational corporation with a wealth of knowledge and insights stored in various formats, including documents, emails, and chat transcripts, that are spread across multiple systems. Microsoft Graph connectors can facilitate the consolidation of this data, making it searchable from a single, unified interface. This ensures that your organization's collective wisdom is readily accessible.

:::image type="content" source="assets/images/personas-extend-copilot.png" border="false" alt-text="Persona 1 - I am a developer, who manages the product database at an e-commerce company, and I want to build an inventory catalog plugin that brings the product information for internal org. Persona 2 - I am a marketing manager, who aims to launch a new campaign for my products. And I want a tool that helps developing marketing assets tailored to the campaign." lightbox="assets/images/personas-extend-copilot.png":::

## Next step

Learn more about the two main paths for AI-driven business transformation: extending Copilot for Microsoft 365 and building custom AI solutions from the ground up.

> [!div class="nextstepaction"]
> [Frequently asked questions](faq.md)

If you're ready to extend Copilot for Microsoft 365, learn more about your extensibility options.

> [!div class="nextstepaction"]
> [Choose your Copilot extensibility path](decision-guide.md)