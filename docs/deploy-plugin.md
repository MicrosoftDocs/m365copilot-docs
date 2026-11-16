---
title: Make plugins and agents available
description: Move from publication to administrator installation and user availability, then verify discovery, consent, connections, and use for plugins and agents.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.topic: how-to
---

# Make plugins and agents available

Move from a published or shared item to one that intended users can find and use. **Published doesn't mean installed.** Administrator approval, installation, user availability, consent, and connections are separate steps.

For a plugin package, start with the package's distribution route and availability controls. If it includes an agent, also check applicable Agent Registry controls. For a standalone agent, use its product-specific deployment procedure rather than assuming a plugin procedure applies.

## Before you begin

Have:

- The exact plugin package or agent identity and version.
- How the item was delivered: direct sharing, organization submission or upload, or Microsoft Marketplace.
- The intended users or groups and supported Microsoft 365 experiences.
- Required licenses, permissions, consent, connections, and external services.

If the package is still awaiting review, track its status before completing steps that require publication. If the publishing result is unclear, return to [Choose how to publish and distribute your plugin](publish.md).

## Choose the distribution method

Use the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map to locate the relevant controls. For a plugin, use the route that delivered your package. For a standalone agent, go to [Make an agent available](#make-an-agent-available).

### Direct sharing

Some authoring experiences let an owner share a plugin with specific people, groups, or an organization. Approval depends on the sharing method and audience.

1. Confirm that the owner shared the plugin with the intended audience. For Work IQ Dev Tools, `wiqd plugin share` publishes the plugin to the plugin registry for the selected audience. For other methods, follow the method-specific guidance to confirm where the plugin is published and who can access it.
1. Complete any review required by the sharing method and audience. Org-wide Cowork sharing requires administrator approval.
1. Have users complete any required acquisition, installation, sign-in, consent, or connections.
1. Verify that an intended user can find and use the plugin.

Direct sharing doesn't create a Microsoft Marketplace offer. Check the selected method before assuming the plugin appears in an organization-wide catalog.

### Organization submission

Use this route if an authoring tool already submitted the plugin to your organization, such as an organization app-catalog submission through `wiqd plugin publish`. Start with that submission, not the upload wizard.

1. Use the publishing record to identify the submitted item, version, and review status.
1. Complete the submission route's required review and approval process. Start with the tool-specific guidance in [Publish your plugin or agent to your organization](publish-plugin-organization.md#choose-a-submission-method). If review is pending, track that submission rather than uploading another copy to make it available.
1. After approval and publication, complete any required installation for the existing item. For a plugin managed through Tools, follow [Install a plugin or skill](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#install-a-plugin-or-skill) if it isn't already installed.
1. [Set availability for the intended users](#set-plugin-availability-for-users) and [complete required configuration](#complete-required-configuration).

For an agent's deployment actions, use [Make an agent available](#make-an-agent-available).

### Organization upload

Use this route when you select administrator upload as the publishing method, rather than submitting through an authoring tool.

1. Check whether the package is already uploaded, using its identity and version.
1. For a new upload, go to **Agents** > **Tools** > **Registry** > **Upload**. To review components, scope users, and complete installation, see [Upload plugins or skills](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#upload-plugins-or-skills).
1. For an existing uploaded package, skip the upload. If it isn't installed, see [Install a plugin or skill](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#install-a-plugin-or-skill).
1. [Set availability for the intended users](#set-plugin-availability-for-users).
1. [Complete required configuration](#complete-required-configuration) before verifying access.

For the submission and administrator handoff, see [Publish your plugin or agent to your organization](publish-plugin-organization.md). Uploading, installing, and setting availability don't complete user consent or connections.

### Microsoft Marketplace distribution

For a plugin published through Microsoft Marketplace:

1. Confirm the exact offer, publisher, and package version.
1. Follow the offer's customer acquisition and [administrator installation instructions](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#install-a-plugin-or-skill).
1. Confirm that the appropriate publisher category is allowed and [set user availability](#set-plugin-availability-for-users).
1. Complete the documented permissions, consent, connections, or customer configuration.
1. Verify that intended users can find and use the plugin.

Publication through Microsoft Marketplace doesn't automatically make the plugin available in every customer organization.

## Set plugin availability for users

After publication and any required approval or installation, the administrator:

1. Opens **Agents** > **Settings** > **Agent and plugin access** and checks that the applicable publisher category is allowed.
1. Goes to **Agents** > **Tools** > **Plugins** and selects the plugin.
1. Opens **Users**.
1. Selects **All users**, **No users**, or **Specific users and groups**, according to the rollout plan.
1. Reviews and saves the selection.

Follow [Manage plugin availability for users](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#manage-plugin-availability-for-users) and [organization-level publisher controls](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers#manage-plugin-availability-at-the-organization-level). An allowed publisher category doesn't replace the individual plugin's user scope.

## Make an agent available

Use **Agents** > **All agents** > **Registry** to find an agent's supported installation and deployment actions. For user scoping and permission details, see [Install agents](/microsoft-agent-365/admin/agent-actions#install-agents).

For an existing standalone agent, follow the procedure for its authoring product, such as [Agent Builder organization submission](agent-builder-submit-to-org-catalog.md) or [Copilot Studio distribution to Teams and Microsoft 365](/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams). These procedures aren't universal composed-plugin deployment procedures.

If a packaged agent also has an Agent Registry record, review its applicable controls as well as the plugin's settings. Don't assume that the inventories are one catalog.

## Complete required configuration

Configure a packaged agent, connector, remote MCP server, connection, permission, or external service separately only when the plugin requires that setting to work.

For component boundaries and task routing, see the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map.

Users then find or receive the item in a supported product, acquire or enable it when required, and complete sign-in, consent, and connections. For Cowork user steps, see [Use plugins with Copilot Cowork](/copilot/cowork/cowork-plugins), including [Connect to plugin services](/copilot/cowork/cowork-plugins#connect-to-plugin-services).

## Verify availability

1. Confirm that the expected plugin version is installed or shared with the intended audience.
1. Confirm that the intended users or groups have access.
1. Test the plugin in its supported Microsoft 365 experiences.
1. Verify any required sign-in, consent, connections, and external services.
1. Confirm that an intended user can successfully perform the intended task.
1. If the method restricts access to a selected audience, confirm that a user outside that audience can't use it.

If users can't access the plugin or agent, check its status, publisher-category policy, user availability, installation, and required connections. For API or MCP action sign-in and consent failures, see [Troubleshoot plugin authentication](plugin-authentication-troubleshooting.md).

Record the audience, experience, package or agent version, verification result, and owner of any issue.

## Next step

> [!div class="nextstepaction"]
> [Govern access, tools, and connections](manage.md)

## Related content

- [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365)
- [Choose how to publish and distribute your plugin](publish.md)
- [Govern access, tools, and connections](manage.md)
- [Monitor your plugin](monitor-plugin.md)
- [Monitor, update, and retire your plugin or agent](improve-plugin.md)
- [Retire your plugin](retire-plugin.md)
- [For administrators](administrator-guide.md)
