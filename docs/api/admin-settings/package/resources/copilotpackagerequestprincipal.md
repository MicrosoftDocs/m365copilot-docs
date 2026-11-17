---
title: copilotPackageRequestPrincipal resource type
description: Represents an explicit assignee of a Copilot package request.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: resourcePageType
zone_pivot_groups: graph-api-versions
---

# copilotPackageRequestPrincipal resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

Represents an explicit assignee of a [copilotPackageRequestInfo](copilotpackagerequestinfo.md) object. Inherits from [identity](/graph/api/resources/identity).

## Methods

None.

## Properties

| Property | Type | Description |
|:---------|:-----|:------------|
| `displayName` | String | Nullable resolved name of the explicit assignee. Inherited from `identity`. |
| `id` | String | Nullable source identifier; its meaning depends on the principal type. Inherited from `identity`. |
| `principalType` | [copilotPackageRequestPrincipalType](#copilotpackagerequestprincipaltype-enumeration) | Kind of principal returned for this assignee. |
| `userPrincipalName` | String | Nullable user principal name when available for a user or agent user; not inferred from an email address. |

### copilotPackageRequestPrincipalType enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values. An absent or unrecognized source kind is represented by `unknownFutureValue`.

| Value |
|:------|
| `user` |
| `group` |
| `agentApplication` |
| `agentUser` |
| `unknownFutureValue` |

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
