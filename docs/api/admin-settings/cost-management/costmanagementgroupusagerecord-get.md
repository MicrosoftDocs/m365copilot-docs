---
title: Get costManagementGroupUsageRecord
description: Retrieve the properties and relationships of a costManagementGroupUsageRecord object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Get costManagementGroupUsageRecord

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Retrieve one security group's reported consumption of Copilot Credits for one completed UTC day, represented by a [costManagementGroupUsageRecord](resources/costmanagementgroupusagerecord.md) object.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions             | Higher privileged permissions  |
|:---------------------------------------|:-----------------------------------------|:-------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-UserData.Read.All  | CopilotCostManagement.Read.All |
| Delegated (personal Microsoft account) | Not supported.                           | Not supported.                 |
| Application                            | Not supported.                           | Not supported.                 |

## HTTP request

```http
GET /copilot/costManagement/usageReports/groupUsageRecords/{groupId}?startDate={startDate}&endDate={endDate}
```

## Query parameters

In the request URL, provide the following required query parameters with values. The range must select exactly one completed UTC day. Current-day, future, and multi-day ranges are rejected, not clamped. Validation doesn't enforce an oldest permitted `startDate`.

| Parameter   | Type | Description                                                                                                                                         |
|:------------|:-----|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| `endDate`   | Date | Required. The exclusive end of the reporting day, in `YYYY-MM-DD` format. Must equal `startDate` plus one day, and its UTC midnight must not be later than the current time. |
| `startDate` | Date | Required. The inclusive start of the reporting day, in `YYYY-MM-DD` format (UTC).                                                                   |

## Optional query parameters

This method supports the `$select` [OData query parameter](/graph/query-parameters) to help customize the response.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [costManagementGroupUsageRecord](resources/costmanagementgroupusagerecord.md) object in the response body.

If no usage is represented for the group on the requested day, the method returns a `404 Not Found` response with the `usageDataUnavailable` error code. This response isn't proof of zero consumption or of whether the group exists. An out-of-scope group also returns a `404` response. If `startDate` or `endDate` is missing or malformed, or if the range doesn't select exactly one completed UTC day (for example, a current-day, future, or multi-day range), the method returns a `400 Bad Request` response with the `unsupportedQuery` error code. If the usage source fails, the method returns a `503 Service Unavailable` response with the `sourceUnavailable` error code; don't treat it as zero consumption.

## Example

### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/groupUsageRecords/0c7a2f4e-5b1d-4e8a-9c33-2d6f1a8b4e10?startDate=2026-07-01&endDate=2026-07-02
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/usageReports/groupUsageRecords/$entity",
  "groupId": "0c7a2f4e-5b1d-4e8a-9c33-2d6f1a8b4e10",
  "consumedQuantity": 61240.0,
  "unit": "copilotCredit",
  "sessionCount": 1210
}
```
