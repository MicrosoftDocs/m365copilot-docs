---
title: List aiInsights
description: Get the list of callAiInsight objects associated with an onlineMeeting.
author: Anjali-Patle
ms.author: anjalipatle
ms.date: 08/08/2025
ms.localizationpriority: medium
doc_type: apiPageType
ms.topic: reference
---

# List aiInsights

<!-- markdownlint-disable MD024 -->
<!-- cSpell:ignore Anjali-Patle anjalipatle -->

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]
:::zone-end

Get the list of [callAiInsight](resources/callaiinsight.md) objects associated with an [onlineMeeting](/graph/api/resources/onlinemeeting).

> [!NOTE]
>
> - This API has license requirements. For more information, see [License requirements for Teams meeting AI insights APIs](/graph/teams-licenses#license-requirements-for-teams-meeting-ai-insights-apis).
> - This API works differently in one or more national clouds. For more information, see [Microsoft Teams API implementation differences in national clouds](/graph/teamwork-national-cloud-differences).

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions    | Higher privileged permissions |
|:---------------------------------------|:--------------------------------|:------------------------------|
| Delegated (work or school account)     | OnlineMeetingAiInsight.Read.All | Not available.                |
| Delegated (personal Microsoft account) | Not supported.                  | Not supported.                |
| Application                            | Not supported.                  | Not supported.                |

To use application permissions for this API, tenant administrators must create an application access policy and grant it to a user. It authorizes the app configured in the policy to fetch online meetings or online meeting artifacts on behalf of that user (with the user ID specified in the request path). For more information, see [Allow applications to access online meetings on behalf of a user](/graph/cloud-communication-online-meeting-application-access-policy)

> [!NOTE]
> This API works only for a meeting that hasn't expired. For more information, see [Limits and specifications for Microsoft Teams](/microsoftteams/limits-specifications-teams#meeting-expiration).

## HTTP request

``` http
GET https://graph.microsoft.com/beta/copilot/users/{userId}/onlineMeetings/{onlineMeetingId}/aiInsights
```

## Optional query parameters

This method supports the `$select` and `$filter` [OData query parameters](/graph/query-parameters) to customize the response.

## Request headers

| Name            | Description                                                                                                |
|:----------------|:-----------------------------------------------------------------------------------------------------------|
| `Authorization` |`Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a collection of [callAiInsight](resources/callaiinsight.md) objects in the response body.

## Example

### Request

The following example shows a request.

``` http
GET https://graph.microsoft.com/beta/copilot/users/b935e675-5e67-48b9-8d45-249d5f88e964/onlineMeetings/YTc3OTFhNWQtNTgwZC00OGZjLWJhYjQtOTFmNTUzMmU4MzEyqMCoqMTk6bWVldGluZ19ZbU0zTnpJNU9USXRZakU0WlMwME1tUTNMVGt6TVRRdFkyWm1PRGRtWmpsaVptRTNAdGhyZWFkLnYy/aiInsights
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/users('b935e675-5e67-48b9-8d45-249d5f88e964')/onlineMeetings('YTc3O...')/aiInsights",
  "@odata.count": 1,
  "value": [
    {
      "id": "VjEj...",
      "callId": "af630fe0-04d3-4559-8cf9-91fe45e36296",
      "contentCorrelationId": "bc842d7a-2f6e-4b18-a1c7-73ef91d5c8e3",
      "createdDateTime": "2024-05-27T08:17:10.7261294Z",
      "endDateTime": "2024-05-27T08:17:10.7261294Z"
    }
  ]
}
```
