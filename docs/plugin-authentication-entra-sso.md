---
title: Configure Microsoft Entra SSO authentication
description: Learn how to configure Microsoft Entra single sign-on (SSO) authentication for MCP and API plugins in agents running in Microsoft 365 Copilot.
author: amitharjani93
ms.author: amith
ms.localizationpriority: medium
ms.date: 07/27/2026
ms.topic: how-to
---

# Configure Microsoft Entra SSO authentication

Microsoft Entra single sign-on (SSO) authentication enables users to authenticate with their existing Microsoft Entra ID credentials. This integration simplifies access management and ensures secure connections to Model Context Protocol (MCP) servers or APIs without requiring extra credentials. Your MCP server or API must use Entra ID to control access.

This article uses MCP plugins as the default walkthrough. The same steps apply to API plugins built from an OpenAPI document, except where noted.

Configure Entra SSO authentication in four steps: register an Entra app to secure your MCP server, create the auth config, update the Entra app registration, and add the new token audience to your API.

## Step 1: Register an Entra app to secure your MCP server

Your MCP server or API must be secured by an Entra app registration. If you don't already have one, register an app in the [Microsoft Entra admin center](https://entra.microsoft.com/). Note the app's **client ID** - you provide it when you create the auth config in [Step 2](#step-2-create-the-entra-sso-auth-config).

## Step 2: Create the Entra SSO auth config

Entra SSO authentication relies on an **authentication configuration** (auth config) - a record stored in the Microsoft Enterprise token store that Microsoft 365 Copilot uses to obtain tokens for your MCP plugin. You can create the auth config in three ways. The recommended approaches - Microsoft 365 Agents Toolkit and the declarative agent developer skill - create the auth config and update your plugin manifest automatically. You can then use the Microsoft Teams developer portal to manage and refine the auth config.

However you create it, the auth config has an **auth config ID** and an **Application ID URI**. You use the **Application ID URI** in [Step 3](#step-3-update-the-entra-app-registration) and [Step 4](#step-4-add-the-new-token-audience-to-your-api).

> [!IMPORTANT]
> Even when Agents Toolkit or the declarative agent developer skill creates the auth config automatically, you must still complete [Step 3](#step-3-update-the-entra-app-registration) and [Step 4](#step-4-add-the-new-token-audience-to-your-api).

### Use Microsoft 365 Agents Toolkit (recommended)

When you [build an agent with an MCP plugin](build-mcp-plugins.md) in [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit), the toolkit prompts you for an authentication type as you add the MCP server plugin. Select **Microsoft Entra SSO** and provide the **client ID** of the Entra app from Step 1. Agents Toolkit creates the auth config in the Enterprise token store, generates the auth config ID, and updates the [runtime authentication object](plugin-manifest-2.4.md#runtime-authentication-object) in your plugin manifest automatically.

### Use the declarative agent developer skill

The declarative agent developer skill (`declarative-agent-developer`) is an agent skill in [Microsoft Work IQ](https://github.com/microsoft/work-iq) that packages the knowledge needed to build declarative agents. Instead of running commands or editing manifests yourself, describe what you want to Copilot or the GitHub CLI in natural language. The skill scaffolds the declarative agent, adds the MCP plugin, and handles the authentication configuration for you. The skill supports MCP plugins only. When you add an MCP server that uses Entra SSO, the skill creates the auth config in the Enterprise token store and updates the plugin manifest without manual steps.

> [!TIP]
> For a video walkthrough of using the declarative agent developer skill, see [Build declarative agents with the declarative agent developer skill](https://aka.ms/workiq-da).

### Use the Teams developer portal

Registering in the Teams developer portal is optional if you use Agents Toolkit or the declarative agent developer skill. Use it when you want to create the auth config manually, or - more commonly - to manage an auth config that Agents Toolkit or the skill already created. In the portal, you can restrict the auth config to a specific Teams app or Microsoft 365 organization and modify other properties.

1. Open [Teams developer portal](https://dev.teams.microsoft.com/tools). Select **Tools** -> **Microsoft Entra SSO client ID registration**.

1. If you have no existing registrations, select **Register client ID**. If you have existing registrations, select **New client registration**.

1. Fill in the following fields.

    - **Registration name**: A friendly name for your registration.
    - **Base URL**: Your API's base URL. This value should correspond to the URL in the `url` property of the [MCP server spec object](plugin-manifest-2.4.md#mcp-server-spec-object) in the plugin manifest for MCP-based plugins, or an entry in the [`servers` array](https://swagger.io/docs/specification/v3_0/api-host-and-base-path/) in your OpenAPI document for API plugins.
    - **Restrict usage by org**: Select which Microsoft 365 organization has access to your app to access API endpoints.
    - **Restrict usage by app**: Select **Any Teams app** if you don't know your final app ID. After you publish your app, bind this registration with your published app ID.
    - **Client ID**: The client ID of the app registered in Entra.
    - **Scope**: The delegated permissions that Microsoft 365 Copilot asks the user to consent to. Use this field to request consent for the extra permissions your API needs to run an on-behalf-of flow (for example, Microsoft Graph permissions). For more information, see [Access downstream APIs with the on-behalf-of flow](#access-downstream-apis-with-the-on-behalf-of-flow).

1. Select **Save**.

1. Completing the registration creates the auth config and generates an **auth config ID** (currently labeled **Microsoft Entra SSO registration ID** in the Teams developer portal) and an **Application ID URI**.

#### Add the auth config ID to the plugin manifest

When you create the auth config manually in the Teams developer portal, set the `type` property of the [runtime authentication object](plugin-manifest-2.4.md#runtime-authentication-object) to `OAuthPluginVault`, and set the `reference_id` to the **auth config ID**. Agents Toolkit and the declarative agent developer skill do this for you.

```json
"auth": {
  "type": "OAuthPluginVault",
  "reference_id": "auth config ID"
},
```

## Step 3: Update the Entra app registration

Regardless of how you created the auth config in Step 2, complete the following steps.

1. Open [Microsoft Entra admin center](https://entra.microsoft.com/). Update the Entra app registration that secures your MCP server or API with the **Application ID URI** from the SSO registration. If you have an existing application ID URI mapped to the app registration, use the manifest editor to add another URI in the **identifierUris** section.

    ```json
    "identifierUris": [
      "<<URI1>>",
      "<<URI2>>"
    ]
    ```

    > [!NOTE]
    > The **Expose an API** UI doesn't let you configure multiple Application ID URIs. If you need to keep your existing URIs, add the new URI in the **Manifest** section instead.

1. Select **Authentication** under **Manage**. Add `https://teams.microsoft.com/api/platform/v1.0/oAuthConsentRedirect` to the **Redirect URIs** in the **Web** platform.

1. Select **Expose an API** under **Manage**. Select **Add a client application** and add the client ID of the Microsoft Enterprise token store, `ab3be6b7-f5df-413d-ac2d-abf1e3fd9c0b`.

1. Select **Manifest** under **Manage**. Set the `requestedAccessTokenVersion` property to `2`, and save. This configures the app to issue v2.0 access tokens, which this article assumes. The token version also determines the format of the `iss` (issuer) and `aud` (audience) claims that your API validates in [Step 4](#step-4-add-the-new-token-audience-to-your-api).

    > [!NOTE]
    > With v2.0 tokens, your API validates the issuer `https://login.microsoftonline.com/<tenant-ID>/v2.0`. Don't accept the v1.0 issuer `https://sts.windows.net/<tenant-ID>/`. A token-version mismatch is a common cause of `401 Unauthorized` errors.

## Step 4: Add the new token audience to your API

Update your MCP server or API to validate the token audience. Because the app registration requests v2.0 tokens (see [Step 3](#step-3-update-the-entra-app-registration)), the `aud` (audience) claim is the app's **client ID** (a GUID), not the `api://` Application ID URI. Configure your API to accept the client ID as a valid audience.

If your MCP server or API validates the client application ID, make sure that the Microsoft Enterprise token store's client ID (`ab3be6b7-f5df-413d-ac2d-abf1e3fd9c0b`) is added as an allowed client application.

As defense in depth, also confirm that the token carries the delegated scope your API expects (the `scp` claim, such as `access_as_user`) and reject app-only tokens (an `idtyp` claim of `app`).

> [!IMPORTANT]
> Make the audience your API accepts match the token version. Because this article configures v2.0 tokens, the `aud` claim is the client ID GUID, so accept that value. If your API also accepts v1.0 tokens, additionally allow `api://<client-ID>` and the Application ID URI. A common failure is an API that accepts only the `api://` or Application ID URI form: it rejects valid v2.0 tokens - whose `aud` is the bare client ID - with `401 Unauthorized`, which can trap the user in a repeating consent prompt. For more information, see [How 401 and 403 responses affect the sign-in experience](#how-401-and-403-responses-affect-the-sign-in-experience).

### How 401 and 403 responses affect the sign-in experience

The HTTP status code your backend returns controls whether Microsoft 365 Copilot shows a consent prompt:

- **`401 Unauthorized` triggers a consent prompt.** Copilot displays a consent request for the permissions declared in the auth config **Scope** field, then retries the request.
- **`403 Forbidden` doesn't.** Copilot surfaces the error to the user without prompting for consent.

Because [Step 3](#step-3-update-the-entra-app-registration) pre-authorizes Microsoft 365 Copilot, the agent acquires the base token silently, so users don't see a prompt during normal use.

| Your backend returns | What Microsoft 365 Copilot does |
| --- | --- |
| `401 Unauthorized` | Displays a consent prompt for the configured scopes, then retries the request with the same token. |
| `403 Forbidden` | Surfaces the error to the user. It doesn't display a consent prompt. |

> [!IMPORTANT]
> The consent prompt only records the user's consent - it does **not** change the token that Microsoft 365 Copilot SSO issues. After the user consents, Copilot retries with the **same** `access_as_user` token. Consent grants your app the requested permissions so that the on-behalf-of exchange can succeed on the retry; it doesn't upgrade the token that Copilot sends to your API.

Use the status codes deliberately:

- Return `401` only when you want to request consent - for example, when your API's on-behalf-of exchange needs downstream permissions that the user hasn't consented to yet.
- Return `403` for an authentication or authorization failure, such as an invalid, expired, or unauthorized token. If you return `401` for these failures, Copilot shows a consent prompt that can't fix the problem, which can trap the user in a repeating consent loop.

> [!TIP]
> A repeating consent prompt usually means your API returns `401` for a token it should accept. A common cause is an audience mismatch: the token's `aud` is the client ID GUID, but the API accepts only the `api://` or Application ID URI form. Fix the audience validation in [Step 4](#step-4-add-the-new-token-audience-to-your-api) - re-consenting can't resolve it.

### Access downstream APIs with the on-behalf-of flow

> [!IMPORTANT]
> Microsoft 365 Copilot SSO only ever issues `access_as_user` tokens. To acquire more privileged permissions, it's up to your API or MCP server to run an on-behalf-of (OBO) flow that exchanges the `access_as_user` token for a more privileged token. Use the **Scope** configuration to declare the permissions you need consent for, and return `401 Unauthorized` to trigger a consent request on the client.

The SSO token authenticates the signed-in user to *your* API - its audience is your app and its scope is your API's own permission, `access_as_user`. It doesn't grant access to Microsoft Graph or any other downstream API. To call a downstream API as the signed-in user, exchange the SSO token for a downstream access token by using the [on-behalf-of (OBO) flow](/entra/identity-platform/v2-oauth2-on-behalf-of-flow). The OBO exchange runs in your backend and requires a client secret or certificate on your app registration.

If the downstream API requires the user to consent to its permissions, two settings work together to prompt for that consent:

- **Scope**: List the downstream delegated permissions in the **Scope** field of the auth config ([Step 2](#step-2-create-the-entra-sso-auth-config)), so that Microsoft 365 Copilot requests them and presents them to the user for consent.
- **401 Unauthorized**: Return `401` from your API when the OBO exchange fails because consent is required - for example, when Microsoft Entra returns an `invalid_grant` or `interaction_required` error. Copilot then displays a consent prompt, the user consents, and Copilot retries the request. The retried request carries the same `access_as_user` token; consent grants the downstream permissions so the OBO exchange succeeds on the retry.

Without both, the user is never prompted and the OBO exchange keeps failing. For more information, see [Microsoft Entra SSO consent isn't prompted](plugin-authentication-troubleshooting.md#microsoft-entra-sso-consent-isnt-prompted).

## Related content

- [Configure authentication for MCP and API plugins in agents](plugin-authentication.md)
- [Configure OAuth 2.0 authentication](plugin-authentication-oauth.md)
- [Troubleshoot MCP and API plugin authentication](plugin-authentication-troubleshooting.md)
