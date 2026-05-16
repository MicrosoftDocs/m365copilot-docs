---
title: What's New Archive for Microsoft 365 Copilot Extensibility
description: Find out what's new in Microsoft 365 Copilot extensibility, including plugins, declarative agents, custom engine agents, connectors, and more.
author: lauragra
ms.author: lauragra
ms.localizationpriority: medium
ms.date: 05/15/2026
ms.topic: overview
---

# What's new history for Microsoft 365 Copilot extensibility

Find historical information about additions and updates to Microsoft 365 Copilot extensibility options.

For the current what's new information, see [What's new in Microsoft 365 Copilot extensibility](whats-new.md).

## December 2025

### Teams meeting AI insights APIs now generally available

The Teams meeting AI insights APIs are now generally available in Microsoft Graph v1.0. These APIs enable you to retrieve AI-generated insights from Teams meetings, including action items, meeting notes, and mentions. For more information, see [List aiInsights](api/ai-services/meeting-insights/onlinemeeting-list-aiinsights.md) and [Get callAiInsight](api/ai-services/meeting-insights/callaiinsight-get.md).

## November 2025

### People knowledge source in Copilot Studio lite experience

The People knowledge source is now available in the Copilot Studio lite experience, allowing agents to answer questions about individuals in your organization. For more information, see [People data](agent-builder-add-knowledge.md#people-data) and [Add knowledge sources to your declarative agent](knowledge-sources.md#people).

### Agent Builder in Microsoft 365 Copilot is available in GCCM

The Agent Builder feature in Microsoft 365 Copilot is now available in Microsoft 365 Government Community Cloud Moderate (GCCM) environments.

### Embedded file content file size limit increase

You can now upload files up to 512 MB in size when you embed file content as knowledge in Agent Builder in Microsoft 365 Copilot. For more information, see [File size limits](copilot-studio-agent-builder-knowledge.md#file-size-limits).

## October 2025

### New admin controls for agent sharing

Tenant administrators can now govern who is allowed to share agents created in Microsoft 365 Copilot. These controls help organizations maintain compliance and prevent oversharing of agents. For more information, see [Share an agent](agent-builder-share-manage-agents.md#share-an-agent).

### Copy an agent to Copilot Studio

You can copy your declarative agent from Microsoft 365 Copilot to Copilot Studio by using the **Copy to full experience** feature. This unlocks advanced lifecycle management, analytics, governance controls, and deeper enterprise integration options.

For details, see [Copy an agent to Copilot Studio](copy-agent-to-copilot-studio.md).

### Use the Search API (preview) to perform semantic search

The Microsoft 365 Copilot Search API (preview) enables developers to perform semantic search across OneDrive content by using natural language queries with contextual understanding and intelligent results. For more information, see [Overview of the Search API](api/ai-services/search/overview.md).

### Users with usage billing have access to additional knowledge sources in Microsoft 365 Copilot

Users who are configured with usage billing in the Microsoft 365 admin center now have access to embedded file content, SharePoint data, and Microsoft 365 Copilot connectors custom knowledge sources when they use Microsoft 365 Copilot to create agents.

### Microsoft 365 Copilot Chat API (preview)

The Microsoft 365 Copilot Chat API (preview) enables you to programmatically engage in multi-turn conversations with Microsoft 365 Copilot, grounded in enterprise search and web search. For more information, see [Overview of the Microsoft 365 Copilot Chat API (preview)](api/ai-services/chat/overview.md).

## August 2025

### Use Teams meetings as a knowledge source in Microsoft 365 Copilot

Teams meetings are now available as a knowledge source when you use Microsoft 365 Copilot to create agents. For more information, see [Add knowledge sources to your declarative agent](knowledge-sources.md).

## July 2025

### Scope Copilot connector data sources

You can now scope Copilot connectors to specific data attributes when you use Microsoft 365 Copilot to create your agent. For more information, see [Scope Copilot connector data sources](copilot-studio-agent-builder-knowledge.md).

### Declarative agent manifest version 1.5

A new version of the declarative agent manifest schema is available. [Declarative agent manifest schema version 1.5](declarative-agent-manifest-1.5.md) adds the following:

- Added the [meetings](declarative-agent-manifest-1.5.md#meetings-object) capability to the list of `capabilities`, which allows agents to search meetings in the organization.

### Disclaimers in declarative agents

Added the `disclaimers` property to the [Declarative agent manifest object](declarative-agent-manifest-1.4.md#declarative-agent-manifest-object) in schema version 1.4.

### Embedded file content file size limit increase

You can now upload files up to 100 MB when you embed file content as knowledge in Microsoft 365 Copilot. For more information, see [File size limits](copilot-studio-agent-builder-knowledge.md#file-size-limits).

### Increased SharePoint file limit for agents

You can now specify up to 100 SharePoint files as knowledge when you use Microsoft 365 Copilot, up from a limit of 20 files. For more information, see [SharePoint content](agent-builder-add-knowledge.md#sharepoint-and-onedrive-content).

### Build Microsoft 365 Copilot connectors for people data (preview)

Build connectors to ingest people data from your source systems into Microsoft Graph for Microsoft 365 Copilot. For more information, see [Build Microsoft 365 Copilot connectors for people data (preview)](build-connectors-with-people-data.md).

### Agents supported in Microsoft 365 Government clouds

Limited support for declarative agents is available for [Microsoft 365 Government](https://www.microsoft.com/microsoft-365/government) tenants. Support is now available for Government Community Cloud (GCC) tenants.

### Asynchronous and proactive messages in custom engine agents

You can implement asynchronous and proactive message flows in your custom engine agents. For more information, see [Implement asynchronous and proactive messaging in custom engine agents](custom-engine-agent-asynchronous-flow.md).

### Convert declarative agents to custom engine agents

You can convert your declarative agent to a custom engine agent to take advantage of advanced functionality and workflows. For more information, see [Convert your declarative agent to a custom engine agent](convert-declarative-agent.md).

### Prioritize declarative agent knowledge sources

You can configure your agent to prioritize the knowledge sources that you provide rather than general knowledge in its responses. For more information, for Microsoft 365 Copilot, see [Prioritize your knowledge sources](agent-builder-add-knowledge.md#prioritize-your-knowledge-sources-over-general-knowledge); for Microsoft 365 Agents Toolkit, see [Special instructions object](declarative-agent-manifest-1.4.md#special-instructions-object).

### Custom engine agents generally available

Custom engine agents for Microsoft 365 Copilot are now generally available (GA). For more information, see [Custom engine agent overview](overview-custom-engine-agent.md).

## June 2025

### Maximum number of conversation starters for declarative agents

You can now add up to 12 conversation starters to your declarative agent when you use the [Microsoft 365 Agents Toolkit](build-declarative-agents.md) to create your agent.

### Embedded file content as knowledge

Use the file upload feature in Microsoft 365 Copilot to upload files from your device or the cloud to use as knowledge for your agent. For more information, see [Embedded file content](agent-builder-add-knowledge.md#embedded-file-content).

### Use the Retrieval API (preview) to retrieve data

The Microsoft 365 Copilot Retrieval API (preview) allows you to retrieve relevant content from SharePoint and Copilot connectors. For more information, see [Overview of the Retrieval API](api/ai-services/retrieval/overview.md).

### Microsoft 365 Copilot API client libraries

Use the Copilot API libraries to work with Microsoft 365 Copilot APIs. For more information, see [Microsoft 365 Copilot APIs (preview)](sdks/api-libraries.md).

### Outlook email and Teams chats knowledge in Microsoft 365 Copilot

Add Outlook email and Teams group, channel, and meeting chats as knowledge when you use Microsoft 365 Copilot to build your agent. For more information, see [Add knowledge sources](copilot-studio-lite-build.md).

## May 2025

### Microsoft 365 Agents Toolkit

Use the [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) to [build declarative agents](build-declarative-agents.md) and [build Copilot connectors](build-your-first-connector.md).

### Microsoft 365 Copilot APIs

The Microsoft 365 Copilot APIs provide a comprehensive set of capabilities that enable you to build AI-powered applications grounded in enterprise data. For more information, see [Microsoft 365 Copilot APIs overview](copilot-apis-overview.md).

### API plugin manifest version 2.3

A new version of the API plugin manifest schema is available. [Plugin manifest schema 2.4 for Microsoft 365 Copilot](plugin-manifest-2.4.md) adds support for [Model Context Protocol (MCP) servers](https://modelcontextprotocol.io/), enhanced response semantics with file references, and improved confirmation handling.

### Declarative agent manifest version 1.4

A new version of the declarative agent manifest schema is available. [Declarative agent manifest schema version 1.4](declarative-agent-manifest-1.4.md) adds the following features.

- Added the `behavior_overrides` property to the [Declarative agent manifest object](declarative-agent-manifest-1.4.md#declarative-agent-manifest-object).
- Added the `part_type` and `part_id` properties to the [Items by SharePoint IDs object](declarative-agent-manifest-1.4.md#items-by-sharepoint-ids-object).
- Added the [Scenario models](declarative-agent-manifest-1.4.md#scenario-models-object) capability.

## April 2025

### Email as knowledge

Email is now available as a knowledge source for agents built with the [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit). For more information, see [Email knowledge](knowledge-sources.md#email).

### Copilot Studio agent templates

Use templates in [Copilot Studio](agent-builder.md) to streamline your agent development process. For more information, see [Agent templates overview](agent-templates-overview.md).

### Document interaction for declarative agents in Word

Declarative agents in the Copilot experience in Word can [interact with the open document](declarative-agent-document-interaction.md). Users can provide the current selection to the agent and can insert images provided by the agent into the document.

## March 2025

### Declarative agent manifest version 1.3

A new version of the declarative agent manifest schema is available. [Declarative agent manifest schema version 1.3](declarative-agent-manifest-1.3.md) adds support for the following capabilities:

- Dataverse knowledge
- [Teams messages as knowledge](knowledge-sources.md#teams-messages)
- [People knowledge](knowledge-sources.md#people)

## February 2025

### Copilot Studio available in Copilot Chat

Microsoft 365 Copilot Chat users can now access Copilot Studio to build agents in the Microsoft 365 Copilot app and the Copilot app in Teams.

### Add websites as knowledge in Copilot Studio

You can add specific public websites as agent knowledge sources to make your agent context-aware. For details, see [Web content](agent-builder-add-knowledge.md#public-websites).

### Custom engine agents available in Copilot app (preview)

Users with Microsoft 365 Copilot licenses or users in tenants with metering enabled can now access custom engine agents in the Microsoft 365 Copilot app (preview), in addition to Teams.

## January 2025

### Links are no longer redacted in Copilot responses

Copilot responses no longer redact links to organizational and web resources. Links that don't explicitly match grounding data or resources defined in the agent manifest continue to be redacted.

### Build agents for Microsoft 365 Copilot Chat

You can now build agents for Microsoft 365 users who don't have a Microsoft 365 Copilot license, grounded on the web and with limited capabilities. For more information, see [Microsoft 365 Copilot developer licenses](prerequisites.md#microsoft-365-copilot-developer-licenses).

## December 2024

### Add code interpreter to your declarative agent

Add the code interpreter capability to your declarative agent by using the Copilot Studio agent builder or Agents Toolkit. To learn more, see [Add capabilities to your declarative agent](code-interpreter.md).

## November 2024

### Add image generator to your declarative agent

Add the image generator capability to your declarative agent by using the Copilot Studio agent builder or Agents Toolkit.. To learn more, see [Add capabilities to your declarative agent](image-generator.md).

### Declarative agent manifest version 1.2

A new version of the declarative agent manifest schema has been released. Version 1.2 adds support for scoped web search and the new code interpreter and image generator capabilities. To learn more, see [Declarative agent schema 1.2 for Microsoft 365 Copilot](declarative-agent-manifest-1.2.md).

### API plugin manifest version 2.2

A new version of the API plugin manifest schema has been released. Version 2.2 adds support for data handling attestation. To learn more, see [Plugin manifest schema 2.2 for Microsoft 365 Copilot](plugin-manifest-2.2.md).

## October 2024

### Use the Copilot Studio agent builder to build declarative agents

Use the Copilot Studio agent builder to create and customize agents for your specific scenarios. With the agent builder, you can use natural language to describe your agent, or you can build it manually via a rich authoring experience. To learn more, see [Overview of Copilot Studio agent builder](agent-builder.md).

## September 2024

### Build your own agent

You can build your own agents to focus on your specific use cases. Provide custom instructions to tailor responses, ground agents in your organization's data, and add more skills with actions.

You can build agents in two ways:

- [Build declarative agents](overview-declarative-agent.md) by using the Microsoft 365 Copilot orchestrator and foundation models. You can use Visual Studio Code or the Copilot Studio agent builder.
- [Build custom engine agents](overview-custom-engine-agent.md) with your custom orchestrator and foundation models by using Azure AI Foundry and Visual Studio Code.
