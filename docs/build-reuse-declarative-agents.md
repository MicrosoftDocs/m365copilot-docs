---
title: Build a Declarative Agent
description: Choose a supported authoring route to build or configure a declarative agent, confirm its behavior, and carry the component into plugin integration testing.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.topic: how-to
---

# Build a declarative agent

During **Build or reuse**, implement the declarative-agent component selected in your [component plan](choose-plugin-components.md). This article helps you choose the product procedure and confirm the component's readiness. You finish with a working agent, its dependencies, and test evidence for plugin integration.

You don't need an agent for every plugin. For your own orchestration, models, hosting, or runtime, follow the [app path](apps-agents-overview.md) instead.

## Check an existing agent before creating one

1. Review the existing agent's intended users, supported experiences, instructions, knowledge, actions, permissions, and known limitations with its owner.

    **Verify:** Its documented capabilities match the task and target experience in your component plan.

1. Select the product's documented reuse or extension route. You can [start with an agent template](agent-templates-overview.md) or [copy an Agent Builder agent to Copilot Studio](copy-agent-to-copilot-studio.md) when that workflow fits.

    **Verify:** The route supports your source and destination. Don't assume that adding an agent component to a plugin imports an existing project.

1. Agree on ownership, versioning, support, and change management, and then test representative tasks.

    **Verify:** Record results and unresolved gaps before deciding to use the agent unchanged, configure it, or build a new component.

## Start with Work IQ Dev Tools

For professional development, start with Work IQ Dev Tools, choose a [documented environment](choose-plugin-development-tools.md#choose-your-environment), and add Agents Toolkit only when your component needs its specific project controls.

| Your starting point | Product procedure | Expected result |
|---|---|---|
| A new plugin that needs an agent component | [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/) | `wiqd plugin create` creates the container; `wiqd plugin add agent` scaffolds the optional agent component. |
| An existing declarative-agent source project | [Agent component lifecycle](https://microsoft.github.io/wiqd/concepts/agent-lifecycle/) | Continue agent-specific authoring and iteration with the documented `wiqd agent` commands. |
| Agent instructions, knowledge, or actions that need editing | [Declarative agents in WIQD](https://microsoft.github.io/wiqd/concepts/declarative-agents/) and the [command reference](https://microsoft.github.io/wiqd/cli/reference/) | Saved source configured for the selected component and environment. |

Use the WIQD coding-assistant plugin for guided work or the direct CLI for repeatable commands. [Install the coding-assistant plugin and CLI](https://microsoft.github.io/wiqd/getting-started/installation/) as separate prerequisites when needed. GitHub Copilot helps author files, instructions, configuration, and tests; it doesn't replace the authoring tool, runtime, or component requirements.

For an existing agent project, select offline validation explicitly:

```powershell
wiqd agent validate --mode source --env dev
```

**Verify:** Read the saved-source findings and fix reported errors. A passing source check doesn't establish runtime behavior, endpoint reachability, authentication correctness, or final-package acceptance. The default `package` mode consumes an existing ZIP, uploads it for validation, and might require sign-in.

To add a skill to an existing WIQD agent project, check the `agent-skills` feature flag and current schema requirements in the [agent skill command reference](https://microsoft.github.io/wiqd/cli/reference/#wiqd-agent-add-skill). A top-level plugin skill and a skill attached to a declarative agent are different registrations; neither establishes support in every host.

## Use another product route when it fits the component

| Requirement | Product procedure |
|---|---|
| Managed authoring in Microsoft 365 Copilot | [Agent Builder overview](agent-builder.md) and [Build agents](agent-builder-build-agents.md) |
| Low-code logic, managed environments, or Power Platform connectors | [Copilot Studio](/microsoft-copilot-studio/) and [Connect and configure an agent for Teams and Microsoft Copilot](/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams) |
| Lower-level agent manifests and supported development integrations | [Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/quickstart/) (recommended for supported pro-code scenarios) |
| Skills in an existing Toolkit agent | [Add skills with Agents Toolkit](build-declarative-agents-add-custom-skills.md) |

Standalone Copilot Studio agents appear in the Agent Registry, not under plugins. Don't assume that publishing a standalone agent repackages it as a plugin.

## Configure and test the agent

For detailed implementation steps, follow the declarative-agent product guidance:

| Work to complete | Authoritative guidance | Verify |
|---|---|---|
| Define identity, behavior, task boundaries, and conversation starters | [Build agents](agent-builder-build-agents.md) or [Build with JSON](build-declarative-agents.md), then [Write effective instructions](declarative-agent-instructions.md) | Representative prompts produce the expected behavior and stay within the intended task. |
| Configure knowledge and capabilities | [Knowledge sources](knowledge-sources.md) and [Add capabilities and custom actions](build-declarative-agents-add-capabilities.md) | Required data is available to the intended user and unavailable when permissions don't allow it. |
| Add supported MCP or API actions | [MCP and API plugins for declarative agents](overview-plugins.md) | Tool selection, authentication, consent, confirmations, errors, and unsupported requests behave as intended. |
| Add a supported skill | [Skills in declarative agents](declarative-agent-skills.md) and the selected authoring procedure | The target agent loads the skill and completes the defined task within that product's limits. |
| Manage configuration for your authoring route | [Toolkit environments and versions](declarative-agents-multi-environment.md) or [WIQD environments](https://microsoft.github.io/wiqd/concepts/environments/) | Identity values, dependencies, and settings belong to the intended test environment. |

Record the agent version, owner, supported experiences, dependencies, known limitations, and test results. Product-specific testing is required; passing source or package validation isn't evidence that every user can run the task.

For design guidance, see [Best practices for declarative agents](declarative-agent-best-practices.md) and [How the Copilot orchestrator chooses actions](orchestrator.md). When the required behavior works, you can optionally [enable user feedback](declarative-agent-enable-feedback.md) and [optimize content retrieval](optimize-content-retrieval.md).

## Next step

Continue any remaining components in **Build or reuse**. When they're ready, enter **Package & test** with [Integrate and test your components](integrate-test-plugin-components.md).
