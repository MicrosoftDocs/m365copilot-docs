---
title: Examples of Microsoft 365 Copilot declarative agent code interpreter capabilities.
description: See examples of what code interpreter can do when added to your Copilot declarative agents.
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 07/15/2025
---

# Code interpreter examples

The code interpreter capability allows declarative agents to write and run Python code in a sandboxed environment. This capability enables agents to solve complex tasks iteratively, such as data analysis, generating visualizations, and solving mathematical problems. It uses the reasoning model to write and run Python code, enabling users to solve complex math problems, analyze data, generate visualizations, and more. After the code runs, code interpreter outputs the results and the generated code. It can also produce images or files based on the scenario and accepts files as input for modifications and analysis.

With code interpreter, you can allow your users to:

- [Create graphs and charts](#create-graphs-and-charts)
- [Create data visualizations and QR Codes](#create-data-visualizations-and-qr-codes)
- [Create Synthetic data](#create-synthetic-data)
- [Solve complex math problems](#solve-complex-math-problems)
- [Modify uploaded images](#modify-uploaded-images)

## Create graphs and charts

This versatile capability can be used in a variety of ways. For example, users can prompt the agent to "Graph the first 20 numbers in a Fibonacci sequence", which produces a line graph like this:

:::image type="content" source="docs\assets\images\code-interpreter-examples\code-interpreter-fibonacci-graph.png" alt-text="Screenshot of a line graph showing the first 20 numbers of a Fibonacci sequence.":::

When the user clicks the `</> Code` button, the agent provides the corresponding Python code:

:::image type="content" source="docs\assets\images\code-interpreter-examples\code-interpreter-fibonacci-python.png" alt-text="Screenshot of the Python code for graphing the first 20 numbers of a Fibonacci sequence.":::

Users can also upload various types of data files to generate graphs and charts so they can visualize their data. For example, a user could upload a file with sales data and request a bar chart or line graph of the data. For example, the user prompt: *Create a bar chart and line graph of my uploaded sales data.* returns the following:

:::image type="content" source=docs\assets\images\code-interpreter-examples\code-interpreter-sales-data-bar-chart.png":::

and

:::image type="content" source=docs\assets\images\code-interpreter-examples\code-interpreter-sales-data-bar-line-graph.png":::

## Create data visualizations and QR Codes

The user prompt "Create a word cloud of top pet names" generates a word cloud that includes the top names, as shown in the following example.

:::image type="content" source="assets/images/code-interpreter-pet-word-cloud.png" alt-text="Word cloud response to the user prompt":::

## Create Synthetic data


## Solve complex math problems


## Modify uploaded images