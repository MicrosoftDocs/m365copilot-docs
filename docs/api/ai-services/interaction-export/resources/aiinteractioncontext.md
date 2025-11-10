---
title: aiInteractionContext resource type
description: Represents all contexts associated with an interaction.
ms.date: 08/08/2025
doc_type: resourcePageType
ms.topic: reference
ms.localizationpriority: medium
author: bkeerthivasa
ms.author: bkeerthivasa
zone_pivot_groups: graph-api-versions
---

# aiInteractionContext resource type

<!-- cSpell:ignore bkeerthivasa -->
:::zone pivot="graph-v1"
:::zone-end

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]
:::zone-end

Represents all contexts associated with an interaction.

> [!NOTE]
> For information about the AI interactions that are included with this API and the relevant licensing requirements, see **[Licensing and prerequisites](./aiinteractionhistory.md#licensing-and-prerequisites)** and **[Data coverage](./aiinteractionhistory.md#data-coverage-what-interactions-are-returned)** on `aiinteractionhistory`.

## Properties

| Property           | Type   | Description                                       |
|:-------------------|:-------|:--------------------------------------------------|
| `contextReference` | String | The full file URL where the interaction happened. |
| `contextType`      | String | The type of the file.                             |
| `displayName`      | String | The name of the file.                             |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "contextReference": "String",
  "contextType": "String",
  "displayName": "String"
}
```
