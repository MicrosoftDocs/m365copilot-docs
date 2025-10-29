---
title: Package Management API overview
description: Learn about the  Package Management API for managing packages in Microsoft 365 tenants.
author: pomuth
ms.author: pomuth
ms.topic: overview
ms.localizationpriority: high
ms.date: 10/28/2025
---

<!-- cSpell: ignore pomuth -->

# Package Management API (preview) overview

A package represents either an Agent or MetaOS app in the tenant catalog. The Package Management API enables IT administrators to view and manage packages across Microsoft 365. This API provides endpoints to list all packages, retrieve detailed information about an individual package including metadata and detailed package elements.

## Key capabilities

- List all packages in the tenant
- Retrieve details for a specific package
- View package metadata and configuration
- View package elements

## Example scenarios

- Tenant admin retrieves the inventory of all Copilot Agents and MetaOS Apps.
- Admin reviews package details, including availability and deployment status.
- Admin reviews agent details, including declarativeAgent or customEngineAgent element object.

## API List

| Operation | HTTP Method | Description |
|------------|--------------|-------------|
| [List packages](packages-list.md) | GET `/copilot/admin/catalog/packages` | Get all apps and agents in the tenant |
| [Get package details](packagedetail-get.md) | GET `/copilot/admin/catalog/packages/{id}` | Get detailed metadata for a specific app or agent |

## Resources and operations

- [copilotPackage resource](resources/copilotPackage.md)
- [copilotPackageDetail resource](resources/copilotPackageDetail.md)
- [List packages](packages-list.md)
- [Get package details](packagedetail-get.md)

For more information, see the API reference and conceptual documentation.
