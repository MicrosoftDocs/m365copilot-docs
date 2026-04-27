---
title: Choose a Work IQ protocol (preview)
description: Learn how to choose the right Work IQ API protocol for your scenario.
author: jasonjoh
ms.author: jasonjoh
ms.topic: article
ms.localizationpriority: medium
ms.date: 03/31/2026
---

# Choose a Work IQ protocol (preview)

Work IQ supports multiple protocols so you can choose the interaction model that best fits your application or agent architecture. This article helps you decide which protocol to use and when.

## Overview of protocols

| Protocol                     | Best for                  | Interaction model          |
|------------------------------|---------------------------|----------------------------|
| REST                         | Applications and services | HTTP requests/responses    |
| A2A (Agent-to-Agent)         | Multi-agent systems       | Structured task delegation |
| MCP (Model Context Protocol) | Developer tools           | Tool-based context access  |

All protocols:

- Execute in the context of the signed-in user
- Enforce Microsoft 365 permissions and compliance
- Operate within the Microsoft 365 trust boundary

## Decision guide

Use the questions below to determine the best protocol for your needs.

### Do you need a conversational API from a service or backend?

✅ Use REST

- You want deterministic request/response behavior
- You are calling Copilot from a web service or orchestrator
- You need multi-turn conversations managed by your application

### Do you have multiple autonomous agents that need to collaborate?

✅ Use A2A

- Agents reason independently and delegate work
- You want structured task contracts instead of simple function calls
- Conversations may span multiple agents and steps

### Are you building an IDE, CLI, or AI assistant?

✅ Use MCP

- You want Microsoft 365 context exposed as tools
- The assistant decides when to pull work data
- You want minimal prompt engineering

## Scenarios

| Scenario                               | Recommended protocol |
|----------------------------------------|----------------------|
| Web app calling Copilot                | REST                 |
| Backend orchestrating workflows        | REST                 |
| Agent delegating work to another agent | A2A                  |
| AI assistant in VS Code                | MCP                  |
| CLI with contextual awareness          | MCP                  |

## Can I use more than one protocol?

Yes. Many applications combine protocols:

- REST for core orchestration
- A2A for agent collaboration
- MCP for developer productivity

Each protocol shares the same security and compliance guarantees.
