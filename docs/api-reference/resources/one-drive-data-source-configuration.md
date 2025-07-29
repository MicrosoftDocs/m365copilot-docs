---
title: oneDriveDataSourceConfiguration resource type
description: OneDrive-specific search configuration including filtering and metadata options.
author: swapnilsapar
ms.author: swapnilsapar
ms.topic: reference
ms.date: 7/28/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# oneDriveDataSourceConfiguration resource type

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

OneDrive-specific search configuration including filtering and metadata options.

## Properties

| Property                    | Type              | Description                                                                                    |
|:----------------------------|:------------------|:-----------------------------------------------------------------------------------------------|
| `filterExpression`          | String            | KQL expression for filtering OneDrive content. Currently only supports `path:` expressions.   |
| `resourceMetadataNames`     | String collection | Resource metadata fields to return in results (e.g., "title", "author").                     |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.oneDriveDataSourceConfiguration",
  "filterExpression": "String",
  "resourceMetadataNames": [
    "String"
  ]
}
```
