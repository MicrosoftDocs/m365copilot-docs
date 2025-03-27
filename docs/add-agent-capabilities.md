---
title: Knowledge and Capabilities for Agents in Microsoft 365 Copilot
description: Learn about capabilities that you can add to your declarative agent and how to enable them.
author: lauragra
ms.author: lauragra
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 03/24/2025
---

# Add capabilities and knowledge sources to your declarative agent

You can enhance the user experience of your declarative agent by adding capabilities. The [**capabilities** element](/microsoft-365-copilot/extensibility/declarative-agent-manifest-1.3#capabilities-object) in the manifest reference and the **Capabilities** and **Knowledge** sections in the Copilot Studio agent builder provide several options for you to unlock features for your users. This article describes the capabilities and knowledge sources that you can add to your agents.

The following table shows which capabilities and knowledge sources you can configure by using agent builder or Teams Toolkit and whether a your users require a Microsoft 365 Copilot license or metered usage to access the agent.

| Capability or knowledge source | Agent builder | Teams Toolkit | License or metered usage required? |
|:-------------------------------|:--------------|:--------------|:-----------------------------------|
| Code interpreter | :white_check_mark: | :white_check_mark: | No |
| Image generator | :white_check_mark: | :white_check_mark: | No |
| Microsoft Graph connectors | :white_check_mark: | :white_check_mark: | Yes |
| SharePoint and OneDrive | :white_check_mark:| :white_check_mark: | Yes |
| Web search | :white_check_mark: | :white_check_mark: | No |
| Scoped web search | :white_check_mark: | :white_check_mark: | Yes |
| Dataverse | :x: | :white_check_mark:\* | Yes |
| People | :x: | :white_check_mark: | Yes |
| Teams messages | :x: | :white_check_mark:\* | Yes |

\* Option to scope the knowledge is available.

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

## Image generator

The image generator capability enables declarative agents to generate images based on user prompts. Image generator uses the existing [Designer](https://designer.microsoft.com/) functionality to create visually appealing and contextually relevant graphics, and includes the following features:

- **Multiple image generation**: For each user prompt, the agent generates four images.
- **Interactive image options**: Users can click on each generated image to view it in full size. They can download, copy, or view content credentials for the full-size image. They can also click the side arrow to scroll through the four images.
- **Image modification**: Users can follow up with subsequent prompts to modify the original images without losing context. For example, first prompt: "Create a photo of a happy puppy running around in a yard." Second prompt: "Include a tennis ball."
- **Feedback mechanism**: Users can provide feedback on the generated images by giving a thumbs up or thumbs down. This helps improve the quality of future image generations.
- **Clipboard and sharing**: Users can copy the generated images to their clipboard to paste into other applications, or they can share the generated images directly from the interface.

 
### Image generator examples

The following examples show what users can do with the image generation capability in your agent.

**User prompt**: Create an image of a serene beach at sunset with palm trees and gentle waves.

The following image shows the result.

:::image type="content" source="assets/images/image-gen-beach-prompt.png" alt-text="Beach image response to the user prompt":::

**User prompt**: Design a flyer for a summer music festival and add a date for May 15, 2024.

The following image shows the result.

:::image type="content" source="assets/images/image-gen-flier-prompt.png" alt-text="Festival flyer image response to the user prompt":::

### Enable image generator

If you're using [Teams Toolkit and Visual Studio Code](build-declarative-agents.yml) to create your agent, to enable image generator in your agent, add the `GraphicArt` value to the **capabilities** property in your manifest file, as shown in the following example.

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

## Microsoft Graph connectors

Microsoft Graph connectors enable you to add organizational data to your agent as grounding information. You can use Microsoft Graph connectors to ingest your line-of-business data into Microsoft Graph and Copilot can reason over your data as grounding information in responses to user prompts. For more information, see [Microsoft Graph connectors for Microsoft 365 Copilot](overview-graph-connector.md).

For information about how to add Microsoft Graph connectors as knowledge to your agent manifest in Teams Toolkit, see [Microsoft Graph connectors object](declarative-agent-manifest-1.3.md#microsoft-graph-connectors-object).

For information about how to add Microsoft Graph connectors to your agent in Copilot Studio agent builder, see [Microsoft Graph connectors](copilot-studio-agent-builder-build.md#microsoft-graph-connectors).

## SharePoint and OneDrive as knowledge

When you configure your agent to use OneDrive and SharePoint content as knowledge, Copilot searches SharePoint and OneDrive sites that a user has access to for grounding information.

For information about how to add the OneDrive and SharePoint as knowledge capability to your agent manifest in Teams Toolkit, see [OneDrive and SharePoint object](declarative-agent-manifest-1.3.md#onedrive-and-sharepoint-object).

For information about how to enable the OneDrive and SharePoint as knowledge capability to your agent in Copilot Studio agent builder, see [Add knowledge sources](copilot-studio-agent-builder-build.md#add-knowledge-sources).

## Web and scoped web search

The web search capability enables agents to use the search index in Bing to respond to user prompts. If you enable web search in your agent, you can have your agent return any web data in its responses. You can also scope the web search to up to four public websites.

> [!NOTE]
> You must be using [version 1.2](declarative-agent-manifest-1.2.md) or later of the declarative agent manifest schema to add scoped web search to your agent.

### Enable web and scoped web search

If you're using [Teams Toolkit and Visual Studio Code](build-declarative-agents.yml) to create your agent, to enable web search, you add the `WebSearch` value to the **capabilities** property in your manifest file. If you want to scope your web search to specific sites,  add the **sites** property and specify up to four URLs, as shown in the following example.

```json
{
    "capabilities": [ 
        { 
          "name": "WebSearch", 
          "sites": [ 
            { 
              "url": "cnn.com" 
            }, 
          ] 
        } 
     ] 
} 
```

If you're using [Copilot Studio agent builder](copilot-studio-agent-builder.md) to create your agent, on the **Configure** tab, under **Knowledge**, list the website URLs that you want to reference.

## Dataverse knowledge

Dataverse knowledge allows agents to respond in natural language to user queries about their CRM data or data from tables in Microsoft Dataverse. This capability allows you to add a Dataverse instance as a knowledge source and to add synonyms and a glossary to help the system better interpret customized data in your tables. For more information, see [Add a dataverse knowledge source](/microsoft-copilot-studio/knowledge-add-dataverse).

> [!NOTE]
> Dataverse knowledge is not currently available in Copilot Studio agent builder.

### Enable Dataverse knowledge

If you're using [Teams Toolkit and Visual Studio Code](build-declarative-agents.yml) to create your agent, to enable Dataverse knowledge, add the `Dataverse` value to the **capabilities** property in your agent manifest file, as shown in the following example.

> [!NOTE]
> You must be using [version 1.3](declarative-agent-manifest-1.3.md) of the declarative agent manifest schema to add the `Dataverse` capability.

```json
    {
      "capabilities": [
        {
          "name": "Dataverse",
          "knowledge_sources": [ 
            { 
              "host_name": "organization.crm.dynamics.com", 
              "skill": "DVCopilotSkillName",
              "tables": [ 
                { 
                    "table_name": "account" 
                }, 
                { 
                    "table_name": "opportunity" 
                } 
             ] 
            } 
          ] 
        }
      ]
    }
```



## People knowledge

The people capability allows you to scope your agent to answer questions about individuals in an organization. For example, your agent can respond to queries such as "How do I contact \<person\>" or "List the direct reports of \<person\>". This capability is not scoped.

> [!NOTE]
> People knowledge is not currently available in Copilot Studio agent builder.

### Enable people knowledge

If you're using [Teams Toolkit and Visual Studio Code](build-declarative-agents.yml) to create your agent, to enable people knowledge, add the `People` value to the **capabilities** property in your agent manifest file, as shown in the following example.

> [!NOTE]
> You must be using [version 1.3](declarative-agent-manifest-1.3.md) of the declarative agent manifest schema to add the `People` capability.
>
```json
    "capabilities": [
        {
            "name":"People"
        }
      ]
```

## Teams messages as knowledge

The Teams messages capability allows agents to use Teams channels, meeting chats, group chats, 1:1 chats, and teams as a knowledge source. You can choose to specify up to five links to teams, channels, group, 1:1, or meeting chats to scope Copilot search, or you can allow your agent to use all the user's Teams content, including channels, teams, meetings, and individual and group chats, as knowledge sources.

Agents can return links to files shared in Teams messages, but they can't return links to files stored in a Teams channel, unless the agent also has the `OneDriveAndSharePoint` capability enabled. For information about how to optimize SharePoint content for Copilot, see [optimize SharePoint content retrieval](optimize-sharepoint-content.md).

### Enable Teams messages

If you're using [Teams Toolkit and Visual Studio Code](build-declarative-agents.yml) to create your agent, to enable the Teams messages capability, add the `TeamsMessage` value to the **capabilities** property in your manifest reference. If you want to scope Teams knowledge to up to five Teams resources, add the links to the **urls** property, as shown in the following example.

> [!NOTE]
> You must be using [version 1.3](declarative-agent-manifest-1.3.md) of the declarative agent manifest schema to add the `TeamsMessage` capability.

```json
{
  "capabilities": [
    {
      "name": "TeamsMessages",
      "urls": [] 
    }
  ]
}
```

#### Get the URL for team, channel, or meeting

To get the URL for a Teams team or channel, choose the three dots (...) next to the team or channel name and choose **Get link to team** or **Get link to channel**.

To get the URL for a Teams meeting, open the meeting, choose the arrow next to **Join**, and choose **Copy join link**.

#### Get the URL for group or 1:1 chat

To get the URL for a group or 1:1 chat, you need a deep link that includes the **chatId**. The deep link has the following format: `https://teams.microsoft.com/l/chat/<chatId>/conversations`. The **chatId** value is different for each chat.

To get the **chatId** value for a group or 1:1 chat:

1. In Microsoft Teams, go to any message in the chat.
2. Hover over the message and choose the three dots (...).
3. Select **Copy link**.  
4. Paste the link into Notepad or a similar application. The following example shows the format of a message link: `https://teams.microsoft.com/l/chat/19:12ab3c4d-a123-12a3-a123-123ab12c12de_12a3bcd4-1234-1234-123a-1b2345c678d9@unq.gbl.spaces//1743033793614?context=%7B%22contextType%22%3A%22chat%22%7D`.
5. Copy the segment of the URL that falls between `chat/` and the next `/`. The segment is generally prefaced with `19:`. This is the **chatId**. In the previous example, the **chatId** is `19:12ab3c4d-a123-12a3-a123-123ab12c12de_12a3bcd4-1234-1234-123a-1b2345c678d9@unq.gbl.spaces`.  
6. Add the **chatId** to the deep link. For example: `https://teams.microsoft.com/l/chat/19:12ab3c4d-a123-12a3-a123-123ab12c12de_12a3bcd4-1234-1234-123a-1b2345c678d9@unq.gbl.spaces/conversations`.

For more information, see [Deep link to Teams chat](/microsoftteams/platform/concepts/build-and-test/deep-link-teams).

## Related content

- [Declarative agents overview](overview-declarative-agent.md)
- [Declarative agent manifest reference](declarative-agent-manifest-1.3.md)
