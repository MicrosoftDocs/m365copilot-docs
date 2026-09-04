---
title: Add custom skills to a declarative agent created with Microsoft 365 Agents Toolkit (preview)
description: Learn how to add custom skills to a declarative agent by using the Microsoft 365 Agents Toolkit CLI or Visual Studio Code extension.
#customer intent: As a developer, I want to add a custom skill to my declarative agent with the Agents Toolkit so that I can package reusable instructions, resources, and scripts into my agent.
author: jasonjoh
ms.author: jasonjoh
ai-usage: ai-assisted
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 09/03/2026
---

# Add custom skills to a declarative agent created with Microsoft 365 Agents Toolkit (preview)

[!INCLUDE [preview-disclaimer-skills](includes/preview-disclaimer-skills.md)]

A custom skill is a modular, reusable component that you add to a declarative agent to package instructions, resources, and scripts for a specific task. This article describes how to add a custom skill to a declarative agent by using the Microsoft 365 Agents Toolkit (ATK) command-line interface (CLI) or the Visual Studio Code extension.

To learn what custom skills are, why to use them, and the full support matrix, supported file types, sandbox behavior, and governance, see [Custom skills in declarative agents](declarative-agent-skills.md).

> [!IMPORTANT]
> This guide assumes you completed the [Create declarative agents using Microsoft 365 Agents Toolkit](build-declarative-agents.md) tutorial. Adding a custom skill requires declarative agent manifest version 1.9. If your using an agent created with an older version of the Agents Toolkit, you might need to update the version of your agent manifest. <!--For more information, see [Declarative agent manifest reference](declarative-agent-manifest-1.9.md).-->

## Prerequisites

- [Microsoft 365 Agents Toolkit CLI](/microsoftteams/platform/toolkit/microsoft-365-agents-toolkit-cli) or the [Microsoft 365 Agents Tookit Visual Studio Code extension](/microsoftteams/platform/toolkit/agents-toolkit-fundamentals)

### Enable agent skills

Agent skills support is controlled by the `TEAMSFX_AGENT_SKILLS` environment variable. Set it before you launch the CLI or Visual Studio Code.

- **Windows (PowerShell)** - To persist the variable across sessions, add it to your user environment variables:

    ```powershell
    [System.Environment]::SetEnvironmentVariable("TEAMSFX_AGENT_SKILLS", "true", "User")
    ```

- **macOS or Linux** - Set the variable:

    ```bash
    export TEAMSFX_AGENT_SKILLS=true
    ```

    To persist the variable, add the `export` line to your `~/.bashrc`, `~/.zshrc`, or equivalent shell profile.

If you set the variable after you install the Visual Studio Code extension, restart Visual Studio Code completely.

## Add a skill to your agent

### [CLI](#tab/cli)

1. In your existing project, add a skill. To create a new skill, provide a name and description:

    ```powershell
    atk add skill --name skill-name --description description
    ```

    To add an existing skill folder, use the `--from` option:

    ```powershell
    atk add skill --from PATH_TO_SKILL
    ```

1. Provision the declarative agent to make it available in your environment:

    ```powershell
    atk provision --env local
    ```

### [Visual Studio Code](#tab/vscode)

1. Open your agent project in Visual Studio Code.
1. Select **Microsoft 365 Agents Toolkit**, and then select **Add Skill** in the Agents Toolkit pane on the left.

    :::image type="content" source="assets/images/declarative-agents/skills/toolkit-add-skill.png" alt-text="A screenshot of the Add Skill button in the Microsoft 365 Agents Toolkit pane":::

1. Select **Create a new skill**.

    :::image type="content" source="assets/images/declarative-agents/skills/toolkit-create-a-new-skill.png" alt-text="A screenshot of the Agents Toolkit prompt to create a new skill":::

1. Enter a name for the skill, and then enter a description.
1. Choose whether you want to keep the skill scoped to this agent only or expose it to all Copilot surfaces.
1. Select **manifest.json** when prompted for the manifest, and then select **Add**.
1. Open **manifest.json** and ensure that the declarative agent manifest version is set to **1.9**.
1. Open the **./appPackage/skills/your-skill-name/SKILL.md** (replace **your-skill-name** with the name of your skill).
1. Add your instructions to **SKILL.md** and save the file.
1. Select **Provision** in the left pane to make the declarative agent available in your environment.

## Limits and known issues

In the Agents Toolkit, you add a skill as a directory (you can't use `.zip`), and the complete app package is limited to 10 MB. You can add up to eight skills per agent, with a maximum directory depth of three and up to 400 files across the skill directory. For the full support matrix and known issues, see [Custom skills in declarative agents](declarative-agent-skills.md#support-matrix).

## Related content

- [Custom skills in declarative agents](declarative-agent-skills.md)
- [Declarative agent manifest reference](declarative-agent-manifest-1.9.md)
- [Add custom skills to your declarative agent in Agent Builder](agent-builder-add-skills.md)
