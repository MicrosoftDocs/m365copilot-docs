---
title: Debug an agent with developer mode
description: Learn how to test and debug how agents select and use capabilities and actions
author: carolkigoonya
ms.author: ckigoonya
ms.topic: overview
ms.localizationpriority: medium
ms.date: 02/28/2025
---

# Debug an agent with developer mode

You can use *developer mode* while testing your agent to verify if and how the copilot orchestrator selects your knowledge sources for use in response to given prompts.

## Using Copilot developer mode

To enable developer mode, in Microsoft 365 Copilot, type `-developer on`. To disable developer mode, type `developer off`.

:::image type="content" source="./assets/images/developer-mode-on.png" alt-text="Screenshot of `copilot Chat` session where user has typed `-developer on` to successfully enable developer mode":::

While developer mode is enabled, a card with debug information returns whenever the orchestrator searches specifically within your enterprise knowledge (data), capabilities, or skills (actions or  plugins) within your agent to respond to a prompt. The debug info card includes the following fields:

- **Agent metadata**: identifiers for the agent and conversation.
- **Capabilities**: A list of capabilities configured for the agent.
- **Actions**: A list of actions configured for the agent
  - **Matched functions**: status of functions matched in the runtime app index lookup
  - **Selected functions for execution**: status of functions selected for invocation based on orchestrator reasoning
- **Execution**: A list of executed capabilities and actions for the prompt
  - **Executed capabilities**: status and response stats for executed capabilities.
  - **Executed actions**: Request and response execution status for actions.

### Agent metadata section

:::image type="content" source="assets/images/developer-mode-agent-metadata.png" alt-text="Screenshot of `copilot Chat` session where copilot has returned a card with debugging information showing the agent metadata":::

The agent metadata provides key details about the agent and the current debugging session, including:

- **Agent ID** - A unique identifier for the agent, which includes the title ID and manifest ID.
- **Agent version** – The version number of the agent currently in use.
- **Conversation ID** - Identifies the active chat session or conversation.
- **Request ID** - Identifies the specific prompt within the conversation.

### Agent capabilities

:::image type="content" source="assets/images/developer-mode-agent-capabilities.png" alt-text="Screenshot of `copilot Chat` session where copilot has returned a card with debugging information showing the configured agent capabilities":::

The Agent Capabilities section displays the configured capabilities for the agent, defining the scope of its accessible knowledge sources.

### Agent actions

:::image type="content" source="assets/images/developer-mode-agent-actions.png" alt-text="Screenshot of `copilot Chat` session where copilot has returned a card with debugging information showing the configured agent actions":::

Agent actions display the action ID and version number, configured functions for the action, along with their matching and selection status.

#### Card with *No actions enabled*

If no actions were enabled, the actions section indicates that there are no actions enabled.

#### Card with *No Matched functions*

If no matched functions were returned for the given prompt, this likely indicates the prompt didn't explicitly mention the action name.

### Execution details

The executed details sections shows whether and which of the configured capabilities or actions were executed for the prompt and the execution details and status.

#### Capability Execution details

:::image type="content" source="assets/images/developer-mode-agent-execution.png" alt-text="Screenshot of `copilot Chat` session where copilot has returned a card with debugging information showing executed capabilities":::

Capability execution details display the executed capability and its status. Each capability may have different execution details, such as the search text used, the capability's response, and/or the number of results returned.

#### Action Execution details

:::image type="content" source="assets/images/developer-mode-agent-executed-actions.png" alt-text="Screenshot of `copilot Chat` session where copilot has returned a card with debugging information showing the executed actions":::

Action execution details include the executed function and its status, along with latency, request information (request endpoint, HTTP method, request headers), and the response.

#### Card with *No functions selected for execution*

If no action function matched the search intent of the prompt, the debug info card reports *No functions selected for execution*. This is likely because the command description in the manifest isn't semantically related to the search intent of the given prompt.

If copilot was previously matching and executing your functions successfully, this could be an indication of throttling.

#### Card with empty or failed *No Function execution details*

For non-message extension plugins, if there are failed or no function execution details, it indicates a failure during your agent's attempt to assign parameters to the selected function of your plugin. If the failure is consistent, it's most likely due to unclear action or parameter descriptions, invalid host urls, or other problems with your Open API definition.

For message extension plugins, best practice is to optimize for responses under nine seconds. For more info, review the [technical requirements](/microsoftteams/platform/messaging-extensions/high-quality-message-extension?context=/microsoft-365-copilot/extensibility/context#technical-requirements) for message extension plugins.

 Currently the timeout limit for copilot execution of a plugin API is set at 10 seconds.

### Troubleshooting failures

The following are common failures you might encounter when you debug your agent and possible causes for the failures.

#### No debug card

If the orchestrator doesn't require your Microsoft 365 data or skills to respond to a prompt, no debug info card is returned.

Debug cards are also not returned in cases of capacity throttling, where you'll typically see an error message to try again later.

### Reporting an issue

Report any feedback or issues with your agent by using the thumbs up or thumbs down button. Include the #extensibility tag in your report.
Select whether you thumbs up ('I like something') or thumbs down ('I don't like something') right after the copilot response
:::image type="content" source="./assets/images/developer-mode-feedback.png" alt-text="Screenshot of `copilot Chat` thumbs up or thumbs down feedback options":::

Then, enter a message including the #extensibility tag in the text box
:::image type="content" source="./assets/images/developer-mode-feedback-message.png" alt-text="Screenshot of `copilot Chat` feedback in the text box":::
