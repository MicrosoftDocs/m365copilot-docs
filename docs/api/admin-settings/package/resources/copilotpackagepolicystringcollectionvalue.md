---
title: copilotPackagePolicyStringCollectionValue resource type
description: Represents a nonempty collection of string policy values.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePolicyStringCollectionValue resource type

:::zone pivot="graph-v1"

This reference describes only the proposed beta contract. Select **beta** to view it; availability requires the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A string collection derived from [copilotPackagePolicyValue](copilotpackagepolicyvalue.md), for choices whose trusted constraints require string collections. Allowed-value catalogs use string scalars instead.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `values` | String collection | Required, non-nullable, and nonempty. Strings are preserved without trimming or type coercion; each must satisfy the choice's trusted constraints. Null or incorrectly typed elements aren't supported. |

This contract doesn't impose a universal collection-size limit or nonempty-element rule beyond the trusted constraints.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePolicyStringCollectionValue",
  "values": ["String"]
}
```

:::zone-end
