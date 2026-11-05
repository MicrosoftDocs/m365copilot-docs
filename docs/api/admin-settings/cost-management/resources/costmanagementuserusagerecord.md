---
title: costManagementUserUsageRecord resource type
description: One user's reported consumption for one completed UTC day.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementUserUsageRecord resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

One user's reported (processed) consumption of Copilot Credits for one completed UTC day. The row is keyed on `userId` and has no separate `id`. This processed, date-bounded report is distinct from the raw, timestamp-bounded detail returned by [costManagementUserUsageDetail](costmanagementuserusagedetail.md); the `sessionCount` values of the two resources aren't guaranteed to be equal.

## Methods

| Method                                                   | Return type                                                                   | Description                                                                         |
|:---------------------------------------------------------|:------------------------------------------------------------------------------|:------------------------------------------------------------------------------------|
| [List](../costmanagementuserusagerecord-list.md)         | [costManagementUserUsageRecord](costmanagementuserusagerecord.md) collection  | Get a list of costManagementUserUsageRecord objects.                                |
| [Get](../costmanagementuserusagerecord-get.md)           | [costManagementUserUsageRecord](costmanagementuserusagerecord.md)             | Retrieve the properties and relationships of a costManagementUserUsageRecord object. |

## Properties

| Property           | Type                                                                            | Description                                                                                                                                                                                         |
|:-------------------|:--------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `consumedQuantity` | Double                                                                          | Billable consumption attributed to this user for the requested completed UTC day. Supports `$orderby`. Read-only.                                                                                   |
| `sessionCount`     | Int64                                                                           | Count of distinct non-null session identifiers on billable activity for this user during the requested completed UTC day, subject to the source filters and plan processing watermarks. Excludes non-billable activity. Read-only. |
| `unit`             | [costManagementUnit](costmanagementquantity.md#costmanagementunit-enumeration)  | Unit that applies to `consumedQuantity`. Read-only.                                                                                                                                                 |
| `userId`           | String                                                                          | The identifier of the user this row reports. Supports `$filter`. Read-only.                                                                                                                         |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementUserUsageRecord",
  "consumedQuantity": "Double",
  "sessionCount": "Int64",
  "unit": "String",
  "userId": "String"
}
```
