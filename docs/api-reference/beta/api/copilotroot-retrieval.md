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

Grounds data for generative AI solutions. Allows the retrieval of relevant extracts from SharePoint and Graph Connectors content that the calling user has access to, while respecting the defined access controls within the tenant

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
|queryString|String|The query string used to retrieve relevant chunks|
|filterExpression|String|KQL expression with queryable SharePoint attributes to scope the search before query execution. Optional.|
|resourceMetadata|String collection|A list of metadata fields to be returned in the response. Optional.|
|maximumNumberOfResults|Int32|The maximum number of documents that are returned in the response. By default returns up to 10 results. Optional.|



## Response

If successful, this action returns a `200 OK` response code and a [retrievalResponse](../resources/retrievalresponse.md) in the response body.

## Example 1: Retrieve data from files from SharePoint and Graph Connectors

The following example shows a request to retrieve data from files located in a specific SharePoint path or within the Graph Connectors. The filterExpression parameter, in the request, specifies the SharePoint path, and to retrieve data from Graph Connectors, the resourceType used is 'externalItem'. The request asks for the title and author metadata to be returned for each item from which a text extract is retrieved. The response should include a maximum of 10 documents

### Request

The following example shows the request.
<!-- {
  "blockType": "request",
  "name": "copilotrootthis.retrieval"
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
    "webUrl": "https://sharepoint.contoso.com/article1",
    "extracts":[
      {
        "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option.",
      },
      {
        "text": "Speak with your manager if you are having trouble accessing the VPN.",
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
    },           
  },
  {
    "webUrl": "https://servicenow.contoso.com/CorporateVPN",
    "extracts": [
      {
        "text": "Once you have selected Corporate VPN under the VPN options, log in with your corporate credentials",
      }
    ],
    "resourceType": "externalItem",
    "resourceMetadata": {
      "title": "Corporate VPN"
    } 
  }
}
```

