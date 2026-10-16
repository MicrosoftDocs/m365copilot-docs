---
title: limitedCostManagementQuantity resource type
description: A quantity limited to a specific value.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# limitedCostManagementQuantity resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A quantity limited to a specific value. A value of zero permits no consumption and is distinct from unlimited. Derived from [costManagementQuantity](costmanagementquantity.md).

## Properties

| Property | Type                                                                        | Description                                           |
|:---------|:----------------------------------------------------------------------------|:------------------------------------------------------|
| `unit`   | [costManagementUnit](costmanagementquantity.md#costmanagementunit-enumeration) | Inherited from [costManagementQuantity](costmanagementquantity.md). The unit for the value. |
| `value`  | Double                                                                      | The numeric value, expressed in the stated unit.      |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.limitedCostManagementQuantity",
  "unit": "String",
  "value": "Double"
}
```
