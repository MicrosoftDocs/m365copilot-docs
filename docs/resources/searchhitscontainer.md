---
title: "searchHitsContainer resource type"
description: "**TODO: Add Description**"
author: "**TODO: Provide GitHub Name. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
ms.date: 03/04/2025
ms.localizationpriority: medium
ms.subservice: "**TODO: Add MS subservice. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
doc_type: resourcePageType
---

# searchHitsContainer resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

**TODO: Add Description**


## Properties
|Property|Type|Description|
|:---|:---|:---|
|aggregations|[searchAggregation](../resources/searchaggregation.md) collection|**TODO: Add Description**|
|hits|[searchHit](../resources/searchhit.md) collection|**TODO: Add Description**|
|moreResultsAvailable|Boolean|**TODO: Add Description**|
|total|Int32|**TODO: Add Description**|

## Relationships
None.

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "@odata.type": "microsoft.graph.searchHitsContainer"
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.searchHitsContainer",
  "hits": [
    {
      "@odata.type": "microsoft.graph.searchHit"
    }
  ],
  "aggregations": [
    {
      "@odata.type": "microsoft.graph.searchAggregation"
    }
  ],
  "total": "Integer",
  "moreResultsAvailable": "Boolean"
}
```

