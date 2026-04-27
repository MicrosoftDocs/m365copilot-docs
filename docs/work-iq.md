---
title: Work IQ overview
description: Learn how to extend agents with Work IQ, the intelligence layer that grounds Microsoft 365 Copilot in enterprise data, context, and execution capabilities.
author: erikadoyle
ms.author: edoyle
ms.localizationpriority: medium
ms.date: 04/02/2026
ms.topic: overview
---

# Work IQ overview

Work IQ is the intelligence layer that personalizes Microsoft 365 Copilot for users and organizations. Built atop leading foundation models from providers like OpenAI and Anthropic, it understands work context, relationships, and patterns so Copilot and agents can deliver faster, more accurate, and more secure responses than connector-only approaches.

Work IQ combines three integrated layers: *data*, *context*, and *skills / tools*. Together, these layers ground Copilot in organizational information and business signals so responses are relevant to how work actually happens.

:::image type="content" source="assets/images/work-iq.png" alt-text="Diagram showing Work IQ with integrated data, context, and skills + tools layers." border="false":::

For users, Work IQ is integrated across Microsoft 365 Copilot experiences, including Copilot Chat and apps such as Word, Excel, PowerPoint, and Teams, as well as Dynamics 365 and Power Apps with Dataverse-enriched context.

When it comes to extensibility, you can both extend Work IQ with your business data and extend the agents you build with the intelligence of Work IQ. Furthermore, you can leverage Work IQ intelligence within your own development workflow with Work IQ CLI. This article explains the extensibility opportunities within each layer of Work IQ.

## Data

The data layer provides secure access to structured and unstructured information from Microsoft 365, Dynamics 365, Power Apps, and connected business systems. This layer gives Copilot a foundational understanding of work across people, groups, content, and communication.

### Microsoft 365 tenant data

[Microsoft Graph](/graph/overview) data represents all the data from your Microsoft 365 tenant, including permission-based and information-protected content in SharePoint and OneDrive, including Word, Excel, PowerPoint and other file types, as well as Outlook emails, and Teams meetings and chats. It also includes metadata and signals that describe collaboration, communication, and activity patterns over time.

### Dynamics 365 and Power Apps business data

Work IQ also integrates Dynamics 365 and Power Apps data through [Dataverse](/power-apps/maker/data-platform/), which stores structured business datasets for those applications. This integration enables Copilot to reason across productivity data and systems-of-record data together, such as linking supplier issues discussed in a Teams call with downstream inventory and sales effects.

### External business data from Copilot connectors

[Copilot connectors](/microsoft-365/copilot/connectors/) extend the foundation of your tenant data by ingesting data from non-Microsoft systems and line-of-business applications, including prebuilt and custom connectors. As a result, Copilot can reason over a broader business data estate within the tenant boundary.

[Federated connectors](/microsoft-365/copilot/connectors/federated-connectors-overview) (early access preview) offer an alternative way to bring your organization's data into Microsoft 365 that skips traditional indexing. Instead of crawling and syncing content into Microsoft Graph, federated connectors use Model Context Protocol (MCP) to read data in real time, making live or sensitive data sources discoverable through Copilot without inclusion to the [semantic index](#semantic-index).

## Context

The context layer expands beyond baseline grounding with continuously evolving insights that improve response speed and relevance. Work IQ helps Copilot understand how people and organizations work, including skill profiles, important projects, collaboration frequency, workflow criticality, and communication velocity.

### Memory and activity signals

[Copilot memory](/copilot/microsoft-365/copilot-personalization-memory) captures explicit [user actions](https://support.microsoft.com/topic/get-started-with-personalizing-what-microsoft-365-copilot-remembers-cba7b79a-c46f-4ca7-b46e-2fa22c563f90) (including custom instructions and saved memories) and implicit signals from user activity patterns.

### Semantic index

With [semantic indexing](/microsoftsearch/semantic-index-for-copilot), Microsoft 365 Copilot maps your organization’s data into an advanced lexical and semantic index to power search relevance and accuracy, while ensuring organizational boundaries and permission structures within your tenant are respected. The semantic index is a superset of content within [Microsoft Graph](#microsoft-365-tenant-data) and ingested content from [Copilot connectors](#external-business-data-from-copilot-connectors).

### Busineses understanding with Dataverse intelligence

Where Work IQ grounds Copilot in work productivity artifacts like files, meetings, and messages, [Dataverse intelligence](/power-apps/maker/data-platform/data-platform-intelligence) extends this foundation to structured business data, enabling agents to understand and act on your organization's systems of record.

## Skills and tools

The skills and tools layer puts Work IQ intelligence into operation. Skills provide task-specific instructions that help Copilot and agents complete specialized work with higher speed and precision. If skills describe what actions to take, tools execute those actions. Tools are the concrete integrations—MCP server tools, API plugins, and others services—that an agent calls to actually perform work.

### Copilot actions

[Copilot actions](/microsoft-365/copilot/extensibility/overview-plugins), implemented as plugins, enable declarative agents in Microsoft 365 Copilot to interact with MCP servers or REST APIs that have an OpenAPI description. With a plugin, users can ask a declarative agent to not only query for information, but to create, update, and delete data and objects within an external system. Anything the MCP server or REST API can do is accessible via natural language prompts.

### Work IQ MCP tools

Microsoft Agent 365 offers a rich catalog of [Work IQ MCP](/microsoft-agent-365/tooling-servers-overview) (preview) tools that enable agents to perform real-time actions within Microsoft 365 contexts, including mail, calendar, Teams, SharePoint, OneDrive, Word, Dataverse, and more. You can also build and publish custom MCP servers using the MCP Management Server, which supports connectors, Microsoft Graph APIs, Dataverse custom APIs, and arbitrary REST endpoints. You can easily add Work IQ MCP tools to your agents in [Microsoft Copilot Studio](/microsoft-copilot-studio/use-work-iq) and [Microsoft Foundry](/microsoft-agent-365/tooling-servers-overview#get-started-in-microsoft-foundry). Agent 365 gives IT admins centralized control to manage which Work IQ MCP servers and other MCP servers are available to agents.

### Business skills

[Business skills with Dataverse intelligence](/power-apps/maker/data-platform/data-platform-business-skill-overview) (preview) are natural-language instructions that encode your organization's processes, policies, and domain knowledge in a format agents can interpret and execute. Each skill defines how to complete a specific type of work — the steps, required inputs, and business rules that apply. At runtime, agents discover and apply relevant skills to complete tasks according to your organization's processes. When multiple agents share the same skill, they follow the same logic, ensuring consistent behavior across your organization.

### Work IQ CLI

The [Work IQ CLI](/microsoft-365/copilot/extensibility/workiq-overview) (preview) exposes your Microsoft 365 data through the Model Context Protocol, allowing AI coding assistants in your development environment to access and reason over your workplace information. Running the CLI in MCP server mode means your AI assistant can automatically pull in relevant context as you work — for example, retrieving details from a meeting where a feature was discussed and using that context to inform code suggestions and jump-start the implementation.

## Related content

- [Microsoft Work IQ CLI](/microsoft-365/copilot/extensibility/workiq-overview)
- [Work IQ MCP overview](/microsoft-agent-365/tooling-servers-overview)
- [Work IQ MCP server reference](/microsoft-agent-365/mcp-server-reference/searchtools)