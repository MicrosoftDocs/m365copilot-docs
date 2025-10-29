---
title: copilotPackage resource type
description: Reference for the copilotPackage resource in the Copilot Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
ms.localizationpriority: high
ms.date: 10/28/2025
---

<!-- cSpell: ignore pomuth -->

# copilotPackage resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Entity that represents a Copilot package available within a tenant, containing basic metadata and configuration information for package management.

## Properties

| Property               | Type                                        | Description                                                  |
|------------------------|---------------------------------------------|--------------------------------------------------------------|
| `availableTo`          | [packageStatus](#packagestatus-enumeration) | Availability status of the pacakge.                          |
| `deployedTo`           | [packageStatus](#packagestatus-enumeration) | Deployment status of the package                             |
| `displayName`          | String                                      | Display name of the package.                                 |
| `elementTypes`         | String collection                           | Element types contained within this package.                 |
| `id`                   | String                                      | Unique identifier for the Copilot package within the tenant. |
| `isBlocked`            | Boolean                                     | Indicates whether the package is blocked.                    |
| `lastModifiedDateTime` | DateTimeOffset                              | Timestamp of last modification.                              |
| `publisher`            | String                                      | Name of the publisher.                                       |
| `shortDescription`     | String                                      | Brief description of the package's functionality.            |
| `supportedHosts`       | String collection                           | Host applications where this package can be used.            |
| `type`                 | [packageType](#packagetype-enumeration)     | Type classification of the package.                          |

### packageStatus enumeration

| Value                | Description                                |
|----------------------|--------------------------------------------|
| `none`               | Not available or deployed to any users     |
| `some`               | Available or deployed to some users/groups |
| `all`                | Available or deployed to all users         |
| `unknownFutureValue` | [Evolvable sentinel value](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) |

### packageType enumeration

| Value                | Description                   |
|----------------------|-------------------------------|
| `microsoft`          | Built by Microsoft            |
| `external`           | Built by partners             |
| `shared`             | Shared in the org             |
| `custom`             | Built by your org             |
| `unknownFutureValue` | [Evolvable sentinel value](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackage",
  "id": "String",
  "displayName": "String",
  "type": "String",
  "shortDescription": "String",
  "isBlocked": "Boolean",
  "availableTo": "String",
  "deployedTo": "String",
  "lastModifiedDateTime": "DateTimeOffset",
  "supportedHosts": ["String"],
  "elementTypes": ["String"],
  "publisher": "String"
}
```
