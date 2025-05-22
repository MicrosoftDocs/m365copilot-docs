---
title: Create declarative agents using Microsoft 365 Agents Toolkit
description: Learn how to build a declarative agent for Microsoft 365 Copilot using Microsoft 365 Agents Toolkit.
ms.date: 05/19/2025
author: sebastienlevert
ms.author: slevert
ms.topic: tutorial
ms.localizationpriority: medium
---

# Tutorial: Create declarative agents using Microsoft 365 Agents Toolkit

A declarative agent is a customized version of Microsoft 365 Copilot that allows users to create personalized experiences by declaring specific instructions, actions, and knowledge. This guide provides information about how to build a declarative agent by using Microsoft 365 Agents Toolkit ([an evolution of Teams Toolkit](https://aka.ms/M365AgentsToolkit)).

The agent that you build in this tutorial targets licensed Microsoft 365 Copilot users. You can also build agents for Microsoft 365 Copilot Chat users, with limited capabilities. For details, see [Agent capabilities for Microsoft 365 users](prerequisites.md#agent-capabilities-for-microsoft-365-users).

:::image type="content" source="assets/images/build-da/ttk/agent-answer.png" alt-text="Screenshot shows the answer from the declarative agent in Microsoft 365 Copilot.":::

For overview information, see [Declarative agents for Microsoft 365 Copilot](overview-declarative-agent.md).

[!INCLUDE [copilot-in-word-and-powerpoint](includes/copilot-in-word-and-powerpoint.md)]

In this tutorial, you will:

> [!div class="checklist"]
>
> - Create a basic agent with Visual Studio Code and Agents Toolkit
> - Add instructions to the agent
> - Add conversation starters to the agent
> - Add web search capability to the agent
> - Add OneDrive and SharePoint content to the agent
> - Add Teams messages to the agent
> - Add people knowledge to the agent
> - Add email knowledge to the agent
> - Add image generator to the agent
> - Add code interpreter to the agent
> - Add Microsoft 365 Copilot connectors to the agent
> - Add API plugins as custom actions to the agent

## Prerequisites

Before you start, make sure that Microsoft 365 Copilot is available for your organization.

The following options are available for your development environment:

- A sandbox Microsoft 365 organization with Copilot (available in limited preview through [TAP membership](https://developer.microsoft.com/microsoft-365/tap)).
- An [eligible Microsoft 365 or Office 365 production environment](prerequisites.md#organizations-with-microsoft-365-copilot-licenses) with a Microsoft 365 Copilot license.

The following resources are required to complete the steps described in this article:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Microsoft 365 Agents Toolkit Visual Studio Code extension](/microsoftteams/platform/toolkit/install-teams-toolkit?tabs=vscode#install-a-prerelease-version)

[!INCLUDE [toolkit-version-note](includes/toolkit-version-note.md)]

You should be familiar with the following standards and guidelines for declarative agents for Microsoft 365 Copilot:

- Standards for compliance, performance, security, and user experience described in [Teams Store validation guidelines](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#teams-apps-extensible-as-plugin-for-microsoft-copilot-for-microsoft-365).

## Create a declarative agent

Begin by creating a basic declarative agent.

1. Open **Visual Studio Code**.

1. Select **Microsoft 365 Agents Toolkit > Create a New Agent/App**.

    :::image type="content" source="assets/images/build-da/ttk/create-new-app.png" alt-text="A screenshot of the Create a New Agent/App button in the Agents Toolkit sidebar":::

1. Select **Declarative Agent**.

    :::image type="content" source="assets/images/build-da/ttk/select-copilot-agent.png" alt-text="A screenshot of the New Project options with Agent selected":::

1. Select **No Action** to create a basic declarative agent.

1. Select **Default folder** to store your project root folder in the default location.

1. Enter `My Agent` as the **Application Name** and press **Enter**.

1. In the new Visual Studio Code window that opens, select **Microsoft 365 Agents Toolkit**, then select **Provision** in the **Lifecycle** pane.

    :::image type="content" source="assets/images/build-da/ttk/provision-agent.png" alt-text="A screenshot of the Provision option in the Lifecycle pane of Agents Toolkit":::

## Test the agent

1. Navigate to the Copilot application with the URL [https://m365.cloud.microsoft/chat](https://m365.cloud.microsoft/chat).

1. Next to the **New Chat** button, select the conversation drawer icon.

1. Select the declarative agent **My Agent**.

    :::image type="content" source="assets/images/build-da/ttk/select-agent.png" alt-text="A screenshot of the declarative agent in Copilot":::

1. Enter a question for your declarative agent and ensure that it replies with "Thanks for using Microsoft 365 Agents Toolkit to create your declarative agent!"

    :::image type="content" source="assets/images/build-da/ttk/agent-answer.png" alt-text="A screenshot of an answer from the declarative agent in Microsoft 365 Copilot":::

## Add instructions

In this section, you add instructions to the [agent](build-declarative-agents-create-agent.md) to change how it behaves.

1. Open the `appPackage/instructions.txt` file and replace its contents with the following text.

    ```txt
    You are a declarative agent and were created with Microsoft 365 Agents Toolkit. You are an expert at creating poems.

    Every time a user asks a question, you **must** turn the answer into a poem. The poem **must** not use the quote markdown and use regular text.
    ```

    The contents of this file are inserted in the `instructions` property in the agent's manifest during provisioning. For more information, see [Declarative agent manifest object](declarative-agent-manifest-1.4.md#declarative-agent-manifest-object).

1. Select **Provision** in the **Lifecycle** pane of the Agents Toolkit.

The declarative agent will use your updated instructions after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/updated-instructions.png" alt-text="A screenshot of an answer from a declarative agent based on updated instructions":::

## Add conversation starters

In this section, you add conversation starters to your [agent](build-declarative-agents-create-agent.md). Conversation starters are hints that are displayed to the user to demonstrate how they can get started using the declarative agent.

1. Open the `appPackage/declarativeAgent.json` file and add the `conversation_starters` array with the following content:

    ```json
    "conversation_starters": [
      {
        "title": "Getting Started",
        "text": "How can I get started with Agents Toolkit?"
      },
      {
        "title": "Getting Help",
        "text": "How can I get help with Agents Toolkit?"
      }
    ]
    ```

    For more information, see [Conversation starters object](declarative-agent-manifest-1.4.md#conversation-starters-object).

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The updated conversation starters will be available in your declarative agent after you refresh the page.

:::image type="content" source="assets/images/build-da/ttk/conversation-starters.png" alt-text="A screenshot showing the conversation starters from the declarative agent in Microsoft 365 Copilot":::

## Add web search capability

In this section, you add the ability to search the web to the [agent](build-declarative-agents-create-agent.md).

1. Open the `appPackage/declarativeAgent.json` file and add the `capabilities` array with the following content.

    ```json
    "capabilities": [
      {
        "name": "WebSearch"
      }
    ]
    ```

    For more information, see [Web search object](declarative-agent-manifest-1.4.md#web-search-object).

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have access to web content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/web-content.png" alt-text="A screenshot showing a response from the declarative agent that contains web content":::

> [!div class="nextstepaction"]
> [Add OneDrive and SharePoint content](build-declarative-agents-sharepoint.md)

## Add OneDrive and SharePoint

In this section, you add the contents of a SharePoint site to the available knowledge for the [agent](build-declarative-agents-create-agent.md).

1. Open the `appPackage/declarativeAgent.json` file and update the `capabilities` array to the following value, replacing `https://contoso.sharepoint.com/sites/ProductSupport` with a SharePoint site URL in your Microsoft 365 organization.

    ```json
    "capabilities": [
      {
        "name": "WebSearch"
      },
      {
        "name": "OneDriveAndSharePoint",
        "items_by_url": [
          {
            "url": "https://contoso.sharepoint.com/sites/ProductSupport"
          }
        ]
      }
    ]
    ```

    For more information, see [OneDrive and SharePoint object](declarative-agent-manifest-1.4.md#onedrive-and-sharepoint-object).

    > [!NOTE]
    >
    > - URLs should be full path to SharePoint items (site, document library, folder, or file). You can use the "Copy direct link" option in SharePoint to get the full path or files and folders. Right-click on the file or folder and select **Details**. Navigate to **Path** and select the copy icon.
    > - Not specifying the `items_by_url` array (or the alternative `items_by_sharepoint_ids` array) causes all OneDrive and SharePoint content in your Microsoft 365 organization that is available to the logged in user to be available to the agent.

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have access to OneDrive and SharePoint content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/sharepoint-onedrive-content.png" alt-text="A screenshot showing a response from the declarative agent that contains SharePoint and OneDrive content":::

## Add Teams messages

In this section, you provide the [agent](build-declarative-agents-create-agent.md) with Teams channels, team, and meeting chat grounding information.

1. Open the `appPackage/declarativeAgent.json` file and update the `capabilities` array to the following value, replacing `https://teams.microsoft.com/l/team/...` with a Teams channel or team url from your organization.

    ```json
    "capabilities": [
      {
        "name": "WebSearch"
      },
      {
        "name": "OneDriveAndSharePoint",
        "items_by_url": [
          {
            "url": "https://contoso.sharepoint.com/sites/ProductSupport"
          }
        ]
      },
      {
        "name": "TeamsMessages",
        "urls": [
          {
            "url": "https://teams.microsoft.com/l/team/..."
          }
        ]
      }
    ]
    ```

    For more information, see [Teams messages object](declarative-agent-manifest-1.4.md#teams-messages-object).

    > [!NOTE]
    > - The url in the url object must be well formed links to a Teams chat, team, or meeting chat.
    > - Not specifying the `urls` array causes all Teams channels, teams, meetings, 1:1 chat, and group chats in your Microsoft 365 organization that is available to the logged in user to be available to the agent.

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have access to Teams data to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/teams-content.png" alt-text="A screenshot showing a response from the declarative agent that contains Teams content":::

## Add people knowledge

In this section, you add the [people knowledge source](knowledge-sources.md#people) to the [agent](build-declarative-agents-create-agent.md). The people knowledge source allows you to scope your agent to answer questions about individuals in an organization.

1. Open the `appPackage/declarativeAgent.json` file and add the `People` entry to the `capabilities` array.

    ```json
    "capabilities": [
      {
        "name": "WebSearch"
      },
      {
        "name": "OneDriveAndSharePoint",
        "items_by_url": [
          {
            "url": "https://contoso.sharepoint.com/sites/ProductSupport"
          }
        ]
      },
      {
        "name": "TeamsMessages",
        "urls": [
          {
            "url": "https://teams.microsoft.com/l/team/..."
          }
        ]
      },
      {
        "name": "People"
      }
    ]
    ```

    For more information, see [People object](declarative-agent-manifest-1.4.md#people-object).

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have access to people knowledge after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/people-content.png" alt-text="A screenshot showing a response from the declarative agent that contains people knowledge":::

## Add email

In this section, you add the [email knowledge source](knowledge-sources.md#email) to the [agent](build-declarative-agents-create-agent.md). The email knowledge source allows you to scope your agent to use email from the user's mailbox or a shared mailbox to answer queries.

1. Open the `appPackage/declarativeAgent.json` file and add the `Email` entry to the `capabilities` array.

    ```json
    "capabilities": [
      {
        "name": "WebSearch"
      },
      {
        "name": "OneDriveAndSharePoint",
        "items_by_url": [
          {
            "url": "https://contoso.sharepoint.com/sites/ProductSupport"
          }
        ]
      },
      {
        "name": "TeamsMessages",
        "urls": [
          {
            "url": "https://teams.microsoft.com/l/team/..."
          }
        ]
      },
      {
        "name": "People"
      },
      {
        "name": "Email",
        "folders": [
          {
            "folder_id": "inbox"
          }
        ]
      }
    ]
    ```

    For more information, see [Email object](declarative-agent-manifest-1.4.md#email-object).

    > [!NOTE]
    >
    > - This example accesses the user of the agent's mailbox. To access a shared mailbox instead, add the optional `shared_mailbox` property set to the email address of the shared mailbox.
    > - The `folders` array limits the mailbox access to specific folders. To access the entire mailbox, omit the `folders` array.

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have access to email knowledge after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/email-content.png" alt-text="A screenshot showing a response from the declarative agent that contains email knowledge":::

## Add image generator

In this section, you add the [image generator capability](image-generator.md) to the declarative [agent](build-declarative-agents-create-agent.md).

1. Open the `appPackage/declarativeAgent.json` file and add the `GraphicArt` entry to the `capabilities` array.

    ```json
    "capabilities": [
      {
        "name": "WebSearch"
      },
      {
        "name": "OneDriveAndSharePoint",
        "items_by_url": [
          {
            "url": "https://contoso.sharepoint.com/sites/ProductSupport"
          }
        ]
      },
      {
        "name": "TeamsMessages",
        "urls": [
          {
            "url": "https://teams.microsoft.com/l/team/..."
          }
        ]
      },
      {
        "name": "People"
      },
      {
        "name": "Email",
        "folders": [
          {
            "folder_id": "inbox"
          }
        ]
      },
      {
        "name": "GraphicArt"
      }
    ]
    ```

    For more information, see [Graphic art object](declarative-agent-manifest-1.4.md#graphic-art-object).

1. Select **Provision** in the **Lifecycle** pane of the Agents Toolkit.

The declarative agent will have the ability to generate images after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/graphic-art-content.png" alt-text="A screenshot showing a response from the declarative agent that contains generated graphic art":::

## Add code interpreter

In this section, you add the [code interpreter capability](code-interpreter.md) to the [agent](build-declarative-agents-create-agent.md). Code interpreter is an advanced tool designed to solve complex tasks via Python code.

1. Open the `appPackage/declarativeAgent.json` file and add the `CodeInterpreter` entry to the `capabilities` array.

    ```json
    "capabilities": [
      {
        "name": "WebSearch"
      },
      {
        "name": "OneDriveAndSharePoint",
        "items_by_url": [
          {
            "url": "https://contoso.sharepoint.com/sites/ProductSupport"
          }
        ]
      },
      {
        "name": "TeamsMessages",
        "urls": [
          {
            "url": "https://teams.microsoft.com/l/team/..."
          }
        ]
      },
      {
        "name": "People"
      },
      {
        "name": "Email",
        "folders": [
          {
            "folder_id": "inbox"
          }
        ]
      },
      {
        "name": "GraphicArt"
      },
      {
        "name": "CodeInterpreter"
      }
    ]
    ```

    For more information, see [Code interpreter object](declarative-agent-manifest-1.4.md#code-interpreter-object).

1. Select **Provision** in the **Lifecycle** pane of the Agents Toolkit.

The declarative agent will have the code interpreter capability after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/code-interpreter-graph-content.png" alt-text="A screenshot showing a response from the declarative agent that contains a generated graph":::

:::image type="content" source="assets/images/build-da/ttk/code-interpreter-python-content.png" alt-text="A screenshot showing the Python code used to generate the requested graph":::

## Add Microsoft 365 Copilot connectors

In this section, you add items ingested by a Microsoft 365 Copilot connector (formerly Microsoft Graph connectors) to the available knowledge for the [agent](build-declarative-agents-create-agent.md).

1. Open the `appPackage/declarativeAgent.json` file and update the `capabilities` array to the following value, replacing `policieslocal` with a valid Copilot connector ID in your Microsoft 365 organization. For more information about how to find Copilot connector IDs, see [Retrieving capabilities IDs for declarative agent manifest](declarative-agent-capabilities-ids.md#microsoft-365-copilot-connectors).

    ```json
    "capabilities": [
      {
        "name": "WebSearch"
      },
      {
        "name": "OneDriveAndSharePoint",
        "items_by_url": [
          {
            "url": "https://contoso.sharepoint.com/sites/ProductSupport"
          }
        ]
      },
      {
        "name": "TeamsMessages",
        "channels_by_url": [
          {
            "url": "https://teams.microsoft.com/l/team/..."
          }
        ]
      },
      {
        "name": "People"
      },
      {
        "name": "Email",
        "folders": [
          {
            "folder_id": "inbox"
          }
        ]
      },
      {
        "name": "GraphicArt"
      },
      {
        "name": "CodeInterpreter"
      },
      {
        "name": "GraphConnectors",
        "connections": [
          {
            "connection_id": "policieslocal"
          }
        ]
      }
    ]
    ```

    For more information, see [Copilot connectors object](declarative-agent-manifest-1.4.md#copilot-connectors-object).

    > [!NOTE]
    >
    > - Not specifying the `connections` array causes all Copilot connectors content in your Microsoft 365 organization that is available to the logged in user to be available to the agent.

1. Select **Provision** in the **Lifecycle** pane of the Agents Toolkit.

The declarative agent will have access to Copilot connectors content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/graph-connector-content.png" alt-text="A screenshot showing a response from the declarative agent that contains Copilot connector content":::

## Add API plugins as custom actions

In this section, you add an [API plugin](overview-api-plugins.md) as an action to your [agent](build-declarative-agents-create-agent.md). API plugins add new abilities to your agent by allowing your agent to interact with a REST API.

Before you begin, create a file named `posts-api.yml` and add the code from the [Posts API OpenAPI description document](#posts-api-openapi-description-document).

1. Select **Add Action** in the **Development** pane of Agents Toolkit.

1. Select **Start with an OpenAPI Description Document**.

1. Select **Browse** and browse to the `posts-api.yml` file.

1. Select all available APIs, then select **OK**.

    :::image type="content" source="assets/images/build-da/ttk/select-apis.png" alt-text="A screenshot of the API selection dialog in Visual Studio code":::

1. Select **manifest.json**.

1. Review the warning in the dialog. When you're ready to proceed, select **Add**.

1. Select **Provision** in the **Lifecycle** pane of the Agents Toolkit.

The declarative agent will have access to your plugin content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/plugin-response.png" alt-text="A screenshot showing a response from the declarative agent that contains API plugin content":::

## Posts API OpenAPI description document

The following OpenAPI description is for the [JSONPlaceHolder API](https://jsonplaceholder.typicode.com/), a free online REST API that you can use whenever you need some fake data.

:::code language="yml" source="assets/snippets/posts-api.yml":::

## Related content

You've completed the declarative agent guide for Microsoft 365 Copilot. Now that you're familiar with the capabilities of a declarative agent, you can learn more about declarative agents in the following articles.

- Learn how to [write effective instructions](declarative-agent-instructions.md) for your agent.
- Test your agent with [Copilot developer mode](debugging-copilot-agent.md) to verify if and how the copilot orchestrator selects your knowledge sources for use in response to given prompts.
- Get answers to [frequently asked questions](transparency-faq-declarative-agent.md).
- Learn about an alternative method of building declarative agents with [Copilot Studio agent builder](copilot-studio-agent-builder.md).
