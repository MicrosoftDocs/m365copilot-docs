---
title: Build message extensions for Microsoft 365 Copilot
description: Intro Microsoft 365 Copilot with message extensions
author: girliemac
ms.author: timura
ms.topic: overview
ms.date: 11/14/2023
---

# Message extensions for Microsoft 365 Copilot

## What are message extensions?

Message extensions are a powerful feature in Microsoft Teams, as well as in Outlook, designed to facilitate user engagement with your web service. And a message extension allows users to interact with your app directly from the chat interface.

These interactions are typically triggered via buttons and forms within Team and Outlook client. This allows users to search or initiate actions in an external system, right from the compose message area, or even directly from a message. The outcomes of these interactions are delivered back to the client in the form of a richly formatted card.

> [!IMPORTANT]
> Message extensions are available in [Government Community Cloud (GCC), GCC-High, and Department of Defense (DOD)](/microsoftteams/platform/concepts/app-fundamentals-overview.md#government-community-cloud?context=/microsoft-365-copilot/extensibility/context) environments.

## Message extension with Copilot

> [!NOTE]
> Plugins for Microsoft 365 Copilot are in public preview. Message extension action commands are not yet supported for use in copilot plugins.

With the introduction of Copilot for Microsoft 365, the game has changed. Users can now leverage natural language input to invoke a message extension's search function, bypassing the need for specific user-interface (UI) commands. In essence, your users’ words become the catalyst for Copilot’s actions, calling the appropriate plugin for their request.

This illustrate compares how a user can interact with a massage extension on Teams client and Microsoft 365 Copilot:

:::image type="content" source="assets/images/message-extensions-ux.png" alt-text="this illustrates two user experiences of message extensions- one way is to invoke from Teams client and another is Copilot" lightbox="assets/images/message-extensions-ux.png":::

Your users can do so much more than just getting search queries. With the integration of message extensions and Copilot for Microsoft 365, they can ask all sorts of follow-up questions. As Copilot is powered by Generative AI, it can understand, summarize, predict, and generate content across a multitude of Microsoft 365 applications, thereby boosting user productivity and creativity.

 A user can ask about what’s in stock for a product, then, for example, she can also request Copilot to populate a table with various products. Moreover, she can even instruct Copilot to draft an email summarizing the inventory as a reminder for the supplier!

## Build message extensions using Bot Framework

There are a few ways to build message extensions, but to extend the capabilities for Copilot, you need to built one with [Bot Framework](https://dev.botframework.com/), which is a SDK, commonly used to create variety bots using C#, Java, Python, and JavaScript.

You can create a message extension using Teams Toolkit, which helps you to create a project by scaffolding a template that suits your needs.

## Next step

Follow the step-by-step guides to build your first message extension plugin:

> [!div class="nextstepaction"]
> [Get started with message extension plugin](build-me-bot-plugin.md)
