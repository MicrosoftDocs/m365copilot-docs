---
title: Add instructions and conversation starters to a declarative agent created with Microsoft 365 Agents Toolkit
description: Learn how to customize the behavior of a declarative agent by adding instructions and conversation starters with Microsoft 365 Agents Toolkit.
#customer intent: As a developer, I want to add instructions and conversation starters to my declarative agent in Agents Toolkit so that it behaves as intended and shows users how to start.
ms.date: 09/30/2026
author: sebastienlevert
ms.author: slevert
ms.topic: tutorial
ms.localizationpriority: medium
---

# Add instructions and conversation starters to a declarative agent created with Microsoft 365 Agents Toolkit

You can customize the behavior of your declarative agent in the agent's manifest.

- [Instructions](#add-instructions-to-the-agent) ensure that the agent understands its role and tasks and how to interact with users.
- [Conversation starters](#add-conversation-starters-to-the-agent) are hints that are displayed to the user to demonstrate how they can get started using the declarative agent.

> [!IMPORTANT]
> This guide assumes you have completed the [Create declarative agents by using Microsoft 365 Agents Toolkit and JSON](build-declarative-agents.md) tutorial.

## Add instructions to the agent

Start by adding instructions to the agent to phrase its responses as poems.

1. Open the `appPackage/instructions.txt` file and replace its contents with the following text.

    ```txt
    You are an expert at creating poems.

    Every time a user asks a question, you **must** turn the answer into a poem. The poem **must** not use the quote markdown and use regular text.
    ```

    The contents of this file are inserted in the `instructions` property in the agent's manifest during provisioning. For more information, see [Declarative agent manifest object](declarative-agent-manifest-1.8.md#declarative-agent-manifest-object).

1. Select **Provision** in the **Lifecycle** pane of Microsoft 365 Agents Toolkit.

The declarative agent uses your updated instructions after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/updated-instructions.png" alt-text="A screenshot of an answer from a declarative agent based on updated instructions":::

For more information about writing instructions, see [Write effective instructions for declarative agents](declarative-agent-instructions.md).

## Add conversation starters to the agent

Next, add some conversation starters to the agent.

1. Open the `appPackage/declarativeAgent.json` file and add the `conversation_starters` array with the following content:

    ```json
    "conversation_starters": [
      {
        "title": "Getting Started",
        "text": "How can I get started with Agents Toolkit?"
      },
      {
        "title": "Getting Help",
        "text": "How can I get help with Agents Toolkit?"
      }
    ]
    ```

    For more information, see [Conversation starters object](declarative-agent-manifest-1.8.md#conversation-starters-object).

1. Select **Provision** in the **Lifecycle** pane of Agents Toolkit.

The updated conversation starters are available in your declarative agent after you refresh the page.

:::image type="content" source="assets/images/build-da/ttk/conversation-starters.png" alt-text="A screenshot showing the conversation starters from the declarative agent in Microsoft 365 Copilot":::

## Next step

> [!div class="nextstepaction"]
> [Add knowledge sources to a declarative agent created with Microsoft 365 Agents Toolkit](build-declarative-agents-add-knowledge.md)
