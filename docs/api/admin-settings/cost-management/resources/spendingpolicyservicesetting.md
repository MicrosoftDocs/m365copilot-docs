---
title: spendingPolicyServiceSetting resource type
description: Desired governance state for a single service within a spending policy.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# spendingPolicyServiceSetting resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Desired governance state for a single service within a spending policy. Keyed by `serviceId`. The collection has no `DELETE`; removal is expressed by setting `state` to `disabled`, which retains the entry in that state.

## Methods

| Method                                                        | Return type                                                    | Description                                                        |
|:--------------------------------------------------------------|:---------------------------------------------------------------|:------------------------------------------------------------------|
| [List](../spendingpolicyservicesetting-list.md)               | [spendingPolicyServiceSetting](spendingpolicyservicesetting.md) collection | Get a list of spendingPolicyServiceSetting objects.   |
| [Create](../spendingpolicyservicesetting-create.md)           | [spendingPolicyServiceSetting](spendingpolicyservicesetting.md) | Create a new spendingPolicyServiceSetting object.               |
| [Get](../spendingpolicyservicesetting-get.md)                 | [spendingPolicyServiceSetting](spendingpolicyservicesetting.md) | Retrieve the properties of a spendingPolicyServiceSetting object. |
| [Update](../spendingpolicyservicesetting-update.md)           | [spendingPolicyServiceSetting](spendingpolicyservicesetting.md) | Update a spendingPolicyServiceSetting object.                   |

## Properties

| Property       | Type                                                                        | Description                                                                                                                             |
|:---------------|:----------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| `parentEtag`   | String                                                                      | The containing policy's ETag. Use this value in `If-Match` for concurrency control on service-setting changes. Read-only.             |
| `parentStatus` | [spendingPolicyStatus](spendingpolicy.md#spendingpolicystatus-enumeration)  | The containing policy's lifecycle status. A service setting has no effect while the parent policy is disabled or provisioning. Read-only. |
| `serviceId`    | String                                                                      | The key identifying a governed service category, such as `cowork` or `workIQ`. Multiple billable services can share a category. This isn't a directory object identifier. Required on create. |
| `state`        | [serviceSettingState](#servicesettingstate-enumeration)                     | Whether the service is governed (`enabled`) or excluded (`disabled`). Required on create.                                             |

### serviceSettingState enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value                | Description                               |
|:---------------------|:------------------------------------------|
| `enabled`            | The service is governed by the policy.    |
| `disabled`           | The service is excluded from the policy.  |
| `unknownFutureValue` | Evolvable enumeration sentinel value.     |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.spendingPolicyServiceSetting",
  "parentEtag": "String",
  "parentStatus": "String",
  "serviceId": "String",
  "state": "String"
}
```
