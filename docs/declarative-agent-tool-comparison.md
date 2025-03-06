---
title: Comparison of Declarative Agent Tools
description: Learn which tools are most suited for different use cases when creating a declarative agent.
ms.author: v-katykoenen
ms.localizationpriority: medium
ms.date: 03/05/2025
ms.topic: conceptual
---

# Comparison of tools for building declarative agents

As discussed in [Building declarative agents](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent#building-declarative-agents), there are a number of available for creating declarative agents. Here, we present information designed to help you choose the best option for your situation.

## Summary of available tools

| **Tool** | **Coding approach** |**Description** | **Recommended use case** |
|:------------|:------------| :------------| :------------|
| [Teams Toolkit](./build-declarative-agents.yml) | Pro-code | Teams Toolkit is designed for developers who need full control over their coding environment, source control, and APIs. It enables the creation of declarative agents with advanced features such as custom API actions, adaptive cards, and CI/CD integration. |
| [Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365-copilot/extensibility/context) | Low-code | Copilot Studio is a comprehensive platform that allows users to create, test, and publish AI agents using a low-code, drag-and-drop interface. It is designed for makers with basic technical skills and provides more control over business logic and workflow automation. |  Choose Copilot Studio if you are an information worker or business user who needs a low-code, easy-to-use solution with Power Platform integration. |
| [Copilot Studio Agent Builder](copilot-studio-agent-builder.md) | No-code | Copilot Studio Agent Builder offers a simpler interface for building declarative agents. It is designed for end-users with no coding experience and allows them to create agents using natural language or through a guided process. |
| [SharePoint](./build-declarative-agents.yml?tutorial-step=5) | Mixed | SharePoint allows users to build declarative agents using grounding data from specific SharePoint sites, document libraries, and files. It provides a personalized user experience based on the content within SharePoint. | Choose this option for agents that are grounded in specific SharePoint sites, document libraries, and files. |

## Pros and Cons

### Teams Toolkit

This is the best choice for a developers taking a pro-code approach where full control, scalability, and direct API integration are required.

| **Pros** | **Cons** |
|:------------|:------------|
| **Pro-code flexibility:** Ideal for developers who prefer Visual Studio Code and want full control over their coding environment, source control, and APIs. | **No power platform connector support:** Unlike Copilot Studio Agent Builder, Teams Toolkit does not support drag-and-drop Power Platform connectors for quick API integration. |
| **Custom API actions:** Enables integration with any API using OpenAPI specifications or custom-built REST APIs, providing flexibility beyond Power Platform connectors. | **No "No-code" UI:** Requires manual JSON editing for agent configuration rather than a UI-driven toggle system. |
| **Version control and collaboration:** Supports GitHub, pull requests, and CI/CD for better development practices and team collaboration. | **Limited composability for makers:** Agents built in Teams Toolkit cannot be easily reused in low-code tools such as Copilot Studio and Copilot Studio Agent Builder. |
| **Fast feature adoption:**  New capabilities (e.g., code interpreter) are often available first in Teams Toolkit before being added to Copilot Studio. | **Steeper learning curve:** The Teams Toolkit is designed for professional developers, which can be less accessible for business users and information workers. |
| **Advanced support for adaptive cards:** Enables custom UI rendering inside agents using adaptive cards, which is not available in Copilot Studio. |   |
| **Complex application bundling:** Allows integration of agents with Teams apps, personal tabs, messaging extensions, and other M365 applications. |  |
| **Experimentation support:** Developers can fork, test, and iterate on agent capabilities without affecting live deployments. | |
| **Graph connectors and AI enhancements:** Supports richer integrations than Content Studio, including semantic search with Graph Connectors and more control over agent reasoning/responses.| |

### Copilot Studio
Designed for small-scale deplaoyments, such as department-level solutions, this is a great alternative for people who need an easy-to-use low-code tool that integrates with [Microsoft Power Platform](/power-platform/developer/get-started).

| **Pros** | **Cons** |
|:------------|:------------|
| **Easy to use:** Copilot studio provides a low-code approach that enables business users and information workers to build and customize agents using a drag-and-drop interface without coding. | **Less developer control:** Limited ability to fine-tune API calls, actions, and response formatting. |
| **Power platform connectors:** Enables quick plug-and-play API integration using hundreds of pre-built connectors. | **No support for source control or CI/CD:** No built-in support for GitHub, pull requests, or automated deployments. |
| **Better for personal and departmental use:** Faster setup for smaller, targeted, agents that don’t require large-scale enterprise governance. | **Limited support for adaptive cards:** Cannot customize how responses are displayed beyond basic text formatting. |
| **Pre-built governance and deployment:** Agents are deployed using Copilot Studio’s built-in management tools, reducing complexity for IT teams. | **Slower feature rollout:** Some advanced features arrive later than in Teams Toolkit due to UI development overhead. |

### Copilot Studio Agent Builder
This is an excellent choice for end-users with no coding experience who need a simple, guided process for building AI agents.

| **Pros** | **Cons** |
|:------------|:------------|
| **Ease of use:** : Designed for end-users with no coding experience, using a natural language interface. | **Limited customizations:**  | Offers less customization and control compared to Copilot Studio. |
| **Quick setup:** Provides a guided process for building agents. | **Complex workflows:** May not support complex workflows and integrations. |
| **Accessibility:** Suitable for creating simple AI agents without the need for coding.  | **Feature limitations:** ome advanced features may not be available. |

### SharePoint for building delcarative agents
This option is suitable for site owners or editors who want to create agents tailored to specific needs within the SharePoint environment.

| **Pros** | **Cons** |
|:------------|:------------|
| **Customization:** Site owners or editors can create agents tailored to specific needs. | **Permissions:** Only site admins or owners can publish agents for site users. |
| **Defined sources:** Agents draw on context from specific SharePoint sites and document libraries. | **Content limitations:** If the agent can't find information in its defined knowledge sources, it may provide non-current internet content. |
| **Ease of access:** Integrated directly into SharePoint, making it easy for users to access and interact with the agents.  | **Scalability:** May not be suitable for large-scale or highly complex applications. |
| **Personalized user experience:** Provides a personalized user experience based on the specific SharePoint content.  | **Dependency on SharePoint:** Agents are dependent on the SharePoint environment and its limitations. |
| **Integration with SharePoint:**  Leverages existing SharePoint features like document libraries and lists. | |
