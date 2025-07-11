---
title: Add Knowledge Sources to your Declarative Agent for Microsoft 365 by Using Copilot Studio Agent Builder
description: Learn about the different types of knowledge sources that you can add to your declarative agent when you use Copilot Studio agent builder.
author: xwen
ms.author: xwen
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 07/11/2025
---

# Add knowledge sources to your declarative agent by using agent builder

The Copilot Studio agent builder experience provides a simple interface for you to integrate knowledge sources to make your declarative agent more intelligent and context-aware. These knowledge sources ground your agent in enterprise data, public content, and user-specific information to enable them to deliver more accurate, relevant, and personalized responses.

This article describes the supported knowledge sources and the steps to configure them in agent builder. For general information about how to use agent builder, see [Build agents with Copilot Studio agent builder](/microsoft-365-copilot/extensibility/copilot-studio-agent-builder-build).

For more information about supported knowledge sources and licensing requirements, see [Knowledge sources](/microsoft-365-copilot/extensibility/knowledge-sources).

## Add knowledge sources in agent builder

To add knowledge sources to your agent:

1. In Microsoft 365 Copilot, choose **Create agent**, and go to the **Configure** tab.
2. In the **Knowledge** section, use one of the following methods to add knowledge sources:
   * **Search bar** - Type keywords to search for SharePoint items.
   * **Enter URL** - Add a public website or SharePoint link (must be two levels deep and without query parameters).
   * **Picker** - Use the file picker UI to browse for and select SharePoint files or folders.
3. Select the items to include. You can add:
   * Up to four public website URLs.
   * SharePoint files, folders, or sites.
   * Up to five Teams chat URLs.
   * Embedded files uploaded from your device.
   * Microsoft 365 Copilot connectors (if enabled by your organization's administrator).
  
  :::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-select-knowledge.png" alt-text="A screenshot of the Knowledge section of the Configure tab with the Picker UI showing.":::

## Public websites

You can add specific public websites as agent knowledge sources to make your agent context-aware. When you reference websites as knowledge sources, the following limits apply:

- Public website URLs must only be two levels; for example, `https://example.org/a/b/c` is an invalid URL because it's more than two levels.
- URLs can't contain query parameters; for example, `https://example.org?test=1` is invalid.
- You can add up to four URLs.

To configure your agent to use any web data as knowledge, on the **Configure** tab, click the **Knowledge** box, and choose **All websites**.

## SharePoint content

You can reference specific SharePoint sites, files, and folders as agent knowledge sources. When you reference sources from SharePoint, consider the following limits:

- A total of 20 knowledge sources (including sites, folders, and files) can be selected for each agent.
- Files already uploaded to SharePoint might have existing permissions and [sensitivity labels](/purview/sensitivity-labels), which are respected when the agent is generating a response.

For information about SharePoint knowledge file size limits, see [File size limits](#file-size-limits).

> [!IMPORTANT]
> If [Restricted SharePoint Search](/sharepoint/restricted-sharepoint-search) is enabled, you can't use SharePoint as a knowledge source.

### Entering a URL for a SharePoint site, folder, or file

You can enter a URL for a SharePoint site, folder, or file, such as `contoso.sharepoint.com/sites/policies`. The agent searches the URL and subpaths. For example, a URL such as `contoso.sharepoint.com/sites` also includes subpaths like `contoso.sharepoint.com/sites/policies`. The agent uses relevant information to provide a targeted response.

After you provide the SharePoint URL, press **Enter** to add it as a knowledge source.

### SharePoint file picker

You can also select files or folders from the SharePoint file picker by choosing the cloud icon in the **Knowledge** section. The left pane on the picker displays your recently accessed SharePoint sites. To view more SharePoint sites, select **More places**. If you recently created a site, it will appear after several minutes.

> [!NOTE]
> The SharePoint picker might not show all the [communication sites](/microsoft-365/community/team-site-or-communication-site) that you have access to. Communication sites only show up in the **Quick Access** and **Recent** sections of the SharePoint picker.

After you select a site, you can select several files and folders. Doing so adds the SharePoint file or folder to the agent's knowledge sources. When the same site includes multiple folders, select the button next to the folder name to view other folders.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-sharepoint-picker-folders.png" alt-text="SharePoint file picker":::

You can also upload files into SharePoint by using the picker. The file appears in the same folder after it finishes uploading and is ready for use in agent builder.

### File readiness

When new files are uploaded to SharePoint, they can take up to several minutes to be ready for the agent to include in its response. You can still test your agent in the test pane if sources aren't ready. However, responses don't include information from the newly uploaded file until it's ready.

You can check the file readiness by looking in the **Knowledge** section in the **Configure** tab; the file has the word "Preparing" next to it. When the underlying file uploaded to SharePoint is renamed or deleted, the agent picks up the changes. You can also select the reload button on top of the **Knowledge** section to manually reload the state.

## Teams chat messages

You can ground your agent in Teams channel, group, and meeting chat messages. To add Teams chat messages, on the **Configure** tab, in the **Knowledge** section, click the search bar. On the **Chats** tab, you can include specific chats that you want to add as knowledge.

> [!IMPORTANT]
> You can add up to five chat sources.

If you don't want to scope the agent's knowledge to specific chats, under **Teams chats**, choose **My Teams chats from group chat, channels, and meetings** to use all chat messages you have the access to as knowledge.

:::image type="content" source="assets/images/capabilities-teamsChat-emails.png" border="false" alt-text="Screenshot of the knowledge picker with My Teams chats from groups, channels, and meetings highlighted":::

## Outlook emails

You can ground your agent in Outlook email. To add email as a knowledge source, on the **Configure** tab, in the **Knowledge** section, click the search bar, and choose **My emails**.

> [!NOTE]
> - You can't scope email knowledge. When you add email, the agent uses all email in your mailbox as knowledge.
> - Users that you share the agent with don't have access to your email as knowledge.

## Embedded file content

You can upload files directly from your device for your agent to use as knowledge. The files that you upload become embedded content in the agent. To upload files, you can drag-and-drop from your device into the **Describe** tab or the **Configure** tab. You can also choose the arrow icon on the **Configure** tab to upload files from your device. You can upload individual files from your device, but not file folders.

You can add up to 20 files as knowledge sources.

Embedded files are displayed on the **Configure** tab under **Uploaded files**. Files can take a few minutes to upload and appear gray until they're fully uploaded. The upload time can vary based on the file size and internet speed. For information about size limits for embedded files, see [File size limits](#file-size-limits).

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

Currently, agent builders can't set a sensitivity label on an agent.

#### Unsupported sensitivity label scenarios

The following table lists sensitivity label scenarios that aren't currently supported, describes the behavior when a builder uploads the file to the agent, and provides the recommended action for the builder.

| Scenario | Behavior | Action |
| -------- | -------- |
| Sensitivity label with Double Key Encryption (DKE) enabled | The file is embedded but isn't used as knowledge. The builder doesn't see an error message when they upload the file. | We recommend that you avoid uploading files with DKE because they can't be used as knowledge. |
| Sensitivity label with user-defined permissions enabled | The file is uploaded but agent creation fails without an error message. | Remove any uploaded files with user-defined permissions. |
| Sensitivity label with extract rights enabled for the user | The file is uploaded but agent creation fails without an error message. | Remove any uploaded files with extract rights enabled. |
| Files with sensitivity labels from another tenant that has encryption enabled | The file is embedded in the agent but isn't used as knowledge. | We recommend that you avoid uploading files with sensitivity labels from tenants with encryption enabled because they can't be used as knowledge. |
| Files with password protection | The file is uploaded and the builder sees an error message next to the uploaded file. | Remove any uploaded files with password protection. |

### Sharing an agent with embedded files

When you share an agent with embedded files, the files are only shared with users when they have acquired the agent. After they acquire the agent, users can get responses from Copilot based on those knowledge sources. You have the following options for sharing an agent with embedded files as knowledge:

- Anyone in your organization
- Specific users in your organization
- Only you

> [!NOTE]
> Sharing an agent with embedded files to groups isn't currently supported.

When you [share the agent](/microsoft-365-copilot/extensibility/copilot-studio-agent-builder-publish#share-the-agent), if sensitivity labels are set on the embedded content, the sensitivity label is displayed on the **Share** screen.

### File size limits

The following table lists the file types that you can add as knowledge to your agent and the size limits for each file type.

| File type | SharePoint Online limit | Embedded file limit |
| ----------| ----------------------- | ------------------- |
| .doc      | 150 MB                  | 30 MB |
| .docx     | 512 MB                  | 30 MB |
| .html     | 150 MB                  | NA    |
| .pdf      | 512 MB                  | 30 MB |
| .ppt      | 150 MB                  | 30 MB |
| .pptx     | 512 MB                  | 30 MB |
| .txt      | 150 MB                  | 30 MB |
| .xls      | 150 MB                  | 30 MB |
| .xlsx     | 150 MB                  | 30 MB |

## Copilot connectors

Copilot connectors allow agents to access and apply knowledge from external systems such as customer accounts, incident tickets, code repositories, and knowledge articles. With agent builder, you can integrate enterprise data from your workspace directly into your agents, empowering them with domain-specific knowledge.

> [!NOTE]
> Admins must enable and configure Copilot connectors in the [Microsoft 365 admin center](/microsoftsearch/configure-connector).

To enhance the accuracy and relevance of agent responses, agents can be grounded not only in broad organizational data but also in specific scoped items. For example, when you use the Azure DevOps Work Items connector, you can scope the agent to a particular area path to ensure that the agent focuses only on the most pertinent work items.

To scope the Azure DevOps area path:

1. Under **Choose other data sources**, select **Azure DevOps Work Items**.
2. Choose the **Add** button next to the connections that are relevant to your tasks.
3. Choose the arrow to return to the **Knowledge** section.
4. Choose **Select an area path** and search for or type the area path name.
5. Select the area path to add it.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-copilot-connectors.png" alt-text="A screenshot of the Knowledge section of the Configure tab with Choose other data sources highlight and several Copilot connectors shown.":::

## Prioritize your knowledge sources over general knowledge

You can configure your agent to prioritize the knowledge sources you provide—such as SharePoint content or embedded files—when it responds to queries that require knowledge-based searches. Knowledge-based searches are user requests to look up specific information; for example:

- Who is the current company CEO?
- When is the next business conference?
- What's the most recent update related to a feature?

Some user requests don't require knowledge-based searches; the agent can respond based on general AI knowledge. For example:

- Translate this phrase into Spanish: "Hello, how are you?"
- What is 1+1?

When you enable this feature, the agent answers simple questions that don't require searching based on its general knowledge, but uses your knowledge sources only to answer any search-based questions. If the agent can't find relevant information in the knowledge sources you provide, it responds with a fallback message that states that it can't find the information.

To configure your agent to prioritize your knowledge sources, on the **Configure** tab, choose the toggle next to **Prioritize the knowledge source you added over general agent knowledge**.

## Related content

- [Overview of Copilot Studio agent builder](/microsoft-365-copilot/extensibility/copilot-studio-agent-builder)
- [Build agents from template](/microsoft-365-copilot/extensibility/agent-builder-templates)
