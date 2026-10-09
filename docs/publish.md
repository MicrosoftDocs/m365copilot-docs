---
title: Publish or share your Microsoft 365 Copilot plugin
description: Choose a supported method to publish or share a tested Microsoft 365 Copilot plugin package with its intended audience.
author: erikadoyle
ms.author: edoyle
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 09/30/2026
---

# Publish or share your plugin

<!-- markdownlint-disable MD033 -->
<a id="publish-agents-for-microsoft-365-copilot"></a>
<!-- markdownlint-enable MD033 -->

Publish or share your tested plugin with the people who need it. You can publish it for customers through Microsoft Marketplace, publish it within your organization, or share it directly when your development tool supports that option.

The publishing or sharing method must support the plugin package, its components, the target Microsoft 365 experiences, and the intended audience.

Publishing or sharing doesn't automatically complete installation, assignment, access, or connection setup. The required next steps depend on the method.

## Before you begin

Have:

- The exact plugin package that passed validation and testing.
- The intended audience and target Microsoft 365 experiences.
- A publishing or sharing method supported by the package and development tool.
- The plugin name, description, support details, and legal information required by that method.

## Choose how to publish or share

| Who needs your plugin? | Method | Follow this procedure |
|---|---|---|
| Customers in multiple organizations | Microsoft Marketplace | [Publish your plugin through Microsoft Marketplace](publish-plugin-publicly.md) |
| Users in your organization | An organization publishing, administrator-upload, or tenant-sharing method supported by your development tool and package | [Publish your plugin to your organization](publish-plugin-organization.md) |
| Specific people, groups, or your organization through direct sharing | A plugin-sharing workflow supported by your development tool | [Share your plugin directly](#share-your-plugin-directly) |

> [!NOTE]
> This article covers plugin packages. To publish or share an existing standalone (unpackaged) agent, use the product-specific guidance for [Agent Builder](agent-builder-share-manage-agents.md), [Copilot Studio](/microsoft-copilot-studio/microsoft-365-copilot-extend-with-agents#publish-and-configure-an-agent-for-microsoft-365-copilot), or [Work IQ Dev Tools](https://microsoft.github.io/wiqd/concepts/agent-lifecycle/).

Administrator approval is required only when the selected method or your organization's policy requires it.

Installing a package for development or testing doesn't publish it for production use. If none of the methods supports the tested package and intended audience, publishing is blocked.

## Share your plugin directly

For an alpha plugin package built with Work IQ Dev Tools, use `wiqd plugin share`. Follow [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/) for supported audiences, commands, and requirements.

For Work IQ Dev Tools, `wiqd plugin share` publishes the plugin to the plugin registry for the selected audience. For other methods, follow the method-specific guidance to confirm the publication destination and audience. Direct sharing doesn't publish the plugin to Microsoft Marketplace unless that method explicitly supports Marketplace publication.

After sharing, confirm that the intended users can access the plugin and complete any required sign-in or connections.

## Prepare your publishing information

The method you select might require:

- Plugin name, package identity, version, description, icons, and listing information.
- Publisher contact and support information.
- Privacy statement and terms of use.
- Required licenses, accounts, permissions, consent, and connections.
- Supported Microsoft 365 experiences and known limitations.
- Instructions for components, connections, or services that administrators or users must configure separately.

Explain what the package includes and what remains external. For example, a package can include connection information for a remote MCP server while the server runs separately.

Use the method-specific procedure as the source of truth for required information, fields, and policies.

## Publish or share the tested package

Follow the selected method by using the exact package version that passed validation and testing.

Check and record the result:

| Status | What it means | Next step |
|---|---|---|
| Submitted or in review | The package is awaiting review, approval, or certification. Publication isn't complete. | Track the submission and address any requested changes. |
| Published | The plugin is published through the selected organizational or Marketplace method. | Complete any required steps to make it available to users. |
| Shared | The plugin is shared through the selected method with the intended audience. The result isn't necessarily an organization-wide catalog or Microsoft Marketplace publication. | Verify the publication destination, access, and required connections. |
| Rejected or blocked | A requirement prevents publication or sharing. | Resolve the issue, repeat affected tests, and try again. |

Update the release record with:

- The package identity and exact version.
- The publishing or sharing method, destination, and result.
- The intended audience.
- The required follow-up actions, configuration, and owners.

Submission, publication, and sharing are distinct outcomes. A submitted package remains pending until the selected method reports it as published.

## Next step: Make your plugin available and govern access

After you publish or share your plugin, confirm how the intended users can access it. Depending on the publishing method, an administrator might need to install the package, select users, or configure access. Users might also need to sign in or connect an account.

Continue to [Make your plugin available and govern access](govern-plugins.md). Use the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map to find the page for a task.

If your submission is still awaiting review, track its status before proceeding with steps that require a published package.

## Related content

- [Package your plugin](package-plugin.md)
- [Test and validate your plugin](validate-plugin.md)
- [Publish your plugin through Microsoft Marketplace](publish-plugin-publicly.md)
- [Publish your plugin to your organization](publish-plugin-organization.md)
- [Make your plugin available and govern access](govern-plugins.md)
- [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365)
