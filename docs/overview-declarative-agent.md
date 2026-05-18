---
title: Declarative Agents for Microsoft 365 Copilot
description: Learn how you can use declarative agents to meet business needs. Declarative agents customize Microsoft 365 Copilot via instructions, actions, and knowledge.
author: aycabas
ms.author: aycabas
ms.localizationpriority: medium
ms.date: 05/18/2026
ms.topic: overview
---

# Declarative agents for Microsoft 365 Copilot

Declarative agents enable you to customize Microsoft 365 Copilot to help you meet the unique business needs of your users. When you build a declarative agent, you provide the instructions, actions, and knowledge to tailor Copilot for your business scenarios. Declarative agents run on the same orchestrator, foundation models, and trusted AI services that power Microsoft 365 Copilot. By building declarative agents, you can optimize collaboration, increase productivity, and streamline workflows in your organization.

With declarative agents, you can establish consistent, personalized experiences and automate intricate processes, ranging from team onboarding to efficient resolution of customer issues. You can also add capabilities to your agent to unlock more functionality for your users.

> [!NOTE]
> For information about the two approaches to building agents for Microsoft 365 Copilot, see [Agents for Microsoft 365 Copilot](agents-overview.md).

## Tailor declarative agents for your scenario

Declarative agents are powered by Microsoft 365 Copilot. They use the same scalable infrastructure and platform but are scoped to meet your specific business needs. The following examples illustrate possible use cases for your agents:

- **Employee IT self-help with enhanced knowledge** - Your employees can resolve their technical issues without relying on the internal IT help desk. You can streamline and simplify IT workflows by building a declarative agent to expedite resolution of common issues. This specialized agent draws from internal knowledge stored in SharePoint sites to provide employees fast and effective assistance, while reducing costs for the organization.

- **Real-time customer support with seamless system integrations** - Increase your customer support team's productivity by enhancing your existing process with a declarative agent that seamlessly integrates with a plugin for the order management system to access and provide real-time order updates to customers.

:::image type="content" source="assets/images/declarative-agent-scenarios.png" alt-text="A diagram that shows two scenarios of declarative agents mentioned in the article." lightbox="assets/images/declarative-agent-scenarios.png" :::

## Explore the benefits of declarative agents

Some of the core benefits of using declarative agents as part of your business processes include:

- **Familiar UI** - Declarative agents use the same friendly UI within Microsoft 365 Copilot. Users can adopt and engage with agents tailored to their business scenarios that look and feel like Microsoft 365 Copilot.
- **Enhanced enterprise knowledge** - Similar to Microsoft 365 Copilot, declarative agents can also use enterprise data from SharePoint, OneDrive, Copilot connectors, and uploaded files. By applying existing enterprise knowledge and the familiar Copilot interface, you can streamline workflows and make it easier for users to engage with data within the organization.
- **Seamless integration with plugins** - Enterprises can extend declarative agents by using plugins to retrieve data and run tasks on external systems. Declarative agents can use multiple plugins at the same time.
- **Prioritized security, privacy, and compliance** - Declarative agents are built on a secure foundation and inherit all data protections provided by Microsoft 365 Copilot. Enterprise admins have visibility into and control over the distribution of declarative agents within their tenant via the Microsoft 365 admin center.

Users engage with declarative agents within the Microsoft 365 Copilot UI or within Microsoft 365 apps.

The following image shows the agent experience in Microsoft 365 Copilot.

:::image type="content" source="assets/images/declarative-agent-showcase.png" alt-text="Screenshots that show declarative agents running on Microsoft 365 Copilot." lightbox="assets/images/declarative-agent-showcase.png" :::

Users can select declarative agents from the right pane in Copilot. They can then view the conversation starters provided, or they can ask the agent what it can do, and then they can use prompts related to the purpose of the agent.

## Building declarative agents

A declarative agent is defined by a set of configuration elements that describe its identity, behavior, and capabilities. These elements apply regardless of how the agent is authored or deployed.

**Agent definition (configuration)**
- Defines the agent’s purpose, scope, and behavior.
- Includes instructions, conversation patterns, and constraints that guide how the agent responds.

**Capabilities (actions)**
- Specify what the agent can do.
- Can include operations or integrations with external systems and services.

**Knowledge sources**
- Provide the information the agent uses to generate responses.
- Can include structured or unstructured data from internal or external sources or APIs.

**App metadata (hosting and distribution)**
- Describes how the agent is identified and surfaced in its host environment.
- Includes attributes such as name, description, and visual representation (for example, icons).

You can use your tool of choice to create a declarative agent:

- [Agent Builder in Microsoft 365 Copilot](agent-builder.md)
- [Microsoft 365 Agents Toolkit](/microsoftteams/platform/toolkit/overview-agents-toolkit?context=/microsoft-365/copilot/extensibility/context)
- [Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365/copilot/extensibility/context)
- [SharePoint](/sharepoint/get-started-sharepoint-agents)

To help you choose the right tool for your scenarios, see [Choose the right tool to build your declarative agent](./declarative-agent-tool-comparison.md).

## Responsible AI

Declarative agents must pass validation checks for Responsible AI (RAI). For information about RAI validation, see [Responsible AI validation checks](rai-validation.md).

## National cloud support

[!INCLUDE [declarative-agents-gov](includes/declarative-agents-gov.md)]

## Related content

- [Agents in the Microsoft 365 ecosystem](ecosystem.md)
- [Agents are apps for Microsoft 365](agents-are-apps.md)
- [Build agents with Agent Builder](agent-builder-build-agents.md)
- [Build agents with Microsoft 365 Agents Toolkit](/microsoftteams/platform/toolkit/overview-agents-toolkit?context=/microsoft-365/copilot/extensibility/context)
