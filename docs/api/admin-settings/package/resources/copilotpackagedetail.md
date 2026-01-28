---
title: copilotPackageDetail resource type
description: Reference for the copilotPackageDetail resource in the Copilot Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
ms.localizationpriority: high
ms.date: 01/28/2026
---

<!-- cSpell: ignore pomuth -->

# copilotPackageDetail resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Extended entity that inherits from [copilotPackage](copilotpackage.md) and provides comprehensive detailed information about a Copilot package.

## Methods

| Method                                      | Return type                                                     | Description                                                               |
|---------------------------------------------|-----------------------------------------------------------------|---------------------------------------------------------------------------|
| [List](../copilotpackages-list.md)          | `copilotPackageDetail` collection                               | Get the available Copilot packages.                                       |
| [Create](../copilotpackagedetail-create.md) | [copilotPackageUpdateResponse](copilotpackageupdateresponse.md) | Create a new `copilotPackageDetail` object.                               |
| [Get](../copilotpackagedetail-get.md)       | `copilotPackageDetail`                                          | Read the properties and relationships of a `copilotPackageDetail` object. |
| [Update](../copilotpackagedetail-update.md) | `copilotPackageDetail`                                          | Update a `copilotPackageDetail` object.                                   |
| [Delete](../copilotpackagedetail-delete.md) | None                                                            | Delete a `copilotPackageDetail` object.                                   |
| [block](../copilotpackage-block.md)         | None                                                            | Block a Copilot package to prevent its usage.                             |
| [reassign](../copilotpackage-reassign.md)   | None                                                            | Reassign ownership of a Copilot package to a different user.              |
| [unblock](../copilotpackage-unblock.md)     | None                                                            | Unblock a Copilot package to allow its usage.                             |
| [update](../copilotpackage-update.md)       | [copilotPackageUpdateResponse](copilotpackageupdateresponse.md) | Update a Copilot package with a new package file.                         |

## Properties

| Property                | Type                                                                     | Description                                                     |
|-------------------------|--------------------------------------------------------------------------|-----------------------------------------------------------------|
| `acquireUsersAndGroups` | [packageAccessEntity](packageaccessentity.md) collection                 | Users/groups for whom the package is deployed.                  |
| `allowedUsersAndGroups` | [packageAccessEntity](packageaccessentity.md) collection                 | Users/groups for whom the package is available.                 |
| `availableTo`           | [packageStatus](copilotpackage.md#packagestatus-enumeration)             | Availability status of the package.                             |
| `categories`            | String collection                                                        | Category tags for the package.                                  |
| `deployedTo`            | [packageStatus](copilotpackage.md#packagestatus-enumeration)             | Deployment status of the package.                               |
| `displayName`           | String                                                                   | Display name of the package.                                    |
| `elementDetails`        | [packageElementDetail](packageelementdetail.md) collection               | Details about each element in the package.                      |
| `elementTypes`          | String collection                                                        | Element types contained within this package.                    |
| `id`                    | String                                                                   | Unique identifier for the Copilot package within the tenant.    |
| `isBlocked`             | Boolean                                                                  | Indicates whether the package is blocked.                       |
| `lastModifiedDateTime`  | DateTimeOffset                                                           | Timestamp of last modification.                                 |
| `longDescription`       | String                                                                   | Detailed information about the package functionality and usage. |
| `manifestVersion`       | String                                                                   | Manifest schema version.                                        |
| `publisher`             | String                                                                   | Name of the publisher.                                          |
| `sensitivity`           | String                                                                   | Sensitivity classification.                                     |
| `shortDescription`      | String                                                                   | Brief description of the package's functionality.               |
| `supportedHosts`        | String collection                                                        | Host applications where this package can be used.               |
| `type`                  | [packageType](copilotpackage.md#packagetype-enumeration)                 | Type classification of the package.                             |
| `version`               | String                                                                   | Version number of the package.                                  |
| `zipFile`               | Stream                                                                   | The Copilot package file.                                       |

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
