---
title: Create declarative agents using Teams Toolkit
author: slevert
description: Learn how to build a declarative agent for Microsoft 365 Copilot using Teams Toolkit.
ms.localizationpriority: medium
ms.topic: overview
ms.author: slevert
ms.date: 05/10/2024
---
<!-- markdownlint-disable MD024 MD051 -->
# Build a declarative agent for Microsoft 365 Copilot

A declarative agent is a customized version of Microsoft 365 Copilot that allows users to create personalized experiences by declaring specific instructions, actions, and knowledge. This article provides information about how to build a declarative agent by using Teams Toolkit and Teams Toolkit CLI.

The following image shows a declarative agent built by using Teams Toolkit.

:::image type="content" source="assets/images/build-dc/ttk-copilot-dc-answer.png" alt-text="Screenshot shows the answer from the declarative agent in Microsoft 365 Copilot.":::

For overview information, see [Declarative agents for Microsoft 365 Copilot](overview-declarative-agent.md).

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer-declarative-agents.md)]

## Prerequisites

Before you start, make sure that Microsoft 365 Copilot is available for your organization. 

The following options are available for your development environment:

- A sandbox Microsoft 365 tenant with Copilot (available in limited preview through [TAP membership](https://developer.microsoft.com/microsoft-365/tap)).
- An [eligible Microsoft 365 or Office 365 production environment](/microsoft-365-copilot/extensibility/prerequisites#customers-with-existing-microsoft-365-and-copilot-licenses) with a Microsoft 365 Copilot license.

The following resources are required to complete the steps described in this article:

- [Teams Toolkit CLI](/microsoftteams/platform/toolkit/teams-toolkit-cli?pivots=version-three#get-started) beta version
- [Teams Toolkit Visual Studio Code extension](/microsoftteams/platform/toolkit/install-teams-toolkit?tabs=vscode#install-a-prerelease-version) prerelease version
- [Kiota .NET tool](/openapi/kiota/install#install-as-net-tool) prerelease version

Make sure that you're familiar with the following standards and guidelines for declarative agents for Microsoft 365 Copilot:

- Standards for compliance, performance, security, and user experience described in [Teams Store validation guidelines](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#teams-apps-extensible-as-plugin-for-microsoft-copilot-for-microsoft-365).

## Create a declarative agent

The following steps describe how to create a declarative agent where you can provide instructions, grounding in Microsoft 365 data, and integration with existing APIs via plugins.

### [Teams Toolkit](#tab/ttk)

To create a declarative agent using Teams Toolkit, follow these steps:

1. Open **Visual Studio Code**.

1. Select **Teams Toolkit > Create a New App**.

    :::image type="content" source="/microsoftteams/platform/assets/images/teams-toolkit-v2/first-tab/create-project.png" alt-text="Screenshot shows the Create New Project button in the Teams Toolkit sidebar.":::

1. Select **Copilot Agent**.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-select-extension.png" alt-text="Screenshot shows the App Capability to select.":::

1. Select **Declarative Agent**.

1. Select **No plugin** to create a basic declarative agent.

1. Select **Default folder** to store your project root folder in the default location.

1. Choose your **Application name**.

1. To sideload your application, select **Provision** in the **Lifecycle** pane.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-provision.png" alt-text="Screenshot shows the Publish menu.":::

### [CLI](#tab/cli)

To create a declarative agent using Teams Toolkit CLI, follow these steps:

1. Enter `teamsapp new` in your CLI and select **Copilot Agent**. Use the arrow keys to switch between options.

    ```bash
    ~ src > demos > teamsapp new
    Some arguments/options are useless because the interactive mode is opened. If you want to run the command non-interactively, add '--interactive false' after your command.
    ? New Project
    (*) Copilot Agent       Create declarative agent, API plugin, or both with Microsoft Copilot orchestrator and LLM.
    ( ) Custom Engine Agent Build intelligent chatbot with Teams AI Library where you manage orchestration and provide your
                             own LLM.
    ( ) Bot                 Conversational or informative chat experiences that can automate repetitive tasks
    ( ) Tab                 Embed your own web content in Teams, Outlook, and the Microsoft 365 app
    ( ) Message Extension   Search and take actions from the text input box in Teams and Outlook
    ( ) Outlook Add-in      Customize the ribbon and Task Pane with your web content for seamless user experience
    ```

1. Select **Declarative Agent**.

1. Select **No plugin**.

1. Enter the location path of the folder where you'd like to save your project and select **Enter**.

1. Enter the name of your application and select **Enter**.

1. Authenticate to Microsoft 365 by entering the following command.

    ```bash
    teamsapp auth login m365
    ```

    Sign in with your Copilot-enabled user.

    ```bash
    (✔) Success: Successfully signed into Microsoft 365.
    Your Microsoft 365 account is: admin@consoto.onmicrosoft.com.
    ```

1. Go to the folder path where your project was created. In this case, we're going to the folder **ttk-declarative-copilot**. Replace the name `ttk-declarative-copilot` with the name of your folder.

    ```bash
    cd ttk-declarative-copilot
    ```

1. Enter the following command to install your app in Microsoft 365 Copilot.

    ```bash
    teamsapp provision --env dev
    ```

---

### Test the agent

1. Navigate to the Copilot application with the URL [https://microsoft365.com/chat](https://microsoft365.com/chat)

    :::image type="content" source="assets/images/build-dc/ttk-copilot-welcome.png" alt-text="Screenshot shows the initial screen from Microsoft 365 Copilot.":::

1. Next to the **New Chat** button, select the conversation drawer icon.

1. Select the declarative agent **Teams toolkit declarative copilot**

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc.png" alt-text="Screenshot shows the landing screen for the declarative agent in Microsoft 365 Copilot.":::

1. Enter a question for your declarative agent and ensure that it replies with "Thanks for using Teams Toolkit to create your declarative copilot!"

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-answer.png" alt-text="Screenshot shows the answer from the declarative agent in Microsoft 365 Copilot.":::

## Add conversation starters

To add conversation starters to your declarative agent, follow these steps:

### [Teams Toolkit](#tab/ttk)

Stay within the opened project in Visual Studio Code.

### [CLI](#tab/cli)

Open the project in Visual Studio Code.

```bash
code .
```

---

Open the `appPackage/declarativeCopilot.json` file and add the `conversation_starters` array with the following content:

```json
{
    "conversation_starters": [
        {
            "title": "Getting Started",
            "text": "How can I get started with Teams Toolkit?"
        },
        {
            "title": "Getting Help",
            "text": "How can I get help with Teams Toolkit?"
        }
    ]
}
```

### [Teams Toolkit](#tab/ttk)

Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

### [CLI](#tab/cli)

Enter the following command to update your app. Make sure your terminal is in your project folder.

```bash
teamsapp provision --env dev
```

---

The updated conversation starters will be available in your declarative agent after you refresh the page.

:::image type="content" source="assets/images/build-dc/ttk-copilot-dc-conversation-starters.png" alt-text="Screenshot shows the conversations starters from the declarative agent in Microsoft 365 Copilot.":::

## Add web content

Open the `appPackage/declarativeCopilot.json` file and add the `capabilities` array with the following content:

```json
{
    "capabilities": [
        {
            "name": "WebSearch"
        }
    ]
}
```

### [Teams Toolkit](#tab/ttk)

Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

### [CLI](#tab/cli)

Enter the following command to update your app. Make sure your terminal is in your project folder.

```bash
teamsapp provision --env dev
```

---

The declarative agent will have access to web content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-dc/ttk-copilot-dc-web-search.png" alt-text="Screenshot shows the web content from the declarative agent in Microsoft 365 Copilot.":::

## Add OneDrive and SharePoint knowledge

Open the `appPackage/declarativeCopilot.json` file and add to the `capabilities` array the following content:

```json
{
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
}
```

> [!NOTE]
>
> - Replace `https://contoso.sharepoint.com/sites/ProductSupport` with your SharePoint site URL.
> - URLs should be full path to SharePoint items (site, document library, folder, or file). You can use the "Copy direct link" option in SharePoint to get the full path or files and folders. To achieve this, right-click on the file or folder and select **Details**. Navigate to **Path** and click on the copy icon.
> - Not specifying the `items_by_url` array will default to the entire corpus of OneDrive and SharePoint content available to the logged in user.

### [Teams Toolkit](#tab/ttk)

Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

### [CLI](#tab/cli)

Enter the following command to update your app. Make sure your terminal is in your project folder.

```bash
teamsapp provision --env dev
```

---

The declarative agent will have access to OneDrive and SharePoint content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-dc/ttk-copilot-dc-od-sp.png" alt-text="Screenshot shows the OneDrive and SharePoint content from the declarative agent in Microsoft 365 Copilot.":::

## Add Microsoft Graph connectors knowledge

Open the `appPackage/declarativeCopilot.json` file and add to the `capabilities` array the following content:

```json
{
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
            "name": "GraphConnectors",
            "connections": [
                {
                    "connection_id": "foodStore"
                }
            ]
        }
    ]
}
```

> [!NOTE]
>
> - Replace `foodStore` with your Microsoft Graph connectors connection ID.
> - Not specifying the `connections` array will default to the entire corpus of Microsoft Graph connectors content available to the logged in user.

### [Teams Toolkit](#tab/ttk)

Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

### [CLI](#tab/cli)

Enter the following command to update your app. Make sure your terminal is in your project folder.

```bash
teamsapp provision --env dev
```

---

The declarative agent will have access to Microsoft Graph connectors content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-dc/ttk-copilot-dc-gc.png" alt-text="Screenshot shows Microsoft Graph connectors content from the declarative agent in Microsoft 365.":::

## Add a plugin

To add a plugin to your declarative agent, follow these steps:

1. Go to **Command Prompt**.
1. Navigate to your project folder. In this case, our project folder is called `ttk-declarative-copilot`. Replace value with the name of your folder.

    ```bash
    cd ttk-declarative-copilot
    ```

1. Enter the following command:

    ```bash
    kiota plugin add --openapi https://aka.ms/repairshub/openapi.json --plugin-name "RepairsHub" --type apiplugin --output appPackage
    ```

    > [!NOTE]
    >
    > Replace the OpenAPI description URL to a local or hosted description to use your own API

1. Open the `appPackage/declarativeCopilot.json` file and add the `actions` array:

```json
{
    "actions": [
        {
            "id": "repairsPlugin",
            "file": "repairshub-apiplugin.json"
        }
    ]
}
```

### [Teams Toolkit](#tab/ttk)

Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

### [CLI](#tab/cli)

Enter the following command to update your app. Make sure your terminal is in your project folder.

```bash
teamsapp provision --env dev
```

---

The declarative agent will have access to your plugin content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-dc/ttk-copilot-dc-plugin.png" alt-text="Screenshot shows the plugin content from the declarative agent in Microsoft 365 Copilot.":::

## Improve the instructions of your declarative agent

Open the `appPackage/declarativeCopilot.json` file and edit the `instructions` value:

```json
{
    "instructions": "You are a declarative copilot and were created with Team Toolkit. You are an expert at creating poems. Every time a user asks a question, you **must** turn the answer into a poem. The poem **must** not use the quote markdown and use regular text."
}
```

> [!NOTE]
> The `instructions` value is on a single line. Use `\\n` to add a new line.

:::image type="content" source="assets/images/build-dc/ttk-copilot-dc-instructions.png" alt-text="Screenshot shows an updates answer based on the instructions from the declarative agent in Microsoft 365 Copilot.":::

### [Teams Toolkit](#tab/ttk)

Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

### [CLI](#tab/cli)

Enter the following command to update your app. Make sure your terminal is in your project folder.

```bash
teamsapp provision --env dev
```

---

The declarative agent will have access to your updated instructions after you reload the page.

## Ensure responsive Adaptive Cards across Microsoft 365 Copilot hubs

Adaptive cards must be designed to be responsive across various surface sizes. This ensures a seamless user experience, regardless of the device or platform being used. To achieve this, make sure to validate the adaptive cards on different Microsoft 365 Copilot hubs, including Teams, Word, and PowerPoint. Doing so ensures that the adaptive cards function optimally and provide a consistent experience across all platforms. Apply the following best practices:

- In some apps, Adaptive Cards are rendered at a maximum width of 276px. Optimize the responsiveness of the card's content so that it renders well at this size.
- Use a single column layout for the adaptive content for smaller width viewports.
- Use percentages to define the width of elements within the Adaptive Cards.
