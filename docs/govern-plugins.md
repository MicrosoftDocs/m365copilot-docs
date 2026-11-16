---
title: Make plugins and agents available and govern access
description: Separate publishing, approval, availability, assignment, consent, connections, and removal, and find the right controls for plugins and agents.
author: erikadoyle
ms.author: edoyle
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.topic: overview
---

# Make plugins and agents available and govern access

Publishing a plugin or agent doesn't install it or give users access to its data and services. Complete the separate approval, availability, assignment, consent, and connection steps required by the distribution route. Administrators, owners, and users can have different parts of that work.

**If you built the plugin or agent**, give the responsible administrator or owner:

- The plugin or agent identity and exact version.
- The published listing, package, or product-specific submission details.
- The intended users or groups and supported Microsoft 365 experiences.
- Required licenses, permissions, consent, connections, and external services.
- Setup instructions and a support contact.

Some direct-sharing methods require no administrator action; others require review before broader use.

## Separate the setup and access steps

Use the publishing record and product-specific procedure to determine which steps apply. Don't treat one completed step as evidence that the others are complete.

| Step | What it accomplishes | Where it happens and who acts |
|---|---|---|
| Publish | Distributes the tested item through the selected route; submission can still be awaiting review | The publisher uses the authoring tool, Partner Center, or an administrator's Microsoft 365 upload route. Start with [Choose how to publish and distribute your plugin](publish.md). |
| Approve | Completes the review required by the route or an access request | In the Microsoft 365 admin center, administrators review plugin access and registered MCP server requests under **Agents** > **Tools** > **Requests**. Agent submissions use **Agents** > **All agents** > **Requests**. These aren't interchangeable approval queues. |
| Make available | Allows the item for the organization and intended audience | For plugins, administrators use **Agents** > **Settings** > **Agent and plugin access** for publisher categories and **Agents** > **Tools** > **Plugins** > *plugin* > **Users** for user availability. Agents have separate Agent Registry controls. |
| Assign | Delivers an administrator installation to the intended users or groups when required | In the Microsoft 365 admin center, use the plugin's installation procedure under **Agents** > **Tools**, or the applicable agent deployment action under **Agents** > **All agents** > **Registry**. Availability alone isn't an installation. |
| Consent | Grants the permissions required to access an application or service | An authorized administrator grants tenant-wide consent through the applicable permission flow or Microsoft Entra admin center. Users complete user consent when required. See [Grant tenant-wide admin consent](/entra/identity/enterprise-apps/grant-admin-consent). |
| Connect | Establishes the account or service connection required at runtime | Users or connection owners complete setup in the product that owns the connection. For example, see [Connect to plugin services in Cowork](/copilot/cowork/cowork-plugins#connect-to-plugin-services). Publication and administrator installation don't sign a user in. |
| Remove | Ends access or an installation within the agreed retirement scope | Administrators use the applicable plugin or agent removal controls in the Microsoft 365 admin center. Connection and service owners separately clean up dependencies through their owning products. See [Retire your plugin](retire-plugin.md). |

For rollout procedures, continue to [Make plugins and agents available](deploy-plugin.md). For ongoing restrictions and object-specific controls, see [Govern access, tools, and connections](manage.md).

## Manage plugins with Microsoft Agent 365

[Microsoft Agent 365](/microsoft-agent-365/overview?context=/microsoft-365/copilot/extensibility/context) is the administrative control plane for observing, governing, and securing agents and the tools they use. Use its controls in the [Microsoft 365 admin center](https://admin.microsoft.com/) to manage plugin packages, access, and requests.

Use the page that matches the object and task you're managing:

| Task | Go to |
|---|---|
| View or upload plugin packages and standalone skill packages | **Agents** > **Tools** > **Registry** |
| Install, uninstall, block, or delete a plugin, as supported for that item | **Agents** > **Tools**; select the plugin and its applicable action |
| Manage user availability for a plugin | **Agents** > **Tools** > **Plugins** > *plugin* > **Users** |
| Manage plugin availability by publisher category | **Agents** > **Settings** > **Agent and plugin access** |
| Review plugin access requests or standalone MCP server registration requests | **Agents** > **Tools** > **Requests** |
| View an agent record and its available actions | **Agents** > **All agents** > **Registry** |
| Review agent submissions, updates, or activation requests | **Agents** > **All agents** > **Requests** |

The inventories are related but not interchangeable:

- **Tools Registry** inventories plugin packages, skills, MCP servers, and connectors. For an overview, see [Overview of the Tools page](/microsoft-agent-365/admin/agent-tools-overview).
- **Agent Registry** inventories agents and provides agent-specific ownership, availability, deployment, and lifecycle controls. For the supported actions, see [Governance and lifecycle actions for agents](/microsoft-agent-365/admin/agent-actions).

For authoritative procedures, see [Manage plugins, skills, and MCP servers](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers), [Agent Registry](/microsoft-agent-365/admin/agent-registry-overview), and [Agent Requests](/microsoft-agent-365/admin/agent-requests).

A packaged agent can also have an Agent Registry record. For the effects of package blocking and the controls for individual objects, see [Govern access, tools, and connections](manage.md).

## Use the administration surface that owns the setting

> [!NOTE]
> This guidance covers plugin packages and their included capabilities. For an existing standalone (unpackaged) agent, use [Agent Registry](/microsoft-365/admin/manage/agent-registry?context=/microsoft-365/copilot/extensibility/context). For standalone skills or MCP servers, see [Manage plugins, skills, and MCP servers](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context). For connector connections and policies, use the product that owns the connector.

Package access, data policies, permissions, and service configuration are separate controls:

- **Microsoft 365 admin center (Agent 365 controls):** Plugin and agent inventories, supported approval and installation actions, availability, and tool controls, as shown in the administration map.
- **Power Platform admin center:** Applicable Copilot Studio and Power Platform connector data policies. See [Configure data policies for Copilot Studio agents](/microsoft-copilot-studio/admin-data-loss-prevention).
- **Microsoft Entra admin center:** Application permissions and tenant-wide consent when required.
- **Product and service settings:** Connection sign-in, source permissions, and remote-service configuration.

The [Power Platform connector view in Tools Registry](/microsoft-agent-365/admin/agent-tools-overview#view-power-platform-connector-usage-preview) provides visibility, not connector management. Package approval doesn't replace Power Platform policies or service permissions.

### When a capability has its own controls

Record the owner and required configuration for each separately managed connection or service. Complete its authentication, consent, and source-permission setup before testing the user's task.

For object-specific restrictions, use [Apply a component control when required](manage.md#apply-a-component-control-when-required).

## Check that users can use the plugin

Before finishing setup, confirm that:

- Intended users can find or receive the expected plugin version.
- They can access each Microsoft 365 experience you intend to support.
- They can complete any required sign-in, consent, and connections.
- They can successfully perform the intended task.
- The plugin's access settings meet your organization's requirements.

Record the verified audience, experiences, plugin version, completed setup actions, and support owner.

If something prevents users from using the plugin, record the issue, its effect on the intended users, and the person responsible for resolving it.

## Choose the next task

- To complete rollout, follow [Make plugins and agents available](deploy-plugin.md).
- To restrict access or manage individual objects, follow [Govern access, tools, and connections](manage.md).
- To monitor, support, update, hand over, or retire the solution, start with [Monitor, update, and retire your plugin or agent](improve-plugin.md#choose-a-task).

## Related content

- [Choose how to publish and distribute your plugin](publish.md)
- [Manage plugins with Microsoft Agent 365](#manage-plugins-with-microsoft-agent-365)
- [Make plugins and agents available](deploy-plugin.md)
- [Govern access, tools, and connections](manage.md)
- [Monitor your plugin](monitor-plugin.md)
- [Monitor, update, and retire your plugin or agent](improve-plugin.md)
- [Retire your plugin](retire-plugin.md)
