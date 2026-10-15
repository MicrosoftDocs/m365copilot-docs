---
title: Add recipient
description: Add a user reference as an alert recipient.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Add recipient

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Add a [user](/graph/api/resources/user) reference as a recipient of a spending policy's [costManagementAlertSetting](resources/costmanagementalertsetting.md). A reference that doesn't resolve to a user in the tenant is refused with a `400 alertRecipientNotFound` response.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions                | Higher privileged permissions |
|:---------------------------------------|:--------------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Policy.ReadWrite.All  | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                              | Not supported.                |
| Application                            | Not supported.                              | Not supported.                |

## HTTP request

```http
POST /copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings/recipients/$ref
```

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json`. Required.                                                                            |
| `If-Match`      | The ETag of the parent spending policy. Required.                                                        |

## Request body

In the request body, supply a JSON object with an `@odata.id` property set to the reference URL of the [user](/graph/api/resources/user) to add.

## Response

If successful, this method returns a `204 No Content` response code and an advanced `ETag` header. It doesn't return anything in the response body.

## Example

### Request

The following example shows a request.

```http
POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b/emailThresholdSettings/recipients/$ref
If-Match: W/"8"
Content-Type: application/json

{
  "@odata.id": "https://graph.microsoft.com/beta/users/9c4d1e2a-7f3b-4a11-8c60-2b7e5f0a91d4"
}
```

### Response

The following example shows the response.

```http
HTTP/1.1 204 No Content
ETag: W/"9"
```
