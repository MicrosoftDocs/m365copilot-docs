---
title: "copilotReportRoot: getMicrosoft365CopilotUsageUserDetail"
description: Recent activity data for enabled users of Microsoft 365 Copilot apps. Copilot usage reports APIs are available as standard REST APIs under the Microsoft Graph namespace.
author: mestew
ms.author: mstewart
ms.date: 07/30/2026
ms.localizationpriority: medium
ms.topic: reference
doc_type: apiPageType
zone_pivot_groups: graph-api-versions
---

# copilotReportRoot: getMicrosoft365CopilotUsageUserDetail

<!-- cSpell:ignore mestew mstewart -->
<!-- markdownlint-disable MD024 -->

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]
:::zone-end

Get the most recent usage data for users who are enabled for Microsoft 365 Copilot apps.

For more information about report views and names, see [Microsoft 365 reports - Microsoft 365 Copilot usage](/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage). Copilot usage reports APIs are available as standard REST APIs under the Microsoft Graph namespace. For more information, see [Microsoft 365 Copilot APIs overview](../../../copilot-apis-overview.md).

> [!NOTE]
> This API only returns usage data for users who have a Microsoft 365 Copilot license.
> Unlicensed Copilot Chat usage data isn't available through Microsoft Graph reports APIs.
> Instead, you can:
>
> - View unlicensed usage in the Microsoft 365 Admin Center Copilot Chat Usage report
> - Access audit data through Microsoft Purview Audit Log
> - Export programmatically using `Search-UnifiedAuditLog` (PowerShell) or the Office 365 Management Activity API

[!INCLUDE [national-cloud-support](../../includes/global-only.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | Reports.Read.All             | Not available.                |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Reports.Read.All             | Not available.                |

> [!IMPORTANT]
>
> For delegated permissions to allow apps to read service usage reports on behalf of a user, the tenant administrator must have assigned the user one of the following Microsoft Entra ID limited administrator roles:
>
> - Company Administrator
> - AI Administrator
> - Exchange Administrator
> - SharePoint Administrator
> - Lync Administrator
> - Teams Service Administrator
> - Teams Communications Administrator
> - Reports Reader
>
> For more information, see [Authorization for APIs to read Microsoft 365 usage reports](/graph/reportroot-authorization).

## HTTP request

:::zone pivot="graph-v1"

``` http
GET https://graph.microsoft.com/v1.0/copilot/reports/getMicrosoft365CopilotUsageUserDetail(period={period}, version={version})
```

:::zone-end

:::zone pivot="graph-preview"

``` http
GET https://graph.microsoft.com/beta/copilot/reports/getMicrosoft365CopilotUsageUserDetail(period={period}, version={version})
```

:::zone-end

## Function parameters

In the request URL, provide the following query parameters with values.

| Parameter | Type   | Description |
|-----------|--------|-------------|
| `period`  | String | Required. The number of previous days over which to report aggregated usage. The supported values depend on the value of `version`. For `v1`, they are: `D7`, `D30`, `D90`, `D180`, `ALL`. For `v2`, they are `D7`, `D28`, `D90`, `D180`, `ALL`. The first four values follow the format `Dn` where `n` represents the number of previous days over which to aggregate data. `ALL` indicates to report usage for all supported periods (7, 30, 90, and 180 days for `v1`, 7, 28, 90, and 180 days for `v2`). |
| `version` | String | Optional. The requested report version. The supported values are `v1` (default) and `v2`. |

### Report versions

Version 1 reports contain the following information.

- Report Refresh Date
- User Principal Name
- Display Name
- Last Activity Date
- Copilot Chat Last Activity Date
- Microsoft Teams Copilot Last Activity Date
- Word Copilot Last Activity Date
- Excel Copilot Last Activity Date
- PowerPoint Copilot Last Activity Date
- Outlook Copilot Last Activity Date
- OneNote Copilot Last Activity Date
- Loop Copilot Last Activity Date
- Report Period

Version 2 reports contain all of the information from version 1, with the following additional information.

- Prompts submitted for all apps
- Prompts submitted for Copilot Chat (work)
- Prompts submitted for Copilot Chat (web)
- Active Usage Days for all apps
- Copilot Chat (work) Last Activity Date
- Copilot Chat (web) Last Activity Date
- Microsoft 365 Copilot Last Activity Date
- Edge Last Activity Date
- Copilot Agent Last Activity Date

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
GET https://graph.microsoft.com/v1.0/copilot/reports/getMicrosoft365CopilotUsageUserDetail(period='D7')
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/reports/getMicrosoft365CopilotUsageUserDetail(period='D7')
```

:::zone-end

### Response

The following example shows the response. The response object shown here might be shortened for readability.

:::zone pivot="graph-v1"

```http
HTTP/1.1 200 OK
Content-Type: application/octet-stream

Report Refresh Date,User Principal Name,Display Name,Last Activity Date,Copilot Chat Last Activity Date,Microsoft Teams Copilot Last Activity Date,Word Copilot Last Activity Date,Excel Copilot Last Activity Date,PowerPoint Copilot Last Activity Date,Outlook Copilot Last Activity Date,OneNote Copilot Last Activity Date,Loop Copilot Last Activity Date,Report Period
2026-07-03,E58EEF6A6BBD3D0293CB306D24A42057,6A4630397AAA1A9C8EED362168DC88A0,,,,,,,,,,7
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
      "userPrincipalName": "DC8C64D6EC3A3AA17481D7E5EB5B68A6",
      "displayName": "C65E8D8AFA0DAB9639EDFAAEA94AFE66",
      "lastActivityDate": "2025-08-20",
      "copilotChatLastActivityDate": "2025-08-16",
      "microsoftTeamsCopilotLastActivityDate": "2025-08-20",
      "wordCopilotLastActivityDate": "2025-08-06",
      "excelCopilotLastActivityDate": "",
      "powerPointCopilotLastActivityDate": "2025-03-26",
      "outlookCopilotLastActivityDate": "",
      "oneNoteCopilotLastActivityDate": "",
      "loopCopilotLastActivityDate": "",
      "copilotActivityUserDetailsByPeriod": [
        {
          "reportPeriod": 7
        }
      ]
    }
  ]
}
```

:::zone-end
