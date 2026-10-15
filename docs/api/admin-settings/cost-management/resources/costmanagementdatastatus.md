---
title: costManagementDataStatus resource type
description: Last modification time for the source data represented by a result.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementDataStatus resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Last modification time for the source data represented by a result.

## Properties

| Property               | Type           | Description                                                                 |
|:-----------------------|:---------------|:----------------------------------------------------------------------------|
| `lastModifiedDateTime` | DateTimeOffset | When the underlying data was last modified, not when the request was received. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementDataStatus",
  "lastModifiedDateTime": "DateTimeOffset"
}
```
