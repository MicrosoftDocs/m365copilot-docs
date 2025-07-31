---
title: aiOnlineMeeting resource type
description: Represents an AI online meeting.
author: kanchm
ms.author: kanchm
ms.date: 07/29/2025
ms.localizationpriority: medium
ms.topic: reference
doc_type: resourcePageType
---

# aiOnlineMeeting resource type

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

Represents an AI online meeting.

## Methods

None.

## Properties

| Property | Type   | Description                                      |
|:---------|:-------|:-------------------------------------------------|
| `id`     | String | The unique identifier for the AI online meeting. |

## Relationships

| Relationship | Type                                         | Description                                                |
|:-------------|:---------------------------------------------|:-----------------------------------------------------------|
| `aiInsights` | [callAiInsight](callaiinsight.md) collection | A set of AI insights associated with an AI online meeting. |

## JSON representation

The following JSON representation shows the resource type.

``` json
{
  "@odata.type": "#microsoft.graph.aiOnlineMeeting",
  "id": "String (identifier)"
}
```
