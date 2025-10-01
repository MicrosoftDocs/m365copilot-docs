---
title: "retrievalHit resource type"
description: Represents a single result within the list of retrieval results.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 08/08/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# retrievalHit resource type

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]
:::zone-end

Represents a single result within the list of retrieval results.

## Properties

| Property           | Type                                                                    | Description |
|:-------------------|:------------------------------------------------------------------------|:------------|
| `extracts`         | [retrievalExtract](retrievalextract.md) collection                      | An array of text extracts extracted from the document for Retrieval-Augmented Generation. Currently, only one text snippet is extracted. |
| `resourceMetadata` | [searchResourceMetadataDictionary](searchresourcemetadatadictionary.md) | The requested [SharePoint](/sharepoint/crawled-and-managed-properties-overview) and [Microsoft 365 Copilot connectors](/graph/connecting-external-content-manage-schema) metadata from the request payload (empty if not applicable). |
| `resourceType`     | [retrievalEntityType](#retrievalentitytype-enumeration)                 | The resource type of the item. |
| `sensitivityLabel` | [searchSensitivityLabelInfo](searchsensitivitylabelinfo.md)             | A JSON object with information about the document's sensitivity label. |
| `webUrl`           | String                                                                  | The URL of the item in which the extract was retrieved. |

### retrievalEntityType enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value                |
|:---------------------|
| `site`               |
| `list`               |
| `listItem`           |
| `externalItem`       |
| `drive`              |
| `driveItem`          |
| `unknownFutureValue` |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
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
