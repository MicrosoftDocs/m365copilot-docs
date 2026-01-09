---
title: Connect to other agents from a declarative agent
description: Learn how to connect to other declarative agents in Microsoft 365 apps with a declarative agent
author: ajacks-msft
ms.author: ajacks
ms.localizationpriority: medium
ms.date: 12/10/2025
ms.topic: article
---

# Connect to other agents from a declarative agent

<!-- cSpell:ignore ajacks -->

When users interact with a declarative agent in Microsoft 365 Copilot Chat, it can connect to other agents to retrieve extra information or perform actions. Users see the agent-to-agent interaction but don't need to select connected agents themselves. Declarative agents must specify the other agents they can connect to in their manifest definition.

> [!NOTE]
> Users must install each connected agent before they can use them. For more information, see [Deploying connected agents to users in the organization](/microsoft-365/admin/manage/agent-registry).

## When to use connected agents

Use connected agents to break apart or combine agents across functions or development teams.

### Expand beyond what one agent can accomplish

Large language models (LLMs) have a limited useful context window and set of capabilities. A single LLM agent's reliability begins to drop as [more documents are retrieved](optimize-content-retrieval.md) or [tools are enabled](overview-api-plugins.md). If an agent has lower quality after adding more knowledge or capabilities, split some of those capabilities into another agent and connect to it. The existing agent sends only the information about the task that the connected agent needs to achieve its portion. The connected agent works in its own context window, free from other documents or capabilities that are in the user conversation.

### Integrate with agents developed externally

Declarative agents can make it easier to work with other development teams. Each development team can focus on the capabilities and quality of their agent, using connected agents to integrate with other agents. Like with microservices, each agent can be developed without affecting other agents. Unlike microservices, agents can continue to interact with each other even when their interfaces change.

### Share agent capabilities to multiple scenarios

An agent might work well with a set of documents and actions but still be difficult for users. Consider an agent that understands the tables and data of a relational database of customers and sales. This agent might be useful for both store supervisors to manage inventory and business analysts to report to executives. If this agent could be connected to an agent tailored to store supervisors with conversation starters and instructions, and also to an agent tailored to business analysts. Both types of users might get more value out of using agents tailored to their scenario.

## Enabling connected agents

Connect to other declarative agents by including the agents' title IDs in the existing [declarative agent's manifest](declarative-agent-manifest-1.6.md).

First, get the title ID of the agent to connect. The title ID of a declarative agent is a string of a single letter, an underscore, and a GUID. You can find it in the output of the **Provision** command in the Microsoft 365 Agents Toolkit or in [developer mode](debugging-agents-copilot-studio.md).

:::image type="content" source="assets/images/declarative-agents/developer-mode-title-id.png" alt-text="Screenshot of Microsoft 365 Copilot session where Copilot has returned a card with debugging information showing the title ID":::

Add the title ID to the [worker_agents](declarative-agent-manifest-1.6.md) property as the `id`. The `worker_agents` property was added in declarative agent schema version 1.6.

## Best practices

Declarative agents choose what agents to connect to based on the connected agent's `name`, `description`, and `conversation_starters` in the manifest. The description should describe to both humans and agents what the agent can do. For example, consider this description for an agent that works with structured data about video game sales.

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

Conversation starters should inform both users and agents the types of prompts the agent can handle. Because users might use different terms for the same concept, consider varying the phrasing of conversation starters. For example, when working with legal cases, good conversation starters might also use "matter," "case," "customer," and "issue" terms. Only the `text` field of a conversation starter is used by connected agents.

## Limitations

- Declarative agents can only connect to other declarative agents through the connected agents feature. Consider using [API plugins](overview-api-plugins.md) for connecting to other systems and agents.

- Communication between agents only includes text. The active agent sends a text prompt to the connected agent, which responds with a text response. Agents can't send file binaries or images to other agents.

- While the user is prompted to confirm API plugin calls of the connected agent, any [adaptive cards](api-plugin-adaptive-cards.md) are sent to the active agent. The user doesn't see the adaptive card or be able to use a dialog box. However, the active agent processes the data content of the adaptive card.

## Related content

- [Build agents with Visual Studio Code](build-declarative-agents.md)
- [Test and debug agents in Copilot Studio](debugging-agents-copilot-studio.md)
