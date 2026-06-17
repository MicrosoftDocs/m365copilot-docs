---
title: Work IQ overview
description: Learn how Work IQ provides production-ready workplace intelligence for agents, with chat, context, tools, and workspaces accessible via A2A, MCP, and REST APIs on a usage-based pricing model.
author: erikadoyle
ms.author: edoyle
ms.localizationpriority: medium
ms.date: 06/16/2026
ms.topic: overview
---

# Work IQ overview

Work IQ is a workplace intelligence layer that enables agents to access and reason over organizational data, context, and tools. It continuously builds a semantic understanding across Microsoft 365 and external systems with built-in, permission-aware governance.

Combining chat, context, tools, and workspaces, Work IQ supports high-volume, multistep interactions and works across frameworks and runtimes through standard protocols. It provides the foundation for building agents, applications, and workflows that deliver faster, more intelligent, efficient outcomes.

:::image type="content" source="../assets/diagrams/work-iq-api.png" alt-text="Diagram showing the Work IQ API with chat, context, tools, and workspaces components accessible via A2A, MCP, and REST protocols." border="false":::

Work IQ API endpoints include A2A, a remote MCP server, and a REST API. Usage is independent of Microsoft 365 Copilot licensing and available through usage-based billing. Enterprise governance and cost management controls are available in the [Microsoft 365 admin center](https://admin.microsoft.com/).

## Chat

Chat is optimized for conversational intelligence. Work IQ supports A2A for agent-to-agent collaboration and REST for web application interactions, enabling agents to delegate work, maintain continuity, and deliver fully processed, Copilot-quality responses.

## Context

Context is optimized by eliminating orchestration overhead. Work IQ assembles and grounds context internally across organizational data to provide agent-ready inputs, so agents don't need to stitch together raw signals or manage retrieval pipelines.

## Tools

Tools are optimized for fast, composable actions. A compact set of generic tools and skills lets agents reason, retrieve data, and act across Microsoft 365 through a simplified, agent-friendly surface with centralized governance.

The [Work IQ MCP](/microsoft-copilot-studio/use-work-iq) collapses hundreds of operations into just 10 generic tools that provide direct access to Microsoft 365 data (mail, calendar, files, people, chat, and sites) and the ability to act on that data. These tools function as simple verbs (such as fetch, create, and update), while resource paths define what the agent is working with. This separation keeps the surface area small while remaining flexible and extensible as new data sources and scenarios emerge.

A key capability of Work IQ allows agents to dynamically discover how data is structured at runtime. Instead of relying on predefined models or integrations, agents can understand what data exists, how it's organized, and how to interact with it as needed - turning every data source into a self-describing interface.

## Workspaces

Workspaces are optimized for long-running agent workflows. SharePoint Embedded working storage gives agents a persistent space within your Microsoft 365 tenant boundary to manage intermediate data and outputs - supporting reliable task progression, reuse of results, and seamless handoff across agents and experiences.

## Security, authorization, and governance

Work IQ centralizes control at a single point, combining simplified authorization with fine-grained policy enforcement. Instead of relying on hundreds of static OAuth scopes, the Work IQ MCP uses a small set of broad permissions to establish high-level access boundaries. A [Rego-based policy engine](https://www.openpolicyagent.org/docs/policy-language) enforces detailed, context-aware rules on every request. It evaluates factors like resource paths, request methods, user identity, and data content to control exactly what actions are allowed. Actions are user scoped, meaning every request runs in the context of a specific user and only accesses what that user is allowed to see or do.

Work IQ embeds observability and governance directly into the platform. Every tool invocation is logged and evaluated, enabling auditability, usage analytics, rate limiting, and real-time compliance enforcement across agents and data sources.

## Access and pricing

Work IQ API access is independent of Microsoft 365 Copilot licensing and available through usage-based billing.

- For Microsoft 365 Copilot licensed users, Work IQ is available in all Microsoft 365 Copilot experiences and agents. It is subject to usage-based billing for custom and third-party agents.
- Users without a Microsoft 365 Copilot license are billed based on usage.

Work IQ cost is variable based on usage and can be managed in the [Microsoft 365 admin center](https://admin.microsoft.com/). To learn more, see [Licensing](https://aka.ms/WorkIQ/licensing).

## Related content

- [Work IQ A2A quickstart](a2a/quickstart.md)
- [Microsoft Work IQ API overview](api-overview.md)
- [Work IQ REST API overview](rest/overview.md)
- [Microsoft Work IQ CLI](cli.md)
- [Microsoft Work IQ APIs Terms of Use](/legal/work-iq-apis/terms-of-use?context=/microsoft-365/copilot/extensibility/context)
