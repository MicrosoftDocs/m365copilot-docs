---
title: Publish and Manage Copilot Studio Agent Builder Agents
description: Learn how to publish and manage agents built with Copilot Studio agent builder.
author: jasonxian-msft
ms.author: jasonxian
ms.date: 09/05/2025
ms.topic: conceptual
---

# Publish and manage Copilot Studio agent builder agents

This article describes how to create or publish agents built with Copilot Studio agent builder, and how to update or delete agents.

## Create the agent

While you're [building your agent](copilot-studio-agent-builder.md), changes made to the agent are automatically saved in the agent builder. When you're satisfied with its behavior and content, you can create the agent to use it in Microsoft 365 Copilot by selecting **Create** on the top right corner.

After the agent is created successfully, select **Go to agent** to open a new chat with the agent in Microsoft 365 Copilot. You can easily return to chats with your agents from the right rail of Microsoft 365 Copilot.

## Share the agent

You can share your agent with other users via a link after you create it. When you share an agent, the people you share the agent with can use it, but they can't edit it. You can change the sharing option at any time by choosing the **Share** button at the top right corner.

### Sharing options

The following table lists the sharing options that are available.

| Sharing option                                          | Description |
| ------------------------------------------------------- | ----------- |
| Anyone in your organization                             | Anyone in your tenant can use the sharing link to use the agent. |
| Specific users in your organization | Specific users or groups can use the sharing link to use the agent. You must specify the names or emails of individuals, [security groups](/microsoft-365/admin/create-groups/compare-groups#security-groups), or [security-enabled](/graph/api/group-update) [Microsoft 365 groups](/microsoft-365/admin/create-groups/compare-groups#microsoft-365-groups) in your tenant's Microsoft directory. |
| Only me                                                 | Only the author of the agent can use the agent. No one else can use the sharing link. This sharing option is selected by default. |

> [!NOTE]
> When the Share option is set to **Specific users in your organization**, the search results might include [distribution groups](/microsoft-365/admin/create-groups/compare-groups#microsoft-365-groups). Sharing an agent with a distribution group can cause the share to fail.

### Deploy agents via ZIP package

Copilot Studio agent builder provides an option to download a ZIP package for manual deployment. This ZIP package contains the files you need to [sideload your agent into Microsoft Teams](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload).

To deploy an agent manually:

1. In Copilot Studio agent builder, open your agent and select the **More options (...) menu.
2. Choose **Download .zip file**. The .zip file includes the agent manifest and app icon.
3. Sideload your agent into Teams.

> [!NOTE]
> - The ZIP package can't include embedded files. Remove any embedded file content from the ZIP package.
> - Sideloading agents in Teams isn't supported on macOS.

### Automatically share SharePoint files and folders

When you share an agent, Copilot users might not have access to all the underlying knowledge sources. The agent respects the end user's information and sensitivity privileges. If the user doesn't have access to a knowledge source, the agent doesn't include content from it when generating a response. You can share SharePoint Knowledge sources with others when the **Share** option is set to **Specific users in your organization**.

> [!NOTE]
> Only files and folders added to the agent can be automatically shared. SharePoint sites aren't automatically shared. A site administrator must grant user permission via site settings.

You can select which folder or files to share. Sharing only works when the author of the agent already has permissions to share or update the sharing permissions. [File sensitivity](/purview/sensitivity-labels) applied to files in SharePoint or OneDrive are respected. If the sharing on a file or folder fails, the agent is still shared with the users. The author needs to contact the file owners or the SharePoint site admin to grant permission to the file or folder directly from SharePoint.

When a user's access to the agent is removed, it doesn't affect their access to the shared file or folders. Use file permission management in SharePoint to manage user's access to the files and folders.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-auto-share.png" alt-text="Auto-sharing knowledge sources":::

### Agent acquisition

The shared link brings end users to the Microsoft 365 app store to view the details of the agent before adding it to Microsoft 365 Copilot. After the user adds the agent, they can open it in Copilot with a new chat created. The user only needs to add the agent the first time they use it. Later, they can return to Microsoft 365 Copilot to find the agent on the left rail.

> [!NOTE]
> Because agent capabilities differ based on a user's license, agent acquisition or usage is only possible when the user has the appropriate license based on the capabilities configured in the agent. If a user doesn't have the appropriate license for an agent's capabilities, attempts to use the agent might result in an error. For details, see [Agent capabilities for Microsoft 365 users](/microsoft-365-copilot/extensibility/prerequisites#agent-capabilities-for-microsoft-365-users).

## Manage agents

To manage an existing agent, you can:

- Select the ellipses (**...**) and **Edit** from an agent on the rail in Microsoft 365 Copilot.
- Select **Create agents** from the rail in Microsoft 365 Copilot, and then select **My agents** or **View all agents** from the name dropdown menu.

:::image type="content" source="assets/images/copilot-studio-agent-builder/agent-builder-my-agents.png" alt-text="The View all agents options in the recently accessed agents menu":::

Both options show the **My agents** list. You can select the existing agent that you want to change or update.

> [!NOTE]
> Only agents created by you show in the **My agents** list. Shared agents from other users aren't in the list.

### Update your agent

Changes made to agents are automatically saved in the agent builder. Shared users of the agent don't see the latest changes until the agent is updated. To update a previously created agent, select **Update** on the top right corner. Your changes might take several minutes to become available for end users.

> [!NOTE]
> After updating an agent that has a SharePoint file and folder knowledge source and has been shared with specific users in your organization, we recommend that you reshare the agent with the same group of users. Doing so automatically shares the files and folders with the users again to ensure a consistent agent experience.

### Delete your agent

The agent author can delete their existing agents. After deletion, the agent will no longer be available to the author or shared users to use in Microsoft 365 Copilot.

>[!IMPORTANT]
> Deleting an agent is permanent and can't be reversed.

To delete an agent, you can:

- Select the ellipses (**...**) and **Delete** in the **My agents** list.
- From the authoring experience of an agent, select the ellipses (**...**) and **Delete** from the top right corner.

## Troubleshooting

When sharing an agent and its knowledge sources, you might encounter the errors listed in the following table.

<!-- markdownlint-disable MD033 -->
| Error code           | Description |
| -------------------- | ----------- |
| Something went wrong | An internal service error message. Contact support if this error continues to occur. |
| Couldn't share       | Insufficient privileges to update the sharing permissions on certain files. The error lists the files that were unable to be shared. The agent owner should go into SharePoint to try updating these permissions manually. For more information, see: <ul><li>[Share a document](https://support.microsoft.com/office/share-a-document-using-sharepoint-or-onedrive-807de6cf-1ece-41b9-a2b3-250d9a48f1e8) to learn how to share files.</li><li>[Sharing errors in SharePoint and OneDrive](/sharepoint/sharepoint-onedrive-error-message) for an error code reference.</li></ul> |
<!-- markdownlint-enable MD033 -->

If sharing failed, users who don't have access to the folder and files don't receive responses generated from those knowledge sources. Checking the box shares the underlying knowledge sources via SharePoint. Files can only be shared to valid individuals or security groups in your directory.
