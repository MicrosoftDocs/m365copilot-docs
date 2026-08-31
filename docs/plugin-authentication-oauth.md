---
title: Configure OAuth 2.0 authentication
description: Learn how to configure OAuth 2.0 authorization code flow authentication for MCP and API plugins in agents running in Microsoft 365 Copilot.
author: amitharjani93
ms.author: amith
ms.localizationpriority: medium
ms.date: 08/28/2026
ms.topic: how-to
---

# Configure OAuth 2.0 authentication

A plugin can access a Model Context Protocol (MCP) server or API by using a bearer token obtained through the OAuth 2.0 authorization code flow, with Proof Key for Code Exchange (PKCE) support enabled by default. In this flow, Microsoft 365 Copilot opens the sign-in experience, the OAuth provider returns an authorization response to Microsoft Teams, and Teams exchanges the authorization code for tokens.

This article uses MCP plugins as the default walkthrough. The same steps apply to API plugins built from an OpenAPI document, except where noted.

Configure OAuth 2.0 authentication in three steps: register an OAuth client with your identity provider, configure the redirect URI, and create the OAuth 2.0 configuration.

## Step 1: Register an OAuth client with your identity provider

Register an app with your OAuth 2.0 provider (your identity provider) to get a **client ID** and, for a confidential (Web) client, a **client secret**. Provide these values when you create the OAuth 2.0 configuration in [Step 3](#step-3-create-the-oauth-20-auth-config).

For an MCP server that requires authorization, set the `type` property of the [runtime authentication object](plugin-manifest-2.4.md#runtime-authentication-object) to `OAuthPluginVault`. `None` and `ApiKeyPluginVault` don't apply to an MCP server that requires authorization. Only the auth config ID is stored in the manifest - no client ID, client secret, or token is written to it. To register the client dynamically instead of statically, keep `type` as `OAuthPluginVault` and create the auth config through [dynamic client registration (DCR)](plugin-authentication-dynamic-client-registration.md), which isn't available for a server that's protected by Microsoft Entra ID.

> [!NOTE]
> These values apply to the plugin manifest. If you instead register your MCP server as an *agent connector* in the `agentConnectors` node of the Microsoft 365 app manifest, use `OAuthPluginVault` or `DynamicClientRegistration` there as well. Don't use `AzureKeyVault`: it exists only in the `devPreview` schema, so a package that targets a numbered schema version fails validation. For more information, see [Register MCP servers as agent connectors](/microsoftteams/platform/m365-apps/agent-connectors).

## Step 2: Configure the redirect URI

Add the following redirect URI (also called the authorization callback URL) to your OAuth provider registration:

```http
https://teams.microsoft.com/api/platform/v1.0/oAuthRedirect
```

This is the URL where your OAuth provider sends the authorization response after a user signs in. Teams receives the response at this callback URL and exchanges the authorization code for tokens. If you don't register this redirect URI with your provider, sign-in fails. The redirect URI is the same for every plugin and provider - you don't customize it per app.

## Step 3: Create the OAuth 2.0 auth config

OAuth 2.0 authentication relies on an **authentication configuration** (auth config) - a record stored in the Microsoft Enterprise token store that Microsoft 365 Copilot uses to obtain and refresh tokens for your MCP plugin. You can create the auth config in three ways. The recommended approaches - Microsoft 365 Agents Toolkit and the declarative agent developer skill - create the auth config and update your plugin manifest automatically. You can then use the Teams developer portal to manage and refine the auth config.

However you create it, the auth config has an **auth config ID** that your plugin manifest references.

### Use Microsoft 365 Agents Toolkit (recommended)

When you [build an agent with an MCP plugin](build-mcp-plugins.md) (if the server requires authentication) or [create an API plugin from an existing OpenAPI document](build-api-plugins-existing-api.md) in [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit), the toolkit prompts you for the OAuth **client ID**, **client secret**, and **scopes**. Agents Toolkit fetches the authorization, token, and refresh endpoints from the well-known endpoint of your MCP server (or from the OpenAPI document for API plugins), creates the auth config in the Enterprise token store, and updates the [runtime authentication object](plugin-manifest-2.4.md#runtime-authentication-object) in your plugin manifest automatically.

> [!NOTE]
> For API plugins, you must define the `securitySchemes` property in your OpenAPI document so Agents Toolkit can read the OAuth details. For more information, see [OAuth 2.0](https://swagger.io/docs/specification/authentication/oauth2/).

```yml
securitySchemes:
  OAuth2:
    type: oauth2
    flows:
      authorizationCode:
        authorizationUrl: <authorization_url>
        tokenUrl: <token_url>
        refreshUrl: <refresh_url>
        scopes:
          scope: description
```

PKCE is enabled by default, because many organizations block client secrets. Set `isPKCEEnabled` to `false` in m365agents.yml in your agent project before you provision the agent only when your OAuth provider doesn't support PKCE.

```yml
isPKCEEnabled: false
```

To avoid client secrets entirely, register a public client with your provider - a single-page application platform rather than a Web platform - and let PKCE secure the code exchange.

### Use the declarative agent developer skill

The declarative agent developer skill (declarative-agent-developer) is an agent skill in [Microsoft Work IQ](https://github.com/microsoft/work-iq) that packages the knowledge needed to build declarative agents. Instead of running commands or editing manifests yourself, you describe what you want to Copilot or the GitHub CLI in natural language, and the skill scaffolds the declarative agent, adds the MCP plugin, and handles the authentication configuration for you. The skill supports MCP plugins only. For OAuth 2.0, it supports both static registration and [dynamic client registration (DCR)](plugin-authentication-dynamic-client-registration.md): it creates the auth config in the Enterprise token store and updates the plugin manifest without manual steps.

> [!TIP]
> For a video walkthrough of using the declarative agent developer skill, see [Build declarative agents with the declarative agent developer skill](https://aka.ms/workiq-da).

### Use the Teams developer portal

Registering in the Teams developer portal is optional if you use Agents Toolkit or the declarative agent developer skill. Use it when you want to create the auth config manually, or - more commonly - to manage an auth config that Agents Toolkit or the skill already created. In the portal, you can restrict the auth config to a specific Teams app or Microsoft 365 organization and modify other properties.

The OAuth client registration in the Teams developer portal connects your agent's plugin configuration to the OAuth provider registration that issues tokens for your MCP server or API. The values in this registration must match your OAuth provider, your plugin manifest, and the protected API endpoint. Mismatched base URLs, app restrictions, or auth config IDs can prevent users from signing in or can block token exchange.

> [!WARNING]
> Restrict the registration to **Any Teams app**. A registration that's restricted to a specific Teams app binds to that Teams app ID. Microsoft 365 Copilot doesn't resolve that ID when it calls an MCP server, so provisioning finishes successfully and then every tool call returns a `404` error.

1. Open [Teams developer portal](https://dev.teams.microsoft.com/tools). Select **Tools** -> **OAuth client registration**.

1. If you have no existing registrations, select **Register client**. If you have existing registrations, select **New OAuth client registration**.

1. Fill in the following fields.

    - **Registration name**: A friendly name for your registration.
    - **Base URL**: Your API's base URL. This value should correspond to the URL in the `url` property of the [MCP server spec object](plugin-manifest-2.4.md#mcp-server-spec-object) in the plugin manifest for MCP-based plugins, or an entry in the [`servers` array](https://swagger.io/docs/specification/v3_0/api-host-and-base-path/) in your OpenAPI document for API plugins.
    - **Restrict usage by org**: Select which Microsoft 365 organizations can use this OAuth registration to access your API endpoints. Use **My organization only** for development or testing in one tenant. Use **Any Microsoft 365 organization** when the plugin must work across tenants.
    - **Restrict usage by app**: Select **Any Teams app**. Don't bind the registration to **Existing Teams app ID** for an MCP server. If you provision the auth config with Microsoft 365 Agents Toolkit instead, the equivalent setting in the `oauth/register` action in m365agents.yml is `applicableToApps: AnyApp`. Keep the `appId` field in that action even though `AnyApp` makes it inert, because the provisioning driver validates `appId` unconditionally and removing it breaks provisioning.
    - **Client ID**: The client ID or application ID issued by your OAuth 2.0 provider.
    - **Client secret**: Your client secret issued by your OAuth 2.0 provider.
    - **Authorization endpoint**: The URL from your OAuth 2.0 provider that apps use to [request an authorization code](/entra/identity-platform/v2-oauth2-auth-code-flow#request-an-authorization-code).
    - **Token endpoint**: The URL from your OAuth 2.0 provider that apps use to [redeem a code for an access token](/entra/identity-platform/v2-oauth2-auth-code-flow#redeem-a-code-for-an-access-token).
    - **Refresh endpoint**: The URL from your OAuth 2.0 provider that apps use to [refresh the access token](/entra/identity-platform/v2-oauth2-auth-code-flow#refresh-the-access-token).
    - **Scope**: The permissions your plugin requests from the OAuth provider. Use the scope values required by your provider and API. If your provider uses the Microsoft identity platform and your plugin needs refresh tokens, include `offline_access` with any API-specific delegated scopes.
    - **Enable Proof Key for Code Exchange (PKCE)**: Leave this setting enabled. It's on by default; disable it only if your OAuth provider doesn't support PKCE.

1. Select **Save**.

1. Completing the registration creates the auth config and generates an **auth config ID** (currently labeled **OAuth client registration ID** in the Teams developer portal).

#### Add the auth config ID to the plugin manifest

When you create the auth config manually in the Teams developer portal, set the `type` property of the [runtime authentication object](plugin-manifest-2.4.md#runtime-authentication-object) to `OAuthPluginVault`, and set the `reference_id` to the **auth config ID**. Agents Toolkit and the declarative agent developer skill do this for you.

```json
"auth": {
  "type": "OAuthPluginVault",
  "reference_id": "auth config ID"
},
```

## Microsoft Entra ID considerations

When you protect your MCP server by using Microsoft Entra ID, three constraints apply that you can't work around in tooling.

- **Dynamic client registration isn't available.** Microsoft Entra ID doesn't publish an [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591) registration endpoint, so [dynamic client registration](plugin-authentication-dynamic-client-registration.md) has nothing to register against. Register the OAuth client statically by following the steps in this article.
- **The `agentConnectors` node has no Microsoft Entra authorization type.** Unlike `composeExtensions`, the `agentConnectors` node in the Microsoft 365 app manifest has no `microsoftEntra` authorization type. An MCP server that's protected by Microsoft Entra ID always needs an app that you register yourself in Microsoft Entra ID, plus an OAuth auth config, even when the server fronts a first-party Microsoft API.
- **Scope consent isn't verified when you provision.** Provisioning doesn't check whether the scope you request can be consented to. A scope that can't be consented to provisions successfully and then fails later with *Need admin approval*, and the resource app can be invisible to both you and your tenant admin. Confirm that an administrator consented to the scope before you provision.

## Manage the auth config

The `oauth/register` action in m365agents.yml only creates an auth config or skips creating one - it never rewrites an existing record.

- If `configurationId` already has a value, the action does nothing.
- If `configurationId` points to a registration that you deleted, the action warns you and does nothing.
- To change the values in an existing registration, use the `oauth/update` action.
- To delete a registration, use the [Teams developer portal](https://dev.teams.microsoft.com/tools). It's the only place where you can delete one.

## Sign out

> [!NOTE]
> Users can sign out of an agent from **Chat settings** > **Agents** in Microsoft 365 Copilot. This action clears the stored OAuth token.

## Related content

- [Configure authentication for MCP and API plugins in agents](plugin-authentication.md)
- [Configure Microsoft Entra SSO authentication](plugin-authentication-entra-sso.md)
- [Troubleshoot MCP and API plugin authentication](plugin-authentication-troubleshooting.md)
