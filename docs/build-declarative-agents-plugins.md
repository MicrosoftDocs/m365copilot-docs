---
title: Add API plugins as custom actions to a declarative agent created with Microsoft 365 Agents Toolkit
description: Learn how to add API plugins to a declarative agent as a step in building your first agent with Microsoft 365 Agents Toolkit.
ms.date: 05/19/2025
author: sebastienlevert
ms.author: slevert
ms.topic: tutorial
ms.localizationpriority: medium
---

# Step 12: Add API plugins as custom actions to the agent

In this section, you add an [API plugin](overview-api-plugins.md) as an action to your [agent](build-declarative-agents-create-agent.md). API plugins add new abilities to your agent by allowing your agent to interact with a REST API.

Before you begin, create a file named `posts-api.yml` and add the code from the [Posts API OpenAPI description document](#posts-api-openapi-description-document).

1. Select **Add Action** in the **Development** pane of Agents Toolkit.

1. Select **Start with an OpenAPI Description Document**.

1. Select **Browse** and browse to the `posts-api.yml` file.

1. Select all available APIs, then select **OK**.

    :::image type="content" source="assets/images/build-da/ttk/select-apis.png" alt-text="A screenshot of the API selection dialog in Visual Studio code":::

1. Select **manifest.json**.

1. Review the warning in the dialog. When you're ready to proceed, select **Add**.

1. Select **Provision** in the **Lifecycle** pane of the Agents Toolkit.

The declarative agent will have access to your plugin content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/plugin-response.png" alt-text="A screenshot showing a response from the declarative agent that contains API plugin content":::

## Posts API OpenAPI description document

The following OpenAPI description is for the [JSONPlaceHolder API](https://jsonplaceholder.typicode.com/), a free online REST API that you can use whenever you need some fake data.

:::code language="yml" source="assets/snippets/posts-api.yml":::

## Related content

You've completed the declarative agent guide for Microsoft 365 Copilot. Now that you're familiar with the capabilities of a declarative agent, you can learn more about declarative agents in the following articles.

- Learn how to [write effective instructions](../../declarative-agent-instructions.md) for your agent.
- Test your agent with [Copilot developer mode](../../debugging-copilot-agent.md) to verify if and how the copilot orchestrator selects your knowledge sources for use in response to given prompts.
- Get answers to [frequently asked questions](../../transparency-faq-declarative-agent.md).
- Learn about an alternative method of building declarative agents with [Copilot Studio agent builder](../../copilot-studio-agent-builder.md).
