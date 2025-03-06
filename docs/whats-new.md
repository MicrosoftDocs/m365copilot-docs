---
title: What's New for Microsoft 365 Copilot Developers
description: Find out what's new in Microsoft 365 Copilot extensibility, including plugins, declarative agents, custom engine agents, connectors, and more.
author: lauragra
ms.author: lauragra
ms.localizationpriority: medium
ms.date: 02/25/2025
ms.topic: overview
---

# What's new in Microsoft 365 Copilot extensibility

As a developer, you can extend, enrich, and customize [Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-overview) for the unique way your customers work. This article provides the latest information about what's new in Microsoft 365 Copilot extensibility.

For the latest information, announcements, and news about preview and generally available (GA) features, follow the [Microsoft 365 Copilot developer blog](https://devblogs.microsoft.com/microsoft365dev/category/microsoft-365-copilot/).

## February 2025

### Copilot Studio agent builder available in Copilot Chat

Microsoft 365 Copilot Chat users can now access Copilot Studio agent builder to build agents in the Microsoft 365 Copilot app and the Copilot app in Teams.

### Add websites as knowledge in agent builder

You can add specific public websites as agent knowledge sources to make your agent context-aware. For details, see [Web content](copilot-studio-agent-builder-build.md#web-content).

### Custom engine agents available in Copilot app (preview)

Custom engine agents are now available to users who have Microsoft 365 Copilot licenses or users in tenants with metering enabled in the Microsoft 365 Copilot app (for preview), in addition to Teams.

## January 2025

### Links are no longer redacted in Copilot responses

Links to organizational and web resources are no longer redacted from Copilot responses. Links that don't explicitly match grounding data or resources defined in the agent manifest continue to be redacted.

### Build agents for Microsoft 365 Copilot Chat

You can now build agents for Microsoft 365 users who don't have a Microsoft 365 Copilot license, grounded on the web and with limited capabilities. For more information, see [Agent capabilities for Microsoft 365 users](prerequisites.md#agent-capabilities-for-microsoft-365-users).

## December 2024

### Add code interpreter to your declarative agent

Add the code interpreter capability to your declarative agent by using the Copilot Studio agent builder or Teams Toolkit. To learn more, see [Add capabilities to your declarative agent](add-agent-capabilities.md).

## November 2024

### Add image generator to your declarative agent

Add the image generator capability to your declarative agent by using the Copilot Studio agent builder or Teams Toolkit.. To learn more, see [Add capabilities to your declarative agent](add-agent-capabilities.md).

### Declarative agent manifest version 1.2

A new version of the declarative agent manifest schema has been released. Version 1.2 adds support for scoped web search and the new code interpreter and image generator capabilities. To learn more, see [Declarative agent schema 1.2 for Microsoft 365 Copilot](declarative-agent-manifest-1.2.md).

### API plugin manifest version 2.2

A new version of the API plugin manifest schema has been released. Version 2.2 adds support for data handling attestation. To learn more, see [API plugin manifest schema 2.2 for Microsoft 365 Copilot](api-plugin-manifest-2.2.md).

## October 2024

### Use the Copilot Studio agent builder to build declarative agents

Use the Copilot Studio agent builder to create and customize agents for your specific scenarios. With the agent builder, you can use natural language to describe your agent, or you can build it manually via a rich authoring experience. To learn more, see [Overview of Copilot Studio agent builder](copilot-studio-agent-builder.md).

## September 2024

### Build your own agent

You can build your own agents to focus on your specific use cases. Provide custom instructions to tailor responses, ground agents in your organization's data, and add more skills with actions.

You can build agents in two ways:

- [Build declarative agents](overview-declarative-agent.md) by using the Microsoft 365 Copilot orchestrator and foundation models. You can use Visual Studio Code or the Copilot Studio agent builder.
- [Build custom engine agents](overview-custom-engine-agent.md) with your custom orchestrator and foundation models by using Azure AI Foundry and Visual Studio Code.
