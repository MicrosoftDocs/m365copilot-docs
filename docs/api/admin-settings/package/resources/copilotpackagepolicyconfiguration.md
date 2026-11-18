---
title: copilotPackagePolicyConfiguration resource type
description: Represents the complete selected policy set for a template or a single Publish request.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePolicyConfiguration resource type

:::zone pivot="graph-v1"

This reference describes only the proposed beta contract. Select **beta** to view it; availability requires the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A complete selected policy set, not an overlay on saved settings. Used in saved [template detail](../copilotpackagepolicytemplate-get.md), explicit [Update](../copilotpackagepolicytemplate-update.md) or [Copy](../copilotpackagepolicytemplate-copy.md), and request-local [Publish](../copilotpackagepublishresult-publish.md) customization.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `policies` | [copilotPackagePolicySelection](copilotpackagepolicyselection.md) collection | Required and non-nullable. Complete selected family set. Missing/null collections and duplicate, unknown, stale, or unauthorized identifiers are invalid. |

Consult the bound template's complete [policy definitions](../copilotpackagepolicydefinition-list.md). Include every applicable `mandatory` family. `default` and `optional` families may be omitted; omitted families aren't inserted into a supplied replacement set. Every included family must select all of its required choices.

An explicit empty `policies` collection is valid when no applicable mandatory family exists, even when default or optional families have required choices. This differs from an omitted/null configuration, whose meaning depends on the operation:

| Operation | Configuration omitted | Configuration null | Configuration object |
|:----------|:----------------------|:-------------------|:---------------------|
| Publish | Use saved template settings. | Use saved template settings. | Use the complete set only for this request; don't save it. |
| Update template | Preserve saved settings. | Invalid; HTTP 400. | Save the complete replacement set. |
| Copy template | Copy raw source settings. | Copy raw source settings. | Validate and use the complete replacement set on the new template. |

Native Activate subsequently resolves fresh saved settings for its required `policyTemplateId`; it doesn't automatically reuse a prior Publish configuration.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePolicyConfiguration",
  "policies": [
    {
      "@odata.type": "microsoft.graph.copilotPackagePolicySelection"
    }
  ]
}
```

:::zone-end
