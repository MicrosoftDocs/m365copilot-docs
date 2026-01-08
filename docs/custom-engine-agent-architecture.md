---
title: "Custom engine agent architecture"
description: Discover how custom engine agents enable sophisticated AI implementations with specialized orchestration logic and multiple language model routing capabilities.
#customer intent: As a developer, I want to understand how to integrate Microsoft's client and catalog infrastructure with custom orchestrators and language models so that I can build flexible and scalable AI solutions.
author: TheBluLion
ms.author: euloh
ms.reviewer: jhaskett-msft
ms.topic: concept-article
ms.date: 01/07/2026
ms.contributor: 
    - mapichle
    - ericsche
---

# Custom engine agent architecture

Custom engine agents are conversational AI experiences available in the Microsoft 365 Agent store that use hosting platforms other than Microsoft 365 Copilot Chat. These agents give developers full control over orchestration, language models, and API integrations while staying compatible with Microsoft 365 ecosystems and external platforms.

Custom engine agents enable sophisticated agent implementations. These implementations often require specialized orchestration logic, multiple language model routing, or complex workflow patterns that go beyond the capabilities of declarative agent configurations. This approach allows you to use the Microsoft client and catalog infrastructure while retaining control over the agent's core processing logic.

## Architectural flexibility

Custom engine agents provide a hybrid architecture that combines Microsoft infrastructure capabilities with developer-controlled processing components. This architecture enables sophisticated agent implementations that balance platform benefits with customization requirements.

:::image type="content" source="assets/images/custom-engine-agents/custom-engine-agent-architecture.png" alt-text="Diagram of custom engine agent flow showing Microsoft infrastructure, orchestrator logic, API integration, and response synthesis steps." lightbox="assets/images/custom-engine-agents/custom-engine-agent-architecture.png":::

This model allows you to use the Microsoft client and catalog infrastructure while keeping full control over orchestrator, language model, and API components. Components within your control enable prompt routing to multiple language models through multiple processing loops with complete output formatting control. You achieve this capability at the cost of higher development effort.

## Component characteristics

Custom engine agents provide different capabilities and constraints across architectural components compared to declarative agents. You encounter specific tradeoffs between control and complexity.

| Component | Considerations | Optimized for | Poor fit for |
|-----------|---------------|---------------|--------------|
| Client | Supports both Microsoft 365 ecosystem and external ecosystems like web pages, at the cost of technical debt and the overhead needed to support multiple ecosystems. | Microsoft 365 ecosystem and other client offerings supported directly by language model implementation such as web chat bots. | Makers that don't want to support divergent client features such as mobile or adaptive cards. |
| Infrastructure | Supports both Microsoft 365 ecosystem and external ecosystems at the cost of technical debt and overhead for multiple ecosystems support. | Broad reach into multiple chat and automation infrastructures and storage systems. | Centralized or monolithic architectures. |
| Catalog | Supports both Microsoft 365 ecosystem and external ecosystems at the cost of technical debt and overhead for multiple ecosystems support. | Microsoft 365 app ecosystem catalog, custom catalogs, and external app ecosystems. | Centralized or monolithic architectures and organizations that require a single catalog source of truth. |
| Security and compliance | Requires clear identification of authoritative security and compliance providers. | Hybrid security and compliance approaches that allow a mix of Microsoft and non-Microsoft governance. | Organizations using only non-Microsoft security stacks for security and compliance. |
| Orchestrator and language model | Fully within developer control. | Subprocesses within agent flows can be routed to different language models for fine-grained results. | Simple agents and workflows. |
| Tool calling | Limited options for Microsoft tool calling. | Tools that require large data contexts, iterative complex tool calling, or custom requirements for access including network and authentication. | Use cases that require Microsoft capabilities such as graphic art generators. |

## Related content

- [Agents overview](agents-overview.md)
- [Declarative agent architecture](declarative-agent-architecture.md)
