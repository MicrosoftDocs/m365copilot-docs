---
title: SharePoint Tools for Work IQ
description: Learn about SharePoint scenarios, required permissions, and scope-filtered resource paths for SharePoint Tools in Work IQ.
author: patrick-rodgers
ms.author: patrodg
ms.topic: overview
ms.localizationpriority: medium
ms.date: 10/30/2026
---

# SharePoint Tools for Work IQ

By using SharePoint Tools in Work IQ, agents can work with SharePoint content and workflows. These tools offer the same capabilities as Copilot in SharePoint. Use these tools to build experiences that discover site content, work with OneDrive, organize files, maintain lists and document libraries, and manage collaboration workflows.

> [!NOTE]
> The SharePoint Tools are available in public preview.

Work IQ exposes SharePoint Tools through resource paths under `/sharepoint`. Agents use the Work IQ MCP interface to discover available paths and inspect their schemas, rather than loading a separate catalog of SharePoint-specific tools. For more information about this model, see [Work IQ MCP entity model](mcp/entity-model.md).

## Permissions and path visibility

Before using SharePoint Tools, [enable Work IQ in your organization](enable-work-iq.md).

Your agent or application needs **either `WorkIQ.Read` or `WorkIQ.Act`** in its access token to access the SharePoint Tools. Request the scope that matches your scenario. For more information about available permission scopes, see [Work IQ API permissions reference](permissions.md).

| Scope | Scenario |
| --- | --- |
| `WorkIQ.Read` | Read SharePoint information without changing content or configuration. |
| `WorkIQ.Act` | Perform actions that change SharePoint content or configuration, such as creating, updating, or deleting resources. This scope also includes the read access provided by `WorkIQ.Read`. |

Work IQ filters the `/sharepoint` paths exposed during discovery according to the scopes in the access token. A read-only token doesn't expose paths for actions that change data. Use runtime path and schema discovery to determine which operations are available to your application.

> [!NOTE]
> If your access token contains **only** the `WorkIQAgent.Ask` scope, the `/sharepoint` paths are hidden. The Ask scope alone doesn't provide access to SharePoint Tools in Work IQ. Your application needs `WorkIQ.Read` or `WorkIQ.Act` for these paths to be discoverable.

OAuth scopes don't grant access beyond the signed-in user's existing SharePoint permissions. Tenant governance policies also apply to requests. For more information, see [Policy governance for Work IQ MCP](mcp/policy-governance-mcp.md).

## Covered scenarios

SharePoint Tools in Work IQ support the following scenarios. Availability depends on the granted scopes, the signed-in user's permissions, and applicable tenant policies.

The exact paths and parameters that Work IQ exposes for SharePoint Tools evolve over time, but existing scenarios remain supported. This model differs from traditional fixed API contracts. Avoid hard-coding assumptions about specific tools, parameters, or calling patterns. Discover available paths and schemas at runtime.

| Scenario | Capabilities |
| --- | --- |
| Find and understand site content | Search site content, discover lists and libraries, and inspect their settings, columns, content types, and views. |
| Organize files and folders | Create folders; copy, move, rename, and recycle files and folders; create shortcuts; change folder colors; and archive or reactivate library content. |
| Prepare file transfers | Obtain download instructions and upload-session details, including resumable upload sessions. File-transfer preparation doesn't transfer the file bytes. |
| Maintain list data | Create, update, and delete list items, including batch changes. Resolve people, lookup values, and managed metadata into the values needed for list fields. |
| Configure lists and libraries | Create, update, and delete lists and document libraries, manage columns and views, and apply column and view formatting. |
| Work with forms and templates | Inspect existing forms, create or update document-collection forms, and create document templates with submission forms. |
| Manage approvals | Configure built-in approvals and routing, create approval requests, inspect their status and history, and approve, reject, or cancel requests. |
| Track e-signature requests | List sent requests, inspect agreement details and status, and cancel pending agreements when you're the creator. |
| Collaborate and manage file access | Add and retrieve comments, check recipients' access, share files through links and email notifications, and remove direct file access. |
| Review history and recover content | Inspect item versions, restore earlier versions, browse recycle-bin content, and restore deleted files, folders, lists, and libraries. |
| Work with personal file context | Inspect OneDrive account and storage details, find recent and shared files, and retrieve or update favorites across OneDrive and SharePoint. |
| Customize site and list experiences | Set a site's homepage and configure quick steps in lists and document libraries. |
| Maintain knowledge bases and use site skills | Manage knowledge-base sources, pages, navigation, validation, health, analytics, and queries. Use site-level skill instructions. |

## Work IQ CLI application (v2)

To avoid breaking existing deployments with the introduction of the new `WorkIQ.Read` and `WorkIQ.Act` scopes, Microsoft is creating a separate v2 CLI application.

To use the new tools during the preview period, you can either grant consent for the new scopes for your tenant's existing Work IQ CLI application or use a new application registration with the new scopes.

> [!NOTE]
> Application details, setup steps, and sign-in and consent guidance for the v2 CLI application are pending.

For information about the existing CLI, see [Microsoft Work IQ CLI](cli.md). That article describes the current CLI, not the forthcoming v2 application.

## Related content

- [Work IQ overview](index.md)
- [Work IQ MCP overview](mcp/overview.md)
- [Work IQ MCP entity model](mcp/entity-model.md)
- [Policy governance for Work IQ MCP](mcp/policy-governance-mcp.md)
