---
title: copilotSearchResourceMetadataDictionary resource type
description: Represents a dictionary of metadata properties for a search result.
author: apiarya
ms.author: swapnilsapar
ms.topic: reference
ms.date: 8/15/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotSearchResourceMetadataDictionary resource type

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Represents a dictionary of metadata properties for a search result.

## Properties

This resource is a dictionary with string keys and string values. The property names in the dictionary correspond to the list of metadata fields requested in the `resourceMetadataNames` parameter to the [search API](../operation-search.md). The property values are string representations of the value of the corresponding metadata fields.

Supported field names include: `path`, `author`, `fileName`, `fileType`, `title`, `id`, `driveId`, `siteId`, `listId`, `createdBy`, `lastModifiedTime`, `modifiedBy`.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "title": "String",
  "author": "String",
  "lastModifiedTime": "String",
  "fileType": "String"
}
```
