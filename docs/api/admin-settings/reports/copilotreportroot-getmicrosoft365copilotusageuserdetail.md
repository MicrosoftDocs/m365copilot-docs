---
title: "copilotReportRoot: getMicrosoft365CopilotUsageUserDetail"
description: Recent activity data for enabled users of Microsoft 365 Copilot apps
author: mestew
ms.author: mstewart
ms.date: 11/11/2025
ms.localizationpriority: medium
ms.topic: reference
doc_type: apiPageType
---

# copilotReportRoot: getMicrosoft365CopilotUsageUserDetail

<!-- cSpell:ignore mestew mstewart -->
<!-- markdownlint-disable MD024 -->

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Get the most recent activity data for enabled users of Microsoft 365 Copilot apps.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | Not supported.               | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Not supported.               | Not supported.                |

## HTTP request

``` http
GET https://graph.microsoft.com/beta/copilot/reports/getMicrosoft365CopilotUsageUserDetail
```

## Function parameters

In the request URL, provide the following query parameters with values.

| Parameter   | Type   | Description |
|-------------|--------|-------------|
| `period`    | String | The number of previous days over which to report aggregated usage. The supported values are: `D7`, `D30`, `D90`, `D180`, `ALL`. The first four values follow the format Dn where n represents the number of previous days over which to aggregate data. `ALL` indicates to report usage for 7, 30, 90, and 180 days. |

## Request headers

| Name            | Description                                                                                                |
|:----------------|:-----------------------------------------------------------------------------------------------------------|
| `Authorization` |`Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this function returns a `200 OK` response code and a Stream in the response body.

## Examples

### Request

The following example shows a request.

``` http
GET https://graph.microsoft.com/beta/copilot/reports/getMicrosoft365CopilotUsageUserDetail(period='D7')
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": "Stream"
}
```
