---
title: "copilotReportRoot resource type"
description: Container for Microsoft 365 Copilot reporting resources
author: mestew
ms.author: mstewart
ms.date: 11/11/2025
ms.localizationpriority: medium
ms.topic: reference
doc_type: resourcePageType
---

# copilotReportRoot resource type

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Represents a container for Microsoft 365 Copilot reporting resources.

 
## Methods
|Method|Return type|Description|
|:---|:---|:---|
|[getMicrosoft365CopilotUserCountSummary](../copilotreportroot-getmicrosoft365copilotusercountsummary.md)|Stream|Get the aggregated number of active and enabled users of Microsoft 365 Copilot for a specified time period.|
|[getMicrosoft365CopilotUserCountTrend](../copilotreportroot-getmicrosoft365copilotusercounttrend.md)|Stream|Get the trend in the daily number of active and enabled users of Microsoft 365 Copilot for a specified time period.|
|[getMicrosoft365CopilotUsageUserDetail](../copilotreportroot-getmicrosoft365copilotusageuserdetail.md)|Stream| Get the most recent activity data for enabled users of Microsoft 365 Copilot apps. |

## Properties
None.


## Relationships
None.

## JSON representation
The following JSON representation shows the resource type.
<!-- {
  "blockType": "resource",
  "keyProperty": "id",
  "@odata.type": "microsoft.graph.copilotReportRoot",
  "openType": false
}
-->
``` json
{
  "@odata.type": "#microsoft.graph.copilotReportRoot"
}
```

