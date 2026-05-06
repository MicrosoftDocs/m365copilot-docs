---
title: Use the Plan My Day template to build an agent
description: Learn about the Plan My Day template for Microsoft 365 Copilot.
author: 
ms.author: 
ms.topic: conceptual
---

# Use the Plan My Day template to build an agent

You can use the Plan My Day template in Microsoft 365 Copilot to build an agent that compiles a comprehensive morning briefing using Microsoft 365 data. It balances business priorities with personal wellness, helping everyone start each day informed, prepared, and connected to what matters - both professionally and personally.

The Plan My Day agent uses a warm, efficient tone - like a chief of staff - linking every item, omitting empty sections, and surfacing priorities scannable in 30 seconds with the full briefing readable in 5–7 minutes.

## Prerequisites

Before you work with the template, make sure that you have:

- A working knowledge of how to [build agents with Microsoft 365 Copilot](agent-builder-build-agents).
- An understanding of how to [write effective instructions for declarative agents](declarative-agent-instructions).

## Capabilities

Agents built on the Plan My Day template can offer:

- **Priority scoring and ranking** that evaluates items across Outlook, Teams, SharePoint, OneDrive, and Calendar by business impact, people blocked, time sensitivity, and strategic alignment - surfacing the top 3–5 priorities with direct links and actionable context.
- **Multi-day schedule awareness** that looks beyond today to the next working day and the next three working days, flagging prep-required meetings, approaching deadlines, and external engagements while adapting for weekends and holidays.
- **Decision and approval queue management** that surfaces items where others are blocked waiting on the user's input, ordered by longest wait time first, with owner attribution and direct links.
- **Personal wellness touches** that surface team birthdays, work anniversaries, and family events from the personal calendar - with reminders at one week, three days, and day-of - to balance business priorities with human moments.
- **Conflict detection and delegation recommendations** that identify overlapping meetings, double-bookings, and overloaded days (more than six meetings), and proactively suggest items to delegate, decline, or shorten.
- **Special mode handling** that automatically adapts the briefing for travel days (time zones, transit buffers), high-stakes events (extra prep, countdowns), and busy seasons (aggressive filtering).

## Use cases

Plan My Day agents are useful for the following tasks.

| Task | Description |
|---|---|
| Plan My Day | Generates a full executive daily briefing pulling calendar, emails, Teams messages, SharePoint and OneDrive activity, and personal events into a structured, prioritized summary. |
| Top Priorities | Returns only the top three to five most urgent and impactful items for the day, scored by business impact, time sensitivity, strategic alignment, and people blocked. |
| Pending Decisions | Surfaces items where others are blocked waiting on the user's input - approvals, reviews, and replies - ordered by how long they have been waiting. |
| Weekly Look-Ahead | Provides a full week summary with milestones, meeting load statistics, team out-of-office notices, and optimization suggestions. |
| Delegation | Recommends meetings and tasks that someone else could handle, based on priority scoring and the user's meeting load. |
| Today's Meetings | Displays a chronological view of all meetings with attendees, join links, attached documents, prep status, location, and conflict flags, in addition to focus blocks. |

## Extension opportunities

You can enhance the functionality of your Plan My Day agents by connecting to resources via Microsoft 365 Copilot connectors or API plugins, depending on the source system in use.

Suggestions for such connections include:

- **Connecting a project tracking tool via Copilot connector:** Add a Copilot connector for Azure DevOps or Jira so that open work items, sprint deadlines, and assigned tasks appear in the priority ranking alongside email and calendar signals.
- **Adding team OKR or goals knowledge through SharePoint:** Attach a SharePoint site containing team OKRs or quarterly goals so the priority engine can weigh items against documented strategic objectives.
- **Grounding in organizational context documents:** Add a SharePoint knowledge source with org charts, team rosters, or VIP contact lists so the agent can better identify high-priority senders and personalize delegation suggestions.
- **Schedule a daily morning plan:** Create a scheduled prompt to receive your daily personalised briefing at a set time each morning.

[!INCLUDE [agent-template-extension-note](includes/agent-template-extension-note.md)]


## Limitations

The following limitations apply to this template:

- **Interacting with the agent:** Agents created with this template are designed to answer one question at a time. For best results, users shouldn't ask multiple or compound questions in a single prompt.
- **Handling sensitive information:** When you create agents with this template, it's your responsibility to ensure that any personal or sensitive information used in the agent is handled according to your organization's data privacy and data handling policies. The agent adds all provided input to its general knowledge, so don't provide information that shouldn't be used in AI-generated content. Always review outputs to make sure no confidential details are inappropriately revealed.
- **Incorrect or harmful responses:** Although agents based on this template are designed to prevent the output of incorrect and harmful content, these agents use generative AI technology, which can sometimes make mistakes. A disclaimer is included to remind users to verify accuracy before making decisions, especially financial decisions. Customers are responsible for conducting due diligence on AI-generated content. You can edit the disclaimer to align with your organization's policies, but we don't recommend removing it. For more information, review the [supplemental terms](https://www.microsoft.com/business-applications/legal/supp-powerplatform-preview/).
- **Agent output is a starting point, not final authority:** The news digests generated by the agent are based on the knowledge sources and rules you configure, plus general AI training. Agent output does not represent official company policy or the personal advice of Microsoft. Think of the agent as a smart assistant that gives users a strong starting point. It might not capture every nuance of the user's specific situation or nuances in your corporate policies. Always inform users of the potential for errors and need to verify official company policies and requirements that may apply to them.
- **Compliance with regulations and policies:** You must make sure that any content the agent helps produce still complies with all relevant laws and industry regulations in your region. For example, output regarding HR policies might need to meet local labor law standards depending on where employees are based. The agent won't know about specific local legal requirements unless those guidelines are part of its knowledge base. It's your responsibility to ensure output is legally compliant and adheres to your company's compliance and governance rules.

## Related content

- [Agent Builder in Microsoft 365 Copilot](agent-builder)
- [Build agents with Agent Builder](agent-builder-build-agents)
- [Publish and manage agents](agent-builder-share-manage-agents)
