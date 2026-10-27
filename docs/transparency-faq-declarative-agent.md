---
title: Transparency FAQ for declarative agents in Microsoft 365 Copilot
description: Learn about declarative agent evaluation, responsible AI validation, limitations, and developer responsibilities for data protection and human oversight.
author: simranajwani
ms.author: simranajwani
ms.topic: faq
ms.localizationpriority: medium
ms.date: 10/23/2026
---

# Declarative agents FAQ

This transparency FAQ explains the intended uses, evaluation, and limitations of declarative agents for Microsoft 365 Copilot. It distinguishes platform protections from the validation and safeguards you need for your agent.

## What are declarative agents?

Declarative agents customize Copilot through instructions, knowledge sources, and supported capabilities. For definitions and design choices, see [Declarative agents for Microsoft 365 Copilot](overview-declarative-agent.md).

## What can declarative agents do?

Agents can answer questions, summarize configured knowledge, and invoke supported actions in Microsoft 365 Copilot and supported apps. Available capabilities depend on the authoring tool, licensing, policies, and host experience. See [Agent in-app experiences](overview.md#agent-in-app-experience) and [Declarative agent architecture](declarative-agent-architecture.md).

## What are declarative agents' intended uses?

Use declarative agents to assist a defined audience with specific tasks, such as answering organizational policy questions or retrieving order information. Define the intended outcome, boundaries, and human-review requirements. Don't present fluent responses as proof of expertise or accuracy. For scenario guidance, see [Decide whether you need a declarative agent](overview-declarative-agent.md#decide-whether-you-need-a-declarative-agent).

## Are declarative agents available for Microsoft 365 Government tenants?

[!INCLUDE [declarative-agents-gov](includes/declarative-agents-gov.md)]

## How were declarative agents evaluated? What metrics are used to measure performance?

Microsoft tests response-generation capabilities before release to evaluate accuracy, grounding, and responsible responses aligned with human preferences. Responsible AI (RAI) testing evaluates different harm types and measures defect rates. The results inform model improvements and harm mitigations; they don't guarantee that every response is correct, current, or appropriate.

RAI checks also apply during agent manifest validation and user prompt processing. For the applicable checks and validation failures, see [Responsible AI validation](rai-validation.md). These checks don't replace evaluation of your agent's instructions, knowledge, actions, and intended scenarios.

## How should makers evaluate a specific agent?

Define representative test cases with expected behavior and verifiable assertions. Measure answer accuracy, source attribution, task completion, tool usage, and adherence to the agent's boundaries. Include missing information, restricted access, unsupported requests, canceled actions, and service failures.

Compare results across versions and rerun tests when instructions, sources, tools, or platform behavior change. Evaluation doesn't replace responsible AI review, security testing, performance testing, or user research. See [Agent evaluation overview](evaluation-overview.md) and [Test and iterate](declarative-agent-best-practices.md#test-and-iterate).

## What are the limitations of declarative agents and how can users minimize the effects?

Communicate the agent's scope and limitations, and design appropriate safeguards:

- **Incorrect or outdated responses.** Generated answers can be inaccurate or incomplete. Evaluate them against source material and require human review where the consequences warrant it.
- **Retrieval and context limits.** A response might not include all relevant source content. Keep knowledge current, follow source-specific requirements, and test representative questions and target hosts.
- **Untrusted content.** Retrieved information and tool results can contain instructions that influence the agent. Platform protections don't replace permission checks or careful human oversight for sensitive operations.
- **External actions.** Instructions aren't a substitute for service-side authorization, input validation, or business rules. Configure appropriate confirmations and test failure and retry behavior.

For design mitigations, see [Declarative agent best practices](declarative-agent-best-practices.md). For the service and permission boundaries, see [Plan data, privacy, and security](data-privacy-security.md).

## What data and privacy responsibilities do agent developers have?

Review what data the agent can access, what it sends to external services, and the applicable permissions, privacy statements, and terms of use. Microsoft 365 data-access protections don't remove your responsibility to enforce authorization and data protection in external APIs and MCP servers.

Document the relevant data flows, retention, and human-oversight requirements. Work with administrators on access and deployment using [Govern plugin access and connections](manage.md), rather than assuming that sharing an agent grants access to its data sources.

For platform commitments, see [Data, privacy, and security for Microsoft Copilot](/microsoft-365/copilot/microsoft-365-copilot-privacy). For platform protections, see [Security for Microsoft Copilot](/microsoft-365/copilot/security-microsoft-copilot).
