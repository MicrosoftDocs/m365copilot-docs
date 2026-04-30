---
title: Microsoft Work IQ API (preview)
description: Learn about the Work IQ API for building AI applications that securely reason over Microsoft 365 data using REST, A2A, and MCP protocols.
author: jasonjoh
ms.author: jasonjoh
ms.topic: overview
ms.localizationpriority: medium
ms.date: 03/31/2026
---

<!-- markdownlint-disable MD024 -->

# Work IQ API overview (preview)

The Work IQ API enables developers to build agentic and AI-powered applications that securely reason over Microsoft 365 data while preserving existing permissions, compliance, and governance controls.

Work IQ provides multiple protocols to interact with agents - REST, Agent-to-Agent (A2A), and Model Context Protocol (MCP) — so you can choose the protocol that best fits your application or agent architecture.

By accessing or using the Microsoft Work IQ APIs, you're agreeing to the [Microsoft Work IQ APIs Terms of Use (preview)](/legal/work-iq-apis/terms-of-use?context=/microsoft-365/copilot/extensibility/context).

## What is Work IQ?

Work IQ is the intelligence layer behind Microsoft 365 Copilot and agents. Unlike systems that simply retrieve content, it understands how work actually happens. It combines data from Microsoft 365 (emails, meetings, documents, chats) with memory of patterns, preferences, and relationships. It applies the inference needed to reason across all of it and surface next-best actions. Work IQ orchestrates every layer of intelligence - from assembling context to grounding responses, selecting skills, and invoking tools - while honoring enterprise permissions and governance.

All Work IQ requests:

- Execute in the context of the signed-in user
- Honor Microsoft 365 permissions and sensitivity labels
- Remain within the Microsoft 365 trust boundary

This allows applications to reason over work data without exporting or duplicating content.

## Why use Work IQ?

Traditional AI integrations often require building custom pipelines to extract, index, and secure enterprise data. Work IQ eliminates this complexity by providing:

- **Secure enterprise grounding:** Access to Microsoft 365 data is automatically permission-trimmed and policy-enforced.
- **Flexible interaction models:** Choose from conversational APIs, agent delegation, or tool-based access.
- **Reduced operational overhead:** No need to manage vector stores, data sync jobs, or custom compliance enforcement.

## Supported protocols

Work IQ supports the following protocols:

| Protocol                 | Description                             | Typical scenarios                    |
|--------------------------|-----------------------------------------|--------------------------------------|
| A2A                      | Structured agent-to-agent communication | Multi-agent systems, delegation      |
| Local MCP                | Tool-based context access               | IDEs, CLIs, AI coding assistants     |
| Remote MCP               | Tool-based context access               | IDEs, CLIs, AI coding assistants     |
| REST (coming soon)       | Conversational, request/response API    | Service-hosted agents, orchestrators |

## Supported functionality

Work IQ can reason over:

- Email messages
- Meetings and calendar data
- Documents in OneDrive and SharePoint
- Microsoft Teams messages
- People and organizational context
- Enterprise search results

## Choose a protocol

Use the guide below to select the right protocol.

> [!NOTE]
> The following table contains **recommendations** for the best suited protocol for specific scenarios, not strict rules. Use the protocol that works best for you.

|              | A2A                                                                   | REST API (coming soon)                                                | MCP                                                                                   |
|--------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **Use when** | Another agent needs to delegate a task to Work IQ and get results back | You're building an app or service that calls Work IQ programmatically | An AI assistant (Copilot, Claude, etc.) needs to invoke Work IQ as a tool for the user |
| **Caller**   | Another agent                                                         | Your app or backend                                                   | An LLM-based client                                                                   |
| **Example**  | "Our ops agent asks Work IQ to investigate a regression."              | "My web app sends a question to Work IQ and renders the reply."        | "A user asks Copilot a question and it calls Work IQ to answer."                       |

## API examples

### Agent-to-Agent (A2A) protocol

Use A2A for agent collaboration and delegation, where agents operate autonomously and exchange structured tasks instead of simple API calls. Work IQ supports both **A2A v1.0** and v0.3, dispatched via the `A2A-Version` request header.

| | |
|--|--|
| **Endpoint** | `https://workiq.svc.cloud.microsoft/a2a/` |
| **Token audience** | `api://workiq.svc.cloud.microsoft` |
| **Scope** | `WorkIQAgent.Ask` |

#### Example request — sync (`SendMessage`)

```http
POST https://workiq.svc.cloud.microsoft/a2a/
Authorization: Bearer {access-token}
Content-Type: application/json
A2A-Version: 1.0

{
  "jsonrpc": "2.0",
  "id": "<request-guid>",
  "method": "SendMessage",
  "params": {
    "message": {
      "role": "ROLE_USER",
      "messageId": "<message-guid>",
      "parts": [{ "text": "What meetings do I have today?" }],
      "metadata": {
        "Location": { "timeZoneOffset": -480, "timeZone": "America/Los_Angeles" }
      }
    }
  }
}
```

> [!NOTE]
> The `A2A-Version: 1.0` header is required to use v1.0 method names (`SendMessage`, `SendStreamingMessage`). Omitting it defaults to v0.3.

#### Example response

```json
{
  "jsonrpc": "2.0",
  "id": "<request-guid>",
  "result": {
    "task": {
      "id": "<task-id>",
      "contextId": "ctx-1",
      "status": { "state": "TASK_STATE_COMPLETED" },
      "artifacts": [
        {
          "artifactId": "<artifact-id>",
          "name": "Answer",
          "parts": [{ "text": "Today you have: 9 AM standup, 11 AM review with Dana, 2 PM customer call." }]
        }
      ]
    }
  }
}
```

#### Multi-turn conversations

Pass the `contextId` from the previous response in the next message:

```json
{
  "jsonrpc": "2.0",
  "id": "<request-guid-2>",
  "method": "SendMessage",
  "params": {
    "message": {
      "role": "ROLE_USER",
      "messageId": "<message-guid-2>",
      "contextId": "ctx-1",
      "parts": [{ "text": "Tell me more about the 2 PM customer call." }]
    }
  }
}
```

#### Key characteristics

- JSON-RPC envelope required (`jsonrpc`, `id`, `method`, `params`)
- POST to base URL — method name is inside the body, not the URL path
- Supports synchronous (`SendMessage`) and streaming (`SendStreamingMessage` via SSE)
- Multi-turn via `contextId`
- `Location` metadata required for time-sensitive queries

### Remote Model Context Protocol (MCP)

Use MCP to expose Microsoft 365 work context as tools for AI assistants running in developer environments.

> [!IMPORTANT]
> **Current state:** Today, Microsoft 365 work context is available through [individual MCP servers for specific workloads](https://learn.microsoft.com/en-us/microsoft-agent-365/tooling-servers-overview). **Coming soon:** A single, unified remote Work IQ MCP server will consolidate these into one server with a curated set of tools and skills -- simplifying configuration and providing a consistent developer experience.

#### Example MCP server configuration

```json
{
  "workiq": {
    "type": "stdio",
    "command": "workiq",
    "args": ["mcp"]
  }
}
```

#### Example agent-based query

##### Prompt

`Summarize recent discussions about project risks.`

##### Conceptual MCP invocation

```json
{
  "tool": "workiq.search",
  "arguments": {
    "query": "project risks",
    "source": "teams"
  }
}
```

##### Result

```json
{
  "results": [
    {
      "summary": "Recent discussions highlighted timeline and dependency risks."
    }
  ]
}
```

#### Key characteristics

- Optimized for IDEs and CLIs
- Context pulled dynamically when needed
- Reduces manual prompt construction
- Single server with consolidated tools (coming soon)

## Authentication and security

Work IQ uses Microsoft Entra ID delegated authentication.

- Requests run in the context of the signed-in user
- On-behalf-of (OBO) flows are supported
- Application-only authentication is not supported
- Microsoft 365 permissions, sensitivity labels, and compliance policies are enforced automatically

## How Work IQ compares to Copilot Chat API

Work IQ is the production-ready evolution of the Copilot Chat API. When Work IQ reaches General Availability in May, it becomes the recommended, fully supported way to integrate with the Copilot agent in production scenarios. It is backed by enterprise SLAs, stable contracts, and long-term support commitments.

**What this means for you:**

- New projects should build on Work IQ from day one.
- Existing integrations using the Copilot Chat API will continue to work. The Copilot Chat API will remain in public preview for experimentation and early-stage development, but it is not covered by production SLAs.
- Migrating is straightforward — Work IQ preserves the concepts you already know and adds the reliability, governance, and support guarantees required for production workloads.

We recommend planning your move to Work IQ ahead of your product's release to take full advantage of production support at launch.

## Related content

- [Work IQ API quickstarts (preview)](work-iq-api-quickstart.md)
