---
title: copilotConversationResponseMessage resource type
description: Represents a message in a Copilot conversation being continued through the Work IQ Chat API.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 05/15/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# copilotConversationResponseMessage resource type

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

Represents a message in a Copilot conversation being continued through the [Work IQ Chat API](../copilotroot-post-conversations.md).

## Properties

| Property           | Type                                                                  | Description                                                                                                                           |
|:-------------------|:----------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|
| `adaptiveCards`    | Edm.Untyped collection                                                | List of raw JSON representations of adaptive cards. This property may be empty.                                                       |
| `createdDateTime`  | DateTimeOffset                                                        | The timestamp when the chat message was created.                                                                                      |
| `id`               | String                                                                | The identifier for the Copilot conversation. This is used as a path parameter when continuing a synchronous or streamed conversation. |
| `references`       | [copilotConversationReferenceMap](copilotconversationreferencemap.md) | A keyed map of conversation references.                                                                                               |
| `sensitivityLabel` | [searchSensitivityLabelInfo](/searchsensitivitylabelinfo.md)          | Defines the highest sensitivity (most restricted) resource used to create the chat message.                                           |
| `text`             | String                                                                | The chat message text. This either recaps the submitted prompt or articulates the Work IQ Chat API's response.                        |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotConversationResponseMessage",
  "id": "String",
  "text": "String",
  "createdDateTime": "DateTimeOffset",
  "adaptiveCards": [
    {
      "@odata.type": "#microsoft.graph.Edm.Untyped"
    }
  ],
  "references": {
    "@odata.type": "#microsoft.graph.copilotConversationReferenceMap"
  },
  "sensitivityLabel": {
    "@odata.type": "#microsoft.graph.searchSensitivityLabelInfo"
  }
}
```
