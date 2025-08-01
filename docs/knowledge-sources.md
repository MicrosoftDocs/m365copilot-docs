---
title: Add knowledge sources to your declarative agent
description: Learn how to add knowledge sources to your declarative agents.
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 07/29/2025
---

# Add knowledge sources to your declarative agent

You can enhance the user experience of your declarative agent by adding capabilities like [code interpreter](code-interpreter.md) and [image generator](image-generator.md) and knowledge sources to enhance and customize your agent's knowledge. The [capabilities object](declarative-agent-manifest-1.5.md#capabilities-object) in the manifest reference and the **Knowledge** section in the Copilot Studio agent builder provide several options for you to unlock features for your users. This article describes the  knowledge sources that you can add to your agents.

The following table lists the capabilities and knowledge sources you can configure by using agent builder or [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) and indicates whether users require a Microsoft 365 Copilot license or metered usage to access agents with that capability or knowledge source.

| Capability or knowledge source | Agent builder | Agents Toolkit | License or metered usage required? |
|:-------------------------------|:--------------|:--------------|:-----------------------------------|
| Code interpreter | :white_check_mark: | :white_check_mark: | No |
| Image generator | :white_check_mark: | :white_check_mark: | No |
| Copilot connectors | :white_check_mark: | :white_check_mark: | Yes |
| SharePoint | :white_check_mark:| :white_check_mark: | Yes |
| OneDrive | :x: | :white_check_mark: | Yes |
| Embedded file content | :white_check_mark:| :x: | Yes |
| Web search | :white_check_mark: | :white_check_mark: | No |
| Scoped web search | :white_check_mark: | :white_check_mark: | No |
| Dataverse | :x: | :white_check_mark:\* | Yes |
| Email | :white_check_mark: | :white_check_mark:\* | Yes (license only) |
| People | :x: | :white_check_mark: | Yes (license only) |
| Teams messages | :white_check_mark: | :white_check_mark:\* | Yes (license only) |
| Meetings | :x: | :white_check_mark: | Yes (license only) |

\* Option to scope the knowledge is available.

## Copilot connectors

Microsoft 365 Copilot connectors (formerly Microsoft Graph connectors) enable you to add organizational data to your agent as grounding information. You can use Copilot connectors to ingest your line-of-business data into Microsoft Graph and Copilot can reason over your data as grounding information in responses to user prompts. For more information, see [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md).

For information about how to add Copilot connectors as knowledge to your agent manifest in Agents Toolkit, see [Copilot connectors object](declarative-agent-manifest-1.5.md#copilot-connectors-object).

For information about how to add Copilot connectors to your agent in Copilot Studio agent builder, see [Copilot connectors](copilot-studio-agent-builder-knowledge.md#copilot-connectors).

## SharePoint and OneDrive

When you configure your agent to use OneDrive and SharePoint content as knowledge, Copilot searches SharePoint and OneDrive files, folders, or sites that a user has access to for grounding information.

For information about how to add OneDrive and SharePoint knowledge to your agent manifest in Agents Toolkit, see [OneDrive and SharePoint object](declarative-agent-manifest-1.5.md#onedrive-and-sharepoint-object).

For information about how to add SharePoint knowledge to your agent in Copilot Studio agent builder, see [Add knowledge sources](copilot-studio-agent-builder-knowledge.md#sharepoint-content).

## Web and scoped web search

Web search enables agents to use the search index in Bing to respond to user prompts. If you enable web search in your agent, you can have your agent return any web data in its responses. You can also scope the web search to up to four public websites.

> [!IMPORTANT]
> Organization administrators can disable web search for Copilot and all agents inside their organization. If your administrators disable web search, agents with web search enabled don't report an error and don't include web searches in their knowledge. [Developer mode debug cards](debugging-copilot-agent.md) indicate that web search is enabled if the agent has enabled it, even if your administrators disabled it. For more information, see [Manage Microsoft 365 Copilot scenarios in the Microsoft 365 admin center](/copilot/microsoft-365/microsoft-365-copilot-page#web-search-for-microsoft-365-copilot-and-microsoft-copilot).

### Add web and scoped web search

If you're using [Agents Toolkit and Visual Studio Code](build-declarative-agents.md) to create your agent, to enable web search, you add the `WebSearch` value to the **capabilities** property in your manifest file. If you want to scope your web search to specific sites,  add the **sites** property and specify up to four URLs, as shown in the following example.

> [!NOTE]
> You must be using [version 1.2](declarative-agent-manifest-1.2.md) or later of the declarative agent manifest schema to add scoped web search to your agent.

```json
{
  "capabilities": [
    {
      "name": "WebSearch",
      "sites": [
        {
          "url": "cnn.com"
        }
      ]
    }
  ]
}
```

If you're using [Copilot Studio agent builder](copilot-studio-agent-builder.md) to create your agent, on the **Configure** tab, under **Knowledge**, list the website URLs that you want to reference.

## Embedded file content

If you're using [Copilot Studio agent builder](copilot-studio-agent-builder-build.md) to build your agent, you can upload files directly from your device or the cloud to embed the content for your agent to use as knowledge. The embedded file content is stored in [SharePoint Embedded](/sharepoint/dev/embedded/overview). These files count against the OneDrive and SharePoint capacity in your tenant.

> [!NOTE]
> The file upload feature is available to users with metered consumption enabled or with a Microsoft 365 Copilot license.

For more information about embedded files, see [Embedded file content in agent builder](copilot-studio-agent-builder-knowledge.md#embedded-file-content).

## Dataverse

Dataverse knowledge allows agents to respond in natural language to user queries about their CRM data or data from tables in Microsoft Dataverse. You can add a Dataverse instance as a knowledge source and add synonyms and a glossary to help the system better interpret customized data in your tables. For more information, see [Add a dataverse knowledge source](/microsoft-copilot-studio/knowledge-add-dataverse).

> [!NOTE]
> Dataverse knowledge isn't currently available in Copilot Studio agent builder.

### Add Dataverse knowledge

If you're using [Agents Toolkit and Visual Studio Code](build-declarative-agents.md) to create your agent, to enable Dataverse knowledge, add the `Dataverse` value to the **capabilities** property in your agent manifest file, as shown in the following example.

> [!NOTE]
> You must be using [version 1.3](declarative-agent-manifest-1.3.md) or later of the declarative agent manifest schema to add `Dataverse` knowledge.

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

## Email

Email knowledge allows you to scope your agent to a personal or shared mailbox, and optionally, a specific mailbox folder.

### Add email knowledge sources

If you're using [Copilot Studio agent builder](copilot-studio-agent-builder-build.md) to create your agent, on the **Configure** tab in the **Knowledge** section, choose **My emails**.

> [!NOTE]
> You can't currently scope your emails to a specific folder or shared mailbox when you use agent builder.

If you're using [Agents Toolkit and Visual Studio Code](build-declarative-agents.md) to create your agent, to add email knowledge, add the `Email` value to the **capabilities** property in your agent manifest file, as shown in the following example. You can reference multiple mailbox folders and only one shared folder.

> [!NOTE]
> You must be using [version 1.3](declarative-agent-manifest-1.3.md) or later of the declarative agent manifest schema to add `Email` knowledge.

```json
{
  "capabilities": [
    {
      "name": "Email",
      "shared_mailbox": "sample@service.microsoft.com",
      "folders": [
        {
          "folder_id": "inbox"
        }
      ]
    }
  ]
}
```

In the **folder_id** field, you can reference either well-known folder names or folder IDs. For a list of well-known folder names, see [mailFolder resource type](/graph/api/resources/mailfolder). To get a list of folder IDs, use the following query in [Graph Explorer](https://developer.microsoft.com/graph/graph-explorer):

`https://graph.microsoft.com/v1.0/me/mailFolders`

In the **shared_mailbox** field, use the SMTP address of the shared mailbox.

If you reference both a shared mailbox and a folder, the agent scopes responses to the folder within the shared mailbox. If you reference a folder only, the agent scopes responses to the contents of the folder within the personal mailbox.

If you don't reference a shared mailbox or a folder, the agent search isn't scoped to any folder or mailbox and it returns results from all email content, based on the user's query.

## People

People knowledge allows you to scope your agent to answer questions about individuals in an organization. For example, your agent can respond to queries such as "How do I contact \<person\>" or "List the direct reports of \<person\>". This knowledge source isn't scoped.

> [!NOTE]
> People knowledge isn't currently available in Copilot Studio agent builder.

### Add people knowledge source

If you're using [Agents Toolkit and Visual Studio Code](build-declarative-agents.md) to create your agent, to enable people knowledge, add the `People` value to the **capabilities** property in your agent manifest file, as shown in the following example.

> [!NOTE]
> You must be using [version 1.3](declarative-agent-manifest-1.3.md) or later of the declarative agent manifest schema to add the `People` knowledge source.
>
```json
{
  "capabilities": [
    {
      "name":"People"
    }
  ]
}
```

## Teams messages

You can configure agents to use Teams channels, meeting chats, group chats, and 1:1 chats as knowledge sources. You can choose to specify up to five links to channels, group, 1:1, or meeting chats to scope Copilot search, or you can allow your agent to use all the user's Teams content, including channels, meetings, and individual and group chats, as knowledge sources.

Agents can return links to files shared in Teams messages, but they can't return links to files stored in a Teams channel, unless the agent also has `OneDriveAndSharePoint` enabled. For information about how to optimize SharePoint content for Copilot, see [optimize SharePoint content retrieval](optimize-sharepoint-content.md).

### Add Teams messages knowledge sources

If you're using [Copilot Studio agent builder](copilot-studio-agent-builder-build.md) to create your agent, on the **Configure** tab, in the **Knowledge** section, select the search bar and choose **My Teams chats from groups, channels, and meetings.** To scope your agent to specific channel, meeting, or group chats, on the **Chats** tab, select the chats that you want to add as knowledge.

If you're using [Agents Toolkit and Visual Studio Code](build-declarative-agents.md) to create your agent, to enable Teams messages knowledge, add the `TeamsMessage` value to the **capabilities** property in your manifest reference. If you want to scope Teams knowledge to up to five Teams resources, add the links to the **urls** property, as shown in the following example.

> [!NOTE]
> You must be using [version 1.3](declarative-agent-manifest-1.3.md) or later of the declarative agent manifest schema to add the `TeamsMessage` knowledge source.

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

#### Get the URL for a channel or meeting

To get the URL for a Teams channel, choose the three dots (...) next to the channel name and choose **Get link to channel**.

To get the URL for a Teams meeting, open the meeting, choose the arrow next to **Join**, and choose **Copy join link**.

#### Get the URL for a group or 1:1 chat

To get the URL for a group or 1:1 chat, you need a deep link that includes the **chatId**. The deep link has the following format: `https://teams.microsoft.com/l/chat/<chatId>/conversations`. The **chatId** value is different for each chat.

To get the **chatId** value for a group or 1:1 chat:

1. In Microsoft Teams, go to any message in the chat.
2. Hover over the message and choose the three dots (...).
3. Select **Copy link**.
4. Paste the link into Notepad or a similar application. The link will look similar to the following URL: `https://teams.microsoft.com/l/chat/19:12ab3c4d-a123-12a3-a123-123ab12c12de_12a3bcd4-1234-1234-123a-1b2345c678d9@unq.gbl.spaces//1743033793614?context=%7B%22contextType%22%3A%22chat%22%7D`.
5. Copy the segment of the URL that falls between `chat/` and the next `/`. The segment is generally prefaced with `19:`. This is the **chatId**. In the previous example, the **chatId** is `19:12ab3c4d-a123-12a3-a123-123ab12c12de_12a3bcd4-1234-1234-123a-1b2345c678d9@unq.gbl.spaces`.
6. Add the **chatId** to the deep link. For example: `https://teams.microsoft.com/l/chat/19:12ab3c4d-a123-12a3-a123-123ab12c12de_12a3bcd4-1234-1234-123a-1b2345c678d9@unq.gbl.spaces/conversations`.

For more information, see [Deep link to Teams chat](/microsoftteams/platform/concepts/build-and-test/deep-link-teams).

## Meetings

Meetings knowledge allows you to scope your agent to answer questions about meetings. For example, your agent can respond to queries such as "Recap yesterday's meetings and list action items" or "What meetings do I have tomorrow?". This knowledge source isn't scoped.

> [!NOTE]
> Meetings knowledge isn't currently available in Copilot Studio agent builder.

### Add meetings knowledge source

If you're using [Agents Toolkit and Visual Studio Code](build-declarative-agents.md) to create your agent, to enable meetings knowledge, add the `Meetings` value to the **capabilities** property in your agent manifest file, as shown in the following example.

> [!NOTE]
> You must be using [version 1.5](declarative-agent-manifest-1.5.md) or later of the declarative agent manifest schema to add the `Meetings` knowledge source.
>
```json
{
  "capabilities": [
    {
      "name":"Meetings"
    }
  ]
}
```

## Related content

- [Declarative agents overview](overview-declarative-agent.md)
- [Declarative agent manifest reference](declarative-agent-manifest-1.5.md)
- [Add the code interpreter capability to your agent](code-interpreter.md)
- [Add the image generator capability to your agent](image-generator.md)
