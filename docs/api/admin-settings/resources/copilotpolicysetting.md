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

<!-- cSpell:ignore paarava pinsetting -->

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Represents a Copilot setting that is managed through a policy service (CPS or Intune).

The API addresses settings individually by their identifier, and only tenant-level policies are supported. User-level and group-level policies aren't supported.

## Methods

| Method                                      | Return type            | Description                                                               |
|:--------------------------------------------|:-----------------------|:--------------------------------------------------------------------------|
| [Get](../copilotpolicysetting-get.md)       | `copilotPolicySetting` | Read the properties and relationships of a `copilotPolicySetting` object. |
| [Update](../copilotpolicysetting-update.md) | `copilotPolicySetting` | Update the properties of a `copilotPolicySetting` object.                 |

## Properties

| Property   | Type   | Description                                                                                                                                                                                                                                                                             |
|:-----------|:-------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`       | String | The friendly identifier of the Copilot setting (for example, `microsoft.copilot.pinsetting`). Used as the resource key in the URL path. Read-only.                                                                                                                                      |
| `policyId` | String | The ID of the tenant-level policy containing this setting in the underlying policy service. Nullable. Returns `null` when no tenant-level policy exists for this setting. If omitted on update, the API resolves the first matching tenant-level policy.                                |
| `value`    | String | The current value of the setting as a string. The format is setting-specific and might be a digit representing a state (for example, `0`, `1`), a URL, an XML string, or a JSON string. Nullable. Returns `null` when the setting isn't configured in the resolved tenant-level policy. |

## Relationships

None.

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
