---
title: Add connected agents in Agent Builder
description: Learn how to use the plugin picker in Agent Builder to add, test, and remove connected declarative agents.
#customer intent: As an agent owner, I want to connect my agent to existing declarative agents in Agent Builder so that it can delegate tasks to agents with specialized knowledge and capabilities.
author: surimao-msft
ms.author: surimao
ai-usage: ai-assisted
ms.topic: how-to
ms.service: copilot-studio
ms.subservice: agent-builder
ms.localizationpriority: medium
ms.date: 10/30/2026
---

# Add connected agents in Agent Builder

<!-- PM-REVIEW (10/20/2026): Draft for the Ignite connected-agent scope only. Confirm release status, rollout, and feature-specific licensing before publication. Don't extend this article to other plugin components or post-Ignite acquisition flows. -->

Use the plugin picker in Agent Builder to connect your agent to other declarative agents. A connected agent can handle part of a user's task, such as answering a question with specialized knowledge. Your agent delegates the task and uses the connected agent's response in its conversation with the user.

For example, you can connect a team onboarding agent to a benefits agent and an IT support agent. The onboarding agent can use those agents to help answer questions without duplicating their knowledge and capabilities.

This article describes how to add, test, and remove connected declarative agents through the **Plugins** section in Agent Builder. You don't need to edit an agent manifest or look up agent identifiers. For background on delegation, see [Connect to other agents from a declarative agent](declarative-agent-connected-agent.md).

## Prerequisites

- Access to Agent Builder. For licensing information, see [Agent Builder licensing](agent-builder.md#licensing).
- An agent that you own or have **Can edit** access to. If you don't have an agent yet, [build an agent in Agent Builder](agent-builder-build-agents.md).
- Access to the declarative agents you want to connect. For agents created by others, you must have acquired or installed the agent before adding it. An agent you created doesn't require a separate acquisition step.

<!-- PM-REVIEW (10/20/2026): Confirm the installed/acquired eligibility rule for shared agents, including agents that aren't Store-published, and org-wide shared agents. Confirm access requirements and test-chat behavior for additional owners. Don't imply that sharing alone installs a connected agent or grants access to it. -->

## Choose agents to connect

The plugin picker shows eligible declarative agents that you can access. These can include agents from Microsoft, partners, or your organization, agents shared with you, and agents you created.

The following limits apply:

- You can add up to 10 connected agents to one agent.
- You can connect only declarative agents through this picker. Other agent types aren't supported.
- You can't add the same connected agent more than once or connect an agent to itself.
- A connected agent must be published and available.

<!-- PM-REVIEW (10/20/2026): The specification requires validation for disallowed nested configurations but doesn't define the allowed nesting model. Confirm that model and whether each validation condition blocks adding, updating, or publishing before documenting more specific behavior. -->

Choose agents whose capabilities match a task you want your agent to delegate. Review each agent's name and publisher or owner to make sure that you select the intended agent.

## Add a connected agent

<!-- PM-REVIEW (10/30/2026): Procedures use the Browse, Preview, and Remove labels from the supplied draft. Verify these procedures in the release build before publication. No live UI execution or screenshots have been verified. -->

1. Open your agent in Agent Builder. For an existing agent, select **Edit**. For help finding your agent, see [Edit an agent](agent-builder-share-manage-agents.md#edit-an-agent).
1. On the **Configure** tab, find the **Plugins** section and select **Browse**.
1. In the plugin picker, browse or search for the declarative agent you want to connect.
1. Select the agent and add it to your current agent.

Repeat these steps to add other eligible agents, up to the limit of 10 connected agents.

If an agent doesn't appear, check the [prerequisites](#prerequisites) and [supported agents and limits](#choose-agents-to-connect). The picker isn't a catalog of every agent available to your organization.

## Test and apply your changes

Test delegation before making your changes available to users. Agent Builder's test chat uses your agent's current unpublished configuration, including its connected agents.

1. Select the **Preview** tab in the upper-right corner of Agent Builder to open the test chat. For general testing guidance, see [Test your agent](agent-builder-build-agents.md#test-your-agent).
1. Enter a prompt that calls for a connected agent's specialized knowledge or capabilities. For example, if you connected an IT support agent to an onboarding agent, try: "I'm joining the team next week. How do I request a work laptop?"
1. Review the response and any connected-agent invocation errors. Try prompts for each connected agent to check that your agent can delegate the intended tasks.
1. Resolve any configuration or access errors and test again.
1. When you're ready, select **Create** for a new agent or **Update** for an existing agent to make the configuration available.

For sharing instructions, see [Share and manage agents built in Agent Builder](agent-builder-share-manage-agents.md). Before sharing, review the [access requirements for connected agents](declarative-agent-connected-agent.md#authentication-and-authorization). Users need access to the connected agents as well as the agent you're sharing.

## Remove a connected agent

Remove a connection when your agent no longer needs another agent's capabilities, or when the connected agent is no longer available.

1. Open your agent for editing in Agent Builder.
1. On the **Configure** tab, find the connected agent in the **Plugins** section.
1. Open the connected agent's ellipsis (**...**) menu, and then select **Remove**.
1. Test your agent again to check how it handles tasks without that connection.
1. Select **Update** to make the change available to users.

Removing the connection doesn't delete the other agent.

## Troubleshoot connected agents

| Issue | What to check |
| --- | --- |
| An agent doesn't appear in the picker. | Check that it's a declarative agent, that it's published and available, and that you have access. For an agent created by someone else, check that you acquired or installed it. |
| You can't add another connected agent. | Check whether you already have 10 connected agents. Also check that you aren't adding a duplicate or connecting the agent to itself. Review any validation message for other configuration restrictions. |
| A connected agent is unavailable. | Review the reason shown with the agent. If the agent was deleted or your access was revoked, the connection remains visible rather than being silently removed. Remove the connection if you no longer need it. If your access was revoked, contact the owner to request access. |
| A connected-agent call fails in test chat. | Review the error shown in test chat. Check that the connected agent is still available and that you have access, then test again. |

<!-- INTERACTIVE-DEMO (10/30/2026): Evaluated the production product catalog at https://interactivedemo.microsoft.com/. It lists developer API, protocol, and CLI experiences, but no Agent Builder plugin-picker experience for adding connected declarative agents. No unrelated demo link was added. -->

## Related content

- [Build agents in Agent Builder](agent-builder-build-agents.md)
- [Connect to other agents from a declarative agent](declarative-agent-connected-agent.md)
- [Write effective instructions for declarative agents](declarative-agent-instructions.md)
- [Share and manage agents built in Agent Builder](agent-builder-share-manage-agents.md)
