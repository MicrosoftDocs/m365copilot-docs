---
title: Overview of Copilot Studio agent builder
description: Learn how to use Copilot Studio agent builder to build declarative agents.
author: jasonxian-msft
ms.author: jasonxian
ms.topic: conceptual
---

# Overview of Copilot Studio agent builder

The Copilot Studio agent builder in Microsoft 365 Copilot enables you to build Copilot agents (also known as [declarative agents](overview-declarative-agent.md)) for [Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-overview) easily and quickly.

> [!NOTE]
> Copilot Studio agent builder offers an immediate, interactive AI development experience within Microsoft 365 Copilot, which is perfect for quick and straightforward projects. If you need more advanced capabilities like Actions to integrate external services, we recommend that you use the full [Microsoft Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext), which provides a comprehensive set of tools and features for more complex requirements.

Use Copilot Studio agent builder to create and customize Copilot agents that can be used with Microsoft 365 Copilot to cover scenario-specific uses cases, such as:

- An agent that provides writing or presentation coaching that is tailored to organizational standards
- A team onboarding agent that responds with specific information about the user's new team and helps them complete onboarding tasks

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-starter.png" alt-text="Copilot Studio agent builder initial screen":::

You can specify dedicated knowledge sources, including content on SharePoint and information provided by Microsoft Graph connectors. You can also test the agent before deploying it for use in your conversations with Microsoft 365 Copilot or sharing it with others in your organization.

You can build agents from the following apps and sites:

- microsoft365.com/chat
- office.com/chat
- Microsoft Teams Desktop and web client

> [!NOTE]
> Agent builder is only available under the Work section of the Microsoft 365 Copilot app. It is not available on mobile versions of these apps and sites, or for Microsoft 365 Copilot locations that are not listed in this article.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-entry.png" alt-text="Copilot agent builder entry point in Microsoft 365 Copilot":::

## Prerequisites

You need a license for [Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/copilot/enterprise) with the **Copilot Studio in Copilot for M365** app enabled and a license for Microsoft 365. Admins can assign or unassign licenses for users in the [Microsoft 365 admin center](/microsoft-365/admin/manage/assign-licenses-to-users).

For information regarding regional availability and supported languages, see [Copilot Studio agent builder availability and language support](copilot-studio-agent-builder-availability.md).

## Governance

Admins can govern this feature by revoking access to the **Copilot Studio in Copilot for M365** application within the Microsoft 365 Copilot license in the Microsoft admin center. To learn more about the Microsoft 365 Copilot license, see [Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/copilot/enterprise). To learn more about how to assign or unassign licenses for users in the Microsoft 365 admin center, see [Assign or unassign licenses](/microsoft-365/admin/manage/assign-licenses-to-users).

## Data processing

Copilot Studio capabilities for Microsoft 365 are processed by the Copilot Studio service and can enable data flow both to and from Microsoft 365 and Copilot Studio. This data can include Microsoft 365 data, prompts, instructions, configurations, and output content. Use of the integrated Copilot Studio and Microsoft 365 services is governed by the respective [product terms](https://go.microsoft.com/fwlink/?linkid=2173816) and compliance commitments.

## Compliance

For information about data subject rights and responding to requests to rectify personal data, see [Personal data requests for Copilot Studio](/microsoft-copilot-studio/personal-data-summary).

## Known limitations

The following are current known limitations:

- Only general web browsing, Microsoft Graph connectors, SharePoint sites, folders, and files can be specified as knowledge sources. You can upload your local folders and files into SharePoint. Specifying a specific public URL as a knowledge source isn't supported.
- Share with specific users in the organization only supports security groups and not individual users.
- Auto sharing SharePoint files and folders is only supported when sharing with specific security groups and not everyone in the organization. You need to manually update the file and folder permission that the agent uses to grant permission to the intended users for the agent to return information from those knowledge sources.
- Agent builder doesn't currently support [Lockbox](/power-platform/admin/about-lockbox) or [Customer Managed Keys](/azure/storage/common/customer-managed-keys-overview).
- Agents created via Copilot Studio agent builder can't be used in Teams Chat.

## Get support

To get support, select **Send feedback** in Microsoft 365 Copilot.

In your feedback ticket, provide details about the issue you're facing and include the following pieces of information in the feedback dialog:

- Specify that the issue is related to Copilot Studio.
- Provide the agent ID.
- Provide the tenant ID.
- Provide the session ID
- If the issue is related to the test pane or **Describe** tab, type "/debug" within the chat box and include the contents in your ticket.

You can find and copy these details in the Copilot Studio agent builder within the **Get support** section of the **Help** dropdown menu.

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-get-support-1.png" alt-text="Find the support details in agent builder":::

:::image type="content" source="assets/images/copilot-studio-agent-builder/embedded-authoring-get-support-2.png" alt-text="Copy the support details in agent builder":::

## Related content

- [Build agents with Copilot Studio agent builder](copilot-studio-agent-builder-build.md)
- [Publish and manage Copilot Studio agent builder agents](copilot-studio-agent-builder-publish.md)
- [Copilot Studio agent builder availability and language support](copilot-studio-agent-builder-availability.md)
