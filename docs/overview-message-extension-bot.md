---
title: Build message extensions for Microsoft 365 Copilot
description: Intro Microsoft 365 Copilot with message extensions
ms.topic: overview
ms.date: 11/14/2023
---

# Message extensions for Microsoft 365 Copilot

Message extensions are features for Microsoft Teams that enable users to engage with your web service.

The user-interaction is typically initiated by a user through buttons and forms within the Teams client, to search or initiate actions in an external system from the compose message area, the command box, or directly from a message. The results of these interactions can be returned to the Teams client as a richly formatted card.

Now with Copilot, users can invoke a message extension's search function with natural language input, instead of the specific user-interface (UI), to get search results.

:::image type="content" source="assets/images/message-extensions-ux.png" alt-text="this illustrates two user experiences of message extensions- one way is to invoke from Teams client and another is Copilot":::

> [!IMPORTANT]
> Message extensions are available in [Government Community Cloud (GCC), GCC-High, and Department of Defense (DOD)](/microsoftteams/platform/concepts/app-fundamentals-overview.md#government-community-cloud?context=/microsoft-365-copilot/extensibility/context) environments.

## Build message extensions using Bot Framework

There are a few ways to build message extensions, but to extend the capabilities for Copilot, you need to built one with [Bot Framework](https://dev.botframework.com/), which is a SDK, typically used to create variety bots using C#, Java, Python, and JavaScript.

You can create a message extension using Teams Toolkit, which helps you to create a project by scaffolding a template of your choice.

## Next step

Follow the step-by-step guides to build your first message extension app:

> [!div class="nextstepaction"]
> [Get started with message extension](/microsoftteams/platform/get-started/build-message-extension?context=/microsoft-365-copilot/extensibility/context)
