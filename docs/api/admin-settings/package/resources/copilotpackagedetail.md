---
title: copilotPackageDetail resource type
description: Reference for the copilotPackageDetail resource in the Copilot Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
ms.localizationpriority: high
ms.date: 06/30/2026
zone_pivot_groups: graph-api-versions
---

<!-- cSpell: ignore pomuth -->

# copilotPackageDetail resource type

:::zone pivot="graph-v1"
:::zone-end

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]
:::zone-end

Extended entity that inherits from [copilotPackage](copilotpackage.md) and provides comprehensive detailed information about a Copilot package.

[!INCLUDE [package-management-license](../../../includes/package-management-license.md)]

## Methods

:::zone pivot="graph-v1"

| Method                                      | Return type                                                     | Description                                                               |
|---------------------------------------------|-----------------------------------------------------------------|---------------------------------------------------------------------------|
| [List](../copilotpackages-list.md)          | `copilotPackageDetail` collection                               | Get the available Copilot packages.                                       |
| [Get](../copilotpackagedetail-get.md)       | `copilotPackageDetail`                                          | Read the properties and relationships of a `copilotPackageDetail` object. |

:::zone-end

:::zone pivot="graph-preview"

| Method                                      | Return type                                                     | Description                                                               |
|---------------------------------------------|-----------------------------------------------------------------|---------------------------------------------------------------------------|
| [List](../copilotpackages-list.md)          | `copilotPackageDetail` collection                               | Get the available Copilot packages.                                       |
| [Get](../copilotpackagedetail-get.md)       | `copilotPackageDetail`                                          | Read the properties and relationships of a `copilotPackageDetail` object. |
| [Update](../copilotpackagedetail-update.md) | `copilotPackageDetail`                                          | Update a `copilotPackageDetail` object.                                   |
| [Block](../copilotpackage-block.md)         | None                                                            | Block a Copilot package to prevent its usage.                             |
| [Reassign](../copilotpackage-reassign.md)   | None                                                            | Reassign ownership of a Copilot package to a different user.              |
| [Unblock](../copilotpackage-unblock.md)     | None                                                            | Unblock a Copilot package to allow its usage.                             |

:::zone-end

## Properties

| Property                | Type                                                             | Description                                                                                                         |
|-------------------------|------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `activeUsers` | Int32 | The number of active users in the last 30 days. |
| `acquireUsersAndGroups` | [packageAccessEntity](packageaccessentity.md) collection         | Collection of users and groups that have acquired or installed this package for use within the tenant.              |
| `agentIdentityId` | String | The Microsoft Entra Agent ID of the agent. Inherited from copilotPackage. |
| `allowedUsersAndGroups` | [packageAccessEntity](packageaccessentity.md) collection         | Collection of users and groups that are currently permitted to access and use this package within the tenant.       |
| `appId`                 | String                                                           | Associated Azure AD application registration ID for this package. Inherited from copilotPackage.                    |
| `assetId`               | String                                                           | Identifier used to reference this package in the asset store. Inherited from copilotPackage.                        |
| `availableTo`           | [packageStatus](copilotpackage.md#packagestatus-enumeration)     | Enum value specifying which users or groups within the tenant can access this package. Inherited from copilotPackage. |
| `categories`            | String collection                                                | Collection of category tags that classify the package by functionality or domain (e.g., Development, Productivity). |
| `createdDateTime` | DateTimeOffset | The date and time that the agent package was created. Inherited from copilotPackage. |
| `deployedTo`            | [packageStatus](copilotpackage.md#packagestatus-enumeration)     | Enum value indicating the current deployment scope of the package. Inherited from copilotPackage.                   |
| `displayName`           | String                                                           | Human-readable name of the package shown to users and administrators. Inherited from copilotPackage.                |
| `elementDetails`        | [packageElementDetail](packageelementdetail.md) collection       | Collection of detailed information about each element contained within the package, including type and configuration. |
| `elementTypes`          | String collection                                                | Collection of element types contained within this package. Inherited from copilotPackage.                           |
| `exceptionRate` | Double | The number of exceptions encountered by the agent in the last 30 days.  |
| `governanceMetadata` | String | The agentic classification of the agent. Possible values are: `PromptAgent`, `HostedAgent`, `WorkflowAgent`, `ManagedAgent`, `Unmanaged`, and `AIApp`. Inherited from copilotPackage. |
| `id`                    | String                                                           | Unique identifier for the Copilot package within the tenant. Inherited from copilotPackage.                         |
| `isBlocked`             | Boolean                                                          | Boolean flag indicating whether the package has been administratively blocked. Inherited from copilotPackage.       |
| `lastModifiedDateTime`  | DateTimeOffset                                                   | Timestamp of the last modification made to the package. Inherited from copilotPackage.                              |
| `lastUsedDateTime`  | DateTimeOffset | The date and time the agent was last used.                             |
| `longDescription`       | String                                                           | Comprehensive description providing detailed information about the package functionality, features, and usage.      |
| `manifestId`            | String                                                           | Unique identifier declared in the package manifest. Not updatable after creation. Inherited from copilotPackage.    |
| `manifestVersion`       | String                                                           | Version of the manifest schema used to define this package. Not updatable. Inherited from copilotPackage.           |
| `platform`              | String                                                           | The host platform this package targets (e.g., teams, outlook, web). Inherited from copilotPackage.                  |
| `publisher`             | String                                                           | Name of the organization or entity that published this package. Inherited from copilotPackage.                      |
| `requestStatus`        | [copilotPackageRequestStatus](copilotpackage.md#copilotpackagerequeststatus-enumeration) | Nullable. Status of the request associated with this package. Supports `$filter` with `eq` on [List packages](../copilotpackages-list.md). Inherited from copilotPackage. |
| `requestType`          | [copilotPackageRequestType](copilotpackage.md#copilotpackagerequesttype-enumeration) | Nullable. Kind of request associated with this package. Supports `$filter` with `eq` on [List packages](../copilotpackages-list.md). Inherited from copilotPackage. |
| `sensitivity`           | String                                                           | Sensitivity classification level indicating data handling requirements or compliance restrictions for the package.  |
| `sharedWithUsersAndGroups` | [packageAccessEntity](packageaccessentity.md) collection | Collection of users and groups the agent has been shared with. |
| `shortDescription`      | String                                                           | Brief description providing an overview of the package's functionality. Inherited from copilotPackage.              |
| `supportedHosts`        | String collection                                                | Collection of host applications where this package can be used. Inherited from copilotPackage.                      |
| `totalRunTimeInHours` | Double | The total run time in hours for the agent in the last 30 days. |
| `totalSessions` | Int32 | The number of sessions for the agent in the last 30 days. |
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
  "activeUsers": "Int32",
  "acquireUsersAndGroups": [
    {
      "@odata.type": "microsoft.graph.packageAccessEntity"
    }
  ],
  "agentIdentityId": "String",
  "allowedUsersAndGroups": [
    {
      "@odata.type": "microsoft.graph.packageAccessEntity"
    }
  ],
  "appId": "String",
  "assetId": "String",
  "availableTo": "String",
  "categories": ["String"],
  "createdDateTime": "DateTimeOffset",
  "deployedTo": "String",
  "displayName": "String",
  "elementDetails": [
    {
      "@odata.type": "microsoft.graph.packageElementDetail"
    }
  ],
  "elementTypes": ["String"],
  "exceptionRate": "Double",
  "governanceMetadata": "String",
  "id": "String",
  "isBlocked": "Boolean",
  "lastModifiedDateTime": "DateTimeOffset",
  "lastUsedDateTime": "DateTimeOffset",
  "longDescription": "String",
  "manifestId": "String",
  "manifestVersion": "String",
  "platform": "String",
  "publisher": "String",
  "requestStatus": "String",
  "requestType": "String",
  "sensitivity": "String",
  "sharedWithUsersAndGroups": [
    {
      "@odata.type": "microsoft.graph.packageAccessEntity"
    }
  ],
  "shortDescription": "String",
  "supportedHosts": ["String"],
  "totalRunTimeInHours": "Double",
  "totalSessions": "Int32",
  "type": "String",
  "version": "String",
  "zipFile": "Stream"
}
```
