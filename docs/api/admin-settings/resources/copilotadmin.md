---
title: copilotAdmin resource type
description: Represents a Microsoft 365 admin who can add or modify Microsoft 365 Copilot settings.
author: gautamjain14
ms.author: gajain
ms.localizationpriority: medium
doc_type: resourcePageType
ms.topic: reference
ms.date: 04/15/2026
zone_pivot_groups: graph-api-versions
---

# copilotAdmin resource type

<!-- cSpell:ignore gautamjain14 gajain -->

:::zone pivot="graph-v1"
:::zone-end

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]
:::zone-end

Represents a container for Microsoft 365 Copilot admin settings.

## Properties

None.

## Relationships

:::zone pivot="graph-v1"

| Relationship | Type                                          | Description                                |
|:-------------|:----------------------------------------------|:-------------------------------------------|
| `settings`   | [copilotAdminSetting](copilotadminsetting.md) | Represents the settings for Copilot admin. |

:::zone-end

:::zone pivot="graph-preview"

| Relationship     | Type                                                       | Description                                                                                                                  |
|:-----------------|:-----------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| `policySettings` | [copilotPolicySetting](copilotpolicysetting.md) collection | Collection of Copilot settings managed through policy services. The API addresses settings individually by their identifier. |
| `settings`       | [copilotAdminSetting](copilotadminsetting.md)              | Represents the settings for Copilot admin.                                                                                   |

:::zone-end

## JSON representation

The following JSON representation shows the resource type.

``` json
{
  "@odata.type": "#microsoft.graph.copilotAdmin"
}
```
