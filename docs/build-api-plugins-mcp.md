---
title: Build API plugins from an MCP server for Microsoft 365 Copilot
description: Learn how to use the Microsoft 365 Agents Toolkit to wrap your MCP server as an action in a declarative agent.
author: jasonjoh
ms.author: jasonjoh
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/11/2025
---

# Build API plugins from an MCP server for Microsoft 365 Copilot

This guide walks you through the process of integrating your MCP server with Microsoft 365 Copilot by adding an action (API plugin) to a declarative agent using the Microsoft 365 Agents Toolkit. By following these steps, you'll enable conversational, AI-powered access to your MCP-exposed services for business users.

## Prerequisites

- Requirements specified in [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options)
- A GitHub account
- [Visual Studio Code](https://code.visualstudio.com/)
- [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit)

## Create the agent

1. Open Visual Studio Code and Select the **Microsoft 365 Agents Toolkit** icon in the left-hand Activity Bar.

1. Select **Create a New Agent/App** in the Agents Toolkit task pane.

    :::image type="content" source="assets/images/api-plugins/create-plugin-ttk.png" alt-text="A screenshot of the Agents Toolkit interface":::

1. Select **Declarative Agent**.

1. Select **Add an Action**, then select **Start with an MCP Server**.

1. Enter the GitHub MCP server URL `https://api.githubcopilot.com/mcp/`.

1. Choose a location for the API plugin project.

1. Enter a name for the plugin.

Once you complete these steps, Agents Toolkit generates the required files for the plugin and opens a new Visual Studio Code window with the plugin project loaded.

## Add actions or tools from the MCP server

1. Open the **.vscode/mcp.json** file. Select the **Start** button in the file editor.

1. If prompted to authenticate, select **Allow** to authenticate.

1. Select the **ATK: Fetch action from MCP** button in the file editor, then select **ai-plugin.json**.

    :::image type="content" source="assets/images/api-plugins/fetch-mcp-actions.png" alt-text="A screenshot of the 'ATK: Fetch action from MCP' and 'Start' buttons in mcp.json":::

1. Select operations for the agent to use. For this exercise, choose **search_repositories**.

1. Select **OAuth (with static registration)** as the authentication type.

## Register an OAuth app with GitHub

1. Go to [https://github.com/settings/developers](https://github.com/settings/developers) in your browser. Select **OAuth Apps**, then **New OAuth App**.

1. Add a name and homepage URL for your app, and set `https://teams.microsoft.com/api/platform/v1.0/oAuthRedirect` as the **Authorization callback URL**. Select **Register application**.

1. After the app is created, select **Generate a new client secret**. Copy the secret and the **Client ID** to use in the next section.

## Package and sideload the agent

1. Open the plugin project in Visual Studio Code.

1. Select the **Microsoft 365 Agents Toolkit** icon in the left-hand Activity Bar.

1. In the **Accounts** pane, select **Sign in to Microsoft 365**. (If you're already signed in continue to the next step).

1. Confirm that both **Custom App Upload Enabled** and **Copilot Access Enabled** display under your Microsoft 365 account. If they don't, check with your organization admin. See [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options) for details.

1. In the **Lifecycle** pane, select **Provision**.

1. When asked to **Enter client id for OAuth registration...**, enter your client ID.

1. When asked to **Enter client secret for OAuth registration...**, enter your client secret.

1. When asked for scopes, press **Enter** to continue.

1. Read the message in the dialog and select **Confirm** to continue.

1. Wait for the toolkit to report that is finished provisioning.

## Use the plugin

1. In your browser, go to [https://m365.cloud.microsoft/chat](https://m365.cloud.microsoft/chat).

1. In the **Agents** section of the sidebar, locate your agent. It is listed as the name you gave in the [Create the agent](#create-the-agent) section, with `dev` appended at the end. Select the agent.

1. Ask the agent to find a repository or user. For example, `can you find a repo for kiota?`.

1. When prompted, select **Sign in to {agent-name}**. In the pop-up window, login with your GitHub account and authorize the agent.

1. When the pop-up window closes, the agent returns a response.

    :::image type="content" source="assets/images/api-plugins/github-mcp-plugin-response.png" alt-text="A screenshot of the agent's response to a query for repositories":::
