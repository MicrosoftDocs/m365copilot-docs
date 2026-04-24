---
title: Troubleshoot MCP apps in Microsoft 365 Copilot - Common issues and fixes
description: Fix common issues with MCP apps in Microsoft 365 Copilot, including widget rendering problems, tool discovery failures, authentication errors, and response issues.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.topic: troubleshooting-general
ms.date: 04/24/2026
---

# Troubleshoot MCP apps in Microsoft 365 Copilot

This guide provides troubleshooting advice for common issues you might encounter when developing an [MCP app to integrate with a declarative agent](plugin-mcp-apps.md) inside Microsoft 365 Copilot.

## Enable developer mode

[Enabling developer mode](prerequisites.md#enabling-developer-mode) surfaces logs and error in agent responses. This information is essential for debugging. To enable developer mode, type the following in Microsoft Copilot.

```text
-developer on
```

MCP tools available to your agent show up in the **Actions** section of the debug information card. For details about the debug information card, see [Use developer mode in Microsoft 365 Copilot to test and debug agents](debugging-agents-copilot-studio.md).

## Discovery and entry problems

### No tools listed

If the **Actions** section of the debug information card does not list any MCP tools, check the following.

- Confirm your MCP server is running and you are connecting to the correct MCP endpoint in your plugin manifest.
- Verify your plugin manifest includes the expected tools in the `functions` property.
- Verify that the MCP server runtime specified in the `runtimes` property in your plugin manifest:
  - References the tools in the `mcp_tool_description` property by either:
    - Referencing a JSON file that contains the tool descriptions in the `file` property **OR**
    - Listing the tool descriptions inline in the `tools` property
  - Includes the tool names in the `run_for_functions` property.

```json
"runtimes": [
  {
    "type": "RemoteMCPServer",
    "spec": {
      "url": "https://api.contoso.com/mcp",
      "mcp_tool_description": "mcp-tools.json"
    },
    "run_for_functions": [
      "get_widget",
      "create_widget"
    ]
  }
]
```

### Tools not triggering from Copilot chat

- Revisit your tool and parameter descriptions to ensure they provide sufficient context. Consider rewriting using "Use this when..." phrasing.
- Keep descriptions under 1024 characters - text beyond 1024 characters is ignored.
- Ensure tool visibility is set correctly.
  - For MCP apps, `_meta.ui.visibility` includes `model`.
  - For OpenAI SDK apps, `meta["openai/visibility"]` is set to `public`.

### The wrong tool is selected

- Avoid tools with similar names or overlapping descriptions.
- Add clear differentiators in descriptions explaining when each tool should be used.

## Widget issues

### Widget doesn't render

If the correct MCP tool is called but your UI widget does not render in the response, your MCP server is likely only returning structured content with no UI component. Ensure that UI binding is configured correctly.

- For MCP apps, tool definition includes `_meta.ui.resourceUri` set to a registered HTML resource with MIME type `text/html;profile=mcp-app`.
- For OpenAI SDK apps, tool definition includes `_meta["openai/outputTemplate"]` set to a registered HTML resource with MIME type `text/html+skybridge`.

### Widget fails to load

- Open your browser's developer tools and check for Content Security Policy (CSP) violations in the console. Ensure that requests from the widget's host URL are allow-listed. For more details, see [MCP server requirements for MCP apps](plugin-mcp-apps.md#mcp-server-requirements-for-mcp-apps).
- Verify that your widget compiles all HTML and JavaScript dependencies into a single file with no external unresolved assets.

### Widget loads with no data

- Verify the tool's response structure.
  - `content` should contain the data (model) only.
  - `structuredContent` should contain the data and the widget.
  - `_meta` should contain the widget only.
- Ensure the required data is present in `structuredContent` or `_meta`.

### Widget has a double scrollbar

The Copilot host container already has a scroll with max height. Disable inner scroll in your widget by setting `overflow: hidden` in your container styles.

### Hyperlinks in widget don't open

Anchor tags `<a>` don't work for external links in Copilot. Use the appropriate platform APIs instead.

- For MCP apps, use `app.openLink`.
- For OpenAI SDK apps, use `window.openai.openExternal`.

### Fullscreen doesn't work in some Copilot hosts

Fullscreen view is not supported across all Copilot hosts. As a best practice, always check for host capabilities and conditionally display UI elements (such as a fullscreen button). For more details, see [Verify API availability](plugin-mcp-apps.md#verify-api-availability).

## Response issues

### Tool result expiry issues

Ensure tool responses sent via `content` or `structuredContent` are not excessively large. If your widget requires rich metadata that isn't useful for the model, such as avatar URLs or UI-specific details, include the full data in `_meta` and provide a concise summary in `content`. This ensures the model retains key information while supporting an effective multi-turn experience.

### Duplicate data in widget and text summary

You can resolve this with one of the following options.

- **Optimize data separation:** use `_meta` for widget-specific data and `content` for model-visible summaries.
- **Steer formatting:** use instructions in the declarative agent manifest to guide how responses are structured and presented.

## Authentication issues

### App ID mismatch between auth configuration and plugin

If you see errors in your debug information card similar to:

```text
OAuth authentication failed: The App ID used in the request does not match the App ID in the authentication configuration. (HTTP 404)
```

Go to the [Teams developer portal](https://dev.teams.microsoft.com). Find your OAuth client or SSO client registration and verify that the App ID in your plugin matches the registered App ID.

### Base URL in auth configuration does not match the plugin

If you see errors in your debug information card similar to:

```text
OAuth authentication failed: The base URL in your authentication configuration does not match the server URL. (HTTP 401)
```

Go to the [Teams developer portal](https://dev.teams.microsoft.com). Find your OAuth client or SSO client registration and verify that the MCP server URL in your plugin matches the registered base URL.

### Reference ID in the plugin manifest is incorrect or missing

If you see errors in your debug information card similar to:

```text
OAuth authentication failed: No matching configuration found for referenceID in 'runtime.auth' section of the action manifest
```

Go to the [Teams developer portal](https://dev.teams.microsoft.com). Find your OAuth client or SSO client registration and verify that the ID in your MCP server's runtime's `auth.reference_id` matchs the registration's ID in the developer portal.

### Organization policy restricts access

If you see errors in your debug information card similar to:

```text
OAuth authentication failed: Access is restricted by your organization's policy. (HTTP 404)
```

Contact your organization's administrators to review and enable access for your app.

### Sign in button is inactive or displays general error

If your sign in button is inactive or disabled, or selecting it gives a general "Request cannot be processed" error, this could indicate temporary authentication or session issues. Retry the query. If the issue persists, reinsall the app or contact your organization's administrators.

### Sign in popup fails to open

Enable popups for the site in your browser's settings and try again.

### Incorrect credentials error

If you see an "Incorrect credentials" error in the sign in popup or chat response, ensure you are entering the correct credentials. If the error persists, ensure that the user has required permissions.

### Sign in URL not found

Uninstall and reinstall the app, then try signing in again.

### Internal server error during authentication

Check details in the authentication popup and contact your organization's administrators for permissions issues.

### Consent dialog appears during sign in

If a consent dialog appears requesting permissions or business justification, review any requested permissions and provide a business justification if required. If you are unsure, or if the consent dialog requests permissions that require admin consent, contact your organization's administrators.

## Related content

- [Add MCP apps to declarative agents in Microsoft 365 Copilot](plugin-mcp-apps.md)
- [Configure authentication for MCP and API plugins in agents](plugin-authentication.md)
- [Use developer mode in Microsoft 365 Copilot to test and debug agents](debugging-agents-copilot-studio.md)
