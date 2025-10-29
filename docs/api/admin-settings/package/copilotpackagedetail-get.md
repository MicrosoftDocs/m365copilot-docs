---
title: Get Copilot package details
description: Get details of a specific Copilot package using the Copilot Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
ms.localizationpriority: high
ms.date: 10/28/2025
---

<!-- cSpell: ignore pomuth -->
<!-- markdownlint-disable MD024 -->

# Get Copilot package details

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Retrieves detailed information for a specific agent or app by ID.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotPackages.Read.All     | CopilotPackages.ReadWrite.All |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | CopilotPackages.Read.All     | CopilotPackages.ReadWrite.All |

## HTTP request

```http
GET /copilot/admin/catalog/packages/{id}
```

## Request headers

| Name            | Description                                                                                                |
|:----------------|:-----------------------------------------------------------------------------------------------------------|
| `Authorization` |`Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [copilotPackage](resources/copilotpackage.md) object in the response body.

### Example

#### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages/abc
```

#### Response

The following example shows the response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/admin/catalog/packages/$entity",
  "id": "abc",
  "displayName": "Contoso Agent",
  "type": 1,
  "shortDescription": "Short description for package abc",
  "longDescription": "This is a detailed description for package abc. It provides comprehensive information about the package functionality, features, and usage scenarios.",
  "version": "1.2.3",
  "categories": ["Development", "Tools"],
  "manifestVersion": "2.0",
  "isBlocked": false,
  "supportedHosts": ["Teams", "SharePoint"],
  "lastModifiedDateTime": "2025-10-06T00:07:20.1467852Z",
  "availableTo": 2,
  "deployedTo": 2,
  "allowedUsersAndGroups": [/* ... */],
  "elementDetails": [/* ... */]
}
```
