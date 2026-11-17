---
title: Work IQ API permissions reference
description: Work IQ API exposes granular permissions that control the access that apps have to resources. As a developer, you decide which permissions for Work IQ your app requests.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.localizationpriority: high
ms.topic: reference
ms.date: 10/30/2026
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan azurecli -->

# Work IQ API permissions reference

Work IQ APIs are protected by Microsoft Entra ID. Applications that access the Work IQ APIs must use [Microsoft Entra ID OAuth 2.0](/entra/architecture/auth-oauth2) to authenticate and request authorization. This article lists the permissions exposed by Work IQ APIs.

> [!IMPORTANT]
> An organization administrator must [enable Work IQ in your organization](enable-work-iq.md) before these permissions can be used by applications.

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

### WorkIQ.Act

| Category | Application | Delegated |
|--|--|--|
| Identifier | - | 54b3dd6b-e697-4e6a-8fcd-96af0b25009d |
| DisplayText | - | Act on Microsoft 365 data through WorkIQ |
| Description | - | Allows the app to use WorkIQ to read and make changes to Microsoft 365 data that the signed-in user can access. |
| AdminConsentRequired | - | Yes |

### WorkIQ.Read

| Category | Application | Delegated |
|--|--|--|
| Identifier | - | c3c950a1-c6dc-4f63-9765-f363f1fab462 |
| DisplayText | - | Read Microsoft 365 data through WorkIQ |
| Description | - | Allows the app to use WorkIQ to read Microsoft 365 data that the signed-in user can access. |
| AdminConsentRequired | - | Yes |
