---
title: Govern Microsoft 365 Copilot plugin access and connections
description: Maintain, restrict, or revoke access to a Microsoft 365 Copilot plugin and apply separate controls when its capabilities require them.
#customer intent: As a Microsoft 365 administrator, I want to govern plugin access and apply required controls to its capabilities and dependencies.
author: erikadoyle
ms.author: edoyle
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: how-to
---

# Govern plugin access and connections

Control who can use your plugin over time. Start with the plugin's controls in the Microsoft 365 admin center; use separate capability controls only when the package setting doesn't cover the access you need.

Use the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map to find the page for a task and identify when a capability has controls outside the package.

## Apply plugin controls

| Goal | Where | Procedure | Verify |
| --- | --- | --- | --- |
| Change who can use the plugin | **Agents** > **Tools** > **Plugins** > **Users** | [Manage plugin availability for users](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#manage-plugin-availability-for-users) | The intended audience can use it; users outside the scope can't. |
| Set allowed publisher categories | **Agents** > **Settings** > **Agent and plugin access** | [Manage plugin availability at the organization level](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#manage-plugin-availability-at-the-organization-level) | The selected category matches organizational policy. |
| Respond to access requests | **Agents** > **Tools** > **Requests** | [Review plugin access requests](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#review-plugin-access-requests) | The request is approved or rejected; verify the requester's resulting access. |
| Stop use across the organization | **Agents** > **Tools** > **Plugins** | [Block a tool](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#block-a-tool) | The plugin is blocked; test access in a new conversation. |
| Restore use | **Agents** > **Tools** > **Plugins** | Follow the [supported plugin controls](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#manage-plugins-and-skills) for the affected package. | Its status and availability match the intended audience. |
| Change an administrator installation | **Agents** > **Tools** > **Plugins** | [Install](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#install-a-tool) or [uninstall](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#uninstall-a-tool) as needed. | The installation state matches the plan. |

Restricted plugins can remain discoverable and users can request access. Blocking is a separate package control. In Cowork, [blocking takes effect for new conversations](/microsoft-365/copilot/cowork/cowork-manage-plugins#block-a-plugin-thats-already-been-shared); conversations already using the plugin continue until they end.

## Apply a component control when required

Use a separate control only when the plugin-level setting doesn't cover the access or behavior you need to manage.

- **If an agent included in your plugin has applicable Agent Registry controls**, use those controls for agent-specific availability, deployment, ownership, requests, or lifecycle actions. See [Governance and lifecycle actions for agents](/microsoft-365/admin/manage/agent-actions?context=/microsoft-365/copilot/extensibility/context).
- **If your plugin requires a separately managed connector connection**, use the connector's product experience for connection, authentication, data-source, indexing, synchronization, or policy settings. For Power Platform connector visibility, see [Overview of the Tools page](/microsoft-365/admin/manage/agent-tools-overview?context=/microsoft-365/copilot/extensibility/context).
- **If your plugin references a remote MCP server**, use its hosting and administration environment for credentials, authorization, security, availability, logging, and runtime controls.
- **If you need to block a separately managed MCP server**, follow [Block or allow an MCP server](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#block-or-allow-an-mcp-server). Review linked plugins and other users before applying a server-wide control.
- **If your plugin uses an app registration, permission, account, or external service**, use the product that owns that setting.

Blocking or uninstalling a plugin doesn't necessarily stop a remote service, revoke consent, remove indexed connector data, or prevent another plugin from using the same MCP server or connector. Check the documented effect of each action.

## Verify the governance outcome

1. Confirm that the plugin has the intended status and user scope.
1. Test an allowed user and, when access is restricted, a user outside the scope in a new conversation.
1. Verify that required agent, connection, permission, and remote-service controls enforce the intended access.
1. Review access requests and assign an owner and next action to any that remain.
1. Record the applied controls, exceptions, remaining dependencies, and owner.

> [!NOTE]
> This article governs plugin packages and their included capabilities. For an existing standalone (unpackaged) item, use its product-specific administration guidance, such as [Agent Registry](/microsoft-365/admin/manage/agent-registry?context=/microsoft-365/copilot/extensibility/context) or [Manage plugins, skills, and MCP servers](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context).

## Next step

> [!div class="nextstepaction"]
> [Monitor your plugin](monitor-plugin.md)

## Related content

- [Make your plugin available and govern access](govern-plugins.md)
- [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365)
- [Make your plugin available](deploy-plugin.md)
- [Monitor your plugin](monitor-plugin.md)
- [Improve and update your plugin](improve-plugin.md)
- [Retire your plugin](retire-plugin.md)
