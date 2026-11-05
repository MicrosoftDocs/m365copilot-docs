---
title: List costManagementFundingUsageRecords
description: Get a list of costManagementFundingUsageRecord objects.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# List costManagementFundingUsageRecords

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Get a list of [costManagementFundingUsageRecord](resources/costmanagementfundingusagerecord.md) objects that report the tenant's consumption of Copilot Credits for a calendar month, split by funding class, including unbilled consumption. The funding classes are a closed set, so the collection isn't paged. No currency, invoice, price, or settlement amounts are returned.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions             | Higher privileged permissions  |
|:---------------------------------------|:-----------------------------------------|:-------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Reports.Read.All   | CopilotCostManagement.Read.All |
| Delegated (personal Microsoft account) | Not supported.                           | Not supported.                 |
| Application                            | CopilotCostManagement-Reports.Read.All   | CopilotCostManagement.Read.All |

## HTTP request

```http
GET /copilot/costManagement/usageReports/fundingUsageRecords?month={month}
```

## Query parameters

In the request URL, provide the following required query parameter with a value. This report takes a calendar month rather than a date range, because the purchased pool resets at 00:00 UTC on the first day of each month. Date ranges are rejected. Validation doesn't enforce an oldest permitted `month`.

| Parameter | Type   | Description                                                   |
|:----------|:-------|:--------------------------------------------------------------|
| `month`   | String | Required. The UTC calendar month to report, in `YYYY-MM` format. |

## Optional query parameters

This method supports the `$count`, `$orderby` (on `consumedQuantity` only, `asc` or `desc`), and `$select` [OData query parameters](/graph/query-parameters) to help customize the response. `$filter`, `$top`, `$skip`, and `$search` aren't supported.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a collection of [costManagementFundingUsageRecord](resources/costmanagementfundingusagerecord.md) objects in the response body.

If `month` is missing or malformed, if the request supplies a date range, or if the request uses an unsupported query option, the method returns a `400 Bad Request` response with the `unsupportedQuery` error code. If the usage source fails, the method returns a `503 Service Unavailable` response with the `sourceUnavailable` error code; don't treat it as zero consumption.

## Example

### Request

The following example shows a request for July 2026.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/fundingUsageRecords?month=2026-07
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#Collection(microsoft.graph.costManagementFundingUsageRecord)",
  "value": [
    {
      "id": "prepaid",
      "fundingClass": "prepaid",
      "consumedQuantity": 900000.0,
      "unit": "copilotCredit",
      "dataStatus": {
        "latestSourceDateTime": "2026-08-01T04:00:00Z"
      }
    },
    {
      "id": "overage",
      "fundingClass": "overage",
      "consumedQuantity": 128450.0,
      "unit": "copilotCredit",
      "dataStatus": {
        "latestSourceDateTime": "2026-08-01T04:00:00Z"
      }
    },
    {
      "id": "nonBillable",
      "fundingClass": "nonBillable",
      "consumedQuantity": 3120.0,
      "unit": "copilotCredit",
      "dataStatus": {
        "latestSourceDateTime": "2026-08-01T04:00:00Z"
      }
    }
  ]
}
```
