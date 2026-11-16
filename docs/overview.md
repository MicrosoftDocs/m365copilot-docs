---
title: Ways to extend Microsoft 365 Copilot
description: Choose between building a plugin for supported Copilot experiences and building Copilot capabilities into an app you own.
#customer intent: As a builder, I want to decide where users will interact with my solution so that I can choose the applicable capabilities, tools, lifecycle, and distribution guidance.
author: jessicaaawu
ms.author: wujessica
ms.topic: overview
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.custom: [copilot-learning-hub]
---

# Ways to extend Microsoft 365 Copilot

Choose the path that matches where people will use your solution. This article compares the two paths so you can select the right starting point before **Prepare**.

- **Build a plugin:** Package skills, tools (MCP servers, connectors) and agents as a plugin, then publish it through the plugin registry.
- **Build Copilot into your own app:** Build Copilot capabilities into an app you own with APIs, SDKs, Microsoft Graph and Work IQ app guidance.

Before building a new plugin, browse the [Copilot Plugin Catalog](https://aka.ms/CopilotPluginCatalog) to see whether an existing plugin meets your needs.

## Compare the two paths

| Decision | Build a plugin | Build Copilot into your own app |
|---|---|---|
| Who it's for | Builders extending supported Copilot experiences | Developers who own and operate the application experience or agent runtime |
| What you build | A plugin that brings supported skills, tools, and agents into Copilot | An app that calls APIs or uses SDKs for Microsoft 365 work context and Copilot capabilities |
| Distribution | Plugin registry distribution for your organization, or an eligible public submission through Partner Center and Microsoft Marketplace | The deployment and distribution channel for your own application platform |
| Where to start | [Microsoft plugins hub](/plugins), then [What is a plugin?](/plugins/plugins-overview) | [Build Copilot-powered apps](apps-agents-overview.md) |
| Next | [Plan your plugin](/plugins/planning-guide) | Select the APIs, SDKs, runtime, and hosting model on the app path |

## Build a plugin

Microsoft plugins bring skills, tools and agents to supported Copilot experiences. Builders publish through the Microsoft plugin registry to reach people in their organization, or submit plugins through Partner Center for certification and public distribution through Microsoft Marketplace. Admins manage plugin availability and access centrally, and people discover enabled plugins where they work. Supported capabilities and availability vary by product and rollout.

A shared package doesn't mean an identical experience everywhere. Supported capabilities, availability and required setup vary by product, publishing route and rollout.

During **Prepare**, choose a capability for the customer's task:

| Task | Capability guidance |
|---|---|
| Provide a goal-directed conversation using Copilot's orchestrator and models | [Declarative agents](/plugins/overview-declarative-agent) |
| Teach a repeatable task through instructions and resources | [Skills as plugin capabilities](/plugins/plugin-type-skills) |
| Ingest external content into Microsoft Graph | [Copilot connectors (synced)](/plugins/overview-copilot-connector) |
| Retrieve external content in real time through MCP | [Copilot connectors (federated)](/plugins/overview-copilot-connector) |
| Reference a remote MCP server from an app manifest | [Plugin connectors (`agentConnectors[]`)](/plugins/configure-plugin-mcp-servers) |
| Give a declarative agent a technical MCP or API action | [MCP and API plugins for declarative agents](/plugins/overview-plugins) |

Power Platform connectors used in Copilot Studio are a different integration model. Don't treat them as equivalent to Copilot connectors or plugin connectors.

For professional development, start with [Work IQ Dev Tools](/plugins/choose-plugin-development-tools), choose a documented environment, and add Agents Toolkit or an SDK only when the scenario needs it. Follow the product-specific authoring, testing, and distribution procedure for each selected capability.

## Build Copilot into your own app

Use [Build Copilot-powered apps](apps-agents-overview.md) for API, SDK, Microsoft Graph, Work IQ app, embedded, and custom engine guidance. Keep the application experience, runtime, hosting, identities, and service lifecycle on that path.

An API action in a declarative agent isn't the same as an app calling a Microsoft 365 Copilot API. Using an API doesn't by itself choose a plugin package or publishing method.

## Combine the paths without combining their responsibilities

A solution can include both an application you host and a separately packaged plugin. Each part retains its own identity, authentication, deployment, distribution, and governance requirements.

For example, publishing a plugin doesn't host its remote MCP server or finish customer consent and connection setup. Likewise, deploying your app doesn't publish a plugin to the registry.

## Next step

For the plugin path, enter **Prepare** with [Plan your plugin](/plugins/planning-guide). For the app path, continue to [Build Copilot-powered apps](apps-agents-overview.md).
