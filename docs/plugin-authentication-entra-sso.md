---
title: Configure Microsoft Entra SSO authentication
description: Learn how to configure Microsoft Entra single sign-on (SSO) authentication for MCP and API plugins in agents running in Microsoft 365 Copilot.
author: amitharjani93
ms.author: amith
ms.localizationpriority: medium
ms.date: 11/10/2026
ms.topic: how-to
---

# Configure Microsoft Entra SSO authentication

[!INCLUDE [agents-toolkit-dev-tools-tip](includes/agents-toolkit-dev-tools-tip.md)]

Microsoft Entra single sign-on (SSO) authentication enables users to authenticate with their existing Microsoft Entra ID credentials. This integration simplifies access management and ensures secure connections to Model Context Protocol (MCP) servers or APIs without requiring extra credentials. Your MCP server or API must use Entra ID to control access.

This article uses MCP plugins as the default walkthrough. The same steps apply to API plugins built from an OpenAPI document, except where noted.

Configure Entra SSO authentication in four steps: register an Entra app to secure your MCP server, create the auth config, update the Entra app registration, and add the new token audience to your API.

## Step 1: Register an Entra app to secure your MCP server

Your MCP server or API must be secured by an Entra app registration. If you don't already have one, register an app in the [Microsoft Entra admin center](https://entra.microsoft.com/). Note the app's **client ID** - you provide it when you create the auth config in [Step 2](#step-2-create-the-entra-sso-auth-config).

## Step 2: Create the Entra SSO auth config

Entra SSO authentication relies on an **authentication configuration** (auth config) - a record stored in the Microsoft Enterprise token store that Microsoft 365 Copilot uses to obtain tokens for your MCP plugin. Start with WIQD for a supported pro-code project. The Toolkit, developer-skill, and Teams developer portal procedures remain available as alternatives.

However you create it, the auth config has an **auth config ID** and an **Application ID URI**. You use the **Application ID URI** in [Step 3](#step-3-update-the-entra-app-registration) and [Step 4](#step-4-add-the-new-token-audience-to-your-api).

> [!IMPORTANT]
> Regardless of how you create the auth config, you must still complete [Step 3](#step-3-update-the-entra-app-registration) and [Step 4](#step-4-add-the-new-token-audience-to-your-api).

### Use Work IQ Dev Tools (recommended)

For an MCP action, use `wiqd agent add action` with `--mcp-server-url`, `--mcp-auth-type entra-sso`, and `--mcp-client-id` set to the Entra app's client ID from Step 1. For an OpenAPI action, use `--openapi-auth-identity-provider microsoft-entra` and `--openapi-auth-client-id`. See the [WIQD action command guidance](https://microsoft.github.io/wiqd/cli/reference/#wiqd-agent-add-action) for the other required action options.

For an existing plugin manifest, use [`wiqd agent add auth`](https://microsoft.github.io/wiqd/cli/reference/#wiqd-agent-add-auth) with `--plugin-manifest`, `--auth-name`, and `--auth-type microsoft-entra`. Supply the identity-provider options documented for that command, including `--oauth-client-id`. Complete the project's provisioning workflow, obtain the auth config's **Application ID URI**, and continue with Step 3 and Step 4.

<!-- markdownlint-disable MD033 -->
<a id="use-microsoft-365-agents-toolkit-recommended"></a>
<!-- markdownlint-enable MD033 -->

### Use Microsoft 365 Agents Toolkit

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
    - **Scope**: The permissions your plugin requests from Entra. As with OAuth 2.0, use the scope values required by your Entra app and API.

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
    > You can't add multiple URIs through the Entra admin center's UI. The UI only displays the first URI in the list. Adding multiple URIs doesn't affect your existing URIs and scopes even if they show differently in the UI.

1. Select **Authentication** under **Manage**. Add `https://teams.microsoft.com/api/platform/v1.0/oAuthConsentRedirect` to the **Redirect URIs** in the **Web** platform.

1. Select **Expose an API** under **Manage**. Select **Add a client application** and add the client ID of the Microsoft Enterprise token store, `ab3be6b7-f5df-413d-ac2d-abf1e3fd9c0b`.

## Step 4: Add the new token audience to your API

Update your MCP server or API to allow the new identifier URI as the token audience. If your MCP server or API validates the client application ID, make sure that the Microsoft Enterprise token store's client ID (`ab3be6b7-f5df-413d-ac2d-abf1e3fd9c0b`) is added as an allowed client application.

> [!TIP]
> If your MCP server or API uses the [on-behalf-of flow](/entra/identity-platform/v2-oauth2-on-behalf-of-flow) to get access to another web API that requires the user to grant consent, return a `401 Unauthorized` error to cause the agent to prompt the user to sign in to grant consent.

## Related content

- [Configure authentication for MCP and API plugins in agents](plugin-authentication.md)
- [Configure OAuth 2.0 authentication](plugin-authentication-oauth.md)
- [Troubleshoot MCP and API plugin authentication](plugin-authentication-troubleshooting.md)
