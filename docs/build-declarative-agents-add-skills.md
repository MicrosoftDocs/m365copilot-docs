---
title: Add capabilities and custom actions to a declarative agent created with Microsoft 365 Agents Toolkit
description: Learn how to add capabilities and API plugins as custom actions to declarative agents with Microsoft 365 Agents Toolkit.
ms.date: 05/19/2025
author: sebastienlevert
ms.author: slevert
ms.topic: tutorial
ms.localizationpriority: medium
---

# Add skills to a declarative agent created with Microsoft 365 Agents Toolkit

You can enhance the abilities of your agent by adding skills. Skills can be added either by enabling built-in capabilities like [image generator](image-generator.md) or [code interpreter](code-interpreter.md), or by adding [API plugins](overview-api-plugins.md) as custom actions.

> [!IMPORTANT]
> This guide assumes you have completed the [Create declarative agents using Microsoft 365 Agents Toolkit](build-declarative-agents.md) tutorial.

## Add image generator to the agent

The image generator capability enables agents to generate images based on user prompts.

1. Open the `appPackage/declarativeAgent.json` file and add the `GraphicArt` entry to the `capabilities` array.

    ```json
    {
      "name": "GraphicArt"
    }
    ```

    For more information, see [Graphic art object](declarative-agent-manifest-1.5.md#graphic-art-object).

1. Select **Provision** in the **Lifecycle** pane of the Agents Toolkit.

The declarative agent will have the ability to generate images after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/graphic-art-content.png" alt-text="A screenshot showing a response from the declarative agent that contains generated graphic art":::

## Add code interpreter to the agent

Code interpreter is an advanced tool designed to solve complex tasks via Python code.

1. Open the `appPackage/declarativeAgent.json` file and add the `CodeInterpreter` entry to the `capabilities` array.

    ```json
    {
      "name": "CodeInterpreter"
    }
    ```

    For more information, see [Code interpreter object](declarative-agent-manifest-1.5.md#code-interpreter-object).

1. Select **Provision** in the **Lifecycle** pane of the Agents Toolkit.

The declarative agent will have the code interpreter capability after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/code-interpreter-graph-content.png" alt-text="A screenshot showing a response from the declarative agent that contains a generated graph":::

:::image type="content" source="assets/images/build-da/ttk/code-interpreter-python-content.png" alt-text="A screenshot showing the Python code used to generate the requested graph":::

## Add an API plugin as a custom action to the agent

API plugins add new abilities to your agent by allowing your agent to interact with a REST API.

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

- Learn how to [build declarative agents with TypeSpec](build-declarative-agents-typespec.md).
- Learn how to [write effective instructions](declarative-agent-instructions.md) for your agent.
- Test your agent with [Copilot developer mode](debugging-copilot-agent.md) to verify if and how the copilot orchestrator selects your knowledge sources for use in response to given prompts.
- Get answers to [frequently asked questions](transparency-faq-declarative-agent.md).
- Learn about an alternative method of building declarative agents with [Copilot Studio agent builder](copilot-studio-agent-builder.md).
