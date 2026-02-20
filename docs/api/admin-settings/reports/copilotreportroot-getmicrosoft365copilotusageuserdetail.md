---
title: "copilotReportRoot: getMicrosoft365CopilotUsageUserDetail"
description: Recent activity data for enabled users of Microsoft 365 Copilot apps. Copilot usage reports APIs are available as standard REST APIs under the Microsoft Graph namespace.
author: mestew
ms.author: mstewart
ms.date: 02/19/2026
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

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

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
GET https://graph.microsoft.com/v1.0/copilot/reports/getMicrosoft365CopilotUsageUserDetail
```

:::zone-end

:::zone pivot="graph-preview"

``` http
GET https://graph.microsoft.com/beta/copilot/reports/getMicrosoft365CopilotUsageUserDetail
```

:::zone-end

## Function parameters

In the request URL, provide the following query parameters with values.

| Parameter   | Type   | Description |
|-------------|--------|-------------|
| `period`    | String | The number of previous days over which to report aggregated usage. The supported values are: `D7`, `D30`, `D90`, `D180`, `ALL`. The first four values follow the format Dn where n represents the number of previous days over which to aggregate data. `ALL` indicates to report usage for 7, 30, 90, and 180 days. |

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this function returns a `200 OK` response code and a stream in the response body.

## Examples

### Request

The following example shows a request.

:::zone pivot="graph-v1"

``` http
GET https://graph.microsoft.com/v1.0/copilot/reports/getMicrosoft365CopilotUsageUserDetail(period='D7')?$format=application/json
```

:::zone-end

:::zone pivot="graph-preview"

``` http
GET https://graph.microsoft.com/beta/copilot/reports/getMicrosoft365CopilotUsageUserDetail(period='D7')?$format=application/json
```

:::zone-end

### Response

The following example shows the response. The response object shown here might be shortened for readability.

``` json
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 10747

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
