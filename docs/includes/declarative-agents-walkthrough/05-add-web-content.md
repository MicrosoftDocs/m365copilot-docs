---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

In this section, you add the ability to search the web to the agent.

1. Open the `appPackage/declarativeAgent.json` file and add the `capabilities` array with the following content.

    ```json
    "capabilities": [
        {
            "name": "WebSearch"
        }
    ]
    ```

    For more information, see [Web search object](../../declarative-agent-manifest.md#web-search-object).

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have access to web content to generate its answers after you reload the page.

:::image type="content" source="../../assets/images/build-da/ttk/web-content.png" alt-text="A screenshot showing a response from the declarative agent that contains web content":::
