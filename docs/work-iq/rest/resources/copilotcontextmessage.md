---
title: copilotContextMessage resource type
description: Represents extra context for a Copilot conversation through the Work IQ Chat API.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 05/15/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# copilotContextMessage resource type

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

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
