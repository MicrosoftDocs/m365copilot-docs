---
title: Add knowledge sources to your declarative agent in Microsoft 365 Copilot
description: Learn about the different types of knowledge sources that you can add to your declarative agent when you build your agent with the Agent Builder feature in Microsoft 365 Copilot.
author: xwen
ms.author: xwen
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 11/17/2025
---

# Add knowledge sources to your declarative agent in Microsoft 365 Copilot

The Agent Builder feature in Microsoft 365 Copilot provides a simple interface for you to integrate knowledge sources to make your declarative agent more intelligent and context-aware. These knowledge sources ground your agent in enterprise data, public content, and user-specific information to enable them to deliver more accurate, relevant, and personalized responses.

This article describes the supported knowledge sources and the steps to configure them in Microsoft 365 Copilot. For general information about building agents with Microsoft 365 Copilot, see [Build agents with Microsoft 365 Copilot](copilot-studio-lite-build.md).

For more information about supported knowledge sources and licensing requirements, see [Knowledge sources](/microsoft-365-copilot/extensibility/knowledge-sources).

## Add knowledge sources

To add knowledge sources to your agent:

1. In Microsoft 365 Copilot, choose **Create agent**, and go to the **Configure** tab.
2. In the **Knowledge** section, use one of the following methods to add knowledge sources:
   - **Search bar** - Type keywords to search for SharePoint items. Use this option to add sources such as email and Teams messages.
   - **Enter URL** - Add a public website or SharePoint link (must be two levels deep and without query parameters).
   - **Picker** - Use the file picker UI to browse for and select SharePoint files or folders.
3. Select the items to include. You can add:
   - Up to four public website URLs.
   - SharePoint files, folders, or sites.
   - Up to five Teams chat URLs.
   - Embedded files uploaded from your device.
   - Microsoft 365 Copilot connectors (if enabled by your organization's administrator).
  
  :::image type="content" source="assets/images/copilot-studio-lite/embedded-authoring-select-knowledge.png" alt-text="A screenshot of the Knowledge section of the Configure tab with the Picker UI showing.":::

## Public websites

You can add specific public websites as agent knowledge sources to make your agent context-aware. When you reference websites as knowledge sources, the following limits apply:

- Public website URLs must only be two levels; for example, `https://example.org/a/b/c` is an invalid URL because it's more than two levels.
- URLs can't contain query parameters; for example, `https://example.org?test=1` is invalid.
- You can add up to four URLs.

To configure your agent to use any web data as knowledge, on the **Configure** tab, under **Knowledge**, choose the toggle next to **Search all websites**.

## SharePoint content

You can reference specific SharePoint sites, files, and folders as agent knowledge sources. When you reference sources from SharePoint, consider the following limits:

- A total of 100 SharePoint files can be selected for each agent.
- Files already uploaded to SharePoint might have existing permissions and [sensitivity labels](/purview/sensitivity-labels), which are respected when the agent is generating a response.
- Although there isn't a direct file size limit on the knowledge files you select, the agent can only reason over specific [file types](#file-types-and-size-limits).

> [!NOTE]
> - If [Restricted SharePoint Search](/sharepoint/restricted-sharepoint-search) is enabled, you can't use SharePoint as a knowledge source.
> - Agents respond best to queries based on data in Excel when the data is in one sheet within a workbook.
> - To optimize for Copilot, we recommend that you keep the contents of files that you select concise. For more information, see [Length of documents that you provide to Copilot](https://support.microsoft.com/topic/keep-it-short-and-sweet-a-guide-on-the-length-of-documents-that-you-provide-to-copilot-66de2ffd-deb2-4f0c-8984-098316104389).

### Entering a URL for a SharePoint site, folder, or file

You can enter a URL for a SharePoint site, folder, or file, such as `contoso.sharepoint.com/sites/policies`. The agent searches the URL and subpaths. For example, a URL such as `contoso.sharepoint.com/sites` also includes subpaths like `contoso.sharepoint.com/sites/policies`. The agent uses relevant information to provide a targeted response.

After you provide the SharePoint URL, press **Enter** to add it as a knowledge source.

### SharePoint file picker

You can also select files or folders from the SharePoint file picker by choosing the cloud icon in the **Knowledge** section. The left pane on the picker displays your recently accessed SharePoint sites. To view more SharePoint sites, select **More places**. If you recently created a site, it will appear after several minutes.

> [!NOTE]
> The SharePoint picker might not show all the [communication sites](/microsoft-365/community/team-site-or-communication-site) that you have access to. Communication sites only show up in the **Quick Access** and **Recent** sections of the SharePoint picker.

After you select a site, you can select several files and folders. Doing so adds the SharePoint file or folder to the agent's knowledge sources. When the same site includes multiple folders, select the button next to the folder name to view other folders.

:::image type="content" source="assets/images/copilot-studio-lite/embedded-authoring-sharepoint-picker-folders.png" alt-text="SharePoint file picker":::

You can also upload files into SharePoint by using the picker. The file appears in the same folder after it finishes uploading and is ready for use.

### File readiness

When new files are uploaded to SharePoint, they can take up to several minutes to be ready for the agent to include in its response. You can still test your agent in the test pane if sources aren't ready. However, responses don't include information from the newly uploaded file until it's ready.

You can check the file readiness by looking in the **Knowledge** section in the **Configure** tab; the file has the word "Preparing" next to it. When the underlying file uploaded to SharePoint is renamed or deleted, the agent picks up the changes. You can also select the reload button on top of the **Knowledge** section to manually reload the state.

## Microsoft Teams data

You can ground your agent in Microsoft Teams data, including Teams chat messages and meeting information. To use all chat messages, meeting transcripts, and calendars that you have access to as knowledge, choose **My Teams chats and meetings**.

You can also scope your agents to specific chats, including team channels, group chats, and meeting chats. Scoping knowledge to specific chats improves the accuracy and relevancy of agents responses. To scope Teams knowledge to specific chats, on the **Configure** tab, in the **Knowledge** section, select the search bar. In the window that opens, choose the **Chats** tab, and select the specific chats to add. You can add up to five chats.

> [!IMPORTANT]
> - Teams knowledge is only available to users with a Microsoft 365 Copilot add-on license.
> - You can't scope to individual meetings. When you select **My Teams chats and meetings**, agents search all meeting transcripts and the whole calendar.
> - Agents might not have the access to all meeting transcripts, depending on the size of past transcripts.

## Outlook emails

You can ground your agent in Outlook email. To add email as a knowledge source, on the **Configure** tab, in the **Knowledge** section, select the search bar, and choose **My emails**.

> [!NOTE]
> You can't scope email knowledge. When you add email, the agent uses all email in your mailbox as knowledge.
> Users that you share the agent with don't have access to your email as knowledge.
> This capability is only available to users with a Microsoft 365 Copilot add-on license.

## Embedded file content

You can upload files directly from your device for your agent to use as knowledge. The files that you upload become embedded content in the agent. To upload files, you can drag-and-drop from your device into the **Describe** tab or the **Configure** tab. You can also choose the arrow icon on the **Configure** tab to upload files from your device. You can upload individual files from your device, but not file folders.

You can add up to 20 files as knowledge sources.

Embedded files are displayed on the **Configure** tab under **Uploaded files**. Files can take a few minutes to upload and appear gray until they're fully uploaded. The upload time can vary based on the file size and internet speed. For information about size limits for embedded files, see [File size limits](#file-types-and-size-limits).

To remove a file you uploaded, choose the X next to the file, and choose **Remove**.

Files with any of the following characteristics aren't supported:

- Double key encryption.
- Sensitivity labels that have user-defined permissions. If you upload a file with user-defined permissions, agent creation fails.
- Sensitivity labels that have extract rights permission disabled. If you upload these files, agent creation fails. If an agent user doesn't have extract rights to an embedded file, the user can't access the agent.
- Files from another tenant that have encryption enabled.
- Password protection.

For details, see [Unsupported sensitivity label scenarios](#unsupported-sensitivity-label-scenarios).

> [!CAUTION]
> When you upload files as knowledge sources for your agent, any user who has access to the agent has access to the information in the file. Access to the agent is restricted if a user doesn't have extract rights access permissions to any sensitivity label on the files.

For information about embedded file content indexing and retrieval, see [Optimize content retrieval](optimize-content-retrieval.md).

### Sensitivity labels for agent embedded content

A sensitivity label is applied to the agent embedded content if any of the files uploaded have a sensitivity label on them, or if the tenant has a default [sensitivity labeling](/purview/sensitivity-labels) policy. The sensitivity label applied to the agent embedded content ensures that the agent is compliant with the organization's Microsoft Purview policies.

The sensitivity label applied to the embedded content is the higher priority of the following labels:

- The highest priority sensitivity label applied to any embedded file.
- The [default sensitivity label policy](/purview/default-sensitivity-labels-policies#default-sensitivity-label-policy) applied by the organization.

For example, if a file with a General label and a file with a Confidential label are embedded in the agent, the Confidential sensitivity label is applied to the embedded content.

> [!NOTE]
> The sensitivity label applies only to the embedded content; it doesn't apply to other knowledge sources that the agent references, such as SharePoint files or Copilot connector content.

Only users who have extract right permissions to the sensitivity label applied to the embedded content can access and use the agent. The label doesn't appear on the Agent Store listing. Users who don't have extract right permissions to the embedded content can view the agent and the agent description, but they can't install and use the agent.

A sensitivity label is also applied to agent responses. This label is the higher priority of the following labels:

- The sensitivity label of the embedded content
- The sensitivity label of any other agent knowledge sources, such as SharePoint and OneDrive files.

Currently, you can't set a sensitivity label on an agent.

#### Unsupported sensitivity label scenarios

The following table lists sensitivity label scenarios that aren't currently supported, describes the behavior when a builder uploads the file to the agent, and provides the recommended action for the builder.

| Scenario | Behavior | Action |
| -------- | -------- |
| Sensitivity label with Double Key Encryption (DKE) enabled | The file is embedded but isn't used as knowledge. The builder doesn't see an error message when they upload the file. | We recommend that you avoid uploading files with DKE because they can't be used as knowledge. |
| Sensitivity label with user-defined permissions enabled | The file is uploaded but agent creation fails without an error message. | Remove any uploaded files with user-defined permissions. |
| Sensitivity label with extract rights disabled for the user | The file is uploaded but agent creation fails without an error message. | Remove any uploaded files with extract rights enabled. |
| Files with sensitivity labels from another tenant that has encryption enabled | The file is embedded in the agent but isn't used as knowledge. | We recommend that you avoid uploading files with sensitivity labels from tenants with encryption enabled because they can't be used as knowledge. |
| Files with password protection | The file is uploaded and the builder sees an error message next to the uploaded file. | Remove any uploaded files with password protection. |

### Sharing an agent with embedded files

When you share an agent with embedded files, the files are only shared with users when they acquire the agent. After they acquire the agent, users can get responses from Copilot based on those knowledge sources. You have the following options for sharing an agent with embedded files as knowledge:

- Anyone in your organization
- Specific users in your organization
- Only you

When you [share the agent](/microsoft-365-copilot/extensibility/copilot-studio-agent-builder-publish#share-the-agent), if sensitivity labels are set on the embedded content, the sensitivity label is displayed on the **Share** screen.

### File types and size limits

The following table lists the file types that you can add as knowledge to your agent and the embedded file size limits for each file type.

| File type | Embedded file limit |
| ----------| ------------------- |
| .doc      | 512 MB |
| .docx     | 512 MB |
| .html\*   |  NA    |
| .pdf      | 512 MB |
| .ppt      | 512 MB |
| .pptx     | 512 MB |
| .txt      | 512 MB |
| .xls      | 30 MB |
| .xlsx     | 30 MB |

\* Only supported for SharePoint Online.

> [!NOTE]
> - Agents respond best to queries based on data in Excel when the data is in one sheet within a workbook.
> - To optimize for Copilot, we recommend that you keep the contents of files that you upload concise. For more information, see [Length of documents that you provide to Copilot](https://support.microsoft.com/topic/keep-it-short-and-sweet-a-guide-on-the-length-of-documents-that-you-provide-to-copilot-66de2ffd-deb2-4f0c-8984-098316104389).

## People data

You can ground your agent in People data to deliver more personalized and context-aware responses. People data provides public information about individuals, such as name, position, skills, and organizational relationships. This allows agents to look up user and colleague profiles, including reporting structure and contact details.

People data is enabled by default for agents created by users with a Microsoft 365 Copilot license. You can disable or re-enable this capability in the agent configuration UI. To disable or enable People data:

- On the **Configure** tab in Agent Builder in Microsoft 365 Copilot, select the toggle next to **Reference people in organization** to turn People data off or on.

This feature is available only to users with a Microsoft 365 Copilot add-on license.

> [!NOTE]
> People data acts as a personalization layer, enriching agent responses with context from Microsoft 365. It doesn't introduce new privacy risks, but provides transparency and control for users and administrators.

## Copilot connectors

Copilot connectors allow agents to access and apply knowledge from external systems such as customer accounts, incident tickets, code repositories, and knowledge articles. You can use Copilot connectors to integrate enterprise data into your agents, empowering them with domain-specific knowledge.

> [!NOTE]
> Admins must enable and configure Copilot connectors in the [Microsoft 365 admin center](/microsoftsearch/configure-connector).

For more information about Copilot connectors, see [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md).

### Scope Copilot connector data sources

To enhance the accuracy and relevance of agent responses, agents can be grounded not only in broad organizational data but also in specific scoped data. To scope connector data in your agent to a specific attribute:

1. On the **Configure** tab, under **Choose other data sources**, choose the connector for your data source.
1. On the card for that connector, add the connections that are relevant to your scenario.
1. Choose the arrow to go back to the **Knowledge** section.
1. Expand the connector that you added and select the attribute that you want to scope the knowledge to (for example, project, space, folder), and search for or type the attribute name.

   > [!NOTE]
   > If the attribute doesn't appear in the search results, it might be because:
   >
   > * Your administrator didn't configure the scoped content.
   > * You don't have the required permissions to access the content.
   > * The scope isn't valid for the selected connector.

1. Select the attribute from the list to add it. 
1. Your agent's knowledge is now scoped to the data associated with the scoped attribute.

For example, when you use the **Azure DevOps Work Items** connector, you can scope the agent to a particular area path to ensure that the agent focuses only on the most pertinent work items.

To scope the **Azure DevOps Work Items** area path:

1. Under **Choose other data sources**, select **Azure DevOps Work Items**.
2. Choose the **Add** button next to the connections that are relevant to your tasks.
3. Choose the arrow to return to the **Knowledge** section.
4. Choose **Select an area path** and search for or type the area path name.
5. Select the area path to add it.

:::image type="content" source="assets/images/copilot-studio-lite/embedded-authoring-copilot-connectors.png" alt-text="A screenshot of the Knowledge section of the Configure tab with Choose other data sources highlight and several Copilot connectors shown.":::

The following table lists the Copilot connectors that support scoping and the attributes that you can use to scope the data.

| Connector | Scoping attribute |
| ----------- | ----------------- |
| Azure DevOps Work Items | Area path |
| Azure DevOps Wiki | Project |
| Confluence | Space |
| Google Drive | Folder |
| GitHub Cloud Pull Requests | Repository |
| GitHub Cloud Issues | Repository |
| GitHub Cloud Knowledge | Repository |
| Jira | Project |
| ServiceNow Knowledge | Knowledge base |
| ServiceNow Catalog | Catalog |
| ServiceNow Tickets | Entity type (Sys_class_name/ Category/ Subcategory) |

For more information about the Copilot connectors that are available, see the [Connectors gallery](/microsoftsearch/connectors-gallery?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext). 

## Prioritize your knowledge sources over general knowledge

You can configure your agent to prioritize the knowledge sources you provide—such as SharePoint content or embedded files—when it responds to queries that require knowledge-based searches. Knowledge-based searches are user requests to look up specific information; for example:

- Who is the current company CEO?
- When is the next business conference?
- What's the most recent update related to a feature?

Some user requests don't require knowledge-based searches; the agent can respond based on general AI knowledge. For example:

- Translate this phrase into Spanish: "Hello, how are you?"
- What is 1+1?

When you enable this feature, the agent answers simple questions that don't require searching based on its general knowledge, but uses your knowledge sources only to answer any search-based questions. If the agent can't find relevant information in the knowledge sources you provide, it responds with a fallback message that states that it can't find the information.

To configure your agent to prioritize your knowledge sources, on the **Configure** tab, choose the toggle next to **Only use specified sources**.

> [!NOTE]
> Agent Builder in Microsoft 365 Copilot doesn't support blocking general AI knowledge from your agent's responses. For stricter control over knowledge sources, use Copilot Studio. For more information, see [Orchestrate agent behavior with generative AI](/microsoft-copilot-studio/advanced-generative-actions).

## Related content

- [Overview of Microsoft 365 Copilot](copilot-studio-lite.md)
- [Build agents with Microsoft 365 Copilot](copilot-studio-lite-build.md)
- [Build an agent from a template](agent-templates-overview.md)
- [Share and manage agents](copilot-studio-lite-share-manage-agent.md)
