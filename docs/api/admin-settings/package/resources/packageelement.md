---
title: packageElement complex type
description: Reference for the packageElement complex type in the Copilot Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
ms.localizationpriority: high
ms.date: 10/28/2025
---

<!-- cSpell: ignore pomuth -->

# packageElement complex type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a single element within a Copilot package, containing its unique identifier and definition.

## Properties

| Property     | Type   | Description                                                      |
|--------------|--------|------------------------------------------------------------------|
| `definition` | String | Complete definition or manifest of the element as a JSON string. |
| `id`         | String | Unique identifier of the element.                                |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.packageElement",
  "definition": "String",
  "id": "String"
}
```
