---
title: Delete spendingPolicy
description: Delete a spendingPolicy object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Delete spendingPolicy

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Delete a [spendingPolicy](resources/spendingpolicy.md) object. Deleting a policy stops it governing consumption.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions                | Higher privileged permissions |
|:---------------------------------------|:--------------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Policy.ReadWrite.All  | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                              | Not supported.                |
| Application                            | Not supported.                              | Not supported.                |

## HTTP request

```http
DELETE /copilot/costManagement/spendingPolicies/{id}
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
DELETE https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b
If-Match: W/"10"
```

### Response

The following example shows the response.

```http
HTTP/1.1 204 No Content
```
