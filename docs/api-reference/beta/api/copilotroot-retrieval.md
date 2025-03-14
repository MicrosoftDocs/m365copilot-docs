---
title: "copilot: retrieval"
description: Using the retrieval API, generative AI solutions can ground data from SharePoint and Graph Connectors.
author: lramosvea
ms.author: lramosvea
ms.topic: conceptual
ms.date: 03/11/2025
ms.localizationpriority: medium
doc_type: conceptualPageType
---

# copilotRoot: retrieval

Namespace: microsoft.graph 

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Grounds data for generative AI solutions. Allows the retrieval of relevant extracts from SharePoint and Graph Connectors content that the calling user has access to, while respecting the defined access controls within the tenant.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](https://learn.microsoft.com/graph/permissions-overview?tabs=http#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](https://learn.microsoft.com/graph/permissions-overview?tabs=http#permission-types). To learn more about these permissions, see the [permissions reference](https://learn.microsoft.com/graph/permissions-reference).

<!-- {
  "blockType": "permissions",
  "name": "copilotroot-retrieval-permissions"
}
-->
[!INCLUDE [permissions-table](../includes/permissions/copilotroot-retrieval-permissions.md)]

## HTTP request

<!-- {
  "blockType": "ignored"
}
-->
``` http
POST /copilot/retrieval
```

## Request headers

|Name|Description|
|:---|:---|
|Authorization|Bearer {token}. Required. Learn more about [authentication and authorization](https://learn.microsoft.com/graph/auth/auth-concepts).|
|Content-Type|application/json. Required.|

## Request body

In the request body, supply a JSON representation of the parameters.

The following table lists the parameters that are required when you call this action.

|Parameter|Type|Description|
|:---|:---|:---|
|queryString|String|Natural language query string used to retrieve relevant text extracts.|
|filterExpression|String|[KQL](https://learn.microsoft.com/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference) expression with queryable [SharePoint](https://learn.microsoft.com/sharepoint/crawled-and-managed-properties-overview) and [Microsoft Graph Connectors](https://learn.microsoft.com/graph/connecting-external-content-manage-schema) properties and attributes to scope the search before query execution. Optional.|
|resourceMetadata|String collection|A list of metadata fields to be returned for each item in the response. Optional.|
|maximumNumberOfResults|Int32|The maximum number of documents that are returned in the response. By default returns up to 10 results. Optional.|



## Response

If successful, this action returns a `200 OK` response code and a [retrievalResponse](../resources/retrievalresponse.md) in the response body.

## Example 1: Retrieve data from SharePoint and Graph Connectors

The following example shows a request to retrieve data from files located in a specific SharePoint path or within the Graph Connectors. The `filterExpression` parameter specifies the SharePoint path, and to retrieve data from Graph Connectors, the `resourceType` used is `externalItem`. The request asks for the title and author metadata to be returned for each item from which a text extract is retrieved. The response includes a maximum of 10 documents.

### Request

The following example shows the request.
<!-- {
  "blockType": "request",
  "name": "retrieval_SP_connectors"
}
-->
``` http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "filterExpression": "(resourceType=externalItem OR path:\"https://contoso.sharepoint.com/sites/HR\")",
  "resourceMetadata": [
    "title",
    "author"
  ],
  "maximumNumberOfResults": "10"
}
```


### Response

The following example shows the response. The first result is from SharePoint, and the second result is from Graph Connectors.
>**Note:** The response object shown here might be shortened for readability.
<!-- {
  "blockType": "response",
  "truncated": true,
  "@odata.type": "microsoft.substrateSearch.retrievalResponse"
}
-->
``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "retrievalHits": 
  {
    "webUrl": "https://contoso.sharepoint.com/sites/HR/VPNAccess.docx",
    "extracts":[
      {
        "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option."
      }
    ],
    "resourceType": "listItem",
    "resourceMetadata": {  
      "title": "VPN Access",
      "author": "John Doe"
    },
    "sensitivityLabel":{
      "sensitivityLabelId": "f71f1f74-bf1f-4e6b-b266-c777ea76e2s8",
      "displayName": "Confidential\\Any User (No Protection)",
      "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
      "priority":4,
      "color":"#FF8C00",
      "isEncrypted":false
    }           
  },
  {
    "webUrl": "https://contoso.service-now.com/sp?id=kb_article&sys_id=b775c03",
    "extracts": [
      {
        "text": "Once you have selected Corporate VPN under the VPN options, log in with your corporate credentials."
      }
    ],
    "resourceType": "externalItem",
    "resourceMetadata": {
      "title": "Corporate VPN"
    } 
  }
}
```
## Example 2: Retrieve data from multiple SharePoint sites

The following example shows a request to retrieve data from multiple Sharepoint sites. The `filterExpression` parameter specifies the paths to the sites. The request asks for the title and author metadata to be returned for each item from which a text extract is retrieved. The response should includes a maximum of 4 documents.

### Request

The following example shows the request.
<!-- {
  "blockType": "request",
  "name": "retrieval_multiple_SP"
}
-->
``` http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "filterExpression": "path:\"https://contoso.sharepoint.com/sites/HR1/\" OR path:\"https://contoso.sharepoint-df.com/sites/HR2\"",
  "resourceMetadata": [
    "title",
    "author"
  ],
  "maximumNumberOfResults": "4"
}
```


### Response

The following example shows the response.
>**Note:** The response object shown here might be shortened for readability.
<!-- {
  "blockType": "response",
  "truncated": true,
  "@odata.type": "microsoft.substrateSearch.retrievalResponse"
}
-->
``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "retrievalHits": 
  {
    "webUrl": "https://contoso.sharepoint.com/sites/HR1/VPNAccess.docx",
    "extracts":[
      {
        "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option."
      }
    ],
    "resourceType": "listItem",
    "resourceMetadata": {  
      "title": "VPN Access",
      "author": "John Doe"
    },
    "sensitivityLabel":{
      "sensitivityLabelId": "f71f1f74-bf1f-4e6b-b266-c777ea76e2s8",
      "displayName": "Confidential\\Any User (No Protection)",
      "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
      "priority":4,
      "color":"#FF8C00",
      "isEncrypted":false
    }           
  },
  {
    "webUrl": "https://contoso.sharepoint.com/sites/HR2/VPNConfig.docx",
    "extracts": [
      {
        "text": "Have your VPN username and password ready prior to starting the configuration."
      }
    ],
    "resourceType": "listItem",
    "resourceMetadata": {
      "title": "VPN Config",
      "author": "Elisa Mueller"
    },
    "sensitivityLabel":{
      "sensitivityLabelId": "f0ddcc93-d3c0-4993-b5cc-76b0a283e252",
      "displayName": "Confidential\\Any User (No Protection)",
      "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
      "priority":4,
      "color":"#FF8C00",
      "isEncrypted":false
    }    
  }
}
```
## Example 3: Retrieve data from a specific Graph Connector

The following example shows a request to retrieve data from a specific Graph Connector. The `filterExpression` parameter uses the Graph Connector connection ID as the content source. The request asks for the title metadata to be returned for each item from which a text extract is retrieved. The response should includes a maximum of 4 documents.

### Request

The following example shows the request.
<!-- {
  "blockType": "request",
  "name": "retrieval_connector"
}
-->
``` http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "filterExpression": "(contentSource=snowKB1)",
  "resourceMetadata": [
    "title"
  ],
  "maximumNumberOfResults": "4"
}
```


### Response

The following example shows the response.
>**Note:** The response object shown here might be shortened for readability.
<!-- {
  "blockType": "response",
  "truncated": true,
  "@odata.type": "microsoft.substrateSearch.retrievalResponse"
}
-->
``` http
TTP/1.1 200 OK
Content-Type: application/json

{
  "retrievalHits": 
  {
    "webUrl": "https://contoso.service-now.com/sp?id=kb_article&sys_id=b775c03",
    "extracts":[
      {
        "text": "Once you have selected Corporate VPN under the VPN options, log in with your corporate credentials."
      }
    ],
    "resourceType": "externalItem",
    "resourceMetadata": {  
      "title": "Corporate VPN"
    }         
  },
  {
    "webUrl": "https://contoso.service-now.com/sp?id=kb_article&sys_id=dd681gd",
    "extracts": [
      {
        "text": "Ensure your VPN credentials are handy before starting the configuration process."
      }
    ],
    "resourceType": "externalItem",
    "resourceMetadata": {
      "title": "VPN Instructions"
    }  
  }
}
```
## Example 4: Retrieve data from SharePoint Word files updated within a specific date range

The following example shows a request to retrieve data from Word documents located in a specific SharePoint path, which have been updated within a specific time period. The `filterExpression` parameter specifies the SharePoint path, file type and time range. The request asks for the title, author, and last modified time metadata to be returned for each item from which a text extract is retrieved. The response should includes a maximum of 2 documents.

### Request

The following example shows the request.
<!-- {
  "blockType": "request",
  "name": "retrieval_docs_SP"
}
-->
``` http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "filterExpression": "filetype:docx AND (LastModifiedTime>=2024-01-01 AND LastModifiedTime<=2024-12-31) AND path:\"https://contoso.sharepoint.com/sites/HR\"",
  "resourceMetadata": [
    "title",
    "author",
    "LastModifiedTime"
  ],
  "maximumNumberOfResults": "2"
}
```


### Response

The following example shows the response.
>**Note:** The response object shown here might be shortened for readability.
<!-- {
  "blockType": "response",
  "truncated": true,
  "@odata.type": "microsoft.substrateSearch.retrievalResponse"
}
-->
``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "retrievalHits": 
  {
    "webUrl": "https://contoso.sharepoint.com/sites/HR/VPNAccess.docx",
    "extracts":[
      {
        "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option."
      }
    ],
    "resourceType": "listItem",
    "resourceMetadata": {  
      "title": "VPN Access",
      "author": "John Doe",
      "LastModifiedTime": "2024-06-14T20:57:00Z"
    },
    "sensitivityLabel":{
      "sensitivityLabelId": "f71f1f74-bf1f-4e6b-b266-c777ea76e2s8",
      "displayName": "Confidential\\Any User (No Protection)",
      "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
      "priority":4,
      "color":"#FF8C00",
      "isEncrypted":false
    }          
  },
  {
    "webUrl": "https://contoso.sharepoint.com/sites/HR/VPNConfig.docx",
    "extracts": [
      {
        "text": "Have your VPN username and password ready prior to starting the configuration."
      }
    ],
    "resourceType": "externalItem",
    "resourceMetadata": {
      "title": "Corporate VPN",
      "author": "Elisa Mueller",
      "LastModifiedTime": "2024-05-17T23:39:00Z"
    },
    "sensitivityLabel":{
      "sensitivityLabelId": "079cd1b0-4b31-4f12-9c4a-12e6296c95a1",
      "displayName": "Confidential\\Any User (No Protection)",
      "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
      "priority":4,
      "color":"#FF8C00",
      "isEncrypted":false
    }  
  }
}
```


### Related content

- [Overview of the Microsoft 365 Copilot Retrieval API](../resources/retrieval-api-overview.md)
