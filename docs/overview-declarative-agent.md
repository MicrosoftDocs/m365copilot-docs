---
title: Declarative Agents for Microsoft 365 Copilot
description: Learn how you can use declarative agents to meet business needs. Declarative agents customize Microsoft 365 Copilot via instructions, actions, and knowledge.
author: aycabas
ms.author: aycabas
ms.date: 12/04/2024
ms.topic: overview
---

# Declarative agents for Microsoft 365 Copilot overview

Declarative agents enable you to customize Microsoft 365 Copilot to help you meet the unique business needs of your users. When you build a declarative agent, you provide the instructions, actions, and knowledge to tailor Copilot for your business scenarios. Declarative agents run on the same orchestrator, foundation models, and trusted AI services that power Microsoft 365 Copilot. By building declarative agents, you can optimize collaboration, increase productivity, and streamline workflows in your organization. 

With declarative agents, you can establish consistent, personalized experiences and automate intricate processes, ranging from team onboarding to efficient resolution of customer issues. You can also add capabilities to your agent to unlock additional functionality for your users.

## Tailor declarative agents for your scenario

Declarative agents are powered by Microsoft 365 Copilot. They use the same scalable infrastructure and platform but are scoped to meet your specific business needs. The following examples illustrate possible use cases for your agents:

- **Employee IT self-help with enhanced knowledge** - Imagine a world where your employees can resolve their technical issues without relying on the internal IT help desk. You can streamline and simplify IT workflows by building a declarative agent to expedite resolution of common issues. This specialized agent draws from internal knowledge stored in SharePoint sites to provide employees fast and effective assistance, while reducing costs for the organization.

- **Real-time customer support with seamless system integrations** - Assume having a support team dedicated to providing customer support while also monitoring customers' live order status. You can increase the support team's productivity by enhancing your existing process with a declarative agent that seamlessly integrates with a plugin for the order management system to access and provide real-time order updates to customers.

:::image type="content" source="assets/images/declarative-agent-scenarios.png" alt-text="A diagram that shows two scenarios of declarative agents mentioned in the article." lightbox="assets/images/declarative-agent-scenarios.png" :::

## Explore the benefits of declarative agents

Some of the core benefits of using declarative agents as part of your business processes include:

- **Familiar UI** - Declarative agents use the same friendly UI within Microsoft 365 Copilot. Users can adopt and engage with agents tailored to their business scenarios that look and feel like Microsoft 365 Copilot.
- **Enhanced enterprise knowledge** - Similar to Microsoft 365 Copilot, declarative agents can also use enterprise data from Microsoft Graph connectors and SharePoint files. By applying existing enterprise knowledge and the familiar Copilot interface, you can streamline workflows and make it easier for users to engage with data within the organization.
- **Seamless integration with plugins** - Enterprises can extend declarative agents by using plugins to retrieve data and run tasks on external systems. Declarative agents can use multiple plugins at the same time.
- **Prioritized security, privacy, and compliance** - Declarative agents are built on a secure foundation and inherit all data protections provided by Microsoft 365 Copilot. Enterprise admins have visibility into and control over the distribution of declarative agents within their tenant via the Microsoft Admin Center console.

Users engage with declarative agents within the Microsoft 365 Copilot UI or within the Copilot experiences in Teams, Word, and PowerPoint. 

The following image shows the agent experience in Microsoft 365 Copilot.

:::image type="content" source="assets/images/declarative-agent-showcase.png" alt-text="Screenshots that show declarative agents running on Microsoft 365 Copilot." lightbox="assets/images/declarative-agent-showcase.png" :::

Users can select declarative agents from the right pane in Copilot. They can then view the conversation starters provided, or they can ask the agent what it can do, and then they can use prompts related to the purpose of the agent.

## Building declarative agents

The following are the core elements of a declarative agent app package:

- **App manifest** - Describes how your app is configured, including its capabilities, required resources, and other important attributes.
- **App icons** - The app package requires a color and outline icon for your declarative agents.
- **Declarative agents manifest** - Describes how your declarative agent is configured, including its required fields, capabilities, conversation starters, and actions.
- **Plugin manifest (optional)** - Describes how your plugin is configured, including its required fields and capabilities.

You can use your tool of choice to create a declarative agent app package. To get started, choose from the tools listed in the following table.

| **Start with** | **Summary** |
|:------------|:------------|
| [Teams Toolkit](./build-declarative-agents.yml) | Build declarative agents using Teams Toolkit. |
| [Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365-copilot/extensibility/context) | Build declarative agents using the builder integrated in Copilot Studio. |
| [Copilot Studio agent builder](copilot-studio-agent-builder.md) | Build declarative agents using the integrated builder in Microsoft 365 Copilot. |
| [SharePoint](./build-declarative-agents.yml?tutorial-step=5) | Build declarative agents using grounding data from SharePoint files. |

## Related content

- [Agents in the Microsoft 365 ecosystem](ecosystem.md)
- [Agents are apps for Microsoft 365](agents-are-apps.md)
- [Write effective instructions for declarative agents](declarative-agent-instructions.md)
- [Add agent capabilities](add-agent-capabilities.md)
