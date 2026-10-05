---
title: Work IQ MCP overview
description: Learn how to use Work IQ through the Model Context Protocol (MCP) to give AI agents tool-based access to Microsoft 365 data.
author: jasonjoh
ms.author: jasonjoh
ms.topic: overview
ms.localizationpriority: medium
ms.date: 10/05/2026
---

# Work IQ MCP overview

The Work IQ MCP server exposes Microsoft 365 intelligence capabilities to AI agents through the [Model Context Protocol (MCP)](https://modelcontextprotocol.io). It provides tools that enable agents to read, create, update, and delete Microsoft 365 entities, invoke Microsoft 365 Copilot for natural-language reasoning, retrieve grounding content, and discover API schemas - all through a single MCP endpoint.

> [!NOTE]
> The `retrieve` tool is available in public preview.

> [!TIP]
> Explore the Work IQ MCP tools in the [Interactive Demo](https://aka.ms/copilot.dev?page=%2Fwork-iq%2Fmcp&server=workiq-remote). You can inspect tool schemas, load examples, and preview responses in Demo mode.

## Design principles

Work IQ MCP is built on the following design principles:

- **Fewer tools, more paths.** Generic tools operate on resource paths. New workloads add paths, not tools - the tool surface never grows.
- **Introspection over enumeration.** Agents ask for schemas at runtime (`get_schema`) rather than loading thousands of type definitions into context.
- **Policy over scopes.** Four broad OAuth permissions gate capability; fine-grained access control is enforced per path, method, and tenant policy.

## Tool categories

The tools are organized into four categories:

| Category | Tools | Description |
|----------|-------|-------------|
| Entity tools | `fetch`, `fetch_blob`, `create_entity`, `update_entity`, `delete_entity`, `do_action`, `call_function` | CRUD operations and actions on Microsoft 365 resources |
| Copilot tools | `ask`, `retrieve`, `list_agents` | Invoke Microsoft 365 Copilot, retrieve grounding content, and discover available agents |
| Schema tools | `get_schema`, `search_paths` | Discover available API paths and retrieve OpenAPI schemas at runtime |

For detailed information about each tool, including parameters, see [Work IQ MCP tool reference](tool-reference.md).

## How tools work

Tools work with **relative resource paths**. The path shows the resource, and the tool acts as the verb:

```text
fetch /me/messages                         → read my emails
do_action /me/sendMail                     → send an email
create_entity /me/events                   → create a calendar event
fetch /me/chats/{id}/messages              → read Teams chat messages
call_function /search/query                → semantic search
ask "What deals closed this quarter?"      → invoke Copilot agent
retrieve "Find the latest launch risks"     → return grounding and source metadata
```

New workloads, backends, and data sources can add **paths** without requiring a separate tool for every resource.

## Authentication

The Work IQ MCP server uses Microsoft Entra ID for authentication. MCP clients automatically discover the authentication configuration through the `/.well-known/oauth-protected-resource` endpoint. For details on required permissions, see [Work IQ API permissions reference](../permissions.md).

> [!NOTE]
> The Work IQ service principal is created automatically in the tenant when Work IQ is used for the first time. In some corner cases, such as configuring Work IQ MCP policy in the Microsoft 365 admin center before any MCP use in the tenant, the service principal might not exist yet and policy configuration can fail. Tenant administrators can provision it by following the steps in [Enable your tenant for Work IQ](../enable-work-iq.md).

## Related content

- [Work IQ API overview](../api-overview.md)
- [Work IQ MCP tool reference](tool-reference.md)
- [Use the retrieve tool in Work IQ MCP](retrieve.md)
- [Work IQ API permissions reference](../permissions.md)
