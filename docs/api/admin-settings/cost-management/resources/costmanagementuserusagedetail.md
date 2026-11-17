---
title: costManagementUserUsageDetail resource type
description: One user's raw usage detail over a timestamp window.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementUserUsageDetail resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

One user's raw, billable-flagged consumption of Copilot Credits over a required `startDateTime` and `endDateTime` timestamp window, bounded to the latest processed watermark rather than reprocessed. The detail is keyed on `userId`.

This resource is distinct from [costManagementUserUsageRecord](costmanagementuserusagerecord.md). A user usage record is a processed, date-bounded report for one completed UTC day that can be ranked across users. A user usage detail is raw, timestamp-bounded, and read for one user at a time. The `sessionCount` values of the two resources aren't guaranteed to be equal.

> [!NOTE]
> The parent collection `GET /copilot/costManagement/usageReports/userUsageDetails` isn't listable and returns a `404` response. Read a detail by the user's identifier instead.

## Methods

| Method                                                                   | Return type                                                                                   | Description                                                                          |
|:-------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| [Get](../costmanagementuserusagedetail-get.md)                           | [costManagementUserUsageDetail](costmanagementuserusagedetail.md)                             | Retrieve the properties and relationships of a costManagementUserUsageDetail object. |
| [List services](../costmanagementuserusageservicedetail-list.md)         | [costManagementUserUsageServiceDetail](costmanagementuserusageservicedetail.md) collection    | Get the user's raw consumption by governed service.                                  |
| [List sessions](../costmanagementuserusagesessiondetail-list.md)         | [costManagementUserUsageSessionDetail](costmanagementuserusagesessiondetail.md) collection    | Get the user's raw usage grouped by native session identifier.                       |

## Properties

| Property           | Type                                                                            | Description                                                                                                                                                                                                  |
|:-------------------|:--------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `consumedQuantity` | Double                                                                          | Raw, billable-flagged consumption attributed to this user over the requested window, bounded to the latest processed watermark rather than reprocessed. Read-only.                                           |
| `dataStatus`       | [costManagementUsageDataStatus](costmanagementusagedatastatus.md)               | Freshness of the source activity data this detail was computed from, when the source reports an as-of timestamp for the window. `null` when the source has none to report; don't treat `null` as an error or as the current time. Read-only. |
| `sessionCount`     | Int64                                                                           | Count of billable-flagged activity sessions, bounded to the latest processed watermark, that contributed to `consumedQuantity`. Excludes non-billable activity. Read-only.                                    |
| `unit`             | [costManagementUnit](costmanagementquantity.md#costmanagementunit-enumeration)  | Unit that applies to `consumedQuantity`. Read-only.                                                                                                                                                          |
| `userId`           | String                                                                          | The identifier of the user this detail covers. Read-only.                                                                                                                                                    |

## Relationships

| Relationship | Type                                                                                        | Description                                                                                                                                                                                               |
|:-------------|:--------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `services`   | [costManagementUserUsageServiceDetail](costmanagementuserusageservicedetail.md) collection  | This user's raw consumption, split by governed service. Supports `$expand`. Returns the complete result for the window and isn't paged.                                                                   |
| `sessions`   | [costManagementUserUsageSessionDetail](costmanagementuserusagesessiondetail.md) collection  | This user's raw usage grouped by session identifiers represented by the native source. Supports `$expand`. Activity without a session identifier might be omitted, and child quantities need not sum to `consumedQuantity`. |

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementUserUsageDetail",
  "consumedQuantity": "Double",
  "dataStatus": {
    "@odata.type": "microsoft.graph.costManagementUsageDataStatus"
  },
  "sessionCount": "Int64",
  "unit": "String",
  "userId": "String"
}
```
