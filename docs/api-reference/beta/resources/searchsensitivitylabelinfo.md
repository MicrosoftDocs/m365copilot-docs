---
title: "searchSensitivityLabelInfo resource type"
description: Describes the information protection label that details how to properly apply a sensitivity label to information.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 03/11/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# searchSensitivityLabelInfo resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Describes the information protection label that details how to properly apply a sensitivity label to information.


## Properties
|Property|Type|Description|
|:---|:---|:---|
|color|String|The color that the UI should display for the label, if configured.|
|displayName|String|The display name for the sensitivity label|
|isEncrypted|Boolean|Indicates whether the sensitivity label enforces encryption.|
|priority|Int32|The priority in which the sensitivity label is applied.|
|sensitivityLabelId|String|The ID of the sensitivity label.|
|tooltip|String|The tooltip that should be displayed for the label in a UI.|

## Relationships
None.

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "@odata.type": "microsoft.graph.searchSensitivityLabelInfo"
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.searchSensitivityLabelInfo",
  "sensitivityLabelId": "String",
  "displayName": "String",
  "tooltip": "String",
  "priority": "Integer",
  "color": "String",
  "isEncrypted": "Boolean"
}
```

