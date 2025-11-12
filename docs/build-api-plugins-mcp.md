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
- An existing REST API with an OpenAPI specification (this walkthrough uses the [Budget Tracker sample API](https://github.com/microsoftgraph/msgraph-sample-copilot-plugin))
- [Visual Studio Code](https://code.visualstudio.com/)
- [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit)

- Visual Studio Code
- Microsoft 365 Agents Toolkit extension for VS Code
- Working GitHub account with sample data
- Teams VS Code extension ([ms-teams-vscode-extension-6.0.3.vsix](https://microsoft.sharepoint.com/:u:/t/ActionPlatform/Ee9pZdVWbshBkeTSQhLxJPYBidmUEzRfHzQfBZIqyzcBOw?e=vnrZes))
- Enable Copilot variants: `EnableMcpServers`, `EnableMcpServerDynamicTools`, `UseGeneratedPluginNamespace`, `cdxflux_v3_disable_spoofing_plugin_response`
- MCP server with a /discover endpoint and valid authentication credentials (OAuth2.1 or API key)

## Create the agent

1. Open Visual Studio Code and Select the **Microsoft 365 Agents Toolkit** icon in the left-hand Activity Bar.

1. Select **Create a New Agent/App** in the Agents Toolkit task pane.

    :::image type="content" source="assets/images/api-plugins/create-plugin-ttk.png" alt-text="A screenshot of the Agents Toolkit interface":::

1. Select **Declarative Agent**.

1. Select **Add an Action**, then select **Start with an MCP Server**.
   - Select "Start with MCP server" to initiate integration.

1. Enter your MCP server URL. For example, `https://api.githubcopilot.com/mcp/`.

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

1. Read the message in the dialog and select **Confirm** to continue.

1. Wait for the toolkit to report that is finished provisioning.

## Use the plugin

TODO
