---
title: actionItem resource type
description: Represents an action item associated with a callAiInsight.
author: Anjali-Patle
ms.author: anjalipatle
ms.date: 07/29/2025
ms.localizationpriority: medium
ms.topic: reference
doc_type: resourcePageType
---

# actionItem resource type

<!-- cSpell:ignore Anjali-Patle anjalipatle -->

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Represents an action item associated with a [call AI insight](callaiinsight.md).

## Properties

| Property           | Type   | Description                                       |
|:-------------------|:-------|:--------------------------------------------------|
| `ownerDisplayName` | String | The display name of the owner of the action item. |
| `text`             | String | The text content of the action item.              |
| `title`            | String | The title of the action item.                     |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

``` json
{
  "@odata.type": "#microsoft.graph.actionItem",
  "ownerDisplayName": "String",
  "text": "String",
  "title": "String"
}
```
