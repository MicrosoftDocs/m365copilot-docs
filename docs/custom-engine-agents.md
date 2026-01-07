---
title: "About custom engine agents"
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

# Custom engine agents

Custom engine agents are conversational AI experiences available in the Microsoft 365 Agent store that use hosting platforms other than Microsoft 365 Copilot Chat. These agents give developers full control over orchestration, language models, and API integrations while staying compatible with Microsoft 365 ecosystems and external platforms.

:::image type="content" source="assets/images/custom-engine-agents/copilot-agent-architecture.png" alt-text="Diagram of Microsoft 365 Copilot Agents architecture showing custom engine agents and declarative agents with solution options and integration points." lightbox="assets/images/custom-engine-agents/copilot-agent-architecture.png":::

Custom engine agents enable sophisticated agent implementations. These implementations often require specialized orchestration logic, multiple language model routing, or complex workflow patterns that go beyond the capabilities of declarative agent configurations. This approach lets developers use Microsoft's client and catalog infrastructure while keeping complete control over the agent's core processing logic.

## Architectural flexibility

Custom engine agents provide a hybrid architecture that combines Microsoft infrastructure capabilities with developer-controlled processing components. This architecture enables sophisticated agent implementations that balance platform benefits with customization requirements.

:::image type="content" source="assets/images/custom-engine-agents/custom-engine-agent-architecture.png" alt-text="Diagram of custom engine agent flow showing Microsoft infrastructure, orchestrator logic, API integration, and response synthesis steps." lightbox="assets/images/custom-engine-agents/custom-engine-agent-architecture.png":::

This model lets developers use Microsoft's client and catalog infrastructure while keeping full control over orchestrator, language model, and API components. Components within developer control enable prompt routing to multiple language models through multiple processing loops with complete output formatting control. You achieve this capability at the cost of higher development effort.

## Component characteristics

Custom engine agents provide different capabilities and constraints across architectural components compared to declarative agents. You encounter specific trade-offs between control and complexity.

| Component | Considerations | Optimized for | Poor fit for |
|-----------|---------------|---------------|--------------|
| Client | Supports both Microsoft 365 ecosystem and external ecosystems like web pages at the cost of technical debt and overhead needed to support multiple ecosystems. | Microsoft 365 ecosystem and other client offerings supported directly by language model implementation such as web chat bots. | Makers that don't want to support divergent client features such as mobile or adaptive cards. |
| Infrastructure | Supports both Microsoft 365 ecosystem and external ecosystems at the cost of technical debt and overhead for multiple ecosystems support. | Broad reach into multiple chat and automation infrastructures and storage systems. | Centralized or monolithic architectures. |
| Catalog | Supports both Microsoft 365 ecosystem and external ecosystems at the cost of technical debt and overhead for multiple ecosystems support. | Microsoft 365 app ecosystem catalog, custom catalogs, and external app ecosystems. | Centralized or monolithic architectures and organizations requiring single catalog source of truth. |
| Security and Compliance | Requires clear identification of authoritative security and compliance providers. | Hybrid security and compliance approaches allowing mix and match of Microsoft and non-Microsoft governance. | Organizations using only non-Microsoft security stacks for security and compliance. |
| Orchestrator and language model | Fully within developer control. | Subprocesses within agent flows can be routed to different language models for fine-grained results. | Simple agents and workflows. |
| Tool calling | Limited options for Microsoft tool calling. | Tools requiring large data contexts, iterative complex tool calling, or custom requirements for access including network and authentication. | Use cases requiring native Microsoft capabilities such as graphic art generators. |
