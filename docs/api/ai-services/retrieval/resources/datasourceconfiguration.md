---
title: dataSourceConfiguration resource type
description: Represents the data source configuration used in the retrieval API.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 08/06/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# dataSourceConfiguration resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

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
