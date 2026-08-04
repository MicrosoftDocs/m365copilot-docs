---
title: Share and manage agents built with Microsoft 365 Copilot
description: Learn how to share and manage agents built with Microsoft 365 Copilot.
author: maosuri
ms.author: maosuri
ms.localizationpriority: medium
ms.date: 08/04/2026
ms.topic: article
ms.service: copilot-studio
ms.subservice: agent-builder
---

# Share and manage agents

You can share the agents you create using Microsoft 365 Copilot with users in your organization. Sharing an agent provides limited direct access to it for a specified set of users. While ideal for limited team collaboration, sharing agents is separate from publishing them across multiple channels or to your organization's agent store.

This article describes how to share and manage the agents you build using the Agent Builder feature in Microsoft 365 Copilot. To publish an agent across multiple channels, you need to use Copilot Studio. For more information, see [Publish agents for Microsoft 365 Copilot](publish.md).

## Share an agent

To share your agent, after you [build and test](agent-builder-build-agents.md) it in Microsoft 365 Copilot, choose **Create**. After your agent is created, a confirmation message indicates that the agent is ready to share. Select **Share** to open the share dialog.

:::image type="content" source="assets/images/agent-builder-screenshots/share-agent.png" alt-text="Share agents from the All agents list" lightbox="assets/images/agent-builder-screenshots/share-agent.png":::

You can also choose the **More** menu (...) next to the agent in the left pane to share the agent.

:::image type="content" source="assets/images/agent-builder-screenshots/share-agent-2.png" alt-text="Share agents from the left pane":::

### Understand agent ownership and roles

Agents support multiple owners, so you're no longer limited to a single creator. All owners have equal rights and can edit, share, and manage the agent. Multi-owner support helps teams:

- Avoid single points of failure when the original creator is unavailable.
- Collaborate on agent authoring and maintenance.
- Control who can edit an agent versus who can only chat with it.

The share dialog uses two access levels:

| Role in UI | What it means | Can chat | Can edit and manage |
| --- | --- | --- | --- |
| Can edit | Owner—full rights | Yes | Yes |
| Can chat | Chat user | Yes | No |

An owner is anyone with **Can edit** access. All owners have equal rights, including the ability to add or remove people, switch roles, and turn on org-wide sharing.

> [!NOTE]
> Sharing with a group as an owner (Can edit) isn't supported. You can add a group only as a chat user (Can chat). To grant owner rights, add individual users.

### Open the share dialog

1. Open the agent you want to share.
2. Select **Share**.
3. The share dialog lists everyone who has access, their role, and the org-wide sharing toggle. You can copy the chat link at any time.

### Add owners and chat users

To add people to your agent:

1. In the share dialog, enter a name, group, or email in the **Add a name, group, or email** box.
2. On the **Add people** panel, set the role for the people you're adding:
   - Choose **Can edit** to add them as an owner with full edit and management rights.
   - Choose **Can chat** to add them as a chat user who can only interact with the agent.
3. Leave the **Send notification** checkbox selected to email the new users so they know they have access. Clear it if you don't want to send an email.
4. Select **Add**.

> [!TIP]
> To add someone as a chat user instead, choose **Can chat** in the role dropdown before selecting **Add**.

> [!IMPORTANT]
> You can't add a group as an owner. When you add a group, it can only be a chat user (Can chat). To give someone owner (Can edit) rights, add them as an individual user.

When sharing completes, you get a confirmation and can copy the chat link to share it directly.

### Switch a user's role

As an owner, you can change any shared user's role at any time.

1. Open the **Share** dialog.
2. Select the role dropdown next to the user.
3. Choose a new option:
   - **Can edit** – promote the user to an owner with full rights.
   - **Can chat** – change the user to a chat user.
   - **Remove** – revoke the user's access.

Changes take effect immediately.

### Copy edit and chat links

The share dialog surfaces links so you can share access without navigating away:

- **Chat link** – for chat users who only need to interact with the agent.
- **Edit link** – for owners who need to author and manage the agent.

Select **Copy chat link** (or the **Edit link**) and paste it into email, chat, or documentation.

### Enable org-wide sharing

To make an agent available to everyone in your tenant, turn on org-wide sharing for chat access.

1. Open the **Share** dialog.
2. Turn on the **Org-wide sharing for chat access** toggle.

When the toggle is on, the agent becomes visible in the agent store to other users in the same tenant, so they can discover and start chatting with it.

> [!NOTE]
> Your admin might apply a policy that restricts certain agent sharing options. This governance change applies at the time of implementation and doesn't revoke existing agent access permissions. If your admin changes the policy, you might need to update your agent's sharing settings to remain compliant.

### Governance and admin controls

Tenant admins can manage who can share agents at the organizational level. These controls help maintain compliance and prevent oversharing.

Admins can configure one of the following options in the Microsoft 365 admin center:

- **All users (default):** Everyone can share agents with the organization.
- **Specific users or groups:** Limit sharing permissions to selected users or groups.
- **No users:** Disable org-wide sharing completely.

> [!NOTE]
> Changes to admin controls apply only to new sharing actions. Existing shared agents remain accessible unless you manually update the sharing option.

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
>
> - The ZIP package can't include embedded files. Remove any embedded file content from the ZIP package.
> - Sideloading agents in Teams isn't supported on macOS.

### Automatically share SharePoint files and folders

When you share an agent, Copilot users might not have access to all the underlying knowledge sources. You can share SharePoint knowledge sources with others when the **Share** option is set to **Specific users in your organization**.

You can select which SharePoint folders and files to share. Sharing only works when the author of the agent already has permissions to share or to update the sharing permissions. File sensitivity labels are respected during sharing.

> [!NOTE]
> Only the files and folders you specifically add to the agent can be shared automatically. Full access to SharePoint sites isn't automatically available to people you share your agent with. A site member would need to grant explicit access to the site.

When a user's access to the agent is removed, it doesn't affect their access to the shared file or folders. Manage user permissions to access file and folders directly through SharePoint.

## Update your agent's About information

Use the **About this agent** dialog to update the metadata that's visible in the Agent Store and in your agent's About information in Microsoft 365 Copilot. You can open this dialog for any agent you own.

To open the dialog, select the **More** ellipses (**...**) in the agent authoring header, and then select **About this agent**.

The following fields are available.

| Field | Required or optional | Maximum length | Description |
| --- | --- | --- | --- |
| **Short description** | Required | 80 characters | A concise summary of what the agent does. Shown in the Agent Store and in the agent's About information. Default: *Built using Microsoft 365 Copilot*. |
| **Creator website** | Optional | 2,048 characters | A link to more information about you or your team, such as your profile page, your team's SharePoint site, or an internal support page. Opens in a new tab. |
| **Privacy statement** | Optional | 2,048 characters | A link to your organization's privacy statement. Must be a valid HTTPS URL. |
| **Terms of use** | Optional | 2,048 characters | A link to your organization's terms of use. Must be a valid HTTPS URL. |

A default placeholder URL is provided for **Creator website**, **Privacy statement**, and **Terms of use**. Replace each placeholder with a URL that's appropriate for your agent; otherwise, Agent Store submission might be rejected.

> [!NOTE]
> Values you save in **About this agent** prepopulate the corresponding fields in the submission dialog when you submit your agent to your org catalog. For more information, see [Privacy statement and terms of use](agent-builder-publication-privacy-terms-of-use.md).

## Submit an agent to your org catalog

The shared version of your agent and the Agent Store version are managed separately. You manage the shared version and can continue iterating on it, changing who it's shared with, or keeping it private.

To make your agent broadly discoverable in your organization, submit it to your org catalog. An admin reviews the submission in the [Microsoft 365 admin center](/microsoft-365/admin/manage/agent-registry#request-to-add-agents-to-the-catalog).

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
> Only agents you created show in the **My agents** list. Shared agents from other users aren't listed.

### Edit an agent

You can edit your agents if you discover that changes are required after you share it.

- Access the list of your agents using one of the methods described in [Manage agents](#manage-agents).
- Choose **Edit** (the pencil icon) from the **More** ellipses (**...**) menu.

From there, you can use natural language to describe your changes. You can also use the **Configure** tab for more fine-tuned control over your agent's functionality and knowledge sources.

Changes made to agents are saved automatically. However, your changes aren't visible to users until you make them available. To make changes to an existing agent available, choose **Update** in the agent details.

> [!NOTE]
> If you update a previously shared agent that has a SharePoint file and folder knowledge source, share it again with the same users. Doing so automatically shares the files and folders with the users with the latest content.

### Delete your agent

You can delete agents you create. After you delete an agent, however, you won't be able to use it and it won't be available to the users you shared it with. Only the user who created an agent can delete it, but any owner can manage its sharing settings.

> [!IMPORTANT]
> Deleting an agent is permanent and can't be reversed.

**To delete an agent:**

- Access the list of your agents using one of the methods described in [Manage agents](#manage-agents).
- Select the **More** ellipses (**...**) menu, and then choose **Delete** (the garbage can icon).

### Reassign ownership of an agent

Microsoft 365 Copilot doesn't support transferring ownership of declarative agents to another user. For information about transferring ownership, see [Reassign an agent's owner with PowerShell](/power-platform/release-plan/2025wave2/microsoft-copilot-studio/reassign-agents-owner-powershell).

Admins can update the owner of a shared agent within the organization. For more information, see [Reassign ownership of shared agents](/microsoft-365/admin/manage/agent-registry#reassign-ownership-of-shared-agents).

## Troubleshooting

When sharing an agent and its knowledge sources, you might encounter the errors listed in the following table.

| Issue | Description |
| --- | --- |
| Something went wrong | An internal service error occurred. Contact support if this error continues to occur. |
| Couldn't share | The user has insufficient privileges to update the sharing permissions on certain files. The error lists the files that were unable to be shared. The agent owner should grant the required permissions on those files and try sharing again. |
| Agent sharing failed, knowledge access not granted | If agent sharing fails, the underlying knowledge sources might not be shared with the intended users or groups. As a result, users without access to the knowledge sources won't be able to use the agent. |
| Can no longer update agent | This error occurs when your agent's current sharing option is no longer compliant with new admin policies. Agent owners must change the sharing setting to a compliant option. |
| We're unable to create this agent due to an error. | Occurs when the system is having trouble publishing an agent. Try again in a few minutes. |
| This agent includes at least one file with an unsupported sensitivity label. Check your uploaded files and remove them. | Occurs when you upload a file with a sensitivity label that isn't supported. |
| Your agent can't be updated because it might encourage harmful actions. | Occurs when the system detects harmful content. Review your agent's name, description, and instructions and remove any harmful content. |

## Related content

- [Submit agents from Agent Builder to your org catalog](agent-builder-submit-to-org-catalog.md)
- [Privacy statement and terms of use](agent-builder-publication-privacy-terms-of-use.md)
- [Publish agents for Microsoft 365 Copilot](publish.md)
- [Manage agent requests in the Microsoft 365 admin center](/microsoft-365/admin/manage/agent-requests)
- [Publish and deploy your agent](/microsoft-copilot-studio/publication-fundamentals-publish-channels)
- [Upload into Microsoft Teams](/microsoftteams/platform/concepts/deploy-and-publish/apps-upload)
- [Reassign an agent's owner with PowerShell](/power-platform/release-plan/2025wave2/microsoft-copilot-studio/reassign-agents-owner-powershell)
