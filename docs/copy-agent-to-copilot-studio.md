---
title: Copy your agent to Copilot Studio full experience
description: Learn about how you can copy your agent from the lite experience to the full experience of Copilot Studio to take advantage of complex features and workflows.
#customer intent: At a developer, I can copy my declaractive agent to the Copilot Studio full experience.
author: Lauragra
ms.author: lauragra
ms.reviewer: lauragra
ms.date: 10/09/2025
ms.topic: concept-article
---
# Copy an agent to the full version of Copilot Studio

This article explains how to use the “Copy to full version” feature in Copilot Studio to move an agent from the lite experience to the full experience, enabling advanced lifecycle management, analytics, and governance controls.

## Overview

Copilot Studio provides two ways to build AI agents:

- **Lite experience:** Integrated into the Microsoft 365 Copilot app.

- **Full experience:** Standalone Copilot Studio application.

Both experiences allow you to create powerful agents, but they serve different needs. For a comparison, see https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-experience.

If you started building an agent in the lite version and want to add more capabilities, use the “Copy to full version” button in the … menu. This lets you copy your agent to the full version without rebuilding it from scratch.

## Benefits of copying to the full version

Copying an agent to the full version of Copilot Studio provides:

- Enhanced lifecycle management

- Usage monitoring and analytics

- Governance controls

For example, agents copied to the full version can be published to the Teams app store for admin review and organization-wide pinning. Admins can also apply https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention and https://learn.microsoft.com/power-platform/admin/advanced-connector-policies?tabs=new from the Power Platform Admin Center.

:::image type="content" source="" alt-text="Screenshot of the Copy to full version option in Copilot Studio. ":::

## Environment selection

The full version of Copilot Studio uses the concept of an https://learn.microsoft.com/microsoft-copilot-studio/environments-first-run-experience to store, manage, and share your organization’s business data. When copying an agent, select the environment where the agent definition will be stored.

:::image type="content" source="" alt-text="Screenshot of environment selection when copying an agent. ":::

## Agent lifecycle

- The copy operation starts after you select an environment.

- The original agent in the lite version remains available for end users while the copied version is revised.

- A snapshot of the agent is taken at the time of copy and used to populate the agent’s definition in the full version. You must save the agent for the data to be stored.

- Copying is done per agent; agents can be copied individually.

- Updates to the original agent do not affect the copied version.

- If another copy operation is underway, wait a few seconds before starting a new copy for the same agent.

- The original agent remains a https://learn.microsoft.com/microsoft-365-copilot/extensibility/overview-declarative-agent accessible through Microsoft 365, while the copy becomes a Copilot Studio agent that can be published to multiple channels.

- Test your agent in the full version before publishing. After publishing, decide whether to delete the original and communicate migration steps to users.

## What gets copied

The following configurations are copied to the full version:

- Static text fields for the agent’s definition

- Name

- Description

- Instructions

- Suggested prompts

- Agent icon

- SharePoint files, folders, and sites added as Knowledge

- Websites added as Knowledge

## What does not get copied

These configurations are not copied:

- Enterprise knowledge (Copilot connectors) — can be set up after saving the agent in the full version

- Scoped Copilot connectors — not yet supported in the full version

- Files uploaded into the agent — reupload in the full version

- Teams chats and meetings added as Knowledge — add the Power Platform connector for Teams in the full version

- Emails added as Knowledge — add the Power Platform connector for Outlook in the full version

- Code Interpreter toggle — enable in the full version via agent settings

- Image generation from prompts — not supported in the full version; basic charts and graphs are part of Code Interpreter capability

:::image type="content" source="" alt-text="Screenshot of what is not included when copying to the full version. ":::

## Licensing requirements

Before copying an agent, you must have https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing. If you have a Microsoft 365 Copilot license, you may already be entitled to Copilot Studio. Check eligibility at copilotstudio.microsoft.com or ask your admin via the https://learn.microsoft.com/copilot/microsoft-365/microsoft-365-copilot-page.

If not licensed, you’ll be prompted to visit https://copilotstudio.microsoft.com/ to acquire access. You may be eligible for a https://learn.microsoft.com/microsoft-copilot-studio/requirements-licensing-subscriptions#sign-up-for-a-copilot-studio-trial, depending on admin settings. Admins can https://learn.microsoft.com/microsoft-copilot-studio/admin-block-viral-signups. Trial licenses allow testing agents but not publishing outside personal use.

## Admin management

- The lite version is managed through the Microsoft Admin Center.

- The full version is managed through the https://learn.microsoft.com/power-platform/admin/admin-documentation?tabs=new.

- For governance differences, see https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-experience.

## Data storage for copied agents

Agents copied to the full version are stored in https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-intro and backed by a https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-overview. Admins can set up https://learn.microsoft.com/power-platform/admin/database-security for custom environments.

## Environment requirements

To copy an agent, the environment must:

- Have applicable https://learn.microsoft.com/power-platform/admin/create-database?tabs=new

- Be located in a https://learn.microsoft.com/microsoft-copilot-studio/data-location

- Grant the user the “agent author” https://learn.microsoft.com/microsoft-copilot-studio/environments-first-run-experience

After selecting an environment, the system checks for:

- Blocking data policies for Microsoft Teams + M365 channel

- Non-blocking sharing limits

- https://learn.microsoft.com/power-platform/admin/wp-data-loss-prevention, https://learn.microsoft.com/power-platform/admin/advanced-connector-policies?tabs=new, and https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits can be set up in the Power Platform Admin Center.

> [!IMPORTANT]
> The sharing limit control in the Microsoft Admin Center is not the same as the sharing limit control in the Power Platform Admin Center.

## Environment routing

Admins can enable https://learn.microsoft.com/power-platform/admin/default-environment-routing?tabs=new to guide users in selecting environments. When enabled, the routed environment is pre-selected. Developer environments may have https://learn.microsoft.com/power-platform/admin/automatic-environment-cleanup?tabs=new#developer-environments; users should periodically log in to retain access.

## Troubleshooting

Common error messages and solutions:

- **You can’t use this environment:** Check that the environment meets the prerequisites.

- **Blocked from publishing to Microsoft 365 and Teams:** Check for connector policies for Microsoft Teams + M365 channel.

- **Environment turned off due to inactivity:** May occur if Environment Routing is enabled and the user hasn’t used the agent recently. See the https://learn.microsoft.com/power-platform/admin/automatic-environment-cleanup?tabs=new#developer-environments.

## Admin contact info

Admins can set up https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention#add-and-update-the-learn-more-and-admin-contact-email-links for users needing help. If not set, error messages will say “Contact your admin” without contact details.

## Free trial management

Admins can https://learn.microsoft.com/microsoft-copilot-studio/admin-block-viral-signups by blocking unauthorized self-service sign-ups.

