---
title: Enable your tenant for Work IQ
description: Learn how to setup Work IQ API for your tenant
author: MSFTgraph-sorceress
ms.author: hstoffels
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 06/16/2026
---

# Enable your tenant for Work IQ

<!-- cSpell:ignore AADSTS MSAL azurecli -->

Work IQ is a workplace intelligence layer that delivers a semantic understanding of everything happening across your business. It enables developers to build agents, applications, and workflows that securely reason over Microsoft 365 and connected business systems, with grounded, permission-aware context applied automatically. This approach eliminates the need to build custom retrieval pipelines, orchestration logic, or compliance enforcement for workplace intelligence.

This guide covers enabling Work IQ in your tenant.

## Prerequisites

- A usage-based billing plan set up in Copilot Studio with an Azure subscription and resource group assigned. For more information about Work IQ billing, see [Understand usage-based billing and cost management for Copilot Credits](/microsoft-365/copilot/usage-based-billing-overview-copilot-credits).
- The user assigned to the billing plan
- A user with Global Administrator role for the one-time [Work IQ setup](#enable-work-iq-api-in-your-organization)

## Enable Work IQ API in your organization

> ⏱️ ~5 minutes, one-time per organization.

This section creates the Work IQ service principal in your organization, which provisions the Work IQ resource so your applications  can request tokens for it. You (or your organization's Global Administrator) can use the Microsoft Entra admin center or the Azure CLI to complete the following steps.

### [Admin center](#tab/entra-admin)

1. Go to [Graph Explorer](https://developer.microsoft.com/graph/graph-explorer) and sign in with an admin account.

1. Set the method to **POST** and the URL to `https://graph.microsoft.com/v1.0/servicePrincipals`. Graph Explorer surfaces relevant scopes based on the URL and method, so enter the URL before consenting in the next step.

1. Select **Modify permissions** and consent to `Application.ReadWrite.All`. This step is a one-time admin action and grants the scope **only for your own Graph Explorer session**. It doesn't change organization-wide permissions.

1. Enter the following in the **Request body**.

    ```json
    {
      "appId": "fdcc1f02-fc51-4226-8753-f668596af7f7"
    }
    ```

1. Select **Run query**. A **201 Created** response confirms success. A conflict error means the service principal already exists.

### [Azure CLI](#tab/azure-cli)

Create the Work IQ service principal in your organization by running the following command.

```azurecli
az ad sp create --id fdcc1f02-fc51-4226-8753-f668596af7f7
```

---

You should now have two values: `APP_ID` and `TENANT_ID`. Keep these values available as you'll use them when testing with the A2A sample code via `--appid` and `--tenant` parameters.

Your tenant is now ready to test. To test your configuration by using the provided sample code, see the [A2A quickstart](./a2a/quickstart.md) guide.

---

## Related content

- [Sample code on GitHub](https://github.com/microsoft/work-iq-samples)
- [Work IQ API overview](./api-overview.md)
- [A2A quickstart](./a2a/quickstart.md)
- [A2A protocol specification](https://a2a-protocol.org/latest/specification/)
- [A2A .NET SDK](https://github.com/a2aproject/a2a-dotnet)
- [A2A v0.3 → v1.0 migration guide](https://github.com/a2aproject/a2a-dotnet/blob/main/docs/migration-guide-v1.md)
