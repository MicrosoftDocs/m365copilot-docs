---
title: Extend Microsoft 365 Copilot
description: Extend, enrich, and customize Microsoft 365 Copilot with external services, apps, and data
ms.topic: overview
ms.date: 11/1/2023

---

# Extend Microsoft 365 Copilot

> [!IMPORTANT]
> The information in this article only applies to the [Microsoft 365 Copilot Early Access Program](https://www.microsoft.com/microsoft-365/blog/2023/05/09/introducing-the-microsoft-365-copilot-early-access-program-and-new-capabilities-in-copilot/), an invite-only preview program for commercial customers. Details are subject to change.

As a developer, you can extend, enrich, and customize Microsoft 365 Copilot for the unique way your customers work.

[Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-overview) is the copilot built for modern work. It combines the power of large language models (LLMs) with data in the Microsoft Graph and the Microsoft 365 suite of apps to be the personal work assistant empowering every person in every organization to achieve more.

:::image type="content" source="assets/images/copilot-system.png" alt-text="Visual representation of the Microsoft 365 Copilot system: Foundational models (LLMs) + Microsoft Graph (your data) + Microsoft 365 and 3rd party apps":::

On its own, Microsoft 365 Copilot is a powerful productivity tool for keeping users in the flow of their work across Microsoft 365 applications. It provides users with **general skills** such as understanding, summarizing, predicting, recalling, translating, and generating content. It draws from a **baseline of your organizational knowledge** by indexing content in the Microsoft Graph, such as the emails, chats and documents that users have permission to access.

However, business workflows don't typically run exclusively on Microsoft 365 applications and data formats. With copilot extensibility, you can augment Microsoft 365 Copilot with custom skills and organizational knowledge specific to your enterprise and users to enable truly spectacular AI scenarios. You can extend  copilot's skills by **customizing your app to be a copilot plugin** that increases user productivity across daily tasks and workflows. You can enrich the organizational knowledge accessible to copilot ([Semantic Index](/microsoft-365-copilot/microsoft-365-copilot-overview#semantic-index)) with your enterprise data by **connecting your custom content and data** with Graph connectors.

:::image type="content" source="assets/images/skills-knowledge-chart.png" alt-text="Chart with 'Organizational knowledge (Semantic Index)' as the x-axis and 'User skills' as the y-axis showing that you can extend copilot skills with plugins and extend copilot knowledge with graph connectors":::

When you extend Microsoft 365 Copilot, you maximize the efficiency of your apps and data with AI, by:

- **Integrating with Copilot** *once* to work in 20+ Copilot experiences across Microsoft 365.

- **Enriching the data estate of your enterprise** with industry-leading AI.

- **Keeping your users in the flow of their work**, start to finish.

- **Inheriting world-class security**, compliance, and privacy policies.

- **Connecting any software** to any other software for any scenario with natural language.

## Plug in your apps, connect your data

There are two ways of extending Microsoft 365 Copilot: by augmenting copilot with skills through *plugins*, and grounding it with organizational data through Graph *connectors*.

:::image type="content" source="assets/images/m365-copilot-extensibility.png" alt-text="This diagram of M365 Copilot Extensibility shows how the external data consumed in Copilot is connected via Copilot plugins and Graph connectors":::

### Plugins

Plugins expand your users' skills by interacting with your web service using natural language in Microsoft 365 Chat. With plugins, you can:

- **Access real-time information** such as finding the latest news coverage on a product launch
- **Retrieve relational data** such as reporting on service tickets assigned to a given team member
- **Perform actions across apps** such as creating a new task in your organization's work tracking system

You can build copilot plugins by building a Microsoft Teams message extension or a Power Platform connector, with even more options coming soon. If you already have a message extension or Power Platform connector, then you already have a plugin that works with Microsoft 365 Copilot. Learn more about [what makes a good plugin for copilot](best-practice.md) and how to [ensure copilot chooses your plugin](orchestrator.md) to use when its skills are needed.

### Connectors

Graph connectors increase the discoverability and engagement of your enterprise data by deeply integrating your data into the Microsoft 365 Copilot experience. With Graph connectors, you can:

- **Make the most of your external data** for functions like enriched data analysis, giving Copilot the ability to access and analyze your diverse datasets from different sources, enabling more comprehensive insights
- **Use Copilot as a research aid**, letting Copilot find, summarize, and perform Q&A natively by leveraging the dataset of your choice
- **Surface the intelligence of Copilot** in Microsoft Search, ContextIQ, and more to enhance the ways your users are already searching for answers

There are three main steps to set up a Graph connector: (1) Create a connection, (2) Register your schema, and then (3) Ingest your content to the Microsoft Graph. Each item is sent with properties that match the schema you registered to power your content as discoverable in Microsoft 365 App. Learn more about [how Graph connectors work in copilot](overview-graph-connector.md) and [best practices for configuration](overview-graph-connector.md#configuring-your-custom-microsoft-graph-connection-for-microsoft-365-copilot).

## Extensibility preview support

TODO: More info / general roadmap for dev preview

TODO: support matrix (Copilot hosts x extensibility types)

## Next step

There's a growing number of ways you can extend Microsoft 365 Copilot, including Microsoft Graph connectors, Teams message extension plugins, and Power Platform connectors.

> [!div class="nextstepaction"]
> [Choose your copilot extensibility path](decision-guide.md)
