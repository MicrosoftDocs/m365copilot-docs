---
title: "copilotPackage: restore"
description: Restore an eligible previously soft-deleted Copilot package.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/17/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->
<!-- markdownlint-disable MD024 -->

# copilotPackage: restore

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Restore an eligible previously soft-deleted package using its retained package/title identifier.

This reference describes the reviewed beta contract. Availability depends on the matching schema and backend release; API-review approval isn't evidence of deployed availability.

Restore is not [Unblock](copilotpackage-unblock.md). Changing a block setting doesn't reverse soft deletion. This action doesn't introduce a deleted-package discovery endpoint, retention period, recovery window, or permanent-deletion capability.

[!INCLUDE [package-management-license](../../includes/package-management-license.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type | Least privileged permissions | Higher privileged permissions |
|:----------------|:-----------------------------|:------------------------------|
| Delegated (work or school account) | CopilotPackages.ReadWrite.All | Not available. |
| Delegated (personal Microsoft account) | Not supported. | Not supported. |
| Application | CopilotPackages.ReadWrite.All | Not available. |

Application permission coverage is subject to the matching application adapter and receiving-service release; it isn't universal caller-mode certification.

## HTTP request

```http
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{packageId}/restore
```

Use a known recoverable package/title ID. Don't substitute a directory object, request, staged-version, bot, or environment identifier. The route is the only target input.

## Request headers

| Name | Description |
|:-----|:------------|
| `Authorization` | Bearer token. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

There are no additional body parameters or action-specific query options. Target-override query keys such as `titleId`, `identificationType`, `environmentId`, and `botId` are rejected rather than used to change the operation's target.

## Response

If successful, this method returns `204 No Content` with no response body.

Success reports the restore facade's outcome. It isn't an all-surfaces transaction or a guarantee that every optional linked-title, directory, or cache effect has completed.

Failures use a neutral Microsoft Graph error envelope with an HTTP status appropriate to the outcome. A missing target can return 404; a lifecycle conflict can return 409; an unavailable recovery target can return 410; a dependency failure can return 424 or 503. These are outcome mappings, not a universal retention-window or already-active contract. Earlier authentication and authorization failures have their own platform handling.

An interrupted or partial restore doesn't establish that retry is safe. Reconcile the package's state before another mutation; don't assume rollback or idempotency.

## Example

### Request

The following illustrative request uses the retained identifier of an eligible soft-deleted package. Replace the sample identifier with the intended package's retained identifier.

```http
POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/T_87654321-4321-4321-4321-210987654321/restore
```

### Response

```http
HTTP/1.1 204 No Content
```
