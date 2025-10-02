---
title: copilotFile resource type
description: OneDrive or SharePoint file being sent as context into a Copilot conversation through the Microsoft 365 Copilot Chat API.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: reference
ms.date: 09/29/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotFile resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

OneDrive or SharePoint file being sent as context into a Copilot conversation through the [Microsoft 365 Copilot Chat API](../copilotroot-post-conversations.md).

## Properties

| Property       | Type   | Description                                                    |
|:---------------|:-------|:---------------------------------------------------------------|
| `uri` | String | The URI of the OneDrive or SharePoint file. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotFile",
  "uri": "String"
}
```
