---
title: copilotConversationResponseMessage resource type
description: Represents a message in a Copilot conversation being continued through the Microsoft 365 Copilot Chat API.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: reference
ms.date: 09/29/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotConversationResponseMessage resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a message in a Copilot conversation being continued through the [Microsoft 365 Copilot Chat API](../copilotroot-post-conversations.md).

## Properties

| Property       | Type   | Description                                                    |
|:---------------|:-------|:---------------------------------------------------------------|
| `id` | String | The identifier for the Copilot conversation. This is used as a path parameter when continuing a synchronous or streamed conversation. |
| `text` | String | The chat message text. This either recaps the submitted prompt or articulates the Microsoft 365 Copilot Chat API's response. |
| `createdDateTime` | DateTimeOffset | The timestamp when the chat message was created. |
| `adaptiveCards` | Edm.Untyped collection | List of raw JSON representations of adaptive cards. This property may be empty. |
| `attributions` | [copilotConversationAttribution](copilotconversationattribution.md) collection | The list of attributions (either citations or annotations) included in the chat message response. |
| `sensitivityLabel` | [searchSensitivityLabelInfo](../../resources/searchsensitivitylabelinfo.md) | Defines the highest sensitivity (most restricted) resource used to create the chat message. |

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
  "attributions": [
    {
      "@odata.type": "#microsoft.graph.copilotConversationAttribution"
    }
  ],
  "sensitivityLabel": {
    "@odata.type": "#microsoft.graph.searchSensitivityLabelInfo"
  }
}
```
