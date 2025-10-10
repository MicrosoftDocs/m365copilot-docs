---
title: Create declarative agents using Microsoft 365 Agents Toolkit and TypeSpec for Microsoft 365 Copilot
description: Learn how to build declarative agents using Microsoft 365 Agents Toolkit and TypeSpec for Microsoft 365 Copilot.
author: slevert
ms.author: slevert
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 09/11/2025
---

# Create declarative agents using Microsoft 365 Agents Toolkit and TypeSpec

A [declarative agent](overview-declarative-agent.md) is a customized version of Microsoft 365 Copilot that allows users to create personalized experiences by declaring specific instructions, actions, and knowledge. This guide demonstrates how to build a declarative agent by using [TypeSpec](https://typespec.io/) and the [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit).

> [!NOTE]
> The agent that you build in this tutorial targets licensed Microsoft 365 Copilot users. You can also build agents for Microsoft 365 Copilot Chat users, with limited capabilities. For details, see [Microsoft 365 Copilot developer licenses](prerequisites.md#microsoft-365-copilot-developer-licenses).

[!INCLUDE [copilot-in-word-and-powerpoint](includes/copilot-in-word-and-powerpoint.md)]

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

1. Open Visual Studio Code.

1. Select **Microsoft 365 Agents Toolkit > Create a New Agent/App**.

    :::image type="content" source="assets/images/build-da/ttk/create-new-app.png" alt-text="A screenshot of the Create a New App button in the Microsoft 365 Agents Toolkit sidebar":::

1. Select **Declarative Agent**.

    :::image type="content" source="assets/images/build-da/ttk/select-copilot-agent.png" alt-text="A screenshot of the New Project options with Agent selected":::

1. Select **Start with TypeSpec for Microsoft 365 Copilot** to create a basic declarative agent.

1. Select **Default folder** to store your project root folder in the default location.

1. Enter `My Agent` as the **Application Name** and press **Enter**.

1. In the new Visual Studio Code window that opens, select **Microsoft 365 Agents Toolkit**. In the **Lifecycle** pane, select **Provision**.

    :::image type="content" source="assets/images/build-da/ttk/provision-agent.png" alt-text="A screenshot of the Provision option in the Lifecycle pane of the Microsoft 365 Agents Toolkit":::

### Test the agent

1. Navigate to the Copilot application with the URL [https://m365.cloud.microsoft/chat](https://m365.cloud.microsoft/chat).

1. Next to the **New Chat** button, select the conversation drawer icon.

1. Select the declarative agent **My Agent**.

    :::image type="content" source="assets/images/build-da/ttk/select-agent.png" alt-text="A screenshot of the declarative agent in Copilot":::

1. Enter a question for your declarative agent to see it in action.

## Add instructions

Instructions change how an agent behaves.

1. Open the `main.tsp` file and replace the `@instructions` decorator with the following.

    ```typescript
    @instructions("""
      You are a declarative agent and were created with Team Toolkit. You are an expert at creating poems.
      Every time a user asks a question, you **must** turn the answer into a poem. The poem **must** not use the quote markdown and use regular text.
    """)
    ```

  The contents of this decorator are inserted in the `instructions` property in the agent's manifest during provisioning. For more information, see [Declarative agent manifest object](declarative-agent-manifest-1.6.md#declarative-agent-manifest-object).

1. Select **Provision** in the **Lifecycle** pane of the Microsoft 365 Agents Toolkit.

The declarative agent will use your updated instructions after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/updated-instructions.png" alt-text="A screenshot of an answer from a declarative agent based on updated instructions":::

## Add conversation starters

Conversation starters are hints that are displayed to the user to demonstrate how they can get started using the declarative agent.

1. Open the `main.tsp` file and replace the commented `@conversationStarter` decorator with the following content:

    ```typescript
    @conversationStarter(#{
      title: "Getting started",
      text: "How can I get started with Agents Toolkit?"
    })

    @conversationStarter(#{
      title: "Getting Help",
      text: "How can I get help with Agents Toolkit?"
    })
    ```

  For more information, see [Conversation starters object](declarative-agent-manifest-1.6.md#conversation-starters-object).

1. Select **Provision** in the **Lifecycle** pane of the Microsoft 365 Agents Toolkit.

The updated conversation starters will be available in your declarative agent after you refresh the page.

:::image type="content" source="assets/images/build-da/ttk/conversation-starters.png" alt-text="A screenshot showing the conversation starters from the declarative agent in Microsoft 365 Copilot":::

## Add web content

The [web search capability](knowledge-sources.md#web-and-scoped-web-search) enables agents to use the search index in Bing to respond to user prompts.

1. Open the `main.tsp` file and add the `WebSearch` capability in the `MyAgent` namespace with the following content.

    ```typescript
    namespace MyAgent {
      op webSearch is AgentCapabilities.WebSearch<TSites = [
        {
          url: "https://learn.microsoft.com",
        },
      ]>;
    }
    ```

    For more information, see [Web search object](declarative-agent-manifest-1.6.md#web-search-object).

    > [!NOTE]
    > Not specifying the `TSites` array causes all web content to be available to the agent.

1. Select **Provision** in the **Lifecycle** pane of the Microsoft 365 Agents Toolkit.

The declarative agent has access to web content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/web-content.png" alt-text="A screenshot showing a response from the declarative agent that contains web content":::

## Add OneDrive and SharePoint content

The [OneDrive and SharePoint capability](knowledge-sources.md#sharepoint-and-onedrive) enables the agent to use OneDrive and SharePoint content as knowledge.

1. Open the `main.tsp` file and add the `OneDriveAndSharePoint` capability in the `MyAgent` namespace with the following value, replacing `https://contoso.sharepoint.com/sites/ProductSupport` with a SharePoint site URL in your Microsoft 365 organization.

    ```typescript
    namespace MyAgent {
      // Omitted for brevity
      op od_sp is AgentCapabilities.OneDriveAndSharePoint<TItemsByUrl = [
        {
          url: "https://contoso.sharepoint.com/sites/ProductSupport"
        }
      ]>;
      // Omitted for brevity
    }
    ```

    For more information, see [OneDrive and SharePoint object](declarative-agent-manifest-1.6.md#onedrive-and-sharepoint-object).

    > [!NOTE]
    >
    > - URLs should be full path to SharePoint items (site, document library, folder, or file). You can use the "Copy direct link" option in SharePoint to get the full path or files and folders. Right-click on the file or folder and select **Details**. Navigate to **Path** and select the copy icon.
    > - Not specifying the `TItemsByUrl` array (or the alternative `TItemsBySharePointIds` array) causes all OneDrive and SharePoint content in your Microsoft 365 organization that is available to the logged in user to be available to the agent.

1. Select **Provision** in the **Lifecycle** pane of the Microsoft 365 Agents Toolkit.

The declarative agent has access to OneDrive and SharePoint content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/sharepoint-onedrive-content.png" alt-text="A screenshot showing a response from the declarative agent that contains SharePoint and OneDrive content":::

## Add Teams messages

The [Teams messages capability](knowledge-sources.md#teams-messages) allows the  agent to use Teams channels, team, and meeting chat as knowledge.

1. Open the `main.tsp` file and add the `TeamsMessages` capability in the `MyAgent` namespace with the following value, replacing `https://teams.microsoft.com/l/team/...` with a Teams channel or team url from your organization.

    ```typescript
    namespace MyAgent {
      // Omitted for brevity
      op teamsMessages is AgentCapabilities.TeamsMessages<TUrls = [
        {
          url: "https://teams.microsoft.com/l/team/...",
        }
      ]>;
      // Omitted for brevity
    }
    ```

    For more information, see [Microsoft Teams messages object](declarative-agent-manifest-1.6.md#microsoft-teams-messages-object).

    > [!NOTE]
    > - The URL in the `url` property must be well formed links to a Teams chat, team, or meeting chat.
    > - Not specifying the `TUrls` array causes all Teams channels, teams, meetings, 1:1 chat, and group chats in your Microsoft 365 organization that is available to the logged in user to be available to the agent.

1. Select **Provision** in the **Lifecycle** pane of the Microsoft 365 Agents Toolkit.

The declarative agent has access to Teams data to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/teams-content.png" alt-text="A screenshot showing a response from the declarative agent that contains Teams content":::

## Add people knowledge

The [people capability](knowledge-sources.md#people) allows you to scope your agent to answer questions about individuals in an organization.

1. Open the `main.tsp` file and add the `People` capability in the `MyAgent` namespace with the following content.

    ```typescript
    namespace MyAgent {
      // Omitted for brevity
      op people is AgentCapabilities.People;
      // Omitted for brevity
    }
    ```

  For more information, see [People object](declarative-agent-manifest-1.6.md#people-object).

1. Select **Provision** in the **Lifecycle** pane of the Microsoft 365 Agents Toolkit.

The declarative agent has access to people knowledge after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/people-content.png" alt-text="A screenshot showing a response from the declarative agent that contains people knowledge":::

## Add email knowledge

The [email capability](knowledge-sources.md#email) allows you to scope your agent to use email from the user's mailbox or a shared mailbox as a knowledge source.

1. Open the `main.tsp` file and add the `Email` capability in the `MyAgent` namespace with the following content.

    ```typescript
    namespace MyAgent {
      // Omitted for brevity
      op email is AgentCapabilities.Email<TFolders = [
        {
          folder_id: "Inbox",
        }
      ]>;
      // Omitted for brevity
    }
    ```

    For more information, see [Email object](declarative-agent-manifest-1.6.md#email-object).

    > [!NOTE]
    >
    > - This example accesses the user of the agent's mailbox. To access a shared mailbox instead, add the optional `shared_mailbox` property set to the email address of the shared mailbox.
    > - The `TFolders` array limits the mailbox access to specific folders. To access the entire mailbox, omit the `folders` array.

1. Select **Provision** in the **Lifecycle** pane of the Microsoft 365 Agents Toolkit.

The declarative agent has access to email knowledge after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/email-content.png" alt-text="A screenshot showing a response from the declarative agent that contains email knowledge":::

## Add image generator

The [image generator capability](image-generator.md) enables agents to generate images based on user prompts.

1. Open the `main.tsp` file and add the `GraphicArt` capability in the `MyAgent` namespace with the following content.

    ```typescript
    namespace MyAgent {
      // Omitted for brevity
      op graphicArt is AgentCapabilities.GraphicArt;
      // Omitted for brevity
    }
    ```

  For more information, see [Graphic art object](declarative-agent-manifest-1.6.md#graphic-art-object).

1. Select **Provision** in the **Lifecycle** pane of the Microsoft 365 Agents Toolkit.

The declarative agent has the ability to generate images after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/graphic-art-content.png" alt-text="A screenshot showing a response from the declarative agent that contains generated graphic art":::

## Add code interpreter

The [code interpreter capability](code-interpreter.md) is an advanced tool designed to solve complex tasks via Python code.

1. Open the `main.tsp` file and add the `CodeInterpreter` capability in the `MyAgent` namespace with the following content.

    ```typescript
    namespace MyAgent {
      // Omitted for brevity
      op codeInterpreter is AgentCapabilities.CodeInterpreter;
      // Omitted for brevity
    }
    ```

  For more information, see [Code interpreter object](declarative-agent-manifest-1.6.md#code-interpreter-object).

1. Select **Provision** in the **Lifecycle** pane of the Microsoft 365 Agents Toolkit.

The declarative agent has the code interpreter capability after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/code-interpreter-graph-content.png" alt-text="A screenshot showing a response from the declarative agent that contains a generated graph":::

:::image type="content" source="assets/images/build-da/ttk/code-interpreter-python-content.png" alt-text="A screenshot showing the Python code used to generate the requested graph":::

## Add Copilot connectors content

You can add items ingested by a Copilot connector to the available knowledge for the agent.

1. Open the `main.tsp` file and add the `GraphConnectors` capability in the `MyAgent` namespace with the following value, replacing `policieslocal` with a valid Copilot connector ID in your Microsoft 365 organization. For more information on finding Copilot connector IDs, see [Retrieving capabilities IDs for declarative agent manifest](declarative-agent-capabilities-ids.md#microsoft-365-copilot-connectors).

    ```typescript
    namespace MyAgent {
      // Omitted for brevity
      op copilotConnectors is AgentCapabilities.GraphConnectors<TConnections = [
        {
          connectionId: "policieslocal",
        }
      ]>;
      // Omitted for brevity
    }
    ```

    For more information, see [Copilot connectors object](declarative-agent-manifest-1.6.md#copilot-connectors-object).

    > [!NOTE]
    > Not specifying the `TConnections` array causes content from all Copilot connectors in your Microsoft 365 organization that are available to the logged in user to be available to the agent.

1. Select **Provision** in the **Lifecycle** pane of the Microsoft 365 Agents Toolkit.

The declarative agent has access to Copilot connectors content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/graph-connector-content.png" alt-text="A screenshot showing a response from the declarative agent that contains Copilot connector content":::

## Completed

You completed the declarative agent guide for Microsoft 365 Copilot. Now that you're familiar with using TypeSpec to build a declarative agent, you can learn more in the following articles.

- Learn how to [write effective instructions](declarative-agent-instructions.md) for your agent.
- Test your agent with [Copilot developer mode](debugging-agents-copilot-studio.md) to verify if and how the copilot orchestrator selects your knowledge sources for use in response to given prompts.
- Get answers to [frequently asked questions](transparency-faq-declarative-agent.md).
- Learn about an alternative method of building declarative agents with [Copilot Studio](copilot-studio-lite.md).

## Next steps

> [!div class="nextstepaction"]
> [Build an action with TypeSpec](./build-api-plugins-typespec.md)
