---
title: copilotSearchResponse resource type
description: Represents results from a semantic search query.
author: apiarya
ms.author: apiarya
ms.topic: reference
ms.date: 7/28/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotSearchResponse resource type

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

Represents results from a semantic search query.

## Properties

| Property        | Type                                       | Description                            |
|:----------------|:-------------------------------------------|:---------------------------------------|
| `@odata.nextLink` | String | URL to retrieve the next page of results (only present when more results are available). |
| `totalCount`    | Int32                                      | Total number of search results available for the query. |
| `searchHits`    | [copilotSearchHit](copilot-search-hit.md) collection | Array of search result objects ordered by relevance. If empty, no relevant results were found. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotSearchResponse",
  "@odata.nextLink": "String",
  "totalCount": "Int32",
  "searchHits": [
    {
      "@odata.type": "microsoft.graph.copilotSearchHit"
    }
  ]
}
```
