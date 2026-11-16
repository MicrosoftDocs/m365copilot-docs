---
title: MCP servers as plugin capabilities
description: Learn when to use an MCP server in a Microsoft 365 Copilot plugin and what runtime, authentication, reuse, and ownership decisions to record before you build or reuse it.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.topic: concept-article
---

# MCP servers as plugin capabilities

A Model Context Protocol (MCP) server is an external service that exposes tools and resources through MCP. Your plugin can depend on that service alongside skills, agents, or connectors.

The running server isn't part of the plugin package. The package can include connection information or references, while the service owner hosts and operates the server separately.

> [!NOTE]
> Support for MCP discovery, authentication, and protocol features varies by product. Publishing a plugin or certifying its MCP server doesn't establish support in every host.

## Choose an integration path

Choose the guidance that matches how your solution uses the server:

- **Plugin configuration:** [Configure remote MCP servers for Microsoft 365 Copilot plugins](configure-plugin-mcp-servers.md). The plugin package contains connection configuration in the Microsoft 365 app manifest; the server runs separately. Use this path only for target experiences that support this configuration.
- **Declarative-agent actions:** [Build an MCP plugin for your agent](build-mcp-plugins.md). An MCP plugin connects the agent to the server through an MCP plugin manifest. Its tools remain available only through the agent, not as independently exposed capabilities of the outer plugin package.
- **Copilot Studio agents:** [Connect your agent to an existing MCP server](/microsoft-copilot-studio/mcp-add-existing-server-to-agent).

Follow the selected integration path's authentication and connection guidance. Don't assume that an authentication method supported by one integration path is supported by another.

## Decide whether you need an MCP server

Choose an MCP server when:

- The solution requires tools or resources that run in a remotely hosted service.
- A supported Microsoft experience must discover and invoke those capabilities through MCP.
- You need to maintain the service, protocol implementation, and tool behavior independently from the plugin package.
- An existing approved MCP server can provide the required capability.

An MCP server might not be the right component when:

- The requirement is primarily to make external content available through an indexed or federated data model. Consider a [connector](plugin-type-connectors.md).
- A supported built-in capability or existing plugin already performs the operation.
- The organization can't operate or approve the required remote service, identity, or network connection.

## Decide whether to build or reuse

Before you build an MCP server:

- Review the [list of all MCP servers](/connectors/connector-reference/connector-reference-mcpserver-connectors) and your organization's approved inventory for an existing server that exposes the required tools or resources.
- Review its tool definitions, inputs, outputs, errors, and confirmation requirements.
- Confirm that its transport, authentication model, and protocol features are supported by the target Microsoft experience.
- Confirm its availability, performance, data handling, versioning, and support commitments.
- Determine whether you can reference the existing server or need to implement and operate a new service.

If you reuse a server, the server owner remains responsible for its runtime unless your operating agreement assigns that responsibility elsewhere. Packaging connection metadata doesn't transfer ownership of the server.

## Plan authentication and hosting

For each MCP server, identify:

- The service owner and hosting environment.
- The endpoint, transport, network, availability, and scaling requirements.
- The application and user identity model.
- Authentication, consent, permissions, and secret or credential management.
- Data sent to and returned from the service.
- Tool discovery, versioning, compatibility, and failure behavior.
- Logging, monitoring, support, and incident-response responsibilities.

Connecting to a server establishes the endpoint, account, authentication, or service relationship required for the capability to operate. It's separate from publishing, acquisition, deployment, and enablement.

## Record MCP dependencies

As you decide whether to build or reuse an MCP server, note:

- Required tools or resources and the requirements they satisfy.
- Reused or new server and its owner.
- Target Microsoft experiences and supported discovery model.
- Endpoint, transport, authentication, permissions, and network dependencies.
- Hosting, data handling, availability, versioning, and support requirements.
- Plugin configuration and distribution constraints.

## MCP server certification

For new MCP server certification submissions, use the intake form and the **Apps and Agents for M365 and Copilot** offer type in Partner Center. Servers certified through the previous process move to the new process automatically. You can use the legacy process through November 18, 2026.

For submission guidance and the intake form, see [Microsoft MCP server certification (preview)](/microsoft-copilot-studio/mcp-certification).

## Next step

> [!div class="nextstepaction"]
> [Build or reuse capabilities for your plugin](build-reuse-plugin.md)

## Related content

- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Connectors](plugin-type-connectors.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Configure remote MCP servers for plugins](configure-plugin-mcp-servers.md)
- [Build an MCP plugin for a declarative agent](build-mcp-plugins.md)
- [Connect an MCP server in Copilot Studio](/microsoft-copilot-studio/mcp-add-existing-server-to-agent)
- [Authentication for MCP and API actions in declarative agents](plugin-authentication.md)
- [Dynamic tool discovery for declarative-agent MCP actions](plugin-dynamic-tool-discovery.md)
- [MCP apps in declarative agents](plugin-mcp-apps.md)
- [Microsoft MCP server certification (preview)](/microsoft-copilot-studio/mcp-certification)
