---
title: Debug a copilot plugin with developer mode
description: Learn how to test and debug a copilot orchestrator plugin
author: carolkigoonya
ms.author: ckigoonya
ms.topic: overview
ms.date: 04/24/2024
---

# Debug a copilot plugin with developer mode

You can use *developer mode* while testing your plugin to verify if and how the orchestrator selected your plugin for use in response to a given prompt.

## Using copilot plugin developer mode

From *copilot Chat*, you can enable developer mode by typing `-developer on` (or `off` to disable).

:::image type="content" source="./assets/images/developer-mode-on.png" alt-text="Screenshot of `copilot Chat` session where user has typed `-developer on` to successfully enable developer mode":::

While developer mode is enabled, a card with debug information will be returned whenever the orchestrator searches specifically within your enterprise knowledge (data) and/or skills (plugins) to respond to a prompt. The debug info card includes the following fields:

- **Enabled plugins**: A list of plugins enabled by the user (from *Plugins* control below the chat input box)
- **Matched functions**: A list of plugins and functions matched in the runtime app index lookup
- **Selected functions for execution**: A list of plugin functions selected for invocation based on orchestrator reasoning
- **Function execution details**: Request and response function execution status

:::image type="content" source="assets/images/developer-mode-debug-success.png" alt-text="Screenshot of `copilot Chat` session where copilot has returned a card with debugging information showing the successful matching, selection, and function execution of an enabled plugin":::

### Troubleshooting execution failures

Here are some common failures you might encounter when debugging plugin execution, and possible causes.

#### No debug card

If the orchestrator doesn't require your Microsoft 365 data or skills to respond to a prompt, no debug info card will be returned.

Debug cards are also not returned in cases of capacity throttling, where you will typically see an error message to try again later.

#### Empty debug card

If no plugins were enabled, the debug info card will return empty.

#### Card with empty *Matched functions*

If relevant plugins are enabled, yet no matched functions were returned for the given prompt, this likely indicates the prompt did not explicitly mention the plugin name.

#### Card with empty *Selected functions for execution*

If no enabled plugin matched the search intent of the prompt, the debug info card will report *No functions selected for execution*. This is likely because the command description in the manifest is not semantically related to the search intent of the given prompt.

If copilot was previously matching and executing your plugin functions successfully, this could be an indication of throttling.

#### Card with empty or failed *Function execution details*

For non-message extension plugins, if the function execution details or request status is empty or failed, it indicates a failure during copilot's attempt to assign parameters to the selected function of your plugin. If the failure is consistent, it is most likely due to unclear plugin or parameter descriptions, invalid host urls, or other problems with your Open API definition.

For message extension plugins, best practice is to optimize for responses under nine seconds. For more more info, review the [technical requirements](/microsoftteams/platform/messaging-extensions/high-quality-message-extension?context=/microsoft-365-copilot/extensibility/context#technical-requirements) for message extension plugins.

#### Card with function execution response status of `0`

If the *Function execution details* is reporting a *Response Status* of `0`, but *Request status* of `Success`, this might be an indication of timeout. Currently the timeout limit for copilot execution of a plugin API is set at 10 seconds.

### Reporting an issue

Please report any feedback or issues with your plugin by using the thumbs up or thumbs down button. Include the #extensibility tag in your report.
Select whether you thumbs up ('I like something') or thumbs down ('I don't like something') right after the copilot response
:::image type="content" source="./assets/images/developer-mode-feedback.png" alt-text="Screenshot of `copilot Chat` thumbs up or thumbs down feedback options":::

Then, enter a message including the #extensibility tag in the text box
:::image type="content" source="./assets/images/developer-mode-feedback-message.png" alt-text="Screenshot of `copilot Chat` feedback in the text box":::
