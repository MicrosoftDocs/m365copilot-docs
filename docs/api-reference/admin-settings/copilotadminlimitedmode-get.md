---
title: Get copilotAdminLimitedMode
description: Read the properties and relationships of a copilotAdminLimitedMode object.
author: gautamjain14
ms.author: gajain
ms.localizationpriority: medium
doc_type: apiPageType
ms.topic: reference
ms.date: 05/08/2025
zone_pivot_groups: graph-api-versions
---

# Get copilotAdminLimitedMode

<!-- markdownlint-disable MD024 -->
<!-- cSpell:ignore gautamjain14 gajain -->

:::zone pivot="graph-beta"
[!INCLUDE [beta-disclaimer](../includes/beta-disclaimer.md)]
:::zone-end

Read the properties and relationships of a [copilotAdminLimitedMode](./resources/copilotadminlimitedmode.md) object.

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions     | Higher privileged permissions         |
|:---------------------------------------|:---------------------------------|:--------------------------------------|
| Delegated (work or school account)     | CopilotSettings-LimitedMode.Read | CopilotSettings-LimitedMode.ReadWrite |
| Delegated (personal Microsoft account) | Not supported.                   | Not supported.                        |
| Application                            | Not supported.                   | Not supported.                        |

> [!IMPORTANT]
> Global Reader is the least privileged [administrator role](/entra/identity/role-based-access-control/permissions-reference?toc=%2Fgraph%2Ftoc.json) supported for this operation.

## HTTP request

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/settings/limitedMode
```

:::zone-end

:::zone pivot="graph-beta"

```http
GET https://graph.microsoft.com/beta/copilot/admin/settings/limitedMode
```

:::zone-end

## Request headers

| Name            | Description                                                                                                |
|:----------------|:-----------------------------------------------------------------------------------------------------------|
| `Authorization` |`Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [copilotAdminLimitedMode](./resources/copilotadminlimitedmode.md) object in the response body.

This API can also return more HTTP status codes, such as `403 Forbidden`, `500 Internal Server Error`, and `429 Too Many Requests`.

## Example

### Request

The following example shows a request.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/settings/limitedMode
```

:::zone-end

:::zone pivot="graph-beta"

```http
GET https://graph.microsoft.com/beta/copilot/admin/settings/limitedMode
```

:::zone-end

### Response

The following example shows the response.

``` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.type": "#microsoft.graph.copilotAdminLimitedMode",
  "isEnabledForGroup": true,
  "groupId": "4c563cdf-0efa-44c5-a384-dbf57db277df"
}
```
