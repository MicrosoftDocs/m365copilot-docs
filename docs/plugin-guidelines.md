---
title: Build high quality plugins for Microsoft Copilot
description: Here are best practices for building plugins for Microsoft Copilot for Microsoft 365
author: erikadoyle
ms.author: edoyle
ms.topic: best-practice
ms.date: 6/26/2024
---

# Build high quality plugins for Microsoft Copilot

[!INCLUDE [preview-disclaimer](includes/preview-disclaimer.md)]

When you build a plugin, you enable your users to interact with your web service using natural language with Microsoft Copilot. Plugins expand Copilot's skills to accomplish tasks on behalf of your users. They're especially good at:

- Accessing real-time information,
- Retrieving relational data, and
- Performing actions across apps

## Qualities of a good plugin

A clear and concise [description of your plugin](orchestrator.md#plugin-search-optimization) is essential for Copilot to recognize its capabilities and match it with the appropriate user tasks. You can ensure your plugin provides the best possible user experience at runtime by designing your plugin with the following characteristics.

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

The remainder of this article covers best practices for building high quality plugins.

### Build for safety and responsible AI

- Anti-Compete: Avoid using the name of any other plugin in both short and full descriptions.
- Responsible AI: Avoid using inappropriate or offensive keywords.
- Prompt injection: Ensure that text doesn't lead to prompt injections. Additionally, descriptions must not contain symbols or text that indicate they can be used as code for prompt injection. Avoid using phrases, functions, and codes that call an app recursively.

### Support multi-parameter search queries

To support complex prompts, expand the scope of your search support to handle three or more search query `parameters` simultaneously by enabling multi-parameter support in your plugin [app manifest](/microsoftteams/platform/resources/schema/manifest-schema#composeextensionscommands).

Ensure search parameters have good descriptions and explicit input types and output formats.

### Avoid generic descriptions of your plugin, its skills, and parameters

Be precise in the description of what the plugin does and doesn't do. While it's tempting to add extra information to try to boost the likelihood of a plugin being used by Copilot, this can result in the following critical issues:

- A generic plugin description prevents the appropriate plugin for the job from getting picked up and if this happens frequently the user might disable the plugin.

- When selected incorrectly, failures in plugin execution or response are likely outcomes. Copilot won't surface plugins that have high error rates, and user trust in the plugin could erode.

### Don't assume Copilot can guess required inputs

Only in limited scenarios is Copilot able to guess an input to a user prompt. Most of the time, required inputs to plugin queries need to be stated explicitly in the user's prompt to Copilot. Best practice is to test your plugin with different prompts to Copilot to anticipate expected behavior.

### Validate operations Copilot can perform in terms of reasoning over the plugin response

While Copilot provides basic capabilities in reasoning over the output of a plugin response, results vary depending on the scenario. Best practice is to test your plugin with different prompts that require post-processing to anticipate expected behavior.

### Provide visually rich responses to user queries

Respond to user input with structured, actionable, and visually rich [Adaptive Cards](/microsoftteams/platform/messaging-extensions/high-quality-message-extension). Ensure your Adaptive Card responses are informationally dense, and provide at least one action button and two additional pieces of information (in addition to your app logo, title, thumbnail, and title of the information). As additional information, it's useful to provide the most frequently searched attributes, such as *status*, *date*, or *assigned to* fields.

## See also

[Guidelines to create or upgrade Copilot extensions](/microsoftteams/platform/messaging-extensions/high-quality-message-extension?context=/microsoft-365-copilot/extensibility/context)

[Publish plugins and Graph connectors for Copilot](./publish.md)
