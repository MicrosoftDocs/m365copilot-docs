---
title: Skills as plugin capabilities
description: Learn when to use a skill in a Microsoft 365 Copilot plugin and what reuse, ownership, and dependency decisions to record before you build or reuse it.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/11/2026
ms.topic: concept-article
---

# Skills as plugin capabilities

A **skill** provides reusable instructions or a workflow that teaches an agent or supported Microsoft experience how to perform a specific job. A skill is represented by a directory with a required `SKILL.md` file and can include supporting resources or scripts.

A plugin can bring together a skill with other supported capabilities, such as agents, Copilot connectors, or MCP-based tools. The plugin is the unit of extensibility; the skill remains a distinct reusable capability.

> [!IMPORTANT]
> Skill availability, sharing, automatic use, and host support vary by Microsoft experience. Skills can be used directly in Copilot Chat, distributed through supported plugins, or attached to declarative agents. Follow the guidance for the authoring experience and target host; their packaging requirements and limits aren't interchangeable.

## Choose the target experience

| Target | Start with |
|---|---|
| A skill used directly in Microsoft 365 Copilot Chat, including a skill distributed in a plugin | [Build skills for Copilot Chat](build-copilot-chat-skills.md) |
| A skill attached to a declarative agent | [Skills in declarative agents](declarative-agent-skills.md) |
| A skill in a Copilot Cowork plugin | [Build plugins for Copilot Cowork](/copilot/cowork/cowork-plugin-development) |

## Decide whether you need a skill

Choose a skill when:

- The solution requires repeatable instructions or a workflow for a specific job.
- The agent or supported experience needs modular instructions for the job.
- The work can be expressed through instructions and supporting resources.
- The skill can call approved tools or scripts when the target experience supports them.

A skill might not be the right component when:

- The requirement is the complete conversational experience. Consider a [declarative agent](overview-declarative-agent.md).
- The requirement is primarily access to external data. Consider a [connector](plugin-type-connectors.md).
- The requirement is to expose remotely hosted tools or resources. Consider an [MCP server](plugin-type-mcp-servers.md).

## Decide whether to build or reuse

Agent Builder and Agents Toolkit don't support reuse across declarative agents. For more information, see the support matrix in [Skills in declarative agents](declarative-agent-skills.md#support-matrix). Don't assume that a skill attached to one agent is available to another agent or Microsoft experience.

Before you build a skill:

- Search for an approved skill that already performs the job.
- Check the target experience's documented reuse limits before adapting existing skill content.
- Confirm that the target authoring tool and Microsoft experience support the skill format and its resources.
- Review the instructions and supporting files for data, security, responsible AI, and maintenance requirements.
- Identify any gaps that require a new or extended skill.

If you reuse a skill, confirm who owns its content, versioning, testing, support, and distribution.

## Record skill dependencies

As you decide whether to build or reuse a skill, note:

- The job, inputs, expected output, and success criteria.
- The agent or supported Microsoft experience that uses the skill.
- Required knowledge, connectors, MCP-based tools, scripts, or other resources.
- Authentication, permissions, data, and execution requirements.
- Format, version, sharing, and host constraints.
- Owner, support contact, and test requirements.

After you decide to build or reuse a skill, [choose development tools](choose-plugin-development-tools.md).

## Related content

- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Build skills for Copilot Chat](build-copilot-chat-skills.md)
- [Add skills with Agent Builder](agent-builder-add-skills.md)
- [Add skills with Agents Toolkit](build-declarative-agents-add-custom-skills.md)
