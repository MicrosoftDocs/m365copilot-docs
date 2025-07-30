---
title: aiUser resource type
description: Represents an AI user or agent.
ms.date: 07/29/2025
doc_type: resourcePageType
ms.localizationpriority: medium
author: bkeerthivasa
ms.author: bkeerthivasa
zone_pivot_groups: graph-api-versions
---

# aiUser resource type

<!-- cSpell:ignore bkeerthivasa -->

:::zone pivot="graph-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

Represents an AI user or agent.

## Methods

None.

## Properties

| Property | Type   | Description                            |
|:---------|:-------|:---------------------------------------|
| `id`     | String | The unique identifier for the AI user. |

## Relationships

:::zone pivot="graph-v1"

| Relationship         | Type                                                               | Description                                                 |
|:---------------------|:-------------------------------------------------------------------|:------------------------------------------------------------|
| `interactionHistory` | [aiInteractionHistory](aiinteractionhistory.md)                    | The history of interactions between AI agents and users.    |

:::zone-end

:::zone pivot="graph-beta"

| Relationship         | Type                                                               | Description                                                 |
|:---------------------|:-------------------------------------------------------------------|:------------------------------------------------------------|
| `interactionHistory` | [aiInteractionHistory](aiinteractionhistory.md)                    | The history of interactions between AI agents and users.    |
| `onlineMeetings`     | [aiOnlineMeeting](/graph/api/resources/aionlinemeeting) collection | Information about an online meeting, including AI insights. |

:::zone-end

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "id": "String (identifier)"
}
```
