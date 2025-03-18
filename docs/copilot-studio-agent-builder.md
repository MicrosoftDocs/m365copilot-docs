---
title: Use Copilot Studio Agent Builder to Build Agents
description: Learn how to use Copilot Studio agent builder to build declarative agents.
author: jasonxian-msft
ms.author: jasonxian
ms.localizationpriority: medium
ms.date: 02/25/2025
ms.topic: conceptual
---

# Overview of Copilot Studio agent builder

The Copilot Studio agent builder in Microsoft 365 Copilot enables you to build agents (also known as [declarative agents](overview-declarative-agent.md)) for [Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-overview) easily and quickly.

Copilot Studio agent builder offers an immediate, interactive AI development experience within Microsoft 365 Copilot, which is perfect for quick and straightforward projects. If you need more advanced capabilities like Actions to integrate external services, we recommend that you use the full [Microsoft Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext), which provides a comprehensive set of tools and features for more complex requirements.

> [!NOTE]
> The capabilities available in Copilot Studio agent builder differ based on the user's license. For details, see [Agent capabilities for Microsoft 365 users](/microsoft-365-copilot/extensibility/prerequisites#agent-capabilities-for-microsoft-365-users).

Use Copilot Studio agent builder to create and customize agents that can be used with Microsoft 365 Copilot to cover scenario-specific uses cases, such as:

- An agent that provides writing or presentation coaching that is tailored to organizational standards
- A team onboarding agent that responds with specific information about the user's new team and helps them complete onboarding tasks

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-starter.png" alt-text="Copilot Studio agent builder initial screen":::

You can specify dedicated knowledge sources, including content on SharePoint and information provided by Microsoft Graph connectors. You can also test the agent before deploying it for use in your conversations with Microsoft 365 Copilot or sharing it with others in your organization.

You can build agents from the following apps and sites:

- microsoft365.com/chat
- office.com/chat
- Microsoft Teams Desktop and web client

> [!NOTE]
> Agent builder is available on both the Work and Web options on the Microsoft 365 Copilot app toolbar. It is not available on mobile versions of the apps and sites listed, or for Microsoft 365 Copilot locations that are not listed in this article.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-entry.png" alt-text="Agent builder entry point in Microsoft 365 Copilot":::

## Prerequisites

You need a license for [Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/copilot/enterprise) and a license for Microsoft 365. Admins can assign or unassign licenses for users in the [Microsoft 365 admin center](/microsoft-365/admin/manage/assign-licenses-to-users).

For information regarding regional availability and supported languages, see [Copilot Studio agent builder availability and language support](copilot-studio-agent-builder-availability.md).

## Governance

Agents you build via Copilot Studio agent builder are included in your Microsoft 365 Copilot license. These agents feature functionality that is a subset of what Microsoft 365 Copilot supports. To learn more about the Microsoft 365 Copilot license, see [Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/copilot/enterprise).

## Data processing

Copilot Studio capabilities for Microsoft 365 are processed by the Copilot Studio service and can enable data flow both to and from Microsoft 365 and Copilot Studio. This data can include Microsoft 365 data, prompts, instructions, configurations, and output content. Use of the integrated Copilot Studio and Microsoft 365 services is governed by the respective [product terms](https://go.microsoft.com/fwlink/?linkid=2173816) and compliance commitments.

## Data storage

Agents created via agent builder are stored in Cosmos DB on the organization's tenant. Copilot Studio agent builder calls Power Platform APIs, but it doesn't store data in Dataverse or consume Dataverse storage capacity.

## Compliance

For information about data subject rights and responding to requests to rectify personal data, see [Personal data requests for Copilot Studio](/microsoft-copilot-studio/personal-data-summary).

## Admin controls

Administrators can control whether Copilot Studio agent builder is available to users in their organization. For information about agent and agent builder admin controls, see [Manage agents for Microsoft 365 Copilot in Integrated Apps](/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps).

## Known limitations

The following are current known limitations:

- Only web browsing, Microsoft Graph connectors, SharePoint sites, folders, and files can be specified as knowledge sources. You can upload your local folders and files into SharePoint.
- Auto sharing SharePoint files and folders is only supported when sharing with specific security groups and not everyone in the organization. You need to manually update the file and folder permission that the agent uses to grant permission to the intended users for the agent to return information from those knowledge sources.
- Agent builder doesn't currently support [Lockbox](/power-platform/admin/about-lockbox) or [Customer Managed Keys](/azure/storage/common/customer-managed-keys-overview).
- Agents created via Copilot Studio agent builder can't be used in Teams Chat.
- If a tenant has disabled web content via the [Allow web search in Copilot](/copilot/microsoft-365/manage-public-web-access#controls-available-to-manage-web-search) policy, web content is blocked as a knowledge source in agent builder. However, the **Web content** toggle in the **Knowledge** pane is not disabled. This is a UI limitation. The **Allow web search in Copilot** policy takes precedence over the UI setting.

## Submit feedback

You can submit feedback from within agent builder to help contribute to product improvements for all users. Agent builder feedback is handled in the same way that Copilot feedback is handled. For more information about Copilot feedback, including what data is collected, how the data is handled, and what it's used for, see [Providing feedback about Microsoft Copilot with Microsoft 365 apps](https://support.microsoft.com/en-us/topic/providing-feedback-about-microsoft-copilot-with-microsoft-365-apps-c481c26a-e01a-4be3-bdd0-aee0b0b2a423).

You can submit feedback by using one of the following options:

- The thumbs-up or thumbs-down control on AI-generated responses in your agent test pane.
- The **Send feedback**, button if you encounter an RAI validation failure. For more information, see [Responsible AI validation checks](/microsoft-365-copilot/extensibility/rai-validation).
- The **Send Feedback** option in the menu on the top right, as shown in the following image.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-feedback-general.png" alt-text="Send feedback in agent builder":::

Administrators can define a cloud policy to control whether feedback is collected in their tenant, and whether optional data such as log files and screenshots can be included in user-initiated feedback. For more information, see [Cloud Policy in Microsoft 365 Apps admin center](/microsoft-365-apps/admin-center/overview-cloud-policy).

For general information, see [Microsoft feedback for your organization](https://learn.microsoft.com/en-us/microsoft-365/admin/misc/feedback-user-control?view=o365-worldwide).

## Get support

To get support, select **Send feedback** in Microsoft 365 Copilot.

In your feedback ticket, provide details about the issue you're facing and include the following pieces of information in the feedback dialog:

- Specify that the issue is related to Copilot Studio.
- Provide the agent ID.
- Provide the tenant ID.
- Provide the session ID
- If the issue is related to the test pane or **Describe** tab, type "/debug" within the chat box and include the contents in your ticket.

You can find and copy these details in the Copilot Studio agent builder within the **Get support** section of the **Help** dropdown menu.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-get-support-1-updated.png" alt-text="Find the support details in agent builder":::

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-get-support-2-updated.png" alt-text="Copy the support details in agent builder":::

## Related content

- [Build agents with Copilot Studio agent builder](copilot-studio-agent-builder-build.md)
- [Publish and manage Copilot Studio agent builder agents](copilot-studio-agent-builder-publish.md)
- [Copilot Studio agent builder availability and language support](copilot-studio-agent-builder-availability.md)
