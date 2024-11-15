---
title: Debug a copilot agent with developer mode
description: Learn how to test and debug how copilot agents select and use plugins
author: carolkigoonya
ms.author: ckigoonya
ms.topic: overview
ms.date: 11/18/2024
---

# Debug a copilot agent with developer mode

You can use *developer mode* while testing your agent to verify if and how the copilot orchestrator selected your plugins for use in response to given prompts.

## Using copilot developer mode

From *copilot Chat*, you can enable developer mode by typing `-developer on` (or `off` to disable).

:::image type="content" source="./assets/images/developer-mode-on.png" alt-text="Screenshot of `copilot Chat` session where user has typed `-developer on` to successfully enable developer mode":::

While developer mode is enabled, a card with debug information returns whenever the orchestrator searches specifically within your enterprise knowledge (data) o skills (plugins) within your agent to respond to a prompt. The debug info card includes the following fields:

- **Enabled plugins**: A list of plugins enabled for the agent
- **Matched functions**: A list of plugins and functions matched in the runtime app index lookup
- **Selected functions for execution**: A list of plugin functions selected for invocation based on orchestrator reasoning
- **Function execution details**: Request and response function execution status

:::image type="content" source="assets/images/developer-mode-debug-success-v2.1.png" alt-text="Screenshot of `copilot Chat` session where copilot has returned a card with debugging information showing the successful matching, selection, and function execution of an enabled plugin":::
:::image type="content" source="assets/images/developer-mode-debug-success-v2.2.png" alt-text="Screenshot of `copilot Chat` session where copilot has returned a card with debugging information showing the successful selection, and function execution of an enabled plugin":::

### Troubleshooting execution failures

Here are some common failures you might encounter when debugging plugin execution, and possible causes.

#### No debug card

If the orchestrator doesn't require your Microsoft 365 data or skills to respond to a prompt, no debug info card is returned.

Debug cards are also not returned in cases of capacity throttling, where you'll typically see an error message to try again later.

#### Card with *No plugins enabled*

If no plugins were enabled, the Enabled plugins section indicates that there are no plugins enabled.

#### Card with *No Matched functions*

If relevant plugins are enabled, yet no matched functions were returned for the given prompt, this likely indicates the prompt didn't explicitly mention the plugin name.

#### Card with *No functions selected for execution*

If no enabled plugin matched the search intent of the prompt, the debug info card reports *No functions selected for execution*. This is likely because the command description in the manifest isn't semantically related to the search intent of the given prompt.

If copilot was previously matching and executing your plugin functions successfully, this could be an indication of throttling.

#### Card with empty or failed *No Function execution details*

For non-message extension plugins, if there are failed or no function execution details , it indicates a failure during copilot's attempt to assign parameters to the selected function of your plugin. If the failure is consistent, it's most likely due to unclear plugin or parameter descriptions, invalid host urls, or other problems with your Open API definition.

For message extension plugins, best practice is to optimize for responses under nine seconds. For more info, review the [technical requirements](/microsoftteams/platform/messaging-extensions/high-quality-message-extension?context=/microsoft-365-copilot/extensibility/context#technical-requirements) for message extension plugins.

 Currently the timeout limit for copilot execution of a plugin API is set at 10 seconds.

### Reporting an issue

Report any feedback or issues with your plugin by using the thumbs up or thumbs down button. Include the #extensibility tag in your report.
Select whether you thumbs up ('I like something') or thumbs down ('I don't like something') right after the copilot response
:::image type="content" source="./assets/images/developer-mode-feedback.png" alt-text="Screenshot of `copilot Chat` thumbs up or thumbs down feedback options":::

Then, enter a message including the #extensibility tag in the text box
:::image type="content" source="./assets/images/developer-mode-feedback-message.png" alt-text="Screenshot of `copilot Chat` feedback in the text box":::
