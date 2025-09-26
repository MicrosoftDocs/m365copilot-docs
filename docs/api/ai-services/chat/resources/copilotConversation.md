---
title: copilotConversation resource type
description: Represents a Copilot conversation being created or continued through the Microsoft 365 Copilot Chat API.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: reference
ms.date: 09/26/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# connectionItem resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a Copilot conversation being created or continued through the [Microsoft 365 Copilot Chat API](../copilotroot-conversations.md).

## Properties

| Property       | Type   | Description                                                    |
|:---------------|:-------|:---------------------------------------------------------------|
| `connectionId` | String | The ID of a Copilot connector connection to include. Required. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.connectionItem",
  "connectionId": "string"
}
```
