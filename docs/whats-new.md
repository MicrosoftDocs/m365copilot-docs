---
title: What's New for Microsoft 365 Copilot Developers
description: Find out what's new in Microsoft 365 Copilot extensibility, including declarative agents, custom engine agents, connectors, Copilot APIs, and more.
author: lauragra
ms.author: lauragra
ms.localizationpriority: medium
ms.date: 11/11/2025
ms.topic: overview
---

# What's new in Microsoft 365 Copilot extensibility

As a developer, you can extend, enrich, and customize [Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-overview) for the unique way your customers work. This article provides the latest information about what's new in Microsoft 365 Copilot extensibility.

For the latest information, announcements, and news about preview and generally available (GA) features, follow the [Microsoft 365 Copilot developer blog](https://devblogs.microsoft.com/microsoft365dev/category/microsoft-365-copilot/).

## November 2025

### Embedded file content file size limit increase

You can now upload files up to 512 MB in size when you embed file content as knowledge in Copilot Studio. For more information, see [File size limits](copilot-studio-agent-builder-knowledge.md#file-size-limits).

## October 2025

### New admin controls for agent sharing

Tenant administrators can now govern who is allowed to share agents created in the Copilot Studio lite experience. These controls help organizations maintain compliance and prevent oversharing of agents. For more information, see [Share an agent](copilot-studio-lite-share-manage-agent.md#share-an-agent).

### Copy an agent to the Copilot Studio full experience

You can copy your declarative agent from the Copilot Studio lite experience to the full experience by using the **Copy to full experience** feature. This unlocks advanced lifecycle management, analytics, governance controls, and deeper enterprise integration options.

For details, see [Copy an agent to the Copilot Studio full experience](copy-agent-to-copilot-studio.md).

### Use the Search API (preview) to perform semantic search

The Microsoft 365 Copilot Search API (preview) enables developers to perform semantic search across OneDrive content using natural language queries with contextual understanding and intelligent results. For more information, see [Overview of the Search API](api/ai-services/search/overview.md).

### Users with usage billing have access to additional knowledge sources in the Copilot Studio lite experience

Users who are configured with usage billing in the Microsoft 365 admin center now have access to embedded file content, SharePoint data, and Microsoft 365 Copilot connectors custom knowledge sources when they use the Copilot Studio lite experience to create agents.

### Microsoft 365 Copilot Chat API (preview)

The Microsoft 365 Copilot Chat API (preview) enables you to programmatically engage in multi-turn conversations with Microsoft 365 Copilot, grounded in enterprise search and web search. For more information, see [Overview of the Microsoft 365 Copilot Chat API (preview)](api/ai-services/chat/overview.md).

## August 2025

### Use Teams meetings as a knowledge source in Copilot Studio

Teams meetings are now available as a knowledge source when you use Copilot Studio to create agents. For more information, see [Add knowledge sources to your declarative agent](knowledge-sources.md).

## July 2025

### Scope Copilot connector data sources

You can now scope Copilot connectors to specific data attributes when you use Copilot Studio to create your agent. For more information, see [Scope Copilot connector data sources](copilot-studio-agent-builder-knowledge.md).

### Declarative agent manifest version 1.5

A new version of the declarative agent manifest schema is available. [Declarative agent manifest schema version 1.5](declarative-agent-manifest-1.5.md) adds the following:

- Added the [meetings](declarative-agent-manifest-1.5.md#meetings-object) capability to the list of `capabilities`, which allows agents to search meetings in the organization.

### Disclaimers in declarative agents

Added the `disclaimers` property to the [Declarative agent manifest object](declarative-agent-manifest-1.4.md#declarative-agent-manifest-object) in schema version 1.4.

### Embedded file content file size limit increase

You can now upload files up to 100 MBs in size when you embed file content as knowledge in Copilot Studio. For more information, see [File size limits](copilot-studio-agent-builder-knowledge.md#file-size-limits).

### Increased SharePoint file limit for agents

You can now specify up to 100 SharePoint files as knowledge when you use Copilot Studio, up from a limit of 20 files. For more information, see [SharePoint content](copilot-studio-lite-knowledge.md#sharepoint-content).

### Build Microsoft 365 Copilot connectors for people data (preview)

Build connectors to ingest people data from your source systems into Microsoft Graph for Microsoft 365 Copilot. For more information, see [Build Microsoft 365 Copilot connectors for people data (preview)](build-connectors-with-people-data.md).

### Agents supported in Microsoft 365 Government clouds

Limited support for declarative agents is available for [Microsoft 365 Government](https://www.microsoft.com/microsoft-365/government) tenants. Support is now available for Government Community Cloud (GCC) tenants.

### Asynchronous and proactive messages in custom engine agents

You can implement asynchronous and proactive message flows in your custom engine agents. For more information, see [Implement asynchronous and proactive messaging in custom engine agents](custom-engine-agent-asynchronous-flow.md).

### Convert declarative agents to custom engine agents

You can convert your declarative agent to a custom engine agent to take advantage of advanced functionality and workflows. For more information, see [Convert your declarative agent to a custom engine agent](convert-declarative-agent.md).

### Prioritize declarative agent knowledge sources

You can configure your agent to prioritize the knowledge sources that you provide rather than general knowledge in its responses. For more information, for Copilot Studio, see [Prioritize your knowledge sources](copilot-studio-lite-knowledge.md#prioritize-your-knowledge-sources-over-general-knowledge); for Microsoft 365 Agents Toolkit, see [Special instructions object](/microsoft-365-copilot/extensibility/declarative-agent-manifest-1.4#special-instructions-object).

### Custom engine agents generally available

Custom engine agents for Microsoft 365 Copilot are now generally available (GA). For more information, see [Custom engine agent overview](overview-custom-engine-agent.md).

## June 2025

### Maximum number of conversation starters for declarative agents

You can now add up to 12 conversation starters to your declarative agent when you use the [Microsoft 365 Agents Toolkit](/microsoft-365-copilot/extensibility/build-declarative-agents) to create your agent.

### Embedded file content as knowledge

Use the file upload feature in Copilot Studio to upload files from your device or the cloud to use as knowledge for your agent. For more information, see [Embedded file content](copilot-studio-lite-knowledge.md#embedded-file-content).

### Use the Retrieval API (preview) to retrieve data

The Microsoft 365 Copilot Retrieval API (preview) allows you to retrieve relevant content from SharePoint and Copilot connectors. For more information, see [Overview of the Retrieval API](/microsoft-365-copilot/extensibility/api-reference/retrieval-api-overview).

### Microsoft 365 Copilot API client libraries

Use the Copilot API libraries to work with Microsoft 365 Copilot APIs. For more information, see [Microsoft 365 Copilot APIs (preview)](/microsoft-365-copilot/extensibility/sdks/api-libraries).

### Outlook email and Teams chats knowledge in Copilot Studio

Add Outlook email and Teams group, channel, and meeting chats as knowledge when you use Copilot Studio to build your agent. For more information, see [Add knowledge sources](/microsoft-365-copilot/extensibility/copilot-studio-lite-build).

## May 2025

### Microsoft 365 Agents Toolkit

Use [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) to [Build declarative agents](/microsoft-365-copilot/extensibility/build-declarative-agents) and [Build Copilot connectors](build-your-first-connector.md).

### Microsoft 365 Copilot APIs

The Microsoft 365 Copilot APIs provide a comprehensive set of capabilities that enable you to build AI-powered applications grounded in enterprise data. For more information, see [Microsoft 365 Copilot APIs overview](copilot-apis-overview.md).

### API plugin manifest version 2.3

A new version of the API plugin manifest schema is available. [API plugin manifest schema 2.3 for Microsoft 365 Copilot](api-plugin-manifest-2.3.md) adds support [calling functions in an Office Add-in](build-api-plugins-local-office-api.md).

### Declarative agent manifest version 1.4

A new version of the declarative agent manifest schema is available. [Declarative agent manifest schema version 1.4](declarative-agent-manifest-1.4.md) adds the following.

- Added the `behavior_overrides` property to the [Declarative agent manifest object](declarative-agent-manifest-1.4.md#declarative-agent-manifest-object).
- Added the `part_type` and `part_id` properties to the [Items by SharePoint IDs object](declarative-agent-manifest-1.4.md#items-by-sharepoint-ids-object).
- Added the [Scenario models](declarative-agent-manifest-1.4.md#scenario-models-object) capability.

## April 2025

### Email as knowledge

Email is now available as a knowledge source for agents build with [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit). For more information, see [Email knowledge](knowledge-sources.md#email).

### Copilot Studio agent templates

Use templates in [Copilot Studio](copilot-studio-lite.md) to streamline your agent development process. For more information, see [Agent templates overview](agent-templates-overview.md).

### Document interaction for declarative agents in Word

Declarative agents in the Copilot experience in Word can [interact with the open document](declarative-agent-document-interaction.md). Users can provide the current selection to the agent and can insert images provided by the agent into the document.

## March 2025

### Declarative agent manifest version 1.3

A new version of the declarative agent manifest schema is available. [Declarative agent manifest schema version 1.3](declarative-agent-manifest-1.3.md) adds support for the following capabilities:

- [Dataverse knowledge](knowledge-sources.md#dataverse)
- [Teams messages as knowledge](knowledge-sources.md#teams-messages)
- [People knowledge](knowledge-sources.md#people)

## February 2025

### Copilot Studio available in Copilot Chat

Microsoft 365 Copilot Chat users can now access Copilot Studio to build agents in the Microsoft 365 Copilot app and the Copilot app in Teams.

### Add websites as knowledge in Copilot Studio

You can add specific public websites as agent knowledge sources to make your agent context-aware. For details, see [Web content](copilot-studio-lite-knowledge.md#public-websites).

### Custom engine agents available in Copilot app (preview)

Custom engine agents are now available to users who have Microsoft 365 Copilot licenses or users in tenants with metering enabled in the Microsoft 365 Copilot app (for preview), in addition to Teams.

## January 2025

### Links are no longer redacted in Copilot responses

Links to organizational and web resources are no longer redacted from Copilot responses. Links that don't explicitly match grounding data or resources defined in the agent manifest continue to be redacted.

### Build agents for Microsoft 365 Copilot Chat

You can now build agents for Microsoft 365 users who don't have a Microsoft 365 Copilot license, grounded on the web and with limited capabilities. For more information, see [Microsoft 365 Copilot developer licenses](prerequisites.md#microsoft-365-copilot-developer-licenses).

## Related content

- [Microsoft 365 Copilot extensibility overview](/microsoft-365-copilot/extensibility/)
- [What's new history](whats-new-history.md)
