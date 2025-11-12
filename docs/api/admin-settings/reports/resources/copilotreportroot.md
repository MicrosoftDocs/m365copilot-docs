---
title: copilotReportRoot resource type
description: Container for Microsoft 365 Copilot reporting resources
author: mestew
ms.author: mstewart
ms.date: 11/11/2025
ms.localizationpriority: medium
ms.topic: reference
doc_type: resourcePageType
---

<!-- cSpell:ignore mestew mstewart -->

# copilotReportRoot resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a container for Microsoft 365 Copilot reporting resources. For more information about report views and names, see [Microsoft 365 reports - Microsoft 365 Copilot usage](/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage).

## Methods

| Method                                                                                                   | Return type | Description                                                                                                         |
|:---------------------------------------------------------------------------------------------------------|:------------|:--------------------------------------------------------------------------------------------------------------------|
| [getMicrosoft365CopilotUserCountSummary](../copilotreportroot-getmicrosoft365copilotusercountsummary.md) | Stream      | Get the aggregated number of active and enabled users of Microsoft 365 Copilot for a specified time period.         |
| [getMicrosoft365CopilotUserCountTrend](../copilotreportroot-getmicrosoft365copilotusercounttrend.md)     | Stream      | Get the trend in the daily number of active and enabled users of Microsoft 365 Copilot for a specified time period. |
| [getMicrosoft365CopilotUsageUserDetail](../copilotreportroot-getmicrosoft365copilotusageuserdetail.md)   | Stream      | Get the most recent activity data for enabled users of Microsoft 365 Copilot apps.                                  |

## Properties

None.

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

``` json
{
  "@odata.type": "#microsoft.graph.copilotReportRoot"
}
```
