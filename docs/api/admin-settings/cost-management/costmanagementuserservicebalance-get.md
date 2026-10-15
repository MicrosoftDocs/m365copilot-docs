---
title: Get costManagementUserServiceBalance
description: Retrieve the properties of a costManagementUserServiceBalance object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Get costManagementUserServiceBalance

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Retrieve one service's balance row for one user, represented by a [costManagementUserServiceBalance](resources/costmanagementuserservicebalance.md) object.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions             | Higher privileged permissions |
|:---------------------------------------|:-----------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-UserData.Read.All  | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                           | Not supported.                |
| Application                            | Not supported.                           | Not supported.                |

## HTTP request

```http
GET /copilot/costManagement/userBalances/{userId}/serviceBalances/{serviceId}
```

## Optional query parameters

This method supports the `$select` [OData query parameter](/graph/query-parameters) to help customize the response.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [costManagementUserServiceBalance](resources/costmanagementuserservicebalance.md) object in the response body.

## Example

### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/userBalances/aa110000-0000-0000-0000-000000000000/serviceBalances/workIQ
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/userBalances('aa110000-0000-0000-0000-000000000000')/serviceBalances/$entity",
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
```
