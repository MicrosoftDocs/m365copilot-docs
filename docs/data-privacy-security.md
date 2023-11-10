---
title: Data, Privacy, and Security for Microsoft Copilot for Microsoft 365 extensibility
description: Learn how to protect your customer's data as a developer of Microsoft Copilot for Microsoft 365 extensibility solutions
author: erikadoyle
ms.author: edoyle
ms.topic: overview
ms.date: 11/14/2023
---

# Data, Privacy, and Security for Microsoft Copilot for Microsoft 365 extensibility

When you use a Copilot plugin or connector, queries based on your prompts, conversation history, and Microsoft 365 data can be shared with the plugin or connector to generate a response or complete a command. This article will outline data privacy and security considerations for developing different Copilot extensibility solutions, both in-house and as a commercial developer.

:::image type="content" source="assets/images/validation-principles.png" alt-text="Diagram key considerations for developing Copilot extensibility: Enterprise security and trust, Responsible AI, High-quality user experience, High-value functionality" border="false":::

## Graph connectors

Copilot for Microsoft 365 presents only data that each individual can access using the same underlying controls for data access used in other Microsoft 365 services. Semantic Index honors the user identity-based access boundary so that the grounding process only accesses content that the current user is authorized to access. This is also true of external data within Semantic Index.

When you connect your external data to Copilot with a Microsoft Graph connector, your data flows into Semantic Index. You can manage permissions to view external items by associating an [access control list](/graph/connecting-external-content-manage-items?branch=main#access-control-list) (ACL) with a Microsoft Entra user and group ID or an [external group](/graph/connecting-external-content-external-groups?context=/microsoft-365-copilot/extensibility/context).

Prompts, responses, and data accessed both internally through Microsoft Graph and externally from Graph connectors, are not used to train Microsoft Copilot LLMs, including those used by Microsoft 365.

## Plugins

Similar to traditional [Teams apps](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#privacy-policy) and [Power Platform connectors](/connectors/custom-connectors/certification-submission#step-4b-product-or-end-service-metadata), Microsoft Copilot plugins are individually governed by their terms of use and privacy policies. As a plugin developer, you are responsible for securing your customer's data within the bounds of your service and providing information on your policies regarding users' personal information. Admins and users can then view your [privacy policy](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#privacy-policy) and [terms of use](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines#terms-of-use) in the app store before choosing to add or use your plugin as a Copilot data source.

When you plug in you app to Copilot as a plugin, your external data stays within your app; it *does not* flow into Semantic Index. Copilot does, however, send encrypted data representing search parameters of your user's prompt to Microsoft Copilot LLMs. This data is not stored, nor used to train, Microsoft Copilot LLMs; it is used solely to provide the most accurate, relevant, and contextual response possible.

Message extension plugins use the same [authentication process for Teams message extensions](/microsoftteams/platform/bots/how-to/authentication/bot-sso-overview).

Power Platform plugins use the same [authentication process for custom connectors](/connectors/custom-connectors/azure-active-directory-authentication).

## Considerations for line-of-business developers

Copilot for Microsoft 365 only shares data with and searches in plugins or connectors that are enabled for Copilot by a Microsoft 365 admin. As a line-of-business developer of Copilot extensibility solutions, ensure you and your admin are familiar with:

- [Microsoft Copilot for Microsoft 365 requirements](/microsoft-365-copilot/microsoft-365-copilot-requirements)
- [Data, Privacy, and Security for Microsoft Copilot for Microsoft 365](/microsoft-365-copilot/microsoft-365-copilot-privacy) admin documentation
- [Zero Trust for Microsoft Copilot for Microsoft 365](/security/zero-trust/zero-trust-tech-illus#zero-trust-for-microsoft-365-copilot) deployment plan for applying Zero Trust principles to Microsoft Copilot
- Microsoft Admin Center procedures:
  - [Managing plugins for Copilot](/microsoft-365/admin/manage/manage-plugins-for-copilot-in-integrated-apps)
  - [Managing Microsoft Graph connectors](/microsoftsearch/connectors-overview).

## Considerations for independent software vendors

Message extension Copilot plugins are packaged and distributed in the same way as Microsoft Teams apps that are integrated to run across the Microsoft 365 ecosystem. Microsoft Graph connectors can also be packaged and distributed in the same way as Teams apps.

Power Platform plugins are certified and distributed in the same way as Power Platform connectors, by first publishing your connector to the [Power Platform Connectors](https://github.com/microsoft/PowerPlatformConnectors) open source repository, and then submitting its information to Microsoft.

Submission of your app package to the Microsoft Partner Center *Microsoft 365 and Copilot* program requires the compliance with the following certification policies for acceptance to in-product stores.

- Microsoft Commercial Marketplace certification policies:
  - [100 General](/marketplace/certification-policies#100-general)
  - [1140 Teams](/legal/marketplace/certification-policies#1140-teams) (including [1140.9 Teams apps extensible as Microsoft Copilot for Microsoft 365 plugins](/legal/marketplace/certification-policies#1140-teams)) (Message extension plugins)
- [Teams Store validation guidelines](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/teams-store-validation-guidelines) (Message extension plugins and Graph connectors in Teams apps)
- [Verified publisher certification process](/connectors/custom-connectors/certification-submission) (Power Platform connector plugins)

## See also

[Publish plugins and connectors for Microsoft Copilot for Microsoft 365](publish.md)

[Microsoft commitment to responsible AI](https://www.microsoft.com/ai/responsible-ai)
