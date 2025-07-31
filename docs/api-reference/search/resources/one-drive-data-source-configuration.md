---
title: oneDriveDataSourceConfiguration resource type
description: OneDrive-specific search configuration including filtering and metadata options.
author: apiarya
ms.author: swapnilsapar
ms.topic: reference
ms.date: 7/28/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# oneDriveDataSourceConfiguration resource type

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

OneDrive-specific search configuration including filtering and metadata options.

## Properties

| Property                    | Type              | Description                                                                                    |
|:----------------------------|:------------------|:-----------------------------------------------------------------------------------------------|
| `filterExpression`          | String            | [Keyword Query Language (KQL)](/sharepoint/dev/general-development/keyword-query-language-kql-syntax-reference) expression for filtering OneDrive content. Currently only supports `path:` expressions.   |
| `resourceMetadataNames`     | String collection | Resource metadata fields to return in results. Supported fields: `path`, `author`, `fileName`, `fileType`, `title`, `id`, `driveId`, `siteId`, `listId`, `createdBy`, `lastModifiedTime`, `modifiedBy`.                     |

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
