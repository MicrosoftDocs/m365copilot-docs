---
title: Use the Personal News Digest template to build an agent
description: Learn about the Personal News Digest template for Microsoft 365 Copilot.
author: krmarko
ms.author: krmarko
ms.reviewer: kjette
ms.date: 05/06/2026 
ms.topic: article
---

# Use the Personal News Digest template to build an agent

You can use the Personal News Digest template in Microsoft 365 Copilot to build an agent that delivers a 30-second executive briefing of high-impact organizational news from your Outlook, Teams, and SharePoint. It surfaces leadership announcements, policy and HR updates, operational alerts, launches, and trending topics - tagged by priority and personalized to your role, team, and region.

The Personal News Digest uses a professional, time-respecting tone - like a chief of staff, not a newsletter - to make interactions concise and relevant.

## Prerequisites

Before you work with the template, make sure that you have:

- A working knowledge of how to [build agents with Microsoft 365 Copilot](agent-builder-build-agents.md).
- An understanding of how to [write effective instructions for declarative agents](declarative-agent-instructions.md).

## Capabilities

Agents built on the Personal News Digest template can offer:

- **Personalized news digests** that scan Outlook emails, Teams channel posts, and SharePoint intranet pages to surface company-wide announcements and updates relevant to the user's role, department, and region.
- **Priority tagging** that classifies every update as 🔴 Critical, 🟡 Important, or 🟢 FYI, with sender attribution and date for each item.
- **Leadership communications surfacing** that highlights messages from the CEO, C-suite, and skip-level leaders, including key quotes when impactful.
- **Operational alert tracking** that identifies incidents, outages, planned downtime, and IT status notices across organizational communication channels.
- **Cross-source deduplication** that merges the same story across Outlook, Teams, and SharePoint into a single consolidated bullet to reduce noise.
- **Trend detection** that identifies topics with converging signals from two or more sources or channels within the time window.

## Use cases

Personal News Digest agents are useful for the following tasks.

| Task | Description |
|---|---|
| What Matters Most | Surfaces the top company-wide announcements from the past week, tagged by Critical, Important, and FYI priority levels with sender and date for each. |
| Make My Life Easier | Finds recently announced tools, features, apps, or services that the user could start using, including what each does, who it's for, and how to get started. |
| Company Initiatives | Summarizes recent company-wide initiatives, strategic programs, partnerships, and launches from the past 30 days with a brief summary and organizational impact. |
| Org Announcements | Shows deduplicated org-wide announcements from across Outlook, Teams, SharePoint, and newsletters, with a personalized "why it matters to me" line per item. |
| Back To the Office | Catches users up on critical organizational news since the start of their time off, resolving the out-of-office window automatically from their calendar. |
| Leadership Updates | Surfaces messages and newsletters from the CEO, C-suite, or skip-level leaders in the past 30 days with key quotes. |

## Extension opportunities

You can enhance the functionality of your Personal News Digest agents by connecting to resources via Microsoft 365 Copilot connectors or API plugins, depending on the source system in use.

Suggestions for such connections include:

- **Connecting HR or policy systems via Copilot connector:** Add a Copilot connector for ServiceNow or an internal HR portal so the Action Required section can reference mandatory acknowledgments, compliance training, and policy sign-offs directly.
- **Scoping SharePoint to your corporate news site:** For large organizations, scope the SharePoint knowledge source to the corporate news site or intranet hub to reduce noise from project-specific sites and surface only org-wide content.
- **Adding the document generation capability to document digests:** Toggle on the Create documents, charts, and code capability to create Word document digests that you can download and share.

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
