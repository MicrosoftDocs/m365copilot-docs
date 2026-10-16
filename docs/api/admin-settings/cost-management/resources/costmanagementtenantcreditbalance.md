---
title: costManagementTenantCreditBalance resource type
description: The tenant's Copilot credit balance snapshot.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementTenantCreditBalance resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

The tenant's Copilot credit balance snapshot, returned by the [getTenantCreditBalance](../costmanagementroot-gettenantcreditbalance.md) function.

## Properties

| Property                | Type                                                                                 | Description                                                                 |
|:------------------------|:-------------------------------------------------------------------------------------|:----------------------------------------------------------------------------|
| `billingMethodBalances` | [costManagementBillingMethodBalance](costmanagementbillingmethodbalance.md) collection | Credit balances, one per billing method. Each entry carries its own data status. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementTenantCreditBalance",
  "billingMethodBalances": [
    {
      "@odata.type": "microsoft.graph.costManagementBillingMethodBalance"
    }
  ]
}
```
