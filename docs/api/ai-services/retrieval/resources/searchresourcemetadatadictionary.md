---
title: searchResourceMetadataDictionary resource type
description: Represents a metadata dictionary type.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 08/08/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# searchResourceMetadataDictionary resource type

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]
:::zone-end

Represents a metadata dictionary in a [retrievalHit](retrievalhit.md). This resource is an open type. For more information on open types, see [Open Type](https://www.odata.org/getting-started/advanced-tutorial/#openType).

The property names in the dictionary correspond to the list of metadata fields requested in the `resourceMetadata` parameter to the [retrieval API](../copilotroot-retrieval.md). The property values are string representations of the value of the corresponding metadata fields.

## JSON representation

The following JSON representation shows the resource type. For example, if the requested metadata fields are `title` and `author`, the resulting dictionary is:

```json
{
  "@odata.type": "#microsoft.graph.searchResourceMetadataDictionary",
  "title": "String",
  "author": "String"
}
```
