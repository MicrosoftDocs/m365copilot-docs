---
title: Update agentRegistration
description: Update an agentRegistration object.
author: Ganeshkrish18
ms.author: gakrishn
ms.topic: reference
ms.date: 04/13/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

# Update agentRegistration

<!-- markdownlint-disable MD024 -->
<!-- cSpell:ignore gakrishn Ganeshkrish18 -->

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Update an [agentRegistration](resources/agentregistration.md) object.

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
PATCH https://graph.microsoft.com/beta/copilot/agentRegistrations/{id}
```

## Request headers

| Name | Description |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type` | `application/json`. Required. |

## Request body

In the request body, supply a JSON representation of the properties to update on the [agentRegistration](resources/agentregistration.md) object.

| Property | Type | Description |
|:---------|:-----|:------------|
| `agentCard` | [Json](/graph/api/resources/json) | Flexible JSON manifest containing agent card information. Optional. |
| `agentIdentityBlueprintId` | String | Agent identity blueprint identifier. Optional. |
| `agentIdentityId` | String | Entra agent identity identifier. Optional. |
| `description` | String | The agent description. Optional. |
| `displayName` | String | Display name for the agent instance. Optional. |
| `lastPublishedBy` | String | The unique identifier of the last person to publish the agent. Optional. |
| `managedByAppId` | String | Application identifier managing this agent. Optional. |
| `originatingStore` | String | Name of the store or system where the agent originated. Optional. |
| `ownerIds` | String collection | List of owner identifiers for the agent. Optional. |
| `sourceAgentId` | String | Original agent identifier from source system. Optional. |
| `sourceLastModifiedDateTime` | DateTimeOffset | The date and time when the agent instance was last modified from source. Optional. |

## Response

If successful, this method returns a `200 OK` response code. It doesn't return anything in the response body.

## Example

### Request

The following example shows a request.

```http
PATCH https://graph.microsoft.com/beta/copilot/agentRegistrations/550e8400-e29b-41d4-a716-446655440000
Content-Type: application/json

{
  "displayName": "Contoso Sales Assistant",
  "description": "AI-powered sales assistant that integrates with Contoso CRM",
  "ownerIds": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ]
}
```

### Response

The following example shows the response.

```http
HTTP/1.1 200 OK
```
