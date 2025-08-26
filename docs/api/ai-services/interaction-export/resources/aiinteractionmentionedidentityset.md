---
title: aiInteractionMentionedIdentitySet resource type
description: Represents an entity mentioned in an AI interaction.
ms.date: 08/08/2025
doc_type: resourcePageType
ms.topic: reference
ms.localizationpriority: medium
author: bkeerthivasa
ms.author: bkeerthivasa
zone_pivot_groups: graph-api-versions
---

# aiInteractionMentionedIdentitySet resource type

<!-- cSpell:ignore bkeerthivasa -->
:::zone pivot="graph-v1"
:::zone-end

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]
:::zone-end

Represents an entity mentioned in an AI interaction.

Inherits from [identitySet](/graph/api/resources/identityset).

## Properties

| Property       | Type                                                                              | Description               |
|:---------------|:----------------------------------------------------------------------------------|:--------------------------|
| `conversation` | [teamworkConversationIdentity](/graph/api/resources/teamworkconversationidentity) | The conversation details. |
| `tag`          | [teamworkTagIdentity](/graph/api/resources/teamworktagidentity)                   | The tag details.          |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "conversation": {"@odata.type": "microsoft.graph.teamworkConversationIdentity"},
  "tag": {"@odata.type": "microsoft.graph.teamworkTagIdentity"}
}
```
