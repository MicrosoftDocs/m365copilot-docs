---
title: Privacy statement and terms of use for agents in Agent Builder
description: Provide valid privacy statement and terms of use URLs when you publish an agent from Agent Builder to your org catalog.
#customer intent: As a builder, I want to understand the privacy statement and terms of use URL requirements so that my agent passes org catalog review.
author: sophie-roy3
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: concept-article
ms.service: copilot-studio
ms.subservice: agent-builder
---

# Privacy statement and terms of use for agents in Agent Builder

When you [publish an agent from Agent Builder to your org catalog](agent-builder-submit-to-org-catalog.md), you must provide links to your organization's privacy statement and terms of use. These URLs appear in the agent details pane in the Agent Store, where users can review them before they add the agent.

## Get your URLs

Privacy statement and terms of use URLs are specific to your organization. Work with your IT department or legal team to get:

- Your organization's **privacy statement** URL, which explains how your agent collects, uses, and protects user data.
- Your organization's **terms of use** URL, which describes the conditions under which users can interact with your agent.

Both URLs must be:

- Valid, resolvable HTTPS URLs.
- Accessible to all users in your organization who might add the agent.

Default placeholder URLs aren't suitable for agents you publish to your org catalog. Agent Builder shows a warning on these fields if the URL matches a default link.

## Impact on the shared version of your agent

The privacy statement and terms of use URLs apply to both the shared version of your agent and the Agent Store version. When you save these URLs, either in the **Submit to your org catalog** dialog or in the **About this agent** dialog, both versions are updated.

> [!NOTE]
> To update these URLs after approval, resubmit your agent for admin review. Changes to the version you share directly in Agent Builder apply immediately. Changes to the Agent Store version apply only after admin approval.

## Related content

- [Submit agents from Agent Builder to your org catalog](agent-builder-submit-to-org-catalog.md)
- [Share and manage agents built in Agent Builder](agent-builder-share-manage-agents.md)
- [Publish agents in the Microsoft 365 admin center](/microsoft-365/admin/manage/agent-registry#publish-agents)
