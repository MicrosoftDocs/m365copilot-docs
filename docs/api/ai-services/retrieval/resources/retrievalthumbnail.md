---
title: "retrievalThumbnail resource type"
description: Represents a thumbnail associated with a retrievalHit.
author: JeremyKelley
ms.author: jeremyke
ms.date: 08/14/2026
ms.localizationpriority: medium
ms.topic: reference
doc_type: resourcePageType
---

<!-- cSpell:ignore jeremyke -->

# retrievalThumbnail resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a thumbnail associated with a [retrievalHit](retrievalhit.md).

## Properties

| Property     | Type   | Description                                                                                                                                               |
|:-------------|:-------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `content`    | String | The Base64 representation of the thumbnail.                                                                                                               |
| `mediaType`  | String | The media type for proper interpretation of the Base64 content.                                                                                           |
| `pageNumber` | Int32  | The numeric page number the thumbnail represents. Use this property to associate the page numbers returned in individual extracts to the appropriate thumbnail. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.retrievalThumbnail",
  "content": "String",
  "mediaType": "String",
  "pageNumber": "Integer"
}
```
