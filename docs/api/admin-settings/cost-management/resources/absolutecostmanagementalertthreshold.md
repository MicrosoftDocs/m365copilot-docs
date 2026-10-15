---
title: absoluteCostManagementAlertThreshold resource type
description: A threshold expressed as an absolute quantity.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# absoluteCostManagementAlertThreshold resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A threshold expressed as an absolute quantity. The `value` is positive and is stated in the accompanying unit, which matches the policy's limit unit. Derived from [costManagementAlertThreshold](costmanagementalertthreshold.md).

## Properties

| Property | Type                                                                        | Description                                              |
|:---------|:----------------------------------------------------------------------------|:--------------------------------------------------------|
| `unit`   | [costManagementUnit](costmanagementquantity.md#costmanagementunit-enumeration) | The unit the threshold value is expressed in.          |
| `value`  | Double                                                                      | Inherited from [costManagementAlertThreshold](costmanagementalertthreshold.md). A positive absolute threshold value. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.absoluteCostManagementAlertThreshold",
  "unit": "String",
  "value": "Double"
}
```
