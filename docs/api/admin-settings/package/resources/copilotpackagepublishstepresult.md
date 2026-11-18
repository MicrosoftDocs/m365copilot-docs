---
title: copilotPackagePublishStepResult resource type
description: Represents an attempted publication step with its execution outcome and backend-neutral business status.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePublishStepResult resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

One recorded member of [copilotPackagePublishResult](copilotpackagepublishresult.md). This proposed typed beta value uses public enums, not provider operation-status categories.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `errorMessage` | String | Nullable. Curated developer-readable outcome text; not a stable machine key or raw downstream details. |
| `operationStatus` | copilotPackagePublishOperationStatus | Non-nullable. Backend-neutral business reason, separate from HTTP status and the step's execution outcome. |
| `outcome` | copilotPackagePublishStepOutcome | Non-nullable. Execution outcome. |
| `permissionConsent` | [copilotPackagePermissionConsentResult](copilotpackagepermissionconsentresult.md) | Nullable. Existing consent-status details, not a grant receipt. |
| `policyAssignment` | [copilotPackagePolicyAssignmentResult](copilotpackagepolicyassignmentresult.md) | Nullable. Aggregate and per-policy assignment details. |
| `step` | copilotPackagePublishStep | Non-nullable. Attempted publication stage. |
| `templatePublication` | [copilotPackageTemplatePublicationResult](copilotpackagetemplatepublicationresult.md) | Nullable. Template-mapping details. |

### copilotPackagePublishStep enumeration

| Value | Description |
|:------|:------------|
| `validateRequest` | Validate publication input. |
| `loadRequestedAgent` | Resolve the selected pending package. |
| `validatePermissionConsent` | Check existing consent; doesn't grant consent. |
| `assignPolicies` | Apply the selected policy template. |
| `approve` | Approve the pending publication, not an individual access/hiring request. |
| `allow` | Apply publication availability. |
| `deploy` | Optional regular-package acquisition. Absent for omitted/null installation. |
| `publishAgentForTemplate` | Publish the agent-to-template mapping. |
| `unknownFutureValue` | Reserved for enum evolution. |

The optional `deploy` stage follows `allow` and precedes `publishAgentForTemplate`.

### copilotPackagePublishStepOutcome enumeration

| Value | Description |
|:------|:------------|
| `succeeded` | The stage reported completion. |
| `warning` | An eligible failure was tolerated. |
| `failed` | Defined failure value, not returned in current successful Graph responses. Failures use a non-2xx error envelope without step results; earlier effects aren't rolled back. |
| `skipped` | The valid installation choice encountered positive existing-deployment evidence. No acquisition call or supplied-audience application occurred. |
| `unknownFutureValue` | Reserved for enum evolution. |

An initial requested-detail or post-approval runtime positive deployment signal can cause the skip. A skipped `deploy` uses `operationStatus: "success"` and null `errorMessage`, not an installation-success receipt.

### copilotPackagePublishOperationStatus enumeration

| Value | Description |
|:------|:------------|
| `success` | No business failure was reported for the recorded stage. |
| `badRequest` | Input or current operation state is invalid. |
| `internalError` | An internal operation failure occurred. |
| `methodNotAllowed` | The operation isn't supported for this caller or target. |
| `forbidden` | The operation isn't authorized. |
| `unprocessableEntity` | The request can't be processed in its current form. |
| `unauthorized` | Required authentication couldn't be established. |
| `notFound` | The required target wasn't found. |
| `downstreamError` | A required dependency failed or couldn't supply usable evidence. Provider identity isn't part of the public reason. |
| `unknownFutureValue` | Reserved for enum evolution. |

These are business reasons, not HTTP status numbers or permission to infer a particular internal service. Evolvable enum sentinels don't imply undocumented `Prefer` header support.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePublishStepResult",
  "errorMessage": "String",
  "operationStatus": "String",
  "outcome": "String",
  "permissionConsent": {
    "@odata.type": "microsoft.graph.copilotPackagePermissionConsentResult"
  },
  "policyAssignment": {
    "@odata.type": "microsoft.graph.copilotPackagePolicyAssignmentResult"
  },
  "step": "String",
  "templatePublication": {
    "@odata.type": "microsoft.graph.copilotPackageTemplatePublicationResult"
  }
}
```
