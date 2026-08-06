---
title: Share and manage agents built with Microsoft 365 Copilot
description: Learn how to share and manage agents built with Microsoft 365 Copilot.
author: jasonxian-msft
ms.author: jasonxian
ms.localizationpriority: medium
ms.date: 07/21/2026
ms.topic: article
ms.service: copilot-studio
ms.subservice: agent-builder
---

# Share and manage agents

You can share the agents you create by using Microsoft 365 Copilot with users in your organization. Agents support multiple owners, so you can share ownership across your team. Any owner can edit, manage, and maintain the agent. Sharing an agent provides direct access to it for a specified set of users. While ideal for team collaboration, sharing an agent doesn't allow for deployment across the organization or integration with other channels.

This article describes how to share and manage the agents you build using the Agent Builder feature in Microsoft 365 Copilot. To publish an agent across multiple channels, you need to use Copilot Studio. For more information, see [Publish and deploy your agent](/microsoft-copilot-studio/publication-fundamentals-publish-channels).

## Share an agent

After you [build and test](agent-builder-build-agents.md) your agent in Microsoft 365 Copilot, select **Create**. After your agent is created, a confirmation message indicates that the agent is private and only available to you. To share the agent with others, select **Share** to open the share dialog.

:::image type="content" source="assets/images/agent-builder-screenshots/share-agent-new.png" alt-text="Share agents from the All agents list" lightbox="assets/images/agent-builder-screenshots/share-agent-new.png":::

The share dialog lists everyone who has access, their role, the org-wide sharing toggle, and a link you can copy at any time.

> [!NOTE]
> Your admin might apply a policy that restricts certain agent sharing options. This governance change applies at the time of implementation and doesn't revoke existing agent access permissions. If sharing options are restricted in your organization, an admin must approve and deploy the agent before it's available to other users in the organization. If governance policies change, be sure to update the sharing options for your agent to be compliant before you make updates to your agent.

### Understand the roles

The share dialog uses two access levels.

| Role | Description | Can chat | Can edit and manage |
| ---- | ----------- | -------- | ------------------- |
| **Can edit** | Owner — full rights to edit, share, and manage the agent. | Yes | Yes |
| **Can chat** | Chat user — can interact with the agent only. | Yes | No |

An owner is anyone with **Can edit** access. All owners have equal rights, including the ability to add or remove people, switch roles, and turn on org-wide sharing.

> [!NOTE]
> You can't add a group as an owner. When you add a group, it can only be a chat user (**Can chat**). To grant owner rights, add individual users.

### Add owners and chat users

1. Open the agent you want to share and select **Share**.
1. In the share dialog, enter a name, group, or email in the **Add a name, group, or email** box.
1. On the **Add people** panel, set the role for the people you're adding:
   - Choose **Can edit** to add them as an owner with full edit and management rights.
   - Choose **Can chat** to add them as a chat user who can only interact with the agent.
1. Leave the **Send notification** checkbox selected to email the new users so they know they have access. Clear the checkbox if you don't want to send an email.
1. Select **Add**.

:::image type="content" source="assets/images/agent-builder-screenshots/add-people-panel.png" alt-text="Add people panel" lightbox="assets/images/agent-builder-screenshots/add-people-panel.png":::

When sharing completes, you get a confirmation and can copy the chat link to share it directly.

> [!NOTE]
> Agent capabilities differ based on a user's license. Users can only add agents that are shared with them when they have the type of Microsoft 365 Copilot license required for accessing the capabilities configured in that agent. If a user doesn't have the appropriate license for an agent's capabilities, attempts to use the agent might result in an error. For details, see [Agent capabilities for Microsoft 365 users](prerequisites.md#agent-capabilities-and-licensing-models).

### Switch a user's role

As an owner, you can change any shared user's role at any time.

1. Open the **Share** dialog.
1. Select the role dropdown next to the user.
1. Choose a new option:
   - **Can edit** - promote the user to an owner with full rights.
   - **Can chat** - change the user to a chat user.
   - **Remove** - revoke the user's access.

Changes take effect immediately.

:::image type="content" source="assets/images/agent-builder-screenshots/role-dropdown.png" alt-text="Add role dropdown" lightbox="assets/images/agent-builder-screenshots/role-dropdown.png":::

### Copy edit and chat links

The share dialog surfaces links so you can share access without navigating away:

- **Chat link** - for chat users who only need to interact with the agent.
- **Edit link** - for owners who need to author and manage the agent.

Select **Copy chat link** or select the **Edit link**, and then paste it into email, chat, or documentation.

### Enable org-wide sharing

To make an agent available to everyone in your tenant, turn on org-wide sharing for chat access.

1. Open the **Share** dialog.
1. Turn on the **Org-wide sharing for chat access** toggle.

When you turn on the toggle, other users in the same tenant can see the agent in the Agent Store, so they can discover it and start chatting.

### Governance and admin controls

Tenant admins can manage who can share agents at the organizational level. These controls help maintain compliance and prevent oversharing.

Admins can configure one of the following options in the Microsoft 365 admin center:

- **All users (default):** Everyone can share agents with the organization.
- **Specific users or groups:** Limit sharing permissions to selected users or groups.
- **No users:** Disable org-wide sharing completely.

> [!NOTE]
> Changes to admin controls apply only to new sharing actions. Existing shared agents remain accessible unless you manually update the sharing settings.

When org-wide sharing is disabled, the **Org-wide sharing for chat access** toggle appears grayed out with a tooltip that explains the restriction.

### Deploy an agent via ZIP package

Microsoft 365 Copilot provides an option to download a ZIP package for manual deployment. This ZIP package contains the files you need to [sideload your agent into Microsoft Teams](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload).

To deploy an agent manually:

1. In Microsoft 365 Copilot, on the left pane, select **New agent**.
1. On the New agent page, under **My agents**, choose **View all agents**.
   :::image type="content" source="assets/images/agent-builder-screenshots/agent-builder-view-agents.png" alt-text="Screenshot of the View all agents option on the New agent page.":::
1. Select the agent you want to download and choose the ellipses (**...**).
1. Choose **Download .zip file**. The .zip file includes the agent manifest and app icon.
   :::image type="content" source="assets/images/agent-builder-screenshots/deploy-agent-zip-step-2-download.png" alt-text="Screenshot of the *Download .zip file* option":::
1. [Sideload your agent into Microsoft Teams](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload).

> [!NOTE]
> - The ZIP package can't include embedded files. Remove any embedded file content from the ZIP package.
> - Sideloading agents in Teams isn't supported on macOS.

### Automatically share SharePoint files and folders

When you share an agent, Copilot users might not have access to all the underlying knowledge sources. You can share SharePoint knowledge sources with others when you add them as chat users or owners. However, the agent respects the end user's information and sensitivity privileges. So, if the user doesn't have access to a knowledge source, the agent doesn't include the content that knowledge source contains when generating a response.

You can select which SharePoint folders and files to share. Sharing only works when the owner of the agent already has permissions to share or to update the sharing permissions. [File sensitivity labels](/purview/sensitivity-labels) applied to files in SharePoint or OneDrive are respected. If the sharing on a file or folder fails, the agent is still shared with the users. The owner needs to contact the file owners or the SharePoint site admin to grant permission to the file or folder directly from SharePoint.

> [!NOTE]
> Only the files and folders you specifically add to the agent can be shared automatically. Full access to SharePoint sites isn't automatically available to people you share your agent with. A site administrator must grant users permission via the site settings.

When a user's access to the agent is removed, it doesn't affect their access to the shared file or folders. Manage user permissions to access file and folders directly through SharePoint.

## Update your agent's About information

Use the **About this agent** dialog to update the metadata that's visible in the Agent Store and in your agent's About information in Microsoft 365 Copilot. You can open this dialog for any agent you own, whether or not it's shared or submitted to your org catalog.

To open the dialog, select the **More** ellipses (**...**) in the agent authoring header, and then select **About this agent**.

The following fields are available.

| Field | Required or optional | Maximum length | Description |
| --- | --- | --- | --- |
| **Short description** | Required | 80 characters | A concise summary of what the agent does. Shown in the Agent Store and in the agent's About information. Default: *Built using Microsoft 365 Copilot Agent Builder*. |
| **Creator website** | Optional | 2,048 characters | A link to more information about you or your team, such as your profile page, your team's SharePoint site, or an internal support page. Opens when users select the creator's name in the agent details pane. Must be a valid HTTPS URL. |
| **Privacy statement** | Optional | 2,048 characters | A link to your organization's privacy statement. Must be a valid HTTPS URL. |
| **Terms of use** | Optional | 2,048 characters | A link to your organization's terms of use. Must be a valid HTTPS URL. |

A default placeholder URL is provided for **Creator website**, **Privacy statement**, and **Terms of use**. Replace each placeholder with a URL that's appropriate for your agent; otherwise, Agent Builder shows a warning on the field.

> [!NOTE]
> Values you save in **About this agent** prepopulate the corresponding fields in the submission dialog when you submit your agent to your org catalog. For more information, see [Privacy statement and terms of use](agent-builder-publication-privacy-terms-of-use.md).

## Submit an agent to your org catalog

The shared version of your agent and the Agent Store version are managed separately. You manage the shared version and can continue iterating on it, changing who it's shared with, or keeping it private for testing, at any time. Your admin manages the Agent Store version after you submit the agent for review.

To make your agent broadly discoverable in your organization, submit it to your org catalog. An admin reviews the submission in the [Microsoft 365 admin center](/microsoft-365/admin/manage/agent-registry#publish-agents) and, if approved, publishes the agent in the **Built by your org** section of the Agent Store.

For the submission flow, required fields, approval status tracking, and post-approval updates, see [Submit agents from Agent Builder to your org catalog](agent-builder-submit-to-org-catalog.md).

## Manage agents

You can access the agent management features in Microsoft 365 Copilot:

To manage an agent you recently accessed, select the **More** ellipses (**...**) in the left pane next to the name of the agent you want to manage.

To manage an agent that you haven't accessed recently, either:

- Select **All agents** in the left pane.
- In the **Agent Store**, under **Your agents**, choose **See more** and then select the ellipses (**...**), next to the name of the agent you want to manage.

Or:

- Select **New agent** in the left pane and then choose **View all agents**.
- Select the **More** ellipses (**...**) next to the name of the agent you want to manage.

> [!NOTE]
> In Agent Builder, the **My agents** list includes only agents you own or agents for which you have **Can edit** access. Agents shared with you as a chat user don't appear in this list.

### Edit an agent

Any owner of an agent can edit it if changes are required after sharing.

- Access the list of your agents using one of the methods described in [Manage agents](#manage-agents).
- Choose **Edit** (the pencil icon) from the **More** ellipses (**...**) menu.

From there, you can use natural language to describe your changes. You can also use the **Configure** tab for more fine-tuned control over your agent's functionality and knowledge sources.

Changes made to agents are saved automatically. However, your changes aren't visible to users until you make them available. To make changes to an existing agent available, choose **Update** in the top right corner. Your changes might take several minutes to become available for end users.

> [!NOTE]
> If you update a previously shared agent that has a SharePoint file and folder knowledge source, reshare it with the same users. Doing so automatically shares the files and folders with the users again to ensure a consistent agent experience.

### Delete your agent

Any owner of an agent can delete it. After you delete an agent, you can't use it and it isn't available to other owners or the users you shared it with.

> [!IMPORTANT]
> Deleting an agent is permanent and can't be reversed.

**To delete an agent:**

- Access the list of your agents using one of the methods described in [Manage agents](#manage-agents).
- Select the **More** ellipses (**...**) menu, and then choose **Delete** (the garbage can icon).

### Reassign ownership of an agent

You can share ownership of an agent directly by adding users with the **Can edit** role in the share dialog. All owners have equal rights to edit, share, and manage the agent. For more information, see [Add owners and chat users](#add-owners-and-chat-users).

Admins can also update the owner of a shared agent within the organization. For more information, see [Reassign ownership of shared agents](/microsoft-365/admin/manage/agent-registry#reassign-ownership-of-shared-agents).

To reassign ownership via PowerShell, see [Reassign an agent's owner with PowerShell](/power-platform/release-plan/2025wave2/microsoft-copilot-studio/reassign-agents-owner-powershell).

## Troubleshooting

When sharing an agent and its knowledge sources, you might encounter the errors listed in the following table.

| Issue        | Description |
| -------------- | ----------- |
| Something went wrong | An internal service error occurred. Contact support if this error continues to occur. |
| Couldn't share       | The user has insufficient privileges to update the sharing permissions on certain files. The error lists the files that were unable to be shared. The agent owner should go into SharePoint to try updating these permissions manually. For more information, see: <ul><li>[Share a document](https://support.microsoft.com/office/share-a-document-using-sharepoint-or-onedrive-807de6cf-1ece-41b9-a2b3-250d9a48f1e8) to learn how to share files.</li><li>[Sharing errors in SharePoint and OneDrive](/sharepoint/sharepoint-onedrive-error-message) for an error code reference.</li></ul> |
| Agent sharing failed, knowledge access not granted | If agent sharing fails, the underlying knowledge sources might not be shared with the intended users or groups. As a result, users without access to those files don’t receive generated responses based on them. To resolve this issue, ensure all individuals and groups you're sharing your agent with exist in your organization, then reshare the knowledge sources by selecting them in the sharing settings to grant user access to them. |
| Can no longer update agent | This error occurs when your agent's current sharing settings are no longer compliant with new admin policies. Agent owners must change the sharing settings to a compliant option before updating the agent further. A banner guides you to make this change. |
| We're unable to create this agent due to an error. | Occurs when the system is having trouble publishing an agent. Try again in a few minutes. |
| This agent includes at least one file with an unsupported sensitivity label. Check your uploaded files and remove them. | Occurs when you upload a file with a sensitivity label that isn't supported. Check the shield icon next to your uploaded files and remove the ones that have a red error icon. For more information, see [Unsupported sensitivity label scenarios](copilot-studio-lite-knowledge.md#unsupported-sensitivity-label-scenarios).
|Your agent can't be updated because it might encourage harmful actions. | Occurs when the system detects harmful content. Review your agent's name, description, and instructions and remove any harmful content, and try to update your agent again. For more information. see [Responsible AI validation](rai-validation.md). |

## Related content

- [Submit agents from Agent Builder to your org catalog](agent-builder-submit-to-org-catalog.md)
- [Privacy statement and terms of use](agent-builder-publication-privacy-terms-of-use.md)
- [Publish agents for Microsoft 365 Copilot](publish.md)
- [Manage agent requests in the Microsoft 365 admin center](/microsoft-365/admin/manage/agent-requests)
- [Publish and deploy your agent](/microsoft-copilot-studio/publication-fundamentals-publish-channels)
- [Upload into Microsoft Teams](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload)
- [Reassign an agent's owner with PowerShell](/power-platform/release-plan/2025wave2/microsoft-copilot-studio/reassign-agents-owner-powershell)


