---
title: List Copilot packages
description: List all Copilot packages available in the tenant using the Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
doc_type: apiPageType
ms.localizationpriority: high
ms.date: 10/28/2025
---

<!-- cSpell: ignore pomuth -->
<!-- markdownlint-disable MD024 -->

# List packages

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Retrieves a list of all packages available in the tenant.

[!INCLUDE [national-cloud-support](../../includes/global-only.md)]

## Permissions

Choose the permission or permissions marked as least privileged for this API. Use a higher privileged permission or permissions [only if your app requires it](/graph/permissions-overview#best-practices-for-using-microsoft-graph-permissions). For details about delegated and application permissions, see [Permission types](/graph/permissions-overview#permission-types). To learn more about these permissions, see the [permissions reference](/graph/permissions-reference).

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotPackages.Read.All     | CopilotPackages.ReadWrite.All |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Not supported.               | Not supported.                |

## HTTP request

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages
```

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

### Optional query parameters

This method supports the `$filter` [OData query parameter](/graph/query-parameters) to help customize the response. The following properties are supported with the `$filter` OData query parameter. For examples of using the `$filter` query parameter, see [Examples](#examples).

| Parameter              | Type     | Description                                                              |
| ---------------------- | -------- | ------------------------------------------------------------------------ |
| `supportedHosts`       | string   | Filter by supported host (`Copilot`, `Outlook`, `Teams`, `M365`)         |
| `elementTypes`         | string   | Filter by element type (`Bots`, `DeclarativeAgent`, `CustomEngineAgent`) |
| `lastModifiedDateTime` | datetime | Filter by last updated date/time                                         |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a collection of [copilotPackage](resources/copilotpackage.md) objects in the response body.

### Examples

#### Example 1: List all packages

##### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages
```

##### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "P_19ae1zz1-56bc-505a-3d42-156df75a4xxy",
      "displayName": "Diligent Teams Document Uploader",
      "type": "external",
      "shortDescription": "Allows direct upload of documents from Microsoft Office into Diligent Teams for sharing",
      "isBlocked": false,
      "supportedHosts": ["Teams", "SharePoint"],
      "lastModifiedDateTime": "2025-10-06T00:07:20.1467852Z",
      "availableTo": "all",
      "deployedTo": "all"
    }
  ]
}
```

#### Example 2: List packages filtered by supported host

##### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=supportedHosts/any(h:h eq 'Word')
```

##### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "P_19ae1zz1-cb65-505a-3d42-156df75a4xxy",
      "displayName": "Contoso Document Formatter",
      "type": "external",
      "shortDescription": "Formats Word documents according to company style guide",
      "isBlocked": false,
      "supportedHosts": ["Word"],
      "lastModifiedDateTime": "2025-10-06T00:07:20.1467852Z",
      "availableTo": "all",
      "deployedTo": "all"
    }
  ]
}
```

#### Example 3: List packages filtered by element type

##### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=elementTypes/any(h:h eq 'OfficeAddIns')
```

##### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "P_19ae1zz1-505a-3492-9871-134df75a4xxy",
      "displayName": "Northwind Traders Account Lookup",
      "type": "external",
      "shortDescription": "Look up customer account details in Outlook and add them to email",
      "isBlocked": false,
      "supportedHosts": ["Outlook"],
      "lastModifiedDateTime": "2025-10-06T00:07:20.1467852Z",
      "availableTo": "all",
      "deployedTo": "all"
    }
  ]
}
```

#### Example 4: List packages by last updated date/time

##### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=lastModifiedDateTime gt 2026-01-01T00:00:00.0000000Z
```

##### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "P_19ae1zz1-56bc-505a-3d42-156df75a4xxy",
      "displayName": "Contoso HR Agent",
      "type": "custom",
      "shortDescription": "Agent that can answer HR questions",
      "isBlocked": false,
      "supportedHosts": ["Copilot"],
      "lastModifiedDateTime": "2026-01-06T00:07:20.1467852Z",
      "availableTo": "all",
      "deployedTo": "all"
    }
  ]
}
```
