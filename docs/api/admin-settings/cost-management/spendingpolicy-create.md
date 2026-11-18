---
title: Create spendingPolicy
description: Create a new spendingPolicy object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 11/17/2026
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

In the request body, supply a JSON representation of a [spendingPolicy](resources/spendingpolicy.md) object with a concrete `@odata.type`. Required properties are `displayName`, `periodLimit`, `perUserLimit`, and `serviceSettings`. You can optionally supply `billingMethods` and `billingInstrument`. The audience type is fixed at creation and can't be changed later; don't supply `status` or audit properties in the create payload.

For a selected-groups policy, you can omit `assignedGroups` or supply an empty collection to create a disabled policy with no audience, then add groups in subsequent calls with [Add assigned group](selectedgroupsspendingpolicy-post-assignedgroups.md). Supplying a nonempty `assignedGroups` collection at creation requires the additional permission described in [Permissions](#permissions).

### Billing instrument

For either policy type, you can supply a [billingInstrument](resources/costmanagementbillinginstrument.md) to specify the Azure target for pay-as-you-go resource provisioning. This object is optional in a create request. If you omit it, the request supplies no explicit Azure billing target. To specify a target, include all three coordinates in the following table.

| Property | Type | Description |
|:---------|:-----|:------------|
| `billingRegion` | String | Required in a supplied object. A supported billing-geography key, for example `UnitedStates`, not an arbitrary Azure region name. No default is selected. |
| `billingResourceGroup` | String | Required in a supplied object. The target Azure resource group. No default is selected. |
| `billingSubscriptionId` | String | Required in a supplied object. The target Azure subscription identifier. |

This create-time option differs from [updating an existing policy](spendingpolicy-update.md) from non-pay-as-you-go funding to a value that includes `payAsYouGo`. That `PATCH` request requires the complete billing target.

Empty or partial objects and null coordinates are invalid. An explicit null wrapper doesn't select defaults or clear an instrument. The target applies only when `billingMethods` includes `payAsYouGo`, including combined `prepaidCredits,payAsYouGo` funding. For other billing methods, the coordinates are ignored after schema validation.

The service generates the Power Platform account name and identity; don't pre-create an account to attach. Don't supply the computed `billingResourceId` or `provisioningStatus`. Otherwise-valid supplied computed values are ignored, not persisted; malformed or explicit-null values fail schema validation.

## Response

If successful, this method returns a `201 Created` response code and the created [spendingPolicy](resources/spendingpolicy.md) object in the response body. The response includes `Location` and `ETag` headers. New policies are created `disabled`.

The policy's `status` and `billingInstrument.provisioningStatus` describe separate lifecycles. The response omits `provisioningStatus` when unavailable or unrecorded and omits `billingResourceId` when unavailable. Neither omission indicates success. Use [Get spendingPolicy](spendingpolicy-get.md) to read subsequent resource provisioning state.

## Examples

### Example 1: Create a prepaid policy without a billing instrument

#### Request

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

#### Response

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

### Example 2: Create a pay-as-you-go policy with an Azure billing target

#### Request

The following example creates a selected-groups policy without an initial audience and supplies all three billing coordinates. Both policy types accept the same billing instrument object.

```http
POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies
Content-Type: application/json

{
  "@odata.type": "#microsoft.graph.selectedGroupsSpendingPolicy",
  "displayName": "Pilot billing policy",
  "periodLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 10000, "unit": "copilotCredit" },
  "perUserLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 500, "unit": "copilotCredit" },
  "billingMethods": "payAsYouGo",
  "billingInstrument": {
    "billingSubscriptionId": "11111111-2222-3333-4444-555555555555",
    "billingResourceGroup": "Finance",
    "billingRegion": "UnitedStates"
  },
  "serviceSettings": [
    { "serviceId": "cowork", "state": "enabled" }
  ]
}
```

#### Response

The following example shows a response after the service has recorded resource provisioning as `inProgress`. This example doesn't imply that provisioning has started whenever a create request returns. The response object shown here might be shortened for readability.

```http
HTTP/1.1 201 Created
Location: https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b
ETag: W/"1"
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/spendingPolicies/microsoft.graph.selectedGroupsSpendingPolicy/$entity",
  "@odata.type": "#microsoft.graph.selectedGroupsSpendingPolicy",
  "id": "3f9e2c1a-0000-0000-0000-00000000c21b",
  "displayName": "Pilot billing policy",
  "status": "disabled",
  "periodLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 10000, "unit": "copilotCredit" },
  "perUserLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 500, "unit": "copilotCredit" },
  "billingMethods": "payAsYouGo",
  "billingInstrument": {
    "billingSubscriptionId": "11111111-2222-3333-4444-555555555555",
    "billingResourceGroup": "Finance",
    "billingRegion": "UnitedStates",
    "provisioningStatus": "inProgress"
  }
}
```
