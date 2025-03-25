---
title: "copilotRoot resource type"
description: Represents the Microsoft 365 Copilot endpoint.
author: lramosvea
ms.author: lramosvea
ms.topic: reference
ms.date: 03/19/2025
ms.localizationpriority: medium
doc_type: resourcePageType
---

# copilotRoot resource type

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

A top-level object that represents the Microsoft 365 Copilot endpoint.

## Methods

|Method|Return type|Description|
|:---|:---|:---|
|[retrieval](../api/copilotroot-retrieval.md)|[retrievalResponse](../resources/retrievalresponse.md)|Grounds data for generative AI solutions. Allows the retrieval of relevant extracts from SharePoint and Graph Connectors content that the calling user has access to, while respecting the defined access controls within the tenant|

## Properties

None.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "keyProperty": "id",
  "@odata.type": "microsoft.graph.copilotRoot",
  "openType": false
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.copilotRoot"
}
```
