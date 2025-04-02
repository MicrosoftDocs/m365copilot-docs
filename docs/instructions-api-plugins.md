---
title: Write Instructions for Declarative Agents with API plugins
description: Learn how to write effective instructions declarative agents that use API plugins.
author: lauragra
ms.author: jchudakova
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 04/02/2025
---

# Write effective instructions for declarative agents with API plugins

Declarative agents tailor Microsoft 365 Copilot to meet the specific needs of an organization. When you build declarative agents with Teams Toolkit, you can add skills to your agent via API plugins. API plugins enable your agent to query and interact with an organization's data via APIs.

This article describes the agent architecture and provides best practices for writing instructions for declarative agents that include API plugins.

## Main components of declarative agents with API plugins

Declarative agents that call API plugins include several components that ensure effective integration and functionality. Understanding this architecture will help you design your agent effectively. The architecture includes the following components:

- **Application manifest** - Describes how your app is configured and references declarative agent manifest.
- **Declarative agent manifest** -  Defines the agent's configuration, including instructions, capabilities, conversation starters, and actions. References the plugin manifest.
- **Plugin manifest** -  Describes the plugin configuration, including available functions and a reference to the OpenAPI specification.
- **OpenAPI specification** -  Provides detailed definitions of API endpoints, including paths, parameters, request and response formats, and authentication.  

Together, these files define the agent's behavior and how it interacts with the underlying API.

For more information about API plugins, see:

- [API plugins for Microsoft 365 Copilot](/microsoft-365-copilot/extensibility/overview-api-plugins)
- [How to make an OpenAPI document effective in extending Copilot capabilities](/microsoft-365-copilot/extensibility/openapi-document-guidance) 

### Function mapping in the plugin manifest

In the plugin manifest, each function must map to a corresponding *operationId* in the OpenAPI specification. This ensures that when the agent invokes a function (for example, **createTask**), the agent knows which API endpoint to call.

The following examples show the mapping in the plugin manifest and the mapped function in the OpenAPI spec.

```json
"functions": [
  {
    "name": "createTask",
    "description": "Creates a new task in the specified task list."
  }
] 
```

```yaml
paths:
  /me/todo/lists/{listId}/tasks:
    post:
      operationId: createTask
      summary: Create a new task
      description: Creates a new task in the specified task list.
      parameters:
```

## Best practices for agent instructions

Writing effective instructions is essential to ensuring that declarative agents with API plugins are successful. To optimize your agent, apply the correct function mapping, use chaining to enable richer interactions, and iteratively test and refine your agent's behavior.

Apply the following best practices when writing instructions for declarative agents with API plugins:

- **Avoid ambiguous or negative instructions.** Contrasting or negative instructions can introduce ambiguity and confuse the model. Focus on defining valid use cases with positive examples. If it's important to distinguish between valid and invalid queries, provide clear criteria and examples that define the expected agent response for each.
- **Use examples** Provide clear examples to guide agent behavior. For example:

*User input*: What's the weather in Prague? *Agent call*: getWeather(location="Prague")  
*User input*: "Do I need an umbrella tomorrow?" *Agent call*: getWeather(location=user_location, forecast="tomorrow")

- **Review and test the instructions**. Test instructions in various scenarios to verify that the agent makes the correct function calls. If in testing you find that the agent invokes functions unexpectedly, revise the function description in the OpenAPI specification and clarify the agent instructions to improve intent mapping.

- **Design instructions for multi-turn conversations.** When you integrate API plugins, design your instructions for the agent to handle multi-turn conversations.

For example, if the function requires multiple parameters, in addition to defining the required parameters in the OpenAPI spec, instruct the agent to collect all the parameters before making the API call. This ensures that the agent collects all required information in a logical sequence.

The following example shows how to instruct a weather agent for multi-turn conversations and the agent flow that results.

| Instructions for agent | Agent flow |
|------------------------|------------|
|If user asks about the weather:</br></br>Ask the user for location.</br>Ask the user for forecast day.</br>Ask the user for unit system.</br>Only call **getWeather** when you collect all the values.|**User:** "What is the weather?"</br></br>**Agent:** "What is your location?"</br></br>**User**: "London"</br></br>**Agent**: "Do you prefer the weather information in Metric or Imperial units?"</br></br>**User**: "Metric"</br></br>**Agent**: "Do you need the weather for today or forecast for tomorrow?"</br></br>**User**: "Today"</br></br>**Agent**: "I will check the weather for London for today"</br></br>**Agent calls:** getWeather(location="London", forecast="today", system="Metric")|

For general best practices for agent instructions, see [Write effective instructions](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/declarative-agent-instructions).

### Chaining function calls in API plugins

Chaining function calls allows declarative agents to combine multiple API actions in one seamless flow. The following sections describe common patterns and how to write instructions for each.

#### Chaining function calls with output as input parameter

Use the result of one API call as an input for another. This is useful when the result of the first function is needed to perform the second function. This can work across plugins.

**Example**: A declarative agent with Weather API and To-do API creates a to-do task with data from the weather forecast.

**Instructions for agent**

To get the weather, always use the **getWeather** action, then create a task with the title "temperature in", and add the location and temperature mentioned in the weather to the task title.

**Agent flow**

**User:** "Get the weather in Prague"

**Agent:** calls *getWeather (location="Prague", forecast="today")*

**Agent:** uses the data from the first call to create a to-do task *createTask (title ="{weather output}")*

#### Chaining based on conversation history within one agent

When you use chaining based on conversation history, the agent uses prior responses to handle follow-up actions. This approach uses the conversation history to maintain context.

**Example:** An agent deletes a to-do by name.

**Instructions for agent**

1. When the user asks to list all to-do, call **getTasks** to retrieve the list of to-dos with title and ID.
2. After listing the to-dos, if the user asks to delete a to-do, use the ID from the response to call **deleteTask**.

**Agent flow**

**User:** "Show all the to-dos in Tasks folder?"

**Agent:** alls *getTasks (folderId="Tasks)* and displays all the to-dos with IDs.

**User:** "Delete TaskMaster Pro to-do"

**Agent:** Uses the information from the conversation history to find the ID for the to-do and deletes the to-do by calling **deleteTask**.

#### Chaining with SharePoint knowledge 

Chaining API calls allows an agent to combine knowledge sources and actions to design more complex workflows. 

**Example**: An agent retrieves project status data from SharePoint, and creates corresponding tasks in Microsoft To-Do for tracking.

**Instructions for agent**

- To get project statuses, use Sharepoint knowledge CPSDAProjectDeadlines. 
- Always create a to-do for each project using status update for the title.

**Agent flow**

**User**: "Can you provide an update on the status of all projects?"

**Agent:** Pulls project status data from SharePoint and then uses **createTask** to generate a to-do task for each project.

  #### Chaining with code interpreter

It is also possible to chain API calls and integrate additional capabilities, such as a code interpreter. This allows an agent to process API outputs dynamically to enable more advanced workflows.

**Example**: An agent creates a chart based on the data in to-do tasks.

**Instructions for agent**

When the user asks to list all to-dos, call **getTasks** to retrieve the list of to-dos with title and ID, also plot the chart for the output.

**Agent flow**

**User:** "Retrieve all tasks in Tasks"

**Agent:** Calls the **getTasks** (folderId="Tasks) and displays all the to-dos with IDs.

**Agent:** Calls code Interpreter to initiate the chart generation based on the output of the first call.

This example also runs multiple actions at once. This is useful initiating a series of related actions that don't require multiple user inputs.  
