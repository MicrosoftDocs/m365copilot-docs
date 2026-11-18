---
title: List copilotPackagePolicyDefinition
description: Read the complete supported policy definitions and choices applicable to one Copilot package policy template.
author: dmicrosoft
ms.author: digorgaz
ms.topic: reference
ms.date: 11/11/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dmicrosoft digorgaz -->
<!-- markdownlint-disable MD024 -->

# List copilotPackagePolicyDefinition

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Get the complete [copilotPackagePolicyDefinition](resources/copilotpackagepolicydefinition.md) catalog applicable to the bound template and authenticated tenant. Each definition contains its supported choices and trusted value constraints.

This proposed contract requires matching schema and receiving-service qualification. It doesn't establish deployed delegated or application execution.

This read describes available choices, not saved selections. Read saved settings with [Get policy template](copilotpackagepolicytemplate-get.md). Applicability is specific to the template, not inferred from the package's publication audience.

[!INCLUDE [package-management-license](../../includes/package-management-license.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type | Least privileged permissions | Higher privileged permissions |
|:----------------|:-----------------------------|:------------------------------|
| Delegated (work or school account) | CopilotPackages.Read.All | CopilotPackages.ReadWrite.All |
| Delegated (personal Microsoft account) | Not supported. | Not supported. |
| Application | CopilotPackages.Read.All | CopilotPackages.ReadWrite.All |

Permission declarations don't bypass tenant authorization or prove current backend support.

## HTTP request

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/policyTemplates/{policyTemplateId}/policyDefinitions
```

There is no tenant-wide definition inventory or GET-by-definition-ID endpoint in this contract. Choices have no independent resource URLs.

## Optional query parameters

This operation returns a complete catalog in one response, with no `@odata.nextLink`. `$top`, `$skip`, `$count`, `$filter`, and `$orderby` aren't supported. Expanding `policyDefinitions` on template summaries isn't supported either.

These restrictions don't change paging for [List policy templates](copilotpackagepolicytemplate-list.md). No page-size limit, stable ordering, `$search`, or delta protocol is introduced here.

## Request headers

| Name | Description |
|:-----|:------------|
| `Authorization` | Bearer token. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns `200 OK` and a `value` collection of [copilotPackagePolicyDefinition](resources/copilotpackagepolicydefinition.md) objects.

The catalog includes all applicable families and nested choices. Incomplete enumeration, unavailable constraints, or unknown requiredness returns an error, not a truncated, partial, or manufactured empty catalog. An empty successful catalog means the complete read found no applicable definitions.

Use `requirement` to decide whether a family must be present in a complete selected configuration. `mandatory` families must be included; `default` and `optional` families may be omitted. Within an included family, every choice with `isRequired: true` must be selected. Required choices in an omitted default or optional family don't make that family mandatory.

## Example

This illustrative catalog matches the selections in [Get policy template](copilotpackagepolicytemplate-get.md). The optional family may be omitted, but its Boolean choice is required if the family is included. False and zero satisfy the shown constraints.

### Request

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/policyTemplates/example-template/policyDefinitions
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "example-family",
      "displayName": "Example policy family",
      "requirement": "optional",
      "choices": [
        {
          "id": "example-boolean-choice",
          "displayName": "Example Boolean setting",
          "isRequired": true,
          "valueConstraint": {
            "dataType": "boolean",
            "isCollection": false,
            "usePredefinedValuesOnly": true,
            "allowedValues": [
              {
                "@odata.type": "#microsoft.graph.copilotPackagePolicyBooleanValue",
                "value": false
              },
              {
                "@odata.type": "#microsoft.graph.copilotPackagePolicyBooleanValue",
                "value": true
              }
            ]
          }
        },
        {
          "id": "example-integer-choice",
          "displayName": "Example integer setting",
          "isRequired": false,
          "valueConstraint": {
            "dataType": "integer",
            "isCollection": false,
            "usePredefinedValuesOnly": false,
            "allowedValues": []
          }
        }
      ]
    }
  ]
}
```
