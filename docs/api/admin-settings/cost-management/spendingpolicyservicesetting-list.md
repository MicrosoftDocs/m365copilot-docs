---
title: List spendingPolicyServiceSettings
description: Get a list of spendingPolicyServiceSetting objects.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# List spendingPolicyServiceSettings

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Get a list of [spendingPolicyServiceSetting](resources/spendingpolicyservicesetting.md) objects for a spending policy.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions          | Higher privileged permissions |
|:---------------------------------------|:--------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Policy.Read.All | CopilotCostManagement-Policy.ReadWrite.All                |
| Delegated (personal Microsoft account) | Not supported.                        | Not supported.                |
| Application                            | Not supported.                        | Not supported.                |

## HTTP request

```http
GET /copilot/costManagement/spendingPolicies/{id}/serviceSettings
```

## Optional query parameters

This method supports the `$select` [OData query parameter](/graph/query-parameters) to help customize the response.

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a collection of [spendingPolicyServiceSetting](resources/spendingpolicyservicesetting.md) objects in the response body.

## Example

### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b/serviceSettings
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/spendingPolicies('3f9e2c1a-0000-0000-0000-00000000c21b')/serviceSettings",
  "value": [
    { "serviceId": "cowork", "state": "enabled", "parentStatus": "enabled", "parentEtag": "W/\"2\"" },
    { "serviceId": "workIQ", "state": "enabled", "parentStatus": "enabled", "parentEtag": "W/\"2\"" }
  ]
}
```
