---
title: Add capabilities and custom actions to a declarative agent created with Microsoft 365 Agents Toolkit
description: Learn how to add capabilities and API plugins as custom actions to declarative agents with Microsoft 365 Agents Toolkit.
#customer intent: As a developer, I want to add built-in capabilities and an API plugin to my declarative agent in Agents Toolkit so that it can generate images, run code, and call a REST API.
ms.date: 09/30/2026
author: sebastienlevert
ms.author: slevert
ms.topic: tutorial
ms.localizationpriority: medium
---

<!-- cSpell:ignore GCCH -->

# Add capabilities and custom actions to a declarative agent created with Microsoft 365 Agents Toolkit

You can enhance the abilities of your agent by adding capabilities or custom actions. You can enhance your agent by enabling built-in capabilities like [image generator](image-generator.md) or [code interpreter](code-interpreter.md), or by adding [MCP or API plugins](overview-plugins.md) as custom actions. This tutorial adds an API plugin. To add an MCP server, see [Build or reuse MCP servers](build-reuse-mcp-servers.md) and [Build a plugin for a declarative agent from an MCP server](build-mcp-plugins.md).

<!-- PM-REVIEW (09/25/2026): "API plugin"/"custom actions" terminology pending PM guidance; see plugins-overview.md:50. -->

> [!IMPORTANT]
> This guide assumes you have completed the [Create declarative agents by using Microsoft 365 Agents Toolkit and JSON](build-declarative-agents.md) tutorial.

## Add image generator to the agent

The image generator capability enables agents to generate images based on user prompts. To add image generator:

1. Open the `appPackage/declarativeAgent.json` file and add the `GraphicArt` entry to the `capabilities` array. For more information, see [Graphic art object](declarative-agent-manifest-1.8.md#graphic-art-object).

    ```json
    {
      "name": "GraphicArt"
    }
    ```

1. In the **Lifecycle** pane of Microsoft 365 Agents Toolkit, select **Provision**.

The declarative agent can generate images after you reload the page.

> [!NOTE]
> Image generator isn't available to agents in Microsoft 365 Government Community Cloud High (GCCH) environments.

:::image type="content" source="assets/images/build-da/ttk/graphic-art-content.png" alt-text="A screenshot showing a response from the declarative agent that contains generated graphic art":::

## Add code interpreter to the agent

Code interpreter is an advanced tool designed to solve complex tasks via Python code.

> [!NOTE]
> In GCCH environments, code interpreter is only available to users with a Microsoft 365 Copilot add-on license.

1. Open the `appPackage/declarativeAgent.json` file and add the `CodeInterpreter` entry to the `capabilities` array.

    ```json
    {
      "name": "CodeInterpreter"
    }
    ```

    For more information, see [Code interpreter object](declarative-agent-manifest-1.8.md#code-interpreter-object).

1. Select **Provision** in the **Lifecycle** pane of Agents Toolkit.

The declarative agent has the code interpreter capability after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/code-interpreter-graph-content.png" alt-text="A screenshot showing a response from the declarative agent that contains a generated graph":::

:::image type="content" source="assets/images/build-da/ttk/code-interpreter-python-content.png" alt-text="A screenshot showing the Python code used to generate the requested graph":::

## Add an API plugin as a custom action to the agent

API plugins add new abilities to your agent by allowing your agent to interact with a REST API.

> [!NOTE]
> Custom actions aren't supported in GCCH environments.

Before you begin, create a file named `posts-api.yml` and add the code from the [Posts API OpenAPI description document](#posts-api-openapi-description-document).

1. Select **Add Action** in the **Development** pane of Agents Toolkit.

1. Select **Start with an OpenAPI Description Document**.

1. Select **Browse** and browse to the `posts-api.yml` file.

1. Select all available APIs, then select **OK**.

    :::image type="content" source="assets/images/build-da/ttk/select-apis.png" alt-text="A screenshot of the API selection dialog in Visual Studio Code":::

1. Select **manifest.json**.

1. Review the warning in the dialog. When you're ready to proceed, select **Add**.

1. Select **Provision** in the **Lifecycle** pane of Agents Toolkit.

The declarative agent has access to your plugin content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/plugin-response.png" alt-text="A screenshot showing a response from the declarative agent that contains API plugin content":::

## Posts API OpenAPI description document

The following OpenAPI description is for the [JSONPlaceHolder API](https://jsonplaceholder.typicode.com/), a free online REST API that you can use whenever you need some fake data.

:::code language="yml" source="assets/snippets/posts-api.yml":::

## Related content

You've completed the declarative agent guide for Microsoft 365 Copilot. Now that you're familiar with the capabilities of a declarative agent, you can learn more about declarative agents in the following articles.

- [Create declarative agents by using Microsoft 365 Agents Toolkit and TypeSpec](build-declarative-agents-typespec.md)
- Learn how to [write effective instructions](declarative-agent-instructions.md) for your agent.
- Test your agent with developer mode to verify if and how the Copilot orchestrator selects your knowledge sources for use in response to given prompts. For more information, see [Test and debug agents in Microsoft 365 Agents Toolkit by using developer mode](debugging-agents-vscode.md).
- Get answers to [frequently asked questions](transparency-faq-declarative-agent.md).
- Learn about other ways to build declarative agents: no-code in [Agent Builder](agent-builder.md), or low-code in [Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365/copilot/extensibility/context).
