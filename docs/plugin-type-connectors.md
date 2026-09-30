---
title: Copilot connectors as plugin capabilities
description: Learn when to use a Copilot connector in a Microsoft 365 Copilot plugin and what data, access, reuse, and ownership decisions to record before you build or reuse it.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: concept-article
---

# Copilot connectors as plugin capabilities

Copilot connectors provide approved access to enterprise or third-party data and services. A plugin can bring together a connector with agents, skills, or MCP-based capabilities.

Connector implementations differ in how they retrieve data, authenticate, run, and participate in a plugin package:

- **Synced connectors** ingest and index external content in Microsoft Graph.
- **Federated connectors** retrieve content in real time without indexing it in Microsoft Graph.

For a detailed comparison, see [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md).

> [!IMPORTANT]
> Connector packaging, publishing, authentication, and host support vary by connector type. A common plugin model doesn't make every connector available in every Microsoft experience.

## Decide whether you need a connector

Choose a connector when:

- Users need approved access to data outside Microsoft 365.
- The source must be indexed in Microsoft Graph or retrieved in real time through a supported connector model.
- The source requires schema mapping, permissions, security trimming, freshness, or connection management.
- A prebuilt or custom connector is supported by the target Microsoft experience.

## Compare connectors and MCP servers

Connectors and MCP servers can both connect Microsoft experiences to external systems, but they serve different primary needs.

| Requirement | Consider |
|---|---|
| Make external content available through a supported indexed or federated data-access model | Connector |
| Expose remotely hosted tools or resources for discovery and invocation | MCP server |
| Ground responses in external content and perform operations in the source system | A connector and an MCP-based capability, when the target experience supports both |

The supported read and write behavior depends on the connector or MCP model. Don't choose solely from the protocol name; compare the required user experience, data flow, identity, runtime, and host support.

## Decide whether to build or reuse

Before you build a connector:

- Review the [Microsoft-built connectors gallery](/microsoft-365/copilot/connectors/connectors-gallery-microsoft) and [partner-built connectors gallery](/microsoft-365/copilot/connectors/connectors-gallery-partners).
- Confirm that an existing organizational connection isn't already available.
- Compare synced and federated models against the freshness, indexing, and data-residency requirements.
- Confirm that the connector type is supported by the target Microsoft experiences and distribution route.
- Identify gaps that require a custom connector or service.

If you reuse a connector or connection, confirm its owner, audience, service-level expectations, schema, permissions, and support lifecycle.

## Record connector dependencies

As you decide whether to build or reuse a connector, note:

- External source, required content, and supported operations.
- Synced, federated, prebuilt, or custom connector model.
- Application and user identity, authentication, consent, and permissions.
- Schema, freshness, security trimming, and data-governance requirements.
- External service, connection, environment, and availability requirements.
- Owner, support contact, and intended distribution scope.

After you decide to build or reuse a connector, [choose development tools](choose-plugin-development-tools.md).

## Related content

- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md)
- [MCP servers](plugin-type-mcp-servers.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Build your first custom connector](build-your-first-connector.md)
- [Microsoft Graph connectors SDK overview](/graph/custom-connector-sdk-sample-overview?context=/microsoft-365/copilot/extensibility/context)
- [Microsoft Graph connectors API overview](/graph/connecting-external-content-connectors-api-overview?context=/microsoft-365/copilot/extensibility/context)
