---
title: costManagementRoot resource type
description: The Copilot Cost Management administration root.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementRoot resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

The Copilot Cost Management administration root, contained by the `copilot` singleton at `/copilot/costManagement`. Reading the root itself isn't supported in this version; use the contained collections and the bound [getTenantCreditBalance](../costmanagementroot-gettenantcreditbalance.md) function.

## Methods

| Method                                                                          | Return type                                                                     | Description                                     |
|:--------------------------------------------------------------------------------|:--------------------------------------------------------------------------------|:------------------------------------------------|
| [getTenantCreditBalance](../costmanagementroot-gettenantcreditbalance.md)       | [costManagementTenantCreditBalance](costmanagementtenantcreditbalance.md)       | Get the tenant-wide credit balance snapshot.    |

## Properties

| Property | Type   | Description                  |
|:---------|:-------|:-----------------------------|
| `id`     | String | Inherited entity key. Read-only. |

## Relationships

| Relationship       | Type                                                           | Description                                                                       |
|:-------------------|:---------------------------------------------------------------|:----------------------------------------------------------------------------------|
| `spendingPolicies` | [spendingPolicy](spendingpolicy.md) collection                 | The spending policies that govern Copilot Credits consumption.                    |
| `userBalances`     | [costManagementUserBalance](costmanagementuserbalance.md) collection | Per-user consumption balances, addressed by the user's identifier.          |

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementRoot",
  "id": "String"
}
```
