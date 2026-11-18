---
title: copilotPackageRequestInfo resource type
description: Represents an individual request associated with a Copilot package.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

# copilotPackageRequestInfo resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents an individual request in a [copilotPackageRequestMetadata](copilotpackagerequestmetadata.md) snapshot.

A publication request has no explicit assignees. Its `requestedBy` contact is the resolved requester (a user or agent user) when its identity, name, and address can be verified; otherwise, the contact is null.

For other requests, `assignees` preserves all explicit members in source order, including duplicates. The `requestedBy` contact comes from the first explicit assignee, regardless of principal type, or is null when none exists. A present first assignee can have null `name` and `address`. An empty assignee collection doesn't imply that the request has no audience.

For availability and selection requirements, see [Get Copilot package details](../copilotpackagedetail-get.md#optional-query-parameters).

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `additionalMetadata` | Json | Nullable JSON object for additional data. The current native request-metadata projection doesn't emit this property. |
| `assignees` | [copilotPackageRequestPrincipal](copilotpackagerequestprincipal.md) collection | Explicit assignees associated with the request. This collection isn't a deployment audience. |
| `identifier` | String | Nullable business request identifier. It isn't a package title ID and can't be used in the package Reject URL. |
| `requestedBy` | [emailAddress](/graph/api/resources/emailaddress) | Nullable display contact associated with the request. This isn't an authorization identity. See the request-source behavior described above for the proposed beta projection. |
| `requestedDateTime` | DateTimeOffset | Nullable date and time when the request was created, not when the package was created or modified. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackageRequestInfo",
  "additionalMetadata": {
    "@odata.type": "microsoft.graph.Json"
  },
  "assignees": [
    {
      "@odata.type": "microsoft.graph.copilotPackageRequestPrincipal"
    }
  ],
  "identifier": "String",
  "requestedBy": {
    "@odata.type": "microsoft.graph.emailAddress"
  },
  "requestedDateTime": "DateTimeOffset"
}
```
