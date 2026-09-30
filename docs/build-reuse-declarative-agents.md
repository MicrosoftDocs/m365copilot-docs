---
title: Build a Declarative Agent
description: Build, configure, extend, or reuse the declarative agent required by your Microsoft 365 Copilot plugin.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: how-to
---

# Build a declarative agent

Use the agent decision from your component plan to create a working goal-directed conversational experience. The agent should have the required identity, instructions, knowledge, capabilities, and connections before you package the plugin.

## Reuse or extend an agent

Before you create an agent:

1. Confirm that the existing agent supports the intended users and Microsoft experiences.
1. Review its instructions, knowledge, capabilities, connections, permissions, and known limitations.
1. Confirm whether you can use it as-is, configure it, copy it, or extend it.
1. Agree on ownership, versioning, support, and change management with the agent owner.
1. Test the reused agent against the requirements in the solution brief.

You can also [start with an agent template](agent-templates-overview.md) or [copy an Agent Builder agent to Copilot Studio](copy-agent-to-copilot-studio.md) when the supported workflow fits the development plan.

## Choose the implementation path

Use the development tool that you chose in [Choose development tools for your plugin](choose-plugin-development-tools.md).

| Development tool | Start with |
|---|---|
| Agent Builder | [Agent Builder overview](agent-builder.md) and [build an agent](agent-builder-build-agents.md) |
| Work IQ Dev Tools | [Work IQ Dev Tools quickstart](https://microsoft.github.io/wiqd/getting-started/quickstart/) |
| Copilot Studio | [Build agents with Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365/copilot/extensibility/context) |
| Microsoft 365 Agents Toolkit | [Microsoft 365 Agents Toolkit overview](/microsoftteams/platform/toolkit/overview-agents-toolkit?context=/microsoft-365/copilot/extensibility/context), using [TypeSpec](build-declarative-agents-typespec.md) or [JSON](build-declarative-agents.md) as supported |

### Work IQ Dev Tools

Use `wiqd agent create` to scaffold a source-controlled declarative-agent project. During the build stage, edit the project, add supported OpenAPI or remote MCP actions with `wiqd agent add action`, and run offline static validation with `wiqd agent validate`.

`wiqd agent add skill` adds a skill to an existing declarative-agent project. This capability is behind the `agent-skills` preview flag, which is off by default. Confirm the current flag, schema, and lifecycle requirements in the [WIQD command reference](https://microsoft.github.io/wiqd/cli/reference/#wiqd-agent-add-skill).

You can enter commands directly or drive the documented workflow conversationally through Copilot CLI with the `wiqd:wiqd` agent. WIQD targets declarative agents, not custom engine agents.

GitHub Copilot can assist with project files, instructions, configuration, code, and tests. It doesn't replace the authoring tool, runtime, or component-specific requirements.

## Implement the agent

Complete the applicable work:

1. Define or confirm the agent's name, description, purpose, audience, and conversation starters.
1. Write instructions that define its behavior, boundaries, and use of knowledge and actions.
1. Add the required knowledge sources.
1. Add built-in capabilities, skills, connectors, MCP-based tools, or API actions.
1. Configure identities, authentication, permissions, consent, and connections.
1. Configure environments and versions when the development workflow supports them.
1. Test representative prompts, tool selection, responses, errors, and unsupported requests.

Use the following guidance to configure the agent:

- [Write effective instructions](declarative-agent-instructions.md)
- [Add knowledge sources](knowledge-sources.md)
- [MCP and API actions for declarative agents](overview-plugins.md)
- [Manage environments and versions for declarative agents with Microsoft 365 Agents Toolkit](declarative-agents-multi-environment.md)

For background and design guidance, see [Best practices for declarative agents](declarative-agent-best-practices.md) and [How the Copilot orchestrator chooses actions](orchestrator.md).

After the required behavior works, you can optionally [enable user feedback](declarative-agent-enable-feedback.md) and [optimize content retrieval](optimize-content-retrieval.md).

## Confirm that the agent is working

The agent is ready for integration when:

- Its identity and purpose are clear to the intended users.
- Instructions produce the expected behavior for representative scenarios.
- Required knowledge is available and permission-trimmed.
- Skills, connectors, actions, and MCP-based tools can be selected and invoked.
- Authentication, consent, confirmations, and failure behavior work as intended.
- The agent works in every development or test experience required by the plan.
- The owner, version, dependencies, limitations, and test evidence are recorded.

Continue with any other components in the plan. When they are complete, [integrate and test your components](integrate-test-plugin-components.md).

## Related content

- [Declarative agents for Microsoft 365 Copilot](overview-declarative-agent.md)
- [Build or reuse capabilities for your plugin](build-reuse-plugin.md)
- [Debug agents using Copilot Studio](debugging-agents-copilot-studio.md)
- [Debug agents using Agents Toolkit](debugging-agents-vscode.md)
