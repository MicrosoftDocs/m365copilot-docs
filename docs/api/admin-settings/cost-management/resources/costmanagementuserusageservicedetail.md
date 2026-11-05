---
title: costManagementUserUsageServiceDetail resource type
description: One governed service's share of a user's raw usage detail.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementUserUsageServiceDetail resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

One governed service's share of a user's raw usage detail, contained by [costManagementUserUsageDetail](costmanagementuserusagedetail.md). This per-user row is distinct from the tenant-wide [costManagementServiceUsageRecord](costmanagementserviceusagerecord.md).

## Methods

| Method                                                          | Return type                                                                                 | Description                                                 |
|:----------------------------------------------------------------|:--------------------------------------------------------------------------------------------|:------------------------------------------------------------|
| [List](../costmanagementuserusageservicedetail-list.md)         | [costManagementUserUsageServiceDetail](costmanagementuserusageservicedetail.md) collection  | Get a list of costManagementUserUsageServiceDetail objects. |

## Properties

| Property           | Type                                                                            | Description                                                                                                                                                                                                                          |
|:-------------------|:--------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `consumedQuantity` | Double                                                                          | Raw, billable-flagged consumption attributed to this service within the containing user's detail window. Independently rounded; child rows aren't guaranteed to sum exactly to the containing detail's `consumedQuantity`. Read-only. |
| `id`               | String                                                                          | The governed service identifier, such as `cowork` or `workIQ`. It's the same value as `serviceId` elsewhere in the API; it's named `id` here because it's this row's own key. Read-only.                                            |
| `unit`             | [costManagementUnit](costmanagementquantity.md#costmanagementunit-enumeration)  | Unit that applies to `consumedQuantity`. Read-only.                                                                                                                                                                                  |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementUserUsageServiceDetail",
  "consumedQuantity": "Double",
  "id": "String",
  "unit": "String"
}
```
