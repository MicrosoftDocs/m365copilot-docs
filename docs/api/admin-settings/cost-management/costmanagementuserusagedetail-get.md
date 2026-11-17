---
title: Get costManagementUserUsageDetail
description: Retrieve the properties and relationships of a costManagementUserUsageDetail object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Get costManagementUserUsageDetail

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Retrieve one user's raw, billable-flagged usage of Copilot Credits over a timestamp window, represented by a [costManagementUserUsageDetail](resources/costmanagementuserusagedetail.md) object. Expand `services` or `sessions` to inline the user's raw usage by governed service or by session. To read the user's processed report for one completed UTC day instead, use [Get costManagementUserUsageRecord](costmanagementuserusagerecord-get.md).

> [!NOTE]
> The parent collection `GET /copilot/costManagement/usageReports/userUsageDetails` isn't listable and returns a `404` response. Read a detail by the user's identifier instead.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions             | Higher privileged permissions  |
|:---------------------------------------|:-----------------------------------------|:-------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-UserData.Read.All  | CopilotCostManagement.Read.All |
| Delegated (personal Microsoft account) | Not supported.                           | Not supported.                 |
| Application                            | Not supported.                           | Not supported.                 |

## HTTP request

```http
GET /copilot/costManagement/usageReports/userUsageDetails/{userId}?startDateTime={startDateTime}&endDateTime={endDateTime}
```

## Query parameters

In the request URL, provide the following required query parameters with values. Currently, the window must meet the following limits; windows that don't are rejected, not clamped.

- `startDateTime` must be earlier than `endDateTime`, and `endDateTime` can't be later than the current time.
- The window can be at most 24 hours long.
- The window includes `startDateTime` and excludes `endDateTime`.
- The window can't cross a UTC calendar-month boundary. Because the end is exclusive, `endDateTime` can equal midnight UTC on the first day of the next month. For example, `2026-07-31T00:00:00Z` to `2026-08-01T00:00:00Z` is valid.

| Parameter       | Type           | Description                                                                                                                                                                                        |
|:----------------|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `endDateTime`   | DateTimeOffset | Required. The exclusive end of the usage window, as a UTC timestamp in ISO 8601 format with up to seven fractional digits. Must be later than `startDateTime` and not later than the current time. |
| `startDateTime` | DateTimeOffset | Required. The inclusive start of the usage window, as a UTC timestamp in ISO 8601 format with up to seven fractional digits.                                                                       |

## Optional query parameters

This method supports the `$expand` (on `services` and `sessions`) and `$select` [OData query parameters](/graph/query-parameters) to help customize the response. `$filter`, `$orderby`, `$top`, and `$count` aren't supported.

Expanded `sessions` can include a `sessions@odata.nextLink` property. Follow it to get more session rows. When you need complete session paging, use [List costManagementUserUsageSessionDetails](costmanagementuserusagesessiondetail-list.md) directly.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [costManagementUserUsageDetail](resources/costmanagementuserusagedetail.md) object in the response body.

If `startDateTime` or `endDateTime` is missing or malformed, or if the window doesn't meet the limits in [Query parameters](#query-parameters) (`startDateTime` isn't earlier than `endDateTime`, `endDateTime` is later than the current time, the window is longer than 24 hours, or the window crosses a UTC calendar-month boundary), the method returns a `400 Bad Request` response with the `unsupportedQuery` error code. If no usage is represented for the user, the method returns a `404 Not Found` response with the `usageDataUnavailable` error code; an out-of-scope user also returns a `404` response. If the usage source fails, the method returns a `503 Service Unavailable` response with the `sourceUnavailable` error code.

## Example

### Request

The following example shows a request that reads a user's raw usage for July 1, 2026, and expands the per-service split.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/userUsageDetails/11111111-1111-4111-8111-111111111111?startDateTime=2026-07-01T00:00:00Z&endDateTime=2026-07-02T00:00:00Z&$expand=services
```

### Response

The following example shows the response. The response object shown here might be shortened for readability. In this example, the source reports no as-of timestamp for the window, so `dataStatus` is `null`.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/usageReports/userUsageDetails(services())/$entity",
  "userId": "11111111-1111-4111-8111-111111111111",
  "consumedQuantity": 12.5,
  "unit": "copilotCredit",
  "sessionCount": 2,
  "dataStatus": null,
  "services": [
    {
      "id": "cowork",
      "consumedQuantity": 12.5,
      "unit": "copilotCredit"
    }
  ]
}
```
