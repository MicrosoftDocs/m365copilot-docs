---
title: "Authentication support in TypeSpec for Microsoft 365 Copilot"
description: "Learn how to configure authentication for TypeSpec-based solutions using OAuth2, Entra ID SSO, API keys, and anonymous access."
author: slevert
ms.author: slevert
ms.localizationpriority: medium
ms.date: 09/18/2025
ms.topic: reference
---

<!-- markdownlint-disable MD024 MD059 -->

# Authentication support in TypeSpec for Microsoft 365 Copilot

TypeSpec for Microsoft 365 Copilot supports multiple authentication methods to secure API plugins and integrate with external services. The supported authentication types include **No Authentication** for public endpoints, **API Key Authentication** for simple token-based access, **OAuth2 Authorization Code Flow** for secure third-party integrations, and **Entra ID SSO Authentication** for seamless Microsoft 365 identity integration.

[!INCLUDE [preview-disclaimer-typespec](includes/preview-disclaimer-typespec.md)]

> [!NOTE]
> This documentation covers Microsoft 365 Copilot-specific authentication scenarios. For comprehensive TypeSpec authentication documentation, including all native authentication decorators and patterns, please refer to the [official TypeSpec documentation on Authentication](https://typespec.io/docs/libraries/http/authentication).

## No Authentication (Anonymous)

Public endpoints that don't require any authentication credentials. Nothing specific is required and without `@useAuth` decorators, all APIs are considered anonymous.

### Examples

```typespec
@service
@actions(ACTIONS_METADATA)
@server(SERVER_URL, API_NAME)
namespace API {
  // Endpoints 
}
```

## API Key Authentication

Authentication using API keys or Personal Access Tokens applied to entire namespaces. Use the native [`ApiKeyAuth`](https://typespec.io/docs/libraries/http/authentication/#apikeyauthtlocation-extends-apikeylocation-tname-extends-string) from TypeSpec.

### Examples

```typespec
@service
@actions(ACTIONS_METADATA)
@server(SERVER_URL, API_NAME)
@useAuth(ApiKeyAuth<ApiKeyLocation.header, "X-Your-Key">)
namespace API {
  // Endpoints 
}
```

## OAuth2 Authorization Code Flow

User-delegated permissions for accessing user data an OAuth2 protected service. Use the native [`OAuth2Auth`](https://typespec.io/docs/libraries/http/authentication/#oauth2authtflows-extends-oauth2flow) from TypeSpec. Update the `authorizationUrl`, `tokenUrl`, `refreshUrl` and `scopes` based on the specific API you are integrating with.

### Microsoft Graph Examples

```typespec
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

## Entra ID SSO Authentication

Seamless authentication leveraging the user's existing Microsoft 365 session for native integration scenarios. Use the regular [`OAuth2Auth`](https://typespec.io/docs/libraries/http/authentication/#oauth2authtflows-extends-oauth2flow) from TypeSpec and perform the [manual steps](api-plugin-authentication.md#update-the-microsoft-entra-app-registration) to complete the SSO registration.

## Using Registered Authentication Configurations

For production scenarios, authentication credentials are typically registered and managed through the Microsoft Teams Developer Portal rather than embedded directly in TypeSpec code. The `@authReferenceId` decorator allows you to reference pre-registered authentication configurations by their unique identifiers, providing a secure way to handle credentials without exposing sensitive information in your codebase.

When using `@authReferenceId`, you specify the registration ID from either OAuth client registrations or API key registrations configured in the Developer Portal. This approach separates authentication configuration from code, enabling better security practices and easier credential management across different environments.

### Examples

```typespec
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
