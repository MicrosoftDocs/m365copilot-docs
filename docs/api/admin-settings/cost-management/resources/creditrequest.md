---
title: creditRequest resource type
description: Represents a user's request for Copilot credits for a service, which a tenant administrator can approve or reject.
author: zach-martinez
ms.author: zamartin
ms.topic: reference
ms.date: 11/03/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# creditRequest resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a user's request for Copilot credits for a service, which a tenant administrator can approve or reject.

A credit request is a binary access signal. It identifies a service but carries no requested amount or unit; the service manages the allocation quantity. Approving a request records the decision but doesn't assign credits by itself.

Users create credit requests outside Microsoft Graph. This API doesn't support creating or deleting credit requests; the service retains requests according to its retention policy, as reflected in `expirationDateTime`. Audit-only requests are excluded from the list and its count, but you can still get, approve, or reject them by ID.

Credit requests use ETag-based optimistic concurrency. The current value is returned as `@odata.etag` and in the `ETag` response header. Individual updates use the `If-Match` header; the [batchRecordDecisions](../creditrequest-batchrecorddecisions.md) action uses each item's `etag` field. These ETags are quoted strong ETags (for example, `"7f94e342"`), not weak `W/` ETags like the ones that spending policies use.

The supported state transitions are `pending` to `approved` and `pending` to `rejected`. Requesting the current state (for any recognized state, including `pending` and `cancelled`) is a no-op that preserves the ETag, `decisionBy`, `lastModifiedDateTime`, and `expirationDateTime`. The ETag is still checked for a no-op: a same-state request with a stale ETag returns `412 Precondition Failed` from [Update](../creditrequest-update.md), or a per-item `preconditionFailed` result from [batchRecordDecisions](../creditrequest-batchrecorddecisions.md). Every other transition is rejected.

## Methods

| Method                                                           | Return type                                                         | Description                                              |
|:-----------------------------------------------------------------|:--------------------------------------------------------------------|:---------------------------------------------------------|
| [List](../creditrequest-list.md)                                 | [creditRequest](creditrequest.md) collection                        | Get a list of creditRequest objects.                     |
| [Get](../creditrequest-get.md)                                   | [creditRequest](creditrequest.md)                                   | Retrieve the properties of a creditRequest object.       |
| [Update](../creditrequest-update.md)                             | None                                                                | Approve or reject a creditRequest object.                |
| [batchRecordDecisions](../creditrequest-batchrecorddecisions.md) | [creditRequestUpdateResponse](creditrequestupdateresponse.md)       | Approve or reject multiple credit requests in one call.  |

## Properties

| Property               | Type                                                   | Description |
|:-----------------------|:-------------------------------------------------------|:------------|
| `createdDateTime`      | DateTimeOffset                                         | The date and time when the request was created, in UTC. Read-only. |
| `decisionBy`           | [identitySet](/graph/api/resources/identityset)        | The administrator who approved or rejected the request. Only the `user` facet is populated. `null` until the request is decided. Read-only. |
| `expirationDateTime`   | DateTimeOffset                                         | The date and time when the request expires, in UTC. The service sets it to 90 days after creation and resets it to 90 days after a state-changing update. Nullable. Read-only. |
| `id`                   | String                                                 | The unique identifier of the credit request. Inherited from [entity](/graph/api/resources/entity). Read-only. |
| `lastModifiedDateTime` | DateTimeOffset                                         | The date and time when the request was last modified, in UTC. Read-only. |
| `requestedBy`          | [identitySet](/graph/api/resources/identityset)        | The user who submitted the request. Only the `user` facet is populated. Read-only. |
| `requestType`          | [creditRequestType](#creditrequesttype-enumeration)    | The reason or trigger that created the request. Read-only. |
| `serviceId`            | String                                                 | The open, extensible identifier of the service that the request is for. Values are returned in lowerCamelCase, such as `copilot`, `cowork`, `workIQ`, `researcher`, `deepWork`, `bizChat`, `copilotStudio`, and `helpdesk`. New values can appear without notice. Supports `$filter` (`eq`, case-insensitive). Read-only. |
| `state`                | [creditRequestState](#creditrequeststate-enumeration)  | The current state of the request in the approval workflow. Updatable through [Update](../creditrequest-update.md) and [batchRecordDecisions](../creditrequest-batchrecorddecisions.md). Supports `$filter` (`eq`, case-insensitive). |

### creditRequestState enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value                | Description                                                                                          |
|:---------------------|:-----------------------------------------------------------------------------------------------------|
| `pending`            | The request is awaiting an administrator decision.                                                   |
| `approved`           | An administrator approved the request.                                                               |
| `rejected`           | An administrator rejected the request.                                                               |
| `cancelled`          | The system or the requester cancelled the request. This is a read-only historical state; you can't change a request to this state. |
| `unknownFutureValue` | Evolvable enumeration sentinel value.                                                                |

### creditRequestType enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value                | Description                                                                                          |
|:---------------------|:-----------------------------------------------------------------------------------------------------|
| `unknown`            | The request type isn't known.                                                                        |
| `firstTimeAccess`    | The requester has no credits and is requesting a first allocation.                                   |
| `additionalCredits`  | The requester has already used credits and needs more because they've run out or are about to.       |
| `unknownFutureValue` | Evolvable enumeration sentinel value.                                                                |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.creditRequest",
  "createdDateTime": "DateTimeOffset",
  "decisionBy": {
    "@odata.type": "microsoft.graph.identitySet"
  },
  "expirationDateTime": "DateTimeOffset",
  "id": "String",
  "lastModifiedDateTime": "DateTimeOffset",
  "requestedBy": {
    "@odata.type": "microsoft.graph.identitySet"
  },
  "requestType": "String",
  "serviceId": "String",
  "state": "String"
}
```
