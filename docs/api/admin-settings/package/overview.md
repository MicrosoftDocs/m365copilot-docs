---
title: Package Management API overview
description: Learn about the Package Management API for managing agent packages in Microsoft 365 organizations.
author: pomuth
ms.author: pomuth
ms.topic: overview
ms.localizationpriority: high
ms.date: 06/30/2026
---

<!-- cSpell: ignore pomuth -->

# Agent 365 Package Management API overview

A package represents an agent in the organization catalog. The Package Management API enables IT administrators to view and manage agents across your organization. This API provides endpoints to list all agents and retrieve detailed information about an individual agent, including metadata and detailed elements.

[!INCLUDE [package-management-license](../../includes/package-management-license.md)]

## Key capabilities

- Retrieve an inventory of all agents within the organization, optionally filtering by:
  - Host (Copilot, Outlook, Teams)
  - Platform (Copilot Studio, Microsoft 365 Copilot Agent Builder)
  - Last updated time
  - Element types contained in the agent package (bots, declarative agents, and more).
- Retrieve more metadata for a specific agent.
- Block, unblock, and reassign ownership of packages.

## Example scenarios

- Organization admin retrieves the inventory of all agents.
- Admin reviews package details, including availability and deployment status.
- Admin reviews agent element details, including declarativeAgent or customEngineAgent element object.
- Admin blocks a package to prevent its usage across the organization.
- Admin reassigns package ownership when an employee leaves the organization.

## API list

| Operation                                                       | HTTP Method                                          | Description                                               |
|-----------------------------------------------------------------|------------------------------------------------------|-----------------------------------------------------------|
| [List packages](copilotpackages-list.md)                        | GET `/copilot/admin/catalog/packages`                | Get all agents in the organization.                       |
| [Get package details](copilotpackagedetail-get.md)              | GET `/copilot/admin/catalog/packages/{id}`           | Get detailed metadata for a specific agent.               |
| [Update package](copilotpackagedetail-update.md) (preview)      | PATCH `/copilot/admin/catalog/packages/{id}`         | Update package metadata.                                  |
| [Block](copilotpackage-block.md) (preview)                      | POST `/copilot/admin/catalog/packages/{id}/block`    | Block a package to prevent its usage.                     |
| [Unblock](copilotpackage-unblock.md) (preview)                  | POST `/copilot/admin/catalog/packages/{id}/unblock`  | Unblock a package to allow its usage.                     |
| [Reassign](copilotpackage-reassign.md) (preview)                | POST `/copilot/admin/catalog/packages/{id}/reassign` | Reassign ownership of a package to a different user.      |

## Resources

- [copilotPackage resource](resources/copilotpackage.md)
- [copilotPackageDetail resource](resources/copilotpackagedetail.md)

## Related content

- [Microsoft 365 app manifest schema reference](/microsoft-365/extensibility/schema)
