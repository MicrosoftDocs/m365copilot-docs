---
title: Get callAiInsight
description: Get a callAiInsight object associated with an onlineMeeting.
author: slava-tar
ms.author: vtarasov
ms.date: 11/26/2025
ms.localizationpriority: medium
doc_type: apiPageType
ms.topic: reference
zone_pivot_groups: graph-api-versions
---

# Get callAiInsight

<!-- markdownlint-disable MD024 -->
<!-- cSpell:ignore slava-tar vtarasov -->

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]
:::zone-end

Get a [callAiInsight](resources/callaiinsight.md) object associated with an [onlineMeeting](/graph/api/resources/onlinemeeting).

This API returns the metadata and content of the single set of AI insights associated with the online meeting.

> [!NOTE]
>
> - This API has license requirements. For more information, see [License requirements for Teams meeting AI insights APIs](/graph/teams-licenses#license-requirements-for-teams-meeting-ai-insights-apis).
> - This API works differently in one or more national clouds. For more information, see [Microsoft Teams API implementation differences in national clouds](/graph/teamwork-national-cloud-differences).

[!INCLUDE [national-cloud-support](../../../includes/global-only.md)]

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions    | Higher privileged permissions |
|:---------------------------------------|:--------------------------------|:------------------------------|
| Delegated (work or school account)     | OnlineMeetingAiInsight.Read.All | Not available.                |
| Delegated (personal Microsoft account) | Not supported.                  | Not supported.                |
| Application                            | OnlineMeetingAiInsight.Read.All | Not supported.                |

To use application permissions for this API, tenant administrators must create an application access policy and grant it to a user. It authorizes the app configured in the policy to fetch online meetings or online meeting artifacts on behalf of that user (with the user ID specified in the request path). For more information, see [Allow applications to access online meetings on behalf of a user](/graph/cloud-communication-online-meeting-application-access-policy).

> [!NOTE]
> This API only works for a meeting that hasn't expired. For more information, see [Limits and specifications for Microsoft Teams](/microsoftteams/limits-specifications-teams#meeting-expiration).

## HTTP request

Get a single set of AI insights for an online meeting.

:::zone pivot="graph-v1"

``` http
GET https://graph.microsoft.com/v1.0/copilot/users/{userId}/onlineMeetings/{onlineMeetingId}/aiInsights/{aiInsightId}
```

:::zone-end

:::zone pivot="graph-preview"

``` http
GET https://graph.microsoft.com/beta/copilot/users/{userId}/onlineMeetings/{onlineMeetingId}/aiInsights/{aiInsightId}
```

:::zone-end

## Optional query parameters

This method supports the `$select` [OData query parameter](/graph/query-parameters) to help customize the response.

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [callAiInsight](resources/callaiinsight.md) object in the response body.

## Examples

### Example: Get a call AI insight

The following example shows how to get a single set of AI insights for an online meeting.

#### Request

The following example shows a request. The IDs in the example have been shortened for readability.

:::zone pivot="graph-v1"

``` http
GET https://graph.microsoft.com/v1.0/copilot/users/b935e675-5e67-48b9-8d45-249d5f88e964/onlineMeetings/YTc3OT.../aiInsights/Z2HWbT...
```

:::zone-end

:::zone pivot="graph-preview"

``` http
GET https://graph.microsoft.com/beta/copilot/users/b935e675-5e67-48b9-8d45-249d5f88e964/onlineMeetings/YTc3OT.../aiInsights/Z2HWbT...
```

:::zone-end

#### Response

The following example shows the response. The response object shown here might be shortened for readability.

:::zone pivot="graph-v1"

``` http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#copilot/users('b935e675-5e67-48b9-8d45-249d5f88e964')/onlineMeetings('YTc3OT...')/aiInsights/$entity",
  "id": "Z2HWbT...",
  "callId": "af630fe0-04d3-4559-8cf9-91fe45e36296",
  "contentCorrelationId": "bc842d7a-2f6e-4b18-a1c7-73ef91d5c8e3",
  "createdDateTime": "2024-05-27T08:17:10.7261294Z",
  "endDateTime": "2024-05-27T08:32:10.7261294Z",
  "meetingNotes": [
    {
      "title": "Introducing Project Objectives and Key Stakeholders",
      "text": "The stakeholders present included representatives from each department involved in the project, ensuring alignment and clear communication channels from the start.",
      "subpoints": [
        {
          "title": "Discussion on action items",
          "text": "Action items were assigned to team members, and a follow-up meeting schedule was established."
        }
      ]
    }
  ],
  "actionItems": [
    {
      "title": "Finalize Project Timeline",
      "text": "Review and finalize the project timeline to ensure alignment with stakeholder expectations and resource availability.",
      "ownerDisplayName": "Bella Smith"
    },
    {
      "title": "Prepare Presentation Draft",
      "text": "Draft a presentation outlining project goals, objectives, and progress updates for review by the project stakeholders.",
      "ownerDisplayName": "Bella Smith"
    },
  ],
  "viewpoint": {
    "mentionEvents": [
      {
        "speaker": {
            "application": null,
            "device": null,
            "user": {
                "@odata.type": "#Microsoft.Teams.GraphSvc.teamworkUserIdentity",
                "id": "9a7608d3-53e4-4a92-804f-ef43f1e5f5b5",
                "displayName": "John Smith",
                "userIdentityType": "aadUser",
                "tenantId": "d1aeb56e-5a25-4d91-a4f6-0f5e6a50d887"
            }
        },
        "eventDateTime": "2024-05-21T09:00:00",
        "transcriptUtterance": "We need to get approval from Sarah Johnson before proceeding with the budget allocation."
      },
      {
        "speaker": {
            "application": null,
            "device": null,
            "user": {
                "@odata.type": "#Microsoft.Teams.GraphSvc.teamworkUserIdentity",
                "id": "6aeb9f22-c986-4835-9617-9e5932bc8250",
                "displayName": "Emily Davis",
                "userIdentityType": "aadUser",
                "tenantId": "d1aeb56e-5a25-4d91-a4f6-0f5e6a50d887"
            }
        },
        "eventDateTime": "2024-05-21T09:15:00",
        "transcriptUtterance": "Sarah Johnson suggested reaching out to potential vendors for the upcoming project."
      }
    ]
  }
}
```

:::zone-end

:::zone pivot="graph-preview"

``` http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/users('b935e675-5e67-48b9-8d45-249d5f88e964')/onlineMeetings('YTc3OT...')/aiInsights/$entity",
  "id": "Z2HWbT...",
  "callId": "af630fe0-04d3-4559-8cf9-91fe45e36296",
  "contentCorrelationId": "bc842d7a-2f6e-4b18-a1c7-73ef91d5c8e3",
  "createdDateTime": "2024-05-27T08:17:10.7261294Z",
  "endDateTime": "2024-05-27T08:32:10.7261294Z",
  "meetingNotes": [
    {
      "title": "Introducing Project Objectives and Key Stakeholders",
      "text": "The stakeholders present included representatives from each department involved in the project, ensuring alignment and clear communication channels from the start.",
      "subpoints": [
        {
          "title": "Discussion on action items",
          "text": "Action items were assigned to team members, and a follow-up meeting schedule was established."
        }
      ]
    }
  ],
  "actionItems": [
    {
      "title": "Finalize Project Timeline",
      "text": "Review and finalize the project timeline to ensure alignment with stakeholder expectations and resource availability.",
      "ownerDisplayName": "Bella Smith"
    },
    {
      "title": "Prepare Presentation Draft",
      "text": "Draft a presentation outlining project goals, objectives, and progress updates for review by the project stakeholders.",
      "ownerDisplayName": "Bella Smith"
    },
  ],
  "viewpoint": {
    "mentionEvents": [
      {
        "speaker": {
            "application": null,
            "device": null,
            "user": {
                "@odata.type": "#Microsoft.Teams.GraphSvc.teamworkUserIdentity",
                "id": "9a7608d3-53e4-4a92-804f-ef43f1e5f5b5",
                "displayName": "John Smith",
                "userIdentityType": "aadUser",
                "tenantId": "d1aeb56e-5a25-4d91-a4f6-0f5e6a50d887"
            }
        },
        "eventDateTime": "2024-05-21T09:00:00",
        "transcriptUtterance": "We need to get approval from Sarah Johnson before proceeding with the budget allocation."
      },
      {
        "speaker": {
            "application": null,
            "device": null,
            "user": {
                "@odata.type": "#Microsoft.Teams.GraphSvc.teamworkUserIdentity",
                "id": "6aeb9f22-c986-4835-9617-9e5932bc8250",
                "displayName": "Emily Davis",
                "userIdentityType": "aadUser",
                "tenantId": "d1aeb56e-5a25-4d91-a4f6-0f5e6a50d887"
            }
        },
        "eventDateTime": "2024-05-21T09:15:00",
        "transcriptUtterance": "Sarah Johnson suggested reaching out to potential vendors for the upcoming project."
      }
    ]
  }
}
```

:::zone-end
