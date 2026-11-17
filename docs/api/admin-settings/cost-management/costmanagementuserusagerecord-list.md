---
title: List costManagementUserUsageRecords
description: Get a list of costManagementUserUsageRecord objects.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# List costManagementUserUsageRecords

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Get a list of [costManagementUserUsageRecord](resources/costmanagementuserusagerecord.md) objects that report each user's consumption of Copilot Credits for one completed UTC day, ranked by consumption. Paging is continuation-based: follow the `@odata.nextLink` property for subsequent pages rather than using `$skip`.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions             | Higher privileged permissions  |
|:---------------------------------------|:-----------------------------------------|:-------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-UserData.Read.All  | CopilotCostManagement.Read.All |
| Delegated (personal Microsoft account) | Not supported.                           | Not supported.                 |
| Application                            | Not supported.                           | Not supported.                 |

## HTTP request

```http
GET /copilot/costManagement/usageReports/userUsageRecords?startDate={startDate}&endDate={endDate}
```

## Query parameters

In the request URL, provide the following required query parameters with values. The range must select exactly one completed UTC day. Current-day, future, and multi-day ranges are rejected, not clamped. Validation doesn't enforce an oldest permitted `startDate`.

| Parameter   | Type | Description                                                                                                                                         |
|:------------|:-----|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| `endDate`   | Date | Required. The exclusive end of the reporting day, in `YYYY-MM-DD` format. Must equal `startDate` plus one day, and its UTC midnight must not be later than the current time. |
| `startDate` | Date | Required. The inclusive start of the reporting day, in `YYYY-MM-DD` format (UTC).                                                                   |

## Optional query parameters

This method supports the `$count`, `$filter` (on `userId`, which supports only the `eq` operator), `$orderby` (on `consumedQuantity` only, `asc` or `desc`), `$select`, and `$top` [OData query parameters](/graph/query-parameters) to help customize the response. Ties in `consumedQuantity` are broken internally; ordering on `userId` isn't supported. `$skip` and `$search` aren't supported.

`$top` accepts an integer from 1 through 100, and the default is 10. Values outside that range are rejected with a `400 Bad Request` response, not capped. `$top` is an upper bound, not a guaranteed page size. If the service returns an `@odata.nextLink` property, follow that complete URL unchanged; don't construct an offset. The continuation keeps the original date range, filter, and order, but it isn't a point-in-time snapshot. Later pages read current data, so rows can repeat or be missed between pages.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a collection of [costManagementUserUsageRecord](resources/costmanagementuserusagerecord.md) objects in the response body.

If `startDate` or `endDate` is missing, malformed, or doesn't select exactly one completed UTC day, or if the request uses an unsupported query option, a `$top` value outside 1 through 100, or a mismatched continuation token, the method returns a `400 Bad Request` response with the `unsupportedQuery` error code. If the usage source fails, the method returns a `503 Service Unavailable` response with the `sourceUnavailable` error code; don't treat it as zero consumption.

## Example

### Request

The following example shows a request that ranks the two highest-consuming users for July 1, 2026, and includes the total count.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/userUsageRecords?startDate=2026-07-01&endDate=2026-07-02&$orderby=consumedQuantity desc&$top=2&$count=true
```

### Response

The following example shows the response. The response object shown here might be shortened for readability. The continuation token is illustrative and opaque.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#Collection(microsoft.graph.costManagementUserUsageRecord)",
  "@odata.count": 4821,
  "value": [
    {
      "userId": "6f9b1c3e-2a44-4d1f-9a01-77c0b1f5e2aa",
      "consumedQuantity": 5120.0,
      "unit": "copilotCredit",
      "sessionCount": 80
    },
    {
      "userId": "b2d47f10-8e55-49c2-91ab-0c3e5d7a6f11",
      "consumedQuantity": 4880.5,
      "unit": "copilotCredit",
      "sessionCount": 75
    }
  ],
  "@odata.nextLink": "https://graph.microsoft.com/beta/copilot/costManagement/usageReports/userUsageRecords?startDate=2026-07-01&endDate=2026-07-02&$orderby=consumedQuantity%20desc&$top=2&$skiptoken=opaque-example-token"
}
```
