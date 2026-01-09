---
title: Configure Authentication for API plugins in Agents in Microsoft 365 Copilot
description: Learn how to set up authentication for API plugins in agents running in Microsoft 365 Copilot.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 05/19/2025
ms.topic: article
---

# Configure authentication for API plugins in agents

You can configure authentication for API plugins in agents running in Microsoft 365 Copilot by using any of the four supported authentication schemes to seamlessly connect to their backend APIs:

- OAuth 2.0 authorization code flow
- Microsoft Entra ID single-sign on (SSO) authentication
- API key authentication
- No authentication (anonymous)

## OAuth 2.0 authorization code flow

A plugin can access an API using a bearer token obtained through the OAuth 2.0 authorization code flow, with optional Proof Key for Code Exchange (PKCE) support.

Before you begin, you need to register with your OAuth 2.0 provider to get a client ID and secret. If your OAuth provider requires you to specify allowed redirect URIs during app registration, make sure to include `https://teams.microsoft.com/api/platform/v1.0/oAuthRedirect` in the list.

> [!IMPORTANT]
> API plugin support for OAuth 2.0 has the following limitations.
>
> - API plugins only support the authorization code flow for OAuth 2.0.
> - OAuth 2.0 servers that return `307 Temporary Redirect` HTTP status codes from their token endpoint aren't supported.

> [!NOTE] 
>Microsoft Teams and Declarative Agents don't provide a built-in way for users to manually clear stored OAuth credentials. The Bot Framework Token Service centrally manages tokens, and they might continue to persist after an agent is uninstalled due to SSO caching, tenant settings, or client differences. 
>  
> To force reauthentication, use server-side sign out by calling [`SignOutUserAsync`](https://learn.microsoft.com/dotnet/api/microsoft.bot.builder.botframeworkadapter.signoutuserasync) to invalidate bot tokens. For a full reset, you can optionally combine this method with Microsoft Graph’s [`revokeSignInSessions`](https://learn.microsoft.com/graph/api/user-revokesigninsessions) or remove the user's consent.  
>  
> For a better user experience, consider adding a **“Log out / switch account”** action that triggers these server-side sign out flows so users are prompted to sign in again.

You can define this scheme in the `securitySchemes` property of an OpenAPI document. For more information, see [OAuth 2.0](https://swagger.io/docs/specification/authentication/oauth2/).

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

To enable OAuth 2.0 authentication, you need to register an OAuth client in the Teams developer portal. You can register an OAuth client with [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) in Visual Studio Code or by manually registering in the Teams developer portal.

### Register an OAuth client with Agents Toolkit

 Agents Toolkit registers your OAuth client and updates your app package for you when you [create an agent with API plugin from an existing OpenAPI document](build-api-plugins-existing-api.md). You must have the `securitySchemes` property defined in your OpenAPI document.

If your OAuth provider supports PKCE, uncomment the following line of code in m365agents.yml in your agent project before provisioning the agent.

```yml
# isPKCEEnabled: true
```

### Register an OAuth client in Teams developer portal

1. Open [Teams developer portal](https://dev.teams.microsoft.com/tools). Select **Tools** -> **OAuth client registration**.

1. If you have no existing registrations, select **Register client**. If you have existing registrations, select **New OAuth client registration**.

1. Fill in the following fields.

    - **Registration name**: A friendly name for your registration.
    - **Base URL**: Your API's base URL. This value should correspond to an entry in the [`servers` array](https://swagger.io/docs/specification/v3_0/api-host-and-base-path/) in your OpenAPI document.
    - **Client ID**: The client ID or application ID issued by your OAuth 2.0 provider.
    - **Client secret**: Your client secret issued by your OAuth 2.0 provider.
    - **Authorization endpoint**: The URL from your OAuth 2.0 provider that apps use to [request an authorization code](/entra/identity-platform/v2-oauth2-auth-code-flow#request-an-authorization-code)
    - **Token endpoint**: The URL from your OAuth 2.0 provider that apps use to [redeem a code for an access token](/entra/identity-platform/v2-oauth2-auth-code-flow#redeem-a-code-for-an-access-token)
    - **Refresh endpoint**: The URL from your OAuth 2.0 provider that apps use to [refresh the access token](/entra/identity-platform/v2-oauth2-auth-code-flow#refresh-the-access-token)
    - **Scope**: The permission scope defined by your API that allows access.
    - **Enable Proof Key for Code Exchange (PKCE)**: Enable this setting if your OAuth provider supports PKCE.

1. Select **Save**.

1. Completing the registration generates an **OAuth client registration ID**.

#### Add the client registration ID to the plugin manifest

To use OAuth 2.0 authentication for your API plugin, set the `type` property of the [runtime authentication object](api-plugin-manifest.md#runtime-authentication-object) to `OAuthPluginVault`, and set the `reference_id` to the client registration ID from the Teams Developer Portal.

```json
"auth": {
  "type": "OAuthPluginVault",
  "reference_id": "auth registration ID"
},
```

## Microsoft Entra ID SSO authentication

Microsoft Entra ID SSO authentication allows seamless single sign-on (SSO) integration, enabling users to authenticate with their existing Microsoft Entra ID credentials. This integration simplifies access management and ensures secure connections to APIs without requiring extra credentials. Your API must use Microsoft Entra ID to control access.

### Register an SSO client in Teams developer portal

1. Open [Teams developer portal](https://dev.teams.microsoft.com/tools). Select **Tools** -> **Microsoft Entra SSO client ID registration**.

1. If you have no existing registrations, select **Register client ID**. If you have existing registrations, select **New client registration**.

1. Fill in the following fields.

    - **Registration name**: A friendly name for your registration.
    - **Base URL**: Your API's base URL. This value should correspond to an entry in the [`servers` array](https://swagger.io/docs/specification/v3_0/api-host-and-base-path/) in your OpenAPI document.
    - **Restrict usage by org**: Select which Microsoft 365 organization has access to your app to access API endpoints.
    - **Restrict usage by app**: Select **Any Teams app** if you don’t know your final app ID. After you publish your app, bind this registration with your published app ID.
    - **Client ID**: The client ID of the app registered in Microsoft Entra.

1. Select **Save**.

1. Completing the registration generates a **Microsoft Entra SSO registration ID** and an **Application ID URI**.

### Update the Microsoft Entra app registration

1. Open [Microsoft Entra admin center](https://entra.microsoft.com/). Update the Microsoft Entra app registration that secures your API with the **Application ID URI** generated by the Teams developer portal. If you have an existing application ID URI mapped to the app registration, you can use the manifest editor to add another URI in the **identifierUris** section.

    ```json
    "identifierUris": [
      "<<URI1>>"
      "<<URI2>>"
    ]
    ```

    > [!NOTE]
    > Adding multiple URIs isn't supported through the Microsoft Entra admin center's UI. The UI only displays the first URI in the list. Adding multiple URIs doesn't affect your existing URIs and scopes even if they show differently in the UI.

1. Select **Authentication** under **Manage**. Add `https://teams.microsoft.com/api/platform/v1.0/oAuthConsentRedirect` to the **Redirect URIs** in the **Web** platform.

1. Select **Expose an API** under **Manage**. Select **Add a client application** and add the client ID of Microsoft's enterprise token store, `ab3be6b7-f5df-413d-ac2d-abf1e3fd9c0b`.

### Add the SSO registration ID to the plugin manifest

Set the `type` property of the [runtime authentication object](api-plugin-manifest.md#runtime-authentication-object) to `OAuthPluginVault`, and set the `reference_id` to the **Microsoft Entra SSO registration ID** from the Teams developer portal.

```json
"auth": {
  "type": "OAuthPluginVault",
  "reference_id": "SSO registration ID"
},
```

### Add the new token audience to your API

Update your API to allow the new identifier URI as the token audience. If your API validates the client application ID, make sure that the Microsoft enterprise token store's client ID (`ab3be6b7-f5df-413d-ac2d-abf1e3fd9c0b`) is added as an allowed client application.

> [!TIP]
> If your API uses the [on-behalf-of flow](/entra/identity-platform/v2-oauth2-on-behalf-of-flow) to get access to another web API that requires the user to grant consent, return a `401 Unauthorized` error to cause the agent to prompt the user to sign in to grant consent.

## API key authentication

Some APIs use API keys for authorization. An API key is a shared secret that the client includes in API requests to authenticate and gain access. API plugins support sending the API key in three ways:

- As a bearer token in the `Authorization` header
- As a value in a custom header
- As a query parameter

### Add API key to your OpenAPI document

Microsoft 365 Copilot determines how to send the API key based on the `securitySchemes` entry in your OpenAPI document.

#### Bearer token

If your API accepts the API key as a bearer token, enable Bearer authentication in your OpenAPI document. For more information, see [Bearer authentication](https://swagger.io/docs/specification/v3_0/authentication/bearer-authentication/).

```yml
securitySchemes:
  BearerAuth:
    type: http
    scheme: bearer
```

#### Custom header

If your API accepts the API key in a custom header, enable API key authentication in your OpenAPI document with the `in` property set to `header` and the `name` property set to the header name. For more information, see [API Keys](https://swagger.io/docs/specification/v3_0/authentication/api-keys/).

```yml
securitySchemes:
  ApiKeyAuth:
    type: apiKey
    in: header
    name: X-API-KEY
```

#### Query parameter

If your API accepts the API key in a query parameter, enable API key authentication in your OpenAPI document with the `in` property set to `query` and the `name` property set to the name of the query parameter. For more information, see [API Keys](https://swagger.io/docs/specification/v3_0/authentication/api-keys/).

```yml
securitySchemes:
  ApiKeyAuth:
    type: apiKey
    in: query
    name: api_key
```

### Register an API key

To enable API key authentication, you need to register the API key in the Teams developer portal. You can register the API key with Agents Toolkit in Visual Studio Code or by manually registering in the Teams developer portal.

#### Register an API key with Agents Toolkit

 Agents Toolkit registers your API key and updates your app package for you when you create an agent with API plugin from an existing OpenAPI document. You must have the `securitySchemes` property defined in your OpenAPI document.

#### Register an API key in Teams developer portal

1. Open [Teams developer portal](https://dev.teams.microsoft.com/tools). Select **Tools** -> **API key registration**

1. If you have no existing registrations, select **Create an API key**. If you have existing registrations, select **New API key**.

1. Select **Add secret** and enter the API key.

1. Fill in the following fields.

    - **API key name**: A friendly name for your registration.
    - **Base URL**: Your API's base URL. This value should correspond to an entry in the [`servers` array](https://swagger.io/docs/specification/v3_0/api-host-and-base-path/) in your OpenAPI document.
    - **Target tenant**: Limit API access to home tenant or not.
    - **Target Teams App**: Select **Any Teams app** if you don’t know your final app ID. After you publish your app, bind this registration with your published app ID.

1. Select **Save**.

1. Completing the registration generates an **API key registration ID**.

##### Add the API key registration ID to the plugin manifest

1. In your plugin manifest file, set the `type` property of the [runtime authentication object](api-plugin-manifest.md#runtime-authentication-object) to `ApiKeyPluginVault`, and set the `reference_id` to the API key registration ID from the Teams developer portal.

```json
"auth": {
  "type": "ApiKeyPluginVault",
  "reference_id": "app key registration ID"
},
```

## No authentication (anonymous)

For APIs that don't require any authentication, or for developer environments where authentication isn't yet implemented, plugins can access the APIs anonymously. In this case, set the `type` property of the [runtime authentication object](api-plugin-manifest.md#runtime-authentication-object) to `None`.

```json
"auth": {
  "type": "None"
},
```
