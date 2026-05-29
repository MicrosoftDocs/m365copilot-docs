---
title: copilotConversationReference resource type
description: Represents a copilotConversationReference.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 05/20/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# copilotConversationReference resource type

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Represents a conversation reference.

## Properties

| Property            | Type                                                        | Description               |
|:--------------------|:------------------------------------------------------------|:--------------------------|
| `isCitedInResponse` | Boolean                                                     | **TODO: Add description** |
| `sensitivityLabel`  | [searchSensitivityLabelInfo](searchsensitivitylabelinfo.md) | **TODO: Add description** |
| `targetLink`        | String                                                      | **TODO: Add description** |

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotConversationReference",
  "targetLink": "String",
  "sensitivityLabel": {
    "@odata.type": "microsoft.graph.searchSensitivityLabelInfo"
  },
  "isCitedInResponse": true
}
```
