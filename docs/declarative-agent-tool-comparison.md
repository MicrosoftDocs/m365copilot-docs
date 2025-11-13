---
title: Choose the Right Tool to Build a Declarative Agent for Microsoft 365 Copilot
description: Learn which tools are most suited for different use cases when creating a declarative agent.
ms.author: v-koenenkaty
author: kmkoenen
ms.localizationpriority: medium
ms.date: 11/17/2025
ms.topic: conceptual
---

# Choose the right tool to build your declarative agent

Declarative agents enable you to extend Microsoft 365 Copilot to meet the unique needs of your users. You can build declarative agents using a pro-code, low-code, or no-code approach. This article provides information about the tools that are available for building declarative agents and the pros and cons for each.

## Tools for building declarative agents

Several tools are available to help you build declarative agents for Copilot. The following table lists the tools and the potential use cases for each to help you decide which tool is right for you.

| **Tool** | **Coding approach** |**Description** | **Recommended use case** |
|:------------|:------------| :------------| :------------|
| [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) | Pro-code | Agents Toolkit enables the creation of declarative agents with advanced features, such as custom API actions, adaptive cards, and CI/CD (Continuous Integration/Continuous Delivery) integration. | Developers who need full control over their coding environment, source | 
| [Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365-copilot/extensibility/context) | Low-code | Copilot Studio allows users to create declarative agents using a drag-and-drop interface. It provides control over business logic and workflow automation and allows users to create declarative agents with advanced features, such as custom API actions, adaptive cards, and CI/CD integration. |  Information workers and business users who need a low-code, easy-to-use solution that includes [Power Platform integration](/power-platform/developer/get-started). |
| [Microsoft 365 Copilot](copilot-studio-lite.md) | No-code | Microsoft 365 Copilot offers a simple interface for business users to build declarative agents. Users just need to describe what the agent should do or author an agent with simple configuration experience. | Business users with no coding experience that want to customize Copilot to increase personal and group productivity. From writer coach to onboarding buddy, users can easily create and share agents that answer questions from knowledge sources, generate image, process data, solve math problem and more. |
| [SharePoint](/sharepoint/get-started-sharepoint-agents) | No-code | SharePoint agents are declarative agents that run within SharePoint and Teams. They provide responses based on the data available in an organization's SharePoint implementation. | Business users who want to customize Copilot for a specific purpose or to specify specific sites, document libraries, and files for Copilot to search. |

## Tool requirements and access

The following table describes the prerequisites for using each tool and where agents from each can be published.

<!-- markdownlint-disable MD033 -->
| **Tool** | **Requirements** | **Tool access** | **Publishes agents to** |
|:------------|:------------| :------------| :------------|
| Agents Toolkit | <ul><li> Microsoft 365 subscription (with sideloading enabled)</li> <li>Visual Studio Code or Visual Studio </li> <li> Azure subscription (optional)</li></ul> |  Install [Agents Toolkit](/microsoftteams/platform/toolkit/install-teams-toolkit).  |  <ul><li> Users with Microsoft 365 subscriptions (with limited capabilities)</li> <li> Users with Microsoft 365 Copilot licenses or metering enabled </li> </ul>   |
| Copilot Studio| <ul><li> Microsoft 365 subscription </li> <li> Copilot Studio license</li></ul> |  Install [Copilot Studio](/microsoft-copilot-studio/requirements-licensing-subscriptions). | <ul><li> Users with Microsoft 365 subscriptions (with limited capabilities)</li> <li> Users with Microsoft 365 Copilot licenses or metering enabled </li> <li> Mobile apps, messaging platforms </li> </ul>  |
| Microsoft 365 Copilot | Microsoft 365 subscription | Select the  **Create agent** option in Microsoft 365 Copilot or Teams. | <ul><li> Users with Microsoft 365 subscriptions (with limited capabilities)</li> <li> Users with Microsoft 365 Copilot licenses or metering enabled </li> </ul>|
| SharePoint | <ul><li> Microsoft 365 subscription </li> <li> Site admin or owner permissions </li></ul> |  Install [SharePoint](https://www.microsoft.com/microsoft-365/sharepoint/collaboration).   |  SharePoint sites |

<!-- markdownlint-enable MD033 -->

## Agents Toolkit

If your scenario involves the full control, scalability, and direct API integration of a pro-code approach, [Agents Toolkit](./build-declarative-agents.md) is the best tool to use to create your declarative agent.

The following table lists the pros and cons for using Agents Toolkit.

> [!NOTE]
> Publishing agents via the Microsoft 365 Agents Toolkit isn't supported in [Microsoft 365 Government](https://www.microsoft.com/microsoft-365/government) tenants.

| **Pros** | **Cons** |
|:------------|:------------|
| **Pro-code flexibility:** Ideal for developers who prefer Visual Studio Code and want full control over their coding environment, source control, and access to APIs. | **No Power Platform connector support:** Unlike Copilot Studio, Agents Toolkit doesn't support drag-and-drop [Power Platform connectors](/training/modules/introduction-power-platform-developer-resources/) for quick API integration. |
| **Custom API actions:** Enables integration with any API using OpenAPI specifications or custom-built REST APIs, providing flexibility beyond Power Platform connectors. | **No "No-code" UI:** Requires manual JSON editing for agent configuration, rather than a UI-driven toggle system. |
| **Version control and collaboration:** Supports some source control systems, pull requests, and CI/CD for better development practices and team collaboration. | **Limited composability for makers:** Agents built in Agents Toolkit can't be reused in low-code tools such as Copilot Studio. |
| **Fast feature adoption:**  New capabilities (for example, code interpreter) are often available first in Agents Toolkit before they're added to the full or lite Copilot Studio experiences. | **Steeper learning curve:** The Agents Toolkit is designed for professional developers, which can be less accessible for business users and information workers. |
| **Advanced support for Adaptive Cards:** Enables custom UI rendering inside agents using [Adaptive Cards](/training/modules/copilot-declarative-agent-action-api-plugin-adaptive-cards-vsc/), which isn't available in Copilot Studio. |   |
| **Complex application bundling:** Allows integration of agents with Teams apps, personal tabs, messaging extensions, and other Microsoft 365 applications. |  |
| **Experimentation support:** Developers can fork, test, and iterate on agent capabilities without affecting live deployments. | |
| **Copilot connectors and AI enhancements:** Supports rich integrations, including semantic search with [Microsoft 365 Copilot connectors](/graph/connecting-external-content-experiences) and more control over agent reasoning and responses. | |

## Copilot Studio and Microsoft 365 Copilot

### Copilot Studio

[Microsoft Copilot Studio](/microsoft-copilot-studio/fundamentals-what-is-copilot-studio) is designed for small-scale deployments, such as department-level solutions. It's a great alternative for people who need a low-code tool that's easy to use and that integrates with [Microsoft Power Platform](/power-platform/developer/get-started).

| **Pros** | **Cons** |
|:------------|:------------|
| **Easy to use:** Copilot Studio provides a no-code approach that enables business users and information workers to build and customize agents using a drag-and-drop interface without coding. | **Less developer control:** Limited ability to fine-tune API calls, actions, and response formatting. |
| **Power platform connectors:** Enable quick plug-and-play API integration using hundreds of prebuilt connectors. | **No support for source control or CI/CD:** No built-in support for source control systems (Azure DevOps, GitHub) pull requests, or automated deployments. |
| **Great for personal and departmental use:** Fast setup for smaller, targeted agents that don’t require large-scale enterprise governance. | **Limited support for Adaptive Cards:** You can't customize how responses are displayed beyond basic text formatting. |
| **Prebuilt governance and deployment:** Agents are deployed using Copilot Studio’s built-in management tools, reducing complexity for IT teams. | **Slower feature rollout:** Some advanced features are available in Agents Toolkit before they're available in Copilot Studio. |
| **Built-in test agent**: Copilot Studio comes with a built-in test agent that lets you test the agent in real-time. |  |

### Microsoft 365 Copilot

Microsoft 365 Copilot is a great option for users with no coding experience who need a guided process for building declarative agents. You can access Microsoft 365 Copilot through the following apps and paths:

 - **Microsoft 365 Copilot app:** Select the **Create agent** option
 - **Microsoft Teams:** Select the **Microsoft 365 Copilot** tab and then choose **Create agents**.

| **Pros** | **Cons** |
|:------------|:------------|
| **Ease of use:** Designed for users to build agents right inside of Microsoft 365 Copilot with no coding experience, using a natural language interface.  |  **Complex workflows:** Doesn't support complex workflows and integrations. |
| **Quick setup:** Provides a guided process for building agents. | **Slower feature rollout:** Some advanced features are available in Agents Toolkit before they're available in Copilot Studio.  |
| **Accessibility:** Suitable for creating personal and group productivity agents without having to write code.  |  |
| **Straightforward agent testing**: The test pane allows users to test the end-user experience of agents directly within the tool. | |
| **Variety of knowledge sources**: Easily add public web, SharePoint, Copilot connector data and more as agent knowledge sources.| |
| **Generate rich content**: Enable image generation and code interpreter with just one click.| |

### Feature comparison: Microsoft 365 Copilot and Copilot Studio

To choose between the lite and full experiences of Copilot Studio to build your agent, consider the following factors:

- **Audience** – Who will use the agent?
- **Deployment scope** – How widely do you plan to share the agent?
- **Functionality** – What tasks will the agent perform?
- **Governance needs** – Does your agent require granular application lifecycle management?

The following decision tree helps you map your scenario to the right choice.

:::image type="content" source="assets/images/copilot-studio-agent-builder/copilot-studio-decision-flow.png" alt-text="A flow chart that shows the decision points for choosing the full and lite experiences of Copilot Studio.":::

In summary:

- **Choose the Microsoft 365 Copilot** if you want to quickly create an agent for yourself or a small team, using natural language and existing content (for example, a bot that answers questions from your team’s SharePoint files or emails). The lite version is simple, accessible, and integrated with the Microsoft 365 Copilot experience, so you can build agents in context without any code.

- **Choose Copilot Studio** if you need an agent for a broader audience (such as your whole department, organization, or external customers) or if the agent requires advanced capabilities like multi-step workflows or custom integrations, or you need more control over deployment and management. The full version of Copilot Studio is a standalone web portal with a rich set of tools for complex or scalable solutions.

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

You can copy an agent created in Microsoft 365 Copilot to Copilot Studio when you need advanced capabilities or broader integration options. This process ensures that work done in the lite experience is not lost and can be extended in the full experience without a need to to start over.

Transitioning to Copilot Studio unlocks additional features such as richer customization, expanded connectors, and governance controls. When you copy your agent, the agent's core configuration and instructions are preserved, and you can enhance them with the advanced settings available only in Copilot Studio.

Consider copying an agent to Copilot Studio when:

- You need enterprise-grade deployment options.
- You want to integrate with more data sources or apply advanced security policies.

For more information, see [Copy an agent to Copilot Studio](copy-agent-to-copilot-studio.md).

## Licensing requirements

Both Microsoft 365 Copilot and Copilot Studio are included with a Microsoft 365 Copilot add-on license for authenticated users. If you don’t have a Copilot license, you can use Copilot Credits or a pay-as-you-go plan to access either experience.

You can also use Microsoft 365 Copilot for free to build agents grounded on web knowledge only. For more information, see [Using agents in Microsoft 365 Copilot Chat](/copilot/agents).

## Microsoft 365 Copilot governance principles

Microsoft 365 Copilot allows users to create agents that act as reusable templates. These agents help retrieve insights from Microsoft Graph by packaging repeatable prompts and content connections. They operate within existing enterprise boundaries and respect Microsoft 365 controls.

Microsoft 365 Copilot applies the following key governance principles:

- **No new privileges** - Agents respect existing Microsoft 365 permissions. If a user does haven't access to a SharePoint site, Teams channel, or Outlook mailbox, the agent doesn't surface content from those sources.  
- **Built-in visibility and auditing capabilities** - Agents are surfaced within Microsoft 365. Standard audit logs, activity reports, and DLP/retention policies apply.

IT administrators manage agent visibility, sharing, and lifecycle policies in the Microsoft 365 admin center via the **Copilot** > **Agents** page. Admins can:

- View agent inventory and agent metadata.  
- Enable, disable, assign, block, or remove agents to align with organizational policies.
- Configure pay-as-you-go billing and review agent usage and consumption.
- Enforce compliance using Microsoft Purview (sensitivity labels, audit logs).

Admins can also manage agent sharing controls via the **Microsoft 365 Admin Center** > **Copilot** > **Settings** > **Data access** > **Agents** page. For more information, see [Share an agent](copilot-studio-lite-share-manage-agent.md#share-an-agent).

## Copilot Studio governance principles

Copilot Studio supports the creation of more sophisticated agents, often by makers or developers. These agents can integrate external data sources, call APIs, orchestrate complex workflows, and connect to systems beyond Microsoft 365—ideal for departmental or enterprise-wide solutions.

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



## SharePoint

The [SharePoint](https://support.microsoft.com/office/get-started-with-sharepoint-agents-69e2faf9-2c1e-4baa-8305-23e625021bcf) option is suitable for site owners or editors who want to create agents tailored to specific scenarios within the SharePoint environment. Every SharePoint site comes with a [ready-made agent](https://support.microsoft.com/office/get-started-with-sharepoint-agents-69e2faf9-2c1e-4baa-8305-23e625021bcf#ready-made-agent), scoped to the content on that site. Users with site editing permissions can create custom-built agents by changing content scope, identity, and behavior from [multiple locations](https://support.microsoft.com/office/create-and-edit-an-agent-d16c6ca1-a8e3-4096-af49-67e1cfdddd42#locations-create-agent) on the SharePoint site.

| **Pros** | **Cons** |
|:------------|:------------|
| **Customization:** Site owners, content owners, or editors can create agents tailored to specific needs. | **Content limitations:** As with all agents, if the agent can't find information in its defined knowledge sources, it might provide outdated content from the internet. |
| **Defined sources:** Agents draw on context from specific SharePoint sites and document libraries. | **Scalability:** Not suitable for large-scale or highly complex applications.  |
| **Ease of access:** Integrated directly into SharePoint, making it easy for users to access and interact with the agents.  | **Functionality and visibility limitations (SharePoint):** Declarative agents built in SharePoint can't integrate with or use declarative agents not build in SharePoint in Copilot Chat. |
| **Personalized user experience:** Provides a personalized user experience based on the specific SharePoint content.  | **Functionality and visibility limitations (Teams):** Chatting with agent in Teams 1:1 is done in immersive viewer from SharePoint. |
| **Integration with SharePoint:**  Uses existing SharePoint features like document libraries. | |
| **Integration with Teams:**  Users can make a SharePoint agent available in Microsoft Teams by copying the link to the agent and pasting it in a Teams group or meeting chat. |  |

## Related content

- [Declarative agents for Microsoft 365 Copilot overview](./overview-declarative-agent.md)
- [Create declarative agents using Agents Toolkit](./build-declarative-agents.md)
- [Set up Microsoft 365 Copilot - admin guide](/copilot/microsoft-365/microsoft-365-copilot-setup)
- [Build agents using Microsoft 365 Copilot](copilot-studio-lite-build.md)
- [Create and delete agents using Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext)
- [Get started with SharePoint agents](/sharepoint/get-started-sharepoint-agents)
