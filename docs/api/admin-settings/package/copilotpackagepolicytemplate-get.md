---
title: Get copilotPackagePolicyTemplate
description: Read a Copilot package policy template and its saved selected configuration.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/11/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->
<!-- markdownlint-disable MD024 -->

# Get copilotPackagePolicyTemplate

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Read one tenant [copilotPackagePolicyTemplate](resources/copilotpackagepolicytemplate.md), including its saved `policyConfiguration`. Use its opaque identifier from [List policy templates](copilotpackagepolicytemplate-list.md).

This proposed contract isn't evidence of deployed availability. Declared delegated and application permission coverage requires matching receiving-service support before either path can be used.

Saved selections are separate from the complete applicable definitions and choices returned by [List policy definitions](copilotpackagepolicydefinition-list.md). Template summaries omit `policyConfiguration`; omission in a summary doesn't mean the saved template is unconfigured.

[!INCLUDE [package-management-license](../../includes/package-management-license.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type | Least privileged permissions | Higher privileged permissions |
|:----------------|:-----------------------------|:------------------------------|
| Delegated (work or school account) | CopilotPackages.Read.All | CopilotPackages.ReadWrite.All |
| Delegated (personal Microsoft account) | Not supported. | Not supported. |
| Application | CopilotPackages.Read.All | CopilotPackages.ReadWrite.All |

Permission metadata doesn't establish current application-only backend execution or bypass applicable tenant authorization.

## HTTP request

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/policyTemplates/{policyTemplateId}
```

The key identifies a template in the authenticated tenant, not a package, policy family, or individual choice.

## Request headers

| Name | Description |
|:-----|:------------|
| `Authorization` | Bearer token. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns `200 OK` and one [copilotPackagePolicyTemplate](resources/copilotpackagepolicytemplate.md), not a `value` collection.

A null `policyConfiguration` means the saved template was verified as unconfigured. Unavailable or malformed saved configuration returns an error, not null or an invented empty configuration. Displayed values don't include all source metadata and must not be used to reconstruct a [server-side copy](copilotpackagepolicytemplate-copy.md).

## Example

The identifiers and selected values below illustrate the proposed contract, not a live response. The saved configuration contains a Boolean `false` and integer `0`; both are present values, not omitted settings.

### Request

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/policyTemplates/example-template
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "example-template",
  "displayName": "Example custom template",
  "description": null,
  "policyConfiguration": {
    "policies": [
      {
        "policyDefinitionId": "example-family",
        "selections": [
          {
            "choiceId": "example-boolean-choice",
            "value": {
              "@odata.type": "#microsoft.graph.copilotPackagePolicyBooleanValue",
              "value": false
            }
          },
          {
            "choiceId": "example-integer-choice",
            "value": {
              "@odata.type": "#microsoft.graph.copilotPackagePolicyIntegerValue",
              "value": 0
            }
          }
        ]
      }
    ]
  }
}
```
