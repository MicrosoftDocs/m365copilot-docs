---
title: Custom skills in declarative agents (preview)
description: Learn what custom skills are in Microsoft 365 Copilot declarative agents, why to use them, and their limits, supported file types, sandbox, and governance options.
#customer intent: As an agent maker, I want to understand what custom skills are and their limits and governance so that I can decide when and how to add them to my declarative agent.
author: jasonjoh
ms.author: jasonjoh
ai-usage: ai-assisted
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 09/03/2026
---

# Custom skills in declarative agents (preview)

[!INCLUDE [preview-disclaimer-skills](includes/preview-disclaimer-skills.md)]

A *skill* is a modular capability that you add to a declarative agent to help it accomplish a specific task more reliably and repeatably. A skill is a file directory that contains a required `SKILL.md` file, plus optional resource files and scripts. The `SKILL.md` file holds the instructions that direct the model to complete the task.

Custom skills are a new, distinct component of a declarative agent. In earlier guidance, the word *skills* referred to task descriptions that you wrote inline within an agent's instructions. Custom skills replace that approach: instead of writing task detail directly in the instructions, you package it as a separate component that the agent references. For guidance on how instructions should reference skills, see [Write effective instructions for declarative agents](declarative-agent-instructions.md).

You can add custom skills to a declarative agent by using [Agent Builder](agent-builder.md) or [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit).

## What is a skill

A skill is a directory with the following contents:

- A required `SKILL.md` file that contains:
  - A skill name and description in the YAML front matter.
  - Skill instructions, which must be under 20,000 characters.
- Optional resource files, such as templates, reference data, or definitions.
- Optional scripts and supporting folders.

For example, a finance team might build a quarterly business review skill that bundles the instructions for producing the review, scripts that transform data and generate charts, and assets such as financial models, KPI definitions, and branded slide templates. The agent uses the skill when a user asks for that task.

## Why use skills in declarative agents

Custom skills help you build more reliable, repeatable agent workflows:

- **Optimized context use and improved accuracy.** Skills use progressive disclosure: the model loads a skill's instructions and contents into context only when the task requires them. The agent's context stays focused even as its library of skills grows. Providing scripts, rather than relying on model-generated code, also brings more repeatability to your workflows.
- **Scale instructions without quality loss.** You can decompose complex instructions into modular, reusable skills. This approach lets you provide longer, more specific guidance without degrading instruction-following quality and without running into the 8,000-character limit on declarative agent instructions.
- **Package reusable assets.** You can package instructions, resources, and scripts together as a skill and integrate that capability into your declarative agent.
- **Enterprise-ready.** Scripts run in a secure sandbox, sensitivity labels on skill files are retained and honored, and admin governance is available.

## Support matrix

Some limits differ depending on whether you add the skill with Agent Builder or Agents Toolkit.

| Item                                  | Agent Builder                              | Agents Toolkit                                                     |
|:--------------------------------------|:-------------------------------------------|:-------------------------------------------------------------------|
| Maximum skills per agent              | 8                                          | 8                                                                  |
| Skill package                         | Compressed `.zip`, maximum 50 MB           | Skill directory; `.zip` isn't supported                            |
| Maximum file size                     | 25 MB per file                             | No skill-level limit; the complete app package is limited to 10 MB |
| Maximum files per package             | 350 files across all skills                | 350 files across all skills                                        |
| Build a skill from individual uploads | Not supported; upload the complete `.zip`  | Add or import the complete skill directory                         |
| Directory hierarchy                   | Maximum directory depth is 3               | Maximum directory depth is 3                                       |
| Reuse across agents                   | Not supported at this stage of the preview | Not supported at this stage of the preview                         |
<!-- TODO: Check on this last row -->

## Supported file and script types

A skill can include the following file types:

| Category                        | File types                                                                                                                                                                                                                                                  |
|:--------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Instructions and resource files | `.json`, `.xml`, `.yaml`, `.yml`, `.ini`, `.config`, `.utf8`, `.docx`, `.doc`, `.docm`, `.pdf`, `.txt`, `.rtf`, `.md`, `.ppt`, `.pptx`, `.ppsm`, `.xlsx`, `.xls`, `.xlsm`, `.csv`, `.tsv`, `.html`, `.htm`, `.png`, `.jpg`, `.jpeg`, `.gif`, `.bmp`, `.log` |
| Scripts and binaries            | `.py`, `.js`, `.mjs`, `.cjs`, `.ts`, `.mts`, `.sh`, `.bash`                                                                                                                                                                                                 |

## Script execution sandbox

Skill scripts run in a secure sandbox with the following limits:

| Capability                               | Support                                                                                                                  |
|:-----------------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| Internet or network access from scripts  | Not supported. The sandbox has no network access at runtime.                                                             |
| Package installation                     | Not supported. A skill can't install packages at runtime.                                                                |
| Authenticated network calls from scripts | Not supported.                                                                                                           |
| Preinstalled packages                    | A skill can use packages already present in the sandbox. Don't depend on a package unless its availability is confirmed. |
| Connectors, API plugins, and MCP servers | The agent can use enabled capabilities through the orchestrator. Scripts can't call them through the sandbox.            |

## Sensitivity and storage

| Item               | Support                                                                                                                              |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------|
| Sensitivity labels | The sandbox retains sensitivity labels and honors label policies. It doesn't support user-defined permissions or Double Key Encryption. |
| Storage            | The system stores uploaded skill files in tenant-scoped SharePoint Embedded containers.                                                     |

## Known issues

During the preview, you might encounter the following behavior:

- **Skills and embedded files can't be combined yet.** Agents that have both skills and embedded files aren't supported yet. Support is planned.

## Related content

- [Add custom skills to your declarative agent in Agent Builder](agent-builder-add-skills.md)
- [Add custom skills to a declarative agent created with Microsoft 365 Agents Toolkit](build-declarative-agents-add-custom-skills.md)
