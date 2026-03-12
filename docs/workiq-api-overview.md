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

Work IQ provides multiple interaction models - REST, Agent-to-Agent (A2A), and Model Context Protocol (MCP) — so you can choose the protocol that best fits your application or agent architecture.

## What is Work IQ?

Work IQ is a Microsoft 365 Copilot API surface designed for agents, orchestrators, and developer tools that need to understand work context.

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

| Protocol | Description                             | Typical scenarios                    |
|----------|-----------------------------------------|--------------------------------------|
| REST     | Conversational, request/response API    | Service-hosted agents, orchestrators |
| A2A      | Structured agent-to-agent communication | Multi-agent systems, delegation      |
| MCP      | Tool-based context access               | IDEs, CLIs, AI coding assistants     |

## Supported functionality

Depending on the protocol and user permissions, Work IQ can reason over:

- Email messages
- Meetings and calendar data
- Documents in OneDrive and SharePoint
- Microsoft Teams messages
- People and organizational context
- Enterprise search results

## Choose a protocol

Use the guide below to select the right protocol.

| If you need to...                           | Use  |
|---------------------------------------------|------|
| Call Copilot from a service or backend      | REST |
| Delegate tasks between agents               | A2A  |
| Give an AI assistant access to work context | MCP  |

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

| Area              | Copilot Chat API    | Work IQ                             |
|-------------------|---------------------|-------------------------------------|
| Primary focus     | Conversational chat | Agentic and orchestration scenarios |
| Protocols         | REST                | REST, A2A, MCP                      |
| Integration style | Chat-centric        | Agent- and tool-centric             |
| Typical usage     | Embedded chat       | Agents, orchestrators, IDEs         |
