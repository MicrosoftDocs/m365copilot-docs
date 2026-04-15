---
title: copilotPolicySetting resource type
description: Represents a Copilot setting that is managed through a policy service.
author: paarava
ms.author: paarava
ms.topic: reference
ms.date: 03/26/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotPolicySetting resource type

<!-- cSpell:ignore paarava allowinadmincenters -->

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Represents a Copilot setting that is managed through a policy service (CPS or Intune).

The API addresses settings individually by their identifier, and only tenant-level policies are supported. User-level and group-level policies aren't supported.

> [!NOTE]
> This API is currently in preview. During preview, if the tenant has more group-level policies than the supported limit, the API returns a `502 Bad Gateway` error with the `tooManyGroupPolicies` inner error code.

## Methods

| Method                                      | Return type            | Description                                                               |
|:--------------------------------------------|:-----------------------|:--------------------------------------------------------------------------|
| [Get](../copilotpolicysetting-get.md)       | `copilotPolicySetting` | Read the properties and relationships of a `copilotPolicySetting` object. |
| [Update](../copilotpolicysetting-update.md) | `copilotPolicySetting` | Update the properties of a `copilotPolicySetting` object.                 |

## Properties

| Property   | Type   | Description                                                                                                                                                                                                                                                                             |
|:-----------|:-------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`       | String | The friendly identifier of the Copilot setting (for example, `microsoft.copilot.copilotchatpinning`). Used as the resource key in the URL path. Read-only.                                                                                                                                      |
| `policyId` | String | The ID of the tenant-level policy containing this setting in the underlying policy service. Nullable. Returns `null` when no tenant-level policy exists for this setting. If omitted on update, the API resolves the first matching tenant-level policy.                                |
| `value`    | String | The current value of the setting as a string. The format is setting-specific and might be a digit representing a state (for example, `0`, `1`), a URL, an XML string, or a JSON string. Nullable. Returns `null` when the setting isn't configured in the resolved tenant-level policy. |

## Supported settings

The following setting identifiers are supported at launch. Only these values are accepted as the `{id}` path parameter. Requesting an unsupported identifier returns a `404 Not Found` error.

| Setting ID                                 | Setting name                                                     |
|:-------------------------------------------|:-----------------------------------------------------------------|
| `microsoft.copilot.copilotchatpinning`     | Pin Microsoft 365 Copilot Chat                                   |
| `microsoft.copilot.blockaccesstoopenfiles` | Block Copilot Access to Open Content                             |
| `microsoft.copilot.imagegeneration`        | Control access to Designer Image Generation                      |
| `microsoft.copilot.allowwebsearch`         | Allow web search in Copilot                                      |
| `microsoft.copilot.allowinadmincenters`    | Control Admin Copilot availability in Microsoft 365 Admin Center |

## Relationships

None. This resource is accessed as a contained entity within [copilotAdmin](copilotadmin.md) via the `policySettings` navigation property.

## JSON representation

The following JSON representation shows the resource type.

``` json
{
  "@odata.type": "#microsoft.graph.copilotPolicySetting",
  "id": "String (identifier)",
  "policyId": "String",
  "value": "String"
}
```
