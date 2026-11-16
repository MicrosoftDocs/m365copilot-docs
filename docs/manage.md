---
title: Govern access, tools, and connections for plugins and agents
description: Find the right controls for plugins, agents, MCP servers, individual tools, and connections, and understand the limits of package-level blocking.
#customer intent: As a Microsoft 365 administrator, I want to govern plugin access and apply required controls to its capabilities and dependencies.
author: erikadoyle
ms.author: edoyle
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.topic: how-to
---

# Govern access, tools, and connections for plugins and agents

Control access to the item you're administering: a plugin package, an agent, an MCP server, an individual tool, or a connection. Start with package controls for a plugin, then review the separate controls required by its agent, tools, and dependencies.

Use the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map to find the page for a task and identify when a capability has controls outside the package.

## Apply plugin controls

| Goal | Where | Procedure | Verify |
| --- | --- | --- | --- |
| Change who can use the plugin | **Agents** > **Tools** > **Plugins** > *plugin* > **Users** | [Manage plugin availability for users](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#manage-plugin-availability-for-users) | The intended audience can use it; users outside the scope can't. |
| Set allowed publisher categories | **Agents** > **Settings** > **Agent and plugin access** | [Manage plugin availability at the organization level](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#manage-plugin-availability-at-the-organization-level) | The selected category matches organizational policy. |
| Respond to access requests | **Agents** > **Tools** > **Requests** | [Review plugin access requests](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#review-plugin-access-requests) | The request is approved or rejected; verify the requester's resulting access. |
| Block the package | **Agents** > **Tools** > **Plugins** | [Block a plugin or skill](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#block-a-plugin-or-skill) | The plugin and any agent it contains are blocked. |
| Change an administrator installation | **Agents** > **Tools**; select the plugin | [Install](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#install-a-plugin-or-skill) or [uninstall](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#uninstall-a-plugin-or-skill) as needed. | The installation state matches the plan; review availability separately. |

Restricted plugins can remain discoverable and users can request access. Blocking is a separate package control, not the same operation as changing the user scope or removing an installation.

## Understand package and skill blocking

Blocking a plugin that contains an agent also blocks that agent. A package that contains an agent and a skill appears under both Tools and Agents as one entity; those views don't make its capabilities independently governed packages.

You can't block a single skill inside a plugin package today. Apply the package-level control when the skill is bundled. For a separately packaged skill, follow the applicable package controls in [Manage plugins, skills, and MCP servers](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#manage-plugins-and-skills).

Associated MCP servers and connectors can remain available to other plugins. Package blocking doesn't replace the controls for those services or revoke their credentials.

## Apply a component control when required

Use a separate control only when the plugin-level setting doesn't cover the access or behavior you need to manage.

| Object | Control and location | Guidance and boundary |
|---|---|---|
| Agent | **Agents** > **All agents** > **Registry** in the Microsoft 365 admin center | Use supported agent-specific availability, deployment, ownership, and lifecycle actions. See [Agent actions](/microsoft-agent-365/admin/agent-actions). A packaged agent can also have a record here. |
| Individual MCP tool | **Agents** > **Tools** > **Registry** > *MCP server* > **Tools** | Use [individual tool controls](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#manage-individual-tools-within-an-mcp-server) for supported registered MCP servers. This isn't skill-level blocking. |
| Registered MCP server | **Agents** > **Tools** > **Registry** > *MCP server* | Review the server and its exposed tools before applying a server-wide restriction. See [MCP server controls](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#block-or-allow-an-mcp-server). Review dependent solutions rather than assuming a package-level result. |
| Power Platform connector | Power Platform admin center for applicable policies | The [connector view in Tools Registry](/microsoft-agent-365/admin/agent-tools-overview#view-power-platform-connector-usage-preview) provides visibility, not management. See [Copilot Studio data policies](/microsoft-copilot-studio/admin-data-loss-prevention). |
| Connection or account | The product that owns authentication and the connection | Manage sign-in, authorization, source permissions, connection scope, and revocation separately. For user service connections, see [Connect to plugin services in Cowork](/copilot/cowork/cowork-plugins#connect-to-plugin-services). |
| App registration or application permission | Microsoft Entra admin center, as applicable | Review permissions and consent independently of package availability. See [Grant tenant-wide admin consent](/entra/identity/enterprise-apps/grant-admin-consent). |
| Remote service | The server's hosting and administration environment | Its owner manages runtime availability, credentials, security, logging, and service configuration. |

Individual MCP tool controls are rolling out and apply only to supported MCP servers registered on Agent 365. A server that doesn't support tool discovery doesn't provide individual tools to manage in that view.

API and MCP plugins used as declarative agent actions remain available only to the containing agent. Don't treat these actions as independently available capabilities of the outer plugin package.

Blocking or uninstalling a plugin doesn't necessarily stop a remote service, revoke consent, remove indexed connector data, or prevent another plugin from using the same MCP server or connector. Check the documented effect of each action.

## Verify the governance outcome

1. Confirm that the plugin has the intended status and user scope.
1. Test an allowed user and, when access is restricted, a user outside the scope in a new conversation.
1. Verify that required agent, connection, permission, and remote-service controls enforce the intended access.
1. Review access requests and assign an owner and next action to any that remain.
1. Record the applied controls, exceptions, remaining dependencies, and owner.

> [!NOTE]
> Follow the procedure for the specific item and product. For an existing standalone agent, start with [Agent Registry](/microsoft-agent-365/admin/agent-registry-overview). For a separately managed skill or MCP server, use [Manage plugins, skills, and MCP servers](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers).

## Next step

> [!div class="nextstepaction"]
> [Monitor, update, and retire your plugin or agent](improve-plugin.md)

## Related content

- [Make plugins and agents available and govern access](govern-plugins.md)
- [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365)
- [Make plugins and agents available](deploy-plugin.md)
- [Monitor your plugin](monitor-plugin.md)
- [Monitor, update, and retire your plugin or agent](improve-plugin.md)
- [Retire your plugin](retire-plugin.md)
