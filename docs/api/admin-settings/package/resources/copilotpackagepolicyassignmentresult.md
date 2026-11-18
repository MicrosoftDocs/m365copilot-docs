---
title: copilotPackagePolicyAssignmentResult resource type
description: Represents aggregate and individual policy-assignment outcomes during Copilot package publication.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePolicyAssignmentResult resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents assignment details in the `policyAssignment` property of [copilotPackagePublishStepResult](copilotpackagepublishstepresult.md).

Aggregate `success` doesn't mean every policy was applied. Inspect individual `policyProvisioningResults`, including `skipped` results, and distinguish known applied changes from uncertain partial completion.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `message` | String | Nullable. Additional assignment context. |
| `policyProvisioningResults` | [copilotPackagePolicyProvisioningResult](copilotpackagepolicyprovisioningresult.md) collection | Non-nullable. Per-policy results. |
| `status` | [copilotPackagePolicyProvisioningStatus](copilotpackagepolicyprovisioningresult.md#copilotpackagepolicyprovisioningstatus-enumeration) | Nullable. Aggregate policy-assignment outcome; missing is distinct from the enum's unknown sentinel. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePolicyAssignmentResult",
  "message": "String",
  "policyProvisioningResults": [
    {
      "@odata.type": "microsoft.graph.copilotPackagePolicyProvisioningResult"
    }
  ],
  "status": "String"
}
```
