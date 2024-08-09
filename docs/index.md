---
title: Extend Microsoft Copilot for Microsoft 365
description: Extend, enrich, and customize Microsoft Copilot for Microsoft 365 with external services, apps, and data
author: girliemac
ms.author: timura
ms.topic: overview
ms.date: 08/12/2024
---

# Extend Microsoft Copilot for Microsoft 365

As a developer, you can extend, enrich, and customize [Microsoft Copilot for Microsoft 365](/microsoft-365-copilot/microsoft-365-copilot-overview) for the unique way your customers work.

On its own, Copilot for Microsoft 365 is a powerful productivity tool for keeping users in the flow of their work across Microsoft 365 applications. It provides users with **general skills** such as understanding, summarizing, predicting, recalling, translating, and generating content. It draws from a **baseline of your organizational knowledge** by indexing content in the Microsoft Graph, such as the emails, chats and documents that users have permission to access.

:::image type="content" source="assets/images/copilot-system.png" alt-text="Visual representation of the Copilot for Microsoft 365 system: Foundational models (LLMs) + Microsoft Graph (your data) + Microsoft 365 and 3rd party apps" border="false":::

However, business workflows don't typically run exclusively on Microsoft 365 applications and data formats. With Copilot extensibility, you can augment Copilot for Microsoft 365 with custom skills and organizational knowledge specific to your enterprise and users to enable truly spectacular AI scenarios. You can extend Copilot's skills by **transforming your app into a plugin** that increases user productivity across daily tasks and workflows. You can enrich the organizational knowledge accessible to Copilot by **ingesting your enterprise data and content with Microsoft Graph connectors**.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

## Copilot extensions

:::image type="content" source="assets/images/skills-knowledge-chart.png" alt-text="Chart with organizational 'Knowledge' as the x-axis and user 'Skills' as the y-axis showing that you can extend Copilot skills with plugins and extend Copilot knowledge with Graph connectors" border="false" lightbox="assets/images/skills-knowledge-chart.png":::

Extend and customize with:

- Your business data
- Your apps
- Your workflows
- Your automation

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


## Types of extensibility

There are several ways you can extend Copilot for Microsoft 365.

:::image type="content" source="assets/images/m365-extensibility-types.png" alt-text="This illustration shows types of extensibility options, Graph connector, plugins, and declarative copilots" border="true" lightbox="assets/images/m365-extensibility-types.png":::

### Declarative copilots 

Copilots with declarative instructions act as a standalone custom version of the Copilot for Microsoft 365 chat experience. Declarative copilots provide you with more tailoring, tuning, and control of the user experience. Declarative copilots have:

- **Familiar user interface** with Copilot for Microsoft 365
- **Domain-specific knowledge** applied for specific tasks, such as travel planner or nutrition assistant
- **Ability to integrate with plugins and connectors** to call specialized services and access domain expertise

You can connect connectors and plugins to your declarative copilot. Connectors and plugins can be built as a stand-alone, too.

Learn more about [declarative copilots](overview-declarative-copilot.md).

### Microsoft Graph connectors

Graph connectors increase the discoverability and engagement of your enterprise data by deeply integrating your data into the Copilot for Microsoft 365 experience. With Graph connectors, you can:

- **Make the most of your external data** by giving Copilot the ability to access and summarize your diverse datasets from different sources, enabling more comprehensive insights
- **Use Copilot as a research aid**, letting Copilot find, summarize, and perform Q&A natively by leveraging the dataset of your choice
- **Surface the intelligence of Copilot** in Microsoft Search, ContextIQ, and more to enhance the ways your users are already searching for answers

There are three main steps to set up a Graph connector: (1) Create a connection, (2) Register your schema, and then (3) Ingest your content to the Microsoft Graph. Each item is sent with properties that match the schema you registered to power your content as discoverable in the Microsoft 365 (Office) app. Learn more about [how Graph connectors work in Copilot](overview-graph-connector.md) and [best practices for configuration](overview-graph-connector.md#configuring-your-custom-microsoft-graph-connection-for-copilot-for-microsoft-365).

### Plugins

Plugins expand your users' skills by interacting with your web service using natural language in Microsoft Copilot. With plugins, you can:

- **Access real-time information** such as finding the latest news coverage on a product launch
- **Retrieve relational data** such as reporting on service tickets assigned to a given team member
- **Perform actions across apps** such as creating a new task in your organization's work tracking system

Learn more about: 
- [API plugins](overview-api-plugins.md)
- [Message extensions](overview-message-extension-bot.md)
- [Copilot Studio Actions](overview-business-applications.md)

The main differences between these extensions and Graph connectors are how the data is consumed. Data from a Graph connector requires prior ingestion to the Copilot semantic index; extensions fetch and act upon data in real-time.

:::image type="content" source="assets/images/m365-copilot-extensibility.png" alt-text="Illustration showing how plugins and connectors interact with Copilot and Microsoft 365 data" lightbox="assets/images/m365-copilot-extensibility.png":::


### Custom engine copilots

**Custom engine copilots** act as copilots and looks like a part of Microsoft Copilot extension family to the end-users, however, this is technically not the same. Custom engine copilots are conversational Teams bots designed to harness the powerful capabilities of Large Language Models (LLMs).

Learn more about [custom engine copilots](overview-custom-engine-copilot.md).

## Next step

Learn more about the two main paths for AI-driven business transformation: extending Copilot for Microsoft 365 and building custom AI solutions from the ground up.

> [!div class="nextstepaction"]
> [Extend Microsoft Copilot or build your own](build-or-extend.md)

If you're ready to extend Copilot for Microsoft 365, learn more about your extensibility options.

> [!div class="nextstepaction"]
> [Choose your Copilot extensibility path](decision-guide.md)