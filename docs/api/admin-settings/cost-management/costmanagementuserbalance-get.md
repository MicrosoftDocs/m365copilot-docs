---
title: Get costManagementUserBalance
description: Retrieve the properties and relationships of a costManagementUserBalance object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Get costManagementUserBalance

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Retrieve a user's computed consumption balance, represented by a [costManagementUserBalance](resources/costmanagementuserbalance.md) object. Expand `serviceBalances` to inline the per-service rows. If the upstream evaluator fails for every service, the method returns a `503 sourceUnavailable` response.

> [!NOTE]
> The parent collection `GET /copilot/costManagement/userBalances` is declared but isn't listable and returns a `404` response. Read a balance by the user's identifier instead.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions             | Higher privileged permissions |
|:---------------------------------------|:-----------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-UserData.Read.All  | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                           | Not supported.                |
| Application                            | Not supported.                           | Not supported.                |

## HTTP request

```http
GET /copilot/costManagement/userBalances/{userId}
```

## Optional query parameters

This method supports the `$expand` (on `serviceBalances`) and `$select` [OData query parameters](/graph/query-parameters) to help customize the response.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [costManagementUserBalance](resources/costmanagementuserbalance.md) object in the response body.

## Example

### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/userBalances/aa110000-0000-0000-0000-000000000000?$expand=serviceBalances
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/userBalances(serviceBalances())/$entity",
  "id": "aa110000-0000-0000-0000-000000000000",
  "serviceBalances": [
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
  ],
  "unevaluatedServices": [],
  "selectionDataStatus": {
    "evaluatedDateTime": "2026-07-27T09:20:00Z",
    "policyConfigurationAsOfDateTime": "2026-07-27T09:18:00Z",
    "groupMembershipAsOfDateTime": "2026-07-27T08:45:00Z",
    "usageAsOfDateTime": "2026-07-27T09:15:00Z"
  }
}
```
