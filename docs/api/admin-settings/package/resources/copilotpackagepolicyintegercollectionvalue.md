---
title: copilotPackagePolicyIntegerCollectionValue resource type
description: Represents a nonempty collection of signed 32-bit integer policy values.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePolicyIntegerCollectionValue resource type

:::zone pivot="graph-v1"

This reference describes only the proposed beta contract. Select **beta** to view it; availability requires the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

An integer collection derived from [copilotPackagePolicyValue](copilotpackagepolicyvalue.md), for choices whose trusted constraints require integer collections. Allowed-value catalogs use integer scalars instead.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `values` | Int32 collection | Required, non-nullable, and nonempty. Every element must be a signed 32-bit integer satisfying the choice's trusted constraints. Null or incorrectly typed elements aren't supported. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePolicyIntegerCollectionValue",
  "values": ["Int32"]
}
```

:::zone-end
