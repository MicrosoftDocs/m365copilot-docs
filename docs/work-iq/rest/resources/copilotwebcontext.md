---
title: Work IQ - copilotWebContext resource type
description: Determines how web search grounding is used in a Copilot conversation through the Work IQ Chat API.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 06/24/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: work-iq-rest-api-versions
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Work IQ - copilotWebContext resource type

:::zone pivot="work-iq-rest-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

:::zone pivot="work-iq-rest-prod"
:::zone-end

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
