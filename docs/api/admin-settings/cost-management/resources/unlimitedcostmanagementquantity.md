---
title: unlimitedCostManagementQuantity resource type
description: A quantity that is not limited.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# unlimitedCostManagementQuantity resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A quantity that is not limited. Carries no numeric value. Derived from [costManagementQuantity](costmanagementquantity.md).

## Properties

| Property | Type                                                                        | Description                                       |
|:---------|:----------------------------------------------------------------------------|:--------------------------------------------------|
| `unit`   | [costManagementUnit](costmanagementquantity.md#costmanagementunit-enumeration) | Inherited from [costManagementQuantity](costmanagementquantity.md). The unit. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.unlimitedCostManagementQuantity",
  "unit": "String"
}
```
