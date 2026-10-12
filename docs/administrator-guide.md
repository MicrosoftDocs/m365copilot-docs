---
title: Administer Microsoft 365 Copilot plugins
description: Follow the Microsoft 365 Copilot plugin lifecycle as an administrator, from planning requirements through deployment, governance, monitoring, and retirement.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: overview
---

# Administer Microsoft 365 Copilot plugins

Define organizational requirements early, review the exact plugin package, make approved plugins available, configure required connections, apply controls throughout the lifecycle, monitor use, and retire plugins safely.

## Understand what you're administering

Identify the exact plugin package and the capabilities or dependencies that require separate controls.

| Object | What to identify |
|---|---|
| Plugin package | The exact package identity, version, publishing method, availability, and assignment state. |
| Included agent | The agent identity, version, owner, and applicable Agent Registry controls. |
| Skill | The declared skill, the package that includes it, and any separate availability control. |
| MCP server | The server, endpoint, exposed tools, authentication requirements, and applicable tool controls. |
| Connector | The connector model, connection, owner, supported experiences, and applicable data or policy controls. |
| Connection | The account, authentication method, user or organizational scope, and revocation procedure. |
| External service | The service owner, account access, consent, data handling, operational dependencies, and removal procedure. |

These objects can use different administration surfaces and enforcement mechanisms. Controlling one object doesn't automatically control every referenced component, connection, external service, or runtime dependency. To identify who acts next, see the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map.

## Follow the plugin lifecycle

| Stage | What you need to do |
|---|---|
| Prepare to build your plugin | Define allowed audiences, identity and consent requirements, data boundaries, licensing, support, governance outcomes, and permitted capabilities. |
| Build or reuse capabilities | Provide approved development environments, registrations, permissions, data access, test users, and external-service requirements. |
| Package and test | Review the package identity, ownership, declared components, permissions, data flows, dependencies, test evidence, limitations, and support information. |
| Publish or share | Confirm the supported method, intended audience, acquisition or approval process, assignment model, ownership, and support responsibilities. |
| Make available and govern | Complete only the required review, acquisition, assignment, enablement, connection, access, tool, and blocking actions for the selected method. |
| Monitor, update, and retire | Monitor available signals, evaluate behavior when appropriate, review updates, adjust access, investigate issues, transfer ownership where supported, and retire the solution and its dependencies safely. |

## Operate approved plugins

Start with the publishing record supplied by the builder or publisher. Confirm:

- Object identity and exact version.
- Publisher or creator identity and any publisher provenance supplied by the method.
- Publishing or sharing method.
- Intended users or groups.
- Supported Microsoft experiences.
- Included agents, skills, connectors, MCP servers, and other components, including their descriptions and dependencies.
- Required licenses.
- Permissions and consent.
- Connections and external services.
- Known limitations.
- Support and update owner.

Complete only the actions required by the selected method. Not every method requires review, acquisition, assignment, enablement, or connection. A per-user connection isn't the same as organization-level deployment. Package availability and component or runtime controls can be separate operations.

| What you need to do | Start with |
|---|---|
| Complete the review, acquisition, assignment, enablement, connection, and access actions the method requires | [Make your plugin available](deploy-plugin.md) |
| Identify an included capability or dependency that requires a separate control | [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) |
| Monitor use and investigate problems | [Monitor your plugin](monitor-plugin.md) |
| Evaluate, improve, and roll out an update | [Improve and update your plugin](improve-plugin.md) |
| Take down the plugin and clean up resources | [Retire your plugin](retire-plugin.md) |

These actions can use different administration surfaces and enforcement mechanisms. Don't assume that one approval, assignment, or block propagates to every Microsoft experience or dependency unless the linked product procedure confirms it.

## Find administration guidance

- To distinguish Agent Registry from Tools Registry and direct package and capability tasks, see the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map.
- To complete method-specific rollout actions, see [Make your plugin available](deploy-plugin.md).
- To manage and restrict access over time, see [Govern plugin access and connections](manage.md).
- To investigate usage or failures, see [Monitor your plugin](monitor-plugin.md).
- To evaluate, improve, and release a change, see [Improve and update your plugin](improve-plugin.md).
- To take down the plugin, see [Retire your plugin](retire-plugin.md).

Use the linked product administration articles as the source of truth for current procedures, interface labels, availability, and enforcement behavior.

## Plan organizational readiness

- Define allowed distribution scopes and capability types in the [plugin solution brief](planning-guide.md).
- Establish review, approval, and exception processes.
- Assign support and lifecycle owners.
- Confirm [licensing and cost](cost-considerations.md) requirements.
- Review [data, privacy, and security](data-privacy-security.md), compliance, and external-service implications.
- Establish update, incident, ownership-transfer, and retirement procedures.

## Related content

- [Plugins for Microsoft 365 Copilot](plugins-overview.md)
- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Build or reuse capabilities for your plugin](build-reuse-plugin.md)
- [Publish or share your plugin](publish.md)
- [Test and validate your plugin](validate-plugin.md)
- [Make your plugin available and govern access](govern-plugins.md)
- [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365)
- [Make your plugin available](deploy-plugin.md)
- [Govern plugin access and connections](manage.md)
- [Monitor your plugin](monitor-plugin.md)
- [Improve and update your plugin](improve-plugin.md)
- [Retire your plugin](retire-plugin.md)
