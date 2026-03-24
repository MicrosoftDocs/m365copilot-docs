---
title: "copilotAdmin resource type"
description: "Represents a container for Copilot admin resources."
author: "paarava"
ms.date: 03/19/2026
ms.localizationpriority: medium
ms.subservice: "copilot-settings"
doc_type: resourcePageType
---

# copilotAdmin resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Represents a container for Copilot admin resources.

This resource serves as a parent for managing Copilot-related administrative settings and configurations through the `/copilot/admin` endpoint.

Inherits from [entity](../resources/entity.md).

## Methods
None.

## Properties
None.

## Relationships
|Relationship|Type|Description|
|:---|:---|:---|
|policySettings|[copilotPolicySetting](../resources/copilotpolicysetting.md) collection|Collection of Copilot settings managed through policy services. Each setting is addressed individually by its identifier.|
|settings|[copilotAdminSetting](../resources/copilotadminsetting.md)|Represents the settings for Copilot admin.|

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "keyProperty": "id",
  "@odata.type": "microsoft.graph.copilotAdmin",
  "openType": true
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.copilotAdmin"
}
```
