---
title: copilotPackagePolicyDefinition resource type
description: Represents one supported policy family applicable to a Copilot package policy template.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackagePolicyDefinition resource type

:::zone pivot="graph-v1"

This reference describes only the proposed beta contract. Select **beta** to view it; availability requires the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A supported policy family and its complete applicable choices, returned through a template's `policyDefinitions` relationship. This catalog is separate from the template's saved [copilotPackagePolicyConfiguration](copilotpackagepolicyconfiguration.md).

## Methods

| Method | Return type | Description |
|:-------|:------------|:------------|
| [List](../copilotpackagepolicydefinition-list.md) | [copilotPackagePolicyDefinition](copilotpackagepolicydefinition.md) collection | Read all definitions applicable to the bound template and authenticated tenant. |

No keyed definition GET or definition/choice writes are exposed.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `choices` | [copilotPackagePolicyChoiceDefinition](copilotpackagepolicychoicedefinition.md) collection | Non-nullable. Complete applicable choices. Choices have no independent resource URLs. |
| `displayName` | String | Non-nullable. Localized business name of the policy family. |
| `id` | String | Non-nullable. Opaque family identifier. Use it as `policyDefinitionId`, not as an individual `choiceId`. |
| `requirement` | copilotPackagePolicyRequirement | Non-nullable. Whether the family must be included in a complete selected configuration. This is distinct from a choice's `isRequired`. |

### copilotPackagePolicyRequirement enumeration

| Value | Description |
|:------|:------------|
| `mandatory` | The applicable family must be included in a supplied complete selected configuration. |
| `default` | The family may be omitted, like an optional family. It isn't automatically inserted into a supplied replacement set. |
| `optional` | The family may be omitted. |
| `unknownFutureValue` | Reserved for enum evolution; an unknown requirement doesn't authorize configured writes. |

Every included family must contain its applicable required choices, regardless of its family requirement. A required choice in an omitted default or optional family doesn't make that family mandatory. Empty complete configurations are valid when no applicable mandatory family exists.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackagePolicyDefinition",
  "choices": [
    {
      "@odata.type": "microsoft.graph.copilotPackagePolicyChoiceDefinition"
    }
  ],
  "displayName": "String",
  "id": "String",
  "requirement": "String"
}
```

:::zone-end
