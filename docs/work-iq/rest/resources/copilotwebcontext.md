---
title: Work IQ - copilotWebContext resource type
description: Determines how web search grounding is used in a Copilot conversation through the Work IQ Chat API.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 05/15/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Work IQ - copilotWebContext resource type

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

Determines how web search grounding is used in a Copilot conversation through the [Work IQ Chat API](../copilotroot-post-conversations.md).

## Properties

| Property       | Type    | Description                                                                                                                                    |
|:---------------|:--------|:-----------------------------------------------------------------------------------------------------------------------------------------------|
| `isWebEnabled` | Boolean | Determines if web search grounding is enabled or not when responding to the current chat message. By default, web search grounding is enabled. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotWebContext",
  "isWebEnabled": "Boolean"
}
```
