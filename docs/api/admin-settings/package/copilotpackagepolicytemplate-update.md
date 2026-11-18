---
title: Update copilotPackagePolicyTemplate
description: Save supported changes to an existing writable custom Copilot package policy template.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/11/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->
<!-- markdownlint-disable MD024 -->

# Update copilotPackagePolicyTemplate

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Save changes to an existing writable custom [copilotPackagePolicyTemplate](resources/copilotpackagepolicytemplate.md). This is an explicit reusable-template update, unlike request-local [Publish customization](copilotpackagepublishresult-publish.md).

This proposed write contract requires matching schema and receiving-service qualification; permission coverage isn't proof of deployed application or delegated execution.

The service checks the bound target, caller authority, and whether the template is writable before mutation, including for an empty PATCH. A missing template isn't created. Protected or default templates can't be updated. To create a new custom template from a source, use [Copy](copilotpackagepolicytemplate-copy.md).

[!INCLUDE [package-management-license](../../includes/package-management-license.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type | Least privileged permissions | Higher privileged permissions |
|:----------------|:-----------------------------|:------------------------------|
| Delegated (work or school account) | CopilotPackages.ReadWrite.All | Not available. |
| Delegated (personal Microsoft account) | Not supported. | Not supported. |
| Application | CopilotPackages.ReadWrite.All | Not available. |

The target contract covers both delegated and application callers. Current backend support and applicable tenant authorization must be qualified separately.

## HTTP request

```http
PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/policyTemplates/{policyTemplateId}
```

## Request headers

| Name | Description |
|:-----|:------------|
| `Authorization` | Bearer token. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type` | `application/json`. Required. |

## Request body

Supply only the properties to change.

| Property | Type | Description |
|:---------|:-----|:------------|
| `description` | String | Optional. Omit to preserve it; explicit null clears it. |
| `displayName` | String | Optional. A supplied value must be non-null. Omit to preserve it. |
| `policyConfiguration` | [copilotPackagePolicyConfiguration](resources/copilotpackagepolicyconfiguration.md) | Optional. Omit to preserve saved settings. Explicit null is invalid. A present object strictly replaces the complete selected policy set, not an overlay. |

The immutable `id`, definition catalog, and other properties aren't writable. A configuration must include every applicable mandatory family; default and optional families may be omitted. Every selected family must contain its required choices. `{"policies":[]}` is a valid replacement only when no applicable mandatory family exists; it isn't equivalent to omission.

Updates are last-writer-wins. This contract provides no ETag or compare-and-swap protection, upsert, or transaction guarantee. Re-read current saved settings when reconciling concurrent changes.

## Response

If successful, this method returns `204 No Content` with no response body.

Invalid configuration, including explicit null, returns `400 Bad Request` before mutation. A missing target returns `404 Not Found`. Denied authority or a protected/default target returns `403 Forbidden`. Failures use the Graph error envelope; this reference doesn't establish deployment-specific error-code casing.

## Example

The illustrative request changes only the description of an existing writable custom template; it leaves saved configuration unchanged. Sample identifiers aren't live targets.

### Request

```http
PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/policyTemplates/example-template
Content-Type: application/json

{
  "description": "Updated organization policy description"
}
```

### Response

```http
HTTP/1.1 204 No Content
```
