---
title: costManagementGroupUsageRecord resource type
description: One security group's reported consumption for one completed UTC day.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementGroupUsageRecord resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

One security group's reported (processed) consumption of Copilot Credits for one completed UTC day. The row is keyed on `groupId` and has no separate `id`. Consumption is attributed to the group based on the membership of the users who consumed it.

> [!NOTE]
> A group usage record reports attributed consumption only. It isn't an allocation, a group balance, a cost-center hierarchy, or a chargeback position.

## Methods

| Method                                                    | Return type                                                                     | Description                                                                          |
|:----------------------------------------------------------|:--------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| [List](../costmanagementgroupusagerecord-list.md)         | [costManagementGroupUsageRecord](costmanagementgroupusagerecord.md) collection  | Get a list of costManagementGroupUsageRecord objects.                                |
| [Get](../costmanagementgroupusagerecord-get.md)           | [costManagementGroupUsageRecord](costmanagementgroupusagerecord.md)             | Retrieve the properties and relationships of a costManagementGroupUsageRecord object. |

## Properties

| Property           | Type                                                                            | Description                                                                                                                                                                                                      |
|:-------------------|:--------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `consumedQuantity` | Double                                                                          | Billable consumption attributed to members of this group for the requested completed UTC day. Supports `$orderby`. Read-only.                                                                                    |
| `groupId`          | String                                                                          | The identifier of the security group this row reports. Supports `$filter`. Read-only.                                                                                                                            |
| `sessionCount`     | Int64                                                                           | Count of distinct non-null session identifiers on billable activity attributed to this group during the requested completed UTC day, subject to the source filters and plan processing watermarks. Excludes non-billable activity. Read-only. |
| `unit`             | [costManagementUnit](costmanagementquantity.md#costmanagementunit-enumeration)  | Unit that applies to `consumedQuantity`. Read-only.                                                                                                                                                              |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementGroupUsageRecord",
  "consumedQuantity": "Double",
  "groupId": "String",
  "sessionCount": "Int64",
  "unit": "String"
}
```
