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

| Property                | Type                                                             | Description                                                                                                         |
|-------------------------|------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `acquireUsersAndGroups` | [packageAccessEntity](packageaccessentity.md) collection         | Collection of users and groups that have acquired or installed this package for use within the tenant.              |
| `allowedUsersAndGroups` | [packageAccessEntity](packageaccessentity.md) collection         | Collection of users and groups that are currently permitted to access and use this package within the tenant.       |
| `appId`                 | String                                                           | Associated Azure AD application registration ID for this package. Inherited from copilotPackage.                    |
| `assetId`               | String                                                           | Identifier used to reference this package in the asset store. Inherited from copilotPackage.                        |
| `availableTo`           | [packageStatus](copilotpackage.md#packagestatus-enumeration)     | Enum value specifying which users or groups within the tenant can access this package. Inherited from copilotPackage. |
| `categories`            | String collection                                                | Collection of category tags that classify the package by functionality or domain (e.g., Development, Productivity). |
| `deployedTo`            | [packageStatus](copilotpackage.md#packagestatus-enumeration)     | Enum value indicating the current deployment scope of the package. Inherited from copilotPackage.                   |
| `displayName`           | String                                                           | Human-readable name of the package shown to users and administrators. Inherited from copilotPackage.                |
| `elementDetails`        | [packageElementDetail](packageelementdetail.md) collection       | Collection of detailed information about each element contained within the package, including type and configuration. |
| `elementTypes`          | String collection                                                | Collection of element types contained within this package. Inherited from copilotPackage.                           |
| `id`                    | String                                                           | Unique identifier for the Copilot package within the tenant. Inherited from copilotPackage.                         |
| `isBlocked`             | Boolean                                                          | Boolean flag indicating whether the package has been administratively blocked. Inherited from copilotPackage.       |
| `lastModifiedDateTime`  | DateTimeOffset                                                   | Timestamp of the last modification made to the package. Inherited from copilotPackage.                              |
| `longDescription`       | String                                                           | Comprehensive description providing detailed information about the package functionality, features, and usage.      |
| `manifestId`            | String                                                           | Unique identifier declared in the package manifest. Not updatable after creation. Inherited from copilotPackage.    |
| `manifestVersion`       | String                                                           | Version of the manifest schema used to define this package. Not updatable. Inherited from copilotPackage.           |
| `platform`              | String                                                           | The host platform this package targets (e.g., teams, outlook, web). Inherited from copilotPackage.                  |
| `publisher`             | String                                                           | Name of the organization or entity that published this package. Inherited from copilotPackage.                      |
| `sensitivity`           | String                                                           | Sensitivity classification level indicating data handling requirements or compliance restrictions for the package.  |
| `shortDescription`      | String                                                           | Brief description providing an overview of the package's functionality. Inherited from copilotPackage.              |
| `supportedHosts`        | String collection                                                | Collection of host applications where this package can be used. Inherited from copilotPackage.                      |
| `type`                  | [packageType](copilotpackage.md#packagetype-enumeration)         | The type classification of the package. Inherited from copilotPackage.                                              |
| `version`               | String                                                           | Version string of the package (e.g., 1.2.3). Not updatable after creation. Inherited from copilotPackage.           |
| `zipFile`               | Stream                                                           | The Copilot package file. Inherited from copilotPackage.                                                            |

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
  "platform": "String",
  "version": "String",
  "manifestVersion": "String",
  "manifestId": "String",
  "appId": "String",
  "assetId": "String",
  "longDescription": "String",
  "categories": ["String"],
  "sensitivity": "String",
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
  "elementDetails": [
    {
      "@odata.type": "microsoft.graph.packageElementDetail"
    }
  ]
}
```
