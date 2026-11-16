---
title: Copilot connectors as plugin capabilities
description: Compare connector models for a Microsoft 365 Copilot plugin solution and distinguish data-access dependencies from plugin package contents.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
ms.topic: concept-article
---

# Copilot connectors as plugin capabilities

Your solution might need a connector to retrieve external information or perform actions in another service. This article compares three options: Microsoft 365 Copilot synced connectors, Microsoft 365 Copilot federated connectors, and Power Platform connectors. Each option works differently and has its own setup and management requirements. Using a connector doesn't necessarily mean including it in your plugin package.

Start with your [capability choices](choose-plugin-components.md) and the target product. A connector that works in one product isn't necessarily supported in another.

## Microsoft 365 Copilot synced connectors

Synced connectors ingest and index external content in Microsoft Graph. Use this model when your solution needs organizational knowledge made available through the Microsoft 365 index. For model details, see [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md).

You can reuse a prebuilt connector or build a custom connector with the connector SDK or Microsoft Graph APIs. A retained [Toolkit-based synced-connector walkthrough](build-your-first-connector.md) is also available. See the [Copilot connectors API overview](/graph/connecting-external-content-connectors-api-overview).

For supported plugin composition, [Work IQ Dev Tools](https://aka.ms/wiqd/docs) is the recommended pro-code tool. Composing a plugin doesn't replace implementing and operating the selected connector service.

Admins deploy and manage connections in the Microsoft 365 admin center. Follow [Deploy connectors in the Microsoft 365 admin center](/microsoft-365/copilot/connectors/deployment-overview) for configuration, permissions, and synchronization guidance.

## Microsoft 365 Copilot federated connectors

Federated connectors retrieve data from the source at query time without indexing it in Microsoft Graph. Use this model when your solution needs current information from an external system in supported Copilot experiences. See [Federated connectors overview](/microsoft-365/copilot/connectors/federated-connectors-overview) for current capabilities and availability.

You can reuse an available federated connector or build a custom integration around an external MCP server. The server exposes the source-specific tools and runs separately from the plugin package. Follow [Set up custom federated connectors](/microsoft-365/copilot/connectors/set-up-custom-federated-connectors) for the development and configuration path.

Using MCP doesn't make a federated connector interchangeable with a direct MCP server integration. Federated connectors have their own configuration and availability controls. For other remote tool integrations, see [MCP servers as plugin capabilities](plugin-type-mcp-servers.md).

Admins manage federated connector availability in the Microsoft 365 admin center. See [Manage federated connectors](/microsoft-365/copilot/connectors/manage-federated-connectors) for the connector-specific controls.

## Power Platform connectors

Power Platform connectors expose actions and triggers for services used by products such as Copilot Studio, Power Automate, and Power Apps. In a supported agent-based solution, a connector can supply actions or access to data. This model is distinct from indexing content with a synced Copilot connector or retrieving it through a federated Copilot connector. See [Power Platform connectors overview](/connectors/overview).

Reuse a prebuilt connector or create a custom connector in the supported Power Platform product. For the authoring options, see [Custom connectors overview](/connectors/custom-connectors/).

Configure agent connections in Copilot Studio and apply the applicable Power Platform admin policies. See [Create and manage connections](/microsoft-copilot-studio/authoring-connections) and [Advanced connector policies](/power-platform/admin/advanced-connector-policies).

## Decide whether to build or reuse

Before you build a connector:

- Review the [Microsoft-built connectors gallery](/microsoft-365/copilot/connectors/connectors-gallery-microsoft) and [partner-built connectors gallery](/microsoft-365/copilot/connectors/connectors-gallery-partners).
- Confirm that an existing organizational connection isn't already available.
- Compare the connector models against the data-access, freshness, indexing, and workflow requirements.
- Confirm that the connector type is supported by the target Microsoft experiences and publishing method.
- Identify gaps that require a custom connector or service.

If you reuse a connector or connection, confirm its owner, audience, service-level expectations, schema, permissions, and support lifecycle.

## Record connector dependencies

Distinguish what belongs in the plugin package from what you must configure separately. Use the target product's guidance to determine which connector-related components or references the package supports and which connections, services, or environments require separate setup and management.

As you decide whether to build or reuse a connector, note:

- External source, required content, and supported operations.
- Synced Copilot connector, federated Copilot connector, or Power Platform connector, and whether it's prebuilt or custom.
- Application and user identity, authentication, consent, and permissions.
- Schema, freshness, security trimming, and data-governance requirements.
- External service, connection, environment, and availability requirements.
- Any connector-related components or references supported in the plugin package, and dependencies that require separate configuration.
- Owner, support contact, and intended distribution scope.

## Next step

> [!div class="nextstepaction"]
> [Build or reuse capabilities for your plugin](build-reuse-plugin.md)

## Related content

- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md)
- [MCP servers](plugin-type-mcp-servers.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Build your first custom connector](build-your-first-connector.md)
- [Microsoft Graph connectors SDK overview](/graph/custom-connector-sdk-sample-overview?context=/microsoft-365/copilot/extensibility/context)
- [Microsoft Graph connectors API overview](/graph/connecting-external-content-connectors-api-overview?context=/microsoft-365/copilot/extensibility/context)
