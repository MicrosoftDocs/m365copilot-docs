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

Represents user location information during a Copilot conversation through the [Microsoft 365 Copilot Chat API](../copilotroot-conversations.md).

## Properties

| Property       | Type   | Description                                                    |
|:---------------|:-------|:---------------------------------------------------------------|
| `latitude` | Float | Latitude of user location. |
| `longitude` | Float | Longitude of user location. |
| `timeZone` | String | Time zone of user location in IANA format. Required. |
| `countryOrRegion` | String | The country or region of the location. |
| `countryOrRegionConfidence` | Float | The confidence level of the country or region location. |

### IANA format

Use the table below to determine the correct IANA format given your time zone.

| Time Zone       | UTC   | IANA format                                                    |
|:---------------|:-------|:---------------------------------------------------------------|
| `latitude` | Float | Latitude of user location. |
| `longitude` | Float | Longitude of user location. |
| `timeZone` | String | Time zone of user location in IANA format. Required. |
| `countryOrRegion` | String | The country or region of the location. |
| `countryOrRegionConfidence` | Float | The confidence level of the country or region location. |


## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotContextMessage",
  "text": "String",
  "description": "String"
}
```
