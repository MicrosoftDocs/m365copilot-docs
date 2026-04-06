---
title: Get copilotPolicySetting
description: Retrieve the properties of a copilotPolicySetting object.
author: paarava
ms.author: paarava
ms.topic: reference
ms.date: 03/26/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

# Get copilotPolicySetting

<!-- markdownlint-disable MD024 -->
<!-- cSpell:ignore paarava pinsetting -->

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

Read the properties of a [copilotPolicySetting](resources/copilotpolicysetting.md) object.

Retrieve the current value of a Copilot policy setting by its identifier. The API resolves the correct underlying policy service (CPS or Intune) and returns the setting value along with the associated policy ID.

## Permissions

[!INCLUDE [permissions-intro](../includes/permissions-intro.md)]

| Permission type                        | Least privileged permission | Higher privileged permissions   |
|:---------------------------------------|:----------------------------|:--------------------------------|
| Delegated (work or school account)     | CopilotPolicySettings.Read  | CopilotPolicySettings.ReadWrite |
| Delegated (personal Microsoft account) | Not supported.              | Not supported.                  |
| Application                            | Not supported.              | Not supported.                  |

## HTTP request

<!-- {
  "blockType": "ignored"
}
-->
``` http
GET https://graph.microsoft.com/beta/copilot/admin/policySettings/{id}
```

## Path parameters

|Parameter|Type|Description|
|:---|:---|:---|
|id|String|The friendly identifier of the Copilot setting. For the list of supported values, see [Supported settings](./resources/copilotpolicysetting.md#supported-settings). Required.|

## Optional query parameters

This method supports the `$select` OData query parameter to help customize the response. For general information, see [OData query parameters](/graph/query-parameters).

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [copilotPolicySetting](./resources/copilotpolicysetting.md) object in the response body.

When the setting isn't configured or no tenant-level policy exists, the API returns `200 OK` with `value` and/or `policyId` set to `null`.

## Examples

### Example 1: Get a configured setting

The following example shows how to retrieve a Copilot setting that is configured with a value in a tenant-level policy.

#### Request

The following example shows a request.

``` http
GET https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.copilotchatpinning
```

#### Response

The following example shows the response.

``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/admin/policySettings/$entity",
  "@odata.type": "#microsoft.graph.copilotPolicySetting",
  "id": "microsoft.copilot.copilotchatpinning",
  "value": "1",
  "policyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

### Example 2: Get an unconfigured setting

The following example shows how to retrieve a setting where a tenant-level policy exists but the setting value isn't configured. The API returns `200 OK` with `value` as `null`.

#### Request

The following example shows a request.

``` http
GET https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.imagegeneration
```

#### Response

The following example shows the response.

``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/admin/policySettings/$entity",
  "@odata.type": "#microsoft.graph.copilotPolicySetting",
  "id": "microsoft.copilot.imagegeneration",
  "value": null,
  "policyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

### Example 3: Get a setting when no policy exists

The following example shows how to retrieve a setting where no tenant-level policy is created yet. The API returns `200 OK` with both `value` and `policyId` as `null`.

#### Request

The following example shows a request.

``` http
GET https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.allowwebsearch
```

#### Response

The following example shows the response.

``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/admin/policySettings/$entity",
  "@odata.type": "#microsoft.graph.copilotPolicySetting",
  "id": "microsoft.copilot.allowwebsearch",
  "value": null,
  "policyId": null
}
```

### Example 4: Get a setting scoped to a group-level policy

The following example shows a request for a supported setting that is configured in a group-level policy, which this endpoint doesn't support. The API returns `422 Unprocessable Content`.

#### Request

The following example shows a request.
<!-- {
  "blockType": "request",
  "name": "get_copilotpolicysetting_groupscoped"
}
-->
``` http
GET https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.copilotchatpinning
```

#### Response

The following example shows the response.
<!-- {
  "blockType": "response",
  "truncated": true
}
-->
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

### Example 5: Get an unsupported setting

The following example shows a request for a setting identifier that isn't in the supported list. The API returns `404 Not Found`.

#### Request

The following example shows a request.
<!-- {
  "blockType": "request",
  "name": "get_copilotpolicysetting_unsupported"
}
-->
``` http
GET https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.pinning
```

#### Response

The following example shows the response.
<!-- {
  "blockType": "response",
  "truncated": true
}
-->
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
