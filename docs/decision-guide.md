---
title: Extend copilot for your scenario
description: Understand which type of Microsoft 365 Copilot plugin or connector works best for your business use case
author: girliemac
ms.author: timura
ms.service: microsoft-365-copilot
ms.topic: conceptual
ms.date: 11/1/2023
---

# Extend copilot for your scenario

Intro - business use-cases and scenarios here.

## Extensibility options for Microsoft 365 Copilot

You have more than one way to personalize Microsoft 365 Copilot with the intelligence of external services, apps, and data.
To start building your connector or plugins, you can select the tools and SDKs based on how you want to develope.

:::image type="content" source="assets/images/decision-making-tree.png" alt-text="Decision-making questions to figure out which M365 Copilot extensibility service you should use":::

1. If you have invested in Power Platform already and want to expose the external data in PP too, additionally to Copilot, naturally your choice would be Power Platform connectors.
2. If you want to benefit from Microsoft 365 Semantic Index and connect your data in Microsoft 365, including Microsoft Search, Context IQ, and the Microsoft 365 app, Graph Connectors would be your friend.
3. If you would connect real-time data from external source on the fly, you can write the logic and/or API using Message Extensions. There are two ways to build Message Extensions:
    1. If you have built Message Extension apps for Teams, a great news is that your app is now automatically working with Copilot!
    2. If you haven't, you probably want to try building the simpler version of Message Extensions without going through Teams app development process. Or you *can* build Teams Message Extension if you would like more features. See the table below for details.

## Types of Message Extensions

Message extensions and plugins are a way to extend the functionality of Microsoft Teams by allowing users to interact with your app or service from the message compose box.

Message extensions has distinct user-experience and can be used to insert content, trigger actions, or display information in a task module or a card.

A user can interact with external data either from the Message Extension UI on chat client across Microsoft 365, or with Copilot.

(may need some visual help to explain the UX)

### What are the differences between Bot-based and API-based Plugins?

API-based plugins are message extensions that use a web service to handle user requests and responses. They do not require a bot registration or a bot framework SDK. They can be configured and deployed using the Developer Portal for Teams or the Teams Toolkit.

On the other hand, Bot-based plugins are message extensions that use a bot to handle user requests and responses. They require a bot registration and a bot framework SDK. They can be configured and deployed using the App Studio or the Teams Toolkit.

|API based message extension  |Bot based message extension  |
|---------|---------|
|- Simpler and faster to create and maintain <br> - Use this option if you’re not planning to add a conversational bot to your app  <br> - Do not require any additional code or resources for bot logic <br> - Suitable for scenarios where the plugin only needs to communicate with a web service and does not need any complex logic or state management <br> - Privatized traffic as they don’t rely on Azure bot infrastructure.| - More flexibility <br> - Use this option if you’re also planning to build a conversational bot <br> - Can leverage the full capabilities of the bot framework SDK <br> - Suitable for scenarios where the plugin needs to communicate with multiple services, handle complex logic or user interactions, or maintain state across sessions.|

You can learn more about Message extensions on [Teams Platform documentation](/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions)
