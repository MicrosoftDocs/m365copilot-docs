---
title: "About declarative agents"
description: Learn how declarative agents in Microsoft 365 Copilot enable developers to create AI solutions through configuration, using security and compliance frameworks.
#customer intent: As a developer, I want to understand how to configure declarative agents so that I can create AI-powered solutions within Microsoft 365.
author: TheBluLion
ms.author: euloh
ms.reviewer: jhaskett-msft
ms.topic: concept-article
ms.date: 12/19/2025
ms.contributor: 
    - mapichle
    - ericsche
---

# Declarative agents

Declarative agents are conversational AI experiences that result from declared configurations loaded into Microsoft 365 Copilot. These agents enable developers to create sophisticated AI-powered solutions through configuration rather than custom code, using the full Microsoft 365 ecosystem infrastructure and capabilities.

Declarative agents can include instructions, Microsoft first-party capabilities such as SharePoint grounding and code interpreter, Copilot connectors, and API plugins that permit connectivity to external APIs. This configuration-based approach allows organizations to rapidly deploy AI agents while inheriting Microsoft 365's security, compliance, and governance frameworks.

## Architectural characteristics

Declarative agents inherit the Microsoft 365 infrastructure and provide specific capabilities and constraints across different architectural components.

:::image type="content" source="assets/images/declarative-agents/declarative-agents-architecture-diagram.png" alt-text="Diagram comparing architectural components of declarative agents, including client and infrastructure considerations, optimized uses, and poor fits.":::

Cross prompt injection attacks or XPIA are a type of security vulnerability in conversational AI systems. Malicious input in one prompt or conversation context manipulates or alters the behavior of the AI in subsequent prompts or sessions, potentially leading to unintended or harmful outputs. This vulnerability occurs when information from previous user inputs or contexts is improperly handled, allowing an attacker to inject instructions or data that persist and influence future interactions. Content filtering and inline disengagement are common mitigations for XPIA.

| Component | Considerations | Optimized for | Poor fit for |
|-----------|---------------|---------------|--------------|
| Client | Inherits Microsoft 365 Client support with minimal developer lift. Constrained Microsoft support and delivery timelines. | Microsoft 365 ecosystem | Web chat and external clients. |
| Infrastructure | Does the Microsoft 365 infrastructure posture meet your current needs? | Using existing Microsoft 365 app ecosystem strengths: policies, governance, catalog, publication, audit, retention, data loss prevention (DLP). | Privatized network/storage needs. |
| Catalog | Inherits Microsoft 365's app catalog and publication process. Reduced developer lift in exchange for no developer controls. | Microsoft 365 app ecosystem catalog | Blended catalog of Microsoft 365 and non-Microsoft 365 agents and clients. |
| Security and Compliance | Inherits Microsoft 365's controls and commitments. Reduced developer lift in exchange for developer control. | Microsoft 365 ecosystem organizations that want lower SecOps overhead | Organizations that require different (greater or lower) postures. |
| Orchestrator and language model | Not within developer's control. | Microsoft 365 Copilot licensed users, Copilot tuning organizations, and Microsoft 365 Copilot Chat | Complex intent or dictionary use cases. |
| Tool calling | Provides best of both worlds for calling Microsoft owned capabilities and external tool calling. | Microsoft 365 workloads | On-premises APIs and data sources. Non OpenAPI based specs. Streaming API workloads. |

## Declarative agent data flow

Declarative agents follow a specific data flow pattern where Microsoft manages the orchestration and processing pipeline while developers control limited configuration aspects.

:::image type="content" source="assets/images/declarative-agents/data-flow-declarative-agents.png" alt-text="Diagram of declarative agent data flow showing sequential steps from initial prompt to response, with developer-controlled components in blue." lightbox="assets/images/declarative-agents/data-flow-declarative-agents.png":::

Developers control only the components marked in blue. Since Microsoft grounding and external tool calling happen sequentially, you can't use chained operations with grounding data or looped execution plans. This architecture isn't suitable for complex multistep operations.

The sequential processing model ensures consistent performance and security but limits the types of workflows that you can implement. Design solutions that work within this constraint instead of requiring iterative reasoning loops.

This model works well for scenarios where the agent can provide complete responses based on a single grounding operation and external tool call. However, it struggles with workflows requiring multiple interdependent operations.

Declarative agents operate within specific technical limits that you must consider when designing solutions.

| Limit type | Value | Considerations |
|------------|-------|----------------|
| Grounding record limit | 50 items | Affects the amount of contextual data available |
| Plugin response limit | 25 items | Constrains external API response sizes |
| Token limit | 4,096* | Includes all context and response data |
| Timeout limit | 45 seconds* | Includes network latency and processing time |

<sub>* Limits include external overhead such as network latency and Microsoft service processing. Optimize for about 66% of the technical limit.</sub>

### Scenarios with poor fit

Given these limitations, declarative agents aren't a good fit for:

- Scenarios that require full document or large data contexts
- Handling a large number of records or paginated results
- Long-running processes that exceed timeout limits

### Optimization strategies

To optimize declarative agent performance, implement scenarios that include preprocessing of data provided to the agent through plugins or Copilot connectors. Use post-processing capabilities through native Microsoft 365 Copilot features like code interpreter.

## Advantages and limitations

Key advantages and primary limitations of declarative agents help determine when this architecture is appropriate for specific use cases.

### Key advantages

Declarative agents provide significant benefits for organizations seeking to implement AI solutions within existing Microsoft 365 environments:

- **Infrastructure inheritance**: Agents automatically inherit existing Microsoft deployment, client, governance, and authentication structures without extra development effort.
- **Native capabilities access**: Provides direct access to Microsoft native capabilities, including advanced AI features and productivity integrations.
- **Reduced complexity**: Configuration-based approach eliminates the need for custom infrastructure development and maintenance.

### Primary limitations

The declarative approach also introduces constraints that might limit certain use cases:

- **Limited orchestration control**: Developers don't control iterative reasoning loops and complex workflow orchestration.
- **Restricted customization**: Custom corpus development isn't possible except in limited scenarios such as Copilot tuning.
- **Sequential processing**: The sequential nature of grounding and tool calling prevents complex multistep operations.

## Use case alignment

Declarative agents work best for scenarios that align with their architectural strengths while avoiding areas where limitations become problematic.

### Optimal scenarios

- **Information retrieval**: Agents that primarily need to search and summarize information from Microsoft 365 or external sources.
- **Simple workflows**: Straightforward processes that single-step operations complete.
- **Productivity enhancement**: Tasks that enhance existing Microsoft 365 workflows without requiring complex orchestration.

### Challenging scenarios

- **Complex decision trees**: Workflows requiring multiple conditional branches and iterative processing.
- **Large data processing**: Operations requiring analysis of extensive datasets or full document contexts.
- **Custom AI models**: Scenarios requiring specialized language models or custom training data.

Understanding these characteristics helps organizations make informed decisions about when declarative agents provide the optimal balance of capability and simplicity for their AI implementation requirements.
