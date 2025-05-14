---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

In this section, you add the [email capability](../../knowledge-sources.md#email) to the declarative agent. The email capability allows you to scope your agent to use email from the user's mailbox or a shared mailbox as a knowledge source.

1. Open the `appPackage/declarativeAgent.json` file and add the `Email` entry to the `capabilities` array.

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
      }
    ]
    ```

    For more information, see [Email object](../../declarative-agent-manifest-1.4.md#email-object).

    > [!NOTE]
    >
    > - This example accesses the user of the agent's mailbox. To access a shared mailbox instead, add the optional `shared_mailbox` property set to the email address of the shared mailbox.
    > - The `folders` array limits the mailbox access to specific folders. To access the entire mailbox, omit the `folders` array.

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have access to email knowledge after you reload the page.

:::image type="content" source="../../assets/images/build-da/ttk/email-content.png" alt-text="A screenshot showing a response from the declarative agent that contains email knowledge":::
