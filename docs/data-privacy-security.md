---
title: Plan Data, Privacy, and Security for Microsoft 365 Copilot Extensibility
description: Identify data flows, identities, permissions, security boundaries, governance requirements, and responsible AI considerations for a Microsoft 365 Copilot plugin.
author: erikadoyle
ms.author: edoyle
ms.topic: overview
ms.localizationpriority: medium
ms.date: 09/30/2026
---

# Plan data, privacy, and security

Use this article while you [plan your plugin](planning-guide.md). Identify the applicable requirements now, and confirm the component-specific implementation after you choose capabilities and development tools.

:::image type="content" source="assets/images/validation-principles.png" alt-text="Diagram key considerations for developing Copilot extensibility: Enterprise security and trust, Responsible AI, High-quality user experience, High-value functionality" border="false":::

## Map data and action flows

Document how information enters, moves through, and leaves the solution. Include prompts, conversation history, Microsoft 365 data, external organizational data, generated content, actions, logs, and support data.

| Potential component | Planning questions |
|---|---|
| Agent | Which instructions, knowledge, conversation context, actions, and external services can the agent use? |
| Skill | Which instructions, workflow steps, inputs, outputs, and host permissions does the skill depend on? |
| Copilot connector | Is external data synced into Microsoft Graph or retrieved through a federated connection? How is access to each item enforced? |
| MCP-based capability | Which tools and resources does the remote server expose? What data is sent to it, and where does the server run? |
| API or external service | Which operations, credentials, customer data, logs, and service providers are involved? |

[!INCLUDE [security-note](includes/security-on-das-note.md)]

For each flow, record the data owner, source, destination, location, classification, retention, deletion, encryption, availability, and failure behavior.

## Plan identity, authentication, and permissions

Identify:

- The user, application, package, publisher, service, and administrator identities.
- Required Microsoft Entra registrations, permissions, scopes, and consent.
- Authentication and connection requirements for external services and remote MCP servers.
- Whether access is delegated, application-based, service-to-service, or a combination.
- How secrets, certificates, tokens, keys, and connection information are stored and rotated.
- How the solution behaves when authentication, authorization, or connection checks fail.

Apply least privilege to every component and dependency. A plugin doesn't grant a user access to data that the user or component isn't otherwise authorized to access.

## Plan data protection and compliance

Review:

- Data collection, use, storage, transmission, retention, export, and deletion.
- Existing Microsoft 365 permissions, sensitivity labels, data loss prevention, retention, eDiscovery, audit, and compliance controls.
- Data and prompts sent to external services, APIs, connectors, and MCP servers.
- Regional, industry, contractual, organizational, and customer requirements.
- Privacy notices, terms of use, support disclosures, and third-party service providers.
- Monitoring and audit information required to investigate access and activity.

Microsoft Graph and Microsoft 365 services enforce the applicable identity-based access boundaries for data stored in those services. Externally hosted services remain responsible for enforcing their own identity, permission, privacy, and compliance requirements.

For Microsoft 365 Copilot privacy information, see [Data, privacy, and security for Microsoft 365 Copilot](/copilot/microsoft-365/microsoft-365-copilot-privacy). For Zero Trust planning, see [Zero Trust for Microsoft 365 Copilot](/security/zero-trust/zero-trust-tech-illus#zero-trust-for-microsoft-365-copilot).

## Plan consequential actions and responsible AI

Identify operations that create, change, send, approve, purchase, delete, or disclose information. For each consequential action, define:

- The permitted users and conditions.
- Validation and authorization checks.
- Confirmation and human-oversight requirements.
- Safe failure, retry, reversal, and recovery behavior.
- Evaluation criteria for accuracy, quality, safety, and misuse.
- Monitoring, incident response, escalation, and suspension procedures.

For more information, see [Responsible AI validation](rai-validation.md) and [Microsoft's commitment to responsible AI](https://www.microsoft.com/ai/responsible-ai).

## Governance and admin controls for plugin sharing

During planning, define the outcomes that administrators and service owners require:

- Review the plugin, publisher, requested access, data sources, actions, and external services.
- Approve or reject acquisition, publishing, sharing, or deployment requests.
- Assign availability to the intended users and groups.
- Configure required connections, permissions, consent, and organizational policies.
- Monitor inventory, activity, reports, consumption, and audit information.
- Restrict, block, remove, or retire access when requirements change.

Available controls and administration surfaces vary by component and Microsoft experience. Identify the required governance outcome while you plan. Select the supported package and administration model later, and follow [Make available and govern](govern-plugins.md) for operational guidance.

## Plan for the intended distribution scope

For an organization or line-of-business solution, involve the administrators and security owners who manage Microsoft 365, Microsoft Entra, Microsoft Purview, Power Platform, external services, and the target Microsoft experiences.

For a public or multitenant solution, plan the customer-facing privacy statement, terms of use, publisher identity, customer consent, support model, security response, and certification requirements. For current public-distribution requirements, see:

- [Microsoft Commercial Marketplace certification policies](/legal/marketplace/certification-policies)
- [Store validation guidelines for Copilot extensibility](/microsoftteams/platform/concepts/deploy-and-publish/appsource/prepare/review-copilot-validation-guidelines?context=/microsoft-365/copilot/extensibility/context)
- [Responsible AI validation checks](rai-validation.md)
- [Microsoft 365 App Compliance Program](/microsoft-365-app-certification/docs/certification)

## Carry these requirements forward

As you plan, keep track of:

- The data and action flows.
- The identities, permissions, consent, and connections.
- The trust boundaries and externally hosted dependencies.
- The privacy, security, compliance, and responsible AI requirements.
- The governance outcomes and lifecycle owners.
- The unresolved requirements that depend on the selected components or tools.

Use these requirements when you [choose capabilities for your plugin](choose-plugin-components.md) and [choose development tools](choose-plugin-development-tools.md). After implementation, confirm them through [plugin validation](validate-plugin.md) and the applicable product-specific security and administration guidance.

## Related content

- [Data, Privacy, and Security for Microsoft 365 Copilot (Microsoft 365 admin)](/copilot/microsoft-365/microsoft-365-copilot-privacy)
- [Plan your plugin](planning-guide.md)
- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Make plugins and agents available and govern access](govern-plugins.md)
- [Copilot Studio security and governance](/microsoft-copilot-studio/security-and-governance)
