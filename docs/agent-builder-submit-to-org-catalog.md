---
title: Submit agents from Agent Builder to your org catalog
description: Learn how to submit agents built with Agent Builder to your organization's catalog for admin review and publication in the Microsoft 365 Copilot Agent Store.
author: jasonxian-msft
ms.author: jasonxian
ms.localizationpriority: medium
ms.date: 04/21/2026
ms.topic: article
ms.service: copilot-studio
ms.subservice: agent-builder
---

# Submit agents from Agent Builder to your org catalog

Agents you build with Agent Builder in Microsoft 365 Copilot can be submitted to your organization's catalog for broader use. When you submit, an admin reviews the agent in the Microsoft 365 admin center and, if approved, publishes it to the Agent Store under **Built by your org**. From there, the agent is available as a trusted, organization-approved solution for users across your tenant.

This article describes how to submit an agent, track its approval status, and manage its Agent Store listing after approval. For admin-side actions, see [Publish agents in the Microsoft 365 admin center](/microsoft-365/admin/manage/agent-registry#publish-agents).

## Sharing and the Agent Store

Agents built with Agent Builder can reach other users through two separate paths:

- **Share your agent** with specific people or groups. You manage the shared agent, including its sharing settings and updates. Changes you publish are visible to shared users right away.
- **Submit your agent to your org catalog.** An admin reviews and publishes the agent to the Agent Store. The admin manages the Agent Store listing, including availability. Changes apply to the Agent Store listing only after an admin approves a resubmission.

The shared version and the Agent Store version are tracked as two separate entries. You can continue iterating on your shared agent at any time, including changing who it's shared with or keeping it private for testing, without affecting the Agent Store version. When you're ready to roll a meaningful update into the Agent Store, resubmit for admin review.

The following table highlights the key differences between the two paths.

| | Sharing | Submit to your org catalog |
| --- | --- | --- |
| **Managed by** | The maker | The maker authors the agent; an admin manages the Agent Store listing |
| **Audience** | Named users, groups, or teams | Anyone in your organization, based on admin availability settings |
| **Review** | None | Admin review in the [Microsoft 365 admin center](/microsoft-365/admin/manage/agent-registry#publish-agents) |
| **Distribution** | Shareable link | Agent Store, under **Built by your org** |
| **Update cycle** | Changes apply immediately when you publish | Changes apply only after admin approval of a resubmission |
| **When to use** | Iterating, piloting, or distributing to a known audience | Broad organizational availability for a production-ready agent |

> [!NOTE]
> Sharing limits set by your admin apply only to the shared version. They don't restrict who can install the Agent Store version. Admin availability settings in the Microsoft 365 admin center control who sees the Agent Store version.

## What admins review

When you submit, your admin reviews the following to validate security, compliance, and data-access behavior:

- The agent's display name and short description
- Configured capabilities and knowledge sources
- The agent's sensitivity label
- Developer information (developer name, creator website, privacy statement, terms of use)
- Metadata about the underlying declarative agent

For details, see [Publish agents in the Microsoft 365 admin center](/microsoft-365/admin/manage/agent-registry#publish-agents).

## Before you submit

Ensure your agent is ready for organizational use before you submit.

### Prerequisites

- Your agent is published. The **Submit to your org catalog** menu item is disabled until the agent is published at least once.
- Your agent is complete, production-ready, and compliant with your organization's standards, rules, and policies.
- Users who install the agent have access to the knowledge sources it uses.

### Best practices

- **Use governed knowledge sources.** Prefer SharePoint sites and other shared sources that your intended audience can access.
- **Disclose personal knowledge usage.** If your agent uses personal Work IQ knowledge sources, such as Microsoft Teams meetings, chats, or emails, mention this in the short description so users know the agent may reference their personal work data.
- **Design for organizational scale.** Use neutral, professional language in the agent's description and starter prompts. Test with sample users before you submit.
- **Provide complete metadata.** Include accurate developer information and links to your organization's privacy statement and terms of use. For more information, see [Privacy statement and terms of use](agent-builder-publication-privacy-terms-of-use.md).

## Submit an agent to your org catalog

1. In Microsoft 365 Copilot, go to **All agents**, select the agent you want to submit, and then select **Edit**.

1. If your draft contains unpublished changes, select **Update** to publish them. Submission uses the latest published version of your agent.

1. In the agent authoring header, select **More options** (the overflow menu), and then select **Submit to your org catalog**.

   You can also start submission from:

   - The share dialog, by selecting the **Submit to your catalog** link.
   - The publish success dialog, by selecting the **Submit to your catalog** link.

1. In the submission dialog, provide the following information. All fields are required.

   | Field | Max length | Description |
   | --- | --- | --- |
   | **Display name** | 30 characters | The name that appears in the Agent Store. |
   | **Short description** | 80 characters | A concise summary of what the agent does. Default: *Built using Microsoft 365 Copilot Agent Builder*. |
   | **Developer name** | 32 characters | Your name or your team's name. |
   | **Creator website** | 2,048 characters | A link to more information. Opens when users select the creator's name in the agent details pane. Must be a valid HTTPS URL. Replace the default placeholder link with your own. |
   | **Privacy statement** | 2,048 characters | A link to your organization's privacy statement. Must be a valid HTTPS URL. Replace the default placeholder link with your organization's URL. For details, see [Privacy statement and terms of use](agent-builder-publication-privacy-terms-of-use.md). |
   | **Terms of use** | 2,048 characters | A link to your organization's terms of use. Must be a valid HTTPS URL. Replace the default placeholder link with your organization's URL. |

   > [!TIP]
   > **Short description**, **Creator website**, **Privacy statement**, and **Terms of use** are pre-populated from your agent's **About this agent** settings. To set these values without starting a submission, use **About this agent** from the agent authoring header. For more information, see [Update your agent's About info](agent-builder-share-manage-agents.md#update-your-agents-about-info).

1. Select **Continue**. Agent Builder saves your changes, publishes the updated version, and submits it for admin review.

Once submitted, the dialog shows **Submitted for admin approval** along with next steps.

## Track submission status

To check status at any time, open the agent, select **More options**, and then select **Submit to your org catalog**. The dialog shows the current state.

| Status | Meaning |
| --- | --- |
| **Waiting for approval** | Your submission is pending admin review. |
| **Approved** | Your admin approved the submission. The agent is available in the Agent Store under **Built by your org**. |
| **Rejected by your admin** | Your admin rejected the submission. The banner includes the reviewer's comment so you know what to fix before resubmitting. |

An agent can have only one active pending submission. If you resubmit while a submission is pending, the new submission replaces the existing one.

## Update an approved agent

Changes you publish in Agent Builder don't automatically flow through to the Agent Store. Resubmit the agent when you want your updates reviewed and published to the Agent Store.

1. Make your changes in Agent Builder and select **Update** to publish.
1. On the publish success dialog, select the **Submit to your catalog** link.
1. Complete the submission dialog as described in [Submit an agent to your org catalog](#submit-an-agent-to-your-org-catalog).

After approval, subsequent submissions are reviewed as updates to the same agent, not as new submissions. Admins see incremental changes to facilitate faster review.

> [!IMPORTANT]
> Changes published in Agent Builder update the shared version immediately. The Agent Store version doesn't update until an admin approves your resubmission. Until then, users who install the agent from the Agent Store continue to see the last approved version.

## Find your agent in the Agent Store

Once your agent is approved, you can open its Agent Store listing to share the URL with users. Use either of the following methods.

**From the submission dialog:**

1. Open the agent and select **More options** > **Submit to your org catalog**.
1. On the **Approved** banner, select **Go to Agent Store**.

**From All agents:**

1. In Microsoft 365 Copilot, select **All agents**.
1. Under **Built by your org**, find your agent. To locate it quickly, use the search.
1. Select the agent to open the agent details pane, and then select the link icon to copy the agent's URL.

## Related content

- [Privacy statement and terms of use](agent-builder-publication-privacy-terms-of-use.md)
- [Share and manage agents](agent-builder-share-manage-agents.md)
- [Publish agents in the Microsoft 365 admin center](/microsoft-365/admin/manage/agent-registry#publish-agents)
