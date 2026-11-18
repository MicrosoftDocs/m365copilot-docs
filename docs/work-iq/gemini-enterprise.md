---
title: Connect and use Work IQ in Gemini Enterprise
description: Configure Microsoft Entra authentication and billing, add Work IQ to Gemini Enterprise, and connect each user's Microsoft 365 account.
author: slabereemsft
ms.author: seanla
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/17/2026
---

# Connect and use Work IQ in Gemini Enterprise

Work IQ connects Gemini Enterprise to Microsoft 365 context through a custom Model Context Protocol (MCP) connection. A team administrator adds the connection, and each user separately signs in with their own work or school Microsoft account.

This article follows the **Add MCP Server (Preview)** flow in **Gemini Enterprise - Business edition** at `business.gemini.google`. It covers Microsoft Entra registration, permissions, billing, team availability, user authorization, and a document-summary example. It doesn't apply to the consumer Gemini app at `gemini.google.com`.

## Setup overview

| Task | Role |
| --- | --- |
| [Configure Microsoft Entra authentication](#configure-microsoft-entra-authentication) | Authorized Microsoft Entra administrator |
| [Restrict access and configure Work IQ billing](#restrict-access-and-configure-work-iq-billing) | Microsoft Entra and Microsoft 365 billing administrators |
| [Add Work IQ and enable it for the team](#add-work-iq-and-enable-it-for-the-team) | Gemini Enterprise team administrator |
| [Connect a Microsoft 365 account](#connect-your-microsoft-365-account) | Each approved user |
| [Verify a document-summary request](#verify-a-document-summary-request) | Each test user, with administrator support |

Team enablement, Microsoft Entra consent, application assignments, user connections, and Work IQ billing are separate controls. Enabling the connection for a team doesn't connect every member to the administrator's Microsoft account.

## Prerequisites

- Access to Gemini Enterprise - Business edition with custom MCP connections available.
- Organizational approval to send Microsoft 365 context to Gemini Enterprise, including review of Google's preview terms and data handling.
- A Microsoft 365 tenant enabled for Work IQ and users with access to the test content. Follow [Enable your tenant for Work IQ](enable-work-iq.md) if the resource isn't provisioned.
- Permission to create and manage a Microsoft Entra registration, plus an administrator authorized to consent to delegated permissions.
- A Gemini Enterprise team administrator who can add the connection and enter approved OAuth settings.
- Approved test users and a billing administrator who can configure Work IQ usage-based billing.

Google's custom connection requires a publicly accessible HTTPS MCP server and identity provider, and supports StreamableHTTP. This flow uses Microsoft's hosted Work IQ endpoint; you don't deploy a separate MCP server.

See Google's [custom MCP connection setup guide](https://support.google.com/g/answer/17106276?hl=en) for current availability. Interface labels can differ from this preview walkthrough.

## Configure Microsoft Entra authentication

Gemini Enterprise uses an organization-owned OAuth client. This client is separate from Microsoft's Work IQ API, and each user still authorizes their own Microsoft 365 access.

### Register the OAuth client

1. In the [Microsoft Entra admin center](https://entra.microsoft.com), select the intended Microsoft 365 tenant.
1. Open **Entra ID** > **App registrations** > **New registration**.
1. Enter a descriptive name, such as **Work IQ connector for Gemini Enterprise**.
1. Under **Supported account types**, select accounts in this organizational directory only.
1. Select **Register**.
1. On **Overview**, record the **Application (client) ID** and **Directory (tenant) ID**.
1. Assign an owner responsible for the client and credential lifecycle.
1. Open **Authentication**. The supplied walkthrough labels this page **Authentication (Preview)**.
1. Select **Add Redirect URI** and choose the **Web** platform.
1. Enter the verified callback.

   ```text
   https://vertexaisearch.cloud.google.com/oauth-redirect
   ```

Don't register this confidential web client's callback as a single-page application or enable
implicit grants or public client flows for this setup. Don't copy consumer Gemini callback patterns into this registration.

See [Register an application](/entra/identity-platform/quickstart-register-app).

### Copy the v2 OAuth endpoints

1. In the registration, open **Overview** > **Endpoints**.
1. Copy **OAuth 2.0 authorization endpoint (v2)** for authorization URL.
1. Copy **OAuth 2.0 token endpoint (v2)** for **Token URL**.
1. Verify that both URLs contain the intended tenant ID and `/oauth2/v2.0/`.

### Configure delegated permissions and consent

1. Open **API permissions** > **Add a permission** > **APIs my organization uses**.
1. Find the Work IQ API by resource application ID `fdcc1f02-fc51-4226-8753-f668596af7f7`.
1. Select **Delegated permissions** > **WorkIQAgent.Ask**, and then select **Add permissions**.
1. Review the complete permission list with an authorized administrator.
1. Have that administrator grant consent for the intended tenant.
1. Confirm that the delegated Work IQ permission shows as granted.

The Work IQ application ID URI is `api://workiq.svc.cloud.microsoft`. Use `offline_access api://workiq.svc.cloud.microsoft/WorkIQAgent.Ask` in the Gemini Enterprise **Scopes** field. The resource application ID identifies Microsoft's API, not your OAuth client. Don't use it, another integration's client ID, or a CLI client ID in Gemini Enterprise **Client ID** field.

> [!IMPORTANT]
> `WorkIQAgent.Ask` includes read and write access to Microsoft 365 resources accessible to Work IQ agents and the signed-in user. It isn't read-only. A Gemini Enterprise review card or a prompt asking not to make changes doesn't restrict the OAuth grant.

Work IQ doesn't support application-only authentication. There's no need to add Microsoft Graph workload permissions because access is covered by the delegated Work IQ permission.

See [Work IQ API permissions](permissions.md) and [Grant admin consent](/entra/identity/enterprise-apps/grant-admin-consent).

### Create and protect the client credential

Google's shown manual OAuth form requires a client secret.

1. In the registration, open **Certificates & secrets** > **Client secrets** > **New client secret**.
1. Enter a description and choose an expiration consistent with your approved rotation policy.
1. Select **Add** and immediately save the secret **Value** in an approved secret store.
1. Record the expiration and rotation owner.
1. Enter the full value only in Gemini Enterprise designated **Client Secret** field when completing the connection.

The secret ID and a masked value won't work. Never put the secret in a prompt, article, screenshot, repository, or support ticket.

## Restrict access and configure Work IQ billing

1. Open **Entra ID** > **Enterprise apps** and find the client application by its client ID.
1. Under **Properties**, set **Assignment required?** to **Yes** and save.
1. Under **Users and groups**, assign approved test users or groups.
1. Review Conditional Access and Work IQ tenant policy without weakening restrictions to make a test succeed.

Group assignment can require extra licensing. See [Assign users and groups](/entra/identity/enterprise-apps/assign-user-or-group-access-portal).

Work IQ API usage is billed in Copilot Credits through the Microsoft 365 admin center. Configure it separately from your Gemini Enterprise subscription and Microsoft Entra consent. See [Getting started with usage-based billing](/copilot/implement/usage-based-billing-copilot-credits-setup#getting-started-with-usage-based-billing).

After configuring usage-based billing, create or update an identity-based spending policy covering the approved users and the **Work IQ API for custom apps and agents** service. See [Add identity-based spending policy](/copilot/implement/usage-based-billing-manage-copilot-credits#add-identity-based-spending-policy).

Spending policies can also cover other Work IQ integrations; they don't replace client application assignments.

## Add Work IQ and enable it for the team

An authorized Gemini Enterprise team administrator completes these steps.

1. Sign in to [Gemini Enterprise](https://business.gemini.google) and select the intended team.
1. On the home page's **custom MCP server connections** banner, select **Add MCP server**. In team administration, open **Connected apps** and select **Add MCP Server** on the **Connectors** page.
1. In the **Add MCP Server** dialog, complete **MCP info**.

   | Field | Value |
   | --- | --- |
   | **Server URL** | `https://workiq.svc.cloud.microsoft/mcp` |
   | **Name** | `Work IQ` |

1. Select **Next** to open **Auth**.
1. Use the copy control for Google's **Redirect URI**. The supplied flow displays `https://vertexaisearch.cloud.google.com/oauth-redirect`. Confirm that it matches the **Web** redirect registered in your Entra client. If the displayed URI differs, have your identity administrator review it before continuing.
1. Complete the OAuth fields using your approved Entra registration.

   | Field | Value |
   | --- | --- |
   | Authorization URL | Your registration's **OAuth 2.0 authorization endpoint (v2)**: `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/authorize` |
   | **Token URL** | Your registration's **OAuth 2.0 token endpoint (v2)**: `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token` |
   | **Auth URL Parameter** | Leave empty for this flow. |
   | **Client ID** | Your registration's **Application (client) ID** |
   | **Client Secret** | The full secret **Value**, not its secret ID or a masked value |
   | **Scopes** | `offline_access api://workiq.svc.cloud.microsoft/WorkIQAgent.Ask` |

   Replace `{tenant-id}` with your Microsoft 365 tenant ID. You can copy both v2 endpoints from **Overview** > **Endpoints** in the Entra registration.

   Enter the scopes as a space-separated list. `offline_access` requests a refresh token so Gemini Enterprise can renew access without requiring sign-in each time the access token expires. Conditional Access, session policies, or revoked consent can still require users to sign in again.

1. Review the external-service notice and select **Add**.
1. On the **Connectors** page, find **Work IQ** and check **Enabled for team**. Turn it on only when the approved team scope and Microsoft access controls are ready.

Enter the secret only in the designated OAuth field. Don't put credentials in a chat, server URL, screenshot, or repository. The Work IQ resource application ID isn't the OAuth client ID.

The supplied preview flow ends with **Add**. Don't assume that every version includes a separate **Verify Auth** step or location-selection screen. If your interface differs, follow Google's current instructions and verify the resulting settings.

## Connect your Microsoft 365 account

Each approved user connects separately.

1. In Gemini Enterprise, select **New chat**.
1. Under the prompt box, open the puzzle-piece connectors menu.
1. Search for **Work IQ** and select **Connect**.
1. In **Authorize Work IQ**, review the sign-in and permission information, and then select **Continue to Work IQ**.
1. Follow the Microsoft sign-in prompts by using your own work or school account.
1. Verify the client application identity, intended Microsoft 365 tenant, and requested permissions before completing authorization.
1. Return to Gemini Enterprise and confirm that Work IQ is connected and available for the conversation.

If Microsoft requests administrator approval, stop and have an authorized administrator complete consent. Don't connect by using a shared administrator account or substitute a static access token.

## Verify a document-summary request

Use approved test documents, not sensitive production content, for the initial request.

1. Start a new chat and ensure you're using the Work IQ connection, not a built-in OneDrive or SharePoint connector.
1. Enter a bounded request based on the supplied walkthrough:

   ```text
   Use Work IQ to summarize the 10 most recently modified documents in my
   OneDrive for Business that you can access. Include document names and
   source links when available. If fewer than 10 are available, say so.
   Don't create or change documents, send messages, or use another connector.
   ```

1. If Gemini Enterprise requests review, inspect the actual tool and arguments before confirming. Reject requests that are outside the approved task.
1. Review the response and compare its document names, ordering, summaries, and links with the test user's OneDrive.
1. With your administrator, verify that the request invoked Work IQ by using the intended Microsoft account.

## Troubleshoot or remove the connection

| Symptom | Check |
| --- | --- |
| Work IQ isn't listed in the chat menu | Check that you added it to the correct team and that it's enabled. |
| Redirect URI mismatch | Compare Google's displayed URI with the Entra client's registered **Web** redirect. |
| Invalid client, secret, or scope | Use your client's ID, the full unexpired secret value, and the Work IQ scope from this article. |
| Microsoft sign-in is blocked | Check assignments, consent, Conditional Access, and tenant policy without weakening approved controls. |
| Sign-in succeeds but no Work IQ result is returned | Verify MCP initialization, tool discovery, required permissions, actual tool calls, and billing. |
| Access stops later | Check credential expiration and the supported refresh or reauthentication flow. |

To stop team access, turn off Work IQ on the **Connectors** page. To remove the custom connection, use its delete control after reviewing the impact on team members. An Entra administrator can separately disable client sign-in or revoke grants.

Before credential expiration, rotate the secret through the approved process, update Gemini Enterprise, and verify sign-in before removing the old credential. When retiring this integration, review client grants and unused credentials as well as the connector.

Disabling or deleting a connection doesn't itself delete data already returned to conversations. Don't delete Microsoft's shared Work IQ resource to retire only this connection.

## Related content

- [Work IQ MCP overview](mcp/overview.md)
- [Work IQ API permissions](permissions.md)
- [Policy governance for Work IQ MCP](mcp/policy-governance-mcp.md)
- [Google's custom MCP connection setup guide](https://support.google.com/g/answer/17106276?hl=en)
