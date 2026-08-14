---
title: "sharePointEmbeddedConfiguration resource type"
description: "Represents the configuration information for retrieving SharePoint Embedded results with the Microsoft Copilot Retrieval API"
author: JeremyKelley
ms.author: jeremyke
ms.topic: reference
ms.date: 08/14/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

# sharePointEmbeddedConfiguration resource type

<!-- cSpell:ignore jeremyke -->

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents configuration options for retrieving data from SharePoint Embedded in the [retrieval API](../copilotroot-retrieval.md). To retrieve data from SharePoint Embedded by using the Retrieval API, you must properly configure the application for [SharePoint Embedded billing](/sharepoint/dev/embedded/administration/billing/billing).

## Properties

| Property          | Type   | Description                                                                                                    |
|:------------------|:-------|:---------------------------------------------------------------------------------------------------------------|
| `containerTypeId` | String | A valid ID for a [SharePoint Embedded container type](/sharepoint/dev/embedded/getting-started/containertypes) |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "microsoft.graph.sharePointEmbeddedConfiguration",
  "containerTypeId": "String"
}
```
