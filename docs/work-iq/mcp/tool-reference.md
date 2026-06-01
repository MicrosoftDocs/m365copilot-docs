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
<!-- cSpell:ignore eykd bbkr SNWE Uplg -->

# Work IQ MCP tool reference (preview)

The Work IQ MCP server exposes 10 tools through the [Model Context Protocol (MCP)](https://modelcontextprotocol.io). This article provides a reference for each tool, including its purpose, parameters, and usage examples.

## Entity tools

Entity tools provide CRUD operations and actions on Microsoft 365 resources. These tools operate on relative resource paths that map to [Microsoft Graph](/graph/overview) endpoints.

### fetch

Reads one or more entities by resource path. Supports fetching multiple paths in parallel.

#### Parameters

| Parameter    | Type         | Required | Description                                                                                 |
|--------------|--------------|----------|---------------------------------------------------------------------------------------------|
| `entityUrls` | string array | Yes      | The relative resource paths to fetch (for example, `/me/messages`, `/me/events/{event-id}`) |
| `agentId`    | string       | No       | Reserved for future use.                                                                    |

#### Response

A successful response contains a `results` property that is an array of objects with the following properties. There is one object for each resource path in the `entityUrls` parameter of the request.

| Property     | Type    | Description                                  |
|--------------|---------|----------------------------------------------|
| `data`       | object  | The JSON object returned by Microsoft Graph. |
| `statusCode` | integer | The HTTP status code for the response.       |

> [!NOTE]
>
> - Collection results are subject to per-tenant policy limits. A default `$top` of 25 is injected if not specified, with a maximum cap of 100.
> - Chat messages are capped at 10 per request.
> - The `$skip` and `$skiptoken` query parameters are blocked.

#### Example

##### Request

```json
{
  "method": "tools/call",
  "params": {
    "name": "fetch",
    "arguments": {
      "entityUrls": [
        "/me/messages"
      ]
    }
  }
}
```

##### Response

```json
{
  "results": [
    {
      "data": {
        "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('0c6bc4a2-337b-4672-9bcd-6aa53af1b02a')/messages(id,subject,from,receivedDateTime,isRead,importance)",
        "value": [
          {
            "@odata.etag": "W/\"CQAAABYAAADltuSvpI1YRKDFG38ihSmWAABepTg8\"",
            "id": "AAMkADk0...",
            "receivedDateTime": "2026-05-31T15:40:44Z",
            "subject": "Your weekly PIM digest for Contoso",
            "importance": "normal",
            "isRead": false,
            "from": {
              "emailAddress": {
                "name": "Microsoft Security",
                "address": "MSSecurity-noreply@microsoft.com"
              }
            }
          },
          {
            "@odata.etag": "W/\"CQAAABYAAADltuSvpI1YRKDFG38ihSmWAAA/eZg0\"",
            "id": "AAMkADk0...",
            "receivedDateTime": "2026-05-26T07:39:09Z",
            "subject": "Microsoft Entra ID Protection Weekly Digest",
            "importance": "normal",
            "isRead": false,
            "from": {
              "emailAddress": {
                "name": "Microsoft Security",
                "address": "MSSecurity-noreply@microsoft.com"
              }
            }
          }
        ],
        "@odata.nextLink": "https://graph.microsoft.com/v1.0/me/messages?%24select=id%2csubject%2cfrom%2creceivedDateTime%2cisRead%2cimportance&%24top=10&%24skip=10"
      },
      "statusCode": 200
    }
  ]
}
```

---

### create_entity

Creates a new entity in a collection.

#### Parameters

| Parameter   | Type   | Required | Description                                                                                                              |
|-------------|--------|----------|--------------------------------------------------------------------------------------------------------------------------|
| `parentUrl` | string | Yes      | The relative resource path for the collection (for example, `/me/events`, `/me/messages`).                               |
| `jsonBody`  | string | Yes      | The entity data to create, matching the resource schema. This property must be a JSON-encoded string, not a JSON object. |
| `agentId`   | string | No       | Reserved for future use.                                                                                                 |

#### Response

A successful response contains an object in the `structuredContent` property with the following properties.

| Property     | Type    | Description                                  |
|--------------|---------|----------------------------------------------|
| `data`       | object  | The JSON object returned by Microsoft Graph. |
| `statusCode` | integer | The HTTP status code for the response.       |

#### Example

##### Request

```json
{
  "method": "tools/call",
  "params": {
    "name": "create_entity",
    "arguments": {
      "parentUrl": "/me/messages",
      "jsonBody": "{ \"subject\": \"Hello world!\" }"
    }
  }
}
```

##### Response

```json
{
  "statusCode": 201,
  "data": {
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('0c6bc4a2-337b-4672-9bcd-6aa53af1b02a')/messages/$entity",
    "@odata.etag": "W/\"CQAAABYAAADltuSvpI1YRKDFG38ihSmWAABlFT7g\"",
    "id": "AAMkADk0...",
    "createdDateTime": "2026-06-01T17:32:39Z",
    "lastModifiedDateTime": "2026-06-01T17:32:39Z",
    "changeKey": "CQAAABYAAADltuSvpI1YRKDFG38ihSmWAABlFT7g",
    "categories": [],
    "receivedDateTime": "2026-06-01T17:32:39Z",
    "sentDateTime": "2026-06-01T17:32:39Z",
    "hasAttachments": false,
    "internetMessageId": "<CH7PR03MB79063B75F29F929523CCC68FAE152@CH7PR03MB7906.namprd03.prod.outlook.com>",
    "subject": "Hello world!",
    "bodyPreview": "",
    "importance": "normal",
    "parentFolderId": "AQMkADk0...",
    "conversationId": "AAQkADk0...",
    "conversationIndex": "AQHc8eykdVXKjf4ytUio+dQPqWG95A==",
    "isDeliveryReceiptRequested": false,
    "isReadReceiptRequested": false,
    "isRead": true,
    "isDraft": true,
    "inferenceClassification": "focused",
    "body": {
      "contentType": "text",
      "content": ""
    },
    "toRecipients": [],
    "ccRecipients": [],
    "bccRecipients": [],
    "replyTo": [],
    "flag": {
      "flagStatus": "notFlagged"
    }
  }
}
```

---

### update_entity

Updates an existing entity.

#### Parameters

| Parameter   | Type   | Required | Description                                                                                                              |
|-------------|--------|----------|--------------------------------------------------------------------------------------------------------------------------|
| `entityUrl` | string | Yes      | The relative path to the entity (for example, `/me/messages/{message-id}`).                                              |
| `jsonBody`  | string | Yes      | The entity data to create, matching the resource schema. This property must be a JSON-encoded string, not a JSON object. |
| `agentId`   | string | No       | Reserved for future use.                                                                                                 |

#### Response

A successful response contains an object in the `structuredContent` property with the following properties.

| Property     | Type    | Description                                  |
|--------------|---------|----------------------------------------------|
| `data`       | object  | The JSON object returned by Microsoft Graph. |
| `statusCode` | integer | The HTTP status code for the response.       |

#### Example

##### Request

```json
{
  "method": "tools/call",
  "params": {
    "name": "update_entity",
    "arguments": {
      "entityUrl": "/me/messages/AAMkADk0...",
      "jsonBody": "{ \"subject\": \"Updated: Hello world!\" }"
    }
  }
}
```

##### Response

```json
{
  "statusCode": 200,
  "data": {
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('0c6bc4a2-337b-4672-9bcd-6aa53af1b02a')/messages/$entity",
    "@odata.etag": "W/\"CQAAABYAAADltuSvpI1YRKDFG38ihSmWAABlFT7g\"",
    "id": "AAMkADk0...",
    "createdDateTime": "2026-06-01T17:32:39Z",
    "lastModifiedDateTime": "2026-06-01T17:32:39Z",
    "changeKey": "CQAAABYAAADltuSvpI1YRKDFG38ihSmWAABlFT7g",
    "categories": [],
    "receivedDateTime": "2026-06-01T17:32:39Z",
    "sentDateTime": "2026-06-01T17:32:39Z",
    "hasAttachments": false,
    "internetMessageId": "<CH7PR03MB79063B75F29F929523CCC68FAE152@CH7PR03MB7906.namprd03.prod.outlook.com>",
    "subject": "Updated: Hello world!",
    "bodyPreview": "",
    "importance": "normal",
    "parentFolderId": "AQMkADk0...",
    "conversationId": "AAQkADk0...",
    "conversationIndex": "AQHc8eykdVXKjf4ytUio+dQPqWG95A==",
    "isDeliveryReceiptRequested": false,
    "isReadReceiptRequested": false,
    "isRead": true,
    "isDraft": true,
    "inferenceClassification": "focused",
    "body": {
      "contentType": "text",
      "content": ""
    },
    "toRecipients": [],
    "ccRecipients": [],
    "bccRecipients": [],
    "replyTo": [],
    "flag": {
      "flagStatus": "notFlagged"
    }
  }
}
```

---

### delete_entity

Deletes an entity.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `entityUrl` | string | Yes | The relative resource path to the entity to delete (for example, `/me/messages/{id}`) |
| `agentId` | string | No | The ID of a specific agent to route the question to. If omitted, defaults to the built-in Microsoft 365 Copilot agent. |

#### Response

A successful response contains a `statusCode` property set to 204 in the `structuredContent` field.

#### Example

##### Request

```json
{
  "method": "tools/call",
  "params": {
    "name": "delete_entity",
    "arguments": {
      "entityUrl": "/me/messages/AAMkADk0MDkyMzM3LTlmNzAtNDhmM...."
    }
  }
}
```

##### Response

```json
{
  "statusCode": 204
}
```

---

### do_action

Executes a side-effect action such as sending mail, copying, or moving items.

#### Parameters

| Parameter   | Type   | Required | Description                                                                                                |
|-------------|--------|----------|------------------------------------------------------------------------------------------------------------|
| `actionUrl` | string | Yes      | The relative path for the action (for example, `/me/messages/{message-id}/send`).                          |
| `jsonBody`  | string | No       | The JSON body for the action, if required. This property must be a JSON-encoded string, not a JSON object. |
| `agentId`   | string | No       | Reserved for future use.                                                                                   |

#### Response

A successful response contains an object in the `structuredContent` property with the following properties.

| Property     | Type    | Description                                          |
|--------------|---------|------------------------------------------------------|
| `data`       | object  | The JSON object returned by Microsoft Graph, if any. |
| `statusCode` | integer | The HTTP status code for the response.               |

#### Example

##### Request

```json
{
  "method": "tools/call",
  "params": {
    "name": "do_action",
    "arguments": {
      "actionUrl": "/me/messages/AAMkADk0.../send"
    }
  }
}
```

##### Response

```json
{
  "statusCode": 202
}
```

---

### call_function

Calls a Microsoft Graph function to compute derived data such as schedules, deltas, or search results.

#### Parameters

| Parameter     | Type   | Required | Description                                                           |
|---------------|--------|----------|-----------------------------------------------------------------------|
| `functionUrl` | string | Yes      | The relative path for the function (for example, `/me/calendarview`). |
| `agentId`     | string | No       | Reserved for future use.                                              |

#### Response

A successful response contains an object in the `structuredContent` property with the following properties.

| Property     | Type    | Description                                  |
|--------------|---------|----------------------------------------------|
| `data`       | object  | The JSON object returned by Microsoft Graph. |
| `statusCode` | integer | The HTTP status code for the response.       |

#### Example

##### Request

```json
{
  "method": "tools/call",
  "params": {
    "name": "call_function",
    "arguments": {
      "parentUrl": "/me/calendarView?startdatetime=2026-06-01T17:51:49.607Z&enddatetime=2026-06-08T17:51:49.607Z"
    }
  }
}
```

##### Response

```json
{
  "data": {
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('0c6bc4a2-337b-4672-9bcd-6aa53af1b02a')/calendarView(id,subject,start,end,location,organizer,isAllDay)",
    "value": [
      {
        "@odata.etag": "W/\"5bbkr6SNWESgxRt/IoUplgAAKcCTsQ==\"",
        "id": "AAMkADk0...",
        "subject": "Sales and Marketing Sync",
        "isAllDay": false,
        "start": {
          "dateTime": "2026-06-08T12:30:00.0000000",
          "timeZone": "UTC"
        },
        "end": {
          "dateTime": "2026-06-08T13:00:00.0000000",
          "timeZone": "UTC"
        },
        "location": {
          "displayName": "Sales and Marketing / General",
          "locationType": "default",
          "uniqueId": "Sales and Marketing / General",
          "uniqueIdType": "private"
        },
        "organizer": {
          "emailAddress": {
            "name": "Sales and Marketing",
            "address": "SalesandMarketing@contoso.com"
          }
        }
      }
    ],
    "@odata.nextLink": "https://graph.microsoft.com/v1.0/me/calendarView?startdatetime=2026-06-01T17%3a51%3a49.607Z&enddatetime=2026-06-08T17%3a51%3a49.607Z&%24select=id%2csubject%2cstart%2cend%2clocation%2corganizer%2cisAllDay&%24top=10&%24skip=10"
  },
  "statusCode": 200
}
```

---

## Copilot tools

Copilot tools provide natural-language intelligence by invoking Microsoft 365 Copilot and discovering available agents.

### ask

Asks Microsoft 365 Copilot (or a specific agent) a natural-language question about the user's data. When an `agentId` is provided, the request is routed to that specific agent. When omitted, the request goes to the built-in Microsoft 365 Copilot agent.

#### Parameters

| Parameter        | Type         | Required | Description                                                                                                            |
|------------------|--------------|----------|------------------------------------------------------------------------------------------------------------------------|
| `question`       | string       | Yes      | The natural-language question to ask                                                                                   |
| `agentId`        | string       | No       | The ID of a specific agent to route the question to. If omitted, defaults to the built-in Microsoft 365 Copilot agent. |
| `fileUrls`       | string array | No       | An array of OneDrive or SharePoint file URLs to use as context.                                                        |
| `conversationId` | string       | No       | A conversation ID from an existing conversation. If provided, this request continues the existing conversation.        |
| `timeZone`       | string       | No       | An IANA time zone identifier matching the user's current UTC offset. If omitted, time are returned in UTC.             |

#### Response

A successful response contains a JSON string in the `text` property of a [TextContent](https://modelcontextprotocol.io/specification/latest/schema#textcontent) object. The string includes the following properties.

| Property         | Type   | Description                                                                                                       |
|------------------|--------|-------------------------------------------------------------------------------------------------------------------|
| `response`       | string | The response from Microsoft 365 Copilot or specified agent.                                                       |
| `conversationId` | string | The conversation ID. Provide this ID in the `conversationId` of subsequent requests to continue the conversation. |

#### Example

##### Request

```json
{
  "method": "tools/call",
  "params": {
    "name": "ask",
    "arguments": {
      "question": "Do I have any meetings today?"
    }
  }
}
```

##### Response

```json
{
  "response": "You have **4 meetings scheduled today**. Here\\u2019s a clear view of your day:...",
  "conversationId": "cc7d6f5202cb4c5b814b120440e48ede"
}
```

---

### list_agents

Lists available agents that can be used with the `ask` tool. Returns a JSON array of available agents, with the built-in Microsoft 365 Copilot agent always included.

#### Parameters

This tool takes no parameters.

#### Response

A successful response contains a JSON string in the `text` property of a [TextContent](https://modelcontextprotocol.io/specification/latest/schema#textcontent) object. The string includes the following properties.

| Property   | Type   | Description                          |
|------------|--------|--------------------------------------|
| `agentId`  | string | The unique identifier for the agent. |
| `name`     | string | The display name of the agent.       |
| `provider` | string | The publisher of the agent.          |

#### Example

##### Request

```json
{
  "method": "tools/call",
  "params": {
    "name": "list_agent",
    "arguments": {}
  }
}
```

##### Response

```json
[
  {
    "agentId": "bizchat-as-gpt-scenario",
    "name": "Microsoft Copilot",
    "provider": "Microsoft"
  }
]
```

---

## Schema tools

Schema tools enable runtime discovery of available API paths and their OpenAPI schemas. These tools allow agents to discover what operations are available without loading large schema definitions into context upfront.

### get_schema

Retrieves the OpenAPI schema for a specific operation, identified by path and operation type.

> [!NOTE]
> Currently, only Microsoft Graph v1.0 schemas are available.

#### Parameters

| Parameter       | Type   | Required | Description                                                                                                                                                                               |
|-----------------|--------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `operationIds`  | string | No       | The operation ID of the API to get the schema for (for example, `me.CreateMessages`). Use `operationIds` or `path`, not both.                                                             |
| `path`          | string | No       | The API path to get the schema for (for example, `/me/messages`). Use `operationIds` or `path`, not both.                                                                                 |
| `operationType` | string | Yes      | The operation type. Valid values are `fetch`, `create`, and `update`.                                                                                                                     |
| `format`        | string | No       | The desired output format. Valid values are `jsonschema` ([JSON Schema](https://json-schema.org/) format) and `typescript` (TypeScript definitions). If omitted, JSON schema is returned. |
| `backend`       | string | No       | Reserved for future use.                                                                                                                                                                  |
| `agentId`       | string | No       | Reserved for future use.                                                                                                                                                                  |

#### Response

A successful response contains the JSON schema or TypeScript definitions in the `text` property of a [TextContent](https://modelcontextprotocol.io/specification/latest/schema#textcontent) object.

#### Example

##### Request

```json
{
  "method": "tools/call",
  "params": {
    "name": "get_schema",
    "arguments": {
      "path": "/me/messages",
      "operationType": "fetch"
    }
  }
}
```

##### Response

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "microsoft.graph.messageCollectionResponse",
  "type": "object",
  "properties": {
    "value": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/microsoft.graph.message"
      }
    }
  },
  "$defs": {
    ...
  }
}
```

---

### search_paths

Searches available API paths by prefix or regex filter. Use this tool to discover which resource paths are available before calling other tools.

> [!NOTE]
> Currently, only Microsoft Graph v1.0 paths are available.

#### Parameters

| Parameter | Type   | Required | Description                                                                                            |
|-----------|--------|----------|--------------------------------------------------------------------------------------------------------|
| `filter`  | string | Yes      | A prefix or regex pattern to search for matching API paths (for example, `messages` or `.*calendar.*`) |
| `backend` | string | No       | Reserved for future use.                                                                               |
| `agentId` | string | No       | Reserved for future use.                                                                               |

#### Response

A successful response contains a `paths` property in the `structuredContent` field. This property is an array of objects with the following properties.

| Property     | Type         | Description                                                                              |
|--------------|--------------|------------------------------------------------------------------------------------------|
| `path`       | string       | The relative API path.                                                                   |
| `operations` | string array | The supported operations for the path. Valid values are `fetch`, `create`, and `update`. |

#### Example

##### Request

```json
{
  "method": "tools/call",
  "params": {
    "name": "search_paths",
    "arguments": {
      "filter": "messages"
    }
  }
}
```

##### Response

```json
{
  "paths": [
    {
      "path": "/admin/serviceAnnouncement/messages",
      "operations": [
        "fetch",
        "create"
      ]
    },
    {
      "path": "/admin/serviceAnnouncement/messages/{serviceUpdateMessage-id}",
      "operations": [
        "fetch",
        "create",
        "update"
      ]
    },
    ...
  ]
}
```

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
