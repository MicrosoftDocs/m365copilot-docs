---
title: copilotPackageActivationStep resource type
description: Represents one attempted stage of native agent-template activation.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackageActivationStep resource type

:::zone pivot="graph-v1"

This reference describes only the beta contract. Select **beta** to view it; availability depends on the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

One attempted step of [copilotPackageActivationResult](copilotpackageactivationresult.md). Native activation's `steps` and status enums are distinct from Publish's `stepResults` and provisioning outcomes.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `error` | [copilotPackageActivationError](copilotpackageactivationerror.md) | Nullable. Curated workflow detail for a warning or failed source step, not the HTTP error envelope. |
| `missingPermissions` | String collection | Non-nullable collection in the contract. Omitted when empty by the current mapper; nonempty consent-failure details aren't delivered when the normal Graph path converts the failure into a transport error. |
| `name` | copilotPackageActivationStepName | Non-nullable. Attempted stage. |
| `policyResults` | [copilotPackageActivationPolicyResult](copilotpackageactivationpolicyresult.md) collection | Non-nullable collection in the contract. Per-policy details for `assignPolicies`; the current mapper omits empty detail collections. |
| `status` | copilotPackageActivationStepStatus | Non-nullable. Step outcome; inspect warning details rather than treating every returned stage as success. |

### copilotPackageActivationStepName enumeration

| Value | Description |
|:------|:------------|
| `validateRequest` | Validate the package and input. |
| `loadPackage` | Resolve the versioned package preview. |
| `validatePermissionConsent` | Check existing consent; a skipped check isn't a consent grant or verification. |
| `approveTitle` | Optional staged-title approval, not individual request approval. |
| `assignPolicies` | Apply the selected policy template. |
| `activate` | Perform native template activation and associated mapping. |
| `unknownFutureValue` | Reserved for enum evolution. |

### copilotPackageActivationStepStatus enumeration

| Value | Description |
|:------|:------------|
| `succeeded` | The stage reported success. |
| `warning` | An eligible problem was tolerated. |
| `failed` | Retained source failure value; normal Graph non-2xx processing drops the composite steps. |
| `skipped` | The stage wasn't executed; not evidence of its effect. |
| `unknownFutureValue` | Reserved for enum evolution. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackageActivationStep",
  "error": {
    "@odata.type": "microsoft.graph.copilotPackageActivationError"
  },
  "missingPermissions": ["String"],
  "name": "String",
  "policyResults": [
    {
      "@odata.type": "microsoft.graph.copilotPackageActivationPolicyResult"
    }
  ],
  "status": "String"
}
```

:::zone-end
