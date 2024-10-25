---
title: Retrieving capabilities IDs for declarative agent manifest
description: Learn how to retrieve capabilities IDs for your declarative agent manifest
author: rimisra2
ms.author: rimisra
ms.topic: conceptual
---

<!-- markdownlint-disable MD024 MD051 -->

# Retrieving capabilities IDs for declarative agent manifest

This article describes methods for developers to retrieve the necessary IDs to include Graph connectors and SharePoint/OneDrive files within the `capabilities` section of their [declarative agent manifest](declarative-agent-manifest.md). Developers can use [Microsoft Graph Explorer](https://developer.microsoft.com/graph/graph-explorer) or [Microsoft Graph PowerShell](/powershell/microsoftgraph/overview).

## Microsoft Graph connectors

This section describes how developers can retrieve the value to set in the `connection_id` property of the [Connection object](declarative-agent-manifest.md#connection-object) in the [Microsoft Graph connectors object](declarative-agent-manifest.md#microsoft-graph-connectors-object) in the manifest.

> [!IMPORTANT]
> Querying for Microsoft Graph connectors requires an admin account.

### [Graph Explorer](#tab/explorer)

1. Browse to [Microsoft Graph Explorer](https://developer.microsoft.com/graph/graph-explorer) and sign in with your admin account.

    :::image type="content" source="assets/images/declarative-agents/graph-explorer-sign-in.png" alt-text="A screenshot of the Graph Explorer sign in button":::

1. Select your user avatar in the upper right corner and select **Consent to permissions**.

    :::image type="content" source="assets/images/declarative-agents/graph-explorer-consent-to-permissions.png" alt-text="A screenshot of the user profile flyout in Graph Explorer":::

1. Search for `ExternalConnection.Read.All` and select **Consent** for that permission. Follow the prompts to grant consent.

    :::image type="content" source="assets/images/declarative-agents/graph-explorer-external-connection-permission.png" alt-text="A screenshot of Graph Explorer's permission consent dialog with ExternalConnection.Read.All":::

1. Enter `https://graph.microsoft.com/v1.0/external/connections?$select=id,name` in the request field and select **Run query**.

    :::image type="content" source="assets/images/declarative-agents/graph-explorer-get-connections.png" alt-text="A screenshot of Graph Explorer's request field with the connections query":::

1. Locate the connector you want and copy its `id` property. For example, to use the **GitHub Repos** connector in the following response, copy the `githubrepos` value.

    ```json
    {
      "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#connections(id,name)",
      "value": [
        {
          "id": "applianceparts",
          "name": "Appliance Parts Inventory"
        },
        {
          "id": "githubrepos",
          "name": "GitHub Repos"
        }
      ]
    }
    ```

### [PowerShell](#tab/powershell)

1. Copy the following code into a new file named **GetGraphConnectorIds.ps1**.

    :::code language="powershell" source="assets/scripts/GetGraphConnectorIds.ps1":::

1. Open [PowerShell 7](/powershell/scripting/overview) in the directory where **GetGraphConnectorIds.ps1** is located and run the script with the following command.

    ```powershell
    .\GetGraphConnectorIds.ps1
    ```

1. Open your browser and browse to `https://microsoft.com/devicelogin`. Enter the code that is provided by the prompt and complete the sign-in and consent flow.

    ```powershell
    To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code BQGGRREGN to authenticate.
    ```

1. Locate the connector you want and copy its `Id` property. For example, to use the **GitHub Repos** connector in the following response, copy the `githubrepos` value.

    ```powershell
    Name                      Id
    ----                      --
    Appliance Parts Inventory applianceparts
    GitHub Repos              githubrepos
    ```

---

## Retrieving SharePoint IDs

This section describes how developers can retrieve the value to set in the following properties within the `items_by_sharepoint_ids` property of the [`OneDriveAndSharePoint` object](declarative-agent-manifest.md#onedrive-and-sharepoint-object):

- `site_id`
- `list_id`
- `web_id`
- `unique_id`

### [Graph Explorer](#tab/explorer)

1. Browse to [Microsoft Graph Explorer](https://developer.microsoft.com/graph/graph-explorer) and sign in with your admin account.

1. Select your user avatar in the upper right corner and select **Consent to permissions**.

1. Search for `Sites.Read.All` and select **Consent** for that permission. Follow the prompts to grant consent. Repeat this process for `Files.Read.All`.

    :::image type="content" source="assets/images/declarative-agents/graph-explorer-sites-permission.png" alt-text="A screenshot of Graph Explorer's permission consent dialog with Sites.Read.All":::

1. Change the method dropdown to **POST** and enter `https://graph.microsoft.com/v1.0/search/query` in the request field.

    :::image type="content" source="assets/images/declarative-agents/graph-explorer-post-query.png" alt-text="A screenshot of Graph Explorer's request field with a search query":::

1. Add the following in the **Request body**, replacing `https://yoursharepointsite.com/sites/YourSite/Shared%20Documents/YourFile.docx` with the URL to the file or folder you want to get IDs for.

    ```json
    {
      "requests": [
        {
          "entityTypes": [
            "driveItem"
          ],
          "query": {
            "queryString": "Path:\"https://yoursharepointsite.com/sites/YourSite/Shared%20Documents/YourFile.docx\""
          },
          "fields": [
            "fileName",
            "listId",
            "webId",
            "siteId",
            "uniqueId"
          ]
        }
      ]
   }
    ```

1. Select **Run query**.

1. Locate the file you want and copy its `listId`, `webId`, `siteId`, and `uniqueId` properties.

    :::code language="json" source="assets/snippets/sharepoint-id-query-response.json" highlight="19-22":::

### [PowerShell](#tab/powershell)

1. Copy the following code into a new file named **GetSharePointIds.ps1**.

    :::code language="powershell" source="assets/scripts/GetSharePointIds.ps1":::

1. Open [PowerShell 7](/powershell/scripting/overview) in the directory where **GetSharePointIds.ps1** is located and run the script with the following command, replacing `https://yoursharepointsite.com/sites/YourSite/Shared%20Documents/YourFile.docx` with the URL to the file or folder you want to get IDs for.

    ```powershell
    .\GetSharePointIds.ps1 -FilePath "https://yoursharepointsite.com/sites/YourSite/Shared%20Documents/YourFile.docx"
    ```

1. Open your browser and browse to `https://microsoft.com/devicelogin`. Enter the code that is provided by the prompt and complete the sign-in and consent flow.

    ```powershell
    To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code BQGGRREGN to authenticate.
    ```

1. Locate the file you want and copy its values.

    ```powershell
    Key      Value
    ---      -----
    fileName YourFile.docx
    listId   12fde922-4fab-4238-8227-521829cd1099
    webId    a25fab47-f3b9-4fa3-8ed9-1acb83c12a4f
    siteId   5863dfa5-b39d-4cd1-92a6-5cf539e04971
    uniqueId {301b3af9-e49d-4296-893d-0f924db1f48e}
    ```

---
