---
title: copilotPackageUpdateResponse complex type
description: Reference for the copilotPackageUpdateResponse complex type in the Copilot Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
ms.localizationpriority: high
ms.date: 04/01/2026
---

<!-- cSpell: ignore pomuth -->

# copilotPackageUpdateResponse complex type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents the response returned when a Copilot package is uploaded or updated.

[!INCLUDE [package-management-frontier](../../../includes/package-management-frontier.md)]

## Properties

| Property | Type   | Description                                                                             |
|:---------|:-------|:----------------------------------------------------------------------------------------|
| `id`     | String | Unique identifier of the package that was created or updated through package management. |

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
