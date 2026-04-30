---
title: Work IQ API quickstarts (preview)
description: Learn how to quickly test the Work IQ API using REST, A2A, and MCP.
author: jasonjoh
ms.author: jasonjoh
ms.topic: quickstart
ms.localizationpriority: medium
ms.date: 03/31/2026
---

# Work IQ API quickstarts (preview)

<!-- markdownlint-disable MD024 -->

This article provides one quickstart per protocol so you can get up and running quickly. For more detailed examples, see [Work IQ Samples](https://github.com/microsoft/work-iq-samples) on GitHub.

## REST API quickstart

### Scenario

Send a prompt to Copilot from a service and receive a grounded response.

### Prerequisites

- Microsoft Entra ID–authenticated user
- Delegated access token
- Microsoft 365 Copilot license for the user

### Step 1: Create or continue a conversation

```http
POST https://{workiq-endpoint}/conversations/{conversationId}/chat
Authorization: Bearer {access-token}
Content-Type: application/json

{
  "message": {
    "role": "user",
    "content": "Summarize my recent meetings."
  }
}
```

### Step 2: Handle the response

```json
{
  "conversationId": "conversation-123",
  "status": "completed",
  "messages": [
    {
      "role": "assistant",
      "content": "Here is a summary of your recent meetings..."
    }
  ]
}
```

### What you accomplished

- Sent a Copilot prompt from a service
- Received a permission-trimmed response
- Used delegated user context

## Agent-to-agent (A2A) quickstart

### Scenario

Delegate a task from one agent to another.

### Step 1: Send a task request

```json
{
  "taskId": "task-001",
  "intent": "summarize_content",
  "payload": {
    "query": "Recent project updates"
  }
}
```

### Step 2: Receive the task result

```json
{
  "taskId": "task-001",
  "status": "completed",
  "result": {
    "summary": "Recent updates focused on timeline adjustments."
  }
}
```

### What you accomplished

- Delegated work to another agent
- Used structured intent and payloads
- Enabled agent-to-agent collaboration

## Model context protocol (MCP) quickstart

### Scenario

Enable an AI assistant to pull Microsoft 365 context dynamically.

### Prerequisites

- Microsoft Entra ID–authenticated user
- [Work IQ CLI](workiq-overview.md) installed globally
- Microsoft 365 Copilot license for the user

### Step 1: Configure Work IQ as an MCP server

```json
{
  "workiq": {
    "type": "stdio",
    "command": "workiq",
    "args": ["mcp"]
  }
}
```

### Step 2: Ask a contextual question

**Prompt:** Summarize recent discussions about delivery risks.

#### Conceptual MCP tool call

```json
{
  "method": "tools/call",
  "params": {
    "name": "ask_work_iq",
    "arguments": {
      "question": "Summarize recent discussions about delivery risks.",
      "fileUrls": null
    },
    "_meta": {
      "progressToken": 0
    }
  }
}
```

```json
{
  "tool": "workiq.search",
  "arguments": {
    "query": "delivery risks",
    "source": "teams"
  }
}
```

#### Result

```json
{
  "results": [
    {
      "summary": "Discussions highlighted dependency and timeline risks."
    }
  ]
}
```

### What you accomplished

- Exposed work context as tools
- Let the assistant decide when to fetch data
- Avoided manual prompt engineering
