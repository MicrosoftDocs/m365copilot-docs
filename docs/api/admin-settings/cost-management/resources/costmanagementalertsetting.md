---
title: costManagementAlertSetting resource type
description: Notify-only alert configuration for a spending policy.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementAlertSetting resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Notify-only alert configuration for a spending policy, addressed as the policy's `emailThresholdSettings`. Each policy has at most one, retrieved from its own URL beneath the policy. `PATCH` creates or updates the configuration; `DELETE` turns alerting off without removing separately managed recipient references. Recipients are typed `user` references managed separately with `$ref`.

Configure the alert setting after creating the policy, not inline in the policy create payload. Create a disabled configuration, add recipient references, and then enable it. At least one recipient is required while alerting is enabled. Recipients must resolve to users in the tenant; their email addresses are resolved when an alert is sent. Thresholds notify recipients but don't increase limits or authorize consumption.

## Methods

| Method                                                                  | Return type                                                   | Description                                                        |
|:------------------------------------------------------------------------|:-------------------------------------------------------------|:------------------------------------------------------------------|
| [Get](../costmanagementalertsetting-get.md)                             | [costManagementAlertSetting](costmanagementalertsetting.md)  | Retrieve the properties and relationships of a costManagementAlertSetting object. |
| [Update](../costmanagementalertsetting-update.md)                       | [costManagementAlertSetting](costmanagementalertsetting.md)  | Create or update a costManagementAlertSetting object.            |
| [Delete](../costmanagementalertsetting-delete.md)                       | None                                                         | Delete a costManagementAlertSetting object.                     |
| [List recipients](../costmanagementalertsetting-list-recipients.md)     | [user](/graph/api/resources/user) collection                 | Get the list of recipients notified by the alert setting.       |
| [Add recipient](../costmanagementalertsetting-post-recipients.md)       | None                                                         | Add a user reference as an alert recipient.                     |
| [Remove recipient](../costmanagementalertsetting-delete-recipients.md)  | None                                                         | Remove an alert recipient.                                      |

## Properties

| Property     | Type                                                                        | Description                                                                                                       |
|:-------------|:----------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------|
| `id`         | String                                                                      | Inherited entity key. Read-only.                                                                                 |
| `isEnabled`  | Boolean                                                                     | Whether alerting is enabled. On an existing configuration, omitting this property keeps its current effective value; explicit `null` isn't accepted. Enabling requires at least one linked recipient. |
| `thresholds` | [costManagementAlertThreshold](costmanagementalertthreshold.md) collection  | The configured thresholds, each with a concrete `@odata.type`. An explicit empty array (`[]`) clears the thresholds without removing the configuration or its recipients. Omitting this property on an update keeps the existing thresholds; explicit `null` for the collection or for an individual entry isn't accepted. |

## Relationships

| Relationship | Type                                          | Description                                                                                                       |
|:-------------|:----------------------------------------------|:-----------------------------------------------------------------------------------------------------------------|
| `recipients` | [user](/graph/api/resources/user) collection  | The directory users notified when a threshold is crossed. A reference navigation managed with `$ref` add and remove. The address is resolved at send time. |

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementAlertSetting",
  "id": "String",
  "isEnabled": "Boolean",
  "thresholds": [
    {
      "@odata.type": "microsoft.graph.costManagementAlertThreshold"
    }
  ]
}
```
