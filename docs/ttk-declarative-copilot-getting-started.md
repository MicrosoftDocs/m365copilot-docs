---
title: Create declarative copilots using Teams Toolkit
author: slevert
description: Learn how to build a declarative copilot for Copilot for Microsoft 365 using Teams Toolkit.
ms.localizationpriority: medium
ms.topic: overview
ms.author: slevert
ms.date: 05/10/2024
---
<!-- markdownlint-disable MD025 MD051 -->
# Build a declarative copilot for Copilot for Microsoft 365

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer-copilot.md)]

> [!NOTE]
>
> * Ensure that Copilot for Microsoft 365 is available for your organization. You have two ways to get a developer environment for Copilot:
>   * A sandbox Microsoft 365 tenant with Copilot (available in limited preview through [TAP membership](https://developer.microsoft.com/microsoft-365/tap)).
>   * An [eligible Microsoft 365 or Office 365 production environment](/microsoft-365-copilot/extensibility/prerequisites#customers-with-existing-microsoft-365-and-copilot-licenses) with a Copilot for Microsoft 365 license.

## What is a declarative copilot?

:::image type="content" source="assets/images/build-dc/ttk-copilot-dc-answer.png" alt-text="Screenshot shows the answer from the declarative copilot in Copilot for Microsoft 365.":::

To learn about what is a declarative copilot, see [Declarative copilots for Microsoft 365 overview](overview-declarative-copilot.md).

## Prerequisites

Before you get started, ensure that you're familiar with the following standards and guidelines for declarative copilots for Copilot for Microsoft 365:

* Standards for compliance, performance, security, and user experience outlined in [Teams Store validation guidelines](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#teams-apps-extensible-as-plugin-for-microsoft-copilot-for-microsoft-365).

## Create a declarative copilot

Let's create a declarative copilot where you can provide instructions, grounding in Microsoft 365 data, and integration with existing APIs via plugins.

Before you get started, ensure that you install the following tools to build and deploy your declarative copilot:

### Environment variables

> [!NOTE]
>
> This step is temporary until declarative copilots are available publicly.

Set the environment variable **TEAMSFX_DECLARATIVE_COPILOT** and **KIOTA_CONFIG_PREVIEW** to **true**.

#### [Windows](#tab/windows)

Open a PowerShell terminal and run the following commands.

```powershell
[Environment]::SetEnvironmentVariable("TEAMSFX_DECLARATIVE_COPILOT", 'true', "User")
[Environment]::SetEnvironmentVariable("KIOTA_CONFIG_PREVIEW", "true", "User")
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User") 
```

#### [Linux](#tab/linux)

Open your environment configuration file (for example, **~/.bashrc** or **~/.zshrc**) and add the following line:

```bash
sudo echo 'export TEAMSFX_DECLARATIVE_COPILOT=true' >> ~/.bashrc
sudo echo 'export KIOTA_CONFIG_PREVIEW=true' >> ~/.bashrc
source ~/.bashrc
```

#### [Mac OSX](#tab/mac-os)

Open your environment configuration file (`sudo vi /etc/launchd.conf`) and add the following line:

```bash
setenv TEAMSFX_DECLARATIVE_COPILOT true
setenv KIOTA_CONFIG_PREVIEW true
egrep -v '^\s*#' /etc/launchd.conf | launchctl
```

---

> [!WARNING]
>
> Close and reopen your terminal to ensure all changes are taken into account.

### Install Teams Toolkit CLI

Run the following command in your Command Prompt or in a PowerShell terminal.

```bash
npm install -g @microsoft/teamsapp-cli
teamsapp -h
```

For more details see [Install Teams Toolkit CLI](/microsoftteams/platform/toolkit/teams-toolkit-cli?pivots=version-three#get-started).

### Install Teams Toolkit Visual Studio Code extension

Follow the steps in [Install Teams Toolkit Visual Studio Code extension](microsoftteams/platform/toolkit/install-teams-toolkit?tabs=vscode#install-a-prerelease-version) to install the pre-release version.

### Install Kiota

If you have the [.NET SDK](https://dotnet.microsoft.com/en-us/download) installed, you can install Kiota as a [.NET tool](/dotnet/core/tools/global-tools).

To install the tool, execute the following command in your Command Prompt or in a PowerShell terminal.

```bash
dotnet tool install --global Microsoft.OpenApi.Kiota
```

For more details see [Install Kiota](/openapi/kiota/install#install-as-net-tool).

### [Teams Toolkit](#tab/ttk)

To create a declarative copilot using Teams Toolkit, follow these steps:

* Open **Visual Studio Code**.
* Select **Teams Toolkit > Create a New App**.

    :::image type="content" source="/microsoftteams/platform/assets/images/teams-toolkit-v2/first-tab/create-project.png" alt-text="Screenshot shows the Create New Project button in the Teams Toolkit sidebar.":::

* Select **Copilot Extensions**.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-select-extension.png" alt-text="Screenshot shows the App Capability to select.":::

* Select **Declarative copilot**.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-select-dc.png" alt-text="Screenshot shows the type of Copilot extension to select.":::

* Select **No plugin** to create a basic declarative copilot.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-select-no-plugin.png" alt-text="Screenshot shows the type of declarative copilot to select.":::

* Select **Default folder** to store your project root folder in the default location..

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-select-default-folder.png" alt-text="Screenshot shows the folder to select.":::

* Choose your **Application name**.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-select-name.png" alt-text="Screenshot shows the name of the application to create.":::

* You application is now scaffolded and available for publishing.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-scaffolded.png" alt-text="Screenshot shows the fully scaffolded application.":::

* To publish your application, select **Publish**.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-provision.png" alt-text="Screenshot shows the Publish menu.":::

### [CLI](#tab/cli)

To create a declarative copilot using Teams Toolkit CLI, follow these steps:

* Go to **Command Prompt**.
* Enter **`teamsapp new`** in the terminal and select **Declarative copilot**. Use the arrow keys to switch between options.

    ```bash
    ~ src > demos > teamsapp new
    Some arguments/options are useless because the interactive mode is opened. If you want to run the command non-interactively, add '--interactive false' after your command.
    ? New Project
    ◉ Declarative Copilot Author a Declarative Copilot
    ◯ Custom Copilot      Build intelligent chatbot in Microsoft Teams easily using Teams AI Library
    ◯ Bot                 Conversational or informative chat experiences that can automate repetitive tasks
    ◯ Tab                 Embed your own web content in Teams, Outlook, and the Microsoft 365 app
    ◯ Message Extension   Search and take actions from the text input box in Teams and Outlook
    ◯ Outlook Add-in      Customize the ribbon and Task Pane with your web content for seamless user experience
    ```

* Select **Basic declarative copilot**.

    ```bash
    ~ > src > demos > teamsapp new
    Some arguments/options are useless because the interactive mode is opened. If you want to run the command non-interactively, add '--interactive false' after your command.
    ? New Project Declarative Copilot
    ? Choose Declarative Copilot Type
    ◉ Basic Declarative Copilot                               A declarative Copilot skeleton you can author without any plugin
    ◯ Declarative Copilot with a plugin using Azure Functions A declarative Copilot containing a Copilot plugin with a new API from Azure Functions
    ```

* Enter the location path of the folder where you'd like to save your project and select **Enter**.
* Enter the name of your application and select **Enter**.

    ```bash
    ~ > src > demos > teamsapp new
    Some arguments/options are useless because the interactive mode is opened. If you want to run the command non-interactively, add '--interactive false' after your command.
    ? New Project Declarative Copilot
    ? Choose Declarative Copilot Type Basic Declarative Copilot
    ? Directory where the project folder will be created in ./
    ? Application Name ttk-declarative-copilot
    ████████████████████  100% | [1/1] Create  (✔) Done.
    Project created at: ~/src/demos/ttk-declarative-copilot
    ```

* Authenticate to Microsoft 365 by entering the following command.

    ```bash
    teamsapp auth login m365
    ```

    You'll see the following result.

    ```bash
    Log in to your Microsoft 365 account - opening default web browser at https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=...&scope=https%3A%2F%2Fdev.teams.microsoft.com%2FAppDefinitions.ReadWrite%20openid%20profile%20offline_access&redirect_uri=http%3A%2F%2Flocalhost%3A35177&client-request-id=...&response_mode=query&response_type=code&x-client-SKU=msal.js.node&x-client-VER=...&x-client-OS=...&x-client-CPU=...&client_info=1&code_challenge=...&code_challenge_method=S256&prompt=select_account#
    ```

    Once you log in, you'll see the following result.

    ```bash
    (✔) Success: Successfully signed into Microsoft 365.
    Your Microsoft 365 account is: admin@consoto.onmicrosoft.com.
    ```

* Go to the folder path where your project was created.
    In this case, we are going to the folder **ttk-declarative-copilot**. Replace the name `ttk-declarative-copilot` with the name of your folder.

    ```bash
    cd ttk-declarative-copilot
    ```

* Enter the following command to install your app in Copilot for Microsoft 365.

    ```bash
    teamsapp provision --env dev
    ```

    You'll see the following result.

    ```bash
    Executing provision

    Lifecycle stage: provision(4 step(s) in total). The following actions will be executed:
    (1/4) Action teamsApp/create: create a Teams app.
    (2/4) Action teamsApp/zipAppPackage: build a Teams app package.
    (3/4) Action teamsApp/update: update a Teams app.
    (4/4) Action teamsApp/extendToM365: acquire an Microsoft 365 title with the app package

    Executing lifecycle provision
    (√)Done: Teams Package ~/src/demos/ttk-declarative-copilot/appPackage/build/appPackage.dev.zip built successfully! 
    TitleId: ...
    AppId: ...
    Finished Executing lifecycle provision. Result: {"TEAMS_APP_ID":"...","TEAMS_APP_TENANT_ID":"...","TEAMS_APP_UPDATE_TIME":"...","M365_TITLE_ID":"...","M365_APP_ID":"..."}
    Execution summary:

    Summary:
    (√) Done: Lifecycle stage provision was executed successfully.
      (√) Done: teamsApp/create was executed successfully.
        (√) Done: Teams app ... created successfully
      (√) Done: teamsApp/zipAppPackage was executed successfully.
      (√) Done: teamsApp/update was executed successfully.
        (√) Done: Teams app ... updated successfully
      (√) Done: teamsApp/extendToM365 was executed successfully.
        (√) Done: The Microsoft 365 title has been acquired successfully (...).

    ████████████████████  100% | [4/4] Provision  (✔) Done.
    4/4 actions in provision stage executed successfully.
    4/4 actions in provision stage executed successfully.
      Created environment file (secret) at ~/src/demos/ttk-declarative-copilot/env/.env.dev.user 
    ```

---

* Navigate to the Copilot application with the URL [https://microsoft365.com/chat](https://microsoft365.com/chat)

    :::image type="content" source="assets/images/build-dc/ttk-copilot-welcome.png" alt-text="Screenshot shows the initial screen from Copilot for Microsoft 365.":::
  
* Next to the **New Chat** button, select the conversation drawer icon.
* Select the declarative copilot **Teams toolkit declarative copilot**

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc.png" alt-text="Screenshot shows the landing screen for the declarative copilot in Copilot for Microsoft 365.":::

* Enter a question for your declarative copilot and ensure that it replies with "Thanks for using Teams Toolkit to create your declarative copilot!"

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-answer.png" alt-text="Screenshot shows the answer from the declarative copilot in Copilot for Microsoft 365.":::

## Add conversation starters

To add conversation starters to your declarative copilot, follow these steps:

### [Teams Toolkit](#tab/ttk)

* Stay within the opened project in Visual Studio Code.

### [CLI](#tab/cli)

* Open the project in Visual Studio Code.

    ```bash
    code .
    ```

---

* Open the `appPackage/declarativeCopilot.json` file and add the `conversation_starters` array with the following content:

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

* Using Teams Toolkit, select **Publish**.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-provision.png" alt-text="Screenshot shows the Publish menu.":::

### [CLI](#tab/cli)

* Using the Teams Toolkit CLI, enter the following command to update your app. Make sure your terminal is in your project folder.

    ```bash
    teamsapp provision --env dev
    ```

---

* The updated conversation starters will be available in your declarative copilot after you refresh the page.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-conversation-starters.png" alt-text="Screenshot shows the conversations starters from the declarative copilot in Copilot for Microsoft 365.":::

## Add web content

To add web content using Bing to your declarative copilot, follow these steps:

* Open the `appPackage/declarativeCopilot.json` file and add the `capabilities` array with the following content:

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

* Using Teams Toolkit, select **Publish**.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-provision.png" alt-text="Screenshot shows the Publish menu.":::

### [CLI](#tab/cli)

* Using the Teams Toolkit CLI, enter the following command to update your app. Make sure your terminal is in your project folder.

    ```bash
    teamsapp provision --env dev
    ```

---

* The declarative copilot will have access to web content to generate its answers after you reload the page.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-web-search.png" alt-text="Screenshot shows the web content from the declarative copilot in Copilot for Microsoft 365.":::

## Add OneDrive and SharePoint knowledge

To add OneDrive and SharePoint knowledge to your declarative copilot, follow these steps:

* Open the `appPackage/declarativeCopilot.json` file and add to the `capabilities` array the following content:

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
    > * Replace `https://contoso.sharepoint.com/sites/ProductSupport` with your SharePoint site URL.
    > * URLs should be full path to SharePoint items (site, document library, folder, or file). You can use the "Copy direct link" option in SharePoint to get the full path or files and folders. To achieve this, right-click on the file or folder and select **Details**. Navigate to **Path** and click on the copy icon.
    > * Not specifying the `items_by_url` array will default to the entire corpus of OneDrive and SharePoint content available to the logged in user.

### [Teams Toolkit](#tab/ttk)

* Using Teams Toolkit, select **Publish**.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-provision.png" alt-text="Screenshot shows the Publish menu.":::

### [CLI](#tab/cli)

* Using the Teams Toolkit CLI, enter the following command to update your app. Make sure your terminal is in your project folder.

    ```bash
    teamsapp provision --env dev
    ```

---

* The declarative copilot will have access to OneDrive and SharePoint content to generate its answers after you reload the page.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-odsp.png" alt-text="Screenshot shows the OneDrive and SharePoint content from the declarative copilot in Copilot for Microsoft 365.":::

## Add Graph Connectors knowledge

To add Graph Connectors knowledge to your declarative copilot, follow these steps:

* Open the `appPackage/declarativeCopilot.json` file and add to the `capabilities` array the following content:

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
                        "connection_id": "foodstore"
                    }
                ]
            }
        ]
    }
    ```

    > [!NOTE]
    >
    > * Replace `foodstore` with your Graph Connectors connection ID.
    > * Foodsie is a Graph Connectors sample available [here](https://github.com/pnp/graph-connectors-samples/tree/main/samples/nodejs-typescript-food-catalog).
    > * Not specifying the `connections` array will default to the entire corpus of Graph Connectors content available to the logged in user.

### [Teams Toolkit](#tab/ttk)

* Using Teams Toolkit, select **Publish**.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-provision.png" alt-text="Screenshot shows the Publish menu.":::

### [CLI](#tab/cli)

* Using the Teams Toolkit CLI, enter the following command to update your app. Make sure your terminal is in your project folder.

    ```bash
    teamsapp provision --env dev
    ```

---

* The declarative copilot will have access to GraphConnectors content to generate its answers after you reload the page.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-gc.png" alt-text="Screenshot shows Graph Connectors content from the declarative copilot in Copilot for Microsoft 365.":::

## Add a plugin

To add a plugin to your declarative copilot, follow these steps:

* Go to **Command Prompt**.
* Navigate to your project folder. In this case, our project folder is called `ttk-declarative-copilot`. Replace this with the name of your folder.

    ```bash
    cd ttk-declarative-copilot
    ```

* Execute the following command:

    ```bash
    kiota plugin add --openapi https://aka.ms/repairshub/openapi.json --plugin-name "RepairsHub" --type apiplugin --output appPackage
    ```

    You'll see the following result.

    ```bash
    warn: Kiota.Builder.KiotaBuilder[0]
          OpenAPI warning: #/paths/~1repairs/get/responses/200/content/application~1json/schema/items/properties/image - The format uri is not supported by Kiota and the string type will be used.
    warn: Kiota.Builder.KiotaBuilder[0]
          OpenAPI warning: #/paths/~1repairs/post/requestBody/content/application~1json/schema/properties/image - The format uri is not supported by Kiota and the string type will be used.
    warn: Kiota.Builder.KiotaBuilder[0]
          OpenAPI warning: #/paths/~1repairs/patch/requestBody/content/application~1json/schema/properties/image - The format uri is not supported by Kiota and the string type will be used.
    Generation completed successfully
    Client base url set to https://piercerepairsapi.azurewebsites.net
    
    Hint: use the --include-path and --exclude-path options with glob patterns to filter the paths generated.
    Example: kiota plugin add --include-path "**/foo" -a "~/src/demos/ttk-declarative-copilot/.kiota/apimanifest.json#RepairsHub"
    ```

    > [!NOTE]
    >
    > Replace the OpenAPI description URL to a local or hosted description to use your own API

* Open the `appPackage/declarativeCopilot.json` file and add the `actions` array:

    ```json
    {
        "actions": [
            { 
                "id": "repairsPlugin",
                "file": "repairshub-microsoft.json"
            }
        ]
    }
    ```

### [Teams Toolkit](#tab/ttk)

* Using Teams Toolkit, select **Publish**.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-provision.png" alt-text="Screenshot shows the Publish menu.":::

### [CLI](#tab/cli)

* Using the Teams Toolkit CLI, enter the following command to update your app. Make sure your terminal is in your project folder.

    ```bash
    teamsapp provision --env dev
    ```

---

* The declarative copilot will have access to your plugin content to generate its answers after you reload the page.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-plugin.png" alt-text="Screenshot shows the plugin content from the declarative copilot in Copilot for Microsoft 365.":::

## Improve the instructions of your declarative copilot

To improve the instructions of your declarative copilot, follow these steps:

* Open the `appPackage/declarativeCopilot.json` file and edit the `instructions` value:

    ```json
    {
        "instructions": "You are a declarative copilot and were created with Team Toolkit. You are an expert at creating poems. Every time a user asks a question, you **must** turn the answer into a poem. The poem **must** not use the quote markdown and use regular text."
    }
    ```

    > [!NOTE]
    >
    > * The `instructions` value is on a single line. Use `\\n` to add a new line.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-instructions.png" alt-text="Screenshot shows an updates answer based on the instructions from the declarative copilot in Copilot for Microsoft 365.":::

### [Teams Toolkit](#tab/ttk)

* Using Teams Toolkit, select **Publish**.

    :::image type="content" source="assets/images/build-dc/ttk-copilot-dc-provision.png" alt-text="Screenshot shows the Publish menu.":::

### [CLI](#tab/cli)

* Using the Teams Toolkit CLI, enter the following command to update your app. Make sure your terminal is in your project folder.

    ```bash
    teamsapp provision --env dev
    ```

---

* The declarative copilot will have access to your updated instructions after you reload the page.
