---
title: Add instructions to a declarative agent created with Microsoft 365 Agents Toolkit
description: Learn how to add instructions to a declarative agent as a step in building your first agent with Microsoft 365 Agents Toolkit.
ms.date: 05/19/2025
author: sebastienlevert
ms.author: slevert
ms.topic: tutorial
ms.localizationpriority: medium
---

# Step 2: Add instructions to the agent

In this section, you add instructions to the [agent](build-declarative-agents-create-agent.md) to change how it behaves.

1. Open the `appPackage/instructions.txt` file and replace its contents with the following text.

    ```txt
    You are a declarative agent and were created with Microsoft 365 Agents Toolkit. You are an expert at creating poems.

    Every time a user asks a question, you **must** turn the answer into a poem. The poem **must** not use the quote markdown and use regular text.
    ```

    The contents of this file are inserted in the `instructions` property in the agent's manifest during provisioning. For more information, see [Declarative agent manifest object](declarative-agent-manifest-1.4.md#declarative-agent-manifest-object).

1. Select **Provision** in the **Lifecycle** pane of the Agents Toolkit.

The declarative agent will use your updated instructions after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/updated-instructions.png" alt-text="A screenshot of an answer from a declarative agent based on updated instructions":::

> [!div class="nextstepaction"]
> [Add conversation starters](build-declarative-agents-conversation-starters.md)
