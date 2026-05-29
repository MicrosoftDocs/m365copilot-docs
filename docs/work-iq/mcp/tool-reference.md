---
title: Work IQ MCP tool reference (preview)
description: Reference documentation for all tools exposed by the Work IQ MCP server, including parameters and usage examples.
author: jasonjoh
ms.author: jasonjoh
ms.topic: reference
ms.localizationpriority: medium
ms.date: 05/29/2026
---

<!-- markdownlint-disable MD024 -->

# Work IQ MCP tool reference (preview)

The Work IQ MCP server exposes 10 tools through the [Model Context Protocol (MCP)](https://modelcontextprotocol.io). This article provides a reference for each tool, including its purpose, parameters, and usage examples.

## Entity tools

Entity tools provide CRUD operations and actions on Microsoft 365 resources. These tools operate on relative resource paths that map to [Microsoft Graph](/graph/overview) endpoints.

### fetch

Reads one or more entities by resource path. Supports fetching multiple paths in parallel.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `paths` | string or string[] | Yes | One or more relative resource paths to fetch (for example, `/me/messages`, `/me/events`) |

#### Example

> [!NOTE]
> These are just placeholders <!-- TODO: Get actual request/response examples from MCP Inspector -->

```text
fetch /me/messages
fetch /me/chats/{id}/messages
```

#### Remarks

- Collection results are subject to per-tenant policy limits. A default `$top` of 25 is injected if not specified, with a maximum cap of 100.
- Chat messages are capped at 10 per request.
- The `$skip` and `$skiptoken` query parameters are blocked.

---

### create_entity

Creates a new entity in a collection.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | Yes | The relative resource path for the collection (for example, `/me/events`, `/me/messages`) |
| `body` | object | Yes | The entity data to create, matching the resource schema |

#### Example

> [!NOTE]
> These are just placeholders <!-- TODO: Get actual request/response examples from MCP Inspector -->

```text
create_entity /me/events
```

---

### update_entity

Updates an existing entity.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | Yes | The relative resource path to the specific entity (for example, `/me/messages/{id}`) |
| `body` | object | Yes | The fields to update on the entity |

#### Example

> [!NOTE]
> These are just placeholders <!-- TODO: Get actual request/response examples from MCP Inspector -->

```text
update_entity /me/messages/{id}
```

---

### delete_entity

Deletes an entity.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | Yes | The relative resource path to the entity to delete (for example, `/me/messages/{id}`) |

#### Example

> [!NOTE]
> These are just placeholders <!-- TODO: Get actual request/response examples from MCP Inspector -->

```text
delete_entity /me/messages/{id}
```

---

### do_action

Executes a side-effect action such as sending mail, copying, or moving items.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | Yes | The relative resource path for the action (for example, `/me/sendMail`, `/me/messages/{id}/reply`) |
| `body` | object | No | The action payload, if required by the action |

#### Example

> [!NOTE]
> These are just placeholders <!-- TODO: Get actual request/response examples from MCP Inspector -->

```text
do_action /me/sendMail
do_action /me/messages/{id}/reply
do_action /me/messages/{id}/forward
do_action /drives/{id}/items/{id}/invite
```

---

### call_function

Calls a Microsoft Graph function to compute derived data such as schedules, deltas, or search results.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | Yes | The relative resource path for the function (for example, `/search/query`, `/me/calendarview`) |

#### Example

> [!NOTE]
> These are just placeholders <!-- TODO: Get actual request/response examples from MCP Inspector -->

```text
call_function /search/query
call_function /me/calendarview
```

---

## Binary tools

Binary tools handle file downloads and uploads.

### fetch_blob

Downloads binary content such as file contents or attachments.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | Yes | The relative resource path to the binary content (for example, `/drives/{id}/items/{id}/content`) |

#### Example

> [!NOTE]
> These are just placeholders <!-- TODO: Get actual request/response examples from MCP Inspector -->

```text
fetch_blob /drives/{id}/items/{id}/content
```

---

### upload_blob

Uploads binary content.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | Yes | The relative resource path for the upload target |
| `content` | binary | Yes | The binary content to upload |

#### Example

> [!NOTE]
> These are just placeholders <!-- TODO: Get actual request/response examples from MCP Inspector -->

```text
upload_blob /drives/{id}/items/{id}/content
```

---

## Copilot tools

Copilot tools provide natural-language intelligence by invoking Microsoft 365 Copilot and discovering available agents.

### ask

Asks Microsoft 365 Copilot (or a specific agent) a natural-language question about the user's data. When an `agentId` is provided, the request is routed to that specific agent. When omitted, the request goes to the built-in Microsoft 365 Copilot agent.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `question` | string | Yes | The natural-language question to ask |
| `agentId` | string | No | The ID of a specific agent to route the question to. If omitted, defaults to the built-in Microsoft 365 Copilot agent. |

#### Example

> [!NOTE]
> These are just placeholders <!-- TODO: Get actual request/response examples from MCP Inspector -->

```text
ask "What deals closed this quarter?"
ask "What should I prepare for my meeting with Alex?"
```

#### Remarks

- This tool invokes the Microsoft 365 Copilot agent for natural-language reasoning across Microsoft 365 content.
- When an `agentId` is specified, the tool resolves the agent's card and routes the message to that agent's URL.

---

### list_agents

Lists available agents that can be used with the `ask` tool. Returns a JSON array of available agents, with the built-in Microsoft 365 Copilot agent always included.

#### Parameters

This tool takes no parameters.

#### Response

Returns a JSON array of agent objects:

```json
[
  {
    "agentId": "bizchat-as-gpt-scenario",
    "name": "Microsoft 365 Copilot",
    "provider": "Microsoft"
  }
]
```

| Field | Type | Description |
|-------|------|-------------|
| `agentId` | string | The unique identifier for the agent, used with the `ask` tool |
| `name` | string | The display name of the agent |
| `provider` | string | The provider of the agent |

---

## Schema tools

Schema tools enable runtime discovery of available API paths and their OpenAPI schemas. These tools allow agents to discover what operations are available without loading large schema definitions into context upfront.

### get_schema

Retrieves the OpenAPI schema for a specific operation, identified by path and operation type.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `path` | string | Yes | The API path to get the schema for (for example, `/me/messages`) |
| `operationType` | string | Yes | The HTTP operation type (for example, `GET`, `POST`, `PATCH`, `DELETE`) |
| `format` | string | No | The desired schema format |

#### Example

> [!NOTE]
> These are just placeholders <!-- TODO: Get actual request/response examples from MCP Inspector -->

```text
get_schema /me/messages GET
get_schema /me/events POST
```

#### Remarks

- Currently, only Microsoft Graph v1.0 schemas are available.

---

### search_paths

Searches available API paths by prefix or regex filter. Use this tool to discover which resource paths are available before calling other tools.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filter` | string | Yes | A prefix or regex pattern to search for matching API paths |

#### Example

> [!NOTE]
> These are just placeholders <!-- TODO: Get actual request/response examples from MCP Inspector -->

```text
search_paths /me/messages
search_paths /me/calendar
```

#### Remarks

- Currently, only Microsoft Graph v1.0 paths are indexed.

---

## Allowed resource paths

Entity tools operate on relative resource paths. The following path prefixes are allowed by default:

- `/me/`
- `/users/`
- `/sites/`

The following path segments are blocked:

- `/authentication/`
- `/servicePrincipals/`

> [!NOTE]
> The complete list of allowed and blocked paths is subject to per-tenant policy configuration and may vary.

## Error handling

When a tool call fails, the Work IQ MCP server returns errors with the following information:

- HTTP status code from the downstream service
- `Retry-After` headers for throttling responses (passed through from Microsoft Graph)
- Request correlation IDs for troubleshooting

The server does not perform automatic retries — errors are passed through to the MCP client for client-side retry decisions.

## Related content

- [Work IQ MCP overview](overview.md)
- [Work IQ API overview](../api-overview.md)
- [Work IQ API permissions reference](../permissions.md)
