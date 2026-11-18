---
title: copilotPackageAgentManagerScope resource type
description: Represents who can create instances from an activated agent-template package.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackageAgentManagerScope resource type

:::zone pivot="graph-v1"

This reference describes only the beta contract. Select **beta** to view it; availability depends on the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

The manager audience supplied to [Activate](../copilotpackageactivationresult-activate.md). This reviewed beta value isn't a regular-package acquisition audience or the stored recipients of an individual approval request.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `principals` | [copilotPackageActivationPrincipal](copilotpackageactivationprincipal.md) collection | Non-nullable. Supply an explicit empty array for `everyone` or `noOne`; supply one or more user/group entries for `specificUsers`. No ordering, duplicate-rejection, or group-expansion guarantee is introduced. |
| `scope` | copilotPackageAgentManagerScopeType | Non-nullable. The manager-audience selection. See the enumeration below. |

### copilotPackageAgentManagerScopeType enumeration

| Value | Description |
|:------|:------------|
| `everyone` | All agent managers can create instances from the template. |
| `specificUsers` | The selected users or groups can create instances. |
| `noOne` | No manager audience is selected. |
| `unknownFutureValue` | Reserved for enum evolution; not an accepted manager-audience input. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackageAgentManagerScope",
  "principals": [
    {
      "@odata.type": "microsoft.graph.copilotPackageActivationPrincipal"
    }
  ],
  "scope": "String"
}
```

:::zone-end
