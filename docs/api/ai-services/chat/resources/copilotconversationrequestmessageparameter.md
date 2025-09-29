---
title: copilotConversationRequestMessageParameter resource type
description: Represents a chat message being sent into a Copilot conversation through the Microsoft 365 Copilot Chat API.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: reference
ms.date: 09/29/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotConversationRequestMessageParameter resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a chat message being sent into a Copilot conversation through the [Microsoft 365 Copilot Chat API](../copilotroot-conversations.md).

## Properties

| Property       | Type   | Description                                                    |
|:---------------|:-------|:---------------------------------------------------------------|
| `text` | String | The text of the chat message. Required. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotConversaionRequestMessageParameter",
  "text": "String"
}
```
