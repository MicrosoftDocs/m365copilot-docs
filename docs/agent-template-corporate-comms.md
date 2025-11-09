---
title: Create a Corporate Communications agent from a template
description: Learn how to use the Corporate Communications Crafter template in the Copilot Studio lite experience to create a declarative agent.
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: conceptual
ms.localizationpriority: medium
ms.date: 11/09/2025
---

# Use the Corporate Comms Crafter template to build an agent

Use the **Corporate Comms Crafter** template (in the Microsoft 365 Copilot Studio.

This agent streamlines the process of writing internal and external messages—such as company announcements, newsletters, executive updates, and press releases—while ensuring that all content adheres to your organization’s tone, visual identity, and strategic communication principles. It is especially useful for roles like internal communications leads, brand/marketing specialists, and executive assistants, helping them create effective messages quickly and consistently across the company.

## Prerequisites

Before you begin working with the Corporate Comms Crafter template, make sure you have:

- A working knowledge of how to [build agents with the Copilot Studio lite experience](../copilot-studio-lite-build.md).
- An understanding of how to [write effective instructions for declarative agents](../declarative-agent-instructions.md).

## Capabilities

Corporate Comms Crafter agents are useful for a variety of corporate communication scenarios. The table below shows some key use cases and how the agent adds value in each scenario:

| Scenario | Description |
|---|---|
| **Internal announcements** | Crafting clear and engaging company-wide announcements or news updates for employees. The agent helps ensure these internal communications are informative, aligned with company tone, and easy to understand. Example uses include announcing policy changes, new initiatives, or organizational updates. |
| **Executive messaging** | Assisting in drafting high-stakes communications from leadership (CEO, directors, etc.). The agent helps produce polished emails or memos for executives, maintaining a professional and authoritative tone. This includes things like CEO announcements, board updates, or leadership blog posts, ensuring they remain on-message and brand-aligned. |
| **Crisis communication** | Preparing timely and appropriate communications during urgent situations (such as service outages, PR crises, or emergencies). The agent can quickly formulate a first draft of a crisis email or statement that is empathetic, transparent about issues, and consistent with the company’s crisis communication guidelines—helping communication teams respond faster under pressure. |
| **Brand and marketing content** | Creating external-facing content that must adhere to brand standards, such as press releases, marketing campaign copy, or blog articles. The agent ensures that all such content reflects the company’s voice and messaging strategy. It balances creativity with compliance, generating drafts that marketing teams can refine knowing the basics (tone, style, key points) are already aligned with brand guidelines. |
| **Change management communications** | Supporting communications around organizational changes or major initiatives. For example, drafting messages about restructurings, mergers, or new strategy rollouts in a way that is transparent and reassuring. The agent emphasizes empathy and clarity, helping managers convey changes along with next steps and available support, which can improve understanding and acceptance among employees. |
| **Quarterly business updates** | Summarizing business performance and milestones for periodic internal updates, such as quarterly or monthly newsletters. The agent can compile a narrative from provided data (financial results, major wins, project highlights) and frame it in an employee-friendly newsletter format, including an optional message from an executive (like a CFO’s note). This ensures regular updates are comprehensive yet consistent in tone and style. |

## Extension Opportunities

You can enhance the functionality of your Corporate Comms Crafter agent by connecting it to additional resources or services (using Microsoft 365 Copilot connectors, Power Platform connectors, or relevant APIs). This can expand the agent’s knowledge and ensure it has access to the latest company-specific information. Consider these ideas:

- **Incorporate brand guidelines and assets:** Connect a SharePoint site or upload documents containing your company’s brand guidelines, tone of voice documents, and visual identity assets. By grounding the agent with this content, it will have direct reference to the approved standards and can enforce them even more accurately in every response.
- **Leverage internal communication archives:** Integrate the agent with internal knowledge sources like your organization’s Teams channels or Outlook emails (via Microsoft Graph connectors). This allows the agent to draw on real examples of past communications or current project discussions. For instance, it could use details from recent team updates or pull context from a previous company announcement to ensure consistency and relevance.
- **Use additional connectors or plugins:** Depending on your systems, you might connect the agent to third-party services or databases. For example, plugging into an HR system or corporate intranet could let the agent fetch up-to-date facts (like employee stats for an announcement). Microsoft 365 and Power Platform connectors provide many options to link databases, compliance tools, or analytics sources that can enrich the agent’s responses.

> [!NOTE]
> Adding connections typically requires collaboration with the service owners and IT admins. Some functionality might be available only for users in tenants with metered usage or users with Microsoft 365 Copilot licenses.

## Limitations

When using the Corporate Comms Crafter template, keep in mind the following limitations and responsibilities:

- **One prompt at a time:** Agents built from this template are designed to address one request at a time. Users should avoid asking multiple unrelated questions in a single prompt, as this can confuse the agent. Instead, ask questions or give instructions one at a time and allow the agent to respond before moving to the next.
- **Handling sensitive information:** If your communications involve personal data or sensitive corporate information, you as the user are responsible for ensuring compliance with your organization’s privacy and data handling policies. The agent will treat all input it’s given generatively, so avoid providing information that shouldn’t be used in AI-generated content. Always review outputs to make sure no confidential details are inappropriately revealed.
- **Incorrect or harmful responses:** Although agents based on this template are designed to prevent the output of incorrect and harmful content, these agents use generative AI technology, which can sometimes make mistakes. A disclaimer is included to remind users to verify accuracy before making decisions, especially financial decisions. Customers are responsible for conducting due diligence on AI-generated content. You can edit the disclaimer to align with your organization's policies, but we don't recommend removing it. For more information, review the [supplemental terms](https://www.microsoft.com/business-applications/legal/supp-powerplatform-preview/).
- **Agent output is a draft, not final authority:** The communications generated by the agent are based on the knowledge sources and rules you configure, plus general AI training. They do **not** represent official company policy or the personal advice of Microsoft. Think of the agent as a smart assistant that gives you a strong starting draft. It might not capture every nuance of your specific situation or corporate nuance. Always have a human review and, if necessary, edit the content. For instance, tone might need slight adjusting for a particular audience, or there may be context only a human communicator knows to add.
- **Compliance with regulations and policies:** Ensure that any content the agent helps produce still complies with all relevant laws and industry regulations in your region. For example, communications may need to meet standards for financial disclosures, marketing communications, or labor laws (for HR announcements). The agent will not inherently know about specific local legal requirements unless those guidelines are part of its knowledge base. It’s your responsibility to ensure final communications are legally compliant and adhere to your company’s compliance and governance rules.

## Related content

- [Overview of Copilot Studio in Microsoft 365 Copilot](../copilot-studio-lite.md)
- [Build agents with Copilot Studio](../copilot-studio-lite-build.md)
- [Publish and manage agents](../copilot-studio-lite-share-manage-agent.md)