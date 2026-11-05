---
title: costManagementFundingUsageRecord resource type
description: One funding class's share of reported consumption for a calendar month.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementFundingUsageRecord resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

One funding class's share of reported consumption of Copilot Credits for a calendar month, including unbilled consumption. The row is keyed by the inherited `id`, whose value is the `fundingClass` member name. The quantities are consumption attributed to a funding class, not rated amounts. No currency, invoice, price, or settlement amounts are returned.

## Methods

| Method                                                      | Return type                                                                         | Description                                             |
|:------------------------------------------------------------|:------------------------------------------------------------------------------------|:--------------------------------------------------------|
| [List](../costmanagementfundingusagerecord-list.md)         | [costManagementFundingUsageRecord](costmanagementfundingusagerecord.md) collection  | Get a list of costManagementFundingUsageRecord objects. |

## Properties

| Property           | Type                                                                            | Description                                                                                                                                                                                  |
|:-------------------|:--------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `consumedQuantity` | Double                                                                          | Consumption attributed to this funding class during the requested month, including unbilled consumption where applicable. Supports `$orderby`. Read-only.                                     |
| `dataStatus`       | [costManagementUsageDataStatus](costmanagementusagedatastatus.md)               | Freshness of the snapshot this row was computed from; `latestSourceDateTime` is the snapshot sync time. It doesn't indicate whether the covered month has closed, only how recently the underlying snapshot was synced. Read-only. |
| `fundingClass`     | [costManagementFundingClass](#costmanagementfundingclass-enumeration)           | The funding class this row covers. Read-only.                                                                                                                                                |
| `id`               | String                                                                          | The row identifier. Equals the `fundingClass` member name, for example `prepaid`. Inherited from [entity](/graph/api/resources/entity). Read-only.                                            |
| `unit`             | [costManagementUnit](costmanagementquantity.md#costmanagementunit-enumeration)  | Unit that applies to `consumedQuantity`. Read-only.                                                                                                                                          |

### costManagementFundingClass enumeration

The funding classification of reported consumption, including unbilled consumption. This enumeration is distinct from [costManagementBillingMethod](costmanagementbillingmethodbalance.md#costmanagementbillingmethod-enumeration) and [costManagementBillingMethods](spendingpolicy.md#costmanagementbillingmethods-enumeration): it classifies reported consumption rather than describing how a policy or balance is funded.

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value                | Description                                                                     |
|:---------------------|:--------------------------------------------------------------------------------|
| `prepaid`            | Drawn from a prepaid Copilot Credits pool.                                      |
| `payAsYouGo`         | Billed on demand, with no prepaid pool.                                         |
| `overage`            | Consumed above the purchased pool. Unbilled; it isn't an invoiced excess charge. |
| `nonBillable`        | Consumed but not billed.                                                        |
| `unknownFutureValue` | Evolvable enumeration sentinel value.                                           |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementFundingUsageRecord",
  "consumedQuantity": "Double",
  "dataStatus": {
    "@odata.type": "microsoft.graph.costManagementUsageDataStatus"
  },
  "fundingClass": "String",
  "id": "String",
  "unit": "String"
}
```
