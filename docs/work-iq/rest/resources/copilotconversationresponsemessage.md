---
title: Work IQ - copilotConversationResponseMessage resource type
description: Represents a message in a Copilot conversation being continued through the Work IQ Chat API.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: work-iq-rest-api-versions
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Work IQ - copilotConversationResponseMessage resource type

:::zone pivot="work-iq-rest-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

:::zone pivot="work-iq-rest-prod"
:::zone-end

Represents a message in a Copilot conversation being continued through the [Work IQ Chat API](../copilotroot-post-conversations.md).

## Properties

| Property           | Type                                                                           | Description                                                                                                                       |
|:-------------------|:-------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------|
| `adaptiveCards`    | Edm.Untyped collection                                                         | List of raw JSON representations of adaptive cards. This property may be empty.                                                   |
| `attributions`     | [copilotConversationAttribution](copilotconversationattribution.md) collection | The citations and annotations included in the message. This property is an empty collection when the message has no attributions. |
| `createdDateTime`  | DateTimeOffset                                                                 | The timestamp when the chat message was created.                                                                                  |
| `id`               | String                                                                         | The unique identifier of the message.                                                                                             |
| `references`       | [copilotConversationReferenceMap](copilotconversationreferencemap.md)          | A keyed map of conversation references.                                                                                           |
| `sensitivityLabel` | [searchSensitivityLabelInfo](searchsensitivitylabelinfo.md)                    | Defines the highest sensitivity (most restricted) resource used to create the chat message.                                       |
| `text`             | String                                                                         | The chat message text. This either recaps the submitted prompt or articulates the Work IQ Chat API's response.                    |

Use `attributions` to render the citations and annotations associated with response text. Each attribution identifies its type, source, display text, destination URL, and optional image metadata. The `references` property is a separate keyed map of conversation reference metadata.

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
  "references": {
    "@odata.type": "#microsoft.graph.copilotConversationReferenceMap"
  },
  "sensitivityLabel": {
    "@odata.type": "#microsoft.graph.searchSensitivityLabelInfo"
  }
}
```
