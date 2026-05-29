---
title: Use the Work IQ Chat API to chat with Microsoft 365 Copilot.
description: Use the Chat API to integrate Microsoft 365 Copilot into your custom generative AI solutions.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 05/15/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- markdownlint-disable MD024 -->
<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Create copilotConversation

[!INCLUDE [beta-disclaimer](includes/beta-disclaimer.md)]

The Work IQ Chat API allows you to create and continue multi-turn conversations with Microsoft 365 Copilot, while respecting the defined access controls within the organization. Use the Chat API to integrate Microsoft 365 Copilot into your generative AI solutions.

This documentation covers creating Copilot conversations using the Chat API. Learn how to continue [synchronous conversations](copilotconversation-chat.md) or [streamed conversations](copilotconversation-chatoverstream.md) with the Chat API.

## Permissions

[!INCLUDE [permissions-intro](includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | WorkIQAgent.Ask              | Not available.                |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Not supported.               | Not supported.                |

## HTTP request

```http
POST https://workiq.svc.cloud.microsoft/rest/beta/copilot/conversations
```

## Request headers

| Name            | Description                   |
|:----------------|:------------------------------|
| `Authorization` | `Bearer {token}`. Required.   |
| `Content-Type`  | `application/json.` Required. |

## Request body

In the request body, supply an empty JSON body.

## Response

If successful, this action returns a `201 Created` response code and a [copilotConversation](resources/copilotconversation.md) in the response body.

## Example

The following example shows how to create a Copilot conversation through the Work IQ Chat API. Once the conversation is created, the `id` in the response body is used as a path parameter for continuing the conversation, using either the synchronous endpoint or the streamed endpoint.

### Request

The following example shows the request.

```http
POST https://workiq.svc.cloud.microsoft/rest/beta/copilot/conversations
Content-Type: application/json

{}
```

### Response

The following example shows the response.

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": "0d110e7e-2b7e-4270-a899-fd2af6fde333",
  "createdDateTime": "2025-09-30T15:28:46.1560062Z",
  "displayName": "",
  "status": "active",
  "turnCount": 0
}
```

## Related content

- [Overview of the Work IQ Chat API](overview.md)
- [Work IQ Samples](https://github.com/microsoft/work-iq-samples)
- [Continue synchronous conversations with Microsoft 365 Copilot using the Work IQ Chat API](copilotconversation-chat.md)
- [Continue streamed conversations with Microsoft 365 Copilot using the Work IQ Chat API](copilotconversation-chatoverstream.md)
