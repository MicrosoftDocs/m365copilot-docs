---
title: Copilot Studio agent builder
description: Learn about building Copilot agents with Copilot Studio agent builder
author: jasonxian-msft
ms.author: jasonxian
ms.topic: conceptual
---

# Copilot Studio agent builder

Build Copilot agents for [Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-overview) easily and quickly with the Copilot Studio agent builder in Microsoft 365 Copilot. Copilot Studio agent builder lets you create and customize Copilot agents that can be used with Microsoft 365 Copilot to cover scenario-specific uses cases, such as:

- An agent that provides writing or presentation coaching that is tailored to organizational standards
- A team onboarding agent that responds with specific information about the user's new team and helps them complete onboarding tasks

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-starter.png" alt-text="Copilot Studio agent builder initial screen":::

These agents are also referred to as [declarative agents](overview-declarative-agent.md), because you *declare* instructions, knowledge, and actions to extend Microsoft 365 Copilot. Declarative agents run on the same orchestrator, foundation models, and trusted AI services that power Microsoft Copilot. You don't need to understand the intricacies of conversational user experience, turn-based conversations, prompt engineering or modification, or any coding languages.

You can specify dedicated knowledge sources, including content on SharePoint and information provided by Microsoft Graph connectors. You can also test the agent before deploying it for use in your conversations with Microsoft 365 Copilot or sharing it with others in your organization.

You can build agents from the following apps and sites:

- microsoft365.com/chat
- office.com/chat
- Microsoft Teams Desktop and web client
- Microsoft Outlook Desktop and web client

> [!NOTE]
> Agent builder is only available under the Work section of Microsoft 365 Copilot app. It is not available on mobile versions of these apps and sites, or for Microsoft 365 Copilot locations that are not listed in this article.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-entry.png" alt-text="Entry point in Microsoft 365 Copilot":::

## Prerequisites

You need a license for [Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/copilot/enterprise) with the **Copilot Studio in Copilot for M365** app enabled. Admins can assign or unassign licenses for users in the [Microsoft 365 admin center](/microsoft-365/admin/manage/assign-licenses-to-users).

## Availability and Language Support

### Geographic Availability

The agent builder is available in these countries/regions: Australia, Brazil, Canada, Europe, Germany, India, Japan, Switzerland, United Arab Emirates, United Kingdom, and United States. In regions where the agent builder isn't supported, the user can create a Copilot agent in the full version of [Copilot Studio](/microsoft-copilot-studio/fundamentals-get-started)

### Agent Languages

A user can chat with an agent created using the Copilot Studio agent builder using any of the following languages: English, French, German, Italian, Japanese, Portuguese, Spanish, and Simplified Chinese. You can create agents to engage with users in the supported languages.

### Authoring Languages

The authoring language is the one in which the authoring UI is presented. By default, this language is your Microsoft 365 language setting. You can change the authoring language by [changing your Microsoft 365 language setting](https://support.microsoft.com/topic/change-your-display-language-and-time-zone-in-microsoft-365-for-business-6f238bff-5252-441e-b32b-655d5d85d15b).

The following authoring languages are supported: `cs-CZ`, `da-DK`, `de-DE`, `el-GR`, `en-US`, `es-ES`, `fi-FI`, `fr-FR`, `hi-IN`, `id-ID`, `it-IT`, `ja-JP`, `ko-KR`, `nb-NO`, `nl-NL`, `pl-PL`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `tr-TR`, `zh-CN`, `zh-TW`.

## Author a Copilot agent

The Agent builder allows you to author a Copilot agent in two ways: either using natural language (**Describe** tab) or manually (**Configure** tab). Both tabs work seamlessly to provide a rich authoring experience.

The availability of the **Describe** tab is based on geographic availability and language support. The **Describe** tab only supports English. When the authoring language is set to English, the **Describe** tab is available in the following regions: Australia, India, Japan, United Arab Emirates, United Kingdom, and United States. You can build your agent via the **Configure** tab if the **Describe** tab is unsupported in your region or preferred language.

### Describe your Copilot agent

The **Describe** tab allows you to create an agent using plain language. As you provide information conversationally, the agent's name, description, and instruction update continuously to refine the agent's behavior. This experience provides a rich yet simple natural language way of creating a customized Copilot agent. After creating a Copilot agent, you can return to the agent and use the **Describe** tab to update the agent using natural language.

You build agents in plain language by answering the questions the agent builder asks. The builder progressively updates the Copilot agent in each turn of the conversation, and changes are automatically saved. You can make updates to the Copilot agent in any turn of the conversation. Changes to the agent's name, description, and instructions update automatically. However, you can't add an icon or knowledge sources directly from the **Describe** tab. Adding an icon or knowledge sources is available on the **Configure** tab.

### Configure your Copilot agent

In addition to using the **Describe** tab, you can also directly configure the agent's behavior using the **Configure** tab.

The **Configure** tab provides you with the ability to view and edit information about the agent, giving you more control and more precision. The **Describe** and **Configure** tabs are in sync. The fields in the **Configure** tab update to reflect the latest changes from the **Describe** tab. You can switch between the tabs to use the experience that is most comfortable to you to author the agent.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-configure.png" alt-text="The Configure tab lets users manually edit the agent":::

The following table describes the fields that make up the Copilot agent:

<!-- markdownlint-disable MD033 -->
| Field               | Description |
| ------------------- | ----------- |
| **Name**            | The name of your agent. Otherwise use something that is descriptive and unique Character limit of 30 characters. |
| **Icon**            | You can manually upload an image to represent your agent and give it a unique personality. <ul><li>Supported file types: PNG</li><li>Color icon resolution limit of 192x192 pixels</li><li>File size limit of 1 MB</li></ul> A PNG file with a transparent background works best due to the extra padding that is applied by default around your icon. |
| **Description**     | The description helps the Large Language Model (LLM) identify and use your agent for a specific task or situation. Make it as short, precise, and simple as possible. It's also displayed in the app file for use in the app catalog. Character limit of 1,000 characters. |
| **Instructions**    | Specific instructions to the LLM that you want to use to extend the capabilities of Microsoft 365 Copilot. They direct the behavior of the agent, including its tasks and how it completes them. If you're using the **Describe** tab, they're autogenerated for you. Character limit of 8,000 characters. |
| **Knowledge**       | You can specify up to 20 knowledge sources (including SharePoint sites, folders, and files) or Microsoft Graph connectors. See the [Knowledge](#knowledge) section for details. |
| **Starter Prompts** | Starter prompts help other users understand commonly supported scenarios by your agent. Each starter prompt comes with a name and description. There's no minimum number of starter prompts. |
<!-- markdownlint-enable MD033 -->

## Try your Copilot agent

The agent in the right pane is an ephemeral instance of the Copilot agent that shows up as a side-by-side screen within the authoring experience. It can be used to test the agent while creating it or while making subsequent updates. Using the test pane, you can test your Copilot agent to experience it in a similar way to end users. It's enabled once the agent has name, description, and instructions. It behaves according to those instructions like a fully fledged Copilot agent, including the ability to respond to complex queries within its realm of specified knowledge. The agent updates during each turn of the conversation as new information is added in the **Describe** or **Configure** tab.

The agent you see in the test pane isn't created yet, so some features aren't available. For example, you can't use it to share prompts, provide feedback, or @mention other agents in the Microsoft 365 Copilot app. These features become available after creating the Copilot agent.

The test pane initially appears with suggested starter prompts, which when clicked invokes the prompt and starts the conversation. You can select **New Chat** to start a new conversation with the agent to view the starter prompts again.

## Knowledge

The agent builder allows you to configure specific knowledge sources for the agent to reference. This feature helps the Copilot agent provide more relevant answers based on specific files, folders, and sites from SharePoint and [Microsoft Graph connectors](/graph/connecting-external-content-connectors-overview).

### Web

You can enable/disable web content when authoring or editing your Copilot agent.

When enabled, the Copilot agent can use publicly available web information to augment its response to a prompt. Responses shown to the user are also shown with citations and labeled with an icon to represent web content use. When disabled, the Copilot agent uses its pretrained knowledge and any knowledge sources you add.

### SharePoint

The Copilot agent can reference specific SharePoint sites, files, and folders as its knowledge source. When referencing sources from SharePoint, consider the following limits:

- The supported file types are: .docx, .doc, .pdf, .txt, .pptx, .ppt, .html
- Individual files must not be larger than 150 MB.
- A total of 20 knowledge sources (including sites, folders, and files) can be selected for each Copilot agent.
- Files already uploaded to SharePoint may have existing permissions and [sensitivity labels](/purview/sensitivity-labels), which are respected when the Copilot agent is generating a response.

> [!IMPORTANT]
> If [Restricted SharePoint Search](/sharepoint/restricted-sharepoint-search) is enabled, you won't be able to use SharePoint as a knowledge source.

#### Entering a URL for a SharePoint site or folder

You can enter a URL for a SharePoint site or folder, such as `contoso.sharepoint.com/sites/policies`. The Copilot agent searches the URL and subpaths. For example, a URL such as `contoso.sharepoint.com/sites` also includes subpaths like *contoso.sharepoint.com/sites/policies*. The Copilot agent uses relevant information to provide a targeted response.

> [!NOTE]
>
> - Recognized SharePoint URLs are from the sharepoint.com domain and contain the path `{org}.sharepoint.com/sites/{site}`.
> - SharePoint site URLs can't be more than two levels deep.
> - Only modern pages are supported.
> - Content from classic aspx pages on SharePoint aren't used to generate answers.

After providing the SharePoint site URL, press **Enter** to add it as a knowledge source.

#### Opening the SharePoint file picker

You can also select files or folders from the SharePoint file picker. The left pane displays your OneDrive Business files and recently accessed SharePoint sites. You can view more SharePoint sites by selecting **More places**. If you recently created a site, it will appear after several minutes.

> [!NOTE]
> The SharePoint picker may not show all the [communication sites](/microsoft-365/community/team-site-or-communication-site) that you have access to. Communication sites only show up in the **Quick Access** and **Recent** sections of the SharePoint picker.

After selecting a site, you can select several files and folders. Doing so adds the SharePoint file or folder to the Copilot agent's knowledge sources. When there are multiple folders in the same site, select the button next to the folder name to view other folders.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-sharepoint-picker-folders.png" alt-text="SharePoint file picker":::

You can also upload files into SharePoint using the picker. The file appears in the same folder once it's finished uploading and is ready for use in agent builder.

#### File readiness

When new files are uploaded to SharePoint, they can take up to several minutes to be ready for Copilot agent to include in its response. You can still test your Copilot agent with the test pane even if sources aren't ready. However, responses won't include information from the newly uploaded file until it's ready. You can check the file readiness by looking in the **Knowledge** section in the **Configure** tab; the file has the word "Preparing" next to it. When the underlying file uploaded to SharePoint is renamed or deleted, the Copilot agent picks up the changes. You can also select the reload button on top of the **Knowledge** section to manually reload the state.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-knowledge-preparing.png" alt-text="Knowledge sources preparing state":::

#### Microsoft Graph connectors

Microsoft Graph connectors allow Copilot agents to include knowledge from external repositories or systems such as customer accounts, incident tickets, and knowledge articles. Admins must enable and configure Microsoft Graph connectors in the [Microsoft Admin Center](/microsoftsearch/configure-connector). At first, the connectors may be collapsed in the **From your organization** section of the **Knowledge** sources.

If at least one connector is enabled, you can add it to your Copilot agent. Your agent is able to answer questions related to that connector. The information retrieved from the connector is indexed and refreshed according to the way in which the connector was configured. The Copilot agent may cite relevant information from the indexed data and link the end user to the data source.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-graph-connectors.png" alt-text="Graph connectors in hte Knowledge sources":::

## Create the Copilot agent

Changes made to the Copilot agent are automatically saved in the agent builder. When you're satisfied with its behavior and content, you can create the Copilot agent to use it in Microsoft 365 Copilot by selecting **Create** on the top right corner. Once the Copilot agent is created successfully, selecting **Go to agent** brings you into Microsoft 365 Copilot with a new chat opened with the Copilot agent. You can easily return to chat with their Copilot agents from the right rail of Microsoft Copilot.

## Share the Copilot agent

You can share your Copilot agent with other users via a link once it is created. When you share an agent, the people you share the agent with can use it, but they can't edit it. You can change the sharing option at any time by clicking the **Share** button at the top right corner.

### Sharing options

Several sharing options are available:

| Sharing option                                          | Description |
| ------------------------------------------------------- | ----------- |
| Anyone in your organization                             | Anyone in your tenant can use the sharing link to use the Copilot agent. |
| Specific users in your organization via security groups | Specific user groups can use the sharing link to use the Copilot agent. These user groups must be specified via [security groups](/microsoft-365/admin/email/create-edit-or-delete-a-security-group?view=o365-worldwide) in your tenant's Microsoft directory. |
| Only me                                                 | Only the author of the Copilot agent can use the Copilot agent. The sharing link can't be used by anyone else. This sharing option is selected by default. |

> [!NOTE]
> Copilot agents can only return information from knowledge sources that the shared users have access to. If your agent contains knowledge sources from SharePoint files and folders, it is recommended to share the agent with specific users in your organization via security groups to automatically share the files with users so the agent can return responses from those sources.

### Automatically share SharePoint file and folder

When you share an agent, Copilot users may not have access to all the underlying knowledge sources. The Copilot agent respects the end user's information and sensitivity privileges. If the user doesn't have access to a knowledge source, the Copilot agent won't include content from it when generating a response. You can automatically share the underlying Knowledge sources to security groups when the Share option is set to **Specific users in your organization via security groups**.

> [!NOTE]
> Only files and folders added to the agent can be automatically shared. SharePoint sites will not be automatically shared. A site administrator will need to grant user permission via site settings.

You can select which folder or files to share. Sharing only works when the author of the Copilot agent already has permissions to share or update the sharing permissions. [File sensitivity](/purview/sensitivity-labels) applied to files in SharePoint or OneDrive are respected. If the sharing on a file or folder fails, the Copilot agent is still shared with the users. The author needs to contact the file owners or the SharePoint site admin to grant permission to the file or folder directly from SharePoint.

When a user's access to the Copilot agent is removed, it doesn't affect their access to the shared file or folders. Use file permission management in SharePoint to manage user's access to the files and folders.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-auto-share.png" alt-text="Auto-sharing knowledge sources":::

## Copilot agent acquisition

The shared link brings end users to the Microsoft 365 app store to view the details of the agent before adding it to Microsoft 365 Copilot. After the user adds the agent, they can open it in Copilot with a new chat created. Adding the agent only needs to be done the first time for a Copilot agent, users can return to Microsoft 365 Copilot to find the agent on the right rail for subsequent uses.

## Manage Copilot agents

To manage an existing agent, you can:

- Select the ellipses (**...**) and **Edit** from a Copilot agent on the right rail of Microsoft Copilot.
- Select **Create agents** from the right rail of Microsoft Copilot, then select **View all agents** from the name drop-down menu

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-last-accessed.png" alt-text="The View all agents options in the recently accessed agents menu":::

Both options show the **My agents** list. You can select the existing agent that you want to change or update.

> [!NOTE]
> Only Copilot agents created by you will show in the **My agents** list. Shared agents from other users will not be on the list.

### Update your Copilot agent

Changes made to Copilot agents are automatically saved in the agent builder. Shared users of the Copilot agent won't see the latest changes until it is updated. To update a previously created agent, select **Update** on the top right corner. Your changes may take several minutes to become available for end users.

> [!NOTE]
> It is highly recommended to re-share your Copilot agent with the same group of users when the Copilot agent has SharePoint file and folder knowledge source and has been shared with specific users in the organization. This will auto share the files and folders again with the users to ensure consistent agent experience.

### Delete your Copilot agent

The Copilot agent author can delete their existing Copilot agents. After deletion, the Copilot agent will no longer be available to the author or shared users to use in Microsoft Copilot.

>[!IMPORTANT]
> Deleting a Copilot agent is permanent and cannot be reversed.

To delete an agent, follow one of these options:

- Select the ellipses (**...**) and **Delete** in the **My agents** list.
- From the authoring experience of a Copilot agent, select the ellipses (**...**) and **Delete** from the top right corner.

## Troubleshooting

When sharing an agent and its knowledge sources, you might encounter these errors:

<!-- markdownlint-disable MD033 -->
| Error code           | Description |
| -------------------- | ----------- |
| Something went wrong | An internal service error message. Contact support if this error continues to occur. |
| Couldn't share       | Insufficient privileges to update the sharing permissions on certain files. The error lists the files that were unable to be shared. The agent owner should go into SharePoint to try updating these permissions manually. See <ul><li>[Share a document](https://support.microsoft.com/office/share-a-document-using-sharepoint-or-onedrive-807de6cf-1ece-41b9-a2b3-250d9a48f1e8) to learn how to share files</li><li>[Sharing errors in SharePoint and OneDrive](/sharepoint/sharepoint-onedrive-error-message) for reference on error codes</li></ul> |
<!-- markdownlint-enable MD033 -->

If sharing failed, users who don't have access to the folder and files won't receive responses generated from those knowledge sources. Checking the box shares the underlying knowledge sources via SharePoint. Files can only be shared to valid individuals or security groups in your directory.

## Get Support

To get support, select **Send feedback** in Microsoft 365 Copilot.

In your feedback ticket, detail the issue you're facing and include the following pieces of information in the feedback dialog:

- Specify that the issue is related to Copilot Studio
- Agent ID
- Tenant ID
- Session ID
- If the issue is related to the test pane or **Describe** tab, type "/debug" within the chat box and include the contents in your ticket.

You can find and copy these details in the Copilot Studio agent builder within the **Get support** section of the **Help** dropdown menu.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-get-support-1.png" alt-text="Find the support details in agent builder":::

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-get-support-2.png" alt-text="Copy the support details in agent builder":::

## Governance

Admins can govern this feature by revoking access to the Copilot Studio in Copilot for M365 application within the Microsoft 365 Copilot license in the Microsoft admin center. To learn more about the Microsoft 365 Copilot license, see [Microsoft Microsoft 365 Copilot—Features and Plans](https://www.microsoft.com/microsoft-365/copilot/enterprise). To learn more about how to assign or unassign licenses for users in the Microsoft 365 admin center, see [Assign or unassign licenses](/microsoft-365/admin/manage/assign-licenses-to-users).

## Compliance

### Data Subject Rights

The European Union (EU) General Data Protection Regulation (GDPR) gives significant rights to individuals regarding their data. Refer to the Microsoft Learn [General Data Protection Regulation Summary](/compliance/regulatory/gdpr) for an overview of GDPR, including terminology, an action plan, and readiness checklists to help you meet your obligations under GDPR when using Microsoft products and services.

You can learn more about GDPR and how Microsoft helps support it and our customers affected by it.

- The [Microsoft Trust Center](https://www.microsoft.com/trust-center/privacy/gdpr-overview) provides general information, compliance best practices, and documentation helpful to GDPR accountability, such as Data Protection Impact Assessments, Data Subject Requests, and data breach notification.
- The [Service Trust portal](https://servicetrust.microsoft.com/ViewPage/GDPRGetStarted) provides information about how Microsoft services help support compliance with GDPR.

For more information and guidance, see the [Dynamics 365 Data Subject Requests guide](/compliance/regulatory/gdpr-dsr-dynamics365).

To delete your agent data, see [Delete your Copilot agent](#delete-your-copilot-agent).

> [!NOTE]
> Because access to your agent is managed by your Microsoft Entra ID tenant administrator, other users with admin permissions have access to your agent content.

### Requests to rectify personal data (Admin only)

If a data subject asks you to rectify their personal data that resides in your organization, you and your organization must determine if it's appropriate to honor the request. Rectifying the data might include taking actions such as editing, redacting, or removing personal data.

You can use Microsoft Entra to manage Copilot Studio users' identities. Enterprise customers can manage personal data rectify requests, including limited editing features, per the nature of a given Microsoft service. As a data processor, Microsoft doesn't offer the ability to correct system-generated logs because these logs reflect factual activities and constitute a historical record of events within Microsoft services.

## Known Limitations

- Only general web browsing, Microsoft Graph connectors, SharePoint sites, folders, and files can be specified as knowledge sources. You can upload your local folders and files into SharePoint. Specifying specific public URL as a knowledge source isn't supported.
- Share with specific users in the organization only supports security groups and not individual users.
- Auto sharing SharePoint files and folders is only supported when sharing with specific security groups and not everyone in the organization. You'll need to manually update the file and folder permission that the agent uses to grant permission to the intended users for the agent to return information from those knowledge sources.
- Agent builder doesn't yet support [Lockbox](/power-platform/admin/about-lockbox) or [Customer Managed Keys](/azure/storage/common/customer-managed-keys-overview).
- Agents created via Copilot Studio agent builder can't be used in Teams Chat.
