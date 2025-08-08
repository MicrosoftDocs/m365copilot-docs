---
title: retrievalResponse resource type
description: Represents results from a retrieval query.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 06/09/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# retrievalResponse resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents results from a retrieval query.

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
