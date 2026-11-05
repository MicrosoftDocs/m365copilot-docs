---
title: "creditRequest: batchRecordDecisions"
description: Approve or reject multiple credit requests in a single call.
author: zach-martinez
ms.author: zamartin
ms.topic: reference
ms.date: 11/03/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# creditRequest: batchRecordDecisions

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Approve or reject multiple [credit requests](resources/creditrequest.md) in a single call. Items are processed independently with optimistic concurrency. The operation isn't atomic; a failed item doesn't roll back items that succeeded. Results are returned in the same order as the input items.

A same-state decision is a no-op that preserves the credit request's ETag and `decisionBy`. The item's `etag` is still checked, so a same-state decision with a stale ETag returns `preconditionFailed`. After a partial result, list the affected credit requests again to get their current ETags, and send a new payload that contains only the decisions you still want to apply. Resending the original payload normally returns `preconditionFailed` for items that already succeeded, because their ETags changed.

In addition to the permissions in the following section, the signed-in user must have one of the following Microsoft Entra roles: Global Administrator, Billing Administrator, or AI Administrator.

[!INCLUDE [national-cloud-support](../../includes/global-only.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions                   | Higher privileged permissions |
|:---------------------------------------|:-----------------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-CreditReq.ReadWrite.All  | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                                 | Not supported.                |
| Application                            | Not supported.                                 | Not supported.                |

## HTTP request

```http
POST /copilot/costManagement/creditRequests/batchRecordDecisions
```

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json`. Required.                                                                            |

This action doesn't use the `If-Match` header. Each item supplies its own ETag in the `etag` property.

## Request body

In the request body, supply a JSON representation of the following parameters.

| Parameter  | Type                                                                          | Description |
|:-----------|:------------------------------------------------------------------------------|:------------|
| `requests` | [creditRequestUpdateItem](resources/creditrequestupdateitem.md) collection    | The decisions to apply. Required. Must contain 1 to 100 items with unique `requestId` values. |

The whole request fails with a `400 Bad Request` response code and the `invalidRequest` error code, and no item is processed, if any of the following conditions apply:

- The `requests` collection is missing or empty.
- The `requests` collection contains more than 100 items.
- Two or more items have the same `requestId` value.
- The JSON is malformed or contains incompatible types, including `"state": null`.

## Response

If successful, this action returns a `200 OK` response code and a [creditRequestUpdateResponse](resources/creditrequestupdateresponse.md) object in the response body.

Per-item failures are returned in the `responses` collection rather than as HTTP errors. Each item reports one of the following statuses:

- `succeeded`: The decision was applied.
- `notFound`: The credit request doesn't exist or doesn't belong to the tenant.
- `failed`: The `requestId` is missing, the provider returned a failure, or an unexpected error occurred.
- `preconditionFailed`: The `etag` is missing, malformed, or stale.
- `invalidStateTransition`: The `state` is missing, or the requested transition isn't supported.

## Example

### Request

The following example shows a request. The first item approves a pending credit request. The second item uses a stale ETag. The third credit request was already rejected, so it can't be approved and returns `invalidStateTransition`.

```http
POST https://graph.microsoft.com/beta/copilot/costManagement/creditRequests/batchRecordDecisions
Content-Type: application/json

{
  "requests": [
    {
      "requestId": "9c424e3a-a83d-47ef-88ec-9192ec89f084",
      "state": "approved",
      "etag": "\"7f94e342\""
    },
    {
      "requestId": "14cf7865-b566-40b6-a14f-c8332137b641",
      "state": "rejected",
      "etag": "\"stale-etag\""
    },
    {
      "requestId": "66828cce-17e0-459e-af46-a18328b29d43",
      "state": "approved",
      "etag": "\"1e45b798\""
    }
  ]
}
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "succeededCount": 1,
  "failedCount": 2,
  "responses": [
    {
      "requestId": "9c424e3a-a83d-47ef-88ec-9192ec89f084",
      "status": "succeeded",
      "etag": "\"9ca5a72e\""
    },
    {
      "requestId": "14cf7865-b566-40b6-a14f-c8332137b641",
      "status": "preconditionFailed",
      "message": "The credit request changed after it was read. Read the request again and retry with the current ETag."
    },
    {
      "requestId": "66828cce-17e0-459e-af46-a18328b29d43",
      "status": "invalidStateTransition",
      "message": "The requested state transition isn't supported."
    }
  ]
}
```
