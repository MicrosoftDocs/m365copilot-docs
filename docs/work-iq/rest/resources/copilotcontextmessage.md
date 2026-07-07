---
title: Work IQ - copilotContextMessage resource type
description: Represents extra context for a Copilot conversation through the Work IQ Chat API.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 06/24/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: work-iq-rest-api-versions
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Work IQ - copilotContextMessage resource type

:::zone pivot="work-iq-rest-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

:::zone pivot="work-iq-rest-prod"
:::zone-end

Represents extra context for a Copilot conversation through the [Work IQ Chat API](../copilotroot-post-conversations.md).

## Properties

| Property      | Type   | Description                                |
|:--------------|:-------|:-------------------------------------------|
| `description` | String | The description of the additional context. |
| `text`        | String | The text of the additional context.        |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotContextMessage",
  "text": "String",
  "description": "String"
}
```
