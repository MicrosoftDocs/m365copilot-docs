---
title: List costManagementUserServiceBalances
description: Get a list of costManagementUserServiceBalance objects.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# List costManagementUserServiceBalances

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Get a list of per-service balance rows for a user, represented by [costManagementUserServiceBalance](resources/costmanagementuserservicebalance.md) objects. Paging is continuation-based: follow the `@odata.nextLink` property for subsequent pages rather than using `$skip`.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions             | Higher privileged permissions |
|:---------------------------------------|:-----------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-UserData.Read.All  | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                           | Not supported.                |
| Application                            | Not supported.                           | Not supported.                |

## HTTP request

```http
GET /copilot/costManagement/userBalances/{userId}/serviceBalances
```

## Optional query parameters

This method supports `$select`, `$top`, `$count`, `$orderby` (on `serviceId`), and `$filter` on `serviceId` (`eq`, with the property on either side, or `in`, with the property on the left and a literal string collection on the right) and `isConsumptionAllowed` (`eq` only, with the property on either side). Clauses combine with `and` only; repeated clauses on the same property are intersected, and a contradictory combination is valid and returns no rows. `serviceId` comparisons are case-sensitive. `ne`, `or`, `not`, functions, range comparisons, `in` on `isConsumptionAllowed`, and `null` comparisons aren't supported. `$skip` and `$search` aren't supported. For example, use `$filter=isConsumptionAllowed eq false`. `$top` is an upper bound, not a guaranteed page size. If the service returns an `@odata.nextLink` property, follow that complete URL unchanged; don't assume a page size or construct an offset.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a collection of [costManagementUserServiceBalance](resources/costmanagementuserservicebalance.md) objects in the response body.

## Example

### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/userBalances/aa110000-0000-0000-0000-000000000000/serviceBalances?$filter=isConsumptionAllowed eq false
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/userBalances('aa110000-0000-0000-0000-000000000000')/serviceBalances",
  "value": [
    {
      "serviceId": "workIQ",
      "spendingPolicyId": "3f9e2c1a-0000-0000-0000-00000000c21b",
      "configuredPeriodLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 10000, "unit": "copilotCredit" },
      "configuredPerUserLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 500, "unit": "copilotCredit" },
      "effectiveCapacityQuantity": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 0, "unit": "copilotCredit" },
      "consumedQuantity": 180,
      "remainingQuantity": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 0, "unit": "copilotCredit" },
      "unit": "copilotCredit",
      "isConsumptionAllowed": false,
      "accessDecisionReason": "limitExhausted",
      "dataStatus": {
        "lastModifiedDateTime": "2026-07-27T09:15:00Z"
      }
    }
  ]
}
```
