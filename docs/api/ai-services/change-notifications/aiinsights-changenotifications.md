---
title: Get change notifications for Copilot AI Insights using Microsoft Graph
description: Learn how to get change notifications for generated AI Insights using Microsoft Graph.
author: slava-tar
ms.author: vtarasov
ms.localizationpriority: high
ms.date: 01/05/2026
ms.topic: reference
doc_type: conceptualPageType
---

# Get change notifications for Copilot AI Insights using Microsoft Graph

<!-- markdownlint-disable MD024 -->
<!-- cSpell:ignore edle -->

Change notifications enable you to subscribe to Copilot [AI Insights](../meeting-insights/callaiinsight-get.md). You can receive notifications whenever an AI-generated summary is available for a recorded meeting. This eliminates the need to continuously poll the AI insights API and wait for the summary to be ready.

> [!NOTE]
> If you request a subscription `expirationDateTime` that is more than one hour in the future, you must subscribe to lifecycle notifications by including a `lifecycleNotificationUrl` property in your subscription request; otherwise, your subscription request fails with the following error message: `lifecycleNotificationUrl is a required property for subscription creation on this resource when the expirationDateTime value is set to greater than 1 hour`.

## Subscribe to Copilot AI Insights for a particular user

To get notifications for Copilot AI Insights of a meeting that a particular user is part of, subscribe to `/copilot/users/{user-id}/onlineMeetings/getAllAiInsights`. 

### Permissions

| Permission type                        | Permissions (from least to most privileged)                          |
|:---------------------------------------|:---------------------------------------------------------------------|
| Delegated (work or school account)     | OnlineMeetingAiInsight.Read.All                                      |
| Delegated (personal Microsoft account) | Not supported.                                                       |
| Application                            | OnlineMeetingAiInsight.Read.All                                      |


### Licensing requirements

To access this change notification resource, the user in the resource path must have a [Microsoft 365 Copilot](https://www.microsoft.com/en-us/microsoft-365/copilot) license.

### Example: Subscribe to Copilot AI Insights for a particular user

```http
POST https://graph.microsoft.com/v1.0/subscriptions
Content-Type: application/json

{
  "changeType": "created",
  "notificationUrl": "https://webhook.azurewebsites.net/api/resourceNotifications",
  "resource": "/copilot/users/{user-id}/onlineMeetings/getAllAiInsights",
  "includeResourceData": false,
  "expirationDateTime": "2026-01-02T11:00:00.0000000Z",
  "clientState": "{secretClientState}"
}
```

## Subscribe to Copilot AI Insights for a particular meeting

To get notifications for Copilot AI Insights for a particular meeting, subscribe to `/copilot/users/{user-id}/onlineMeetings/{online-meeting-id}/aiInsights`. 

### Permissions

| Permission type                        | Permissions (from least to most privileged)                          |
|:---------------------------------------|:---------------------------------------------------------------------|
| Delegated (work or school account)     | OnlineMeetingAiInsight.Read.All                                      |
| Delegated (personal Microsoft account) | Not supported.                                                       |
| Application                            | OnlineMeetingAiInsight.Read.All                                      |

### Licensing requirements

To access this change notification resource, the user in the resource path must have a [Microsoft 365 Copilot](https://www.microsoft.com/en-us/microsoft-365/copilot) license.

### Example: Subscribe to Copilot AI Insights for a particular meeting

```http
POST https://graph.microsoft.com/v1.0/subscriptions
Content-Type: application/json

{
  "changeType": "created",
  "notificationUrl": "https://webhook.azurewebsites.net/api/resourceNotifications",
  "resource": "/copilot/users/{user-id}/onlineMeetings/{online-meeting-id}/aiInsights",
  "includeResourceData": false,
  "expirationDateTime": "2026-01-02T11:00:00.0000000Z",
  "clientState": "{secretClientState}"
}
```


### Notifications 

Notifications give you enough information to make GET calls to get the AI Insights content. 

The following payload describes the information sent for notifications. This payload indicates that a new AI summary has been generated. The IDs in the example have been shortened for readability.

```json
{
  "subscriptionId": "10493aa0...",
  "changeType": "created",
  "clientState": "<<--SpecifiedClientState-->>",
  "subscriptionExpirationDateTime": "2026-01-02T10:30:34.9097561-08:00",
  "resource": "copilot/users/b935e675.../onlineMeetings/YTc3OT.../aiInsights/Z2HWbT...",
  "resourceData": {
    "id": "Z2HWbT...",
    "@odata.type": "#Microsoft.Graph.callAiInsight",
    "@odata.id": "copilot/users/b935e675.../onlineMeetings/YTc3OT.../aiInsights/Z2HWbT..."
  }
}
```

## Related content

[Microsoft Graph change notifications](/graph/change-notifications-overview)
