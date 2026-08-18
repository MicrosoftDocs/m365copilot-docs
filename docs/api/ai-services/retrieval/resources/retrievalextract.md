---
title: retrievalExtract resource type
description: Represents a single extract within the list of retrieval extracts.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 08/14/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

# retrievalExtract resource type

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]
:::zone-end

Represents a single extract within the list of retrieval extracts.

## Properties

:::zone pivot="graph-v1"

| Property         | Type   | Description                                                                                                                                                        |
|:-----------------|:-------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `relevanceScore` | Float  | The cosine similarity between the text extract and the `queryString`, normalized to the 0-1 range. A `retrievalExtract` can be returned without a relevance score. |
| `text`           | String | The text extract received.                                                                                                                                         |

:::zone-end

:::zone pivot="graph-preview"

| Property         | Type             | Description                                                                                                                                                        |
|:-----------------|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `pageNumbers`    | Int32 collection | The collection of page numbers that the extract is on. The API returns this property only when `includeThumbnails` is true in the initial request.                 |
| `relevanceScore` | Float            | The cosine similarity between the text extract and the `queryString`, normalized to the 0-1 range. A `retrievalExtract` can be returned without a relevance score. |
| `text`           | String           | The text extract received.                                                                                                                                         |

:::zone-end

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

:::zone pivot="graph-v1"

```json
{
  "@odata.type": "#microsoft.graph.retrievalExtract",
  "text": "String",
  "relevanceScore": "Float"
}
```

:::zone-end

:::zone pivot="graph-preview"

```json
{
  "@odata.type": "#microsoft.graph.retrievalExtract",
  "text": "String",
  "relevanceScore": "Float",
  "pageNumbers": [
    "Integer"
  ]
}
```

:::zone-end
