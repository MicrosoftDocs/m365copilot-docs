---
title: dataSourceConfiguration resource type
description: Represents the data source configuration used in the retrieval API.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 08/14/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

# dataSourceConfiguration resource type

:::zone pivot="graph-v1"
Represents the data source configuration used in the [retrieval API](../copilotroot-retrieval.md).
:::zone-end

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents the data source configuration used in the [retrieval API](../copilotroot-retrieval.md). A data source configuration must contain either an `externalItem` or `sharePointEmbedded` property to be valid.
:::zone-end

## Properties

:::zone pivot="graph-v1"

| Property       | Type                                                      | Description                                               |
|:---------------|:----------------------------------------------------------|:----------------------------------------------------------|
| `externalItem` | [externalItemConfiguration](externalItemConfiguration.md) | Configuration for Copilot connectors retrieval. Optional. |

:::zone-end

:::zone pivot="graph-preview"

| Property             | Type                                                                  | Description                                                |
|:---------------------|:----------------------------------------------------------------------|:-----------------------------------------------------------|
| `externalItem`       | [externalItemConfiguration](externalItemConfiguration.md)             | Configuration for Copilot connectors retrieval. Optional.  |
| `sharePointEmbedded` | [sharePointEmbeddedConfiguration](sharepointembeddedconfiguration.md) | Configuration for SharePoint Embedded retrieval. Optional. |

:::zone-end

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

:::zone pivot="graph-v1"

```json
{
  "externalItem": {
    "@odata.type": "microsoft.graph.externalItemConfiguration"
  }
}
```

:::zone-end

:::zone pivot="graph-preview"

```json
{
  "externalItem": {
    "@odata.type": "microsoft.graph.externalItemConfiguration"
  },
  "sharePointEmbedded": {
    "@odata.type": "microsoft.graph.sharePointEmbeddedConfiguration"
  }
}
```

:::zone-end
