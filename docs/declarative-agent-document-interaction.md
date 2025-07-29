---
title: Interact with documents in Microsoft 365 apps with a declarative agent
description: Learn how to interact with documents in Microsoft 365 apps with a declarative agent
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 04/09/2025
ms.topic: conceptual
---

# Interact with documents in Microsoft 365 apps with a declarative agent

When declarative agents are used in the Copilot experience in Microsoft 365 apps, they're able to interact with the open document. By default, agents can read the entire open document. Users can provide just a selected section of the open document to the agent, and agents can insert images into the open document.

> [!NOTE]
> [Accessing the document selection](#access-document-selection) is only supported in Word. [Accessing the entire open document](#access-the-entire-open-document) and [inserting images](#inserting-images) is supported in Word and PowerPoint.

## Access the entire open document

When the user references the open document in their prompt, the contents of the document are automatically added to the prompt, allowing the agent to access it without further user action. For example, the user could prompt the agent with "Summarize this document" or "Find any action items in this file."

### Document format

The format of the information provided to the agent varies depending on the type of file.

For Word documents, the context provided to the agent consists entirely of plain text content, including headings, body paragraphs, and list elements. The document's logical flow is preserved through sequential chunking, allowing the agent to infer the document structure based on textual patterns. Non-textual elements like tables, charts, images, page formatting, and styling aren't captured. Mentions of such visual objects along with adjoining metadata is available as part of context, but the agent doesn't have access to their actual content.

For PowerPoint presentations, the context provided to the agent includes all visible slide titles, body text, and flattened descriptions of tables and images where available. The slide flow and logical narrative are maintained through sequential indexing. Non-textual elements such as images, complex charts, background designs, transitions, hyperlinks, and detailed speaker notes aren't captured. As a result, while the agent can reason over the textual content and high-level descriptions of visual elements, it doesn't have access to rich media, detailed visual layouts, and structured graphical data.

### Using the open document in your agent

Declarative agents have access to the open document by default. No changes are required to your agent to enable support for this feature.

### Using the open document in API plugins

If your agent includes [API plugins](overview-api-plugins.md) as custom actions, the agent decides how much of the open document to send to the API based on your API description and the instructions given to the agent. For more information, see [API plugin considerations for document contents](#api-plugin-considerations-for-document-contents).

## Access document selection

The document selection feature allows users to provide the current selected section of the open document to the declarative agent. The user can ask the agent about the selection, or ask the agent to take action based on it.

For example, a user is working on a job description document, and wants to add an AI-generated image to the document to add some visual appeal. The user starts by selecting a section of the document as context for the image. Selecting a section of the document enables the **Add selection** button in the Copilot chat pane.

:::image type="content" source="assets/images/declarative-agents/add-document-selection.png" alt-text="A screenshot of Copilot in Word showing the Add selection option" lightbox="assets/images/declarative-agents/add-document-selection.png":::

The user selects **Add selection** then asks the agent to [generate an image](image-generator.md) based on the selection.

:::image type="content" source="assets/images/declarative-agents/document-selection-prompt.png" alt-text="A screenshot of Copilot in Word showing the user prompt including the document selection" lightbox="assets/images/declarative-agents/document-selection-prompt.png":::

The agent generates images and responds to the user.

:::image type="content" source="assets/images/declarative-agents/document-selection-result.png" alt-text="A screenshot of Copilot in Word showing the generated images" lightbox="assets/images/declarative-agents/document-selection-result.png":::

### Using document selection in your agent

Declarative agents have access to document selection by default. No changes are required to your agent to enable support for this feature.

### Using document selection in API plugins

If your agent includes [API plugins](overview-api-plugins.md) as custom actions, the agent can provide the document selection to the API. The agent translates the document selection based on your API specification.

#### API plugin considerations for document contents

For the entire document or user selection, the agent decides how to best pass the data to an API plugin. You should ensure that the document or user selection is translated appropriately for your API.

1. Begin by testing your agent without adding any special instructions to your agent. In most cases, the agent should translate the document contents or user selection appropriately for your API without any extra configuration.
1. If your agent doesn't translate appropriately for your API, add instructions in the plugin manifest's `reasoning` [state object](api-plugin-manifest-2.3.md#state-object) to instruct the agent on which form to choose.
1. Test various selections to verify your agent handles different types and lengths of content appropriately.

Here are some examples of instructions to influence how the agent translates the document contents or user selection. The actual instructions needed to get the desired result depend on your agent and your API.

##### Verbatim pass-through example

```md
You **MUST** pass the exact user's current selection without any modifications as part of the `text` param.
```

##### Summary/transformation example

```md
You **MUST** pass the short, summarized version of the user's current selection as `prompt`
instead of the entire selected document context.
```

##### Structured extraction example

```md
You **MUST** pass the structured version of the user's current selection as part of the `data` param.
You should get the required context from the user's current selection based on the user's query and
**MUST** structure the context in JSON format.
```

## Inserting images

The image insertion feature allows users to insert images from the agent into the open document. The image can be inserted at the current cursor position, at the top of the document, or at the bottom of the document.

For example, an agent that retrieves images from an external image repository can show the user a button to insert the image.

:::image type="content" source="assets/images/declarative-agents/image-insert.png" alt-text="A screenshot of Copilot in Word showing an agent with the insert image feature" lightbox="assets/images/declarative-agents/image-insert.png":::

### Inserting images from your agent

Enabling image insertion in a declarative agent requires an API plugin that uses [Adaptive Card response templates](api-plugin-adaptive-cards.md). The Adaptive Card template includes an `Action.InsertImage` action that the user selects to insert the image.

```json
{
  "type": "ActionSet",
  "actions": [
    {
      "type": "Action.InsertImage",
      "title": "Insert",
      "altText": "An image of people on the beach",
      "url": "https://contoso.com/images/beach.jpeg",
      // fallback MUST be set to "drop"
      "fallback": "drop",
      // Other valid values: "Top", "Bottom"
      "insertPosition": "Selection"
    }
  ]
}
```

> [!NOTE]
> Supported image types are .bmp, .gif, .jpeg, .jpg, and .png.

## Related content

- [API plugins for Microsoft 365 Copilot](overview-api-plugins.md)
- [API plugin manifest schema 2.3 for Microsoft 365 Copilot](api-plugin-manifest-2.3.md)
- [Adaptive Card response templates for API plugins for Microsoft 365 Copilot](api-plugin-adaptive-cards.md)
- [Adaptive Card documentation](https://adaptivecards.microsoft.com)
