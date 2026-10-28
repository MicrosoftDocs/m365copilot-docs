---
title: Configure Remote MCP Servers for Microsoft 365 Copilot Plugins
description: Use Work IQ Dev Tools to create a plugin, or manually configure its remote MCP server in the Microsoft 365 app manifest.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 10/28/2026
ms.topic: how-to
---

# Configure remote MCP servers for Microsoft 365 Copilot plugins

A [Microsoft 365 Copilot plugin](plugins-overview.md) connects supported Microsoft experiences to tools provided by a remote Model Context Protocol (MCP) server. The plugin package contains connection configuration, and the server runs separately.

Use **Work IQ Dev Tools (WIQD)** to create, validate, and package your plugin. Start with [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/).

The following sections explain the underlying configuration for developers who need to edit the manifest manually. Register your plugin's remote MCP server in the `agentConnectors` array of the Microsoft 365 app manifest. This schema identifier remains `agentConnectors` even though the installable package is called a plugin.

> [!IMPORTANT]
> This configuration uses the Microsoft 365 app manifest, not the MCP plugin manifest used for declarative-agent actions. It's also separate from the Agent 365 CLI registration route. For those alternatives, see [Build or reuse MCP servers](build-reuse-mcp-servers.md#connect-the-server). Support for MCP alone doesn't establish support for this registration model.

## Prerequisites

Before you begin, ensure you have:

- A test tenant and a target Microsoft experience that supports plugins configured through `agentConnectors`.
- A working MCP server with a publicly accessible HTTPS endpoint, TLS 1.2 or later, and a transport supported by the target experience.
- A Microsoft 365 app package with a manifest version supported by the target experience and your chosen authorization type.
- An authorization configuration registered for your server, such as an [OAuth configuration](/microsoftteams/platform/messaging-extensions/api-based-oauth#configure-oauth-in-developer-portal) or [API key configuration](/microsoftteams/platform/messaging-extensions/api-based-secret-service-auth#api-key-authentication), unless the server allows anonymous access.

For WIQD server requirements and the Copilot Cowork tool-description requirement, see [Work IQ Dev Tools](build-reuse-mcp-servers.md#work-iq-dev-tools).

## Add the MCP server to your app manifest

Declare your MCP server in the [agentConnectors](/microsoft-365/extensibility/schema/root-agent-connectors) array at the root level of your app manifest.

1. Open the app manifest in your Microsoft 365 app package.
1. Locate or create the root-level `agentConnectors` array.
1. Add an entry with a unique `id`, a `displayName`, a `description`, and a `toolSource` that identifies your remote MCP server.

The following JSON is a fragment to merge into your existing app manifest, not a complete app manifest:

```json
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.30/MicrosoftTeams.schema.json",
  "manifestVersion": "1.30",
  "agentConnectors": [
    {
      "id": "my-mcp-server",
      "displayName": "My Automation Server",
      "description": "Provides workflow automation and task management tools.",
      "toolSource": {
        "remoteMcpServer": {
          "mcpServerUrl": "https://mcp.example.com/mcp",
          "authorization": {
            "type": "OAuthPluginVault",
            "referenceId": "my-oauth-config"
          },
          "mcpToolDescription": {
            "file": "toolDescription.json"
          }
        }
      }
    }
  ]
}
```

Replace the endpoint and authorization reference with your server's values. Each entry's `id` must be unique within `agentConnectors`. Keep the other required app manifest properties in your existing file.

### Configure the server endpoint

Set [toolSource.remoteMcpServer.mcpServerUrl](/microsoft-365/extensibility/schema/root-agent-connectors-tool-source) to your HTTPS endpoint. Confirm that the server is reachable from the target experience and responds to MCP initialization and subsequent protocol requests.

## Configure authentication

Set `authorization` within `agentConnectors[].toolSource.remoteMcpServer`. The following table lists authorization types and their configuration. For schema details, see the [authorization schema](/microsoft-365/extensibility/schema/root-agent-connectors-tool-source-remote-mcp-server-authorization).

| Authorization type | Configuration |
|---|---|
| `None` | No authentication required. Use only when the server allows anonymous access. |
| `OAuthPluginVault` | OAuth configuration stored in Microsoft's vault and referenced by ID. |
| `ApiKeyPluginVault` | API key configuration stored in a vault and referenced by ID. |
| `DynamicClientRegistration` | Dynamic OAuth client registration configuration referenced by ID. |
| `AzureKeyVault` | Azure Key Vault configuration referenced by ID. Requires host support. |
| `ConnectionVault` (developer preview) | Connection configuration referenced by ID. |

A schema value doesn't guarantee support in the target experience. Check its authentication requirements before choosing a method.

The `referenceId` identifies a configuration acquired separately from the manifest. Don't put API keys, access tokens, client secrets, or secret values in this field or elsewhere in the app manifest.

### Use OAuth authentication

For OAuth 2.0 tokens stored in Microsoft's vault, use the following `authorization` object:

```json
{
  "type": "OAuthPluginVault",
  "referenceId": "my-oauth-config"
}
```

Register the OAuth configuration in [Developer Portal](https://dev.teams.microsoft.com/tools/oauth-configuration) and use the returned configuration ID as `referenceId`. For details, see [Configure OAuth in Developer Portal](/microsoftteams/platform/messaging-extensions/api-based-oauth#configure-oauth-in-developer-portal).

Add the following callback URL to the allowed redirect URIs in your OAuth provider registration:

```http
https://teams.microsoft.com/api/platform/v1.0/oAuthRedirect
```

### Use API key authentication

For an API key stored in a vault, use the following `authorization` object:

```json
{
  "type": "ApiKeyPluginVault",
  "referenceId": "my-apikey"
}
```

Register the key in [Developer Portal](https://dev.teams.microsoft.com/tools/api-key-registration), and then replace `my-apikey` with the returned registration ID. For details, see [API key authentication](/microsoftteams/platform/messaging-extensions/api-based-secret-service-auth#api-key-authentication).

### Use dynamic client registration

Dynamic client registration enables the host to register as an OAuth client with your MCP server by using [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591). Both must support the registration flow. Microsoft Entra ID doesn't provide an RFC 7591 registration endpoint; use static OAuth registration for an Entra-protected server.

Use the following `authorization` object:

```json
{
  "type": "DynamicClientRegistration",
  "referenceId": "my-dcr-config"
}
```

Register the configuration in [Developer Portal](https://dev.teams.microsoft.com) and replace `my-dcr-config` with its reference ID. The configuration supplies the authorization values the host uses when negotiating client credentials.

Your server must:

- Expose an RFC 7591 client registration endpoint.
- Return the client registration information required by the host's OAuth flow.
- Support token refresh where required for long-lived sessions.

### Use Azure Key Vault authentication

`AzureKeyVault` is included in app manifest schemas 1.29 and 1.30. Use it only when the target experience documents an [Azure Key Vault](/azure/key-vault/general/overview) integration and a process for acquiring the configuration reference.

Use the following `authorization` object:

```json
{
  "type": "AzureKeyVault",
  "referenceId": "my-keyvault-config"
}
```

Follow that integration's credential-storage and access requirements, and replace `my-keyvault-config` with the returned reference. The manifest declaration alone doesn't grant access to secrets.

### Use Connection Vault authentication

> [!NOTE]
> Connection Vault authentication is available in developer preview. Use the developer preview app manifest schema to configure `ConnectionVault`; it isn't available in generally available app manifest schemas.

For a supported connection-vault integration, use the following `authorization` object:

```json
{
  "type": "ConnectionVault",
  "referenceId": "shared_example"
}
```

Replace `shared_example` with the connection reference supplied by the target integration.

### Use no authentication

If your server allows anonymous access, set `authorization.type` to `None` or omit `authorization` when the host permits it.

Prefer authenticated access for production and enterprise scenarios, and OAuth over API keys where supported.

## Define tool discovery

Use packaged tool definitions when the toolset is fixed, or dynamic discovery when both the app manifest version and target host support it.

### Use static tool definitions

Include a tool description file in your app package and reference it within `remoteMcpServer`. The path is relative to the app package. Use the tool definitions from your server's `tools/list` result, including each tool's name, description, and input schema. For example, a minimal `toolDescription.json` file can contain:

```json
{
  "mcpToolDescription": {
    "file": "toolDescription.json"
  }
}
```



```json
{
  "tools": [
    {
      "name": "get_task",
      "description": "Gets a task by its identifier.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "taskId": {
            "type": "string",
            "description": "The identifier of the task."
          }
        },
        "required": [
          "taskId"
        ]
      }
    }
  ]
}
```

Keep the packaged definitions consistent with the server.

### Use dynamic tool discovery

Dynamic discovery lets a host fetch the tool list at runtime through `tools/list` instead of relying on packaged definitions.

App manifest version 1.29 or later permits you to omit [mcpToolDescription](/microsoft-365/extensibility/schema/root-agent-connectors-tool-source-remote-mcp-server-mcp-tool-description). Earlier versions require the file. **Copilot Cowork still requires a tool description file**, even with version 1.29 or later. With WIQD, supply it through `--tool-description`; see [Work IQ Dev Tools](build-reuse-mcp-servers.md#work-iq-dev-tools).

For a target experience that supports dynamic discovery, omit `mcpToolDescription` so it can retrieve definitions through `tools/list`. Return tool names, descriptions, and input schemas, and test how changes to the toolset are refreshed.

## Validate and test your plugin

Validate the package before deployment, and then test it in the target experience:

1. Validate the complete app manifest against its declared schema and use [app package validation](https://dev.teams.microsoft.com/tools/store-validation) in Developer Portal.
1. Verify that the endpoint responds to MCP initialization, and that the packaged file or `tools/list` supplies valid tool definitions.
1. Deploy the package to your test tenant through the target experience's supported process. Complete any required administrator approval or access configuration. Deployment doesn't replace user sign-in, consent, or the source service's permissions.
1. Test prompts for the operations your server exposes, such as "Search for open issues assigned to me" or, for a server with write tools, "Update the status of ticket number 123."
1. Verify that the intended tools are available, consent prompts appear when required, and tool calls return the expected results. Test OAuth token refresh where applicable.
1. Check failures for invalid inputs, unavailable services, authorization errors, and timeouts, including retry behavior.
1. Test across tenants if your scenario requires multitenant support.

## Troubleshoot common issues

| Symptom | Check |
|---|---|
| Can't connect to the server | Endpoint accessibility, HTTPS, transport support, firewall settings, and MCP initialization. |
| Tools don't appear | Packaged file path and valid definitions, or support for dynamic discovery with `mcpToolDescription` omitted and a working `tools/list`. |
| Authentication fails | Registered `referenceId`, credential validity, permissions, consent, and outbound authorization headers. |
| Tool calls fail or time out | Server logs, input validation, MCP response format, concurrency, timeouts, and retries. |

## Next steps

When the integration is ready, [package your plugin](package-plugin.md) and follow a supported [publishing or sharing method](publish.md).
