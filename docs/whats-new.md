---
title: What's New for Microsoft 365 Copilot Developers
description: Find out what's new in Microsoft 365 Copilot extensibility, including declarative agents, custom engine agents, connectors, Copilot APIs, and more.
author: lauragra
ms.author: lauragra
ms.localizationpriority: medium
ms.date: 05/15/2026
ms.topic: overview
---

<!-- markdownlint-disable MD024 -->
<!-- cSpell:ignore GCCH -->

# What's new in Microsoft 365 Copilot extensibility

As a developer, you can extend, enrich, and customize [Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-overview) for the unique way your customers work. This article provides the latest information about what's new in Microsoft 365 Copilot extensibility.

For the latest information, announcements, and news about preview and generally available (GA) features, follow the [Microsoft 365 Copilot developer blog](https://devblogs.microsoft.com/microsoft365dev/category/microsoft-365-copilot/).

## May 2026

### OneDrive knowledge in Agent Builder

Add up to 50 OneDrive files and folders as knowledge when you use Agent Builder in Microsoft 365 Copilot to build your agent. For more information, see [Add knowledge sources](agent-builder-add-knowledge.md).

### Declarative agent manifest version 1.7

A new version of the declarative agent manifest schema is available. [Declarative agent manifest schema version 1.7](declarative-agent-manifest-1.7.md) adds the following features:

- Added the optional `editorial_answers` property so agents can match semantically similar user queries to predefined question and answer pairs.
- Added the optional `default_response_mode` property to the [Behavior overrides object](declarative-agent-manifest-1.7.md#behavior-overrides-object) so you can set the agent's default mode to `Auto`, `Reasoning`, or `Quick response`.
- Added the optional `depends_on` property to the [Conversation starters object](declarative-agent-manifest-1.7.md#conversation-starters-object) to specify capability dependencies for conversation starters.

### New agent templates added to Agent Builder

Seven new agent templates are now available in Agent Builder to help you quickly build declarative agents for common workplace scenarios:

- [Executive Briefing Agent](agent-template-executive-briefing.md)
- [My Company Policy](agent-template-my-company-policy.md)
- [Personal News Digest](agent-template-personal-news-digest.md)
- [Plan My Day](agent-template-plan-my-day.md)
- [Project Delta Digest](agent-template-project-delta-digest.md)
- [SME Finder](agent-template-sme-finder.md)
- [Status Update Agent](agent-template-status-update-agent.md)

For more information, see [Agent templates overview](agent-templates-overview.md).

### Evaluate agents

Evaluate agents by using a comprehensive evaluation framework and tooling to refine agent performance. The Agent Evaluations CLI tool enables developers to create, run, and analyze tests for their agents. For more information, see [Agent evaluation overview](evaluation-overview.md) and [Agent Evaluations CLI overview](evaluations-cli-overview.md).

### Package Management API updates (preview)

The Package Management API has new capabilities for IT administrators to manage apps and agents in their Microsoft 365 organization. Administrators can now block and unblock packages to control their availability, update package metadata, and reassign package ownership. For more information, see [Package Management API overview](api/admin-settings/package/overview.md).

## April 2026

### Agent Registration API (preview)

The Agent Registration API enables developers and administrators to programmatically register and manage agents within their Microsoft 365 environment. The API supports creating, retrieving, updating, and deleting agent registrations with associated metadata and agent cards. For more information, see [Agent Registration API overview](api/admin-settings/agent-registration/overview.md).

### Copilot policy settings API (preview)

The Copilot policy settings API is now available in preview. This API provides a unified endpoint to read and update Copilot settings across multiple policy services, including Cloud Policy Service (CPS) and Microsoft Intune. For more information, see [copilotPolicySetting resource type](api/admin-settings/resources/copilotpolicysetting.md).

## March 2026

### Share agents to teams in Microsoft Teams

You can now share agents built with Agent Builder in Microsoft 365 Copilot to teams as well as users and groups. For more information, see [Share and manage agents](agent-builder-share-manage-agents.md).

### Use natural language to create an agent in Microsoft 365 Copilot

You can now create agents more quickly with Agent Builder in Microsoft 365 Copilot by using natural language. The agent is automatically configured for you. For more information, see [Use natural language to describe your agent](agent-builder-build-agents.md#use-natural-language-to-describe-your-agent-recommended).

### Interactive UI widgets for declarative agents

You can now add interactive UI widgets to your declarative agents by extending MCP server-based actions using the [OpenAI Apps SDK](https://developers.openai.com/apps-sdk). Widgets can render inline or in full-screen mode within Microsoft 365 Copilot. For more information, see [Add MCP apps to declarative agents in Microsoft 365 Copilot](plugin-mcp-apps.md).

## February 2026

### Agent Builder availability in GCCH

Agent Builder is now available in Government Community Cloud High (GCCH) environments.

## January 2026

### Retrieval API pay-as-you-go consumption (preview)

The Microsoft 365 Copilot Retrieval API is now available to users without a Microsoft 365 Copilot add-on license via pay-as-you-go consumption (preview). This model provides access to the Retrieval API for tenant-level data sources such as SharePoint and Microsoft 365 Copilot connectors. For more information, see [Microsoft 365 Copilot Retrieval API pay-as-you-go consumption (preview)](api/ai-services/retrieval/paygo-retrieval.md).

## Related content
- [Microsoft 365 Copilot extensibility overview](overview.md)
- [What's new history](whats-new-history.md)
