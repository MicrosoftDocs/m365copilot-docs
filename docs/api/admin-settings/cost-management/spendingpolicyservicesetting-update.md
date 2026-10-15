---
title: Update spendingPolicyServiceSetting
description: Update a spendingPolicyServiceSetting object.
author: DanielSaunders
ms.author: dsaunders
ms.topic: reference
ms.date: 10/02/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

<!-- cSpell:ignore dsaunders -->
<!-- markdownlint-disable MD024 -->

# Update spendingPolicyServiceSetting

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Update a [spendingPolicyServiceSetting](resources/spendingpolicyservicesetting.md) object. Setting `state` to `disabled` is the removal semantic; the entry is retained in that state, and the collection has no `DELETE`. Disabling the last enabled service is refused with a `409 atLeastOneServiceRequired` response.

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions                | Higher privileged permissions |
|:---------------------------------------|:--------------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotCostManagement-Policy.ReadWrite.All  | Not supported.                |
| Delegated (personal Microsoft account) | Not supported.                              | Not supported.                |
| Application                            | Not supported.                              | Not supported.                |

## HTTP request

```http
PATCH /copilot/costManagement/spendingPolicies/{id}/serviceSettings/{serviceId}
```

## Request headers

| Name            | Description                                                                                               |
|:----------------|:---------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json`. Required.                                                                            |
| `If-Match`      | The ETag of the parent spending policy. Required.                                                        |

## Request body

In the request body, supply the values for the properties to update. The `state` property can be updated.

## Response

If successful, this method returns a `200 OK` response code and the updated [spendingPolicyServiceSetting](resources/spendingpolicyservicesetting.md) object in the response body. The response includes an advanced `ETag` header.

## Example

### Request

The following example shows a request.

```http
PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b/serviceSettings/cowork
If-Match: W/"4"
Content-Type: application/json

{
  "state": "disabled"
}
```

### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
ETag: W/"5"
Content-type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/costManagement/spendingPolicies('3f9e2c1a-0000-0000-0000-00000000c21b')/serviceSettings/$entity",
  "serviceId": "cowork",
  "state": "disabled",
  "parentStatus": "enabled",
  "parentEtag": "W/\"5\""
}
```
