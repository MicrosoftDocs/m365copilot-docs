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

Declarative agents enable you to extend Microsoft 365 Copilot to meet the unique needs of your users. You can build declarative agents using a no-code, low-code, or pro-code approach. This article provides information about the tools that are available for building declarative agents and the pros and cons for each.

## Tools for building declarative agents
Several tools are available to help you build declarative agents for Copilot. The following table lists the tools and the potential use cases for each to help you decide which tool is right for you.

| **Tool** | **Coding approach** |**Description** | **Recommended use case** |
|:------------|:------------| :------------| :------------|
| [SharePoint](https://support.microsoft.com/office/get-started-with-sharepoint-agents-69e2faf9-2c1e-4baa-8305-23e625021bcf) | No-code | SharePoint agents offer a subset of declarative agent functionality and run only within SharePoint and Teams. They provide responses based on the data available in an organization's SharePoint implementation. | Business users who want to customize Copilot for a specific purpose or to specify specific sites, document libraries, and files for Copilot to search. Business users who want to customize Copilot for a specific purpose or to specify specific sites, document libraries, and files that Copilot searches.|
| [Copilot Studio agent builder](copilot-studio-agent-builder.md) | No-code | Copilot Studio agent builder offers a simpler interface for building declarative agents. It allows users to create agents either by using natural language or by following a guided process. | Users with no coding experience. |
| [Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365-copilot/extensibility/context) | Low-code | Copilot Studio allows users to create declarative agents using a drag-and-drop interface. It provides control over business logic and workflow automation and allows users to create declarative agents with advanced features, such as custom API actions, adaptive cards, and CI/CD integration. |  Information workers and business users who need a low-code, easy-to-use solution that includes [Power Platform integration](/power-platform/developer/get-started). |
| [Teams Toolkit](./build-declarative-agents.yml) | Pro-code | Teams Toolkit enables the creation of declarative agents with advanced features, such as custom API actions, adaptive cards, and CI/CD (Continuous Integration/Continuous Delivery) integration. | Developers who need full control over their coding environment, source control, and APIs. |

## Tool requirements and access

The following table describes the prerequisites for using each tool and where agents from each can be published.

| **Tool** | **Requirements** | **Tool access** | **Publishes agents to** |
|:------------|:------------| :------------| :------------|
| SharePoint | <ul><li> Microsoft 365 subscription </li> <li> Site admin or owner permissions </li></ul> |  Install [SharePoint](https://www.microsoft.com/microsoft-365/sharepoint/collaboration)   |  SharePoint sites |
| Content Studio agent builder | Microsoft 365 subscription | Install [Copilot Studio](/microsoft-copilot-studio/requirements-licensing-subscriptions) <br><br> OR <br> <br> Select the  **Create agent** option in Microsoft Teams | <ul><li> Users with Microsoft 365 subscriptions (with limited capabilities)</li> <li> Users with Microsoft 365 Copilot licenses or metering enabled </li> </ul>|
| Content Studio | <ul><li> Microsoft 365 subscription </li> <li> Copilot Studio license</li></ul> |  Install [Copilot Studio](/microsoft-copilot-studio/requirements-licensing-subscriptions) | <ul><li> Users with Microsoft 365 subscriptions (with limited capabilities)</li> <li> Users with Microsoft 365 Copilot licenses or metering enabled </li> <li> Websites, mobile apps, messaging platforms </li> </ul>  |
| Teams Toolkit | <ul><li> Microsoft 365 subscription (with sideloading enabled)</li> <li>Visual Studio Code or Visual Studio </li> <li> Azure subscription (optional)</li></ul> |  Install [Teams Toolkit](/microsoftteams/platform/toolkit/install-teams-toolkit)   |  <ul><li> Users with Microsoft 365 subscriptions (with limited capabilities)</li> <li> Users with Microsoft 365 Copilot licenses or metering enabled </li> </ul>   |

## SharePoint

The [SharePoint](https://support.microsoft.com/en-us/office/get-started-with-sharepoint-agents-69e2faf9-2c1e-4baa-8305-23e625021bcf) option is suitable for site owners or editors who want to create agents tailored to specific scenarios within the SharePoint environment.

| **Pros** | **Cons** |
|:------------|:------------|
| **Customization:** Site owners, content owners, or editors can create agents tailored to specific needs. | **Permissions:** Only site admins or owners can approve agents for site users. |
| **Defined sources:** Agents draw on context from specific SharePoint sites and document libraries. | **Content limitations:** If the agent can't find information in its defined knowledge sources, it might provide outdated internet content. |
| **Ease of access:** Integrated directly into SharePoint, making it easy for users to access and interact with the agents.  | **Scalability:** Not suitable for large-scale or highly complex applications. |
| **Personalized user experience:** Provides a personalized user experience based on the specific SharePoint content.  | **Dependency on SharePoint:** Agents are dependent on the SharePoint environment and its limitations. |
| **Integration with SharePoint:**  Uses existing SharePoint features like document libraries and lists. | **Agent and visibility limitations:** <br> <ul><li>Declarative agents built in SharePoint are grounded only in SharePoint and don't include the full range of capabilities available for declarative agents built with other tools.</li> <li>A SharePoint agent added to Microsoft Teams asks  users for confirmation before sharing a response to the group in cases where not all group members have permissions to all the sources. </li> |
| **Integration with Teams:**  Users can make a SharePoint agent available in Microsoft Teams by copying the link to the agent and pasting it in a Teams group or meeting chat. | |

## Copilot Studio agent builder
[Copilot Studio agent builder](/copilot/microsoft-365/microsoft-365-copilot-setup) is a great option for users with no coding experience who need a guided process for building declarative agents. You can access the agent builder using either the [Microsoft 365 Copilot Studio app](/copilot/microsoft-365/microsoft-365-copilot-setup) or through the **Create agent** option in Microsoft Teams.

| **Pros** | **Cons** |
|:------------|:------------|
| **Ease of use:** Designed for users with no coding experience, using a natural language interface. |  **Complex workflows:** Doesn't support complex workflows and integrations. |
| **Quick setup:** Provides a guided process for building agents. | **Slower feature rollout:** Some advanced features are available in Teams Toolkit before they're available in Copilot Studio agent builder.  |
| **Accessibility:** Suitable for creating agents without having to write code.  |  |
| **Straightforward agent testing**: The test pane allows users to test the end-user experience of agents directly within the tool. | |

## Copilot Studio
The [Microsoft 365 Copilot Studio app](/copilot/microsoft-365/microsoft-365-copilot-setup) is designed for small-scale deployments, such as department-level solutions. It's a great alternative for people who need a low-code tool that is easy to use and that integrates with [Microsoft Power Platform](/power-platform/developer/get-started).

| **Pros** | **Cons** |
|:------------|:------------|
| **Easy to use:** Copilot studio provides a no-code approach that enables business users and information workers to build and customize agents using a drag-and-drop interface without coding. | **Less developer control:** Limited ability to fine-tune API calls, actions, and response formatting. |
| **Power platform connectors:** Enables quick plug-and-play API integration using hundreds of prebuilt connectors. | **No support for source control or CI/CD:** No built-in support for source control systems (such as Azure DevOps, GitHub, etc.) pulls requests, or automated deployments. |
| **Great for personal and departmental use:** Fast setup for smaller, targeted agents that don’t require large-scale enterprise governance. | **Limited support for Adaptive Cards:** You can't customize how responses are displayed beyond basic text formatting. |
| **Prebuilt governance and deployment:** Agents are deployed using Copilot Studio’s built-in management tools, reducing complexity for IT teams. | **Slower feature rollout:** Some advanced features are available in Teams Toolkit before they're available in Copilot Studio. |
| **Built-in test agent**: Copilot Studio comes with a built-in test agent that lets you test the agent in real-time. |  |

## Teams Toolkit

If your scenario involves the full control, scalability, and direct API integration of a pro-code approach, Teams Toolkit is the best tool to use to create your declarative agent.

The following table lists the pros and cons for using Teams Toolkit.

| **Pros** | **Cons** |
|:------------|:------------|
| **Pro-code flexibility:** Ideal for developers who prefer Visual Studio Code and want full control over their coding environment, source control, and access to APIs. | **No Power Platform connector support:** Unlike Copilot Studio agent builder, Teams Toolkit doesn't support drag-and-drop [Power Platform connectors](/training/modules/introduction-power-platform-developer-resources/) for quick API integration. |
| **Custom API actions:** Enables integration with any API using OpenAPI specifications or custom-built REST APIs, providing flexibility beyond Power Platform connectors. | **No "No-code" UI:** Requires manual JSON editing for agent configuration, rather than a UI-driven toggle system. |
| **Version control and collaboration:** Supports some source control systems, pull requests, and CI/CD for better development practices and team collaboration. | **Limited composability for makers:** Agents built in Teams Toolkit can't be reused in low-code tools such as Copilot Studio and Copilot Studio agent builder. |
| **Fast feature adoption:**  New capabilities (for example, code interpreter) are often available first in Teams Toolkit before they're added to Copilot Studio and agent builder. | **Steeper learning curve:** The Teams Toolkit is designed for professional developers, which can be less accessible for business users and information workers. |
| **Advanced support for Adaptive Cards:** Enables custom UI rendering inside agents using [Adaptive Cards](/training/modules/copilot-declarative-agent-action-api-plugin-adaptive-cards-vsc/), which isn't available in Copilot Studio. |   |
| **Complex application bundling:** Allows integration of agents with Teams apps, personal tabs, messaging extensions, and other Microsoft 365 applications. |  |
| **Experimentation support:** Developers can fork, test, and iterate on agent capabilities without affecting live deployments. | |
| **Microsoft Graph connectors and AI enhancements:** Supports rich integrations, including semantic search with [Microsoft Graph connectors](/graph/connecting-external-content-experiences) and more control over agent reasoning and responses. |

## Related content

- [Declarative agents for Microsoft 365 Copilot overview](./overview-declarative-agent.md)
- [Create declarative agents using Teams Toolkit](./build-declarative-agents.yml)
- [Set up Microsoft 365 Copilot - admin guide](/copilot/microsoft-365/microsoft-365-copilot-setup)
- [Use Copilot Studio Agent Builder to Build Agents](copilot-studio-agent-builder.md)
- [Create and delete agents - Microsoft Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)
