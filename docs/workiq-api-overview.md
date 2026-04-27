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

| Protocol          | Description                             | Typical scenarios                    |
|-------------------|-----------------------------------------|--------------------------------------|
| REST              | Conversational, request/response API    | Service-hosted agents, orchestrators |
| A2A               | Structured agent-to-agent communication | Multi-agent systems, delegation      |
| MCP (coming soon) | Tool-based context access               | IDEs, CLIs, AI coding assistants     |

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

|              | REST API                                                              | A2A                                                                   | MCP                                                                                   |
|--------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **Use when** | You're building an app or service that calls Work IQ programmatically | Another agent needs to delegate a task to WorkIQ and get results back | An AI assistant (Copilot, Claude, etc.) needs to invoke WorkIQ as a tool for the user |
| **Caller**   | Your app or backend                                                   | Another agent                                                         | An LLM-based client                                                                   |
| **Example**  | "My web app sends a question to WorkIQ and renders the reply."        | "Our ops agent asks WorkIQ to investigate a regression."              | "A user asks Copilot a question and it calls WorkIQ to answer."                       |

## API examples

### REST API

Use the REST API for synchronous, conversational interactions with Copilot capabilities from a service or orchestrator.

#### Example request

```http
POST https://{workiq-endpoint}/conversations/{conversationId}/chat
Authorization: Bearer {access-token}
Content-Type: application/json

{
  "message": {
    "role": "user",
    "content": "Summarize my recent meetings and list action items."
  }
}
```

#### Example response (simplified)

```json
{
  "conversationId": "conversation-123",
  "status": "completed",
  "messages": [
    {
      "role": "assistant",
      "content": "Here is a summary of your recent meetings and identified action items..."
    }
  ]
}
```

#### Key characteristics

- Multi-turn conversations supported
- Runs in delegated user context
- Permissions and compliance enforced automatically

### Agent-to-Agent (A2A) protocol

Use A2A for agent collaboration and delegation, where agents operate autonomously and exchange structured tasks instead of simple API calls.

#### Example task request

```json
{
  "taskId": "task-001",
  "intent": "analyze_documents",
  "payload": {
    "query": "Find documents related to performance considerations"
  }
}
```

#### Example task response

```json
{
  "taskId": "task-001",
  "status": "completed",
  "result": {
    "summary": "Several documents discuss performance and scalability considerations."
  }
}
```

#### Key characteristics

- Structured intent and payload
- Designed for agent collaboration
- Supports stateful, multi-turn workflows

### Model Context Protocol (MCP)

Use MCP to expose Microsoft 365 work context as tools for AI assistants running in developer environments.

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

#### Example tool-based query

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

- [Choose a Work IQ protocol (preview)](workiq-choose-protocol.md)
- [Work IQ API quickstarts (preview)](workiq-api-quickstart.md)
