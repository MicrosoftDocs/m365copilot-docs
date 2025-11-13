---
title: Code Interpreter Capability for Declarative Agents for Microsoft 365 Copilot
description: Find example that show you how to use the code interpreter capability and learn how to enable it in your declarative agents.
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 09/11/2025
---

# Add the code interpreter capability to your agent

You can enhance the user experience of your declarative agents for Microsoft 365 Copilot by adding the code interpreter capability. The [**capabilities** element](declarative-agent-manifest-1.5.md#capabilities-object) in the manifest reference, and the **Capabilities** section in Copilot Studio in Microsoft 365 Copilot, provide several options for you to unlock features for your users.

Code interpreter is an advanced tool designed to solve complex tasks via Python code. It uses the reasoning model to write and run code, enabling users to solve complex math problems, analyze data, generate visualizations, and more. After the code runs, code interpreter outputs the results and the related code that it generates. It can also produce images or files based on the scenario, and accepts files as input for modification and analysis.

The code interpreter capability is available to users with a Microsoft 365 Copilot license and Copilot Chat users without metered usage enabled.

> [!NOTE]
> Support for in-context agents that have code interpreter enabled varies by host.

## Enable code interpreter in Microsoft 365 Agents Toolkit

If you're using [Agents Toolkit and Visual Studio Code](build-declarative-agents.md) to create your agent and want to enable code interpreter, add the `CodeInterpreter` value to the **capabilities** property in your manifest file, as shown in the following example.

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

## Enable code interpreter in Copilot Studio

If you're using the [Copilot Studio lite experience](copilot-studio-lite.md) to create your agent and want to enable code interpreter, open the **Configure** tab and then, under **Capabilities**, choose the toggle next to **Create documents, charts, and code**.

:::image type="content" source="assets/images/capabilities-toggle.png" alt-text="Screenshot of the Capabilities section of Copilot Studio":::

## Code interpreter capability examples

The code interpreter capability uses the reasoning model to allow declarative agents to write and run Python code in a sandboxed environment. This capability lets users solve complex math problems, analyze data, generate visualizations, and more. After the code runs, code interpreter outputs the results and the generated code. It can also produce images and other files based on the scenario and accepts files as input for modification and analysis.

Adding code interpreter to your agents offers your users a broad range of functionality, including:

- [Data graphing](#create-graphs-and-charts)
- [Data QR codes and data visualizations](#create-qr-codes-and-data-visualizations)
- [Creating files containing synthetic data](#create-synthetic-data)
- [Solving complex math problems](#solve-complex-math-problems)
- [Modifying uploaded images](#modify-uploaded-images)

Copilot can also provide copyable and downloadable versions of the code it generates when running these tasks.

### Create graphs and charts

Users can employ agents that have code interpreter enabled to create graphs and charts. For example, in response to the prompt *Graph the first 20 numbers in a Fibonacci sequence*, Copilot produces the following line graph.

:::image type="content" source="assets/images/code-interpreter-examples/code-interpreter-fibonacci-line-graph.png" alt-text="Screenshot of a line graph showing the first 20 numbers of a Fibonacci sequence.":::

When the user selects the `</> Code` button, the agent provides the corresponding Python code.

:::image type="content" source="assets/images/code-interpreter-examples/code-interpreter-fibonacci-python.png" alt-text="Screenshot of the Python code for graphing the first 20 numbers of a Fibonacci sequence.":::

Users can also upload data files to generate graphs and charts so they can visualize their data. The supported file formats are Word, Excel, PowerPoint, PDF, CSV/TSV, and TXT/UTF8. For example, a user can upload an Excel file with sales data and enter the prompt: *Create a bar chart and line graph of my uploaded sales data.* The agent returns the following response.

:::image type="content" source="assets/images/code-interpreter-examples/code-interpreter-sales-data-bar-chart.png" alt-text="Bar chart of sample sales data":::

:::image type="content" source="assets/images/code-interpreter-examples/code-interpreter-sales-data-line-graph.png" alt-text="Line graph of sample sales data":::

### Create QR codes and data visualizations

With code interpreter enabled, users can create a variety of data visualizations such as QR codes and word clouds. For example, in response to the user prompt *Create a QR code for Microsoft's corporate website*, the agent presents both the corresponding URL and matching QR code.

:::image type="content" source="assets/images/code-interpreter-examples/code-interpreter-generated-qr-code.png" alt-text="QR code for Microsoft generated by Copilot":::

For a word cloud, the prompt *Create a word cloud of top pet names* generates an image that includes the most common names, as shown in the following example.

:::image type="content" source="assets/images/code-interpreter-examples/code-interpreter-pet-word-cloud.png" alt-text="Word cloud response to the user prompt":::

### Create synthetic data

When a user needs sample data to work with, by integrating code interpreter you make it possible for them to create synthetic data for a variety of purposes. The agent can generate the requested sample data and then output it as Word, Excel, PowerPoint, or PDF files. Following are example prompts and responses.

**Prompt:** *Create a table of 10 fake financial transactions including date, amount, merchant, and category.*

:::image type="content" source="assets/images/code-interpreter-examples/code-interpreter-synthetic-financials.png" alt-text="Table of synthetic financial transactions.":::

**Prompt:** *Generate 20 synthetic customer support chat transcripts about billing issues.*

:::image type="content" source="assets/images/code-interpreter-examples/code-interpreter-synthetic-chats.png" alt-text="Table of synthetic customer support chats.":::

### Solve complex math problems

When you add code interpreter to your agent, users can prompt your agent to solve complex math problems, as shown in the following example.

**Prompt:** *Provide the integral of the area under the curve for the function \( f(x) = x^3 - 4x^2 + 6x - 2 \) from \( x = 0 \) to \( x = 3 \).*

:::image type="content" source="assets/images/code-interpreter-examples/code-interpreter-integral-calc-and-graph.png" alt-text="Integral calculation for the area under a curve.":::

### Modify uploaded images

Integrating code interpreter also allows users to modify uploaded images. Agents with this capability can add banners and captions to images and can generate black and white versions of color images. (The following image was generated by Copilot.)

:::image type="content" source="assets/images/code-interpreter-examples/1934-bentley-copilot-image.png" alt-text="Image generated by Copilot of a 1934 Bentely 4 car.":::

To modify that image, the user can enter the prompt *Give me a black and white version of the attached image. Add a banner that says "1934 Bentley 4" and a caption that says "Image generated by Copilot."* The agent provides the following result.

:::image type="content" source="assets/images/code-interpreter-examples/1934-bentley-monochrome-result.png" alt-text="Black and white image of a 1934 Bentley 4 car, modified by Copilot.":::

## Related content

- [Declarative agents overview](overview-declarative-agent.md)
- [Declarative agent manifest reference](declarative-agent-manifest-1.5.md)
- [Add the image generator capability to your agent](image-generator.md)
- [Add knowledge sources to your declarative agent](knowledge-sources.md)
