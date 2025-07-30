---
title: copilotRoot resource type
description: A container for Microsoft 365 Copilot admin controls.
author: gautamjain14
ms.author: gajain
ms.localizationpriority: medium
doc_type: resourcePageType
ms.topic: reference
ms.date: 07/29/2025
zone_pivot_groups: graph-api-versions
---

# copilotRoot resource type

<!-- cSpell:ignore gautamjain14 gajain -->
:::zone pivot="graph-v1"
:::zone-end

:::zone pivot="graph-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

A container for Microsoft 365 Copilot admin controls.

## Properties

None.

## Relationships

| Relationship         | Type                                                         | Description                                                                                  |
|:---------------------|:-------------------------------------------------------------|:---------------------------------------------------------------------------------------------|
| `admin`              | [copilotAdmin](../resources/copilotadmin.md)                 | The Microsoft 365 Copilot admin who can add or modify Copilot settings. Read-only. Nullable. |
| `interactionHistory` | [aiInteractionHistory](../resources/aiinteractionhistory.md) | The history of interactions between AI agents and users.                                     |
| `users`              | [aiUser](../resources/aiuser.md) collection                  | The list of AI users or agents. Read-only. Nullable.                                         |

## JSON representation

The following JSON representation shows the resource type.

``` json
{
  "@odata.type": "#microsoft.graph.copilotRoot"
}
```
