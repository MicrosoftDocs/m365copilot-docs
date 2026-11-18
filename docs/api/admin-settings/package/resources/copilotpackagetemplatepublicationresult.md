---
title: copilotPackageTemplatePublicationResult resource type
description: Represents the outcome of publishing a Copilot package's agent-to-template mapping.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackageTemplatePublicationResult resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents mapping-publication details in the `templatePublication` property of [copilotPackagePublishStepResult](copilotpackagepublishstepresult.md).

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `message` | String | Nullable. Additional template-publication context. |
| `policyProvisioningResults` | [copilotPackagePolicyProvisioningResult](copilotpackagepolicyprovisioningresult.md) collection | Non-nullable. Per-policy results returned by template publication. Can be empty. |
| `resourceId` | String | Nullable. Identifier supplied by template-mapping publication, when available; not proof of a newly created instance, installed package, or effective activated version. |
| `status` | [copilotPackagePolicyProvisioningStatus](copilotpackagepolicyprovisioningresult.md#copilotpackagepolicyprovisioningstatus-enumeration) | Nullable. Mapping-publication outcome, separate from HTTP status and Publish step execution. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackageTemplatePublicationResult",
  "message": "String",
  "policyProvisioningResults": [
    {
      "@odata.type": "microsoft.graph.copilotPackagePolicyProvisioningResult"
    }
  ],
  "resourceId": "String",
  "status": "String"
}
```
