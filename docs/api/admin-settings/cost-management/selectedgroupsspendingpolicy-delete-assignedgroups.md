---
title: Remove assignedGroup
description: Remove a group reference from a selectedGroupsSpendingPolicy object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Remove assignedGroup

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Remove a [group](/graph/api/resources/group) reference from a [selectedGroupsSpendingPolicy](resources/selectedgroupsspendingpolicy.md) object. Removing the last assigned group is refused with a `409 lastAssignedGroup` response, because it would leave a group-scoped policy governing nobody.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions                     | Higher privileged permissions |
|:---------------------------------------|:-------------------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Assignment.ReadWrite.All   | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                                   | Not supported.                |
| Application                            | Not supported.                                   | Not supported.                |

## HTTP request

```http
DELETE /copilot/costManagement/spendingPolicies/{id}/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups/{groupId}/$ref
```

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `If-Match`      | The ETag of the spending policy. Required.                                                               |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `204 No Content` response code. It doesn't return anything in the response body.

## Example

### Request

The following example shows a request.

```http
DELETE https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups/11112222-3333-4444-5555-666677778888/$ref
If-Match: W/"5"
```

### Response

The following example shows the response.

```http
HTTP/1.1 204 No Content
ETag: W/"6"
```
