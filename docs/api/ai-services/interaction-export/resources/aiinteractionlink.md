---
title: aiInteractionLink resource type
description: Represents the links that appear in an AI interaction.
ms.date: 07/29/2025
doc_type: resourcePageType
ms.topic: reference
ms.localizationpriority: medium
author: bkeerthivasa
ms.author: bkeerthivasa
zone_pivot_groups: graph-api-versions
---

# aiInteractionLink resource type

<!-- cSpell:ignore bkeerthivasa -->
:::zone pivot="graph-v1"
:::zone-end

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]
:::zone-end

Represents the links that appear in an AI interaction.

## Properties

| Property      | Type   | Description                                                                     |
|:--------------|:-------|:--------------------------------------------------------------------------------|
| `displayName` | String | The name of the link.                                                           |
| `linkType`    | String | Information about a link in an app chat or Business Chat (BizChat) interaction. |
| `linkUrl`     | String | The URL of the link.                                                            |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "displayName": "String",
  "linkType": "String",
  "linkUrl": "String"
}
```
