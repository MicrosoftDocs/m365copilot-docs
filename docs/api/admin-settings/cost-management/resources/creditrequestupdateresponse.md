---
title: creditRequestUpdateResponse resource type
description: Represents the result of the batchRecordDecisions action, including summary counts and per-item results.
author: zach-martinez
ms.author: zamartin
ms.topic: reference
ms.date: 11/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# creditRequestUpdateResponse resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents the result of the [batchRecordDecisions](../creditrequest-batchrecorddecisions.md) action, including summary counts and per-item results. The action isn't atomic; per-item results appear in the same order as the input items.

## Properties

| Property         | Type                                                                                 | Description |
|:-----------------|:-------------------------------------------------------------------------------------|:------------|
| `failedCount`    | Int32                                                                                | The number of items that returned a status other than `succeeded`. |
| `responses`      | [creditRequestUpdateResponseItem](creditrequestupdateresponseitem.md) collection     | The per-item results, in the same order as the items in the request. |
| `succeededCount` | Int32                                                                                | The number of items that were updated successfully. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.creditRequestUpdateResponse",
  "failedCount": "Int32",
  "responses": [
    {
      "@odata.type": "microsoft.graph.creditRequestUpdateResponseItem"
    }
  ],
  "succeededCount": "Int32"
}
```
