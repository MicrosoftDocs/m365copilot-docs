---
title: copilotConversationMessage resource type
description: Represents a message in a Copilot conversation being continued through the Microsoft 365 Copilot Chat API.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: reference
ms.date: 09/29/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotConversationMessage resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a message in a Copilot conversation being continued through the [Microsoft 365 Copilot Chat API](../copilotroot-conversations.md).

## Properties

| Property       | Type   | Description                                                    |
|:---------------|:-------|:---------------------------------------------------------------|
| `id` | String | The identifier for a Copilot conversation. This is used as a path parameter when continuing a synchronous or streamed conversation. |
| `createdDateTime` | DateTimeOffset | The timestamp when the Copilot conversation was created. |
| `displayName` | String | The display name for the Copilot conversation. |
| `state` | [copilotConversationState](copilotconversationstate.md) | The Copilot conversation state. |
| `turnCount` | Int32 | The latest turn count in the conversation when the last message was added. |
| `messages` | [copilotConversationMessage](todo.md) collection | The latest turn count in the conversation when the last message was added. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotConversaion",
  "id": "String",
  "createdDateTime": "DateTimeOffset",
  "displayName": "String",
  "state": {
    "@odata.type": "#microsoft.graph.copilotConversaionState"
  },
  "turnCount": "Int32",
  "messages": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationMessage"
    }
  ]
}
```
