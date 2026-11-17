---
title: costManagementServiceUsageRecord resource type
description: One governed service's share of reported consumption for one completed UTC day.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementServiceUsageRecord resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

One governed service's share of reported consumption of Copilot Credits for one completed UTC day, across the tenant. The row is keyed on `serviceId` and has no separate `id`. This tenant-wide record is distinct from [costManagementUserUsageServiceDetail](costmanagementuserusageservicedetail.md), which splits one user's raw usage by service.

## Methods

| Method                                                      | Return type                                                                         | Description                                                                            |
|:------------------------------------------------------------|:------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|
| [List](../costmanagementserviceusagerecord-list.md)         | [costManagementServiceUsageRecord](costmanagementserviceusagerecord.md) collection  | Get a list of costManagementServiceUsageRecord objects.                                |
| [Get](../costmanagementserviceusagerecord-get.md)           | [costManagementServiceUsageRecord](costmanagementserviceusagerecord.md)             | Retrieve the properties and relationships of a costManagementServiceUsageRecord object. |

## Properties

| Property           | Type                                                                            | Description                                                                                                                                                                                         |
|:-------------------|:--------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `consumedQuantity` | Double                                                                          | Consumption attributed to this service for the requested completed UTC day. Supports `$orderby`. Read-only.                                                                                         |
| `serviceId`        | String                                                                          | The governed service identifier, such as `cowork` or `workIQ`. Discover valid values from the service catalog by using a category identifier, not the catalog entry's own ID. Supports `$filter`. Read-only. |
| `unit`             | [costManagementUnit](costmanagementquantity.md#costmanagementunit-enumeration)  | Unit that applies to `consumedQuantity`. Read-only.                                                                                                                                                 |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementServiceUsageRecord",
  "consumedQuantity": "Double",
  "serviceId": "String",
  "unit": "String"
}
```
