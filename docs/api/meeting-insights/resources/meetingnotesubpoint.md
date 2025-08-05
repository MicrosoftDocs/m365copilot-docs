---
title: meetingNoteSubpoint resource type
description: Represents a meeting note subpoint associated with a meetingNote.
author: Anjali-Patle
ms.author: anjalipatle
ms.date: 07/29/2025
ms.localizationpriority: medium
ms.topic: reference
doc_type: resourcePageType
---

# meetingNoteSubpoint resource type

<!-- cSpell:ignore Anjali-Patle anjalipatle -->

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Represents a meeting note subpoint associated with a [meeting note](meetingnote.md).

## Properties

| Property | Type   | Description                             |
|:---------|:-------|:----------------------------------------|
| `text`   | String | The text of the meeting note subpoint.  |
| `title`  | String | The title of the meeting note subpoint. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

``` json
{
  "@odata.type": "#microsoft.graph.meetingNoteSubpoint",
  "text": "String",
  "title": "String"
}
```
