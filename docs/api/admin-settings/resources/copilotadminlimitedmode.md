---
title: copilotAdminLimitedMode resource type
description: Represents a setting that controls whether users of Microsoft 365 Copilot in Teams meetings can receive responses to sentiment-related prompts.
author: gautamjain14
ms.author: gajain
ms.localizationpriority: medium
doc_type: resourcePageType
ms.topic: reference
ms.date: 05/08/2025
zone_pivot_groups: graph-api-versions
---

# copilotAdminLimitedMode resource type

<!-- cSpell:ignore gautamjain14 gajain -->

:::zone pivot="graph-v1"
:::zone-end

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]
:::zone-end

Represents a setting that controls whether users of Microsoft 365 Copilot in Teams meetings can receive responses to sentiment-related prompts. When this setting is enabled, Copilot in Teams meetings doesn't respond to sentiment-related prompts and questions from the user. When disabled, it responds to them. Copilot in Teams meetings currently honors this setting. By default, the setting is disabled.

## Methods

| Method                                         | Return type               | Description                                                                  |
|:-----------------------------------------------|:--------------------------|:-----------------------------------------------------------------------------|
| [Get](../copilotadminlimitedmode-get.md)       | `copilotAdminLimitedMode` | Read the properties and relationships of a `copilotAdminLimitedMode` object. |
| [Update](../copilotadminlimitedmode-update.md) | `copilotAdminLimitedMode` | Update the properties of a `copilotAdminLimitedMode`.                        |

## Properties

| Property            | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
|:--------------------|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `groupId`           | String  | The ID of a Microsoft Entra group, for which the value of `isEnabledForGroup` is applied. The default value is `null`. If `isEnabledForGroup` is set to `true`, the `groupId` value must be provided for the Copilot limited mode in Teams meetings to be enabled for the members of the group. Optional.                                                                                                    |
| `isEnabledForGroup` | Boolean | Enables the user to be in limited mode for Copilot in Teams meetings. When `copilotAdminLimitedMode=true`, users in this mode can ask any questions, but Copilot doesn't respond to certain questions related to inferring emotions, behavior, or judgments. When `copilotAdminLimitedMode=false`, it responds to all types of questions grounded to the meeting conversation. The default value is `false`. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

``` json
{
  "@odata.type": "#microsoft.graph.copilotAdminLimitedMode",
  "groupId": "String",
  "isEnabledForGroup": "Boolean"
}
```
