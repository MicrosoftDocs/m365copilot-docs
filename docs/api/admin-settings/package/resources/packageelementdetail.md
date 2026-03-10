---
title: packageElementDetail complex type
description: Reference for the packageElementDetail complex type in the Copilot Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
ms.localizationpriority: high
ms.date: 10/28/2025
---

<!-- cSpell: ignore pomuth -->

# packageElementDetail complex type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Provides details for each element type comprising the package.

## Properties

| Property      | Type                                           | Description                                                             |
|---------------|------------------------------------------------|-------------------------------------------------------------------------|
| `elements`    | [packageElement](packageelement.md) collection | List of details for all elements in the package of this type.           |
| `elementType` | String                                         | Type of the element (e.g., CustomEngineCopilot, DeclarativeAgent, Bot). |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.packageElementDetail",
  "elements": [
    {
      "@odata.type": "microsoft.graph.packageElement"
    }
  ],
  "elementType": "String"
}
```
