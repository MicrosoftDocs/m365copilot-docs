---
title: Monitor your Microsoft 365 Copilot plugin
description: Check plugin usage, task success, access, and failures, and assign issues to the right owner.
author: jasonjoh
ms.author: jasonjoh
ms.localizationpriority: medium
ms.date: 09/30/2026
ms.topic: how-to
---

# Monitor your plugin

Check whether people use your plugin, whether they can complete their tasks, and who needs to act when something goes wrong.

Plugin owners coordinate monitoring. Administrators check organizational availability and access. Builders and service owners investigate problems with the plugin and the services it uses.

## Before you begin

Identify:

- The plugin name and package version.
- The intended users and the Microsoft 365 experiences they use.
- The tasks the plugin should complete and any required connections.
- The administrator, builder, and support or service owners who can investigate problems.

For administrator checks, work with someone who has the required permissions in the Microsoft 365 admin center.

## Choose what to check

Start with the question you need to answer.

| Question | What to review | Guidance |
| --- | --- | --- |
| Are people using the plugin? | Usage reports available for the Microsoft 365 experience and relevant audit records | [Microsoft Copilot reports for IT admins](/microsoft-365/copilot/microsoft-365-copilot-reports-for-admins?context=/microsoft-365/copilot/extensibility/context) and [Copilot audit activities](/purview/audit-copilot) |
| Can users complete their tasks? | Results from representative tasks, user feedback, and support cases | [Validate and test your plugin](validate-plugin.md) |
| Can the intended users access it? | Plugin status, user availability, installation, organizational restrictions, and pending requests | [Manage plugins, skills, and MCP servers](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context) |
| Is something failing? | Sign-in errors, failed connections, tool errors, and service logs | [Investigate failures](#investigate-failures) |
| Are an included agent's responses useful and accurate? | Reviewed responses and evaluation results | [Agent evaluation overview](evaluation-overview.md) |

Use each report for the activity it covers. An audit event records activity, not necessarily a successful task or a correct response. Reports for an included agent cover that agent's activity, not the whole plugin.

## Monitor the plugin

1. Choose the time period, plugin version, audience, and tasks to review.
1. Review the available usage reports, audit records, feedback, and support cases.
1. Have an intended user complete representative tasks in each supported Microsoft 365 experience.
1. If users can't access the plugin or the version is in doubt, ask the administrator to [check plugin status and access](#check-plugin-status-and-access).
1. For each problem, record what the user expected, what happened, and any error details. Use [Investigate failures](#investigate-failures) to identify the next checks and responsible owner.
1. After a fix, repeat the affected task with an intended user and record the result.

Repeat these checks on a schedule that fits your support needs and after significant updates or access changes.

## Check plugin status and access

The administrator completes these checks in the [Microsoft 365 admin center](https://admin.microsoft.com/).

1. Go to **Agents** > **Tools** > **Plugins** and select the plugin.
1. Check that its status matches the intended configuration. If users should have access, investigate any blocked status.
1. Open **Users** and confirm that availability matches the intended audience.
1. Check the installation state if the plugin is deployed by an administrator.
1. Go to **Agents** > **Tools** > **Requests** and review pending plugin access requests.
1. If access is restricted unexpectedly, check publisher-category settings under **Agents** > **Settings** > **Agent and plugin access**.

Follow [Manage plugins, skills, and MCP servers](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context) for the procedures to change these settings. After any correction, ask an affected user to try the plugin again.

## Investigate failures

Start with the problem the user experienced. Check an included agent, connector, or remote service only when it could explain the failure.

| What you observe | What to check | Who investigates | Guidance |
| --- | --- | --- | --- |
| Users can't find, install, or open the plugin | Plugin status, user availability, installation, organizational restrictions, licenses, and supported experience | Administrator | [Manage plugins, skills, and MCP servers](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context) |
| Sign-in or consent fails for an MCP or API plugin | Account access, authentication configuration, permissions, and consent | Builder and identity administrator | [Troubleshoot MCP and API plugin authentication](plugin-authentication-troubleshooting.md) |
| The plugin behaves incorrectly after an update | Package version delivered to users, rollout status, and compatibility with required services | Builder and administrator | [Validate and test your plugin](validate-plugin.md) |
| An included agent gives incorrect or incomplete responses | Instructions, knowledge, tool selection, and results from representative tasks | Builder or agent owner | [Agent evaluation overview](evaluation-overview.md) |
| Content from a synchronized Copilot connector is missing or outdated | Connection state, synchronization results, source permissions, and failed items | Connector or data-source owner | [Monitor your connection state](/microsoft-365/copilot/connectors/manage-connector?context=/microsoft-365/copilot/extensibility/context#monitor-your-connection-state) and [View connection details](/microsoft-365/copilot/connectors/view-details?context=/microsoft-365/copilot/extensibility/context) |
| A remote MCP tool fails or times out | Administrative access, authorization, endpoint availability, server logs, and returned errors | Builder and MCP server owner | [Manage plugins, skills, and MCP servers](/microsoft-365/admin/manage/manage-plugins-skills-mcp-servers?context=/microsoft-365/copilot/extensibility/context), plus the server's hosting and troubleshooting guidance |

For remote services, check both administrative access and runtime health. A service can be allowed for use and still fail to respond.

Give each issue an owner and next action. If several teams are involved, assign one person to coordinate the investigation.

## Record the results

For each monitoring review, record:

- **Scope:** Plugin name, version, audience, and time period.
- **Findings:** Usage observed, tasks tested, and problems found.
- **Follow-up:** Owner and next action for each unresolved problem.
- **Verification:** Whether affected tasks succeeded after a fix.

Each review is complete when you record the findings, assign owners and next actions for unresolved problems, and verify fixes with affected users.

## Related content

- [Improve and update your plugin](improve-plugin.md)
- [Retire your plugin](retire-plugin.md)
- [Manage plugins with Microsoft Agent 365](govern-plugins.md#manage-plugins-with-microsoft-agent-365)
- [Validate and test your plugin](validate-plugin.md)
- [Agent evaluation overview](evaluation-overview.md)
