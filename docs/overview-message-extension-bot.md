---
title: Build message extensions for Microsoft 365 Copilot
description: Intro Microsoft 365 Copilot with message extensions
ms.topic: overview
ms.date: 11/14/2023
---

# Message extensions for Microsoft 365 Copilot

Message extensions are a powerful feature in Microsoft Teams, designed to facilitate user engagement with your web service

These interactions are typically triggered by users via buttons and forms within the Teams client. This allows them to search or initiate actions in an external system, right from the compose message area, the command box, or even directly from a message. The outcomes of these interactions are delivered back to the Teams client in the form of a richly formatted card.

With the introduction of Copilot, the game has changed. Users can now leverage natural language input to invoke a message extension's search function, bypassing the need for specific user-interface (UI) commands. This means they can get search results in a more intuitive and user-friendly manner.

:::image type="content" source="assets/images/message-extensions-ux.png" alt-text="this illustrates two user experiences of message extensions- one way is to invoke from Teams client and another is Copilot" lightbox="assets/images/message-extensions-ux.png":::

> [!IMPORTANT]
> Message extensions are available in [Government Community Cloud (GCC), GCC-High, and Department of Defense (DOD)](/microsoftteams/platform/concepts/app-fundamentals-overview.md#government-community-cloud?context=/microsoft-365-copilot/extensibility/context) environments.

## Build message extensions using Bot Framework

There are a few ways to build message extensions, but to extend the capabilities for Copilot, you need to built one with [Bot Framework](https://dev.botframework.com/), which is a SDK, commonly used to create variety bots using C#, Java, Python, and JavaScript.

You can create a message extension using Teams Toolkit, which helps you to create a project by scaffolding a template that suits your needs.

## Next step

Follow the step-by-step guides to build your first message extension app:

> [!div class="nextstepaction"]
> [Get started with message extension](/microsoftteams/platform/get-started/build-message-extension?context=/microsoft-365-copilot/extensibility/context)
