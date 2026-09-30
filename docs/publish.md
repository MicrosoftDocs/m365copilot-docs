---
title: Choose how to publish and distribute your plugin
description: Choose the supported public, organizational, or direct-sharing route for a tested Microsoft 365 Copilot plugin.
author: erikadoyle
ms.author: edoyle
ms.topic: how-to
ms.localizationpriority: medium
ms.date: 09/30/2026
---

# Choose how to publish and distribute your plugin

<!-- markdownlint-disable MD033 -->
<a id="publish-agents-for-microsoft-365-copilot"></a>
<!-- markdownlint-enable MD033 -->

**Publishing** is the supplier action that submits or releases a tested plugin through a supported route. **Distribution** is the outcome that makes the published plugin available to its intended audience.

Publishing is separate from administrator approval, acquisition, assignment, deployment, enablement, connection, and use. Those actions happen after publishing when the selected route requires them.

You enter this stage with the exact tested artifact and its completed publishing-readiness record.

| Term | Meaning |
|---|---|
| Share | Give a named audience direct access through a supported sharing workflow. |
| Submit | Send an object into a review, approval, or certification workflow. |
| Publish | Put an object into a supported distribution path. |
| Distribute | Make the published object reachable through its intended channel. |

## Before you begin

Have:

- The exact tested artifact or published version you intend to distribute.
- The intended audience and Microsoft 365 experiences.
- A publishing route that supports the package type, components, authoring tool, and audience.
- The publisher, support owner, customer-facing information, and required legal links.

## Choose a publishing route

| Intended audience | Actor and object | Destination and review | Who acts next |
|---|---|---|---|
| Customers in multiple organizations | A publisher submits an eligible offer and the exact tested artifact. | Microsoft Marketplace through the Microsoft 365 and Copilot program in Microsoft Partner Center. Complete the required certification and review. | The customer or customer administrator follows the offer's acquisition and administration procedure. See [Publish publicly through Microsoft Marketplace](publish-plugin-publicly.md). |
| Users in one organization | A publisher or creator submits the tested plugin, agent, or supported package. | The supported org catalog or organizational publishing flow. Complete product-specific or administrator review when the route requires it. | An administrator and the intended users complete the route's availability and installation actions. See [Publish your plugin or agent to your organization](publish-plugin-organization.md). |
| Specific people or groups | An owner shares the supported object. | The sharing workflow provided by the authoring experience. Direct sharing doesn't establish org-catalog or Marketplace publication. | The owner and intended users confirm access and required connections. See [Use supported direct sharing](#use-supported-direct-sharing). |
| One developer or test user | A developer installs the test artifact. | A development environment or sideloading context. This isn't a production publishing route. | The developer or test user returns to [Package your plugin](package-plugin.md) and [test and validate your plugin](validate-plugin.md). |

If none of the routes supports the tested package and intended audience, publishing is blocked. Don't submit a different package type or use a sharing link as a substitute for a supported production route.

<!-- markdownlint-disable MD033 -->
<a id="microsoft-365-and-copilot-program"></a>
<!-- markdownlint-enable MD033 -->

## Publish to customers or an organization

Use the route that matches the audience:

- For customers in multiple organizations, follow [Publish publicly through Microsoft Marketplace](publish-plugin-publicly.md).
- For users in one organization, follow [Publish your plugin or agent to your organization](publish-plugin-organization.md).

The publishing route determines the submission mechanism, required metadata, review process, and resulting catalog or marketplace status.

## Use supported direct sharing

Some authoring experiences let creators share a plugin, agent, or packaged experience directly with specific people or groups:

- For an agent built with Agent Builder, see [Share and manage agents built in Agent Builder](agent-builder-share-manage-agents.md).
- For an agent built with Copilot Studio, use the sharing and availability options in [Publish and configure an agent for Microsoft 365 Copilot](/microsoft-copilot-studio/microsoft-365-copilot-extend-with-agents#publish-and-configure-an-agent-for-microsoft-365-copilot).
- For a supported WIQD declarative agent, use `wiqd agent share`. For an alpha WIQD plugin package, use `wiqd plugin share` for specific users or the tenant. These commands provide direct sharing; they don't create a public Marketplace offer or replace an organizational catalog route.

Direct sharing is product-specific. It can grant access to a named audience without creating a marketplace offer or an organization-managed catalog entry. Follow the authoring experience's rules for ownership, permissions, updates, and removal.

## Prepare publishing information

The selected route can require:

- Plugin identity, package version, name, descriptions, icons, and other listing assets.
- Publisher or creator identity, contact information, and any publisher provenance supplied by the route, such as Microsoft, the organization or its users, or a third party.
- Support information, privacy statement, and terms of use.
- Required licenses, regions, environments, accounts, permissions, and connections.
- Disclosures for data access, external services, known limitations, and customer configuration.
- Update, support, security-response, and removal responsibilities.

Use the route-specific procedure as the source of truth for required fields and policies.

## Record the publishing result

Record:

- The plugin or agent name, package or artifact identifier, and exact version.
- The publishing route and the submission, offer, title, or catalog identifier supplied by the route.
- The current status, such as submitted, in review, published, rejected, or blocked.
- The publisher or creator identity and any publisher provenance supplied by the route.
- The intended users or groups and the supported Microsoft 365 experiences.
- The included agents, skills, connectors, MCP servers, and other required components, including their descriptions and dependencies.
- The required licenses, permissions, consent, connections, external services, and customer configuration.
- Known limitations and the owner for support, updates, security response, and removal.
- The publisher and the administrator, customer, or owner who acts next.
- The administrator or customer actions required after publication.

Publishing and distribution are complete when the tested plugin has entered the supported marketplace, org catalog, organizational publishing flow, or direct-sharing context for its intended audience.

> [!IMPORTANT]
> **Publisher complete:** Send the publishing record to the administrator or customer responsible for availability. Don't substitute sideloading or a sharing link when the intended production route requires administrative review, approval, or assignment.

You leave this stage with a published, submitted, or shared object; a complete publishing record; and an identified next owner.

Continue to [choose what happens after publishing](govern-plugins.md). Publication doesn't automatically approve, acquire, deploy, enable, connect, or assign the plugin.

## Related content

- [Package your plugin](package-plugin.md)
- [Test and validate your plugin](validate-plugin.md)
- [Publish publicly through Microsoft Marketplace](publish-plugin-publicly.md)
- [Publish your plugin or agent to your organization](publish-plugin-organization.md)
- [Make plugins and agents available and govern access](govern-plugins.md)
