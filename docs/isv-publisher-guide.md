---
title: Build and Publish Microsoft 365 Copilot Plugins for Customers
description: Follow the Microsoft 365 Copilot plugin lifecycle as an ISV or software publisher, from solution planning through public distribution, servicing, and retirement.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: overview
---

# Build and publish Microsoft 365 Copilot plugins for customers

Define the customer scenario, choose supported capabilities and development tools, validate the exact plugin package, submit it through a supported publishing method, support customer deployment, and maintain the plugin throughout its lifecycle.

Public distribution eligibility depends on the solution type, package model, capabilities, authoring tool, target Microsoft experiences, and current marketplace support. A capability that you can package isn't automatically eligible for public distribution.

A plugin package can contain definitions, metadata, and references to remote capabilities. A remote MCP server, API, connector service, or other hosted runtime isn't physically contained in the package. Each Microsoft experience activates only the capabilities it supports, and authentication, connections, licensing, administration, and runtime behavior can differ by experience.

Track the plugin package, Marketplace offer, catalog listing, and external runtime services. Track an included capability separately when it has controls or operational responsibilities outside the package.

## Follow the plugin lifecycle

| Stage | What you need to do | Start with |
|---|---|---|
| Prepare to build your plugin | Define the target customers, business outcome, supported Microsoft experiences, components, publisher identity, commercial model, support model, data handling, licensing, and distribution scope. | [Plan your plugin](planning-guide.md) |
| Build or reuse capabilities | Create or reuse the required components by using supported development tools, and confirm that each works with its required development or test dependencies. | [Build or reuse capabilities for your plugin](build-reuse-plugin.md) |
| Package and test | Integrate the components, prepare the exact versioned publishing artifact, and validate manifests, metadata, identity, permissions, authentication, dependencies, customer setup, claimed Microsoft experiences, and agent quality when required. | [Integrate capabilities](integrate-test-plugin-components.md) |
| Publish or share | Submit the tested plugin package through the supported Marketplace, registry, organizational, or sharing method. Complete the applicable certification process, and record the package, offer, listing, or catalog result. | [Publish your plugin through Microsoft Marketplace](publish-plugin-publicly.md) |
| Make available and govern | Give customer administrators the information they need to acquire, approve, assign, enable, connect, and govern the solution. | [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365) |
| Monitor, update, and retire | Maintain support, review available signals and customer feedback, evaluate behavior when appropriate, validate and publish updates, communicate breaking changes, transfer ownership where supported, manage deprecation, and retire the solution and its dependencies safely. | [Monitor](monitor-plugin.md), [improve and update](improve-plugin.md), or [retire](retire-plugin.md) |

## Choose the customer distribution model

Choose the publishing method that supports the plugin package, audience, and destination. These methods don't use one shared intake or certification process.

| Your goal | Start with |
|---|---|
| Publish an eligible plugin publicly | Follow [Publish your plugin through Microsoft Marketplace](publish-plugin-publicly.md) and the applicable Partner Center, Marketplace, and certification procedures. |
| Publish or share a plugin with one organization | Follow [Publish your plugin to your organization](publish-plugin-organization.md). |
| Combine a public package with an externally hosted application or service | Follow the lifecycle requirements for both parts, and document which identity, deployment, support, and governance requirements apply to each part. |

> [!NOTE]
> To publish a standalone agent, connector, application, or service, follow that product's publishing guidance. Don't relabel its publishing procedure as plugin publication.

## Plan the public offer

Before implementation:

- Identify the customer problem, target industries, users, and supported Microsoft experiences.
- Confirm that the solution uses a supported plugin package and document any external services or separately published products it depends on.
- Confirm whether every capability in the package is eligible for the intended public publishing method.
- Record the plugin package, Marketplace offer, catalog listing, included capabilities, and external runtime services separately.
- Plan multitenant identity, authentication, consent, permissions, external services, and customer configuration.
- Define privacy, terms of use, support, servicing, versioning, and deprecation commitments.
- Review licensing, infrastructure, marketplace, certification, and operational costs.

## Plan customer onboarding

For public multitenant solutions, document the customer setup path before submission:

- Product and package name.
- Publisher identity.
- Exact version.
- Offer, listing, package, or catalog identifier.
- Supported Microsoft experiences.
- Included capabilities.
- Required licenses.
- Permissions and admin or user consent.
- Connections and external services.
- Setup and deployment requirements, including the Microsoft Entra tenant model, application registrations, regions, environments, external accounts, and customer-owned configuration.
- Data, privacy, security, and compliance information.
- Known limitations.
- Support contact.
- Update and deprecation policy.
- Steps for customers to verify setup, diagnose failures, and safely reverse or remove the deployment.

Use the method-specific Partner Center, product, and administration documentation as the source of truth for current procedures.

Publication doesn't make the plugin immediately available to every customer or user. Customer administrators can still need to acquire or approve the package and assign, enable, deploy, or connect it as documented for the selected method.

## Prepare and submit the solution

1. Build the solution by using the supported authoring experience.
1. [Create the plugin package](package-plugin.md).
1. [Test and validate the exact plugin package](validate-plugin.md).
1. Prepare the listing, icons, privacy statement, terms of use, support information, and publisher details.
1. Review the applicable marketplace certification and Microsoft 365 store validation policies.
1. Submit the eligible package or offer through the documented method, such as the **Microsoft 365 and Copilot** program in Microsoft Partner Center.
1. Address certification feedback and product-specific compatibility requirements.
1. Confirm the published Marketplace result and supported customer acquisition method.
1. Provide customer administrators with the required availability, connection, and configuration guidance.
1. Record the offer, package, listing, or catalog identifiers and plan updates, support, and lifecycle operations.

For the current public, organizational, and supported direct-sharing methods, see [Publish or share your plugin](publish.md).

## Plan servicing, support, and retirement

Before release:

- Maintain product support, security response, required service endpoints, external services, and customer communication.
- Monitor the operational and customer signals available for each component and Microsoft experience.
- Test each update against the supported Microsoft experiences.
- Resubmit or republish the updated package through the applicable method.
- Communicate material changes, and maintain compatibility or document breaking changes.
- Define rollback, incident response, escalation, and customer migration procedures.
- Deprecate and retire the solution according to the published support policy, including its dependencies and the treatment of customer data, credentials, and access.

Keep the support and servicing plan aligned with the commitments in the marketplace listing, privacy statement, terms of use, and product-specific publishing method.

## Review public-distribution requirements

- [Microsoft Commercial Marketplace certification policies](/legal/marketplace/certification-policies)
- [Microsoft 365 store validation guidelines for agents](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines?context=/microsoft-365/copilot/extensibility/context)
- [Responsible AI validation](rai-validation.md)
- [Microsoft 365 App Compliance Program certification (optional)](/microsoft-365-app-certification/docs/certification)
- [Microsoft Partner Center](https://partner.microsoft.com)

Submitting a package through one supported method doesn't replace marketplace certification, administrator approval when required, or compatibility requirements for the target experience.

## Related content

- [Plugins for Microsoft 365 Copilot](plugins-overview.md)
- [Build Copilot-powered apps and agents](apps-agents-overview.md)
- [Plan your plugin](planning-guide.md)
- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Build or reuse capabilities for your plugin](build-reuse-plugin.md)
- [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365).
