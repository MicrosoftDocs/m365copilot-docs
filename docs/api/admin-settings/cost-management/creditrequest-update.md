---
title: Update creditRequest
description: Update a creditRequest object.
author: zach-martinez
ms.author: zamartin
ms.topic: reference
ms.date: 11/03/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Update creditRequest

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Update a [creditRequest](resources/creditrequest.md) object. Use this method to approve or reject a single credit request. To decide multiple credit requests in one call, use [batchRecordDecisions](creditrequest-batchrecorddecisions.md).

The supported state transitions are `pending` to `approved` and `pending` to `rejected`. Requesting the current state is a no-op that returns `204 No Content` and preserves the ETag, `decisionBy`, `lastModifiedDateTime`, and `expirationDateTime`. The `If-Match` ETag is still checked for a no-op request, so a same-state request with a stale ETag returns `412 Precondition Failed`. A state change sets `decisionBy` and resets `expirationDateTime` to 90 days later.

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
PATCH /copilot/costManagement/creditRequests/{id}
```

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json`. Required.                                                                            |
| `If-Match`      | The strong ETag of the credit request from the latest read, for example, `"7f94e342"`. Weak (`W/`) ETags and `*` aren't supported. Required. |

## Request body

In the request body, supply a JSON object with the following property. Only `state` can be updated; all other properties are read-only.

| Property | Type                                                                                | Description                                          |
|:---------|:------------------------------------------------------------------------------------|:-----------------------------------------------------|
| `state`  | [creditRequestState](resources/creditrequest.md#creditrequeststate-enumeration)     | The target state. Use `approved` or `rejected`.      |

## Response

If successful, this method returns a `204 No Content` response code and an `ETag` header. It doesn't return anything in the response body. The `ETag` value is updated when the state changes; for a same-state no-op, it's unchanged.

This method can also return the following errors:

- `400 Bad Request` with the `invalidRequest` error code if the requested state transition isn't supported, or if the `If-Match` header is malformed, is a weak (`W/`) ETag, or is `*`.
- `404 Not Found` with the `itemNotFound` error code if the credit request doesn't exist.
- `412 Precondition Failed` with the `preconditionFailed` error code if the `If-Match` ETag is stale, including for a same-state request. Read the credit request again and retry with the current ETag.
- `428 Precondition Required` with the `preconditionRequired` error code if the `If-Match` header is missing.

## Example

### Request

The following example shows a request.

```http
PATCH https://graph.microsoft.com/beta/copilot/costManagement/creditRequests/9c424e3a-a83d-47ef-88ec-9192ec89f084
If-Match: "7f94e342"
Content-Type: application/json

{
  "state": "approved"
}
```

### Response

The following example shows the response.

```http
HTTP/1.1 204 No Content
ETag: "9ca5a72e"
```
