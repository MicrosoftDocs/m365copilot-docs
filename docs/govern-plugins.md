---
title: Make Microsoft 365 Copilot Plugins and Agents Available and Govern Access
description: Identify who acts after publishing and which product-specific procedures make a Microsoft 365 Copilot plugin or agent available, usable, and governed.
author: erikadoyle
ms.author: edoyle
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: overview
---

# Make plugins and agents available and govern access

<!-- markdownlint-disable MD033 -->
<a id="govern-plugins-and-agents-for-microsoft-365-copilot"></a>
<!-- markdownlint-enable MD033 -->

Publishing doesn't always make a plugin or agent available to users. Use this page to determine who acts next, which rollout actions apply, and which product-specific procedure to follow.

Don't apply an agent, app, tool, or connector control to a different object unless its documentation says that the control applies.

> [!NOTE]
> Administrators who need an end-to-end lifecycle map should begin with [Administer Microsoft 365 Copilot plugins and agents](administrator-guide.md).

## Follow the post-publishing lifecycle

The lifecycle after publishing is **published or shared → available and usable by the intended audience → operated and improved → updated and rechecked, or retired**.

Governance applies throughout the lifecycle. Updates loop back through the applicable component, package, publishing, availability, access, and experience checks.

The exact actions within the lifecycle vary. For example, Work IQ Dev Tools documents publishing a declarative-agent package to the org catalog so that other users can install it. Agent Builder documents a separate org catalog submission, administrator review, Agent Store publication, and user installation flow.

## Start from the publishing record

Before anyone acts, identify:

- The plugin or agent identity and exact version.
- The publisher or creator identity and any publisher provenance supplied by the route.
- The public, organizational, or direct-sharing route used.
- The intended users or groups and target Microsoft 365 experiences.
- The included agents, skills, connectors, MCP servers, and other components, including their descriptions and dependencies.
- Required licenses, permissions, consent, connections, and external services.
- The people responsible for availability, administration, support, updates, and removal.
- Known limitations and evidence that the exact version is ready for the selected audience.

If this information is missing, return to [record the publishing result](publish.md#record-the-publishing-result).

> [!IMPORTANT]
> **Publisher responsibility:** Supply the exact publishing record, requirements, limitations, and support owner.
>
> **Administrator responsibility:** Verify that record, then complete only the availability, approval, assignment, connection, and governance actions required by the distribution route.

## Choose the next owner and action

| Situation | Next owner | Next action |
|---|---|---|
| Shared directly with named users or groups | Publisher or owner and intended users | Confirm access and complete any required connections. |
| Submitted to an organizational catalog | Administrator | Review, approve or publish, assign, and configure the solution as required. |
| Published publicly through Microsoft Marketplace | Customer administrator, when the organization requires administration | Acquire, assign, enable, and configure the solution as required. |
| Connector deployed directly | Administrator | Create and configure the connector connection, then assign the intended users or groups. |

## Continue with the required task

| What you need to do | Start with |
|---|---|
| Complete the review, installation, assignment, enablement, or connection actions required by the route, and verify that intended users can find and use the object | [Make plugins and agents available](deploy-plugin.md) |
| Decide which access, tool, data-connection, external-service, sharing, or blocking control applies | [Govern access, tools, and connections](manage.md) |
| Monitor outcomes, investigate issues, evaluate when appropriate, release an update, restrict access, or retire the object | [Monitor, update, and retire your plugin or agent](improve-plugin.md) |

## Keep lifecycle actions distinct

Use the term that matches the action documented for the object.

| Action | Result |
|---|---|
| Review or approve | A submitted or requested object is accepted for the applicable organizational workflow |
| Acquire | A published offer or item enters the organization's applicable acquisition flow |
| Install or deploy | The package or object is placed into the applicable organization, environment, or product surface through its documented procedure |
| Make available or assign | The permitted users or groups are selected for the supported access or installation path |
| Enable | The object or capability is permitted to operate in a specific Microsoft 365 experience |
| Connect | An endpoint, account, identity, permission, or data-source relationship is configured |
| Use | An intended user invokes the object or capability in a supported Microsoft 365 experience |
| Block | The product-specific blocking control is applied to the named object; its effects on related objects and runtimes depend on the owning product |
| Govern | Access, tool, data-connection, external-service, sharing, assignment, policy, or blocking controls are applied throughout the lifecycle |
| Monitor or evaluate | Usage, health, feedback, inventory, or quality evidence is reviewed |
| Update or republish | A tested new version is released through its supported publishing route |
| Retire or remove | End availability through the supported blocking, uninstallation, or deletion procedure. Identify any separate cleanup required for connections, registrations, external services, and ownership records. |

Not every route requires every action. Approval is route-specific, and a per-user connection isn't an organization-level deployment.

Availability or assignment determines who is permitted to acquire or use an item through the supported path. Blocking is a stronger administrative control. Its effects on visibility, existing installations, active sessions, dependent packages, components, and external services are product-specific.

## Identify the object before applying a control

A plugin can bring together objects that are managed separately.

In the linked Agent Tools guidance, *plugin* refers to a packaged API-integration tool managed on that page. Don't apply its actions to every component in a broader plugin.

| Object | Supported scope | Administration guidance |
|---|---|---|
| Agent | Install, uninstall, activate, block, unblock, delete, restore, permanently delete, and manage ownership where supported for that agent type | [Governance and lifecycle actions for agents](/microsoft-365/admin/manage/agent-actions?context=/microsoft-365/copilot/extensibility/context) |
| Submitted or requested agent | Review, publish, reject, activate, or process an update request according to its request state | [Manage agent requests](/microsoft-365/admin/manage/agent-requests?context=/microsoft-365/copilot/extensibility/context) |
| Object represented in Agent Tools, including a packaged plugin or skill, registered remote MCP server, or Power Platform connector | Available actions depend on the tool type. Follow the procedure for the specific object. Plugin and skill packages have package lifecycle actions; registered MCP servers have registration and runtime controls with current deletion limitations; the Power Platform connector view provides usage visibility and routes policy management to the Power Platform admin center. | [Manage tools for agents](/microsoft-365/admin/manage/manage-tools-for-agent?context=/microsoft-365/copilot/extensibility/context) |
| Copilot connector connection | Deploy the connection and configure its users, content, and synchronization settings | [Deploy Copilot connectors](/microsoft-365/copilot/connectors/deployment-overview?context=/microsoft-365/copilot/extensibility/context) |
| External service, app registration, or user connection | Configure or revoke access through the identity, service, and authentication procedure that owns the connection | [Configure authentication for MCP and API plugins](plugin-authentication.md) and the external service documentation |
| Agent built with SharePoint | Manage access through the SharePoint permissions that apply to the agent | [Manage access to agents built with SharePoint](/sharepoint/manage-access-agents-in-sharepoint) |

Use the linked articles as the source of truth for current procedures, permissions, interface labels, and supported states.

## Understand control boundaries

- Package-level availability and component-level runtime controls aren't necessarily the same operation.
- Assigning an agent doesn't automatically configure every connector, MCP server, API, or external service it uses.
- Blocking or removing one object doesn't necessarily stop an external service referenced by that object.
- Recoverable deletion of an agent retains its properties and associated resources during the recovery window. Permanent deletion and dependency cleanup are separate actions.
- Availability and enforcement can differ across Microsoft 365 experiences.
- Monitoring and evaluation for one agent or component doesn't establish plugin-wide coverage.

Before applying a control, name the object, the intended effect, and the procedure that establishes that effect.

> [!NOTE]
> Administration experiences and interface labels can vary during the rollout. Follow the linked product documentation for the current procedure and interface.

## Related content

- [Choose how to publish and distribute your plugin](publish.md)
- [Make plugins and agents available](deploy-plugin.md)
- [Govern access, tools, and connections](manage.md)
- [Monitor, update, and retire your plugin or agent](improve-plugin.md)
- [For administrators](administrator-guide.md)
