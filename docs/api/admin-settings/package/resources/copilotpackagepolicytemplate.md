---
title: copilotPackagePolicyTemplate resource type
description: Represents a Copilot package policy template and its saved selected configuration.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePolicyTemplate resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a tenant policy template used for Copilot package publication or native template activation.

The `policyTemplates` collection under `/copilot/admin/catalog` returns summaries. A keyed read returns saved selected configuration; the separate template-bound definition catalog returns complete applicable choices, not saved selections or internal policy metadata.

Use an applicable template's `id` as the required `policyTemplateId` of [Publish](../copilotpackagepublishresult-publish.md) or native [Activate](../copilotpackageactivationresult-activate.md). Publish's request-local customization doesn't save the template. Activate later resolves fresh saved settings for that ID rather than a prior Publish snapshot.

This is the proposed beta contract, requiring matching schema and receiving-service release. It doesn't establish live V1 availability, template-write deployment, or application-only backend execution.

[!INCLUDE [package-management-license](../../../includes/package-management-license.md)]

## Methods

| Method | Return type | Description |
|:-------|:------------|:------------|
| [List](../copilotpackagepolicytemplate-list.md) | [copilotPackagePolicyTemplate](copilotpackagepolicytemplate.md) collection | Get available policy-template metadata. |
| [Get](../copilotpackagepolicytemplate-get.md) | [copilotPackagePolicyTemplate](copilotpackagepolicytemplate.md) | Read one template and its saved selected configuration. |
| [Update](../copilotpackagepolicytemplate-update.md) | None. | Save guarded changes to an existing writable custom template; no upsert or protected/default writes. |
| [List policy definitions](../copilotpackagepolicydefinition-list.md) | [copilotPackagePolicyDefinition](copilotpackagepolicydefinition.md) collection | Read the complete applicable definitions and choices for this template. |
| [Copy](../copilotpackagepolicytemplate-copy.md) | [copilotPackagePolicyTemplate](copilotpackagepolicytemplate.md) | Create one new custom template by copying its source on the server. |

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `description` | String | Nullable. Explanatory text. Update omission preserves it; null clears it. Copy omission inherits the source description; null clears it on the new template. |
| `displayName` | String | Non-nullable. Human-readable name. Copy requires a nonempty value. Updates require a writable custom target; omitted name is preserved. |
| `id` | String | Non-nullable and computed. Opaque server-generated template identifier; configured defaults have their own IDs. Use the returned value; it isn't writable. |
| `policyConfiguration` | [copilotPackagePolicyConfiguration](copilotpackagepolicyconfiguration.md) | Nullable. Saved selected settings on keyed detail. Null means verified unconfigured; malformed/unavailable saved data returns an error. Summary responses omit this member. |

## Relationships

| Relationship | Type | Description |
|:-------------|:-----|:------------|
| `policyDefinitions` | [copilotPackagePolicyDefinition](copilotpackagepolicydefinition.md) collection | Complete applicable supported definitions and choices in one template-bound read. Read-only; no keyed definition GET, paging, or expansion on template summaries. |

## JSON representation

The following JSON representation shows the resource type. Summary responses omit `policyConfiguration`; keyed detail can return null for a verified unconfigured template.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePolicyTemplate",
  "description": "String",
  "displayName": "String",
  "id": "String",
  "policyConfiguration": {
    "@odata.type": "microsoft.graph.copilotPackagePolicyConfiguration"
  }
}
```
