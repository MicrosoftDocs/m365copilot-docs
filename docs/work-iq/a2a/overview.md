---
title: Work IQ Agent2Agent (A2A) overview (preview)
description: Learn how to use Work IQ through the AgentToAgent(A2A) protocol to enable AI agents to communicate and collaborate with Work IQ.
author: jasonjoh
ms.author: jasonjoh
ms.topic: overview
ms.localizationpriority: medium
ms.date: 05/29/2026
---

<!-- markdownlint-disable MD024 -->

# Work IQ Agent2Agent (A2A) overview (preview)

The [AgentToAgent (A2A) protocol](https://a2a-protocol.org/latest/) enables AI agents to communicate and collaborate with Work IQ. Agents can operate autonomously and exchange structured tasks instead of simple API calls with Work IQ.

## Protocol version

Work IQ supports both A2A version 1.0 and 0.3, dispatched via the `A2A-Version` request header. If the `A2A-Version` header is omitted, Work IQ defaults to 0.3 for backward compatability. We recommend using version 1.0 by setting `A2A-Version: 1.0` in your request headers.

## Agent discovery

Work IQ hosts Agent Cards for its available agents at the standard `/.well-known/agent-card.json' endpoint.

- For the default agent: `https://workiq.svc.cloud.microsoft/a2a/.well-known/agent-card.json`
- For a specific agent: `https://workiq.svc.cloud.microsoft/a2a/{agent-id}/.well-known/agent-card.json`

### Example

#### Request

```http
GET https://workiq.svc.cloud.microsoft/a2a/.well-known/agent-card.json
Authorization: Bearer {access-token}
A2A-Version: 1.0
```

#### Response

```json
{
  "name": "Microsoft Copilot",
  "description": "An AI-powered assistant that helps users with business-related tasks such as managing emails, scheduling meetings, and organizing documents.",
  "version": "1.0.0",
  "documentationUrl": null,
  "iconUrl": "https://copilot.microsoft.com",
  "supportedInterfaces": [
    {
      "url": "https://workiq.svc.cloud.microsoft/a2a",
      "protocolBinding": "JSONRPC",
      "tenant": null,
      "protocolVersion": "1.0"
    }
  ],
  "capabilities": {
    "streaming": true,
    "pushNotifications": false,
    "extensions": [],
    "extendedAgentCard": null
  },
  "provider": {
    "organization": "Microsoft",
    "url": "https://www.microsoft.com"
  },
  "skills": [],
  "defaultInputModes": [
    "text"
  ],
  "defaultOutputModes": [
    "text"
  ],
  "securitySchemes": null,
  "securityRequirements": null,
  "signatures": null
}
```

## Sending messages

Work IQ supports sending messages in synchronous mode ([SendMessage](https://a2a-protocol.org/latest/specification/#311-send-message)) and streaming mode ([SendStreamingMessage](https://a2a-protocol.org/latest/specification/#312-send-streaming-message)).

### Example

#### Request

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

#### Response

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

## Task management

Work IQ supports the [GetTask](https://a2a-protocol.org/latest/specification/#313-get-task), [CancelTask](https://a2a-protocol.org/latest/specification/#315-cancel-task), and [SubscribeToTask](https://a2a-protocol.org/latest/specification/#316-subscribe-to-task) methods for managing tasks.
