---
title: copilotPackagePublishScope resource type
description: Represents the publication audience supplied to the Copilot package publish action.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePublishScope resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents the publication audience supplied in the `publishScope` parameter of [Publish](../copilotpackagepublishresult-publish.md).

This complex type describes availability, not installation or permission consent.

Use the separate [copilotPackageInstallScope](copilotpackageinstallscope.md) parameter for optional regular-package acquisition during Publish. Publication `noOne` isn't an installation choice, and this type's `policyType` isn't accepted in `installScope`.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `policyType` | copilotPackageAssignmentPolicyType | Optional and nullable. Availability-policy category; omission/null defaults to `allowAccess`. This isn't a per-policy workload. Legacy fallback behavior doesn't establish the proposed strict typed contract. |
| `principals` | [copilotPackagePublishPrincipal](copilotpackagepublishprincipal.md) collection | Required and non-nullable. Explicit audience members. Nonempty for `specificUsers`; supply `[]` when no explicit members are selected. |
| `scope` | copilotPackageAudienceScope | Required and non-nullable. The availability audience. |

### copilotPackageAudienceScope enumeration

| Value | Description |
|:------|:------------|
| `specificUsers` | Explicit selected principals. |
| `everyone` | Availability for everyone. |
| `noOne` | No availability audience selected. Not an accepted installation audience. |
| `unknownFutureValue` | Reserved for enum evolution; not an accepted input. |

### copilotPackageAssignmentPolicyType enumeration

| Value | Description |
|:------|:------------|
| `allowAccess` | Availability/access policy category; default for omission/null. |
| `allowOnboarding` | Onboarding-availability policy category. |
| `unknownFutureValue` | Reserved for enum evolution; not an accepted typed input. |

This is the proposed beta typed contract. Matching backend admission is a cutover requirement; acceptance or fallback of legacy provider strings isn't a documented strict-input capability.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePublishScope",
  "policyType": "String",
  "principals": [
    {
      "@odata.type": "microsoft.graph.copilotPackagePublishPrincipal"
    }
  ],
  "scope": "String"
}
```
