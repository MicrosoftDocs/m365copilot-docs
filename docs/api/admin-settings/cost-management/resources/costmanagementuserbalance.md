---
title: costManagementUserBalance resource type
description: A user's computed per-service consumption balance.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 11/06/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementUserBalance resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A user's computed per-service consumption balance. Addressed by the user's identifier; one balance resource exists per user. A user who never consumed anything still returns an empty `serviceBalances` collection rather than a `404` response.

Use this resource to diagnose whether a user can currently consume a service. Its [service balances](costmanagementuserservicebalance.md) identify the selected spending policy, remaining quantity, and access decision for each evaluated service. Read `selectionDataStatus` and `unevaluatedServices` on this parent resource to understand the freshness and completeness of the result.

To analyze consumption for a reporting period or inspect raw session activity, use [Usage reports](../usage-reports-overview.md) instead. A computed balance and a usage report answer different questions.

> [!NOTE]
> The parent collection `GET /copilot/costManagement/userBalances` is declared but isn't listable and returns a `404` response. Read a balance by the user's identifier instead.

## Methods

| Method                                                | Return type                                               | Description                                                        |
|:------------------------------------------------------|:----------------------------------------------------------|:------------------------------------------------------------------|
| [Get](../costmanagementuserbalance-get.md)            | [costManagementUserBalance](costmanagementuserbalance.md) | Retrieve the properties and relationships of a costManagementUserBalance object. |
| [List service balances](../costmanagementuserservicebalance-list.md) | [costManagementUserServiceBalance](costmanagementuserservicebalance.md) collection | Get this user's per-service consumption balances. |
| [Get service balance](../costmanagementuserservicebalance-get.md) | [costManagementUserServiceBalance](costmanagementuserservicebalance.md) | Get one service's balance and access decision for this user. |

## Properties

| Property               | Type                                                                                  | Description                                                                                                                                     |
|:-----------------------|:--------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                   | String                                                                                | The user's identifier (computed key). Read-only.                                                                                              |
| `selectionDataStatus`  | [selectionDataStatus](selectiondatastatus.md)                                         | When the balance was evaluated and the as-of times of each contributing source. Reported once for the user. Read-only.                        |
| `unevaluatedServices`  | [costManagementUnevaluatedService](costmanagementunevaluatedservice.md) collection    | Services whose balance couldn't be evaluated. A non-empty collection means a partial result; when no service can be evaluated, the request fails with a `503 sourceUnavailable` response. Read-only. |

## Relationships

| Relationship      | Type                                                                                 | Description                                                                                                       |
|:------------------|:-------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------|
| `serviceBalances` | [costManagementUserServiceBalance](costmanagementuserservicebalance.md) collection   | Per-service balance rows. Services listed in `unevaluatedServices` are omitted. Expand to inline the rows.        |

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementUserBalance",
  "id": "String",
  "selectionDataStatus": {
    "@odata.type": "microsoft.graph.selectionDataStatus"
  },
  "unevaluatedServices": [
    {
      "@odata.type": "microsoft.graph.costManagementUnevaluatedService"
    }
  ]
}
```
