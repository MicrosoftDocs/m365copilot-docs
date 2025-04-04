---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

In this section, you add the contents of a SharePoint site to the available knowledge for the agent.

1. Open the `appPackage/declarativeAgent.json` file and update the `capabilities` array to the following value, replacing `https://contoso.sharepoint.com/sites/ProductSupport` with a SharePoint site URL in your Microsoft 365 organization.

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
      }
    ]
    ```

    For more information, see [OneDrive and SharePoint object](../../declarative-agent-manifest-1.3.md#onedrive-and-sharepoint-object).

    > [!NOTE]
    >
    > - URLs should be full path to SharePoint items (site, document library, folder, or file). You can use the "Copy direct link" option in SharePoint to get the full path or files and folders. Right-click on the file or folder and select **Details**. Navigate to **Path** and select the copy icon.
    > - Not specifying the `items_by_url` array (or the alternative `items_by_sharepoint_ids` array) causes all OneDrive and SharePoint content in your Microsoft 365 organization that is available to the logged in user to be available to the agent.

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have access to OneDrive and SharePoint content to generate its answers after you reload the page.

:::image type="content" source="../../assets/images/build-da/ttk/sharepoint-onedrive-content.png" alt-text="A screenshot showing a response from the declarative agent that contains SharePoint and OneDrive content":::
