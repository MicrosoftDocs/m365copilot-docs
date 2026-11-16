---
title: Plan Licensing and Cost for Microsoft 365 Copilot Extensibility
description: Identify user licensing, consumption, hosting, development, publishing, and operational costs when you plan a Microsoft 365 Copilot plugin or another extensibility solution.
author: jessicaaawu
ms.author: wujessica
ms.topic: overview
ms.localizationpriority: medium
ms.date: 11/16/2026
ms.custom: [copilot-learning-hub, msecd-doc-authoring-1013]
ai-usage: ai-assisted
---

# Plan licensing and cost

Use this article while you [plan your plugin](planning-guide.md) or another Microsoft 365 Copilot extensibility solution. Costs vary by product and distribution route. Don't assume that a plugin is free to use in every product or that a user license covers every component and external service.

Record the cost categories that affect your design, and then confirm the current licensing and billing requirements for the products, capabilities, and publishing route you select.

## Identify cost categories

Account for:

- User and administrator licenses for the target Microsoft experiences.
- Usage-based consumption for agents, Copilot connectors, APIs, models, or other metered services.
- Development tools, test environments, and developer subscriptions.
- Hosting for APIs, applications, databases, remote MCP servers, and other external services.
- Identity, secrets, certificates, networking, storage, monitoring, and audit services.
- Marketplace, certification, publishing, and customer-onboarding requirements.
- Support, incident response, evaluation, servicing, deprecation, and retirement.

A plugin can bring together components that use different licensing and billing models. Record costs for the plugin experience and for each independently operated component or service.

## Check product-specific licensing and billing

Use the product documentation rather than a cross-product cost comparison:

- **Microsoft 365 Copilot and Agent Builder:** Review [Microsoft Copilot license options](/copilot/plan/copilot-license-options) and the [Agent Builder licensing guidance](agent-builder.md#licensing).
- **Copilot Cowork:** Review [Cowork access and consumption](#cowork-access-and-consumption) and [usage-based billing for Copilot Credits](/copilot/plan/usage-based-billing-overview-copilot-credits).
- **Copilot Studio:** Follow the licensing guidance for your agent's harness, starting with the [Copilot Studio overview](/microsoft-copilot-studio/fundamentals-what-is-copilot-studio); for the standard harness, see [licensing](/microsoft-copilot-studio/billing-licensing) and [billing rates and management](/microsoft-copilot-studio/requirements-messages-management).
- **Power Platform capabilities:** Review the [Power Platform licensing overview](/power-platform/admin/pricing-billing-skus) for product-specific use rights, capacity, and consumption guidance.

For each product, record the licenses and billing configuration needed by makers, administrators, and users. Check the requirements for the capabilities and connections you select; don't infer them from the outer plugin package.

## Cowork access and consumption

Copilot Cowork uses usage-based billing. Access comes only from a spending policy that includes the user and selects **Cowork**. Settings on the **All Agents** > **Cowork** entry no longer control access.

Work with your billing administrator to plan the policy scope, spending limits, and billing method. For the current access model, see [Manage Copilot Cowork for your organization](/copilot/cowork/cowork-admin-governance). For configuration, see [Manage spending policies](/copilot/implement/usage-based-billing-manage-copilot-credits).

## Account for external services

Packaging a capability doesn't remove the cost of operating its dependencies. Include hosting, model usage, storage, networking, credentials, monitoring, and support for any remote MCP servers, APIs, or other services your plugin uses.

If you're building a custom engine app or agent, follow the [app development path](apps-agents-overview.md) and budget for your own orchestration, models, and hosting. Existing service pricing resources include [Azure AI Foundry pricing](https://azure.microsoft.com/pricing/details/ai-foundry/), [App Service pricing](https://azure.microsoft.com/pricing/details/app-service/), and [Azure AI Bot Service pricing](https://azure.microsoft.com/pricing/details/bot-services/).

## Work IQ API

The [Work IQ API](work-iq/api-overview.md) provides an AI-native interface to Microsoft 365 work intelligence. By using this API, you can build applications that query emails, meetings, files, and organizational knowledge by using natural language grounded in Microsoft 365 data.

You pay for use of the Work IQ API through a consumption-based model that uses Copilot Credits.

For more information, see the [Work IQ General Availability announcement](https://www.microsoft.com/en-us/licensing/news/work-iq-general-availability).

### Manage shared Copilot credits

When you plan a solution's budget, account for other services that use the same prepaid capacity. Copilot Cowork, Copilot Studio agents, and Work IQ API can consume Copilot credits from a shared tenant pool. Capacity allocated to Power Platform environments reduces the prepaid capacity available to services managed in the Microsoft 365 admin center.

Spending policies control access and spending limits; they don't reserve or allocate credits for a workload, user, or group. A separate policy for Cowork doesn't guarantee that credits remain available for Cowork.

Use the following controls with your administrator to limit competing consumption. No single control covers all services managed across the Microsoft 365 and Power Platform admin centers.

| Control | What it does | Scope and limitations |
| --- | --- | --- |
| Select supported services in spending policies | Include Cowork and exclude Work IQ API from a policy when its users shouldn't consume credits through Work IQ API. Turn off **Auto-apply new services** if future services require review. | Review all applicable policies, including the default policy. Excluding a service from one policy doesn't exclude it from other policies. Copilot Studio consumption is managed separately in the Power Platform admin center. See [Manage spending policies](/microsoft-365/copilot/usage-based-billing-manage-copilot-credits). |
| Set policy and per-user limits | Limit monthly consumption for selected user groups and the services covered by their policies. | Limits don't reserve credits. If multiple policies cover a user for the same service, the policy with the highest per-user limit takes precedence. See [How spending policies apply to users](/copilot/implement/usage-based-billing-manage-copilot-credits#understand-how-user-or-identity-based-spending-policies-apply-to-users). |
| Restrict Copilot Studio authoring | Use the **Copilot Author** setting in the Power Platform admin center to limit authoring access to a security group. | Authoring restrictions don't stop consumption by existing agents. See [Manage Copilot Studio access](/power-platform/admin/manage-copilot-studio-copilot-credits-capacity#if-i-use-the-pay-as-you-go-plan-can-i-grant-my-users-access-to-copilot-studio). |
| Review environment allocations and overage settings | Reduce unused environment allocations to leave more prepaid credits available in the shared tenant pool. | A lower allocation isn't a hard cap if the environment can draw from the tenant pool or use pay-as-you-go billing. See [Manage capacity](/power-platform/admin/manage-copilot-studio-copilot-credits-capacity#manage-capacity). |
| Set per-agent monthly limits | Configure notifications and a hard stop for individual Copilot Studio agents. | Enforcement isn't instantaneous, and an agent's limit doesn't stop the agent flows it calls. See [Manage monthly consumption limits](/power-platform/admin/manage-copilot-studio-copilot-credits-capacity#manage-monthly-consumption-limits-for-copilot-studio-agents). |

### Troubleshoot Work IQ quota exhaustion

A Work IQ chat request can fail with `QuotaExhausted` and the message "No AI credits are currently available for this user. Please request more credits from your admin." This error can happen even when the tenant has prepaid credits.

For prepaid capacity packs, the capacity available to services managed in the Microsoft 365 admin center is the total purchased capacity minus capacity preallocated to Power Platform environments. Consumption further reduces the remaining balance. A spending policy defines limits, not a reserved credit allocation.

Ask your billing administrator to check the available prepaid capacity and the applicable spending policy's service selection, policy limit, per-user limit, and billing method. To restore access, the administrator can:

- **Release unused environment allocations.** Review Copilot Studio capacity in the Power Platform admin center and reduce allocations that aren't needed. Released capacity becomes available in the shared tenant pool. See [Manage Copilot Studio capacity](/power-platform/admin/manage-copilot-studio-copilot-credits-capacity#manage-capacity).
- **Add prepaid capacity.** Purchase enough capacity for both environment allocations and expected shared-pool consumption.
- **Enable pay-as-you-go billing.** Configure an Azure subscription as a billing method so usage can continue when prepaid credits run out. Current billing settings support updating an existing spending policy's billing method without deleting and recreating the policy. Spending limits still apply. See [Configure billing methods](/microsoft-365/copilot/usage-based-billing-copilot-credits-setup#configure-billing-method).

A Microsoft 365 Copilot license doesn't replenish the Work IQ API credit balance. Repeated retries won't resolve a depleted balance or an exhausted spending limit. For policy configuration, see [Manage spending policies](/microsoft-365/copilot/usage-based-billing-manage-copilot-credits).

## Microsoft 365 Copilot APIs

The [Microsoft 365 Copilot APIs](copilot-apis-overview.md) are available at no additional cost to users with a Microsoft 365 Copilot license. Support for users without a Microsoft 365 Copilot license is currently not available.

## Related content

- [Plan your plugin](planning-guide.md)
- [Choose capabilities for your plugin](choose-plugin-components.md)
- [Choose development tools for your plugin](choose-plugin-development-tools.md)
- [Agents overview](agents-overview.md)
- [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md)
- [Microsoft 365 Copilot APIs overview](copilot-apis-overview.md)
- [Microsoft 365 Copilot APIs client libraries](sdks/api-libraries.md)
