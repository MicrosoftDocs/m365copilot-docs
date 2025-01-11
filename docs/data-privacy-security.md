---
title: Data, Privacy, and Security and Microsoft 365 Copilot Extensibility 
description: Learn how to protect your customer's data when you extend Microsoft 365 Copilot.
author: erikadoyle
ms.author: edoyle
ms.topic: overview
ms.date: 09/26/2024
---

# Data, privacy, and security considerations for extending Microsoft 365 Copilot 

When you extend the list of Copilot skills with a plugin, queries based on your prompts, conversation history, and Microsoft 365 data can be shared with the plugin to generate a response or complete a command. When you extend Copilot with a Microsoft Graph connector, your external data is ingested into Microsoft Graph and remains in your tenant. This article outlines data privacy and security considerations for developing different Copilot extensibility solutions, both in-house and as a commercial developer.

:::image type="content" source="assets/images/validation-principles.png" alt-text="Diagram key considerations for developing Copilot extensibility: Enterprise security and trust, Responsible AI, High-quality user experience, High-value functionality" border="false":::

[!INCLUDE [security-note](includes/security-on-das-note.md)]

## Microsoft Graph connectors

Microsoft 365 Copilot presents only data that each individual can access using the same underlying controls for data access used in other Microsoft 365 services. Microsoft Graph honors the user identity-based access boundary so that the Copilot grounding process only accesses content that the current user is authorized to access. This is also true of external data within Microsoft Graph ingested from a Microsoft Graph connector.

When you connect your external data to Copilot with a Microsoft Graph connector, your data flows into Microsoft Graph. You can manage permissions to view external items by associating an [access control list](/graph/connecting-external-content-manage-items?branch=main#access-control-list) (ACL) with a Microsoft Entra user and group ID or an [external group](/graph/connecting-external-content-external-groups?context=/microsoft-365-copilot/extensibility/context).

Prompts, responses, and data accessed through Microsoft Graph aren't used to train foundation LLMs, including those used by Microsoft 365 Copilot.

## Plugins

Similar to traditional [Teams apps](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#privacy-policy) and [Power Platform connectors](/connectors/custom-connectors/certification-submission#step-4b-product-or-end-service-metadata), plugins for Microsoft 365 Copilot are individually governed by their terms of use and privacy policies. As a plugin developer, you're responsible for securing your customer's data within the bounds of your service and providing information on your policies regarding users' personal information. Admins and users can then view your [privacy policy](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#privacy-policy) and [terms of use](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#terms-of-use) in the app store before choosing to add or use your plugin as a Copilot data source.

When you plug in your app to Copilot as a plugin, your external data stays within your app; it *doesn't* flow into Microsoft Graph or is used to train Microsoft 365 Copilot LLMs. Copilot does, however, generate a search query to send to your plugin on the user's behalf based on their prompt and conversation history with Copilot, and data the user has access to in Microsoft 365.

Supported [API plugins authentication schemes](./api-plugin-authentication.md) include OAuth 2.0 authorization code flow and API key.

Message extension plugins use the same [authentication process for Teams message extensions](/microsoftteams/platform/bots/how-to/authentication/bot-sso-overview).

Power Platform connector plugins use the same [authentication process for custom connectors](/connectors/custom-connectors/azure-active-directory-authentication).

## Considerations for line-of-business developers

Microsoft 365 Copilot only shares data with and searches in plugins or connectors that are enabled for Copilot by a Microsoft 365 admin. As a line-of-business developer of Copilot extensibility solutions, be sure that you and your admin are familiar with:

- [Microsoft 365 Copilot requirements](/microsoft-365-copilot/microsoft-365-copilot-requirements)
- [Data, Privacy, and Security for Microsoft 365 Copilot](/microsoft-365-copilot/microsoft-365-copilot-privacy) admin documentation
- [Zero Trust principles for Microsoft 365 Copilot](/security/zero-trust/zero-trust-tech-illus#zero-trust-for-microsoft-365-copilot) deployment plan for applying Zero Trust principles to Microsoft 365 Copilot
- Microsoft Admin Center procedures:
  - [Managing agents for Copilot](/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps)
  - [Managing Microsoft Graph connectors](/microsoftsearch/connectors-overview).

## Considerations for independent software publishers

Power Platform connectors as Copilot plugins are [certified](/connectors/custom-connectors/certification-submission) and [packaged](/connectors/custom-connectors/certification-submission#connector-and-plugin-packaging-guide) in the same way as regular [Power Platform Connectors](/connectors/custom-connectors/certification-submission). They can then be submitted to [Microsoft Partner Center](https://partner.microsoft.com) through the **Microsoft 365 and Copilot program** as a **Power Platform Connector**.

Message extension plugins are packaged and distributed in the same way as  [Teams apps](/microsoftteams/platform/concepts/build-and-test/apps-package) that are [integrated to run across the Microsoft 365 ecosystem](/microsoftteams/platform/m365-apps/overview). Microsoft Graph connectors can also be packaged and distributed in the same way as Teams apps.

Submission of your app package to the Microsoft Partner Center *Microsoft 365 and Copilot* program requires meeting [certification policies](./publish.md#microsoft-365-and-copilot-program) for acceptance to Microsoft 365 in-product stores. Microsoft Commercial Marketplace certification policies and applicable Teams Store validation guidelines regarding privacy, security, and responsible AI include:

| Commercial marketplace certification policy | Teams store guidelines |
|----------|-----------|
| [100.5 Offer information](/legal/marketplace/certification-policies#1005-offer-information) | [Privacy policy](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#privacy-policy), [Terms of use](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#terms-of-use)  |
| [100.6 Personal information](/legal/marketplace/certification-policies#1006-personal-information) | [Sensitive content](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#sensitive-content) |
| [100.11 Security](/legal/marketplace/certification-policies#10011-security) | |
| [1140.3 Security](/legal/marketplace/certification-policies#11403-security) | [Security](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#security) |
| [1140.3.1 Financial transactions](/legal/marketplace/certification-policies#114031-financial-transactions) | [Financial information](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#financial-information) |
| [1140.3.2 Bots and message extensions](/legal/marketplace/certification-policies#114032-bots-and-messaging-extensions) | [Bots](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#bots) |
| [1140.3.3 External domains](/legal/marketplace/certification-policies#114033-external-domains) | [External domains](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#external-domains)|
| [1140.4.1 General](/legal/marketplace/certification-policies#1-apps-with-artificial-intelligenceai-generated-content-must-meet-below-requirements) | [Responsible AI checks](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines?branch=pr-en-us-9402#teams-apps-extensible-as-microsoft-365-chat-plugin) |
| [1140.9  Agents for Microsoft 365 Copilot](/legal/marketplace/certification-policies#11409-teams-apps-extensible-as-microsoft-365-copilot-plugin) | [Teams apps extensible as plugins for Microsoft 365 Copilot](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#teams-apps-extensible-as-microsoft-365-chat-plugin) |

For Microsoft Graph connectors (packaged as Teams apps), submission to the Microsoft 365 and Copilot program is currently limited to  [verified publishers](/entra/identity-platform/publisher-verification-overview). This provides end-users and organizational admins assurance that the publisher of an app has been verified as authentic by Microsoft.

## Related content

- [Data, Privacy, and Security for Microsoft 365 Copilot (Microsoft 365 admin)](/copilot/microsoft-365/microsoft-365-copilot-privacy)
- [Publish agents for Microsoft 365 Copilot](publish.md)
- [Microsoft commitment to responsible AI](https://www.microsoft.com/ai/responsible-ai)
