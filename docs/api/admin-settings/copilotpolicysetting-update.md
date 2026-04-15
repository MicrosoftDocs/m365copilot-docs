---
title: Update copilotPolicySetting
description: Update the properties of a copilotPolicySetting object.
author: paarava
ms.author: paarava
ms.topic: reference
ms.date: 04/15/2026
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

| Parameter | Type   | Description |
|:----------|:-------|:------------|
| `id`      | String | The friendly identifier of the Copilot setting. For the list of supported values, see [Supported settings](./resources/copilotpolicysetting.md#supported-settings). Required. |

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
PATCH https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.copilotchatpinning
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
  "id": "microsoft.copilot.copilotchatpinning",
  "value": "0",
  "policyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

### Example 2: Update without policyId (API resolves automatically)

The following example shows how to update a setting value without specifying a policy ID. The API resolves the first matching tenant-level policy and applies the update.

#### Request

The following example shows a request.

``` http
PATCH https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.copilotchatpinning
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
  "id": "microsoft.copilot.copilotchatpinning",
  "value": "1",
  "policyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

### Example 3: Update a setting scoped to a group-level policy

The following example shows a request to update a supported setting that is configured in a group-level policy, which this endpoint doesn't support. The API returns `422 Unprocessable Content`.

#### Request

The following example shows a request.

``` http
PATCH https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.copilotchatpinning
Content-Type: application/json

{
  "value": "0"
}
```

#### Response

The following example shows the response.

``` http
HTTP/1.1 422 Unprocessable Content
Content-Type: application/json

{
  "error": {
    "code": "unprocessableEntity",
    "message": "The setting 'microsoft.copilot.copilotchatpinning' is scoped to a group-level policy, which is not supported by this endpoint. Only tenant-level policy settings are supported.",
    "innerError": {
      "code": "groupScopedSettingNotSupported",
      "request-id": "00000000-0000-0000-0000-000000000003",
      "date": "2026-04-06T13:37:18",
      "client-request-id": "00000000-0000-0000-0000-000000000004"
    }
  }
}
```

### Example 4: Update an unsupported setting

The following example shows a request to update a setting identifier that isn't in the supported list. The API returns `404 Not Found`.

#### Request

The following example shows a request.

``` http
PATCH https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.pinning
Content-Type: application/json

{
  "value": "1"
}
```

#### Response

The following example shows the response.

``` http
HTTP/1.1 404 Not Found
Content-Type: application/json

{
  "error": {
    "code": "notFound",
    "message": "The setting 'microsoft.copilot.pinning' is not supported. Only supported Copilot settings can be accessed through this endpoint.",
    "innerError": {
      "code": "unsupportedSetting",
      "request-id": "00000000-0000-0000-0000-000000000001",
      "date": "2026-04-06T13:37:18",
      "client-request-id": "00000000-0000-0000-0000-000000000002"
    }
  }
}
```

### Example 5: Update a setting when the tenant has too many group policies

The following example shows a request to update a setting when the number of group-level policies in the tenant exceeds the supported limit. The API returns `502 Bad Gateway`.

#### Request

The following example shows a request.

``` http
PATCH https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.copilotchatpinning
Content-Type: application/json

{
  "value": "0"
}
```

#### Response

The following example shows the response.

``` http
HTTP/1.1 502 Bad Gateway
Content-Type: application/json

{
  "error": {
    "code": "badGateway",
    "message": "The operation could not be completed because the number of group-level policies exceeds the supported limit.",
    "innerError": {
      "code": "tooManyGroupPolicies",
      "request-id": "00000000-0000-0000-0000-000000000005",
      "date": "2026-04-13T11:16:52",
      "client-request-id": "00000000-0000-0000-0000-000000000006"
    }
  }
}
```
