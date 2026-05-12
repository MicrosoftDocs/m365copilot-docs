---
title: Use the SME Finder template to build an agent
description: Learn about the SME Finder template for Microsoft 365 Copilot.
author: krmarko
ms.author: krmarko
ms.reviewer: kjette
ms.date: 05/06/2026 
ms.topic: article
---

# Use the SME Finder template to build an agent

You can use the SME Finder template in Microsoft 365 Copilot to build an agent that helps employees find the most credible subject matter experts inside their organization for any topic, product, process, or customer question. It returns ranked experts with cited evidence from SharePoint, Teams, Outlook, Calendar, and organizational data - plus a ready-to-send outreach message.

The SME Finder uses a professional, evidence-based, and respectful tone, matching the user's language and formality while staying grounded in observable Microsoft 365 signals.

## Prerequisites

Before you work with the template, make sure that you have:

- A working knowledge of how to [build agents with Microsoft 365 Copilot](agent-builder-build-agents.md).
- An understanding of how to [write effective instructions for declarative agents](declarative-agent-instructions.md).

## Capabilities

Agents built on the SME Finder template can offer:

- **Evidence-based expert identification** that searches across SharePoint documents, Teams channel posts, Outlook email threads, Calendar meetings, and organizational People data to surface subject matter experts with cited evidence such as authored documents, meeting participation, and channel activity.
- **Outreach message generation** that drafts ready-to-use email or Teams messages in the user's voice, with appropriate tone and length for the recipient's seniority, including an evidence-based hook and specific ask.
- **Hidden gem discovery** that surfaces strong individual contributor experts who aren't in leadership roles - boosting topical expertise weighting and excluding Director-level and above - to find less-visible but highly knowledgeable colleagues.
- **Content and site owner lookup** that identifies who maintains a specific internal app, SharePoint site, or document library by finding primary owners, backup admins, and support contacts.
- **Pre-meeting preparation** that generates talking points and a context brief based on the identified expert's cited work, helping users prepare for productive conversations.
- **Mentor matching** that finds five potential mentors with 5+ years in a domain, coaching evidence, and appropriate organizational distance from the user, with suggested introductions.

## Use cases

SME Finder agents are useful for the following tasks.

| Task | Description |
|---|---|
| Find SMEs By Topic | Finds the most relevant experts for any topic or area by scanning documents, meetings, channel posts, and org data, returning top picks with cited evidence and a ready outreach message. |
| Hidden Gems | Surfaces strong individual contributor experts on a topic who aren't in leadership positions - less visible but highly knowledgeable colleagues based on recent activity signals. |
| Prep for Meeting with SME | Generates five talking points and a one-paragraph context brief tied to the identified expert's cited work, helping the user prepare for a productive conversation. |
| Content Owner | Identifies who maintains a specific internal app, SharePoint site, or document library, returning the primary owner and backup contact with source citations. |
| Decide Which SME to Contact First | Compares two experts side by side on topical evidence, recency, seniority fit, and availability, and recommends whom to contact first with a rationale. |
| Find a Mentor | Provides five mentor suggestions who specialize in a given area, each with role, mentoring evidence, and a suggested friendly introduction message. |

## Extension opportunities

You can enhance the functionality of your SME Finder agents by connecting to resources via Microsoft 365 Copilot connectors or API plugins, depending on the source system in use.

Suggestions for such connections include:

- **Adding structured expertise data via SharePoint:** Attach a SharePoint list of skills, certifications, or community-of-practice rosters so that explicit credentials supplement the inferred activity-based signals the agent already uses.
- **Layering a CRM connector for customer-facing expertise:** For customer-facing topics, connect Dynamics 365 or Salesforce via a Copilot connector to identify account-level subject matter experts with deal history and customer engagement data.
- **Tailoring the outreach message format:** Adjust the default outreach tone, length, and salutation in the agent instructions to match team or regional norms - for example, more formal phrasing for cross-org outreach or shorter messages for peer-level introductions.

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
