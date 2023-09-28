---
title: Extend Microsoft 365 Copilot
description: Extend Microsoft 365 Copilot with the intelligence of external services, apps, and data
author:
ms.author:
ms.topic: overview
ms.date: 11/1/2023
---

# Extend Microsoft 365 Copilot

Microsoft 365 Copilot is the copilot built for modern work. It combines the combines the power of large language models (LLMs) with data in the Microsoft Graph and the Microsoft 365 suite of apps to be the personal work assistant empowering every person in every organization to achieve more. You can extend Microsoft 365 Copilot with the intelligence of external services, apps, and data to provide a personalized, secure, and productive Copilot experience.

You can create Copilot plugins to search and get personalized information such as:

- Bug fix status of your engineering team
- Customer data from CRM
- Product catalog for your e-commerce business

TODO: VIDEO (RedTiger, or YouTube for Ignite)

TODO: Briefly introduce plugin "runtime" and link to orchestrator explainer

TODO: Briefly explain relationship w/other Microsoft AI/Copilot offerings (link to way-finding page)

## Ways to integrate with Microsoft 365 Copilot

TODO:Please dit -  Introduce different entrypoints (plugin vs connector)

You can extend Microsoft 365 Copilot by bringing data from third-party data sources into Microsoft Graph using Graph connectors, or building Copilot plugins to interact with external data source:

:::image type="content" source="assets/images/m365-copilot-extensibility.png" alt-text="This diagram of M365 Copilot Extensibility shows how the external data consumed in Copilot is connected via Copilot plugins and Graph connectors":::

### Connect your app

TODO: Please edit - Introduce API-based, ME plugins

A plugin allows Copilot to interact directly with third-party data, apps, and services, enhancing its capabilities and broadening its range of capabilities.

There are a few ways to develope Copilot plugins— one way to build a plugin is connecting an API data point using Open API specification. Another way is building a bot-based Message Extensions. If you have built apps with [Message Extensions](https://review.learn.microsoft.com/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions) for Microsoft Teams or Outlook, your apps should be already compatible with Copilot.

### Connect your data

TODO: Introduce GCs - please edit, PowerPlat connectors (?) - needs to be added

You can use the Microsoft Graph connectors API to build custom connectors to bring your external data into Microsoft 365 experiences within your organization.

## Microsoft 365 Copilot extensibility support

TODO: Preview limitations/roadmap, M365 Copilot support matrix

> [!NOTE]
> Plugins for Microsoft 365 Copilot are in early access preview. This documentation is subject to change. This needs to be added somewhere in the docs. Also, the text needs to be more encouraging!
