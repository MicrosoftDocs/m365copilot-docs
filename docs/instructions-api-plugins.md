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

- __Application manifest__ – Describes how your app is configured and references declarative agent manifest\.
- __Declarative agent manifest__ –  Defines the agent's configuration, including instructions, capabilities, conversation starters, and actions\. References the plugin manifest\.
- __Plugin manifest__ –  Describes the plugin configuration, including available functions and a reference to the OpenAPI specification\.
- __OpenAPI specification__ –  Provides detailed definitions of API endpoints, including paths, parameters, request and response formats, and authentication\.  

Together, these files define the agent's behavior and how it interacts with the underlying API\.
 
For more information about API plugins, see:

- [API plugins for Microsoft 365 Copilot](/microsoft-365-copilot/extensibility/overview-api-plugins)
- [How to make an OpenAPI document effective in extending Copilot capabilities](/microsoft-365-copilot/extensibility/openapi-document-guidance) 

### Function mapping in the plugin manifest

In the plugin manifest, each function must map to a corresponding *operationId* in the OpenAPI specification. This ensures that when the agent invokes a function \(for example, __createTask__\), the agent knows which API endpoint to call\.

The following examples show the mapping in the plugin manifest and the mapped function in the OpenAPI spec.

```json
"functions": [
  {
    "name": "createTask",
    "description": "Creates a new task in the specified task list."
  }
] ...
```
```yaml
paths:
  /me/todo/lists/{listId}/tasks:
    post:
      operationId: createTask
      summary: Create a new task
      description: Creates a new task in the specified task list.
      parameters:
...
```


## Best practices for agent instructions

Writing effective instructions is essential to ensuring that declarative agents with API plugins are successful\. To optimize your agent, apply the correct function mapping, use chaining to enable richer interactions, and iteratively test and refine your agent’s behavior.

Apply the following best practices when writing instructions for declarative agents with API plugins:

- __Avoid ambiguous or negative instructions\.__ Contrasting or negative instructions can introduce ambiguity and confuse the model\. Focus on defining valid use cases with positive examples\. If it’s important to distinguish between valid and invalid queries, provide clear criteria and examples that define the expected agent response for each\.
- __Use examples\.__ Provide clear examples to guide agent behavior\. For example:

*User input*: What’s the weather in Prague? *Agent call*: getWeather\(location=”Prague”\)  
*User input*: "Do I need an umbrella tomorrow?" *Agent call*: getWeather\(location=user\_location, forecast=”tomorrow”\)

- __Review and test the instructions__\. Test instructions in various scenarios to verify that the agent makes the correct function calls\. If in testing you find that the agent invokes functions unexpectedly, revise the function description in the OpenAPI specification and clarify the agent instructions to improve intent mapping\.

- __Design instructions for multi\-turn conversations\.__ When you integrate API plugins, design your instructions for the agent to handle multi\-turn conversations\.

For example, if the function requires multiple parameters, in addition to defining the required parameters in the OpenAPI spec, instruct the agent to collect all the parameters before making the API call\. This ensures that the agent collects all required information in a logical sequence\.

The following example shows how to instruct a weather agent for multi\-turn conversations and the agent flow that results\.

__Instructions for agent__

```md
If user asks about the weather:

- Ask the user for location\.

- Ask the user for forecast day\.

- Ask the user for unit system\.

- Only call __getWeather__ when you collect all the values\.
```

__Agent flow__

__User:__ "What is the weather?”

__Agent:__ “What is your location?”

__User__: “London”

__Agent__: “Do you prefer the weather information in Metric or Imperial units?”

__User__: “Metric”

__Agent__: “Do you need the weather for today or forecast for tomorrow?”

__User__: “Today”

__Agent__: “I will check the weather for London for today”

__Agent calls:__ getWeather\(location="London", forecast=”today”, system=”Metric”\)


For general best practices for agent instructions, see [Write effective instructions](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/declarative-agent-instructions)\. 

### Chaining function calls in API plugins

Chaining function calls allows declarative agents to combine multiple API actions in one seamless flow\. The following sections describe common patterns and how to write instructions for each\.

#### Chaining function calls with output as input parameter

Use the result of one API call as an input for another\. This is useful when the result of the first function is needed to perform the second function\. This can work across plugins\.

__Example__: A declarative agent with Weather API and To\-do API creates a to\-do task with data from the weather forecast\.

__Instructions for agent__

To get the weather, always use the __getWeather__ action, then create a task with the title "temperature in", and add the location and temperature mentioned in the weather to the task title\. 

__Agent flow__

__User:__ " Get the weather in Prague"

__Agent:__ calls *getWeather \(location="Prague", forecast=”today”\)*

__Agent:__ uses the data from the first call to create a to\-do task *createTask \(title ="\{weather output\}"\)*

#### Chaining based on conversation history within one agent

When you use chaining based on conversation history, the agent uses prior responses to handle follow\-up actions\. This approach uses the conversation history to maintain context\.

__Example:__ An agent deletes a to\-do by name\.

__Instructions for agent__

1. When the user asks to list all to\-do, call __getTasks__ to retrieve the list of to\-dos with title and ID\.
2. After listing the to\-dos, if the user asks to delete a to\-do, use the ID from the response to call __deleteTask__\.

__Agent flow__

__User:__ "Show all the to\-dos in Tasks folder?"

__Agent:__ Calls *getTasks \(folderId="Tasks\)* and displays all the to\-dos with IDs\.

__User:__ " Delete TaskMaster Pro to\-do”

__Agent:__ Uses the information from the conversation history to find the ID for the to\-do and deletes the to\-do by calling __deleteTask__\.

#### Chaining with SharePoint knowledge 

Chaining API calls allows an agent to combine knowledge sources and actions to design more complex workflows\. 

__Example__: An agent retrieves project status data from SharePoint, and creates corresponding tasks in Microsoft To\-Do for tracking\.

__Instructions for agent__

- To get project statuses, use Sharepoint knowledge CPSDAProjectDeadlines\. 
- Always create a to\-do for each project using status update for the title\.

__Agent flow__

__User__: “Can you provide an update on the status of all projects?”

__Agent:__ Pulls project status data from SharePoint and then uses __createTask__ to generate a to\-do task for each project\.

  

#### Chaining with code interpreter

It is also possible to chain API calls and integrate additional capabilities, such as a code interpreter\. This allows an agent to process API outputs dynamically to enable more advanced workflows\.

__Example__: An agent creates a chart based on the data in to\-do tasks\.

__Instructions for agent__



When the user asks to list all to\-dos, call __getTasks__ to retrieve the list of to\-dos with title and ID, also plot the chart for the output\.

__Agent flow__

__User:__ "Retrieve all tasks in Tasks “

__Agent:__ Calls the __getTasks__ \(folderId="Tasks\) and displays all the to\-dos with IDs\.

__Agent:__ Calls code Interpreter to initiate the chart generation based on the output of the first call\.

This example also runs multiple actions at once\. This is useful initiating a series of related actions that don’t require multiple user inputs\.  
