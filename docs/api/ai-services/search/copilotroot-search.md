---
title: Perform search
description: Use the Search API to perform hybrid search (semantic and lexical) across OneDrive content with natural language understanding and contextual results.
author: apiarya
ms.author: swapnilsapar
ms.topic: reference
ms.date: 10/16/2025
ms.localizationpriority: medium
doc_type: conceptualPageType
---

<!-- markdownlint-disable MD024 -->

# Perform search using the Microsoft 365 Copilot Search API

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Perform hybrid (semantic and lexical) search across OneDrive for work or school content by using natural language queries with contextual understanding. Discover relevant documents and files that you have access to, while respecting the defined access controls within the organization. Try issuing your [first query to the Microsoft 365 Copilot Search API](https://aka.ms/try_copilot_search_API_example_basic). Learn how you can [batch up to 20 requests to the Search API](/graph/json-batching?tabs=http).

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference). To access data from OneDrive data sources, you need Files.Read.All or Files.ReadWrite.All permissions. You also need Sites.Read.All or Sites.ReadWrite.All permissions.

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | Files.Read.All, Sites.Read.All               | Files.ReadWrite.All, Sites.ReadWrite.All                |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Not supported.               | Not supported.                |

## HTTP request

```http
POST https://graph.microsoft.com/beta/copilot/search
```

## Request headers

| Name          | Description                                                                                               |
|:--------------|:----------------------------------------------------------------------------------------------------------|
| Authorization | Bearer {token}. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| Content-Type  | application/json. Required.                                                                               |

## Request body

In the request body, supply a JSON representation of the parameters.

The following table lists the parameters that are required when you call this action.

| Parameter     | Type                                                                                          | Description                                                                             |
|:--------------|:----------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------|
| `query`       | String                                                                                        | Natural language query to search for relevant files. Maximum 1,500 characters. Required. |
| `pageSize`    | Int32                                                                                         | Number of results to return per page (1-100). Default: 25. Optional.                    |
| `dataSources` | [copilotSearchDataSourcesConfiguration](resources/copilotsearchdatasourcesconfiguration.md) | Configuration for data sources to include in the search. Optional.                      |

## Response

If successful, this action returns a `200 OK` response code and a [copilotSearchResponse](resources/copilotsearchresponse.md) in the response body.

## Examples

### Example 1: Basic search request

The following example shows the minimum required parameters to perform a semantic search across all accessible OneDrive content.

#### Request

The following example shows the request. Try this example with [Graph Explorer](https://aka.ms/try_copilot_search_API_example_basic).

```http
POST https://graph.microsoft.com/beta/copilot/search
Content-Type: application/json

{
  "query": "How to setup corporate VPN?"
}
```

#### Response

The following example shows the response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "totalCount": 2,
  "searchHits": [
    {
      "webUrl": "https://contoso.sharepoint.com/sites/IT/VPNAccess.docx",
      "preview": "To configure the VPN, click the Wi-Fi icon on your corporate device and select the VPN option...",
      "resourceType": "driveItem"
    },
    {
      "webUrl": "https://contoso.sharepoint.com/sites/IT/Corporate_VPN.docx",
      "preview": "Once you have selected Corporate VPN under the VPN options, log in with your corporate credentials...",
      "resourceType": "driveItem"
    }
  ]
}
```

### Example 2: Search with filtering and metadata

The following example shows a request with specific OneDrive path filtering and metadata collection. The request asks for the `title` and `author` metadata to be returned for each search result.

#### Request

The following example shows the request. Try this example with [Graph Explorer](https://aka.ms/try_copilot_search_API_example_filter_metadata).

```http
POST https://graph.microsoft.com/beta/copilot/search
Content-Type: application/json

{
  "query": "quarterly budget analysis",
  "pageSize": 2,
  "dataSources": {
    "oneDrive": {
      "filterExpression": "path:\"https://contoso-my.sharepoint.com/personal/megan_contoso_com/Documents/Finance/\" OR path:\"https://contoso-my.sharepoint.com/personal/megan_contoso_com/Documents/Budget\"",
      "resourceMetadataNames": [
        "title",
        "author"
      ]
    }
  }
}
```

#### Response

The following example shows the response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.nextLink": "https://graph.microsoft.com/beta/copilot/searchNextPage?$skipToken=eyJDb250aW51YXRpb25Ub2tlbiI6...",
  "totalCount": 24,
  "searchHits": [
    {
      "webUrl": "https://contoso-my.sharepoint.com/personal/megan_contoso_com/Documents/Finance/Q1_Budget_Analysis.xlsx",
      "preview": "This quarterly budget analysis shows significant improvements in operational efficiency and cost reduction across all departments...",
      "resourceType": "driveItem",
      "resourceMetadata": {
        "title": "Q1 Budget Analysis 2025",
        "author": "Megan Bowen"
      }
    },
    {
      "webUrl": "https://contoso-my.sharepoint.com/personal/megan_contoso_com/Documents/Budget/Annual_Financial_Review.docx",
      "preview": "The annual financial review demonstrates strong performance indicators and provides recommendations for the upcoming quarter...",
      "resourceType": "driveItem",
      "resourceMetadata": {
        "title": "Annual Financial Review",
        "author": "Alex Wilber"
      }
    }
  ]
}
```

### Example 3: Search with path-based filtering

The following example shows how to search within specific OneDrive paths by using [Keyword Query Language (KQL)](/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference) path expressions.

#### Request

The following example shows the request. Try this example with [Graph Explorer](https://aka.ms/try_copilot_search_API_example_path_filter).

```http
POST https://graph.microsoft.com/beta/copilot/search
Content-Type: application/json

{
  "query": "project timeline milestones",
  "pageSize": 2,
  "dataSources": {
    "oneDrive": {
      "filterExpression": "path:\"https://contoso-my.sharepoint.com/personal/john_contoso_com/Documents/Projects/\"",
      "resourceMetadataNames": [
        "title",
        "author"
      ]
    }
  }
}
```

#### Response

The following example shows the response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "totalCount": 12,
  "searchHits": [
    {
      "webUrl": "https://contoso-my.sharepoint.com/personal/john_contoso_com/Documents/Projects/Project_Timeline_2026.docx",
      "preview": "The project timeline outlines key milestones for Q1 and Q2, including deliverable dates and resource requirements...",
      "resourceType": "driveItem",
      "resourceMetadata": {
        "title": "Project Timeline 2026",
        "author": "John Doe"
      }
    },
    {
      "webUrl": "https://contoso-my.sharepoint.com/personal/john_contoso_com/Documents/Projects/Milestone_Review.pptx",
      "preview": "Milestone review presentation covering completed deliverables, upcoming deadlines, and project status updates...",
      "resourceType": "driveItem",
      "resourceMetadata": {
        "title": "Milestone Review Presentation",
        "author": "Sarah Connor"
      }
    }
  ]
}
```

### Example 4: Batch requests to the Search API

The following example shows how to [batch requests to the Search API](/graph/json-batching?tabs=http). The Search API supports up to 20 requests per batch. The `id` in the request payload must be a string that uniquely identifies each request in the batch.

#### Request

The following example shows the request. Try this example with [Graph Explorer](https://aka.ms/try_copilot_search_API_example_batch).

```http
POST https://graph.microsoft.com/beta/$batch
Accept: application/json
Content-Type: application/json

{
  "requests": [
    {
      "id": "1",
      "method": "POST",
      "url": "/copilot/search",
      "headers": {"Content-Type": "application/json"},
      "body": {
        "query": "quarterly budget reports"
      }
    },
    {
      "id": "2",
      "method": "POST",
      "url": "/copilot/search",
      "headers": {"Content-Type": "application/json"},
      "body": {
        "query": "project planning documents"
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
        "totalCount": 15,
        "searchHits": [
          {
            "webUrl": "https://contoso-my.sharepoint.com/personal/user_contoso_com/Documents/Finance/Q1_Budget.xlsx",
            "preview": "Q1 budget analysis showing revenue growth and expense optimization across departments...",
            "resourceType": "driveItem"
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
        "totalCount": 8,
        "searchHits": [
          {
            "webUrl": "https://contoso-my.sharepoint.com/personal/user_contoso_com/Documents/Projects/Planning_Guide.docx",
            "preview": "Comprehensive project planning guide with templates and best practices for successful delivery...",
            "resourceType": "driveItem"
          }
        ]
      }
    }
  ]
}
```

## Related content

- [Overview of the Microsoft 365 Copilot Search API](overview.md)
- [Try with Graph explorer](https://aka.ms/try_copilot_search_API_example_basic)
