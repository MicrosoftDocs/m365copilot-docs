---
title: Make your Microsoft 365 Copilot plugin available
description: Complete the publishing-method and administration actions required to make a published or shared Microsoft 365 Copilot plugin available to its intended users.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: how-to
---

# Make your plugin available

Make a published or shared plugin available to its intended users. Complete only the review, installation, assignment, and access actions that the publishing or sharing method requires.

Start with the plugin package. Check separately managed agents, connectors, or remote MCP servers only when their settings are required for the plugin to work.

## Before you begin

Have:

- The exact plugin package identity and version.
- How the plugin was delivered: direct sharing, organization upload, or Microsoft Marketplace.
- The intended users or groups and supported Microsoft 365 experiences.
- Required licenses, permissions, consent, connections, and external services.

If the package is still awaiting review, track its status before completing steps that require publication. If the publishing result is unclear, return to [Publish or share your plugin](publish.md).

## Choose the distribution method

Use the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map to locate the relevant controls. Use the instructions for the method that delivered your package.

### Direct sharing

Some authoring experiences let an owner share a plugin with specific people, groups, or an organization. Approval depends on the sharing method and audience.

1. Confirm that the owner shared the plugin with the intended audience. For Work IQ Dev Tools, `wiqd plugin share` publishes the plugin to the plugin registry for the selected audience. For other methods, follow the method-specific guidance to confirm where the plugin is published and who can access it.
1. Complete any review required by that sharing method. For example, in Cowork, [organization-wide sharing requires administrator approval](/microsoft-365/copilot/cowork/cowork-manage-plugins#org-wide-sharing-requires-admin-approval); sharing with specific people doesn't require that approval.
1. Have users complete any required sign-in, consent, or connections.
1. Verify that an intended user can find and use the plugin.

Direct sharing doesn't create a Microsoft Marketplace offer. Check the selected method before assuming the plugin appears in an organization-wide catalog.

### Organization upload

When an administrator uploads the package to your organization:

1. In the Microsoft 365 admin center, go to **Agents** > **Tools** > **Registry**. [Upload the plugin package](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#upload-plugins-or-skills), review its components, and select the intended users.
1. If the plugin is already in the registry but isn't installed for those users, find it under **Agents** > **Tools** > **Plugins** and [install it](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#install-a-tool) for the intended audience.
1. Open **Users** and [confirm the availability scope](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#manage-plugin-availability-for-users).
1. If access is blocked by policy, check the **your organization** publisher category under **Agents** > **Settings** > **Agent and plugin access**.
1. Complete any required permissions, consent, connections, or external-service configuration.

For the administration procedures, see [Manage plugins, skills, and MCP servers](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context).

### Microsoft Marketplace distribution

For a plugin published through Microsoft Marketplace:

1. Confirm the exact offer, publisher, and package version.
1. Follow the offer's customer acquisition and installation instructions. If administrator installation applies, find the plugin under **Agents** > **Tools** > **Plugins** and follow [Install a tool](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context#install-a-tool).
1. Confirm that the appropriate publisher category is allowed under **Agents** > **Settings** > **Agent and plugin access** when organization policy restricts access.
1. Set user availability when the method requires administrator action.
1. Complete the documented permissions, consent, connections, or customer configuration.
1. Verify that intended users can find and use the plugin.

Publication through Microsoft Marketplace doesn't automatically make the plugin available in every customer organization.

## Complete required configuration

Configure a packaged agent, connector, remote MCP server, connection, permission, or external service separately only when the plugin requires that setting to work.

For component boundaries and task routing, see the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map.

## Verify availability

1. Confirm that the expected plugin version is installed or shared with the intended audience.
1. Confirm that the intended users or groups have access.
1. Test the plugin in its supported Microsoft 365 experiences.
1. Verify any required sign-in, consent, connections, and external services.
1. Confirm that an intended user can successfully perform the intended task.
1. If the method restricts access to a selected audience, confirm that a user outside that audience can't use it.

If users can't access the plugin, check its status, publisher-category policy, user availability, installation, and required connections. In Cowork, users can also [turn a plugin off for their own conversations](/microsoft-365/copilot/cowork/cowork-manage-plugins#how-users-interact-with-deployed-plugins). Record the audience, experience, package version, verification result, and owner of any issue.

## Next step

> [!div class="nextstepaction"]
> [Govern plugin access and connections](manage.md)

## Related content

- [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365)
- [Publish or share your plugin](publish.md)
- [Govern plugin access and connections](manage.md)
- [Monitor your plugin](monitor-plugin.md)
- [Improve and update your plugin](improve-plugin.md)
- [Retire your plugin](retire-plugin.md)
- [For administrators](administrator-guide.md)
