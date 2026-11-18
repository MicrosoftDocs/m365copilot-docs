---
title: copilotPackagePublishResult resource type
description: Represents recorded steps and curated context from a package publication workflow.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePublishResult resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

The proposed typed value returned by [Publish](../copilotpackagepublishresult-publish.md), not an updated package. Inspect recorded step and per-policy results even when the HTTP request succeeds.

No aggregate `statusCode` or provider-category property is exposed. Step execution outcome and backend-neutral `operationStatus` remain distinct. A later failure doesn't roll back earlier effects; warnings, partial completion, and unknown effects must not be treated as universal success.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `errorMessage` | String | Nullable. Curated aggregate context; not a stable error identifier or provider-specific contract. |
| `stepResults` | [copilotPackagePublishStepResult](copilotpackagepublishstepresult.md) collection | Non-nullable. Recorded attempted steps in execution order. An unreached or unrecorded stage isn't evidence of success. |

Optional regular-package acquisition contributes `deploy` after `allow` and before template mapping. Omitted/null installation has no `deploy` entry. Positive existing deployment yields `skipped` without applying the supplied acquisition audience; successful acquisition isn't host-installation or effective-access proof.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePublishResult",
  "errorMessage": "String",
  "stepResults": [
    {
      "@odata.type": "microsoft.graph.copilotPackagePublishStepResult"
    }
  ]
}
```
