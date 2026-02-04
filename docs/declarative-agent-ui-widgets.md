---
title: Add interactive UI widgets to declarative agents
description: Learn how to add interactive UI widgets to MCP server-based declarative agents
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 02/15/2026
ms.topic: how-to
---

# Add interactive UI widgets to declarative agents

<!-- cSpell:ignore dotnetcli -->

By using the [OpenAI Apps SDK](https://developers.openai.com/apps-sdk), you can add interactive UI widgets from a Model Context Protocol (MCP) server to ChatGPT. Declarative agents in Microsoft 365 Copilot that [use MCP servers](build-mcp-plugins.md) support these same widgets, so you can add UI to your declarative agents. If you have an existing app for ChatGPT, you can bring it to Copilot with little to no changes.

:::image type="content" source="assets/images/api-plugins/mcp-server-ui-widget.png" alt-text="A screenshot of the To-do list widget in Microsoft 365 Copilot":::

This guide walks you through building a sample ToDo MCP server with UI widgets and integrating it with a declarative agent in Microsoft 365 Copilot.

## Prerequisites

- Requirements specified in [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options)
- [Visual Studio Code](https://code.visualstudio.com/)
- The [Microsoft 365 Agents Toolkit](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension) version 6.3.x or later
- [Node.js](https://nodejs.org)
- [The devtunnel CLI](/azure/developer/dev-tunnels/get-started)

## Create the MCP server

1. Follow the [OpenAI Apps SDK Quickstart](https://developers.openai.com/apps-sdk/quickstart) to build a sample ToDo MCP server with UI widgets.

1. Use the MCP inspector tool to list tools from the MCP server. Copy the JSON response to use in an upcoming step.
    1. In your shell, run `npx @modelcontextprotocol/inspector`. Wait for the MCP inspector to open in a browser window.
    1. Enter `http://localhost:8787/mcp` in the **URL** field, change **Connection Type** to **Via Proxy**, the select **Connect**.
    1. Select the **Tools** tab, then select **List Tools**. Copy the response JSON.

1. Use the devtunnel CLI to expose the sample running on your local machine to the internet. This tunnel allows Microsoft 365 Copilot to connect to your MCP server.

    ```dotnetcli
    devtunnel create --allow-anonymous
    devtunnel port create --port-number 8787
    devtunnel host
    ```

    Copy the URL from the CLI output labeled **Connect via browser**.

## Create a declarative agent

1. Open Visual Studio Code and select the **Microsoft 365 Agents Toolkit** icon in the left-hand Activity Bar.

1. Select **Create a New Agent/App** in the Agents Toolkit task pane.

    :::image type="content" source="assets/images/api-plugins/create-plugin-ttk.png" alt-text="A screenshot of the Agents Toolkit interface":::

1. Select **Declarative Agent**.

1. Select **Add an Action**, then select **Start with an MCP Server**. If prompted, choose **Remote MCP server**.

1. Enter the devtunnel URL you copied in the previous step, appended with `/mcp`. For example, `https://lrcnbr88-8787.usw3.devtunnels.ms/mcp/`.

1. Choose a location for the agent project.

1. Enter a name for the agent.

When you complete these steps, Agents Toolkit generates the required files for the agent and opens a new Visual Studio Code window with the agent project loaded.

## Update and sideload the agent

1. Open the **.vscode/mcp.json** file. Select the **Start** button in the file editor.

1. Select the **ATK: Fetch action from MCP** button in the file editor, then select **ai-plugin.json**.

1. Select the `add_todo` and `complete_todo` operations for the agent to use and select **OK**.

1. Open **ai-plugin.json** and locate the `mcp_tool_description` property. Replace the existing value with the **List Tools** response JSON you copied from the MCP Inspector. The new value should look like the following.

    ```json
    "mcp_tool_description": {
      "tools": [
        {
          "name": "add_todo",
          "title": "Add todo",
          "description": "Creates a todo item with the given title.",
          "inputSchema": {
            "type": "object",
            "properties": {
              "title": {
                "type": "string",
                "minLength": 1
              }
            },
            "required": [
              "title"
            ],
            "$schema": "http://json-schema.org/draft-07/schema#"
          },
          "execution": {
            "taskSupport": "forbidden"
          },
          "_meta": {
            "openai/outputTemplate": "ui://widget/todo.html",
            "openai/toolInvocation/invoking": "Adding todo",
            "openai/toolInvocation/invoked": "Added todo"
          }
        },
        {
          "name": "complete_todo",
          "title": "Complete todo",
          "description": "Marks a todo as done by id.",
          "inputSchema": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "minLength": 1
              }
            },
            "required": [
              "id"
            ],
            "$schema": "http://json-schema.org/draft-07/schema#"
          },
          "execution": {
            "taskSupport": "forbidden"
          },
          "_meta": {
            "openai/outputTemplate": "ui://widget/todo.html",
            "openai/toolInvocation/invoking": "Completing todo",
            "openai/toolInvocation/invoked": "Completed todo"
          }
        }
      ]
    }
    ```

1. Select the **Microsoft 365 Agents Toolkit** icon in the left-hand Activity Bar.

1. In the **Accounts** pane, select **Sign in to Microsoft 365**. (If you're already signed in, continue to the next step).

1. Confirm that both **Custom App Upload Enabled** and **Copilot Access Enabled** display under your Microsoft 365 account. If they don't, check with your organization admin. See [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options) for details.

1. In the **Lifecycle** pane, select **Provision**.

1. Wait for the toolkit to report that it finishes provisioning.

## Test the agent

1. Open your browser and go to [https://m365.cloud.microsoft/chat](https://m365.cloud.microsoft/chat).
1. Select your agent in the left-hand sidebar. If you don't see your agent, select **All agents**.
1. Ask the agent to add a to-do, for example, `Add a todo to "Test MCP server with UI in Copilot"`.
1. Allow the agent to connect to the MCP server when prompted.
1. The agent renders a to-do list with the new to-do.

## Related content

- [Build plugins from an MCP server for Microsoft 365 Copilot (preview)](build-mcp-plugins.md)
- [OpenAI Apps SDK](https://developers.openai.com/apps-sdk)
