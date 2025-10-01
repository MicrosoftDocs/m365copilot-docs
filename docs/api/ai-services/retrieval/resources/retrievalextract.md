---
title: retrievalExtract resource type
description: Represents a single extract within the list of retrieval extracts.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 08/08/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# retrievalExtract resource type

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]
:::zone-end

Represents a single extract within the list of retrieval extracts.

## Properties

| Property | Type   | Description                |
|:---------|:-------|:---------------------------|
| `text`   | String | The text extract received. |
| `relevanceScore`   | Float | The cosine similarity between the text extract and the queryString, normalized to the 0-1 range. It is possible for a retrievalExtract to be returned without a relevance score. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.retrievalExtract",
  "text": "String",
  "relevanceScore": "Float"
}
```
