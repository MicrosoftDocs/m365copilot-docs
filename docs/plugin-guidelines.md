---
title: Build high quality Copilot plugins for Microsoft 365
description: Here are best practices for building Copilot plugins for Microsoft 365
author: erikadoyle
ms.author: edoyle
ms.topic: best-practice
ms.date: 11/1/2023
---

# Build high quality Copilot plugins for Microsoft 365

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

When you build a plugin, you enable your users to interact with your web service using natural language with Microsoft Copilot. Plugins expand Copilot's skills to accomplish tasks on behalf of your users. They are especially good at:

- Accessing real-time information,
- Retrieving relational data, and
- Performing actions across apps

## Qualities of a good plugin

A clear and concise [description of your plugin](orchestrator.md#plugin-search-optimization) is essential for Copilot to recognize its capabilities and match it with the appropriate user tasks. Upon runtime, you can ensure your plugin provides the best possible user experience by designing your plugin with the following characteristics.

<!-- markdownlint-disable DOCSMD003 -->
:::row:::
    :::column:::
        :::image type="content" source="assets/images/icon-search.png" alt-text="Image representing 'Robust search'" border="false":::

        **Support search**

        Anticipate and support the most common searches users will perform.

    :::column-end:::
    :::column:::
        :::image type="content" source="assets/images/icon-deep-content.png" alt-text="Image representing 'Deep content retrieval'" border="false":::

        **Retrieve deep content**

        Search match with the surrounding paragraph. Provide an Adaptive Card response with additional information.
    :::column-end:::
:::row-end:::

:::row:::
    :::column:::
        :::image type="content" source="assets/images/icon-actionable.png" alt-text="Image representing 'Actionable'" border="false":::

        **Present actionable results**

        Include a way for the user to take action, such as a deep link to your website, or a modal dialog.
    :::column-end:::
    :::column:::
        :::image type="content" source="assets/images/icon-preview.png" alt-text="Image representing 'Provide a preview'" border="false":::

        **Provide a preview**

        Guide your user through content previews.
    :::column-end:::
:::row-end:::

## Plugin best practices

The remainder of this article will cover best practices for building high quality Copilot plugins.

### Build for safety and responsible AI

- Anti-Compete: Avoid using the name of any other plugin in both short and full descriptions.
- Responsible AI: Avoid using inappropriate or offensive keywords.
- Prompt injection: Ensure that the Text doesn't lead to prompt injections. Additionally, description must not contain symbols or text that indicate that it can be used as code for Prompt injection. Avoid using phrases, functions, and codes that call an app recurrently.

### Support multi-parameter search queries

To support complex prompts, expand the scope of your search support to handle two or more search query `parameters` simultaneously by enabling multi-parameter support in your plugin [app manifest](/microsoftteams/platform/resources/schema/manifest-schema#composeextensionscommands).

### Avoid generic descriptions of your plugin, its skills, and parameters

Be precise in the description of what the plugin does and does not do. While it's tempting to add extra information to try and boost the likelihood of a plugin being used by Copilot, this can result in the following critical issues:

- A generic plugin description can prevent the appropriate plugin for the job from getting picked up and if this happens frequently the user might disable the plugin.

- When selected incorrectly, failures in plugin execution or response are likely outcomes. Copilot will not surface plugins that have high error rates, and user trust in the plugin could erode.

### Do not assume Copilot can guess required inputs

Only in limited scenarios is Copilot able to guess an input to a user prompt. Most of the time, required inputs to plugin queries need to be stated explicitly in the user's prompt to Copilot. Best practice is to test your plugin with different prompts to Copilot to anticipate expected behavior.

### Validate operations Copilot can perform in terms of reasoning over the plugin response

While Copilot provides basic capabilities in reasoning over the output of a plugin response, results will vary depending on the scenario. Best practice is to test your plugin with different prompts that require post-processing to anticipate expected behavior.
