---
title: spendingPolicy resource type
description: A policy that governs Copilot Credits consumption for an audience.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# spendingPolicy resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A policy that governs Copilot Credits consumption for an audience. This is an abstract type. Every policy is one of its derived types, identified by the `@odata.type` property on create:

- [allUsersSpendingPolicy](allusersspendingpolicy.md)
- [selectedGroupsSpendingPolicy](selectedgroupsspendingpolicy.md)

The audience type can't be changed by updating a policy. Changing the audience type requires deleting and recreating the policy, which creates a new identifier and resets the new policy's consumption accounting.

Policies are created `disabled`. For a group-scoped policy, link at least one group before the service can enable it. Read `status` to observe provisioning; clients don't write this property, and at least one service must remain enabled. Read `serviceSettings`, `emailThresholdSettings`, and group assignments through their own endpoints; these relationships aren't expandable.

Updates, deletion, and changes to child settings or references use the parent policy's ETag through `If-Match`. Read a fresh policy before a mutation and use the returned ETag for the next mutation. Updates aren't permitted while a policy is provisioning, provisioning has failed, or the service has disabled it because of subscription or linked-resource state.

## Methods

| Method                                                | Return type                              | Description                                                        |
|:------------------------------------------------------|:-----------------------------------------|:------------------------------------------------------------------|
| [List](../spendingpolicy-list.md)                     | [spendingPolicy](spendingpolicy.md) collection | Get a list of spendingPolicy objects.                       |
| [Create](../spendingpolicy-create.md)                 | [spendingPolicy](spendingpolicy.md)      | Create a new spendingPolicy object.                               |
| [Get](../spendingpolicy-get.md)                       | [spendingPolicy](spendingpolicy.md)      | Retrieve the properties and relationships of a spendingPolicy object. |
| [Update](../spendingpolicy-update.md)                 | [spendingPolicy](spendingpolicy.md)      | Update a spendingPolicy object.                                  |
| [Delete](../spendingpolicy-delete.md)                 | None                                     | Delete a spendingPolicy object.                                 |

## Properties

| Property               | Type                                                                        | Description                                                                                                                                                                              |
|:-----------------------|:----------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `billingMethods`       | [costManagementBillingMethods](#costmanagementbillingmethods-enumeration)   | How consumption under this policy is funded. This is a flags value, so combined values such as `prepaidCredits,payAsYouGo` are valid. Optional at creation and updatable with `PATCH`. When omitted at creation, the value is `notSpecified`. |
| `createdBy`            | [identitySet](/graph/api/resources/identityset)                             | The identity that created the policy. An identity detail that isn't available is returned as `null`. Read-only.                                                                        |
| `createdDateTime`      | DateTimeOffset                                                              | When the policy was created. Read-only. Supports `$filter` (`eq`, `ne`) and `$orderby`.                                                                                                 |
| `displayName`          | String                                                                      | The policy display name. Must be 10-64 characters, letters, digits, and spaces only. Required on create. Supports `$filter` (`eq`, `ne`) and `$orderby`.                               |
| `id`                   | String                                                                      | Inherited entity key. Read-only.                                                                                                                                                        |
| `lastModifiedBy`       | [identitySet](/graph/api/resources/identityset)                             | The identity that last modified the policy. Read-only.                                                                                                                                  |
| `lastModifiedDateTime` | DateTimeOffset                                                              | When the policy was last modified. Read-only.                                                                                                                                           |
| `periodLimit`          | [costManagementQuantity](costmanagementquantity.md)                         | The consumption limit for one period. A period is a UTC calendar month: consumption is counted month-to-date and resets at 00:00 UTC on the first of each month. Required on create.   |
| `perUserLimit`         | [costManagementQuantity](costmanagementquantity.md)                         | The uniform per-user consumption limit over the same period. Required on create. Supply an `unlimitedCostManagementQuantity` when no per-user cap is wanted.                           |
| `status`               | [spendingPolicyStatus](#spendingpolicystatus-enumeration)                   | The policy lifecycle status. A policy is created `disabled` and becomes `enabled` once its audience is in place. Read-only. Supports `$filter` (`eq`, `ne`).                            |

### costManagementBillingMethods enumeration

A flags [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values. Because it's a flags enumeration, combined values such as `prepaidCredits,payAsYouGo` are valid.

| Value                | Description                                                       |
|:---------------------|:------------------------------------------------------------------|
| `notSpecified`       | No billing method is known or was specified. The value is `0`.    |
| `prepaidCredits`     | Prepaid Copilot Credits, purchased through the pre-purchase plan. The value is `1`. |
| `payAsYouGo`         | Consumption billed on demand, with no prepaid pool. The value is `2`. |
| `unknownFutureValue` | Evolvable enumeration sentinel value. The value is `4`.           |

### spendingPolicyStatus enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value                | Description                                                                              |
|:---------------------|:-----------------------------------------------------------------------------------------|
| `enabled`            | The policy is active and enforced.                                                       |
| `disabled`           | The policy isn't enforced. This is the initial state of a newly created policy.          |
| `provisioning`      | The policy is being created or transitioned; group links and validation are in progress. |
| `provisioningFailed` | The most recent provisioning attempt failed; the policy isn't enforced.                  |
| `unknownFutureValue` | Evolvable enumeration sentinel value.                                                    |

## Relationships

| Relationship            | Type                                                                             | Description                                                                                                       |
|:------------------------|:---------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------|
| `emailThresholdSettings` | [costManagementAlertSetting](costmanagementalertsetting.md)                     | Nullable. Notify-only email threshold configuration. Addressed beneath the policy rather than returned inline.    |
| `serviceSettings`       | [spendingPolicyServiceSetting](spendingpolicyservicesetting.md) collection       | Per-service settings contained by the policy. Required on create.                                                |

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.spendingPolicy",
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
