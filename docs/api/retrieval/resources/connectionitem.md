---
title: connectionItem resource type
description: Represents a Copilot connector to include in retrieval operations in the retrieval API.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 08/06/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# connectionItem resource type

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Represents a Copilot connector to include in retrieval operations in the [retrieval API](../copilotroot-retrieval.md).

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
