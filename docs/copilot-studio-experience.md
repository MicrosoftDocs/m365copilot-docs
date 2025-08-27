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

## Related content


