---
title: Copy an agent to Copilot Studio
description: Learn how to copy your declarative agent from Microsoft 365 Copilot to Copilot Studio to take advantage of complex features and workflows.
#customer intent: As a developer, I can copy my declaractive agent to Copilot Studio.
author: Lauragra
ms.author: lauragra
ms.reviewer: lauragra
ms.date: 11/17/2025
ms.topic: concept-article
---
# Copy an agent to Copilot Studio

> [!IMPORTANT]
> This feature is not yet available for all users. Rollout is expected to complete by mid-November 2025. This document is intended to serve as educational content to prepare for this feature.

This article explains how to use the **Copy to Copilot Studio** feature in Microsoft 365 Copilot to copy an agent built in Copilot to Copilot Studio. When you copy your agent to Copilot Studio, you can take advantage of advanced lifecycle management, analytics, and governance controls.

## Why use Copilot Studio?

Users can build AI agents for Microsoft 365 by using the following tools:

- **Microsoft 365 Copilot:** The Agent Builder feature in the Microsoft 365 Copilot app is ideal for quick, lightweight agent creation within the Microsoft 365 environment. Agent Builder is designed for users who want to add conversational capabilities to enhance productivity.

- **Copilot Studio:** A dedicated, standalone application that offers advanced capabilities for building, customizing, and managing agents at scale. Copilot Studio provides richer configuration options, integration with enterprise systems, and governance features that are suitable for complex scenarios or organizational deployments.

For more information and a comparison of each tool, see [Choose between Microsoft 365 Copilot and Copilot Studio](/microsoft-365-copilot/extensibility/copilot-studio-experience).

Copying an agent to Copilot Studio unlocks advanced capabilities beyond what's available in Microsoft 365 Copilot, including:

- **Enhanced lifecycle management:** Gain full control over the agent's lifecycle, including versioning, staged deployments, rollback options, and structured release processes. This control ensures better stability and predictability as your agent evolves.

- **Usage monitoring and analytics:** Access detailed insights into agent performance, user engagement, and query trends. Built-in dashboards and reporting tools help you identify optimization opportunities and measure return on investment.

- **Governance controls:** Apply enterprise-grade governance policies such as role-based access, data policies, and compliance checks. These controls help maintain security and consistency across large-scale deployments.

Beyond the core benefits, Copilot Studio provides:

- **Advanced customization:** Extended agent capabilities with richer prompts, conditional logic, and integration with external APIs or enterprise systems.

- **Environment management:** Support for multiple environments (development, test, production) to streamline testing and controlled rollouts.

- **Connector and data integration:** Broader integration options with Microsoft 365 services and Copilot connectors, providing deeper data access and richer responses.

- **Audit and compliance features:** Built-in audit trails and compliance reporting to meet organizational and regulatory requirements.

For example, agents copied to Copilot Studio can be published to the Teams app store for admin review and organization-wide pinning. Admins can also apply [data policies](/power-platform/admin/wp-data-loss-prevention) and [advanced connector policies](/power-platform/admin/advanced-connector-policies) from the Power Platform admin center.

## Copy your agent

If you start building an agent in Microsoft 365 Copilot and want to add more capabilities that are only available in Copilot Studio, use the **Copy to Copilot Studio** button in the **More options (…)** menu. This option copies your agent to Copilot Studio so you don't need to recreate it.

The following agent configurations are copied to Copilot Studio:

- Static text fields for the agent's definition
- Name
- Description
- Instructions
- Suggested prompts
- Agent icon
- SharePoint files, folders, and sites added as knowledge
- Websites added as knowledge

The following table lists the configurations that aren't copied and how to handle them.

| Configuration | Action |
| ------------- | ------ |
| Enterprise knowledge (Copilot connectors) | Set up connectors after you copy your agent. |
| Scoped Copilot connectors | Not currently supported in Copilot Studio. |
| Embedded files | Upload the files again in Copilot Studio. |
| Teams chats and meetings added as knowledge | Add the Power Platform connector for Teams in Copilot Studio. |
| Emails added as knowledge | Add the Power Platform connector for Outlook in Copilot Studio. |
| Code interpreter toggle | Add code interpreter via agent settings in Copilot Studio. |
| Image generation from prompts | Not currently supported in Copilot Studio. Basic charts and graphs are part of the code interpreter capability. |

After you copy your agent:

- The original agent built in Microsoft 365 Copilot remains available.
- Copilot Studio creates a snapshot of the agent and uses it to define the agent in Copilot Studio. Save the agent to ensure that the data is stored.
- Updates to the original agent don't affect the copied version.
- If another copy operation is underway, wait a few seconds before you start a new copy for the same agent. Every copy operation creates a new agent in Copilot Studio.
- If this is the first time you created an agent in Copilot Studio, the **Create Agents** screen appears after the first-run experience.
- The original agent remains accessible through Microsoft 365, while the copy becomes a Copilot Studio agent that you can publish to multiple channels.
- Test your agent in Copilot Studio before you publish it. After you publish, decide whether to delete the original agent and communicate migration steps to users you shared the agent with.

## Licensing requirements

To copy an agent to Copilot Studio, you must have a [Copilot Studio license](/microsoft-copilot-studio/billing-licensing) or [Microsoft 365 Copilot license](/microsoft-copilot-studio/billing-licensing#microsoft-365-copilot). Check your eligibility in [Copilot Studio](https://copilotstudio.microsoft.com) or ask your admin.

If you don't have a Copilot Studio license, you might be eligible for a [Copilot Studio trial](/microsoft-copilot-studio/requirements-licensing-subscriptions#sign-up-for-a-copilot-studio-trial), depending on the admin settings in your organization. Admins can [block unauthorized sign-ups](/microsoft-copilot-studio/admin-block-viral-signups). Trial licenses allow for testing agents but not publishing agents outside personal use.

## Copilot Studio environment requirements

Copilot Studio uses the concept of a [Power Platform environment](/microsoft-copilot-studio/environments-first-run-experience) to store, manage, and share your organization's business data. When you copy an agent, select the environment in which to store the agent definition. The copy operation starts after you select an environment.

For you to copy an agent to Copilot Studio:

- The environment must have applicable Dataverse data store.
- The environment must be located in a [supported data location](/microsoft-copilot-studio/data-location).
- You must have the appropriate [security roles](/microsoft-copilot-studio/admin-share-bots#share-an-agent-for-chat) in the environment.

After you select an environment, the system checks for:

- [Data policies](/power-platform/admin/wp-data-loss-prevention) that prevent publishing agents to the **Teams and Microsoft 365 Copilot** channels.
- [Sharing limits](/microsoft-copilot-studio/admin-sharing-controls-limits) placed on the environment.

The following policies and limits are set up in the Power Platform admin center:

- [Data policies](/power-platform/admin/wp-data-loss-prevention)
- [Connector policies](/power-platform/admin/advanced-connector-policies)
- [Sharing limits](/microsoft-copilot-studio/admin-sharing-controls-limits)

> [!IMPORTANT]
> The sharing limit control in the Microsoft 365 admin center is different than the sharing limit control in the Power Platform admin center.

### Environment routing

Admins can turn on [Environment routing](/power-platform/admin/default-environment-routing) to help makers select environments. When environment routing is turned on, the routed environment is preselected.

>[!IMPORTANT]
> Developer environments might have [automatic cleanup](/power-platform/admin/automatic-environment-cleanup#developer-environments) applied. To retain access, sign in to your Copilot Studio environment periodically.

### Environment troubleshooting

The following table lists common errors that can occur when you select an environment and describes the resolutions.

| Error | Resolution |
| ----- | ---------- |
| You can't use this environment. | Verify that the environment meets the [environment requirements](#copilot-studio-environment-requirements). |
| This environment is blocked from publishing to Microsoft 365 and Teams. | Have the admin check whether there's a [connector policy](/power-platform/admin/advanced-connector-policies) for **Microsoft Teams + M365** channel in Copilot Studio. |
| The environment was turned off due to inactivity. | Environment routing is enabled and the user hasn't used the agent in a certain period of time. Check the [automatic cleanup](/power-platform/admin/automatic-environment-cleanup#developer-environments) policy to determine whether the admin or the user can recover the environment. |

## Admin management and data storage

Admins manage Agent Builder in Microsoft 365 Copilot through the Microsoft 365 admin center. Copilot Studio is managed through the [Power Platform admin center](/power-platform/admin/admin-documentation).

Agents copied to Copilot Studio are stored in [Microsoft Dataverse](/power-apps/maker/data-platform/data-platform-intro) and managed via a [Power Platform solution](/microsoft-copilot-studio/authoring-solutions-overview). Admins can set up [security roles](/power-platform/admin/database-security) for custom environments.

## Related content

- [Choose between Microsoft 365 Copilot and Copilot Studio](/microsoft-365-copilot/extensibility/copilot-studio-experience)
- [Build agents with Microsoft 365 Copilot](/microsoft-365-copilot/extensibility/copilot-studio-lite)
- [Build agents with Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)
