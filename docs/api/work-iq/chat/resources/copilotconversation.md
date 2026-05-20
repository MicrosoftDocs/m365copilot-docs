---
title: copilotConversation resource type
description: Represents a Copilot conversation being created or continued through the Work IQ Chat API.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 05/15/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# copilotConversation resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a Copilot conversation being created or continued through the [Work IQ Chat API](../copilotroot-post-conversations.md).

## Methods

| Method                                                       | Return type                     | Description |
|:-------------------------------------------------------------|:--------------------------------|:------------|
| [Create](../copilotroot-post-conversations.md)               | `copilotConversation`           | Create a new Copilot conversation. |
| [Chat](../copilotconversation-chat.md)                       | `copilotConversation`           | Send a chat message to Copilot and receive a response synchronously. |
| [Chat over stream](../copilotconversation-chatoverstream.md) | stream of `copilotConversation` | Send a chat message to Copilot and receive a streaming response. |

## Properties

| Property          | Type                                                              | Description                                                                                                                         |
|:------------------|:------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------|
| `agentId`         | String                                                            | The unique identifier of the agent associated with the conversation.                                                                |
| `createdDateTime` | DateTimeOffset                                                    | The date and time when the conversation was created.                                                                                |
| `displayName`     | String                                                            | The display name of the conversation.                                                                                               |
| `id`              | String                                                            | The unique identifier of the conversation. This is used as a path parameter when continuing a synchronous or streamed conversation. |
| `state`           | [copilotConversationState](#copilotconversationstate-enumeration) | The state of the conversation.                                                                                                      |
| `turnCount`       | Int32                                                             | The number of turns in the conversation.                                                                                            |

### copilotConversationState enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value              |
|:-------------------|
| `active`           |
| `disengagedForRai` |

## Relationships

| Relationship | Type                                                                                   | Description                                       |
|:-------------|:---------------------------------------------------------------------------------------|:--------------------------------------------------|
| `messages`   | [copilotConversationResponseMessage](copilotconversationresponsemessage.md) collection | The ordered list of messages in the conversation. |

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotConversation",
  "id": "String",
  "agentId": "String",
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
