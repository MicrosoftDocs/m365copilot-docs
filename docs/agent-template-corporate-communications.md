---
title: Create a Corporate Communications agent from a template
description: Learn how to use the Corporate Communications Crafter template in the Copilot Studio lite experience to create a declarative agent.
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 11/20/2025
---

# Use the Corporate Communications Crafter template to build an agent

You can use the **Corporate Communications Crafter** template, available in Microsoft 365 Copilot when you use the Agent Builder feature, to build agents that help create consistent, on-brand corporate communications. These agents assist with drafting internal and external messages—such as announcements, newsletters, executive updates, and press releases—while ensuring alignment with your organization’s tone and communication standards.

## Prerequisites

Before you start, make sure you have:

- A working knowledge of how to [build agents with the Copilot Studio lite experience](copilot-studio-lite-build.md).
- An understanding of how to [write effective instructions for declarative agents](declarative-agent-instructions.md).

## Capabilities

Agents based on the Corporate Communications Crafter template can:

- Draft internal announcements that are clear, engaging, and aligned with company tone.
- Create polished executive messaging for leadership updates, board communications, and blog posts.
- Prepare crisis communications that are timely, empathetic, and consistent with organizational guidelines.
- Generate external-facing content such as press releases and marketing copy that adheres to brand standards.
- Support change management communications by crafting transparent and reassuring messages.
- Summarize business performance for newsletters or quarterly updates, including optional executive notes.

## Use cases

Corporate Communications Crafter agents are helpful in scenarios such as:

| **Scenario** | **Description** |
|--------------|-----------------|
| **Internal announcements** | Crafting clear and engaging company-wide announcements or news updates for employees. This agent helps ensure that these internal communications are informative, aligned with company tone, and easy to understand. Example uses include announcing policy changes, new initiatives, or organizational updates. |
| **Executive messaging** | Drafting high-stakes communications from leadership (CEO, directors, and so on). The agent helps produce polished emails and memos for executives, helping to mainatain a professional and authoritative tone for things like:<ul><li>CEO announcements</li><li>Board updates</li><li>Leadership blog posts</li></ul> In this way, the template helps ensure that they remain on-message and are aligned with the organization's brand. |
| **Crisis communication** | Preparing timely and appropriate communications during urgent situations (such as service outages, PR crises, or emergencies). The agent can quickly formulate a first draft of an email to address a crisis or statements that are empathetic and transparent about issues, while making sure that it's consistent with the company’s crisis communication guidelines, which help communication teams respond more quickly under pressure. |
| **Brand and marketing content** | Creating external-facing content that must adhere to brand standards, such as press releases, marketing campaign copy, or blog articles. The agent helps ensure that all such content reflects the company’s voice and messaging strategy. It balances creativity with compliance, generating drafts that marketing teams can refine knowing the basics (tone, style, key points) are already aligned with brand guidelines. |
| **Change management communications** | Supporting communications around organizational changes or major initiatives. For example, drafting messages about restructurings, mergers, or new strategy rollouts in a way that's transparent and reassuring. The agent emphasizes empathy and clarity, helping managers convey changes along with next steps and available support, which can improve understanding and acceptance among employees. |
| **Quarterly business updates** | Summarizing business performance and milestones for periodic internal updates, such as quarterly or monthly newsletters. The agent can compile a narrative from provided data (financial results, major wins, project highlights) and frame it in an employee-friendly newsletter format, including an optional message from an executive (like a CFO’s note). This ensures regular updates are comprehensive yet consistent in tone and style. |

## Extension opportunities

You can enhance your Corporate Communications Crafter agent by connecting it to additional resources, for example:

- **Brand guidelines and assets:** Link to a SharePoint site or upload documents containing tone of voice and visual identity standards.
- **Internal communication archives:** Integrate with Teams channels or Outlook emails to provide context from past announcements.
- **Additional connectors or APIs:** Connect to HR systems or intranet portals to include accurate organizational data in communications.

> [!NOTE]
> Adding connections may require collaboration with IT admins. Some features might be available only for users with Microsoft 365 Copilot licenses.

## Limitations

Keep these considerations in mind:
- **One prompt at a time:** Agents built from this template are designed to address one request at a time. Users should avoid asking multiple questions in a single prompt. Asking multiple questions in a single prompt can confuse the agent. Instead, ask questions or give instructions one at a time and allow the agent to respond before moving to the next.
- **Handling sensitive information:** If the communications a user is creating include personal data or sensitive corporate information, the user is responsible for ensuring compliance with their organization’s privacy and data handling policies. The agent adds all provided input to its general knowledge, so don't provide information that shouldn’t be used in AI-generated content. Always review outputs to make sure no confidential details are inappropriately revealed.
- **Incorrect or harmful responses:** Although agents based on this template are designed to prevent the output of incorrect and harmful content, these agents use generative AI technology, which can sometimes make mistakes. A disclaimer is included to remind users to verify accuracy before making decisions, especially financial decisions. Customers are responsible for conducting due diligence on AI-generated content. You can edit the disclaimer to align with your organization's policies, but we don't recommend removing it. For more information, review the [supplemental terms](https://www.microsoft.com/business-applications/legal/supp-powerplatform-preview/).
- **Agent output is a draft, not final authority:** The communications generated by the agent are based on the knowledge sources and rules you configure, plus general AI training. They do **not** represent official company policy or the personal advice of Microsoft. Think of the agent as a smart assistant that gives you a strong starting draft. It might not capture every nuance of your specific situation or corporate nuance. Always have a human review and, if necessary, edit the content. For instance, tone might need slight adjusting for a particular audience, or there might be context only a human communicator knows to add.
- **Compliance with regulations and policies:** Users must make sure that any content the agent helps produce still complies with all relevant laws and industry regulations in your region. For example, communications might need to meet standards for financial disclosures, marketing communications, or labor laws (for HR announcements). The agent won't  know about specific local legal requirements unless those guidelines are part of its knowledge base. It’s your responsibility to ensure final communications are legally compliant and adhere to your company’s compliance and governance rules.


## Related content

- [Overview of Copilot Studio in Microsoft 365 Copilot](copilot-studio-lite.md)
- [Build agents with Copilot Studio](copilot-studio-lite-build.md)