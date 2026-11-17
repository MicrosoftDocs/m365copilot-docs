---
title: List Copilot packages
description: List the agents and tools, such as plugins, MCP servers, and skills, available in the tenant by using the Package Management API.
author: pomuth
ms.author: pomuth
ms.topic: reference
doc_type: apiPageType
ms.localizationpriority: high
ms.date: 10/30/2026
zone_pivot_groups: graph-api-versions
---

<!-- cSpell: ignore pomuth -->
<!-- markdownlint-disable MD024 -->

# List packages

:::zone pivot="graph-preview"
[!INCLUDE [beta-disclaimer](../../includes/beta-disclaimer.md)]
:::zone-end

Retrieves a list of the packages available in the tenant.

By default, the response contains only titles that contain an agent. To return titles that contain tools, such as plugins, MCP servers, and skills, filter on `elementTypes`. For details, see [Filter by element type](#filter-by-element-type). This API doesn't return Power Platform connectors.

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
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages
```

:::zone-end

## Request headers

| Name            | Description                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------|
| `Authorization` | `Bearer {token}.` Required. Learn more about [authentication and authorization](/graph/auth/auth-concepts). |

### Optional query parameters

This method supports the `$filter` [OData query parameter](/graph/query-parameters) to help customize the response. The following properties are supported with the `$filter` OData query parameter. For examples of using the `$filter` query parameter, see [Examples](#examples).

| Parameter              | Type     | Description                                                                  |
|------------------------|----------|------------------------------------------------------------------------------|
| `supportedHosts`       | string   | Filter by supported host (`Copilot`, `Outlook`, `Teams`, `M365`)             |
| `elementTypes`         | string   | Filter by element type (see [Filter by element type](#filter-by-element-type)) |
| `lastModifiedDateTime` | datetime | Filter by last updated date/time, using `ge` or `le`                           |
| `platform`             | string   | Filter by platform (`Copilot Studio`, `Microsoft 365 Copilot Agent Builder`)   |
| `requestStatus`        | [copilotPackageRequestStatus](resources/copilotpackage.md#copilotpackagerequeststatus-enumeration) | Filter by request status, using `pending` (see [Filter by request properties](#filter-by-request-properties)) |
| `requestType`          | [copilotPackageRequestType](resources/copilotpackage.md#copilotpackagerequesttype-enumeration) | Filter by the kind of request (see [Filter by request properties](#filter-by-request-properties)) |

#### Filter by element type

To filter by element type, use the `any` lambda operator on the `elementTypes` collection, for example, `elementTypes/any(e:e eq 'DeclarativeAgent')`. To filter on more than one element type, join the comparisons with `or` inside the lambda, for example, `elementTypes/any(e:e eq 'DeclarativeCopilots' or e eq 'AgentConnectors')`.

Agent element types include the following:

| Value               | Description                                |
|:--------------------|:-------------------------------------------|
| `Bots`              | Titles that contain a bot.                 |
| `CustomEngineAgent` | Titles that contain a custom engine agent. |
| `DeclarativeAgent`  | Titles that contain a declarative agent.   |

The service also accepts `CustomEngineCopilots` and `DeclarativeCopilots` as alternate names for custom engine agents and declarative agents.

To return titles that contain tools, such as plugins, MCP servers, and skills, filter on the following tool element types.

| Value             | Description                      |
|:------------------|:---------------------------------|
| `AgentConnectors` | Titles that contain MCP servers. |
| `AgentSkills`     | Titles that contain skills.      |

> [!NOTE]
> This API doesn't return Power Platform connectors.

You can also pass one of the following aliases. The service translates each alias to the listed element types before it applies the filter.

| Alias         | Translated to                                                                   |
|:--------------|:--------------------------------------------------------------------------------|
| `MCPServers`  | `AgentConnectors`                                                               |
| `Skills`      | `AgentSkills`                                                                   |
| `ToolPlugins` | `AgentConnectors`, `AgentSkills`, `DeclarativeCopilots`, `CustomEngineCopilots` |

The `MCPServers` alias returns the same results as `AgentConnectors`. Because the `ToolPlugins` alias includes both tool and agent element types, it returns the titles that contain plugins or skills, whether or not they contain an agent, together with the titles that contain a declarative agent or a custom engine agent.

The element type filter works as follows:

- If the filter doesn't include a tool element type, the response contains only titles that contain an agent, the same rule that applies to an unfiltered request.
- If the filter includes a tool element type, the response contains the titles that contain that tool element type, whether or not they contain an agent.
- If the filter includes both agent and tool element types, the response contains the titles that contain a requested tool element type, whether or not they contain an agent, together with the titles that contain an agent and a requested agent element type.
- A title is returned if it contains any of the requested element types. For example, a filter on `AgentSkills` can return a title that contains both an agent and a skill.
- If the filter includes an element type value that the service doesn't recognize, the response contains an empty collection. The request doesn't return an error.

> [!NOTE]
> Because a title is returned if it contains any requested element type, the response can include titles that contain both agents and tools. To tell them apart, inspect the `elementTypes` property of each item.

You can also combine `elementTypes` with request filters to review requests for tools. For details, see [Filter by request properties](#filter-by-request-properties).

#### Filter by request properties

The `requestStatus` and `requestType` properties describe a request that a user in the organization submitted for a package. Filtering on either property returns the packages that users requested.

Without an `elementTypes` filter that includes `AgentConnectors`, either directly or through the `MCPServers` or `ToolPlugins` alias, request filters return only titles that contain an agent.

The following filter expressions are supported:

- `requestStatus eq 'pending'`, which selects the open request queue. Other `requestStatus` members aren't supported in a filter.
- A single `eq` comparison on `requestType`, against one of the `publish`, `activate`, `access`, or `update` members. Don't filter on the `unknownFutureValue` sentinel member.
- Those two comparisons joined with `and`.
- Either or both of those comparisons combined with a `lastModifiedDateTime` bound. Supply one `ge` bound, one `le` bound, or both to express an inclusive range.
- Any of the previous expressions combined with an `elementTypes` filter by using `and`.

You can write the `and` conjuncts in any order.

When you combine a request filter with an `elementTypes` filter, only `AgentConnectors`, passed directly or through the `MCPServers` or `ToolPlugins` alias, returns tools, such as plugins and MCP servers. Other tool element types, such as `AgentSkills` and `Skills`, and the other element types that `ToolPlugins` expands to return only titles that contain an agent and also contain the requested element type.

A `lastModifiedDateTime` bound applies to the package's `lastModifiedDateTime` value, which is the same value returned for that property. It doesn't filter on when a user submitted the request. A package that has no `lastModifiedDateTime` value doesn't match while a bound is present.

Filtering on `lastModifiedDateTime` by itself is ordinary catalog behavior and doesn't return the request queue.

The following aren't supported and return `400 Bad Request`:

- Combining a request property with `supportedHosts` or `platform`.
- The `eq`, `gt`, or `lt` operator on `lastModifiedDateTime`, or more than one `lastModifiedDateTime` bound in the same direction, such as two `ge` bounds.
- The `or`, `ne`, and `contains` operators. You can use `or` only to join element type comparisons inside the `elementTypes/any` lambda.
- `$count` with a request filter.

The request properties aren't sortable.

`requestType` and `requestStatus` are evolvable enumerations, so a later version of the service can return a member that your client doesn't recognize. For more information, see [Handling future members in evolvable enumerations](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations).

#### Paging a filtered collection

Paging is server-driven, so the service determines how many entries each page contains. Treat `@odata.nextLink` as an opaque URL: request it exactly as it's returned, without adding or modifying query options.

> [!IMPORTANT]
> For paged responses, use `@odata.nextLink` as the continuation signal. Continue requesting the opaque `@odata.nextLink` until it's absent. Don't infer completion from a response body when an `@odata.nextLink` is present.

Responses to a request that filters on a request property don't include an `@odata.count` property. For more information, see [Paging Microsoft Graph data in your app](/graph/paging).

## Request body

Don't supply a request body for this method.

## Response

If successful, this method returns a `200 OK` response code and a collection of [copilotPackage](resources/copilotpackage.md) objects in the response body.

### Examples

#### Example 1: List packages

An unfiltered request returns only titles that contain an agent.

##### Request

The following example shows a request.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages
```

:::zone-end

##### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "P_8ebf26a5-2b7d-4cae-d356-7a9b1c3d4e55",
      "displayName": "Fabrikam Teams Document Uploader",
      "type": "external",
      "shortDescription": "Allows direct upload of documents from Microsoft Office into Fabrikam Teams for sharing",
      "isBlocked": false,
      "supportedHosts": ["outlook", "word", "excel", "powerPoint"],
      "lastModifiedDateTime": "2023-11-20T19:02:02.241Z",
      "publisher": "Fabrikam, Inc.",
      "availableTo": "all",
      "deployedTo": "none",
      "elementTypes": ["officeAddIn", "declarativeAgent"],
      "platform": "web",
      "version": "1.0.0",
      "manifestVersion": "1.1",
      "manifestId": "fabrikam-teams-uploader",
      "appId": "aaaaaaaa-1111-2222-3333-bbbbbbbbbbbb",
      "assetId": "asset-00001",
      "agentIdentityId": "11111111-2222-3333-4444-555555555555"
    }
  ]
}
```

#### Example 2: List packages filtered by supported host

##### Request

The following example shows a request.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=supportedHosts/any(h:h eq 'Word')
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=supportedHosts/any(h:h eq 'Word')
```

:::zone-end

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
      "deployedTo": "all",
      "elementTypes": ["officeAddIn", "declarativeAgent"]
    }
  ]
}
```

#### Example 3: List packages filtered by element type

##### Request

The following example shows a request.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=elementTypes/any(h:h eq 'OfficeAddIns')
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=elementTypes/any(h:h eq 'OfficeAddIns')
```

:::zone-end

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
      "deployedTo": "all",
      "elementTypes": ["officeAddIn", "declarativeAgent"]
    }
  ]
}
```

#### Example 4: List packages by last updated date/time

##### Request

The following example shows a request.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=lastModifiedDateTime ge 2026-01-01T00:00:00.0000000Z
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=lastModifiedDateTime ge 2026-01-01T00:00:00.0000000Z
```

:::zone-end

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

#### Example 5: List agents that support Copilot

To list only the agents that run in Copilot, filter `supportedHosts` on `Copilot`.

##### Request

The following example shows a request.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=supportedHosts/any(h:h eq 'Copilot')
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=supportedHosts/any(h:h eq 'Copilot')
```

:::zone-end

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

#### Example 6: List packages that users requested

##### Request

The following example shows a request that returns the packages with an open request.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=requestStatus eq 'pending'
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=requestStatus eq 'pending'
```

:::zone-end

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
      "lastModifiedDateTime": "2026-08-06T00:07:20.1467852Z",
      "availableTo": "none",
      "deployedTo": "none",
      "requestType": "publish",
      "requestStatus": "pending"
    },
    {
      "id": "P_38cd4yy2-71de-4f6b-9c05-284ef86b5zzt",
      "displayName": "Northwind Traders Account Lookup",
      "type": "external",
      "shortDescription": "Look up customer account details in Outlook and add them to email",
      "isBlocked": false,
      "supportedHosts": ["Outlook"],
      "lastModifiedDateTime": "2026-08-11T18:22:04.5510000Z",
      "availableTo": "some",
      "deployedTo": "some",
      "requestType": "update",
      "requestStatus": "pending"
    }
  ]
}
```

#### Example 7: List packages that users asked to publish

##### Request

The following example shows a request that returns only the packages that users asked to publish.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=requestType eq 'publish'
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=requestType eq 'publish'
```

:::zone-end

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
      "lastModifiedDateTime": "2026-08-06T00:07:20.1467852Z",
      "availableTo": "none",
      "deployedTo": "none",
      "requestType": "publish",
      "requestStatus": "pending"
    }
  ]
}
```

#### Example 8: Combine both request filters

##### Request

The following example shows a request that combines the two request properties with `and`.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=requestStatus eq 'pending' and requestType eq 'publish'
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=requestStatus eq 'pending' and requestType eq 'publish'
```

:::zone-end

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
      "lastModifiedDateTime": "2026-08-06T00:07:20.1467852Z",
      "availableTo": "none",
      "deployedTo": "none",
      "requestType": "publish",
      "requestStatus": "pending"
    }
  ]
}
```

#### Example 9: List pending requests by `lastModifiedDateTime`

##### Request

The following example shows a request that returns the packages with an open request whose `lastModifiedDateTime` value is on or after a date.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=requestStatus eq 'pending' and lastModifiedDateTime ge 2026-08-10T00:00:00.0000000Z
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=requestStatus eq 'pending' and lastModifiedDateTime ge 2026-08-10T00:00:00.0000000Z
```

:::zone-end

##### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "P_38cd4yy2-71de-4f6b-9c05-284ef86b5zzt",
      "displayName": "Northwind Traders Account Lookup",
      "type": "external",
      "shortDescription": "Look up customer account details in Outlook and add them to email",
      "isBlocked": false,
      "supportedHosts": ["Outlook"],
      "lastModifiedDateTime": "2026-08-11T18:22:04.5510000Z",
      "availableTo": "some",
      "deployedTo": "some",
      "requestType": "update",
      "requestStatus": "pending"
    }
  ]
}
```

#### Example 10: List a request type within a `lastModifiedDateTime` range

##### Request

The following example shows a request that returns the packages that users asked to publish, limited to those whose `lastModifiedDateTime` value falls within an inclusive range.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=requestType eq 'publish' and lastModifiedDateTime ge 2026-08-01T00:00:00.0000000Z and lastModifiedDateTime le 2026-08-31T23:59:59.9999999Z
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=requestType eq 'publish' and lastModifiedDateTime ge 2026-08-01T00:00:00.0000000Z and lastModifiedDateTime le 2026-08-31T23:59:59.9999999Z
```

:::zone-end

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
      "lastModifiedDateTime": "2026-08-06T00:07:20.1467852Z",
      "availableTo": "none",
      "deployedTo": "none",
      "requestType": "publish",
      "requestStatus": "pending"
    }
  ]
}
```

#### Example 11: List MCP servers

##### Request

The following example shows a request that uses the `MCPServers` alias to return the titles that contain MCP servers.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=elementTypes/any(e:e eq 'MCPServers')
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=elementTypes/any(e:e eq 'MCPServers')
```

:::zone-end

##### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "P_4a7be2c1-8d3f-4e6a-b912-3c5d7e9f0a11",
      "displayName": "Contoso Inventory MCP Server",
      "type": "custom",
      "shortDescription": "Look up product inventory levels across Contoso warehouses",
      "isBlocked": false,
      "lastModifiedDateTime": "2026-10-02T15:41:09.2210000Z",
      "availableTo": "all",
      "deployedTo": "all",
      "elementTypes": ["AgentConnectors"]
    }
  ]
}
```

#### Example 12: List skills

##### Request

The following example shows a request that returns the titles that contain skills. Because a title is returned if it contains any requested element type, the response can include an agent that also contains a skill, such as the second item in the response.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=elementTypes/any(e:e eq 'AgentSkills')
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=elementTypes/any(e:e eq 'AgentSkills')
```

:::zone-end

##### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "P_5b8cf3d2-9e4a-4f7b-a023-4d6e8f0a1b22",
      "displayName": "Fabrikam Expense Report Skill",
      "type": "custom",
      "shortDescription": "Skill that prepares expense reports from receipts",
      "isBlocked": false,
      "lastModifiedDateTime": "2026-09-18T09:12:44.1030000Z",
      "availableTo": "all",
      "deployedTo": "some",
      "elementTypes": ["AgentSkills"]
    },
    {
      "id": "P_6c9d04e3-0f5b-4a8c-b134-5e7f9a1b2c33",
      "displayName": "Northwind Sales Assistant",
      "type": "custom",
      "shortDescription": "Agent that answers sales questions and drafts customer proposals",
      "isBlocked": false,
      "supportedHosts": ["Copilot"],
      "lastModifiedDateTime": "2026-10-05T20:03:51.7740000Z",
      "availableTo": "all",
      "deployedTo": "all",
      "elementTypes": ["declarativeAgent", "AgentSkills"]
    }
  ]
}
```

#### Example 13: List declarative agents and plugins

##### Request

The following example shows a request that filters on both an agent element type and a tool element type. The response contains the titles that contain plugins, whether or not they contain an agent, together with the titles that contain a declarative agent.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=elementTypes/any(e:e eq 'DeclarativeCopilots' or e eq 'AgentConnectors')
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=elementTypes/any(e:e eq 'DeclarativeCopilots' or e eq 'AgentConnectors')
```

:::zone-end

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
      "deployedTo": "all",
      "elementTypes": ["declarativeAgent"]
    },
    {
      "id": "P_4a7be2c1-8d3f-4e6a-b912-3c5d7e9f0a11",
      "displayName": "Contoso Inventory MCP Server",
      "type": "custom",
      "shortDescription": "Look up product inventory levels across Contoso warehouses",
      "isBlocked": false,
      "lastModifiedDateTime": "2026-10-02T15:41:09.2210000Z",
      "availableTo": "all",
      "deployedTo": "all",
      "elementTypes": ["AgentConnectors"]
    }
  ]
}
```

#### Example 14: List pending requests for MCP servers

##### Request

The following example shows a request that returns the pending requests for titles that contain MCP servers. When you combine a request filter with an `elementTypes` filter, only the `AgentConnectors` and `MCPServers` element types return tools.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=requestStatus eq 'pending' and elementTypes/any(e:e eq 'MCPServers')
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=requestStatus eq 'pending' and elementTypes/any(e:e eq 'MCPServers')
```

:::zone-end

##### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "P_7dae15f4-1a6c-4b9d-c245-6f8a0b2c3d44",
      "displayName": "Contoso Shipping MCP Server",
      "type": "custom",
      "shortDescription": "Track shipment status for Contoso orders",
      "isBlocked": false,
      "lastModifiedDateTime": "2026-10-20T11:26:37.4480000Z",
      "availableTo": "none",
      "deployedTo": "none",
      "elementTypes": ["AgentConnectors"],
      "requestType": "publish",
      "requestStatus": "pending"
    }
  ]
}
```

#### Example 15: List packages by using the `ToolPlugins` alias

##### Request

The following example shows a request that uses the `ToolPlugins` alias. The response contains the titles that contain plugins or skills, whether or not they contain an agent, together with the titles that contain a declarative agent or a custom engine agent.

:::zone pivot="graph-v1"

```http
GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages?$filter=elementTypes/any(e:e eq 'ToolPlugins')
```

:::zone-end

:::zone pivot="graph-preview"

```http
GET https://graph.microsoft.com/beta/copilot/admin/catalog/packages?$filter=elementTypes/any(e:e eq 'ToolPlugins')
```

:::zone-end

##### Response

The following example shows the response. The response object shown here might be shortened for readability.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "value": [
    {
      "id": "P_4a7be2c1-8d3f-4e6a-b912-3c5d7e9f0a11",
      "displayName": "Contoso Inventory MCP Server",
      "type": "custom",
      "shortDescription": "Look up product inventory levels across Contoso warehouses",
      "isBlocked": false,
      "lastModifiedDateTime": "2026-10-02T15:41:09.2210000Z",
      "availableTo": "all",
      "deployedTo": "all",
      "elementTypes": ["AgentConnectors"]
    },
    {
      "id": "P_5b8cf3d2-9e4a-4f7b-a023-4d6e8f0a1b22",
      "displayName": "Fabrikam Expense Report Skill",
      "type": "custom",
      "shortDescription": "Skill that prepares expense reports from receipts",
      "isBlocked": false,
      "lastModifiedDateTime": "2026-09-18T09:12:44.1030000Z",
      "availableTo": "all",
      "deployedTo": "some",
      "elementTypes": ["AgentSkills"]
    },
    {
      "id": "P_6c9d04e3-0f5b-4a8c-b134-5e7f9a1b2c33",
      "displayName": "Northwind Sales Assistant",
      "type": "custom",
      "shortDescription": "Agent that answers sales questions and drafts customer proposals",
      "isBlocked": false,
      "supportedHosts": ["Copilot"],
      "lastModifiedDateTime": "2026-10-05T20:03:51.7740000Z",
      "availableTo": "all",
      "deployedTo": "all",
      "elementTypes": ["declarativeAgent", "AgentSkills"]
    },
    {
      "id": "P_19ae1zz1-56bc-505a-3d42-156df75a4xxy",
      "displayName": "Contoso HR Agent",
      "type": "custom",
      "shortDescription": "Agent that can answer HR questions",
      "isBlocked": false,
      "supportedHosts": ["Copilot"],
      "lastModifiedDateTime": "2026-01-06T00:07:20.1467852Z",
      "availableTo": "all",
      "deployedTo": "all",
      "elementTypes": ["declarativeAgent"]
    }
  ]
}
```
