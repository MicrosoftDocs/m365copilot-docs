---
title: Extend Microsoft 365 Copilot 
description: Extend, enrich, and customize Microsoft 365 Copilot with external services, apps, and data
author: girliemac
ms.author: timura
ms.topic: overview
ms.date: 08/14/2024
---

# Extend Microsoft 365 Copilot

**Microsoft 365 Copilot** is a powerful productivity tool that keeps users in the flow of their work across Microsoft 365 applications like Outlook, Teams, and Word, leveraging Microsoft Graph data. It offers *skills* such as understanding, summarizing, predicting, recalling, translating, and generating content. By indexing content in the Microsoft Graph, it draws from your organization's *knowledge*, including emails, chats, and documents that users have permission to access.

:::image type="content" source="assets/images/copilot-system.png" alt-text="Visual representation of the Copilot for Microsoft 365 system: Foundational models (LLMs) + Microsoft Graph (your data) + Microsoft 365 and 3rd party apps" border="false":::

As a developer, you can extend, enrich, and customize [Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-overview) to suit the unique needs of your customers.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

Business workflows often involve more than just Microsoft 365 applications and data formats. Copilot's extensibility allows developers to integrate additional knowledge and skills, including those from other copilots. IT Admins can also configure Copilot connectors in the Microsoft 365 Admin Center to expand the knowledge available to all users in their tenant, while respecting data access limitations.

:::image type="content" source="assets/images/skills-knowledge-chart.png" alt-text="Chart with organizational 'Knowledge' as the x-axis and user 'Skills' as the y-axis showing that you can extend Copilot skills with plugins and extend Copilot knowledge with Graph connectors" border="false" lightbox="assets/images/skills-knowledge-chart.png":::

## Extend Copilot for your scenario

Copilot extensibility helps your collaborative workspace to be more productive by bringing key information, common tools, and trusted processes to where people increasingly gather, learn, and work. Create something brand new for Copilot or integrate an existing app.

Here are some practical examples of what you can develop for your organization:

- **Issue tracking for engineering team**

    Take for example an engineering team that relies on project management software. You can build a custom tool that enables users to monitor open tickets. For instance, a user can request information on all issues assigned to them, and Copilot for Microsoft 365 can seamlessly retrieve and present this data from your plugin.

:::image type="content" source="assets/images/copilot-scenario-01.png" alt-text="This illustration shows a plugin scenario where an engineer asks to show all open tickets for him" border="false":::

- **Product inventory for E-commerce**

    If your business operates in the realm of commerce, you can build an internal inventory tool by connecting it to your product database. For example, a user can ask Copilot to verify the availability of specific items, streamlining your internal processes.

- **Enterprise knowledge sharing**

    Consider a multinational corporation with a wealth of knowledge and insights stored in various formats, including documents, emails, and chat transcripts, that are spread across multiple systems. Microsoft Graph connectors can facilitate the consolidation of this data, making it searchable from a single, unified interface. This ensures that your organization's collective wisdom is readily accessible.

:::image type="content" source="assets/images/personas-extend-copilot.png" border="false" alt-text="Persona 1 - I am a developer, who manages the product database at an e-commerce company, and I want to build an inventory catalog plugin that brings the product information for internal org. Persona 2 - I am a marketing manager, who aims to launch a new campaign for my products. And I want a tool that helps developing marketing assets specifically tailored to the campaign." lightbox="assets/images/personas-extend-copilot.png":::


## Types of Microsoft 365 Copilot extensions

There are multiple types of extensions and ways to extend Microsoft 365 Copilot.

:::image type="content" source="assets/images/m365-extensibility-types.png" alt-text="This illustration shows types of extensibility options, Graph connector, plugins, and declarative copilots" border="true" lightbox="assets/images/m365-extensibility-types.png":::

### Declarative copilots 

Declarative copilots are essentially a collection of *Custom Knowledge* (via instructions and grounding data), and *Custom Skills* (including Actions, Triggers and Workflows) on top of M365 Copilot orchestrator and foundation models. Declarative copilots provide you with more tailoring, tuning, and control of the user experience. 

Declarative copilots have:

- **Familiar user interface** with Copilot for Microsoft 365
- **Domain-specific knowledge** applied for specific tasks, such as travel planner or nutrition assistant
- **Ability to integrate with plugins and connectors** to call specialized services and access domain expertise

You can connect connectors and plugins to your declarative copilot. Connectors and plugins can be built as a stand-alone, too.

Learn more about [declarative copilots](overview-declarative-copilot.md).

### Copilot connectors

Copilot connectors enable seamless integration with various external services and data sources, and they are the basic building blocks of Copilot extensions. They allow developers and IT admins to build Custom Actions and Custom Grounding to Microsoft Copilot's out-of-box features via Copilot extensions. 

#### Graph connectors

Graph connectors are a type of Copilot connector that enable bringing additional information periodically to the Microsoft Graph making it discoverable across various Microsoft 365 experiences including Copilot for Microsoft 365.

With Graph connectors, you can:

- **Make the most of your external data** by giving Copilot the ability to access and summarize your diverse datasets from different sources, enabling more comprehensive insights
- **Use Copilot as a research aid**, letting Copilot find, summarize, and perform Q&A natively by leveraging the dataset of your choice
- **Surface the intelligence of Copilot** in Microsoft Search, ContextIQ, and more to enhance the ways your users are already searching for answers

There are three main steps to set up a Graph connector: (1) Create a connection, (2) Register your schema, and then (3) Ingest your content to the Microsoft Graph. Each item is sent with properties that match the schema you registered to power your content as discoverable in the Microsoft 365 (Office) app. Learn more about [how Graph connectors work in Copilot](overview-graph-connector.md).

#### Power Platform connectors

Power Platform connectors are essential components that enable Power Platform applications, such as Power Automate, Power Apps, and Logic Apps, to interact with external services and data sources. They also enhance the capabilities of Microsoft 365 Copilot by enabling it to integrate with a wide range of external services and data sources, perform custom actions, and access a broader range of data types.

Unlike Graph connectors, Power platform connectors are real-time data retrieval with read/write actions. For example, you can create a connector that allows your users to track a issue in real-time, also let them create actions, such as creating a ticket for the tracker.


### Plugins

Plugins enable copilots to interact with other systems to read or write information in near real time. With plugins, you can:

- **Access real-time information** such as finding the latest news coverage on a product launch
- **Retrieve relational data** such as reporting on service tickets assigned to a given team member
- **Perform actions across apps** such as creating a new task in your organization's work tracking system

There are a few different ways to create plugins:
 
- Make an API into a Copilot plugin with [API plugins](overview-api-plugins.md)
- Teams [Message extensions](overview-message-extension-bot.md) are now work as plugins
- Create [Copilot Studio Actions](/microsoft-copilot-studio/copilot-plugins-overview?context=/microsoft-365-copilot/extensibility/context), if you prefer no-code/low-code

> [!NOTE]
> **Actions** are the collective term for plugins as custom skills and performing an action, and the term is often used interchangeably with plugins.

### Custom engine copilots

**Custom engine copilots** are developed using custom foundation models and orchestrators and can be tailored to specific enterprise needs. Custom engine copilots currently work as standalone Teams apps only and, in the future, will also power Copilot extensions experiences.

Learn more about [custom engine copilots](overview-custom-engine-copilot.md).

## Next step

Learn more about the two main paths for AI-driven business transformation: extending Copilot for Microsoft 365 and building custom AI solutions from the ground up.

> [!div class="nextstepaction"]
> [Extend Microsoft Copilot or build your own](build-or-extend.md)

If you're ready to extend Copilot for Microsoft 365, learn more about your extensibility options.

> [!div class="nextstepaction"]
> [Choose your Copilot extensibility path](decision-guide.md)