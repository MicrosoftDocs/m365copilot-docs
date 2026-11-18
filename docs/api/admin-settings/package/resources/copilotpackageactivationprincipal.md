---
title: copilotPackageActivationPrincipal resource type
description: Represents a user or group in an agent-template manager audience.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackageActivationPrincipal resource type

:::zone pivot="graph-v1"

This reference describes only the beta contract. Select **beta** to view it; availability depends on the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A selected user or group in [copilotPackageAgentManagerScope](copilotpackageagentmanagerscope.md). The reviewed native Activate contract uses this narrow principal shape, not the broader Publish principal vocabulary.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `id` | String | Required and non-nullable. Nonblank user or group object identifier, not a display name, contact address, application client ID, or request identifier. The native adapter's input check doesn't establish a separate GUID-format guarantee. |
| `type` | accessEntityType | Required and non-nullable. The existing principal-type enumeration. Accepted inputs are `user` and `group`; `unknownFutureValue` isn't an accepted input. |

### accessEntityType enumeration

| Value | Description |
|:------|:------------|
| `user` | A user object. |
| `group` | A group object. |
| `unknownFutureValue` | Reserved for enum evolution; not an activation-audience input. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackageActivationPrincipal",
  "id": "String",
  "type": "String"
}
```

:::zone-end
