---
title: copilotPackageUpdateResponse complex type
description: Reference for the copilotPackageUpdateResponse complex type in the Copilot Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
ms.localizationpriority: high
ms.date: 01/28/2026
---

<!-- cSpell: ignore pomuth -->

# copilotPackageUpdateResponse complex type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents the response returned after updating a Copilot package using the update action.

## Properties

| Property | Type   | Description                        |
|:---------|:-------|:-----------------------------------|
| `id`     | String | The ID of the updated package.     |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackageUpdateResponse",
  "id": "String"
}
```
