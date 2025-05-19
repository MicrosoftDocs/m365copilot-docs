---
title: Retrieve grounding data
description: Use the Retrieval API to ground data from SharePoint and Copilot Connectors in your generative AI solutions.
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

Ground your generative AI solutions with Microsoft 365 data. Allows the retrieval of relevant text extracts from SharePoint and Copilot connectors content that the calling user has access to, while respecting the defined access controls within the tenant. Try issuing your [first query to the Microsoft 365 Copilot Retrieval API](https://aka.ms/try_copilot_retrieval_API_reference).

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

| Parameter                | Type              | Description                    |
|:-------------------------|:------------------|:-------------------------------|
| `queryString`            | String            | Natural language query string used to retrieve relevant text extracts. This parameter has a limit of 1,500 characters. Your `queryString` should be a single sentence, and you should avoid spelling errors in context-rich keywords. Required. |
| `dataSource`            | String            | String indicating if extracts should be retrieved from SharePoint or Copilot connectors. Acceptable values are "sharePoint" and "externalItem". Required. |
| `filterExpression`       | String            | [Keyword Query Language (KQL)](/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference) expression with queryable SharePoint and Copilot connectors properties and attributes to scope the retrieval before the query runs. You can use `AND`, `OR`, `NOT`, and inequality operators where applicable when constructing your `filterExpression`. Supported SharePoint properties for filtering are: `Author`, `FileExtension`, `Filename`, `FileType`, `InformationProtectionLabelId`, `LastModifiedTime`, `ModifiedBy`, `Path`, `SiteID`, and `Title`. When filtering on Copilot connectors content, you can use any property marked as [queryable in the Copilot connector schema](/graph/connecting-external-content-manage-schema#property-attributes). If you are not familiar with the schema of your desired Copilot connector, or you do not know which properties are marked queryable, reach out to the admin or developer who configured your desired Copilot connector. Microsoft will not resolve any issues with filtering on SharePoint and Copilot connectors properties not mentioned here. By default, no scoping is applied. Ensure that this parameter is correct before calling the API. Otherwise, the query executes as if there is no `filterExpression`. Follow these [best practices](https://learn.microsoft.com/microsoft-365-copilot/extensibility/api-reference/copilotroot-retrieval#best-practices) for your filtered queries. Optional. |
| `resourceMetadata`       | String collection | A list of metadata fields to be returned for each item in the response. Only retrievable metadata properties can be included in this list. By default, no metadata is returned. Optional. |
| `maximumNumberOfResults` | Int32             | The maximum number of documents that are returned in the response. By default, returns up to 25 results. Optional. |

## Response

If successful, this action returns a `200 OK` response code and a [retrievalResponse](resources/retrievalresponse.md) in the response body.

## Examples

### Example 1: Retrieve data from SharePoint

The following example shows a request to retrieve data from both SharePoint and Copilot connectors. By omitting the `filterExpression` parameter, the request indicates retrieval should span all supported data sources. The request asks for the `title` and `author` metadata to be returned for each item from which a text extract is retrieved. The response includes a maximum of 10 documents.

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

The following example shows the response. The first result is from SharePoint, and the second result is from Copilot connectors.

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

The following example shows a request to retrieve data from both SharePoint and Copilot connectors. By omitting the `filterExpression` parameter, the request indicates retrieval should span all supported data sources. The request asks for the `title` and `author` metadata to be returned for each item from which a text extract is retrieved. The response includes a maximum of 10 documents.

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

The following example shows the response. The first result is from SharePoint, and the second result is from Copilot connectors.

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

### Example 3: Retrieve data from a specific SharePoint site

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

### Example 4: Retrieve data from multiple SharePoint sites

The following example shows a request to retrieve data from multiple Sharepoint sites. The `filterExpression` parameter specifies the paths to the sites. The request asks for the `title` and `author` metadata to be returned for each item from which a text extract is retrieved. The response should include a maximum of four documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "dataSource": "sharePoint",
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

### Example 5: Filtering on Copilot connectors content

The following example shows a request to retrieve data while filtering on Copilot connectors properties. In this example, `Label_Title` is a queryable property in the ServiceNow Copilot connector schema. The request asks for `Label_Title` to be returned for each item from which a text extract is retrieved. The response should include a maximum of four documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "dataSource": "externalItem",
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
HTTP/1.1 200 OK
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
      "resourceType": "externalItem",
      "resourceMetadata": {
        "title": "Corporate VPN"
      }
    }
  ]
}
```

### Example 6: Filtering SharePoint results on the `Author` Property

The following example shows a request to retrieve data while filtering on the `Author` property. The request asks for `Author` to be returned for each item from which a text extract is retrieved. The response should include a maximum of four documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "What is the vacation policy?",
  "dataSource": "sharePoint",
  "filterExpression": "Author:\"John Doe\"",
  "resourceMetadata": [
    "Author"
  ],
  "maximumNumberOfResults": 4
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
      "webUrl": "https://contoso.sharepoint.com/sites/HR1/Vacation_Policy.docx",
      "extracts": [
        {
          "text": "Entry level hires start with 15 vacations day per year."
        },
        {
          "text": "Employees earn an additional 5 vacation days for every two years of service."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "Author": "John Doe;Jane Doe"
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

### Example 7: Filtering SharePoint results on a specific Date Range using the `LastModifiedTime` Property

The following example shows a request to retrieve data while filtering on a specific date range using the `LastModifiedTime` property. The request asks for `LastModifiedTime` to be returned for each item from which a text extract is retrieved. The response should include a maximum of four documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "What is the reimbursement policy for business expenses?",
  "dataSource": "sharePoint",
  "filterExpression": "LastModifiedTime >= 2024-07-22 AND LastModifiedTime <= 2025-01-08",
  "resourceMetadata": [
    "LastModifiedTime"
  ],
  "maximumNumberOfResults": 4
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
      "webUrl": "https://contoso.sharepoint.com/sites/HR1/Reimbursements_Policy.docx",
      "extracts": [
        {
          "text": "You will need to have all receipts related to business expenses ready to receive reimbursement."
        },
        {
          "text": "Receipts must be submitted within 90 days of the business expense to be eligible for reimbursement."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "LastModifiedTime": "2024-09-06T19:52:37Z"
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
      "webUrl": "https://contoso.sharepoint.com/sites/HR2/Corporate_Card.docx",
      "extracts": [
        {
          "text": "If you frequently have business expenses, it is recommended that you apply for a corporate card."
        },
        {
          "text": "You will not be reimbursed for any personal expenses made on your corporate card."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "LastModifiedTime": "2025-01-07T19:15:16Z"
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

### Example 8: Filtering SharePoint results using the `FileExtension` Property

The following example shows a request to retrieve data while filtering using the `FileExtension` property. In this example, the request is being filtered to docx, pdf, and pptx files. The request asks for `FileExtension` to be returned for each item from which a text extract is retrieved. The response should include a maximum of three documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "What is the sick time policy?",
  "dataSource": "sharePoint",
  "filterExpression": "FileExtension:\"docx\" OR FileExtension:\"pdf\" OR FileExtension:\"pptx\"",
  "resourceMetadata": [
    "FileExtension"
  ],
  "maximumNumberOfResults": 3
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
      "webUrl": "https://contoso.sharepoint.com/sites/HR1/Sick_Time.docx",
      "extracts": [
        {
          "text": "Employees receive 10 sick days per year."
        },
        {
          "text": "In addition to 10 sick days per year, employees also receive 5 wellness days per year."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "FileExtension": "docx"
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
      "webUrl": "https://contoso.sharepoint.com/sites/HR2/Benefits.pptx",
      "extracts": [
        {
          "text": "You are entitled to 10 sick days and 5 wellness days per year. Please reach out to your manager if you have any questions."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "FileExtension": "pptx"
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
      "webUrl": "https://contoso.sharepoint.com/sites/HR2/Wellness_Days.pdf",
      "extracts": [
        {
          "text": "Your mental health is just as important as your physical health. Take advantage of the 5 wellness days you receive per year."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "FileExtension": "pdf"
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

### Example 9: Filtering SharePoint results using the `Filename` Property

The following example shows a request to retrieve data while filtering using the `Filename` property. The request asks for `Filename` to be returned for each item from which a text extract is retrieved. The response should include a maximum of one document.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "What is Contoso's mission statement?",
  "dataSource": "sharePoint",
  "filterExpression": "Filename:\"Contoso Mission Statement.docx\"",
  "resourceMetadata": [
    "Filename"
  ],
  "maximumNumberOfResults": 1
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
      "webUrl": "https://contoso.sharepoint.com/sites/HR1/Contoso Mission Statement.docx",
      "extracts": [
        {
          "text": "Contoso's mission statement is to deliver delightful products and services to people around the world."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "Filename": "Contoso Mission Statement.docx"
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

### Example 10: Filtering SharePoint results using the `FileType` Property

The following example shows a request to retrieve data while filtering using the `FileType` property. The query is filtering to Word documents, web pages indexed using an enterprise websites Copilot connector, and Epics indexed using the Azure DevOps Copilot connector. The request asks for `FileType` to be returned for each item from which a text extract is retrieved. The response should include a maximum of three documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "What are the remaining work items to launch Contoso's marketing campaign?",
  "dataSource": "sharePoint",
  "filterExpression": "FileType:\"pdf\" OR FileType:\"pptx\" OR FileType:\"docx\"",
  "resourceMetadata": [
    "FileType"
  ],
  "maximumNumberOfResults": 3
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
            "webUrl": "https://contoso.sharepoint.com/sites/marketing/Marketing Standup.pptx",
            "extracts": [
                {
                    "text": "This is tracking the remaining work items for the new Contoso Marketing campaign. Updates on open work items are expected on Mondays."
                }
            ],
            "resourceType": "listItem",
            "resourceMetadata": {
                "FileType": "pptx"
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
            "webUrl": "https://contoso.sharepoint.com/sites/marketing/Remaining Work Items.docx",
            "extracts": [
                {
                    "text": "The advertising team needs to complete the social media campaign and book the billboard."
                }
            ],
            "resourceType": "listItem",
            "resourceMetadata": {
                "FileType": "docx"
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
            "webUrl": "https://contoso.sharepoint.com/sites/marketing/Product Launch Copy.pdf",
            "extracts": [
                {
                    "text": "The new product launches in 14 days! Let us know your reactions to the marketing campaign on social media."
                },
                {
                    "text": "Click the link below to pre-register to purchase the new product."
                }
            ],
            "resourceType": "listItem",
            "resourceMetadata": {
                "FileType": "pdf"
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

### Example 11: Determine the sensitivity of SharePoint results by filtering using the `InformationProtectionLabelId` Property

The following example shows a request to retrieve data while filtering using the `InformationProtectionLabelId` property. The `InformationProtectionLabelId` is equivalent to the `sensitivityLabelId` you receive in the `sensitivityLabel` object in the response payload. The request asks for `InformationProtectionLabelId` to be returned for each item from which a text extract is retrieved. The response should include a maximum of three documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "What is the sick time policy?",
  "dataSource": "sharePoint",
  "filterExpression": "InformationProtectionLabelId:\"f0ddcc93-d3c0-4993-b5cc-76b0a283e252\"",
  "resourceMetadata": [
    "InformationProtectionLabelId"
  ],
  "maximumNumberOfResults": 3
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
      "webUrl": "https://contoso.sharepoint.com/sites/HR1/Sick_Time.docx",
      "extracts": [
        {
          "text": "Employees receive 10 sick days per year."
        },
        {
          "text": "In addition to 10 sick days per year, employees also receive 5 wellness days per year."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "InformationProtectionLabelId": "f0ddcc93-d3c0-4993-b5cc-76b0a283e252"
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
      "webUrl": "https://contoso.sharepoint.com/sites/HR2/Benefits.pptx",
      "extracts": [
        {
          "text": "You are entitled to 10 sick days and 5 wellness days per year. Please reach out to your manager if you have any questions."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "InformationProtectionLabelId": "f0ddcc93-d3c0-4993-b5cc-76b0a283e252"
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
      "webUrl": "https://contoso.sharepoint.com/sites/HR2/Wellness_Days.pdf",
      "extracts": [
        {
          "text": "Your mental health is just as important as your physical health. Take advantage of the 5 wellness days you receive per year."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "InformationProtectionLabelId": "f0ddcc93-d3c0-4993-b5cc-76b0a283e252"
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

### Example 12: Filter SharePoint results using the `ModifiedBy` Property

The following example shows a request to retrieve data while filtering using the `ModifiedBy` property. The request asks for `ModifiedBy` to be returned for each item from which a text extract is retrieved. The response should include a maximum of two documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "What are the remaining work items to launch Contoso's marketing campaign?",
  "dataSource": "sharePoint",
  "filterExpression": "ModifiedBy:\"Jane Doe\"",
  "resourceMetadata": [
    "ModifiedBy"
  ],
  "maximumNumberOfResults": 2
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
            "webUrl": "https://contoso.sharepoint.com/sites/marketing/Marketing Standup.pptx",
            "extracts": [
                {
                    "text": "This is tracking the remaining work items for the new Contoso Marketing campaign. Updates on open work items are expected on Mondays."
                }
            ],
            "resourceType": "listItem",
            "resourceMetadata": {
                "ModifiedBy": "Jane Doe"
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
            "webUrl": "https://contoso.sharepoint.com/sites/marketing/Remaining Work Items.docx",
            "extracts": [
                {
                    "text": "The advertising team needs to complete the social media campaign and book the billboard."
                }
            ],
            "resourceType": "listItem",
            "resourceMetadata": {
                "ModifiedBy": "Jane Doe"
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

### Example 13: Filter SharePoint results using the `SiteID` Property

The following example shows a request to retrieve data while filtering using the `SiteID` property. The request asks for `SiteID` to be returned for each item from which a text extract is retrieved. The response should include a maximum of two documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How to setup corporate VPN?",
  "dataSource": "sharePoint",
  "filterExpression": "SiteID:\"e2cf7e40-d689-41de-99ee-a423811a253c\"",
  "resourceMetadata": [
    "SiteID"
  ],
  "maximumNumberOfResults": 2
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
        "SiteID": "e2cf7e40-d689-41de-99ee-a423811a253c"
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
        "SiteID": "e2cf7e40-d689-41de-99ee-a423811a253c"
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

### Example 14: Filter SharePoint results using the `Title` Property

The following example shows a request to retrieve data while filtering using the `Title` property. The request asks for `Title` to be returned for each item from which a text extract is retrieved. The response should include a maximum of four documents.

#### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/retrieval
Content-Type: application/json

{
  "queryString": "How do I refresh my refresh Windows 10 device?",
  "filterExpression": "Title:\"Windows 10 Device\"",
  "resourceMetadata": [
    "Title"
  ],
  "maximumNumberOfResults": 4
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
      "webUrl": "https://contoso.sharepoint.com/sites/HR/Refreshing_Windows10_Device.docx",
      "extracts": [
        {
          "text": "Click the Start icon and then the Settings icon. In the left pane, select Recovery."
        }
      ],
      "resourceType": "listItem",
      "resourceMetadata": {
        "Title": "Refreshing your Windows 10 Device"
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
      "webUrl": "https://contoso.service-now.com/sp?id=kb_article&sys_id=c886d14",
      "extracts": [
        {
          "text": "When you get your new Windows 10 device, make sure to install all required software."
        }
      ],
      "resourceType": "externalItem",
      "resourceMetadata": {
        "title": "Learn When to Reset or Refresh a Windows 10 Device"
      }
    }
  ]
}
```

## Related content

- [Overview of the Microsoft 365 Copilot Retrieval API](retrieval-api-overview.md)
- [Try with Graph explorer](https://aka.ms/try_copilot_retrieval_API_reference)
