---
title: Build high quality copilot plugins for Microsoft 365
description: Here are best practices for building copilot plugins for Microsoft 365
author: erikadoyle
ms.author: edoyle
ms.topic: best-practice
ms.date: 11/1/2023
---

# Build high quality copilot plugins for Microsoft 365

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

When you build a plugin, you enable your users to interact with your web service using natural language with Microsoft Copilot. Plugins expand copilot's skills to accomplish tasks on behalf of your users. They are especially good at:

- Accessing real-time information,
- Retrieving relational data, and
- Performing actions across apps

## Qualities of a good plugin

A clear and concise [description of your plugin](orchestrator.md#plugin-search-optimization) is essential for copilot to recognize its capabilities and match it with the appropriate user tasks. Upon runtime, you can ensure your plugin provides the best possible user experience by designing your plugin with the following characteristics.

TODO: More info + links (Teams ME criteria)

:::row:::
    :::column:::
        :::image type="content" source="assets/images/icon-search.png" alt-text="Image representing 'Robust search'":::

        **Robust search**

        Search over all text fields.
    :::column-end:::
    :::column:::
        :::image type="content" source="assets/images/icon-deep-content.png" alt-text="Image representing 'Deep content retrieval'":::
        
        **Deep content retrieval**

        Search match with surrounding paragraph. Adaptive card with other useful information.
    :::column-end:::
:::row-end:::

:::row:::
    :::column:::
        :::image type="content" source="assets/images/icon-actionable.png" alt-text="Image representing 'Actionable'":::

        **Actionable**

        Include a way for the user to take action, such as a deep link to your website, or a modal dialog (Teams task module).
    :::column-end:::
    :::column:::
        :::image type="content" source="assets/images/icon-preview.png" alt-text="Image representing 'Provide a preview'":::

        **Provide a preview**

        Guide your user through content previews.
    :::column-end:::
:::row-end:::

## Plugin best practices

The remainder of this article will cover best practices for building high quality copilot plugins.

TODO rework for public audience.

### Things to avoid

- Anti-Compete: Avoid using the name of any other plugin in both short and full descriptions.
- Responsible AI: Avoid using inappropriate or offensive keywords.
- Prompt injection: Ensure that the Text doesn't lead to prompt injections. Additionally, description must not contain symbols or text that indicate that it can be used as code for Prompt injection. Avoid using phrases, functions, and codes that call an app recurrently.

### Support multi-parameter search queries

To support compound utterances, we recommend to expand the scope of search to handle two or more search parameters simultaneously by enabling multi-parameter support in app manifest (previously called Teams app manifest).

### Avoid generic descriptions of your plugin, its skills, and parameters

As a plugin author, you'll want to be precise in the description of what the plugin does and does not do. While it's tempting to add extra information to try and boost the likelihood of a plugin being used by Copilot, this can result in the following critical issues.

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
