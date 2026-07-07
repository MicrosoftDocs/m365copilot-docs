---
title: Policy governance for Work IQ MCP
description: Learn how the Work IQ policy layer helps govern MCP tool access.
author: kangxh75
ms.author: allenk
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 06/16/2026
---

<!-- cSpell:ignore Rego kangxh allenk -->

# Policy governance for Work IQ MCP

Work IQ uses a policy layer to help govern how agents access and act on Microsoft 365 resources. This policy layer can apply across Work IQ experiences. This article focuses on how policy governance applies to Work IQ MCP tool requests.

The policy layer uses [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/), the policy language from [Open Policy Agent](https://www.openpolicyagent.org/) (OPA), to express authorization rules. Rego lets you express security guardrails as readable, testable rules instead of scattered application code. This approach supports fine-grained authorization decisions based on request details such as the tool, resource path, operation, and tenant policy.

For Work IQ MCP, policy governance doesn't replace Microsoft Entra authentication, OAuth permissions, or the signed-in user's existing Microsoft 365 permissions. It adds a request-time governance layer that can allow or deny specific MCP tool requests based on tenant policy.

## Policy control in the initial release

In the initial release, Work IQ MCP provides tenant-level policy control. In the Microsoft 365 admin center, tenant administrators can turn Work IQ MCP policy on or off for the tenant.

When you turn on the policy, it applies across the tenant and helps control MCP tool access at request time. More granular controls and policy templates might be added later based on customer requests, feedback, and usage.

Tenant-level control applies across the tenant. Per-user, per-app, per-agent, or scenario-specific policy templates aren't part of the initial policy control surface.

By default, mutation operations aren't allowed for safety. This restriction includes create, update, delete, and action requests that modify data, such as sending email. Administrators can enable supported mutation scenarios through tenant policy in the Microsoft 365 admin center when those capabilities are needed.

## Open policy settings in the Microsoft 365 admin center

To review or edit Work IQ MCP policy settings, open the Microsoft 365 admin center:

1. Go to [https://admin.microsoft.com](https://admin.microsoft.com).

1. Sign in with an account that has permission to manage tenant-level Work IQ or Copilot settings.

1. In the left navigation, select **Agents** > **Tools**.

1. In the tools registry, select **Work IQ MCP**.

1. On the Work IQ MCP details pane, select the **Policy** tab when it's available.

1. Review the current policy state, then turn policy on or off for the tenant as needed.

After you save the setting, it can take up to 24 hours for the policy change to apply across your tenant. If you don't see the Work IQ MCP policy settings, check that your tenant has access to Work IQ MCP and that your admin account has the required permissions.

## Why use policy governance

Work IQ MCP exposes generic tools that operate on resource paths. This model keeps the tool surface small, but administrators still need governance controls for how those tools are used.

Policy governance helps answer questions such as:

- Which resource paths can MCP tools access?
- Which operations are allowed, such as read, create, update, delete, or action?
- Are there limits on collection reads or data traversal?
- Are specific actions or request patterns blocked by tenant policy?

## How policy fits with permissions

Work IQ MCP uses layered authorization:

| Layer                          | Purpose                                                                    |
|--------------------------------|----------------------------------------------------------------------------|
| Microsoft Entra authentication | Verifies the identity of the user and application                          |
| OAuth permissions              | Defines the broad Work IQ capabilities that an application can request     |
| User permissions               | Limits access to resources the signed-in user is already allowed to access |
| Policy layer                   | Applies tenant governance rules to each MCP tool request                   |

Policy approval doesn't guarantee the operation succeeds. If policy allows an MCP tool request, the underlying resource access is still checked against the signed-in user's Microsoft 365 permissions. The request fails if the user doesn't have access to the requested resource.

## What policy evaluates

For Work IQ MCP, policy evaluates details from each MCP request. Common policy inputs include:

| Input                   | Description                                                                                      |
|-------------------------|--------------------------------------------------------------------------------------------------|
| Path                    | The resource path being accessed, such as a mail, calendar, Teams, file, or people resource path |
| Operation               | The requested operation, such as read, create, update, delete, action, or function               |
| Request content         | Details in the request body or query parameters, when applicable                                 |
| User and tenant context | Information used to apply tenant-level governance rules                                          |

For example, a tenant policy can allow read access to common productivity data while blocking high-risk paths, write operations, or large collection traversal.

## Policy and the entity model

Policy works closely with the Work IQ MCP entity model. Because MCP tools use resource paths, you can express governance in terms of the path and operation being requested.

For example:

- `fetch /me/messages` - Read messages
- `create_entity /me/events` - Create a calendar event
- `do_action /me/sendMail` - Send mail

A policy can treat these requests differently because they use different operations and paths.

## Default guardrails

The default policy provides guardrails for common Work IQ MCP scenarios. The exact policy behavior can depend on tenant configuration, but the main control areas are:

| Control area          | What it helps govern                                                               |
|-----------------------|------------------------------------------------------------------------------------|
| Data access scope     | Which Microsoft 365 resource paths MCP tools can access                            |
| Write operations      | Whether MCP tools can create, update, delete, or perform actions that modify data  |
| Sensitive operations  | Whether requests to high-risk administrative or tenant-wide operations are blocked |
| Data retrieval limits | Whether collection reads are bounded to reduce large-scale data extraction risk    |
| Path safety           | Whether invalid or unsupported access patterns are rejected                        |

## Common governance scenarios

Administrators can use policy to support scenarios such as:

- Keep MCP access read-only unless you explicitly allow write operations.
- Block access to sensitive resource paths.
- Limit collection reads to reduce the risk of bulk data extraction.
- Restrict actions that send or modify data.
- Apply consistent tenant-level controls across MCP clients.

For developers, these controls mean an MCP request can fail because of tenant policy even when the user is authenticated and the app has the required OAuth permission. Applications and agents should clearly surface policy-denied responses so administrators and users understand that governance policy blocked the request.

## Developer considerations

Developers who build MCP clients or admin experiences should account for tenant policy behavior:

- Don't assume a tool, path, or operation allowed in one tenant is allowed in another tenant.
- Treat policy-denied responses as governance decisions, not transient failures to retry automatically.
- Surface policy-denied responses clearly so administrators can review tenant policy configuration.
- If your experience configures policy settings, update only editable policies and validate values before sending updates.

Policy settings are tenant-scoped and can include default values, effective values, and metadata that indicates whether a setting can be edited. Toggle-style settings use values such as `Allowed` and `Disallowed`. Numeric settings use bounded integer values. Invalid policy IDs, settings that you can't edit, insufficient permissions, or invalid request payloads can result in policy configuration errors.

## Key points

- Work IQ uses a Rego-based policy layer for governance. This article focuses on how that policy layer applies to Work IQ MCP.
- Tenant administrators can turn Work IQ MCP policy on or off in the Microsoft 365 admin center.
- Policy complements authentication, OAuth permissions, and user permissions.
- Policy can evaluate the requested path, operation, request content, and tenant context.
- Policy helps administrators apply tenant-level controls such as read-only access, path restrictions, and data retrieval limits.
- Policy can't grant access beyond what the signed-in user is already allowed to access.
- In the initial release, policy control is tenant-level. More granular controls might be added later based on feedback and usage.

## Related content

- [Work IQ MCP overview](overview.md)
- [Work IQ MCP entity model](entity-model.md)
- [Work IQ MCP tool reference](tool-reference.md)
