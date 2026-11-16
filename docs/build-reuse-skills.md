---
title: Build or Reuse Skills for a Microsoft 365 Copilot Plugin
description: Build, configure, extend, or reuse the skills required by your Microsoft 365 Copilot plugin.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.topic: how-to
---

# Build or reuse skills

If you have a repeatable task and a target Microsoft experience, use this article to decide whether to build a skill or adapt existing skill content. Then, choose the product's authoring steps. You're in **Build or reuse**. Your outcome is a skill implementation with its dependencies and test evidence, ready for integration before **Package & test**.

## Reuse or extend a skill

For declarative agents, Agent Builder and Agents Toolkit don't support reuse across agents. Follow the support matrix in [Skills in declarative agents](declarative-agent-skills.md#support-matrix); don't assume that a skill attached to one agent can be shared with another.

Before you create a skill:

1. Review approved skills that already perform the required job.
1. Confirm that the target agent or Microsoft experience supports the skill format and capabilities.
1. Review its instructions, resources, scripts, tools, and data access.
1. Check the target experience's documented reuse limits before adapting existing skill content.
1. Confirm ownership, versioning, sharing, support, and update expectations.
1. Test the skill with representative inputs and expected outputs.

Create a new skill when no existing approved skill meets the requirement or the target experience doesn't support reuse.

## Choose the implementation path

Start with Work IQ Dev Tools for professional development. Choose the route for your target experience and project type; a shared `SKILL.md` format doesn't establish cross-agent reuse or publishing eligibility.

| Development approach | Skill artifact and scope | Start with |
|---|---|---|
| Work IQ Dev Tools | A top-level skill folder in a standalone plugin, or a skill added to an existing declarative-agent project. These are separate authoring routes. | [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/) and the route details below |
| Copilot Chat skill authoring and plugin distribution | Follow the product-specific authoring and distribution guidance. | [Build skills for Copilot Chat](build-copilot-chat-skills.md) |
| Agent Builder | A complete skill ZIP uploaded to a declarative agent, or a skill created from a description in Agent Builder. | [Add skills with Agent Builder](agent-builder-add-skills.md) |
| Microsoft 365 Agents Toolkit | A skill directory added to an existing declarative-agent project, not a standalone skill ZIP. | [Add skills with Agents Toolkit](build-declarative-agents-add-custom-skills.md) |
| Copilot Cowork | Skill folders registered in a Microsoft 365 app package. Use the Cowork package requirements and limits. | [Build plugins for Copilot Cowork](/copilot/cowork/cowork-plugin-development) |

### Match the artifact to its publishing route

Follow the publishing guidance for your artifact:

- **Standalone WIQD plugin:** [Share with selected users or submit to your organization's catalog](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/#publishing-and-existing-projects). Sharing isn't catalog publication.
- **Copilot Cowork package:** Follow [Publish to your tenant](/copilot/cowork/cowork-plugin-development#step-8-publish-to-your-tenant).
- **Declarative agent with skills:** Follow [Publish your agent](build-declarative-agents-add-custom-skills.md#publish-your-agent) for Microsoft Marketplace submission.

Support for one artifact doesn't establish publishing eligibility for every plugin package. Publication doesn't complete user access, consent, or connection setup.

GitHub Copilot can assist with skill instructions, supporting scripts, resources, tests, and repository changes. The target experience and authoring tool determine the supported skill format and runtime.

### Work IQ Dev Tools

WIQD provides two different skill-authoring routes.

- `wiqd plugin add skill` adds a top-level skill to a standalone plugin project. The plugin can be skill-only or combine the skill with supported agents or remote MCP connectors. Confirm the target product's support separately.
- `wiqd agent add skill` adds a skill to an existing declarative-agent project. This route uses the `agent-skills` feature flag, which is off by default.

Both routes create a `SKILL.md`-based capability, but they operate on different project types. In the WIQD plugin format, the skill name must match its folder name, and its description should include the phrases that activate it. See [What is a plugin?](https://microsoft.github.io/wiqd/concepts/plugins/) and the [plugin authoring reference](https://microsoft.github.io/wiqd/getting-started/plugin-reference/).

WIQD source validation (`wiqd plugin validate --mode source`) doesn't inspect skill content. After packaging, run `wiqd plugin validate --mode package --package-file "<path-to-existing-zip>"` with the actual ZIP path. Package validation uploads a captured copy of that ZIP to the Microsoft 365 validation service and might require authentication. Review the returned findings; a pass doesn't establish runtime behavior. See [Validation and MVL](https://microsoft.github.io/wiqd/concepts/validation-mvl/).

## Implement the skill

Complete the applicable work:

1. Define the job, inputs, expected outputs, boundaries, and success criteria.
1. Create or import the skill instructions.
1. Add the required supporting resources and scripts.
1. Configure any required tool, remote MCP server, API, identity, permission, or data dependency.
1. Confirm supported file types, script types, sandbox behavior, storage, and sensitivity requirements.
1. Test expected, ambiguous, unsupported, and failure scenarios.
1. Record the skill version, owner, dependencies, known limitations, and support process.

For skills used directly in Copilot Chat, see [Build skills for Copilot Chat](build-copilot-chat-skills.md). For current support and runtime constraints in declarative agents, see [Skills in declarative agents](declarative-agent-skills.md). For Copilot Cowork, see [Companion file limits](/copilot/cowork/cowork-plugin-development#companion-file-limits). Apply the requirements of every target host when you distribute a skill to more than one experience.

## Confirm that the skill is working

The skill is ready for integration when:

- The target agent or experience can load and use it.
- Its instructions perform the defined job consistently.
- Required resources, scripts, tools, and data are available.
- Permissions and external dependencies work in the development or test environment.
- Unsupported or failed operations produce understandable behavior.
- Ownership, versioning, limitations, and test evidence are recorded.

Continue with any other components in the plan. When they're complete, [integrate and test your components](integrate-test-plugin-components.md), then move to **Package & test** to [create the plugin package](package-plugin.md).

## Related content

- [Skills as plugin capabilities](plugin-type-skills.md)
- [Build or reuse capabilities for your plugin](build-reuse-plugin.md)
- [Add skills with Agent Builder](agent-builder-add-skills.md)
- [Toolkit-based skill walkthrough](build-declarative-agents-add-custom-skills.md)
