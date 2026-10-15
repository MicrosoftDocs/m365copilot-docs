---
title: List assignedGroups
description: Get the list of groups assigned to a selectedGroupsSpendingPolicy object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# List assignedGroups

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Get the list of [group](/graph/api/resources/group) objects assigned to a [selectedGroupsSpendingPolicy](resources/selectedgroupsspendingpolicy.md) object. The `assignedGroups` relationship is declared only on the selected-groups subtype, so these routes use the `microsoft.graph.selectedGroupsSpendingPolicy` cast segment and return a `404` response against a tenant-wide policy.

You can read the assigned groups as `group` objects, or read the reference links with the `$ref` form.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions                | Higher privileged permissions |
|:---------------------------------------|:--------------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Assignment.Read.All   | CopilotCostManagement-Assignment.ReadWrite.All                |
| Delegated (personal Microsoft account) | Not supported.                              | Not supported.                |
| Application                            | Not supported.                              | Not supported.                |

## HTTP request

```http
GET /copilot/costManagement/spendingPolicies/{id}/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups
GET /copilot/costManagement/spendingPolicies/{id}/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups/$ref
```

## Optional query parameters

This method doesn't support any [OData query parameters](/graph/query-parameters) to help customize the response.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a collection of [group](/graph/api/resources/group) objects in the response body. For the `$ref` form, the response body is a collection of reference links.

## Examples

### Example 1: List assigned groups as group objects

#### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups
```

#### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#groups",
  "value": [
    {
      "id": "11112222-3333-4444-5555-666677778888",
      "displayName": "Pilot group A"
    }
  ]
}
```

### Example 2: List assigned group reference links

#### Request

The following example shows a request that uses the `$ref` form to read the assigned-group reference links.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups/$ref
```

#### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#Collection($ref)",
  "value": [
    {
      "@odata.id": "https://graph.microsoft.com/beta/groups/11112222-3333-4444-5555-666677778888"
    }
  ]
}
```
