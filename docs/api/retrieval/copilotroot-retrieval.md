---
title: Retrieve grounding data
description: Use the Retrieval API to ground data from SharePoint and Copilot Connectors in your generative AI solutions.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 06/09/2025
ms.localizationpriority: medium
doc_type: conceptualPageType
---

<!-- markdownlint-disable MD024 -->

# Retrieve grounding data using the Microsoft 365 Copilot Retrieval API

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

Ground your generative AI solutions with Microsoft 365 data while optimizing for context recall. Allows the retrieval of relevant text extracts from SharePoint and Copilot connectors content that the calling user has access to, while respecting the defined access controls within the tenant. Try issuing your [first query to the Microsoft 365 Copilot Retrieval API](https://aka.ms/try_copilot_retrieval_API_reference). Learn how you can [batch up to 20 requests to the Retrieval API](/graph/json-batching?tabs=http).

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

| Name            | Description                                                                                                |
|:----------------|:-----------------------------------------------------------------------------------------------------------|
| `Authorization` |`Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json.` Required.                                                                              |

## Request body

In the request body, supply a JSON representation of the parameters.

The following table lists the parameters that are required when you call this action.

| Parameter                | Type              | Description                    |
|:-------------------------|:------------------|:-------------------------------|
| `queryString`            | String            | Natural language query string used to retrieve relevant text extracts. This parameter has a limit of 1,500 characters. Your `queryString` should be a single sentence, and you should avoid spelling errors in context-rich keywords. Required. |
| `dataSource`             | String            | String indicating if extracts should be retrieved from SharePoint or Copilot connectors. Acceptable values are "sharePoint" and "externalItem". Required. |
| `filterExpression`       | String            | [Keyword Query Language (KQL)](/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference) expression with queryable SharePoint and Copilot connectors properties and attributes to scope the retrieval before the query runs. You can use `AND`, `OR`, `NOT`, and inequality operators where applicable when constructing your `filterExpression`. Supported SharePoint properties for filtering are: `Author`, `FileExtension`, `Filename`, `FileType`, `InformationProtectionLabelId`, `LastModifiedTime`, `ModifiedBy`, `Path`, `SiteID`, and `Title`. When filtering on Copilot connectors content, you can use any property marked as [queryable in the Copilot connector schema](/graph/connecting-external-content-manage-schema#property-attributes). If you are not familiar with the schema of your desired Copilot connector, or you do not know which properties are marked queryable, reach out to the admin or developer who configured your desired Copilot connector. Microsoft will not resolve any issues with filtering on SharePoint and Copilot connectors properties not mentioned here. You can use multiple properties and operators when constructing your `filterExpression`. By default, no scoping is applied. Ensure that this parameter has correct KQL syntax before calling the API. Otherwise, the query executes as if there is no `filterExpression`. Follow these [best practices](overview.md#best-practices) for your filtered queries. Optional. |
| `resourceMetadata`       | String collection | A list of metadata fields to be returned for each item in the response. Only retrievable metadata properties can be included in this list. By default, no metadata is returned. Optional. |
| `maximumNumberOfResults` | Int32             | The maximum number of documents that are returned in the response. By default, returns up to 25 results. Optional. |

## Response

If successful, this action returns a `200 OK` response code and a [retrievalResponse](resources/retrievalresponse.md) in the response body.

## Examples

### Example 1: Retrieve data from SharePoint

The following example shows a request to retrieve data from SharePoint. The request asks for the `title` and `author` metadata to be returned for each item from which a text extract is retrieved. The response includes a maximum of 10 documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "dataSource": "sharePoint",
  "resourceMetadata": [
    "title",
    "author"
  ],
  "maximumNumberOfResults": "10"
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
        "title": "VPN Access",
        "author": "John Doe"
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
      "webUrl": "https://contoso.sharepoint.com/sites/HR/Corporate_VPN.docx",
      "extracts": [
        {
          "text": "Once you have selected Corporate VPN under the VPN options, log in with your corporate credentials."
        },
        {
          "text": "Please contact your IT admin if you are continuing to struggle with accessing the VPN."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "title": "Corporate VPN",
        "author": "Jane Doe"
      },
        "sensitivityLabel": {
        "sensitivityLabelId": "f71f1f74-bf1f-4e6b-b266-c777ea76e2s8",
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

### Example 2: Retrieve data from Copilot connectors

The following example shows a request to retrieve data from Copilot connectors. The request asks for the `title` and `author` metadata to be returned for each item from which a text extract is retrieved. The response includes a maximum of 10 documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "dataSource": "externalItem",
  "resourceMetadata": [
    "title",
    "author"
  ],
  "maximumNumberOfResults": "10"
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
      "webUrl": "https://contoso.service-now.com/sp?id=kb_article&sys_id=2gge30c",
      "extracts": [
        {
          "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option."
        },
        {
          "text": "You will need to sign in with 2FA to access the corporate VPN."
        }
      ],
      "resourceType": "externalItem",
      "resourceMetadata": {
        "title": "VPN Access",
        "author": "John Doe"
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

### Example 3: Batch requests to the Retrieval API

The following example shows how to [batch requests to the Retrieval API](/graph/json-batching?tabs=http). The Retrieval API supports up to 20 requests per batch. `id` in the request payload must be a String that uniquely identifies each request in the batch.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/$batch
Accept: application/json
Content-Type: application/json

{
  "requests": [
    {
      "id": "1",
      "method": "POST",
      "url": "/copilot/retrieval",
      "body": {
        "queryString": "How to setup corporate VPN?",
        "dataSource": "sharePoint"
      },
      "headers": {
        "Content-Type": "application/json"
      }
    },
    {
      "id": "2",
      "method": "POST",
      "url": "/copilot/retrieval",
      "body": {
        "queryString": "How to setup corporate VPN?",
        "dataSource": "externalItem"
      },
      "headers": {
        "Content-Type": "application/json"
      }
    }
  ]
}
```

#### Response

The following example shows the response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "responses": [
    {
      "id": "1",
      "status": 200,
      "headers": {
        "Content-Type": "application/json; charset=utf-8"
      },
      "body": {
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
            "resourceMetadata": {},
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
            "webUrl": "https://contoso.sharepoint.com/sites/HR/Corporate_VPN.docx",
            "extracts": [
              {
                "text": "Once you have selected Corporate VPN under the VPN options, log in with your corporate credentials."
              },
              {
                "text": "Please contact your IT admin if you are continuing to struggle with accessing the VPN."
              }
            ],
            "resourceType": "listItem",
            "resourceMetadata": {},
            "sensitivityLabel": {
              "sensitivityLabelId": "f71f1f74-bf1f-4e6b-b266-c777ea76e2s8",
              "displayName": "Confidential\\Any User (No Protection)",
              "toolTip": "Data is classified as Confidential but is NOT PROTECTED to allow access by approved NDA business partners. If a higher level of protection is needed, please use the Sensitivity button on the tool bar to change the protection level.",
              "priority": 4,
              "color": "#FF8C00",
              "isEncrypted": false
            }
          }
        ]
      }
    },
    {
      "id": "2",
      "status": 200,
      "headers": {
        "Content-Type": "application/json; charset=utf-8"
      },
      "body": {
        "retrievalHits": [
          {
            "webUrl": "https://contoso.service-now.com/sp?id=kb_article&sys_id=2gge30c",
            "extracts": [
              {
                "text": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option."
              },
              {
                "text": "You will need to sign in with 2FA to access the corporate VPN."
              }
            ],
            "resourceType": "externalItem",
            "resourceMetadata": {}
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
            "resourceMetadata": {}
          }
        ]
      }
    }
  ]
}
```

### Example 4: Retrieve data from a specific SharePoint site

The following example shows a request to retrieve data from a specific Sharepoint site. The `filterExpression` parameter specifies the path to the site. The request asks for the `title` and `author` metadata to be returned for each item from which a text extract is retrieved. The response should include a maximum of four documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "dataSource": "sharePoint",
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
      "resourceType": "listItem",
      "resourceMetadata": {
        "title": "VPN Access",
        "author": "John Doe"
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
          "text": "There are multiple VPN options available. Make sure to select the option that grants you access to your desired resources."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "title": "VPN Instructions",
        "author": "Elisa Mueller"
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

### Example 5: Retrieve data from multiple SharePoint sites

The following example shows a request to retrieve data from multiple Sharepoint sites. The `filterExpression` parameter specifies the paths to the sites. The request asks for the `title` and `author` metadata to be returned for each item from which a text extract is retrieved. The response should include a maximum of four documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "dataSource": "sharePoint",
  "filterExpression": "path:\"https://contoso.sharepoint.com/sites/HR1/\" OR path:\"https://contoso.sharepoint.com/sites/HR2\"",
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
      "resourceType": "listItem",
      "resourceMetadata": {
        "title": "VPN Access",
        "author": "John Doe"
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
        "author": "Elisa Mueller"
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
          "text": "There are multiple VPN options available. Make sure to select the option that grants you access to your desired resources."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "title": "VPN Instructions",
        "author": "Elisa Mueller"
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

### Example 6: Using filter expressions

The following are examples of KQL expressions that can be used in the `filterExpression` property for specific scenarios.

#### Filtering on Copilot connector properties

In this example, `Label_Title` is a queryable property in the ServiceNow Copilot connector schema. The query is filtered on items that contain `Corporate VPN` in the `Label_Title` property.

```json
"filterExpression": "Label_Title:\"Corporate VPN\""
```

#### Filtering SharePoint results on the `Author` property

In this example, the query is filtered on items with Megan Bowen as the author.

```json
"filterExpression": "Author:\"Megan Bowen\""
```

#### Filtering SharePoint results on a specific Date Range using the `LastModifiedTime` property

In this example, the query is filtered on items modified between July 22, 2024 and January 8, 2025.

```json
"filterExpression": "LastModifiedTime >= 2024-07-22 AND LastModifiedTime <= 2025-01-08"
```

#### Filtering SharePoint results using the `FileExtension` property

In this example, the query is filtered on files with the .docx, .pdf, or .pptx file extension.

```json
"filterExpression": "FileExtension:\"docx\" OR FileExtension:\"pdf\" OR FileExtension:\"pptx\""
```

#### Filtering SharePoint results using the `Filename` property

In this example, the query is filtered on files named `Contoso Mission Statement.docx`.

```json
"filterExpression": "Filename:\"Contoso Mission Statement.docx\""
```

#### Filtering SharePoint results using the `FileType` property

In this example, the query is filtered on PDF files, PowerPoint presentations, and Word documents.

```json
"filterExpression": "FileType:\"pdf\" OR FileType:\"pptx\" OR FileType:\"docx\""
```

#### Determine the sensitivity of SharePoint results by filtering using the `InformationProtectionLabelId` property

In this example, the query is filtered on items with a specific information protection label.

```json
"filterExpression": "InformationProtectionLabelId:\"f0ddcc93-d3c0-4993-b5cc-76b0a283e252\""
```

#### Filter SharePoint results using the `ModifiedBy` property

In this example, the query is filtered on items modified by Adele Vance.

```json
"filterExpression": "ModifiedBy:\"Adele Vance\""
```

#### Filter SharePoint results using the `SiteID` property

In this example, the query is filtered on items from a specific SharePoint site.

```json
"filterExpression": "SiteID:\"e2cf7e40-d689-41de-99ee-a423811a253c\""
```

#### Filter SharePoint results using the `Title` property

In this example, the query is filtered on items with `Windows 10 Device` in the title.

```json
"filterExpression": "Title:\"Windows 10 Device\""
```

## Related content

- [Overview of the Microsoft 365 Copilot Retrieval API](overview.md)
- [Try with Graph explorer](https://aka.ms/try_copilot_retrieval_API_reference)
