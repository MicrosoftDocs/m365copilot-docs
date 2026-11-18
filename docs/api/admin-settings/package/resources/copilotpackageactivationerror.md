---
title: copilotPackageActivationError resource type
description: Represents a curated code and message inside a native activation workflow result.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackageActivationError resource type

:::zone pivot="graph-v1"

This reference describes only the beta contract. Select **beta** to view it; availability depends on the matching schema and backend release.

:::zone-end

:::zone pivot="graph-preview"

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A code/message value used by [copilotPackageActivationStep](copilotpackageactivationstep.md) and [copilotPackageActivationResult](copilotpackageactivationresult.md). A warning inside a successful activation response can carry this value.

It isn't a redefinition of the Microsoft Graph HTTP error envelope. Normal non-2xx activation responses don't return the composite workflow result, and the root workflow `error` property isn't populated on the normal successful Graph path.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `code` | String | Nullable. Service-specific workflow error code. Remains a string rather than an invented closed enumeration. |
| `message` | String | Nullable. Curated developer-readable explanation, not a stable machine key or raw downstream error. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackageActivationError",
  "code": "String",
  "message": "String"
}
```

:::zone-end
