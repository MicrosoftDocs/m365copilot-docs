---
title: Build Agents with Agent Builder in Microsoft 365 Copilot
description: Learn how to build agents by using the Agent Builder feature in Microsoft 365 Copilot.
author: jasonxian-msft
ms.author: jasonxian
ms.localizationpriority: medium
ms.date: 03/10/2026
ms.topic: article
---

# Build agents by using Agent Builder in Microsoft 365 Copilot

The Agent Builder feature in Microsoft 365 Copilot provides a simple interface that you can use to quickly build declarative agents by using natural language. This article describes how to use Agent Builder to build an agent for Copilot.

When you choose **New agent** in Microsoft 365 Copilot, you can:

- Use natural language to describe your agent, and Copilot builds it for you (recommended).
- Configure your agent manually via the [**Configure** tab](#use-the-configure-tab-to-create-your-agent-manually).
- Start with a [template](#build-from-a-template) to create an agent for a specific use case.

## Use natural language to describe your agent (recommended)

You can use Agent Builder in Microsoft 365 Copilot to create an agent by using natural language. As you provide information conversationally, the agent’s name, description, and instructions update automatically to refine its behavior. This approach:

- Understands a user's intent through natural language.
- Provides suggestions, guidance, and next-best prompts.
- Generates optimized agent instructions to build accurate, high-quality agents.

Using natural language saves time and helps you create effective agents without manual configuration. In response to your natural language description, Agent Builder:

- Configures the agent automatically.
- Suggests and applies refinements. For example: "Include email attachments in summaries". Agent Builder suggests:

    - Show only attachments from unread messages
    - Summarize attachments by file type

- Adds knowledge sources. For example: "Summarize my daily emails and include attachments." Agent Builder adds **My emails** as a knowledge source.
- Integrates capabilities. For example: "Create a PowerPoint presentation from this outline" or "Analyze this Excel data and generate a chart." Agent Builder configures your agent with [code interpreter](code-interpreter.md) and [image generator](image-generator.md).

You can also choose the plus sign (**+**) in the chat box to select and add or search for knowledge sources.

When you finish describing your agent and adding knowledge sources, view the configuration on the **Configure** tab. The tool prepopulates:

- Name
- Description
- Instructions (including guidelines, steps, error handling, examples)
- Knowledge sources
- Suggested prompts

:::image type="content" source="assets/images/agent-builder-screenshots/agent-configuration.png" alt-text="Screenshot of the Configure tab showing the agent configuration when created using natural language":::

After you create your agent, [test it](#test-your-agent) on the **Try it** tab. You can continue to refine it by using natural language. If you want to change the starter prompts or intent, just say it in natural language - for example: "Update the agent to summarize Teams chats instead of emails."

> [!NOTE]
> The natural language experience is only available when you set your Microsoft 365 language to one of the [available languages](agent-builder-regional-availability.md). If natural language isn't supported in your preferred language, you can [configure your agent manually](#use-the-configure-tab-to-create-your-agent-manually).

## Use the Configure tab to create your agent manually

If you don't want to use natural language and let Agent Builder configure your agent for you, you can configure your agent's behavior manually on the **Configure** tab.

To configure your agent manually:

1. In Microsoft 365 Copilot, select **New agent**.
1. On **New agent**, select **Skip to configure**.
1. Agent Builder opens the **Configure** tab, where you can specify your agent's name, description, instructions, knowledge, and prompts.

The following table describes the fields that make up the agent.

<!-- markdownlint-disable MD033 -->
| Field               | Description |
| ------------------- | ----------- |
| **Name**            | The name of your agent. Use something that's descriptive and unique. Character limit of 30 characters. |
| **Icon**            | You can use AI to generate an icon, choose an icon from the icon library, or manually upload an image to represent your agent and give it a unique personality. To update the icon for your agent, select the pencil icon and choose **Generate**, **Browse**, or **Upload** to add a new icon.<br><br>If you upload an icon, a PNG file with a transparent background works best due to the extra padding that is applied by default around your icon.<ul><li>Supported file type: PNG</li><li>Color icon resolution limit: 192x192 pixels</li><li>File size limit: 1 MB</li></ul>  |
| **Description**     | The description helps the Large Language Model (LLM) identify and use your agent for a specific task or situation. Make it as short, precise, and simple as possible. It's also displayed in the app file for use in the app catalog. Character limit of 1,000 characters. |
| **Instructions**    | Specific instructions to the LLM that you want to use to extend the capabilities of Microsoft 365 Copilot. They direct the behavior of the agent, including its tasks and how it completes them. If you're using the **Describe** tab, they're autogenerated for you. Character limit of 8,000 characters. For more information, see [Write effective instructions](declarative-agent-instructions.md).|
| **Knowledge**       | You can specify up to 20 knowledge sources (including SharePoint sites, folders, and files) or Copilot connectors. For details, see [Add knowledge sources](agent-builder-add-knowledge.md). |
| **Capabilities** | You can enhance the user experience of your declarative agent by adding capabilities. For details, see [Add capabilities](#add-capabilities). |
| **Starter Prompts** | Starter prompts help other users understand commonly supported scenarios by your agent. Each starter prompt comes with a name and description. There's no minimum number of starter prompts. |
<!-- markdownlint-enable MD033 -->

After you create your agent, [test it](#test-your-agent) on the **Try it** tab. You can continue to refine your agent's instructions, knowledge, and starter prompts.

## Build from a template

Agent Builder in Microsoft 365 Copilot includes templates that you can use to build agents for specific use cases. The templates come preconfigured with a description, instructions, and prompts. Use the templates as-is or customize them for your specific needs, such as adding more knowledge sources and capabilities.

To use a template to build your agent:

1. In Microsoft 365 Copilot, select **New agent**.
2. On the New agent page, under **Start with a template**, choose the template you want to use. The agent is created automatically.
3. You can further refine your agent and add knowledge sources by using natural language, or add your refinements manually on the **Configure** tab.

:::image type="content" source="assets/images/agent-builder-screenshots/agent-builder-template.png" alt-text="Screenshot of the Configure tab where users can manually update agent based on a template":::

For more information, see [Agent templates](agent-templates-overview.md).

After you create your agent, [test it](#test-your-agent) on the **Try it** tab. You can continue to refine your agent's instructions, knowledge, and starter prompts.

## Add knowledge sources

To build context-aware agents, reference SharePoint items or any public websites. If your users have a Microsoft 365 Copilot add-on license, you can also:

- Ground your agents in personal work information, such as Teams chat messages and Outlook emails.
- Use prebuilt [Microsoft 365 Copilot connectors](/graph/connecting-external-content-connectors-overview) that are enabled in your tenant.

Choose knowledge sources to add to your agent in the chat box on the **Describe** tab if you're using natural language to create your agent, or select knowledge sources on the **Configure** tab.

For more information, see [Add knowledge sources](agent-builder-add-knowledge.md).

> [!NOTE]
> The availability of knowledge sources and capabilities differs based on the user's license. For details, see [Agent capabilities and licensing models](prerequisites.md#agent-capabilities-and-licensing-models).

## Add capabilities

Use natural language to add capabilities on the **Describe** tab, or configure them in the **Capabilities** section of the **Configure** tab. You can add the following capabilities to your agent:

- [Code interpreter](code-interpreter.md) - Solves complex math problems, analyzes data, and generates visualizations. To add this capability, select the toggle next to **Create documents, charts, and code**.
- [Image generator](image-generator.md) - Generates images based on user prompts. To add this capability, select the toggle next to **Create images**.

## Test your agent

The **Try it** tab provides an instance of the agent that you can use to test and refine your agent within the authoring experience. Use it to test the agent while you're creating or making updates to it. The **Try it** experience is enabled after the agent has a name, description, and instructions. It behaves according to those instructions like a published agent, including the ability to respond to complex queries within its realm of specified knowledge. The agent updates during each turn of the conversation as you add new information by using natural language or manually on the **Configure** tab in Agent Builder.

Some agent features aren't available in the **Try it** experience. For example, you can't use it to share prompts, provide feedback, or @mention other agents in the Microsoft 365 Copilot app. You can use these features after you create the agent.

The **Try it** experience includes suggested starter prompts, which when selected invoke the prompt and start the conversation. You can select **New chat** to start a new conversation with the agent to view the starter prompts again.

## Next step

> [!div class="nextstepaction"]
> [Publish and manage agents](agent-builder-share-manage-agents.md)
