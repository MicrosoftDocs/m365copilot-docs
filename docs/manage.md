---
title: Manage agents, plugins, and connectors for Microsoft 365 Copilot
description: Learn about admin controls for Microsoft 365 Copilot extensibility
author: erikadoyle
ms.author: edoyle
ms.topic: conceptual
ms.date: 9/16/2024
---

# Manage extensibility for Microsoft 365 Copilot

This article describes the admin controls for managing different Microsoft 365 Copilot extensibility types. 

Microsoft 365 Copilot agents, plugins, and connectors are packaged, distributed, and managed in the same way as other apps that run across the integrated Microsoft 365 platform. At its core, the integrated Microsoft 365 app platform extends the Teams app platform to provide a [unified app model](extensions-are-apps.md) for extensibility within the Microsoft 365 ecosystem. App management controls for Microsoft 365 are also converging to the centralized Microsoft admin center. However, some necessary controls are accessible only from other admin centers.

## Microsoft admin center

All of the extensibility options for Microsoft 365 Copilot, including agents, plugins, and Graph connectors, can be [packaged and distributed as Microsoft 365 apps](./extensions-are-apps.md) that are centrally managed from the **Integrated Apps** section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)).

*Global Admin* and *Azure Application Admin* roles can deploy and uninstall apps, manage which apps are available to which users, and block apps in Microsoft admin center.

:::image type="content" source="./assets/images/mac-integrated-apps.png" alt-text="Screenshot of the 'Integrated apps' section of Microsoft admin center":::

From Microsoft admin center, admins can:

- Enable/disable Copilot extensibility for the whole organization through Microsoft 365 admin center settings.
- Make available apps with agents for Copilot to specific users or groups.
- Install and uninstall apps with agents for Copilot for the whole organization or specific users or groups.
- Block or unblock apps with agents for Copilot for the whole organization.

To learn more about managing published Copilot agents and plugins, see [Manage extensions for Copilot in Microsoft admin center](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=/microsoft-365-copilot/extensibility/context).

## Agents

### Copilot agents

Regardless if they are built with Copilot Studio or Teams Toolkit, Copilot agents that are published to the organization or acquired from Microsoft Commercial Marketplace are managed through the **Integrated Apps** section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)).

However, Copilot Studio and Teams Toolkit have different development prerequisites that must be enabled by an admin before you can start building Copilot agents:

- For Copilot Studio, see [Prerequisites for creating Copilot agents with Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#prerequisites).

- For Teams Toolkit, see [Prerequisites for building agents and plugins with Teams Toolkit and other IDEs](./prerequisites.md#building-with-teams-toolkit).

### Custom agents

#### Built with Teams Toolkit

Custom agents created with Teams Toolkit and published to an organization or acquired from Microsoft Commercial Marketplace are centrally managed through the **Integrated Apps** section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)), just like Copilot agents. As Teams bot apps, they can also be managed them through **Teams admin center** ([admin.teams.microsoft.com](https://admin.teams.microsoft.com/)).

For required admin settings for developing custom agents, see [Prerequisites for building agents and plugins with Teams Toolkit and other IDEs](./prerequisites.md#building-with-teams-toolkit).

#### Created with Copilot Studio

You can publish custom agents (copilots) built with Copilot Studio to different [Power Platform environments](/microsoft-copilot-studio/environments-first-run-experience), which are managed from the **Power Platform admin center** ([admin.powerplatform.com](https://admin.powerplatform.com)).

Once published, you can make your copilot available in Teams to users in your organization. In order to do so, **Shared Power Apps** must be enabled for all (or a subset) of users in your organization in **Teams admin center** ([admin.teams.microsoft.com](https://admin.teams.microsoft.com/)). For more info, see [Manage Power Platform apps in Teams admin center](/microsoftteams/manage-power-platform-apps).

For more on publishing custom agents in Copilot Studio, see [Key concepts - Publish and deploy your copilot](/microsoft-copilot-studio/publication-fundamentals-publish-channels).

## Plugins

### Message extension plugins

Message extension plugins for Copilot can be built using Teams Toolkit and published to an organization or acquired from Microsoft Commercial Marketplace are centrally managed through the **Integrated Apps** section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)), just like regular Teams message extension apps. As Teams  apps, they can also be managed them through **Teams admin center** ([admin.teams.microsoft.com](https://admin.teams.microsoft.com/)).

For required admin settings for developing message extension plugins, see [Prerequisites for building agents and plugins with Teams Toolkit and other IDEs](./prerequisites.md#building-with-teams-toolkit).

### Copilot Studio actions

In order for end-users in a tenant to use actions (plugins) created and published with Copilot Studio, the tenant admin needs to:

- Deploy the **Copilot Studio** app through the **Integrated Apps** section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com))

- Enable the [Microsoft 365 Copilot setting](/microsoft-copilot-studio/copilot-plugins-overview#enable-or-disable-copilot-for-microsoft-365-in-power-platform-admin-center-admin) in **Power Platform admin center** ([admin.powerplatform.com](https://admin.powerplatform.com))

Tenant admins can also enable or disable different types of actions from working within Microsoft 365 Copilot. For more info, see [use actions in Microsoft Copilot](/microsoft-copilot-studio/copilot-plugins-overview#use-actions-in-microsoft-copilot).

### API plugins

[!INCLUDE [api-plugins-dc-only](includes/api-plugins-dc-only.md)]

Refer to [Copilot agents](#copilot-agents) for details on managing Copilot agents with API plugins.

## Graph connectors

Graph connectors that are packaged as Microsoft 365 apps and published to an organization or acquired from Microsoft Commercial Marketplace are centrally managed through the **Integrated Apps** section of **Microsoft admin center** ([admin.microsoft.com](https://admin.microsoft.com)), just like other Teams apps extended across Microsoft 365.

However, the **Teams admin center** ([admin.teams.microsoft.com](https://admin.teams.microsoft.com/)) provides additional admin controls to enable or disable the Graph connector within the app, so long as you implement a `graphConnector.notificationUrl` for your app to handle the enable / disable notifications. For more info, see [Simplify connector deployment in Teams admin center](/graph/connecting-external-content-deploy-teams?context=/microsoft-365-copilot/extensibility/context).

For admin settings for developing Graph connectors, see [Requirements for developing Microsoft graph connectors](./prerequisites.md#requirements-for-developing-microsoft-graph-connector).

## See also

[Set up your dev environment for Microsoft 365 Copilot](prerequisites.md)

[Publish extensions for Microsoft 365 Copilot](publish.md)


