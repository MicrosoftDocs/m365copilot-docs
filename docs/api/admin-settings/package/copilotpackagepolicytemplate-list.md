---
title: List copilotPackagePolicyTemplate
description: Get the policy templates available for publishing Copilot packages in your tenant.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/11/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->
<!-- markdownlint-disable MD024 -->

# List copilotPackagePolicyTemplate

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Get the available [copilotPackagePolicyTemplate](resources/copilotpackagepolicytemplate.md) objects before selecting a policy template for [Publish](copilotpackagepublishresult-publish.md) or native [Activate](copilotpackageactivationresult-activate.md).

Templates belong to the tenant, not an individual package. This operation returns template metadata, not policy definitions or assignments. A returned template still needs to be applicable to the package being published.

This proposed beta reference doesn't imply publication or deployment. A summary omits saved `policyConfiguration`. Use [Get](copilotpackagepolicytemplate-get.md) for saved settings and the separate template-bound [policy definitions](copilotpackagepolicydefinition-list.md) for complete applicable choices. Explicit [Update](copilotpackagepolicytemplate-update.md) and [Copy](copilotpackagepolicytemplate-copy.md) are separate operations; discovery doesn't modify a template.

[!INCLUDE [package-management-license](../../includes/package-management-license.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type | Least privileged permissions | Higher privileged permissions |
|:----------------|:-----------------------------|:------------------------------|
| Delegated (work or school account) | CopilotPackages.Read.All | CopilotPackages.ReadWrite.All |
| Delegated (personal Microsoft account) | Not supported. | Not supported. |
| Application | CopilotPackages.Read.All | CopilotPackages.ReadWrite.All |

The target permission contract covers delegated and application callers. Matching backend support and applicable tenant authorization are separate release requirements; permission metadata isn't deployed application-only execution.

## HTTP request

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/policyTemplates
```

This operation returns summaries. [Get policy template](copilotpackagepolicytemplate-get.md) separately reads one template by its opaque ID.

## Optional query parameters

The existing summary paging contract is unchanged. Follow `@odata.nextLink` when returned rather than treating one page as the complete inventory. This reference doesn't establish a numeric page-size bound.

The single-response completeness and unsupported `$top`/`$skip` rules of [List policy definitions](copilotpackagepolicydefinition-list.md) apply only to that template-bound catalog, not this summary list.

## Request headers

| Name | Description |
|:-----|:------------|
| `Authorization` | Bearer access token. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a `value` collection of [copilotPackagePolicyTemplate](resources/copilotpackagepolicytemplate.md) objects in the response body.

## Example

### Request

The following example shows an illustrative request.

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/policyTemplates
```

### Response

The following example shows an illustrative response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "MicrosoftAgentDefaultTemplate",
      "displayName": "Default policy template for agents",
      "description": "Default policy template for agents"
    }
  ]
}
```
