---
title: Choose the Right Tool to Build a Declarative Agent for Microsoft 365 Copilot
description: Learn which tools are most suited for different use cases when creating a declarative agent.
ms.author: v-koenenkaty
author: kmkoenen
ms.localizationpriority: medium
ms.date: 03/07/2025
ms.topic: conceptual
---

# Choose the right tool to build your declarative agent

Declarative agents enable you to extend Microsoft 365 Copilot to meet the unique needs of your users. You can build declarative agents using a pro-code, low-code, or even no-code approach. This article provides information about the tools that are available for building declarative agents and the pros and cons for each.

## Tools for building declarative agents
Several tools are available to help you build declarative agents for Copilot. The following table lists the tools and the potential use cases for each to help you decide which tool is right for you.

| **Tool** | **Coding approach** |**Description** | **Recommended use case** |
|:------------|:------------| :------------| :------------|
| [Teams Toolkit](./build-declarative-agents.yml) | Pro-code | Teams Toolkit enables the creation of declarative agents with advanced features, such as custom API actions, adaptive cards, and CI/CD (Continuous Integration/Continuous Delivery) integration. | Developers who need full control over their coding environment, source control, and APIs. |
| [Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365-copilot/extensibility/context) | Low-code | Copilot Studio allows users to create AI agents using a drag-and-drop interface. It provides control over business logic and workflow automation and allows users to create declarative agents with advanced features, such as custom API actions, adaptive cards, and CI/CD integration. |  Information workers and business users who need a low-code, easy-to-use solution that includes [Power Platform integration](/power-platform/developer/get-started).  |
| [Copilot Studio agent builder](copilot-studio-agent-builder.md) | No-code | Copilot Studio agent builder offers a simpler interface for building declarative agents. It allows users to create agents either by using natural language or by following a guided process. | End-users with no coding experience who need basic declarative agent functionality. |
| - [SharePoint](./build-declarative-agents.yml?tutorial-step=5)  **OR**  **[SharePoint](optimize-sharepoint-content) ?**| Mixed | SharePoint allows users to build declarative agents using data from specific SharePoint sites, document libraries, and files. It also provides a personalized user experience based on the content within SharePoint. | Business users who need agents that are grounded in specific SharePoint sites, document libraries, and files. |

> [!NOTE]
> If you have an existing Microsoft Teams message extension, you can use it as a declarative agent. For more information, see the article [Extend bot-based message extension as agent for Microsoft 365 Copilot](/microsoftteams/platform/messaging-extensions/build-bot-based-agent).

## Teams Toolkit

Teams Toolkit is the best choice for developers taking a pro-code approach where full control, scalability, and direct API integration are required.

| **Pros** | **Cons** |
|:------------|:------------|
| **Pro-code flexibility:** Ideal for developers who prefer Visual Studio Code and want full control over their coding environment, source control, and APIs. | **No power platform connector support:** Unlike Copilot Studio agent builder, Teams Toolkit doesn't support drag-and-drop [Power Platform connectors](/training/modules/introduction-power-platform-developer-resources/) for quick API integration. |
| **Custom API actions:** Enables integration with any API using OpenAPI specifications or custom-built REST APIs, providing flexibility beyond Power Platform connectors. | **No "No-code" UI:** Requires manual JSON editing for agent configuration, rather than a UI-driven toggle system. |
| **Version control and collaboration:** Supports GitHub, pull requests, and CI/CD for better development practices and team collaboration. | **Limited composability for makers:** Agents built in Teams Toolkit can't be easily reused in low-code tools such as Copilot Studio and Copilot Studio agent builder. |
| **Fast feature adoption:**  New capabilities (for example, code interpreter) are often available first in Teams Toolkit before being added to Copilot Studio. | **Steeper learning curve:** The Teams Toolkit is designed for professional developers, which can be less accessible for business users and information workers. |
| **Advanced support for adaptive cards:** Enables custom UI rendering inside agents using [adaptive cards](/training/modules/copilot-declarative-agent-action-api-plugin-adaptive-cards-vsc/), which isn't available in Copilot Studio. |   |
| **Complex application bundling:** Allows integration of agents with Teams apps, personal tabs, messaging extensions, and other Microsoft 365 applications. |  |
| **Experimentation support:** Developers can fork, test, and iterate on agent capabilities without affecting live deployments. | |
| **Graph connectors and AI enhancements:** Supports richer integrations than Content Studio, including semantic search with [Graph Connectors](/graph/connecting-external-content-experiences) and more control over agent reasoning/responses.| 

## Copilot Studio
Copilot Studio is designed for small-scale deployments, such as department-level solutions. It's a great alternative for people who need a low-code tool that is easy to use and that integrates with [Microsoft Power Platform](/power-platform/developer/get-started).

| **Pros** | **Cons** |
|:------------|:------------|
| **Easy to use:** Copilot studio provides a low-code approach that enables business users and information workers to build and customize agents using a drag-and-drop interface without coding. | **Less developer control:** Limited ability to fine-tune API calls, actions, and response formatting. |
| **Power platform connectors:** Enables quick plug-and-play API integration using hundreds of prebuilt connectors. | **No support for source control or CI/CD:** There isn't any built-in support for GitHub, pull requests, or automated deployments. |
| **Great for personal and departmental use:** Fast setup for smaller, targeted, agents that don’t require large-scale enterprise governance. | **Limited support for adaptive cards:** You can't customize how responses are displayed beyond basic text formatting. |
| **Pre-built governance and deployment:** Agents are deployed using Copilot Studio’s built-in management tools, reducing complexity for IT teams. | **Slower feature rollout:** Some advanced features arrive later than in Teams Toolkit due to UI development overhead. |

## Copilot Studio agent builder
Copilot Studio agent builder is an excellent choice for end-users with no coding experience who need a simple, guided process for building AI agents.

| **Pros** | **Cons** |
|:------------|:------------|
| **Ease of use:** : Designed for end-users with no coding experience, using a natural language interface. | **Limited customizations:**  Offers fewer customization and control options than Copilot Studio. |
| **Quick setup:** Provides a guided process for building agents. | **Complex workflows:** Doesn't support complex workflows and integrations. |
| **Accessibility:** Suitable for creating simple AI agents without the need for coding.  | **Feature limitations:** Some advanced features aren't available. |

## SharePoint for building declarative agents
This option is suitable for site owners or editors who want to create agents tailored to specific needs within the SharePoint environment.

| **Pros** | **Cons** |
|:------------|:------------|
| **Customization:** Site owners or editors can create agents tailored to specific needs. | **Permissions:** Only site admins or owners can publish agents for site users. |
| **Defined sources:** Agents draw on context from specific SharePoint sites and document libraries. | **Content limitations:** If the agent can't find information in its defined knowledge sources, it might provide outdated internet content. |
| **Ease of access:** Integrated directly into SharePoint, making it easy for users to access and interact with the agents.  | **Scalability:** Not generally suitable for large-scale or highly complex applications. |
| **Personalized user experience:** Provides a personalized user experience based on the specific SharePoint content.  | **Dependency on SharePoint:** Agents are dependent on the SharePoint environment and its limitations. |
| **Integration with SharePoint:**  Uses existing SharePoint features like document libraries and lists. | |

## Related content

- [Declarative agents for Microsoft 365 Copilot overview](./overview-declarative-agent.md)
- [Create declarative agents using Teams Toolkit](./build-declarative-agents.yml)
- [Use Copilot Studio Agent Builder to Build Agents](copilot-studio-agent-builder.md)
- [Create and delete agents - Microsoft Copilot Studio](/microsoft-copilot-studio/authoring-first-bot?tabs=web)
