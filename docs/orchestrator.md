---
title: How copilot decides which plugin to use
description: Learn how the Microsoft 365 orchestrator determines which plugin skill to apply for a given user prompt.
author: erikadoyle
ms.author: edoyle
ms.topic: overview
ms.date: 11/14/2023
---

# How Microsoft 365 Copilot decides which plugin to use

Microsoft 365 Copilot is your personal assistant for work. It helps with various general **tasks**, such as writing, summarizing, researching, and more. Copilot has different **skills** that correspond to these different types of tasks. For example, Copilot can summarize action items from a meeting, suggest edits to a file, or track down resources and experts on a given topic within your organization. Each skill has its own parameters and outputs that are tailored to the specific task.

Like any copilot, Microsoft 365 Copilot is trained with data at a point in time. To retrieve and process new and real-time information, especially data that's specific to your organization and workflows, Copilot requires *plugins*. **Plugins** extend Microsoft 365 Copilot's skills and utility for end users, enabling it to choose the right skill from thousands.

But how does Copilot know which skill to use when you ask for help? How does it interpret your request and match it to the best skill available? That's the job of the Microsoft 365 Copilot **orchestrator**.

This article will explain the logic behind Copilot's skill selection process and how you can ensure Copilot employs your plugin at every opportunity it can benefit your users.

TODO: Maybe a conceptual diagram here (tasks, skills, plugins, orchestrator)?

## The copilot orchestrator

Between the end-user's natural language input to Copilot's natural language output, the Microsoft 365 Copilot orchestrator works behind the scenes to select and execute the right skill(s) from the right plugin(s) for the end-user's given task.

The following chart illustrates how the Microsoft 365 Copilot orchestrator selects the right plugin, with the right skill, at the right time, even when there are thousands of options to choose from.

TODO: Rework diagram for public audience
:::image type="content" source="assets/images/orchestrator-sequence.png" alt-text="{alt-text}":::

1. **Natural language input**

    The user types a prompt into Microsoft 365 Copilot chat.

2. **Search for relevant tools**

    The copilot orchestrator searches its tool catalog of installed and enabled plugins for an initial list of relevant skills.

3. **Reasoning**

    Copilot draws upon its [Semantic Index](/microsoft-365-copilot/microsoft-365-copilot-overview#semantic-index), the combined knowledge of its LLM and your organizational data from Microsoft Graph, to analyze the request and determine the context of the user. It then breaks down the user's prompt into intents, or goals. Each goal is then broken into tasks.

4. **Mapping user's intent to slots**

    The orchestrator maps the user's tasks to plugin skills and/or built-in Copilot skill functions, mapping the implicit constraints from the user's prompt to the parameter values required to execute each of the identified skills. TODO: Define slots (skills or skill parameters?)

5. **Execute tool**

    Copilot and its plugins are called to execute their selected skills.

6. **Generate summary**

    Copilot merges, filters, or ranks the responses from different assistants, and generates a single response for the user.

7. **Natural language output**

    Finally, Copilot delivers the response to the user and updates the conversation state. Copilot is ready for its next prompt.

If you imagine a user's prompt to copilot like a construction project, then the copilot orchestrator is the *general contractor*, who coordinates and organizes the work of the specialist *subcontractors*, your plugins. Similar to a general contractor, the orchestrator is responsible for ensuring the project is "completed" according to specifications implied by the user's  input (in other words, that Copilot's response satisfies the user's intent in their request).

However, its the responsibility of each plugin to provide Copilot with an accurate description of its skills and to execute its skills effectively. This will instill a sense of trust in your users and ensure Copilot will call your plugin each time its skills are needed. The next section provides more details on how to optimize your plugin for the orchestrator to find and use.

## Plugin search optimization

Microsoft 365 Copilot can uniquely choose the right skill from thousands. But how can you make sure Copilot will choose *your plugin* to provide the right skill?

The answer lies in how you describe your plugin, its skills, and the parameters for skill execution. Specifying concise and accurate descriptions in your plugin manifest is critical to ensuring Copilot knows when and how to invoke your plugin.

The following sections explain best practices for plugin discoverability.

TODO: wordsmith all sections below for public docs.

### Avoid generic descriptions of your plugin, its skills, and parameters

As a plugin author, you'll want to be precise in the description of what the plugin does and does not do. While it's tempting to add extra information to try and boost the likelihood of a plugin being used by Copilot (similar to SEO for a web page), this can result in the following critical issues.

- A generic plugin description can prevent the appropriate plugin for the job from getting picked up and if this happens frequently the user can turn off such plugin  

- When selected incorrectly, failures in plugin execution or its response are very likely outcomes. Copilots can not surface plugins that have high error rates. End users can also down-vote responses from copilot and over time this data can be used to identify offending plugins for Admins/ copilot to take actions.

### Simplicity and accuracy are critical to ensure Copilot knows when and how to invoke your plugin

Plugin Manifest description: “This is the Salesforce plugin that brings back opportunities, leads and contacts from Salesforce” is better than the description that says “Salesforce plugin”.

Plugin action description: Saying “This is the D365 Sales plugin that can be used to retrieve data from important Sales entities” is misleading and it is better to say “This is the D365 Sales plugin that brings back opportunities, leads and contacts from Salesforce”.  

Plugin action parameter description: Similarly, for each of the connector action descriptions need to describe the specific action as follows “This action brings back D365 Sales leads based on Lead creation date range in MM/DD/YYYY format.” Providing input details helps copilot know possible ways to interrogate the action and map data fields from user input to those needed by underlying plugin and API action that it is exposing. Providing formatting information for a parameter helps the copilot conform the input it submits when invoking the API.

### Do not assume Copilot can guess required inputs

While thinking about user prompts, expect required inputs need to be part of their instruction to copilot.

We have seen limited scenarios where LLMs are able to guess an input however this was was the exception vs the rule. As an example, for a Weather connector which required two inputs (1) Location (2) Unit of Temperature when the user asked “Show me the weather in Seattle, WA” and did not provide the unit of measure, the copilot added Fahrenheit as a unit of measure when invoking the plugin. It is possible in this case the copilot assumed given the user is asking a question about a location in United States where Fahrenheit is the commonly used temperature unit, that degree Fahrenheit should be used. However, we have seen other scenarios where the copilot was unable to guess the input or guessed it incorrectly. This is where testing against the copilot is the only sure shot way to know expected behavior.  

### Validate operations copilots can perform in terms of reasoning over the plugin response

While we have seen some basic capabilities in reasoning over the output, this requires testing and mileage can vary.  

As an example, in the case “Show me opportunities that have high probability of closing” LLM was able to filter the returned opportunities and displayed ones with > 50% chance of closing. Please note choice of 50% was arbitrary but reasonable given lack of user input. However, LLM also displayed closed opportunities in this scenario that had 100% probability of closing so prompt had to be modified to “Show me open opportunities that have high probability of closing”.

## Next step

Review examples of good plugin descriptions and other quality criteria for optimizing plugin discoverability and usage in Microsoft 365 Copilot.

> [!div class="nextstepaction"]
> [Learn the criteria of high quality plugins](plugin-guidelines.md)
