---
title: Microsoft Work IQ API
description: Learn about the Work IQ API for building AI applications that securely reason over workplace intelligence data using REST, A2A, and MCP protocols.
author: jasonjoh
ms.author: jasonjoh
ms.topic: overview
ms.localizationpriority: medium
ms.date: 06/29/2026
---

<!-- markdownlint-disable MD024 -->

# Work IQ API overview

The Work IQ API enables developers to build agentic and AI-powered applications that securely reason over Microsoft 365 data while preserving existing permissions, compliance, and governance controls.

Work IQ provides multiple protocols to interact with agents - Agent-to-Agent (A2A), Model Context Protocol (MCP), and REST - so you can choose the protocol that best fits your application or agent architecture.

By accessing or using the Microsoft Work IQ APIs, you're agreeing to the [Microsoft Work IQ APIs Terms of Use](/legal/work-iq-apis/terms-of-use?context=/microsoft-365/copilot/extensibility/context).

## What is Work IQ?

Work IQ is a workplace intelligence layer that combines Microsoft 365 data with contextual understanding so agents can reason over work and take action. For a full overview of Work IQ capabilities, see [Work IQ overview](index.md).

## Why use Work IQ?

Traditional AI integrations often require building custom pipelines to extract, index, and secure enterprise data. Work IQ eliminates this complexity by providing:

- **Secure enterprise grounding:** Access to Microsoft 365 data is automatically permission-trimmed and policy-enforced.
- **Flexible interaction models:** Choose from conversational APIs, agent delegation, or tool-based access.
- **Reduced operational overhead:** No need to manage vector stores, data sync jobs, or custom compliance enforcement.

## Supported protocols

Work IQ supports the following protocols:

| Protocol   | Description                             | Typical scenarios                    |
|------------|-----------------------------------------|--------------------------------------|
| A2A        | Structured agent-to-agent communication | Multi-agent systems, delegation      |
| Local MCP  | Tool-based context access               | IDEs, CLIs, AI coding assistants     |
| Remote MCP | Tool-based context access               | IDEs, CLIs, AI coding assistants     |
| REST       | Conversational, request/response API    | Service-hosted agents, orchestrators |

## Supported functionality

Work IQ can reason over:

- Email messages
- Meetings and calendar data
- Documents in OneDrive and SharePoint
- Microsoft Teams messages
- People and organizational context
- Enterprise search results

## Choose a protocol

Use the following guide to select the right protocol.

> [!NOTE]
> The following table contains **recommendations** for the best suited protocol for specific scenarios, not strict rules. Use the protocol that works best for you.

|              | A2A                                                                    | REST API                                                              | MCP                                                                                    |
|--------------|------------------------------------------------------------------------|-----------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| **Use when** | Another agent needs to delegate a task to Work IQ and get results back | You're building an app or service that calls Work IQ programmatically | An AI assistant needs to invoke Work IQ as a tool for the user |
| **Caller**   | Another agent                                                          | Your app or backend                                                   | An LLM-based client                                                                    |
| **Example**  | "Our ops agent asks Work IQ to investigate a regression."              | "My web app sends a question to Work IQ and renders the reply."       | "A user asks Copilot a question and it calls Work IQ to answer."                       |

## API examples

### Agent-to-Agent (A2A) protocol

Use A2A for agent collaboration and delegation, where agents operate autonomously and exchange structured tasks instead of simple API calls. Work IQ supports both A2A v1.0 and v0.3, dispatched via the `A2A-Version` request header.

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
      "parts": [
        {
          "text": "What meetings do I have today?"
        }
      ],
      "metadata": {
        "Location": {
          "timeZoneOffset": -480,
          "timeZone": "America/Los_Angeles"
        }
      }
    }
  }
}
```

> [!NOTE]
> The `A2A-Version: 1.0` header is required to use v1.0 method names (`SendMessage`). Omitting it defaults to v0.3.

#### Example response

```json
{
  "jsonrpc": "2.0",
  "id": "<request-guid>",
  "result": {
    "task": {
      "id": "<task-id>",
      "contextId": "ctx-1",
      "status": {
        "state": "TASK_STATE_COMPLETED"
      },
      "artifacts": [
        {
          "artifactId": "<artifact-id>",
          "name": "Answer",
          "parts": [
            {
              "text": "Today you have: 9 AM standup, 11 AM review with Dana, 2 PM customer call."
            }
          ]
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
      "parts": [
        {
          "text": "Tell me more about the 2 PM customer call."
        }
      ]
    }
  }
}
```

#### Key characteristics

- JSON-RPC envelope required (`jsonrpc`, `id`, `method`, `params`)
- POST to base URL — method name is inside the body, not the URL path
- Supports synchronous (`SendMessage`)
- Multi-turn via `contextId`
- `Location` metadata required for time-sensitive queries

### Remote Model Context Protocol (MCP)

Use [remote MCP](mcp/overview.md) to expose Microsoft 365 work context as tools for AI assistants running in developer environments.

### Local MCP

Install the [Microsoft Work IQ CLI](cli.md) and configure it as a local MCP server.

[▶ See it in action in the Interactive Demo](https://aka.ms/copilot.dev?page=%2Fmcp&server=workiq&tool=ask_work_iq)

[▶ See it in action in the Interactive Demo](https://aka.ms/copilot.dev?page=%2Fmcp&server=workiq&tool=ask_work_iq)

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

- Requests run in the context of the signed-in user.
- On-behalf-of (OBO) flows are supported.
- Application-only authentication isn't supported.
- Microsoft 365 permissions, sensitivity labels, and compliance policies are enforced automatically.
> [!IMPORTANT]
> In multitenant (parent/child) organizations, the access token's issuer (`iss`) must match the tenant the signed-in user belongs to, not the tenant where the app is registered. Work IQ enabled in both tenants isn't enough. Register the app as multitenant (`AzureADMultipleOrgs`) and have users sign in through their home tenant's authority. Otherwise, the request fails with `400 AuthenticationError: "Error authenticating with resource"`.
## Path forward for new development

Work IQ is the recommended foundation for new agentic and AI-powered applications on Microsoft 365 data. Build new development on Work IQ APIs to take advantage of unified protocols, integrated governance, and continued investment.

## Licensing requirements

You pay for use of the Work IQ API through a usage-based model that uses Copilot Credits. For more information, see [Understand usage-based billing and cost management for Copilot Credits](/microsoft-365/copilot/usage-based-billing-overview-copilot-credits).

## Related content

- [Work IQ A2A quickstart](a2a/quickstart.md)
- [Work IQ REST API overview](rest/overview.md)
- [Microsoft Work IQ CLI](cli.md)
- [Microsoft Work IQ APIs Terms of Use](/legal/work-iq-apis/terms-of-use?context=/microsoft-365/copilot/extensibility/context)
- [Understand usage-based billing and cost management for Copilot Credits](/microsoft-365/copilot/usage-based-billing-overview-copilot-credits)
- [Managing AI experiences enabled by usage-based billing](/microsoft-365/copilot/usage-based-billing-manage-copilot-credits)
- [Discovery setting for AI experiences enabled by usage-based billing](/microsoft-365/copilot/discovery-setting-ai-experiences)
- [Try the APIs in the Interactive Demo](https://aka.ms/copilot.dev)
