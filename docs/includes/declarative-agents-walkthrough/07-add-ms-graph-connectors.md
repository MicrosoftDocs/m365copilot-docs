---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

In this section, you add items ingested by a Microsoft Graph connector to the available knowledge for the agent.

1. Open the `appPackage/declarativeAgent.json` file and update the `capabilities` array to the following value, replacing `policieslocal` with a valid Microsoft Graph connector ID in your Microsoft 365 organization. For more information on finding Microsoft Graph connector IDs, see [Retrieving capabilities IDs for declarative agent manifest](../../declarative-agent-capabilities-ids.md#microsoft-graph-connectors).

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
            "name": "GraphConnectors",
            "connections": [
                {
                    "connection_id": "policieslocal"
                }
            ]
        }
    ]
    ```

    For more information, see [Microsoft Graph connectors object](../../declarative-agent-manifest-1.2.md#microsoft-graph-connectors-object).

    > [!NOTE]
    >
    > - Not specifying the `connections` array will cause all Microsoft Graph connectors content in your Microsoft 365 organization that is available to the logged in user to be available to the agent.

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have access to Microsoft Graph connectors content to generate its answers after you reload the page.

:::image type="content" source="../../assets/images/build-da/ttk/graph-connector-content.png" alt-text="A screenshot showing a response from the declarative agent that contains Microsoft Graph connector content":::
