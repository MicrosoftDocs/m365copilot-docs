---
title: creditRequestUpdateItem resource type
description: Represents a single decision in the request body of the batchRecordDecisions action.
author: zach-martinez
ms.author: zamartin
ms.topic: reference
ms.date: 11/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# creditRequestUpdateItem resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a single decision in the request body of the [batchRecordDecisions](../creditrequest-batchrecorddecisions.md) action. Each item targets one [creditRequest](creditrequest.md) by `requestId`, sets a target `state`, and supplies an `etag` for optimistic concurrency.

## Properties

| Property    | Type                                                                  | Description |
|:------------|:----------------------------------------------------------------------|:------------|
| `etag`      | String                                                                | The concurrency token from the latest read of the credit request. Must be one quoted strong ETag, such as `"\"7f94e342\""`. Weak ETags and `*` are malformed. A missing, `null`, malformed, or stale value returns a per-item `preconditionFailed` result. |
| `requestId` | String                                                                | The `id` of the credit request to update. A missing or `null` value returns a per-item `failed` result. Values must be unique within the payload; duplicates fail the whole request. |
| `state`     | [creditRequestState](creditrequest.md#creditrequeststate-enumeration) | The target state. Use `approved` or `rejected`. A missing value or an unsupported transition returns a per-item `invalidStateTransition` result. An explicit JSON `null` fails the whole request. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.creditRequestUpdateItem",
  "etag": "String",
  "requestId": "String",
  "state": "String"
}
```
