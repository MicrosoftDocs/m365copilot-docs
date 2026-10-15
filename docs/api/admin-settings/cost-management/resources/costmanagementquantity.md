---
title: costManagementQuantity resource type
description: A unit-bearing quantity that is either limited to a value or unlimited.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders copilotcredit -->

# costManagementQuantity resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A unit-bearing quantity that is either limited to a value or unlimited. This is an abstract type. Every quantity is one of its derived types, identified by the `@odata.type` property on write:

- [limitedCostManagementQuantity](limitedcostmanagementquantity.md)
- [unlimitedCostManagementQuantity](unlimitedcostmanagementquantity.md)

## Properties

| Property | Type                                            | Description               |
|:---------|:------------------------------------------------|:--------------------------|
| `unit`   | [costManagementUnit](#costmanagementunit-enumeration) | The unit for the quantity. |

### costManagementUnit enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value                | Description                                   |
|:---------------------|:----------------------------------------------|
| `copilotCredit`      | The current Copilot Credits consumption unit. |
| `unknownFutureValue` | Evolvable enumeration sentinel value.         |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementQuantity",
  "unit": "String"
}
```
