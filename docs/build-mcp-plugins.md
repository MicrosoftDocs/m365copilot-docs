---
title: Build a plugin for a declarative agent from an MCP server
description: Learn how to use the Microsoft 365 Agents Toolkit to wrap your MCP server as a plugin in a declarative agent.
author: jasonjoh
ms.author: jasonjoh
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 08/05/2026
---

# Build a plugin for a declarative agent from an MCP server

This guide shows you how to integrate your service with a declarative agent for Microsoft 365 Copilot by adding an MCP server as a plugin using the Microsoft 365 Agents Toolkit. By following these steps, you enable conversational, AI-powered access to your MCP-exposed services for business users.

This walkthrough uses the [GitHub MCP server](https://github.com/github/github-mcp-server) as an example. The GitHub MCP server is a remote MCP server, provided and maintained by GitHub, that exposes tools for working with repositories, issues, pull requests, and other GitHub features. You use it here to build an agent that can search GitHub repositories and users from natural language prompts. You can follow the same steps with your own MCP server.

Build and use the plugin in four steps: create an OAuth client for authentication, create the agent, publish and sideload the agent, and use the agent.

## Prerequisites

Before you begin, make sure that you have the following prerequisites:

- Requirements specified in [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) version 6.12.0 or later

To complete the GitHub example in this walkthrough, you also need a [GitHub account](https://github.com/signup). A GitHub account isn't required to build a plugin from your own MCP server.

## Step 1: Create an OAuth client for authentication

The GitHub MCP server requires each user to sign in before it returns data, so the plugin needs an OAuth client. In this guide, use **OAuth (with static registration)**. When you create the agent and select this authentication type, Agents Toolkit immediately prompts you for those values, so create the client first. Copilot then uses the registration to obtain an access token on behalf of the signed-in user each time the agent calls the MCP server.

> [!TIP]
> If your MCP server supports OAuth 2.0 dynamic client registration (DCR), you can skip this section. When you create the agent, select **OAuth (with dynamic registration)** as the authentication type. The MCP server registers a client at runtime, so no client ID or secret is needed. Agents Toolkit writes the registration to the plugin manifest for you.

To create an OAuth client:

1. Go to [https://github.com/settings/developers](https://github.com/settings/developers) in your browser. Select **OAuth Apps** > **New OAuth App**.

1. Add a name and homepage URL for your app, and set `https://teams.microsoft.com/api/platform/v1.0/oAuthRedirect` as the **Authorization callback URL**. Select **Register application**.

1. After the app is created, select **Generate a new client secret**. Copy the secret and the **Client ID** to enter when you create the agent.

> [!NOTE]
> These steps are specific to GitHub. For your own MCP server, create an OAuth client with the identity provider your server uses, and set `https://teams.microsoft.com/api/platform/v1.0/oAuthRedirect` as the redirect (callback) URL. When you create the agent and select **OAuth (with static registration)**, Agents Toolkit prompts you for the client ID, client secret, and optional scopes. If your MCP server supports dynamic client registration (DCR), you can instead select **OAuth (with dynamic registration)**, and the MCP server registers a client at runtime - no manual client creation, client ID, or secret required. If your MCP server uses Microsoft Entra single sign-on (SSO) instead of OAuth, select **Entra SSO**, and Agents Toolkit prompts you for the Microsoft Entra app client ID instead. In every case, Agents Toolkit updates the plugin manifest for you. For details on each option, see [Configure authentication for MCP and API plugins in agents](plugin-authentication.md).

## Step 2: Create the agent

To create the agent:

1. Open Visual Studio Code and select the **Microsoft 365 Agents Toolkit** icon in the Activity Bar.

1. Select **Create a New Agent/App** in the Agents Toolkit task pane.

    :::image type="content" source="assets/images/api-plugins/create-plugin-ttk.png" alt-text="A screenshot of the Agents Toolkit interface":::

1. Select **Declarative Agent**.

1. Select **Add an Action**, and then select **Start with an MCP Server**.

1. Enter the GitHub MCP server URL `https://api.githubcopilot.com/mcp/`.

    :::image type="content" source="assets/images/api-plugins/mcp-server-url.png" alt-text="A screenshot of the prompt to enter the MCP server URL":::

1. Select the authentication type. For this exercise, select **OAuth (with static registration)**.

    :::image type="content" source="assets/images/api-plugins/mcp-select-authentication-type.png" alt-text="A screenshot of the Select Authentication Type prompt showing the OAuth static, OAuth dynamic, Entra SSO, and None options":::

1. When prompted, enter the **Client ID** from the OAuth app you registered, and then enter the **client secret**.

1. When prompted for scopes, press **Enter** to continue.

1. Choose a location for the agent project.

1. Enter a name for the agent.

After you complete these steps, Agents Toolkit generates the required files for the agent and opens a new Visual Studio Code window with the agent project loaded.

Agents Toolkit configures the generated plugin manifest (`ai-plugin.json`) for [dynamic tool discovery](plugin-dynamic-tool-discovery.md), so the agent resolves the MCP server's tools - including any that return UI widgets ([MCP apps](plugin-mcp-apps.md)) - at runtime, and you don't add tools manually. To pin a fixed, curated set of tools instead, see [Configure pinned tools with Agents Toolkit](plugin-dynamic-tool-discovery.md#configure-pinned-tools-with-agents-toolkit).

## Step 3: Publish and sideload the agent

To publish and sideload the agent:

1. In the Agents Toolkit **Accounts** pane, select **Sign in to Microsoft 365**. (If you're already signed in, continue to the next step).

1. Confirm that both **Custom App Upload Enabled** and **Copilot Access Enabled** display under your Microsoft 365 account. If they don't, check with your organization admin. See [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options) for details.

1. In the **Lifecycle** pane, select **Provision**.

1. Read the message in the dialog and select **Confirm** to continue.

1. Wait for the toolkit to report that it's finished provisioning.

> [!NOTE]
> **Work IQ Dev Tools (preview)** — You can also drive the package-and-sideload loop from the command line with the `wiqd` CLI: `wiqd agent package` builds the app package and `wiqd agent provision --env local` deploys it to your tenant for testing. To register a remote MCP server like the one in this walkthrough as a connector inside the app package, use `wiqd plugin add connector`, an alpha command whose interface might change. For more information, see the [Work IQ Dev Tools documentation](https://aka.ms/wiqd/docs).

## Step 4: Use the agent

To use the agent:

1. In your browser, go to [https://m365.cloud.microsoft/chat](https://m365.cloud.microsoft/chat).

1. In the **Agents** section of the sidebar, locate your agent. It's listed as the name you gave in [Step 2: Create the agent](#step-2-create-the-agent), with `dev` appended at the end. Select the agent.

1. Ask the agent to find a repository or user. For example, `can you find a repo for kiota?`.

1. When prompted, select **Sign in to {agent-name}**. In the pop-up window, sign in with your GitHub account and authorize the agent.

1. When the pop-up window closes, the agent returns a response.

    :::image type="content" source="assets/images/api-plugins/github-mcp-plugin-response.png" alt-text="A screenshot of the agent's response to a query for repositories":::

1. If the tool that the agent calls returns a UI widget (MCP app), confirm that the agent renders the widget inline in the response. For more information, see [Add MCP apps to declarative agents in Microsoft 365 Copilot](plugin-mcp-apps.md).

## Related content

- [Add MCP apps to declarative agents in Microsoft 365 Copilot](plugin-mcp-apps.md)
