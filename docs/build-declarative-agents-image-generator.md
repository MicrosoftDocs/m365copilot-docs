---
title: Add image generator to a declarative agent created with Microsoft 365 Agents Toolkit
description: Learn how to add image generator to a declarative agent as a step in building your first agent with Microsoft 365 Agents Toolkit.
ms.date: 05/19/2025
author: sebastienlevert
ms.author: slevert
ms.topic: tutorial
ms.localizationpriority: medium
---

# Step 9: Add image generator to the agent

In this section, you add the [image generator capability](image-generator.md) to the declarative [agent](build-declarative-agents-create-agent.md).

1. Open the `appPackage/declarativeAgent.json` file and add the `GraphicArt` entry to the `capabilities` array.

    ```json
    "capabilities": [
      {
        "name": "WebSearch"
      },
      {
        "name": "OneDriveAndSharePoint",
        "items_by_url": [
          {
            "url": "https://contoso.sharepoint.com/sites/ProductSupport"
          }
        ]
      },
      {
        "name": "TeamsMessages",
        "urls": [
          {
            "url": "https://teams.microsoft.com/l/team/..."
          }
        ]
      },
      {
        "name": "People"
      },
      {
        "name": "Email",
        "folders": [
          {
            "folder_id": "inbox"
          }
        ]
      },
      {
        "name": "GraphicArt"
      }
    ]
    ```

    For more information, see [Graphic art object](declarative-agent-manifest-1.4.md#graphic-art-object).

1. Select **Provision** in the **Lifecycle** pane of the Agents Toolkit.

The declarative agent will have the ability to generate images after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/graphic-art-content.png" alt-text="A screenshot showing a response from the declarative agent that contains generated graphic art":::

> [!div class="nextstepaction"]
> [Add code interpreter](build-declarative-agents-code-interpreter.md)
