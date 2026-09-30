---
title: Agent Builder regional availability and language support
description: Learn about the regional availability and supported languages for Agent Builder.
#customer intent: As a builder, I want to know where Agent Builder is available and which languages it supports so that I can plan my agent.
author: jasonxian-msft
ms.author: jasonxian
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: reference
ms.service: copilot-studio
ms.subservice: agent-builder
---

# Agent Builder regional availability and language support

<!-- PM-REVIEW (09/25/2026): Confirm the languages an agent built in Agent Builder responds in, and whether the Configure tab and instructions have their own language support. The intro is trimmed to what this article actually covers (Agent Builder UI languages and Describe tab languages) rather than asserting agent response languages. -->
Agent Builder availability varies by geographic location and national cloud environment. This article also lists the languages supported by the Agent Builder UI and **Describe** tab.

## Regional availability

Agent Builder is available if your [Power Platform default environment](/power-platform/admin/environments-overview#default-environment) is in any of the following countries or regions:

- Asia Pacific
- Australia
- Brazil
- Canada
- Europe
- France
- Germany
- India
- Japan
- Korea
- Norway
- Singapore
- South Africa
- Sweden
- Switzerland
- United Arab Emirates
- United Kingdom
- United States

The Power Platform default environment location is automatically set to the location of the tenant. You can verify the location of your Power Platform default environment in the Power Platform Admin Center. For more information, see [Environment location](/power-platform/admin/environments-overview#environment-location).

## National cloud availability

Agent Builder is available in the Microsoft 365 Government Community Cloud (GCC) and Government Community Cloud High (GCCH) national cloud environments.

> [!NOTE]
>
> - The tenant admin must give users access to Agent Builder in GCCH environments. For more information, see [Agent settings in Microsoft 365 admin center](/microsoft-365/admin/manage/agent-settings#user-access).
> - Sharing agents with others isn't available in Agent Builder in GCCH environments.

<!-- PM-REVIEW (09/25/2026): Confirm whether GCC and GCCH have feature gaps beyond embedded file content, and whether the Microsoft Frontier Program is available in GCC and GCCH. Only the confirmed gaps are stated here. -->
Some Agent Builder features aren't available in every national cloud environment:

- Embedded file content isn't supported as a knowledge source in GCC. For more information, see [Embedded file content](agent-builder-add-knowledge.md#embedded-file-content).

Skills are available only to organizations enrolled in the Microsoft Frontier Program in supported environments. For more information, see [Add custom skills to your declarative agent in Agent Builder (preview)](agent-builder-add-skills.md).

## Language support

### Agent Builder UI languages

By default, the Agent Builder UI is presented in the language that you set in Microsoft 365. You can change it by [changing your Microsoft 365 language setting](https://support.microsoft.com/topic/change-your-display-language-and-time-zone-in-microsoft-365-for-business-6f238bff-5252-441e-b32b-655d5d85d15b).

The following languages are supported:

<!-- PM-REVIEW (09/25/2026): Confirm the locale code for Arabic in this list. Every other entry has a locale code; Arabic has none. Do not insert a code until it's confirmed. -->

- Arabic
- Chinese (Simplified) (zh-CN)
- Chinese (Traditional) (zh-TW)
- Czech (cs-CZ)
- Danish (da-DK)
- Dutch (nl-NL)
- English (United States) (en-US)
- Finnish (fi-FI)
- French (France) (fr-FR)
- German (de-DE)
- Greek (el-GR)
- Hebrew (he-IL)
- Hindi (hi-IN)
- Indonesian (id-ID)
- Italian (it-IT)
- Japanese (ja-JP)
- Korean (ko-KR)
- Norwegian (Bokmål) (nb-NO)
- Polish (pl-PL)
- Portuguese (Brazil) (pt-BR)
- Portuguese (Portugal) (pt-PT)
- Russian (ru-RU)
- Spanish (Spain) (es-ES)
- Swedish (sv-SE)
- Thai (th-TH)
- Turkish (tr-TR)

### Describe tab languages

The **Describe** tab supports all the languages that [Microsoft 365 Copilot supports](https://support.microsoft.com/office/supported-languages-for-microsoft-365-copilot-94518d61-644b-4118-9492-617eea4801d8).
