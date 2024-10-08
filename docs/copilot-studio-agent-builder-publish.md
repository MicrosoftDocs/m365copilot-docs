---
title: Publish and manage Copilot Studio agent builder agents
description: Learn how to publish and manage Copilot agents built with Copilot Studio agent builder.
author: jasonxian-msft
ms.author: jasonxian
ms.topic: conceptual
---

# Publish and manage Copilot Studio agent builder agents

This article describes how to create or publish Copilot agents built with Copilot Studio agent builder, and how to update or delete agents.

## Create the Copilot agent

While you are [building your Copilot agent](copilot-studio-agent-builder.md), changes made to the agent are automatically saved in the agent builder. When you're satisfied with its behavior and content, you can create the Copilot agent to use it in Microsoft 365 Copilot by selecting **Create** on the top right corner. Once the Copilot agent is created successfully, selecting **Go to agent** brings you into Microsoft 365 Copilot with a new chat opened with the Copilot agent. You can easily return to chat with their Copilot agents from the right rail of Microsoft Copilot.

## Share the Copilot agent

You can share your Copilot agent with other users via a link once it is created. When you share an agent, the people you share the agent with can use it, but they can't edit it. You can change the sharing option at any time by clicking the **Share** button at the top right corner.

### Sharing options

Several sharing options are available:

| Sharing option                                          | Description |
| ------------------------------------------------------- | ----------- |
| Anyone in your organization                             | Anyone in your tenant can use the sharing link to use the Copilot agent. |
| Specific users in your organization via security groups | Specific user groups can use the sharing link to use the Copilot agent. These user groups must be specified via [security groups](/microsoft-365/admin/email/create-edit-or-delete-a-security-group) in your tenant's Microsoft directory. |
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

### Copilot agent acquisition

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
