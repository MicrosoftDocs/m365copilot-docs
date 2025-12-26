---
title: Add knowledge sources to your declarative agent
description: Learn how to add knowledge sources to your declarative agents.
author: kmkoenen
ms.author: v-koenenkaty
ms.localizationpriority: medium
ms.date: 12/18/2025
ms.topic: article
---

# Add knowledge sources to your declarative agent

You can enhance the user experience of your declarative agent by adding capabilities like [code interpreter](code-interpreter.md) and [image generator](image-generator.md) and knowledge sources to enhance and customize your agent's knowledge. The [capabilities object](declarative-agent-manifest-1.6.md#capabilities-object) in the manifest reference and the **Knowledge** section in Microsoft 365 Copilot provide several options for you to unlock features for your users. This article describes the knowledge sources that you can add to your agents.

The following table lists the capabilities and knowledge sources you can configure by using Microsoft 365 Copilot or [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) and indicates whether users require a Microsoft 365 Copilot license or metered usage to access agents with that capability or knowledge source.

| Capability or knowledge source | Microsoft 365 Copilot | Agents Toolkit | License or metered usage required? |
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
| People | :white_check_mark: | :white_check_mark: | Yes (license only) |
| Teams messages | :white_check_mark: | :white_check_mark:\* | Yes (license only) |
| Teams meetings | :white_check_mark: | :white_check_mark: | Yes (license only) |

\* Option to scope the knowledge is available.

## Copilot connectors

Microsoft 365 Copilot connectors enable you to add organizational data to your agent as grounding information. Use Copilot connectors to ingest your line-of-business data into Microsoft Graph so that Copilot can reason over your data as grounding information in responses to user prompts. For more information, see [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md).

For information about how to add Copilot connectors as knowledge to your agent manifest in Agents Toolkit, see [Copilot connectors object](declarative-agent-manifest-1.6.md#copilot-connectors-object).

For information about how to add Copilot connectors to your agent in Microsoft 365 Copilot, see [Copilot connectors](agent-builder-add-knowledge.md#copilot-connectors).

## SharePoint and OneDrive

When you configure your agent to use OneDrive and SharePoint content as knowledge, Copilot searches SharePoint and OneDrive files, folders, or sites that a user has access to for grounding information.

For information about how to add OneDrive and SharePoint knowledge to your agent manifest in Agents Toolkit, see [OneDrive and SharePoint object](declarative-agent-manifest-1.6.md#onedrive-and-sharepoint-object).

For information about how to add SharePoint knowledge to your agent in Microsoft 365 Copilot, see [Add knowledge sources](agent-builder-add-knowledge.md#sharepoint-content).

## Web and scoped web search

Web search enables agents to use the search index in Bing to respond to user prompts. If you enable web search in your agent, your agent can return any web data in its responses. You can also scope the web search to up to four public websites.

> [!IMPORTANT]
> Organization administrators can disable web search for Copilot and all agents inside their organization. If administrators disable web search, agents with web search enabled don't report an error and don't include web searches in their knowledge. [Developer mode debug cards](debugging-agents-copilot-studio.md) indicate that web search is enabled if the agent enabled it, even if administrators disabled it. For more information, see [Manage Microsoft 365 Copilot scenarios in the Microsoft 365 admin center](/copilot/microsoft-365/microsoft-365-copilot-page#web-search-for-microsoft-365-copilot-and-microsoft-copilot).

### Add web and scoped web search

If you're using [Agents Toolkit and Visual Studio Code](build-declarative-agents.md) to create your agent, add the `WebSearch` value to the **capabilities** property in your manifest file to enable web search. To scope your web search to specific sites, add the **sites** property and specify up to four URLs, as shown in the following example.

> [!NOTE]
> To add scoped web search to your agent, use [version 1.2](declarative-agent-manifest-1.2.md) or later of the declarative agent manifest schema.

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

If you're using [Microsoft 365 Copilot](agent-builder-build-agents.md) to create your agent, on the **Configure** tab, under **Knowledge**, list the website URLs that you want to reference.

## Embedded file content

If you're using [Microsoft 365 Copilot](agent-builder-build-agents.md) to build your agent, you can upload files directly from your device or the cloud to embed the content for your agent to use as knowledge. The embedded file content is stored in [SharePoint Embedded](/sharepoint/dev/embedded/overview). These files count against the OneDrive and SharePoint capacity in your tenant.

> [!NOTE]
> - The file upload feature is available to users with usage billing enabled or with a Microsoft 365 Copilot license.
> - Embedded file content isn't supported in Microsoft 365 Government Community Cloud Moderate (GCCM) environments.

For more information about embedded files, see [Embedded file content](agent-builder-add-knowledge.md#embedded-file-content).

> [!IMPORTANT]
> [Microsoft Purview Information Barriers (IB)](/purview/information-barriers) isn't supported on embedded files. Any user who can access the agent can see responses grounded in the embedded file content.

## Dataverse

By using Dataverse knowledge, agents can respond in natural language to user queries about their CRM data or data from tables in Microsoft Dataverse. You can add a Dataverse instance as a knowledge source and add synonyms and a glossary to help the system better interpret customized data in your tables. For more information, see [Add a Dataverse knowledge source](/microsoft-copilot-studio/knowledge-add-dataverse).

> [!NOTE]
> Dataverse knowledge isn't currently available in Microsoft 365 Copilot.

In your capabilities array for adding Dataverse as a knowledge source, the skill value must be the name of an existing `DVTableSearch` skill in your Dataverse environment.

Before you [add Dataverse knowledge](#add-dataverse-knowledge) to your agent, you must:

1. [Obtain a bearer token](#obtain-a-bearer-token) with appropriate permissions to access Dataverse resources, and
1. [Check for existing `DVTableSearch` skills](#check-for-existing-dvtablesearch-skills) or its `dvtablesearchid`.
1. [Create a `DVTableSearch` Skill](#create-a-dvtablesearch-skill) and use the exact name you assign to it.

### Obtain a bearer token

To create a skill, you need a bearer token with the right permissions to create Dataverse resources. For more information, see [Authenticate with Dataverse](/power-apps/developer/data-platform/webapi/authenticate-web-api).

To get a bearer token, use one of the following options:

- Use the [Power Apps maker portal](https://make.preview.powerapps.com/)
  1. Open **Developer Tools** (F12).
  1. Navigate to **Network**.
  1. Copy the bearer token from any organization request.

- Use Client Credentials flow
  1. Create an App Registration in Azure Portal.
  1. Run the following curl command in any terminal (preferably Git Bash). Replace `tenant_id`, `client_id`, and `client_secret` with your values.

```Git Bash
curl -X POST https://login.microsoftonline.com/<tenant_id>/oauth2/v2.0/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "client_id"="client_ID" \
  -d "scope=https://org16cc9af8.crm.dynamics.com/.default" \
  -d "client_secret"="client_secret>" \
  -d "grant_type"="client_credentials"
```

The response contains the bearer token that you use in subsequent requests to Dataverse.

### Check for existing DVTableSearch skills

Check if a skill already exists by using the following request. <br> To run this request, you can use any terminal (preferably Git Bash) that supports curl commands.

```Git Bash
AUTH="Bearer token"
ORG="https://org7cccfc22.crm.dynamics.com"
API="$ORG/api/data/v9.1"

curl -s -X GET "$API/dvtablesearchs?$select=dvtablesearchid,name,searchtype" \
-H "Authorization: $AUTH" \
-H "Accept: application/json"
```

Look for the skill name or `dvtablesearchid` in the response.

### Create a DVTableSearch Skill

If a skill doesn't alreday exist, create it by using the following request. <br> To run this request, you can use any terminal (preferably Git Bash) that supports curl commands.

```Git Bash
  AUTH="Bearer token"
  ORG="https://org7cccfc22.crm.dynamics.com"
  API="$ORG/api/data/v9.1"

  curl -i -X POST "$API/dvtablesearchs" \
  -H "Authorization: $AUTH" \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{
  "name": "Account_SystemUser_Skill",
  "searchtype": 0,
  "DVTableSearch_DVTableSearch_DVTableSearch": [
  { "name": "Account", "entitylogicalname": "account" }
  ]
}'
```

The response contains the `dvtablesearchid` of the newly created skill. The skill enables your agent to access and reason over the tables in your Dataverse instance. Use this value in the `skill` property of your agent manifest file.

### Add Dataverse knowledge

If you're using [Agents Toolkit and Visual Studio Code](build-declarative-agents.md) to create your agent, add the `Dataverse` value to the **capabilities** property in your agent manifest file to enable Dataverse knowledge, as shown in the following example.

> [!NOTE]
> To add `Dataverse` knowledge, use [version 1.3](declarative-agent-manifest-1.3.md) or later of the declarative agent manifest schema.

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

If you're using [Microsoft 365 Copilot](agent-builder.md) to create your agent, on the **Configure** tab in the **Knowledge** section, select **My emails**.

> [!NOTE]
> You can't currently scope your emails to a specific folder or shared mailbox when you use Microsoft 365 Copilot.

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

In the **group_mailboxes** field, you specify an `array` of strings (up to 25) containing the SMTP addresses of the shared mailboxes or Microsoft 365 groups you want your agent to be scoped to.

If you reference both a shared mailbox and a folder, the agent scopes responses to the folder within the shared mailbox. If you reference a folder only, the agent scopes responses to the contents of the folder within the personal mailbox.

If you don't reference a shared mailbox or a folder, the agent search isn't scoped to any folder or mailbox and it returns results from all email content, based on the user's query.

## People

Ground your agent in People data to deliver more personalized and context-aware responses. People data combines public information about individuals, such as name, position, skills, and organizational relationships, with a personal view of the user's connections, collaborators, and relevant insights. This knowledge source enables agents to:

- Look up user and colleague profiles, including reporting structure and contact details.
- Identify domain experts and key collaborators within the organization.
- Personalize responses based on the user's relationships, past interactions, and preferences.
- Provide recommendations and communication tips tailored to specific teams or individuals.

### Add people knowledge source

If you use [Copilot Studio](agent-builder.md) to create your agent, the People knowledge source is enabled by default for users with a Microsoft 365 Copilot license.

If you use [Agents Toolkit and Visual Studio Code](build-declarative-agents.md) to create your agent, add the `People` value to the **capabilities** property in your agent manifest file to enable people knowledge, as shown in the following example. Declaring only the base `People` capability allows the agent to reason on **only basic organization data** such as those available in the [profile card](/graph/api/resources/profile). To include content such as related teams messages, emails, and files between the agent user and the referenced people in the organization, see the [version 1.6](declarative-agent-manifest-1.6.md) to use the `include_related_content` property.

> [!NOTE]
> To add the `People` knowledge source (without related content), use [version 1.3](declarative-agent-manifest-1.3.md) or later of the declarative agent manifest schema. To use the `include_related_content` property, use [version 1.6](declarative-agent-manifest-1.6.md) or later.
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

If your agent needs to reason over related content (between the agent user and the referenced people), such as related teams messages, emails, and files, leverage the `include_related_content` property. The default value is `false`.

```json
{
  "capabilities": [
    {
      "name":"People",
      "include_related_content": true
    }
  ]
}
```

## Teams messages

You can configure agents to use Teams channels, meeting chats, group chats, and 1:1 chats as knowledge sources. You can choose to specify up to five links to channels, group, 1:1, or meeting chats to scope Copilot search, or you can allow your agent to use the user's Teams content, including channels, meetings, and individual and group chats, as knowledge sources.

Agents can return links to files shared in Teams messages, but they can't return links to files stored in a Teams channel, unless the agent also has `OneDriveAndSharePoint` enabled. For information about how to optimize SharePoint content for Copilot, see [optimize SharePoint content retrieval](optimize-sharepoint-content.md).

### Add Teams messages knowledge sources

If you're using [Microsoft 365 Copilot](agent-builder.md) to create your agent, on the **Configure** tab, in the **Knowledge** section, select the search bar and choose **My Teams chats and meetings**. To scope your agent to specific channel, meeting, or group chats, on the **Chats** tab, select the chats that you want to add as knowledge.

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
1. Hover over the message and choose the three dots (...).
1. Select **Copy link**.
1. Paste the link into Notepad or a similar application. The link looks similar to the following URL: `https://teams.microsoft.com/l/chat/19:12ab3c4d-a123-12a3-a123-123ab12c12de_12a3bcd4-1234-1234-123a-1b2345c678d9@unq.gbl.spaces//1743033793614?context=%7B%22contextType%22%3A%22chat%22%7D`.
1. Copy the segment of the URL that falls between `chat/` and the next `/`. The segment is usually prefaced with `19:`. This is the **chatId**. In the previous example, the **chatId** is `19:12ab3c4d-a123-12a3-a123-123ab12c12de_12a3bcd4-1234-1234-123a-1b2345c678d9@unq.gbl.spaces`.
1. Add the **chatId** to the deep link. For example: `https://teams.microsoft.com/l/chat/19:12ab3c4d-a123-12a3-a123-123ab12c12de_12a3bcd4-1234-1234-123a-1b2345c678d9@unq.gbl.spaces/conversations`.

For more information, see [Deep link to Teams chat](/microsoftteams/platform/concepts/build-and-test/deep-link-teams).

## Teams meetings

By using Teams meetings knowledge, you can scope your agent to answer questions about meetings, including single meetings or meeting series. For example, your agent can respond to queries such as "Recap yesterday's meetings and list action items" or "What was said about Project X in my meetings?". You can optionally scope this knowledge source to up to five specific meetings. This knowledge source gives the agent access to meeting metadata (subject, organizer, attendees, and title), transcript content, and meeting chats.

> [!NOTE]
> Referencing a meeting series is limited to the last four instances of the series.

### Add meetings knowledge source

If you're using [Microsoft 365 Copilot](agent-builder-build-agents.md) to create your agent, on the **Configure** tab, in the **Knowledge** section, select the search bar and choose **My Teams chats and meetings**. The ability to scope to Meetings is coming soon in Microsoft 365 Copilot.

If you're using [Agents Toolkit and Visual Studio Code](build-declarative-agents.md) to create your agent, to enable meetings knowledge, add the `Meetings` value to the **capabilities** property in your agent manifest file, as shown in the following example. If you want to scope the agent to specific meetings, add the meeting's UID to the `items_by_id` property. For instructions on finding the ID of a meeting, see [Get the ID of a meeting](/troubleshoot/exchange/calendars/cdl/get-meeting-id).

> [!NOTE]
> You must be using [version 1.6](declarative-agent-manifest-1.6.md) or later of the declarative agent manifest schema to add the `Meetings` knowledge source.

```json
{
  "capabilities": [
    {
      "name":"Meetings",
      "items_by_id": [
        {
          "id": "010000002300A00045B6C7890D12E0030000000040056F7GH890IJ01000000000000000020000000J3L45M6A7NO8PQ9R0S12TUV340XY5Z00",
          "is_series": true
        }
      ]
    }
  ]
}
```

## Related content

- [Declarative agents overview](overview-declarative-agent.md)
- [Declarative agent manifest reference](declarative-agent-manifest-1.6.md)
- [Add the code interpreter capability to your agent](code-interpreter.md)
- [Add the image generator capability to your agent](image-generator.md)
