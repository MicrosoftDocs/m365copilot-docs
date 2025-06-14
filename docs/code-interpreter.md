---
title: Code Interpreter Capability for Declarative Agents for Microsoft 365 Copilot.
description: Learn about the code interpreter capability and how to add it to your declarative agents.
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 5/09/2025
---

# Add the code interpreter capability to your agent

You can enhance the user experience of your declarative agent for Microsoft 365 Copilot by adding the code interpreter capability. The [**capabilities** element](declarative-agent-manifest-1.4.md#capabilities-object) in the manifest reference and the **Capabilities** section in the Copilot Studio agent builder provide several options for you to unlock features for your users. This article describes the code interpreter capability and how to add it to your declarative agents.

Code interpreter is an advanced tool designed to solve complex tasks via Python code. It uses the reasoning model to write and run code, enabling users to solve complex math problems, analyze data, generate visualizations, and more. After the code runs, code interpreter outputs the results and generated code. It can also produce images or files based on the scenario, and accepts files as input for modifications and analysis.

The code interpreter capability is available to Copilot Chat users with no metered usage or Microsoft 365 Copilot license.

> [!NOTE]
> Support for in-context agents that have code interpreter enabled varies by host.

## Code interpreter examples

### Data graphing

The user prompt "Graph the first 20 numbers in a Fibonacci sequence" generates both a line graph and, when the user clicks the `</> Code` button, provides the corresponding Python code.

The following images show examples of the results of a data graphing request.

:::image type="content" source="assets/images/code-interpreter-python-1.png" alt-text="Graph response to the user prompt":::

:::image type="content" source="assets/images/code-interpreter-python-2.png" alt-text="Python code response to the user prompt":::

### Data visualization

The user prompt "Create a word cloud of top pet names" generates a word cloud that includes the top names, as shown in the following example.

:::image type="content" source="assets/images/code-interpreter-pet-word-cloud.png" alt-text="Word cloud response to the user prompt":::

### Enable code interpreter

#### Microsoft 365 Agents Toolkit

If you're using [Agents Toolkit and Visual Studio Code](build-declarative-agents.md) to create your agent, to enable code interpreter, add the `CodeInterpreter` value to the **capabilities** property in your manifest file, as shown in the following example.

> [!NOTE]
> You must be using [version 1.2](declarative-agent-manifest-1.2.md) or later of the declarative agent manifest schema to add the `CodeInterpreter` capability.

```json
{
  "capabilities": [
    {
      "name": "CodeInterpreter"
    }
  ]
}
```

#### Copilot Studio agent builder

If you're using [Copilot Studio agent builder](copilot-studio-agent-builder.md) to create your agent, on the **Configure** tab, under **Capabilities**, choose the toggle next to **Code interpreter**.

:::image type="content" source="assets/images/capabilities-toggle.png" alt-text="Screenshot of the Capabilities section of the agent builder":::

## Related content

- [Declarative agents overview](overview-declarative-agent.md)
- [Declarative agent manifest reference](declarative-agent-manifest-1.4.md)
- [Add the image generator capability to your agent](image-generator.md)
- [Add knowledge sources to your declarative agent](knowledge-sources.md)
