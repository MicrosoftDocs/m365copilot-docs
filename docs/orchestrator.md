---
title: How Copilot for Microsoft 365 decides which plugin to use
description: Learn how the Microsoft Copilot orchestrator determines which plugin skill to apply for a given user prompt.
author: erikadoyle
ms.author: edoyle
ms.topic: overview
ms.date: 11/15/2023
---

<!-- markdownlint-disable MD024 MD051 -->
# How Copilot for Microsoft 365 decides which plugin to use

Microsoft Copilot for Microsoft 365 is your personal assistant for work. It helps with various general **tasks**, such as writing, summarizing, researching, and more. Copilot has different **skills** that correspond to these different types of tasks. For example, Copilot can summarize action items from a meeting, suggest edits to a file, or track down resources and experts on a given topic within your organization. Each skill has its own parameters and outputs that are tailored to the specific task.

Like any copilot, Copilot for Microsoft 365 is trained with data at a point in time. To retrieve and process new and real-time information, especially data that's specific to your organization and workflows, Copilot requires *plugins*. **Plugins** extend Copilot for Microsoft 365's skills and utility for end users, enabling it to choose the right skill for a given task or request.

But how does Copilot know which skill to use when you ask for help? How does it interpret your request and match it to the best skill available? That's the job of the Copilot for Microsoft 365 **orchestrator**.

This article will explain the logic behind Copilot's skill selection process and how you can ensure Copilot employs your plugin at every opportunity it can benefit your users.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

## The Copilot orchestrator

Between the end-user's natural language input to Copilot's natural language output, the Microsoft Copilot orchestrator works behind the scenes to select and execute the right skill(s) from the right plugin(s) for the end-user's given task.

The orchestration layer represents the interface between foundation LLMs and the many ways you can extend, enrich, and customize Copilot for the way your customers work.

:::image type="content" source="assets/images/copilot-stack.png" alt-text="Diagram of the Microsoft Copilot technology stack. From bottom to top: Microsoft Cloud, AI infrastructure, Your data, Foundation models, AI orchestration, Microsoft Copilots | Your copilots, Teams AI Library, Graph connectors, Plugin extensibility":::

The following chart illustrates how the Copilot for Microsoft 365 orchestrator selects the right plugin, with the right skill, at the right time, even when there are multiple options to choose from.

:::image type="content" source="assets/images/orchestrator-sequence.png" alt-text="Visual illustration of the sequential steps in the text following this image.":::

1. **Natural language input**

    The user types a prompt through Microsoft365 Copilot. For example "What tickets are assigned to me right now?"

2. **Search for relevant tools**
   
    Copilot draws upon the combined knowledge of its LLM and user's organizational data from Microsoft Graph to analyze the request and determine the context of the user. It then breaks down the user's prompt into intents, or goals. Each goal is then broken into tasks.

   The Copilot orchestrator then searches its tools catalog of installed and enabled plugins for an initial list of relevant skills from the availlable tools to determine which tools to use to fulfill the users request.

    In the case of the sample prompt for tickets assigned to the user, the orchestrator will look for a plugin that has ability to provide ticket information instead of relying on its inbuilt skills like summarizing, web-searching or image-generation.

4. **Reasoning and Responding**

    Once the orchestartor selects the plugin with the right skills for the task at hand, it determines which function within the plugin to use based on the descriptions of the functions. The function has a reasoning state and a responding state. The reasoning state is used to determine if the function should be used and the responding state has instruction on how the response will be presented.

    In our tickets example, the responding state instructs the orchestrator to format the response as an adaptive card.

```json
{

// part of the plugin skipped for brevity

"functions": [
                {
                    "name": "getTickets",
                    "states": {
                        "reasoning": {
                            "description": "\n# `{{ function.declaration }}`: Returns a list of tickets with their status and priority.",
                            "instructions": []
                        },
                        "responding": {
                            "description": "\n# `{{ function.declaration }}`: Returns a list of tickets with their status and priority.",
                            "instructions": ["I will present the information returned by this tool in the format of an adaptive card."]
                        }
                    }
                }
            ],
"runtimes": [
                {
                    "type": "OpenApi",
                    "auth": {
                      "type": "none"
                    },
                    "spec": {
                        "url": "https://contoso-tickets-plugin.net/openapi.yaml"
                    },
                    "run_for_functions": [
                        "getTickets"
                    ]
                }
            ]

// part of the plugin skipped for brevity

}
```

5. **Execute tool**

    Copilot executes the selected functions in the plugin following the reasoning and responding instructions. Copilot uses the OpenAPI description in the plugin to make API requests. 

6. **Generate summary**

    Copilot merges, filters, or ranks the responses from different assistants, and generates a single response for the user.

7. **Natural language output**

    Finally, Copilot delivers the response to the user and updates the conversation state. Copilot is ready for its next prompt.

If you imagine a user's prompt to Copilot like a construction project, then the Copilot orchestrator is the *general contractor*, who coordinates and organizes the work of the specialist *subcontractors*, your plugins. Similar to a general contractor, the orchestrator is responsible for ensuring the project is "completed" according to specifications implied by the user's  input (in other words, that Copilot's response satisfies the user's intent in their request).

However, its the responsibility of each plugin to provide Copilot with an accurate description of its skills and to execute its skills effectively. This will instill a sense of trust in your users and ensure Copilot will call your plugin each time its skills are needed. The next section provides more details on how to optimize your plugin and your OpenAPI documents for the orchestrator to find and use.

## Plugin Optimization

Copilot for Microsoft 365 can uniquely choose the right skill from thousands. But how can you make sure Copilot will choose *your plugin* to provide the right skill?

The answer lies in how you describe your plugin, its skills, and the parameters for skill execution. Specifying concise and accurate descriptions in your plugin manifest is critical to ensuring Copilot knows when and how to invoke your plugin.

The following sections provide guidance and examples for plugins, skills, and parameter descriptions.

### Plugin descriptions

Plugin descriptions should include the user actions, the types of input, and the types of output, for which your plugin is intended.

Long and short app descriptions in the app manifest must clearly define the scope of your app. To render an app as a plugin in Copilot, app description must be modified to suit the following plugin requirements:

- App long description must clearly explain how users can use a message extension plugin in Copilot and what functionality they can expect. For example, Use Contoso cloud in Copilot to search and summarize your tasks.
- Short description must briefly describe the app's functionality in a natural language and can include name of the app.

The following table lists the short description examples for various plugin scenarios:

#### [Tasks](#tab/tasks)

**Description**: Create, search, view tickets, bugs, and projects.

**App description example:**

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.16/MicrosoftTeams.schema.json",
  "version": "1.0.0",
  "manifestVersion": "1.16",
  "id": "2bxxxxc5-5xxx-4xxx-aXXX-94xxxx8919e5",
  "name": {
    "short": "Tasks",
    "full": "Contoso Tasks"
  },
  "description": {
    "short": "Create, search, view tickets, bugs, and projects",
    "full": "Contoso Tasks makes it easy to stay organized. Create, assign, and track tasks individually or collaboratively with your team, and see everything come together in one place."
  },
```

#### [Surveys](#tab/surveys)

**Description**: Create and search for surveys and results.

**App description example:**

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.16/MicrosoftTeams.schema.json",
  "version": "1.0.0",
  "manifestVersion": "1.16",
  "id": "2bxxxxc5-5xxx-4xxx-aXXX-94xxxx8919e5",
  "name": {
    "short": "Survey",
    "full": "Contoso Survey"
  },
  "description": {
    "short": "Create and search for surveys and results.",
    "full": "Contoso Survey helps you manage all your surveys in one place. Create, capture and analyze surveys within the platform you use every day."
  },
```

#### [CRM](#tab/crm)

**Description**: Search and view customer leads.

**App description example:**

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.16/MicrosoftTeams.schema.json",
  "version": "1.0.0",
  "manifestVersion": "1.16",
  "id": "2bxxxxc5-5xxx-4xxx-aXXX-94xxxx8919e5",
  "name": {
    "short": "CRM",
    "full": "Contoso CRM"
  },
  "description": {
    "short": "Search and view customer leads.",
    "full": "Resolve tickets faster, simplify employee workflows and improve team performance by integrating Contoso CRM to Microsoft Teams. Contoso CRM is a complete customer service solution that’s easy to use and scales with your business."
  },
```

#### [General](#tab/general)

**Description**:  Search and share stock quotes.

**App description example:**

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.16/MicrosoftTeams.schema.json",
  "version": "1.0.0",
  "manifestVersion": "1.16",
  "id": "2bxxxxc5-5xxx-4xxx-aXXX-94xxxx8919e5",
  "name": {
    "short": "General",
    "full": "Contoso stocks"
  },
  "description": {
    "short": "Search and share stock quotes.",
    "full": "Get real-time stock quotes and share them in a conversation. Search by company name, share, or stocks."
```

---

### Skill descriptions

Skill descriptions are used to interpret the user's prompt into an intent and then map that to the most relevant skill available to Copilot. Include which action the skill handles, and also the expected format of input and description of the output.

Currently Teams message extension plugin support is limited to search commands, with support for action commands coming soon.

Search skill descriptions should:

- Focus on what and how the command searches (detailed list) in natural language.
- Include verbs and synonyms, if applicable.
- Focus on keywords that are likely to be used in the search function of your native apps.

The following table lists search command examples for various plugin scenarios:

#### [Tasks](#tab/tasks)

**Description**: Search for high priority tasks related to Northwind that are due tomorrow.

**Command description example:**

```json
"commands": [
        {
          "id": "Search",
          "type": "query",
          "title": "Tasks",
          "description": "Search for high priority tasks related to Northwind that are due tomorrow.",
          "initialRun": true,
          "fetchTask": false,
          "context": [
            "commandBox",
            "compose",
            "message"
          ],
```

#### [Surveys](#tab/surveys)

**Description**: Search for surveys, drafts, and results with keywords or number of respondents.

**Command description example:**

```json
"commands": [
        {
          "id": "Search",
          "type": "query",
          "title": "Survey",
          "description": "Search for surveys, drafts, and results with keywords or number of respondents.",
          "initialRun": true,
          "fetchTask": false,
          "context": [
            "commandBox",
            "compose",
            "message"
          ],
```

#### [CRM](#tab/crm)

**Description**: Through CRM plugin, find qualified, unqualified, and quoted leads of clients and customers.

**Command description example:**

```json
"commands": [
        {
          "id": "Search",
          "type": "query",
          "title": "CRM",
          "description": "Through CRM plugin, find qualified, unqualified, and quoted leads of clients and customers.",
          "initialRun": true,
          "fetchTask": false,
          "context": [
            "commandBox",
            "compose",
            "message"
          ],
```

#### [General](#tab/general)

**Description**: Find number of stocks or listed equities using keywords, key ratios, index, and so on.

**Command description example:**

```json
"commands": [
        {
          "id": "Search",
          "type": "query",
          "title": "General",
          "description": "Find number of stocks or listed equities using keywords, key ratios, index, and so on.",
          "initialRun": true,
          "fetchTask": false,
          "context": [
            "commandBox",
            "compose",
            "message"
          ],
```

---

### Parameter descriptions

A good parameter description explains what the parameter is, not what the parameter does, and the expected format.

When used directly in Microsoft Teams chat and Outlook mail compose, you can use a message extension to query one parameter at a time. When used as a plugin, message extension search commands support up to five parameters (one parameter must be visible in the message extension search bar). A parameter must have a good description, which should describe the expected input, including format or type.

The following are few examples on basic and advances search requests for various plugin scenarios:

#### [Tasks](#tab/tasks)

Basic search: Search for tasks related to Northwind.</br>
Advanced search: Search for high priority tasks related to Northwind that are due tomorrow.

**Parameter description example:**

```json
"parameters": [
    {
        "name": "Name",
        "title": "Project or Task Name",
        "description": "Project name or task name as keyword",
        "inputType": "text"
    },
    {
        "name": "Time",
        "title": "Time",
        "description": "Date or number of days for which to find tasks. Output: Number",
        "inputType": "text"
    },
    {
        "name": "Priority",
        "title": "Priority",
        "description": "Priority of tasks. Acceptable values: high, medium, low, NA ",
        "inputType": "text"
    }]
```

#### [Surveys](#tab/surveys)

Basic search: Retrieve Customer Satisfaction Surveys. </br>
Advanced search: Retrieve recent customer satisfaction survey on product Contoso which as filled by more than 100 recipients.

**Parameter description example:**

```json
"parameters": [
  {
    "name": "SurveyName",
    "title": "Name of Survey",
    "description": "Survey name or related keyword",
    "inputType": "text"
  },
  {
    "name": "Tags",
    "title": "Tags",
    "description": "Product name or keywords related pertaining to a question",
    "inputType": "text"
  },
  {
    "name": "ResponseNumber",
    "title": "Response number",
    "description": "Number of responses received for a survey. Output: Number",
    "inputType": "text"
  }
]
```

#### [CRM](#tab/crm)

Basic search: Fetch me qualified leads. </br>
Advanced search: Fetch qualified leads for which quotes are pending from last seven days.

**Parameter description example:**

```json
"parameters": [
  {
    "name": "TypeofLeads",
    "title": "Type of Leads",
    "description": "Types of leads to find. Acceptable fields are: Qualified, Unqualified and New.",
    "inputType": "text"
  },
  {
    "name": "Status",
    "title": "Status",
    "description": "Status of leads. Acceptable fields are: Pending, Quote Given and Quote Rejected.",
    "inputType": "text"
  },
  {
    "name": "Time",
    "title": "Time",
    "description": "Number of days for which to find status of leads. Output: Number",
    "inputType": "text"
  }
]
```

#### [General](#tab/general)

Basic search: Find stocks in NASDAQ.</br>
Advanced search: Find top 10 stocks in NASDAQ with P/E less than 30 and P/B less than 2.

**Parameter description example:**

```json
"parameters": [
  {
    "name": "StockIndex",
    "title": "Stock Index",
    "description": "Name of index in which user wants to find stocks",
    "inputType": "text"
  },
  {
    "name": "NumberofStocks",
    "title": "Ranked Number of Stocks",
    "description": "Number of stocks in ranked order. Output format: Top:<Number of stocks or bottom:<Number of stocks>",
    "inputType": "text"
  },
  {
    "name": "P/B",
    "title": "Price to Book Ratio",
    "description": "P/B or Price to Book ratio of a stock. Output format: >x.xx or <x.xx",
    "inputType": "text"
  },
  {
    "name": "P/E",
    "title": "Price to Earnings Ratio",
    "description": "P/E or Price to Earnings ratio of a stock with comparison. Output format: >x.xx or <x.xx",
    "inputType": "text"
  }
]
```

---

## Debugging plugin selection

You can use *developer mode* while testing your plugin to verify if and how the orchestrator selected your plugin for use in response to a given prompt. From  *M365 Chat*, you can enable developer mode by typing `-developer on` (or `off` to disable).

:::image type="content" source="./assets/images/developer-mode-on.png" alt-text="Screenshot of `M365 Chat` session where user has typed `-developer on` to successfully enable developer mode":::

While developer mode is enabled, a card with debug information will be returned whenever the orchestrator searches specifically within your enterprise knowledge (data) and/or skills (plugins) to respond to a prompt. The debug info card includes the following fields:

- **Enabled plugins**: A list of plugins enabled by the user (from *Plugins* control below the chat input box)
- **Matched functions**: A list of plugins and functions matched in the runtime app index lookup
- **Selected functions for execution**: A list of plugin functions selected for invocation based on orchestrator reasoning
- **Function execution details**: Request and response function execution status

:::image type="content" source="assets/images/developer-mode-debug-success.png" alt-text="Screenshot of `M365 Chat` session where Copilot has returned a card with debugging information showing the successful matching, selection, and function execution of an enabled plugin":::

### Troubleshooting execution failures

Here are some common failures you might encounter when debugging plugin execution, and possible causes.

#### No debug card

If the orchestrator doesn't require your Microsoft 365 data or skills to respond to a prompt, no debug info card will be returned.

Debug cards are also not returned in cases of capacity throttling, where you will typically see an error message to try again later.

#### Empty debug card

If no plugins were enabled, the debug info card will return empty.

#### Card with empty *Matched functions*

If relevant plugins are enabled, yet no matched functions were returned for the given prompt, this likely indicates the prompt did not explicitly mention the plugin name.

#### Card with empty *Selected functions for execution*

If no enabled plugin matched the search intent of the prompt, the debug info card will report *No functions selected for execution*. This is likely because the command description in the manifest is not semantically related to the  search intent of the given prompt.

If Copilot was previously matching and executing your plugin functions successfully, this could be an indication of throttling.

#### Card with empty or failed *Function execution details*

For non-message extension plugins, if the function execution details or request status is empty or failed, it indicates a failure during Copilot's attempt to assign parameters to the selected function of your plugin. If the failure is consistent, it is most likely due to unclear plugin or parameter descriptions, invalid host urls, or other problems with your Open API definition.

For message extension plugins, best practice is to optimize for responses under nine seconds. For more more info, review the [technical requirements](/microsoftteams/platform/messaging-extensions/high-quality-message-extension?context=/microsoft-365-copilot/extensibility/context#technical-requirements) for message extension plugins.

#### Card with function execution response status of `0`

If the *Function execution details* is reporting a *Response Status* of `0`, but *Request status* of `Success`, this might be an indication of timeout. Currently the timeout limit for Copilot execution of a plugin API is set at 10 seconds.

## Next step

Learn best practices for optimizing plugin discoverability and usefulness in Copilot for Microsoft 365.

> [!div class="nextstepaction"]
> [Learn what makes a high quality plugin](plugin-guidelines.md)
