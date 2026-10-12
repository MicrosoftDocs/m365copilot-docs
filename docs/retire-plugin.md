---
title: Retire your Microsoft 365 Copilot plugin
description: Take down a Microsoft 365 Copilot plugin, remove access, clean up plugin-specific dependencies, and verify that retirement is complete.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: how-to
---

# Retire your plugin

Retire a plugin when people should no longer use it. Stop distribution and access, clean up resources used only by the plugin, and keep shared resources working.

The plugin owner coordinates retirement. Microsoft 365 administrators manage organizational access. Service owners clean up connections and external services.

## Before you begin

Decide whether you're retiring the plugin **in your organization** or **for all customers**. Ending a Marketplace offer and removing access in customer organizations are separate actions.

Identify:

- The plugin name and active package versions.
- How users received it: sharing, administrator upload, or Microsoft Marketplace.
- The affected users, organizations, and Microsoft 365 experiences.
- The connections and services it uses, including those shared with other solutions.
- The retirement date and owners responsible for completing the work.

Keep any records your organization's retention policies require.

## Plan the retirement

1. List every place where the plugin is published, shared, or installed. Check the plugin's status, availability, and installation in **Agents** > **Tools** > **Plugins**; see [Manage plugin availability for users](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#manage-plugin-availability-for-users).
1. Choose the actions needed to stop distribution and access.
1. Identify resources to remove and shared resources to preserve.
1. Assign an owner and completion date to each action.
1. Notify affected users and support teams. Include the retirement date and any replacement they should use.

For administration locations, see the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map.

## Stop distribution and access

Complete the actions needed for your retirement scope. You might need more than one. For example, block access and then remove an administrator installation.

| What you need to do | Action | Who acts |
| --- | --- | --- |
| Block access in your organization | [Block the plugin](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#block-a-tool) in **Agents** > **Tools** > **Plugins**. | Microsoft 365 administrator |
| Remove an administrator-deployed installation | [Uninstall the plugin](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#uninstall-a-tool). Also [restrict availability](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#manage-plugin-availability-for-users) or block access if users must not add it again. | Microsoft 365 administrator |
| Delete a package uploaded by your organization | [Delete the uploaded package](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#delete-a-tool). This action isn't available for Marketplace packages. | Microsoft 365 administrator |
| Stop direct sharing | Follow the authoring tool's removal procedure, where supported. Check whether recipients retain access and arrange [blocking](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#block-a-tool) when needed. For Cowork, see [Block a plugin that's already been shared](/microsoft-365/copilot/cowork/cowork-manage-plugins#block-a-plugin-thats-already-been-shared). | Plugin owner and administrator |
| End public distribution | Follow the applicable Partner Center offer procedure; start from [Publish your plugin through Microsoft Marketplace](publish-plugin-publicly.md). Notify customers and coordinate retirement of existing installations with their administrators. | Publisher and customer administrators |

After applying the controls:

1. Confirm that the plugin is blocked, removed, or no longer shared as planned.
1. [Review plugin access requests](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#review-plugin-access-requests) in **Agents** > **Tools** > **Requests** and assign an owner to resolve any that remain.
1. Check for any remaining distribution or access paths.

Blocking can take effect differently across Microsoft 365 experiences. In Cowork, a block applies to new conversations; conversations already using the plugin continue until they end. See [Block a plugin that's already been shared](/microsoft-365/copilot/cowork/cowork-manage-plugins#block-a-plugin-thats-already-been-shared).

Blocking the package also blocks its included agents, but leaves associated MCP servers and connectors available to other plugins. See [Block a tool](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#block-a-tool). If an agent also exists separately with its own Agent Registry controls, check the applicable [agent actions](/microsoft-365/admin/manage/agent-actions?context=/microsoft-365/copilot/extensibility/context).

## Clean up resources

Blocking or removing the plugin doesn't revoke consent, remove indexed data, or stop external services. For each resource, ask: **Does another solution still need it?**

| If the resource is... | Do this |
| --- | --- |
| Used only by the retired plugin | Have its owner revoke access and remove or disable it through the owning product. |
| Shared with another solution | Keep it working. Remove only access specific to the retired plugin. |
| Required for retention or another documented reason | Retain it with appropriate access restrictions, an owner, and a recorded reason. |

Review:

- Connections, permissions, consent, and service accounts. For user connector sign-in and consent in Cowork, see [Manage connector authentication](/microsoft-365/copilot/cowork/cowork-manage-plugins#manage-connector-authentication).
- App registrations, secrets, and certificates.
- Remote MCP servers and other hosted services. Before you [block an MCP server](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#block-or-allow-an-mcp-server), confirm that other plugins don't depend on it.
- Connector connections and indexed data. To review connection state before cleanup, see [View connection details](/microsoft-365/copilot/connectors/view-details?context=/microsoft-365/copilot/extensibility/context).
- Infrastructure, scheduled jobs, alerts, and support processes.

For an alpha Work IQ Dev Tools project, the [plugin guide](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/) describes `wiqd plugin delete` as tearing down resources provisioned for the selected environment. Check the command's effects before running it, then verify and clean up any remaining package records, connections, credentials, and external services through their owning products.

## Verify retirement

1. Ask a user who previously had access to try the plugin in each affected Microsoft 365 experience. Test in a new conversation; check active sessions according to that experience's documented behavior.
1. Confirm that distribution and sharing have stopped within the agreed scope.
1. Ask the administrator to confirm the intended plugin status in **Agents** > **Tools** > **Plugins** and review any pending requests in **Agents** > **Tools** > **Requests**.
1. Confirm that plugin-specific access and resources have been removed, disabled, or retained under a documented exception.
1. Test that shared connections and services still work for other solutions.
1. Archive the source, final package, and release records according to your organization's requirements.

Retirement is complete when access ends within the agreed scope, distribution stops as planned, and resource cleanup is complete. Any retained resources and unresolved requests must have an owner and a documented next action.

## Record the retirement

Record:

- Plugin name, versions, retirement scope, and date.
- Distribution and access actions completed.
- Resources removed, disabled, or retained.
- Verification results.
- Remaining exceptions, owners, and follow-up dates.

## Related content

- [Monitor your plugin](monitor-plugin.md)
- [Improve and update your plugin](improve-plugin.md)
- [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365)
- [Manage plugins, skills, and MCP servers](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context)
- [Manage plugins for Copilot Cowork](/microsoft-365/copilot/cowork/cowork-manage-plugins)
