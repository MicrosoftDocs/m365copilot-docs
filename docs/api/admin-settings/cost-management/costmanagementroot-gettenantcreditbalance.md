---
title: "costManagementRoot: getTenantCreditBalance"
description: Gets the tenant-wide Copilot credit balance snapshot.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# costManagementRoot: getTenantCreditBalance

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Gets the tenant-wide Copilot credit balance snapshot, with one row per billing method.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions       | Higher privileged permissions |
|:---------------------------------------|:-----------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement.Read.All     | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                     | Not supported.                |
| Application                            | CopilotCostManagement.Read.All     | Not supported.                |

## HTTP request

```http
GET /copilot/costManagement/getTenantCreditBalance
```

## Optional query parameters

This method doesn't support any [OData query parameters](/graph/query-parameters) to help customize the response.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [costManagementTenantCreditBalance](resources/costmanagementtenantcreditbalance.md) object in the response body.

## Example

### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/getTenantCreditBalance
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#microsoft.graph.costManagementTenantCreditBalance",
  "billingMethodBalances": [
    {
      "billingMethod": "prepaidCredits",
      "purchasedQuantity": 100000,
      "consumedQuantity": 42150,
      "remainingQuantity": 57850,
      "unit": "copilotCredit",
      "dataStatus": {
        "lastModifiedDateTime": "2026-07-27T09:15:00Z"
      }
    }
  ]
}
```
