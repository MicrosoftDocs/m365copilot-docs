---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

In this section, you add the [code interpreter capability](../../add-agent-capabilities.md#code-interpreter) to the declarative agent. Code interpreter is an advanced tool designed to solve complex tasks via Python code.

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
        "name": "GraphicArt"
      },
      {
        "name": "CodeInterpreter"
      }
    ]
    ```

    For more information, see [Code interpreter object](../../declarative-agent-manifest-1.3.md#code-interpreter-object).

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have the code interpreter capability after you reload the page.

:::image type="content" source="../../assets/images/build-da/ttk/code-interpreter-graph-content.png" alt-text="A screenshot showing a response from the declarative agent that contains a generated graph":::

:::image type="content" source="../../assets/images/build-da/ttk/code-interpreter-python-content.png" alt-text="A screenshot showing the Python code used to generate the requested graph":::
