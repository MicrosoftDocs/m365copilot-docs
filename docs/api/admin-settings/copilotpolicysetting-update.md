---
title: Update copilotPolicySetting
description: Update the properties of a copilotPolicySetting object.
author: paarava
ms.author: paarava
ms.topic: reference
ms.date: 03/26/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

# Update copilotPolicySetting

<!-- markdownlint-disable MD024 -->
<!-- cSpell:ignore paarava -->

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

Update the properties of a [copilotPolicySetting](./resources/copilotpolicysetting.md) object.

Update the value of a Copilot policy setting. The API resolves the correct underlying policy service and applies the update. If `policyId` is omitted from the request body, the API resolves the first matching tenant-level policy automatically.

## Permissions

[!INCLUDE [permissions-intro](../includes/permissions-intro.md)]

| Permission type                        | Least privileged permission     | Higher privileged permissions |
|:---------------------------------------|:--------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotPolicySettings.ReadWrite | Not available.                |
| Delegated (personal Microsoft account) | Not supported.                  | Not supported.                |
| Application                            | Not supported.                  | Not supported.                |

## HTTP request

``` http
PATCH https://graph.microsoft.com/beta/copilot/admin/policySettings/{id}
```

## Path parameters

| Parameter | Type   | Description                                                                                            |
|:----------|:-------|:-------------------------------------------------------------------------------------------------------|
| `id`      | String | The friendly identifier of the Copilot setting. For example, `microsoft.copilot.pinsetting`. Required. |

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json`. Required.                                                                               |

## Request body

| Property   | Type   | Description                                                                                                                            |
|:-----------|:-------|:---------------------------------------------------------------------------------------------------------------------------------------|
| `policyId` | String | The ID of the target tenant-level policy. If omitted, the API resolves the first matching tenant-level policy automatically. Optional. |
| `value`    | String | The new value to set for the setting. The format is setting-specific and might be a digit, URL, XML string, or JSON string. Required.  |

## Response

If successful, this method returns a `200 OK` response code and an updated [copilotPolicySetting](./resources/copilotpolicysetting.md) object in the response body.

## Examples

### Example 1: Update with policyId specified

The following example shows how to update a Copilot setting value with an explicit policy ID.

#### Request

The following example shows a request.

``` http
PATCH https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.pinsetting
Content-Type: application/json

{
  "value": "0",
  "policyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

#### Response

The following example shows the response.

``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "microsoft.copilot.pinsetting",
  "value": "0",
  "policyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

### Example 2: Update without policyId (API resolves automatically)

The following example shows how to update a setting value without specifying a policy ID. The API resolves the first matching tenant-level policy and applies the update.

#### Request

The following example shows a request.

``` http
PATCH https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.pinsetting
Content-Type: application/json

{
  "value": "1"
}
```

#### Response

The following example shows the response.

``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "microsoft.copilot.pinsetting",
  "value": "1",
  "policyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```
