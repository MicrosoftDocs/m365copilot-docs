---
title: copilotPackageRequestPrincipal resource type
description: Represents an explicit recipient returned in a Copilot package request snapshot.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->

# copilotPackageRequestPrincipal resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents a member of the `assignees` collection in [copilotPackageRequestInfo](copilotpackagerequestinfo.md).

Inherits from [identity](/graph/api/resources/identity?view=graph-rest-beta&preserve-view=true). The source order and duplicates are preserved. Groups and broad audiences aren't expanded.

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `displayName` | String | Nullable. Resolved recipient name. Inherited from `identity`. |
| `id` | String | Nullable. Source recipient identifier. Interpretation depends on `principalType`; not always a navigable directory object. Inherited from `identity`. |
| `principalType` | [copilotPackageRequestPrincipalType](#copilotpackagerequestprincipaltype-enumeration) | Non-nullable. Source principal kind. Missing or unrecognized kinds use `unknownFutureValue` without dropping the recipient. |
| `userPrincipalName` | String | Nullable. Resolved user principal name for `user` or `agentUser` recipients. Null when unavailable and for other kinds; never inferred from email or creator identity. |

### copilotPackageRequestPrincipalType enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following values. Both this read-side enumeration and [Publish](copilotpackagepublishprincipal.md) use lowercase `user` and `group`. The agent principal vocabulary differs: this enumeration uses `agentApplication`, while Publish uses `agentIdentity`.

| Value | Description |
|:------|:------------|
| `user` | A user recipient. |
| `group` | A group recipient. |
| `agentApplication` | An agent application recipient. |
| `agentUser` | An agent user recipient. |
| `unknownFutureValue` | A missing, unrecognized, or future source principal kind. |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.copilotPackageRequestPrincipal",
  "displayName": "String",
  "id": "String",
  "principalType": "String",
  "userPrincipalName": "String"
}
```
