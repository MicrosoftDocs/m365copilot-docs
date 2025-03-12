---
title: "searchQuery resource type"
description: "**TODO: Add Description**"
author: "**TODO: Provide GitHub Name. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
ms.date: 03/04/2025
ms.localizationpriority: medium
ms.subservice: "**TODO: Add MS subservice. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
doc_type: resourcePageType
---

# searchQuery resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

**TODO: Add Description**


## Properties
|Property|Type|Description|
|:---|:---|:---|
|query_string|[searchQueryString](../resources/searchquerystring.md)|**TODO: Add Description**|
|queryString|String|**TODO: Add Description**|
|queryTemplate|String|**TODO: Add Description**|

## Relationships
None.

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "@odata.type": "microsoft.graph.searchQuery"
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.searchQuery",
  "query_string": {
    "@odata.type": "microsoft.graph.searchQueryString"
  },
  "queryString": "String",
  "queryTemplate": "String"
}
```

