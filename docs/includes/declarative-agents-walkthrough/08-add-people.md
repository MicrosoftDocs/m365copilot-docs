---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

In this section, you add the [people capability](../../knowledge-sources.md#people) to the declarative agent. The people capability allows you to scope your agent to answer questions about individuals in an organization.

1. Open the `appPackage/declarativeAgent.json` file and add the `People` entry to the `capabilities` array.

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
      }
    ]
    ```

    For more information, see [People object](../../declarative-agent-manifest-1.4.md#people-object).

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have access to people knowledge after you reload the page.

:::image type="content" source="../../assets/images/build-da/ttk/people-content.png" alt-text="A screenshot showing a response from the declarative agent that contains people knowledge":::
