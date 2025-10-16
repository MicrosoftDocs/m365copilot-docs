# Tutorial article template

This template is used for documenting step-by-step tutorials for Microsoft 365 Copilot extensibility. It provides a consistent structure for conceptual and how-to guidance.

## Usage

Use this template for new tutorial articles that guide users through a process or workflow. Example topics include building agents, adding capabilities, or integrating APIs.

### Examples

- [Tutorial: Create declarative agents using Microsoft 365 Agents Toolkit](../docs/build-declarative-agents.md)
- [Add skills to a declarative agent created with Microsoft 365 Agents Toolkit](../docs/build-declarative-agents-add-skills.md)

## Template

Any text surrounded by curly braces (`{}`) is a variable and should be replaced with values according to the following table.

| Variable name | Replace with value |
| ------------- | ------------------ |
| `tutorial-title` | The main title of the tutorial. |
| `description` | A concise summary of what the tutorial covers. |
| `author-github-username` | The author's GitHub username. |
| `author-ms-alias` | The author's Microsoft alias. |
| `date-of-publication` | The current date (or planned date of publication) in `mm/dd/yyyy` format. |

~~~md
---
title: {tutorial-title}
description: {description}
author: {author-github-username}
ms.author: {author-ms-alias}
ms.localizationpriority: medium
ms.date: {date-of-publication}
ms.topic: tutorial
---

# {tutorial-title}

{Short introduction describing the purpose and scope of the tutorial.}

> [!IMPORTANT]
> {Prerequisite or important context for the tutorial.}

## Prerequisites

- {List required tools, accounts, or setup steps.}

## {step-1-title}

1. {Instruction 1}
1. {Instruction 2}

```{filetype}
{Sample code or configuration, if needed.}
```

<!-- If including images, use this syntax -->
:::image type="content" source="{relative/path/to/image.png}" alt-text="{Descriptive alt text}":::

## {step-2-title}

1. {Instruction 1}
1. {Instruction 2}

<!-- Add more steps as needed -->

## Next step

> [!div class="nextstepaction"]
> {Link to the next tutorial or related content}
~~~

## Notes

- Replace all variables in curly braces with actual content.
- Use dashes (-) for unordered lists to comply with markdownlint rules.
- Ensure proper heading hierarchy and a single newline at the end of the file.
- Add images to `docs/assets/images/` and reference them as needed.
- Use includes for reusable content if applicable.
