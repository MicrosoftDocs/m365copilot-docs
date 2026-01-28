---
title: Delete Copilot package
description: Delete a Copilot package object using the Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
doc_type: apiPageType
ms.localizationpriority: high
ms.date: 01/28/2026
---

<!-- cSpell: ignore pomuth -->
<!-- markdownlint-disable MD024 -->

# Delete Copilot package

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Delete a [copilotPackageDetail](resources/copilotpackagedetail.md) object.

[!INCLUDE [national-cloud-support](../../includes/global-only.md)]

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions  | Higher privileged permissions |
|:---------------------------------------|:------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotPackages.ReadWrite.All | Not available.                |
| Delegated (personal Microsoft account) | Not supported.                | Not supported.                |
| Application                            | CopilotPackages.ReadWrite.All | Not available.                |

## HTTP request

```http
DELETE https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}
```

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `204 No Content` response code. It doesn't return anything in the response body.

## Example

### Request

The following example shows a request.

```http
DELETE https://graph.microsoft.com/beta/copilot/admin/catalog/packages/P_19ae1zz1-56bc-505a-3d42-156df75a4xxy
```

### Response

The following example shows the response.

```http
HTTP/1.1 204 No Content
```
