---
title: List creditRequests
description: Get a list of creditRequest objects.
author: zach-martinez
ms.author: zamartin
ms.topic: reference
ms.date: 11/03/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# List creditRequests

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Get a list of [creditRequest](resources/creditrequest.md) objects. The results exclude audit-only requests, including from `@odata.count`, and are always sorted newest first by `createdDateTime`.

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
GET /copilot/costManagement/creditRequests
```

## Optional query parameters

This method supports the `$select`, `$count`, `$top`, and `$filter` [OData query parameters](/graph/query-parameters) to help customize the response.

- `$select` accepts the following properties: `id`, `state`, `requestType`, `requestedBy`, `decisionBy`, `createdDateTime`, `lastModifiedDateTime`, `expirationDateTime`, and `serviceId`. Any other value returns a `400 Bad Request` response code.
- `$filter` supports only the `eq` operator on the properties in the following table. You can combine clauses with `and`, with at most one `state` clause and one `serviceId` clause, for example, `state eq 'pending' and serviceId eq 'workIQ'`.
- `$count=true` excludes audit-only requests from the count.
- `$top` accepts values from 1 to 200; the default page size is 50.

`$orderby` isn't supported because the order is fixed (newest first). `$expand`, `$skip`, `$search`, and delta queries aren't supported.

| Property    | Operators | Value                                                                                                                                         |
|:------------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| `serviceId` | `eq`      | A service identifier string literal, such as `'workIQ'` or `'cowork'`. Comparisons are case-insensitive.                                     |
| `state`     | `eq`      | A [creditRequestState](resources/creditrequest.md#creditrequeststate-enumeration) member as an unqualified string literal, for example `'pending'`. Comparisons are case-insensitive. The qualified form, such as `microsoft.graph.creditRequestState'pending'`, isn't supported and returns a `400 Bad Request` response code. |

If the service returns an `@odata.nextLink` property, follow that URL unchanged to get the next page.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a collection of [creditRequest](resources/creditrequest.md) objects in the response body. Each item includes an `@odata.etag` annotation that contains its current ETag.

If the list query fails, or if the count fails when `$count=true` is specified, this method returns a `503 Service Unavailable` response code with the `serviceNotAvailable` error code.

## Example

### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/creditRequests?$filter=state eq 'pending'&$select=id,state,requestType,requestedBy,createdDateTime,serviceId&$count=true&$top=50
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/creditRequests",
  "@odata.count": 2,
  "value": [
    {
      "@odata.etag": "\"7f94e342\"",
      "id": "9c424e3a-a83d-47ef-88ec-9192ec89f084",
      "state": "pending",
      "requestType": "additionalCredits",
      "requestedBy": {
        "user": {
          "id": "6f7f4b9a-2880-4bf6-a47e-374172421dab"
        }
      },
      "createdDateTime": "2026-08-14T16:10:00Z",
      "serviceId": "workIQ"
    },
    {
      "@odata.etag": "\"d8f36711\"",
      "id": "14cf7865-b566-40b6-a14f-c8332137b641",
      "state": "pending",
      "requestType": "firstTimeAccess",
      "requestedBy": {
        "user": {
          "id": "95c5d17d-27a5-4b42-bb91-85ed65e794b7"
        }
      },
      "createdDateTime": "2026-08-14T15:42:00Z",
      "serviceId": "cowork"
    }
  ]
}
```
