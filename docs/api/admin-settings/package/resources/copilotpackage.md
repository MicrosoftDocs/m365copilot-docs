---
title: copilotPackage resource type
description: Reference for the copilotPackage resource in the Copilot Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
ms.localizationpriority: high
ms.date: 01/28/2026
---

<!-- cSpell: ignore pomuth -->

# copilotPackage resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Entity that represents a Copilot package available within a tenant, containing basic metadata and configuration information for package management.

## Properties

| Property               | Type                                        | Description                                                                                               |
|------------------------|---------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| `appId`                | String                                      | Associated Azure AD application registration ID for this package.                                         |
| `assetId`              | String                                      | Identifier used to reference this package in the asset store.                                             |
| `availableTo`          | [packageStatus](#packagestatus-enumeration) | Enum value specifying which users or groups within the tenant can access this package (all, some, none).  |
| `deployedTo`           | [packageStatus](#packagestatus-enumeration) | Enum value indicating the current deployment scope of the package within the tenant (all, some, none).    |
| `displayName`          | String                                      | Human-readable name of the package shown to users and administrators.                                     |
| `elementTypes`         | String collection                           | Collection of element types contained within this package (e.g., bot, declarativeAgent).                  |
| `id`                   | String                                      | Unique identifier for the Copilot package within the tenant.                                              |
| `isBlocked`            | Boolean                                     | Boolean flag indicating whether the package has been administratively blocked from use within the tenant. |
| `lastModifiedDateTime` | DateTimeOffset                              | Timestamp of the last modification made to the package configuration or metadata.                         |
| `manifestId`           | String                                      | Unique identifier declared in the package manifest. Not updatable after creation.                         |
| `manifestVersion`      | String                                      | Version of the manifest schema used to define this package. Not updatable after creation.                 |
| `platform`             | String                                      | The host platform this package targets (e.g., teams, outlook, web). Supports $filter with eq.             |
| `publisher`            | String                                      | Name of the organization or entity that published this package.                                           |
| `shortDescription`     | String                                      | Brief description providing an overview of the package's functionality and purpose.                       |
| `supportedHosts`       | String collection                           | Collection of host applications where this package can be used (e.g., teams, outlook, sharePoint).        |
| `type`                 | [packageType](#packagetype-enumeration)     | The type classification of the package, indicating whether it's first-party, third-party, shared, or LOB. |
| `version`              | String                                      | Version string of the package (e.g., 1.2.3). Not updatable after creation.                                |
| `zipFile`              | Stream                                      | The Copilot package file.                                                                                 |

### packageStatus enumeration

| Value                | Description                                                                                                    |
|:---------------------|:---------------------------------------------------------------------------------------------------------------|
| `none`               | Not available or deployed to any users.                                                                        |
| `some`               | Available or deployed to some users/groups.                                                                    |
| `all`                | Available or deployed to all users.                                                                            |
| `unknownFutureValue` | [Evolvable sentinel value](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations).   |

### packageType enumeration

| Value                | Description                                                                                                    |
|:---------------------|:---------------------------------------------------------------------------------------------------------------|
| `microsoft`          | Built by Microsoft.                                                                                            |
| `external`           | Built by partners.                                                                                             |
| `shared`             | Shared in your organization.                                                                                   |
| `custom`             | Built by your organization.                                                                                    |
| `unknownFutureValue` | [Evolvable sentinel value](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations).   |

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
  "publisher": "String",
  "platform": "String",
  "version": "String",
  "manifestVersion": "String",
  "manifestId": "String",
  "appId": "String",
  "assetId": "String"
}
```
