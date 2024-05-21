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

Like any large language model(LLM), Copilot for Microsoft 365 is trained with data at a point in time. To retrieve and process new and real-time information, especially data that's specific to your organization and workflows, Copilot requires _plugins_. **Plugins** extend Copilot for Microsoft 365's skills and utility for end users, enabling it to choose the right skill for a given task or request.

But how does Copilot know which skill to use when you ask for help? How does it interpret your request and match it to the best skill available? That's the job of the Copilot for Microsoft 365 **orchestrator**.

This article will explain the logic behind Copilot's skill selection process and how you can ensure Copilot employs your plugin at every opportunity it can to benefit your users.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

## The Copilot orchestrator

Between the end-user's natural language input to Copilot's natural language output, the Microsoft Copilot orchestrator works behind the scenes to select and execute the right skill(s) from the right plugin(s) for the end-user's given task.

The orchestration layer represents the interface between foundation LLMs and the many ways you can extend, enrich, and customize Copilot for the way your customers work.

:::image type="content" source="assets/images/copilot-stack.png" alt-text="Diagram of the Microsoft Copilot technology stack. From bottom to top: Microsoft Cloud, AI infrastructure, Your data, Foundation models, AI orchestration, Microsoft Copilots | Your copilots, Teams AI Library, Graph connectors, Plugin extensibility":::

The following chart illustrates how the Copilot for Microsoft 365 orchestrator selects the right plugin, with the right skill, at the right time, even when there are multiple options to choose from.

:::image type="content" source="assets/images/orchestrator-sequence.png" alt-text="Visual illustration of the sequential steps in the text following this image.":::

1. ### Natural language input

The user types a prompt through Microsoft365 Copilot UI. For example "What tickets are assigned to me right now?"

2. ### Preliminary checks

Copilot analyzes the prompt to ensure it follows responsible AI criteria, is not attempting a jailbreak and it is not harmful and hands the prompt over to the orchestrator.

3. ### Reasoning

The orchestrator formulates a plan comprising multiple actions that it will perform in an attempt to respond to the user's prompt.

3a. **Intent and Tool Selection:**
The orchestrator begins by dissecting the user's prompt to identify the underlying intents or goals. Utilizing Microsoft Graph data, it gains insights into the user's current context, which is crucial for tailoring the response. Once the intent and context are clear, the orchestrator reviews its arsenal of inbuilt tools—ranging from summarization and web search to image generation—to find a match for the user's needs. If the inbuilt tools fall short, the orchestrator taps into external resources to gather the necessary information to address the prompt effectively.

3b. **Function Matching and Parameter Determination:**
At this juncture, the orchestrator engages in a meticulous semantic and lexical comparison of the available plugins' function descriptions against the user's intent. This process ensures the selection of the most relevant plugins to fulfill the request. With the candidate functions pinpointed, the orchestrator collaborates with the LLM to ascertain the parameters needed for the function calls. This step concludes with the orchestrator crafting well-structured requests, complete with any required authentication, ready to be processed by a specialized tool adept at making API calls.

3c. **Result Analysis and Response Formulation:**
Upon receiving the outcomes of the API calls, the orchestrator conducts a thorough analysis to determine their adequacy in satisfying the user's request. Should the information be insufficient, the orchestrator contemplates additional function calls to enrich the response. After a comprehensive evaluation, the orchestrator either proceeds with further requests or transitions to the response phase, where it formulates a coherent and informative reply to the user's initial prompt.
The orchestrator breaks down the prompt into intents or goals and then leverages Microsoft Graph data to determine the user's context.

4. ### Responding

The orchestrator analyzes the information returned by all the tools it selected and prepares a response to the user's prompt. It uses the reasoning instructions from the functions that it called together with its inbuilt capabilities to formulate a response.

5. ### Generate summary

The orchestrator merges, filters, or ranks the responses from different assistants, and generates a single response for the user.

6. ### Natural language output

Finally, the orchestrator delivers the response to the user and updates the conversation state. Copilot is ready for its next prompt.

If you imagine a user's prompt to Copilot like a construction project, then the Copilot orchestrator is the _general contractor_, who coordinates and organizes the work of the specialist _subcontractors_, your plugins. Similar to a general contractor, the orchestrator is responsible for ensuring the project is "completed" according to specifications implied by the user's input (in other words, that Copilot's response satisfies the user's intent in their request).

However, its the responsibility of each plugin to provide Copilot with an accurate description of its skills and to execute its skills effectively. This will instill a sense of trust in your users and ensure Copilot will call your plugin each time its skills are needed. The next section provides more details on how to optimize your plugin and your OpenAPI documents for the orchestrator to find and use.

## Plugin Optimization

Copilot for Microsoft 365 can uniquely choose the right skill from thousands. But how can you make sure Copilot will choose _your plugin_ to provide the right skill?

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

**Description**: Search and share stock quotes.

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

You can use _developer mode_ while testing your plugin to verify if and how the orchestrator selected your plugin for use in response to a given prompt. From _M365 Chat_, you can enable developer mode by typing `-developer on` (or `off` to disable).

:::image type="content" source="./assets/images/developer-mode-on.png" alt-text="Screenshot of `M365 Chat` session where user has typed `-developer on` to successfully enable developer mode":::

While developer mode is enabled, a card with debug information will be returned whenever the orchestrator searches specifically within your enterprise knowledge (data) and/or skills (plugins) to respond to a prompt. The debug info card includes the following fields:

- **Enabled plugins**: A list of plugins enabled by the user (from _Plugins_ control below the chat input box)
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

#### Card with empty _Matched functions_

If relevant plugins are enabled, yet no matched functions were returned for the given prompt, this likely indicates the prompt did not explicitly mention the plugin name.

#### Card with empty _Selected functions for execution_

If no enabled plugin matched the search intent of the prompt, the debug info card will report _No functions selected for execution_. This is likely because the command description in the manifest is not semantically related to the search intent of the given prompt.

If Copilot was previously matching and executing your plugin functions successfully, this could be an indication of throttling.

#### Card with empty or failed _Function execution details_

For non-message extension plugins, if the function execution details or request status is empty or failed, it indicates a failure during Copilot's attempt to assign parameters to the selected function of your plugin. If the failure is consistent, it is most likely due to unclear plugin or parameter descriptions, invalid host urls, or other problems with your Open API definition.

For message extension plugins, best practice is to optimize for responses under nine seconds. For more more info, review the [technical requirements](/microsoftteams/platform/messaging-extensions/high-quality-message-extension?context=/microsoft-365-copilot/extensibility/context#technical-requirements) for message extension plugins.

#### Card with function execution response status of `0`

If the _Function execution details_ is reporting a _Response Status_ of `0`, but _Request status_ of `Success`, this might be an indication of timeout. Currently the timeout limit for Copilot execution of a plugin API is set at 10 seconds.

## Next step

Learn best practices for optimizing plugin discoverability and usefulness in Copilot for Microsoft 365.

> [!div class="nextstepaction"] > [Learn what makes a high quality plugin](plugin-guidelines.md)
