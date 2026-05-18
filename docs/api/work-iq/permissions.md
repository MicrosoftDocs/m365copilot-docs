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

## Enable Work IQ API in your organization

An organization administrator must create a service principal for the Work IQ API before applications can request access tokens for it. This is a one-time setup step for the organization.

### [Graph Explorer](#tab/graph-explorer)

1. Go to [Graph Explorer](https://developer.microsoft.com/graph/graph-explorer) and sign in with an admin account.

1. Set the method to **POST** and the URL to `https://graph.microsoft.com/v1.0/servicePrincipals`. Graph Explorer surfaces relevant scopes based on the URL and method, so the URL must be entered before consenting in the next step.

1. Select **Modify permissions** and consent to `Application.ReadWrite.All`. This step is a one-time admin action and grants the scope **only for your own Graph Explorer session**. It doesn't change organization-wide permissions.

1. Enter the following in the **Request body**.

    ```json
    {
      "appId": "fdcc1f02-fc51-4226-8753-f668596af7f7"
    }
    ```

1. Select **Run query**. A **201 Created** response confirms success. A conflict error means the service principal already exists - it's OK to proceed to the next step.

### [Azure CLI](#tab/azure-cli)

Run the following command to create the Work IQ API service principal.

```bash
az ad sp create --id fdcc1f02-fc51-4226-8753-f668596af7f7
```

---

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
