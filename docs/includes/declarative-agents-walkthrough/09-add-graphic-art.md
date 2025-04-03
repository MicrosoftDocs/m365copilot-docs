---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

In this section, you add the [image generator capability](../../add-agent-capabilities.md#image-generator) to the declarative agent.

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
        "name": "GraphicArt"
      }
    ]
    ```

    For more information, see [Graphic art object](../../declarative-agent-manifest-1.3.md#graphic-art-object).

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have the ability to generate images after you reload the page.

:::image type="content" source="../../assets/images/build-da/ttk/graphic-art-content.png" alt-text="A screenshot showing a response from the declarative agent that contains generated graphic art":::
