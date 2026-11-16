---
title: What Is a Microsoft 365 Copilot Plugin?
description: Learn what a Microsoft 365 Copilot plugin includes and how to take it from an idea to use.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/16/2026
ms.topic: overview
ai-usage: ai-assisted
ms.custom: msecd-doc-authoring-1013
---

# What is a Microsoft 365 Copilot plugin?

A plugin is an installable package that adds new capabilities to Microsoft 365 Copilot and other Microsoft AI experiences. It brings together the skills, tools, and optional agents needed for a job in one unit that people can find, install, share, and manage.

For example, a support plugin might use an agent to answer questions, a skill to guide troubleshooting, a connector to find support content, and an MCP server to provide tools.

A plugin can contain one capability or several; a single packaged skill is also a plugin. External services, such as remote MCP servers, can run separately from the package.

Before building a new plugin, browse the [Copilot Plugin Catalog](https://aka.ms/CopilotPluginCatalog), a public registry of available plugins.

## What can a plugin include?

Choose what your plugin needs based on the task it should help users complete.

| Capability | What it does | Learn more |
|---|---|---|
| Skills | Provide reusable instructions for a task, packaged in a directory that contains `SKILL.md`. | [Skills in declarative agents](declarative-agent-skills.md) |
| Tools | Connect to apps and data, including supported Copilot connectors and remote MCP integrations. | [Copilot connectors](plugin-type-connectors.md) and [MCP servers](plugin-type-mcp-servers.md) |
| Agents | Provide specialized assistants for a role or workflow; today, these are declarative agents. | [Declarative agents overview](overview-declarative-agent.md) |

A plugin doesn't need all three capability types. You can create new capabilities or reuse existing ones.

Support varies by product. Check the guidance for [Agent Builder](agent-builder.md), [Copilot Studio](/microsoft-copilot-studio/fundamentals-what-is-copilot-studio), and [Copilot Cowork](/copilot/cowork/) for the experience you're targeting before you build or package your plugin.

## Plugins and declarative agent actions

A **Microsoft 365 Copilot plugin** is an installable package. An **API plugin** or **MCP plugin** is an integration that provides actions to a declarative agent. When a plugin package includes that agent, its API and MCP actions remain available through the agent; they don't become independently available capabilities of the package. The API or MCP server runs separately.

The manifests describe different levels of the solution:

| Manifest | What it describes |
|---|---|
| [Microsoft 365 app manifest](/microsoft-365/extensibility/schema/), `manifest.json` | The installable package's identity, metadata, and supported capabilities. |
| [Declarative agent manifest](declarative-agent-manifest-1.9.md) | The agent's instructions, knowledge, and actions. Its `actions` entries reference or inline API or MCP plugin manifests. |
| [API or MCP plugin manifest](plugin-manifest-2.4.md), such as `ai-plugin.json` | An agent action integration, including the API or MCP server connection and applicable function, tool, and authentication configuration. It isn't the app manifest. |

Use [MCP and API plugins for declarative agents](overview-plugins.md) to add actions to an agent. To connect a remote MCP server at the package level instead, use [remote MCP configuration in the app manifest](configure-plugin-mcp-servers.md). That route uses `agentConnectors`, not an agent's API or MCP plugin manifest. Choose the route supported by your target experience.

## Plugin journey

1. **[Prepare](planning-guide.md):** Define the outcome, intended users, target products, and requirements for your plugin.
2. **[Build or reuse](build-reuse-plugin.md):** Choose and integrate the capabilities you need, then test how they work together.
3. **Package & test:** [Package your plugin](package-plugin.md), then [test and validate it](validate-plugin.md) for your intended publishing route.
4. **[Publish & distribute](publish.md):** Share or publish the tested plugin through a supported route for your audience.
5. **[Make available & govern](govern-plugins.md):** Complete any required admin review, installation, user availability, and access configuration.
6. **[Monitor, update & retire](improve-plugin.md):** Review performance, support users, release updates, and retire your plugin when it's no longer needed.
7. **Discover & use:** Browse available plugins in the [Copilot Plugin Catalog](https://aka.ms/CopilotPluginCatalog). Help users find and use your plugin in their target product; for Cowork, see [Use plugins with Copilot Cowork](/copilot/cowork/cowork-plugins).

After you publish or share your plugin, users might still need approval, installation, or connection setup before they can use it. The steps depend on how you shared it and your organization's settings.

## Key terms

| Term | Meaning |
|---|---|
| Copilot Plugin Catalog | A public registry for discovering available plugins. |
| Plugin registry | A destination for plugins published or shared with a selected audience. |
| Tools Registry | The view under **Agents** > **Tools** > **Registry** in the Microsoft 365 admin center for plugins, skills, MCP servers, and connector visibility. |
| Agent Registry | The view under **Agents** > **All agents** > **Registry** for agent-specific controls; a packaged agent can also have an Agent Registry record. |
| Microsoft Marketplace | A publishing route for reaching customers across organizations. |

Public discovery, publishing, and tenant administration are separate. A listing in the Copilot Plugin Catalog doesn't establish organizational approval or availability. Tools Registry, Agent Registry, and Microsoft Marketplace aren't interchangeable names for one catalog.

## Next step

> [!div class="nextstepaction"]
> [Plan your plugin](planning-guide.md)

## Related content

- **Have an existing declarative-agent source project?** Follow [Quickstart: Create your first plugin with Work IQ Dev Tools](quickstart-plugin.md).
- **Want to create and package a plugin with pro-code tools?** Follow [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/) in the GitHub documentation.
- **Building a custom engine app or agent?** Follow the [app development path](apps-agents-overview.md).
- **Need to administer a plugin?** See the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map.
- **Want to publish for customers?** See [Build and publish plugins for customers](isv-publisher-guide.md).
