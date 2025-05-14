---
title: Manage agents for Microsoft 365 Copilot
description: Learn about admin controls for Microsoft 365 Copilot agents.
author: erikadoyle
ms.author: edoyle
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 03/14/2025
---

# Manage agents for Microsoft 365 Copilot

This article summarizes administrator controls for managing Microsoft 365 Copilot agents based on the different ways to build them.

Agents are packaged, distributed, and managed in the same way as other apps that run across the integrated Microsoft 365 platform. At its core, the integrated Microsoft 365 platform extends the Teams app platform to provide a [unified app model](agents-are-apps.md) for extensibility within the Microsoft 365 ecosystem. App management controls for Microsoft 365 are also converging to the centralized Microsoft 365 admin center. However, some necessary controls for Microsoft 365 Copilot agents are accessible only from other admin centers.

## Microsoft 365 admin center

Agents for Microsoft 365 Copilot can be [packaged and distributed as Microsoft 365 apps](./agents-are-apps.md) that are centrally managed from the **Integrated Apps** section of **Microsoft 365 admin center** ([admin.microsoft.com](https://admin.microsoft.com)).

*Global Admin* and *Azure Application Admin* roles can deploy and uninstall apps, manage which apps are available to which users, and block apps in Microsoft 365 admin center.

:::image type="content" source="./assets/images/mac-integrated-apps.png" alt-text="Screenshot of the 'Integrated apps' section of Microsoft 365 admin center":::

From Microsoft 365 admin center, admins can:

- Enable/disable Copilot agents for the whole organization through Microsoft 365 admin center settings.
- Deploy, make available, or block agents to the whole organization or specific users or groups.
- Review and approve agents submitted to the organizational catalog.
- Monitor and find information about agents that have been shared across the organization.

To learn more, see [Manage agents for Copilot in Microsoft 365 admin center](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=/microsoft-365-copilot/extensibility/context).

## Agents built with Microsoft 365 Agents Toolkit

Both [declarative agents](./build-declarative-agents.yml) and [custom engine agents](/microsoftteams/platform/teams-ai-library-tutorial?context=/microsoft-365-copilot/extensibility/context) built with Microsoft 365 Agents Toolkit ([an evolution of Teams Toolkit](https://aka.ms/M365AgentsToolkit)) that are published to the organization or acquired from Microsoft Commercial Marketplace are managed through the **Integrated Apps** section of **Microsoft 365 admin center** ([admin.microsoft.com](https://admin.microsoft.com)).

| Control | Core scenario | Related content |
|--|--|--|
| Upload custom apps | Sideload custom apps to your tenant | [Microsoft 365 Agents Toolkit requirements for Microsoft 365 Copilot agents](/microsoft-365-copilot/extensibility/prerequisites#teams-toolkit-requirements) |
| Integrated apps | Manage availability of Copilot agents in your tenant | [Manage agents in the Microsoft 365 admin center](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=/microsoft-365-copilot/extensibility/context#manage-agents-in-the-microsoft-365-admin-center) |

## Agents built with Copilot Studio agent builder in Microsoft 365 Copilot

[Declarative agents built with the built-in Copilot Studio agent builder](./copilot-studio-agent-builder.md) for Microsoft 365 Copilot can be shared to the organization or specific users and managed by the creator of the agent.

|Control | Core scenario | Related content|
|--|--|--|
| Allow the following users access to Copilot agents | Enable or disable the agent builder entrypoint in Microsoft 365 Copilot (*Create an agent*) | [Enable or disable Copilot extensibility](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=/microsoft-365-copilot/extensibility/context#enable-or-disable-copilot-extensibility) |
| Share | Manage access to your agent within your organization | [Publish and manage Copilot Studio agent builder agents](./copilot-studio-agent-builder-publish.md#share-the-agent) |

## Agents built with Microsoft Copilot Studio

[Microsoft 365 Copilot agents built with Microsoft Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=/microsoft-365-copilot/extensibility/context) can be shared to specific users or submitted to the organizational catalog for approval by the tenant admin. In both cases, tenant admins can manage availability of the agent from *Integrated apps* in Microsoft 365 admin center.

|Control | Core scenario | Related content|
|--|--|--|
| Copilot Studio User License | Enable users in your organization to create and manage agents with Microsoft Copilot Studio | [Assign licenses and manage access to Copilot Studio](/microsoft-copilot-studio/requirements-licensing) |
| Manage access to Microsoft Power Platform apps| Enable an existing Copilot Studio agent for Microsoft 365 Copilot | [Connect and configure an agent for Teams and Microsoft 365](/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams#prerequisites) |
| Integrated apps | Manage availability of Copilot agents in your tenant | [Manage agents in the Microsoft 365 admin center](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps?context=/microsoft-365-copilot/extensibility/context#manage-agents-in-the-microsoft-365-admin-center) |
| Security and governance (multiple controls) | Review the full list of Copilot Studio security and governance controls | [Key concepts - Copilot Studio security and governance](/microsoft-copilot-studio/security-and-governance) |

## Agents built with SharePoint

[Agents that are created for SharePoint](https://support.microsoft.com/office/create-and-edit-an-agent-d16c6ca1-a8e3-4096-af49-67e1cfdddd42) sites are represented as [`.agent` files](https://support.microsoft.com/office/create-and-edit-an-agent-d16c6ca1-a8e3-4096-af49-67e1cfdddd42#where-agent-file) in each site's *Site Assets* library. As such, permissions on the files govern who can access or edit the agents.

|Control | Core scenario | Related content|
|--|--|--|
| Billing | Understand SharePoint agents pricing | [Comparison of Copilot licenses, pay-as-you-go billing, and the trial promotion](/sharepoint/get-started-sharepoint-agents#comparison-of-copilot-licenses-pay-as-you-go-billing-and-the-trial-promotion) |
| Microsoft 365 Copilot license details | Control user access to SharePoint agents | [Manage access to SharePoint agents](/sharepoint/manage-access-agents-in-sharepoint) |
| Global administrator / AI administrator | Enable users without Microsoft 365 Copilot licenses to use and build SharePoint agents during the promotional trial | [Manage trial access to SharePoint agents with PowerShell](/sharepoint/manage-trial-agents-sharepoint-powershell) |
| Org settings | Set up pay-as-you-go billing for SharePoint agents in the Microsoft 365 admin center | [Use agents with pay-as-you-go billing](/sharepoint/sharepoint-agents-azure-billing) |
| PowerShell cmdlet | View status and details on all active and available Copilot agents in the tenant | [Get-SPOCopilotAgentInsightsReport](/powershell/module/sharepoint-online/get-spocopilotagentinsightsreport) |

## Microsoft Graph connectors

[Microsoft Graph connectors](./overview-graph-connector.md) can be connected directly to your organizational Microsoft 365 Copilot experience with the Microsoft Graph API, or packaged as part of a Microsoft 365 app for publish to your organization or submission to Microsoft Commercial Marketplace. Depending on the control, Microsoft Graph connectors are managed from Microsoft Entra admin center, Microsoft 365 admin center, and Teams admin center.

|Control | Core scenario | Related content|
|--|--|--|
| App registrations | Register an application and grant admin consent for the required Microsoft Graph permissions | [Requirements for Microsoft Graph connectors](./overview-graph-connector.md#requirements-for-microsoft-graph-connectors) |
| Search & intelligence | Ensure that Microsoft Graph connections that you intend for Microsoft Search and Microsoft 365 Copilot are enabled for inline results | [Manage connector results in All vertical](/microsoftsearch/connectors-in-all-vertical) |
| Graph Connector management| Enable or disable a Graph connector | [Simplify connector deployment in Teams admin center](/graph/connecting-external-content-deploy-teams?context=/microsoft-365-copilot/extensibility/context) |

## Related content

- [Publish agents for Microsoft 365 Copilot](publish.md)
