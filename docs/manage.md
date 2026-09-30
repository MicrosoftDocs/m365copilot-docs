---
title: Govern access, tools, and connections for plugins and agents
description: Compare the controls for Microsoft 365 Copilot agent and plugin access, tools, data connections, and external services.
#customer intent: As a Microsoft 365 administrator, I want to compare the governance controls available for each plugin and agent type so that I can apply the right control on the right surface.
author: erikadoyle
ms.author: edoyle
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: product-comparison
---

# Govern access, tools, and connections for plugins and agents

<!-- markdownlint-disable MD033 -->
<a id="manage-agents-for-microsoft-365-copilot"></a>
<!-- markdownlint-enable MD033 -->

Governance applies throughout the lifecycle. It controls who can access a plugin or agent, which tools it can use, which data and services it can reach, and whether it remains available. The control you need depends on the object, authoring tool, connection model, and Microsoft 365 experience.

Use this article to find the control that fits your decision and the administration surface that provides it. For the rollout decision, see [Make plugins and agents available and govern access](govern-plugins.md).

Many agents are distributed as Microsoft 365 apps and managed in the Microsoft 365 admin center. Other agent and component types use product-specific administration surfaces. Start with the object and control you need instead of assuming that one surface governs the complete plugin.

> [!NOTE]
> Administrators who need an end-to-end lifecycle map should begin with [Administer Microsoft 365 Copilot plugins and agents](administrator-guide.md).

## Identify what you're controlling

| Object | Typical controls |
|---|---|
| Plugin package | Availability, assignment, blocking, and removal |
| Agent | Review, approval, sharing, assignment, ownership, and lifecycle |
| Skill or MCP server | Installation, availability, blocking, runtime control, and removal |
| Connector package | App availability, assignment, and removal |
| Connector connection | Authentication, users, content, schema, synchronization, and operational health |
| External service | Account access, consent, credentials, and revocation |

Applying a package-level control doesn't necessarily change a component, connection, or external service. Name the object and intended effect before you apply a control.

## Control availability and assignment

Availability or assignment determines who is permitted to acquire or use an item through the supported path. Blocking is a stronger administrative control. Follow the product-specific procedure to determine its effects on visibility, existing installations, active sessions, dependent packages, components, and external services.

| Control | Objects it applies to | Where to apply it |
|--|--|--|
| Agent access, assignment, availability, and removal | Agents distributed as integrated apps | [Manage agents in Microsoft 365 admin center](/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps?context=/microsoft-365/copilot/extensibility/context) |
| Review and approval | Submitted and requested agents | [Manage agent requests](/microsoft-365/admin/manage/agent-requests?context=/microsoft-365/copilot/extensibility/context#actions-for-requested-agents) |
| Inventory and ownership | Agents from Microsoft, partners, your organization, and individual creators | [Manage agent registry](/microsoft-365/admin/manage/agent-registry?context=/microsoft-365/copilot/extensibility/context#view-agent-registry) |
| Organization settings, including allowed agent types, policy templates, and user access | Agents | [Agent settings](/microsoft-365/admin/manage/agent-settings?context=/microsoft-365/copilot/extensibility/context) |
| Sharing limits | Agents that creators share with the organization | [Agent settings: sharing](/microsoft-365/admin/manage/agent-settings?context=/microsoft-365/copilot/extensibility/context#sharing) |
| Item-level permissions | Agents built with SharePoint | [Manage access to agents built with SharePoint](/sharepoint/manage-access-agents-in-sharepoint) |
| Cowork plugin deployment, availability, sharing, blocking, and user enablement | Cowork plugin packages | [Manage plugins for Copilot Cowork](/microsoft-365/copilot/cowork/cowork-manage-plugins) |

## Control tools and components

Use [Manage tools for agents](/microsoft-365/admin/manage/manage-tools-for-agent?context=/microsoft-365/copilot/extensibility/context#tool-actions) to control plugins, skills, MCP servers, connectors, and other supported tools independently of the agents that reference them.

## Configure connections and consent

Use [Deploy Copilot connectors](/microsoft-365/copilot/connectors/deployment-overview#deploy-a-connector) to configure a connection's access, content, and synchronization. When another administrator needs connector-specific Microsoft Graph permissions, see [Grant administrative rights to AI Administrators](connector-admin-delegation.md).

Also review the Microsoft Entra consent and external-service permissions recorded during publishing and deployment. Blocking a package or agent doesn't necessarily revoke an external account, credential, or consent grant.

## Block, remove, or retire

Choose the action that matches the object and intended effect:

- Block or unassign a package or agent to stop organizational availability.
- Disable a tool when the component must be unavailable independently of an agent that references it.
- Disable or delete a connector connection when synchronization and indexed content must be addressed.
- Revoke consent, credentials, and external-service access when the dependency must no longer be usable.
- Follow [Monitor, update, and retire your plugin or agent](improve-plugin.md) to plan communication, replacement, data handling, and rollback.

## Product-specific details

### Microsoft 365 admin center

Agents for Microsoft 365 Copilot can be packaged and distributed as Microsoft 365 apps that are centrally managed from the **Copilot** section of **Microsoft 365 admin center** ([admin.microsoft.com](https://admin.microsoft.com)).

:::image type="content" source="./assets/images/mac-agents.png" alt-text="Screenshot of the 'Agents' section of Microsoft 365 admin center." lightbox="./assets/images/mac-agents.png":::

From Microsoft 365 admin center, admins can:

- Manage access to Copilot and Copilot agents for the whole organization or specific users or groups.
- Review and approve agents submitted to the org catalog.
- Monitor and find information about agents that have been shared across the organization.

To learn more, see [Manage agents in the Microsoft 365 admin center](/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps?context=/microsoft-365/copilot/extensibility/context). To act on agents that are waiting for review, update, or activation, see [Manage agent requests](/microsoft-365/admin/manage/agent-requests?context=/microsoft-365/copilot/extensibility/context).

### Agents built with Microsoft 365 Agents Toolkit

Both [declarative agents](./build-declarative-agents.md) and [custom engine agents](/microsoftteams/platform/teams-ai-library-tutorial?context=/microsoft-365/copilot/extensibility/context) built with [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) that are published to the organization or acquired from Microsoft Commercial Marketplace are managed through the **Integrated Apps** section of **Microsoft 365 admin center** ([admin.microsoft.com](https://admin.microsoft.com)).

| Control | Core scenario | Related content |
|--|--|--|
| Upload custom apps | Sideload custom apps to your tenant | [Microsoft 365 Agents Toolkit requirements](prerequisites.md#microsoft-365-agents-toolkit-requirements) |
| Integrated apps | Manage availability of Copilot agents in your tenant | [Manage agents in the Microsoft 365 admin center](/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps?context=/microsoft-365/copilot/extensibility/context) |

### Agents built with Agent Builder in Microsoft 365 Copilot

You can share declarative agents for Microsoft 365 Copilot that you build by using [Agent Builder](agent-builder.md) with your entire organization or with specific users. You can manage these agents and the users you share them with.

|Control | Core scenario | Related content|
|--|--|--|
| Allow the following users access to Copilot agents | Enable or disable the entry point for Agent Builder in Microsoft 365 Copilot (*Create an agent*) | [Manage agents in the Microsoft 365 admin center](/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps?context=/microsoft-365/copilot/extensibility/context) |
| Org-wide sharing | Allow all users, only selected users or groups, or no users to share agents with the organization | [Governance and admin controls](agent-builder-share-manage-agents.md#governance-and-admin-controls) and [Agent settings: sharing](/microsoft-365/admin/manage/agent-settings?context=/microsoft-365/copilot/extensibility/context#sharing) |
| Share | Manage access to your agent within your organization | [Publish and manage agents](agent-builder-share-manage-agents.md#share-an-agent) |

Changes to the org-wide sharing control apply to new sharing actions. Agents that creators already shared remain accessible until someone updates their sharing settings.

### Agents built with Microsoft Copilot Studio

[Microsoft 365 Copilot agents built with Microsoft Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365/copilot/extensibility/context) can be shared with specific users or submitted to the org catalog for administrator review. Follow the publishing route's documentation to determine which administration action applies.

|Control | Core scenario | Related content|
|--|--|--|
| Copilot Studio User License | Enable users in your organization to create and manage agents with Microsoft Copilot Studio | [Assign licenses and manage access to Copilot Studio](/microsoft-copilot-studio/requirements-licensing) |
| Manage access to Microsoft Power Platform apps| Enable an existing Copilot Studio agent for Microsoft 365 Copilot | [Connect and configure an agent for Teams and Microsoft 365](/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams#prerequisites) |
| Integrated apps | Manage availability of Copilot agents in your tenant | [Manage agents in the Microsoft 365 admin center](/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps?context=/microsoft-365/copilot/extensibility/context) |
| Security and governance (multiple controls) | Review the full list of Copilot Studio security and governance controls | [Key concepts - Copilot Studio security and governance](/microsoft-copilot-studio/security-and-governance) |

### Agents built with SharePoint

[Agents that are created for SharePoint](https://support.microsoft.com/office/create-and-edit-an-agent-d16c6ca1-a8e3-4096-af49-67e1cfdddd42) sites are represented as [`.agent` files](https://support.microsoft.com/office/create-and-edit-an-agent-d16c6ca1-a8e3-4096-af49-67e1cfdddd42#where-agent-file) in each site's *Site Assets* library. As such, permissions on the files govern who can access or edit the agents.

|Control | Core scenario | Related content|
|--|--|--|
| Billing | Understand agents pricing | [Comparison of Copilot licenses, pay-as-you-go billing, and the trial promotion](/sharepoint/get-started-sharepoint-agents#comparison-of-copilot-licenses-pay-as-you-go-billing-and-the-trial-promotion) |
| Microsoft 365 Copilot license details | Control user access to agents | [Manage access to agents built with SharePoint](/sharepoint/manage-access-agents-in-sharepoint) |
| Org settings | Set up pay-as-you-go billing for agents built with SharePoint in the Microsoft 365 admin center | [Use agents with pay-as-you-go billing](/sharepoint/sharepoint-agents-azure-billing) |
| PowerShell cmdlet | View status and details on all active and available Copilot agents in the tenant | [Get-SPOCopilotAgentInsightsReport](/powershell/module/sharepoint-online/get-spocopilotagentinsightsreport) |

### Copilot connectors

[Microsoft 365 Copilot connectors](./overview-copilot-connector.md) can be connected directly to your organizational Microsoft 365 Copilot experience with the Microsoft Graph API, or packaged as part of a Microsoft 365 app for publish to your organization or submission to Microsoft Commercial Marketplace. Depending on the control, Copilot connectors are managed from Microsoft Entra admin center, Microsoft 365 admin center, and Teams admin center.

Keep package-level availability separate from the controls that apply to a deployed connection. Managing the availability of an app package that includes a connector is a different operation from configuring the connection's users, content, and sync behavior.

| Control | Core scenario | Related content |
|--|--|--|
| App registrations | Register an application and grant admin consent for the required Microsoft Graph permissions | [Requirements for Copilot connectors](./overview-copilot-connector.md#create-your-own-synced-copilot-connector) |
| Administrative delegation (optional) | Let AI Administrators register applications and consent to connector permissions without a Global Administrator | [Grant administrative rights to AI Administrators](connector-admin-delegation.md) |
| Search & intelligence | Ensure that Copilot connectors that you intend for Microsoft Search and Microsoft 365 Copilot are enabled for inline results | [Manage connector results in All vertical](/microsoftsearch/connectors-in-all-vertical) |
| Copilot connector management | Enable or disable a Copilot connector, and configure its users, content, and sync settings | [Deploy connectors in the Microsoft 365 admin center](/microsoft-365/copilot/connectors/deployment-overview) |

## Understand control boundaries

Applying a control to one object doesn't necessarily change the others that a plugin brings together.

- Connector, MCP server, agent, and application controls can use different administration surfaces and enforcement mechanisms.
- Reports, audit information, dependency impact, and operation-level controls can vary by object and by Microsoft 365 experience.
- A per-user connection isn't the same as organization-level installation or deployment.
- An agent can exist in more than one distribution path at the same time. An agent built with Agent Builder tracks its shared version and its Agent Store version separately, so a change to one doesn't change the other.

Name the object you're controlling and the effect you expect before you apply a control.

> [!NOTE]
> Administration experiences and interface labels can vary during the rollout. Follow the linked product documentation for the current procedure and interface.

## Related content

- [Make plugins and agents available and govern access](govern-plugins.md)
- [Make plugins and agents available](deploy-plugin.md)
- [Monitor, update, and retire your plugin or agent](improve-plugin.md)
- [Choose how to publish and distribute your plugin](publish.md)
