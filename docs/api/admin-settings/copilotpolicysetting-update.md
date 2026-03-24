---
title: "Update copilotPolicySetting"
description: "Update the properties of a copilotPolicySetting object."
author: "paarava"
ms.date: 03/19/2026
ms.localizationpriority: medium
doc_type: apiPageType
---

# Update copilotPolicySetting

Namespace: microsoft.graph

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Update the properties of a [copilotPolicySetting](../resources/copilotpolicysetting.md) object.

Update the value of a Copilot policy setting. The API resolves the correct underlying policy service and applies the update. If **policyId** is omitted from the request body, the API resolves the first matching tenant-level policy automatically.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

<!-- {
  "blockType": "permissions",
  "name": "copilotpolicysetting-update-permissions"
}
-->
|Permission type|Least privileged permission|Higher privileged permissions|
|:---|:---|:---|
|Delegated (work or school account)|CopilotPolicySettings.ReadWrite|Not available.|
|Delegated (personal Microsoft account)|Not supported.|Not supported.|
|Application|Not supported.|Not supported.|

## HTTP request

<!-- {
  "blockType": "ignored"
}
-->
``` http
PATCH /copilot/admin/policySettings/{id}
```

## Path parameters

|Parameter|Type|Description|
|:---|:---|:---|
|id|String|The friendly identifier of the Copilot setting. For example, `microsoft.copilot.pinsetting`. Required.|

## Request headers

|Name|Description|
|:---|:---|
|Authorization|Bearer {token}. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts).|
|Content-Type|application/json. Required.|

## Request body

[!INCLUDE [table-intro](../../includes/update-property-table-intro.md)]

|Property|Type|Description|
|:---|:---|:---|
|value|String|The new value to set for the setting. The format is setting-specific and may be a digit, URL, XML string, or JSON string. Required.|
|policyId|String|The ID of the target tenant-level policy. If omitted, the API resolves the first matching tenant-level policy automatically. Optional.|

## Response

If successful, this method returns a `200 OK` response code and an updated [copilotPolicySetting](../resources/copilotpolicysetting.md) object in the response body.

## Examples

### Example 1: Update with policyId specified

The following example shows how to update a Copilot setting value with an explicit policy ID.

#### Request

The following example shows a request.
<!-- {
  "blockType": "request",
  "name": "update_copilotpolicysetting_withpolicyid"
}
-->
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
  "value": "0",
  "policyId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

### Example 2: Update without policyId (API resolves automatically)

The following example shows how to update a setting value without specifying a policy ID. The API resolves the first matching tenant-level policy and applies the update.

#### Request

The following example shows a request.
<!-- {
  "blockType": "request",
  "name": "update_copilotpolicysetting_withoutpolicyid"
}
-->
``` http
PATCH https://graph.microsoft.com/beta/copilot/admin/policySettings/microsoft.copilot.pinsetting
Content-Type: application/json

{
  "value": "1"
}
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
