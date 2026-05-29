---
title: copilotConversationRequestMessageParameter resource type
description: Represents a chat message being sent into a Copilot conversation through the Work IQ Chat API.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 05/15/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# copilotConversationRequestMessageParameter resource type

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

Represents a chat message being sent into a Copilot conversation through the [Work IQ Chat API](../copilotroot-post-conversations.md).

## Properties

| Property | Type   | Description                             |
|:---------|:-------|:----------------------------------------|
| `text`   | String | The text of the chat message. Required. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotConversationRequestMessageParameter",
  "text": "String"
}
```
