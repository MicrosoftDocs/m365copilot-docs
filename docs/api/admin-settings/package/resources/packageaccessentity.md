---
title: packageAccessEntity complex type
description: Reference for the packageAccessEntity complex type in the Copilot Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
ms.localizationpriority: high
ms.date: 10/28/2025
---

<!-- cSpell: ignore pomuth -->

# packageAccessEntity complex type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents an access entity (user or group) with permissions to access a Copilot package.

## Properties

| Property       | Type                                              | Description                             |
|----------------|---------------------------------------------------|-----------------------------------------|
| `resourceId`   | String                                            | Unique identifier of the user or group. |
| `resourceType` | [accessEntityType](#accessentitytype-enumeration) | Type of entity.                         |

### accessEntityType enumeration

| Value                | Description  |
|----------------------|--------------|
| `user`               | User entity  |
| `group`              | Group entity |
| `unknownFutureValue` | [Evolvable sentinel value](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.packageAccessEntity",
  "resourceId": "String",
  "resourceType": "String"
}
```
