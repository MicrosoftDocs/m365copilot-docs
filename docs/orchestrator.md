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

1. **Natural language input**

The user submits a query via the Microsoft365 Copilot UI, such as "What tickets are assigned to me right now?"

2. **Preliminary checks**

Copilot conducts several checks on the query, including responsible AI checks and security measures to ensure it doesn’t pose any risks. If the query fails any of these checks, Copilot will terminate the interaction.

3. **Reasoning**

The Copilot orchestrator formulates a plan comprising of multiple actions that it will perform in an attempt to respond to the user's prompt.

3a. **Context and Tool Selection:**

The orchestrator retrieves the user's conversation context from the context store and integrates data from Microsoft Graph to refine the context. It then adjusts the initial query based on this updated context and forwards it to the LLM (large language model) to guide the next steps. The LLM may proceed directly to generating a response using Copilot’s built-in capabilities, or it may determine that additional data is necessary. If further information is needed, the LLM provides guidance on how to obtain this information from other tools. Following the LLM's guidance, the orchestrator searches the plugins store to find the appropriate plugin (tool) based on the plugin titles and descriptions. It then identifies the specific functions (skills) within these selected plugins that are best suited to provide the required information.

3b. **Function Matching and Parameter Determination:**

The orchestrator constructs a new query incorporating the context, selected tools, and their functions, and sends this to the LLM to formulate the appropriate API request(s) for obtaining the required information. The LLM determines the necessary functions and parameters and returns a structured request to the orchestrator.

3c. **Tool execution:**

The orchestrator forwards this API request to the tool executor, which securely connects to the API server located outside of Copilot's infrastructure. It executes the request and sends the results back to the orchestrator for further processing.

3d. **Result Analysis and Response Formulation:**

The orchestrator integrates the API response into the ongoing context and consults the LLM in a continuous reasoning loop until the LLM deems it appropriate to generate a final response.

4.**Responding**

The orchestrator compiles all the information gathered during the reasoning process and submits it to the LLM to create a final response. After ensuring the response complies with Responsible AI guidelines, it sends the response back to the orchestrator, which logs it in the context store and delivers it to the user via the Copilot UI.

5.**Natural language output**

Finally, the orchestrator delivers the response to the user and updates the conversation state. Copilot is ready for its next prompt.

If you imagine a user's prompt to Copilot like a construction project, then the Copilot orchestrator is the _general contractor_, who coordinates and organizes the work of the specialist _subcontractors_, your plugins. Similar to a general contractor, the orchestrator is responsible for ensuring the project is "completed" according to specifications implied by the user's input (in other words, that Copilot's response satisfies the user's intent in their request).

However, its the responsibility of each plugin to provide Copilot with an accurate description of its skills and to execute its skills effectively. This will instill a sense of trust in your users and ensure Copilot will call your plugin each time its skills are needed. The next section provides more details on how to optimize your plugin and your OpenAPI documents for the orchestrator to find and use.
