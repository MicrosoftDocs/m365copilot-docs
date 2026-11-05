---
title: costManagementUsageDataStatus resource type
description: Freshness of the source data behind a usage report result that can report it.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/27/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementUsageDataStatus resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Freshness of the source data behind a usage report result that can report it. Used by [costManagementFundingUsageRecord](costmanagementfundingusagerecord.md) and [costManagementUserUsageDetail](costmanagementuserusagedetail.md). This type is distinct from [costManagementDataStatus](costmanagementdatastatus.md), which reports when the underlying data was last modified.

## Properties

| Property               | Type           | Description                                                                                                                                                                                                                                                                                       |
|:-----------------------|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `latestSourceDateTime` | DateTimeOffset | Timestamp of the latest source event or snapshot sync incorporated into the result. Its meaning depends on the operation: the snapshot sync time for funding usage records, and the source enqueue watermark for raw user usage detail. It doesn't indicate that the result is complete or that the covered period has closed; a later read over the same window can return a later value or more rows. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementUsageDataStatus",
  "latestSourceDateTime": "DateTimeOffset"
}
```
