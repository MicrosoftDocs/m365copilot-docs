---
title: Create agentRegistration
description: Create a new agentRegistration object.
author: Ganeshkrish18
ms.author: gakrishn
ms.topic: reference
ms.date: 04/30/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

# Create agentRegistration

<!-- markdownlint-disable MD024 -->
<!-- cSpell:ignore gakrishn Ganeshkrish18 -->

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Create a new [agentRegistration](resources/agentregistration.md) object.

[!INCLUDE [national-cloud-support](../../includes/global-only.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions    | Higher privileged permissions |
|:---------------------------------------|:--------------------------------|:------------------------------|
| Delegated (work or school account)     | AgentRegistration.ReadWrite.All | Not available.                |
| Delegated (personal Microsoft account) | Not supported.                  | Not supported.                |
| Application                            | AgentRegistration.ReadWrite.All | Not available.                |

## HTTP request

```http
POST https://graph.microsoft.com/beta/copilot/agentRegistrations
```

## Request headers

| Name | Description |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type` | `application/json`. Required. |

## Request body

In the request body, supply a JSON representation of an [agentRegistration](resources/agentregistration.md) object.

The following table lists the required properties when you create an agentRegistration.

| Property | Type | Description |
|:---------|:-----|:------------|
| `displayName` | String | Display name for the agent instance. Required. |
| `createdBy` | String | The unique identifier of the user or app who created the agent registration. Required. |
| `sourceCreatedDateTime` | DateTimeOffset | The date and time when the agent instance was created from source. Required. |
| `sourceLastModifiedDateTime` | DateTimeOffset | The date and time when the agent instance was last modified from source. Required. |

## Response

If successful, this method returns a `201 Created` response code and an [agentRegistration](resources/agentregistration.md) object in the response body.

## Example

### Request

The following example shows a request.

```http
POST https://graph.microsoft.com/beta/copilot/agentRegistrations
Content-Type: application/json

{
  "displayName": "Contoso Travel Booking Agent",
  "description": "Helps users search and book flights and hotels",
  "ownerIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "8b7e9c42-1234-5678-90ab-def123456789"
  ],
  "sourceAgentId": "contoso-sales-assistant-v1",
  "originatingStore": "ContosoAgentStore",
  "managedByAppId": "7c3f8d45-e29b-41d4-a716-556677889900",
  "agentIdentityId": "identity-550e8400-e29b-41d4-a716-446655440000",
  "agentIdentityBlueprintId": "blueprint-550e8400-e29b-41d4-a716-446655440000",
  "agentCard": {
    "name": "Contoso Travel Booking Agent",
    "version": "1.0.0",
    "description": "Helps users search and book flights and hotels",
    "provider": "Contoso",
    "capabilities": {
      "streaming": false,
      "pushNotifications": false
    },
    "defaultInputModes": ["text"],
    "defaultOutputModes": ["text"],
    "skills": [
      {
        "id": "book-flight",
        "name": "Book Flight",
        "description": "Search and book flights based on user preferences"
      },
      {
        "id": "book-hotel",
        "name": "Book Hotel",
        "description": "Search and book hotels at the destination"
      }
    ]
  }
}
```

### Response

The following example shows the response.

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/agentRegistrations/$entity",
  "id": "550e8400-e29b-41d4-a716-446655440000"
}
```
