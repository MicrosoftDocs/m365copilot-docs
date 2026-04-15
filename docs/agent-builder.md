---
title: Agent Builder in Microsoft 365 Copilot
description: Learn how to use Microsoft 365 Copilot Agent Builder to build declarative agents.
author: jasonxian-msft
ms.author: jasonxian
ms.localizationpriority: medium
ms.date: 04/09/2026
ms.topic: article
ms.subservice: agent-builder
---

# Agent Builder in Microsoft 365 Copilot

Agent Builder in Microsoft 365 Copilot provides an easy way to build [declarative agents](overview-declarative-agent.md) for Microsoft 365. Agent Builder offers an immediate, interactive AI development experience that's perfect for quick and straightforward projects.

Use Microsoft 365 Copilot to create and customize agents that you can implement for scenario-specific use cases, such as:

- An agent that provides writing or presentation coaching tailored to organizational standards
- A team onboarding agent that responds with specific information about the user's new team and helps them complete onboarding tasks

:::image type="content" source="assets/images/agent-builder-screenshots/new-agent-screen.png" alt-text="New agent screen in Agent Builder":::

You can specify dedicated knowledge sources, including content on SharePoint and information provided by Microsoft 365 Copilot connectors. You can also test the agent before deploying it for use in your conversations with Microsoft 365 Copilot or sharing it with others in your organization.

You can build agents from the following apps and sites:

- microsoft365.com/chat
- office.com/chat
- Microsoft Teams Desktop and web client

Agent Builder is available on both the Work and Web options on the Microsoft 365 Copilot app toolbar. It's not available on mobile versions of the apps and sites listed, or for Microsoft 365 Copilot locations that aren't listed in this article.


> [!NOTE]
> If you need more advanced capabilities like Actions to integrate external services, use [Microsoft Copilot Studio](/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext). It provides a comprehensive set of tools and features for more complex requirements.

## Governance

Your Microsoft 365 Copilot license includes the agents you build by using Agent Builder in Microsoft 365 Copilot. These agents offer functionality that's a subset of what Microsoft 365 Copilot supports. To learn more about the Microsoft 365 Copilot license, see [Microsoft 365 Copilot](https://www.microsoft.com/microsoft-365/copilot/enterprise).

## Data processing

Copilot Studio processes Agent Builder capabilities, and they can enable data flow both to and from Microsoft 365 and Copilot Studio. This data can include Microsoft 365 data, prompts, instructions, configurations, and output content. The respective [product terms](https://go.microsoft.com/fwlink/?linkid=2173816) and compliance commitments govern your use of the integrated Copilot Studio and Microsoft 365 services.

## Data storage

Agents you create by using Microsoft 365 Copilot don't consume the tenant's Dataverse storage entitlement.

## Compliance

For information about data subject rights and responding to requests to rectify personal data, see [Personal data requests for Copilot Studio](/microsoft-copilot-studio/personal-data-summary).

## Admin controls

Administrators can control whether Agent Builder is available to users in their organization. For information about agent admin controls, see [Manage agents for Microsoft 365 Copilot in Integrated Apps](/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps).

## Network requirements

Agent Builder requires access to the following endpoint. Make sure that this endpoint isn't blocked by your network firewall or proxy configuration.

> [!NOTE]
> This endpoint is required in addition to the standard Microsoft 365 URLs and IP address ranges for Microsoft 365 services.

| Domain | Required | Protocol | Uses |
|--------|----------|----------|------|
| *.api.powerplatform.com   | Yes      | HTTPS    | Agent authoring, configuration, publishing, and sharing APIs    |

For general information about Microsoft 365 URLs, see [Microsoft 365 URLs and IP address ranges](/microsoft-365/enterprise/urls-and-ip-address-ranges).

## Known limitations

The following limitations are known:

- Auto sharing SharePoint files and folders is only supported when sharing with specific security groups and not everyone in the organization. You need to manually update the file and folder permission that the agent uses to grant permission to the intended users for the agent to return information from those knowledge sources.
- [Lockbox](/power-platform/admin/about-lockbox) and [Customer Managed Keys](/azure/storage/common/customer-managed-keys-overview) aren't currently supported for agents created by using Microsoft 365 Copilot.
- You can't use agents created by using Microsoft 365 Copilot in Teams Chat.
- If a tenant admin disables web content via the [Allow web search in Copilot](/copilot/microsoft-365/manage-public-web-access#controls-available-to-manage-web-search) policy, Microsoft 365 Copilot blocks web content as a knowledge source. However, the **Web content** toggle in the **Knowledge** pane isn't disabled. This issue is a UI limitation. The **Allow web search in Copilot** policy takes precedence over the UI setting.

## Submit feedback

You can submit feedback from within Agent Builder to help contribute to product improvements for all users. Feedback from Agent Builder is handled the same way as feedback for Copilot Studio. For more information about Copilot feedback, including what data is collected, how the data is handled, and what it's used for, see [Providing feedback about Microsoft Copilot with Microsoft 365 apps](https://support.microsoft.com/en-us/topic/providing-feedback-about-microsoft-copilot-with-microsoft-365-apps-c481c26a-e01a-4be3-bdd0-aee0b0b2a423).

Submit feedback by using one of the following options:

- The thumbs-up or thumbs-down control on AI-generated responses in your agent test pane.
- The **Send feedback** button if you encounter an RAI validation failure. For more information, see [Responsible AI validation checks](rai-validation.md).
- The **Send Feedback** option in the menu on the top right.

:::image type="content" source="assets/images/agent-builder-screenshots/agent-builder-send-feedback.png" alt-text="Send feedback in Agent Builder":::

In your feedback submission, specify that the issue is related to **Agent Builder in Microsoft 365 Copilot**.

Administrators can define a cloud policy to control whether feedback is collected in their tenant, and whether optional data such as log files and screenshots can be included in user-initiated feedback. For more information, see [Cloud Policy in Microsoft 365 Apps admin center](/microsoft-365-apps/admin-center/overview-cloud-policy).

For general information, see [Microsoft feedback for your organization](/microsoft-365/admin/misc/feedback-user-control).

## Get support

To get support, select **Send feedback** from within Microsoft 365 Copilot.

In your feedback ticket, provide details about the issue you're facing and include the following pieces of information in the feedback dialog:

- Specify that the issue is related to Agent Builder in Microsoft 365 Copilot.
- Provide the agent ID.
- Provide the tenant ID.
- Provide the environment ID.
- Provide the session ID.
- If the issue is related to the **Agent preview** pane or **Describe** tab, type "/debug" within the chat box and include the contents in your ticket.

You can find and copy these details in Agent Builder in the **Get support** section of the **Help** dropdown menu.

:::image type="content" source="assets/images/agent-builder-screenshots/agent-builder-get-support.png" alt-text="Find the support details in Agent Builder in Microsoft 365 Copilot":::

## Related content

- [Build your first agent](https://res.public.onecdn.static.microsoft/s01-prod/pdf/Buid-an-agent-with-Agent-Builder.pdf)
- [Build agents with Agent Builder in Microsoft 365 Copilot](agent-builder-build-agents.md)
- [Share and manage agents built with Microsoft 365 Copilot](agent-builder-share-manage-agents.md)
- [Regional availability and language support](agent-builder-regional-availability.md)
