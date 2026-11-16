---
title: Add skills to a declarative agent created with Microsoft 365 Agents Toolkit
description: Learn how to add skills to a declarative agent by using the Microsoft 365 Agents Toolkit CLI or Visual Studio Code extension.
#customer intent: As a developer, I want to add a skill to my declarative agent with the Agents Toolkit so that I can package reusable instructions, resources, and scripts into my agent.
author: jasonjoh
ms.author: jasonjoh
ai-usage: ai-assisted
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/16/2026
---

# Add skills to a declarative agent created with Microsoft 365 Agents Toolkit

[!INCLUDE [agents-toolkit-dev-tools-tip](includes/agents-toolkit-dev-tools-tip.md)]

[!INCLUDE [skills-restrictions](includes/skills-restrictions.md)]

A skill is a modular component that you add to a declarative agent to package instructions, resources, and scripts for a specific task. During **Build or reuse**, use this article when your chosen project already uses Microsoft 365 Agents Toolkit (ATK). You finish with a skill registered in the agent, saved task instructions, and a provisioned test version.

For a new professional-developer plugin project, start with [Work IQ Dev Tools](quickstart-plugin.md) and a [documented environment](choose-plugin-development-tools.md#choose-your-environment). Keep this Toolkit procedure when its project controls fit your selected agent route; it isn't a requirement for every plugin.

To learn what skills are, why to use them, and the full support matrix, supported file types, sandbox behavior, and governance, see [Skills in declarative agents](declarative-agent-skills.md).

This guide adds agent-scoped skills. To distribute a skill for use directly in Copilot Chat through a plugin, see [Build skills for Copilot Chat](build-copilot-chat-skills.md#package-a-skill-in-a-plugin).

> [!IMPORTANT]
> This guide assumes you completed the [Create declarative agents by using Microsoft 365 Agents Toolkit and JSON](build-declarative-agents.md) tutorial. Adding a skill requires declarative agent manifest version 1.9. If you're using an agent created with an older version of Agents Toolkit, you might need to update the version of your agent manifest. For more information, see [Declarative agent manifest reference](declarative-agent-manifest-1.9.md).

## Prerequisites

- [Microsoft 365 Agents Toolkit CLI](/microsoftteams/platform/toolkit/microsoft-365-agents-toolkit-cli) or the [Microsoft 365 Agents Toolkit Visual Studio Code extension](/microsoftteams/platform/toolkit/agents-toolkit-fundamentals)

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

**Verify:** The restarted tool process sees `TEAMSFX_AGENT_SKILLS` set to `true`. A user-level Windows setting doesn't change a process that was already running.

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

    **Verify:** The project contains the skill directory and `SKILL.md`, and the declarative-agent manifest references that skill. Follow the [support matrix](declarative-agent-skills.md#support-matrix); this import option doesn't establish reuse across agents.

1. Edit the skill's `SKILL.md` with the task instructions, resources, and supported scripts.

    **Verify:** The saved file retains its required metadata and describes the task, expected output, and boundaries.

1. Provision the declarative agent to make it available in your environment:

    ```powershell
    atk provision --env local
    ```

    **Verify:** Provisioning succeeds for the intended tenant and environment. Test the skill's task in the intended agent; provisioning success doesn't establish runtime behavior.

### [Visual Studio Code](#tab/vscode)

1. Open your agent project in Visual Studio Code.

    **Verify:** The workspace is the intended existing Toolkit agent project.

1. Select **Microsoft 365 Agents Toolkit**, and then select **Add Skill** in the Agents Toolkit pane on the left.

    :::image type="content" source="assets/images/declarative-agents/skills/toolkit-add-skill.png" alt-text="A screenshot of the Add Skill button in the Microsoft 365 Agents Toolkit pane":::

    **Verify:** The skill authoring prompt opens for this project.

1. Select **Create a new skill**.

    :::image type="content" source="assets/images/declarative-agents/skills/toolkit-create-a-new-skill.png" alt-text="A screenshot of the Agents Toolkit prompt to create a new skill":::

    **Verify:** The tool requests details for a new skill.

1. Enter a name for the skill, and then enter a description.

    **Verify:** The name and description identify the intended task and when to use it.

1. Review the scope offered by the tool and choose the option appropriate to the target agent and supported distribution route.

    **Verify:** The selection matches your plan. A scope option doesn't establish compatibility with every Copilot surface or support for cross-agent reuse.

1. Select **manifest.json** when prompted for the manifest, and then select **Add**.

    **Verify:** The selected app manifest belongs to this project and the tool adds the skill files and reference.

1. Open the declarative-agent manifest referenced by **manifest.json** and ensure that its version is set to `v1.9`.

    **Verify:** The declarative-agent manifest, rather than the app manifest's separate schema version, meets the required version.

1. Open the **./appPackage/skills/your-skill-name/SKILL.md** (replace **your-skill-name** with the name of your skill).

    **Verify:** The agent's new skill registration references this file.

1. Add your instructions to **SKILL.md** and save the file.

    **Verify:** The saved instructions define the task, expected output, and boundaries, and retain required skill metadata.

1. Select **Provision** in the left pane to make the declarative agent available in your environment.

    **Verify:** Provisioning succeeds for the intended tenant and environment. Test the task in the target agent before treating the skill as ready.

---

## Limits

In the Agents Toolkit, you add a skill as a directory (you can't use `.zip`), and the complete app package is limited to 10 MB. You can add up to eight skills per agent, with a maximum directory depth of three and up to 350 files across all skills. For the full support matrix, see [Skills in declarative agents](declarative-agent-skills.md#support-matrix).

## Publish your agent

Independent software vendors (ISVs) can submit declarative agents that include skills to Microsoft Marketplace. Use Work IQ Dev Tools to validate and build the submittable package from an existing declarative agent project. For the public third-party path, Work IQ Dev Tools doesn't submit the offer on your behalf. Use Partner Center to upload the package, complete the store listing, and submit the offer for certification.

Use the [WIQD agent component lifecycle](https://microsoft.github.io/wiqd/concepts/agent-lifecycle/) for the existing source project and the [Microsoft Marketplace submission guide](/partner-center/marketplace-offers/add-in-submission-guide) for common Partner Center steps. Follow the confirmed agent submission route, not an Office Add-in example or an assumed offer type for composed plugins.

## Next step

Enter **Package & test** with [Integrate and test your components](integrate-test-plugin-components.md). When the agent is ready for public distribution, continue to [Publish through Microsoft Marketplace](publish-plugin-publicly.md).

## Related content

- [Skills in declarative agents](declarative-agent-skills.md)
- [Add skills to your declarative agent in Agent Builder](agent-builder-add-skills.md)
- [Declarative agent manifest reference](declarative-agent-manifest-1.9.md)
