---
title: Configure authentication for MCP and API plugins in agents in Microsoft 365 Copilot
description: Learn how to set up authentication for MCP and API plugins in agents running in Microsoft 365 Copilot.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.topic: article
---

# Configure authentication for MCP and API plugins in agents

[!INCLUDE [agents-toolkit-dev-tools-tip](includes/agents-toolkit-dev-tools-tip.md)]

Declarative agents in Microsoft 365 Copilot connect to backend services through API or MCP plugins. These action integrations connect the agent to a Model Context Protocol (MCP) server or an API described by an OpenAPI document. Configure authentication so Microsoft 365 Copilot can obtain and send the right credentials on behalf of the signed-in user.

> [!NOTE]
> This article configures authentication in an API or MCP plugin manifest for a declarative agent. It doesn't configure the outer installable package. See [Plugins and declarative agent actions](plugins-overview.md#plugins-and-declarative-agent-actions) for the manifest relationship.

The authentication walkthroughs use an MCP plugin as the default example. The MCP plugin is the agent's integration with the remote server, not the server itself. The same configuration steps apply to API plugins built from an OpenAPI document, except where noted in each article.

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
> This table covers MCP and API plugins used as declarative-agent actions. A plugin that references a remote MCP server through `agentConnectors` in the Microsoft 365 app manifest uses a different authorization configuration. That schema includes `ApiKeyPluginVault`, while MCP plugins used as declarative-agent actions don't support API keys. For configuration and host requirements, see [Configure remote MCP servers for Microsoft 365 Copilot plugins](configure-plugin-mcp-servers.md).

## How plugin authentication works

For schemes that require credentials, an **authentication configuration** (auth config) is a record stored in the Microsoft Enterprise token store that holds the credentials or client details needed to authenticate to your MCP server or API. Anonymous access doesn't require an auth config. Choose the supported configuration path for your project:

- **[Work IQ Dev Tools (recommended)](https://microsoft.github.io/wiqd/cli/reference/#wiqd-agent-add-action)** configures authentication when you add an OpenAPI or remote MCP action with `wiqd agent add action`. To configure a supported authentication type in an existing plugin manifest, use [`wiqd agent add auth`](https://microsoft.github.io/wiqd/cli/reference/#wiqd-agent-add-auth). Follow the scheme-specific WIQD guidance below for the correct options, then complete the agent's provisioning workflow for your environment.
- **[Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit)** creates the auth config and updates your plugin manifest automatically as you build the agent.
- **The declarative agent developer skill** (MCP plugins only) creates the auth config and updates the manifest for you from natural-language instructions.
- **The Microsoft Teams developer portal** lets you create the auth config manually, or manage one that Agents Toolkit or the skill created.

For authenticated schemes, your plugin manifest references the auth config by its ID in the [runtime authentication object](plugin-manifest-2.4.md#runtime-authentication-object). At runtime, Microsoft 365 Copilot uses the auth config to obtain a token or API key from the token store and includes it when the plugin calls your MCP server or API.

Start with the WIQD section for your chosen authentication scheme. The same articles retain Toolkit, developer-skill, portal, and manual alternatives where supported.

- [Configure Microsoft Entra SSO authentication with WIQD](plugin-authentication-entra-sso.md#use-work-iq-dev-tools-recommended)
- [Configure dynamic client registration with WIQD](plugin-authentication-dynamic-client-registration.md#use-work-iq-dev-tools-recommended)
- [Configure OAuth 2.0 authentication with WIQD](plugin-authentication-oauth.md#use-work-iq-dev-tools-recommended)
- [Configure API key authentication with WIQD](plugin-authentication-api-key.md#use-work-iq-dev-tools-recommended)
- [Configure anonymous authentication with WIQD](plugin-authentication-none.md#use-work-iq-dev-tools-recommended)

> [!NOTE]
> For a plugin package that connects Cowork to a remote MCP server, follow [authentication in the app manifest](configure-plugin-mcp-servers.md#configure-authentication). Shared credential-registration steps don't make that configuration interchangeable with an agent's MCP plugin manifest configuration. If your OAuth provider uses the Microsoft identity platform and the connection needs automatic token refresh, include `offline_access` in the OAuth configuration's **Scope** field with any API-specific delegated scopes.

## Related content

- [Build or reuse capabilities for your plugin](build-reuse-plugin.md)
- [Troubleshoot MCP and API plugin authentication](plugin-authentication-troubleshooting.md)
