---
title: costManagementBillingMethodBalance resource type
description: Credit balance for one billing method.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementBillingMethodBalance resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Credit balance for one billing method.

## Properties

| Property            | Type                                                                        | Description                                                                                                                   |
|:--------------------|:----------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| `billingMethod`     | [costManagementBillingMethod](#costmanagementbillingmethod-enumeration)      | The billing method this balance covers.                                                                                       |
| `consumedQuantity`  | Double                                                                      | Credits consumed.                                                                                                             |
| `dataStatus`        | [costManagementDataStatus](costmanagementdatastatus.md)                      | Last modification time for this row's source data.                                                                           |
| `purchasedQuantity` | Double                                                                      | Credits purchased. Omitted when there's no purchased pool, for example pay-as-you-go.                                        |
| `remainingQuantity` | Double                                                                      | Credits still available, as calculated by the service, not the difference between `purchasedQuantity` and `consumedQuantity`. Omitted when there's no finite pool. |
| `unit`              | [costManagementUnit](costmanagementquantity.md#costmanagementunit-enumeration) | Unit that applies to every quantity in this row.                                                                             |

### costManagementBillingMethod enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value                | Description                                                       |
|:---------------------|:------------------------------------------------------------------|
| `prepaidCredits`     | Prepaid Copilot Credits, purchased through the pre-purchase plan. |
| `payAsYouGo`         | Consumption billed on demand, with no prepaid pool.               |
| `notSpecified`       | The billing method isn't known or wasn't specified.               |
| `unknownFutureValue` | Evolvable enumeration sentinel value.                             |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementBillingMethodBalance",
  "billingMethod": "String",
  "consumedQuantity": "Double",
  "dataStatus": {
    "@odata.type": "microsoft.graph.costManagementDataStatus"
  },
  "purchasedQuantity": "Double",
  "remainingQuantity": "Double",
  "unit": "String"
}
```
