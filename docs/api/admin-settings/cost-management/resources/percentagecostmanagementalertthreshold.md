---
title: percentageCostManagementAlertThreshold resource type
description: A threshold expressed as a percentage of the policy's period limit.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# percentageCostManagementAlertThreshold resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A threshold expressed as a percentage of the policy's period limit. The `value` is an integer from 1 to 100 and carries no unit. Derived from [costManagementAlertThreshold](costmanagementalertthreshold.md).

## Properties

| Property | Type   | Description                                                                                       |
|:---------|:-------|:--------------------------------------------------------------------------------------------------|
| `value`  | Double | Inherited from [costManagementAlertThreshold](costmanagementalertthreshold.md). An integer from 1 to 100, a share of the policy's period limit. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.percentageCostManagementAlertThreshold",
  "value": "Double"
}
```
