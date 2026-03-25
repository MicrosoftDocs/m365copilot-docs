---
title: "Get copilotPolicySetting"
description: "Read the properties and relationships of a copilotPolicySetting object."
author: "paarava"
ms.date: 03/19/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

# Get copilotPolicySetting

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]

Read the properties and relationships of a [copilotPolicySetting](./resources/copilotpolicysetting.md) object.

Retrieve the current value of a Copilot policy setting by its identifier. The API resolves the correct underlying policy service (CPS or Intune) and returns the setting value along with the associated policy ID. When the setting has not been configured or no tenant-level policy exists, the API returns `200 OK` with `value` and/or `policyId` set to `null` — this is not an error condition.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

<!-- {
  "blockType": "permissions",
  "name": "copilotpolicysetting-get-permissions"
}
-->
|Permission type|Least privileged permission|Higher privileged permissions|
|:---|:---|:---|
|Delegated (work or school account)|CopilotPolicySettings.Read|CopilotPolicySettings.ReadWrite|
|Delegated (personal Microsoft account)|Not supported.|Not supported.|
|Application|Not supported.|Not supported.|

## HTTP request

<!-- {
  "blockType": "ignored"
}
-->
``` http
GET /copilot/admin/policySettings/{id}
```

## Path parameters

|Parameter|Type|Description|
|:---|:---|:---|
|id|String|The friendly identifier of the Copilot setting. For example, `microsoft.copilot.pinsetting`. Required.|

## Optional query parameters

This method supports the `$select` OData query parameter to help customize the response. For general information, see [OData query parameters](/graph/query-parameters).

## Request headers

|Name|Description|
|:---|:---|
|Authorization|Bearer {token}. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts).|

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [copilotPolicySetting](./resources/copilotpolicysetting.md) object in the response body.

## Examples

### Example 1: Get a configured setting

The following example shows how to retrieve a Copilot setting that has been configured with a value in a tenant-level policy.

#### Request

The following example shows a request.
<!-- {
  "blockType": "request",
  "name": "get_copilotpolicysetting_configured"
}
-->
``` http
GET https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.pinsetting
```

#### Response

The following example shows the response.
<!-- {
  "blockType": "response",
  "truncated": true,
  "@odata.type": "microsoft.graph.copilotPolicySetting"
}
-->
``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/admin/policySettings/$entity",
  "@odata.type": "#microsoft.graph.copilotPolicySetting",
  "id": "microsoft.copilot.pinsetting",
  "value": "1",
  "policyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

### Example 2: Get an unconfigured setting

The following example shows how to retrieve a setting where a tenant-level policy exists but the setting value has not been configured. The API returns `200 OK` with `value` as `null`.

#### Request

The following example shows a request.
<!-- {
  "blockType": "request",
  "name": "get_copilotpolicysetting_unconfigured"
}
-->
``` http
GET https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.somesetting
```

#### Response

The following example shows the response.
<!-- {
  "blockType": "response",
  "truncated": true,
  "@odata.type": "microsoft.graph.copilotPolicySetting"
}
-->
``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/admin/policySettings/$entity",
  "@odata.type": "#microsoft.graph.copilotPolicySetting",
  "id": "microsoft.copilot.somesetting",
  "value": null,
  "policyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

### Example 3: Get a setting when no policy exists

The following example shows how to retrieve a setting where no tenant-level policy has been created yet. The API returns `200 OK` with both `value` and `policyId` as `null`.

#### Request

The following example shows a request.
<!-- {
  "blockType": "request",
  "name": "get_copilotpolicysetting_nopolicy"
}
-->
``` http
GET https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.anothersetting
```

#### Response

The following example shows the response.
<!-- {
  "blockType": "response",
  "truncated": true,
  "@odata.type": "microsoft.graph.copilotPolicySetting"
}
-->
``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/admin/policySettings/$entity",
  "@odata.type": "#microsoft.graph.copilotPolicySetting",
  "id": "microsoft.copilot.anothersetting",
  "value": null,
  "policyId": null
}
```
