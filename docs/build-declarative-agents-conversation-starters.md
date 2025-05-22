---
title: Add conversation starters to a declarative agent created with Microsoft 365 Agents Toolkit
description: Learn how to add conversation starters to a declarative agent as a step in building your first agent with Microsoft 365 Agents Toolkit.
ms.date: 05/19/2025
author: sebastienlevert
ms.author: slevert
ms.topic: tutorial
ms.localizationpriority: medium
---

# Step 3: Add conversation starters to the agent

In this section, you add conversation starters to your [agent](build-declarative-agents-create-agent.md). Conversation starters are hints that are displayed to the user to demonstrate how they can get started using the declarative agent.

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

    For more information, see [Conversation starters object](declarative-agent-manifest-1.4.md#conversation-starters-object).

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The updated conversation starters will be available in your declarative agent after you refresh the page.

:::image type="content" source="assets/images/build-da/ttk/conversation-starters.png" alt-text="A screenshot showing the conversation starters from the declarative agent in Microsoft 365 Copilot":::

> [!div class="nextstepaction"]
> [Add web search capability](build-declarative-agents-web-search.md)
