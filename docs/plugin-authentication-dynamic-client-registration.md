---
title: Configure dynamic client registration
description: Learn how to configure dynamic client registration (DCR) for MCP plugins in agents running in Microsoft 365 Copilot.
author: amitharjani93
ms.author: amith
ms.localizationpriority: medium
ms.date: 08/28/2026
ms.topic: how-to
---

# Configure dynamic client registration

Dynamic client registration (DCR) enables a plugin to register an OAuth client with your identity provider automatically, without requiring you to manually create a client ID and secret ahead of time. Instead of statically registering an OAuth app and copying the credentials into an auth config, the authorization server issues client credentials on demand following [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591).

DCR builds on the OAuth 2.0 authorization code flow. Unlike static OAuth, you don't configure a redirect URI or client credentials yourself - the Enterprise token store registers the client and handles those details behind the scenes. For general OAuth concepts, see [Configure OAuth 2.0 authentication](plugin-authentication-oauth.md).

> [!NOTE]
>
> - DCR is supported for Model Context Protocol (MCP) plugins.
> - DCR without a client secret isn't supported yet. The authorization server must issue a client secret during registration.
> - PKCE is enabled by default for DCR.

> [!WARNING]
> DCR isn't available for an MCP server that's protected by Microsoft Entra ID. Microsoft Entra ID doesn't publish an [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591) registration endpoint, so there's nothing for the Enterprise token store to register a client against. For a server that's protected by Microsoft Entra ID, register the OAuth client statically instead. For more information, see [Configure OAuth 2.0 authentication](plugin-authentication-oauth.md).

Configure DCR in two steps: confirm the prerequisites and create the DCR auth config.

## Step 1: Confirm prerequisites

- Your MCP server exposes OAuth 2.0 protected resource metadata at its `.well-known/oauth-protected-resource` endpoint ([RFC 9728](https://datatracker.ietf.org/doc/html/rfc9728)), identifying the authorization server that protects it.
- The authorization server publishes its metadata at the `.well-known/oauth-authorization-server` endpoint ([RFC 8414](https://datatracker.ietf.org/doc/html/rfc8414)), including a `registration_endpoint`, and supports dynamic client registration ([RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591)) that issues a client secret. Microsoft Entra ID doesn't publish this endpoint, so an MCP server that's protected by Microsoft Entra ID can't use DCR.

## Step 2: Create the DCR auth config

DCR authentication relies on an **authentication configuration** (auth config) - a record stored in the Microsoft Enterprise token store that Microsoft 365 Copilot uses to obtain and refresh tokens for your MCP plugin. You can create the DCR auth config in two ways: Microsoft 365 Agents Toolkit and the declarative agent developer skill. Both create the auth config and update your plugin manifest automatically.

> [!NOTE]
> The Microsoft Teams developer portal doesn't support DCR yet. Use Agents Toolkit or the declarative agent developer skill.

### Use Microsoft 365 Agents Toolkit (recommended)

When you [build an agent with an MCP plugin](build-mcp-plugins.md) in [Microsoft 365 Agents Toolkit](https://aka.ms/M365AgentsToolkit) and select **dynamic client registration** as the authentication type, no further input is required. Agents Toolkit fetches the registration details from the well-known endpoint of your MCP server, registers a new client with the authorization server automatically, creates the auth config in the Enterprise token store, and updates the [runtime authentication object](plugin-manifest-2.4.md#runtime-authentication-object) in your plugin manifest.

### Use the declarative agent developer skill

The declarative agent developer skill (`declarative-agent-developer`) is an agent skill in [Microsoft Work IQ](https://github.com/microsoft/work-iq) that packages the knowledge needed to build declarative agents. Instead of running commands or editing manifests yourself, describe what you want to Copilot or the GitHub CLI in natural language. The skill scaffolds the declarative agent, adds the MCP plugin, and handles the authentication configuration for you. For DCR, the skill registers the client, creates the auth config in the Enterprise token store, and updates the plugin manifest without manual steps.

> [!TIP]
> For a video walkthrough of using the declarative agent developer skill, see [Build declarative agents with the declarative agent developer skill](https://aka.ms/workiq-da).

## Plugin manifest

No action is required from you - this section is for reference only, to show the changes that Agents Toolkit and the declarative agent developer skill make to the plugin manifest for you. DCR uses the same [runtime authentication object](plugin-manifest-2.4.md#runtime-authentication-object) as OAuth 2.0: the `type` property is set to `OAuthPluginVault`, and the `reference_id` is set to the **auth config ID**.

```json
"auth": {
  "type": "OAuthPluginVault",
  "reference_id": "auth config ID"
},
```

## Related content

- [Configure authentication for MCP and API plugins in agents](plugin-authentication.md)
- [Configure OAuth 2.0 authentication](plugin-authentication-oauth.md)
- [Troubleshoot MCP and API plugin authentication](plugin-authentication-troubleshooting.md)
