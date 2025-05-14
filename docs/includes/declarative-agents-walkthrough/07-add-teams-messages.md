---
ms.localizationpriority: medium
---

<!-- markdownlint-disable MD041 -->

In this section, you provide the declarative agent with Teams channels, team, and meeting chat grounding information.

1. Open the `appPackage/declarativeAgent.json` file and update the `capabilities` array to the following value, replacing `https://teams.microsoft.com/l/team/...` with a Teams channel or team url from your organization.

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
      }
    ]
    ```

    For more information, see [Teams messages object](../../declarative-agent-manifest-1.4.md#teams-messages-object).

    > [!NOTE]
    > - The url in the url object must be well formed links to a Teams chat, team, or meeting chat.
    > - Not specifying the `urls` array causes all Teams channels, teams, meetings, 1:1 chat, and group chats in your Microsoft 365 organization that is available to the logged in user to be available to the agent.

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have access to Teams data to generate its answers after you reload the page.

:::image type="content" source="../../assets/images/build-da/ttk/teams-content.png" alt-text="A screenshot showing a response from the declarative agent that contains Teams content":::
