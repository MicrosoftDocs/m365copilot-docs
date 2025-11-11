---
title: "copilotReportRoot: getMicrosoft365CopilotUserCountSummary"
description: Aggregated number of active and enabled users of Microsoft 365 Copilot for a specified time period
author: mestew
ms.date: 11/11/2025
ms.localizationpriority: medium
ms.subservice: microsoft-365-copilot
doc_type: apiPageType
---

# copilotReportRoot: getMicrosoft365CopilotUserCountSummary

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

Get the aggregated number of active and enabled users of Microsoft 365 Copilot for a specified time period.



## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

<!-- {
  "blockType": "permissions",
  "name": "copilotreportroot-getmicrosoft365copilotusercountsummary-permissions"
}
-->
[!INCLUDE [permissions-table](../includes/permissions/copilotreportroot-getmicrosoft365copilotusercountsummary-permissions.md)]

## HTTP request

<!-- {
  "blockType": "ignored"
}
-->
``` http
GET /copilotRoot/reports/getMicrosoft365CopilotUserCountSummary
```

## Function parameters
In the request URL, provide the following query parameters with values.

|Parameter|Type|Description|
|:---|:---|:---|
|period|String|The number of previous days over which to report aggregated usage. The supported values are: `D7`, `D30`, `D90`, `D180`, `ALL`. The first four values follow the format Dn where n represents the number of days over which to aggregate data. `ALL` indicates to report usage for 7, 30, 90, and 180 days.|


## Request headers

|Name|Description|
|:---|:---|
|Authorization|Bearer {token}. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts).|

## Request body

Don't supply a request body for this method.

## Response

If successful, this function returns a `200 OK` response code and a Stream in the response body.

## Examples

### Request

The following example shows a request.
<!-- {
  "blockType": "request",
  "name": "copilotreportrootthis.getmicrosoft365copilotusercountsummary"
}
-->
``` http
GET https://graph.microsoft.com/beta/copilotRoot/reports/getMicrosoft365CopilotUserCountSummary(period='D7')
```


### Response

The following example shows the response.
>**Note:** The response object shown here might be shortened for readability.
<!-- {
  "blockType": "response",
  "truncated": true,
  "@odata.type": "Edm.Stream"
}
-->
``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": "Stream"
}
```

