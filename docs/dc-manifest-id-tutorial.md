---
title: Retrieving Capabilities IDs for Declarative Copilot Manifest
description: Learn how to retrieve Capabilities IDs for your Declarative Copilot Manifest
author: rimisra2
ms.author: rimisra
ms.topic: reference
---

# Retrieving Capabilities IDs for Declarative Copilot Manifest

This article describes an example step-by-step tutorial on how developers can retrieve the necessary IDs to include Graph Connectors and SharePoint/OneDrive files within the `capabilities` section of their [Declarative Copilot manifest.](declarative-copilot-manifest.md)

> **Note:** ALL sections will require developers to work with admins to ensure they have the below permissions approved within [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)
  - ExternalConnection.Read.All (Graph Connectors)
  - Sites.Read.All (SharePoint/OneDrive)
  - Files.Read.All (SharePoint/OneDrive)
  - Sites.FullControl.All (SharePoint/OneDrive)

## Graph Connectors

This section goes over how developers can retrieve the `connection_id` property within the `connection` object of the `graph_connectors` object in the manifest.

### Retrieving `connection_id` for Graph Connectors

1. **Access Graph Explorer:**
   - Go to [Graph Explorer | Try Microsoft Graph APIs - Microsoft Graph](https://developer.microsoft.com/en-us/graph/graph-explorer).
   - Sign in with your Microsoft account.

2. **Set Permissions:**
   - Ensure you have the necessary permissions. You need to be a global admin or have an admin approve the required permissions.
   - Specifically, you need `ExternalConnection.Read.All` permission.
   - To set permissions, click on the "Modify permissions" tab in Graph Explorer and select the required permissions.

3. **Run the Query:**
  - Use the following query to get the list of connections:

    ```http
      GET https://graph.microsoft.com/v1.0/external/connections
    ```
  - Click on the "Run Query" button in Graph Explorer.

4. **Example Response:**

  - The response will look something like this:
   ```json
   {
     "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#connections",
     "value": [
       {
         "id": "foodstore",
         "name": "Foodsie-local",
         "description": "Contains information about food products, such as their name, ingredients, nutrition facts, and allergens.",
         "state": "ready",
         "configuration": {
           "authorizedApps": ["cb8bb3b0-1285-49ed-b2e5-f319be546ad9"]
        }
      }
    ]
  }
  ```
  - The `id` field in each object is the `connection_id` you need. In this example `connection_id` is foodstore for Graph Connectors.

## Retrieving SharePoint IDs

This section covers the following tuple of IDs within the `items_by_sharepoint_ids` property of the `OneDriveAndSharePoint` object:
  - `site_id`
  - `list_id`
  - `web_id`
  - `unique_id`

### Retrieving SharePoint IDs for OneDrive and SharePoint object

1. **Access Graph Explorer**:  
   Go to [Graph Explorer | Try Microsoft Graph APIs - Microsoft Graph](https://developer.microsoft.com/en-us/graph/graph-explorer).

2. **Sign in with your Microsoft account**.

3. **Set Permissions**:  
   Ensure you have the necessary permissions. You need to be a global admin or have an admin approve the required permissions. Specifically, you need the following permissions:
   - `Sites.Read.All`
   - `Files.Read.All`
   - `Sites.FullControl.All`
   
   To set permissions, click on the "Modify permissions" tab in Graph Explorer and select the required permissions.

4. **Retrieve Site, Web, List, and Unique IDs**:
  - Use the following query to search for a specific file/document or Folder.

  > **Note** In the example below, we use a file/document for our `Path` called `YourFile.docx`. 

   ```http
   POST https://graph.microsoft.com/v1.0/search/query
   {
       "requests": [
           {
               "entityTypes": ["driveItem"],
               "query": {
                   "queryString": "Path:\"https://yoursharepointsite.com/sites/YourSite/Shared%20Documents/YourFile.docx\""
               },
               "fields": ["listId", "webId", "siteId", "uniqueId"]
           }
       ]
   }
   ```
  > **Note** If you want to query for a folder, replace the `Path` for below
      ```http
          "query": {
                  "queryString": "Path:\"https://yoursharepointsite.com/sites/yourSites/Shared%20Documents/selected%20folder\""
                },
      ```
  - Click on the "Run Query" button in Graph Explorer.

5. **Example Response**
  
  - The following example is sample response for a file/document path. You can find the `list_id`, `site_id`, `web_id`, `unique_id` under `hitsContainers` > `hits` > `resource` > `listItem` > `fields`

    ```json
    {
      "value": [
          {
              "searchTerms": [],
              "hitsContainers": [
                  {
                      "hits": [
                          {
                              "hitId": "01AJOINAHZHINTBHPESZBISPIPSJG3D5EO",
                              "rank": 1,
                              "summary": "Reorder policy Our reorder policy for suppliers is straightforward and designed to maintain cost-efficiency and inventory control. We kindly request that no order exceeds a total",
                              "resource": {
                                  "@odata.type": "#microsoft.graph.driveItem",
                                  "listItem": {
                                      "@odata.type": "#microsoft.graph.listItem",
                                      "id": "301b3af9-e49d-4296-893d-0f924db1f48e",
                                      "fields": {
                                          "listId": "12fde922-4fab-4238-8227-521829cd1099",
                                          "webId": "a25fab47-f3b9-4fa3-8ed9-1acb83c12a4f",
                                          "siteId": "5863dfa5-b39d-4cd1-92a6-5cf539e04971",
                                          "uniqueId": "301b3af9-e49d-4296-893d-0f924db1f48e"
                                      }
                                  }
                              }
                          }
                      ],
                      "total": 1,
                      "moreResultsAvailable": false
                  }
              ]
          }
      ]
    }
  ```
<!-->
  ### Retriving SharePoint IDs for Folders
  
  This section covers how to retrieve `list_id`, `web_id`, `site_id`, and `unique_id` for a folder.

  1. Please follow steps 1-3 from [Retrieving SharePoint IDs for OneDrive and SharePoint object](#retrieving-sharepoint-ids-for-onedrive-and-sharepoint-object)
  
  2. **Retrieve Site, Web, List, and Unique IDs**:
  - Use the following query to search for a specific document
    ```http
      POST https://graph.microsoft.com/v1.0/search/query
      {
        "requests": [
          {
            "entityTypes": [
              "driveItem"
            ],
            "query": {
              "queryString": "Path:\"https://yoursharepointsite.com/sites/yourSites/Shared%20Documents/selected%20folder\""
            },
            "fields": [
              "listId",
              "webId",
              "siteId"
            ]
          }
        ]
      }
    ```
  - Click on the "Run Query" button in Graph Explorer.
    
--> 

