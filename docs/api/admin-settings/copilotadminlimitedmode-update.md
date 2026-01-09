---
title: Update copilotAminLimitedMode
description: Update the properties of a copilotAdminLimitedMode object.
author: gautamjain14
ms.author: gajain
ms.localizationpriority: medium
doc_type: apiPageType
ms.topic: reference
ms.date: 08/08/2025
zone_pivot_groups: graph-api-versions
---

# Update copilotAdminLimitedMode

<!-- markdownlint-disable MD024 -->
<!-- cSpell:ignore gautamjain14 gajain -->

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

Update the properties of a [copilotAdminLimitedMode](resources/copilotadminlimitedmode.md) object.

[!INCLUDE [national-cloud-support](../includes/global-only.md)]

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions          | Higher privileged permissions |
|:---------------------------------------|:--------------------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotSettings-LimitedMode.ReadWrite | Not available.                |
| Delegated (personal Microsoft account) | Not supported.                        | Not supported.                |
| Application                            | Not supported.                        | Not supported.                |

> [!IMPORTANT]
>
> In delegated scenarios with work or school accounts, the signed-in user must be assigned the Global Administrator [Microsoft Entra role](/entra/identity/role-based-access-control/permissions-reference?toc=%2Fgraph%2Ftoc.json).

## HTTP request

:::zone pivot="graph-v1"

```http
PATCH https://graph.microsoft.com/v1.0/copilot/admin/settings/limitedMode
```

:::zone-end

:::zone pivot="graph-preview"

```http
PATCH https://graph.microsoft.com/beta/copilot/admin/settings/limitedMode
```

:::zone-end

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}`. Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |
| `Content-Type`  | `application/json`. Required.                                                                               |

## Request body

| Property            | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
|:--------------------|:--------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `groupId`           | String  | The ID of a Microsoft Entra group, for which the value of `isEnabledForGroup` is applied. The default value is `null`. If `isEnabledForGroup` is set to `true`, the `groupId` value must be provided for the Copilot limited mode in Teams meetings to be enabled for the members of the group. Optional.                                                                                                    |
| `isEnabledForGroup` | Boolean | Enables the user to be in limited mode for Copilot in Teams meetings. When `copilotAdminLimitedMode=true`, users in this mode can ask any questions, but Copilot doesn't respond to certain questions related to inferring emotions, behavior, or judgments. When `copilotAdminLimitedMode=false`, it responds to all types of questions grounded to the meeting conversation. The default value is `false`. |

## Response

If successful, this method returns a `200 OK` response code and an updated [copilotAdminLimitedMode](resources/copilotadminlimitedmode.md) object in the response body.

This API can also return more HTTP status codes, such as `403 Forbidden`, `500 Internal Server Error`, and `429 Too Many Requests`.

## Example

### Request

The following example shows a request.

:::zone pivot="graph-v1"

```http
PATCH https://graph.microsoft.com/v1.0/copilot/admin/settings/limitedMode
Content-Type: application/json

{
  "@odata.type": "#microsoft.graph.copilotAdminLimitedMode",
  "isEnabledForGroup": true,
  "groupId": "4c563cdf-0efa-44c5-a384-dbf57db277df"
}
```

:::zone-end

:::zone pivot="graph-preview"

```http
PATCH https://graph.microsoft.com/beta/copilot/admin/settings/limitedMode
Content-Type: application/json

{
  "@odata.type": "#microsoft.graph.copilotAdminLimitedMode",
  "isEnabledForGroup": true,
  "groupId": "4c563cdf-0efa-44c5-a384-dbf57db277df"
}
```

:::zone-end

### Response

The following example shows the response.

``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "isEnabledForGroup": true,
  "groupId": "4c563cdf-0efa-44c5-a384-dbf57db277df"
}
```
