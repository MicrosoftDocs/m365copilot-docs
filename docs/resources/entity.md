---
title: "entity resource type"
description: "**TODO: Add Description**"
author: "**TODO: Provide GitHub Name. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
ms.date: 03/04/2025
ms.localizationpriority: medium
ms.subservice: "**TODO: Add MS subservice. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
doc_type: resourcePageType
---

# entity resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

**TODO: Add Description**
This is an abstract type.

Inherits from [entity](../resources/entity.md)

## Methods
|Method|Return type|Description|
|:---|:---|:---|
|[List](../api/searchhit-list-source.md)|[entity](../resources/entity.md) collection|Get a list of the entity objects and their properties.|
|[Create](../api/searchhit-post-source.md)|[entity](../resources/entity.md)|Create a new entity object.|
|[Get](../api/entity-get.md)|[entity](../resources/entity.md)|Read the properties and relationships of an entity object.|
|[Update](../api/entity-update.md)|[entity](../resources/entity.md)|Update the properties of an entity object.|
|[Delete](../api/searchhit-delete-source.md)|None|Delete an entity object.|

## Properties
|Property|Type|Description|
|:---|:---|:---|
|id|String|**TODO: Add Description** Inherits from [entity](../resources/entity.md)|

## Relationships
None.

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "keyProperty": "id",
  "@odata.type": "microsoft.graph.entity",
  "openType": false
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.entity",
  "id": "String (identifier)"
}
```

