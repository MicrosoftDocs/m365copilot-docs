---
title: Work IQ API permissions reference
description: Work IQ API exposes granular permissions that control the access that apps have to resources. As a developer, you decide which permissions for Work IQ your app requests.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.localizationpriority: high
ms.topic: reference
ms.date: 05/15/2026
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Work IQ API permissions reference

Work IQ APIs are protected by Microsoft Entra ID. Applications that access the Work IQ APIs must use [Microsoft Entra ID OAuth 2.0](/entra/architecture/auth-oauth2) to authenticate and request authorization. This article lists the permissions exposed by Work IQ APIs.

## Application ID URI

The application ID URI for Work IQ APIs is `api://workiq.svc.cloud.microsoft`. This URI is the prefix for all Work IQ permission scopes in the OAuth protocol.

For example, to request the `WorkIQAgent.Ask` permission, use the OAuth `scope` value `api://workiq.svc.cloud.microsoft/WorkIQAgent.Ask`.

## Permissions

### WorkIQAgent.Ask

| Category | Application | Delegated |
|--|--|--|
| Identifier | - | 0b1715fd-f4bf-4c63-b16d-5be31f9847c2 |
| DisplayText | - | Ask Work IQ agents on behalf of the user |
| Description | - | Allows the app to ask Work IQ agents questions and receive responses on behalf of the signed-in user. This includes read and write access to Microsoft 365 resources that are accessible to Work IQ agents and scoped to the signed-in user. |
| AdminConsentRequired | - | Yes |

---

### WorkIQAgent.Ask.Selected

| Category | Application | Delegated |
|--|--|--|
| Identifier | - | 42f2c7e0-405b-4ba5-97f4-321811533545 |
| DisplayText | - | Ask selected Work IQ agents on behalf of the user |
| Description | - | Allows the app to ask Work IQ agents selected by your organization questions and receive responses on behalf of the signed-in user. This includes read and write access to Microsoft 365 resources that are accessible to the selected Work IQ agents and scoped to the signed-in user. |
| AdminConsentRequired | - | Yes |

---
