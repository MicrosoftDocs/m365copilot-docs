---
title: Retrieve grounding data
description: Using the Retrieval API, generative AI solutions can ground data from SharePoint and Graph Connectors.
author: lramosvea
ms.author: lramosvea
ms.topic: conceptual
ms.date: 03/11/2025
ms.localizationpriority: medium
doc_type: conceptualPageType
---

<!-- markdownlint-disable MD024 -->

# Retrieve grounding data

[!INCLUDE [beta-disclaimer](includes/beta-disclaimer.md)]

Ground data for generative AI solutions. Allows the retrieval of relevant extracts from SharePoint and Microsoft Graph connectors content that the calling user has access to, while respecting the defined access controls within the tenant.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | Files.Read.All               | Sites.Read.All, ExternalItem.Read.All                |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Not supported.               | Not supported.                |

## HTTP request

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
```

## Request headers

| Name          | Description                                                                                               |
|:--------------|:----------------------------------------------------------------------------------------------------------|
| Authorization | Bearer {token}. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| Content-Type  | application/json. Required.                                                                               |

## Request body

In the request body, supply a JSON representation of the parameters.

The following table lists the parameters that are required when you call this action.

| Parameter              | Type              | Description                    |
|:-----------------------|:------------------|:-------------------------------|
| queryString            | String            | Natural language query string used to retrieve relevant text extracts. Required. |
| dataSources            | String collection | A list of Microsoft 365 data sources that should be included in the retrieval. Acceptable values are "SharePoint" and "External". By default, all supported data sources are included. Optional. |
| filterExpression       | String            | [KQL](/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference) expression supporting filtering exclusively on path for SharePoint content, allowing to scope the search before the query runs. By default, no scoping is applied. Ensure that this parameter is correct before calling the API. Otherwise, the query will execute as if there is no filterExpression. Optional. |
| resourceMetadata       | String collection | A list of metadata fields to be returned for each item in the response. By default, no metadata is returned. Optional. |
| maximumNumberOfResults | Int32             | The maximum number of documents that are returned in the response. By default, returns up to 10 results. Optional. |

## Response

If successful, this action returns a `200 OK` response code and a [retrievalResponse](resources/retrievalresponse.md) in the response body.

## Examples

### Example 1: Retrieve data from SharePoint and Microsoft Graph connectors

The following example shows a request to retrieve data from both SharePoint and Microsoft Graph connectors. The `dataSources` parameter indicates that results should be retrieved from both SharePoint and Microsoft Graph connectors. The `filterExpression` parameter specifies the SharePoint path. The request asks for the title and author metadata to be returned for each item from which a text extract is retrieved. The response includes a maximum of 10 documents.

#### Request

The following example shows the request.

```msgraph-interactive
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "dataSources": ["SharePoint", "External"],
  "filterExpression": "path:\"https://contoso.sharepoint.com/sites/HR\"",
  "resourceMetadata": [
    "title",
    "author"
  ],
  "maximumNumberOfResults": "10"
}
```

#### Response

The following example shows the response. The first result is from SharePoint, and the second result is from Microsoft Graph connectors.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "retrievalHits":
  {
    "webUrl": "https://contoso.sharepoint.com/sites/HR/VPNAccess.docx",
    "extracts":[
      {
        "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option."
      },
      {
        "text": "You will need to sign in with 2FA to access the corporate VPN."
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
      },
      {
        "text": "Please contact your IT admin if you are continuing to struggle with acessing the VPN."
      }
    ],
    "resourceType": "externalItem",
    "resourceMetadata": {
      "title": "Corporate VPN"
    }
  }
}
```

### Example 2: Retrieve data from multiple SharePoint sites

The following example shows a request to retrieve data from multiple Sharepoint sites. The `filterExpression` parameter specifies the paths to the sites. The request asks for the title and author metadata to be returned for each item from which a text extract is retrieved. The response should include a maximum of four documents.

#### Request

The following example shows the request.

```http
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

#### Response

The following example shows the response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "retrievalHits":
  {
    "webUrl": "https://contoso.sharepoint.com/sites/HR1/VPNAccess.docx",
    "extracts":[
      {
        "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option."
      },
      {
        "text": "You will need to sign in with 2FA to access the corporate VPN."
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
        "text": "Have your VPN username and password ready prior to start the configuration."
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

### Example 3: Retrieve data from only SharePoint

The following example shows a request to retrieve data from only SharePoint. The `dataSources` field should indicate that only `SharePoint` should be included in the retrieval. The request asks for the title and author metadata to be returned for each item from which a text extract is retrieved. The response should includes a maximum of four documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "dataSources": ["SharePoint"],
  "resourceMetadata": [
    "title",
    "author"
  ],
  "maximumNumberOfResults": "4"
}
```

#### Response

The following example shows the response.

```http
TTP/1.1 200 OK
Content-Type: application/json

{
  "retrievalHits":
  {
    "webUrl": "https://contoso.sharepoint.com/sites/HR1/VPNAccess.docx",
    "extracts":[
      {
        "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option."
      },
      {
        "text": "You will need to sign in with 2FA to access the corporate VPN."
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
        "text": "Have your VPN username and password ready prior to start the configuration."
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

### Example 4: Retrieve data from only Microsoft Graph connectors

The following example shows a request to retrieve data from only Microsoft Graph connectors. The `dataSources` field should indicate that only `External` should be included in the retrieval. The request asks for the title metadata to be returned for each item from which a text extract is retrieved. The response should includes a maximum of four documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "dataSources": ["External"],
  "resourceMetadata": [
    "title"
  ],
  "maximumNumberOfResults": "4"
}
```

#### Response

The following example shows the response.

```http
TTP/1.1 200 OK
Content-Type: application/json

{
  "retrievalHits":
  {
    "webUrl": "https://contoso.service-now.com/sp?id=kb_article&sys_id=b775c03",
    "extracts":[
      {
        "text": "Once you have selected Corporate VPN under the VPN options, log in with your corporate credentials."
      },
      {
        "text": "Please contact your IT admin if you are continuing to struggle with acessing the VPN."
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

## Related content

- [Overview of the Microsoft 365 Copilot Retrieval API](retrieval-api-overview.md)
