---
title: copilotPackagePermissionConsentResult resource type
description: Represents missing permissions identified during Copilot package publication.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 10/23/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePermissionConsentResult resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents the consent-status details in the `permissionConsent` property of [copilotPackagePublishStepResult](copilotpackagepublishstepresult.md).

This result describes a validation check, not a permission-consent grant.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `missingPermissions` | String collection | Non-nullable. Missing permission names. An empty collection doesn't establish every other prerequisite for publication. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePermissionConsentResult",
  "missingPermissions": ["String"]
}
```
