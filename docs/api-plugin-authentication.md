---
title: Configure Authentication for Custom Actions in M365 Copilot Agents
description: Learn about how you can setup authentication for custom actions in M365 Copilot Agents.
author: jasonjoh
ms.author: jasonjoh
ms.date: 10/09/2024
ms.topic: conceptual
---

# Configure Authentication for Custom Actions in M365 Copilot Agents

You can configure authentication for Custom Actions in M365 Copilot Agents using any of the four supported authentication schemes to seamlessly connect to their backend APIs.

- OAuth 2.0 authorization code flow
- Entra ID SSO authentication
- API key authentication
- No authentication (anonymous)

## OAuth 2.0 authorization code flow

This authentication scheme allows a plugin to access an API using a bearer token obtained through the OAuth 2.0 authorization code flow. You can define this scheme in the `securitySchemes` property of an OpenAPI document . Refer to [OAuth 2.0](https://swagger.io/docs/specification/authentication/oauth2/) for more details.

> [!IMPORTANT]
> Custom Actions as of today only support authorization code flow for OAuth 2.0.

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

You can provision OAuth authorization either through Teams Toolkit in VS Code or manually registering the OAuth client in the Teams apps developer portal.

### Provision OAuth for actions using Teams Toolkit in VS Code
 Teams Toolkit can register your OAuth client and update your app package for you when you [create a Copilot Agent with custom action from an existing OpenAPI document](build-api-plugins-existing-api.md).

### Manually register OAuth client and update the app package

> [!NOTE]
> If your OAuth provider requires you to specify allowed redirect URIs during app registration, make sure to include `https://teams.microsoft.com/api/platform/v1.0/oAuthRedirect` in the list.

#### Register OAuth client in Teams apps developer portal

1. Open [Teams apps developer portal](https://dev.teams.microsoft.com/tools). Navigate to **Tools** -> **OAuth client registration**.

1. If you have no existing registrations, select **Register client**; if you have existing registrations, select **New OAuth client registration**.

1. Fill in the following fields.

    - **Registration name**: A friendly name for your registration.
    - **Base URL**: Your API's base URL, also referred to as server URL in your OpenAPI document.
    - **Client ID**: The client ID or application ID issued by your OAuth 2.0 provider.
    - **Client secret**: Your client secret issued by your OAuth 2.0 provider.
    - **Authorization endpoint**: The URL from your OAuth 2.0 provider that apps use to [request an authorization code](/entra/identity-platform/v2-oauth2-auth-code-flow#request-an-authorization-code)
    - **Token endpoint**: The URL from your OAuth 2.0 provider that apps use to [redeem a code for an access token](/entra/identity-platform/v2-oauth2-auth-code-flow#redeem-a-code-for-an-access-token)
    - **Refresh endpoint**: The URL from your OAuth 2.0 provider that apps use to [refresh the access token](/entra/identity-platform/v2-oauth2-auth-code-flow#refresh-the-access-token)
    - **Scope**: The permission scope defined by your API that allows access.
    - **Enable Proof Key for Code Exchange (PKCE)**: Enable this if your OAuth provider supports PKCE.

1. Click **Save**.

1. Completing the registration generates an OAuth client registration ID.

#### Update action manifest to add OAuth 2.0 authentication

To use OAuth 2.0 authentication for your custom action, set the `type` property of the [runtime authentication object](api-plugin-manifest.md#runtime-authentication-object) to `OAuthPluginVault`, and set the `reference_id` to the client registration ID from the Teams Developer Portal.

```json
"auth": {
  "type": "OAuthPluginVault",
  "reference_id": "auth registration ID"
},
```

### Enable PKCE (Proof Key for Code Exchange) for OAuth

1. Open [Teams apps developer portal](https://dev.teams.microsoft.com/tools), navigate to OAuth client registration and open your client registration. If you don't have an existing registration, refer to the section above to manually register your OAuth client.

2. Toggle on **Enable Proof Key for Code Exchange (PKCE)** and click **Save**.

![alt text](image-13.png)

3. Uncomment the following line of code in teamsapp.yml in your Copilot Agent project.

```yml
# isPKCEEnabled: true
```

## Entra ID SSO authentication

Entra ID SSO Authentication allows seamless single sign-on (SSO) integration, enabling users to authenticate with their existing Entra ID credentials. This simplifies access management and ensures secure connections to APIs without requiring additional credentials. Follow the four steps below:

1. Register an SSO client in Teams apps developer portal
1. Update the Microsoft Entra app registration
1. Update the action manifest file with Mircorosft Entra SSO registration ID
1. Update your app service to allow new token audience

### Register an SSO client in Teams apps developer portal

1. Open [Teams apps developer portal](https://dev.teams.microsoft.com/tools). Navigate to **Tools** -> **Microsoft Entra SSO client ID registration** -> **Register client**; if you have existing registrations, select **New client registration**.

1. Fill in the following fields.

    - **Registration name**: A friendly name for your registration.
    - **Base URL**: Your API's base URL, also referred to as server URL in your OpenAPI document.
    - **Restrice usage by org**: Select which M365 organization endpoints will use your app to access API endpoints.
    - **Restrice usage by app**: Select which client is this registration for. For testing purposes, you can select **Any Teams app** but before you publish the app, ensure you bind the app with the right client.
    - **Client ID**: The client ID of the app registered in Microsoft Entra.

1. Click **Save**.

1. You'll get a **Mircorosft Entra SSO registration ID** and an **Application ID URI**.

### Update the Microsoft Entra app registration

1. Update the Mirosoft Entra app registration that secure your API with the new application ID URI [Microsoft Azure Entra portal](https://ms.portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/Overview). If you have an existing Application ID URI mapped to the Entra app registration, you can use the Manifest Editor to add an additional URI in the **IdentifierURIs** section.

```json
"identifierUris": [
"<<URI1>>"
"<<URI2>>"
]
```

> [!NOTE]
> Adding multiple URIs is not supported through Entra GUI. You hence, should use the manifest editor.
> Entra GUI will only display the first URI in the list. If you add the new URI as the first one in the list, it will be displayed in the Entra GUI.
> This will not impact your existing URIs & scope even if they show differently in the Entra GUI.

2. Open **Authentication** section and add the URI https://teams.microsoft.com/api/platform/v1.0/oAuthConsentRedirect.

1. Open **Expose an API** section, click on **Add a client application** and add the client ID **ab3be6b7-f5df-413d-ac2d-abf1e3fd9c0b**. This is the client ID of Microsoft's enterprise token store.

### Update the action manifest file with Mircorosft Entra SSO registration ID

Set the `type` property of the [runtime authentication object](api-plugin-manifest.md#runtime-authentication-object) to `OAuthPluginVault`, and set the `reference_id` to the Microsoft Entra SSO registration ID from the Teams apps developer portal.

```json
"auth": {
  "type": "OAuthPluginVault",
  "reference_id": "SSO registration ID"
},
```

### Update your app service to allow new token audience

1. Update your app service to allow the new identifier URI as the token audience.
2. If you validate the Client application make sure that the Microsoft's enterprise token store (**ab3be6b7-f5df-413d-ac2d-abf1e3fd9c0b**) is added as a valid client application.

## API key authentication

Some APIs use API keys for authorization, where an API key is a shared secret that the client includes in API requests to authenticate and gain access. The key can be sent in three in ways:

1. Bearer token
1. Custom headers
3. Query parameters

### Manually register API key

You can use a long-lived bearer shared secret to access an API. This token is included in API requests in the `Authorization` header. You can define this scheme in the `securitySchemes` property of an OpenAPI document. See [Bearer Authentication](https://swagger.io/docs/specification/authentication/bearer-authentication/) for more details. Follow the steps below to register an API key and update the action manifest file.

1. Define your API key authentication settings in the OpenAPI document as per swagger document for [Bearer Authentication](https://swagger.io/docs/specification/authentication/bearer-authentication/) or [custom header or query paramater](https://swagger.io/docs/specification/v3_0/authentication/api-keys/).

1. Open [Teams apps developer portal](https://dev.teams.microsoft.com/tools). Navigate to **Tools** -> **API key registration** -> **Create an API key**; if you have existing registrations, select **New API key**.

1. Click **Add secret** and enter the API key.

1. Fill in the following fields.

    - **API key name**: A friendly name for your registration.
    - **Base URL**: Your API's base URL or server URL.
    - **Target tenant**: Limit API access to home tenant or not.
    - **Target Teams App**: Select which client is this registration for. For testing purposes, you can select **Any Teams app** but before you publish the app, ensure you bind the app with the right client.

1. Click **Save**.

1. Completing the registration generates an **app key registration ID**.

### Update action manifest to add API key authentication
1. In your action manifest file, set the `type` property of the [runtime authentication object](api-plugin-manifest.md#runtime-authentication-object) to `ApiKeyPluginVault`, and set the `reference_id` to the app key registration ID from the Teams apps developer portal.

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
