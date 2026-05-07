---
title: Use the Status Update Agent template to build an agent
description: Learn about the Status Update Agent template for Microsoft 365 Copilot.
author: krmarko
ms.author: krmarko
ms.reviewer: kjette
ms.date: 05/06/2026
ms.topic: conceptual
---

# Use the Status Update Agent template to build an agent

You can use the Status Update Agent template in Microsoft 365 Copilot to build an agent that turns your Microsoft 365 activity into clear, audience-ready status updates. It generates daily and weekly recaps, manager status emails, self-reflections, goal alignment check-ins, and brag documents for promotions and reviews - all grounded in your Outlook, Teams, SharePoint, OneDrive, and Calendar activity.

The Status Update Agent uses a professional, respectful, and encouraging tone, making interactions both supportive and actionable without fabricating accomplishments or comparing colleagues.

## Prerequisites

Before you work with the template, make sure that you have:

- A working knowledge of how to [build agents with Microsoft 365 Copilot](agent-builder-build-agents.md).
- An understanding of how to [write effective instructions for declarative agents](declarative-agent-instructions.md).

## Capabilities

Agents built on the Status Update Agent template can offer:

- **Activity-grounded status summaries** that pull signals from Outlook emails, Teams chats and channel posts, SharePoint/OneDrive files, and Calendar meetings to generate evidence-based recaps across any timeframe.
- **Brag document generation** that creates and updates a structured Word document (.docx) capturing accomplishments with date, theme, impact, and collaborators - including a polished shareable variant for managers.
- **Manager status email drafting** that produces ready-to-send emails organized into Highlights, In-Progress Work, Blockers, and Looking Ahead sections, staged as drafts for user review.
- **Goal and OKR alignment** that maps recent work activity to the user's stated goals or OKRs, surfacing evidence-based progress and neutrally flagging areas with limited observable activity.
- **Personal reflection support** that generates encouraging, outcome-focused accomplishment lists with open-ended reflection questions, kept private by default and never surfaced in reports without permission.
- **Team wins aggregation** (for leads) that summarizes team contributions from shared channels, files, and meetings into themed wins with offers to draft Teams shout-outs - without comparing individual team members.

## Use cases

Status Update Agent agents are useful for the following tasks.

| Task | Description |
|---|---|
| Daily Wrap Up | Pulls together everything worked on across emails, meetings, Teams chats, and files to provide an encouraging end-of-day recap with highlights and an affirmation. |
| Weekly Reflection | Surfaces the top five most meaningful accomplishments from the past week's M365 activity, focusing on outcomes and impact. |
| Create a Brag Doc | Captures meaningful accomplishments with date, theme, outcome, impact, and collaborators in a structured document to share with a manager. |
| Manager Status Email Drafter | Drafts a polished weekly status email organized into Highlights, In-Progress, Blockers, and Looking Ahead, staged as a draft for review before sending. |
| Goal Alignment Check-In | Maps recent work activity to each of the user's goals with specific accomplishments as evidence, and flags goals where movement has been limited. |
| Team Wins (For Leads) | Summarizes the team's collective wins from shared channels, files, and meetings with recognition-friendly framing and offers to draft shout-outs. |

## Extension opportunities

You can enhance the functionality of your Status Update Agent agents by connecting to resources via Microsoft 365 Copilot connectors or API plugins, depending on the source system in use.

Suggestions for such connections include:

- **Connecting a project tracking tool via Copilot connector:** Add a Copilot connector for Azure DevOps, Jira, or GitHub so that shipped work items, closed pull requests, and resolved issues feed into status updates alongside email and Teams signals.
- **Adding OKR or goals knowledge through SharePoint:** Attach a SharePoint site containing team OKRs or goal documents so the goal-alignment check-in can compare recent activity against documented objectives automatically.
- **Tailoring the Brag Doc template:** Replace the default Code Interpreter template with an organization-specific format used for performance reviews, Connect conversations, or promotion packets to match your team's expectations.

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
