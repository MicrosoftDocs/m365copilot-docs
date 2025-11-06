---
title: "Overview of aiInteractionHistory"
description: Overview of the Microsoft 365 Copilot Interaction History API.
ms.date: 11/14/2025
author: bkeerthivasa
ms.author: v-koenenkaty
ms.localizationpriority: high
doc_type: apiPageType
ms.topic: reference
zone_pivot_groups: graph-api-versions
---

# Overview of the Microsoft 365 Copilot Interaction History API

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

The Microsoft 365 Copilot Interaction History API enables organizations to retrieve AI interaction records across Microsoft 365 Copilot experiences, Copilot Chat, and third-party AI services integrated via Microsoft Purview. These records provide visibility into how AI is used within your enterprise for compliance, analytics, and governance scenarios.

Get all Microsoft 365 Copilot interaction data, including user prompts to Copilot and Copilot responses. This API captures the user intent, the resources accessed by Copilot, and the response to the user for Microsoft 365 apps such as Teams, Word, and Outlook.

## Relationship between resource type and action

The API is built on two key concepts:

- **[`aiInteractionHistory`](./resources/aiinteractionhistory.md) (resource type)**  
  Defines the schema for an AI interaction record, including properties such as:
  - `interactionId`
  - `interactionType` (Copilot, CopilotChat, ThirdPartyAI)
  - `source` (Word, Teams, Purview)
  - `timestamp`
  - `userId`
  - `summary`

- **`aiInteractionHistory: getAllEnterpriseInteractions` (action)**  
  An API operation that retrieves a **collection of `aiInteractionHistory` resources** for your entire enterprise.
  - **Resource type** = the data model (what fields exists).
  - **Action** = the operation that returns multiple instances of that resource type.

## Why use this API?

Organizations can use this API to:

- Audit AI usage across Microsoft 365 Copilot experiences.
- Monitor compliance for third-party AI integrations governed by Microsoft Purview.
- Analyze adoption and usage trends for Copilot and related AI services.

## Licensing requirements

Access to AI interaction history via this API requires an active **Microsoft 365 Copilot license**.

- If your tenant does not have Microsoft 365 Copilot licensed, the API will return an error or no data.
- Additional permissions may apply based on your organization's compliance and security settings.

> [!NOTE]
> - Without the required license, calls to this API will fail with `403 Forbidden`.
> - You can't use this API to extract interactions for users who engage with Copilot Chat offerings without usage billing enabled or a Microsoft 365 Copilot license.
> - You can't export Copilot interactions programmatically. The only alternative is an eDiscovery search.

## Supported AI interaction types

The API returns interaction history for the following categories:

- **Microsoft 365 Copilot experiences**  
  Examples: Word, Excel, Outlook, Teams Copilot, Loop

- **Copilot Chat**  
  Standalone chat experiences within Microsoft 365

- **Third-party AI services integrated via Microsoft Purview**  
  Interactions from external AI tools that are connected and governed through Purview data policies

> [!NOTE]
> Interactions outside these categories (for example, external AI tools not integrated with Microsoft 365) are not included.

## Permissions

To call this API, the following permissions are required:

| Permission type | Permissions (least privileged) |
|-----------------|--------------------------------|
| Delegated (work or school account) | `AIInteraction.Read.All` |
| Application | `AIInteraction.Read.All` |

> [!NOTE]
> Admin consent is required.

## HTTP request

```http
GET /aiInteractionHistory/getAllEnterpriseInteractions
```

### Optional query parameters

You can use OData query parameters to filter and shape the response. For example:

- `$top`
- `$filter`
- `$select`

For more information, see [OData query parameters](/graph/query-parameters?view=graph-rest-1.0).

### Request headers

| Name | Description |
|------|-------------|
| Authorization | Bearer {token}. Required. |
| Content-Type | application/json |

### Request body

This method does not require a request body.

## Response

Returns a collection of [aiInteractionHistory](./resources/aiinteractionhistory.md) objects.

### Properties of aiInteractionHistory

| Property | Type | Description |
|----------|------|-------------|
| interactionId | String | Unique identifier for the interaction. |
| interactionType | String | Type of interaction (Copilot, CopilotChat, ThirdPartyAI). |
| source | String | Application or service where the interaction occurred (Word, Teams, Purview). |
| timestamp | DateTime | Date and time of the interaction in UTC. |
| userId | String | UPN of the user who initiated the interaction. |
| summary | String | Brief description of the interaction. |

## Examples

### Example 1: Microsoft 365 Copilot in Word

```json
{
  "interactionId": "12345",
  "interactionType": "Copilot",
  "source": "Word",
  "timestamp": "2025-10-30T15:45:00Z",
  "userId": "user@contoso.com",
  "summary": "Generated a draft report using Copilot in Word"
}
```

### Example 2: Copilot Chat in Teams

```json
{
  "interactionId": "67890",
  "interactionType": "CopilotChat",
  "source": "Teams",
  "timestamp": "2025-10-30T16:10:00Z",
  "userId": "user@contoso.com",
  "summary": "Asked Copilot for meeting recap"
}
```

### Example 3: Third-party AI via Purview

```json
{
  "interactionId": "98765",
  "interactionType": "ThirdPartyAI",
  "source": "Purview",
  "timestamp": "2025-10-30T17:00:00Z",
  "userId": "user@contoso.com",
  "summary": "Interaction logged from external AI service integrated via Purview"
}
```

## Error codes

Common error responses:

- **403 Forbidden** – Missing required permissions or license.
- **404 Not Found** – No interactions found for the specified filters.

## Related content

- [Export content with the Microsoft Teams Export APIs](/microsoftteams/export-teams-content)
- [Microsoft Graph permissions reference](../graph/permissions-reference?view=graph-rest-1.0)
- [Microsoft 365 Copilot documentation](../copilot/microsoft-365/microsoft-365-copilot-overview)
