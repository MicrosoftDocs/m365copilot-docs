---
title: Work IQ - copilotConversationReference resource type
description: Represents a copilotConversationReference.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 06/24/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: work-iq-rest-api-versions
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Work IQ - copilotConversationReference resource type

:::zone pivot="work-iq-rest-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

:::zone pivot="work-iq-rest-prod"
:::zone-end

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
