---
title: Connect a Microsoft Foundry project to Work IQ
description: Learn how to create a Work IQ connection in a Microsoft Foundry project and add Work IQ tools to a Foundry agent.
author: kangxh75
ms.author: allenk
ms.topic: quickstart
ms.localizationpriority: medium
ms.date: 06/23/2026
---

<!-- cSpell:ignore kangxh allenk workiq -->

# Connect a Microsoft Foundry project to Work IQ

Use a Work IQ connection in a Microsoft Foundry project to let a Foundry agent use Microsoft 365 context from emails, meetings, files, chats, and other work data. After you create the project connection, you can add Work IQ to an agent or toolbox and use it in prompts. Requests run in the context of the signed-in user and honor Microsoft 365 permissions, sensitivity labels, and tenant policy.

This quickstart summarizes the project-level connection flow. For the complete Foundry article and SDK examples, see [Connect agents to Microsoft 365 with Work IQ](/azure/foundry/agents/how-to/tools/work-iq).

## Prerequisites

Before you start, make sure you have:

- A Microsoft Foundry project with a deployed model.
- The **Foundry Project Manager** role on the Foundry project to create the Work IQ connection.
- The **Foundry User** role on the Foundry project for the developer identity, agent runtime identity, and users involved in OAuth flows.
- A Microsoft 365 Copilot license for each user who calls Work IQ through your agent.
- A Microsoft Entra Global Administrator who can grant admin consent for the `WorkIQAgent.Ask` delegated permission.

> [!NOTE]
> Work IQ connections in Foundry use delegated Microsoft Entra authentication. Application-only authentication isn't supported.

## Set up your Microsoft Entra app

An Entra admin must create or configure an app registration before you create the Work IQ connection in Foundry.

1. In the [Microsoft Entra admin center](https://entra.microsoft.com/), go to **Entra ID** > **App registrations**.
1. Create a new app registration or open an existing app registration for your Foundry agent.
1. Copy the **Application (client) ID** and **Directory (tenant) ID**.
1. Add a client secret and copy the secret value.
1. Under **API permissions**, add the **Work IQ** delegated permission `WorkIQAgent.Ask`.
1. Select **Grant admin consent** for the tenant.

If **Work IQ** doesn't appear when you search for API permissions, the Work IQ service principal might not be provisioned in your tenant. For setup guidance, see [Enable Work IQ APIs](../../enable-work-iq.md).

## Connect the Work IQ MCP tool in Foundry

Connect the remote Work IQ MCP server as a tool in your Foundry project.

1. Open your project in [Microsoft Foundry](https://ai.azure.com/nextgen).
1. In the left navigation, select **Tools**.
1. On the **Tools** page, select the **Tools** tab.
1. Select **Connect a tool**.
1. In **Select a tool**, select the **Catalog** tab.
1. Search for **Work IQ MCP**.
1. Select **Work IQ MCP**, and then select **Create**.
1. Confirm or enter the Work IQ MCP endpoint.

   ```text
   https://workiq.svc.cloud.microsoft/mcp
   ```

1. Configure OAuth with the values from your app registration.

   | Field | Value |
   | --- | --- |
   | **Client ID** | Application (client) ID from your app registration |
   | **Client secret** | Client secret value from your app registration |
   | **Authorization URL** | `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/authorize` |
   | **Token URL** | `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token` |
   | **Refresh URL** | `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token` |
   | **Scopes** | `api://workiq.svc.cloud.microsoft/WorkIQAgent.Ask,offline_access` |

1. Replace `{tenant-id}` with the Directory (tenant) ID from your app registration.
1. Save the tool connection.

## Add the redirect URI to your app registration

After Foundry creates the tool connection, it displays an OAuth redirect URL. Add this URL to your app registration.

1. In the [Microsoft Entra admin center](https://entra.microsoft.com/), open the app registration.
1. Select **Authentication** > **Add a platform** > **Web**.
1. Paste the OAuth redirect URL from the Foundry tool connection into **Redirect URIs**.
1. Select **Configure**.

## Add Work IQ to an agent

After the Work IQ MCP tool connection is available in the project, add Work IQ to an agent.

1. Open the Foundry project.
1. Open the agent that should use Microsoft 365 context.
1. Add the Work IQ MCP tool to the agent or add it to a toolbox that the agent uses.
1. Select the Work IQ tool connection that you created.
1. If Foundry asks you to configure MCP tool access, allow the Work IQ tools that the agent should be able to call. You can also choose whether MCP tool calls require approval or are automatically approved, based on your organization's review and safety requirements.
1. Save or publish the agent configuration.

## Try a Work IQ prompt

Ask your Foundry agent a question that requires Microsoft 365 context. The first time a user sends a prompt that uses Work IQ, Foundry might prompt the user to sign in and consent to access.

For example:

```text
Summarize my upcoming meetings for today.
```

```text
Find recent messages from my manager from this week.
```

```text
Retrieve the latest email related to the quarterly business review.
```

Foundry routes the request to Work IQ. Work IQ retrieves and reasons over the user's Microsoft 365 data, then returns a grounded response to the agent.

The response depends on the signed-in user's Microsoft 365 permissions, the application's OAuth permissions, and tenant policy.

## Related content

- [Connect agents to Microsoft 365 with Work IQ](/azure/foundry/agents/how-to/tools/work-iq)
- [Work IQ MCP overview](../overview.md)
- [Work IQ MCP tool reference](../tool-reference.md)
- [Work IQ API permissions reference](../../permissions.md)
