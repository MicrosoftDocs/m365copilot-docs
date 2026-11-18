---
title: copilotPackagePolicyValue resource type
description: Abstract base type for supported typed Copilot package policy values.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePolicyValue resource type

:::zone pivot="graph-v1"

This reference describes only the proposed beta contract. Select **beta** to view it; availability requires the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Abstract base type used by [selected choices](copilotpackagepolicychoiceselection.md) and [allowed scalar values](copilotpackagepolicyvalueconstraint.md). Supply one supported derived type using `@odata.type`; the base type can't be instantiated.

| Derived type | Required member | Meaning |
|:-------------|:----------------|:--------|
| [copilotPackagePolicyBooleanValue](copilotpackagepolicybooleanvalue.md) | `value` | Boolean scalar. Explicit false isn't omission. |
| [copilotPackagePolicyIntegerValue](copilotpackagepolicyintegervalue.md) | `value` | Signed 32-bit integer scalar. Explicit zero isn't omission. |
| [copilotPackagePolicyStringValue](copilotpackagepolicystringvalue.md) | `value` | Nonempty string scalar. |
| [copilotPackagePolicyIntegerCollectionValue](copilotpackagepolicyintegercollectionvalue.md) | `values` | Nonempty integer collection. |
| [copilotPackagePolicyStringCollectionValue](copilotpackagepolicystringcollectionvalue.md) | `values` | Nonempty string collection. |

The chosen type and each value must satisfy the choice's trusted constraints. Arbitrary JSON, unknown or abstract type discriminators, Boolean collections, type coercion, missing required members, and null collection elements aren't supported. Allowed-value catalogs contain scalar variants only.

## Methods

None.

## Properties

None. Supported derived types define their required value member.

## Relationships

None.

## JSON representation

The following JSON representation shows the abstract resource type, which declares no properties. It isn't an instantiable request value; use a supported derived type for configured values.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePolicyValue"
}
```

:::zone-end
