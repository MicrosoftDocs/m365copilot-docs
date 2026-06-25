---
title: Work IQ - copilotConversationLocation resource type
description: Represents user location information during a Copilot conversation through the Work IQ Chat API.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 06/24/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: work-iq-rest-api-versions
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Work IQ - copilotConversationLocation resource type

:::zone pivot="work-iq-rest-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

:::zone pivot="work-iq-rest-prod"
:::zone-end

Represents user location information during a Copilot conversation through the [Work IQ Chat API](../copilotroot-post-conversations.md).

## Properties

| Property                    | Type   | Description                                                                                          |
|:----------------------------|:-------|:-----------------------------------------------------------------------------------------------------|
| `countryOrRegion`           | String | The country or region of the location.                                                               |
| `countryOrRegionConfidence` | Float  | The confidence level of the country or region location.                                              |
| `latitude`                  | Float  | Latitude of user location.                                                                           |
| `longitude`                 | Float  | Longitude of user location.                                                                          |
| `timeZone`                  | String | Time zone of user location in [IANA format](https://aka.ms/Copilot-APIs/Chat/IANA_Format). Required. |

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
