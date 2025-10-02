---
title: connectionItem resource type
description: Represents a Copilot connector to include in retrieval operations in the retrieval API.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 08/08/2025
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

# connectionItem resource type

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]
:::zone-end

:::zone pivot="graph-v1"
:::zone-end

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
