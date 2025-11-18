---
title: Share and manage agents built with Microsoft 365 Copilot
description: Learn how to share and manage agents built with Microsoft 365 Copilot.
author: jasonxian-msft
ms.author: jasonxian
ms.localizationpriority: medium
ms.date: 11/17/2025 
ms.topic: conceptual
---

# Share and manage agents

You can share the agents you create using Microsoft 365 Copilot with users in your organization. Sharing an agent provides limited direct access to it for a specified set of users. While ideal for team collaboration, sharing an agent doesn't allow for deployment across the organization or integration with other channels.

This article describes how to share and manage the agents you build using the Agent Builder feature in Microsoft 365 Copilot. To publish an agent across multiple channels, you need to use Copilot Studio. For more information, see [Publish and deploy your agent](/microsoft-copilot-studio/publication-fundamentals-publish-channels).

## Differences between sharing and publishing agents

Sharing an agent is intended for limited, direct access to it. This approach is ideal for collaborating or getting feedback as you create your agent, but can't be used for formal deployment or integration.

The following table highlights the key differences between publishing and sharing your declarative agents.

|         | Sharing | Publishing |
| ------- | ------- | ------- |
| **Purpose** | Collaboration, feedback, testing, or limited access for specific individuals or groups. | Formal deployment for broad use, integration, scaled across specified channels (for example, Teams, Copilot) or the entire organization. |
| **Mechanism** | Owner/co-owners use **Manage Sharing** to specify up to 98 users by name or email. The specified users receive direct access, but the agent remains private and not broadly discoverable. | Owner/co-owners select **Publish** in Copilot Studio, select the target channel (Teams, Copilot, and more), and complete any required approval flows. The agent becomes discoverable and accessible to intended audience. |
| **Audience** | Up to 98 named users (individuals or groups). | Organization-wide or channel-specific. |
| **Discoverability** | Private; only visible to specified recipients. | Public (within the chosen scope); appears in the Agent Store and specified channels. |
| **Governance** | Minimal governance; no approval flows. | Might require approval flows, versioning, and lifecycle management. |
| **Permissions** | Specified users can interact with, but not manage or publish, the agent. | Owner/co-owners manage publishing, updates, and lifecycle. |
| **Integration** | Not integrated; sharing is only available via direct access. | Can be integrated into Teams, Copilot, or other Microsoft 365 surfaces. |

## Share an agent

To share your agent, after you [build and test](copilot-studio-lite-build.md) it in Microsoft 365 Copilot, choose **Create**. After creating your agent, a confirmation message will appear indicating that the agent is private and only available to you. To share the agent with others, select the **Share** button and choose who should have access.

> [!NOTE]
> Your admin might apply a policy that restricts certain agent sharing options. This governance change applies at the time of implementation and doesn't revoke existing agent access permissions. If governance policies change, be sure to update the sharing options for your agent to be compliant before you make updates to your agent.

The following table describes the available sharing options.

| Sharing option | Description |
| -------------- |------------ |
| Anyone in your organization | Anyone in your tenant can use the sharing link to use the agent. |
| Specific users in your organization | Specific users or groups can use the sharing link to access and interact with the agent. You must specify the names or emails of individuals, [security groups](/microsoft-365/admin/create-groups/compare-groups#security-groups), or [security-enabled](/graph/api/group-update) [Microsoft 365 groups](/microsoft-365/admin/create-groups/compare-groups#microsoft-365-groups) in your tenant's Microsoft directory. |
| Only you | Only the author of the agent can use the agent. No one else can use the sharing link. This sharing option is selected by default. |

When users open the link to an agent you have shared with them, the agent opens in a browser window and is ready to use.

> [!NOTE]
> Agent capabilities differ based on a user's license. Users can only add agents that have been shared with them when they have the type of Microsoft 365 Copilot license required for accessing the capabilities configured in that agent. If a user doesn't have the appropriate license for an agent's capabilities, attempts to use the agent might result in an error. For details, see [Agent capabilities for Microsoft 365 users](prerequisites.md#agent-capabilities-and-licensing-models).

### Governance and admin controls

Tenant admins can manage who can share agents at the organizational level. These controls help maintain compliance and prevent oversharing.

Admins can configure one of the following options in the Microsoft 365 admin center:

- **All users (default):** Everyone can share agents with the organization.
- **Specific users or groups:** Limit sharing permissions to selected users or groups.
- **No users:** Disable org-wide sharing completely.

> [!NOTE]
> Changes to admin controls apply only to new sharing actions. Existing shared agents remain accessible unless you manually update the sharing option.

When org-wide sharing is disabled, the **Anyone in your organization** option appears grayed out with a tooltip that explains the restriction.

### Deploy an agent via ZIP package

Microsoft 365 Copilot provides an option to download a ZIP package for manual deployment. This ZIP package contains the files you need to [sideload your agent into Microsoft Teams](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload).

To deploy an agent manually:

1. In Microsoft 365 Copilot, open the left navigation pane and select **Create agent**.
1. At the top of the central pane, choose **My agents**.
:::image type="content" source="assets/images/download-zip-my-agents.png" alt-text="Screenshot of the *My agents* option in the *Create agent* pane":::
1. Highlight the agent you want to download and choose the ellipses.
:::image type="content" source="assets/images/copilot-studio-lite-more-options.png" alt-text="Screenshot of the *More options* ellipses for the highlighted agent.":::
1. Choose **Download .zip file**. The .zip file includes the agent manifest and app icon.
1. [Sideload your agent into Microsoft Teams](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload).

> [!NOTE]
> - The ZIP package can't include embedded files. Remove any embedded file content from the ZIP package.
> - Sideloading agents in Teams isn't supported on macOS.

### Automatically share SharePoint files and folders

When you share an agent, Copilot users might not have access to all the underlying knowledge sources. You can share SharePoint knowledge sources with others when the **Share** option is set to **Specific users in your organization**. However, the agent respects the end user's information and sensitivity privileges. So, if the user doesn't have access to a knowledge source, the agent doesn't include the content that knowledge source contains when generating a response.

You can select which SharePoint folders and files to share. Sharing only works when the author of the agent already has permissions to share or to update the sharing permissions. [File sensitivity labels](/purview/sensitivity-labels) applied to files in SharePoint or OneDrive are respected. If the sharing on a file or folder fails, the agent is still shared with the users. The author needs to contact the file owners or the SharePoint site admin to grant permission to the file or folder directly from SharePoint.

> [!NOTE]
> Only the files and folders you specifically add to the agent can be shared automatically. Full access to SharePoint sites isn't automatically available to people you share your agent with. A site administrator must grant users permission via the site settings.

When a user's access to the agent is removed, it doesn't affect their access to the shared file or folders. Manage user permissions to access file and folders directly through SharePoint.

:::image type="content" source="assets/images/copilot-studio-lite/embedded-authoring-auto-share.png" alt-text="Auto-sharing knowledge sources":::

## Manage agents

You can access the agent management features in Microsoft 365 Copilot in three ways.

To manage an agent you recently accessed, select the **More options** ellipses (**...**) in the left pane next to the name of the agent you want to manage.

To manage an agent that you haven't accessed recently, either:

- Select **All agents** in the left pane.
- In the **Agent Store**, under **Your agents**, choose **See more** and then select the ellipses (**...**), next to the name of the agent you want to manage.

:::image type="content" source="assets/images/manage-agent-agent-store-see-more.png" alt-text="Screenshot of Agent Store":::

Or:*

- Select **Create agents** in the left pane and then select the **My agents** tab.
- On the **My agents** tab, select the **More options** ellipses (**...**) next to the name of the agent you want to manage.

:::image type="content" source="assets/images/manage-agent-from-create-agent.png" alt-text="The 'My agents' tab on the Create Agent page of Microsoft 365 Copilot.":::

> [!NOTE]
> Only the agents you've created show in the **My agents** list. Shared agents from other users aren't listed.

### Edit an agent

To edit an agent:

- Access the list of your agents using one of the methods described in [Manage agents](#manage-agents).
- Choose **Edit** (the pencil icon) from the **More options** menu.

From there, you can use either the **Describe** tab to enter the changes you'd like to make using natural language, or use the **Configure** tab for more fine-tuned control in editing your agent's functionality and knowledge sources.

Changes made to agents are saved automatically. However, your changes won't be visible to users until you make them available. To make changes to an existing agent available, choose **Update** in the top right corner. Your changes might take several minutes to become available for end users.

> [!NOTE]
> If you update a previously shared agent that has a SharePoint file and folder knowledge source, reshare it with the same users. Doing so automatically shares the files and folders with the users again to ensure a consistent agent experience.

### Delete your agent

You can delete agents you create. Once you delete an agent, however, you won't be able to use it and it won't be available the users you shared it with. Only the user who created an agent can delete it.

>[!IMPORTANT]
> Deleting an agent is permanent and can't be reversed.

To delete an agent:

- Access the list of your agents using one of the methods described in [Manage agents](#manage-agents).
- Select the ellipses (**...**) and then choose **Delete** (the garbage can icon).

### Reassign ownership of an agent

Microsoft 365 Copilot doesn't support transferring ownership of declarative agents to another user. For information about transferring ownership, see [Reassign an agent's owner with PowerShell](/power-platform/release-plan/2025wave2/microsoft-copilot-studio/reassign-agents-owner-powershell).

## Troubleshooting

When sharing an agent and its knowledge sources, you might encounter the errors listed in the following table.

| Issue        | Description |
| -------------- | ----------- |
| Something went wrong | An internal service error has occurred. Contact support if this error continues to occur. |
| Couldn't share       | The user has insufficient privileges to update the sharing permissions on certain files. The error lists the files that were unable to be shared. The agent owner should go into SharePoint to try updating these permissions manually. For more information, see: <ul><li>[Share a document](https://support.microsoft.com/office/share-a-document-using-sharepoint-or-onedrive-807de6cf-1ece-41b9-a2b3-250d9a48f1e8) to learn how to share files.</li><li>[Sharing errors in SharePoint and OneDrive](/sharepoint/sharepoint-onedrive-error-message) for an error code reference.</li></ul> |
| Agent sharing failed, knowledge access not granted | If agent sharing fails, the underlying knowledge sources might not be shared with the intended users or groups. As a result, users without access to those files won’t receive generated responses based on them. To resolve this, ensure all individuals and groups you're sharing your agent with exist in your organization, then reshare the knowledge sources by selecting them in the sharing settings to grant user access to them. |
| Can no longer update agent | This occurs when your agent’s current sharing option is no longer compliant with new admin policies. Agent owners must change the sharing setting to a compliant option before updating their agent further. A banner guides you to make this change. |
| We are unable to create this agent due to an error. | Occurs when the system is having trouble publishing an agent. Please try again in a few minutes. |
| This agent includes at least one file with an unsupported sensitivity label. Please check your uploaded files and remove them. | Occurs when you upload a file with a sensitivity label that isn't supported. Check the shield icon next to your uploaded files and remove the ones that have a red error icon. For more information, see [Unsupported sensitivity label scenarios](/microsoft-365-copilot/extensibility/copilot-studio-lite-knowledge#unsupported-sensitivity-label-scenarios).
|Your agent can't be updated because it may encourage harmful actions. | Occurs when the system detects harmful content. Review your agent's name, description, and instructions and remove any harmful content, and try to update your agent again. For more information. see [Responsible AI validation](rai-validation.md). |

## Related content

- [Publish agents for Microsoft 365 Copilot](publish.md)
- [Publish and deploy your agent](/microsoft-copilot-studio/publication-fundamentals-publish-channels)
- [Upload into Microsoft Teams](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload)
- [Reassign an agent's owner with PowerShell](/power-platform/release-plan/2025wave2/microsoft-copilot-studio/reassign-agents-owner-powershell)
