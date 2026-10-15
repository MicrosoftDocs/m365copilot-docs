---
title: Create spendingPolicy
description: Create a new spendingPolicy object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Create spendingPolicy

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Create a new [spendingPolicy](resources/spendingpolicy.md) object. Because `spendingPolicy` is abstract, the request body must set a concrete `@odata.type`, either `#microsoft.graph.allUsersSpendingPolicy` or `#microsoft.graph.selectedGroupsSpendingPolicy`.

A new policy is created `disabled`. For a group-scoped policy, follow the safe-create sequence: create the policy disabled, link its audience with [Add assigned group](selectedgroupsspendingpolicy-post-assignedgroups.md), and let the service enable it once its requirements are satisfied.

> [!NOTE]
> At runtime, creating a policy also requires the Billing Administrator or Global Administrator directory role.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions                | Higher privileged permissions |
|:---------------------------------------|:--------------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Policy.ReadWrite.All  | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                              | Not supported.                |
| Application                            | Not supported.                              | Not supported.                |

Creating a policy without an initial audience (`assignedGroups` omitted or empty) requires only `CopilotCostManagement-Policy.ReadWrite.All`. Supplying a nonempty `assignedGroups` collection at creation additionally requires `CopilotCostManagement-Assignment.ReadWrite.All`. These permission requirements are separate from the directory-role requirement noted earlier in this article.

## HTTP request

```http
POST /copilot/costManagement/spendingPolicies
```

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json`. Required.                                                                            |

## Request body

In the request body, supply a JSON representation of a [spendingPolicy](resources/spendingpolicy.md) object with a concrete `@odata.type`. Required properties are `displayName`, `periodLimit`, `perUserLimit`, and `serviceSettings`. You can optionally supply `billingMethods`. The audience type is fixed at creation and can't be changed later; don't supply `status` or audit properties in the create payload.

For a selected-groups policy, you can omit `assignedGroups` or supply an empty collection to create a disabled policy with no audience, then add groups in subsequent calls with [Add assigned group](selectedgroupsspendingpolicy-post-assignedgroups.md). Supplying a nonempty `assignedGroups` collection at creation requires the additional permission described in [Permissions](#permissions).

## Response

If successful, this method returns a `201 Created` response code and the created [spendingPolicy](resources/spendingpolicy.md) object in the response body. The response includes `Location` and `ETag` headers. New policies are created `disabled`.

## Example

### Request

The following example shows a request.

```http
POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies
Content-Type: application/json

{
  "@odata.type": "#microsoft.graph.selectedGroupsSpendingPolicy",
  "displayName": "Pilot teams monthly cap",
  "periodLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 10000, "unit": "copilotCredit" },
  "perUserLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 500, "unit": "copilotCredit" },
  "billingMethods": "prepaidCredits",
  "serviceSettings": [
    { "serviceId": "cowork", "state": "enabled" },
    { "serviceId": "workIQ", "state": "enabled" }
  ]
}
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 201 Created
Location: https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b
ETag: W/"1"
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/spendingPolicies/microsoft.graph.selectedGroupsSpendingPolicy/$entity",
  "@odata.type": "#microsoft.graph.selectedGroupsSpendingPolicy",
  "id": "3f9e2c1a-0000-0000-0000-00000000c21b",
  "displayName": "Pilot teams monthly cap",
  "status": "disabled",
  "periodLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 10000, "unit": "copilotCredit" },
  "perUserLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 500, "unit": "copilotCredit" },
  "billingMethods": "prepaidCredits",
  "createdDateTime": "2026-07-27T09:15:00Z",
  "createdBy": { "user": { "id": "aa110000-0000-0000-0000-000000000000", "displayName": "Alex Admin" } },
  "lastModifiedDateTime": "2026-07-27T09:15:00Z",
  "lastModifiedBy": { "user": { "id": "aa110000-0000-0000-0000-000000000000", "displayName": "Alex Admin" } }
}
```
