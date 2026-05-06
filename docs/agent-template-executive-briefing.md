---
title: Use the Executive Briefing Agent template to build an agent
description: Learn about the Executive Briefing Agent template for Microsoft 365 Copilot.
author: 
ms.author: 
ms.topic: conceptual
---

# Use the Executive Briefing Agent template to build an agent

You can use the Executive Briefing Agent template in Microsoft 365 Copilot to build an agent that helps executives and their support teams prepare for leadership meetings, public events, and media interactions. It generates structured, brand-aligned briefing documents and post-meeting summaries by consolidating enterprise content from Microsoft 365 sources into clear talking points, key messages, anticipated questions, and actionable recommendations.

The Executive Briefing Agent uses a professional, concise, and factual tone - delivering insight-driven output as Word documents with structured headers and bullets, ensuring executives are always prepared, consistent, and aligned.

## Prerequisites

Before you work with the template, make sure that you have:

- A working knowledge of how to [build agents with Microsoft 365 Copilot](agent-builder-build-agents).
- An understanding of how to [write effective instructions for declarative agents](declarative-agent-instructions).

## Capabilities

Agents built on the Executive Briefing Agent template can offer:

- **Pre-meeting briefing generation** that produces structured talking points and briefing documents from enterprise data - covering executive summary, agenda, background context, anticipated questions with prepared answers, risks and considerations, and past interactions - delivered as a Word document.
- **Post-meeting executive summaries** that capture outcomes, decisions, action items with owners and dates, key themes, and required follow-up steps from meeting transcripts, emails, and Teams discussions.
- **Media and interview preparation** that generates interviewer profiles, sentiment analysis, anticipated questions with recommended responses, competitor stances, sensitive areas, and common interviewer patterns - grounded in web search and internal communications.
- **Public event and speech preparation** that drafts executive-ready messaging including key talking points, narrative structure, and audience-appropriate content for keynotes, panels, and public appearances.
- **Multi-source content retrieval** that searches across SharePoint documents, Outlook emails, Teams messages, meeting transcripts, and the web to build a comprehensive information base before synthesizing insights.
- **Self-evaluation and gap detection** that validates every template section is populated and sourced from retrieved content, flagging incomplete areas with specific gap descriptions before delivering the final output.

## Use cases

Executive Briefing Agent agents are useful for the following tasks.

| Task | Description |
|---|---|
| Executive Meeting | Generates talking points and a structured briefing document for an upcoming executive meeting, focused on specific topics and participants. |
| Post-meeting report | Summarizes a completed executive meeting and creates a post-meeting report with decisions, action items, and follow-up steps. |
| Public event | Prepares a speech or talking points for a presentation at a public event, tailored to the audience persona and topic. |
| Leadership Interview | Prepares the executive for a media interview with a specific interviewer, including anticipated questions, key messages, and background context. |
| Follow-up | Summarizes the follow-up points raised in a previous executive meeting for continuity and accountability tracking. |
| Key talking points | Creates talking points synthesized from recent emails and Teams chats, surfacing the most relevant themes and messages. |

## Extension opportunities

You can enhance the functionality of your Executive Briefing Agent agents by connecting to resources via Microsoft 365 Copilot connectors or API plugins, depending on the source system in use.

Suggestions for such connections include:

- **Connecting a competitive intelligence source:** Add a Copilot connector for a competitive intelligence platform (for example, S&P Global or CB Insights) so preparation and meeting briefings include competitor positioning, recent market moves, and industry context beyond what web search alone provides.
- **Grounding in approved messaging libraries through SharePoint:** Attach a SharePoint site containing approved corporate messaging frameworks, brand guidelines, and position papers so generated talking points and briefing documents align with the organization's official narrative.
- **Layering social listening for real-time sentiment:** Create a custom Copilot connector for a social monitoring tool so public event and media preparation includes real-time audience sentiment, trending topics, and brand perception data.

[!INCLUDE [agent-template-extension-note](includes/agent-template-extension-note.md)]


## Limitations

The following limitations apply to this template:

- **Interacting with the agent:** Agents created with this template are designed to answer one question at a time. For best results, users shouldn't ask multiple or compound questions in a single prompt.
- **Handling sensitive information:** When you create agents with this template, it's your responsibility to ensure that any personal or sensitive information used in the agent is handled according to your organization's data privacy and data handling policies. The agent adds all provided input to its general knowledge, so don't provide information that shouldn't be used in AI-generated content. Always review outputs to make sure no confidential details are inappropriately revealed.
- **Incorrect or harmful responses:** Although agents based on this template are designed to prevent the output of incorrect and harmful content, these agents use generative AI technology, which can sometimes make mistakes. A disclaimer is included to remind users to verify accuracy before making decisions, especially financial decisions. Customers are responsible for conducting due diligence on AI-generated content. You can edit the disclaimer to align with your organization's policies, but we don't recommend removing it. For more information, review the [supplemental terms](https://www.microsoft.com/business-applications/legal/supp-powerplatform-preview/).
- **Agent output is a draft, not final authority:** The briefings and other materials generated by the agent are based on the knowledge sources and rules you configure, plus general AI training. They do not represent official company policy or the personal advice of Microsoft. Think of the agent as a smart assistant that gives you a strong starting draft. It might not capture every nuance of the user's specific situation or nuances in your corporate policies. Always have a human review and, if necessary, edit the content. For instance, tone might need slight adjusting for a particular audience, or there might be context only a human communicator knows to add.
- **Compliance with regulations and policies:** Users must make sure that any content the agent helps produce still complies with all relevant laws and industry regulations in your region. For example, draft public messaging might need to meet standards for financial disclosures, marketing communications, or labor laws (for HR announcements). The agent won't know about specific local legal requirements unless those guidelines are part of its knowledge base. It's your responsibility to ensure final communications are legally compliant and adhere to your company's compliance and governance rules.

## Related content

- [Agent Builder in Microsoft 365 Copilot](agent-builder)
- [Build agents with Agent Builder](agent-builder-build-agents)
- [Publish and manage agents](agent-builder-share-manage-agents)
