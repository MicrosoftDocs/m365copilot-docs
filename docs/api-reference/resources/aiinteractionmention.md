---
title: aiInteractionMention resource type
description: Represents a mention of an entity in an AI interaction.
ms.date: 07/29/2025
doc_type: resourcePageType
ms.localizationpriority: medium
author: bkeerthivasa
ms.author: bkeerthivasa
zone_pivot_groups: graph-api-versions
---

# aiInteractionMention resource type

<!-- cSpell:ignore bkeerthivasa -->

:::zone pivot="graph-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

Represents a mention of an entity in an AI interaction.

## Properties

| Property      | Type                                                                      | Description                          |
|:--------------|:--------------------------------------------------------------------------|:-------------------------------------|
| `mentioned`   | [aiInteractionMentionedIdentitySet](aiinteractionmentionedidentityset.md) | The entity mentioned in the message. |
| `mentionId`   | Int32                                                                     | The identifier for the mention.      |
| `mentionText` | String                                                                    | The text mentioned in the message.   |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "mentioned": {"@odata.type": "microsoft.graph.AiInteractionMentionedIdentitySet"},
  "mentionId": "Int32",
  "mentionText": "String"
}
```
