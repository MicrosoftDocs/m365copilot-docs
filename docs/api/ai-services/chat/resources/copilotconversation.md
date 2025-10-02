---
title: copilotConversation resource type
description: Represents a Copilot conversation being created or continued through the Microsoft 365 Copilot Chat API.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: reference
ms.date: 09/26/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotConversation resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a Copilot conversation being created or continued through the [Microsoft 365 Copilot Chat API](../copilotroot-post-conversations.md).

## Methods

| Method                                                       | Return type                     | Description |
|:-------------------------------------------------------------|:--------------------------------|:------------|
| [Create](../copilotroot-post-conversations.md)               | `copilotConversation`           | Create a new Copilot conversation. |
| [Chat](../copilotconversation-chat.md)                       | `copilotConversation`           | Send a chat message to Copilot and receive a response synchronously. |
| [Chat over stream](../copilotconversation-chatoverstream.md) | stream of `copilotConversation` | Send a chat message to Copilot and receive a streaming response. |

## Properties

| Property          | Type                                                                                   | Description                                                                                                                         |
|:------------------|:---------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------|
| `createdDateTime` | DateTimeOffset                                                                         | The timestamp when the Copilot conversation was created.                                                                            |
| `displayName`     | String                                                                                 | The display name for the Copilot conversation.                                                                                      |
| `id`              | String                                                                                 | The identifier for a Copilot conversation. This is used as a path parameter when continuing a synchronous or streamed conversation. |
| `messages`        | [copilotConversationResponseMessage](copilotconversationresponsemessage.md) collection | The latest turn count in the conversation when the last message was added.                                                          |
| `state`           | [copilotConversationState](#copilotconversationstate-enumeration)                      | The Copilot conversation state.                                                                                                     |
| `turnCount`       | Int32                                                                                  | The latest turn count in the conversation when the last message was added.                                                          |

### copilotConversationState enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value              |
|:-------------------|
| `active`           |
| `disengagedForRai` |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotConversation",
  "id": "String",
  "createdDateTime": "DateTimeOffset",
  "displayName": "String",
  "state": "String",
  "turnCount": "Int32",
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationResponseMessage"
    }
  ]
}
```
