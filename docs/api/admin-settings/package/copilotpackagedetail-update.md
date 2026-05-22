---
title: Update Copilot package
description: Update a Copilot package object using the Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
doc_type: apiPageType
ms.localizationpriority: high
ms.date: 05/01/2026
---

<!-- cSpell: ignore pomuth -->
<!-- markdownlint-disable MD024 -->

# Update Copilot package

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Update a [copilotPackageDetail](resources/copilotpackagedetail.md) object.

[!INCLUDE [package-management-license](../../includes/package-management-license.md)]

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
PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}
```

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json`. Required.                                                                               |

## Request body

In the request body, supply a JSON representation of a [copilotPackageDetail](resources/copilotpackagedetail.md) object.

The following properties can be updated.

| Property                | Type                                                                                    | Description                                             |
|:------------------------|:----------------------------------------------------------------------------------------|:--------------------------------------------------------|
| `allowedUsersAndGroups` | [packageAccessEntity](resources/packageaccessentity.md) collection                      | Users/groups for whom the package is available.         |
| `acquireUsersAndGroups` | [packageAccessEntity](resources/packageaccessentity.md) collection                      | Users/groups for whom the package is deployed.          |

## Response

If successful, this method returns a `204 No Content` response code. It doesn't return anything in the response body.

## Example

### Request

The following example shows a request.

```http
PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/P_19ae1zz1-56bc-505a-3d42-156df75a4xxy
Content-Type: application/json

{
  "allowedUsersAndGroups": [
    {
      "resourceType": "user",
      "resourceId": "5d9fa31e-626e-45fb-b6e7-d8f1f11933a9"
    },
    {
      "resourceType": "group",
      "resourceId": "65d7d8fb-1e24-4ba8-92cd-8c502d830113"
    }
  ],
  "acquireUsersAndGroups": [
    {
      "resourceType": "user",
      "resourceId": "5d9fa31e-626e-45fb-b6e7-d8f1f11933a9"
    },
    {
      "resourceType": "group",
      "resourceId": "65d7d8fb-1e24-4ba8-92cd-8c502d830113"
    }
  ]
}
```

### Response

The following example shows the response.

```http
HTTP/1.1 204 No Content
```
