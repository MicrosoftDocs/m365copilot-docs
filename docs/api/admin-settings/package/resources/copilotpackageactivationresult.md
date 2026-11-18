---
title: copilotPackageActivationResult resource type
description: Represents the reviewed result of native agent-template activation.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackageActivationResult resource type

:::zone pivot="graph-v1"

This reference describes only the beta contract. Select **beta** to view it; availability depends on the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

The value returned by successful [Activate](../copilotpackageactivationresult-activate.md) requests. It records attempted stages, not creation of an agent instance, an effective-version pin, or a transaction.

Non-2xx responses use a separate Graph error envelope; they don't return this composite's `packageId`, `status`, or `steps`. Failed source outcomes retained in the type are not successful Graph action responses.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `error` | [copilotPackageActivationError](copilotpackageactivationerror.md) | Nullable. Retained workflow-error shape. Not populated as a root property on the normal successful Graph response; transport failures use the error envelope instead. |
| `packageId` | String | Nullable. Echo of the route's package identifier, not a discovered post-approval ID or effective activated version. |
| `status` | copilotPackageActivationStatus | Non-nullable. Overall workflow result. Inspect step and per-policy details even for a successful warning response. |
| `steps` | [copilotPackageActivationStep](copilotpackageactivationstep.md) collection | Non-nullable. Attempted steps in attempt order; an absent stage isn't evidence it succeeded. |

### copilotPackageActivationStatus enumeration

| Value | Description |
|:------|:------------|
| `succeeded` | The workflow reported success. |
| `succeededWithWarnings` | The workflow continued with an eligible warning, such as tolerated policy failure. |
| `failed` | Failure value retained for source-model parity; the normal Graph path uses a non-2xx error envelope rather than returning a successful composite with this status. |
| `unknownFutureValue` | Reserved for enum evolution. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackageActivationResult",
  "error": {
    "@odata.type": "microsoft.graph.copilotPackageActivationError"
  },
  "packageId": "String",
  "status": "String",
  "steps": [
    {
      "@odata.type": "microsoft.graph.copilotPackageActivationStep"
    }
  ]
}
```

:::zone-end
