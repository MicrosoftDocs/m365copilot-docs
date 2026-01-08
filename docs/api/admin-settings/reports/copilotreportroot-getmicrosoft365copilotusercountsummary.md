---
title: "copilotReportRoot: getMicrosoft365CopilotUserCountSummary"
description: Aggregated number of active and enabled users of Microsoft 365 Copilot for a specified time period. Copilot usage APIs are available as standard REST APIs under the Microsoft Graph namespace.
author: mestew
ms.author: mstewart
ms.date: 01/08/2026
ms.localizationpriority: medium
ms.topic: reference
doc_type: apiPageType
zone_pivot_groups: graph-api-versions
---

# copilotReportRoot: getMicrosoft365CopilotUserCountSummary

<!-- cSpell:ignore mestew mstewart -->
<!-- markdownlint-disable MD024 -->

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]
:::zone-end

Get the aggregated number of active and enabled users of Microsoft 365 Copilot for a specified time period.

For more information about report views and names, see [Microsoft 365 reports - Microsoft 365 Copilot usage](/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage). The Copilot usage APIs are available as standard REST APIs under the Microsoft Graph namespace. For more information, see [Microsoft 365 Copilot APIs overview](../../../../copilot-apis-overview.md).


## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | Reports.Read.All             | Not available.                |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Reports.Read.All             | Not available.                |

[!INCLUDE [rbac-copilot-usage-apis](../../includes/rbac-copilot-usage-apis.md)]

## HTTP request

:::zone pivot="graph-v1"

``` http
GET https://graph.microsoft.com/v1.0/copilot/reports/getMicrosoft365CopilotUserCountSummary
```

:::zone-end

:::zone pivot="graph-preview"

``` http
GET https://graph.microsoft.com/beta/copilot/reports/getMicrosoft365CopilotUserCountSummary
```

:::zone-end

## Function parameters

In the request URL, provide the following query parameters with values.

| Parameter | Type   | Description |
|-----------|--------|-------------|
| `period`  | String | The number of previous days over which to report aggregated usage. The supported values are: `D7`, `D30`, `D90`, `D180`, `ALL`. The first four values follow the format Dn where n represents the number of days over which to aggregate data. `ALL` indicates to report usage for 7, 30, 90, and 180 days. |

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this function returns a `200 OK` response code and a Stream in the response body.

## Examples

### Request

The following example shows a request.

:::zone pivot="graph-v1"

``` http
GET https://graph.microsoft.com/v1.0/copilot/reports/getMicrosoft365CopilotUserCountSummary(period='D7')?$format=application/json
```

:::zone-end

:::zone pivot="graph-preview"

``` http
GET https://graph.microsoft.com/beta/copilot/reports/getMicrosoft365CopilotUserCountSummary(period='D7')?$format=application/json
```

:::zone-end

### Response

The following example shows the response. The response object shown here might be shortened for readability.

``` json
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 537

{
  "value": [
    {
      "reportRefreshDate": "2025-08-20",
      "adoptionByProduct": [
        {
          "reportPeriod": 7,
          "anyAppEnabledUsers": 359229,
          "anyAppActiveUsers": 165115,
          "microsoftTeamsEnabledUsers": 359096,
          "microsoftTeamsActiveUsers": 123341,
          "wordEnabledUsers": 359096,
          "wordActiveUsers": 21459,
          "powerPointEnabledUsers": 359096,
          "powerPointActiveUsers": 8530,
          "outlookEnabledUsers": 359096,
          "outlookActiveUsers": 37270,
          "excelEnabledUsers": 359096,
          "excelActiveUsers": 6709,
          "oneNoteEnabledUsers": 359096,
          "oneNoteActiveUsers": 1660,
          "loopEnabledUsers": 359096,
          "loopActiveUsers": 1345,
          "copilotChatEnabledUsers": 359096,
          "copilotChatActiveUsers": 65480
        }
      ]
    }
  ]
}
```
