---
title: Use the Microsoft 365 Copilot Chat API to chat with Microsoft 365 Copilot.
description: Use the Chat API to integrate Microsoft 365 Copilot into your custom generative AI solutions.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: reference
ms.date: 09/26/2025
ms.localizationpriority: medium
doc_type: conceptualPageType
---

<!-- markdownlint-disable MD024 -->

# Chat with Microsoft 365 Copilot

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

The Microsoft 365 Copilot Chat API allows you to create and continue multi-turn conversations with Microsoft 365 Copilot, while respecting the defined access controls within the organization. Use the Chat API to integrate Microsoft 365 Copilot into your generative AI solutions.

This documentation covers creating Copilot conversations using the Chat API. Learn how to continue [synchronous conversations](copilotroot-conversationschat.md) or [streamed conversations](copilotroot-conversationschatoverstream.md) with the Chat API.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions    | Higher privileged permissions |
|:---------------------------------------|:--------------------------------|:------------------------------|
| Delegated (work or school account)     | Sites.Read.All, Mail.Read, People.Read.All, OnlineMeetingTranscript.Read.All, Chat.Read, ChannelMessage.Read.All, ExternalItem.Read.All\* | Not supported. |
| Delegated (personal Microsoft account) | Not supported.                  | Not supported.                |
| Application                            | Not supported.                  | Not supported.                |

\* You need all of these Microsoft Graph permissions to successfully call the Microsoft 365 Copilot Chat API.

## HTTP request

```http
POST https://graph.microsoft.com/beta/copilot/conversations
```

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json.` Required.                                                                               |

## Request body

### Creating a conversation with the Microsoft 365 Copilot Chat API

In the request body, supply an empty JSON body.

## Response

If successful, this action returns a `201 Created` response code and a [copilotConversation](resources/copilotconversation.md) in the response body.

## Example

The following example shows how to create a Copilot conversation through the Microsoft 365 Copilot Chat API. Once the conversation is created, the `id` in the response body is used as a path parameter for continuing the conversation, using either the synchronous endpoint or the streamed endpoint.

### Request

The following example shows the request.

```http
POST https://graph.microsoft.com/beta/copilot/conversations
Content-Type: application/json

{}
```

### Response

The following example shows the response.

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/conversations/$entity",
  "id": "0d110e7e-2b7e-4270-a899-fd2af6fde333",
  "createdDateTime": "2025-09-30T15:28:46.1560062Z",
  "displayName": "",
  "status": "active",
  "turnCount": 0
}
```

## Related content

- [Overview of the Microsoft 365 Copilot Chat API](overview.md)
- [Continue synchronous conversations with Microsoft 365 Copilot using the Microsoft 365 Copilot Chat API](copilotroot-conversationschat.md)
- [Continue streamed conversations with Microsoft 365 Copilot using the Microsoft 365 Copilot Chat API](copilotroot-conversationschatoverstream.md)
