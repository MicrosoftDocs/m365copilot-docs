---
title: copilotSearchDataSourcesConfiguration resource type
description: Configuration for data sources to include in the search.
author: apiarya
ms.author: apiarya
ms.topic: reference
ms.date: 7/28/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotSearchDataSourcesConfiguration resource type

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

Configuration for data sources to include in the search.

## Properties

| Property     | Type                                                                                | Description                                                           |
|:-------------|:------------------------------------------------------------------------------------|:----------------------------------------------------------------------|
| `oneDrive`   | [oneDriveDataSourceConfiguration](one-drive-data-source-configuration.md)          | OneDrive-specific search configuration (currently the only supported data source). |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotSearchDataSourcesConfiguration",
  "oneDrive": {
    "@odata.type": "microsoft.graph.oneDriveDataSourceConfiguration"
  }
}
```
