---
title: copilotConversationReferenceMap resource type
description: A keyed map of conversation references
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 05/20/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# copilotConversationReferenceMap resource type

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

A keyed map of [copilotConversationReference](copilotconversationreference.md) objects.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotConversationReferenceMap",
  "key-1": {
    "@odata.type": "#microsoft.graph.copilotConversationReference"
  },
  "key-2": {
    "@odata.type": "#microsoft.graph.copilotConversationReference"
  }
}
```
