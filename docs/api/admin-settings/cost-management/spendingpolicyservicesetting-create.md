---
title: Create spendingPolicyServiceSetting
description: Create a new spendingPolicyServiceSetting object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Create spendingPolicyServiceSetting

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Create a new [spendingPolicyServiceSetting](resources/spendingpolicyservicesetting.md) object to add a service to an existing spending policy. The collection merges by `serviceId`: only the setting in the request body is touched, and settings absent from it are preserved.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions                | Higher privileged permissions |
|:---------------------------------------|:--------------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Policy.ReadWrite.All  | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                              | Not supported.                |
| Application                            | Not supported.                              | Not supported.                |

## HTTP request

```http
POST /copilot/costManagement/spendingPolicies/{id}/serviceSettings
```

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json`. Required.                                                                            |
| `If-Match`      | The ETag of the parent spending policy. Required.                                                        |

## Request body

In the request body, supply a JSON representation of a [spendingPolicyServiceSetting](resources/spendingpolicyservicesetting.md) object. Required properties are `serviceId` and `state`.

## Response

If successful, this method returns a `201 Created` response code and the created [spendingPolicyServiceSetting](resources/spendingpolicyservicesetting.md) object in the response body. The response includes `Location` and advanced `ETag` headers.

## Example

### Request

The following example shows a request.

```http
POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b/serviceSettings
If-Match: W/"3"
Content-Type: application/json

{
  "serviceId": "researcherCritiqueAndCouncil",
  "state": "enabled"
}
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 201 Created
Location: https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b/serviceSettings/researcherCritiqueAndCouncil
ETag: W/"4"
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/spendingPolicies('3f9e2c1a-0000-0000-0000-00000000c21b')/serviceSettings/$entity",
  "serviceId": "researcherCritiqueAndCouncil",
  "state": "enabled",
  "parentStatus": "enabled",
  "parentEtag": "W/\"4\""
}
```
