---
title: Build API plugins for Microsoft 365 Copilot with the Office JavaScript Library 
description: Learn how to build API plugins for Microsoft 365 Copilot with the Office JavaScript Library
author: rickki
ms.author: rickki
ms.localizationpriority: medium
ms.date: 05/19/2025
ms.topic: how-to
---

# Build API plugins for Microsoft 365 Copilot with the Office JavaScript Library (preview)

> [!NOTE]
> The development feature described in this article is in preview. We encourage you to experiment with this feature, but it should not be used in a production plugin. The following are the limitations during the initial preview:
>
> - The feature is only enabled for Office on Windows and Office on the web. We are working to bring support to Office on Mac.
> - The feature is only enabled for Excel, PowerPoint, or Word. We are working to bring support to Outlook.

A plugin for a declarative agent can call the APIs in the [Office JavaScript Library](../develop/understanding-the-javascript-api-for-office.md) to perform read and write operations on the content and metadata of an Office document that is currently open in an Office application. This ability enables Copilot to work Office documents in precise and error-free ways that would otherwise require an Office Add-in.

## The relation of Copilot agents to the Office Add-in framework

Both Office Add-ins and declarative agent plugins call APIs in the Office JavaScript Library, and a Microsoft 365 extension that uses the library can include either a plugin, an add-in, or both. The best approach depends on the user scenarios that the extension should enable.

- If the extension should provide simple, fast actions that don't need parameters passed to them, include only an add-in with custom ribbon buttons or menus, called [add-in commands](add-in-commands.md).
- If the extension needs a dashboard experience, needs the user to configure settings, needs to display metadata about the content of the Office document, or needs a page-like experience for any other reason, include a add-in with a task pane.
- If the extension needs to provide complex actions that require parameters passed at runtime or needs a natural language interface, include a Copilot agent.

## Scenarios

The following are some selected ways in which a Copilot agent that calls Office JavaScript Library APIs enhances the value of a Microsoft 365 extension.

- **Content analysis:** An agent can be used to analyze the content of a document or spreadsheet and take action depending on what it finds. 

   - An agent analyzes a Request for Proposal (RFP) and then fetches the answers to questions in the RFP from a backend system. The user simply prompts the agent to "Fill in the answers you know to the questions."
   - An agent analyzes a document, or a table in a spreadsheet, for content that implies certain actions must be taken, either in the document itself or elsewhere in the customer's business systems. The user might prompt "Review the document for any items I missed on the audit list."

- **Trusted insertion of data:** If you prompt a typical AI engine with a question, it will combine information it finds and compose an answer; a process can introduce inaccuracies. But a Copilot agent based on an add-in can insert data *unchanged* from a trusted source. Some examples:

   - Consider an agent that enables the insertion of legal research into Word where it can then be edited. A user prompts the agent "In what circumstances can a lease of residential space in Indiana be broken unilaterally by the lessor?" The agent then fetches content, unchanged, from precedents and statutes.
   - Consider an agent that manages the inventory of a digital assets. In the Copilot agent chat, a user prompts "Insert a table of our color photos with the name of each, the number of times it was downloaded, and its size in megabytes, sorted in order from most downloaded." The agent then fetches this data, unchanged, from the system of record and inserts the table into an Excel spreadsheet.

When the agent is combined with an add-in, even more scenarios are enabled. Including a Microsoft 365 Copilot agent with an Office Add-in provides at least two benefits to the add-in:

- Copilot becomes a natural language interface for the add-in's functionality.
- The agent can pass parameters to the JavaScript it invokes, which isn't possible when a [function command](add-in-commands.md#types-of-add-in-commands) in an add-in is invoked from a button or menu item.

Learning how to use the add-in is one way that an agent can enhance an add-in. When a user needs to perform multiple steps or tasks with the add-in to achieve a goal, the chat interface of Copilot can ease the process of getting started with the add-in. For example, consider a legal firm that needs to have a list of questions that must be answered about each lease that it prepares. Creating this list of questions can be time-consuming and labor-intensive. But a Copilot agent can be prompted to produce a first draft list of questions and the insert them into a Word document using the Office JavaScript Library.

## Create your first Office JavaScript Library plugin

The following are the major steps for creating an API plugin for a Copilot agent that calls Office JavaScript Library APIs.

- Ensure that you meet the [Prerequisites](#prerequisites)
- [Create the project](#create-the-project)
- [Configure the manifest](#configure-the-manifest)
- [Configure the declarative agent](#configure-the-declarative-agent)
- [Configure the plugin](#configure-the-plugin)
- [Create the JavaScript functions](#create-the-javascript-functions)
- [Test the agent and plugin](#test-the-agent-and-plugin)

### Prerequisites

- Requirements specified in [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Microsoft 365 Agents Toolkit](/microsoftteams/platform/toolkit/install-teams-toolkit) extension for Visual Studio Code.

   > [!NOTE]
   > Microsoft 365 Agents Toolkit is an evolution of Teams Toolkit. Some pages that are linked to from this article may use the term "Teams Toolkit".

### Create the project

Begin by creating a basic declarative agent.

1. Open **Visual Studio Code**.

1. Select **Microsoft 365 Agents Toolkit > Create a New Agent/App**.

    :::image type="content" source="../../assets/images/build-da/atk/create-new-app-agent.png" alt-text="A screenshot of the Create a New Agent/App button in the Microsoft 365 Agents Toolkit sidebar":::

1. Select **Declarative Agent**.

    :::image type="content" source="../../assets/images/build-da/atk/select-copilot-agent-atk.png" alt-text="A screenshot of the New Project options with Declarative Agent at the top.":::

1. Select **No Action** to create a basic declarative agent.

1. Select **Default folder** to store your project root folder in the default location.

1. Enter `Excel Agent` as the **Application Name** and press **Enter**.

1. In the new Visual Studio Code window that opens,



### Configure the manifest

There are two parts of the manifest that you configure. First, configure the Copilot agent.

1. If there isn't one already, add a [copilotAgents](/microsoft-365/extensibility/schema/root-copilot-agents) object to the root of the manifest and ensure that it has a child [declarativeAgents](/microsoft-365/extensibility/schema/declarative-agent-ref) array.
1. Add an object to the `declarativeAgents` array and specify a unique and descriptive [id](/microsoft-365/extensibility/schema/declarative-agent-ref#id) for it.
1. Assign the object's [file](/microsoft-365/extensibility/schema/declarative-agent-ref#file) property the relative URL of the declarative agent configuration file. You create that file in a later step.


```json
"copilotAgents": {
    "declarativeAgents": [
        {
        "id": "ContosoCopilotAgent",
        "file": "declarativeAgent.json"
        }
    ]
}
```

Second, add markup to the manifest that configures the JavaScript runtime inside the Office application where the agent's actions are executed.

1. At the root of the manifest add an [extensions](/microsoft-365/extensibility/schema/element-extensions) array and a child object with a [runtimes](/microsoft-365/extensibility/schema/extension-runtimes-array) array.
1. In the `runtimes` array, define a runtime object that includes an [actions](/microsoft-365/extensibility/schema/extension-runtimes-actions-item) array.
1. In the `actions` array define an action object that identifies the JavaScript function that is invoked by the action. The following is an example. Note the following about this code.

- The [code.page](/microsoft-365/extensibility/schema/extension-runtime-code) property specifies the URL of a web page that contains an embedded script tag that, in turn, specifies the URL of the JavaScript file where the function is defined. That same file contains an invocation of the [Office.actions.associate](/javascript/api/office/office.actions#office-office-actions-associate-member(1)) method to map the function to an action ID. You create the HTML and JavaScript files in later steps.
- The [actions.id](/microsoft-365/extensibility/schema/extension-runtimes-actions-item#id) property in the manifest is the same action ID that is passed to the call of `associate`.
- The [actions.type](/microsoft-365/extensibility/schema/extension-runtimes-actions-item#type) property is set to "executeDataFunction", which is the type that can accept parameters and can be invoked by Copilot.

```json
"extensions": [
    {
        "runtimes": [
            {
                "id": "ContosoAgentRuntime",
                "type": "general",
                "code": {
                    "page": "https://localhost:3000/commands.html"
                },
                "lifetime": "short",
                "actions": [
                    {
                        "id": "FillColor",
                        "type": "executeDataFunction",
                    }
                ]
            }
        ]
    }
]
```

The reference documentation for the manifest JSON is at [Microsoft 365 app manifest schema reference](/microsoft-365/extensibility/schema/).

### Configure the declarative agent

1. Create a file in the same folder where your manifest is and give it the name used in the `copilot.declarativeAgents.file` property: **declarativeAgent.json**.
1. Paste the following content into the file. About this JSON, note the following:

   - The `actions.id` property in this file is the collective ID of all the functions in the file specified in `actions.file`. It doesn't have to match the `extensions.runtimes.actions.id` in the manifest, which is the ID of a specific action.
   - You create the file that you specify in the `actions.file` property in a later next step.

   ```json
   {
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
                "id": "localExcelPlugin",
                "file": "Office-API-local-plugin.json"
            }
        ]
    }
   ```

The reference documentation for declarative agents is at [Declarative agent schema 1.3 for Microsoft 365 Copilot](/microsoft-365-copilot/extensibility/declarative-agent-manifest-1.3).

### Configure the plugin

1. Create another file in the folder with your manifest and give it the name you assigned to the `actions.file` property in the preceding step: **Office-API-local-plugin.json**.
1. Paste the following content into the file. About this JSON, note the following:

   - The API plug-in configuration file specifies the "functions" of the plug-in in the sense of agent actions, not JavaScript functions, including the instructions for each action. It also configures the runtime for Copilot. (You configured the runtime for Office in the manifest in an earlier step.)
   - The `functions.name` must match the `extensions.runtimes.actions.id` property in the add-in manifest: `FillColor`.
   - The `reasoning.description` and `reasoning.instructions` refer to a JavaScript function, not a REST API.
   - The `runtimes.run_for_functions` array must include either the same string as `functions.name` or a wildcard string that matches it.
   - The `runtimes.spec.local_endpoint` property is new and isn't yet in the main reference documentation for the API plugins schema. See below for more about it. Currently, the only allowable value is "Microsoft.Office.Addin", which specifies that the JavaScript function that is associated with the "FillColor" string is available in the Office JavaScript Library, rather than in some REST endpoint.


   ```json
   {
        "$schema": "https://developer.microsoft.com/json-schemas/copilot/plugin/v2.3/schema.json",
        "schema_version": "v2.3",
        "name_for_human": "Excel Agent",
        "description_for_human": "Excel actions in agent",
        "namespace": "addinfunction",
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
                            "default" : "B2"
                        },
                        "Color": {
                            "type": "string",
                            "description": "A color in hex format, e.g., #30d5c8",
                            "default" : "#30d5c8"
                        }
                    },
                    "required": ["Cell", "Color"]
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
                "run_for_functions": ["FillColor"]
            }
        ]
    }
   ```

The reference documentation for API plug-ins is at [API plugin manifest schema 2.2 for Microsoft 365 Copilot](/microsoft-365-copilot/extensibility/api-plugin-manifest-2.2). The following is the documentation for the `runtimes.spec.local_endpoint` property.

| Property | Type | Description |
| -------- | ---- | ----------- |
| `local_endpoint` | String | Optional. The ID of a set of available JavaScript functions. This property is roughly analogous to the [runtimes.spec.url](/microsoft-365-copilot/extensibility/api-plugin-manifest-2.2#openapi-specification-object) property, but for local functions on the client, not REST APIs. Currently, the only allowed value is "Microsoft.Office.Addin".|

## Create the JavaScript functions

Create src folder ????


Create a UI-less HTML file that contains a `<script>` tag that loads the JavaScript file with the functions. The URL of this HTML file must match the value of the `extensions.runtimes.code.page` property in the manifest. See [Configure the manifest](#unified-manifest-for-microsoft-365) earlier in this article.



 Note the following about this code.

- Unlike a function command, a function associated with a Copilot action can take parameters.
- The first parameter of the `associate` method must match both the `"extensions.runtimes.actions.id"` property in the add-in manifest and the "functions.name" property in the API plugins JSON.

```javascript
async function fillColor(cell, color) {
    await Excel.run(async (context) => {
        context.workbook.worksheets.getActiveWorksheet().getRange(cell).format.fill.color = color;
        await context.sync();
    })
}

Office.onReady((info) => {
    Office.actions.associate("fillcolor", async (message) => {
        const {cell, color} = JSON.parse(message);
        await fillColor(cell, color);
        return "Cell color changed.";
    });
});
```

After your functions are created, 




### Test the agent and plugin



1. In the new Visual Studio Code window that opens, select **Teams Toolkit**, then select **Provision** in the **Lifecycle** pane.

    :::image type="content" source="../../assets/images/build-da/atk/provision-agent-atk.png" alt-text="A screenshot of the Provision option in the Lifecycle pane of Microsoft 365 Agents Toolkit":::




## Combine an Office Add-in with the API agent


