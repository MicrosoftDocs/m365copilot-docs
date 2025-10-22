---
title: Authentication support in TypeSpec for Microsoft 365 Copilot
description: Learn how to configure authentication for TypeSpec-based solutions using OAuth2, Entra ID SSO, API keys, and anonymous access.
author: slevert
ms.author: slevert
ms.localizationpriority: medium
ms.date: 09/18/2025
ms.topic: reference
---

<!-- markdownlint-disable MD024 -->

# Authentication support in TypeSpec for Microsoft 365 Copilot

[!INCLUDE [preview-disclaimer-typespec](includes/preview-disclaimer-typespec.md)]

TypeSpec for Microsoft 365 Copilot supports multiple authentication methods to secure API plugins and integrate with external services. The supported authentication types include:

- [No authentication](#no-authentication-anonymous) for public endpoints
- [API key authentication](#api-key-authentication) for simple token-based access
- [OAuth2 authorization code flow](#oauth2-authorization-code-flow) for secure non-Microsoft integrations
- [Entra ID single sign-on (SSO) authentication](#entra-id-sso-authentication) for seamless Microsoft 365 identity integration

> [!NOTE]
> This documentation covers Microsoft 365 Copilot-specific authentication scenarios. For comprehensive TypeSpec authentication documentation, including all native authentication decorators and patterns, see the [TypeSpec documentation on Authentication](https://typespec.io/docs/libraries/http/authentication).

## No authentication (anonymous)

Public endpoints that don't require any authentication credentials. The API doesn't require anything specific. Without `@useAuth` decorators, all APIs are considered anonymous.

### Example

```typescript
@service
@actions(ACTIONS_METADATA)
@server(SERVER_URL, API_NAME)
namespace API {
  // Endpoints
}
```

## API key authentication

Authentication using API keys or personal access tokens applied to entire namespaces. Use the native [`ApiKeyAuth`](https://typespec.io/docs/libraries/http/authentication/#apikeyauthtlocation-extends-apikeylocation-tname-extends-string) from TypeSpec.

### Example

```typescript
@service
@actions(ACTIONS_METADATA)
@server(SERVER_URL, API_NAME)
@useAuth(ApiKeyAuth<ApiKeyLocation.header, "X-Your-Key">)
namespace API {
  // Endpoints
}
```

The Microsoft 365 Agents Toolkit can automatically register your API key. Add the `apiKey/register` action to **m365agents.yml** in your Agents Toolkit project.

```yaml
# m365agents.yml
# After the typespec/compile step
- uses: apiKey/register
  with:
    name: ApiKeyAuth
    appId: ${{TEAMS_APP_ID}}
    apiSpecPath: ./appPackage/.generated/api-openapi.yml
  writeToEnvironmentFile:
    registrationId: APIKEYAUTH_REGISTRATION_ID
```

The [Manage repairs using Microsoft 365 Copilot sample](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-copilot-pro-dev-da-typespec-repairs-apikey/) highlights the use of API key authentication.

## OAuth2 authorization code flow

User-delegated permissions for accessing user data an OAuth2 protected service. Use the native [`OAuth2Auth`](https://typespec.io/docs/libraries/http/authentication/#oauth2authtflows-extends-oauth2flow) from TypeSpec. Update the `authorizationUrl`, `tokenUrl`, `refreshUrl`, and `scopes` based on the specific API you're integrating with.

Learn how to automatically [create the Entra ID app using Agents Toolkit](https://github.com/OfficeDev/microsoft-365-agents-toolkit/wiki/Available-actions-in-Microsoft-365-Agents-Toolkit#aadappcreate) and [update the Entra ID app](https://github.com/OfficeDev/microsoft-365-agents-toolkit/wiki/Available-actions-in-Microsoft-365-Agents-Toolkit#aadappupdate) once the registration is completed.

### Example

```typescript
@service
@actions(ACTIONS_METADATA)
@server(SERVER_URL, API_NAME)
@useAuth(OAuth2Auth<[{
  type: OAuth2FlowType.authorizationCode;
  authorizationUrl: "https://contoso.com/oauth2/v2.0/authorize";
  tokenUrl: "https://contoso.com/oauth2/v2.0/token";
  refreshUrl: "https://contoso.com/oauth2/v2.0/token";
  scopes: ["scope-1", "scope-2"];
}]>)
namespace API {
  // Endpoints
}
```

The Microsoft 365 Agents Toolkit can automatically register your OAuth2 configuration. Add the `oauth/register` action to **m365agents.yml** in your Agents Toolkit project.

```yaml
# m365agents.yml
# After the typespec/compile step
- uses: oauth/register
  with:
    name: OAuth2Auth
    appId: ${{TEAMS_APP_ID}}
    clientId: ${{AAD_APP_CLIENT_ID}}
    clientSecret: ${{SECRET_AAD_APP_CLIENT_SECRET}}
    apiSpecPath: ./appPackage/.generated/api-openapi.yml
    flow: authorizationCode
  writeToEnvironmentFile:
    configurationId: OAUTH2AUTH_REGISTRATION_ID
```

The [Tasks Agent using TypeSpec for Microsoft 365 Copilot that connects to the Microsoft Graph APIs sample](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-copilot-pro-dev-da-typespec-todo/) highlights the use of OAuth2 with authorization code flow.

## Entra ID SSO authentication

Seamless authentication applying the user's existing Microsoft 365 session for native integration scenarios. To complete the SSO registration, use the regular [`OAuth2Auth`](#oauth2-authorization-code-flow) flow and perform the [manual steps](api-plugin-authentication.md#update-the-microsoft-entra-app-registration).

## Using registered authentication configurations

For production scenarios, register and manage authentication credentials through the Microsoft Teams Developer Portal instead of embedding them directly in TypeSpec code. Use the `@authReferenceId` decorator to reference preregistered authentication configurations by their unique identifiers. This approach provides a secure way to handle credentials without exposing sensitive information in your codebase.

When you use `@authReferenceId`, specify the registration ID from either OAuth client registrations or API key registrations configured in the Developer Portal. This approach separates authentication configuration from code, enabling better security practices and easier credential management across different environments.

### Example

```typescript
// Reference to OAuth2 client registration
@service
@actions(ACTIONS_METADATA)
@server(SERVER_URL, API_NAME)
@useAuth(Auth)
namespace API {
  // Endpoints
}

@authReferenceId("NzFmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IyM5NzQ5Njc3Yi04NDk2LTRlODYtOTdmZS1kNDUzODllZjUxYjM=")
model Auth is OAuth2Auth<[{
  type: OAuth2FlowType.authorizationCode;
  authorizationUrl: "https://contoso.com/oauth2/v2.0/authorize";
  tokenUrl: "https://contoso.com/oauth2/v2.0/token";
  refreshUrl: "https://contoso.com/oauth2/v2.0/token";
  scopes: ["scope-1", "scope-2"];
}]>

// Reference to API key registration
@service
@actions(ACTIONS_METADATA)
@server(SERVER_URL, API_NAME)
@useAuth(Auth)
namespace API {
  // Endpoints
}

@authReferenceId("5f701b3e-bf18-40fb-badd-9ad0b60b31c0")
model Auth is ApiKeyAuth<ApiKeyLocation.header, "X-Your-Key">
```
