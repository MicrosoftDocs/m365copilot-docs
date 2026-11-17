---
title: costManagementUserUsageSessionDetail resource type
description: A native-source session grouping within a user's raw usage detail.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementUserUsageSessionDetail resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A native-source session grouping within a user's raw usage detail, contained by [costManagementUserUsageDetail](costmanagementuserusagedetail.md). Activity without a session identifier might be omitted from the session breakdown, even when it contributes to the parent total. Reading a single session row by key (`GET .../sessions/{id}`) isn't supported.

## Methods

| Method                                                          | Return type                                                                                 | Description                                                 |
|:----------------------------------------------------------------|:--------------------------------------------------------------------------------------------|:------------------------------------------------------------|
| [List](../costmanagementuserusagesessiondetail-list.md)         | [costManagementUserUsageSessionDetail](costmanagementuserusagesessiondetail.md) collection  | Get a list of costManagementUserUsageSessionDetail objects. |

## Properties

| Property                | Type                                                                            | Description                                                                                                                                                                                         |
|:------------------------|:--------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `consumedQuantity`      | Double                                                                          | Raw, billable-flagged consumption attributed to this session grouping within the containing user's detail window. Session rows need not sum to the parent's `consumedQuantity`. Read-only.          |
| `firstActivityDateTime` | DateTimeOffset                                                                  | Time the earliest activity in this session was recorded, or `null` when the source didn't report one. Read-only.                                                                                    |
| `id`                    | String                                                                          | Opaque identifier of this row, scoped to the containing user's detail and stable across repeated reads of the same request. It isn't a global or persistent session identifier, and it's distinct from `sourceSessionId`. Read-only. |
| `lastActivityDateTime`  | DateTimeOffset                                                                  | Time the latest activity in this session was recorded, or `null` when the source didn't report one. Read-only.                                                                                      |
| `sourceSessionId`       | String                                                                          | The native session identifier returned by the source, preserved verbatim, including `null` if the source returns it. Distinct from this row's opaque `id`. Read-only.                               |
| `unit`                  | [costManagementUnit](costmanagementquantity.md#costmanagementunit-enumeration)  | Unit that applies to `consumedQuantity`. Read-only.                                                                                                                                                 |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementUserUsageSessionDetail",
  "consumedQuantity": "Double",
  "firstActivityDateTime": "DateTimeOffset",
  "id": "String",
  "lastActivityDateTime": "DateTimeOffset",
  "sourceSessionId": "String",
  "unit": "String"
}
```
