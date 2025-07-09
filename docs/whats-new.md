---
title: What's New for Microsoft 365 Copilot Developers
description: Find out what's new in Microsoft 365 Copilot extensibility, including declarative agents, custom engine agents, connectors, Copilot APIs, and more.
author: lauragra
ms.author: lauragra
ms.localizationpriority: medium
ms.date: 07/08/2025
ms.topic: overview
---

# What's new in Microsoft 365 Copilot extensibility

As a developer, you can extend, enrich, and customize [Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-overview) for the unique way your customers work. This article provides the latest information about what's new in Microsoft 365 Copilot extensibility.

For the latest information, announcements, and news about preview and generally available (GA) features, follow the [Microsoft 365 Copilot developer blog](https://devblogs.microsoft.com/microsoft365dev/category/microsoft-365-copilot/).

## July 2025

### Asynchronous and proactive messages in custom engine agents

You can implement asynchronous and proactive message flows in your custom engine agents. For more information, see [Implement asynchronous and proactive messaging in custom engine agents](custom-engine-agent-async-flow.md).

### Prioritize declarative agent knowledge sources

You can configure your agent to prioritize the knowledge sources that you provide rather than general knowledge in its responses. For more information, for Copilot Studio agent builder, see [Prioritize your knowledge sources](copilot-studio-agent-builder-build.md#prioritize-your-knowledge-sources-over-general-knowledge); for Microsoft 365 Agents Toolkit, see [Special instructions object](/microsoft-365-copilot/extensibility/declarative-agent-manifest-1.4#special-instructions-object).

### Custom engine agents generally available

Custom engine agents for Microsoft 365 Copilot are now generally available (GA). For more information, see [Custom engine agent overview](overview-custom-engine-agent.md).

## June 2025

### Maximum number of conversation starters for declarative agents

You can now add up to 12 conversation starters to your declarative agent when you use the [Microsoft 365 Agents Toolkit](/microsoft-365-copilot/extensibility/build-declarative-agents) to create your agent.

### Embedded file content as knowledge

Use the file upload feature in Copilot Studio agent builder to upload files from your device or the cloud to use as knowledge for your agent. For more information, see [Embedded file content](copilot-studio-agent-builder-build.md#embedded-file-content).

### Use the Retrieval API (preview) to retrieve data

The Microsoft 365 Copilot Retrieval API (preview) allows you to retrieve relevant content from SharePoint and Copilot connectors. For more information, see [Overview of the Retrieval API](/microsoft-365-copilot/extensibility/api-reference/retrieval-api-overview).

### Microsoft 365 Copilot API client libraries

Use the Copilot API libraries to work with Microsoft 365 Copilot APIs. For more information, see [Microsoft 365 Copilot APIs (preview)](/microsoft-365-copilot/extensibility/sdks/api-libraries).

### Outlook email and Teams chats knowledge in agent builder

Add Outlook email and Teams group, channel, and meeting chats as knowledge when you use Copilot Studio agent builder to build your agent. For more information, see [Add knowledge sources](/microsoft-365-copilot/extensibility/copilot-studio-agent-builder-build).

## May 2025

### Microsoft 365 Agents Toolkit

Use Microsoft 365 Agents Toolkit ([an evolution of Teams Toolkit](https://aka.ms/M365AgentsToolkit)) to [Build declarative agents](/microsoft-365-copilot/extensibility/build-declarative-agents) and [Build Copilot connectors](build-your-first-connector.md).

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

### Copilot Studio message usage rates

Updated the usage rates for Copilot Studio messages. For more information, see [Copilot Studio message usage rates](prerequisites.md#copilot-studio-message-usage-rates).

### Email as knowledge

Email is now available as a knowledge source for agents build with Microsoft 365 Agents Toolkit ([an evolution of Teams Toolkit](https://aka.ms/M365AgentsToolkit)). For more information, see [Email knowledge](knowledge-sources.md#email).

### Copilot Studio agent builder templates

Use templates in [Copilot Studio agent builder](copilot-studio-agent-builder.md) to streamline your agent development process. For more information, see [Agent builder templates overview](agent-builder-templates.md).

### Document interaction for declarative agents in Word

Declarative agents in the Copilot experience in Word can [interact with the open document](declarative-agent-document-interaction.md). Users can provide the current selection to the agent and can insert images provided by the agent into the document.

## March 2025

### Declarative agent manifest version 1.3

A new version of the declarative agent manifest schema is available. [Declarative agent manifest schema version 1.3](declarative-agent-manifest-1.3.md) adds support for the following capabilities:

- [Dataverse knowledge](knowledge-sources.md#dataverse)
- [Teams messages as knowledge](knowledge-sources.md#teams-messages)
- [People knowledge](knowledge-sources.md#people)

## February 2025

### Copilot Studio agent builder available in Copilot Chat

Microsoft 365 Copilot Chat users can now access Copilot Studio agent builder to build agents in the Microsoft 365 Copilot app and the Copilot app in Teams.

### Add websites as knowledge in agent builder

You can add specific public websites as agent knowledge sources to make your agent context-aware. For details, see [Web content](copilot-studio-agent-builder-build.md#websites).

### Custom engine agents available in Copilot app (preview)

Custom engine agents are now available to users who have Microsoft 365 Copilot licenses or users in tenants with metering enabled in the Microsoft 365 Copilot app (for preview), in addition to Teams.

## January 2025

### Links are no longer redacted in Copilot responses

Links to organizational and web resources are no longer redacted from Copilot responses. Links that don't explicitly match grounding data or resources defined in the agent manifest continue to be redacted.

### Build agents for Microsoft 365 Copilot Chat

You can now build agents for Microsoft 365 users who don't have a Microsoft 365 Copilot license, grounded on the web and with limited capabilities. For more information, see [Agent capabilities for Microsoft 365 users](prerequisites.md#agent-capabilities-for-microsoft-365-users).

## Related content

- [Microsoft 365 Copilot extensibility overview](/microsoft-365-copilot/extensibility/)
- [What's new history](whats-new-history.md)
