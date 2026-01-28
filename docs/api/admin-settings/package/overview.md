---
title: Package Management API overview (preview)
description: Learn about the Package Management API for managing agent and app packages in Microsoft 365 organizations.
author: pomuth
ms.author: pomuth
ms.topic: overview
ms.localizationpriority: high
ms.date: 01/28/2026
---

<!-- cSpell: ignore pomuth -->

# Agent and app Package Management API overview (preview)

A package represents either an agent or Microsoft 365 app in the organization catalog. The Package Management API enables IT administrators to view and manage apps and agents across Microsoft 365. This API provides endpoints to list all apps and agents, retrieve detailed information about an individual app or agent including metadata and detailed elements.

## Key capabilities

- Retrieve an inventory of all agents and apps within the organization, optionally filtering by:
  - Type (Microsoft, line of business, etc.)
  - Host (Copilot, Outlook, Teams)
  - Last updated time
  - Element types contained in the app package (bots, declarative agents, etc.).
- Retrieve more metadata for a specific app or agent.
- Create, update, and delete custom packages.
- Block, unblock, and reassign ownership of packages.

## Example scenarios

- Organization admin retrieves the inventory of all Copilot agents and Microsoft 365 apps.
- Admin reviews package details, including availability and deployment status.
- Admin reviews agent element details, including declarativeAgent or customEngineAgent element object.
- Admin uploads a new custom agent package for organizational use.
- Admin blocks a package to prevent its usage across the organization.
- Admin reassigns package ownership when an employee leaves the organization.

## API list

| Operation                                                       | HTTP Method | Description                                               |
|-----------------------------------------------------------------|-------------|-----------------------------------------------------------|
| [List packages](copilotpackages-list.md)                        | GET         | Get all apps and agents in the organization.              |
| [Create package](copilotpackagedetail-create.md)                | POST        | Create a new package in the organization.                 |
| [Get package details](copilotpackagedetail-get.md)              | GET         | Get detailed metadata for a specific app or agent.        |
| [Update package](copilotpackagedetail-update.md)                | PATCH       | Update package metadata.                                  |
| [Delete package](copilotpackagedetail-delete.md)                | DELETE      | Delete a package from the organization.                   |
| [block](copilotpackage-block.md)                                | POST        | Block a package to prevent its usage.                     |
| [unblock](copilotpackage-unblock.md)                            | POST        | Unblock a package to allow its usage.                     |
| [update (action)](copilotpackage-update.md)                     | POST        | Update a package with a new package file.                 |
| [reassign](copilotpackage-reassign.md)                          | POST        | Reassign ownership of a package to a different user.      |

## Resources

- [copilotPackage resource](resources/copilotpackage.md)
- [copilotPackageDetail resource](resources/copilotpackagedetail.md)

## Related content

- [Microsoft 365 app manifest schema reference](/microsoft-365/extensibility/schema)
