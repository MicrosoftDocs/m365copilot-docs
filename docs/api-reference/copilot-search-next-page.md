---
title: Retrieve next page of search results
description: Use the Search API to retrieve the next page of search results using pagination tokens.
author: apiarya
ms.author: apiarya
ms.topic: reference
ms.date: 7/28/2025
ms.localizationpriority: medium
doc_type: conceptualPageType
---

# Retrieve next page of search results using the Microsoft 365 Copilot Search API

[!INCLUDE [beta-disclaimer](includes/beta-disclaimer.md)]

Retrieve the next page of search results from a previous search query using pagination tokens. This endpoint allows you to navigate through large result sets efficiently without re-executing the original search query.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | Files.Read.All               | Sites.Read.All                |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Not supported.               | Not supported.                |

## HTTP request

```http
GET https://graph.microsoft.com/beta/copilot/searchNextPage?$skipToken={token}
```

## Request headers

| Name          | Description                                                                                               |
|:--------------|:----------------------------------------------------------------------------------------------------------|
| Authorization | Bearer {token}. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Query parameters

| Parameter     | Type   | Description                                                                                    |
|:--------------|:-------|:-----------------------------------------------------------------------------------------------|
| `$skipToken`  | String | Pagination token from previous response's `@odata.nextLink`. Required.                        |

## Response

If successful, this method returns a `200 OK` response code and a [copilotSearchResponse](resources/copilot-search-response.md) in the response body.

## Example

### Request

The following example shows how to retrieve the next page of search results using the pagination token from a previous response.

```http
GET https://graph.microsoft.com/beta/copilot/searchNextPage?$skiptoken=eyJDb250aW51YXRpb25Ub2tlbiI6IlNlYXJjaE1hbmFnZXJQYWdpbmF0aW9uVG9rZW4iLCJUb3RhbFJlc3VsdENvdW50IjoyNCwiUGFnZVNpemUiOjUsIlNlYXJjaFJlcXVlc3RIYXM...
Content-Type: application/json
Authorization: Bearer {token}
```

### Example response

The following example shows the response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.nextLink": "https://graph.microsoft.com/beta/copilot/searchNextPage?$skipToken=eyJOZXh0VG9rZW4iOiJhbm90aGVyUGFnaW5hdGlvblRva2VuIiwiVG90YWxSZXN1bHRDb3VudCI6MjQsIlBhZ2VTaXplIjo1...",
  "totalCount": 24,
  "searchHits": [
    {
      "webUrl": "https://contoso-my.sharepoint.com/personal/megan_contoso_com/Documents/Finance/Budget_Forecast_Model.xlsx",
      "preview": "This forecasting model provides predictive analytics for budget planning and resource allocation across departments...",
      "resourceType": "driveItem",
      "resourceMetadata": {
        "title": "Budget Forecast Model",
        "author": "Megan Bowen"
      }
    },
    {
      "webUrl": "https://contoso-my.sharepoint.com/personal/adele_contoso_com/Documents/Projects/Cost_Analysis.pptx",
      "preview": "Comprehensive cost analysis presentation covering operational expenses, capital investments, and ROI calculations...",
      "resourceType": "driveItem",
      "resourceMetadata": {
        "title": "Cost Analysis Presentation",
        "author": "Adele Vance"
      }
    }
  ]
}
```

## Related content

- [Overview of the Microsoft 365 Copilot Search API](search-api-overview.md)
- [Perform semantic search](copilot-search.md)
- [Try with Graph explorer](https://aka.ms/try_copilot_search_API_reference)
