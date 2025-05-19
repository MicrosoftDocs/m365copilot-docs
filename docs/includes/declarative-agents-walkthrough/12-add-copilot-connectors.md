---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

In this section, you add items ingested by a Microsoft 365 Copilot connector (formerly Microsoft Graph connectors) to the available knowledge for the agent.

1. Open the `appPackage/declarativeAgent.json` file and update the `capabilities` array to the following value, replacing `policieslocal` with a valid Copilot connector ID in your Microsoft 365 organization. For more information about how to find Copilot connector IDs, see [Retrieving capabilities IDs for declarative agent manifest](../../declarative-agent-capabilities-ids.md#microsoft-365-copilot-connectors).

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
        "channels_by_url": [
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

    For more information, see [Copilot connectors object](../../declarative-agent-manifest-1.4.md#copilot-connectors-object).

    > [!NOTE]
    >
    > - Not specifying the `connections` array causes all Copilot connectors content in your Microsoft 365 organization that is available to the logged in user to be available to the agent.

1. Select **Provision** in the **Lifecycle** pane of the Agents Toolkit.

The declarative agent will have access to Copilot connectors content to generate its answers after you reload the page.

:::image type="content" source="../../assets/images/build-da/ttk/graph-connector-content.png" alt-text="A screenshot showing a response from the declarative agent that contains Copilot connector content":::
