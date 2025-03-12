---
title: "retrievalResponse resource type"
description: "**TODO: Add Description**"
author: "**TODO: Provide GitHub Name. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
ms.date: 03/04/2025
ms.localizationpriority: medium
ms.subservice: "**TODO: Add MS subservice. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
doc_type: resourcePageType
---

# retrievalResponse resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Represents results from a retrieval query.

## Properties
|Property|Type|Description|
|:---|:---|:---|
|retrievalHits|[retrievalHit](../resources/retrievalhit.md) collection|A collection of the retrieval results.|

## Relationships
None.

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "@odata.type": "microsoft.graph.retrievalResponse"
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.retrievalResponse",
  "retrievalHits": [
    {
      "@odata.type": "microsoft.graph.retrievalHit"
    }
  ]
}
```

