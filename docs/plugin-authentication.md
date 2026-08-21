---
title: Configure authentication for MCP and API plugins in agents in Microsoft 365 Copilot
description: Learn how to set up authentication for MCP and API plugins in agents running in Microsoft 365 Copilot.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 08/12/2026
ms.topic: article
---

# Configure authentication for MCP and API plugins in agents

Agents in Microsoft 365 Copilot connect to backend services through plugins. A plugin can wrap a Model Context Protocol (MCP) server or an API described by an OpenAPI document. To let a plugin access a protected MCP server or API, you configure an authentication scheme so Microsoft 365 Copilot can obtain and send the right credentials on behalf of the signed-in user.

This documentation set uses MCP plugins (also called MCP servers or MCP actions) as the default walkthrough. The same configuration steps apply to API plugins built from an OpenAPI document, except where noted in each article.

## Supported authentication schemes

Choose the authentication scheme that matches how your MCP server or API protects its endpoints:

| Authentication scheme                | MCP plugins   | API plugins   | Article                                                                            |
|--------------------------------------|---------------|---------------|------------------------------------------------------------------------------------|
| Microsoft Entra single sign-on (SSO) | Supported     | Supported     | [Configure Microsoft Entra SSO authentication](plugin-authentication-entra-sso.md) |
| Dynamic client registration (DCR)    | Supported     | Not supported | [Configure dynamic client registration](plugin-authentication-dynamic-client-registration.md)              |
| OAuth 2.0 authorization code flow    | Supported     | Supported     | [Configure OAuth 2.0 authentication](plugin-authentication-oauth.md)               |
| API key                              | Not supported | Supported     | [Configure API key authentication](plugin-authentication-api-key.md)               |
| No authentication (anonymous)        | Supported     | Supported     | [Configure no authentication (anonymous)](plugin-authentication-none.md)           |

> [!NOTE]
> This article covers authentication for **plugins**, which you configure in the plugin manifest. Registering an MCP server as an *agent connector* is a different surface: you declare authorization for the `agentConnectors` node in the Microsoft 365 app manifest. Its supported authorization types differ from the plugin schemes in this table. For example, API key authentication is supported for API plugins only and isn't supported for MCP plugins. This difference between the two manifests is expected, not an error. For agent connector authorization, see [Register MCP servers as agent connectors](/microsoftteams/platform/m365-apps/agent-connectors).

## How plugin authentication works

Each scheme relies on an **authentication configuration** (auth config) - a record stored in the Microsoft Enterprise token store that holds the credentials or client details needed to authenticate to your MCP server or API. You create the auth config in one of three ways:

- **[Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit)** creates the auth config and updates your plugin manifest automatically as you build the agent.
- **The declarative agent developer skill** (MCP plugins only) creates the auth config and updates the manifest for you from natural-language instructions.
- **The Microsoft Teams developer portal** lets you create the auth config manually, or manage one that Agents Toolkit or the skill created.

Your plugin manifest references the auth config by its ID in the [runtime authentication object](plugin-manifest-2.4.md#runtime-authentication-object). At runtime, Microsoft 365 Copilot uses the auth config to obtain a token or API key from the token store and includes it when the plugin calls your MCP server or API.

Follow the article for your chosen authentication scheme to configure that specific type.

- [Configure Microsoft Entra SSO authentication](plugin-authentication-entra-sso.md)
- [Configure dynamic client registration](plugin-authentication-dynamic-client-registration.md)
- [Configure OAuth 2.0 authentication](plugin-authentication-oauth.md)
- [Configure API key authentication](plugin-authentication-api-key.md)
- [Configure anonymous authentication](plugin-authentication-none.md)

> [!NOTE]
> For Cowork MCP plugins, follow the same authentication configuration model described in these articles. If your OAuth provider uses the Microsoft identity platform and the plugin needs automatic token refresh, include `offline_access` in the **Scope** field with any API-specific delegated scopes.

## Related content

- [Troubleshoot MCP and API plugin authentication](plugin-authentication-troubleshooting.md)
