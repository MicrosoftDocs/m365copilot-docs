---
title: copilotAdminSetting resource type
description: Represents an admin setting for Microsoft 365 Copilot.
author: gautamjain14
ms.author: gajain
ms.localizationpriority: medium
doc_type: resourcePageType
ms.topic: reference
ms.date: 08/08/2025
zone_pivot_groups: graph-api-versions
---

# copilotAdminSetting resource type

<!-- cSpell:ignore gautamjain14 gajain -->

:::zone pivot="graph-v1"
:::zone-end

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]
:::zone-end

Represents an admin setting for Microsoft 365 Copilot.

## Properties

None.

## Relationships

| Relationship  | Type                                                  | Description                                                                                                                                                          |
|:--------------|:------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `limitedMode` | [copilotAdminLimitedMode](copilotadminlimitedmode.md) | Represents a setting that controls whether users of Microsoft 365 Copilot in Teams meetings can receive responses to sentiment-related prompts. Read-only. Nullable. |

## JSON representation

The following JSON representation shows the resource type.

``` json
{
  "@odata.type": "#microsoft.graph.copilotAdminSetting"
}
```
