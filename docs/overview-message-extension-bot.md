---
title: Build message extensions for Microsoft 365 Copilot
description: Introducing message extensions as plugins for Microsoft 365 Copilot
author: girliemac
ms.author: timura
ms.topic: overview
ms.date: 09/16/2024
---

# Message extensions for Microsoft 365 Copilot

## What are message extensions?

Message extensions are a powerful feature in Microsoft Teams, as well as in Outlook, designed to facilitate user engagement with your web service. Additionally, they allow users to interact with your app directly from the chat interface.

These interactions are typically triggered via buttons and forms within Microsoft Teams and Outlook clients. This mechanism allows users to search or initiate actions in an external system, right from the compose message area, or even directly from a message. The outcomes of these interactions are delivered back to the client in the form of a richly formatted card.

> [!IMPORTANT]
> Message extensions are available in [Government Community Cloud (GCC), GCC-High, and Department of Defense (DOD)](/microsoftteams/platform/concepts/app-fundamentals-overview#government-community-cloud?context=/microsoft-365-copilot/extensibility/context) environments.

## Watch the overview

> [!VIDEO https://www.youtube.com/embed/vvNFCagkdcE]

## Message extension with Copilot

With the introduction of Microsoft 365 Copilot, the game has changed. Users can now leverage natural language input to invoke a message extension's search function, bypassing the need for specific user-interface (UI) commands. In essence, your users’ words become the catalyst for Copilot’s actions, calling the appropriate plugin for their request.

[!INCLUDE [preview-disclaimer for ME](includes/preview-disclaimer-me.md)]

The following illustration shows how a user interaction with a message extension on Teams client and Microsoft 365 Copilot differ:

:::image type="content" source="assets/images/message-extensions-ux.png" alt-text="Illustration of two different user experiences for message extensions,  one way is to invoke from Teams client and another is with Copilot" lightbox="assets/images/message-extensions-ux.png":::

Your users can do so much more than just getting search queries. With the integration of message extensions and Microsoft 365 Copilot, they can ask all sorts of follow-up questions. As Copilot is powered by Generative AI, it can understand, summarize, predict, and generate content across a multitude of Microsoft 365 applications, thereby boosting user productivity and creativity.

 A user can ask about what’s in stock for a product, then, for example, she can also request Copilot to populate a table with various products. Moreover, she can even instruct Copilot to draft an email summarizing the inventory as a reminder for the supplier!

## Build message extensions using Bot Framework

There are a few ways to build [message extensions](/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions), but to extend the capabilities for Copilot, you need to built one with [Bot Framework](https://dev.botframework.com/) SDK, commonly used to create a variety of bots, including Teams bots.

For development, you can use [Teams Toolkit](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension) for Visual Studio Code to build your message extensions. The toolkit helps you to create a project by scaffolding a template that suits your needs!

## Next step

Get ready to build plugins for Microsoft 365 Copilot:

> [!div class="nextstepaction"]
> [Set up your dev environment for message extension plugins](prerequisites-message-extension-bot.md)
