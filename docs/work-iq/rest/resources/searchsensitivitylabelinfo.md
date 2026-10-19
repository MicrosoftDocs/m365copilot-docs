---
title: Work IQ - searchSensitivityLabelInfo resource type
description: Describes the information protection label that details how to apply a sensitivity label to information.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.topic: reference
ms.date: 10/02/2026
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

:::zone pivot="work-iq-rest-prod"

| Property             | Type    | Description                                                                                    |
|:---------------------|:--------|:-----------------------------------------------------------------------------------------------|
| `color`              | String  | The color that the UI should display for the label, if configured.                             |
| `displayName`        | String  | The display name for the sensitivity label                                                     |
| `isEncrypted`        | Boolean | Indicates whether the labeled resource is encrypted. This property can have a value of `null`. |
| `priority`           | Int32   | The priority in which the sensitivity label is applied.                                        |
| `sensitivityLabelId` | String  | The ID of the sensitivity label.                                                               |
| `tooltip`            | String  | The tooltip that should be displayed for the label in a UI.                                    |

:::zone-end

:::zone pivot="work-iq-rest-beta"

| Property             | Type    | Description                                                        |
|:---------------------|:--------|:-------------------------------------------------------------------|
| `color`              | String  | The color that the UI should display for the label, if configured. |
| `displayName`        | String  | The display name for the sensitivity label                         |
| `priority`           | Int32   | The priority in which the sensitivity label is applied.            |
| `sensitivityLabelId` | String  | The ID of the sensitivity label.                                   |
| `tooltip`            | String  | The tooltip that should be displayed for the label in a UI.        |

:::zone-end

## Relationships

None.

## JSON representation

The following JSON representations show the resource type.

:::zone pivot="work-iq-rest-prod"

```json
{
  "@odata.type": "#microsoft.graph.searchSensitivityLabelInfo",
  "sensitivityLabelId": "String",
  "displayName": "String",
  "tooltip": "String",
  "priority": "Integer",
  "color": "String",
  "isEncrypted": "Boolean"
}
```

:::zone-end

:::zone pivot="work-iq-rest-beta"

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

:::zone-end
