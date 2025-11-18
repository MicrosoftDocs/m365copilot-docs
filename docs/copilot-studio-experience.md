---
title:  Choose between Agent Builder in Microsoft 365 Copilot and Copilot Studio to build your agent
description: Learn how to determine whether Microsoft 365 Copilot or Copilot Studio is the best tool for building your agent.
author: lauragra
ms.author: lauragra
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 11/17/2025
---

# Choose between Microsoft 365 Copilot and Copilot Studio to build your agent

The Agent Builder feature in Microsoft 365 Copilot and Copilot Studio are powerful tools for building secure, scalable, and intelligent agents that work across Microsoft 365 and line-of-business systems. Both tools allow you to create agents, but they serve different needs. This article describes the differences between the two to help you choose the best one for your scenario.

When choosing which tool to use, consider the following factors:

- **Audience** – Who will use the agent?
- **Deployment scope** – How widely do you plan to share the agent?
- **Functionality** – What tasks will the agent perform?
- **Governance needs** – Does your agent require granular application lifecycle management?

The following decision tree helps you map your scenario to the right tool.

:::image type="content" source="assets/images/copilot-studio-agent-builder/copilot-studio-decision-flow.png" alt-text="A flow chart that shows the decision points for choosing the full and lite experiences of Copilot Studio.":::

In summary:

- **Choose Microsoft 365 Copilot** and use the Agent Builder feature if you want to quickly create an agent for yourself or a small team, using natural language and existing content (for example, a bot that answers questions from your team’s SharePoint files or emails). The lite version is simple, accessible, and integrated with the Microsoft 365 Copilot experience, so you can build agents in context without any code.

- **Choose Copilot Studio** if you need an agent for a broader audience (such as your whole department, organization, or external customers) or if the agent requires advanced capabilities like multi-step workflows or custom integrations, or you need more control over deployment and management. The full version of Copilot Studio is a standalone web portal with a rich set of tools for complex or scalable solutions.

> [!NOTE]
> If you choose to use Microsoft 365 Copilot to create your agent and you later want to take advantage of the features available in Copilot Studio, you can [copy your agent to Copilot Studio](#copy-agents-from-microsoft-365-copilot-to-copilot-studio).

The following table provides a more detailed feature comparison.

| Feature | Microsoft 365 Copilot | Copilot Studio |
| ------- | --------------- | --------------- |
| Access point | [Microsoft 365 Copilot app](https://www.microsoft365.com/copilot) | [Copilot Studio](https://copilotstudio.microsoft.com) |
| User type | Information workers | Makers and developers |
| Agent target audience | Individuals or small teams. | Department, organization, or external customers. |
| Agent type | Lightweight Q&A agents with organizational knowledge. | Agents with complex scenarios like multi-step workflows or business system integration, and that require enterprise governance and robust controls. |
| Key capabilities | <ul><li>Natural language authoring</li><li>Content-focused Q&A scenarios based on organization context from Microsoft Graph</li><li>Respects user permissions to Microsoft 365 data</li><li>Uses the Microsoft 365 Copilot orchestrator, foundation models, and services</li></ul> | <ul><li>Broad and external publishing</li><li>Supports multistep logic, approvals, and branching workflows</li><li>Supports advanced AI models and integration with Azure AI services</li><li>Provides access to prebuilt and custom connectors to connect with data sources beyond Microsoft 365</li><li>Autonomous capabilities</li><li>Lifecycle management tools including versioning; development, test, and production environments; role-based access controls; and telemetry and analytics.</li></ul>  |
| Use cases | Use the lite experience to build:<br /><ul><li>Project FAQ bots that answers common questions based on project documentation.</li><li>Product documentation assistants that help employees find information from internal product manuals or wikis.</li><li>Onboarding agents that help new team members get answers from internal knowledge bases.</li></ul> |  Use the full experience to build:<br /><ul><li>Customer support agents that create support tickets and escalates issues to a human.</li><li>IT help desk triage agents that handle employee IT requests and routes them to the right support team.</li><li>Sales assistants for CRM that retrieve sales data, makes notes, or kicks off an approval workflow.</li></ul> |
| Management and governance | Managed primarily through the Microsoft 365 admin center. | Managed through the Power Platform admin center with finer-grained controls for enterprise scenarios. |

## Copy agents from Microsoft 365 Copilot to Copilot Studio

You can copy an agent created in Microsoft 365 Copilot to Copilot Studio when you need advanced capabilities or broader integration options. This process ensures that work done in Microsoft 365 Copilot isn't lost and can be extended in the full experience without a need to to start over.

Transitioning to Copilot Studio unlocks additional features, such as richer customization, governance controls, and expanded connectors. When you copy your agent, the agent's core configuration and instructions are preserved, and you can enhance them with the advanced settings available only in Copilot Studio.

Consider copying an agent to Copilot Studio when:

- You need enterprise-grade deployment options.
- You want to integrate with more data sources or apply advanced security policies.

For more information, see [Copy an agent to Copilot Studio](copy-agent-to-copilot-studio.md).

## Licensing requirements

Both Agent Builder in Microsoft 365 Copilot and Copilot Studio are included with a Microsoft 365 Copilot add-on license for authenticated users. If you don’t have a Copilot license, you can use Copilot Credits or a pay-as-you-go plan to access either experience.

You can also use the Agent Builder feature in Copilot for free to build agents grounded on web knowledge only. For more information, see [Using agents in Microsoft 365 Copilot Chat](/copilot/agents).

## Agent Builder governance principles

The Agent Builder feature in Microsoft 365 Copilot allows users to create agents that act as reusable templates. These agents help retrieve insights from Microsoft Graph by packaging repeatable prompts and content connections. They operate within existing enterprise boundaries and respect Microsoft 365 controls.

Agent Builder applies the following key governance principles:

- **No new privileges** - Agents respect existing Microsoft 365 permissions. If a user does haven't access to a SharePoint site, Teams channel, or Outlook mailbox, the agent doesn't surface content from those sources.  
- **Built-in visibility and auditing capabilities** - Agents are surfaced within Microsoft 365. Standard audit logs, activity reports, and DLP/retention policies apply.

IT administrators manage agent visibility, sharing, and lifecycle policies in the Microsoft 365 admin center via the **Copilot** > **Agents** page. Admins can:

- View agent inventory and agent metadata.  
- Enable, disable, assign, block, or remove agents to align with organizational policies.
- Configure pay-as-you-go billing and review agent usage and consumption.
- Enforce compliance using Microsoft Purview (sensitivity labels, audit logs).

Admins can also manage agent sharing controls via the **Microsoft 365 Admin Center** > **Copilot** > **Settings** > **Data access** > **Agents** page. For more information, see [Share an agent](copilot-studio-lite-share-manage-agent.md#share-an-agent).

## Copilot Studio governance principles

Copilot Studio supports the creation of more sophisticated agents, often by makers or developers. These agents can integrate external data sources, call APIs, orchestrate complex workflows, and connect to systems beyond Microsoft 365—ideal for departmental or enterprise-wide solutions.

Copilot Studio applies the following key governance principles:

- **Structured development** - Application Lifecycle Management (ALM) enables development across dev, test, and production environments.
- **Connector governance** - Admins control which systems agents can connect to, reducing risk of unauthorized access.
- **Environment-level policies** - Data loss prevention (DLP), role-based access, and auditing are enforced at the environment level.
- **Flexible deployment** - Agents can be published across Teams, websites, and custom endpoints with granular access controls.
- **Secure collaboration** - Agents support view/edit rights for cross-functional teamwork with oversight.
- **Development and publishing oversight** - Application Lifecycle Management (ALM) supports dev/test/prod environments, and publishing to an organization’s app catalog requires admin approval. This ensures visibility and control over what becomes broadly available.

IT administrators use the Power Platform admin center to manage:

- Agent environments and connectors.
- Lifecycle policies and publishing workflows.
- Compliance via Microsoft Purview (sensitivity labels, audit logs, retention).
- Telemetry and usage analytics to monitor agent behavior and ensure policy alignment.

## Related content

- [Choose the right tool to build your declarative agent](declarative-agent-tool-comparison.md)
- [Overview of Agent Builder in Microsoft 365 Copilot](copilot-studio-agent-builder.md)
- [Use Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions)
