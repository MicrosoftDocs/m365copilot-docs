---
title: Connect and use Work IQ in Claude
description: Register your own Microsoft Entra application, configure delegated Work IQ permissions, and connect Claude to the Work IQ MCP server.
author: slabereemsft
ms.author: seanla
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/17/2026
---

# Connect and use Work IQ in Claude

Use an organization-owned Microsoft Entra app registration to connect Claude to the hosted Work IQ Model Context Protocol (MCP) server. Your organization owns the client application, manages its credentials, and grants its delegated permissions. Each user signs in with their own Microsoft 365 work or school account.

## Prerequisites

- A Claude account with access to custom remote MCP connectors and approval from your organization to connect Microsoft 365 data to Claude.
- For Claude Team or Enterprise, an Owner, Primary Owner, or other role authorized to add custom connectors to the organization. Members connect their accounts individually after the connector is added.
- A Microsoft 365 tenant enabled for Work IQ. Follow [Enable your tenant for Work IQ](enable-work-iq.md) if the resource service principal isn't provisioned.
- Permission to create and manage app registrations, such as the Application Developer role where required by tenant policy.
- An administrator authorized to consent to Work IQ delegated permissions, such as a Cloud Application Administrator.
- Work IQ usage-based billing and an identity-based spending policy covering the test users. A Global Administrator or Billing Administrator can activate billing and create the policy.
- A test user's work or school account with access to the Microsoft 365 data you plan to use.

For current Claude plans, roles, and connection requirements, see [Get started with custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp).

## Configuration values

| Setting | Value |
| --- | --- |
| Remote MCP server URL | `https://workiq.svc.cloud.microsoft/mcp` |
| Work IQ resource application ID | `fdcc1f02-fc51-4226-8753-f668596af7f7` |
| Work IQ application ID URI | `api://workiq.svc.cloud.microsoft` |
| OAuth scopes to verify | `offline_access api://workiq.svc.cloud.microsoft/WorkIQAgent.Ask` |
| Client application ID | The **Application (client) ID** of the app registration you create |
| Redirect URI | `https://claude.ai/api/mcp/auth_callback` |
| Redirect platform | **Web** |
| Authentication | Delegated OAuth authorization code flow with a signed-in user |
| Client credential | The client secret **Value**, not its secret ID |

The Work IQ resource application ID identifies Microsoft's API. It isn't the client ID to enter in Claude. Don't reuse a published plugin's or the CLI's client ID for your organization-owned registration.

## 1. Register the client application

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com) and select the tenant that owns the registration.
1. Go to **Entra ID** > **App registrations** > **New registration**.
1. Enter a descriptive name, such as **Work IQ custom connector for Claude**.
1. Under **Supported account types**, select **Accounts in this organizational directory only (Single tenant)**, or its current equivalent, to scope the client to your organization.
1. Under **Redirect URI**, select **Web** and enter the following URI exactly.

   ```text
   https://claude.ai/api/mcp/auth_callback
   ```

1. Select **Register**.
1. On **Overview**, record the **Application (client) ID** and **Directory (tenant) ID**.
1. Assign an appropriate owner to manage the registration and credential lifecycle.

If you registered the app without a redirect URI, open **Authentication** > **Add a platform** > **Web**, enter the URI, and save. Don't use a single-page application or mobile and desktop platform for this confidential web client. Implicit grant and public client flows aren't required.

For registration guidance, see [Register an app in Microsoft Entra ID](/entra/identity-platform/quickstart-register-app) and [Single and multitenant apps](/entra/identity-platform/single-and-multi-tenant-apps).

## 2. Add Work IQ delegated permissions

Configure permissions on your new **client app registration**, not on the Microsoft-owned Work IQ resource.

1. Open the client app registration and select **API permissions** > **Add a permission**.
1. Select **APIs my organization uses**.
1. Search for the Work IQ resource application ID, `fdcc1f02-fc51-4226-8753-f668596af7f7`, and select the matching API.
1. Select **Delegated permissions**.
1. Select **WorkIQAgent.Ask**.
1. Select **Add permissions**.
1. Review the complete configured permission list. Don't add Microsoft Graph mail, file, or chat permissions just because Work IQ accesses those workloads.

If the API isn't listed, verify resource provisioning by following [Enable your tenant for Work IQ](enable-work-iq.md). Don't register your own API with the Work IQ name or change your client's application ID URI to impersonate the resource.

### Add the permission scope

| Permission | Access |
| --- | --- |
| `WorkIQAgent.Ask` | Ask Work IQ agents questions and receive responses on behalf of the signed-in user, including read and write access to Microsoft 365 resources accessible to those agents and the user. |

This walkthrough uses `WorkIQAgent.Ask`. It isn't a read-only permission. Use tenant policy and Claude tool controls to restrict allowed operations, and review each tool approval.

For permission details, see [Work IQ API permissions reference](permissions.md). For Claude's scope selection and OAuth behavior, see [Authentication for connectors](https://claude.com/docs/connectors/building/authentication).

## 3. Grant admin consent

1. Have an authorized administrator open the new app registration's **API permissions** page.
1. Verify the tenant, client application ID, Work IQ resource, and complete permission list.
1. Select **Grant admin consent for \<your organization\>**.
1. Review the consent request and approve it only if the permissions match your organization's requirements.
1. Confirm that the Work IQ delegated permission shows **Granted for \<your organization\>**.

Consent authorizes the client application to request those permissions on behalf of users. It doesn't grant users access to Microsoft 365 content they couldn't otherwise access, enable billing, or override Work IQ tenant policy.

For roles and consent procedures, see [Grant tenant-wide admin consent](/entra/identity/enterprise-apps/grant-admin-consent).

## 4. Create and protect a client secret

1. In the app registration, select **Certificates & secrets** > **Client secrets** > **New client secret**.
1. Enter a description, such as **Work IQ custom connector for Claude**, and choose the shortest expiration compatible with your organization's rotation process.
1. Select **Add**.
1. Copy the secret's **Value** immediately to an approved secret store. You can't retrieve it after leaving the page.
1. Record the expiration and assign responsibility for rotation.

Don't copy the **Secret ID** into Claude. Don't put the secret in a prompt, article, repository, screenshot, support ticket, or MCP server URL. Enter it only in Claude's designated OAuth credential field.

The secret authenticates your client during a user's OAuth flow. It doesn't enable the OAuth client credentials grant or application-only Work IQ access.

For credential guidance and limitations, see [Add and manage app credentials](/entra/identity-platform/how-to-add-credentials).

## 5. Restrict access and enable billing

Before distributing the connector, restrict sign-in to the intended users.

1. In **Entra ID** > **Enterprise apps** > **All applications**, find your client application by its **Application (client) ID**.
1. Under **Properties**, set **Assignment required?** to **Yes**, and save.
1. Under **Users and groups**, assign the approved test users or groups.
1. Review applicable Conditional Access requirements with your identity administrator. Don't weaken a policy to work around a blocked connection.

Group assignment can require additional Microsoft Entra licensing. See [Assign users and groups to an application](/entra/identity/enterprise-apps/assign-user-or-group-access-portal).

Work IQ API usage is billed in Copilot Credits through the Microsoft 365 admin center. Configure it separately from your Claude subscription and Microsoft Entra consent. See [Getting started with usage-based billing](/copilot/implement/usage-based-billing-copilot-credits-setup#getting-started-with-usage-based-billing).

After configuring usage-based billing, create or update an identity-based spending policy covering the approved users and the **Work IQ API for custom apps and agents** service. See [Add identity-based spending policy](/copilot/implement/usage-based-billing-manage-copilot-credits#add-identity-based-spending-policy).

Spending policies can also cover other Work IQ integrations; they don't replace client application assignments.

## 6. Add the custom connector in Claude

For Claude Team or Enterprise, an authorized administrator adds the connector to the organization. Users then connect their own accounts.

1. In Claude, open **Organization settings** > **Connectors**, select **Add**, and choose **Custom** > **Web**. For an eligible individual account, use **Customize** > **Connectors** > **Add custom connector** instead.
1. Enter a name, such as **Work IQ - organization connector**.
1. Enter the remote MCP server URL exactly, including `/mcp`.

   ```text
   https://workiq.svc.cloud.microsoft/mcp
   ```

1. Continue and review the discovered authentication settings.
1. Under **Authentication**, choose **Sign in now**, or the supported option to require user sign-in when needed. Don't choose **No sign in**.
1. Under **OAuth client**, choose **Use your own OAuth client**.
1. Enter your app registration's **Application (client) ID** and client secret **Value** in their designated fields.
1. Don't add a shared bearer token, API key, or client secret under **Request headers**. Work IQ requires delegated user authentication.
1. Complete the connector setup.

Claude discovers the service's authorization configuration from the Work IQ MCP endpoint. You don't host another MCP server, expose an API on your client registration, or set an Application ID URI for this client.

If your Claude interface doesn't provide the own-client configuration, check Anthropic's current connector requirements before proceeding. Don't omit the client credentials and assume automatic registration will replace your Entra registration.

For current steps, see [Get started with custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp).

## 7. Connect a user account and verify

1. Sign in to Claude as an approved test user.
1. Open **Customize** > **Connectors**, find the custom connector, and select **Connect**.
1. In the Microsoft sign-in flow, use the test user's work or school account. Verify that the application name matches your organization-owned registration.
1. If a consent dialog appears, review **Ask Work IQ agents on behalf of the user** and **Maintain access to data you have given it access to**. If the requested permissions differ from those approved by your administrator, stop and have the administrator review them before accepting. If consent was already granted for your organization, the dialog might not appear.
1. Complete sign-in and return to Claude.
1. Enable the connector for a test conversation and enter the following prompt.

   ```text
   Use Work IQ to show my meetings for today. Don't create or change anything.
   ```

1. Review tool approval requests before proceeding. Confirm that the result matches the test user's calendar and access in Microsoft 365.
1. Verify the sign-in under your client application's Microsoft Entra sign-in logs.
1. Test the connection again after the initial access token expires to verify refresh behavior.
1. Test with an unassigned account to confirm that assignment enforcement blocks sign-in in your tenant.
1. Review Work IQ consumption in Cost management when reporting becomes available.

Don't test writes by sending real messages or modifying production files. If writes are in scope, use approved test content and explicit tool approvals.

## Troubleshoot configuration

| Symptom | What to check |
| --- | --- |
| Redirect URI mismatch | Compare the URI in the error with `https://claude.ai/api/mcp/auth_callback` under the client's **Web** platform. Check the scheme, path, case, and trailing slash. |
| Invalid client or secret | Verify the client ID belongs to your registration, and enter the secret **Value**, not its ID. Check expiration. |
| A single-tenant or tenant-independent endpoint error | Confirm that Claude uses a tenant-specific sign-in endpoint for your single-tenant client. If discovery selects `/organizations` or `/common`, stop and confirm support with the service and connector owners. Don't change tenant restrictions to bypass the error. |
| Work IQ isn't available under API permissions | Confirm the Work IQ resource service principal is provisioned and search by resource application ID. |
| Admin approval is still required | Check consent on your custom client, not the published plugin, CLI client, or Work IQ resource. Compare any newly requested permissions with the existing grant. |
| User isn't assigned or sign-in is blocked | Check the enterprise application's assignments, sign-in logs, account tenant, and Conditional Access requirements. |
| Authentication fails during discovery or registration | Verify the exact MCP URL and own-client configuration. Check Claude's current support for customer-provided OAuth credentials. |
| `AADSTS9010010` or `invalid_target` during authorization or token exchange | Claude sends the MCP server URL as the OAuth `resource` parameter. Anthropic documents an Entra compatibility issue when that value isn't registered on the protected API. For Microsoft's hosted Work IQ API, collect the error, time, and correlation ID and contact support. Don't change your client's Application ID URI or try to modify the Microsoft-owned Work IQ resource. |
| Sign-in succeeds but a tool is denied | Verify that the connector requested and received `WorkIQAgent.Ask`, then check tenant policy and user resource access. Configured API permissions alone don't prove which scopes are in the token. |
| Connection works initially but later fails | Check secret expiration and rotation, refresh consent, sign-in logs, and any requirement to reconnect. |
| Work IQ reports billing or credit errors | Verify the user's security group, applicable identity-based policy, Work IQ service selection, billing method, and spending limits. |

When requesting support, include the error text, time, and correlation or request ID. Don't share tokens, secrets, or private Microsoft 365 content.

For the resource parameter issue, see [Microsoft Entra ID rejects the resource value](https://claude.com/docs/connectors/building/troubleshooting#microsoft-entra-id-rejects-the-resource-value). This check is for compatibility during end-to-end testing, not a confirmed failure of the hosted Work IQ integration.

## Maintain or remove the connection

- **Rotate credentials:** Create a replacement secret before the old one expires. Anthropic's current guidance says editing a custom connector requires removing and re-adding it. Plan for the resulting interruption and user reconnection, enter the replacement secret when re-adding the connector, and verify sign-in and refresh before removing the old credential. Follow Claude's current supported management flow if it changes.
- **Review permissions:** Review OAuth grants, assignments, tenant policy, Claude tool approvals, and spending policies regularly. Removing a permission from the app registration's configured list doesn't by itself revoke an existing consent grant.
- **Stop access:** Disable sign-in or revoke grants on your custom enterprise application, and remove or disable the Claude connector as appropriate. Don't remove the shared Microsoft-owned Work IQ resource to disable only this integration.
- **Retire the registration:** After checking for other consumers, remove unused credentials and the custom registration according to your organization's lifecycle process.

Work IQ enforces Microsoft 365 access checks, but information already returned to Claude is subject to your organization's agreement with Anthropic and Claude's data handling settings. Disconnecting or revoking consent doesn't delete previous conversations.

## Related content

- [Work IQ MCP overview](mcp/overview.md)
- [Work IQ API permissions reference](permissions.md)
- [Policy governance for Work IQ MCP](mcp/policy-governance-mcp.md)
- [Review and revoke application permissions](/entra/identity/enterprise-apps/manage-application-permissions)
- [Authentication for Claude connectors](https://claude.com/docs/connectors/building/authentication)
- [Microsoft Work IQ APIs Terms of Use](/legal/work-iq-apis/terms-of-use?context=/microsoft-365/copilot/extensibility/context)
