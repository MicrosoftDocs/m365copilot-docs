---
title: "copilotPackage: reject"
description: Reject a pending Copilot package title submission using the Package Management API.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
doc_type: apiPageType
ms.localizationpriority: high
ms.date: 11/17/2026
---

<!-- cSpell: ignore pomuth -->
<!-- markdownlint-disable MD024 -->

# copilotPackage: reject

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Reject a pending Copilot package title submission. This action reviews a package title and its submitted version; it doesn't reject an individual user's request. Use the title ID confirmed for reviewing the pending submission, not the `identifier` of a [copilotPackageRequestInfo](resources/copilotpackagerequestinfo.md) object. The ID used to retrieve package details isn't necessarily interchangeable with the ID accepted for title review.

[!INCLUDE [package-management-license](../../includes/package-management-license.md)]

[!INCLUDE [national-cloud-support](../../includes/global-only.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions  | Higher privileged permissions |
|:---------------------------------------|:------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotPackages.ReadWrite.All | Not available.                |
| Delegated (personal Microsoft account) | Not supported.                | Not supported.                |
| Application                            | CopilotPackages.ReadWrite.All | Not available.                |

## HTTP request

```http
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{packageId}/reject
```

Replace `{packageId}` with the title ID confirmed for reviewing the pending submission. Don't substitute an individual request identifier.

## Request headers

| Name | Description |
|:-----|:------------|
| `Authorization` | `Bearer {token}`. Required. For more information, see [Authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type` | `application/json`. Required when supplying a request body. |

## Request body

The schema defines both parameters as optional. This doesn't mean that omitting `version` selects the latest or pending version. Supply the version of the staged submission you're rejecting.

| Parameter | Type | Description |
|:----------|:-----|:------------|
| `reviewerComment` | String | Optional explanation for the rejection. |
| `version` | String | Version of the staged package title submission to reject. Optional in the schema; use the matching submitted version to target a specific review. |

## Response

If successful, this method returns a `204 No Content` response code. It doesn't return anything in the response body.

## Example

This example assumes that the package owner has confirmed `{packageId}` as the title ID for reviewing the pending submission and that its submitted version is `1.2.3`. Replace the placeholder with that confirmed ID. Don't infer it from a package-detail path or response ID, and don't use an individual request's identifier.

### Request

The following example shows a request.

```http
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{packageId}/reject
Content-Type: application/json

{
  "version": "1.2.3",
  "reviewerComment": "The submitted title needs revision."
}
```

### Response

The following example shows the response.

```http
HTTP/1.1 204 No Content
```
