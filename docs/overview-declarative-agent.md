---
title: Declarative agents for Microsoft 365 Copilot
description: Learn when a declarative agent can provide the conversational experience for a Microsoft 365 Copilot plugin and what dependencies to record before you build or reuse it.
author: aycabas
ms.author: aycabas
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: overview
---

# Declarative agents for Microsoft 365 Copilot

Declarative agents provide a goal-directed conversational experience that's powered by Microsoft 365 Copilot. You define the agent's purpose, instructions, knowledge, and supported actions to address a business scenario. A plugin can include or reference an agent with other supported capabilities, such as skills, Copilot connectors, or MCP-based tools.

Choose a declarative agent when users need a dedicated conversational experience with behavior and capabilities tailored to a specific outcome. You don't need to create an agent when an existing Microsoft experience or approved agent can use the selected skills, connectors, or tools.

> [!NOTE]
> For information about the two approaches to building agents for Microsoft 365 Copilot, see [Agents for Microsoft 365 Copilot](agents-overview.md).

## Decide whether you need a declarative agent

Consider a declarative agent when the solution requires:

- A named conversational experience for a defined audience and outcome.
- Instructions and constraints that apply consistently across conversations.
- Curated knowledge sources for grounding.
- Actions, skills, connectors, or MCP-based capabilities selected for the scenario.
- Conversation starters and metadata that help users understand what the agent does.

For example, an employee-support agent can use approved organizational knowledge to answer common questions. A customer-support agent can combine instructions and knowledge with an external capability that retrieves current order information.

:::image type="content" source="assets/images/declarative-agent-scenarios.png" alt-text="A diagram that shows two scenarios of declarative agents mentioned in the article." lightbox="assets/images/declarative-agent-scenarios.png" :::

An agent might not be the right component when:

- Users already work in a supported experience that can use the required capability directly.
- An existing approved agent meets the outcome and can be configured or extended.
- The solution requires complete control of the orchestration, model, hosting, or user interface. In that case, compare [declarative and custom engine agents](agents-overview.md).

For detailed fit and limitation guidance, see [Declarative agent architecture](declarative-agent-architecture.md).

## Understand what the agent contributes

You define a declarative agent by configuration that describes:

- **Identity and behavior**: The agent's name, purpose, instructions, conversation starters, constraints, and visual representation.
- **Knowledge**: The approved information sources that ground responses.
- **Capabilities**: The actions, skills, connectors, or tools the agent can use.
- **Host and distribution metadata**: The information required to surface the agent in supported Microsoft experiences.

Users engage with declarative agents in Microsoft 365 Copilot and supported Microsoft 365 apps.

:::image type="content" source="assets/images/declarative-agent-showcase.png" alt-text="Screenshots that show declarative agents running in Microsoft 365 Copilot." lightbox="assets/images/declarative-agent-showcase.png" :::

## Decide whether to build or reuse

Before you build an agent:

- Review agents that are already approved for the target users and experiences.
- Determine whether you can reuse, copy, configure, or extend an existing agent.
- Confirm who owns the agent instructions, knowledge, connections, and support.
- Identify any gaps that require a new agent.

If you reuse an agent, confirm that its owner supports the intended users, data, capabilities, sharing scope, and lifecycle.

## Record agent dependencies

As you decide whether to build or reuse an agent, note:

- Target users, outcome, and Microsoft experiences.
- Instructions, knowledge sources, and conversation requirements.
- Required skills, connectors, actions, or MCP-based capabilities.
- Identity, permissions, consent, and data boundaries.
- Availability, language, licensing, and environment requirements.
- Owner, support contact, and success measures.

After you decide to build or reuse an agent, [choose development tools](choose-plugin-development-tools.md).

## National cloud support

[!INCLUDE [declarative-agents-gov](includes/declarative-agents-gov.md)]

## Related content

- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Agent in-app experiences](overview.md#agent-in-app-experience)
- [Declarative agent architecture](declarative-agent-architecture.md)
- [Declarative agents FAQ](transparency-faq-declarative-agent.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Build agents with Agent Builder](agent-builder-build-agents.md)
- [Build agents with Microsoft 365 Agents Toolkit](/microsoftteams/platform/toolkit/overview-agents-toolkit?context=/microsoft-365/copilot/extensibility/context)
- [Responsible AI validation checks](rai-validation.md)
