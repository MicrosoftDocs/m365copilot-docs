---
title: Package Management API overview
description: Learn about the Package Management API for managing agent and tool packages in Microsoft 365 organizations.
author: pomuth
ms.author: pomuth
ms.topic: overview
ms.localizationpriority: high
ms.date: 10/30/2026
---

<!-- cSpell: ignore pomuth -->

# Agent 365 Package Management API overview

A package represents an agent or a tool, such as a plugin, MCP server, or skill, in the organization catalog. The Package Management API enables IT administrators to view and manage agents and tools across your organization. This API provides endpoints to list agents and tools and to retrieve detailed information about an individual package, including metadata and detailed elements. By default, listing packages returns only titles that contain an agent. To list titles that contain tools, filter on element type. The API doesn't return Power Platform connectors.

[!INCLUDE [package-management-license](../../includes/package-management-license.md)]

## Key capabilities

- Retrieve an inventory of the agents and tools within the organization, optionally filtering by:
  - Host (Copilot, Outlook, Teams)
  - Platform (Copilot Studio, Microsoft 365 Copilot Agent Builder)
  - Last updated time
  - Element types contained in the package, including agent types (bots, declarative agents, and more) and tool types (plugins, MCP servers, and skills).
  - Request status or request type, to review the agents and tools that users in the organization requested.
- Retrieve more metadata for a specific agent or tool.
- Block, unblock, and reassign ownership of packages.

## Example scenarios

- Organization admin retrieves the inventory of all agents.
- Admin reviews package details, including availability and deployment status.
- Admin reviews the agents that users requested, so that they can triage pending demand.
- Admin retrieves an inventory of the plugins, MCP servers, and skills in the organization.
- Admin reviews pending requests for MCP servers.
- Admin reviews agent element details, including declarativeAgent or customEngineAgent element object.
- Admin blocks a package to prevent its usage across the organization.
- Admin reassigns package ownership when an employee leaves the organization.

## API list

| Operation                                                                   | HTTP Method                                          | Description                                          |
|-----------------------------------------------------------------------------|------------------------------------------------------|------------------------------------------------------|
| [List packages](copilotpackages-list.md)                                    | GET `/copilot/admin/catalog/packages`                | Get the agents in the organization, and optionally tools such as plugins, MCP servers, and skills. |
| [Get package details](copilotpackagedetail-get.md)                          | GET `/copilot/admin/catalog/packages/{id}`           | Get detailed metadata for a specific agent or tool.  |
| [Update package](copilotpackagedetail-update.md) (preview)                  | PATCH `/copilot/admin/catalog/packages/{id}`         | Update package metadata.                             |
| [Block](copilotpackage-block.md) (preview)                                  | POST `/copilot/admin/catalog/packages/{id}/block`    | Block a package to prevent its usage.                |
| [Unblock](copilotpackage-unblock.md) (preview)                              | POST `/copilot/admin/catalog/packages/{id}/unblock`  | Unblock a package to allow its usage.                |
| [Reassign](copilotpackage-reassign.md) (preview)                            | POST `/copilot/admin/catalog/packages/{id}/reassign` | Reassign ownership of a package to a different user. |
| [List package requests](copilotpackages-list.md#filter-by-request-properties) | GET `/copilot/admin/catalog/packages`                | Get active requests for agents and tools in the organization. |
| [Get agent request details](copilotpackagedetail-get.md)                    | GET `/copilot/admin/catalog/packages/{id}`           | Get detailed metadata for a specific agent request.  |

## Resources

- [copilotPackage resource](resources/copilotpackage.md)
- [copilotPackageDetail resource](resources/copilotpackagedetail.md)

## Related content

- [Microsoft 365 app manifest schema reference](/microsoft-365/extensibility/schema)
