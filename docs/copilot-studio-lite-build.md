---
title: Build Agents with Microsoft 365 Copilot
description: Learn how to build agents by using the Agent Builder feature in Microsoft 365 Copilot.
author: jasonxian-msft
ms.author: jasonxian
ms.localizationpriority: medium
ms.date: 11/25/2025
ms.topic: article
---

# Build agents with Microsoft 365 Copilot

The Agent Builder feature in Microsoft 365 Copilot provides a simple interface that you can use to quickly build declarative agents by using natural language.

To get started, open the Microsoft 365 Copilot app. In the left pane, choose **New agent**.

You can create your agent in one of three ways:

- Using natural language via the [**Describe** tab](#use-natural-language-and-the-describe-tab-recommended) (recommended)
- Manually via the [**Configure** tab](#use-the-configure-tab-to-create-your-agent-manually)
- By using a [template](#build-from-a-template)

## Use natural language and the Describe tab (recommended)

You can use Agent Builder in Microsoft 365 Copilot to create an agent using natural language. As you provide information conversationally on the **Describe** tab, the agent’s name, description, and instructions update automatically to refine its behavior. This approach:

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

You can also choose **Add content** in the chat box to search for or select knowledge sources.

When you finish describing your agent and adding knowledge sources, view the configuration on the **Configure** tab. The tool prepopulates:

- Name
- Description
- Instructions (including guidelines, steps, error handling, examples)
- Knowledge sources
- Suggested prompts

:::image type="content" source="assets/images/copilot-studio-lite/agent-configuration.png" alt-text="Screenshot of the Configure tab showing the agent configuration when created using natural language":::

After you create your agent, [test it](#test-your-agent) in the **Agent preview** pane. You can continue to refine it by using natural language. If you want to change the starter prompt or intent, just say it in natural language - for example: "Update the agent to summarize Teams chats instead of emails."

> [!NOTE]
> The **Describe** tab is only available when your Microsoft 365 language is set to one of the [available languages](copilot-studio-lite-availability.md). You can build your agent via the **Configure** tab if the **Describe** tab isn't supported in your preferred language.

## Use the Configure tab to create your agent manually

If you don't want to use natural language and let Agent Builder configure your agent for you, you can configure your agent's behavior manually on the **Configure** tab.

To configure your agent manually:

1. In Microsoft 365 Copilot, choose **New agent**.
1. On the New agent page, choose **Configure new agent**.
1. Agent Builder opens the **Configure** tab, where you can specify your agent's name, description, instructions, knowledge, and prompts.

The following table describes the fields that make up the agent.

<!-- markdownlint-disable MD033 -->
| Field               | Description |
| ------------------- | ----------- |
| **Name**            | The name of your agent. Use something that's descriptive and unique. Character limit of 30 characters. |
| **Icon**            | You can manually upload an image to represent your agent and give it a unique personality. <ul><li>Supported file types: PNG</li><li>Color icon resolution limit: 192x192 pixels</li><li>File size limit: 1 MB</li></ul> A PNG file with a transparent background works best due to the extra padding that is applied by default around your icon. |
| **Description**     | The description helps the Large Language Model (LLM) identify and use your agent for a specific task or situation. Make it as short, precise, and simple as possible. It's also displayed in the app file for use in the app catalog. Character limit of 1,000 characters. |
| **Instructions**    | Specific instructions to the LLM that you want to use to extend the capabilities of Microsoft 365 Copilot. They direct the behavior of the agent, including its tasks and how it completes them. If you're using the **Describe** tab, they're autogenerated for you. Character limit of 8,000 characters. For more information, see [Write effective instructions](declarative-agent-instructions.md).|
| **Knowledge**       | You can specify up to 20 knowledge sources (including SharePoint sites, folders, and files) or Copilot connectors. For details, see [Add knowledge sources](copilot-studio-lite-knowledge.md). |
| **Capabilities** | You can enhance the user experience of your declarative agent by adding capabilities. For details, see [Add capabilities](#add-capabilities). |
| **Starter Prompts** | Starter prompts help other users understand commonly supported scenarios by your agent. Each starter prompt comes with a name and description. There's no minimum number of starter prompts. |
<!-- markdownlint-enable MD033 -->

After you create your agent, [test it](#test-your-agent) in the **Agent preview** pane. You can continue to refine your agent's instructions, knowledge, and starter prompts.

## Build from a template

Agent Builder in Microsoft 365 Copilot includes templates that you can use to build agents for specific use cases. The templates are preconfigured with a description, instructions, and prompts. You can use the templates as-is or customize them for your specific needs; for example, you can add more knowledge sources and capabilities.

To use a template to build your agent:

1. In Microsoft 365 Copilot, select **New agent**.
2. On the New agent page, under **Start with a template**, choose the template you want to use. The agent is created for you automatically.
 
You can further refine your agent and add knowledge sources by using natural language on the **Describe** tab, or add your refinements manually on the **Configure** tab.

:::image type="content" source="assets/images/copilot-studio-lite/agent-builder-configure.png" alt-text="Screenshot of the Configure tab where users can manually configure their agent":::

For more information, see [Agent templates](agent-templates-overview.md) or choose one of the templates on the **Describe** or **Configure** tab.

After you create your agent, [test it](#test-your-agent) in the **Agent preview** pane. You can continue to refine your agent's instructions, knowledge, and starter prompts.

## Add knowledge sources

To build context-aware agents, you can reference SharePoint items or any public websites. If your users have a Microsoft 365 Copilot add-on license, you can also:

- Ground your agents in personal work information, such as Teams chat messages and Outlook emails
- Use prebuilt [Microsoft 365 Copilot connectors](/graph/connecting-external-content-connectors-overview) that are enabled in your tenant.

You can choose knowledge sources to add to your agent in the chat box on the **Describe** tab if you're using natural language to create your agent, or you can select knowledge sources on the **Configure** tab.

For more information, see [Add knowledge sources](copilot-studio-lite-knowledge.md).

> [!NOTE]
> The availability of knowledge sources and capabilities differs based on the user's license. For details, see [Agent capabilities for Microsoft 365 users](/microsoft-365-copilot/extensibility/prerequisites#agent-capabilities-for-microsoft-365-users).

## Add capabilities

You can use natural language to add capabilities on the **Describe** tab, or configure them in the **Capabilities** section of the **Configure** tab. You can choose to add the following capabilities to your agent:

- [Code interpreter](code-interpreter.md) - Solves complex math problems, analyze data, and generate visualizations. To add this capability, select the toggle next to **Create documents, charts, and code**.
- [Image generator](image-generator.md) - Generates images based on user prompts. To add this capability, select the toggle next to **Create images**.

## Test your agent

The **Agent preview** pane provides an instance of the agent that you can use to test and refine your agent within the authoring experience. You can use it to test the agent while you're creating or making updates to it. You can test your agent in the test pane to experience it in a similar way to end users. The test pane is enabled after the agent has name, description, and instructions. It behaves according to those instructions like a fully fledged agent, including the ability to respond to complex queries within its realm of specified knowledge. The agent updates during each turn of the conversation as you add new information by using natural language on the **Describe** or manually on the **Configure** tab in Agent Builder.

The agent you see in the test pane isn't created yet, so some features aren't available. For example, you can't use it to share prompts, provide feedback, or @mention other agents in the Microsoft 365 Copilot app. These features are available after you create the agent.

The test pane appears with suggested starter prompts, which when selected invoke the prompt and start the conversation. You can select **New Chat** to start a new conversation with the agent to view the starter prompts again.

## Next step

> [!div class="nextstepaction"]
> [Publish and manage agents](copilot-studio-lite-share-manage-agent.md)
