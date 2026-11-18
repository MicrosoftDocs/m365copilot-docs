---
title: copilotPackagePolicyIntegerValue resource type
description: Represents a signed 32-bit integer scalar policy value, including explicit zero.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePolicyIntegerValue resource type

:::zone pivot="graph-v1"

This reference describes only the proposed beta contract. Select **beta** to view it; availability requires the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A signed 32-bit integer scalar derived from [copilotPackagePolicyValue](copilotpackagepolicyvalue.md).

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `value` | Int32 | Required and non-nullable. Explicit zero is a present value, subject to the choice's constraints; omission/null isn't zero. String and Boolean coercion isn't supported. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePolicyIntegerValue",
  "value": "Int32"
}
```

:::zone-end
