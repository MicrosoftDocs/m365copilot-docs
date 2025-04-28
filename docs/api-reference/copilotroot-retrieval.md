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

# Retrieve grounding data using the Microsoft 365 Copilot Retrieval API

[!INCLUDE [beta-disclaimer](includes/beta-disclaimer.md)]

Ground your generative AI solutions with Microsoft 365 data. Allows the retrieval of relevant text extracts from SharePoint Online and Microsoft Graph connectors content that the calling user has access to, while respecting the defined access controls within the tenant.

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
| filterExpression       | String            | [KQL](/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference) expression with queryable SharePoint and Microsoft Graph connectors properties and attributes to scope the search before the query runs. Supported SharePoint properties for filtering are: AssignedTo, Author, Created, CreatedBy, FileExtension, Filename, FileType, InformationProtectionLabelId, LastModifiedTime, ModifiedBy, Path, SiteID, and Title. Supported Graph connectors properties for filtering are those that have been marked queryable by an admin or developer. By default, no scoping is applied. Ensure that this parameter is correct before calling the API. Otherwise, the query will execute as if there is no filterExpression. Optional. |
| resourceMetadata       | String collection | A list of metadata fields to be returned for each item in the response. By default, no metadata is returned. Optional. |
| maximumNumberOfResults | Int32             | The maximum number of documents that are returned in the response. By default, returns up to 10 results. Optional. |

## Response

If successful, this action returns a `200 OK` response code and a [retrievalResponse](resources/retrievalresponse.md) in the response body.

## Supported Properties in filterExpression
This list details the properties that are supported for use in the `filterExpression`. Any issues with filtering on properties that are not included in this list will not be resolved by Microsoft.

### SharePoint Online
These are the supported properties in SharePoint Online. Your SharePoint Online content may not have values for all of these properties.
- AssingedTo
- Author
- Created
- CreatedBy
- FileExtension
- Filename
- FileType
- InformationProtectionLabelId
- LastModifiedTime
- ModifiedBy
- Path
- SiteID
- Title

### Graph connectors
When filtering on Graph connectors content, you can use any property marked as [queryable in the Graph connector schema](https://learn.microsoft.com/graph/connecting-external-content-manage-schema#property-attributes). If you are not familiar with the schema of your desired Graph connector and/or you do not know which properties have been marked queryable, please reach out to the admin and/or developer who configured your desired Graph connector.

## Examples

### Example 1: Retrieve data from SharePoint Online and Microsoft Graph connectors

The following example shows a request to retrieve data from both SharePoint Online and Microsoft Graph connectors. By omitting the `filterExpression` parameter, the requests indicates retrieval should span all supported data sources. The request asks for the title and author metadata to be returned for each item from which a text extract is retrieved. The response includes a maximum of 10 documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
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
  "retrievalHits": [
    {
      "webUrl": "https://contoso.sharepoint.com/sites/HR/VPNAccess.docx",
      "extracts": [
        {
          "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option."
        },
        {
          "text": "You will need to sign in with 2FA to access the corporate VPN."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "title": "VPN Access",
        "author": "John Doe"
      },
      "sensitivityLabel": {
        "sensitivityLabelId": "f71f1f74-bf1f-4e6b-b266-c777ea76e2s8",
        "displayName": "Confidential\\Any User (No Protection)",
        "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
        "priority": 4,
        "color": "#FF8C00",
        "isEncrypted": false
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
  ]
}
```

### Example 2: Retrieve data from a specific SharePoint site

The following example shows a request to retrieve data from a specific Sharepoint site. The `filterExpression` parameter specifies the path to the site. The request asks for the title and author metadata to be returned for each item from which a text extract is retrieved. The response should include a maximum of four documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "filterExpression": "path:\"https://contoso.sharepoint.com/sites/HR1/\"",
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
  "retrievalHits": [
    {
      "webUrl": "https://contoso.sharepoint.com/sites/HR1/VPNAccess.docx",
      "extracts": [
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
      "sensitivityLabel": {
        "sensitivityLabelId": "f71f1f74-bf1f-4e6b-b266-c777ea76e2s8",
        "displayName": "Confidential\\Any User (No Protection)",
        "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
        "priority": 4,
        "color": "#FF8C00",
        "isEncrypted": false
      }
    },
    {
    "webUrl": "https://contoso.sharepoint.com/sites/HR1/VPNInstructions.docx",
    "extracts": [
        {
          "text": "Have your VPN username and password ready prior to starting the configuration."
        },
        {
          "text": "There are multiple VPN options availalbe. Make sure to select the option that grants you access to your desired resources."
        }
   
      ],
    "resourceType": "listItem",
    "resourceMetadata": {
        "title": "VPN Instructions",
        "author": "Elisa Mueller"
      },
      "sensitivityLabel": {
        "sensitivityLabelId": "f0ddcc93-d3c0-4993-b5cc-76b0a283e252",
        "displayName": "Confidential\\Any User (No Protection)",
        "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
        "priority": 4,
        "color": "#FF8C00",
        "isEncrypted": false
      }
    }
  ]
}
```

### Example 3: Retrieve data from multiple SharePoint sites

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
  "retrievalHits": [
    {
      "webUrl": "https://contoso.sharepoint.com/sites/HR1/VPNAccess.docx",
      "extracts": [
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
      "sensitivityLabel": {
        "sensitivityLabelId": "f71f1f74-bf1f-4e6b-b266-c777ea76e2s8",
        "displayName": "Confidential\\Any User (No Protection)",
        "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
        "priority": 4,
        "color": "#FF8C00",
        "isEncrypted": false
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
      "sensitivityLabel": {
        "sensitivityLabelId": "f0ddcc93-d3c0-4993-b5cc-76b0a283e252",
        "displayName": "Confidential\\Any User (No Protection)",
        "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
        "priority": 4,
        "color": "#FF8C00",
        "isEncrypted": false
      }
    },
    {
    "webUrl": "https://contoso.sharepoint.com/sites/HR1/VPNInstructions.docx",
    "extracts": [
        {
          "text": "Have your VPN username and password ready prior to starting the configuration."
        },
        {
          "text": "There are multiple VPN options availalbe. Make sure to select the option that grants you access to your desired resources."
        }
   
      ],
    "resourceType": "listItem",
    "resourceMetadata": {
        "title": "VPN Instructions",
        "author": "Elisa Mueller"
      },
      "sensitivityLabel": {
        "sensitivityLabelId": "f0ddcc93-d3c0-4993-b5cc-76b0a283e252",
        "displayName": "Confidential\\Any User (No Protection)",
        "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
        "priority": 4,
        "color": "#FF8C00",
        "isEncrypted": false
      }
    }
  ]
}
```

### Example 4: Filtering on Microsoft Graph connectors content

The following example shows a request to retrieve data while filtering on Microsoft Graph connectors properties. In this example, "Label_Title" is a queryable property in the ServiceNow Graph connector schema. The request asks for `Label_Title` to be returned for each item from which a text extract is retrieved. The response should includes a maximum of four documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "filterExpression": "Label_Title:\"Corporate VPN\"",
  "resourceMetadata": [
    "Label_Title"
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
  "retrievalHits": [
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
      "resourceType": "externalItem",
      "resourceMetadata": {
        "title": "Corporate VPN"
      }
    }
  ]
}
```

## Related content

- [Overview of the Microsoft 365 Copilot Retrieval API](retrieval-api-overview.md)
