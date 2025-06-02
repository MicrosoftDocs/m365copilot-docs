---
title: Known Issues in Microsoft 365 Copilot Extensibility
description: Find information about current known issues related to Microsoft 365 Copilot extensibility and the recommended workarounds.
author: lauragra
ms.author: lauragra
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 06/02/2025
---

# Known issues

This article provides information about known issues related to Microsoft 365 Copilot extensibility and any potential workarounds, if available.

## Declarative agents

The following known issues apply to declarative agents.

### Newly installed agents might not show in the Teams client right away

In some cases, an agent installed from the store doesn't immediately show up in Copilot Chat in the Teams client.

**Workaround:** The user can switch to another chat and then return to Copilot Chat.

### Power Automate Flows aren't fully supported as actions in declarative agents

Power Automate Flows as actions in declarative agents might not run reliably and might not return results.

**Workaround:** Currently, no workaround for the issue that the flows might not return results is available. You can improve the trigger success for the flow by editing the description on the flow details page outside of Copilot Studio.

This issue applies to links from any content source, including SharePoint, Microsoft 365 Copilot connectors (formerly Microsoft Graph connectors), and plugins.

### Prompts to get a list based on custom metadata aren't supported 

Prompts to get a list of items based on custom metadata aren't supported. For example, the prompt "Get a list of ServiceNow tickets assigned to me" where "Assigned To" is based on custom metadata, doesn't work because the metadata isn't mapped to connection schema label properties.

**Workaround:** This issue doesn't currently have a workaround. You can get items based on matches with the title or description of the connector item.

### Sharing links to SharePoint pages don't work as knowledge sources

When sharing links are references as a knowledge source in an agent, the agent doesn't return results from that knowledge source. The following link is an example of a SharePoint sharing link:

`https://contoso.sharepoint-df.com**/:p:/r/**personal/babak_microsoft_com/Documents/`

### SharePoint files with null characters in the file name return no results

If a SharePoint file used as a knowledge source contains null characters in the file name, the agent returns no results based on that knowledge source.

### Pasting a link to a file in Copilot Studio and agent builder doesn't work

Currently, users can select a file in Copilot Studio and Copilot Studio agent builder and the agent searches the file. However, if the user pastes the URL of the file in prompt, the search fails.

**Workaround:** The user can select the file from the UI in Copilot Studio and Copilot Studio agent builder.

### Sharing agents in Copilot Studio agent builder can fail

When you share an agent in agent builder using the **Specific users in your organization** option, the search results might include [distribution groups](/microsoft-365/admin/create-groups/compare-groups#microsoft-365-groups). Sharing an agent with a distribution group can cause the share to fail.


## Copilot connectors

The following known issues apply to Copilot connectors.

### Prompts to get items based on custom metadata aren't supported

Prompts to get a list of items based on custom metadata, such as "Get a list of ServiceNow tickets assigned to me" where "Assigned To" is custom metadata because the field isn't mapped to label properties of the connection schema, aren't supported.

## API plugins

The following known issues apply to API plugins.

### Some OpenAPI features aren't supported

The following OpenAPI features aren't supported for API plugins:

- Nested objects in API method request bodies or parameters.
- Polymorphic references (`oneOf`, `allOf`, `anyOf`) and circular references. As a workaround, use a flattened schema.
- API keys in custom headers, query parameters, or cookies.
- [OAuth grant flows](https://oauth.net/2/grant-types) other than vanilla Authcode and PKCE Authcode.
- Dual authentication flows (OAuth/Entra SSO + HTTP Bearer token) for a single API endpoint.
- Settings UI to reset always allow states. As a workaround, uninstall the app to reset the allow state.
- Settings UI to sign out. As a workaround, uninstall the app to reset the allow state or implement a function that the user can invoke using natural language.
- Multiple response semantics for a single function.
- **OpenURL** and **ToggleVisbility** adaptive card actions in response semantics.
- Task modules and stage views in response semantics.

## Custom engine agents

The following table lists features that aren't currently supported for custom engine agents that run in Microsoft 365 Copilot. These issues apply to custom engine agents built using the Microsoft 365 Agents Toolkit and the Microsoft 365 Agents SDK.

| Feature | Issue |
| ------- | ----- |
| Feedback | User feedback regarding agent responses isn't shared with the developer. |
| Conversation context | Custom engine agents can't access Copilot conversation history that occurred before the user accesses the agent via `@mention`. |
| Chat messages | Users can't edit chat messages sent to or returned by the agent. |
| Chat messages | HTML isn't supported in agent response messages. |
| File attachments | Users can't upload files in agent chats and the agent can't return files for download. |
| Azure AI Foundry | You can't currently deploy a custom engine agent built using Azure AI Foundry. |
| [Rich cards](/previous-versions/azure/bot-service/dotnet/bot-builder-dotnet-add-rich-card-attachments?view=azure-bot-service-3.0#types-of-rich-cards&preserve-view=true) | The following elements of rich cards aren't supported:<ul><li>Sign-in</li><li>Hero card</li><li>Thumbnail card</li><li>Connector card</li><li>Animation card</li><li>Audio card</li><li>Receipt card</li></ul> |
| Proactive messages | Proactive notifications aren't supported. |
| [Citations](/microsoftteams/platform/bots/how-to/bot-messages-ai-generated-content?tabs=desktop%2Cbotmessage#add-citations) | The following citation types aren't supported: <ul><li>citation.appearance.encodingFormat (Adaptive Card/modal window)</li><li>Sensitivity labels</li><li>citation.appearance.image.@type</li><li>citation.appearance.image.name </li></ul> |

## Related content

- [Microsoft 365 Copilot Q&A](/answers/tags/466/copilot-m365-development)