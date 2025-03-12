---
title: "searchRequest resource type"
description: "**TODO: Add Description**"
author: "**TODO: Provide GitHub Name. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
ms.date: 03/04/2025
ms.localizationpriority: medium
ms.subservice: "**TODO: Add MS subservice. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
doc_type: resourcePageType
---

# searchRequest resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

**TODO: Add Description**


## Properties
|Property|Type|Description|
|:---|:---|:---|
|aggregationFilters|String collection|**TODO: Add Description**|
|aggregations|[aggregationOption](../resources/aggregationoption.md) collection|**TODO: Add Description**|
|collapseProperties|[collapseProperty](../resources/collapseproperty.md) collection|**TODO: Add Description**|
|contentSources|String collection|**TODO: Add Description**|
|enableTopResults|Boolean|**TODO: Add Description**|
|entityTypes|entityType collection|**TODO: Add Description**|
|fields|String collection|**TODO: Add Description**|
|from|Int32|**TODO: Add Description**|
|query|[searchQuery](../resources/searchquery.md)|**TODO: Add Description**|
|queryAlterationOptions|[searchAlterationOptions](../resources/searchalterationoptions.md)|**TODO: Add Description**|
|region|String|**TODO: Add Description**|
|resultTemplateOptions|[resultTemplateOption](../resources/resulttemplateoption.md)|**TODO: Add Description**|
|semanticSearch|semanticSearchOption|**TODO: Add Description**.The possible values are: `lexicalOnly`, `lexicalPlusSemantic`, `unknownFutureValue`.|
|sharePointOneDriveOptions|[sharePointOneDriveOptions](../resources/sharepointonedriveoptions.md)|**TODO: Add Description**|
|size|Int32|**TODO: Add Description**|
|sortProperties|[sortProperty](../resources/sortproperty.md) collection|**TODO: Add Description**|
|stored_fields|String collection|**TODO: Add Description**|
|trimDuplicates|Boolean|**TODO: Add Description**|

## Relationships
None.

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "@odata.type": "microsoft.graph.searchRequest"
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.searchRequest",
  "entityTypes": [
    "String"
  ],
  "contentSources": [
    "String"
  ],
  "query": {
    "@odata.type": "microsoft.graph.searchQuery"
  },
  "trimDuplicates": "Boolean",
  "collapseProperties": [
    {
      "@odata.type": "microsoft.graph.collapseProperty"
    }
  ],
  "sortProperties": [
    {
      "@odata.type": "microsoft.graph.sortProperty"
    }
  ],
  "aggregations": [
    {
      "@odata.type": "microsoft.graph.aggregationOption"
    }
  ],
  "aggregationFilters": [
    "String"
  ],
  "from": "Integer",
  "size": "Integer",
  "stored_fields": [
    "String"
  ],
  "fields": [
    "String"
  ],
  "semanticSearch": "String",
  "enableTopResults": "Boolean",
  "resultTemplateOptions": {
    "@odata.type": "microsoft.graph.resultTemplateOption"
  },
  "queryAlterationOptions": {
    "@odata.type": "microsoft.graph.searchAlterationOptions"
  },
  "region": "String",
  "sharePointOneDriveOptions": {
    "@odata.type": "microsoft.graph.sharePointOneDriveOptions"
  }
}
```

