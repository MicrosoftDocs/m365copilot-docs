---
title: Add the code interpreter capability to your declarative agent
description: Learn about the code interpreter capability and how to can add to your declarative agents.
author: kmkoenen   
ms.author: v-koenenkaty
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 5/14/2025
---

# Add the code interpreter capability to your agent

You can enhance the user experience of your declarative agent by adding the code interpreter and image generator capabilities. The [**capabilities** element](/microsoft-365-copilot/extensibility/declarative-agent-manifest-1.3#capabilities-object) in the manifest reference and the **Capabilities** section in the Copilot Studio agent builder provide several options for you to unlock features for your users. This article describes the code interpreter capability and how to add it to your declarative agents. For information about the image generator capability, see [Add the image generator capability to your agent](capability-image-generator.md).

The following table shows the Microsoft 365 Copilot license or metered usage requirements for accessing agents that use the code interpreter capability.

## Code interpreter

Code interpreter is an advanced tool designed to solve complex tasks via Python code. It uses the reasoning model to write and run code, enabling users to solve complex math problems, analyze data, generate visualizations, and more. After the code runs, code interpreter outputs the results and generated code. It can also produce images or files based on the scenario, and accepts files as input for modifications and analysis.

> [!NOTE]
> Support for in-context agents that have code interpreter enabled varies by host.

### Code interpreter examples

#### Data graphing

The user prompt "Graph the first 20 numbers in a Fibonacci sequence" generates both a line graph and, when the user clicks the `</> Code` button, provides the corresponding Python code.

The following images show examples of the results of a data graphing request.

:::image type="content" source="assets/images/code-interpreter-python-1.png" alt-text="Graph response to the user prompt":::

:::image type="content" source="assets/images/code-interpreter-python-2.png" alt-text="Python code response to the user prompt":::

#### Data visualization

The user prompt "Create a word cloud of top pet names" generates a word cloud that includes the top names, as shown in the following example.

:::image type="content" source="assets/images/code-interpreter-pet-word-cloud.png" alt-text="Word cloud response to the user prompt":::

### Enable code interpreter

If you're using [Teams Toolkit and Visual Studio Code](build-declarative-agents.yml) to create your agent, to enable code interpreter, add the `CodeInterpreter` value to the **capabilities** property in your manifest file, as shown in the following example.

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

If you're using [Copilot Studio agent builder](copilot-studio-agent-builder.md) to create your agent, on the **Configure** tab, under **Capabilities**, choose the toggle next to **Code interpreter**.

:::image type="content" source="assets/images/capabilities-toggle.png" alt-text="Screenshot of the Capabilities section of the agent builder":::

## Related content

- [Declarative agents overview](overview-declarative-agent.md)
- [Declarative agent manifest reference](declarative-agent-manifest-1.3.md)
- [Add the image generator capability to your agent](add-capability-image-generator.md)
- [Add knowledge sources to your declarative agent](add-knowledge-sources.mg)

