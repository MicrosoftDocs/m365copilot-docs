---
title: Test and debug agents in Microsoft 365 Agents Toolkit by using developer mode
description: Learn how to test and debug how agents select and use capabilities and actions by using developer mode in Microsoft 365 Agents Toolkit.
author: carolkigoonya
ms.author: ckigoonya
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 05/19/2025
---

# Use developer mode to test and debug agents in Microsoft 365 Agents Toolkit

Testing is an important part of the process of developing [declarative agents](overview-declarative-agent.md) for Microsoft 365 Copilot Chat. You can use [developer mode](debugging-copilot-agent.md) while testing your agent to verify whether and how the Copilot orchestrator selects your knowledge sources for use in response to given prompts.

Additionally, you can use the **Preview your app (F5)** feature in the Microsoft 365 Agents Toolkit ([an evolution of Teams Toolkit](https://aka.ms/M365AgentsToolkit)) to test your agents in a local development environment. This feature provides an interactive way to validate behavior and troubleshoot issues directly from the development interface.

## Use developer mode in Copilot Chat and Agents Toolkit

You can test your agent from Agents Toolkit in Visual Studio Code by selecting **Preview your app (F5)** in the Agents Toolkit pane. This launches your agent in a browser-based Copilot Chat experience, enabling you to quickly validate how it behaves in response to prompts.

:::image type="content" source="assets/images/developer-mode-atk-F5.png" alt-text="Screenshot of Visual Studio Code showing the 'Preview your app (F5)' feature to test Microsoft 365 agents in the browser":::

Once you select your agent in Microsoft 365 Copilot Chat, enable developer mode by typing `-developer on`. To disable developer mode, type `-developer off`.

:::image type="content" source="assets/images/developer-mode-on.png" alt-text="Screenshot of Copilot Chat session where user typed `-developer on` to successfully enable developer mode":::

While developer mode is enabled, a card with debug information returns whenever the orchestrator searches within your enterprise knowledge (data), capabilities, or skills (actions or  plugins) within your agent. In the Agent Toolkit, this debug information appears in the **Debug panel** and includes the following fields:

- **Agent metadata**: identifiers for the agent and conversation
- **Capabilities**: A list of capabilities configured for the agent, along with their execution status and response statistics (if executed)
- **Actions**: A list of actions configured for the agent
  - **Matched functions**: status of functions matched in the runtime app index lookup
  - **Selected functions for execution**: status of functions selected for invocation based on orchestrator reasoning

### Agent metadata section

The agent metadata provides key details about the agent and the current debugging session, including:

- **Summary** - A high-level overview of the configured knowledge sources and their usage statistics
- **Agent ID** - A unique identifier for the agent, which includes the title ID and manifest ID
- **Agent version** – The version number of the agent currently in use
- **Conversation ID** - Identifier for the active chat session or conversation
- **Request ID** - Identifier for the specific prompt within the conversation

:::image type="content" source="assets/images/developer-mode-atk-metadata.png" alt-text="Screenshot of Agents Toolkit session where Copilot has returned a card with debugging information showing the agent metadata":::

### Agent capabilities

The agent capabilities section displays the configured capabilities for the agent, defining the scope of its accessible knowledge sources. The following details are provided for each capability used by the prompt.

- **Execution status** – Indicates whether the capability was used during orchestration
- **Diagnostic log file** – A downloadable .txt file containing detailed execution results, including success or failure messages, which can help with troubleshooting and validation

:::image type="content" source="assets/images/developer-mode-atk-capabilities.png" alt-text="Screenshot of Agent Toolkit session where Copilot has returned a card with debugging information showing the configured agent capabilities":::

### Agent actions

The Agent Actions section provides detailed insight into how your agent's actions (functions or plugins) are processed during orchestration. This information is broken down into three key areas: [action metadata](#action-metadata), [function matching and selection](#function-matching-and-selection), and [execution details](#execution-details).

:::image type="content" source="assets/images/developer-mode-atk-actions.png" alt-text="Screenshot of Agent Toolkit session where Copilot has returned a card with debugging information showing the configured agent actions":::

#### Action metadata

This section displays general information about the actions registered for your agent. This information includes the **Action ID** (the unique identifier for the action) and **version number** (the version of the action definition in use).

#### Function matching and selection

This part shows how the orchestrator interpreted the user prompt and whether any functions were considered relevant for execution:

- **Matched functions** – Functions that semantically match the user prompt during the runtime app index lookup. If no matched functions were returned for the given prompt, it's likely the prompt didn't explicitly mention the action name.

- **Selected functions for execution** – Functions chosen for invocation based on the orchestrator's reasoning and relevance to the prompt. If no actions were enabled, the actions section indicates that there are no actions enabled.

#### Execution details

Action execution details include the function and its status, along with latency, request information (request endpoint, HTTP method, request headers), and the response.

## Troubleshoot failures

The following are common failures you might encounter when you debug your agent and possible causes for the failures.

### No debug info

After launching your agent, check that the connection to the browser is marked as successful in the debug panel. If it isn't, try running F5 again in Visual Studio Code to start a new session.

:::image type="content" source="assets/images/developer-mode-atk-connection.png" alt-text="Screenshot of Agent Toolkit session where connection to web browser is successful":::

If the connection is successful but you don't see debug info, it might be because the orchestrator doesn't require your Microsoft 365 data or skills to respond. No debug info card is returned in this case.

Debug info is also not returned in cases of capacity throttling, where you typically see an error message to try again later.

### Debug info with *No functions selected for execution*

If no action function matched the search intent of the prompt, the debug info card reports *No functions selected for execution*. The cause is likely that the command description in the manifest isn't semantically related to the search intent of the given prompt.

If Copilot previously matched and ran your functions successfully, the requests might be throttled.

### Debug info with empty or failed *No Function execution details*

For API plugins, if there are failed or no function execution details, it indicates a failure during your agent's attempt to assign parameters to the selected function of your plugin. If the failure is consistent, it's most likely due to unclear action or parameter descriptions, invalid host urls, or other problems with your Open API definition.

For message extension plugins, best practice is to optimize for responses under nine seconds. For more info, review the [technical requirements](/microsoftteams/platform/messaging-extensions/high-quality-message-extension?context=/microsoft-365-copilot/extensibility/context#technical-requirements) for message extension plugins.

 Currently the timeout limit for Copilot execution of a plugin API is set at 10 seconds.

## Reporting an issue

Report any feedback or issues with your agent by using the thumbs-up or thumbs-down button. Include the `#extensibility` tag in your report.

:::image type="content" source="assets/images/developer-mode-feedback.png" alt-text="Screenshot of Copilot Chat thumbs up or thumbs down feedback options":::

## Related content

- [Build a declarative agent with Visual Studio Code](build-declarative-agents.md)
- [Build agents with Copilot Studio agent builder](copilot-studio-agent-builder-build.md)
