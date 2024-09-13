---
title: Declarative agents for Microsoft 365
description: Declarative agent is a way for you to craft your own copilot by declaring instructions, actions, and knowledge to customize Copilot for Microsoft 365.
author: aycabas
ms.author: aycabas
ms.topic: overview
---

# Declarative agents for Microsoft 365 overview

Building a declarative agent allows you to craft your own copilot by declaring instructions, actions, and knowledge to customize Copilot for Microsoft 365. Declarative agents run on the same orchestrator, foundation models, and trusted AI services that power Microsoft Copilot. By tailoring Microsoft Copilot for your business purposes, declarative agents facilitate smoother collaboration, increased productivity, and streamlined workflows. With declarative agents, you can establish consistent, personalized experiences and automate intricate processes, ranging from team onboarding to resolving customer issues efficiently.

[!INCLUDE [preview-disclaimer-copilot](includes/preview-disclaimer-declarative-agents.md)]

## Tailor declarative agents for your scenario

Declarative agents are powered by Copilot for Microsoft 365, therefore they utilize the same scalable infrastructure and platform while their purposes are designed for your business needs. Learn more about the use cases for declarative agents by taking a look at these two example scenarios:

- **Employee IT self-help with enhanced knowledge:** Imagine a world where your employees can serve their needs and depend less on the internal IT help desk for every technical issue they encounter. You can now streamline and simplify IT workflows by building a declarative agent to expedite resolution of common issues. This specialized copilot draws from internal curated knowledge on SharePoint sites to provide employees faster and effective assistance to employees while saving you costs.

- **Real-time customer support with seamless system integrations:** Assume having a team of support agents dedicated to providing your customers adequate and timely support while constantly monitoring and updating customers' live order status. You can increase their productivity by enhancing your existing process with a declarative agent. A copilot that seamlessly integrates with a plugin for the order management system to access and provide real-time order updates to customers.

:::image type="content" source="assets/images/declarative-agent-scenarios.png" alt-text="A diagram that shows two scenarios of declarative agents mentioned in the article." lightbox="assets/images/declarative-copilot-scenarios.png" :::

## Explore the benefits of declarative agents

You can engage with declarative agents within the same interface of Copilot for Microsoft 365. Inside the Copilot for Microsoft 365 interface, you can access declarative agents by opening the right-hand side menu.

:::image type="content" source="assets/images/declarative-agent-showcase.png" alt-text="Screenshots that show declarative agents running on Microsoft 365." lightbox="assets/images/declarative-copilot-showcase.png" :::

Core benefits of implementing declarative agents into your operations include:

- **Familiar user interface:** Declarative agents utilize the same friendly user interface with Copilot for Microsoft 365. You can adopt and engage with these copilots tailored for their business scenario that look and feel like Copilot for Microsoft 365.
- **Enhanced enterprise knowledge:** Similar to Copilot for Microsoft 365, declarative agents can also utilize enterprise data from Graph Connectors and SharePoint files. By applying existing enterprise knowledge and the familiar Copilot interface, you can streamline their workflows, making it easier to engage with data within the organization.
- **Seamless integration with plugins:** Enterprises can extend declarative agents using plugins to retrieve data and execute tasks on external systems. Declarative agents can utilize multiple plugins at the same time.
- **Prioritized security, privacy, and compliance:** For prioritizing Security, Privacy and Compliance for the enterprise, declarative agents are built on a secure foundation, inheriting all data protections provided by Copilot for Microsoft 365. Enterprise admins have visibility and control over the distribution of declarative agents within their tenant via the Microsoft Admin Center console.

## Build declarative agents

Take a look at the core elements required for building a declarative agent app package:

- **App manifest:** Describes how your app is configured, including its capabilities, required resources, and other important attributes.
- **App icons:** Each package requires a color and outline icon for your declarative agents.
- **Declarative agents manifest:** Describes how your declarative agent is configured, including its required fields, capabilities, conversation starters, and actions.
- **Plugin manifest (Optional):** Describes how your plugin is configured, including its required fields and capabilities.

Declarative agent's app package and its core elements mentioned can be created with any tool of choice. For a smooth getting started experience, you can start building declarative agents by selecting one of the appropriate toolsets that suits your specific scenario. The following table shows the options of recommended toolsets to get started.

| **Start with** | **Summary** |
|:------------|:------------|
| [Teams Toolkit](./ttk-declarative-agent-getting-started.md) | Build declarative agents using Teams Toolkit and Teams Toolkit CLI. |
| Copilot Studio | Build declarative agents using the builder integrated in Copilot Studio. |
| SharePoint | Build declarative agents using grounding data from SharePoint files. |

## See also

- [Extensibility options for Microsoft Copilot for Microsoft 365](decision-guide.md)
- [Microsoft Copilot in the Microsoft 365 ecosystem](ecosystem.md)
- [Microsoft Graph Connectors for Microsoft Copilot for Microsoft 365](overview-graph-connector.md)
- [Extensions are apps for Microsoft 365](extensions-are-apps.md)