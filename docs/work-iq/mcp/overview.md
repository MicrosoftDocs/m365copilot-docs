---
title: Work IQ MCP overview (preview)
description: Learn how to use Work IQ through the Model Context Protocol (MCP) to give AI agents tool-based access to Microsoft 365 data.
author: jasonjoh
ms.author: jasonjoh
ms.topic: overview
ms.localizationpriority: medium
ms.date: 05/29/2026
---

# Work IQ MCP overview (preview)

The Work IQ MCP server exposes Microsoft 365 intelligence capabilities to AI agents through the [Model Context Protocol (MCP)](https://modelcontextprotocol.io). It provides a set of 10 generic tools that enable agents to read, create, update, and delete Microsoft 365 entities, invoke Microsoft 365 Copilot for natural-language reasoning, and discover API schemas — all through a single MCP endpoint.

## Design principles

Work IQ MCP is built on the following design principles:

- **Fewer tools, more paths.** 10 generic tools operate on resource paths. New workloads add paths, not tools — the tool surface never grows.
- **Introspection over enumeration.** Agents ask for schemas at runtime (`get_schema`) rather than loading thousands of type definitions into context.
- **Policy over scopes.** Four broad OAuth permissions gate capability; fine-grained access control is enforced per path, method, and tenant policy.

## Tool categories

The 10 tools are organized into four categories:

| Category | Tools | Description |
|----------|-------|-------------|
| Entity tools | `fetch`, `create_entity`, `update_entity`, `delete_entity`, `do_action`, `call_function` | CRUD operations and actions on Microsoft 365 resources via Microsoft Graph |
| Binary tools | `fetch_blob`, `upload_blob` | Download and upload binary content (files, attachments) |
| Copilot tools | `ask`, `list_agents` | Invoke Microsoft 365 Copilot for natural-language intelligence and discover available agents |
| Schema tools | `get_schema`, `search_paths` | Discover available API paths and retrieve OpenAPI schemas at runtime |

For detailed information about each tool, including parameters, see [Work IQ MCP tool reference](tool-reference.md).

## How tools work

Tools operate on **relative resource paths** — the path identifies the resource, the tool is the verb:

```text
fetch /me/messages                         → read my emails
do_action /me/sendMail                     → send an email
create_entity /me/events                   → create a calendar event
fetch /me/chats/{id}/messages              → read Teams chat messages
call_function /search/query                → semantic search
ask "What deals closed this quarter?"      → invoke Copilot agent
```

New workloads, backends, and data sources add **paths**, not tools. The tool surface stays fixed at 10.

## Authentication

The Work IQ MCP server uses Microsoft Entra ID for authentication. MCP clients discover the authentication configuration automatically through the `/.well-known/oauth-protected-resource` endpoint. For details on required permissions, see [Work IQ API permissions reference](../permissions.md).

## Related content

- [Work IQ API overview](../api-overview.md)
- [Work IQ MCP tool reference](tool-reference.md)
- [Work IQ API permissions reference](../permissions.md)
