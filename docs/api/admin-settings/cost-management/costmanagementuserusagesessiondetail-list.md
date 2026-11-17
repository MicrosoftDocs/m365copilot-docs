---
title: List costManagementUserUsageSessionDetails
description: Get a list of costManagementUserUsageSessionDetail objects.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# List costManagementUserUsageSessionDetails

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Get a list of [costManagementUserUsageSessionDetail](resources/costmanagementuserusagesessiondetail.md) objects that group one user's raw usage of Copilot Credits by native session identifier for a timestamp window. Activity without a session identifier might be omitted from the breakdown even when it contributes to the parent total, so the rows need not sum to the parent detail's `consumedQuantity`.

The collection is server-paged, with a default page size of 20 and a maximum of 100. Follow the `@odata.nextLink` property for subsequent pages rather than using `$skip`.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions             | Higher privileged permissions  |
|:---------------------------------------|:-----------------------------------------|:-------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-UserData.Read.All  | CopilotCostManagement.Read.All |
| Delegated (personal Microsoft account) | Not supported.                           | Not supported.                 |
| Application                            | Not supported.                           | Not supported.                 |

## HTTP request

```http
GET /copilot/costManagement/usageReports/userUsageDetails/{userId}/sessions?startDateTime={startDateTime}&endDateTime={endDateTime}
```

## Query parameters

In the request URL, provide the following required query parameters with values. Supply the same window that you use for the parent [costManagementUserUsageDetail](resources/costmanagementuserusagedetail.md). Currently, the window must meet the following limits; windows that don't are rejected, not clamped.

- `startDateTime` must be earlier than `endDateTime`, and `endDateTime` can't be later than the current time.
- The window can be at most 24 hours long.
- The window includes `startDateTime` and excludes `endDateTime`.
- The window can't cross a UTC calendar-month boundary. Because the end is exclusive, `endDateTime` can equal midnight UTC on the first day of the next month. For example, `2026-07-31T00:00:00Z` to `2026-08-01T00:00:00Z` is valid.

| Parameter       | Type           | Description                                                                                                                                                                                        |
|:----------------|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `endDateTime`   | DateTimeOffset | Required. The exclusive end of the usage window, as a UTC timestamp in ISO 8601 format with up to seven fractional digits. Must be later than `startDateTime` and not later than the current time. |
| `startDateTime` | DateTimeOffset | Required. The inclusive start of the usage window, as a UTC timestamp in ISO 8601 format with up to seven fractional digits.                                                                       |

## Optional query parameters

This method supports the `$select` and `$top` [OData query parameters](/graph/query-parameters) to help customize the response. `$filter`, `$orderby`, `$count`, and `$skip` aren't supported.

`$top` is an upper bound, not a guaranteed page size. If the service returns an `@odata.nextLink` property, follow that complete URL unchanged; don't construct an offset. The continuation keeps the original window, but it isn't a point-in-time snapshot.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a collection of [costManagementUserUsageSessionDetail](resources/costmanagementuserusagesessiondetail.md) objects in the response body.

If `startDateTime` or `endDateTime` is missing or malformed, if the window doesn't meet the limits in [Query parameters](#query-parameters) (`startDateTime` isn't earlier than `endDateTime`, `endDateTime` is later than the current time, the window is longer than 24 hours, or the window crosses a UTC calendar-month boundary), or if the continuation token is invalid or mismatched, the method returns a `400 Bad Request` response with the `unsupportedQuery` error code. An out-of-scope user returns a `404 Not Found` response. If the usage source fails, the method returns a `503 Service Unavailable` response with the `sourceUnavailable` error code.

## Example

### Request

The following example shows a request that returns at most one session row per page.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/userUsageDetails/11111111-1111-4111-8111-111111111111/sessions?startDateTime=2026-07-01T00:00:00Z&endDateTime=2026-07-02T00:00:00Z&$top=1
```

### Response

The following example shows the response. The response object shown here might be shortened for readability. The row `id` and the continuation token are illustrative and opaque. In this example, the source didn't report the first and last activity times.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/usageReports/userUsageDetails('11111111-1111-4111-8111-111111111111')/sessions",
  "value": [
    {
      "id": "opaque-example-row",
      "sourceSessionId": "22222222-2222-4222-8222-222222222222",
      "consumedQuantity": 3.5,
      "unit": "copilotCredit",
      "firstActivityDateTime": null,
      "lastActivityDateTime": null
    }
  ],
  "@odata.nextLink": "https://graph.microsoft.com/beta/copilot/costManagement/usageReports/userUsageDetails/11111111-1111-4111-8111-111111111111/sessions?startDateTime=2026-07-01T00:00:00Z&endDateTime=2026-07-02T00:00:00Z&$top=1&$skiptoken=opaque-example-token"
}
```
