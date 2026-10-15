---
title: Remove recipient
description: Remove an alert recipient.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Remove recipient

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Remove a [user](/graph/api/resources/user) reference from the recipients of a spending policy's [costManagementAlertSetting](resources/costmanagementalertsetting.md). Removing the last recipient while alerting is enabled is refused with a `400 alertRecipientsRequired` response.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions                | Higher privileged permissions |
|:---------------------------------------|:--------------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Policy.ReadWrite.All  | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                              | Not supported.                |
| Application                            | Not supported.                              | Not supported.                |

## HTTP request

```http
DELETE /copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings/recipients/{userId}/$ref
```

## Request headers

| Name            | Description                                                                                       |
|:----------------|:--------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `If-Match`      | The ETag of the parent spending policy. Required.                                                 |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `204 No Content` response code. It doesn't return anything in the response body.

## Example

### Request

The following example shows a request.

```http
DELETE https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b/emailThresholdSettings/recipients/9c4d1e2a-7f3b-4a11-8c60-2b7e5f0a91d4/$ref
If-Match: W/"9"
```

### Response

The following example shows the response.

```http
HTTP/1.1 204 No Content
ETag: W/"10"
```
