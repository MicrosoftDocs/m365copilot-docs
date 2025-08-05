---
title: meetingNote resource type
description: Represents a meeting note associated with a callAiInsight.
author: Anjali-Patle
ms.author: anjalipatle
ms.date: 07/29/2025
ms.localizationpriority: medium
ms.topic: reference
doc_type: resourcePageType
---

# meetingNote resource type

<!-- cSpell:ignore Anjali-Patle anjalipatle -->

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Represents a meeting note associated with a [call AI insight](callaiinsight.md).

## Properties

| Property    | Type                                                     | Description                                    |
|:------------|:---------------------------------------------------------|:-----------------------------------------------|
| `subpoints` | [meetingNoteSubpoint](meetingnotesubpoint.md) collection | A collection of subpoints of the meeting note. |
| `text`      | String                                                   | The text of the meeting note.                  |
| `title`     | String                                                   | The title of the meeting note.                 |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

``` json
{
  "@odata.type": "#microsoft.graph.meetingNote",
  "subpoints": [{"@odata.type": "microsoft.graph.meetingNoteSubpoint"}],
  "text": "String",
  "title": "String"
}
```
