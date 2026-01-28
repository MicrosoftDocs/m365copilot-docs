---
title: "copilotPackage: update"
description: Update a Copilot package with a new package file using the Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
doc_type: apiPageType
ms.localizationpriority: high
ms.date: 01/28/2026
---

<!-- cSpell: ignore pomuth -->
<!-- markdownlint-disable MD024 -->

# copilotPackage: update

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Update a Copilot package by uploading a new package file.

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
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/update
```

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `multipart/form-data`. Required.                                                                            |

## Request body

In the request body, supply the `zipFile` parameter with the package file content as a multipart form.

| Parameter | Type       | Description                                                     |
|:----------|:-----------|:----------------------------------------------------------------|
| `zipFile` | Edm.Stream | Required. The new package file to replace the existing package. |

## Response

If successful, this method returns a `200 OK` response code and a [copilotPackageUpdateResponse](resources/copilotpackageupdateresponse.md) object in the response body.

## Example

### Request

The following example shows a request.

```http
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/P_19ae1zz1-56bc-505a-3d42-156df75a4xxy/update
Content-Type: multipart/form-data; boundary=boundary

--boundary
Content-Disposition: form-data; name="zipFile"; filename="package.zip"
Content-Type: application/zip

<package-file-content>
--boundary--
```

### Response

The following example shows the response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.type": "#microsoft.graph.copilotPackageUpdateResponse",
  "id": "P_19ae1zz1-56bc-505a-3d42-156df75a4xxy"
}
```
