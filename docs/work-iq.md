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

Work IQ is the intelligence layer that personalizes Microsoft 365 Copilot for users and organizations. It understands work context, relationships, and patterns, so Copilot and agents can provide faster, more accurate, and more secure responses than connector-only approaches.

Work IQ combines three integrated layers: *data*, *context*, and *skills / tools*. Together, these layers ground Copilot in organizational information and business signals so responses are relevant to how work actually happens.

:::image type="content" source="assets/images/work-iq.png" alt-text="Diagram showing Work IQ with integrated data, context, and skills + tools layers.":::

For end users, Work IQ is integrated across Microsoft 365 Copilot experiences, including Copilot Chat and apps such as Word, Excel, PowerPoint, and Teams, as well as Dynamics 365 and Power Apps with Dataverse-enriched context.

When it comes to extensibility, you can both extend Work IQ with your business data and extend the agents you build with the intelligence of Work IQ. Furthermore, you can leverage Work IQ intelligence within your own development workflow with Work IQ CLI. This article will walk you through the layers of Work IQ and its extensibility opportunities.

## Data

The data layer provides secure access to structured and unstructured information from Microsoft 365, Dynamics 365, Power Apps, and connected business systems. This layer gives Copilot a foundational understanding of work across people, groups, content, and communication.

### Microsoft Graph

[Microsoft 365 tenant data](/graph/overview) includes permission-based and information-protected content in SharePoint and OneDrive, Outlook email, and Teams meetings and chats. It also includes metadata and signals that describe collaboration, communication, and activity patterns over time.

### Copilot connectors

[Copilot connectors](/microsoft-365/copilot/connectors/) extend this foundation by ingesting data from non-Microsoft systems and line-of-business applications, including prebuilt and custom connectors. As a result, Copilot can reason over a broader business data estate within the tenant boundary.

### Dataverse and business data

Work IQ also integrates Dynamics 365 and Power Apps data through Dataverse, which stores structured business datasets for those applications. This integration enables Copilot to reason across productivity data and systems-of-record data together, such as linking supplier issues discussed in a Teams call with downstream inventory and sales effects.

## Context

The context layer expands beyond baseline grounding with continuously evolving insights that improve response speed and relevance. Work IQ helps Copilot understand how people and organizations work, including skill profiles, important projects, collaboration frequency, workflow criticality, and communication velocity.

[Copilot memory](/copilot/microsoft-365/copilot-personalization-memory) captures explicit [user actions](https://support.microsoft.com/topic/get-started-with-personalizing-what-microsoft-365-copilot-remembers-cba7b79a-c46f-4ca7-b46e-2fa22c563f90) (including custom instructions and saved memories) and implicit signals from chat history. The [semantic index](/microsoftsearch/semantic-index-for-copilot) improves retrieval accuracy by matching on meaning rather than keywords, and includes connector-ingested content while respecting permissions, sensitivity labels, and tenant boundaries.

### Dataverse intelligence

Work IQ also includes business understanding for Dataverse data by using semantic layers such as ontologies and glossaries that capture procedural knowledge from business workflows. This helps Copilot and agents interpret how teams, customers, suppliers, and other entities work together in real operational contexts.

Dataverse intelligence: https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intelligence

## Skills and tools

The skills and tools layer puts Work IQ intelligence into operation. Skills provide task-specific instructions that help Copilot and agents complete specialized work with higher speed and precision. If skills describe what actions to take, tools execute those actions. Tools are the concrete integrations—MCP server tools, API plugins, and others services—that an agent calls to actually perform work.

### Dataverse business skills

Business skills overview: https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-business-skill-overview
Working with business skills: https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-business-skills

### MCP server tools

Tools execute the intent described by those skills. Work IQ uses purpose-built tooling, including MCP server tools, agent flows, APIs, and plugins, to observe, retrieve, reason, and execute. In complex retrieval scenarios, the combination of skills and tools helps Copilot search and locate deeply referenced or archived content more effectively.

Customers can also build agents and add their own skills and tools, which can be orchestrated with Work IQ experiences.

### Copilot actions


## Work IQ CLI

Developers can extend this intelligence through the Work IQ API, which exposes Copilot intelligence through a RESTful interface for building agents grounded in live work context. Solutions built this way inherit Microsoft enterprise identity, security, permissions, and compliance characteristics. Public preview for the Work IQ API is 
expected later this month. CLI support is available today, and MCP and A2A support are planned for future updates.

## Related content

