---
title: MCP servers as plugin capabilities
description: Learn when to use an MCP server in a Microsoft 365 Copilot plugin and what runtime, authentication, reuse, and ownership decisions to record before you build or reuse it.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: concept-article
---

# MCP servers as plugin capabilities

A Model Context Protocol (MCP) server is a remote service that can expose tools and resources through Model Context Protocol. A plugin can bring together MCP-based capabilities with agents, skills, or Copilot connectors.

The running MCP server remains separate from the plugin package. The package references or carries the configuration required for a supported Microsoft experience to discover the tools, connect to the server, and apply the appropriate authentication and permission model.

> [!IMPORTANT]
> MCP discovery, authentication, invocation, supported protocol features, user experience, and governance vary by Microsoft experience. Publishing or certifying an MCP-based plugin doesn't establish support in every host.

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

After you decide to build or reuse an MCP server, [choose development tools](choose-plugin-development-tools.md).

## Related content

- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Connectors](plugin-type-connectors.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Build a plugin from an MCP server](build-mcp-plugins.md)
- [Authentication overview](plugin-authentication.md)
- [Dynamic tool discovery](plugin-dynamic-tool-discovery.md)
- [MCP apps](plugin-mcp-apps.md)
- [Microsoft MCP server certification (preview)](/microsoft-copilot-studio/mcp-certification)
