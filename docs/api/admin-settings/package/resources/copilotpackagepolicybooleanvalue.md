---
title: copilotPackagePolicyBooleanValue resource type
description: Represents a Boolean scalar policy value, including explicit false.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePolicyBooleanValue resource type

:::zone pivot="graph-v1"

This reference describes only the proposed beta contract. Select **beta** to view it; availability requires the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A Boolean scalar derived from [copilotPackagePolicyValue](copilotpackagepolicyvalue.md), used in selected choices or allowed scalar values.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `value` | Boolean | Required and non-nullable. Explicit false is a valid present value, subject to the choice's allowed values; omission/null isn't false. String or numeric coercion and Boolean collections aren't supported. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePolicyBooleanValue",
  "value": "Boolean"
}
```

:::zone-end
