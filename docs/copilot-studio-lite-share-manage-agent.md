---
title: Share and manage agents built with the lite experience in Copilot Studio
description: Learn how to share and manage agents built with Copilot Studio.
author: jasonxian-msft
ms.author: jasonxian
ms.localizationpriority: medium
ms.date: 09/30/2025
ms.topic: conceptual
---

# Share and manage agents

You can share the agents you create using the lite experience of Copilot Studio in Microsoft 365 Copilot. This article describes how to share, and manage agents built using the lite experience within Copilot Studio. For information about how to *publish* an agent, you must use the [Copilot Studio full experience](/microsoft-copilot-studio/publication-fundamentals-publish-channels).

> [!NOTE]
> **Sharing** an agent is intended for limited, direct access to it. This approach is ideal for collaborating or getting feedback as you create your agent, but can't be used for formal deployment or integration.

The following table highlights the key differences between publishing and sharing your declarative agents.

| Feature  | Sharing | Publishing |
| ------- | ------- | ------- |
| **Purpose** | Collaboration, feedback, testing, or limited access for specific individuals or groups. | Formal deployment for broad use, integration, and scale across organization or channels (for example, Teams, Copilot). |
| **Mechanism** | Owner/co-owners use **Manage Sharing** to specify up to 98 users by name or email. Shared users receive direct access but agent remains private and not broadly discoverable. | Owner/co-owners select **Publish** in Copilot Studio, choose target channel (Teams, Copilot, and more), and complete any required approval flows. Agent becomes discoverable and accessible to intended audience. |
| **Audience** | Up to 98 named users (individuals or groups). | Organization-wide or channel-specific. |
| **Discoverability** | Private; only visible to specified recipients. | Public within chosen scope; appears in agent store or channels. |
| **Governance** | Minimal governance; no approval flows. | Might require approval flows, versioning, and lifecycle management. |
| **Permissions** | Shared users can interact, but not manage or publish. | Owner/co-owners manage publishing, updates, and lifecycle. |
| **Integration** | Not integrated; sharing is for direct access only. | Can be integrated into Teams, Copilot, or other Microsoft 365 surfaces. |

## Share an agent

Sharing is the last step in [building your agent](copilot-studio-lite-build.md) within the lite experience of Copilot Studio. Once you have built and tested your agent, choose **Create**. A pop-up window displays a sharable link for your agent. By default, the link displayed only works for the person who created the agent. To share the agent with others, select **Change sharing settings** and specify who should have access:

 :::image type="content" source="assets/images/share-agent-change-settings.png" alt-text="A screenshot of the initial pop-up window for sharing an agent":::

| Sharing option | Description |
| -------------- |------------ |
| Anyone in your organization | Anyone in your tenant can use the sharing link to use the agent |
| Specific users in your organization | Specific users or groups can use the sharing link to use the agent. You must specify the names or emails of individuals, [security groups](/microsoft-365/admin/create-groups/compare-groups#security-groups), or [security-enabled](/graph/api/group-update) [Microsoft 365 groups](/microsoft-365/admin/create-groups/compare-groups#microsoft-365-groups) in your tenant's Microsoft directory. |
| Only you | Only the author of the agent can use the agent. No one else can use the sharing link. This sharing option is selected by default. |

When users open the link to an agent you have shared with them, the agent opens in a browser window and is ready to use.

> [!NOTE]
> Agent capabilities differ based on a user's license. Users can only add agents shared with them when they have the type of Microsoft 365 Copilot license required for accessing the capabilities configured in the agent. If a user doesn't have the appropriate license for an agent's capabilities, attempts to use the agent might result in an error. For details, see [Agent capabilities for Microsoft 365 users](prerequisites.md#agent-capabilities-and-licensing-models).

### Deploy an agent via ZIP package

Copilot Studio provides an option to download a ZIP package for manual deployment. This ZIP package contains the files you need to [sideload your agent into Microsoft Teams](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload).

To deploy an agent manually:

1. In the lite experience of Copilot Studio, open the left navigation pane and select **Create gent**.
1. At the top of the central pane, choose **My agents**.
:::image type="content" source="assets/images/download-zip-my-agents.png" alt-text="Screenshot of the *My agents* option in the *Create agent* pane":::
1. Highlight the agent you want to download and choose the ellipses.
1. Choose **Download .zip file**. The .zip file includes the agent manifest and app icon.
1. [Sideload your agent into Microsoft Teams](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload).

> [!NOTE]
> - The ZIP package can't include embedded files. Remove any embedded file content from the ZIP package.
> - Sideloading agents in Teams isn't supported on macOS.

### Automatically share SharePoint files and folders

When you share an agent, Copilot users might not have access to all the underlying knowledge sources. You can share SharePoint knowledge sources with others when the **Share** option is set to **Specific users in your organization**. However, the agent respects the end user's information and sensitivity privileges. If the user doesn't have access to a knowledge source, the agent doesn't include the content it contains when generating a response.

You can select which SharePoint folders and files to share. Sharing only works when the author of the agent already has permissions to share or update the sharing permissions. [File sensitivity labels](/purview/sensitivity-labels) applied to files in SharePoint or OneDrive are respected. If the sharing on a file or folder fails, the agent is still shared with the users. The author needs to contact the file owners or the SharePoint site admin to grant permission to the file or folder directly from SharePoint.

> [!NOTE]
> Only the files and folders you specifically add to the agent can be shared automatically. Full access to SharePoint sites isn't automatically available to people you share your agent with. A site administrator must grant users permission via the site settings.

When a user's access to the agent is removed, it doesn't affect their access to the shared file or folders. Manage user permissions to access file and folders directly through SharePoint.

:::image type="content" source="assets/images/copilot-studio-lite/embedded-authoring-auto-share.png" alt-text="Auto-sharing knowledge sources":::

## Manage agents

There are three methods for accessing the agent management features in the lite experience of Copilot Studio for Microsoft 365.

**To manage an agent you've recently accessed**, select the **More options** ellipses (**...**) in the left navigation pane next to the name of the agent you want to manage.

**To manage an agent that you haven't accessed recently, either:**

- Select **All agents** in the left navigation pane.
- In the **Agent Store**, under **Your agents**, choose **See more** and then select the ellipses (**...**) next to the name of the agent you want to manage.

:::image type="content" source="assets/images/manage-agent-agent-store-see-more.png" alt-text="Screenshot of Agent Store":::

**OR:**

- Select **Create agents** in the left navigation pane and then select the **My agents** tab.
- On the **My agents** tab, select the **More options** ellipses (**...**) next to the name of the agent you want to manage.

:::image type="content" source="assets/images/manage-agent-from-create-agent.png" alt-text="The 'My agents' tab on the Create Agent page of the lite experience in Copilot Studio for Microsoft 365 Copilot.":::

> [!NOTE]
> Only agents created by you show in the **My agents** list. Shared agents from other users aren't in the list.

### Edit an agent

To edit an agent:

- Access the list of your agents using one of the methods described in [Manage agents](#manage-agents).
- Choose **Edit** (the pencil icon) from the **More options** menu. 

From there, you can use either the **Describe** tab to enter the changes you'd like to make using natural language, or use the **Configure** tab for more fine-tuned control in editing your agent's functionality and knowledge sources.

Changes made to agents are saved automatically. However, your changes won't be visible to users until you make them available to users. To make changes to an existing agent available, choose **Update** in the top right corner. Your changes might take several minutes to become available for end users.

> [!NOTE]
> If you update a previously shared agent that has a SharePoint file and folder knowledge source, reshare it with the same users. Doing so automatically shares the files and folders with the users again to ensure a consistent agent experience.

### Delete your agent

You can delete agents you create. Once you delete an agent, you won't be able to use it, and it won't be available the users you shared it with. Only the user who created an agent can delete it.

>[!IMPORTANT]
> Deleting an agent is permanent and can't be reversed.

**To delete an agent:**

- Access the list of your agents using one of the methods described in [Manage agents](#manage-agents).
- Select the ellipses (**...**) and then choose **Delete** (the garbage can icon).

### Reassign ownership of an agent

The lite experience in Copilot Studio for Microsoft 365 Copilot doesn't support transferring ownership of declarative agents to another user. For information about transferring ownership, see [Reassign an agent's owner with PowerShell](/power-platform/release-plan/2025wave2/microsoft-copilot-studio/reassign-agents-owner-powershell).

## Troubleshooting

When sharing an agent and its knowledge sources, you might encounter the errors listed in the following table.

<!-- markdownlint-disable MD033 -->
| Error code           | Description |
| -------------------- | ----------- |
| Something went wrong | An internal service error message. Contact support if this error continues to occur. |
| Couldn't share       | Insufficient privileges to update the sharing permissions on certain files. The error lists the files that were unable to be shared. The agent owner should go into SharePoint to try updating these permissions manually. For more information, see: <ul><li>[Share a document](https://support.microsoft.com/office/share-a-document-using-sharepoint-or-onedrive-807de6cf-1ece-41b9-a2b3-250d9a48f1e8) to learn how to share files.</li><li>[Sharing errors in SharePoint and OneDrive](/sharepoint/sharepoint-onedrive-error-message) for an error code reference.</li></ul> |
<!-- markdownlint-enable MD033 -->

If sharing an agent fails, users who don't have access to the folder and files don't receive responses generated from those knowledge sources. Checking the box shares the underlying knowledge sources via SharePoint. Files can only be shared to valid individuals or security groups in your directory.


## Related content

- [Publish agents for Microsoft 365 Copilot](publish.md)
- [Publish and deploy your agent](/microsoft-copilot-studio/publication-fundamentals-publish-channels)
- [Upload into Microsoft Teams](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload)
- [Reassign an agent's owner with PowerShell](/power-platform/release-plan/2025wave2/microsoft-copilot-studio/reassign-agents-owner-powershell)