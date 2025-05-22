---
title: Add people knowledge to a declarative agent created with Microsoft 365 Agents Toolkit
description: Learn how to add people knowledge to a declarative agent as a step in building your first agent with Microsoft 365 Agents Toolkit.
ms.date: 05/19/2025
author: sebastienlevert
ms.author: slevert
ms.topic: tutorial
ms.localizationpriority: medium
---

# Step 7: Add people knowledge to the agent

In this section, you add the [people knowledge source](knowledge-sources.md#people) to the [agent](build-declarative-agents-create-agent.md). The people knowledge source allows you to scope your agent to answer questions about individuals in an organization.

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

    For more information, see [People object](declarative-agent-manifest-1.4.md#people-object).

1. Select **Provision** in the **Lifecycle** pane of the Teams Toolkit.

The declarative agent will have access to people knowledge after you reload the page.

:::image type="content" source="assets/images/build-da/ttk/people-content.png" alt-text="A screenshot showing a response from the declarative agent that contains people knowledge":::

## Next step

> [!div class="nextstepaction"]
> [Add email knowledge](build-declarative-agents-email.md)
