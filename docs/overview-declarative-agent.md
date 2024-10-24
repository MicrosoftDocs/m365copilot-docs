---
title: Declarative agents for Microsoft 365 Copilot
description: Declarative agent is a way for you to craft your own copilot by declaring instructions, actions, and knowledge to customize Microsoft 365 Copilot.
author: aycabas
ms.author: aycabas
ms.topic: overview
---

# Declarative agents for Microsoft 365 Copilot overview

Building a declarative agent allows you to craft your own copilot by declaring instructions, actions, and knowledge to customize Microsoft 365 Copilot. Declarative agents run on the same orchestrator, foundation models, and trusted AI services that power Microsoft Copilot. By tailoring Microsoft Copilot for your business purposes, declarative agents facilitate smoother collaboration, increased productivity, and streamlined workflows. With declarative agents, you can establish consistent, personalized experiences and automate intricate processes, ranging from team onboarding to resolving customer issues efficiently.

[!INCLUDE [preview-disclaimer-declarative-agents](includes/preview-disclaimer-declarative-agents.md)]

[!INCLUDE [copilot-in-word-and-powerpoint](includes/copilot-in-word-and-powerpoint.md)]

## Tailor declarative agents for your scenario

Declarative agents are powered by Microsoft 365 Copilot, therefore they utilize the same scalable infrastructure and platform while their purposes are designed for your business needs. Learn more about the use cases for declarative agents by taking a look at these two example scenarios:

- **Employee IT self-help with enhanced knowledge:** Imagine a world where your employees can serve their needs and depend less on the internal IT help desk for every technical issue they encounter. You can now streamline and simplify IT workflows by building a declarative agent to expedite resolution of common issues. This specialized copilot draws from internal curated knowledge on SharePoint sites to provide employees faster and effective assistance to employees while saving you costs.

- **Real-time customer support with seamless system integrations:** Assume having a team of support agents dedicated to providing your customers adequate and timely support while constantly monitoring and updating customers' live order status. You can increase their productivity by enhancing your existing process with a declarative agent. A copilot that seamlessly integrates with a plugin for the order management system to access and provide real-time order updates to customers.

:::image type="content" source="assets/images/declarative-agent-scenarios.png" alt-text="A diagram that shows two scenarios of declarative agents mentioned in the article." lightbox="assets/images/declarative-agent-scenarios.png" :::

## Explore the benefits of declarative agents

You can engage with declarative agents within the same interface of Microsoft 365 Copilot. Inside the Microsoft 365 Copilot interface, you can access declarative agents by opening the right-hand side menu.

:::image type="content" source="assets/images/declarative-agent-showcase.png" alt-text="Screenshots that show declarative agents running on Microsoft 365 Copilot." lightbox="assets/images/declarative-agent-showcase.png" :::

Core benefits of implementing declarative agents into your operations include:

- **Familiar user interface:** Declarative agents utilize the same friendly user interface with Microsoft 365 Copilot. You can adopt and engage with these agents tailored for their business scenario that look and feel like Microsoft 365 Copilot.
- **Enhanced enterprise knowledge:** Similar to Microsoft 365 Copilot, declarative agents can also utilize enterprise data from Graph Connectors and SharePoint files. By applying existing enterprise knowledge and the familiar Copilot interface, you can streamline their workflows, making it easier to engage with data within the organization.
- **Seamless integration with plugins:** Enterprises can extend declarative agents using plugins to retrieve data and execute tasks on external systems. Declarative agents can utilize multiple plugins at the same time.
- **Prioritized security, privacy, and compliance:** For prioritizing Security, Privacy and Compliance for the enterprise, declarative agents are built on a secure foundation, inheriting all data protections provided by Microsoft 365 Copilot. Enterprise admins have visibility and control over the distribution of declarative agents within their tenant via the Microsoft Admin Center console.

## Build declarative agents

The following are the core elements of a declarative agent app package:

- **App manifest:** Describes how your app is configured, including its capabilities, required resources, and other important attributes.
- **App icons:** The app package requires a color and outline icon for your declarative agents.
- **Declarative agents manifest:** Describes how your declarative agent is configured, including its required fields, capabilities, conversation starters, and actions.
- **Plugin manifest (optional):** Describes how your plugin is configured, including its required fields and capabilities.

You can use your tool of choice to create a declarative agent app package. To get started, you can choose from the tools listed in the following table.

| **Start with** | **Summary** |
|:------------|:------------|
| [Teams Toolkit](./build-declarative-agents.yml) | Build declarative agents using Teams Toolkit. |
| [Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365-copilot/extensibility/context) | Build declarative agents using the builder integrated in Copilot Studio. |
| [Copilot Studio agent builder](copilot-studio-agent-builder.md) | Build declarative agents using the integrated builder in Microsoft 365 Copilot. |
| [SharePoint](./build-declarative-agents.yml?tutorial-step=5) | Build declarative agents using grounding data from SharePoint files. |

## Related content

- [Extensibility options for Microsoft 365 Copilot](decision-guide.md)
- [Microsoft Copilot in the Microsoft 365 ecosystem](ecosystem.md)
- [Microsoft Graph connectors for Microsoft 365 Copilot](overview-graph-connector.md)
- [Copilot agents are apps for Microsoft 365](agents-are-apps.md)
- [Write effective instructions for declarative agents](declarative-agent-instructions.md)
