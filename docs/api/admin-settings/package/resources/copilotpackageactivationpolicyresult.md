---
title: copilotPackageActivationPolicyResult resource type
description: Represents one policy outcome reported during native package activation.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackageActivationPolicyResult resource type

:::zone pivot="graph-v1"

This reference describes only the beta contract. Select **beta** to view it; availability depends on the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A per-policy value in [copilotPackageActivationStep](copilotpackageactivationstep.md). This native activation status vocabulary is separate from the Publish provisioning-status vocabulary.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `displayName` | String | Nullable. Human-readable policy label, not an identifier. |
| `message` | String | Nullable. Curated developer-readable outcome text; not a stable branch key or raw partner exception. |
| `policyId` | String | Nullable. Identifier of the reported policy, not the selected template ID. |
| `status` | copilotPackagePolicyResultStatus | Non-nullable. Individual policy outcome. A tolerated `failed` value can coexist with an overall warning success. |
| `workload` | [copilotPackagePolicyWorkloadType](copilotpackagepolicyprovisioningresult.md#copilotpackagepolicyworkloadtype-enumeration) | Nullable. Policy domain. `purview`, `defender`, `entra`, or `sharePoint`; null means missing, while unrecognized values normalize to `unknownFutureValue`. |

### copilotPackagePolicyResultStatus enumeration

| Value | Description |
|:------|:------------|
| `succeeded` | Policy operation reported success. |
| `failed` | Policy operation failed. |
| `skipped` | Policy operation wasn't executed. |
| `conflict` | Policy operation reported a conflict. |
| `warning` | Policy operation reported a warning. |
| `unknownFutureValue` | Reserved for enum evolution. |

The reviewed workload mapping doesn't establish support for the standard `Prefer: include-unknown-enum-members` header. Don't conflate missing values with a normalized unknown member.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackageActivationPolicyResult",
  "displayName": "String",
  "message": "String",
  "policyId": "String",
  "status": "String",
  "workload": "String"
}
```

:::zone-end
