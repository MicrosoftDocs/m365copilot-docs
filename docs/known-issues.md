---
title: Known Issues in Microsoft 365 Copilot Extensibility
description: Find information about current known issues related to Microsoft 365 Copilot extensibility and the recommended workarounds.
author: lauragra
ms.author: lauragra
ms.localizationpriority: medium
ms.date: 03/16/2026
ms.topic: concept-article
---

# Known issues

This article provides information about known issues related to Microsoft 365 Copilot extensibility and any potential workarounds.

## Declarative agents

The following known issues apply to declarative agents.

### Power Automate Flows aren't fully supported as actions in declarative agents

Power Automate Flows as actions in declarative agents might not run reliably and might not return results. In some cases, newly created flows might not appear in the Add Action interface within Copilot Studio, even if the action counter reflects their presence.

**Workaround:** Currently, no workaround for the issue that the flows might not return results is available. You can improve the trigger success for the flow by editing the description on the flow details page outside of Copilot Studio.

This issue applies to links from any content source, including SharePoint, Microsoft 365 Copilot connectors, and plugins.

### Prompts to get a list based on custom metadata aren't supported

Prompts to get a list of items based on custom metadata aren't supported. For example, the prompt "Get a list of ServiceNow tickets assigned to me" where "Assigned To" is based on custom metadata, doesn't work because the metadata isn't mapped to connection schema label properties.

**Workaround:** This issue currently doesn't have a workaround. You can get items based on matches with the title or description of the connector item.

### SharePoint files with null characters in the file name return no results

If a SharePoint file used as a knowledge source contains null characters in the file name, the agent returns no results based on that knowledge source.

### SharePoint knowledge sources can fail in agent responses

Declarative agents grounded in SharePoint knowledge sources might provision successfully but fail at runtime with the following message:

> **“Sorry, I wasn’t able to respond.”**

This issue can occur when the signed-in user doesn’t have a Microsoft 365 Copilot license. SharePoint and OneDrive knowledge sources require an active Copilot license.

Customer Digital Experience (CDX) demo tenant accounts without a Copilot license can create and publish agents, but grounded retrieval fails silently and triggers the generic runtime error. Developers testing SharePoint grounding in nonproduction tenants should use the **Microsoft 365 Copilot Developer License**, which includes the required Graph and SharePoint access.

If the correct license is assigned but grounding still fails, verify that:

- The signed-in user can access the SharePoint site URL defined in `items_by_url`.
- The agent's connection uses **User authentication**. Service principals aren’t supported for SharePoint grounding scenarios.
- The user has at least **Read** permissions on the target SharePoint site.

Silent grounding failures typically occur when licensing, permissions, or authentication configurations are incomplete.

### URLs returned by a declarative agent disappear in @mention responses in Microsoft 365 Copilot

When you invoke a declarative agent through an @mention in Microsoft 365 Copilot, you might see URLs removed, hidden, or downgraded to plain text. This issue occurs because the @mention pipeline applies stricter output sanitization to block unsafe or unverified links in shared contexts such as Word, Excel, PowerPoint, Outlook, and Teams.

**Workaround:**

Try one of the following approaches:

- Avoid returning bare URLs because they're most likely to be removed. Provide navigational text when the link is optional. For example, go to **Contoso Portal** > **Reports** > **Monthly Dashboard**.

- Return URLs inside structured JSON fields in API plugin responses. These fields are less aggressively sanitized than natural language text.

- Use Markdown link formatting `(https://contoso.com/dashboard)` or angle‑bracket notation `(<https://contoso.com/dashboard>)`.

### Sharing agents from within the Microsoft 365 Copilot can fail

When you share an agent via the Microsoft 365 Copilot using the **Specific users in your organization** option, the search results might include [distribution groups](/microsoft-365/admin/create-groups/compare-groups#microsoft-365-groups). Sharing an agent with a distribution group can cause the share to fail.

### Some features aren't supported in Microsoft 365 Government tenants

The following features aren't currently supported in [Microsoft 365 Government](https://www.microsoft.com/microsoft-365/government) tenants:

- [Authenticated custom actions](overview-api-plugins.md).
- Support for usage billing for extensibility features. For details about features that require usage billing, see [Agent capabilities and licensing models](prerequisites.md#agent-capabilities-and-licensing-models).
- Support for publishing agents via the [Microsoft 365 Agents Toolkit](build-declarative-agents.md).

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
| Feedback | User feedback about agent responses isn't shared with the developer. |
| Conversation context | Custom engine agents can't access Copilot conversation history that occurred before the user accesses the agent via `@mention`. |
| Chat messages | Users can't edit chat messages sent to or returned by the agent. HTML isn't supported in agent response messages. Messages in Microsoft 365 Copilot are immutable, and the `updateActivity` API isn't supported. |
| File attachments | Users can't upload files in agent chats and the agent can't return files for download. |
| [Rich cards](/previous-versions/azure/bot-service/dotnet/bot-builder-dotnet-add-rich-card-attachments?view=azure-bot-service-3.0#types-of-rich-cards&preserve-view=true) | The following elements of rich cards aren't supported:<ul><li>Sign-in</li><li>Hero card</li><li>Thumbnail card</li><li>Connector card</li><li>Animation card</li><li>Audio card</li><li>Receipt card</li></ul> |
| Proactive notifications | Proactive notifications aren't supported. |
| [Citations](/microsoftteams/platform/bots/how-to/bot-messages-ai-generated-content?tabs=desktop%2Cbotmessage#add-citations) | The following citation types aren't supported: <ul><li>citation.appearance.encodingFormat (Adaptive Card/modal window)</li><li>Sensitivity labels</li><li>citation.appearance.image.@type</li><li>citation.appearance.image.name </li></ul> |
| Adaptive Cards | Adaptive Cards refreshed using **Action.Execute** don’t persist updated content when the chat is reopened; the original card is shown. Agent workflows in Copilot Chat should use follow‑up messages instead of relying on message edits. The following elements of Adaptive Cards aren't supported:<ul><li>[Nonstandard elements](https://adaptivecards.microsoft.com/?topic=Component.graph.microsoft.com/event)</li><li>Dynamic Adaptive Card refresh</li><li>Typeahead</li><li>@mention</li><li>Password control</li></ul>|
| Sensitivity labels | Sensitivity labels aren't supported. |
| Microsoft 365 app support | Custom engine agents aren't supported in Outlook, Word, Excel, PowerPoint, and the Microsoft Edge browser. |

## Related content

- [Microsoft 365 Copilot Q&A](/answers/tags/466/copilot-m365-development)
