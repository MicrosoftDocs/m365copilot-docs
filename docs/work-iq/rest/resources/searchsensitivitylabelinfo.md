---
title: Work IQ - searchSensitivityLabelInfo resource type
description: Describes the information protection label that details how to apply a sensitivity label to information.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 06/24/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: work-iq-rest-api-versions
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Work IQ - searchSensitivityLabelInfo resource type

:::zone pivot="work-iq-rest-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

:::zone pivot="work-iq-rest-prod"
:::zone-end

Describes the information protection label that details how to properly apply a sensitivity label to information.

## Properties

| Property             | Type    | Description                                                        |
|:---------------------|:--------|:-------------------------------------------------------------------|
| `color`              | String  | The color that the UI should display for the label, if configured. |
| `displayName`        | String  | The display name for the sensitivity label                         |
| `priority`           | Int32   | The priority in which the sensitivity label is applied.            |
| `sensitivityLabelId` | String  | The ID of the sensitivity label.                                   |
| `tooltip`            | String  | The tooltip that should be displayed for the label in a UI.        |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.searchSensitivityLabelInfo",
  "sensitivityLabelId": "String",
  "displayName": "String",
  "tooltip": "String",
  "priority": "Integer",
  "color": "String"
}
```
