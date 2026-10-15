---
title: selectedGroupsSpendingPolicy resource type
description: A spending policy that governs only the users in its assigned groups.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# selectedGroupsSpendingPolicy resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A spending policy that governs only the users in its assigned groups. Derived from [spendingPolicy](spendingpolicy.md); it adds the `assignedGroups` relationship. Omitting `assignedGroups` or supplying an empty collection creates a disabled policy.

## Methods

| Method                                                                                               | Return type                               | Description                                                        |
|:-----------------------------------------------------------------------------------------------------|:------------------------------------------|:------------------------------------------------------------------|
| [List](../spendingpolicy-list.md)                                                                    | [spendingPolicy](spendingpolicy.md) collection | Get a list of spendingPolicy objects.                       |
| [Create](../spendingpolicy-create.md)                                                                | [spendingPolicy](spendingpolicy.md)       | Create a new spendingPolicy object.                               |
| [Get](../spendingpolicy-get.md)                                                                      | [spendingPolicy](spendingpolicy.md)       | Retrieve the properties and relationships of a spendingPolicy object. |
| [Update](../spendingpolicy-update.md)                                                                | [spendingPolicy](spendingpolicy.md)       | Update a spendingPolicy object.                                  |
| [Delete](../spendingpolicy-delete.md)                                                                | None                                      | Delete a spendingPolicy object.                                 |
| [List assigned groups](../selectedgroupsspendingpolicy-list-assignedgroups.md)                       | [group](/graph/api/resources/group) collection | Get the list of groups assigned to the policy.             |
| [Add assigned group](../selectedgroupsspendingpolicy-post-assignedgroups.md)                         | None                                      | Add a group reference to the policy.                             |
| [Remove assigned group](../selectedgroupsspendingpolicy-delete-assignedgroups.md)                    | None                                      | Remove a group reference from the policy.                        |

## Properties

All properties are inherited from [spendingPolicy](spendingpolicy.md). This type adds no properties of its own.

| Property               | Type                                                                        | Description                                                                 |
|:-----------------------|:----------------------------------------------------------------------------|:----------------------------------------------------------------------------|
| `billingMethods`       | [costManagementBillingMethods](spendingpolicy.md#costmanagementbillingmethods-enumeration) | Inherited from [spendingPolicy](spendingpolicy.md). How consumption is funded. |
| `createdBy`            | [identitySet](/graph/api/resources/identityset)                             | Inherited from [spendingPolicy](spendingpolicy.md). The identity that created the policy. Read-only. |
| `createdDateTime`      | DateTimeOffset                                                              | Inherited from [spendingPolicy](spendingpolicy.md). When the policy was created. Read-only. |
| `displayName`          | String                                                                      | Inherited from [spendingPolicy](spendingpolicy.md). The policy display name. Required on create. |
| `id`                   | String                                                                      | Inherited from [spendingPolicy](spendingpolicy.md). Entity key. Read-only.  |
| `lastModifiedBy`       | [identitySet](/graph/api/resources/identityset)                             | Inherited from [spendingPolicy](spendingpolicy.md). The identity that last modified the policy. Read-only. |
| `lastModifiedDateTime` | DateTimeOffset                                                              | Inherited from [spendingPolicy](spendingpolicy.md). When the policy was last modified. Read-only. |
| `periodLimit`          | [costManagementQuantity](costmanagementquantity.md)                         | Inherited from [spendingPolicy](spendingpolicy.md). The consumption limit for one period. Required on create. |
| `perUserLimit`         | [costManagementQuantity](costmanagementquantity.md)                         | Inherited from [spendingPolicy](spendingpolicy.md). The uniform per-user consumption limit. Required on create. |
| `status`               | [spendingPolicyStatus](spendingpolicy.md#spendingpolicystatus-enumeration)  | Inherited from [spendingPolicy](spendingpolicy.md). The policy lifecycle status. Read-only. |

## Relationships

| Relationship             | Type                                                                       | Description                                                                                                                           |
|:-------------------------|:---------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
| `assignedGroups`         | [group](/graph/api/resources/group) collection                             | The groups the policy is assigned to. A reference navigation managed with `$ref` add and remove through the `microsoft.graph.selectedGroupsSpendingPolicy` cast segment. |
| `emailThresholdSettings` | [costManagementAlertSetting](costmanagementalertsetting.md)                | Inherited from [spendingPolicy](spendingpolicy.md). Nullable. Notify-only email threshold configuration.                             |
| `serviceSettings`        | [spendingPolicyServiceSetting](spendingpolicyservicesetting.md) collection | Inherited from [spendingPolicy](spendingpolicy.md). Per-service settings contained by the policy.                                    |

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.selectedGroupsSpendingPolicy",
  "billingMethods": "String",
  "createdBy": {
    "@odata.type": "microsoft.graph.identitySet"
  },
  "createdDateTime": "DateTimeOffset",
  "displayName": "String",
  "id": "String",
  "lastModifiedBy": {
    "@odata.type": "microsoft.graph.identitySet"
  },
  "lastModifiedDateTime": "DateTimeOffset",
  "periodLimit": {
    "@odata.type": "microsoft.graph.costManagementQuantity"
  },
  "perUserLimit": {
    "@odata.type": "microsoft.graph.costManagementQuantity"
  },
  "status": "String"
}
```
