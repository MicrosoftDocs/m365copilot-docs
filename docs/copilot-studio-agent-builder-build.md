---
title: Use the Copilot Studio Agent Builder to Build Agents
description: Learn how to build agents by using Copilot Studio agent builder in Microsoft 365 Copilot.
author: jasonxian-msft
ms.author: jasonxian
ms.localizationpriority: medium
ms.date: 06/17/2025
ms.topic: conceptual
---

# Build agents with Copilot Studio agent builder

The Copilot Studio agent builder provides a simple interface that you can use to quickly and easily build declarative agents, either by using natural language or manually.

To get started with the Copilot Studio agent builder, open the Microsoft 365 Copilot app, and in the right rail, choose **Create agents**. You can also choose **Create agents** from Microsoft 365 Copilot in Teams.

> [!NOTE]
> Copilot Studio agent builder capabilities differ based on the user's license. For details, see [Agent capabilities for Microsoft 365 users](/microsoft-365-copilot/extensibility/prerequisites#agent-capabilities-for-microsoft-365-users).

You can author your declarative agent in two ways:

- Via the **Describe** tab, using natural language
- Via the **Configure** tab where you can build it manually

Both tabs work seamlessly to provide a rich authoring experience.

> [!NOTE]
> The **Describe** tab is only available when your Microsoft 365 language is set to one of the [available languages](copilot-studio-agent-builder-availability.md). You can build your agent via the **Configure** tab if the **Describe** tab isn't supported in your preferred language.

## Describe your agent

The **Describe** tab allows you to create an agent using plain language. As you provide information conversationally, the agent's name, description, and instructions update continuously to refine the agent's behavior. This experience provides a rich yet simple natural language way to create a customized agent. After you create an agent, you can return to the agent and use the **Describe** tab to update it using natural language.

You build agents in plain language by answering the questions the agent builder asks. The builder progressively updates the agent in each turn of the conversation, and changes are saved automatically. You can make updates to the agent in any turn of the conversation. Changes to the agent's name, description, and instructions update automatically. However, you can't add an icon or knowledge sources directly from the **Describe** tab. Use the **Configure** tab to add an icon, knowledge sources, or capabilities.

## Configure your agent

In addition to using the **Describe** tab, you can also directly configure the agent's behavior using the **Configure** tab.

The **Configure** tab provides you with the ability to view and edit information about the agent, giving you more control and more precision. The **Describe** and **Configure** tabs are in sync. The fields in the **Configure** tab update to reflect the latest changes from the **Describe** tab. You can switch between the tabs to use the experience that is most comfortable to you to author the agent.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-configure.png" alt-text="The Configure tab lets users manually edit the agent":::

The following table describes the fields that make up the agent.

<!-- markdownlint-disable MD033 -->
| Field               | Description |
| ------------------- | ----------- |
| **Name**            | The name of your agent. Use something that is descriptive and unique. Character limit of 30 characters. |
| **Icon**            | You can manually upload an image to represent your agent and give it a unique personality. <ul><li>Supported file types: PNG</li><li>Color icon resolution limit: 192x192 pixels</li><li>File size limit: 1 MB</li></ul> A PNG file with a transparent background works best due to the extra padding that is applied by default around your icon. |
| **Description**     | The description helps the Large Language Model (LLM) identify and use your agent for a specific task or situation. Make it as short, precise, and simple as possible. It's also displayed in the app file for use in the app catalog. Character limit of 1,000 characters. |
| **Instructions**    | Specific instructions to the LLM that you want to use to extend the capabilities of Microsoft 365 Copilot. They direct the behavior of the agent, including its tasks and how it completes them. If you're using the **Describe** tab, they're autogenerated for you. Character limit of 8,000 characters. For more information, see [Write effective instructions](declarative-agent-instructions.md).|
| **Knowledge**       | You can specify up to 20 knowledge sources (including SharePoint sites, folders, and files) or Copilot connectors. For details, see the [Add knowledge sources](#add-knowledge-sources) section. |
| **Capabilities** | You can enhance the user experience of your declarative agent by adding capabilities. For details, see [Add capabilities](#add-capabilities). |
| **Starter Prompts** | Starter prompts help other users understand commonly supported scenarios by your agent. Each starter prompt comes with a name and description. There's no minimum number of starter prompts. |
<!-- markdownlint-enable MD033 -->

## Try your agent

The agent in the right pane is an ephemeral instance of the agent that shows up as a side-by-side screen within the authoring experience. You can use it to test the agent while you're creating or making updates to it. You can test your agent in the test pane to experience it in a similar way to end users. The test pane is enabled after the agent has name, description, and instructions. It behaves according to those instructions like a fully fledged agent, including the ability to respond to complex queries within its realm of specified knowledge. The agent updates during each turn of the conversation as new information is added in the **Describe** or **Configure** tab.

The agent you see in the test pane isn't created yet, so some features aren't available. For example, you can't use it to share prompts, provide feedback, or @mention other agents in the Microsoft 365 Copilot app. These features become available after you create the agent.

The test pane initially appears with suggested starter prompts, which when clicked invokes the prompt and starts the conversation. You can select **New Chat** to start a new conversation with the agent to view the starter prompts again.

## Add knowledge sources

The agent builder allows you to configure specific knowledge sources for the agent to reference. To build context-aware agents, you can reference SharePoint items or any public websites. If your users have a Microsoft 365 Copilot add-on license, you can also ground your agents in personal work information such as Teams chat messages and Outlook emails, or use prebuilt [Microsoft 365 Copilot connectors](/graph/connecting-external-content-connectors-overview) (formerly Microsoft Graph connectors) that are enabled in your tenant.

To add knowledge sources, on the **Configure** tab in the agent builder:

- Search for an item in the search bar.
- Paste or type a URL in the search bar.
- Click the search bar and use the picker to select items.

- Websites
- SharePoint files, folders, and sites
- Embedded files uploaded from your device
- Microsoft 365 Copilot connectors (formerly Microsoft Graph connectors)

### Websites

You can add specific public websites as agent knowledge sources to make your agent context-aware. When you reference websites as knowledge sources, the following limits apply:

- Public website URLs must only be two levels; for example, `https://example.org/a/b/c` is an invalid URL because it's more than two levels.
- URLs can't contain query parameters; for example, `https://example.org?test=1` is invalid.
- You can add up to four URLs.

To configure your agent to use any web data as knowledge, on the **Configure** tab, click the **Knowledge** box, and choose **All websites**.

### SharePoint content

You can reference specific SharePoint sites, files, and folders as agent knowledge sources. When you reference sources from SharePoint, consider the following limits:

- A total of 20 knowledge sources (including sites, folders, and files) can be selected for each agent.
- Files already uploaded to SharePoint might have existing permissions and [sensitivity labels](/purview/sensitivity-labels), which are respected when the agent is generating a response.

For information about SharePoint knowledge file size limits, see [File size limits](#file-size-limits).

> [!IMPORTANT]
> If [Restricted SharePoint Search](/sharepoint/restricted-sharepoint-search) is enabled, you can't use SharePoint as a knowledge source.

#### Entering a URL for a SharePoint site, folder, or file

You can enter a URL for a SharePoint site, folder, or file, such as `contoso.sharepoint.com/sites/policies`. The agent searches the URL and subpaths. For example, a URL such as `contoso.sharepoint.com/sites` also includes subpaths like `contoso.sharepoint.com/sites/policies`. The agent uses relevant information to provide a targeted response.

After you provide the SharePoint URL, press **Enter** to add it as a knowledge source.

#### SharePoint file picker

You can also select files or folders from the SharePoint file picker by choosing the cloud icon in the **Knowledge** section. The left pane on the picker displays your recently accessed SharePoint sites. To view more SharePoint sites, select **More places**. If you recently created a site, it will appear after several minutes.

> [!NOTE]
> The SharePoint picker might not show all the [communication sites](/microsoft-365/community/team-site-or-communication-site) that you have access to. Communication sites only show up in the **Quick Access** and **Recent** sections of the SharePoint picker.

After you select a site, you can select several files and folders. Doing so adds the SharePoint file or folder to the agent's knowledge sources. When the same site includes multiple folders, select the button next to the folder name to view other folders.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-sharepoint-picker-folders.png" alt-text="SharePoint file picker":::

You can also upload files into SharePoint by using the picker. The file appears in the same folder after it finishes uploading and is ready for use in agent builder.

#### File readiness

When new files are uploaded to SharePoint, they can take up to several minutes to be ready for the agent to include in its response. You can still test your agent in the test pane if sources aren't ready. However, responses don't include information from the newly uploaded file until it's ready.

You can check the file readiness by looking in the **Knowledge** section in the **Configure** tab; the file has the word "Preparing" next to it. When the underlying file uploaded to SharePoint is renamed or deleted, the agent picks up the changes. You can also select the reload button on top of the **Knowledge** section to manually reload the state.

### Teams chat messages

You can ground your agent in Teams channel, group, and meeting chat messages. To add Teams chat messages, on the **Configure** tab, in the **Knowledge** section, click the search bar. On the **Chats** tab, you can include specific chats that you want to add as knowledge.

> [!IMPORTANT]
> You can add up to five chat sources.

If you don't want to scope the agent's knowledge to specific chats, under **Teams chats**, choose **My Teams chats from group chat, channels, and meetings** to use all chat messages you have the access to as knowledge.

:::image type="content" source="assets/images/capabilities-teamsChat-emails.png" border="false" alt-text="Screenshot of the knowledge picker with My Teams chats from groups, channels, and meetings highlighted":::

### Outlook email

You can ground your agent in Outlook email. To add email as a knowledge source, on the **Configure** tab, in the **Knowledge** section, click the search bar, and choose **My emails**.

> [!NOTE]
> - You can't scope email knowledge. When you add email, the agent uses all email in your mailbox as knowledge.
> - Users that you share the agent with don't have access to your email as knowledge.

### Embedded file content

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

#### Sensitivity labels for agent embedded content

A sensitivity label is applied to the agent embedded content if any of the files uploaded have a sensitivity label on them, or if the tenant has a default [sensitivity labeling](/purview/sensitivity-labels) policy. The sensitivity label applied to the agent embedded content ensures that the agent is compliant wth the organization's Microsoft Purview policies.

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

##### Unsupported sensitivity label scenarios

The following table lists sensitivity label scenarios that aren't currently supported, describes the behavior when a builder uploads the file to the agent, and provides the recommended action for the builder.

| Scenario | Behavior | Action |
| -------- | -------- |
| Sensitivity label with Double Key Encryption (DKE) enabled | The file is embedded but isn't used as knowledge. The builder doesn't see an error message when they upload the file. | We recommend that you avoid uploading files with DKE because they can't be used as knowledge. |
| Sensitivity label with user-defined permissions enabled | The file is uploaded but agent creation fails without an error message. | Remove any uploaded files with user-defined permissions. |
| Sensitivity label with extract rights enabled for the user | The file is uploaded but agent creation fails without an error message. | Remove any uploaded files with extract rights enabled. |
| Files with sensitivity labels from another tenant that has encryption enabled | The file is embedded in the agent but isn't used as knowledge. | We recommend that you avoid uploading files with sensitivity labels from tenants with encryption enabled because they can't be used as knowledge. |
| Files with password protection | The file is uploaded and the builder sees an error message next to the uploaded file. | Remove any uploaded files with password protection. |


#### Sharing an agent with embedded files

When you share an agent with embedded files, the files are also shared, and agent users can get responses from Copilot based on those knowledge sources. You have the following options for sharing an agent with embedded files as knowledge:

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

### Copilot connectors

Copilot connectors allow agents to include knowledge from external repositories or systems such as customer accounts, incident tickets, and knowledge articles. Admins must enable and configure Copilot connectors in the [Microsoft 365 admin center](/microsoftsearch/configure-connector). At first, the connectors might be collapsed in the **From your organization** section of the **Knowledge** sources.

If at least one connector is enabled, you can add it to your agent. Your agent is able to answer questions related to that connector. The information retrieved from the connector is indexed and refreshed according to the way in which the connector was configured. The agent can cite relevant information from the indexed data and link the end user to the data source.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-copilot-connectors.png" alt-text="Copilot connectors in the Knowledge sources":::

## Add capabilities

In the **Capabilities** section of the **Configure** tab, you can choose to add the following capabilities to your agent:

- [Code interpreter](code-interpreter.md) - Uses Python code to solve complex math problems, analyze data, and generate visualizations.
- [Image generator](image-generator.md) - Generates images base on user prompts.

To add one or more capabilities to your agent, choose the toggle next to the capability you want to enable.

## Build from a template

Copilot Studio agent builder includes templates that you can use to build agents for specific use cases. The templates are preconfigured with a description, instructions, and prompts. You can use the templates as-is or customize them for your specific needs, including by adding knowledge sources and capabilities. For more information, see [Agent builder templates overview](agent-builder-templates.md) or choose one of the templates on the **Describe** or **Configure** tab in agent builder.

## Next step

> [!div class="nextstepaction"]
> [Publish and manage Copilot Studio agent builder agents](copilot-studio-agent-builder-publish.md)
