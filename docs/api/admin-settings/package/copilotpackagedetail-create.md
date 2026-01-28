---
title: Create Copilot package
description: Create a new Copilot package using the Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
doc_type: apiPageType
ms.localizationpriority: high
ms.date: 01/28/2026
---

<!-- cSpell: ignore pomuth -->
<!-- markdownlint-disable MD024 -->

# Create Copilot package

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Create a new Copilot package object.

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
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages
```

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `multipart/form-data`. Required.                                                                            |

## Request body

In the request body, supply a multipart form with the package file.

The following properties are required when creating a package.

<!-- markdownlint-disable MD060 -->

| Property  | Type       | Description                                    |
|:----------|:-----------|:-----------------------------------------------|
| `zipFile` | Edm.Stream | The package file to upload to the catalog.     |

<!-- markdownlint-enable MD060 -->

## Response

If successful, this method returns a `201 Created` response code and a [copilotPackageUpdateResponse](resources/copilotpackageupdateresponse.md) object in the response body.

## Example

### Request

The following example shows a request.

```http
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="zipFile"; filename="copilot-package.zip"
Content-Type: application/zip

[Binary package file content]
------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

### Response

The following example shows the response.

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#Edm.String",
  "id": "P_19ae1zz1-56bc-505a-3d42-156df75a4xxy"
}
```
