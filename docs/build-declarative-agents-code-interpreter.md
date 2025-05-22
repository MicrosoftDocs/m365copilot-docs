---
title: Add code interpreter to a declarative agent created with Microsoft 365 Agents Toolkit
description: Learn how to add code interpreter to a declarative agent as a step in building your first agent with Microsoft 365 Agents Toolkit.
ms.date: 05/19/2025
author: sebastienlevert
ms.author: slevert
ms.topic: tutorial
ms.localizationpriority: medium
---

# Step 10: Add code interpreter to the agent

In this section, you add the [code interpreter capability](code-interpreter.md) to the [agent](build-declarative-agents-create-agent.md). Code interpreter is an advanced tool designed to solve complex tasks via Python code.

1. Open the `appPackage/declarativeAgent.json` file and add the `CodeInterpreter` entry to the `capabilities` array.

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
      },
      {
        "name": "CodeInterpreter"
      }
    ]
    ```

    For more information, see [Code interpreter object](declarative-agent-manifest-1.4.md#code-interpreter-object).

1. Select **Provision** in the **Lifecycle** pane of the Agents Toolkit.

The declarative agent will have the code interpreter capability after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/code-interpreter-graph-content.png" alt-text="A screenshot showing a response from the declarative agent that contains a generated graph":::

:::image type="content" source="assets/images/build-da/ttk/code-interpreter-python-content.png" alt-text="A screenshot showing the Python code used to generate the requested graph":::

> [!div class="nextstepaction"]
> [Add Microsoft 365 Copilot connectors](build-declarative-agents-copilot-connectors.md)
