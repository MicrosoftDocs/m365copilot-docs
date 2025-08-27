---
title: Choose the Right Copilot Studio Experience to Build Your Agent
description: Find information about current known issues related to Microsoft 365 Copilot extensibility and the recommended workarounds.
author: lauragra
ms.author: lauragra
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 08/25/2025
---

# Choose the right Copilot Studio experience to build your agent

Microsoft Copilot Studio offers two ways to build AI agents for Microsoft 365: a lite experience (integrated into the Microsoft 365 Copilot app) and a full experience (a standalone Copilot Studio application). Both experiences enable you to create powerful agents, but they serve different needs. This article describes the differences between the lite and full experiences to help you choose the right Copilot Studio experience for your scenario.

## Comparing the lite and full Copilot Studio experiences

The following list summarizes when to choose which Copilot Studio experience:

- **Choose the lite experience** if you want to quickly create an agent for yourself or a small team, using natural language and existing content (for example, a bot that answers questions from your team’s SharePoint files or emails). The lite version is simple, accessible, and integrated with the Microsoft 365 Copilot experience, so you can build agents in context without any code.

- **Choose the full experience** if you need an agent for a broader audience (such as your whole department, organization, or external customers) or if the agent requires advanced capabilities like multi-step workflows or custom integrations, or more control over deployment and management. The full version of Copilot Studio is a standalone web portal with a rich set of tools for complex or scalable solutions.

The following table provides a more detailed feature comparison.

| Feature | Lite experience | Full experience |
| ------- | --------------- | --------------- |
| Access point | Microsoft 365 Copilot app or Teams chat | Web app or Teams app |
| Target audience | Individuals or small teams. Best for individual productivity or specific team projects. | Department, organization, or external customers. Best for agents that are available across a company or for customers or partners outside the organization. |
| Agent type | Simple Q&A agents with tailored organizational knowledge. | Agents with complex scenarios like multi-step workflows and database or business system integration. Agents that require enterprise governance and robust controls. |
| Key capabilities | <ul><li>Natural language authoring</li><li>Supports content-focused Q&A scenarios based on organization context</li><li>Permissions-aware - agents only surface data users have permission to access</li><li>Uses the Copilot orchestrator</li></ul> | <ul><li>Workflow automation - Supports multistep logic, approvals, and branching workflows</li><li>Supports advanced AI models and integration with Azure AI services</li><li>Prebuilt connectors connect with data sources beyond Microsoft 365</li><li>Autonomous capabilities - agents can run automatically in the background</li><li>Lifecycle management tools including versioning; development, test, and production environments; role-based access controls; and telemetry and analytics.</li></ul>  |
| Use cases | <ul><li>Project FAQ bot that answers common questions based on project documentation.</li><li>Product documentation assistant that helps employees find information from internal product manuals or wikis.</li><li>Onboarding helper that helps new team members get answers from internal knowledge bases.</li></ul> |  <ul><li>Customer support chat that creates support tickets and escalates issues to a human.</li><li>IT help desk triage agent that handles employee IT requests and routes them to the right support team.</li><li>Sales assistant for CRM that retrieves sales data, makes notes, or kicks off an approval workflow.</li></ul> |
| Management and governance | Managed through the Microsoft 365 admin center. Agents are shared with specific people or groups, and admins can enable or disable agent creation and usage for the organization. Microsoft 365 compliance policies are applied. | Managed through the Power Platform admin center with finer-grained controls for enterprise scenarios. Agnes can be applied to various channels (Teams, web, custom apps) with appropriate access controls. |

[Placeholder for flow chart image]

## Licensing

Both the lite and full Copilot Studio experiences are included with a Microsoft 365 Copilot add-on license. If you don’t have a Copilot license, you can use Copilot Studio message packs or a pay-as-you-go plan to access either experience.

You can also use the lite experience for free to build web-only agents.

## Lite experience governance principles

The lite experience, embedded within Microsoft 365 Copilot, allows users to create agents that act as reusable templates. These agents help retrieve insights from Microsoft Graph by packaging repeatable prompts and content connections. They operate within existing enterprise boundaries and respect Microsoft 365 controls.

The lite experience applies the following key governance principles:

- No new privileges - Agents respect existing Microsoft 365 permissions. If a user does haven't access to a SharePoint site, Teams channel, or Outlook mailbox, the agent doesn't surface content from those sources.  
- Microsoft 365 document sharing model - Agents follow the same Microsoft 365 sharing controls used for files and sites. Sharing can be scoped to individuals, groups, or teams.
- Built-in visibility and auditing capabilities - Agents are surfaced within Microsoft 365. Standard audit logs, activity reports, and DLP/retention policies apply.

IT administrators manage agent visibility, sharing, and lifecycle policies via **Copilot** > **Agents** in the Microsoft 365 admin center. Admins can:

- View agent inventory and agent metadata  
- Enable, disable, assign, block, or remove agents to align with organizational policies
- Manage agent sharing controls
- Configure pay-as-you-go billing and review agent usage and metered consumption
- Enforce compliance using Microsoft Purview (sensitivity labels, audit logs)

## Full experience governance principles

The full experience supports the creation of more sophisticated agents, often by makers or developers. These can integrate external data sources, call APIs, orchestrate complex workflows, and connect to systems beyond Microsoft 365 — ideal for departmental or enterprise-wide solutions.

The full experience applies the following key governance principles:

- Structured development - Application Lifecycle Management (ALM) enables development across dev, test, and production environments.
- Connector governance - Admins control which systems agents can connect to, reducing risk of unauthorized access.
- Environment-level policies - Data loss prevention (DLP), role-based access, and auditing are enforced at the environment level.
- Flexible deployment - Agents can be published across Teams, websites, and custom endpoints with granular access controls.
- Secure collaboration - Agents support view/edit rights for cross-functional teamwork with oversight.

IT administrators use the Power Platform admin center to manage:

- Agent environments and connectors.
- Lifecycle policies and publishing workflows.
- Compliance via Microsoft Purview (e.g., sensitivity labels, audit logs, retention).
- Telemetry and usage analytics to monitor agent behavior and ensure policy alignment.

## Related content


