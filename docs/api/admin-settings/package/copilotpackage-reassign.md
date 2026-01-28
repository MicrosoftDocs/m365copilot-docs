---
title: "copilotPackage: reassign"
description: Reassign ownership of a Copilot package to a different user using the Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
doc_type: apiPageType
ms.localizationpriority: high
ms.date: 01/28/2026
---

<!-- cSpell: ignore pomuth -->
<!-- markdownlint-disable MD024 -->

# copilotPackage: reassign

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Reassign ownership of a Copilot package to a different user.

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
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/reassign
```

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json`. Required.                                                                               |

## Request body

In the request body, supply JSON representation of the parameters.

The following table shows the parameters that are required with this action.

| Parameter | Type   | Description                                     |
|:----------|:-------|:------------------------------------------------|
| `userId`  | String | Required. The user ID of the new package owner. |

## Response

If successful, this method returns a `204 No Content` response code. It doesn't return anything in the response body.

## Example

### Request

The following example shows a request.

```http
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/P_19ae1zz1-56bc-505a-3d42-156df75a4xxy/reassign
Content-Type: application/json

{
  "userId": "12345678-1234-1234-1234-123456789012"
}
```

### Response

The following example shows the response.

```http
HTTP/1.1 204 No Content
```
