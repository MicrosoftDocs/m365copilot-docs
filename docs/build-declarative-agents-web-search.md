---
title: Add web search to a declarative agent created with Microsoft 365 Agents Toolkit
description: Learn how to add web search to a declarative agent as a step in building your first agent with Microsoft 365 Agents Toolkit.
ms.date: 05/19/2025
author: sebastienlevert
ms.author: slevert
ms.topic: tutorial
ms.localizationpriority: medium
---

# Step 4: Add web search capability to the agent

In this section, you add the ability to search the web to the [agent](build-declarative-agents-create-agent.md).

1. Open the `appPackage/declarativeAgent.json` file and add the `capabilities` array with the following content.

    ```json
    "capabilities": [
      {
        "name": "WebSearch"
      }
    ]
    ```

    For more information, see [Web search object](declarative-agent-manifest-1.4.md#web-search-object).

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have access to web content to generate its answers after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/web-content.png" alt-text="A screenshot showing a response from the declarative agent that contains web content":::

> [!div class="nextstepaction"]
> [Add OneDrive and SharePoint content](build-declarative-agents-sharepoint.md)
