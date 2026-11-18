---
title: costManagementUserServiceBalance resource type
description: Per-service balance and enforcement-selection diagnosis for a user.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 11/06/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementUserServiceBalance resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Per-service balance and enforcement-selection diagnosis for a user. Contained by [costManagementUserBalance](costmanagementuserbalance.md) through its `serviceBalances` relationship and keyed by `serviceId`; a user holds at most one balance per service.

Use `isConsumptionAllowed` and `accessDecisionReason` to understand the access decision, and `spendingPolicyId` to identify the selected [spending policy](spendingpolicy.md). For historical consumption by service rather than a user's current balance, see [Usage reports](../usage-reports-overview.md).

## Methods

| Method                                                              | Return type                                                            | Description                                                        |
|:--------------------------------------------------------------------|:-----------------------------------------------------------------------|:------------------------------------------------------------------|
| [List](../costmanagementuserservicebalance-list.md)                 | [costManagementUserServiceBalance](costmanagementuserservicebalance.md) collection | Get a list of costManagementUserServiceBalance objects. |
| [Get](../costmanagementuserservicebalance-get.md)                   | [costManagementUserServiceBalance](costmanagementuserservicebalance.md) | Retrieve the properties of a costManagementUserServiceBalance object. |

## Properties

| Property                    | Type                                                                        | Description                                                                                                       |
|:----------------------------|:----------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------|
| `accessDecisionReason`      | [accessDecisionReason](#accessdecisionreason-enumeration)                   | The reason for the access decision.                                                                              |
| `configuredPerUserLimit`    | [costManagementQuantity](costmanagementquantity.md)                         | The selected policy's per-user limit for the current UTC month; `unlimitedCostManagementQuantity` when no per-user cap. |
| `configuredPeriodLimit`     | [costManagementQuantity](costmanagementquantity.md)                         | The selected policy's consumption limit for the current UTC month.                                               |
| `consumedQuantity`          | Double                                                                      | Measured consumption for the selected service context, month-to-date in UTC.                                    |
| `dataStatus`                | [costManagementDataStatus](costmanagementdatastatus.md)                     | Freshness of the source data behind this row.                                                                   |
| `effectiveCapacityQuantity` | [costManagementQuantity](costmanagementquantity.md)                         | Capacity available from the selected policy; `unlimitedCostManagementQuantity` when no cap.                      |
| `isConsumptionAllowed`      | Boolean                                                                     | Whether the user can currently consume the service. A false value can mean missing entitlement or an exhausted limit; inspect `accessDecisionReason`. Supports `$filter` (`eq`). |
| `remainingQuantity`         | [costManagementQuantity](costmanagementquantity.md)                         | Remaining quantity under the selected policy for the current period; `unlimitedCostManagementQuantity` when no cap. |
| `serviceId`                 | String                                                                      | The service identifier. Key, read-only. Case-sensitive. Supports `$filter` (`eq`, `in`) and `$orderby` when listing one user's service balances. |
| `spendingPolicyId`          | String                                                                      | Identifier of the spending policy selected for this service. Always present for a balance row. Read-only.       |
| `unit`                      | [costManagementUnit](costmanagementquantity.md#costmanagementunit-enumeration) | The unit for `consumedQuantity`.                                                                             |

### accessDecisionReason enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value                | Description                             |
|:---------------------|:----------------------------------------|
| `allowed`            | The user is allowed to consume.         |
| `notEntitled`        | The user isn't entitled to the service. |
| `limitExhausted`     | The applicable limit is exhausted.      |
| `unknownFutureValue` | Evolvable enumeration sentinel value.   |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementUserServiceBalance",
  "accessDecisionReason": "String",
  "configuredPerUserLimit": {
    "@odata.type": "microsoft.graph.costManagementQuantity"
  },
  "configuredPeriodLimit": {
    "@odata.type": "microsoft.graph.costManagementQuantity"
  },
  "consumedQuantity": "Double",
  "dataStatus": {
    "@odata.type": "microsoft.graph.costManagementDataStatus"
  },
  "effectiveCapacityQuantity": {
    "@odata.type": "microsoft.graph.costManagementQuantity"
  },
  "isConsumptionAllowed": "Boolean",
  "remainingQuantity": {
    "@odata.type": "microsoft.graph.costManagementQuantity"
  },
  "serviceId": "String",
  "spendingPolicyId": "String",
  "unit": "String"
}
```
