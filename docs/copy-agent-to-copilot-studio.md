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
# Copy an agent to the full experience of Copilot Studio

This article explains how to use the “Copy to full version” feature in the Copilot Studio lite experience to move an agent to the Copilot Studio full experience. Copying your agent to the Copilot Studio full experience enables you to take advantage of the advanced lifecycle management, analytics, and governance controls that are available.

## Why copy your agent to Copilot Studio?

Copilot Studio provides two ways to build AI agents:

- **Lite experience:** Integrated into the Microsoft 365 Copilot app.

- **Full experience:** Standalone Copilot Studio application.

Both experiences allow you to create powerful agents, but they serve different needs. For more information and a comparison of each experience, see [Choose the right Copilot Studio experience](/microsoft-365-copilot/extensibility/copilot-studio-experience).

Copying an agent to the full version of Copilot Studio unlocks advanced capabilities beyond what's available in the lite experience, including:

- **Enhanced lifecycle management:** Gain full control over the agent’s lifecycle, including versioning, staged deployments, rollback options, and structured release processes. This ensures better stability and predictability as your agent evolves.

- **Usage monitoring and analytics:** Access detailed insights into agent performance, user engagement, and query trends. Built-in dashboards and reporting tools help you identify optimization opportunities and measure ROI.

- **Governance controls:** Apply enterprise-grade governance policies such as role-based access, approval workflows, and compliance checks. These controls help maintain security and consistency across large-scale deployments.

Beyond the core benefits, the full Copilot Studio experience provides:

- **Advanced customization:** - Extend agent capabilities with richer prompts, conditional logic, and integration with external APIs or enterprise systems.

- **Environment management:** Support for multiple environments (development, test, production) to streamline testing and controlled rollouts.

- **Connector and data integration:** Broader integration options with Microsoft 365 services and third-party connectors, enabling deeper data access and richer responses.

- **Audit and compliance features:** Built-in audit trails and compliance reporting to meet organizational and regulatory requirements.

For example, agents copied to the full version can be published to the Teams app store for admin review and organization-wide pinning. Admins can also apply [Data policies](/power-platform/admin/wp-data-loss-prevention) and [Advanced connector policies](/power-platform/admin/advanced-connector-policies?tabs=new) from the Power Platform Admin Center.

## Copy your agent to the full experience

If you start building an agent in the lite version of Copilot Studio and want to add more capabilities that are only available in the full version, use the **Copy to full version** button in the More options (…) menu. This option copies your agent to the full version of Copilot Studio without the need to recreate it.

The following components of your agent are copied to the full version:

- Static text fields for the agent’s definition
- Name
- Description
- Instructions
- Suggested prompts
- Agent icon
- SharePoint files, folders, and sites added as Knowledge
- Websites added as knowledge

The following configurations aren't copied:

- Enterprise knowledge (Copilot connectors) — You can set up connectors after you copy your agent.
- Scoped Copilot connectors — Scoped connectors aren't currently supported in the full experience.
- Embedded files — Reupload the files in the full experience.
- Teams chats and meetings added as knowledge — Add the Power Platform connector for Teams in the full experience.
- Emails added as knowledge — Add the Power Platform connector for Outlook in the full experience.
- Code Interpreter toggle — Enable Code Interprester via agent settings in the full experience.
- Image generation from prompts — This feature isn't currently supported in the full experience. Basic charts and graphs are part of Code Interpreter capability.

The full version of Copilot Studio uses the concept of a [Power Platform environment](/microsoft-copilot-studio/environments-first-run-experience) to store, manage, and share your organization’s business data. When you copy an agent, select the environment in which to store the agent definition. The copy operation starts after you select an environment.

After you copy your agent:

- The original agent in the lite experience remains available for users you updated the copied version in Copilot Studio.
- A snapshot of the agent is taken at the time of copy and used to populate the agent’s definition in the full experience. You must save the agent for the data to be stored.
- Updates to the original agent do not affect the copied version.
- If another copy operation is underway, wait a few seconds before starting a new copy for the same agent.
- The original agent remains accessible through Microsoft 365, while the copy becomes a Copilot Studio agent that can be published to multiple channels.
- Test your agent in the full version before you publish it. After you publish, decide whether to delete the original agent and communicate migration steps to users.
- 
> [!NOTE]
> Agents can only be copied one at a time.

## Licensing requirements

Before you copy an agent, you must have a [Copilot Studio license](/microsoft-copilot-studio/billing-licensing). If you have a Microsoft 365 Copilot license, you might already be entitled to Copilot Studio. Check your eligibility in the [Copilot Studio app](https://copilotstudio.microsoft.com) or ask your admin.

If you don't have a Copilot Studio license, you’ll be prompted to go to [Copilot Studio](https://copilotstudio.microsoft.com) to get access. You might be eligible for a [Copilot Studio trial](/microsoft-copilot-studio/requirements-licensing-subscriptions#sign-up-for-a-copilot-studio-trial), depending on the admin settings in your organization. Admins can [block unauthorized sign-ups](/microsoft-copilot-studio/admin-block-viral-signups). Trial licenses allow for testing agents but not publishing outside personal use.

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

