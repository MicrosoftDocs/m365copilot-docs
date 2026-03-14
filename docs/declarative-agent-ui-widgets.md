---
title: Add interactive UI widgets to declarative agents
description: Learn how to add interactive UI widgets to MCP server-based declarative agents
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 03/06/2026
ms.topic: how-to
---

# Add interactive UI widgets to declarative agents

<!-- cSpell:ignore dotnetcli ontoolresult ontoolcancelled onhostcontextchanged -->

You can add interactive UI widgets to your declarative agents by adding a [Model Context Protocol (MCP) server-based action](build-mcp-plugins.md) to your agent and extending the MCP tools used by the agent to include UI. Microsoft 365 Copilot supports UI widgets created using the [OpenAI Apps SDK](https://developers.openai.com/apps-sdk).

For example MCP server plugins, see [MCP based interactive UI samples for Microsoft 365 Copilot](https://github.com/microsoft/mcp-interactiveUI-samples) on GitHub.

> [!NOTE]
> Support for [MCP Apps](https://modelcontextprotocol.github.io/ext-apps/api/documents/Overview.html) is coming soon.

For details on which OpenAI Apps SDK capabilities are supported, see [Supported capabilities](#supported-capabilities).

:::image type="content" source="assets/images/api-plugins/mcp-server-ui-inline-widget.png" alt-text="A screenshot of the Sprint tasks widget in Microsoft 365 Copilot":::

:::image type="content" source="assets/images/api-plugins/mcp-server-ui-fullscreen-widget.png" alt-text="A screenshot of the Sprint tasks widget in full-screen mode in Microsoft 365 Copilot":::

## Prerequisites

- Requirements specified in [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options)
- A remote MCP server that provides UI widgets or that you can modify to implement UI widgets
- A tool to view MCP server responses, such as [MCP Inspector](https://www.npmjs.com/package/@modelcontextprotocol/inspector)
- [Visual Studio Code](https://code.visualstudio.com/)
- The latest version of [Microsoft 365 Agents Toolkit](https://marketplace.visualstudio.com/items?itemName=TeamsDevApp.ms-teams-vscode-extension) version 6.6.0 or later

## MCP server requirements

- **Authentication** - OAuth 2.1 and Microsoft Entra single sign-on (SSO) are supported. Anonymous authentication is supported for development purposes. For details on authentication, see [Configure authentication for API plugins in agents](api-plugin-authentication.md).
- **Allowed URLs** - the following URLs should be allowed by both your MCP server and your identity provider.
  - Widget host URL for CORS - Copilot renders widget UI under an MCP server-specific host with the following URL: `{hashed-mcp-domain}.widget-renderer.usercontent.microsoft.com`, where `{hashed-mcp-domain}` is the SHA-256 hash of your MCP server's domain. You can use the [Widget Host URL Generator](https://aka.ms/mcpwidgeturlgenerator) to generate the host URL based on your MCP server URL.
  - OAuth 2.1 redirect URIs:
    - `https://teams.microsoft.com/api/platform/v1.0/oAuthRedirect` for Copilot
    - `https://vscode.dev/redirect` for Visual Studio Code to fetch tools using the Agents Toolkit
  - Microsoft Entra SSO redirect URIs:
    - `https://teams.microsoft.com/api/platform/v1.0/oAuthConsentRedirect` for Copilot
    - Visual Studio Code doesn't currently support SSO for fetching tools
- **UI widgets** - UI widgets must be implemented according to the MCP Apps or OpenAI Apps SDK requirements.

## Best practices

For details on UX design best practices, see [User experience guidelines for interactive UI widgets in declarative agents](declarative-agent-ui-widgets-guidelines.md).

### Verify API availability

Not all `window.openai.*` APIs are available on every platform or host. APIs that are unsupported are `undefined`. Always check API availability and provide a fallback if the API is unavailable.

#### Examples

This simple pattern avoids runtime errors by checking before calling the API.

```typescript
if (window.openai.callTool) {
  const result = await window.openai.callTool({ name: 'myTool', params: {} });
} else {
  // Handle unsupported case — show fallback UI, skip the feature, etc.
}
```

In this example, a button to enter fullscreen mode is rendered only if the host supports the `requestDisplayMode` API.

```typescript
function FullScreenButton() {
  // Don't render the button if the host doesn't support it
  if (!window.openai.requestDisplayMode) {
    return null;
  }

  return (
    <button onClick={() => window.openai.requestDisplayMode({ mode: 'fullscreen' })}>
      Enter Fullscreen
    </button>
  );
}
```

Alternatively, your widget can check availability of all APIs that it uses at startup and enable/disable features accordingly.

```typescript
interface PlatformCapabilities {
  canCallTools: boolean;
  canChangeDisplayMode: boolean;
  canSendMessages: boolean;
}

function detectCapabilities(): PlatformCapabilities {
  return {
    canCallTools: !!window.openai.callTool,
    canChangeDisplayMode: !!window.openai.requestDisplayMode,
    canSendMessages: !!window.openai.sendMessage,
  };
}

// Use at widget startup
const capabilities = detectCapabilities();

if (!capabilities.canCallTools) {
  // Show a reduced-functionality experience
}
```

## Create a declarative agent

1. Open Visual Studio Code and select the **Microsoft 365 Agents Toolkit** icon in the left-hand Activity Bar.

1. Select **Create a New Agent/App** in the Agents Toolkit task pane.

    :::image type="content" source="assets/images/api-plugins/create-plugin-ttk.png" alt-text="A screenshot of the Agents Toolkit interface":::

1. Select **Declarative Agent**.

1. Select **Add an Action**, then select **Start with an MCP Server**. If prompted, choose **Remote MCP server**.

1. Enter URL to your MCP server.

1. Choose a location for the agent project.

1. Enter a name for the agent.

When you complete these steps, Agents Toolkit generates the required files for the agent and opens a new Visual Studio Code window with the agent project loaded.

### Update and sideload the agent

1. Open the **.vscode/mcp.json** file. Select the **Start** button in the file editor.

1. Select the **ATK: Fetch action from MCP** button in the file editor, then select **ai-plugin.json**.

    :::image type="content" source="assets/images/api-plugins/fetch-mcp-actions.png" alt-text="A screenshot of the 'ATK: Fetch action from MCP' and 'Start' buttons in mcp.json":::

1. Select the tools for the agent to use and select **OK**. Be sure to select at least one tool that has a UI widget.

1. Select the applicable authentication type.

    :::image type="content" source="assets/images/api-plugins/mcp-select-authentication-type.png" alt-text="A screenshot of the prompt to choose the authentication type":::

    > [!IMPORTANT]
    > If your MCP server is in development and doesn't implement authentication, this step is skipped. You need to manually add authentication to your manifest once you add authentication to your server.

1. Open **mcp-tools.json** and replace the existing value with the `tools/list` response JSON from your MCP server. Use a testing tool such as [MCP Inspector](https://www.npmjs.com/package/@modelcontextprotocol/inspector) to get the response from your server.

    > [!NOTE]
    > This step is temporary. Agents Toolkit will be updated to make this step unnecessary in the future.

1. Select the **Microsoft 365 Agents Toolkit** icon in the left-hand Activity Bar.

1. In the **Accounts** pane, select **Sign in to Microsoft 365**. (If you're already signed in, continue to the next step).

1. Confirm that both **Custom App Upload Enabled** and **Copilot Access Enabled** display under your Microsoft 365 account. If they don't, check with your organization admin. See [Requirements for Copilot extensibility options](prerequisites.md#requirements-for-copilot-extensibility-options) for details.

1. In the **Lifecycle** pane, select **Provision**.

1. If prompted, add your authentication details.

1. Wait for the toolkit to report that it finishes provisioning.

### Test the agent

1. Open your browser and go to [https://m365.cloud.microsoft/chat](https://m365.cloud.microsoft/chat).
1. Select your agent in the left-hand sidebar. If you don't see your agent, select **All agents**.
1. Ask the agent to do something that invokes your MCP server.
1. Allow the agent to connect to the MCP server when prompted.
1. The agent renders the UI widget.

## Supported capabilities

Microsoft 365 Copilot supports the following capabilities.

### Component bridge

| OpenAI Apps SDK                                 | Supported?                            |
|-------------------------------------------------|---------------------------------------|
| `window.openai.toolInput`                       | :white_check_mark:                    |
| `window.openai.toolOutput`                      | :white_check_mark:                    |
| `window.openai.toolResponseMetadata`            | :white_check_mark:                    |
| `window.openai.widgetState`                     | :white_check_mark:                    |
| `window.openai.setWidgetState(state)`           | :white_check_mark:                    |
| `window.openai.callTool(name, args)`            | :white_check_mark:                    |
| `window.openai.sendFollowUpMessage({ prompt })` | :white_check_mark:                    |
| `window.openai.uploadFile(file)`                | :x:                                   |
| `window.openai.getFileDownloadUrl({ fileId })`  | :x:                                   |
| `window.openai.requestDisplayMode(...)`         | :white_check_mark: (full screen only) |
| `window.openai.requestModal(...)`               | :x:                                   |
| `window.openai.notifyIntrinsicHeight(...)`      | :white_check_mark:                    |
| `window.openai.openExternal({ href })`          | :white_check_mark:                    |
| `window.openai.setOpenInAppUrl({ href })`       | :white_check_mark:                    |
| `window.openai.theme`                           | :white_check_mark:                    |
| `window.openai.displayMode`                     | :white_check_mark:                    |
| `window.openai.maxHeight`                       | :white_check_mark:                    |
| `window.openai.safeArea`                        | :white_check_mark:                    |
| `window.openai.view`                            | :white_check_mark:                    |
| `window.openai.userAgent`                       | :white_check_mark:                    |
| `window.openai.locale`                          | :white_check_mark:                    |

### Tool descriptor _meta fields

| OpenAI Apps SDK                           | Supported?         |
|-------------------------------------------|--------------------|
| `_meta["openai/outputTemplate"]`          | :white_check_mark: |
| `_meta["openai/widgetAccessible"]`        | :x:                |
| `_meta["openai/visibility"]`              | :white_check_mark: |
| `_meta["openai/toolInvocation/invoking"]` | :x:                |
| `_meta["openai/toolInvocation/invoked"]`  | :x:                |
| `_meta["openai/fileParams"]`              | :x:                |
| `_meta["securitySchemes"]`                | :x:                |

### Tool descriptor annotations

| OpenAI Apps SDK   | Supported?         |
|-------------------|--------------------|
| `readOnlyHint`    | :white_check_mark: |
| `destructiveHint` | :x:                |
| `openWorldHint`   | :x:                |
| `idempotentHint`  | :x:                |

### Component resource _meta fields

| OpenAI Apps SDK                       | Supported?         |
|---------------------------------------|--------------------|
| `_meta["openai/widgetDescription"]`   | :x:                |
| `_meta["openai/widgetPrefersBorder"]` | :x:                |
| `_meta["openai/widgetCSP"]`           | :white_check_mark: |
| `_meta["openai/widgetDomain"]`        | :x:                |

### Properties in CSP object

| OpenAI Apps SDK    | Supported?         |
|--------------------|--------------------|
| `connect_domains`  | :white_check_mark: |
| `resource_domains` | :white_check_mark: |
| `frame_domains`    | :x:                |
| `redirect_domains` | :x:                |

### Host-provided tool result _meta fields

| OpenAI Apps SDK                   | Supported? |
|-----------------------------------|------------|
| `_meta["openai/widgetSessionId"]` | :x:        |

### Client-provided _meta fields

| OpenAI Apps SDK                | Supported?         |
|--------------------------------|--------------------|
| `_meta["openai/locale"]`       | :white_check_mark: |
| `_meta["openai/userAgent"]`    | :white_check_mark: |
| `_meta["openai/userLocation"]` | :white_check_mark: |
| `_meta["openai/subject"]`      | :x:                |

## Related content

- [Build plugins from an MCP server for Microsoft 365 Copilot](build-mcp-plugins.md)
- [User experience guidelines for interactive UI widgets in declarative agents](declarative-agent-ui-widgets-guidelines.md)
- [OpenAI Apps SDK](https://developers.openai.com/apps-sdk)
- [MCP based interactive UI samples for Microsoft 365 Copilot](https://github.com/microsoft/mcp-interactiveUI-samples)
