---
title: Monitor, update, and retire your plugin or agent
description: Monitor usage and quality, support users, test and release changes, hand over ownership, and retire a plugin or agent without assuming undocumented update or recovery procedures.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 11/13/2026
ms.topic: how-to
ai-usage: ai-assisted
ms.custom: msecd-doc-authoring-1013
---

# Monitor, update, and retire your plugin or agent

Use monitoring, feedback, and support evidence to decide whether to fix, update, hand over, or retire your plugin or agent. Test changes before release and verify the result with the intended users.

Builders maintain and test the solution. Microsoft 365 administrators complete organizational rollout and access actions when required. Service owners maintain the connectors, remote MCP servers, identities, and external services it uses. These responsibilities don't automatically transfer together.

## Choose a task

Use the section for the work you need to do. Monitoring, support, handover, and retirement don't require you to follow the update workflow.

| What you need to do | Start with |
|---|---|
| Review adoption, feedback, or task outcomes | [Monitor usage and task outcomes](#monitor-usage-and-task-outcomes) |
| Investigate a user problem | [Support users and investigate issues](#support-users-and-investigate-issues) |
| Change and release the solution | [Update your plugin or agent](#update-your-plugin-or-agent) |
| Transfer maintenance responsibilities | [Hand over ownership and support](#hand-over-ownership-and-support) |
| End distribution or access | [Retire the plugin or agent](#retire-the-plugin-or-agent) |

## Before you begin

Identify:

- The current plugin or agent identity and version.
- The affected users and Microsoft 365 experiences.
- The owner responsible for the task and any connections or services involved.

For a standalone agent, use the monitoring and release procedures supported by its authoring product. Don't assume that a plugin package procedure applies to it.

## Monitor usage and task outcomes

Choose a reporting period, version, audience, and representative tasks. Use the monitoring experience for the product that owns the activity.

| What you're monitoring | Where to start | Scope to keep in mind |
|---|---|---|
| An agent built in Agent Builder | [Monitor agents in Agent Builder](agent-builder-monitor-agents.md) | The agent's **Monitor** tab covers its usage and feedback. Feedback visibility has separate prerequisites. |
| A Copilot Studio agent using the standard harness | [Monitor agent performance in Copilot Studio](/microsoft-copilot-studio/analytics-overview) | Use the analytics supported for that agent; don't assume the same reports exist in Agent Builder or other build paths. |
| Plugin access, user tasks, and failures | [Monitor your plugin](monitor-plugin.md) | Check package availability, representative task results, user feedback, and support cases. |
| Microsoft 365 usage and audit activity | [Choose what to check](monitor-plugin.md#choose-what-to-check) | Use each report for the activity it covers. An audit event doesn't establish that a task succeeded or a response was correct. |
| A connector or remote MCP service | [Investigate failures](monitor-plugin.md#investigate-failures) and the service's monitoring guidance | Check connection state, source permissions, endpoint health, logs, and errors with the service owner. Package availability doesn't prove runtime health. |

Don't assume that telemetry or report coverage is shared across plugin and agent build paths. An included agent's report covers that agent, not necessarily every capability in the plugin.

Record changes in adoption, task success, response quality, sign-in or tool failures, and support volume where the available evidence supports those conclusions. Compare representative tasks and user feedback as well as usage counts.

## Support users and investigate issues

For each issue, capture the affected version, product, audience, expected result, observed result, and relevant error details. Assign an owner and next action.

- Ask the administrator to investigate availability, installation, policy, or pending access requests.
- Ask the builder or agent owner to investigate instructions, knowledge, tool selection, or regressions.
- Ask the identity, connection, or service owner to investigate authentication, consent, source access, and runtime failures.

For API or MCP action sign-in failures, use [Troubleshoot plugin authentication](plugin-authentication-troubleshooting.md). For task and dependency checks, use [Investigate failures](monitor-plugin.md#investigate-failures).

Confirm the fix with an affected user and record the result. A corrected configuration or successful tool call doesn't by itself establish that the user's complete task now works.

## Update your plugin or agent

Follow this workflow when you need to change the solution. Use the package steps for a composed plugin. Use the authoring product's release procedure for a standalone agent.

### Before you update

Have:

- Monitoring evidence, user feedback, support cases, or a planned improvement.
- Representative tasks and acceptance criteria.
- Access to the source and affected capabilities.
- The publishing record, including the current version, audience, and distribution route.
- Owners for any connection, identity, or service changes.

### Establish a baseline

1. State the problem or improvement you want to address.
1. Identify the affected package or agent version, users, experiences, capabilities, and dependencies.
1. Define representative tasks and measurable acceptance criteria.
1. Run the tasks against the current version and record the results.
1. If your organization administers the plugin, record its current status, user availability, and installation state in **Agents** > **Tools** > **Plugins**. For an agent's applicable controls, use **Agents** > **All agents** > **Registry**.
1. Preserve the evidence you need to compare the current and updated behavior.

For a plugin that includes an agent, use [Agent evaluation overview](evaluation-overview.md) to design an evaluation when response quality, instructions, knowledge, or tool use is part of the change. Evaluation can provide pre-release evidence and help investigate post-deployment quality concerns, including those raised by usage signals, user feedback, or agent and dependency changes.

Agent evaluation isn't required for every plugin. It doesn't replace capability testing, package validation, or testing the complete user experience.

For deployed declarative agents, use the guided [`wiqd agent eval` workflow](https://microsoft.github.io/wiqd/extensions/provided/eval/). For direct command-line or pipeline control, see [Microsoft 365 Copilot Evaluations CLI overview](evaluations-cli-overview.md).

### Apply and test the change

Return to [Build or reuse](build-reuse-plugin.md) when you need to change a capability, integration, or source. Return to [Package & test](package-plugin.md) when you need to prepare and validate the release candidate. Keep the affected dependencies and supported experiences in scope.

1. Update the source or affected capability.
1. Update separately operated services or configuration when the change requires it.
1. Test each changed capability and affected dependency.
1. Run the baseline tasks and evaluations again.
1. Compare the results with the acceptance criteria.
1. Investigate regressions before you create the release package.

When the change affects a connector, remote MCP server, identity, permission, or external service, involve the owner of that dependency. Don't assume that changing the package updates a separately operated service.

### Create and validate the package

For a standalone agent, follow its authoring product's versioning, testing, and publishing instructions. The following package steps apply to composed plugins.

1. Assign a new package version and check the identity requirements for your publishing method.
1. [Create the plugin package](package-plugin.md).
1. [Validate and test the exact package](validate-plugin.md) you intend to release.
1. Test required sign-in, consent, connections, and external services.
1. Test the package in every Microsoft 365 experience you intend to support.
1. Record known limitations, required configuration, and any documented recovery option.

Don't publish a package that differs from the package you validated.

### Publish and roll out the update

Choose the update procedure for your product and distribution route. The [publishing routes](publish.md) distinguish sharing, organization submission, and Marketplace publication.

| Distribution route | Documented guidance or limitation | Who acts |
| --- | --- | --- |
| A plugin shared through Cowork | Follow the documented [upload and re-share procedure](/copilot/cowork/cowork-plugins#upload-your-own-plugin-package) for a newer version of an already shared plugin. This procedure applies to Cowork sharing, not general registry replacement. | Plugin owner |
| Organization app catalog submission through Work IQ Dev Tools | Follow [Submit an approved update to the organization app catalog](plugin-ci-cd.md#submit-an-approved-update-to-the-organization-app-catalog). Preserve the release target's existing identity and environment state, test the updated release, submit with `wiqd plugin publish`, and obtain administrator approval. | Plugin owner and administrator |
| Manual registry upload or another direct-sharing method | Confirm the product-specific existing-item update procedure before release. This article doesn't provide manual Tools Registry package-replacement steps. Don't assume that a new upload replaces an existing entry or preserves its availability settings. | Plugin owner and administrator |
| Microsoft Marketplace | Follow the update guidance for the offer type used by your published offer. Start with the Partner Center guidance linked from [Publish your plugin through Microsoft Marketplace](publish-plugin-publicly.md). Complete any required review and publication before directing customers to the update. | Publisher and customer administrator, where needed |

For a WIQD update, retain the established resource and publication IDs. Reprovisioning uses the existing environment identity and can change resources used by current users before catalog approval. Test changes with that effect in mind. Check the project's publishing lifecycle against the [WIQD guidance for existing projects](https://microsoft.github.io/wiqd/getting-started/build-a-plugin/#publishing-and-existing-projects); updating the CLI doesn't update project files.

`wiqd plugin publish` submits a project and environment, not a captured ZIP through `--package-file`. Keep the approved source and environment state fixed through submission and verify the submitted version. Package validation alone doesn't prove that publishing submits those exact bytes.

For a route with a documented update procedure:

1. Use the confirmed publishing or sharing procedure for the tested version and record whether it was submitted, published, shared, rejected, or blocked.
1. Give the administrator or rollout owner the exact version, intended users, required configuration, known limitations, and support contact.
1. Complete only the applicable steps to [make the updated plugin or agent available](deploy-plugin.md). Approval, assignment, and installation requirements depend on the method and organization settings.
1. Update separately controlled agents, connections, identities, remote MCP servers, or external services when required.
1. Confirm which version reached each audience.

### Plan for recovery without assuming rollback

Administrators can block and unblock a plugin in the Microsoft 365 admin center. Use the plugin's **Unblock** action to remove a block, then verify access for the intended users. Other availability, installation, permission, and connection requirements still apply. Unblocking doesn't restore an earlier package version or undo service changes.

Current guidance doesn't document a general plugin package-version rollback procedure. Use a product-specific rollback operation only when that product documents it.

Before release, record the documented recovery option and its prerequisites, or record the procedure gap and the owner responsible for a failed rollout.

Replacing a package doesn't automatically restore an external service, connection, identity, data, or permission change. Plan those dependencies separately.

### Verify the update

1. Test the representative tasks with an intended user in each supported experience.
1. Confirm that the user received the expected version.
1. Confirm that sign-in, consent, connections, tool calls, and external services work.
1. Where the plugin is administered in your organization, check that its status, user availability, and installation state match the intended audience in **Agents** > **Tools** > **Plugins**. Check for any superseded version still in use.
1. Repeat the evaluations used to approve the change.
1. Review usage signals, feedback, errors, and support cases after rollout.
1. If the update fails its acceptance criteria, pause the rollout, record the failure, and involve the responsible owner. Use a recovery operation only when the product documents it.

The update is complete when the intended audience has the correct version, its access settings match the intended rollout, the representative tasks meet their acceptance criteria, and every unresolved issue has an owner and next action.

### Record the update

Record:

- Previous and updated package or agent versions.
- Change, reason, affected capabilities, and dependencies.
- Baseline, evaluation, validation, and user-test results.
- Publishing method, audience, rollout status, and applicable registry state.
- Configuration or service changes.
- Known limitations, documented recovery option or procedure gap, and support owner.

## Hand over ownership and support

Before the current owner leaves the role, give the next owner:

- The source, package or agent identity, current version, release records, and publishing route.
- Monitoring locations, representative tests, known issues, and open support cases.
- The intended audience, administration contacts, required connections, and external-service owners.
- The documented update, recovery, and retirement procedures, including any gaps.

For a shared agent built in Agent Builder or Copilot Studio, use [Assign new owner to an agent](/microsoft-agent-365/admin/agent-actions#assign-new-owner-to-an-agent) when that procedure applies. Agent Builder also supports [adding an owner](/microsoft-agent-365/admin/agent-actions#add-an-owner-to-an-agent-builder-agent). Review the effects on the previous owner's access before making a change.

Those are agent ownership procedures, not a general transfer procedure for the outer plugin package. Confirm source access, publishing access, connections, credentials, and service responsibilities separately. Have the next owner verify that they can monitor, maintain, and support the solution.

## Retire the plugin or agent

Retire the solution when it should no longer be used. Decide whether you're ending distribution for all customers or removing access only in your organization; those scopes are different.

1. Identify active versions, users, publishing and sharing locations, and shared dependencies.
1. Notify users and support teams, including any replacement and the retirement date.
1. Stop distribution and access through the supported route, and remove administrator installations when required.
1. Have service owners remove plugin-specific access and resources while preserving resources used by other solutions.
1. Verify the result with a previously authorized user and record retained resources, exceptions, and owners.

To retire a package, see [Retire your plugin](retire-plugin.md). For a standalone agent, use the applicable product procedure, such as [Delete agents](/microsoft-agent-365/admin/agent-actions#delete-agents). Don't assume that removing an agent or package revokes every connection, permission, or external service.

## Related content

- [Monitor your plugin](monitor-plugin.md)
- [Monitor agents in Agent Builder](agent-builder-monitor-agents.md)
- [Build or reuse capabilities for your plugin](build-reuse-plugin.md)
- [Package your plugin](package-plugin.md)
- [Validate and test your plugin](validate-plugin.md)
- [Choose how to publish and distribute your plugin](publish.md)
- [Make plugins and agents available](deploy-plugin.md)
- [Govern access, tools, and connections](manage.md)
- [Manage plugins, skills, and MCP servers](/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers)
- [Retire your plugin](retire-plugin.md)
