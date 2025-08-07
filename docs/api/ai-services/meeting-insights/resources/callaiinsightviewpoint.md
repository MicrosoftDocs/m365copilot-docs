---
title: callAiInsightViewPoint resource type
description: Represents user-specific properties of a callAiInsight.
author: Anjali-Patle
ms.author: anjalipatle
ms.date: 07/29/2025
ms.localizationpriority: medium
doc_type: resourcePageType
ms.topic: reference
---

# callAiInsightViewPoint resource type

<!-- cSpell:ignore Anjali-Patle anjalipatle -->

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents user-specific properties of a [call AI insight](callaiinsight.md). These properties might differ based on who calls the API.

## Properties

| Property        | Type                                       | Description                                    |
|:----------------|:-------------------------------------------|:-----------------------------------------------|
| `mentionEvents` | [mentionEvent](mentionevent.md) collection | The collection of AI-generated mention events. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

``` json
{
  "@odata.type": "#microsoft.graph.callAiInsightViewPoint",
  "mentionEvents": [{"@odata.type": "microsoft.graph.mentionEvent"}]
}
```
