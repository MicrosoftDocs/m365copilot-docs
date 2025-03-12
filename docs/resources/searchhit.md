---
title: "searchHit resource type"
description: "**TODO: Add Description**"
author: "**TODO: Provide GitHub Name. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
ms.date: 03/04/2025
ms.localizationpriority: medium
ms.subservice: "**TODO: Add MS subservice. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
doc_type: resourcePageType
---

# searchHit resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

**TODO: Add Description**


## Properties
|Property|Type|Description|
|:---|:---|:---|
|_id|String|**TODO: Add Description**|
|_score|Int32|**TODO: Add Description**|
|_summary|String|**TODO: Add Description**|
|contentSource|String|**TODO: Add Description**|
|hitId|String|**TODO: Add Description**|
|isCollapsed|Boolean|**TODO: Add Description**|
|rank|Int32|**TODO: Add Description**|
|resultTemplateId|String|**TODO: Add Description**|
|summary|String|**TODO: Add Description**|

## Relationships
|Relationship|Type|Description|
|:---|:---|:---|
|_source|[entity](../resources/entity.md)|**TODO: Add Description**|
|resource|[entity](../resources/entity.md)|**TODO: Add Description**|

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "@odata.type": "microsoft.graph.searchHit"
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.searchHit",
  "_id": "String",
  "hitId": "String",
  "contentSource": "String",
  "_score": "Integer",
  "rank": "Integer",
  "isCollapsed": "Boolean",
  "_summary": "String",
  "summary": "String",
  "resultTemplateId": "String"
}
```

