---
title: Choose between Agent Builder and Copilot Studio to build your agent
description: Compare Agent Builder and Copilot Studio by authoring needs, integrations, publishing channels, and lifecycle requirements.
author: lauragra
ms.author: jasonjoh
ms.topic: concept-article
ms.localizationpriority: medium
ms.date: 10/23/2026
---

# Choose between Agent Builder and Copilot Studio to build your agent

Use Agent Builder for guided configuration of declarative agents in Microsoft 365 Copilot. Use Copilot Studio when you need its workflow, integration, publishing, or application lifecycle capabilities. Choose based on the required capabilities and operating model, not audience size alone.

This article compares these two managed authoring options. For pro-code tools and other authoring routes, see [Choose development tools for your plugin](choose-plugin-development-tools.md).

## Choose a starting point

Use the following decision guide:

1. **Do users need an external channel, such as a customer-facing website?** Evaluate Copilot Studio and confirm that the selected experience supports the required channel and authentication.
1. **Do you need external-service actions, workflow logic, or structured development, test, and production environments?** Evaluate Copilot Studio's supported tools, workflows, and lifecycle features.
1. **Can the scenario be met with instructions and supported knowledge and capabilities in Microsoft 365 Copilot?** Start with Agent Builder and confirm its supported configuration, sharing, and publishing options.

Agent Builder supports organizational distribution through [sharing](agent-builder-share-manage-agents.md) and [submission to your org catalog](agent-builder-submit-to-org-catalog.md), subject to the applicable policies and approvals. Needing users across several departments doesn't by itself require Copilot Studio.

Copilot Studio capabilities, channels, and billing vary by the selected harness. Review [Harnesses in Copilot Studio](/microsoft-copilot-studio/harnesses-overview) before treating a feature as available in every Copilot Studio agent.

> [!NOTE]
> If you create your agent in Agent Builder and you later want to take advantage of the features available in Copilot Studio, you can [copy your agent to Copilot Studio](#copy-agents-from-agent-builder-to-copilot-studio).

## Compare authoring and lifecycle needs

The following comparison highlights decision factors rather than an exhaustive feature or licensing matrix. For current support, see the linked product guidance.

| Feature | Agent Builder | Copilot Studio |
| ------- | --------------- | --------------- |
| Authoring approach | Guided natural-language configuration without a source-code project. | Managed authoring with the logic, tools, and workflows supported by the selected harness. |
| Knowledge and capabilities | Supported Microsoft 365 knowledge sources and built-in capabilities. Custom skills are in preview; see [Agent Builder overview](agent-builder.md). | Knowledge, tools, connectors, and other capabilities supported by the selected Copilot Studio experience. |
| External actions | Doesn't support authoring actions that integrate external services. Copy to Copilot Studio or select a separate pro-code route when required. | Supports integrations and business workflows through the applicable tools and connectors. |
| Audience and distribution | Users in your organization, through supported sharing and org-catalog publishing. | Internal or external users, through channels supported by the selected harness. |
| Lifecycle | Configure, test, share, and submit an agent for organizational publication through the Agent Builder experience. | Use supported environment, application lifecycle management, deployment, and analytics capabilities. |
| Governance | Microsoft 365 agent controls and the permissions and policies of the configured data sources. | Power Platform environment and connector controls, plus applicable Microsoft 365 agent and channel controls. |
| Example fit | An onboarding or project-information agent grounded in approved organizational content. | An IT request workflow with approvals, or a customer-support experience with service integration and escalation. |

## Copy agents from Agent Builder to Copilot Studio

If an Agent Builder agent needs capabilities available in Copilot Studio, use the supported copy workflow rather than recreating its configuration.

Copying creates a separate snapshot, not a synchronized upgrade. Some knowledge sources and capabilities aren't copied or need reconfiguration. Review the supported configuration, licensing, and environment requirements in [Copy an agent from Agent Builder to Copilot Studio](copy-agent-to-copilot-studio.md), then test the copied agent before publishing it.

## Licensing requirements

Confirm maker access separately from end-user access and consumption. Requirements depend on the configured capabilities, target users, publishing channel, tenant billing setup, and Copilot Studio harness.

Use [Agent capabilities and licensing models](prerequisites.md#agent-capabilities-and-licensing-models) and [Plan licensing and cost](cost-considerations.md) for Microsoft 365 considerations. For Copilot Studio, follow the billing guidance for the [selected harness](/microsoft-copilot-studio/harnesses-overview#compare-harnesses) and the [Copilot Studio Licensing Guide](https://go.microsoft.com/fwlink/?linkid=2320995).

## Agent Builder governance principles

Choose Agent Builder when its authoring, sharing, and publishing controls meet your operating model. Confirm agent availability and sharing policies with your Microsoft 365 administrators, and review data-source access for the intended users.

For supported controls, see [Agent Builder admin controls](agent-builder.md#admin-controls) and [Share and manage agents](agent-builder-share-manage-agents.md). For organizational publication and update approval, see [Submit agents to your org catalog](agent-builder-submit-to-org-catalog.md).

## Copilot Studio governance principles

Choose Copilot Studio when environment-level policies, connector governance, and structured release management are part of your requirements. Management can span Power Platform and Microsoft 365; publishing a Copilot Studio agent to Microsoft 365 doesn't remove the applicable Microsoft 365 controls.

Follow [Copilot Studio security and governance](/microsoft-copilot-studio/security-and-governance) and [Application lifecycle management guidance](/microsoft-copilot-studio/guidance/alm) for the supported controls and procedures. For shared data and service responsibilities, see [Plan data, privacy, and security](data-privacy-security.md).

## Related content

- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Agent Builder overview](agent-builder.md)
- [Harnesses in Copilot Studio](/microsoft-copilot-studio/harnesses-overview)
