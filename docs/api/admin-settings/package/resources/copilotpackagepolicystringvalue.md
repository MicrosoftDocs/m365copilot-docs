---
title: copilotPackagePolicyStringValue resource type
description: Represents a nonempty string scalar policy value.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePolicyStringValue resource type

:::zone pivot="graph-v1"

This reference describes only the proposed beta contract. Select **beta** to view it; availability requires the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A string scalar derived from [copilotPackagePolicyValue](copilotpackagepolicyvalue.md).

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `value` | String | Required, non-nullable, and nonempty. Preserved without trimming or type coercion and subject to the choice's allowed-value constraints. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePolicyStringValue",
  "value": "String"
}
```

:::zone-end
