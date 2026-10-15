---
title: costManagementUnevaluatedService resource type
description: A service whose balance could not be evaluated for the user.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: resourcePageType
---

<!-- cSpell:ignore dsaunders -->

# costManagementUnevaluatedService resource type

[!INCLUDE [beta-disclaimer](../../../includes/beta-disclaimer.md)]

A service whose balance couldn't be evaluated for the user, reported instead of an unreliable [costManagementUserServiceBalance](costmanagementuserservicebalance.md) row.

## Properties

| Property    | Type                                                                                    | Description                                       |
|:------------|:----------------------------------------------------------------------------------------|:--------------------------------------------------|
| `reason`    | [balanceEvaluationFailureReason](#balanceevaluationfailurereason-enumeration)            | Why the balance couldn't be evaluated.            |
| `serviceId` | String                                                                                  | The service identifier whose balance couldn't be evaluated. |

### balanceEvaluationFailureReason enumeration

An [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations) with the following possible values.

| Value                | Description                                                                                        |
|:---------------------|:--------------------------------------------------------------------------------------------------|
| `upstreamFailure`    | The service couldn't resolve the spending policy, so no authoritative balance could be produced.  |
| `noApplicablePolicy` | No spending policy governs this service for this user, so there's no balance to report.           |
| `unknownFutureValue` | Evolvable enumeration sentinel value.                                                             |

## Relationships

None.

## JSON representation

The following JSON representation shows the resource type.

```json
{
  "@odata.type": "#microsoft.graph.costManagementUnevaluatedService",
  "reason": "String",
  "serviceId": "String"
}
```
