---
title: costManagementUsageReportRoot resource type
description: The Copilot Cost Management usage reporting root.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementUsageReportRoot resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

The Copilot Cost Management usage reporting root, contained by [costManagementRoot](costmanagementroot.md) at `/copilot/costManagement/usageReports`. It's the containment parent for the usage report collections, which report consumption of Copilot Credits by user, security group, governed service, and funding class, and for raw per-user usage detail. Every usage report requires a time selector query parameter. For details, see [Usage report time selectors and paging](../overview.md#usage-report-time-selectors-and-paging).

> [!NOTE]
> The root itself isn't readable. `GET /copilot/costManagement/usageReports` returns a `404` response and carries no data. Use the contained collections instead.

## Methods

| Method                                                                              | Return type                                                                              | Description                                                                 |
|:------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------|:----------------------------------------------------------------------------|
| [List user usage records](../costmanagementuserusagerecord-list.md)                 | [costManagementUserUsageRecord](costmanagementuserusagerecord.md) collection             | Get reported consumption per user for one completed UTC day.                |
| [List group usage records](../costmanagementgroupusagerecord-list.md)               | [costManagementGroupUsageRecord](costmanagementgroupusagerecord.md) collection           | Get reported consumption per security group for one completed UTC day.      |
| [List service usage records](../costmanagementserviceusagerecord-list.md)           | [costManagementServiceUsageRecord](costmanagementserviceusagerecord.md) collection       | Get reported consumption per governed service for one completed UTC day.    |
| [List funding usage records](../costmanagementfundingusagerecord-list.md)           | [costManagementFundingUsageRecord](costmanagementfundingusagerecord.md) collection       | Get reported consumption per funding class for a calendar month.            |
| [Get user usage detail](../costmanagementuserusagedetail-get.md)                    | [costManagementUserUsageDetail](costmanagementuserusagedetail.md)                        | Get one user's raw usage detail over a timestamp window.                    |

## Properties

| Property | Type   | Description                                                      |
|:---------|:-------|:-----------------------------------------------------------------|
| `id`     | String | Inherited from [entity](/graph/api/resources/entity). Read-only. |

## Relationships

| Relationship          | Type                                                                                   | Description                                                                                       |
|:----------------------|:---------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------|
| `fundingUsageRecords` | [costManagementFundingUsageRecord](costmanagementfundingusagerecord.md) collection     | Reported consumption per funding class for a calendar month.                                      |
| `groupUsageRecords`   | [costManagementGroupUsageRecord](costmanagementgroupusagerecord.md) collection         | Reported consumption per security group for one completed UTC day.                                |
| `serviceUsageRecords` | [costManagementServiceUsageRecord](costmanagementserviceusagerecord.md) collection     | Reported consumption per governed service for one completed UTC day.                              |
| `userUsageDetails`    | [costManagementUserUsageDetail](costmanagementuserusagedetail.md) collection           | Raw per-user usage detail, read one user at a time. The collection isn't listable; read by key only. |
| `userUsageRecords`    | [costManagementUserUsageRecord](costmanagementuserusagerecord.md) collection           | Reported consumption per user for one completed UTC day, ranked by consumption.                   |

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementUsageReportRoot",
  "id": "String"
}
```
