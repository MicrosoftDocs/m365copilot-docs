---
title: Package Management API overview
description: Learn about the  Package Management API for managing packages in Microsoft 365 organizations.
author: pomuth
ms.author: pomuth
ms.topic: overview
ms.localizationpriority: high
ms.date: 10/28/2025
---

<!-- cSpell: ignore pomuth -->

# Package (Agent & App) Management API (preview) overview

A package represents either an agent or Microsoft 365 app in the organization catalog. The Package Management API enables IT administrators to view and manage apps and agents across Microsoft 365. This API provides endpoints to list all apps and agents, retrieve detailed information about an individual app or agent including metadata and detailed elements.

## Key capabilities

- Retrieve an inventory of all agents and apps within the organization, optionally filtering by:
  - Type (Microsoft, line of business, etc.)
  - Host (Copilot, Outlook, Teams)
  - Last updated time
  - Element types contained in the app package (bots, declarative agents, etc.).
- Retrieve more metadata for a specific app or agent.

## Example scenarios

- Organization admin retrieves the inventory of all Copilot agents and Microsoft 365 apps.
- Admin reviews package details, including availability and deployment status.
- Admin reviews agent element details, including declarativeAgent or customEngineAgent element object.

## API List

| Operation | HTTP Method | Description |
|------------|--------------|-------------|
| [List packages](copilotpackages-list.md) | GET `/copilot/admin/catalog/packages` | Get all apps and agents in the organization. |
| [Get package details](copilotpackagedetail-get.md) | GET `/copilot/admin/catalog/packages/{id}` | Get detailed metadata for a specific app or agent. |

## Resources

- [copilotPackage resource](resources/copilotpackage.md)
- [copilotPackageDetail resource](resources/copilotpackagedetail.md)

## Related content

- [Microsoft 365 app manifest schema reference](/microsoft-365/extensibility/schema)
