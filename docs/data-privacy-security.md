---
title: Data, Privacy, and Security and Microsoft 365 Copilot Extensibility 
description: Learn how to protect your customer's data when you extend Microsoft 365 Copilot.
author: erikadoyle
ms.author: edoyle
ms.topic: overview
ms.localizationpriority: medium
ms.date: 08/22/2025
---

# Data, privacy, and security considerations for extending Microsoft 365 Copilot

When you extend Microsoft 365 Copilot with agents, queries based on your prompts, conversation history, and Microsoft 365 data can be shared with the agent to generate a response or complete a command. When you extend Microsoft 365 Copilot with Microsoft 365 Copilot connectors, your external data is ingested into Microsoft Graph and remains in your tenant. This article outlines data privacy and security considerations for developing different Copilot extensibility solutions, both in-house and as a commercial developer.

:::image type="content" source="assets/images/validation-principles.png" alt-text="Diagram key considerations for developing Copilot extensibility: Enterprise security and trust, Responsible AI, High-quality user experience, High-value functionality" border="false":::

## Agents and actions

Agents in Microsoft 365 Copilot are individually governed by their terms of use and privacy policies. As a developer of agents and actions (API plugins), you're responsible for securing your customer's data within the bounds of your service and providing information on your policies regarding users' personal information. Admins and users can then view your [privacy policy](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#privacy-policy) and [terms of use](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#terms-of-use) in the app store before choosing to add or use your agent.

When you integrate your business workflows as agents for Copilot, your external data stays within your app; it *doesn't* flow into Microsoft Graph and it isn't used to train Microsoft 365 Copilot LLMs. Copilot does, however, generate a search query to send to your agent on the user's behalf based on their prompt and conversation history with Copilot and data the user has access to in Microsoft 365. For more info, see [Data stored about user interactions with Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-privacy#data-stored-about-user-interactions-with-microsoft-365-copilot) in the Microsoft 365 Copilot admin documentation.

[!INCLUDE [security-note](includes/security-on-das-note.md)]

## Copilot connectors

Microsoft 365 Copilot presents only data that each individual can access using the same underlying controls for data access used in other Microsoft 365 services. Microsoft Graph honors the user identity-based access boundary so that the Copilot grounding process only accesses content that the current user is authorized to access. This is also true of external data within Microsoft Graph ingested from a Copilot connector.

When you connect your external data to Copilot with a Copilot connector, your data flows into Microsoft Graph. You can manage permissions to view external items by associating an [access control list](/graph/connecting-external-content-manage-items?branch=main#access-control-list) (ACL) with a Microsoft Entra user and group ID or an [external group](/graph/connecting-external-content-external-groups?context=/microsoft-365-copilot/extensibility/context).

Prompts, responses, and data accessed through Microsoft Graph aren't used to train foundation LLMs, including those used by Microsoft 365 Copilot.

## Considerations for line-of-business developers

Microsoft 365 Copilot only shares data with and searches in agents or connectors that are enabled for Copilot by a Microsoft 365 admin. As a line-of-business developer of Copilot extensibility solutions, be sure that you and your admin are familiar with:

- [Microsoft 365 Copilot requirements](/microsoft-365-copilot/microsoft-365-copilot-requirements)
- [Data, Privacy, and Security for Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-privacy) admin documentation
- [Zero Trust principles for Microsoft 365 Copilot](/security/zero-trust/zero-trust-tech-illus#zero-trust-for-microsoft-365-copilot) deployment plan for applying Zero Trust principles to Microsoft 365 Copilot
- Microsoft 365 admin center procedures:
  - [Managing agents for Copilot](/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps)
  - [Managing Copilot connectors](/microsoftsearch/connectors-overview).

## Considerations for independent software publishers

Submission of your app package to the Microsoft Partner Center *Microsoft 365 and Copilot* program requires meeting certification policies for acceptance to Microsoft 365 in-product stores. Microsoft certification policies and guidelines regarding privacy, security, and responsible AI include:

- [Microsoft Commercial Marketplace certification policies](/legal/marketplace/certification-policies)
- [Store validation guidelines for Copilot extensibility](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines?context=/microsoft-365-copilot/extensibility/context)
- [Responsible AI validation checks](rai-validation.md)
- (Optional) [Microsoft 365 App Compliance Program certification](/microsoft-365-app-certification/docs/certification)

## Related content

- [Data, Privacy, and Security for Microsoft 365 Copilot (Microsoft 365 admin)](/copilot/microsoft-365/microsoft-365-copilot-privacy)
- [Data, privacy, and security for web search](/copilot/microsoft-365/manage-public-web-access)
- [Microsoft commitment to responsible AI](https://www.microsoft.com/ai/responsible-ai)
