---
title: copilotContextualResources resource type
description: Optional contextual resources being sent into a Copilot conversation through the Microsoft 365 Copilot Chat API.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: reference
ms.date: 09/29/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotContextualResources resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Optional contextual resources being sent into a Copilot conversation through the [Microsoft 365 Copilot Chat API](../copilotroot-post-conversations.md).

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
