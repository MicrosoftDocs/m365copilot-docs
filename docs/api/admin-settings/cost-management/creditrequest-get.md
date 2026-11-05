---
title: Get creditRequest
description: Retrieve the properties of a creditRequest object.
author: zach-martinez
ms.author: zamartin
ms.topic: reference
ms.date: 11/03/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Get creditRequest

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Retrieve the properties of a [creditRequest](resources/creditrequest.md) object. The response includes the current ETag of the credit request, which you need to [update](creditrequest-update.md) it.

In addition to the permissions in the following section, the signed-in user must have one of the following Microsoft Entra roles: Billing Administrator, Global Administrator, AI Administrator, Global Reader, or AI Reader.

[!INCLUDE [national-cloud-support](../../includes/global-only.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions               | Higher privileged permissions                  |
|:---------------------------------------|:-------------------------------------------|:-----------------------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-CreditReq.Read.All   | CopilotCostManagement-CreditReq.ReadWrite.All  |
| Delegated (personal Microsoft account) | Not supported.                             | Not supported.                                 |
| Application                            | Not supported.                             | Not supported.                                 |

## HTTP request

```http
GET /copilot/costManagement/creditRequests/{id}
```

## Optional query parameters

This method supports the `$select` [OData query parameter](/graph/query-parameters) to help customize the response. `$select` accepts the following properties: `id`, `state`, `requestType`, `requestedBy`, `decisionBy`, `createdDateTime`, `lastModifiedDateTime`, `expirationDateTime`, and `serviceId`. Any other value returns a `400 Bad Request` response code.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [creditRequest](resources/creditrequest.md) object in the response body. The current ETag is returned in the `ETag` response header and as the `@odata.etag` annotation in the response body.

If the credit request doesn't exist, this method returns a `404 Not Found` response code with the `itemNotFound` error code.

## Example

### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/creditRequests/9c424e3a-a83d-47ef-88ec-9192ec89f084
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
ETag: "7f94e342"
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/creditRequests/$entity",
  "@odata.etag": "\"7f94e342\"",
  "id": "9c424e3a-a83d-47ef-88ec-9192ec89f084",
  "state": "pending",
  "requestType": "additionalCredits",
  "requestedBy": {
    "user": {
      "id": "6f7f4b9a-2880-4bf6-a47e-374172421dab"
    }
  },
  "decisionBy": null,
  "createdDateTime": "2026-08-14T16:10:00Z",
  "lastModifiedDateTime": "2026-08-14T16:10:00Z",
  "expirationDateTime": "2026-11-12T16:10:00Z",
  "serviceId": "workIQ"
}
```
