---
title: Get spendingPolicy
description: Retrieve the properties and relationships of a spendingPolicy object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Get spendingPolicy

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Retrieve the properties and relationships of a [spendingPolicy](resources/spendingpolicy.md) object. The returned object is polymorphic and carries an `@odata.type` property that identifies its concrete type.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions          | Higher privileged permissions |
|:---------------------------------------|:--------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Policy.Read.All | CopilotCostManagement-Policy.ReadWrite.All                |
| Delegated (personal Microsoft account) | Not supported.                        | Not supported.                |
| Application                            | Not supported.                        | Not supported.                |

## HTTP request

```http
GET /copilot/costManagement/spendingPolicies/{id}
```

## Optional query parameters

This method supports the `$select` [OData query parameter](/graph/query-parameters) to help customize the response. The `serviceSettings`, `emailThresholdSettings`, and `assignedGroups` relationships aren't expandable on this method.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [spendingPolicy](resources/spendingpolicy.md) object in the response body.

## Example

### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/spendingPolicies/$entity",
  "@odata.type": "#microsoft.graph.selectedGroupsSpendingPolicy",
  "id": "3f9e2c1a-0000-0000-0000-00000000c21b",
  "displayName": "Pilot teams monthly cap",
  "status": "enabled",
  "periodLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 10000, "unit": "copilotCredit" },
  "perUserLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 500, "unit": "copilotCredit" },
  "billingMethods": "prepaidCredits",
  "createdDateTime": "2026-07-27T09:15:00Z",
  "createdBy": { "user": { "id": "aa110000-0000-0000-0000-000000000000", "displayName": "Alex Admin" } },
  "lastModifiedDateTime": "2026-07-27T09:19:00Z",
  "lastModifiedBy": { "user": { "id": "aa110000-0000-0000-0000-000000000000", "displayName": "Alex Admin" } }
}
```
