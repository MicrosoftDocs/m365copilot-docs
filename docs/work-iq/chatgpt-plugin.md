---
title: Set up Work IQ in ChatGPT
description: Learn how to install Work IQ in ChatGPT, grant Microsoft Entra admin consent, and configure usage-based billing with Copilot Credits.
author: slabereemsft
ms.author: seanla
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/17/2026
---

# Set up Work IQ in ChatGPT

The Work IQ plugin connects ChatGPT to Microsoft 365 context from emails, calendars, Microsoft Teams messages, and files in SharePoint and OneDrive. Requests run on behalf of the signed-in user and respect that user's Microsoft 365 permissions and tenant policy.

Work IQ is available in ChatGPT only in Business and Enterprise workspaces.

This article describes setup for the published Work IQ plugin, including installation, connecting a user account, granting Microsoft Entra consent, and enabling usage-based billing. You don't create an app registration or enter a client secret for this setup.

## Setup overview

| Task | Role | Purpose |
| --- | --- | --- |
| [Make Work IQ available in the workspace](#make-work-iq-available-in-the-workspace) | ChatGPT workspace administrator | Allows the intended members to install and use Work IQ. |
| [Grant Microsoft Entra admin consent](#grant-microsoft-entra-admin-consent) | Authorized Microsoft Entra administrator | Approves the application's requested permissions in the Microsoft 365 tenant. |
| [Set up usage-based billing](#set-up-usage-based-billing) | Microsoft 365 billing administrator | Enables Work IQ API usage for the intended users through a spending policy. |
| [Install Work IQ and connect your account](#install-work-iq-and-connect-your-account) | Each user | Installs Work IQ and connects the user's own work or school account to Work IQ in ChatGPT. |

Administrators can configure consent and billing before users connect. Plugin installation, access to its connected capabilities, Microsoft Entra consent, and billing are separate controls. None replaces the others.

## Prerequisites

### User requirements

- Access to a ChatGPT Business or ChatGPT Enterprise workspace with Work IQ available. Availability within these plans also depends on your region, workspace settings, role, and supported ChatGPT interface.
- Permission from your organization to connect Microsoft 365 data to ChatGPT.
- A work or school account in the Microsoft 365 tenant enabled for Work IQ, with access to the content you want to use.
- Microsoft Entra admin consent and coverage under a spending policy that enables the Work IQ API.
- Any enterprise application assignment required by your administrator.

Work IQ doesn't support personal Microsoft accounts. Connecting a Microsoft 365 account doesn't change your ChatGPT account or switch you to a managed ChatGPT workspace. Select your organization's approved workspace before connecting.

### Administrator requirements

| Task | Required access |
| --- | --- |
| Manage Work IQ availability in ChatGPT | A workspace owner or administrator with permission to manage plugins and connected apps. See [Admin controls for plugins and apps](https://help.openai.com/en/articles/11509118). |
| Enable the Work IQ resource | The administrator access described in [Enable your tenant for Work IQ](enable-work-iq.md). |
| Grant Microsoft Entra consent | A role authorized to grant the requested permissions, such as Cloud Application Administrator for delegated permissions. See [Grant tenant-wide admin consent](/entra/identity/enterprise-apps/grant-admin-consent#prerequisites). |
| Activate billing and create spending policies | Global Administrator or Billing Administrator. See [Billing roles and requirements](/copilot/implement/usage-based-billing-copilot-credits-setup#roles-and-requirements). |

Usage-based billing requires an approved billing method. To scope a spending policy to selected users, add them to a Microsoft Entra security group.

## Make Work IQ available in the workspace

For your ChatGPT Business or ChatGPT Enterprise workspace, an authorized workspace administrator needs to review and enable Work IQ before members install it and connect.

1. Open the [OpenAI Admin Console](https://admin.openai.com) and select the intended ChatGPT workspace.
1. Open **Plugins** and find **Work IQ**. Review its included capabilities and setup requirements.
1. Make Work IQ available to the intended members. Review its installation policy and access settings for its connected capabilities separately.
1. Where role-based access controls are available, configure the roles that can install and use Work IQ.
1. Review the supported action controls and approval settings. Allow only the actions your organization needs.
1. Save the settings and have a member verify that Work IQ is available in the intended workspace.

Plugin installation doesn't authorize a Microsoft 365 account or override access settings for connected capabilities. Microsoft Entra consent and application assignments still apply.

For current navigation, plan-specific controls, and legacy app administration, see [Admin controls, security, and compliance for plugins and apps](https://help.openai.com/en/articles/11509118).

## Install Work IQ and connect your account

1. Sign in to ChatGPT and select your organization's approved workspace.
1. Open **Plugins** in the sidebar and find **Work IQ**, or open the [Work IQ listing](https://chatgpt.com/plugins/plugin_asdk_app_6aed0dcda1ac8191b1d514f1679f8f75).
1. Review the publisher, included capabilities, and setup requirements, and then select **Install plugin**.
1. Follow the connection prompts. To manage the connection after installation, open **Settings** > **Plugins**, select **Work IQ**, and select **Connect** when prompted.
1. Sign in with the work or school account that has access to the Microsoft 365 content you need.
1. Review the application identity and requested permissions before completing authorization.
1. Return to ChatGPT and confirm that the intended Microsoft 365 account is connected.

If Microsoft asks for admin approval, have your Microsoft Entra administrator complete [admin consent](#grant-microsoft-entra-admin-consent), and then connect again.

If Work IQ isn't available, ask your ChatGPT workspace administrator to check its installation policy and access settings. For current installation steps, see [Plugins in ChatGPT](https://help.openai.com/en/articles/20001256). For account connection steps, see [Connecting and managing app accounts in ChatGPT](https://help.openai.com/en/articles/20001494).

## Grant Microsoft Entra admin consent

An authorized Microsoft Entra administrator must approve the plugin's requested permissions. Use the approved Entra application details to identify it.

| Setting | Value |
| --- | --- |
| Enterprise application name | `ChatGPT` |
| Application (client) ID | `e0476654-c1d5-430b-ab80-70cbd947616a` |

The client application and the Work IQ resource are different applications. Don't use a Claude or CLI client ID to authorize the ChatGPT integration.

### Enable the Work IQ resource

If the Work IQ resource service principal isn't provisioned in your tenant, follow [Enable your tenant for Work IQ](enable-work-iq.md) before granting consent.

### Option 1: Grant consent during sign-in

1. Install Work IQ and start its connection flow in ChatGPT.
1. Sign in with a Microsoft Entra account authorized to grant consent in the intended tenant.
1. Verify the application name and client ID against the approved values in this article.
1. Review all requested permissions. If approved, select the option to consent on behalf of your organization, and then accept.
1. Have users connect with their own work or school accounts. Don't leave an administrator's Microsoft 365 account connected for other users to share.

### Option 2: Grant consent without a ChatGPT account

1. Replace `{your-tenant-id}` with your Microsoft 365 tenant ID in the following URL. The client ID identifies Work IQ in ChatGPT.

   ```text
   https://login.microsoftonline.com/{your-tenant-id}/adminconsent?client_id=e0476654-c1d5-430b-ab80-70cbd947616a
   ```

1. Open the URL and sign in with an authorized administrator account for that tenant.
1. Verify the application identity and requested permissions. If approved, select **Accept**.
1. In the [Microsoft Entra admin center](https://entra.microsoft.com), go to **Entra ID** > **Enterprise apps** > **All applications**.
1. Find the application by its client ID, open **Permissions**, and verify the tenant-wide grant.

If the enterprise application already exists, you can instead open **Permissions** and select **Grant admin consent**. For more information, see [Grant tenant-wide admin consent to an application](/entra/identity/enterprise-apps/grant-admin-consent).

### Understand permissions and approval controls

Work IQ uses delegated permissions, so requests run on behalf of the signed-in user. Application-only authentication isn't supported. Some Work IQ permissions allow changes to Microsoft 365 data, not just reading. Review the actual consent prompt and the [Work IQ API permissions reference](permissions.md).

ChatGPT plugin availability, access to connected capabilities, action controls, and approval settings are separate from Microsoft Entra consent. An approval setting determines when ChatGPT asks before using existing access; it doesn't grant new Microsoft 365 access or revoke an OAuth grant. Work IQ tenant policy also applies.

For current approval options, see [Managing app permissions in ChatGPT](https://help.openai.com/en/articles/20001495).

### Restrict which users can sign in

1. In the Microsoft Entra admin center, open the ChatGPT integration's enterprise application. Verify its client ID.
1. Under **Properties**, set **Assignment required?** to **Yes**, and save.
1. Under **Users and groups**, assign the approved users or groups.
1. Ensure those users are covered by a Work IQ spending policy.

Application assignments restrict access to this enterprise application. A Work IQ spending policy can cover other integrations too; it isn't a ChatGPT-only access control.

For assignment requirements and licensing considerations, see [Assign users and groups to an application](/entra/identity/enterprise-apps/assign-user-or-group-access-portal).

## Set up usage-based billing

Work IQ API usage is billed in Copilot Credits through the Microsoft 365 admin center. Configure it separately from your ChatGPT subscription and Microsoft Entra consent. See [Getting started with usage-based billing](/copilot/implement/usage-based-billing-copilot-credits-setup#getting-started-with-usage-based-billing).

After configuring usage-based billing, configure an identity-based spending policy, or update an existing policy with the required users and service. See [Add identity-based spending policy](/copilot/implement/usage-based-billing-manage-copilot-credits#add-identity-based-spending-policy).

For policy selection rules and complete instructions, see [Managing AI experiences enabled by usage-based billing](/copilot/implement/usage-based-billing-manage-copilot-credits).

### Monitor consumption

Use **Copilot** > **Cost management** to review usage by service, policy, and user. When a user reaches an applicable spending limit, access can stop until the limit increases or the monthly period resets.

For reporting guidance, see [Monitor Copilot Credit spending](/copilot/implement/usage-based-billing-copilot-credits-monitor-spending).

## Verify the setup

Test with a non-administrator account covered by your application assignments and spending policy.

1. Open the intended ChatGPT workspace and confirm that Work IQ is installed and connected to the test user's Microsoft 365 account.
1. In a supported text conversation, select **Work IQ** if needed.
1. Enter the following prompt.

   ```text
   Use Work IQ to show my meetings for today. Don't create or change anything.
   ```

1. Review any tool approval request before allowing access.
1. Compare the response and source links with the user's calendar in Microsoft 365.
1. Review Work IQ consumption in Cost management when reporting becomes available.

If assignment is required, verify that an unassigned test user can't sign in to the enterprise application. A successful response for an assigned user alone doesn't verify the restriction.

## Troubleshoot setup

| Symptom | What to check |
| --- | --- |
| Work IQ isn't listed or shows **Disabled by admin** | Confirm that you're using a ChatGPT Business or ChatGPT Enterprise workspace, then check published plugin availability, plugin installation policy, access to connected capabilities, and applicable role settings. |
| Microsoft asks for admin approval | Verify consent for the approved ChatGPT client ID in the user's tenant. Consent for a different Work IQ client doesn't authorize this one. |
| Consent reports a missing resource | Confirm that the Work IQ resource service principal is provisioned. See [Enable your tenant for Work IQ](enable-work-iq.md). |
| The wrong Microsoft 365 account is used | Review the connected account under **Settings** > **Plugins** and reconnect with the intended work or school account. |
| Sign-in is blocked | Check enterprise application assignments, the user's tenant, Microsoft Entra sign-in logs, and Conditional Access requirements with your administrator. |
| Sign-in succeeds but Work IQ reports billing errors | Check the user's security group, applicable identity-based policy, selected Work IQ service, billing method, and spending limits. |
| A tool is unavailable or denied | Check the plugin's supported capabilities, workspace action controls, Work IQ tenant policy, OAuth grants, and the user's resource permissions. Don't bypass a policy denial. |
| Expected content isn't returned | Verify the user's access directly in Microsoft 365. Search results aren't a complete inventory of accessible content. |

For support requests, include the error text, time, and correlation or request ID. Don't include access tokens, client secrets, or sensitive Microsoft 365 content.

## Privacy and access management

Work IQ checks the signed-in user's Microsoft 365 permissions. Information returned to ChatGPT is also subject to your organization's agreement with OpenAI and its ChatGPT data handling, retention, and training settings. Review those settings before connecting work data.

| Role | Access management |
| --- | --- |
| User | Under **Settings** > **Plugins**, open **Work IQ** and select **Disconnect** for the relevant connection, where permitted. Review the warnings before uninstalling Work IQ. |
| ChatGPT workspace administrator | Manage plugin availability, access to its connected capabilities, action controls, and approval settings. Disabling a connected capability doesn't necessarily uninstall the plugin or remove unrelated skills. |
| Microsoft Entra administrator | Review sign-ins and assignments, revoke consent, or disable application sign-in. See [Review and revoke permissions](/entra/identity/enterprise-apps/manage-application-permissions). |
| Billing administrator | Manage spending policies, reviewing other users, integrations, and services affected by a change. |

Disconnecting or uninstalling Work IQ doesn't automatically delete information already returned to conversations, saved files, or memories. Review ChatGPT retention and deletion controls separately.

## Related content

- [Work IQ overview](index.md)
- [Work IQ API permissions reference](permissions.md)
- [Policy governance for Work IQ MCP](mcp/policy-governance-mcp.md)
- [Connected apps in ChatGPT](https://help.openai.com/en/articles/11487775)
- [Plugins in ChatGPT](https://help.openai.com/en/articles/20001256)
- [Microsoft Work IQ APIs Terms of Use](/legal/work-iq-apis/terms-of-use?context=/microsoft-365/copilot/extensibility/context)
