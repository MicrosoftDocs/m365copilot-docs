---
title: Add custom skills to your declarative agent in Agent Builder (preview)
description: Learn how to add custom skills to your declarative agent by uploading a skill package in Agent Builder.
#customer intent: As an agent maker, I want to add a custom skill package to my declarative agent in Agent Builder so that my agent can perform a specific packaged task reliably.
author: jasonjoh
ms.author: jasonjoh
ai-usage: ai-assisted
ms.topic: how-to
ms.service: copilot-studio
ms.subservice: agent-builder
ms.localizationpriority: medium
ms.date: 09/03/2026
---

# Add custom skills to your declarative agent in Agent Builder (preview)

A custom skill is a modular, reusable component that you add to a declarative agent to help it perform a specific packaged task. A skill is a directory that contains a required `SKILL.md` file with instructions, plus optional resource files and scripts. This article describes how to add a custom skill to your declarative agent by uploading a skill package in Agent Builder.

To learn what custom skills are, why to use them, and the full support matrix, supported file types, sandbox behavior, and governance, see [Custom skills in declarative agents](declarative-agent-skills.md).

[!INCLUDE [preview-disclaimer-skills](includes/preview-disclaimer-skills.md)]

## Prerequisites

- A qualifying Microsoft 365 Copilot license, or access through pay-as-you-go.
- Your organization must be enrolled in the Microsoft Frontier Program.

> [!NOTE]
> In Agent Builder, you can add up to eight skills per agent, and each skill package is a compressed `.zip` file of up to 50 MB. For the full support matrix and limits, see [Custom skills in declarative agents](declarative-agent-skills.md#support-matrix).

## Create a skill from a description

You can ask Agent Builder to create a reusable skill from a natural-language description.

1. In [Copilot chat](https://m365.cloud.microsoft), select **Agents & Skills**, and then select **New agent**.

1. Select the **Message Agent Builder** text box and ask Agent Builder to create a reusable workflow.

    ```text
    Create an agent that helps my team write release notes. Add a reusable skill that always follows the same steps:

    1. Takes a list of merged changes (a pasted list or an uploaded  .csv  of PR titles).
    2. Groups them into Features, Fixes, and Other.
    3. Runs a script to format them into a clean Markdown changelog with a version heading and today's date.

    Package this as a skill with clear instructions and the formatting script so the output looks the same every time.
    ```

    :::image type="content" source="assets/images/agent-builder-screenshots/skills/create-agent-prompt.png" alt-text="A screenshot of Agent Builder prompt to create an agent":::

1. Review the agent in **Configure** to confirm a skill was created.

    :::image type="content" source="assets/images/agent-builder-screenshots/skills/skill-attached.png" alt-text="A screenshot of the Configure tab in Agent Builder showing a skill attached":::

1. Select the skill to review its details.

    :::image type="content" source="assets/images/agent-builder-screenshots/skills/skill-detail.png" alt-text="A screenshot of the details of the newly added skill":::

If the skill isn't added, you can explicitly add skills by [uploading a skill package](#upload-a-skill-package).

## Upload a skill package

To add a skill package, first create the package, and then upload it in Agent Builder.

### Create your skill package

Before you add a skill in Agent Builder, package the skill as a `.zip` file that contains:

- A required `SKILL.md` file.
- A skill name and description in the `SKILL.md` YAML front matter.
- Optional supported resource files.
- Optional supported scripts and supporting folders.
- Skill instructions under 20,000 characters.

Your package resembles the following directory structure:

```text
my-skill.zip
|-- SKILL.md              # required
|-- <resource files>      # optional
`-- <scripts or folders>  # optional
```

For the supported file and script types, see [Supported file and script types](declarative-agent-skills.md#supported-file-and-script-types).

> [!IMPORTANT]
> Upload the complete `.zip` package. Don't upload `SKILL.md` by itself.

### Upload your skill package

1. Open or create a declarative agent in Agent Builder.
1. Open **Configure**, expand **Skills**, and then select **Add**.

    :::image type="content" source="assets/images/agent-builder-screenshots/skills/add-skill.png" alt-text="A screenshot of the Add button in the Skills section of the Agent Builder Configure pane":::

1. Upload the complete `.zip` skill package.
1. Review the skill name, description, instructions, and included files.
1. Open **Preview** and try a prompt that should use the skill.

## Related content

- [Custom skills in declarative agents](declarative-agent-skills.md)
