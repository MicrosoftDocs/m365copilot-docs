---
title: copilotAdmin resource type
description: Represents a Microsoft 365 admin who can add or modify Microsoft 365 Copilot settings.
author: gautamjain14
ms.author: gajain
ms.localizationpriority: medium
doc_type: resourcePageType
ms.topic: reference
ms.date: 05/08/2025
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

| Relationship | Type                                          | Description                                                                               |
|:-------------|:----------------------------------------------|:------------------------------------------------------------------------------------------|
| `settings`   | [copilotAdminSetting](copilotadminsetting.md) | Set of Microsoft 365 Copilot settings that can be added or modified. Read-only. Nullable. |

## JSON representation

The following JSON representation shows the resource type.

``` json
{
  "@odata.type": "#microsoft.graph.copilotAdmin"
}
```
