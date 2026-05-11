---
title: Use the My Company Policy template to build an agent
description: Learn about the My Company Policy template for Microsoft 365 Copilot.
author: krmarko
ms.author: krmarko
ms.reviewer: kjette
ms.date: 05/06/2026 
ms.topic: article
---

# Use the My Company Policy template to build an agent

Use the My Company Policy template in Microsoft 365 Copilot to build an agent that serves as a centralized company knowledge assistant. It answers HR policy questions, surfaces holiday and PTO information, shares employee service links, and delivers public company information including quarterly earnings. It gives employees a single conversational interface grounded exclusively in authoritative company documents stored in SharePoint and on the corporate website.

The My Company Policy agent uses a professional, approachable, and concise tone - neutral and non-judgmental on sensitive HR topics - always citing the specific document, policy number, and section where it found the information.

## Prerequisites

Before you work with the template, make sure that you have:

- A working knowledge of how to [build agents with Microsoft 365 Copilot](agent-builder-build-agents.md).
- An understanding of how to [write effective instructions for declarative agents](declarative-agent-instructions.md).

## Capabilities

> [!NOTE]
> This template works best when grounded in additional context, such as a SharePoint knowledge source. [Use the Agent Builder to search for a SharePoint file, folder, or site](agent-builder-add-knowledge.md#sharepoint-content) that provides authoritative policy documents relevant to this agent.

With appropriate grounding, agents built on the My Company Policy template can offer:

- **HR policy question answering** grounded in official company documentation stored in SharePoint - covering workplace conduct, remote work guidelines, leave policies, expense reimbursement, and more - with inline citations referencing the specific document name, policy number, and section.
- **Holiday and PTO information** – when grounded in your SharePoint knowledge source, including the company holiday calendar, PTO accrual rates, carryover policies, blackout dates, and instructions for submitting time-off requests.
- **User-context-aware responses** that factor in the employee's geographic location and job title from their Microsoft 365 profile to surface the most relevant policy version - leading with what applies to the user and noting that other regional or role-based variations exist.
- **Employee services directory** that provides direct links to self-service portals such as payroll, IT help desk, facilities requests, HR case submission, and travel booking tools.
- **Public company information** grounded in the corporate website for questions about quarterly earnings, leadership team, organizational structure, products, press releases, and corporate social responsibility initiatives.

## Use cases

My Company Policy agents are useful for the following tasks.

| Task | Description |
|---|---|
| Summarize Leave | Summarizes all types of leave an employee is eligible for based on their employment classification, with citations to the relevant policy documents. |
| New Hire | Explains what happens during the first 90 days of employment, including the probationary period policy, onboarding steps, and key milestones. |
| Parental Leave | Explains parental leave policies including notice requirements, eligibility criteria, and duration - asking clarifying questions about caregiver status when needed. |
| Paid Holidays | Lists the company's paid holidays for the current year with dates and any regional variations. |
| Board Meeting | Surfaces key discussion points from the last board meeting based on available documentation in SharePoint. |

## Extension opportunities

You can enhance the functionality of your My Company Policy agents by connecting to resources via Microsoft 365 Copilot connectors or API plugins, depending on the source system in use.

Suggestions for such connections include:

- **Adding localized HR policy documents in SharePoint:** Organize country-specific policy documents in regional folders (for example, `/HR Policies/US/`, `/HR Policies/UK/`) so the agent can deliver jurisdiction-specific answers based on the employee's location.
- **Adding onboarding journey knowledge:** Create a suggested prompt for "New Hire Starter Kit". Attach a SharePoint site containing new-hire formalities with 30-60-90 day plans, and buddy program guides so the agent becomes a personalized onboarding companion - not just a policy reference.
- **Grounding in employee feedback and FAQ patterns:** Add a SharePoint document where HR logs frequently asked questions and emerging policy gaps, so the agent can proactively surface "most asked this month" topics and pending policy clarifications.

[!INCLUDE [agent-template-extension-note](includes/agent-template-extension-note.md)]

## Limitations

The following limitations apply to this template:

- **Interacting with the agent:** Agents created with this template are designed to answer one question at a time. For best results, users shouldn't ask multiple or compound questions in a single prompt.
- **Handling sensitive information:** When you create agents with this template, it's your responsibility to ensure that any personal or sensitive information used in the agent is handled according to your organization's data privacy and data handling policies. The agent adds all provided input to its general knowledge, so don't provide information that shouldn't be used in AI-generated content. Always review outputs to make sure no confidential details are inappropriately revealed.
- **Incorrect or harmful responses:** Although agents based on this template are designed to prevent the output of incorrect and harmful content, these agents use generative AI technology, which can sometimes make mistakes. A disclaimer is included to remind users to verify accuracy before making decisions, especially financial decisions. Customers are responsible for conducting due diligence on AI-generated content. You can edit the disclaimer to align with your organization's policies, but we don't recommend removing it. For more information, review the [supplemental terms](https://www.microsoft.com/business-applications/legal/supp-powerplatform-preview/).
- **Agent output is a starting point, not final authority:** The guidance generated by the agent is based on the knowledge sources and rules you configure, plus general AI training. Agent output does not represent official company policy or the personal advice of Microsoft. Think of the agent as a smart assistant that gives users a strong starting point. It might not capture every nuance of the user's specific situation or nuances in your corporate policies. Always inform users of the potential for errors and need to verify official company policies.
- **Compliance with regulations and policies:** You must make sure that any content the agent helps produce still complies with all relevant laws and industry regulations in your region. For example, output regarding HR policies might need to meet local labor law standards depending on where employees are based. The agent won't know about specific local legal requirements unless those guidelines are part of its knowledge base. It's your responsibility to ensure output is legally compliant and adheres to your company's compliance and governance rules.

## Related content

- [Agent Builder in Microsoft 365 Copilot](agent-builder.md)
- [Build agents with Agent Builder](agent-builder-build-agents.md)
- [Publish and manage agents](agent-builder-share-manage-agents.md)
