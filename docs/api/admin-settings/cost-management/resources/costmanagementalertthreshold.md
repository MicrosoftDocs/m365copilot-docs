---
title: costManagementAlertThreshold resource type
description: A single notify-only alert threshold.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementAlertThreshold resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A single notify-only alert threshold. This is an abstract type. Every threshold is one of its derived types, identified by the `@odata.type` property on create:

- [percentageCostManagementAlertThreshold](percentagecostmanagementalertthreshold.md)
- [absoluteCostManagementAlertThreshold](absolutecostmanagementalertthreshold.md)

## Properties

| Property | Type   | Description                                                    |
|:---------|:-------|:--------------------------------------------------------------|
| `value`  | Double | The threshold value. The permitted range is set by the derived type. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementAlertThreshold",
  "value": "Double"
}
```
