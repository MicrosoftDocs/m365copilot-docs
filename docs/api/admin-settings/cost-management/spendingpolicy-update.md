---
title: Update spendingPolicy
description: Update a spendingPolicy object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Update spendingPolicy

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Update a [spendingPolicy](resources/spendingpolicy.md) object. Use this method to change updatable properties, including `billingMethods`; no separate action is needed to re-point funding.

Don't supply the server-managed properties `status`, `createdBy`, `createdDateTime`, `lastModifiedBy`, or `lastModifiedDateTime` in the request body.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions                | Higher privileged permissions |
|:---------------------------------------|:--------------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Policy.ReadWrite.All  | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                              | Not supported.                |
| Application                            | Not supported.                              | Not supported.                |

## HTTP request

```http
PATCH /copilot/costManagement/spendingPolicies/{id}
```

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json`. Required.                                                                            |
| `If-Match`      | The ETag of the spending policy. Required.                                                               |

## Request body

In the request body, supply only the values for the properties to update. The following properties can be updated: `displayName`, `periodLimit`, `perUserLimit`, and `billingMethods`.

## Response

If successful, this method returns a `200 OK` response code and the updated [spendingPolicy](resources/spendingpolicy.md) object in the response body. The response includes an advanced `ETag` header.

## Example

### Request

The following example shows a request.

```http
PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b
If-Match: W/"6"
Content-Type: application/json

{
  "billingMethods": "prepaidCredits,payAsYouGo"
}
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
ETag: W/"7"
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/spendingPolicies/microsoft.graph.selectedGroupsSpendingPolicy/$entity",
  "@odata.type": "#microsoft.graph.selectedGroupsSpendingPolicy",
  "id": "3f9e2c1a-0000-0000-0000-00000000c21b",
  "displayName": "Pilot teams monthly cap",
  "status": "enabled",
  "periodLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 10000, "unit": "copilotCredit" },
  "perUserLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 500, "unit": "copilotCredit" },
  "billingMethods": "prepaidCredits,payAsYouGo",
  "createdDateTime": "2026-07-27T09:15:00Z",
  "createdBy": { "user": { "id": "aa110000-0000-0000-0000-000000000000", "displayName": "Alex Admin" } },
  "lastModifiedDateTime": "2026-07-27T09:41:00Z",
  "lastModifiedBy": { "user": { "id": "aa110000-0000-0000-0000-000000000000", "displayName": "Alex Admin" } }
}
```
