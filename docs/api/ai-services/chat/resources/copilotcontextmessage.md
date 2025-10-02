---
title: copilotContextMessage resource type
description: Represents extra context for a Copilot conversation through the Microsoft 365 Copilot Chat API.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: reference
ms.date: 09/29/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotContextMessage resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents extra context for a Copilot conversation through the [Microsoft 365 Copilot Chat API](../copilotroot-post-conversations.md).

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
