---
title: Continue synchronous conversations.
description: Continue synchronous conversations with the Microsoft 365 Copilot Chat API.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: reference
ms.date: 09/26/2025
ms.localizationpriority: medium
doc_type: conceptualPageType
---

<!-- markdownlint-disable MD024 -->

# Continue synchronous conversations with Microsoft 365 Copilot using the Microsoft 365 Copilot Chat API

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

The Microsoft 365 Copilot Chat API allows you to create and continue multi-turn conversations with Microsoft 365 Copilot, while respecting the defined access controls within the tenant. Use the Chat API to continue synchronous conversations with Microsoft 365 Copilot.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions    | Higher privileged permissions |
|:---------------------------------------|:---------------------------------------------|:------------------------------|
| Delegated (work or school account)     | Sites.Read.All, Mail.Read, People.Read.All, OnlineMeetingTranscript.Read.All, Chat.Read, ChannelMessage.Read.All, ExternalItem.Read.All\*               | Not supported.         |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Not supported.               | Not supported.                |

\* You need all of these Microsoft Graph permissions to successfully call the Microsoft 365 Copilot Chat API.

## HTTP request

To continue synchronous conversations with the Chat API, you will make the following HTTP request.

```http
POST https://graph.microsoft.com/beta/copilot/conversations/{conversationId}/chat
```

## Request headers

| Name            | Description                                                                                                |
|:----------------|:-----------------------------------------------------------------------------------------------------------|
| `Authorization` |`Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json.` Required.                                                                              |

## Request body

In the request body, supply a JSON representation of the parameters.

The following table lists the optional and required parameters that you can use when you call this action.

| Parameter                 | Type                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:--------------------------|:----------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `message`             | [copilotConversationRequestMessageParameter](todo.md)                                                          | The chat message being sent into the Copilot conversation. Required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `additionalContext`              | [copilotContextMessage](todo.md) collection                                                          | Extra context for the Copilot conversation. This should be used for additional grounding. Optional.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `locationHint` | [copilotConversationLocation](todo.md) | User location information. Required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `contextualResources`        | [copilotContextualResources](todo.md)                                                          | This can be used to provide OneDrive and SharePoint files that should be used as context, and/or toggling web search grounding Optional. |

## Response

If successful, this action returns a `200 OK` response code and a [copilotConversation](todo.md) in the response body.

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

### Example 6: Retrieve data from Copilot connectors using specific connection IDs

The following example shows a request that restricts Copilot connectors retrieval to specific connection IDs. The request asks for the `title` and `author` metadata to be returned for each item from which a text extract is retrieved. The response includes a maximum of 10 documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "dataSource": "externalItem",
  "dataSourceConfiguration": {
    "externalItem": {
      "connections": [
        {
          "connectionId": "ContosoITServiceNowKB"
        },
        {
          "connectionId": "ContosoHRServiceNowKB"
        }
      ]
    }
  },
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

### Example 7: Use filter expressions

The following are examples of KQL expressions that can be used in the `filterExpression` property for specific scenarios.

#### Filter on Copilot connector properties

In this example, `Label_Title` is a queryable property in the ServiceNow Copilot connector schema. The query is filtered on items that contain `Corporate VPN` in the `Label_Title` property.

```json
"filterExpression": "Label_Title:\"Corporate VPN\""
```

#### Filter SharePoint results on the `Author` property

In this example, the query is filtered on items with Megan Bowen as the author.

```json
"filterExpression": "Author:\"Megan Bowen\""
```

#### Filter SharePoint results on a specific Date Range using the `LastModifiedTime` property

In this example, the query is filtered on items modified between July 22, 2024 and January 8, 2025.

```json
"filterExpression": "LastModifiedTime >= 2024-07-22 AND LastModifiedTime <= 2025-01-08"
```

#### Filter SharePoint results using the `FileExtension` property

In this example, the query is filtered on files with the .docx, .pdf, or .pptx file extension.

```json
"filterExpression": "FileExtension:\"docx\" OR FileExtension:\"pdf\" OR FileExtension:\"pptx\""
```

#### Filter SharePoint results using the `Filename` property

In this example, the query is filtered on files named `Contoso Mission Statement.docx`.

```json
"filterExpression": "Filename:\"Contoso Mission Statement.docx\""
```

#### Filter SharePoint results using the `FileType` property

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
- [Batch requests](/graph/json-batching)
