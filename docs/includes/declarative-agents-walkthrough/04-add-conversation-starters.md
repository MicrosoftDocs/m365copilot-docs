---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

In this section, you add conversation starters to your agent. Conversation starters are hints that are displayed to the user to demonstrate how they can get started using the declarative agent.

1. Open the `appPackage/declarativeAgent.json` file and add the `conversation_starters` array with the following content:

    ```json
    "conversation_starters": [
      {
        "title": "Getting Started",
        "text": "How can I get started with Teams Toolkit?"
      },
      {
        "title": "Getting Help",
        "text": "How can I get help with Teams Toolkit?"
      }
    ]
    ```

    For more information, see [Conversation starters object](../../declarative-agent-manifest-1.3.md#conversation-starters-object).

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The updated conversation starters will be available in your declarative agent after you refresh the page.

:::image type="content" source="../../assets/images/build-da/ttk/conversation-starters.png" alt-text="A screenshot showing the conversation starters from the declarative agent in Microsoft 365 Copilot":::
