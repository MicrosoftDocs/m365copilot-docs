---
title: costManagementUserBalance resource type
description: A user's computed per-service consumption balance.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementUserBalance resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A user's computed per-service consumption balance. Addressed by the user's identifier; one balance resource exists per user. A user who never consumed anything still returns an empty `serviceBalances` collection rather than a `404` response.

> [!NOTE]
> The parent collection `GET /copilot/costManagement/userBalances` is declared but isn't listable and returns a `404` response. Read a balance by the user's identifier instead.

## Methods

| Method                                                | Return type                                               | Description                                                        |
|:------------------------------------------------------|:----------------------------------------------------------|:------------------------------------------------------------------|
| [Get](../costmanagementuserbalance-get.md)            | [costManagementUserBalance](costmanagementuserbalance.md) | Retrieve the properties and relationships of a costManagementUserBalance object. |

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
