---
title: Update spendingPolicy
description: Update a spendingPolicy object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 11/13/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Update spendingPolicy

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Update a [spendingPolicy](resources/spendingpolicy.md) object. Use this method to change updatable properties, including `billingMethods`. When changing stored non-pay-as-you-go funding to include pay-as-you-go, supply a complete `billingInstrument`; no separate billing endpoint or action is used.

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

When `billingMethods` changes stored funding from non-pay-as-you-go to a value that includes `payAsYouGo`, including `prepaidCredits,payAsYouGo`, also supply a [billingInstrument](resources/costmanagementbillinginstrument.md) with all three writable coordinates: `billingSubscriptionId`, `billingResourceGroup`, and `billingRegion`. Use a supported billing-geography key such as `UnitedStates`, not an arbitrary Azure region name.

Unrelated policy updates can omit `billingInstrument`. A supplied object must be complete, even on `PATCH`; empty or partial objects and null coordinates are invalid. An explicit null wrapper doesn't clear the instrument or select defaults. If the resulting funding doesn't include `payAsYouGo`, the coordinates are ignored after schema validation.

This method doesn't define instrument-only updates or replacement of an already-pay-as-you-go instrument. Don't send the computed `billingResourceId` or `provisioningStatus` properties; otherwise-valid supplied computed values are ignored, while malformed or explicit-null values fail schema validation.

## Response

If successful, this method returns a `200 OK` response code and the updated [spendingPolicy](resources/spendingpolicy.md) object in the response body. The response includes an advanced `ETag` header.

## Example

### Request

The following example changes a prepaid-only policy to combined prepaid and pay-as-you-go funding. It supplies the complete Azure billing target; it isn't a replacement request for an already-pay-as-you-go instrument.

```http
PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b
If-Match: W/"6"
Content-Type: application/json

{
  "billingMethods": "prepaidCredits,payAsYouGo",
  "billingInstrument": {
    "billingSubscriptionId": "11111111-2222-3333-4444-555555555555",
    "billingResourceGroup": "Finance",
    "billingRegion": "UnitedStates"
  }
}
```

### Response

The following example shows a response after the service has recorded resource provisioning as `inProgress`. Accepting a request doesn't by itself establish this state. The policy's `status` is reported independently. The response object shown here might be shortened for readability.

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
  "billingInstrument": {
    "billingSubscriptionId": "11111111-2222-3333-4444-555555555555",
    "billingResourceGroup": "Finance",
    "billingRegion": "UnitedStates",
    "provisioningStatus": "inProgress"
  },
  "createdDateTime": "2026-07-27T09:15:00Z",
  "createdBy": { "user": { "id": "aa110000-0000-0000-0000-000000000000", "displayName": "Alex Admin" } },
  "lastModifiedDateTime": "2026-07-27T09:41:00Z",
  "lastModifiedBy": { "user": { "id": "aa110000-0000-0000-0000-000000000000", "displayName": "Alex Admin" } }
}
```

Read the instrument's subsequent resource provisioning state with [Get spendingPolicy](spendingpolicy-get.md). The response omits `provisioningStatus` when unavailable or unrecorded and omits `billingResourceId` when unavailable. Neither omission indicates success.
