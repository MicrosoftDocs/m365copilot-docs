---
title: retrievalResponse resource type
description: Represents results from a retrieval query.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 08/08/2025
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

# retrievalResponse resource type

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents results from a retrieval query.
:::zone-end

:::zone pivot="graph-v1"
Represents results from a retrieval query.
:::zone-end

## Properties

| Property        | Type                                       | Description                            |
|:----------------|:-------------------------------------------|:---------------------------------------|
| `retrievalHits` | [retrievalHit](retrievalhit.md) collection | A collection of the retrieval results. If empty, no relevant results were found. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.retrievalResponse",
  "retrievalHits": [
    {
      "@odata.type": "microsoft.graph.retrievalHit"
    }
  ]
}
```
