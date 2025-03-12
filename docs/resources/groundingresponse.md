---
title: "groundingResponse resource type"
description: "**TODO: Add Description**"
author: "**TODO: Provide GitHub Name. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
ms.date: 03/04/2025
ms.localizationpriority: medium
ms.subservice: "**TODO: Add MS subservice. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
doc_type: resourcePageType
---

# groundingResponse resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

**TODO: Add Description**


## Properties
|Property|Type|Description|
|:---|:---|:---|
|extracts|String collection|**TODO: Add Description**|
|resourceMetadata|[searchResourceMetadataDictionary](../resources/searchresourcemetadatadictionary.md)|**TODO: Add Description**|
|resourceType|groundingEntityType|**TODO: Add Description**.The possible values are: `site`, `list`, `listItem`, `drive`, `driveItem`, `unknownFutureValue`.|
|sensitivityLabel|[searchSensitivityLabelInfo](../resources/searchsensitivitylabelinfo.md)|**TODO: Add Description**|
|webUrl|String|**TODO: Add Description**|

## Relationships
None.

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "@odata.type": "microsoft.graph.groundingResponse"
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.groundingResponse",
  "sensitivityLabel": {
    "@odata.type": "microsoft.graph.searchSensitivityLabelInfo"
  },
  "webUrl": "String",
  "extracts": [
    "String"
  ],
  "resourceType": "String",
  "resourceMetadata": {
    "@odata.type": "microsoft.graph.searchResourceMetadataDictionary"
  }
}
```

