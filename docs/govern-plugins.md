---
title: Make your Microsoft 365 Copilot plugin available and govern access
description: Choose the administration tasks required to make a published or shared Microsoft 365 Copilot plugin available and govern its access.
author: erikadoyle
ms.author: edoyle
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: overview
---

# Make your plugin available and govern access

After you publish or share a plugin, complete the setup and access actions its method requires. A **Microsoft 365 administrator** handles actions that require administrator permissions. The plugin owner and intended users complete the rest.

**If you built the plugin**, give the responsible administrator or owner:

- The plugin identity and exact version.
- The published listing or package.
- The intended users or groups and supported Microsoft 365 experiences.
- Required licenses, permissions, consent, connections, and external services.
- Setup instructions and a support contact.

Publishing or sharing distributes the plugin. It doesn't ensure that every intended user can use it in every Microsoft 365 experience. Users might need to sign in, grant consent, or connect an account. Some direct-sharing methods require no administrator action.

## Manage plugins with Microsoft Agent 365

[Microsoft Agent 365](/microsoft-agent-365/overview?context=/microsoft-365/copilot/extensibility/context) is the administrative control plane for observing, governing, and securing agents and the tools they use. Use its controls in the [Microsoft 365 admin center](https://admin.microsoft.com/) to manage plugin packages, access, and requests.

Use the page that matches the object and task you're managing:

| Task | Go to |
|---|---|
| View or upload plugin packages and standalone skill packages | **Agents** > **Tools** > **Registry** |
| Install, uninstall, block, delete, or manage user availability for a plugin | **Agents** > **Tools** > **Plugins** |
| Manage plugin availability by publisher category | **Agents** > **Settings** > **Agent and plugin access** |
| Review plugin access requests or standalone MCP server registration requests | **Agents** > **Tools** > **Requests** |
| View an agent record and its available actions | **Agents** > **All agents** > **Registry** |
| Review agent submissions, updates, or activation requests | **Agents** > **All agents** > **Requests** |

The inventories are related but not interchangeable:

- **Tools Registry** inventories plugin packages, skills, MCP servers, and connectors. For an overview, see [Overview of the Tools page](/microsoft-365/admin/manage/agent-tools-overview?context=/microsoft-365/copilot/extensibility/context).
- **Agent Registry** inventories agents and provides agent-specific ownership, availability, deployment, and lifecycle controls. For the supported actions, see [Governance and lifecycle actions for agents](/microsoft-365/admin/manage/agent-actions?context=/microsoft-365/copilot/extensibility/context).

For authoritative procedures, see [Manage plugins, skills, and MCP servers](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context), [Agent Registry](/microsoft-365/admin/manage/agent-registry?context=/microsoft-365/copilot/extensibility/context), [Agent Requests](/microsoft-365/admin/manage/agent-requests?context=/microsoft-365/copilot/extensibility/context), and [agent details](/microsoft-365/admin/manage/agent-details?context=/microsoft-365/copilot/extensibility/context).

Manage the plugin package to control its installation and availability. Also check separate controls when a packaged agent has an Agent Registry record, a connector requires separate connection or policy controls, a remote MCP server has separate hosting or runtime controls, or an app registration, permission, or external service is managed by another product. A control on the plugin doesn't automatically govern every dependency.

> [!NOTE]
> This guidance covers plugin packages and their included capabilities. For an existing standalone (unpackaged) agent, use [Agent Registry](/microsoft-365/admin/manage/agent-registry?context=/microsoft-365/copilot/extensibility/context). For standalone skills or MCP servers, see [Manage plugins, skills, and MCP servers](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context). For connector connections and policies, use the product that owns the connector.

## Choose the next task

| What you need to do | Start with |
|---|---|
| Install the plugin or make it available to intended users | [Make your plugin available](deploy-plugin.md) |
| Govern plugin availability, access requests, or blocking | [Govern plugin access and connections](manage.md) |
| Check usage, task success, or failures | [Monitor your plugin](monitor-plugin.md) |
| Evaluate, fix, and release an updated package | [Improve and update your plugin](improve-plugin.md) |
| Take down the plugin and clean up resources | [Retire your plugin](retire-plugin.md) |

Follow the instructions for your publishing or sharing method. Complete only the review, approval, acquisition, installation, assignment, enablement, and connection actions that apply.

## When a capability has its own controls

Manage the plugin as the product. Start with its availability and access settings, and use the administration map in [Manage plugins with Microsoft Agent 365](#manage-plugins-with-microsoft-agent-365) to find the right administration surface.

Plugin availability doesn't grant access to external services or data. Complete the authentication, consent, permissions, and connection steps required by the plugin's capabilities.

An included agent, connector connection, or remote MCP server can also have separate controls. Follow the owning product's guidance when those controls are necessary to manage the plugin. Don't assume that changing the plugin's settings changes every component, connection, or external service.

## Check that users can use the plugin

Before finishing setup, confirm that:

- Intended users can find or receive the expected plugin version.
- They can access each Microsoft 365 experience you intend to support.
- They can complete any required sign-in, consent, and connections.
- They can successfully perform the intended task.
- The plugin's access settings meet your organization's requirements.

Record the verified audience, experiences, plugin version, completed setup actions, and support owner.

If something prevents users from using the plugin, record the issue, its effect on the intended users, and the person responsible for resolving it.

## Related content

- [Publish or share your plugin](publish.md)
- [Manage plugins with Microsoft Agent 365](#manage-plugins-with-microsoft-agent-365)
- [Make your plugin available](deploy-plugin.md)
- [Govern plugin access and connections](manage.md)
- [Monitor your plugin](monitor-plugin.md)
- [Improve and update your plugin](improve-plugin.md)
- [Retire your plugin](retire-plugin.md)
