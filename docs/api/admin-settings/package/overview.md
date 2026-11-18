---
title: Package Management API overview
description: Learn about the Package Management API for managing agent and tool packages in Microsoft 365 organizations.
author: pomuth
ms.author: pomuth
ms.topic: overview
ms.localizationpriority: high
ms.date: 11/13/2026
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
- Inspect explicit assignees and creation times for an agent request when retrieving package details.
- Reject a pending package title submission by its staged title and version (preview).
- Block, unblock, and reassign ownership of packages.
- Discover policy templates, read saved settings and complete applicable choices, explicitly update or copy a custom template, and customize policies for one Publish request without saving them.
- Inspect an exact pending version and its request metadata, and publish a regular package with availability and an optional acquisition audience.
- Approve an individual request, activate an agent template for its managers, or restore an eligible soft-deleted package.

The beta publication operation returns a workflow result rather than an updated package. Optional regular-package acquisition is separate from publication availability, replaces the administrator-acquisition audience, and propagates asynchronously; it doesn't guarantee host installation or grant permission consent. Already-deployed packages skip acquisition without applying the supplied installation audience.

## Example scenarios

- Organization admin retrieves the inventory of all agents.
- Admin reviews package details, including availability and deployment status.
- Admin reviews the agents that users requested, so that they can triage pending demand.
- Admin inspects an agent request's explicit assignees and rejects a pending package title submission in beta.
- Admin retrieves an inventory of the plugins, MCP servers, and skills in the organization.
- Admin reviews pending requests for MCP servers.
- Admin reviews agent element details, including declarativeAgent or customEngineAgent element object.
- Admin blocks a package to prevent its usage across the organization.
- Admin reassigns package ownership when an employee leaves the organization.
- Admin selects an applicable policy template and publication audience for a pending package version.
- Admin reads a template's saved selected settings separately from its complete applicable definition catalog.
- Admin saves changes to an existing writable custom template or copies one on the server into a new custom template.
- Admin supplies a complete request-local policy configuration for Publish; later Activate uses fresh saved settings and its required template ID.
- Admin optionally selects a separate acquisition audience when publishing a regular package known to be not yet acquired.
- Admin selects an individual access or hiring request's identifier and stored version for approval.
- Admin activates an onboarded template for a manager audience, without creating an instance or approving an individual request.
- Admin restores an eligible soft-deleted package using a retained identifier; unblocking is a different operation.

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
| [List policy templates](copilotpackagepolicytemplate-list.md) (beta) | GET `/copilot/admin/catalog/policyTemplates` | Get tenant policy-template metadata. |
| [Get policy template](copilotpackagepolicytemplate-get.md) (proposed beta contract) | GET `/copilot/admin/catalog/policyTemplates/{policyTemplateId}` | Read one template and saved selected configuration. |
| [List policy definitions](copilotpackagepolicydefinition-list.md) (proposed beta contract) | GET `/copilot/admin/catalog/policyTemplates/{policyTemplateId}/policyDefinitions` | Read the complete applicable families and choices for one template. |
| [Update policy template](copilotpackagepolicytemplate-update.md) (proposed beta contract) | PATCH `/copilot/admin/catalog/policyTemplates/{policyTemplateId}` | Save guarded changes to an existing writable custom template. |
| [Copy policy template](copilotpackagepolicytemplate-copy.md) (proposed beta contract) | POST `/copilot/admin/catalog/policyTemplates/{policyTemplateId}/copy` | Copy a source on the server into a new custom template; returns a new ID. |
| [Publish](copilotpackagepublishresult-publish.md) (beta) | POST `/copilot/admin/catalog/packages/{id}/publish` | Publish a pending version with availability, a policy template, and optional regular-package acquisition. |
| [Approve](copilotpackage-approve.md) (reviewed beta contract) | POST `/copilot/admin/catalog/packages/{id}/approve` | Approve one current individual access or hiring request using its stored request ID and version. |
| [Activate](copilotpackageactivationresult-activate.md) (reviewed beta contract) | POST `/copilot/admin/catalog/packages/{id}/activate` | Activate an agent template for a manager audience; not request approval or instance creation. |
| [Restore](copilotpackage-restore.md) (reviewed beta contract) | POST `/copilot/admin/catalog/packages/{id}/restore` | Restore an eligible soft-deleted package; not unblock or deleted-item discovery. |
| [Reject package title](copilotpackage-reject.md) (preview)                  | POST `/copilot/admin/catalog/packages/{packageId}/reject` | Reject a pending staged package title/version submission. |

## Resources

- [copilotPackage resource](resources/copilotpackage.md)
- [copilotPackageDetail resource](resources/copilotpackagedetail.md)
- [copilotPackagePolicyTemplate resource](resources/copilotpackagepolicytemplate.md) (beta)
- [copilotPackagePolicyDefinition resource](resources/copilotpackagepolicydefinition.md) (proposed beta contract)
- [copilotPackagePolicyConfiguration complex type](resources/copilotpackagepolicyconfiguration.md) (proposed beta contract)
- [copilotPackagePublishResult complex type](resources/copilotpackagepublishresult.md) (beta)
- [copilotPackageRequestMetadata complex type](resources/copilotpackagerequestmetadata.md) (beta)
- [copilotPackageActivationResult complex type](resources/copilotpackageactivationresult.md) (reviewed beta contract)

## Related content

- [Microsoft 365 app manifest schema reference](/microsoft-365/extensibility/schema)
