---
title: Build API plugins for Microsoft 365 Copilot with the Office JavaScript Library
description: Learn how to build API plugins for Microsoft 365 Copilot with the Office JavaScript Library
author: rickki
ms.author: rickki
ms.localizationpriority: medium
ms.date: 11/11/2025
ms.topic: how-to
---

# Build API plugins for Microsoft 365 Copilot with the Office JavaScript Library (preview)

> [!NOTE]
> The development feature described in this article is in preview. We encourage you to experiment with this feature, but it shouldn't be used in a production plugin. The following are the limitations during the initial preview:
>
> - The feature is only enabled for Office on Windows and Office on the web. We're working to bring support to Office on Mac.
> - The feature is only enabled for Excel, PowerPoint, or Word. We're working to bring support to Outlook.

A plugin for a declarative agent can call the APIs in the [Office JavaScript Library](/office/dev/add-ins/develop/understanding-the-javascript-api-for-office) to perform read and write operations on the content and metadata of an Office document that is currently open in an Office application. This ability enables Copilot to work with Office documents in precise and error-free ways that would otherwise require an Office Add-in.

## The relation of Copilot agents to the Office Add-in framework

Both Office Add-ins and declarative agent plugins call APIs in the Office JavaScript Library, and a Microsoft 365 extension that uses the library can include either a plugin, an add-in, or both. The best approach depends on the user scenarios that the extension should enable.

- If the extension should provide simple, fast actions that don't need parameters passed to them, include only an add-in with custom ribbon buttons or menus, called [add-in commands](/office/dev/add-ins/design/add-in-commands).
- If the extension needs a dashboard experience, needs the user to configure settings, needs to display metadata about the content of the Office document, or needs a page-like experience for any other reason, include an add-in with a task pane.
- If the extension needs to provide complex actions that require parameters passed at runtime or needs a natural language interface, include a Copilot agent.

## Scenarios

The following are some selected ways in which a Copilot agent that calls Office JavaScript Library APIs enhances the value of a Microsoft 365 extension.

- **Content analysis:** An agent can be used to analyze the content of a document, presentation, or spreadsheet and take action depending on what it finds. The following are examples.

  - An agent analyzes a Request for Proposal (RFP) and then fetches the answers to questions in the RFP from a backend system. The user simply asks the agent to "Fill in the answers you know to the questions."
  - An agent analyzes a document, or a table in a spreadsheet, for content that implies certain actions must be taken, either in the document itself or elsewhere in the customer's business systems. The user might ask the agent to "Review the document for any items I missed on the audit list."

- **Trusted insertion of data:** If you ask a typical AI engine a question, it combines information it finds and compose an answer; a process that can introduce inaccuracies. But a Copilot agent based on an add-in can insert data *unchanged* from a trusted source. Some examples:

  - Consider an agent that enables the insertion of legal research into Word where it can then be edited. A user asks the agent "In what circumstances can a lessor unilaterally break a lease of residential space in Indiana?" The agent then fetches content, unchanged, from precedents and statutes, and inserts it into the document.
  - Consider an agent that manages the inventory of digital assets. In the Copilot agent chat, a user asks "Insert a table of our color photos with the name of each, the number of times it was downloaded, and its size in megabytes, sorted in order from most downloaded." The agent then fetches this data, unchanged, from the system of record and inserts the table into an Excel spreadsheet.

When the agent is combined with an add-in, even more scenarios are enabled. Including a Microsoft 365 Copilot agent with an Office Add-in provides at least two benefits to the add-in:

- Copilot becomes a natural language interface for the add-in's functionality.
- The agent can pass parameters to the JavaScript it invokes, which isn't possible when a [function command](/office/dev/add-ins/design/add-in-commands#types-of-add-in-commands) in an add-in is invoked from a button or menu item.

Learning how to use the add-in is one way that an agent can enhance an add-in. When a user needs to perform multiple steps or tasks with the add-in to achieve a goal, the chat interface of Copilot can ease the process of getting started with the add-in. For example, consider a legal firm that needs to have a list of questions that must be answered about each lease that it prepares. Creating this list of questions can be time-consuming and labor-intensive. But a Copilot agent can be prompted to produce a first draft list of questions and the insert them into a Word document using the Office JavaScript Library.

## Create your first Office JavaScript Library plugin

The following are the major steps for creating an API plugin for a Copilot agent that calls Office JavaScript Library APIs.

- Ensure that you meet the [Prerequisites](#prerequisites)
- [Create the project](#create-the-project)
- [Configure the manifest](#configure-the-manifest)
- [Configure the declarative agent](#configure-the-declarative-agent)
- [Configure the plugin](#configure-the-plugin)
- [Create the JavaScript functions](#create-the-javascript-functions)
- [Copy project configuration files](#copy-project-configuration-files)
- [Test the agent and plugin](#test-the-agent-and-plugin)
- [Make changes in the agent](#make-changes-in-the-agent)

### Prerequisites

- Requirements specified in [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org) 18, 20, 22, or 24
- [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit)

### Create the project

Begin by creating a basic declarative agent.

1. Open **Visual Studio Code**.
1. Select **Microsoft 365 Agents Toolkit** on the activity bar.
1. Select **Create a New Agent/App**.

    :::image type="content" source="assets/images/build-da/atk/create-new-app-agent.png" alt-text="A screenshot of the Create a New Agent/App button in the Microsoft 365 Agents Toolkit app bar":::

1. Select **Declarative Agent**.

    :::image type="content" source="assets/images/build-da/atk/select-copilot-agent-atk.png" alt-text="A screenshot of the New Project options with Declarative Agent at the top.":::

1. Select **No Action** to create a basic declarative agent.
1. In the **Workspace Folder** list, either select **Default folder** to store your project root folder in the default location or browse to a folder where you want to put the new agent project.
1. Enter `Excel Agent` as the **Application Name** and press **Enter**.
1. The project opens in a new Visual Studio Code window. Close the original Visual Studio Code window.

### Configure the manifest

The following steps configure the manifest.

1. Open the **manifest.json** file in the **appPackage** folder.
1. You need to use the preview version of the manifest schema, so replace the `$schema` and `manifestVersion` properties with the following.

    ```json
    "$schema": "https://developer.microsoft.com/json-schemas/teams/vDevPreview/MicrosoftTeams.schema.json",
    "manifestVersion": "devPreview",
    ```

1. At the root of the manifest, add the following [authorization](/microsoft-365/extensibility/schema/root-authorization) property. This property gives your agent permission to read and write to Office documents.

    ```json
    "authorization": {
      "permissions": {
        "resourceSpecific": [
          {
            "name": "Document.ReadWrite.User",
            "type": "Delegated"
          }
        ]
      }
    }
    ```

1. At the root of the manifest, add the following [extensions](/microsoft-365/extensibility/schema/element-extensions) property. About this code, note the following.

    - The [`requirements.scopes`](/microsoft-365/extensibility/schema/requirements-extension-element) property ensures that the agent is only available in Excel, not other Office applications.
    - The object in the [`runtimes`](/microsoft-365/extensibility/schema/extension-runtimes-array) configures the JavaScript runtime that Office uses to run the Office JavaScript Library APIs that your agent invokes.
    - The [`code.script`](/microsoft-365/extensibility/schema/extension-runtime-code#script) property specifies the URL of a JavaScript file that contains the functions that call the Office JavaScript Library APIs. That same file contains an invocation of the [Office.actions.associate](/javascript/api/office/office.actions#office-office-actions-associate-member(1)) method to map the function to an action ID. You create this file in a later step.
    - The [`code.page`](/microsoft-365/extensibility/schema/extension-runtime-code#page) property specifies the URL of a web page that contains an embedded `<script>` tag that loads the file that is reference in the `code.page` property. You create this file in a later step.
    - The runtime object includes an [`actions`](/microsoft-365/extensibility/schema/extension-runtimes-actions-item) array that includes an action object
    - The value of the [`actions.id`](/microsoft-365/extensibility/schema/extension-runtimes-actions-item#id) property is the same action ID that is passed to the call of `associate`.
    - The [`actions.type`](/microsoft-365/extensibility/schema/extension-runtimes-actions-item#type) property is set to `executeDataFunction`, which is the type that can accept parameters when invoked by Copilot.

    ```json
    "extensions": [
      {
        "requirements": {
          "scopes": [
            "workbook"
          ]
        },
        "runtimes": [
          {
            "id": "ContosoAgentRuntime",
            "type": "general",
            "code": {
              "page": "https://localhost:3000/commands.html",
              "script": "https://localhost:3000/commands.js"
            },
            "lifetime": "short",
            "actions": [
              {
                "id": "FillColor",
                "type": "executeDataFunction"
              }
            ]
          }
        ]
      }
    ]
    ```

The reference documentation for the manifest JSON is at [Microsoft 365 app manifest schema reference](/microsoft-365/extensibility/schema/).

### Configure the declarative agent

1. Open the file **declarativeAgent.json** in the **appPackage** folder.
1. Replace its contents with the following code. About this JSON, note the following:

    - The `actions.id` property in this file is the collective ID of all the functions in the file specified in `actions.file`. It normally shouldn't match the `extensions.runtimes.actions.id` in the manifest, which is the ID of a specific action.
    - You create the file that you specify in the `actions.file` property in a later next step.

    ```json
    {
      "$schema": "https://developer.microsoft.com/json-schemas/copilot/declarative-agent/v1.5/schema.json",
      "version": "v1.5",
      "name": "Excel Agent",
      "description": "Agent for working with Excel cells.",
      "instructions": "You are an agent for working with an add-in. You can work with any cells, not just a well-formatted table.",
      "conversation_starters": [
        {
          "title": "Change cell color",
          "text": "I want to change the color of cell B2 to orange"
        }
      ],
      "actions": [
        {
          "id": "ExcelActions",
          "file": "Office-API-local-plugin.json"
        }
      ]
    }
    ```

The reference documentation for declarative agents is at [Declarative agent schema 1.6 for Microsoft 365 Copilot](declarative-agent-manifest-1.6.md).

### Configure the plugin

1. Create a file in the **appPackage** folder and give it the name assigned to the `actions.file` property in the **declarativeAgent.json** file: **Office-API-local-plugin.json**.
1. Paste the following content into the file. About this JSON, note the following details:

   - The API plugin configuration file specifies the functions of the plugin in the sense of agent actions, not JavaScript functions. It includes the instructions for each action. It also configures the runtime for Copilot. (You configured the runtime for Office in the manifest in an earlier step.)
   - The `functions.name` must match the `extensions.runtimes.actions.id` property in the add-in manifest: `FillColor`.
   - The `runtimes.run_for_functions` array must include either the same string as `functions.name` or a wildcard string that matches it.
   - The `runtimes.spec.local_endpoint` property specifies that the JavaScript function that is associated with the `FillColor` string is available in the Office JavaScript Library, rather than in some REST endpoint.

    ```json
    {
      "$schema": "https://developer.microsoft.com/json-schemas/copilot/plugin/v2.3/schema.json",
      "schema_version": "v2.3",
      "name_for_human": "Excel Agent",
      "description_for_human": "Excel actions in agent",
      "namespace": "addInFunction",
      "functions": [
        {
          "name": "FillColor",
          "description": "FillColor changes a single cell location to a specific color.",
          "parameters": {
            "type": "object",
            "properties": {
              "Cell": {
                "type": "string",
                "description": "A cell location in the format of A1, B2, etc.",
                "default": "B2"
              },
              "Color": {
                "type": "string",
                "description": "A color in hex format, e.g., #30d5c8",
                "default": "#30d5c8"
              }
            },
            "required": [
              "Cell",
              "Color"
            ]
          },
          "returns": {
            "type": "string",
            "description": "A string indicating the result of the action."
          },
          "states": {
            "reasoning": {
              "description": "`FillColor` changes the color of a single cell based on the grid location and a color value.",
              "instructions": "The user will pass ask for a color that isn't in the hex format needed in most cases, make sure to convert to the closest approximation in the right format."
            },
            "responding": {
              "description": "`FillColor` changes the color of a single cell based on the grid location and a color value.",
              "instructions": "If there is no error present, tell the user the cell location and color that was set."
            }
          }
        }
      ],
      "runtimes": [
        {
          "type": "LocalPlugin",
          "spec": {
            "local_endpoint": "Microsoft.Office.Addin"
          },
          "run_for_functions": [
            "FillColor"
          ],
          "auth": {
            "type": "None"
          }
        }
      ]
    }
    ```

The reference documentation for API plugins is at [API plugin manifest schema 2.3 for Microsoft 365 Copilot](api-plugin-manifest-2.3.md).

## Create the JavaScript functions

1. In the root of the project, create folder named **src**, and then create a subfolder under it named **commands**.
1. In the **commands** folder, create a file named **commands.ts** and give it the following content. Note the following details about this code.

    - The `fillColor` function sets the background color of the specified cell to the specified color. It calls objects and methods from the Office JavaScript Library, which is loaded into the JavaScript runtime by a file that you create in a later step.
    - The first parameter of the `associate` method must *exactly* match both the `extensions.runtimes.actions.id` property in the manifest and the `functions.name` property in the API plugins JSON.
    - The `message` parameter is an object passed by the Copilot runtime to the JavaScript runtime in Office. It's an object that contains the cell address and color parameters as the user specified in a natural language prompt, such as "Set cell C4 to green."

    ```typescript
    async function fillColor(cell, color) {
      // @ts-ignore
      await Excel.run(async (context) => {
        context.workbook.worksheets.getActiveWorksheet().getRange(cell).format.fill.color = color;
        await context.sync();
      })
    }
    // @ts-ignore
    Office.onReady((info) => {
      // @ts-ignore
      Office.actions.associate("FillColor", async (message) => {
        const { Cell: cell, Color: color } = JSON.parse(message);
        await fillColor(cell, color);
        return "Cell color changed.";
      })
    });
    ```

1. In the **commands** folder, create a file named **commands.html** and give it the following content. This file is needed because JavaScript files can't be directly loaded into the type of runtime that Office uses for Copilot API plugins. Instead, an HTML file with a `<script>` element loads the JavaScript. Note the following details about this file.

    - Since the file's only purpose is to load other files, the `<body>` element is empty. The file has no UI and is never displayed to users.
    - It loads the file **office.js**, which is the Office JavaScript Library, from a Microsoft server.
    - It *doesn't* have a `<script>` element to load a **commands.js** file (transpiled from the **commands.ts** that you created) because this `<script>` element is added at build-time by a file you add in a later step.
    - When project is built and served on a server, the URL of this HTML file matches the value of the `extensions.runtimes.code.page` property in the manifest. See [Configure the manifest](#configure-the-manifest) earlier in this article.

    ```html
    <html>

    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />

        <!-- Office JavaScript API -->
        <script type="text/javascript" src="https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js"></script>
    </head>

    <body>
    </body>

    </html>
    ```

### Copy project configuration files

Office uses the infrastructure of Office Add-ins to run API plugins for the Office JavaScript library. During the initial preview period for local Office API plugins, there isn't an Agents Toolkit template for this type of project. For this reason, some files used by Agents Toolkit for the development of Office Add-ins need to be added to the project. The fastest way to generate those files is to create an add-in project, copy the needed files from the add-in project to this agent project, and then make a few light edits.

1. Open a new **Visual Studio Code** window.
1. Select **Microsoft 365 Agents Toolkit** on the activity bar.
1. Select **Create a New Agent/App**.
1. Select **Office Add-in**.
1. Select **Task pane**.
1. In the **Workspace Folder** list, either select **Default folder** to store your project root folder in the default location or browse to a folder where you want to put the new agent project.
1. Enter any string as the **Application Name** and press **Enter**.
1. The project opens in a new Visual Studio Code window. Close both the new Visual Studio Code window and the one from which you created the project.
1. Copy the following files from the root of the add-in project that you created to the root of API plugin project. After you copy the files, delete the add-in project folder.

    - **babel.config.json**
    - **package.json**
    - **tsconfig.json**
    - **webpack.config.js**

    > [!NOTE]
    > Some of the content of these files isn't needed for your API plugin project. In the remaining steps in this section, you make only the minimal changes to these files that are needed to ensure that the plugin sideloads and runs properly. We're working hard to develop an Agents Toolkit project template for plugins that call Office JavaScript Library APIs.

1. In Visual Studio Code, open the **webpack.config.js** file.
1. Find the definition of the `entry` object, and then delete the `taskpane` property from it. When you're done, the `entry` property should look like the following.

    ```javascript
    entry: {
      polyfill: ["core-js/stable", "regenerator-runtime/runtime"],
      commands: "./src/commands/commands.ts",
    },
    ```

1. Find the definition of the `plugins` array. At the top is a call of `new HtmlWebpackPlugin` for an add-in task pane. Delete this call of `new HtmlWebpackPlugin`. When you're done, the entire `plugins` array should look like the following.

    ```javascript
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "appPackage/assets/*",
            to: "assets/[name][ext][query]",
          },
          {
            from: "appPackage/manifest*.json",
            to: "[name]" + "[ext]",
            transform(content) {
              if (dev) {
                return content;
              } else {
                return content.toString().replace(new RegExp(urlDev, "g"), urlProd);
              }
            },
          },
        ],
      }),
      new HtmlWebpackPlugin({
        filename: "commands.html",
        template: "./src/commands/commands.html",
        chunks: ["polyfill", "commands"],
      }),
    ],
    ```

1. In the **appPackage** folder, there are two image files; **color.png** and **outline.png**. To work with the add-in tooling infrastructure, these files need to be moved. Create a subfolder named **assets** in the **appPackage** folder and move the two files into it.
1. Open **manifest.json**, and change the values of the `color` and `outline` properties to match their new locations. When you're done, the `icons` property should look like the following.

    ```json
    "icons": {
        "outline": "assets/outline.png",
        "color": "assets/color.png"
    },
    ```

### Test the agent and plugin

1. In your command line interface (CLI), navigate to the root of the API plugin project, and then run `npm install`. Wait for the installation to complete.
1. Close all Office applications.
1. In Visual Studio Code, select **Microsoft 365 Agents Toolkit** on the activity bar, and then in the **ACCOUNTS** pane, ensure that you're logged into a Microsoft 365 account in which support is enabled for Copilot and for uploading custom apps.
1. Select **Provision** in the **LIFECYCLE** pane.

    :::image type="content" source="assets/images/build-da/atk/provision-agent-atk.png" alt-text="A screenshot of the Provision option in the Lifecycle pane of Agents Toolkit":::

    Among other things, provisioning creates a **build** folder inside the **appPackage** folder with the package zip file. The file contains the manifest and JSON files for the agent and plugin.

1. In your CLI in the root of the project, run `npm run dev-server` to start the server on localhost.

    > [!NOTE]
    > If you are prompted to delete an old certificate and/or to install a new one, agree to both prompts.

    Wait until you see a line in the server window similar to the following example that indicates that the app compiled successfully. This output means the server is running and serving the files.

    ```console
    webpack 5.99.8 compiled successfully in 1090 ms
    ```

1. The first step in testing depends on the platform.

    - To test in Office on Windows, open Excel, and then open (or create) a workbook.
    - To test in Office on the web, in a browser, navigate to `https://excel.cloud.microsoft`, and then open (or create) a workbook.

1. The process of opening your agent depends on the UI for Copilot in Office applications, which is in transition.

   - If you see a **Copilot** *button* on the ribbon (not a drop down menu), select the **Copilot** button to open the **Copilot** pane.
   - If you see a **Copilot** drop down menu, open the menu and select **App Skills** from the drop down list to open the **Copilot** pane.

1. Select the hamburger control in the **Copilot** pane.
1. In the pane, **Excel Agent** should be in the list of agents. You might need to select **See more** to see a list of all agents. If the agent isn't listed, try one or both of the following actions.
    <!-- markdownlint-disable MD033 -->
    - Wait a few minutes and reload Copilot.
    - With Copilot open to the list of agents, place the cursor in the Copilot pane and press <kbd>Ctrl</kbd>+<kbd>R</kbd>.
    <!-- markdownlint-enable MD033 -->
    :::image type="content" source="assets/images/build-da/atk/copilot-agent-list.png" alt-text="A screenshot of the agent list in the Copilot pane in an Office application":::

1. Select **Excel Agent**, select the **Change cell color** conversation starter, and then select the **Send** control in the conversation box at the bottom of the pane. In a few seconds, you should see a confirmation prompt similar to the following.

    :::image type="content" source="assets/images/build-da/atk/excel-agent-copilot-confirmation.png" alt-text="A screenshot of the Excel agent saying 'OK, I'll connect to the Excel Agent and process your query. FillColor changes a single cell location to a specific color.' Below that is a box titled 'Data to be shared with Excel Agent.' The box has a parameter named '$0' with the value B2, and a second parameter named '$1' with the value '#FFA500,' which is the color hex code for orange. Below the box are buttons labeled Confirm and Cancel.":::

1. Select **Confirm** in response to the confirmation prompt. The cell's color should change.

    :::image type="content" source="assets/images/build-da/atk/excel-agent-pane-success.png" alt-text="A screenshot of an Excel workbook with the B2 cell colored orange. On the right, the Excel agent in the Copilot pane says 'This is Excel Agent. The color of cell B2 has been successfully changed to orange. If you need any further assistance, feel free to ask!'. There's a footnote numbered 1 after the word orange. Below the message the number 1 appears with a link labeled 'external.' Below are buttons labeled 'Undo' and 'Dev.'":::

    > [!TIP]
    > If Copilot reports an error, repeat your prompt but add the following sentence to the prompt: "If you get an error, report the complete text of the error to me."

1. Try entering other combinations of cell and color in the conversation box, such as "Set cell G5 to the color of the sky."

## Make changes in the agent

Live reloading and hot reloading for an Office API plugin isn't supported in the preview period. To make changes, first shut down the server and uninstall the agent with these steps.

1. Shutting down the server depends on what window it's running in.
    <!-- markdownlint-disable MD033 -->
    - If the web server is running in the same command prompt or Visual Studio Code **TERMINAL** where you ran `npm run dev-server`, give the window focus and press <kbd>Ctrl</kbd>+<kbd>C</kbd>. To end the process, choose "Y" in response to the prompt.
    - If the web server is running in a separate window, then in a command prompt, bash shell, or Visual Studio Code **TERMINAL** in the root of the project, run `npm run stop`. The server window closes.
    <!-- markdownlint-enable MD033 -->

1. Clear the Office cache following the instructions at [Manually clear the cache](/office/dev/add-ins/testing/clear-cache#manually-clear-the-cache).
1. Open Teams and select **Apps** from the activity bar, then select **Manage your apps** at the bottom of the **Apps** pane.
1. Find **Excel Agentdev** in the list of apps.
1. To expand its row, select the arrow head to the left of the name.

    :::image type="content" source="assets/images/build-da/atk/excel-agent-teams-app-list.png" alt-text="A screenshot of the row for the Excel Agent app in the Teams apps page. There's a trash can icon on the right end of the row.":::

1. Select the trash can icon near the right end of the row, and then select **Remove** in the prompt.

Make your changes and then repeat the steps in [Test the agent and plugin](#test-the-agent-and-plugin).
