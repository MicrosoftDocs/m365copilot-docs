---
title: List spendingPolicies
description: Get a list of spendingPolicy objects.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# List spendingPolicies

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Get a list of [spendingPolicy](resources/spendingpolicy.md) objects. The returned items are polymorphic; each item carries an `@odata.type` property that identifies its concrete type.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions             | Higher privileged permissions |
|:---------------------------------------|:-----------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Policy.Read.All    | CopilotCostManagement-Policy.ReadWrite.All                |
| Delegated (personal Microsoft account) | Not supported.                           | Not supported.                |
| Application                            | Not supported.                           | Not supported.                |

## HTTP request

```http
GET /copilot/costManagement/spendingPolicies
```

## Optional query parameters

This method supports `$select`, `$top`, `$count`, `$orderby` (on `displayName` and `createdDateTime`), and `$filter` on the properties in the following table. In a `$filter` clause, the property can appear on either side of the comparison, and clauses can combine with `and`/`or`. Other comparison operators, `in`, `not`, functions, arithmetic expressions, `null` comparisons, and property-to-property comparisons aren't supported. `$expand`, `$skip`, and `$search` aren't supported.

| Property          | Operators    | Value                                                                                                                                                             |
|:------------------|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `status`          | `eq`, `ne`   | A [spendingPolicyStatus](resources/spendingpolicy.md#spendingpolicystatus-enumeration) member, qualified as `microsoft.graph.spendingPolicyStatus'<member>'`, for example `microsoft.graph.spendingPolicyStatus'enabled'`. |
| `displayName`     | `eq`, `ne`   | A string literal, up to 64 characters.                                                                                                                            |
| `createdDateTime` | `eq`, `ne`   | An `offsetDateTime` literal at whole-second precision.                                                                                                            |

For example, use `$filter=status eq microsoft.graph.spendingPolicyStatus'enabled'`. Read service settings, alert settings, recipients, and group assignments on their dedicated endpoints. If the service returns an `@odata.nextLink` property, follow that URL unchanged to get the next page.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a collection of [spendingPolicy](resources/spendingpolicy.md) objects in the response body.

## Example

### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies?$filter=status eq microsoft.graph.spendingPolicyStatus'enabled'&$orderby=createdDateTime desc&$top=2&$count=true
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/spendingPolicies",
  "@odata.count": 2,
  "value": [
    {
      "@odata.type": "#microsoft.graph.selectedGroupsSpendingPolicy",
      "id": "3f9e2c1a-0000-0000-0000-00000000c21b",
      "displayName": "Pilot teams monthly cap",
      "status": "enabled",
      "periodLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 10000, "unit": "copilotCredit" },
      "perUserLimit": { "@odata.type": "#microsoft.graph.limitedCostManagementQuantity", "value": 500, "unit": "copilotCredit" },
      "billingMethods": "prepaidCredits",
      "createdDateTime": "2026-07-27T09:15:00Z",
      "createdBy": { "user": { "id": "aa110000-0000-0000-0000-000000000000", "displayName": "Alex Admin" } },
      "lastModifiedDateTime": "2026-07-27T09:19:00Z",
      "lastModifiedBy": { "user": { "id": "aa110000-0000-0000-0000-000000000000", "displayName": "Alex Admin" } }
    },
    {
      "@odata.type": "#microsoft.graph.allUsersSpendingPolicy",
      "id": "1b2c3d40-0000-0000-0000-00000000d34c",
      "displayName": "Tenant wide baseline",
      "status": "enabled",
      "periodLimit": { "@odata.type": "#microsoft.graph.unlimitedCostManagementQuantity", "unit": "copilotCredit" },
      "perUserLimit": { "@odata.type": "#microsoft.graph.unlimitedCostManagementQuantity", "unit": "copilotCredit" },
      "billingMethods": "notSpecified",
      "createdDateTime": "2026-06-02T11:00:00Z",
      "createdBy": { "user": { "id": "bb220000-0000-0000-0000-000000000000", "displayName": "Blair Admin" } },
      "lastModifiedDateTime": "2026-06-02T11:00:00Z",
      "lastModifiedBy": { "user": { "id": "bb220000-0000-0000-0000-000000000000", "displayName": "Blair Admin" } }
    }
  ]
}
```
