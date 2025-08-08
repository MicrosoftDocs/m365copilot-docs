---
title: copilotSearchHit resource type
description: Represents a single search result from a semantic search query.
author: apiarya
ms.author: swapnilsapar
ms.topic: reference
ms.date: 8/15/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotSearchHit resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a single search result from a semantic search query.

## Properties

| Property           | Type                                                                                    | Description                                                        |
|:-------------------|:----------------------------------------------------------------------------------------|:-------------------------------------------------------------------|
| `webUrl`           | String                                                                                  | Direct URL to access the search result.                            |
| `preview`          | String                                                                                  | Short text preview providing context for the result.               |
| `resourceType`     | String                                                                                  | Type of the resource (for example, `driveItem`, `listItem`).       |
| `resourceMetadata` | [copilotSearchResourceMetadataDictionary](./copilotsearchresourcemetadatadictionary.md) | Requested metadata fields (only included if specified in request). |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotSearchHit",
  "webUrl": "String",
  "preview": "String",
  "resourceType": "String",
  "resourceMetadata": {
    "@odata.type": "microsoft.graph.copilotSearchResourceMetadataDictionary"
  }
}
```
