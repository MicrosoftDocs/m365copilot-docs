---
title: externalItemConfiguration resource type
description: Represents configuration options for retrieving data from Copilot connectors in the retrieval API.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 08/08/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# externalItemConfiguration resource type

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]
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
