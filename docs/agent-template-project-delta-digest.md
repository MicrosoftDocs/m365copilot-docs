---
title: Use the Project Delta Digest template to build an agent
description: Learn about the Project Delta Digest template for Microsoft 365 Copilot.
author: krmarko
ms.author: krmarko
ms.reviewer: kjette
ms.date: 05/06/2026 
ms.topic: conceptual
---

# Use the Project Delta Digest template to build an agent

You can use the Project Delta Digest template in Microsoft 365 Copilot to build an agent that generates concise, executive-ready summaries of project activity - what shipped, what's in progress, what's stuck, and what's risky. It works for software projects, marketing campaigns, consulting engagements, operations initiatives, and any project with a name and a paper trail across Microsoft 365.

The Project Delta Digest uses a professional, evidence-based tone with structured tables and priority indicators to make interactions scannable and actionable for both participants and leadership audiences.

## Prerequisites

Before you work with the template, make sure that you have:

- A working knowledge of how to [build agents with Microsoft 365 Copilot](agent-builder-build-agents.md).
- An understanding of how to [write effective instructions for declarative agents](declarative-agent-instructions.md).

## Capabilities

> [!IMPORTANT]
> This template works best when grounded in additional context - preferably in Copilot Connectors (recommended under Extension Opportunities), or a SharePoint knowledge source. Use the Agent Builder to search for [one of the recommended Copilot Connectors](agent-builder-add-knowledge.md#copilot-connectors), or [a SharePoint file, folder or site](agent-builder-add-knowledge.md#sharepoint-content) that provides authoritative project information relevant to this agent.

With appropriate grounding, agents built on the Project Delta Digest template can offer:

- **Multi-source project scanning** that searches across Outlook emails, Teams chats and channel posts, SharePoint/OneDrive files, and Calendar meetings to compile a comprehensive view of project activity within any timeframe.
- **Structured digest generation** with a 12-section framework covering TL;DR, shipped items, in-progress work, upcoming milestones, recent activity, blockers, team load, risks, discussions, files, delivery signals, and reference documents.
- **Risk scoring and escalation hints** that assigns a 1–5 risk score to flagged items based on priority, age, and impact, and identifies escalation language in chats and emails.
- **Blocker and stale item detection** that surfaces items labeled blocked or on-hold, dependencies waiting on someone, overdue tasks, and threads without replies - showing the owner and how long each has been stuck.
- **Audience-adaptive output** that adjusts detail level for leadership (outcomes and milestones only), participants (full tables with links), or program managers (balanced view).
- **Actionable draft generation** that offers to produce Teams messages, follow-up emails, leadership status reports, or meeting agendas built from open blockers and pending decisions - all staged for user review before sending.

## Use cases

Project Delta Digest agents are useful for the following tasks.

| Task | Description |
|---|---|
| Daily Change Digest | Delivers a full daily digest covering the TL;DR, completed items, in-progress work, blockers, and risks from the last 24 hours. |
| This Week's Wins | Shows everything completed during the week, grouped by milestone or deliverable, with dates and links to source items. |
| Current Risks | Surfaces high-priority open items, escalations, customer-impact issues, and compliance or budget flags, grouped by workstream. |
| Project Blockers | Lists active blockers with owners and duration, identifying what's holding the project back and who is responsible for resolution. |
| Leadership Weekly Recap | Produces a leadership-ready weekly digest with TL;DR, milestones, key risks, and momentum signals - skipping item-level detail. |
| Stakeholder Update | Drafts a stakeholder update message including TL;DR, milestones, top risks, and asks, ready to share with the team. |

## Extension opportunities

You can enhance the functionality of your Project Delta Digest agents by connecting to resources via Microsoft 365 Copilot connectors or API plugins, depending on the source system in use.

Suggestions for such connections include:

- **Combining record-system connectors with knowledge sources:** Add a Copilot connector for Azure DevOps, Jira, or ServiceNow to pull in work item status, sprint data, and task assignments, and pair it with a Confluence or SharePoint knowledge source so release notes and runbooks appear inline with issue summaries.
- **Adding Outlook and Teams signals for richer risk context:** Enable Microsoft Graph capabilities to pull in recent customer escalations from email threads or incident channels, enriching the Risks & Impact section with real-time communication signals.
- **Customizing the digest structure for your team:** Extend the default section template with team-specific sections such as SLA breaches, support escalation counts, or test-pass rates - tailored by adjusting the agent's instructions to match your project methodology.

[!INCLUDE [agent-template-extension-note](includes/agent-template-extension-note.md)]

## Limitations

The following limitations apply to this template:

- **Interacting with the agent:** Agents created with this template are designed to answer one question at a time. For best results, users shouldn't ask multiple or compound questions in a single prompt.
- **Handling sensitive information:** When you create agents with this template, it's your responsibility to ensure that any personal or sensitive information used in the agent is handled according to your organization's data privacy and data handling policies. The agent adds all provided input to its general knowledge, so don't provide information that shouldn't be used in AI-generated content. Always review outputs to make sure no confidential details are inappropriately revealed.
- **Incorrect or harmful responses:** Although agents based on this template are designed to prevent the output of incorrect and harmful content, these agents use generative AI technology, which can sometimes make mistakes. A disclaimer is included to remind users to verify accuracy before making decisions, especially financial decisions. Customers are responsible for conducting due diligence on AI-generated content. You can edit the disclaimer to align with your organization's policies, but we don't recommend removing it. For more information, review the [supplemental terms](https://www.microsoft.com/business-applications/legal/supp-powerplatform-preview/).
- **Agent output is a starting point, not final authority:** The news digests generated by the agent are based on the knowledge sources and rules you configure, plus general AI training. Agent output does not represent official company policy or the personal advice of Microsoft. Think of the agent as a smart assistant that gives users a strong starting point. It might not capture every nuance of the user's specific situation or nuances in your corporate policies. Always inform users of the potential for errors and need to verify official company policies and requirements that may apply to them.
- **Compliance with regulations and policies:** You must make sure that any content the agent helps produce still complies with all relevant laws and industry regulations in your region. For example, output regarding HR policies might need to meet local labor law standards depending on where employees are based. The agent won't know about specific local legal requirements unless those guidelines are part of its knowledge base. It's your responsibility to ensure output is legally compliant and adheres to your company's compliance and governance rules.

## Related content

- [Agent Builder in Microsoft 365 Copilot](agent-builder.md)
- [Build agents with Agent Builder](agent-builder-build-agents.md)
- [Publish and manage agents](agent-builder-share-manage-agents.md)
