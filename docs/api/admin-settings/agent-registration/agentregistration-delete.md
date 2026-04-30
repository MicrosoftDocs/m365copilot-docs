---
title: Delete agentRegistration
description: Delete an agentRegistration object.
author: Ganeshkrish18
ms.author: gakrishn
ms.topic: reference
ms.date: 04/30/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

# Delete agentRegistration

<!-- markdownlint-disable MD024 -->
<!-- cSpell:ignore gakrishn Ganeshkrish18 -->

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Delete an [agentRegistration](resources/agentregistration.md) object. This operation can't be undone.

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
DELETE https://graph.microsoft.com/beta/copilot/agentRegistrations/{id}
```

## Request headers

| Name | Description |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `204 No Content` response code. It doesn't return anything in the response body.

## Example

### Request

The following example shows a request.

```http
DELETE https://graph.microsoft.com/beta/copilot/agentRegistrations/550e8400-e29b-41d4-a716-446655440000
```

### Response

The following example shows the response.

```http
HTTP/1.1 204 No Content
```
