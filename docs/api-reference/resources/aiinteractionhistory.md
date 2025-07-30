---
title: aiInteractionHistory resource type
description: Represents a list of messages that are exchanged and involve AI.
ms.date: 07/29/2025
doc_type: resourcePageType
ms.topic: reference
ms.localizationpriority: medium
author: bkeerthivasa
ms.author: bkeerthivasa
zone_pivot_groups: graph-api-versions
---

# aiInteractionHistory resource type

<!-- cSpell:ignore bkeerthivasa -->
:::zone pivot="graph-v1"
:::zone-end

:::zone pivot="graph-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

Represents a list of messages that are exchanged and involve AI.

## Methods

| Method                                                                                     | Return Type                                  | Description                                                                                              |
|:-------------------------------------------------------------------------------------------|:---------------------------------------------|:---------------------------------------------------------------------------------------------------------|
| [Get all enterprise interactions](../aiinteractionhistory-getallenterpriseinteractions.md) | [aiInteraction](aiinteraction.md) collection | Get all Microsoft 365 Copilot interaction data, including user prompts to Copilot and Copilot responses. |

## Properties

None.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.aiInteractionHistory"
}
```
