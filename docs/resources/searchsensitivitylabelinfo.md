---
title: "searchSensitivityLabelInfo resource type"
description: "**TODO: Add Description**"
author: "**TODO: Provide GitHub Name. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
ms.date: 03/04/2025
ms.localizationpriority: medium
ms.subservice: "**TODO: Add MS subservice. See [topic-level metadata reference](https://aka.ms/msgo?pagePath=Document-APIs/Guidelines/Metadata)**"
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

