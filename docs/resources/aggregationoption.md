---
title: "aggregationOption resource type"
description: "**TODO: Add Description**"
author: "**TODO: Provide GitHub Name. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
ms.date: 03/04/2025
ms.localizationpriority: medium
ms.subservice: "**TODO: Add MS subservice. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
doc_type: resourcePageType
---

# aggregationOption resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

**TODO: Add Description**


## Properties
|Property|Type|Description|
|:---|:---|:---|
|bucketDefinition|[bucketAggregationDefinition](../resources/bucketaggregationdefinition.md)|**TODO: Add Description**|
|field|String|**TODO: Add Description**|
|size|Int32|**TODO: Add Description**|

## Relationships
None.

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "@odata.type": "microsoft.graph.aggregationOption"
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.aggregationOption",
  "field": "String",
  "size": "Integer",
  "bucketDefinition": {
    "@odata.type": "microsoft.graph.bucketAggregationDefinition"
  }
}
```

