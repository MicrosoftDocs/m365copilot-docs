---
title: Monitor, update, and retire your plugin or agent
description: Monitor a deployed Microsoft 365 Copilot plugin or agent, release tested updates through its publishing route, restrict access, and retire it cleanly.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: how-to
---

# Monitor, update, and retire your plugin or agent

After users can access the plugin or agent, manage its operational lifecycle through the product-specific surfaces for each object. There isn't one universal dashboard or action that monitors or changes the plugin package, its components, connections, external services, and Microsoft 365 app package together.

You enter this stage with an available object, its publishing and availability records, and identified operational and support owners.

Start with the outcome you need.

| Operational need | What to do |
|---|---|
| Understand use, health, or adoption | [Monitor usage and health](#monitor-usage-and-health) through the available product-specific signals. |
| Diagnose an issue or measure a change | [Evaluate behavior and quality](#evaluate-behavior-and-quality) with evidence appropriate to the object and decision. |
| Improve behavior or release a fix | [Release an update](#release-an-update) through the required build, package, publish, and availability steps. |
| Limit use or change responsibility | [Restrict access](#restrict-or-block-access) or [transfer ownership](#transfer-ownership-or-support) where the product supports it. |
| End the solution lifecycle | [Retire the plugin or agent](#retire-the-plugin-or-agent) and address every dependent object and service. |

## Monitor usage and health

| What you need to observe | Start with |
|---|---|
| Usage and health for a provisioned declarative agent from a terminal or automated workflow | Enable the experimental Work IQ surface and run `wiqd agent monitor`, which queries the Insights Agent for that agent. See the [Work IQ Dev Tools Work IQ extension](https://microsoft.github.io/wiqd/extensions/provided/workiq/). |
| Responsiveness and detailed turn behavior for a deployed declarative agent | Send a prompt with the experimental `wiqd agent ask` command, or use the preview [Work IQ DevUI](https://microsoft.github.io/wiqd/extensions/provided/devui/) to inspect plugin selection, retrieval, citations, identifiers, and raw results. |
| Usage, engagement, knowledge use, reactions, and comments for an Agent Builder agent | [Monitor agents in Agent Builder](agent-builder-monitor-agents.md) |
| Organization-wide agent inventory and ownership | [Manage the agent registry](/microsoft-365/admin/manage/agent-registry?context=/microsoft-365/copilot/extensibility/context) |
| Natural-language answers about aggregate agent usage and adoption trends in Copilot Chat | [Microsoft 365 Insights Agent](insights-agent-overview.md) |
| Activity for an MCP server managed as a tool | [Manage tools for agents](/microsoft-365/admin/manage/manage-tools-for-agent?context=/microsoft-365/copilot/extensibility/context#monitor-and-observe-mcp-server-activity) |
| Copilot connector users, content, and synchronization | [Deploy Copilot connectors](/microsoft-365/copilot/connectors/deployment-overview?context=/microsoft-365/copilot/extensibility/context#customize-connector-settings-optional) |

Availability, assignment, installation, or deployment isn't evidence of adoption or actual use. Follow the linked product-specific usage-reporting guidance for the object and Microsoft 365 experience.

Monitoring coverage varies by object and product. Don't treat an agent-specific report as evidence for every component in a plugin.

## Evaluate behavior and quality

Start with the operational signal, user report, support case, or product change that requires action. Identify the affected object, version, audience, Microsoft experience, dependency, and owner before you change the solution.

Evaluation supports two lifecycle decisions. During **Package and test**, use it as pre-release evidence when agent quality must be measured. After deployment, rerun appropriate evaluations when usage signals, user reports, model or dependency changes, or a proposed update could affect behavior.

Evaluation is contextual, not a universal post-deployment requirement. Use it when you need evidence that a change to instructions, knowledge, or tools improved the experience. It doesn't replace troubleshooting or release checks: package, validate, and test every update as required by its components, publishing route, and target experiences.

- For evaluation concepts and test design, see [Agent evaluation overview](evaluation-overview.md).
- For command-line and pipeline evaluation, see [Agent Evaluations CLI overview](evaluations-cli-overview.md).
- For a guided WIQD evaluation workflow against a deployed declarative agent, use [`wiqd agent eval`](https://microsoft.github.io/wiqd/extensions/provided/eval/).

Record the signal or evaluation result that led to the change.

## Release an update

An update follows the lifecycle again: **change → test components → package and test the new version → publish through the supported route → complete the required availability actions → recheck the intended experiences**.

A functional change must return to **Package and test** before the updated version is republished.

Use the development and publishing route supported by the object. Work IQ Dev Tools is one update route; Agent Builder, Microsoft 365 Agents Toolkit, Copilot Studio, organizational deployment, and Microsoft Marketplace have their own procedures.

| Route | Update procedure |
|---|---|
| Work IQ Dev Tools declarative agent | Follow the documented edit, validate, provision, package, publish, and monitor loop in the [agent lifecycle](https://microsoft.github.io/wiqd/concepts/agent-lifecycle/). |
| Alpha WIQD plugin package | Rebuild, statically validate, provision the intended environment, package, run deep validation, and repeat the supported sharing or administrator-upload route. The `wiqd plugin` surface doesn't provide a publish or rollback command. |
| Agent Builder direct sharing | Publish the change in Agent Builder. Verify the behavior for the shared audience. |
| Agent Builder org catalog | Publish the change, then [resubmit the approved agent](agent-builder-submit-to-org-catalog.md#update-an-approved-agent). |
| Microsoft 365 Agents Toolkit | [Package](package-plugin.md), [test](validate-plugin.md), and republish the updated app package. |
| Copilot Studio | Publish the updated agent, then follow its supported organizational availability procedure. |
| Microsoft Marketplace | Submit the updated offer through Microsoft Partner Center and complete certification when required. |

Confirm which version reached each audience. A shared version and an org-catalog version can have different update and approval states.

Rollback and restore aren't available for every object or publishing route. Use the linked product-specific procedure to confirm whether a previous version can be restored and which packages, components, connections, or external services require separate action.

## Restrict or block access

Choose a control based on the object and intended effect:

- For agents, use the documented availability, assignment, blocking, or removal control.
- For plugins, skills, MCP servers, and connectors represented as tools, use the documented tool action.
- For direct sharing, update the sharing settings on the shared object.
- For connector content and synchronization, update the connection configuration.

See [Govern access, tools, and connections](manage.md) for the control-to-surface map.

Blocking or removing one object doesn't necessarily disable an external service or remove indexed data. Review each dependency separately.

## Transfer ownership or support

When ownership or support responsibility changes:

1. Confirm that the product supports ownership transfer or reassignment for the object.
1. Transfer or reassign the supported object through its product-specific procedure.
1. Update support contacts, source repositories, publishing records, credentials, app registrations, connections, external services, and escalation paths as applicable.
1. Verify that the new owner can monitor, update, restrict, and retire every object they are expected to manage.
1. Record any dependency that retains a different owner.

Don't treat transfer of one agent, package, or catalog record as transfer of every component and external dependency.

## Retire the plugin or agent

1. Identify every published, shared, deployed, and connected object in the solution.
1. Notify the affected users and support owners.
1. Remove availability through each publishing or administration route.
1. Remove or reassign connections, app registrations, permissions, service accounts, and external-service access that are no longer needed.
1. Reassign ownership or delete the object according to its product-specific procedure.
1. Record the final state, retirement date, owner, and location of the archived source and artifacts.

Retirement is complete when users can no longer access the retired object, its dependencies are removed or reassigned, and its final state is recorded.

For an alpha WIQD plugin project, `wiqd plugin delete` tears down the resources provisioned for the selected environment. It doesn't remove every shared package, administrator upload, catalog record, connection, credential, or external service. Complete the applicable retirement actions above. See [Build a plugin with Work IQ Dev Tools](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/).

## Record the lifecycle outcome

Record one or more outcomes:

- An improved, tested, and republished version, including its publishing route and verified audience.
- A documented access, assignment, ownership, connection, or support change.
- A safely retired object with dependencies, credentials, data, ownership, and user communication addressed.

You leave this stage with a recorded update, operational change, or retirement outcome.

## Related content

- [Make plugins and agents available and govern access](govern-plugins.md)
- [Make plugins and agents available](deploy-plugin.md)
- [Govern access, tools, and connections](manage.md)
- [Monitor agents in Agent Builder](agent-builder-monitor-agents.md)
- [Agent evaluation overview](evaluation-overview.md)
