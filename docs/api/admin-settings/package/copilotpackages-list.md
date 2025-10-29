---
title: List Copilot packages
description: List all Copilot packages available in the tenant using the Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
ms.localizationpriority: high
ms.date: 10/28/2025
---

<!-- cSpell: ignore pomuth -->
<!-- markdownlint-disable MD024 -->

# List packages

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Retrieves a list of all packages available in the tenant.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotPackages.Read.All     | CopilotPackages.ReadWrite.All |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | CopilotPackages.Read.All     | CopilotPackages.ReadWrite.All |

## HTTP request

```http
GET /copilot/admin/catalog/packages
```

## Request headers

| Name            | Description                                                                                                |
|:----------------|:-----------------------------------------------------------------------------------------------------------|
| `Authorization` |`Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a collection of [copilotPackage](resources/copilotpackage.md) objects in the response body.

### Example

#### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "P_19ae1zz1-56bc-505a-3d42-156df75a4xxy",
      "displayName": "Diligent Teams Document Uploader",
      "type": "external",
      "shortDescription": "Allows direct upload of documents from Microsoft Office into Diligent Teams for sharing",
      "isBlocked": false,
      "supportedHosts": ["Teams", "SharePoint"],
      "lastModifiedDateTime": "2025-10-06T00:07:20.1467852Z",
      "availableTo": "all",
      "deployedTo": "all"
    }
  ]
}
```
