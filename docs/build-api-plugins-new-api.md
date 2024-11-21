---
title: Build API plugins with a new API for Microsoft 365 Copilot
description: Learn how to build API plugins with a new API for Microsoft 365 Copilot
author: jasonjoh
ms.author: jasonjoh
ms.date: 10/08/2024
ms.topic: how-to
---

# Build API plugins with a new API for Microsoft 365 Copilot

[!INCLUDE [api-plugins-declarative-agents-only](includes/api-plugins-declarative-agents-only.md)]

[API plugins](overview-api-plugins.md) connect a REST API to Microsoft 365 Copilot. You can use the [Teams Toolkit](/microsoftteams/platform/toolkit/teams-toolkit-fundamentals) to quickly generate a plugin and a corresponding REST API that you can use as a starting point for your plugin development.

- Requirements specified in [Requirements for plugin development](prerequisites.md#requirements-for-developing-agents-and-plugins)
- [Visual Studio Code](https://code.visualstudio.com/) with Teams Toolkit version 5.9 or later
- [Node.js](https://nodejs.org/) 18.x or 20.x

## Create the plugin and API

1. Open Visual Studio Code. If Teams Toolkit isn't already installed, see [Install Teams Toolkit](/microsoftteams/platform/toolkit/install-teams-toolkit) for installation instructions.

1. Select the **Teams Toolkit** icon in the left-hand Activity Bar.

1. Select **Create a New App** in the Teams Toolkit task pane.

    :::image type="content" source="assets/images/api-plugins/create-plugin-ttk.png" alt-text="A screenshot of the Teams Toolkit interface":::

1. Select **Agent**, then select **Declarative Agent**.

1. Select **Add plugin**, then select **Start with a new API**.

1. Select **OAuth** for the **Authentication Type**.

1. Select your preferred programming language: JavaScript or TypeScript. This guide assumes TypeScript.

1. Choose a location for the API plugin project.

1. Enter `Repairs Agent` as a name for your plugin project.

Once you complete these steps, Teams Toolkit generates the required files for the plugin and opens a new Visual Studio Code window with the plugin project loaded. For details on the project, see the **README.md** file in the generated project's root directory.

## Run the plugin

1. In the Visual Studio Code window with the plugin project loaded, select the **Teams Toolkit** icon in the left-hand Activity Bar.

1. In the **Accounts** pane, select **Sign in to Microsoft 365**. (If you're already signed in continue to the next step).

1. Confirm that both **Custom App Upload Enabled** and **Copilot Access Enabled** display under your Microsoft 365 account. If they don't, check with your organization admin. See [Requirements for plugin development](prerequisites.md#requirements-for-developing-agents-and-plugins) for details.

1. Select the **Run and Debug** icon in the left-hand Activity Bar.

1. Select either **Debug in Copilot (Edge)** or **Debug in Copilot (Chrome)**, then press **F5** to start debugging.

Teams Toolkit builds the project, creates the plugin package, and sideloads it for your user account. Once that is done, a new browser window opens to the Microsoft Teams app.

## Test the plugin

1. In Microsoft Teams in your browser, select **Copilot**.

1. Select **Repairs Agentlocal** in the Agents list on the right-hand side. If the list isn't available, select the **Copilot chats and more** icon in the top right corner.

1. Send a message to Copilot about repairs. For example, try `Which repairs are assigned to Karin?`.

At this point, the plugin is running locally on your development machine without authentication. In order to add authentication, deploy the solution to Azure.

## Deploy to Azure and enable authentication

1. Select the **Teams Toolkit** icon in the left-hand Activity Bar.

1. In the **Lifecycle** pane, select **Provision**.

1. When asked for a resource group name, either accept the default or change it as desired and press **Enter**.

1. Select a location for the resource group.

1. Review the message in the dialog. If everything looks correct, select **Provision** to continue.

1. Wait for the provisioning steps to complete, then select **Deploy** in the **Lifecycle** pane.

Once you complete these steps, the plugin is deployed as an Azure Function with authentication.

## Test the plugin with authentication

1. In Microsoft Teams in your browser, select **Copilot**.

1. Select **Repairs Agentdev** in the Agents list on the right-hand side.

1. Send a message to Copilot about repairs. For example, try `Which repairs are assigned to Issac?`.
