---
title: Work IQ - copilotContextualResources resource type
description: Optional contextual resources being sent into a Copilot conversation through the Work IQ Chat API.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 06/24/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: work-iq-rest-api-versions
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Work IQ - copilotContextualResources resource type

:::zone pivot="work-iq-rest-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

:::zone pivot="work-iq-rest-prod"
:::zone-end

Optional contextual resources being sent into a Copilot conversation through the [Work IQ Chat API](../copilotroot-post-conversations.md).

## Properties

| Property     | Type                                      | Description                                                                                                           |
|:-------------|:------------------------------------------|:----------------------------------------------------------------------------------------------------------------------|
| `files`      | [copilotFile](copilotfile.md) collection  | A collection of OneDrive and SharePoint file URIs that should be used as context when responding to the chat message. |
| `webContext` | [copilotWebContext](copilotwebcontext.md) | Determines if web search grounding can be used to respond to the chat message.                                        |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotContextualResources",
  "files": [
    {
      "@odata.type": "#microsoft.graph.copilotFile"
    }
  ],
  "webContext": {
    "@odata.type": "#microsoft.graph.copilotWebContext"
  }
}
```
