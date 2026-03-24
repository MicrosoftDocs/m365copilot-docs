---
title: "copilotPolicySetting resource type"
description: "Represents a Copilot setting managed through a policy service (CPS or Intune), accessed via the /copilot/admin/policySettings endpoint."
author: "paarava"
ms.date: 03/19/2026
ms.localizationpriority: medium
ms.subservice: "copilot-settings"
doc_type: resourcePageType
---

# copilotPolicySetting resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Represents a Copilot setting that is managed through a policy service (CPS or Intune). 

This resource is accessed through the `/copilot/admin/policySettings/{id}` endpoint, where the API resolves the correct underlying policy service automatically. Settings are addressed individually by their identifier, and only tenant-level policies are supported. User-level and group-level policies are not supported.

This resource is a contained entity within the [copilotAdmin](copilotadmin.md) resource.

Inherits from [entity](../resources/entity.md).

## Methods
|Method|Return type|Description|
|:---|:---|:---|
|[Get](../api/copilotpolicysetting-get.md)|[copilotPolicySetting](../resources/copilotpolicysetting.md)|Read the properties and relationships of a [copilotPolicySetting](../resources/copilotpolicysetting.md) object.|
|[Update](../api/copilotpolicysetting-update.md)|[copilotPolicySetting](../resources/copilotpolicysetting.md)|Update the properties of a [copilotPolicySetting](../resources/copilotpolicysetting.md) object.|

## Properties
|Property|Type|Description|
|:---|:---|:---|
|id|String|The friendly identifier of the Copilot setting (for example, `microsoft.copilot.pinsetting`). Used as the resource key in the URL path. Read-only. Inherited from [entity](../resources/entity.md).|
|policyId|String|The ID of the tenant-level policy containing this setting in the underlying policy service. Nullable. Returns `null` when no tenant-level policy exists for this setting. If omitted on update, the API resolves the first matching tenant-level policy.|
|value|String|The current value of the setting as a string. The format is setting-specific and may be a digit representing a state (for example, `0`, `1`), a URL, an XML string, or a JSON string. Nullable. Returns `null` when the setting has not been configured in the resolved tenant-level policy.|

## Relationships
None.

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "keyProperty": "id",
  "@odata.type": "microsoft.graph.copilotPolicySetting"
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.copilotPolicySetting",
  "id": "String (identifier)",
  "value": "String",
  "policyId": "String"
}
```
