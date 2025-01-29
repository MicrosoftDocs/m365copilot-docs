---
title: Capabilities for Agents in Microsoft 365 Copilot
description: Learn about capabilities that you can add to your declarative agent and how to enable them.
author: lauragra
ms.author: lauragra
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 01/15/2025
---

# Add capabilities to your declarative agent

You can enhance the user experience of your declarative agent by adding capabilities. The **capabilities** element in the manifest reference and the **Capabilities** section in the Copilot Studio agent builder provide several options for you to unlock features for your users. This article describes the user capabilities that you can add to your agents.

## Code interpreter

Code interpreter is an advanced tool designed to solve complex tasks via Python code. It uses the reasoning model to write and run code, enabling users to solve complex math problems, analyze data, generate visualizations, and more. After the code runs, code interpreter outputs the results and generated code. It can also produce images or files based on the scenario, and accepts files as input for modifications and analysis.

> [!NOTE]
> Support for in-context agents that have code interpreter enabled varies by host.
> The code interpreter capability is only available to users in tenants that allow metered usage or users that have a Microsoft 365 Copilot license.

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

If you're using [Teams Toolkit and Visual Studio Code](build-declarative-agents.yml) to create your agent, to enable code interpreter, add the `CodeInterpreter` value to the **capabilities** property in your manifest reference, as shown in the following example.

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

## Image generator

The image generator capability enables declarative agents to generate images based on user prompts. Image generator uses the existing [Designer](https://designer.microsoft.com/) functionality to create visually appealing and contextually relevant graphics, and includes the following features:

- **Multiple image generation**: For each user prompt, the agent generates four images.
- **Interactive image options**: Users can click on each generated image to view it in full size. They can download, copy, or view content credentials for the full-size image. They can also click the side arrow to scroll through the four images.
- **Image modification**: Users can follow up with subsequent prompts to modify the original images without losing context. For example, first prompt: "Create a photo of a happy puppy running around in a yard." Second prompt: "Include a tennis ball."
- **Feedback mechanism**: Users can provide feedback on the generated images by giving a thumbs up or thumbs down. This helps improve the quality of future image generations.
- **Clipboard and sharing**: Users can copy the generated images to their clipboard to paste into other applications, or they can share the generated images directly from the interface.

> [!NOTE]
> The image generator capability is only available to users in tenants that allow metered usage or users that have a Microsoft 365 Copilot license.
 
### Image generator examples

The following examples show what users can do with the image generation capability in your agent.

**User prompt**: Create an image of a serene beach at sunset with palm trees and gentle waves.

The following image shows the result.

:::image type="content" source="assets/images/image-gen-beach-prompt.png" alt-text="Beach image response to the user prompt":::

**User prompt**: Design a flyer for a summer music festival and add a date for May 15, 2024.

The following image shows the result.

:::image type="content" source="assets/images/image-gen-flier-prompt.png" alt-text="Festival flyer image response to the user prompt":::

### Enable image generator

If you're using [Teams Toolkit and Visual Studio Code](build-declarative-agents.yml) to create your agent, to enable image generator in your agent, add the `GraphicArt` value to the **capabilities** property in your manifest reference, as shown in the following example.

> [!NOTE]
> You must be using [version 1.2](declarative-agent-manifest-1.2.md) or later of the declarative agent manifest schema to add the `GraphicArt` capability.


```json
{
  "capabilities": [
    {
      "name": "GraphicArt"
    }
  ]
}
```

If you're using [Copilot Studio agent builder](copilot-studio-agent-builder.md) to create your agent, on the **Configure** tab, under **Capabilities**, choose the toggle next to **Image generator**.

:::image type="content" source="assets/images/capabilities-toggle.png" alt-text="Screenshot of the Capabilities section of the agent builder":::

> [!NOTE]
> The image generator doesn't currently work in the test pane in Copilot Studio agent builder.

## Teams chat as knowledge

The Teams chat as knowledge capability enables agents to use Teams channels, meeting chats, and teams as a knowledge source. You can choose to specify up to five URLs to a combination of teams, channels, or meeting chats in the `channels_by_url` value, or you can leave the value blank to allow your agent to use all the user's Teams content, including channels, teams, meetings, and individual and group chats, as a knowledge source.

To get the URL for a Teams team or channel, choose the three dots (...) next to the team or channel name and choose **Get link to team** or **Get link to channel**. 

To get the URL for a Teams meeting, open the meeting, choose the arrow next to **Join**, and choose **Copy join link**.

Agents can return links to files shared in Teams messages, but they can't return links to files stored in a Teams channel, unless the agent also has the `OneDriveAndSharePoint` capability enabled, and the capability is [optimized for content retrieval](optimize-sharepoint-content.md).

### Enable Teams chat as knowledge

If you're using [Teams Toolkit and Visual Studio Code](build-declarative-agents.yml) to create your agent, to enable Teams chat as knowledge in your agent, add the `TeamsMessage` value to the **capabilities** property in your manifest reference, as shown in the following example.

> [!NOTE]
> You must be using [version 1.3](declarative-agent-manifest-1.3.md) of the declarative agent manifest schema to add the `TeamsMessage` capability.

```json
{
  "capabilities": [
    {
      "name": "TeamsMessages",
      "channels_by_url": [] 
    }
  ]
}
```

## Web search and web scoping

## Related content

- [Declarative agents overview](overview-declarative-agent.md)
- [Declarative agent manifest reference](declarative-agent-manifest.md)
