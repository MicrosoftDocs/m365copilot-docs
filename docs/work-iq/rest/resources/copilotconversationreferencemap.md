---
title: Work IQ - copilotConversationReferenceMap resource type
description: A keyed map of conversation references
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 06/24/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: work-iq-rest-api-versions
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Work IQ - copilotConversationReferenceMap resource type

:::zone pivot="work-iq-rest-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

:::zone pivot="work-iq-rest-prod"
:::zone-end

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
