---
title: copilotPackagePolicySelection resource type
description: Represents the selected choices for one applicable policy family.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePolicySelection resource type

:::zone pivot="graph-v1"

This reference describes only the proposed beta contract. Select **beta** to view it; availability requires the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

One selected policy family in [copilotPackagePolicyConfiguration](copilotpackagepolicyconfiguration.md). The family identifier and its choices must belong to the bound template's applicable catalog.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `policyDefinitionId` | String | Required and non-nullable. Opaque policy-family identifier from the definition catalog, not an individual choice ID. |
| `selections` | [copilotPackagePolicyChoiceSelection](copilotpackagepolicychoiceselection.md) collection | Required and non-nullable. Selected applicable choices, including every required choice in this included family. Missing/null collections, duplicate or unsupported choices are invalid. |

Required choices are checked only within a selected family. The family itself must be selected only when its definition's `requirement` is `mandatory`; default and optional families may be omitted.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePolicySelection",
  "policyDefinitionId": "String",
  "selections": [
    {
      "@odata.type": "microsoft.graph.copilotPackagePolicyChoiceSelection"
    }
  ]
}
```

:::zone-end
