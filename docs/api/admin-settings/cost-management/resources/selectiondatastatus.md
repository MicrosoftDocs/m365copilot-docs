---
title: selectionDataStatus resource type
description: Freshness of each source that contributed to a computed balance or selection.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# selectionDataStatus resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Freshness of each source that contributed to a computed balance or selection.

## Properties

| Property                          | Type           | Description                                                        |
|:----------------------------------|:---------------|:------------------------------------------------------------------|
| `evaluatedDateTime`               | DateTimeOffset | When the result was evaluated.                                    |
| `groupMembershipAsOfDateTime`     | DateTimeOffset | Nullable. As-of time of the group membership used.               |
| `policyConfigurationAsOfDateTime` | DateTimeOffset | Nullable. As-of time of the policy configuration used.           |
| `usageAsOfDateTime`               | DateTimeOffset | As-of time of the usage data used. Omitted when no usage read was performed. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.selectionDataStatus",
  "evaluatedDateTime": "DateTimeOffset",
  "groupMembershipAsOfDateTime": "DateTimeOffset",
  "policyConfigurationAsOfDateTime": "DateTimeOffset",
  "usageAsOfDateTime": "DateTimeOffset"
}
```
