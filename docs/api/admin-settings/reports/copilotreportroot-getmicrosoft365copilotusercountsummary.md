---
title: "copilotReportRoot: getMicrosoft365CopilotUserCountSummary"
description: Aggregated number of active and enabled users of Microsoft 365 Copilot for a specified time period. Copilot usage reports APIs are available as standard REST APIs under the Microsoft Graph namespace.
author: mestew
ms.author: mstewart
ms.date: 07/15/2026
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

For more information about report views and names, see [Microsoft 365 reports - Microsoft 365 Copilot usage](/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage). Copilot usage reports APIs are available as standard REST APIs under the Microsoft Graph namespace. For more information, see [Microsoft 365 Copilot APIs overview](../../../copilot-apis-overview.md).

[!INCLUDE [national-cloud-support](../../includes/global-only.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | Reports.Read.All             | Not available.                |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Reports.Read.All             | Not available.                |

[!INCLUDE [rbac-copilot-usage-apis](../../includes/rbac-copilot-usage-apis.md)]

## HTTP request

:::zone pivot="graph-v1"

``` http
GET https://graph.microsoft.com/v1.0/copilot/reports/getMicrosoft365CopilotUserCountSummary(period={period}, version={version})
```

:::zone-end

:::zone pivot="graph-preview"

``` http
GET https://graph.microsoft.com/beta/copilot/reports/getMicrosoft365CopilotUserCountSummary(period={period}, version={version})
```

:::zone-end

## Function parameters

In the request URL, provide the following query parameters with values.

| Parameter | Type   | Description |
|-----------|--------|-------------|
| `period`  | String | Required. The number of previous days over which to report aggregated usage. The supported values depend on the value of `version`. For `v1`, they are: `D7`, `D30`, `D90`, `D180`, `ALL`. For `v2`, they are `D7`, `D28`, `D90`, `D180`, `ALL`. The first four values follow the format `Dn` where `n` represents the number of previous days over which to aggregate data. `ALL` indicates to report usage for all supported periods (7, 30, 90, and 180 days for `v1`, 7, 28, 90, and 180 days for `v2`). |
| `version` | String | Optional. The requested report version. The supported value is `v2` (default). |

### Report versions

Version 1 reports contain the following information.

- Report Refresh Date
- Report Period
- Microsoft Teams Enabled Users
- Microsoft Teams Active Users
- Word Enabled Users
- Word Active Users
- PowerPoint Enabled Users
- PowerPoint Active Users
- Outlook Enabled Users
- Outlook Active Users
- Excel Enabled Users
- Excel Active Users
- OneNote Enabled Users
- OneNote Active Users
- Loop Enabled Users
- Loop Active Users
- Any App Enabled Users
- Any App Active Users
- Copilot Chat Enabled Users
- Copilot Chat Active Users

Version 2 reports contain all of the information from version 1, with the following additional information.

- Edge Enabled Users
- Edge Active Users
- Microsoft 365 Copilot Enabled Users
- Microsoft 365 Copilot Active Users
- Copilot Chat (work) Enabled Users
- Copilot Chat (work) Active Users
- Copilot Chat (web) Enabled Users
- Copilot Chat (web) Active Users
- Total prompts submitted
- Average prompts submitted

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

:::zone pivot="graph-v1"
If successful, this function returns a `200 OK` response code and a stream in the response body. The contents of the stream are a CSV file with the requested report.
:::zone-end

:::zone pivot="graph-preview"
If successful, this function returns a `200 OK` response code and a JSON representation of the requested report in the response body.
:::zone-end

## Examples

### Request

The following example shows a request.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/reports/getMicrosoft365CopilotUserCountSummary(period='D7')?$format=application/json
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/reports/getMicrosoft365CopilotUserCountSummary(period='D7')?$format=application/json
```

:::zone-end

### Response

The following example shows the response. The response object shown here might be shortened for readability.

:::zone pivot="graph-v1"

```http
HTTP/1.1 200 OK
Content-Type: application/octet-stream

Report Refresh Date,Report Period,Microsoft Teams Enabled Users,Microsoft Teams Active Users,Word Enabled Users,Word Active Users,PowerPoint Enabled Users,PowerPoint Active Users,Outlook Enabled Users,Outlook Active Users,Excel Enabled Users,Excel Active Users,OneNote Enabled Users,OneNote Active Users,Loop Enabled Users,Loop Active Users,Any App Enabled Users,Any App Active Users,Copilot Chat Enabled Users,Copilot Chat Active Users
2026-07-03,7,25,0,25,0,25,0,25,0,25,0,25,0,25,0,25,0,25,0
```

:::zone-end

:::zone pivot="graph-preview"

```http
HTTP/1.1 200 OK
Content-Type: application/json

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

:::zone-end
