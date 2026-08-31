---
title: Known Issues in Microsoft 365 Copilot Extensibility
description: Find information about current known issues related to Microsoft 365 Copilot extensibility and the recommended workarounds.
author: lauragra
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 08/27/2026
ms.topic: concept-article
---

# Known issues

This article provides information about known issues related to Microsoft 365 Copilot extensibility and any potential workarounds.

## Declarative agents

The following known issues apply to declarative agents.

### Power Automate flows aren't fully supported as actions in declarative agents

Power Automate flows as actions in declarative agents might not run reliably and might not return results. In some cases, newly created flows might not appear in the **Add Action** interface within Copilot Studio, even if the action counter reflects their presence.

**Workaround:** Currently, no workaround is available for the issue that the flows might not return results. You can improve the trigger success for the flow by editing the description on the flow details page outside of Copilot Studio.

This issue applies to links from any content source, including SharePoint, Microsoft 365 Copilot connectors, and plugins.

### Prompts to get a list based on custom metadata aren't supported

Prompts to get a list of items based on custom metadata aren't supported. For example, the prompt "Get a list of ServiceNow tickets assigned to me" where **Assigned To** is based on custom metadata, doesn't work because the metadata isn't mapped to connection schema label properties.

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

When you share an agent via the Microsoft 365 Copilot by using the **Specific users in your organization** option, the search results might include [distribution groups](/microsoft-365/admin/create-groups/compare-groups#microsoft-365-groups). Sharing an agent with a distribution group can cause the share to fail.

### Some features aren't supported in Microsoft 365 Government tenants

The following features aren't currently supported in [Microsoft 365 Government](https://www.microsoft.com/microsoft-365/government) tenants:

- [Authenticated custom actions](overview-api-plugins.md).
- Support for usage billing for extensibility features. For details about features that require usage billing, see [Agent capabilities and licensing models](prerequisites.md#agent-capabilities-and-licensing-models).
- Support for publishing agents via the [Microsoft 365 Agents Toolkit](build-declarative-agents.md).

## Copilot connectors

The following known issues apply to Copilot connectors.

### Prompts to get items based on custom metadata aren't supported

Prompts to get a list of items based on custom metadata aren't supported. For example, the prompt "Get a list of ServiceNow tickets assigned to me" doesn't work when "Assigned To" is custom metadata because the field isn't mapped to label properties of the connection schema.

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
- Settings UI to sign out. As a workaround, uninstall the app to reset the allow state or implement a function that the user can invoke by using natural language.
- Multiple response semantics for a single function.
- **OpenURL** and **ToggleVisbility** adaptive card actions in response semantics.
- Task modules and stage views in response semantics.

## Custom engine agents

The following table lists features that aren't currently supported for custom engine agents that run in Microsoft 365 Copilot. These issues apply to custom engine agents built using the Microsoft 365 Agents Toolkit and the Microsoft 365 Agents SDK.

| Feature | Issue |
| --- | --- |
| Feedback | User feedback about agent responses isn't shared with the developer. |
| Conversation context | Custom engine agents can't access Copilot conversation history that occurred before the user accesses the agent via `@mention`. |
| Chat messages | Users can't edit chat messages sent to or returned by the agent. The agent response messages don't support HTML. Messages in Microsoft 365 Copilot are immutable, and the `updateActivity` API isn't supported. |
| File attachments | Custom engine agents don't support file or image attachments in agent chats. Images uploaded in chat aren't passed to the agent for processing. Scenarios that require users to upload images to a custom engine agent, such as extracting text from an uploaded image, aren't supported. |
| File downloads | File downloads aren't supported for custom engine agents in Microsoft 365 Copilot. A custom engine agent that generates a file, such as an Excel workbook, doesn't render a clickable, downloadable file in Microsoft 365 Copilot; the file appears as noninteractive text or as an empty download area. The same agent renders the file correctly in Microsoft Teams and in the Copilot Studio test panel, so this behavior is specific to the Microsoft 365 Copilot channel rather than a file-generation or downstream rendering failure. |
| [Rich cards](/previous-versions/azure/bot-service/dotnet/bot-builder-dotnet-add-rich-card-attachments?view=azure-bot-service-3.0#types-of-rich-cards&preserve-view=true) | The following elements of rich cards aren't supported:<ul><li>Sign-in</li><li>Hero card</li><li>Thumbnail card</li><li>Connector card</li><li>Animation card</li><li>Audio card</li><li>Receipt card</li></ul> |
| Proactive notifications | Proactive notifications aren't supported. |
| [Citations](/microsoftteams/platform/bots/how-to/bot-messages-ai-generated-content?tabs=desktop%2Cbotmessage#add-citations) | The following citation types aren't supported: <ul><li>citation.appearance.encodingFormat (Adaptive Card/modal window)</li><li>Sensitivity labels</li><li>citation.appearance.image.@type</li><li>citation.appearance.image.name </li></ul> |
| Adaptive Cards | Adaptive Cards refreshed using **Action.Execute** don’t persist updated content when the chat is reopened; the original card is shown. Agent workflows in Copilot Chat should use follow‑up messages instead of relying on message edits. The following elements of Adaptive Cards aren't supported:<ul><li>[Nonstandard elements](https://adaptivecards.microsoft.com/?topic=Component.graph.microsoft.com/event)</li><li>Dynamic Adaptive Card refresh</li><li>Typeahead</li><li>@mention</li><li>Password control</li></ul> |
| Sensitivity labels | Sensitivity labels aren't supported. |
| Microsoft 365 app support | Custom engine agents aren't supported in Outlook, Word, Excel, PowerPoint, and the Microsoft Edge browser. |

## Copilot Studio agents

The following known issues apply to agents built with Copilot Studio and added to Microsoft 365 Copilot or Microsoft Teams.

### Agents that use a third-party model return an "Agent Blocked" error

An agent that you add to Microsoft 365 Copilot or Microsoft Teams returns an "Agent Blocked" error in response to prompts. The on-screen error message suggests updating the agent to use another large language model (LLM) available to you.

This issue occurs when the agent is configured to use a third-party model, such as Claude Sonnet 4.6, which is an Anthropic model. Anthropic models are provided by an AI provider that operates as a Microsoft subprocessor. An administrator must enable access to these models and grant it to users. In the EU, access is off by default. Users who aren't granted access to the model receive the "Agent Blocked" error.

**Workaround:** Choose one of the following options.

**Option A**: Keep the current model and grant access. An AI Administrator or Global Administrator does the following steps:

1. In the Microsoft 365 admin center, go to **Copilot** > **Settings** > **View all**.
2. Open **AI providers operating as Microsoft subprocessors**.
3. Select the AI provider for your model.
4. Under **Choose who can access...**, add the affected users or, preferably, the Microsoft Entra security group that the users belong to, and then select **Save**. Assignments support individual users, security groups, and nested groups.
5. Wait 10–15 minutes for the assignment to propagate, and then have an affected user retry the agent.

**Option B**: Switch the agent to a different model for an immediate unblock. In Copilot Studio, edit the agent's model (generative AI) setting and change it from the third-party model to the default Microsoft model. This change makes the agent available to all assigned users immediately, without an Anthropic access assignment.

### Agents respond slowly or return a "Failed. Retry" message

A Copilot Studio agent published to SharePoint or Microsoft Teams responds slowly and inconsistently. The **Sending** indicator is sometimes replaced with **Failed. Retry**; selecting **Retry** resubmits the prompt.

Several factors contribute to how long a response takes and how long it feels to the user, including the model the agent uses, the number of knowledge sources the agent searches, and how the host channel delivers messages.

**Workaround:**

Try one or more of the following approaches:

- Switch the agent to a model tagged **General** instead of **Deep**. General models are optimized for lower latency on everyday tasks. For more information, see [Select a primary AI model for your agent](/microsoft-copilot-studio/authoring-select-agent-model). Third-party models require an administrator to grant access. For more information, see [Agents that use a third-party model return an "Agent Blocked" error](#agents-that-use-a-third-party-model-return-an-agent-blocked-error).

- If the agent uses SharePoint knowledge sources, reduce the number of sources. Fewer sources produce a smaller search-result context, which the model processes faster.

- If users access the agent through SharePoint, use a Microsoft Teams channel instead. Teams supports typing indicators and progressive message delivery, which reduces perceived latency. SharePoint doesn't stream responses and delivers the message in a single batch.

### Agents in Microsoft Teams return a "You don't have access to talk to this bot" message

Users can find and install an agent from the Microsoft Teams store, but when they send a prompt, the agent responds with "You don't have access to talk to this bot, contact the owner." Users receive no other responses.

This issue can occur when the agent is installable but isn't authorized for the user, because tenant app settings or agent sharing haven't granted the user access.

**Resolution:** Complete the following steps.

1. In the Microsoft Teams admin center, go to **Teams apps** > **Manage apps** > **Actions** > **Org-wide app settings**. Under **Custom apps**, turn on **Let users install and use available apps by default** and **Let users interact with custom apps in preview**. For more information, see [Manage org-wide app settings](/microsoftteams/manage-apps#manage-org-wide-app-settings) and [Allow users to upload custom apps](/microsoftteams/teams-custom-app-policies-and-settings#allow-users-to-upload-custom-apps).
2. In the Teams admin center, go to **Teams apps** > **Manage apps** and allow the **Shared Power Apps** app. This Microsoft app makes content shared from Power Platform available in Teams, including Copilot Studio agents under **Built with Power Platform**. For more information, see [Allow or block apps](/microsoftteams/manage-apps#allow-or-block).
3. In Copilot Studio, share the agent with the affected users. For more information, see [Share agents](/microsoft-copilot-studio/admin-share-bots).
4. If the agent uses a connected agent, confirm that the users also have permission to access the connected agent. For more information, see [Share agents](/microsoft-copilot-studio/admin-share-bots).

### Agents in Microsoft Teams are unresponsive when the Microsoft Entra app registration is missing

An agent that you deploy to Microsoft Teams is unresponsive. This issue can occur when the agent's Microsoft Entra app registration, which is the agent's identity in Microsoft Entra ID, is missing from the tenant directory.

**Resolution:** Choose one of the following options.

**Option A**: Republish the agent to the Microsoft Teams channel. In Copilot Studio, open the agent, go to **Channels** > **Microsoft Teams**, disconnect the Teams channel, wait one to two minutes, and then reconnect the channel and publish the agent again. Republishing should trigger the identity provisioning flow to detect the missing app registration and recreate it.

**Option B**: If Option A doesn't restore the agent, recreate the agent. In Copilot Studio, create a new agent, migrate the topics and configuration from the original agent, and then publish the new agent to Microsoft Teams.

### Agents that work in Copilot Studio don't respond in Microsoft Teams

An agent responds in Copilot Studio but doesn't respond to users in Microsoft Teams. This issue can occur when tenant app policy blocks users from interacting with custom apps.

**Resolution:** In the Teams admin center, go to **Teams apps** > **Manage apps** > **Actions** > **Org-wide app settings**, and set **Let users interact with custom apps in preview** to **On**. For more information, see [Allow users to upload custom apps](/microsoftteams/teams-custom-app-policies-and-settings#allow-users-to-upload-custom-apps).

## Related content

- [Microsoft 365 Copilot Q&A](/answers/tags/466/copilot-m365-development)
