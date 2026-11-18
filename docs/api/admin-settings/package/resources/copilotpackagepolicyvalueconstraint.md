---
title: copilotPackagePolicyValueConstraint resource type
description: Represents trusted type, cardinality, and allowed-value constraints for a policy choice.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePolicyValueConstraint resource type

:::zone pivot="graph-v1"

This reference describes only the proposed beta contract. Select **beta** to view it; availability requires the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Trusted constraints for one configurable [copilotPackagePolicyChoiceDefinition](copilotpackagepolicychoicedefinition.md). Select a matching derived [copilotPackagePolicyValue](copilotpackagepolicyvalue.md); arbitrary JSON or type coercion isn't supported.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `allowedValues` | [copilotPackagePolicyValue](copilotpackagepolicyvalue.md) collection | Non-nullable. Complete active allowed scalar values of `dataType`. Only scalar derived types occur here, even for collection-valued choices. Source failure doesn't produce an empty collection. |
| `dataType` | copilotPackagePolicyValueDataType | Non-nullable. Accepted scalar type; unknown types don't authorize writes. |
| `isCollection` | Boolean | Non-nullable. Whether the selected value is a collection of the scalar type. Boolean collections aren't supported. |
| `usePredefinedValuesOnly` | Boolean | Non-nullable. Whether every selected scalar or collection element must match an allowed value. It isn't inferred from whether `allowedValues` is empty. |

With `usePredefinedValuesOnly: true`, an empty allowed-value list permits no configured value. With false, values still must satisfy the trusted type and cardinality; false doesn't permit arbitrary JSON.

### copilotPackagePolicyValueDataType enumeration

| Value | Description |
|:------|:------------|
| `boolean` | Boolean scalar. |
| `integer` | Signed 32-bit integer scalar, or collection when `isCollection` is true. |
| `string` | String scalar, or collection when `isCollection` is true. |
| `unknownFutureValue` | Reserved for enum evolution; not a supported configurable type. |

No undocumented unknown-enum preference-header behavior is implied.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePolicyValueConstraint",
  "allowedValues": [
    {
      "@odata.type": "microsoft.graph.copilotPackagePolicyValue"
    }
  ],
  "dataType": "String",
  "isCollection": "Boolean",
  "usePredefinedValuesOnly": "Boolean"
}
```

:::zone-end
