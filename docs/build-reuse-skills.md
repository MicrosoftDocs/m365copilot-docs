---
title: Build or Reuse Skills for a Microsoft 365 Copilot Plugin
description: Build, configure, extend, or reuse the skills required by your Microsoft 365 Copilot plugin.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: how-to
---

# Build or reuse skills

Use the skill decisions from your component plan to implement reusable instructions and workflows for the plugin. Each skill should perform a defined job and include the resources, scripts, tools, and ownership information required by its target Microsoft experience.

## Reuse or extend a skill

Before you create a skill:

1. Review approved skills that already perform the required job.
1. Confirm that the skill format and capabilities are supported by the target agent or Microsoft experience.
1. Review its instructions, resources, scripts, tools, and data access.
1. Determine whether you can reuse it as-is, configure it, or extend it.
1. Confirm ownership, versioning, sharing, support, and update expectations.
1. Test the skill with representative inputs and expected outputs.

Create a new skill only when an existing approved skill can't meet the requirement.

## Choose the implementation path

Use the path supported by the selected development tool and target experience.

| Development approach | Start with |
|---|---|
| Agent Builder | [Add custom skills with Agent Builder](agent-builder-add-skills.md) |
| Work IQ Dev Tools | [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/) |
| Microsoft 365 Agents Toolkit | [Add custom skills with Agents Toolkit](build-declarative-agents-add-custom-skills.md) |
| Cowork | [Build plugins for Copilot Cowork](/microsoft-365-copilot/cowork/cowork-plugin-development) |

GitHub Copilot can assist with skill instructions, supporting scripts, resources, tests, and repository changes. The target experience and authoring tool determine the supported skill format and runtime.

### Work IQ Dev Tools

WIQD provides two different skill-authoring routes:

- `wiqd plugin add skill` adds a top-level skill to a standalone plugin project. The plugin can be skill-only or combine the skill with supported agents or remote MCP connectors. The entire `wiqd plugin` command tree is alpha.
- `wiqd agent add skill` adds a skill to an existing declarative-agent project. This route uses the `agent-skills` preview flag, which is off by default.

Both routes create a `SKILL.md`-based capability, but they operate on different project types. In the WIQD plugin format, the skill name must match its folder name, and its description should include the phrases that should activate it. See [What is a plugin?](https://microsoft.github.io/wiqd/concepts/plugins/) and the [plugin authoring reference](https://microsoft.github.io/wiqd/getting-started/plugin-reference/).

Static WIQD plugin validation doesn't inspect skill content. After packaging, run package-first deep validation to check the top-level manifest, skill folders, and `SKILL.md` requirements.

## Implement the skill

Complete the applicable work:

1. Define the job, inputs, expected outputs, boundaries, and success criteria.
1. Create or import the skill instructions.
1. Add the required supporting resources and scripts.
1. Configure any connector, MCP-based tool, API, identity, permission, or data dependency.
1. Confirm supported file types, script types, sandbox behavior, storage, and sensitivity requirements.
1. Test expected, ambiguous, unsupported, and failure scenarios.
1. Record the skill version, owner, dependencies, known limitations, and support process.

For current support and runtime constraints, see [Custom skills in declarative agents](declarative-agent-skills.md).

## Confirm that the skill is working

The skill is ready for integration when:

- The target agent or experience can load and use it.
- Its instructions perform the defined job consistently.
- Required resources, scripts, tools, and data are available.
- Permissions and external dependencies work in the development or test environment.
- Unsupported or failed operations produce understandable behavior.
- Ownership, versioning, limitations, and test evidence are recorded.

Continue with any other components in the plan. When they are complete, [integrate and test your components](integrate-test-plugin-components.md).

## Related content

- [Skills as plugin capabilities](plugin-type-skills.md)
- [Build or reuse capabilities for your plugin](build-reuse-plugin.md)
- [Add custom skills with Agent Builder](agent-builder-add-skills.md)
- [Add custom skills with Agents Toolkit](build-declarative-agents-add-custom-skills.md)
