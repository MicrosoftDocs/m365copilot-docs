---
title: Connect to other agents from a declarative agent
description: Learn how to declare connected (worker) agents in a declarative agent manifest using the worker_agents property, enabling agent-to-agent interaction mediated by Microsoft 365 Copilot Chat.
author: ajacks-msft
ms.author: ajacks
ms.localizationpriority: medium
ms.date: 06/18/2026
ms.topic: article
---

# Connect to other agents from a declarative agent

<!-- cSpell:ignore ajacks -->

When users interact with a declarative agent in Microsoft 365 Copilot Chat, it can connect to other agents to retrieve extra information or perform actions. You declare these connections in the agent manifest by listing agent title IDs in the [`worker_agents`](declarative-agent-manifest-1.8.md) property. At runtime, Copilot Chat acts as the broker that mediates the interaction—users see the agent-to-agent exchange but don't need to select connected agents themselves.

> [!NOTE]
> Manifest-declared connected agents are a separate mechanism from the [Copilot Chat API](api/ai-services/chat/overview.md), which enables conversational experiences powered by Microsoft 365 Copilot inside your own custom applications.

> [!NOTE]
> Users must acquire each connected agent before they can use them. For more information, see [Deploying connected agents to users in the organization](/microsoft-365/admin/manage/agent-registry).

When a user interacts with a declarative agent, the agent can delegate part of the task to a connected agent. Microsoft 365 Copilot evaluates the connected agents declared in the manifest and selects one based on the current task and the connected agent's name, description, and example prompts. Copilot sends a text request to the selected connected agent, receives a text response, and incorporates that response into the declarative agent's ongoing interaction with the user.

## When to use connected agents

Use connected agents to break apart or combine agents across functions or development teams.

### Expand beyond what one agent can accomplish

Large language models (LLMs) have a limited useful context window and set of capabilities. A single LLM agent's reliability begins to drop as [more documents are retrieved](optimize-content-retrieval.md) or [tools are enabled](overview-plugins.md). If an agent has lower quality after adding more knowledge or capabilities, split some of those capabilities into another agent and connect to it. The existing agent sends only the information about the task that the connected agent needs to achieve its portion. The connected agent works in its own context window, free from other documents or capabilities that are in the user conversation.

### Integrate with agents developed externally

Declarative agents can make it easier to work with other development teams. Each development team can focus on the capabilities and quality of their agent, using connected agents to integrate with other agents. Like with microservices, each agent can be developed without affecting other agents. Unlike microservices, agents can continue to interact with each other even when their interfaces change.

### Share agent capabilities to multiple scenarios

An agent might work well with a set of documents and actions but still be difficult for users. Consider an agent that understands the tables and data of a relational database of customers and sales. This agent might be useful for both store supervisors to manage inventory and business analysts to report to executives. If this agent could be connected to an agent tailored to store supervisors with conversation starters and instructions, and also to an agent tailored to business analysts. Both types of users might get more value out of using agents tailored to their scenario.

## Enabling connected agents

You must register connected agents in the [Microsoft Agent 365 agent registry](/microsoft-365/admin/manage/agent-registry). Connect to other agents by including the agents' title IDs in the existing [declarative agent's manifest](declarative-agent-manifest-1.9.md). The other agent must be a declarative agent or have a [registered Agent2Agent agent card](api/admin-settings/agent-registration/overview.md).

First, get the title ID of the agent to connect. The title ID of an agent is a string of a single letter, an underscore, and a GUID. For a declarative agent, find it in the output of the **Provision** command in the Microsoft 365 Agents Toolkit or in [developer mode](debugging-agents-copilot-studio.md). For a Microsoft 365 Agent Registration, it's the `id` property of the [agentRegistration object](api/admin-settings/agent-registration/resources/agentregistration.md).

:::image type="content" source="assets/images/declarative-agents/developer-mode-title-id.png" alt-text="Screenshot of Microsoft 365 Copilot session where Copilot has returned a card with debugging information showing the title ID":::

Add the title ID to the [worker_agents](declarative-agent-manifest-1.9.md) property as the `id`. The `worker_agents` property was added in declarative agent schema version 1.6.

### Authentication and authorization

Connecting to a declarative agent relies on the user's existing authentication to Microsoft 365 Copilot, because the declarative agent runs within Microsoft 365 Copilot Chat. For external agents registered in Microsoft Agent 365, the agent registration must declare how Microsoft 365 Copilot authenticates to the external agent. Instead of embedding authentication configuration directly in the agent registration, the registration references an existing authentication registration through the `authorization` object in the `agentRegistration`. This separation allows authentication configuration to be managed independently from agent definitions. The design mirrors that of [API plugin manifests](plugin-manifest-2.4.md).

#### Syntax

```json
{
  "type": "None | OAuthPluginVault",
  "referenceId": "{string}"
}
```

The `type` property specifies the authentication scheme used by the external agent. `OAuthPluginVault` uses a Microsoft Entra SSO registration. The `referenceId` is the `Microsoft Entra SSO registration ID` value generated in the Teams developer portal. See [Use the Teams developer portal](plugin-authentication-entra-sso.md#use-the-teams-developer-portal) for more detail.

Whether a user can use the connected agent is determined separately from authentication. Users must have access to the connected agent, either by acquiring it themselves or through administrator deployment. Administrators must [install external agents registered in Microsoft Agent 365 for the user](/microsoft-365/admin/manage/agent-registry).

## Best practices

Declarative agents choose what agents to connect to based on the connected agent's `name`, `description`, and example prompts. For a declarative agent, example prompts are the `text` field of `conversation_starters` in the manifest. For an agentRegistration, it is the `examples` property of the `AgentSkill` object in the agent card. The agent's description should describe to both humans and agents what the agent can do. For example, consider this description for an agent that works with structured data about video game sales.

```text
A comprehensive video game sales analytics agent that provides detailed insights into
gaming industry data across multiple dimensions.
Analyze top-performing games, consoles, genres, and publishers with regional breakdowns
for North America, Europe, Japan, and global markets.
Discover best-selling titles of all time, platform-specific performance metrics, genre
popularity trends, and yearly sales patterns.
Compare sales figures across different publishers, identify market leaders by region,
and explore gaming industry evolution over time.
Whether you need to understand which games dominated specific platforms, analyze
publisher market share through visualizations like histograms, or track sales performance
across different years and regions, this agent delivers comprehensive gaming market
intelligence with precise data-driven answers.
```

Example prompts should inform both users and agents the types of prompts the agent can handle. Because users might use different terms for the same concept, consider varying the phrasing of conversation starters. For example, when working with legal cases, good conversation starters might also use "matter," "case," "customer," and "issue" terms. Only the `text` field of a conversation starter is used by connected agents.

## Limitations

- The active agent sends text only to a connected agent. Declarative agents return text or Adaptive Cards. Agents with Agent2Agent agent cards return text, Base64 image binaries, and Base64 file binaries.

- While the user is prompted to confirm API plugin calls of the connected agent, any [adaptive cards](api-plugin-adaptive-cards.md) are sent to the active agent. The user doesn't see the adaptive card or be able to use a dialog box. However, the active agent processes the data content of the adaptive card.

## Related content

- [Build agents with Visual Studio Code](build-declarative-agents.md)
- [Test and debug agents in Copilot Studio](debugging-agents-copilot-studio.md)
