---
title: "bucketAggregationDefinition resource type"
description: "**TODO: Add Description**"
author: "**TODO: Provide GitHub Name. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
ms.date: 03/04/2025
ms.localizationpriority: medium
ms.subservice: "**TODO: Add MS subservice. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
doc_type: resourcePageType
---

# bucketAggregationDefinition resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

**TODO: Add Description**


## Properties
|Property|Type|Description|
|:---|:---|:---|
|isDescending|Boolean|**TODO: Add Description**|
|minimumCount|Int32|**TODO: Add Description**|
|prefixFilter|String|**TODO: Add Description**|
|ranges|[bucketAggregationRange](../resources/bucketaggregationrange.md) collection|**TODO: Add Description**|
|sortBy|bucketAggregationSortProperty|**TODO: Add Description**.The possible values are: `count`, `keyAsString`, `keyAsNumber`, `unknownFutureValue`.|

## Relationships
None.

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "@odata.type": "microsoft.graph.bucketAggregationDefinition"
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.bucketAggregationDefinition",
  "sortBy": "String",
  "isDescending": "Boolean",
  "prefixFilter": "String",
  "minimumCount": "Integer",
  "ranges": [
    {
      "@odata.type": "microsoft.graph.bucketAggregationRange"
    }
  ]
}
```

