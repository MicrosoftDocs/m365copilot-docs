---
title: Get Copilot package details
description: Get details of a specific Copilot package using the Copilot Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
doc_type: apiPageType
ms.localizationpriority: high
ms.date: 05/01/2026
---

<!-- cSpell: ignore pomuth -->
<!-- markdownlint-disable MD024 -->

# Get Copilot package details

[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]

Retrieves detailed information for a specific agent or app by ID.

[!INCLUDE [package-management-license](../../includes/package-management-license.md)]

[!INCLUDE [national-cloud-support](../../includes/global-only.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotPackages.Read.All     | CopilotPackages.ReadWrite.All |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | Not supported.               | Not supported.                |

## HTTP request

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}
```

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [copilotPackageDetail](resources/copilotpackagedetail.md) object in the response body.

### Example

#### Request

The following example shows a request.

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages/abc
```

#### Response

The following example shows the response.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "@odata.context": "https://graph.microsoft.com/beta/$metadata#copilot/admin/catalog/packages/$entity",
  "id": "P_19ae1zz1-56bc-505a-3d42-156df75a4xxy",
  "displayName": "Contoso Sales Agent",
  "type": "custom",
  "shortDescription": "Short description for package abc",
  "isBlocked": false,
  "supportedHosts": ["teams", "outlook", "sharePoint"],
  "lastModifiedDateTime": "2025-10-06T00:07:20.146Z",
  "publisher": "Contoso",
  "availableTo": "all",
  "deployedTo": "some",
  "elementTypes": ["declarativeAgent"],
  "platform": "teams",
  "version": "1.2.3",
  "manifestVersion": "2.0",
  "manifestId": "contoso-sales-agent",
  "appId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  "assetId": "asset-00042",
  "longDescription": "This is a detailed description for package abc. It provides comprehensive information about the package functionality, features, and usage scenarios.",
  "categories": [
    "Development",
    "Productivity",
    "Tools"
  ],
  "sensitivity": "general",
  "allowedUsersAndGroups": [
    {
      "resourceId": "user-123",
      "resourceType": "user"
    },
    {
      "resourceId": "group-456",
      "resourceType": "group"
    }
  ],
  "acquireUsersAndGroups": [],
  "elementDetails": [
    {
      "elementType": "bot",
      "elements": [
        {
          "id": "bot-001",
          "definition": "{\"botId\":\"303e399a-cecc-4511-ad38-82970baa288b\",\"scopes\":[\"personal\"],\"isNotificationOnly\":true,\"supportsCalling\":false,\"supportsVideo\":false,\"supportsFiles\":false}"
        }
      ]
    },
    {
      "elementType": "declarativeAgent",
      "elements": [
        {
          "id": "dcp-001",
          "definition": "{\"id\":\"dcp-001\",\"version\":\"v2.1\",\"name\":\"Contoso Sales Agent\"}"
        }
      ]
    }
  ]
}
```
