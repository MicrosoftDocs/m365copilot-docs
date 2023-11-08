---
title: Set up your dev environment to build message extension for Microsoft 365 Copilot
description: Prerequisites to build your first message extension plugin for Microsoft 365 Copilot
author: girliemac
ms.author: timura
ms.topic: overview
ms.date: 11/14/2023
---

# Get ready to build your first message extension plugin for Microsoft 365 Copilot

Before you get started to build a search-based message extension plugin for Copilot, you need to set up your development. Make sure you read the general requirements at [Your development environment for Microsoft 365 Copilot extensibility](prerequisites.md).

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

## Set up your Teams development tenant

A **tenant** is like a space, or a container for your organization in Teams, where you chat, share files, and run meetings. This space is also where your *sideload* (installing and testing your app directly into your Teams environment for development) and test your app. Let's check if you're ready to develop with the tenant.
Do you already have a tenant, and do you have the admin access? Let's check if you really do!

In the Teams client,

1. Select the **Apps** icon
1. Select **Manage your apps**
1. Select **Upload an app**
1. Look for the option to **Upload a custom app**. If you see the option, sideloading apps is enabled!

:::image type="content" source="assets/images/build-me/sideloadable.png" alt-text="A screenshot of Teams client that shows how to check if your custom app is sideloadable":::

If you don't have the option to upload a custom app, talk to your Teams administrator, or get a free Teams developer account by joining the [Microsoft 365 developer program](https://developer.microsoft.com/microsoft-365/dev-program) and sign up for the **E5 subscription**.

Once you are done, sign in to Teams using the administrator account you just set up. Verify that you have the Upload a custom app option in Teams.

## Install prerequisites to your machine

Now make sure you install the following tools for building and deploying your apps:

- [Visual Studio Code](https://code.visualstudio.com/download) latest version
- [Node.js](https://nodejs.org/en/download/) v14.x, v16.x or v18.x
- [Microsoft Team client](https://www.microsoft.com/microsoft-teams/download-app)
- [Microsoft Edge](https://www.microsoft.com/edge)(recommended) or [Google Chrome](https://www.google.com/chrome/)

## Install Teams Toolkit to Visual Studio Code

The Teams Toolkit helps simplify the development process with tools to provision and deploy cloud resources for your app, publish to the Teams Store, and more.

You can use the toolkit with VS Code (Visual Studio Code), or CLI (command-line interface) called `TeamsFx`. Let's install both tools now.

1. Open VS Code and select the **Extensions** view (**Ctrl+Shift+X** / **⌘⇧-X** or **View > Extensions**).
1. In the search box, enter **Teams Toolkit**.
1. Select **Install** next to the Teams Toolkit.

:::image type="content" source="assets/images/build-me/install-toolkit-vscode.png" alt-text="A screenshot of VS Code that shows how to install Teams Toolkit extension":::

The Teams Toolkit :::image type="icon" source="assets/icons/teams-toolkit-sidebar-icon.png"::: icon appears in the VS Code **Activity Bar** after it's installed.

You can also find the Teams Toolkit on the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension).

Now you are ready to build your first message extension plugin for Copilot!

## Next step

Follow the step-by-step guides to build your first message extension plugin:

> [!div class="nextstepaction"]
> [Build your first message extension plugin for Copilot](/microsoftteams/platform/messaging-extensions/build-bot-based-plugin?tabs=visual-studio&context=/microsoft-365-copilot/extensibility/context)
