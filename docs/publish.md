---
title: Choose how to publish and distribute your plugin
description: Compare testing, organization, and public distribution routes for a tested Microsoft 365 Copilot plugin, including administrator and user next steps.
author: erikadoyle
ms.author: edoyle
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 11/16/2026
ai-usage: ai-assisted
---

# Choose how to publish and distribute your plugin

Choose a distribution route for the plugin you [tested and validated](validate-plugin.md): share it for testing, publish it to your organization, or publish it publicly through Microsoft Marketplace.

The publishing or sharing method must support the plugin package, its components, the target Microsoft 365 experiences, and the intended audience.

## Before you begin

Have:

- The exact plugin package that passed validation and testing.
- The intended audience and target Microsoft 365 experiences.
- A publishing or sharing method supported by the package and development tool.
- The plugin name, description, support details, and legal information required by that method.

## Compare distribution routes

| Route | What you need first | Where it lands | Admin steps | User steps |
|---|---|---|---|---|
| [Share for testing](#share-for-testing) | A tested capability or package, a supported sharing method, and selected testers | The selected audience through the tool's sharing or test-upload route; WIQD shares to the plugin registry | Apply sharing policies and complete approval when required, including org-wide Cowork sharing | Access the shared item and complete required installation, sign-in, consent, and connections |
| [Publish to your organization](#publish-to-your-organization) | A tested package or agent, submission details, and a supported organization publishing or admin-upload route | The organization's plugin registry, reviewed through Tools Registry; an included agent can also have an Agent Registry record | Review the submission or upload, install as needed, and set availability | Find or access the available item and complete required sign-in, consent, and connections |
| [Publish publicly](#publish-publicly) | An eligible tested package, publisher access to Partner Center, and listing and customer setup information | Microsoft Marketplace after review and publication | Each customer organization installs the plugin, allows the publisher category, and sets availability | Acquire or access the available plugin and complete required sign-in, consent, and connections |

> [!NOTE]
> This article covers plugin packages. To publish or share an existing standalone (unpackaged) agent, use the product-specific guidance for [Agent Builder](agent-builder-share-manage-agents.md), [Copilot Studio](/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams), or [Work IQ Dev Tools](https://microsoft.github.io/wiqd/concepts/agent-lifecycle/).

Installing a package for development or testing doesn't publish it for production use. If none of the methods supports the tested package and intended audience, publishing is blocked.

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

## Share for testing

Share a tested plugin or use a product-specific development upload so selected people can try it before a wider rollout. What you share and how users access it depend on the authoring tool and target product.

For Work IQ Dev Tools, `wiqd plugin share` publishes the plugin to the plugin registry for the selected audience. Follow [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/#publishing-paths) for the shared-deployment prerequisites, environment selection, and supported audiences. Direct sharing isn't organization app-catalog submission or Microsoft Marketplace publication.

For Copilot Cowork, you can upload a plugin ZIP package and choose **Only you** or **Specific users in your organization**. Org-wide sharing needs administrator approval. Link your testers to [Use plugins with Copilot Cowork](/copilot/cowork/cowork-plugins) for acquisition, enablement, and service-connection steps.

Before sharing for testing, use the procedure that matches the item:

- **Agent Builder agents:** Follow [Share and manage agents built in Agent Builder](agent-builder-share-manage-agents.md#share-an-agent). This shares an agent through its authoring experience, not a composed plugin package.
- **Declarative agent with an API action:** Follow [Provision and sideload the agent](build-api-plugins-existing-api.md#provision-and-sideload-the-agent). This tests the agent and its API action; it isn't a general distribution procedure for a composed plugin package.
- **Copilot Cowork plugin packages:** Follow [Upload a plugin package](/copilot/cowork/cowork-customize#upload-a-plugin-package).

Administrators apply the relevant sharing restrictions and complete any required approval. Testers then access the shared item and complete required installation, sign-in, consent, and connections. Confirm that they can run the intended scenarios with their own permissions.

## Publish to your organization

Use this route when your plugin is ready for users in your organization beyond the initial testing audience. Submit through a supported authoring tool or give the tested package to an administrator for upload.

Plugins published or shared to the plugin registry are reviewed through **Agents** > **Tools** > **Registry** in the Microsoft 365 admin center. If the package includes an agent, it can also have an Agent Registry record for agent-specific controls. Tools Registry and Agent Registry aren't interchangeable inventories.

The administrator reviews the submission or uploaded components, completes installation as needed, and sets user availability. Users still complete any required sign-in, consent, and service connections. Giving everyone direct sharing access isn't the same as submitting the plugin to the organization app catalog.

Follow [Publish your plugin or agent to your organization](publish-plugin-organization.md) for submission options and the handoff to your administrator.

## Publish publicly

Use Microsoft Marketplace when customers in other organizations need to discover your plugin. First confirm that a documented public publishing route supports the tested package and its capabilities. Prepare your publisher account, listing, legal and support information, and customer setup instructions.

Submit through Microsoft Partner Center and track the review. The offer is published only after it completes the applicable review and publishing process; a submitted or rejected offer isn't a published offer.

Marketplace publication doesn't make the plugin available in every customer organization. Each customer's administrator still installs the plugin, allows its publisher category, and sets availability. Users then complete required acquisition or access steps, sign-in, consent, and connections.

Follow [Publish your plugin through Microsoft Marketplace](publish-plugin-publicly.md) for eligibility, submission, review, and customer onboarding guidance. Direct sharing and organization submission don't create a Marketplace offer.

## Record the publishing result

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

## Next step

If your submission is still awaiting review, track its status before proceeding with steps that require a published package.

> [!div class="nextstepaction"]
> [Make your plugin available and govern access](govern-plugins.md)

Use the [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) administration map to find the page for a task.

## Related content

- [Package your plugin](package-plugin.md)
- [Test and validate your plugin](validate-plugin.md)
- [Publish your plugin through Microsoft Marketplace](publish-plugin-publicly.md)
- [Publish your plugin or agent to your organization](publish-plugin-organization.md)
- [Make your plugin available and govern access](govern-plugins.md)
- [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365)

## What publishing doesn't do

> [!NOTE]
> Publishing or sharing doesn't complete installation, user assignment, consent, or connection setup. Treat these as separate steps, and confirm who completes each one for the selected route. Publication also doesn't establish support in another Microsoft experience.
