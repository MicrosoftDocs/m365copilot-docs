---
title: Get Copilot package details
description: Get details of a specific Copilot package using the Copilot Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
doc_type: apiPageType
ms.localizationpriority: high
ms.date: 11/17/2026
zone_pivot_groups: graph-api-versions
---

<!-- cSpell: ignore pomuth -->
<!-- markdownlint-disable MD024 -->

# Get Copilot package details

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]
:::zone-end

Retrieves detailed information for a specific agent by ID.

[!INCLUDE [package-management-license](../../includes/package-management-license.md)]

[!INCLUDE [national-cloud-support](../../includes/global-only.md)]

## Permissions

[!INCLUDE [permissions-intro](../../includes/permissions-intro.md)]

| Permission type                        | Least privileged permissions | Higher privileged permissions |
|:---------------------------------------|:-----------------------------|:------------------------------|
| Delegated (work or school account)     | CopilotPackages.Read.All     | CopilotPackages.ReadWrite.All |
| Delegated (personal Microsoft account) | Not supported.               | Not supported.                |
| Application                            | CopilotPackages.Read.All     | CopilotPackages.ReadWrite.All |

## HTTP request

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages/{id}
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}
```

:::zone-end

:::zone pivot="graph-preview"

## Optional query parameters

This method supports the `$select` [OData query parameter](/graph/query-parameters) to help customize the response.

| Parameter | Type | Description |
|:----------|:-----|:------------|
| `$select` | String | Use the exact selection `id,requestMetadata` to return only the package ID and request metadata. Use the package's exact title ID; this selection doesn't resolve an alternate staged ID. |
| `version` | String | Select the exact package/title version. Omit to retain versionless lookup, not to select "latest". Some pending first-publication titles require an explicit version to resolve. |

:::zone-end

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a [copilotPackageDetail](resources/copilotpackagedetail.md) object in the response body.

## Examples

### Example 1: Get package details

#### Request

The following example shows a request.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages/abc
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages/abc
```

:::zone-end

#### Response

The following example shows the response to the package detail request. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
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
  "agentIdentityId": "11111111-2222-3333-4444-555555555555",
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
  "owners": [
    {
      "resourceId": "user-789",
      "resourceType": "user"
    }
  ],
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

:::zone pivot="graph-preview"

### Example 2: Select request metadata

#### Request

The following example shows a request to get a package's request metadata. For field meanings and availability, see [copilotPackageRequestMetadata](resources/copilotpackagerequestmetadata.md).

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages/T_87654321-4321-4321-4321-210987654321?$select=id,requestMetadata
```

#### Response

The first entry in the `requests` property illustrates a publication request: `requestedBy` is the resolved requester's display contact and `assignees` is empty. The second entry illustrates a different request: `requestedBy` is the first explicit assignee, while `assignees` preserves all explicit members in order. A null contact isn't proof that no request exists. See [copilotPackageRequestInfo](resources/copilotpackagerequestinfo.md) for field meanings.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": "T_87654321-4321-4321-4321-210987654321",
  "requestMetadata": {
    "requests": [
      {
        "identifier": "request-publish",
        "assignees": [],
        "requestedBy": {
          "name": "Alex Example",
          "address": "alex@example.com"
        },
        "requestedDateTime": "2026-10-01T12:00:00Z"
      },
      {
        "identifier": "request-access",
        "assignees": [
          {
            "id": "11111111-1111-1111-1111-111111111111",
            "displayName": "Jordan Example",
            "userPrincipalName": "jordan@example.com",
            "principalType": "user"
          },
          {
            "id": "22222222-2222-2222-2222-222222222222",
            "displayName": "Example Team",
            "userPrincipalName": null,
            "principalType": "group"
          }
        ],
        "requestedBy": {
          "name": "Jordan Example",
          "address": "jordan@example.com"
        },
        "requestedDateTime": "2026-10-01T13:00:00Z"
      }
    ]
  }
}
```

:::zone-end
