---
title: What Is a Microsoft 365 Copilot Plugin?
description: Learn what a Microsoft 365 Copilot plugin includes and how to take it from an idea to use.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: overview
---

# What is a Microsoft 365 Copilot plugin?

A Microsoft 365 Copilot plugin is an installable package that brings together capabilities for a specific task. It can include supported agents and skills, along with configuration or references for connectors and remote MCP servers.

For example, a support plugin might use an agent to answer questions, a skill to guide troubleshooting, a connector to find support content, and an MCP server to provide tools.

You build or reuse the capabilities, package and test the plugin, then publish or share it with the people who need it.

## What can a plugin include?

Choose what your plugin needs based on the task it should help users complete.

| Capability | What it does | Learn more |
|---|---|---|
| Declarative agent | Provides a focused assistant with instructions, knowledge, and tools. | [Declarative agents overview](overview-declarative-agent.md) |
| Skill | Provides reusable instructions or a workflow for a specific job. | [Skills as plugin capabilities](plugin-type-skills.md) |
| Copilot connector | Makes external organizational content available. | [Copilot connectors as plugin capabilities](plugin-type-connectors.md) |
| MCP integration | Connects to tools provided by a remote MCP server. | [MCP servers and plugins](plugin-type-mcp-servers.md) |

A plugin can use one capability or several. You can create new capabilities or reuse existing ones.

What you can include depends on the development tool and the Microsoft 365 experience where people use the plugin. Check support before you build or package it.

The package doesn't contain every service it uses. For example, it can include connection information for an MCP server while the server runs separately.

> [!NOTE]
> API plugins used as actions within declarative agents have their own development and packaging guidance. See [MCP and API plugins for declarative agents](overview-plugins.md).

## Take your plugin from idea to use

| Step | Action |
|---|---|
| **Plan** | Define the task, intended users, and where they use the plugin. |
| **Build or reuse** | Choose the capabilities you need and confirm that each works. |
| **Package and test** | Bring the capabilities together, create the package, and test the plugin. Evaluate agent quality when appropriate. |
| **Publish or share** | Distribute the tested plugin through a supported publishing or sharing method. |
| **Make available and govern** | Complete any required review or installation, select who can use the plugin, and configure access and connections. |
| **Monitor, update, and retire** | Check how the plugin performs, release tested updates, and remove it when it's no longer needed. |

After you publish or share your plugin, users might still need approval, installation, or connection setup before they can use it. The steps depend on how you shared it and your organization's settings.

## Get started

- **Have an existing declarative-agent source project?** Follow [Quickstart: Create your first plugin with Work IQ Dev Tools](quickstart-plugin.md).
- **Want to build or reuse capabilities?** Start with [Plan your plugin](planning-guide.md).
- **Need to administer a plugin?** See the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map.
- **Want to publish for customers?** See [Build and publish plugins for customers](isv-publisher-guide.md).

> [!NOTE]
> This guidance covers plugin packages and their included capabilities. To manage an existing standalone (unpackaged) agent, use [Agent Registry](/microsoft-365/admin/manage/agent-registry?context=/microsoft-365/copilot/extensibility/context). For standalone skills or MCP servers, see [Manage plugins, skills, and MCP servers](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context). For connector connections and policies, see [Deploy Microsoft 365 Copilot connectors](/microsoft-365/copilot/connectors/deployment-overview?context=/microsoft-365/copilot/extensibility/context) and [Advanced connector policies](/power-platform/admin/advanced-connector-policies).
