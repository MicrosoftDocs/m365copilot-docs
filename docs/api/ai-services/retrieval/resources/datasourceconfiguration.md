---
title: dataSourceConfiguration resource type
description: Represents the data source configuration used in the retrieval API.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 08/08/2025
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

# dataSourceConfiguration resource type

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]
:::zone-end

:::zone pivot="graph-v1"
:::zone-end

Represents the data source configuration used in the [retrieval API](../copilotroot-retrieval.md).

## Properties

| Property       | Type                                                      | Description                                               |
|:---------------|:----------------------------------------------------------|:----------------------------------------------------------|
| `externalItem` | [externalItemConfiguration](externalItemConfiguration.md) | Configuration for Copilot connectors retrieval. Required. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "externalItem": {
    "@odata.type": "microsoft.graph.externalItemConfiguration"
  }
}
```
