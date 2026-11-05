---
title: creditRequestUpdateResponseItem resource type
description: Represents the result for a single item in the batchRecordDecisions action.
author: zach-martinez
ms.author: zamartin
ms.topic: reference
ms.date: 11/03/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# creditRequestUpdateResponseItem resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents the result for a single item in the [batchRecordDecisions](../creditrequest-batchrecorddecisions.md) action. Returned in the `responses` collection of a [creditRequestUpdateResponse](creditrequestupdateresponse.md).

## Properties

| Property    | Type                                                                | Description |
|:------------|:--------------------------------------------------------------------|:------------|
| `etag`      | String                                                              | The updated concurrency token. Present only when `status` is `succeeded`. |
| `message`   | String                                                              | A human-readable error message. Present for failed items when more detail is available. |
| `requestId` | String                                                              | The identifier of the targeted credit request. If the input item omitted `requestId`, the value is the all-zero GUID (`00000000-0000-0000-0000-000000000000`). |
| `status`    | [creditRequestUpdateStatus](#creditrequestupdatestatus-enumeration) | The processing status for the item. |

### creditRequestUpdateStatus enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value                    | Description                                                                                                        |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------|
| `succeeded`              | The update was applied.                                                                                            |
| `notFound`               | The credit request doesn't exist or doesn't belong to the tenant.                                                  |
| `preconditionFailed`     | The ETag is missing or malformed, or it doesn't match the current resource. Read the request again and retry with the current ETag. |
| `invalidStateTransition` | The state is missing, or the requested transition isn't supported for the current state.                           |
| `failed`                 | A missing `requestId`, a provider failure, or an unexpected error prevented the update.                            |
| `unknownFutureValue`     | Evolvable enumeration sentinel value.                                                                              |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.creditRequestUpdateResponseItem",
  "etag": "String",
  "message": "String",
  "requestId": "String",
  "status": "String"
}
```
