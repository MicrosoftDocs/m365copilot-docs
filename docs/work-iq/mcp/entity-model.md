---
title: Work IQ MCP entity model
description: Learn how Work IQ MCP uses resource paths, generic tools, and runtime schema discovery to work with Microsoft 365 entities.
author: kangxh75
ms.author: allenk
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 06/16/2026
---

<!-- cSpell:ignore Rego kangxh allenk -->

# Work IQ MCP entity model

Work IQ MCP uses a path-based entity model. Instead of exposing a separate tool for every Microsoft 365 entity or action, Work IQ MCP exposes a small set of generic tools that operate on resource paths.

A resource path identifies the target Microsoft 365 resource or supported operation. The selected tool indicates what the agent wants to do with that path.

## What is an entity?

In Work IQ MCP, an entity is a Microsoft 365 resource that an agent can read or act on through a resource path. Examples of entity categories include:

- Mail
- Calendar
- Teams chats and messages
- Files in OneDrive and SharePoint
- People and profile data

Supported entity categories will expand as more Microsoft 365 workloads are added to Work IQ MCP.

The entity model is agent-oriented. Agents often use natural language first, such as with the `ask` tool, and then use entity tools to inspect or act on specific referenced resources.

## Resource paths

Resource paths provide consistent addresses across Microsoft 365 workloads. They're relative paths, such as `/me/messages` or `/me/events`, that identify the target resource for a tool call.

The same tool can work with different resources by changing the path.

| Tool            | Example path              | Purpose                  |
|-----------------|---------------------------|--------------------------|
| `fetch`         | `/me/messages`            | Read messages            |
| `fetch`         | `/me/events`              | Read calendar events     |
| `fetch`         | `/me/chats/{id}/messages` | Read Teams chat messages |
| `create_entity` | `/me/events`              | Create a calendar event  |
| `do_action`     | `/me/sendMail`            | Send mail                |

This model keeps the tool surface small. New supported resources are added as paths, not as separate tools.

## Entity operation tools

Work IQ MCP entity tools map to common operation types.

| Operation | Tools           | Description                                                  |
|-----------|-----------------|--------------------------------------------------------------|
| Read      | `fetch`         | Reads one or more entities by resource path.                 |
| Create    | `create_entity` | Creates an entity at a resource path.                        |
| Update    | `update_entity` | Updates an entity at a resource path.                        |
| Delete    | `delete_entity` | Deletes an entity at a resource path.                        |
| Action    | `do_action`     | Performs a side-effecting action, such as sending mail.      |
| Function  | `call_function` | Calls an operation that returns computed or derived results. |

For parameter details and examples, see [Work IQ MCP tool reference](tool-reference.md).

## Schemas

Agents can discover supported paths and schemas at runtime.

- Use `search_paths` to find available resource paths.
- Use `get_schema` to retrieve the schema for a supported operation on a path.

Schema discovery helps agents understand which properties and operations are available without loading every Microsoft 365 type definition into context.

## Governance

Resource paths are also important for governance. Administrators can use policy to control which paths and operations are available in a tenant. OAuth permissions provide broad access boundaries, while policy can apply more specific controls based on the requested path and operation.

For more information, see [Rego policy for Work IQ MCP governance](policy-governance-mcp.md).

## Key points

- Work IQ MCP uses resource paths to identify Microsoft 365 entities and operations.
- Generic tools define the operation to perform on a path.
- The model is designed for agents, so entity access can complement natural-language reasoning from `ask`.
- Agents discover supported paths and schemas at runtime.
- Governance can be applied based on paths and operations.

## Related content

- [Work IQ MCP overview](overview.md)
- [Work IQ MCP tool reference](tool-reference.md)
