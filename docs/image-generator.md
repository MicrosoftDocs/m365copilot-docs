---
title: Image Generator Capability for Declarative Agents for Microsoft 365 Copilot
description: Learn about the image generator capability and how to add it to your declarative agents.
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 09/11/2025
---

# Add the image generator capability to your agent

The image generator capability enables declarative agents for Microsoft 365 Copilot to generate images based on user prompts. Image generator uses the existing [Designer](https://designer.microsoft.com/) functionality to create visually appealing and contextually relevant graphics, and includes the following features:

- **Multiple image generation**: For each user prompt, the agent generates four images.
- **Interactive image options**: Users can select each generated image to view it in full size. They can download, copy, or view content credentials for the full-size image. They can also select the side arrow to scroll through the four images.
- **Image modification**: Users can follow up with subsequent prompts to modify the original images without losing context. For example, first prompt: "Create a photo of a happy puppy running around in a yard." Second prompt: "Include a tennis ball."
- **Feedback mechanism**: Users can provide feedback on the generated images by giving a thumbs up or thumbs down. This feedback helps improve the quality of future image generations.
- **Clipboard and sharing**: Users can copy the generated images to their clipboard to paste into other applications, or they can share the generated images directly from the interface.

The image generator capability is available to Copilot Chat users with no metered usage or Microsoft 365 Copilot license.

## Image generator examples

The following examples show what users can do with the image generation capability in your agent.

**User prompt**: Create an image of a serene beach at sunset with palm trees and gentle waves.

The following image shows the result.

:::image type="content" source="assets/images/image-gen-beach-prompt.png" alt-text="Beach image response to the user prompt":::

**User prompt**: Design a flyer for a summer music festival and add a date for May 15, 2024.

The following image shows the result.

:::image type="content" source="assets/images/image-gen-flier-prompt.png" alt-text="Festival flyer image response to the user prompt":::

## Enable image generator

### Agents Toolkit

If you're using [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) to create your agent, to enable image generator in your agent, add the `GraphicArt` value to the **capabilities** property in your manifest file, as shown in the following example.

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

### Copilot Studio

If you're the using [Copilot Studio](copilot-studio-lite.md) lite experience to create your agent, on the **Configure** tab, under **Capabilities**, choose the toggle next to **Image generator**.

:::image type="content" source="assets/images/capabilities-toggle.png" alt-text="Screenshot of the Capabilities section in Copilot Studio":::

> [!NOTE]
> The image generator doesn't currently work in the test pane within Copilot Studio.

## Related content

- [Declarative agents overview](overview-declarative-agent.md)
- [Declarative agent manifest reference](declarative-agent-manifest-1.6.md)
- [Add the code interpreter capability to your agent](code-interpreter.md)
- [Add knowledge sources to your declarative agent](knowledge-sources.md)
