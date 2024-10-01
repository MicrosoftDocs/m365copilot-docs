---
title: How Microsoft 365 Copilot decides which plugin to use
description: Learn how the Microsoft Copilot orchestrator determines which plugin skill to apply for a given user prompt.
author: erikadoyle
ms.author: edoyle
ms.topic: overview
ms.date: 08/15/2024
---

<!-- markdownlint-disable MD024 MD051 -->

# How Microsoft 365 Copilot decides which plugin to use

Microsoft 365 Copilot is your personal assistant for work. It helps with various general **tasks**, such as writing, summarizing, researching, and more. Copilot has different **skills** that correspond to these different types of tasks. For example, Copilot can summarize action items from a meeting, suggest edits to a file, or track down resources and experts on a given topic within your organization. Each skill has its own parameters and outputs that are tailored to the specific task.

Like any copilot, Microsoft 365 Copilot is trained with data at a point in time. To retrieve and process new and real-time information, especially data that's specific to your organization and workflows, Copilot requires _plugins_. **Plugins** extend Microsoft 365 Copilot's skills and utility for end users, enabling it to choose the right skill from its repertoire.

But how does Copilot know which skill to use when you ask for help? How does it interpret your request and match it to the best skill available? That's the job of the Microsoft 365 Copilot **orchestrator**.

This article explains the logic behind Copilot's skill selection process and how you can ensure Copilot employs your plugin at every opportunity to benefit your users.

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

## The Copilot orchestrator

Between the end-user's natural language input to Copilot's natural language output, the Microsoft Copilot orchestrator works behind the scenes to select and execute the right skill(s) from the right plugin(s) for the end-user's given task.

The orchestration layer represents the interface between foundation Large Language Models (LLMs) and the many ways you can extend, enrich, and customize Copilot for the way your customers work.

:::image type="content" source="assets/images/copilot-stack.png" alt-text="Diagram of the AI orchestration layer, situated between Copilot extensibility options and the Microsoft AI Cloud stack (Foundation models, Your data, AI infrastructure)":::

The following chart illustrates how the Microsoft 365 Copilot orchestrator selects the right plugin, with the right skill, at the right time, even when there are multiple options to choose from.

:::image type="content" source="assets/images/copilot_orchestrator_sequence_v2.png" alt-text="Visual illustration of the sequential steps in the text following this image." lightbox="assets/images/copilot_orchestrator_sequence_v2.png":::

1. **Natural language input**: The user submits a query to Copilot, such as "What tickets are assigned to me right now?"

1. **Preliminary checks**: Copilot conducts several checks on the query, including responsible AI checks and security measures to ensure it doesn’t pose any risks. If the query fails any of these checks, Copilot terminates the interaction.

1. **Reasoning**: The Copilot orchestrator formulates a plan comprising of multiple actions that it performs in an attempt to respond to the user's prompt.

   1. **Context and Tool Selection**: The orchestrator retrieves the user's conversation context from the context store and integrates data from Microsoft Graph to refine the context. It then adjusts the initial query based on this updated context and forwards it to the LLM (large language model) to guide the next steps.

      The LLM may proceed to generating a response using Copilot’s built-in capabilities, or it may determine that additional data is necessary.

      If further information is needed, the orchestrator does a search for the plugins(tools) with the right skill for the task from the user's enabled plugins based on the plugins descriptions and their functions descriptions.

   1. **Function Matching and Parameter Determination**: The orchestrator formulates a new prompt incorporating the user’s initial query, the updated context, and the selected plugins, and presents it to the LLM. The LLM evaluates the input and specifies the optimal plugin and function within that plugin to address the task. It then provides the orchestrator with the necessary function details and parameters required to gather the needed information.

   1. **Tool execution**: The orchestrator uses the response from the LLM to construct an API request and send the request to the tool executor, which securely retrieves the requested information located outside of Copilot's infrastructure. It executes the request and sends the results back to the orchestrator for further processing.

   1. **Result Analysis and Response Formulation**: The orchestrator integrates the API response into the ongoing context and consults the LLM in a continuous reasoning loop until the LLM deems it appropriate to generate a final response.

1. **Responding**: The orchestrator compiles all the information gathered during the reasoning process and submits it to the LLM to create a final response. After ensuring the response complies with Responsible AI guidelines, it sends the response back to the orchestrator, which logs it in the context store and delivers it to the user via the Copilot UI.

1. **Natural language output**: Finally, the orchestrator delivers the response to the user and updates the conversation state. Copilot is ready for its next prompt.

 If you imagine a user's prompt to Copilot like a construction project, then the Copilot orchestrator is the _general contractor_, who coordinates and organizes the work of the specialist _subcontractors_, your plugins. Similar to a general contractor, the orchestrator is responsible for ensuring the project is "completed" according to specifications implied by the user's input (in other words, that Copilot's response satisfies the user's intent in their request).

 However, it's the responsibility of each plugin to provide Copilot with an accurate description of its skills and to execute its skills effectively. This instills a sense of trust in your users and ensure Copilot calls your plugin each time its skills are needed. The next section provides more details on how to optimize your plugin and your OpenAPI documents for the orchestrator to find and use.

## Plugin optimization

Microsoft 365 Copilot can uniquely choose the right skill from the many in its repertoire. But how can you make sure Copilot will choose _your plugin_ to provide the right skill?

The answer lies in how you describe your plugin, its skills, and the parameters for skill execution. Specifying concise and accurate descriptions in your plugin manifest is critical to ensuring the Copilot orchestrator knows when and how to invoke your plugin.

The way you describe your plugin to the orchestrator depends on the type of plugin you build, as summarized by the following table.

| Plugin type  | Described by | Learn more|
|----------|-----------|------------|
|API Plugins |  OpenAPI description | [How to make an OpenAPI document effective in extending Copilot](./openapi-document-guidance.md) |
| Copilot Studio actions | Names and descriptions in Copilot Studio conversation map | [Orchestrate copilot topics and actions with generative AI](/microsoft-copilot-studio/advanced-generative-actions)  |
| Message extension plugins | App manifest   | [Guidelines for message extension plugins](/microsoftteams/platform/messaging-extensions/high-quality-message-extension?context=/microsoft-365-copilot/extensibility/context) |

### Matching mechanisms

When a user submits a query to Copilot, the orchestrator searches its full catalog of skills (_functions_) from installed plugins to identify up to five skills, which best match the query. The orchestrator first tries to match on exact words (**lexical match**) and expands its search scope as needed to include matches on descriptive meanings (**semantic match**), working from specific function names to general plugin descriptions, until all five function candidate slots are filled. Specifically, here's the hierarchy of matching mechanisms for Copilot plugin function selection:

1. Lexical match on function name.
2. Semantic match on function description. **This step is currently in private preview.**
3. Lexical match on plugin name (adds all plugin functions to candidate list).
4. Semantic match on plugin name (adds all plugin functions to candidate list).

The orchestrator works through the above list until all five function candidate slots are filled.

## Next step

Learn best practices for optimizing plugin discoverability and usefulness.

> [!div class="nextstepaction"]
> [Learn what makes a high quality plugin](plugin-guidelines.md)
