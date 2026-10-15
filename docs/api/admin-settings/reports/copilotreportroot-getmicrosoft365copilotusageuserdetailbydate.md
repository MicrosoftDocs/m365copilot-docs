---
title: "copilotReportRoot: getMicrosoft365CopilotUsageUserDetailByDate"
description: User-level Microsoft 365 Copilot usage detail for a single selected date. Copilot usage reports APIs are available as standard REST APIs under the Microsoft Graph namespace.
author: jasonjoh
ms.author: jessicamoore
ms.date: 10/09/2026
ms.localizationpriority: medium
ms.topic: reference
doc_type: apiPageType
---

# copilotReportRoot: getMicrosoft365CopilotUsageUserDetailByDate

<!-- markdownlint-disable MD024 -->

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Get user-level Microsoft 365 Copilot usage detail for all reported users on a single selected date.

For more information about report views and names, see [Microsoft 365 reports - Microsoft 365 Copilot usage](/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage). Copilot usage reports APIs are available as standard REST APIs under the Microsoft Graph namespace. For more information, see [Microsoft 365 Copilot APIs overview](../../../copilot-apis-overview.md).

[!INCLUDE [national-cloud-support](../../includes/global-only.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | Reports.Read.All             | Not available.                |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Reports.Read.All             | Not available.                |

[!INCLUDE [rbac-copilot-usage-details-apis](../../includes/rbac-copilot-usage-details-apis.md)]

## HTTP request

``` http
GET https://graph.microsoft.com/beta/copilot/reports/getMicrosoft365CopilotUsageUserDetailByDate(date={date})
```

## Function parameters

In the request URL, provide the following required query parameters with values.

| Parameter | Type | Description |
|:----------|:-----|:------------|
| `date`    | Date | Required. The date for which to return users' activity. The value must use `YYYY-MM-DD` format and be from seven days before the latest report refresh date through the refresh date, inclusive. The availability window is based on `reportRefreshDate`, not the current calendar date. For example, if the latest report refresh date is September 17, 2026, valid values are September 10, 2026 through September 17, 2026, inclusive. |

## Optional query parameters

This method does not support any [OData query parameters](/graph/query-parameters) to help customize the response.

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this function returns a `200 OK` response code and a JSON representation of the requested report in the response body. Each row in the report contains the following properties.

| Property                               | Type    | Description                                                                                 |
|:---------------------------------------|:--------|:--------------------------------------------------------------------------------------------|
| `allAppsCopilotActionCount`            | Int64   | Number of Copilot actions across all supported applications.                                |
| `businessChatWebPromptsCount`          | Int64   | Number of prompts submitted through Business Chat on the web.                                |
| `displayName`                          | String  | User display name or concealed identifier, depending on report settings.                    |
| `isActive`                             | Boolean | Whether the user was active in any reported Copilot experience.                             |
| `isActiveInBusinessChatWeb`            | Boolean | Activity in Business Chat on the web.                                                        |
| `isActiveInEdge`                       | Boolean | Activity in Microsoft Edge.                                                                  |
| `isActiveInExcel`                      | Boolean | Activity in Microsoft Excel.                                                                 |
| `isActiveInLoop`                       | Boolean | Activity in Microsoft Loop.                                                                  |
| `isActiveInM365Chat`                   | Boolean | Activity in Microsoft 365 Chat.                                                              |
| `isActiveInM365CopilotChatCopilotApp`  | Boolean | Activity in Microsoft 365 Copilot Chat in the Microsoft 365 Copilot app.                     |
| `isActiveInOneNote`                    | Boolean | Activity in Microsoft OneNote.                                                               |
| `isActiveInOutlook`                    | Boolean | Activity in Microsoft Outlook.                                                               |
| `isActiveInPowerPoint`                 | Boolean | Activity in Microsoft PowerPoint.                                                            |
| `isActiveInTeams`                      | Boolean | Activity in Microsoft Teams.                                                                 |
| `isActiveInWord`                       | Boolean | Activity in Microsoft Word.                                                                  |
| `m365ChatQueriesSubmitted`             | Int64   | Number of queries submitted through Microsoft 365 Chat.                                      |
| `reportRefreshDate`                    | Date    | Date when the report data was refreshed.                                                    |
| `reportSelectedDate`                   | Date    | Date selected by the request.                                                                |
| `userPrincipalName`                    | String  | User principal name or concealed identifier, depending on report settings.                  |

## Example

### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/reports/getMicrosoft365CopilotUsageUserDetailByDate(date=2026-09-14)
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "reportRefreshDate": "2026-09-17",
      "reportSelectedDate": "2026-09-14",
      "userPrincipalName": "DC8C64D6EC3A3AA17481D7E5EB5B68A6",
      "displayName": "C65E8D8AFA0DAB9639EDFAAEA94AFE66",
      "allAppsCopilotActionCount": 10,
      "m365ChatQueriesSubmitted": 3,
      "businessChatWebPromptsCount": 7,
      "isActive": true,
      "isActiveInTeams": false,
      "isActiveInWord": false,
      "isActiveInPowerPoint": false,
      "isActiveInExcel": true,
      "isActiveInOutlook": false,
      "isActiveInOneNote": false,
      "isActiveInLoop": false,
      "isActiveInM365Chat": true,
      "isActiveInBusinessChatWeb": true,
      "isActiveInEdge": false,
      "isActiveInM365CopilotChatCopilotApp": false
    }
  ]
}
```
