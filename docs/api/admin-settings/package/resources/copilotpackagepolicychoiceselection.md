---
title: copilotPackagePolicyChoiceSelection resource type
description: Represents one selected applicable policy choice and its typed value.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePolicyChoiceSelection resource type

:::zone pivot="graph-v1"

This reference describes only the proposed beta contract. Select **beta** to view it; availability requires the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

One applicable choice selected within [copilotPackagePolicySelection](copilotpackagepolicyselection.md). It isn't a policy-definition object or independently addressable resource.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `choiceId` | String | Required and non-nullable. Opaque choice identifier within the selected policy family. |
| `value` | [copilotPackagePolicyValue](copilotpackagepolicyvalue.md) | Nullable. Configurable choices require a non-null supported derived value satisfying the catalog's trusted type, cardinality, and allowed-value constraints. Reference-only choices require omission or null. |

A verified unconfigured saved value may be returned as null; malformed or unavailable saved data returns an error instead. Nullable read values don't authorize null writes for configurable choices. Explicit Boolean false and integer zero remain present values.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePolicyChoiceSelection",
  "choiceId": "String",
  "value": {
    "@odata.type": "microsoft.graph.copilotPackagePolicyValue"
  }
}
```

:::zone-end
