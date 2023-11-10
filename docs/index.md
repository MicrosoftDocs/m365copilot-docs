---
title: Extend Microsoft Copilot for Microsoft 365
description: Extend, enrich, and customize Microsoft Copilot for Microsoft 365 with external services, apps, and data
author: erikadoyle
ms.author: edoyle
ms.topic: overview
ms.date: 11/14/2023

---

# Extend Microsoft Copilot for Microsoft 365

As a developer, you can extend, enrich, and customize Microsoft Copilot for Microsoft 365 for the unique way your customers work.

[Copilot for Microsoft 365](/microsoft-365-copilot/microsoft-365-copilot-overview) is the copilot built for modern work. It combines the power of large language models (LLMs) with data in the Microsoft Graph and the Microsoft 365 suite of apps to be the personal work assistant empowering every person in every organization to achieve more.

:::image type="content" source="assets/images/copilot-system.png" alt-text="Visual representation of the Copilot for Microsoft 365 system: Foundational models (LLMs) + Microsoft Graph (your data) + Microsoft 365 and 3rd party apps":::

On its own, Copilot for Microsoft 365 is a powerful productivity tool for keeping users in the flow of their work across Microsoft 365 applications. It provides users with **general skills** such as understanding, summarizing, predicting, recalling, translating, and generating content. It draws from a **baseline of your organizational knowledge** by indexing content in the Microsoft Graph, such as the emails, chats and documents that users have permission to access.

However, business workflows don't typically run exclusively on Microsoft 365 applications and data formats. With Copilot extensibility, you can augment Copilot for Microsoft 365 with custom skills and organizational knowledge specific to your enterprise and users to enable truly spectacular AI scenarios. You can extend  Copilot's skills by **customizing your app to be a Copilot plugin** that increases user productivity across daily tasks and workflows. You can enrich the organizational knowledge accessible to Copilot ([Semantic Index](/microsoft-365-copilot/microsoft-365-copilot-overview#semantic-index)) with your enterprise data by **connecting your custom content and data** with Graph connectors.

:::image type="content" source="assets/images/skills-knowledge-chart.png" alt-text="Chart with 'Organizational knowledge (Semantic Index)' as the x-axis and 'User skills' as the y-axis showing that you can extend Copilot skills with plugins and extend Copilot knowledge with graph connectors" border="false" lightbox="assets/images/skills-knowledge-chart.png":::

When you extend Copilot for Microsoft 365, you maximize the efficiency of your apps and data with AI, by:

- **Integrating with Copilot** *once* to work in 20+ Copilot experiences across Microsoft 365.

- **Enriching the data estate of your enterprise** with industry-leading AI.

- **Keeping your users in the flow of their work**, start to finish.

- **Inheriting world-class security**, compliance, and privacy policies.

- **Connecting any software** to any other software for any scenario with natural language.

## Extend Copilot for your scenario

Copilot extensibility helps your collaborative workspace to be more productive by bringing key information, common tools, and trusted processes to where people increasingly gather, learn, and work. Create something brand new for Copilot or integrate an existing app.

Here are some practical examples of what you can develop for your organization:

- **Issue tracking for engineering team**

    Assume your engineering team relies on a project management software. You can build a custom tool that enables users to monitor open tickets. For instance, a user can request information on all issues assigned to them, and Copilot for Microsoft 365 can seamlessly retrieve and present this data from your plugin.

:::image type="content" source="assets/images/copilot-scenario-01.png" alt-text="This illustration shows Copilot plugin scenario, where an engineer asks to show all open tickets for him" border="false":::

- **Product inventory for E-commerce**

    If your business operates in the realm of commerce, you can build an internal inventory tool by connecting it to your product database. For example, a user can ask Copilot to verify the availability of specific items, streamlining your internal processes.

- **Enterprise knowledge sharing**

    Consider a multinational corporation with a wealth of knowledge and insights stored in various formats - documents, emails, chat transcripts, spread across multiple systems. Microsoft Graph connectors can facilitate the consolidation of this data, making it searchable from a single, unified interface. This ensures that your organization's collective wisdom is readily accessible.

## Plug in your apps, connect your data

There are two ways of extending Copilot for Microsoft 365: by augmenting Copilot with skills through *plugins*, and grounding it with organizational data through Graph *connectors*.

:::image type="content" source="assets/images/m365-copilot-extensibility.png" alt-text="This diagram of M365 Copilot Extensibility shows how the external data consumed in Copilot is connected via Copilot plugins and Graph connectors" lightbox="assets/images/m365-copilot-extensibility.png":::

### Plugins

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

Plugins expand your users' skills by interacting with your web service using natural language in Microsoft 365 Chat. With plugins, you can:

- **Access real-time information** such as finding the latest news coverage on a product launch
- **Retrieve relational data** such as reporting on service tickets assigned to a given team member
- **Perform actions across apps** such as creating a new task in your organization's work tracking system

You can build Copilot plugins by building a Microsoft Teams message extension or a Power Platform connector, with even more options coming soon. If you already have a message extension or Power Platform connector, then you already have a plugin that works with Copilot for Microsoft 365. Learn more about [what makes a good plugin for Copilot](plugin-guidelines.md) and how to [ensure Copilot chooses your plugin](orchestrator.md) to use when its skills are needed.

### Connectors

Graph connectors increase the discoverability and engagement of your enterprise data by deeply integrating your data into the Copilot for Microsoft 365 experience. With Graph connectors, you can:

- **Make the most of your external data** by giving Copilot the ability to access and summarize your diverse datasets from different sources, enabling more comprehensive insights
- **Use Copilot as a research aid**, letting Copilot find, summarize, and perform Q&A natively by leveraging the dataset of your choice
- **Surface the intelligence of Copilot** in Microsoft Search, ContextIQ, and more to enhance the ways your users are already searching for answers

There are three main steps to set up a Graph connector: (1) Create a connection, (2) Register your schema, and then (3) Ingest your content to the Microsoft Graph. Each item is sent with properties that match the schema you registered to power your content as discoverable in Microsoft 365 App. Learn more about [how Graph connectors work in Copilot](overview-graph-connector.md) and [best practices for configuration](overview-graph-connector.md#configuring-your-custom-microsoft-graph-connection-for-copilot-for-microsoft-365).

## Extensibility preview support

Support for plugins and Graph connectors is currently limited to Copilot for Microsoft 365 chat within Teams. Future support will expand to other Copilot for Microsoft 365 surfaces.

:::image type="content" source="assets/images/copilot-m365-teams.png" alt-text="{alt-text}":::

## Next step

There's a growing number of ways you can extend Copilot for Microsoft 365, including Microsoft Graph connectors, Teams message extension plugins, and Power Platform connector plugins.

> [!div class="nextstepaction"]
> [Choose your Copilot extensibility path](decision-guide.md)
