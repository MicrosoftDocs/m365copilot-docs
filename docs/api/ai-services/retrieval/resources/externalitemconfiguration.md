---
title: externalItemConfiguration resource type
description: Represents configuration options for retrieving data from Copilot connectors in the retrieval API.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 10/10/2025
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

# externalItemConfiguration resource type

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]
:::zone-end

:::zone pivot="graph-v1"
:::zone-end

Represents configuration options for retrieving data from Copilot connectors in the [retrieval API](../copilotroot-retrieval.md).

## Properties

| Property      | Type                                           | Description                                                                                                       |
|:--------------|:-----------------------------------------------|:------------------------------------------------------------------------------------------------------------------|
| `connections` | [connectionItem](connectionitem.md) collection | An array of connection objects specifying the Copilot connector connection IDs to include in retrieval. Required. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "microsoft.graph.externalItemConfiguration",
  "connections": [
    {
      "@odata.type": "microsoft.graph.connectionItem"
    }
  ]
}
```
