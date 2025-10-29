---
title: copilotPackageDetail resource type
description: Reference for the copilotPackageDetail resource in the Copilot Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
ms.localizationpriority: high
ms.date: 10/28/2025
---

<!-- cSpell: ignore pomuth -->

# copilotPackageDetail resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Extended entity that inherits from [copilotPackage](copilotpackage.md) and provides comprehensive detailed information about a Copilot package.

## Methods

| Method                                | Return type                       | Description                                                               |
|---------------------------------------|-----------------------------------|---------------------------------------------------------------------------|
| [List](../copilotpackages-list.md)    | `copilotPackageDetail` collection | Get the available Copilot packages.                                       |
| [Get](../copilotpackagedetail-get.md) | `copilotPackageDetail`            | Read the properties and relationships of a `copilotPackageDetail` object. |

## Properties

| Property                | Type                                                         | Description                                                     |
|-------------------------|--------------------------------------------------------------|-----------------------------------------------------------------|
| `acquireUsersAndGroups` | [packageAccessEntity](packageaccessentity.md) collection     | Users/groups for whom the package is deployed.                  |
| `allowedUsersAndGroups` | [packageAccessEntity](packageaccessentity.md) collection     | Users/groups for whom the package is available.                 |
| `availableTo`           | [packageStatus](copilotpackage.md#packagestatus-enumeration) | Availability status of the package.                             |
| `categories`            | String collection                                            | Category tags for the package.                                  |
| `deployedTo`            | [packageStatus](copilotpackage.md#packagestatus-enumeration) | Deployment status of the package.                               |
| `displayName`           | String                                                       | Display name of the package.                                    |
| `elementDetails`        | [packageElementDetail](packageelementdetail.md) collection   | Details about each element in the package.                      |
| `elementTypes`          | String collection                                            | Element types contained within this package.                    |
| `id`                    | String                                                       | Unique identifier for the Copilot package within the tenant.    |
| `isBlocked`             | Boolean                                                      | Indicates whether the package is blocked.                       |
| `lastModifiedDateTime`  | DateTimeOffset                                               | Timestamp of last modification.                                 |
| `longDescription`       | String                                                       | Detailed information about the package functionality and usage. |
| `manifestVersion`       | String                                                       | Manifest schema version.                                        |
| `publisher`             | String                                                       | Name of the publisher.                                          |
| `sensitivity`           | String                                                       | Sensitivity classification.                                     |
| `shortDescription`      | String                                                       | Brief description of the package's functionality.               |
| `supportedHosts`        | String collection                                            | Host applications where this package can be used.               |
| `type`                  | [packageType](copilotpackage.md#packagetype-enumeration)     | Type classification of the package.                             |
| `version`               | String                                                       | Version number of the package.                                  |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackageDetail",
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
  "publisher": "String",
  "acquireUsersAndGroups": [
    {
      "@odata.type": "microsoft.graph.packageAccessEntity"
    }
  ],
  "allowedUsersAndGroups": [
    {
      "@odata.type": "microsoft.graph.packageAccessEntity"
    }
  ],
  "categories": ["String"],
  "elementDetails": [
    {
      "@odata.type": "microsoft.graph.packageElementDetail"
    }
  ],
  "longDescription": "String",
  "manifestVersion": "String",
  "sensitivity": "String",
  "version": "String"
}
```
