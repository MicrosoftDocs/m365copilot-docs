---
title: aiInteractionAttachment resource type
description: Represents a message attachment, such as cards and images.
ms.date: 08/08/2025
doc_type: resourcePageType
ms.topic: reference
ms.localizationpriority: medium
author: bkeerthivasa
ms.author: bkeerthivasa
zone_pivot_groups: graph-api-versions
---

# aiInteractionAttachment resource type

<!-- cSpell:ignore bkeerthivasa -->
:::zone pivot="graph-v1"
:::zone-end

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]
:::zone-end

Represents a message attachment, such as cards and images.

## Properties

| Property       | Type   | Description                                                                                 |
|:---------------|:-------|:--------------------------------------------------------------------------------------------|
| `attachmentId` | String | The identifier for the attachment. This identifier is only unique within the message scope. |
| `content`      | String | The content of the attachment.                                                              |
| `contentType`  | String | The type of the content. For example, `reference`, `file`, and `image/imageType`.           |
| `contentUrl`   | String | The URL of the content.                                                                     |
| `name`         | String | The name of the attachment.                                                                 |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "attachmentId": "String",
  "content": "String",
  "contentType": "String",
  "contentUrl": "String",
  "name": "String"
}
```
