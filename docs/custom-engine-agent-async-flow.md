---
title: Asynchronous and Proactive Messaging in Custom Engine Agents for Microsoft 365
description: Lear how to use asynchronous and proactive messaging patterns in your custom engine agents.
author: lauragra
ms.author: lauragra
ms.reviewer: vermaanimesh
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 07/11/2025
ms.custom: [copilot-learning-hub]
---

# Implement asynchronous and proactive messaging in custom engine agents

This article describes how to implement asynchronous and proactive messaging patterns in custom engine agents that you build with the Microsoft Bot Framework. These patterns allow your agents to respond to users after a delay or without a user-initiated message.

You can use asynchronous and proactive messaging to enable your custom engine agents to:

- Respond after a delay while continuing background processing.
- Initiate messages without user input (for example, system-triggered updates).

Each user query should receive an initial response within 15 seconds. For long-running tasks, agents can send follow-up messages. A 45-second timeout applies between streaming updates.

## Asynchronous messages

Asynchronous messages are sent after the agent completes a background task initiated by the user. This pattern is useful for scenarios like order tracking or status updates.

For example, if a user orders a laptop, your agent can confirm the request and later send a follow-up message to the user when the order is placed.

| Task | Description |
|------|-------------|
| ✅ Initial confirmation | Send a message to acknowledge the request. |
| ✅ Background processing | Perform the task asynchronously. |
| ✅ Follow-up message | Notify the user when the task is complete. |

## Proactive messages

Proactive messages are initiated by the system, not the user. These messages are sent using a dedicated conversation thread.

For example, your agent can send a notification to a user about an event or update without a user query.

| Task | Description |
|------|-------------|
| ✅ Acquire token | Use OAuth2 to authenticate. |
| ✅ Create conversation | Use the Bot Framework API to initiate a conversation. |
| ✅ Send message | Post a message to the conversation. |

You can use the [create conversation] API to fetch the conversation information and send proactive messages using a dedicated thread.