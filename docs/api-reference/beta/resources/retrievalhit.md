---
title: "retrievalHit resource type"
description: Represents a single result within the list of retrieval results.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 03/11/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# retrievalHit resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Represents a single result within the list of retrieval results.


## Properties
|Property|Type|Description|
|:---|:---|:---|
|extracts|[retrievalExtract](../resources/retrievalextract.md) collection|An array of text extracts extracted from the document for Retrieval-Augmented Generation|
|resourceMetadata|[searchResourceMetadataDictionary](../resources/searchresourcemetadatadictionary.md)|The requested metadata from the request payload (empty if not applicable).|
|resourceType|groundingEntityType|he resource type of the item.The possible values are: `site`, `list`, `listItem`, `drive`, `driveItem`, `unknownFutureValue`.|
|sensitivityLabel|[searchSensitivityLabelInfo](../resources/searchsensitivitylabelinfo.md)|A JSON object with information about the document’s [sensitivity label](https://learn.microsoft.com/graph/api/resources/security-sensitivitylabel?view=graph-rest-beta#properties).|
|webUrl|String|The URL of the item in which the extract was retrieved. |

## Relationships
None.

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "@odata.type": "microsoft.graph.retrievalHit"
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.retrievalHit",
  "webUrl": "String",
  "sensitivityLabel": {
    "@odata.type": "microsoft.graph.searchSensitivityLabelInfo"
  },
  "extracts": [
    {
      "@odata.type": "microsoft.graph.retrievalExtract"
    }
  ],
  "resourceType": "String",
  "resourceMetadata": {
    "@odata.type": "microsoft.graph.searchResourceMetadataDictionary"
  }
}
```

