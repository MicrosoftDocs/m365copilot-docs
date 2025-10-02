---
title: copilotConversationLocation resource type
description: Represents user location information during a Copilot conversation through the Microsoft 365 Copilot Chat API.
author: muwagerikpe
ms.author: muwagerikpe
ms.topic: reference
ms.date: 09/29/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotConversationLocation resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents user location information during a Copilot conversation through the [Microsoft 365 Copilot Chat API](../copilotroot-post-conversations.md).

## Properties

| Property       | Type   | Description                                                    |
|:---------------|:-------|:---------------------------------------------------------------|
| `latitude` | Float | Latitude of user location. |
| `longitude` | Float | Longitude of user location. |
| `timeZone` | String | Time zone of user location in [IANA format](https://aka.ms/Copilot-APIs/Chat/IANA_Format). Required. |
| `countryOrRegion` | String | The country or region of the location. |
| `countryOrRegionConfidence` | Float | The confidence level of the country or region location. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotConversationLocation",
  "latitude": "Float",
  "longitude": "Float",
  "timeZone": "String",
  "countryOrRegion": "String",
  "countryOrRegionConfidence": "Float"
}
```
