---
title: Authentication schemes for API plugins for Microsoft 365 Copilot
description: Learn about the supported authentication schemes for API plugins in Microsoft 365 Copilot
author: jasonjoh
ms.author: jasonjoh
ms.date: 10/09/2024
ms.topic: conceptual
---

# Authentication schemes for API plugins for Microsoft 365 Copilot

[!INCLUDE [api-plugins-declarative-agents-only](includes/api-plugins-declarative-agents-only.md)]

API plugins for Microsoft 365 Copilot support three authentication schemes to connect to their backend APIs.

- OAuth 2.0 authorization code flow
- API key via [bearer authentication](https://swagger.io/docs/specification/authentication/bearer-authentication/)
- No authentication (anonymous)

## OAuth 2.0 authorization code flow

This authentication scheme allows a plugin to access an API using a bearer token acquired by an OAuth 2.0 authorization code flow. This scheme can be represented in an OpenAPI document in the `securitySchemes` property. See [OAuth 2.0](https://swagger.io/docs/specification/authentication/oauth2/) for details.

> [!IMPORTANT]
> API plugins only support the authorization code flow for OAuth 2.0.

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

To use this authentication scheme in a plugin, you must register an OAuth client in the [Teams Developer portal](https://dev.teams.microsoft.com/).

> [!TIP]
> If your OpenAPI document includes the `securitySchemes` property, Teams Toolkit can register your OAuth client and update your manifest for you when you [generate a plugin from an existing API](build-api-plugins-existing-api.md).

### Register an OAuth client

> [!NOTE]
> If your OAuth provider requires specifying allowed redirect URIs when registering your app, include `https://teams.microsoft.com/api/platform/v1.0/oAuthRedirect` in the allowed redirect URIs.

1. Open your browser and browse to the [Teams apps developer portal](https://dev.teams.microsoft.com/tools). Select **Tools** in the left-hand navigation.

1. Select **OAuth client registration**. If you have no existing registrations, select **Register client**; if you have existing registrations, select **New OAuth client registration**.

1. Fill in the following fields.

    - **Registration name**: A friendly name for your registration
    - **Base URL**: Your API's base URL
    - **Client ID**: The client ID or application ID issued by your OAuth 2.0 server
    - **Client secret**: Your client secret issued by your OAuth 2.0 server
    - **Authorization endpoint**: The URL from your OAuth 2.0 server that apps use to [request an authorization code](/entra/identity-platform/v2-oauth2-auth-code-flow#request-an-authorization-code)
    - **Token endpoint**: The URL from your OAuth 2.0 server that apps use to [redeem a code for an access token](/entra/identity-platform/v2-oauth2-auth-code-flow#redeem-a-code-for-an-access-token)
    - **Refresh endpoint**: The URL from your OAuth 2.0 server that apps use to [refresh the access token](/entra/identity-platform/v2-oauth2-auth-code-flow#refresh-the-access-token)
    - **Scope**: The permission scope defined by your API that grants access.

1. Select **Save**.

Completing the registration generates an OAuth client registration ID.

### Adding OAuth 2.0 authentication to the plugin manifest

To use OAuth 2.0 authentication in your plugin, set the `type` property of the [runtime authentication object](api-plugin-manifest.md#runtime-authentication-object) to `OAuthPluginVault`, and set the `reference_id` to the client registration ID from the Teams Developer Portal.

```json
"auth": {
  "type": "OAuthPluginVault",
  "reference_id": "client registration ID"
},
```

## API key via bearer auth

This authentication scheme allows a plugin to access an API using a long-lived API key or token. This token is sent in API requests in the `Authorization` header as a bearer token. This scheme can be represented in an OpenAPI document in the `securitySchemes` property. See [Bearer Authentication](https://swagger.io/docs/specification/authentication/bearer-authentication/) for details.

```yml
securitySchemes:
  BearerAuth:
    type: http
    scheme: bearer
```

> [!NOTE]
> API plugins don't support the OpenAPI [API key security scheme](https://swagger.io/docs/specification/authentication/api-keys/). APIs that use API keys for authentication must use the bearer authentication security scheme and accept the API key in the `Authorization` header. You can't define a custom header or send the key as a query parameter or cookie.

To use this authentication scheme in a plugin, you must register an API key in the [Teams Developer portal](https://dev.teams.microsoft.com/).

> [!TIP]
> If your OpenAPI document includes the `securitySchemes` property, Teams Toolkit can register your API key and update your manifest for you when you [generate a plugin from an existing API](build-api-plugins-existing-api.md).

### Register an API key

1. Open your browser and browse to the [Teams apps developer portal](https://dev.teams.microsoft.com/tools). Select **Tools** in the left-hand navigation.

1. Select **API key registration**. If you have no existing registrations, select **Register client**; if you have existing registrations, select **New API key**.

1. Select **Add secret** and enter the API key.

1. Fill in the following fields.

    - **API key name**: A friendly name for your registration
    - **Base URL**: Your API's base URL

1. Select **Save**.

Completing the registration generates an app key registration ID.

### Adding API key authentication to the plugin manifest

To use API key authentication in your plugin, set the `type` property of the [runtime authentication object](api-plugin-manifest.md#runtime-authentication-object) to `ApiKeyPluginVault`, and set the `reference_id` to the app key registration ID from the Teams Developer Portal.

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
