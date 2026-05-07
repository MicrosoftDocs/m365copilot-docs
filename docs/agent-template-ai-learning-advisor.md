---
title: Use the AI Learning Advisor template to build an agent
description: Learn about the AI Learning Advisor template for Microsoft 365 Copilot.
author: krmarko
ms.author: krmarko
ms.reviewer: kjette
ms.date: 05/06/2026
ms.topic: conceptual
---

# Use the AI Learning Advisor template to build an agent

You can use the AI Learning Advisor template in Microsoft 365 Copilot to build an agent that teaches, troubleshoots, and guides users across Microsoft's AI and low-code stack - including M365 Copilot Agent Builder, Copilot Studio, and Power Platform (Power Apps, Power Automate, AI Builder, Dataverse). The agent explains concepts in plain language, builds personalized learning plans, recommends the right tool for any scenario, and provides step-by-step build guides.

The AI Learning Advisor uses a friendly, encouraging, and professional tone, leading with the answer and adapting its depth to beginner, maker, or pro-developer audiences.

## Prerequisites

Before you work with the template, make sure that you have:

- A working knowledge of how to [build agents with Microsoft 365 Copilot](agent-builder-build-agents.md).
- An understanding of how to [write effective instructions for declarative agents](declarative-agent-instructions).

## Capabilities

Agents built on the AI Learning Advisor template can offer:

- **Personalized learning plans** with phased curricula - from first hands-on experience to advanced topics - tailored to the user's role, goals, and skill level, with direct links to Microsoft Learn modules and Copilot Developer Camp exercises.
- **Tool recommendation and guidance** that helps users decide whether to build in Agent Builder, Copilot Studio, Power Apps, Power Automate, or AI Builder, with two to three reasons and step-by-step build instructions.
- **Troubleshooting assistance** for errors and misbehaving agents, topics, or flows in Copilot Studio and Power Platform, using a structured Cause → Fix → Verify approach.
- **Concept explanations** that break down topics like agentic AI, multi-agent orchestration, MCP (Model Context Protocol), and other AI concepts at the appropriate audience level, from plain-language analogies to technical precision.
- **What's New updates** that surface the latest features, announcements, and capabilities across Copilot Studio and M365 Copilot, grounded in Microsoft Learn and official release documentation.
- **Web search grounded in Microsoft Learn and Copilot Developer Camp** to ensure all guidance, links, and recommendations reference authoritative, up-to-date documentation.

## Use cases

AI Learning Advisor agents are useful for the following tasks.

| Task | Description |
|---|---|
| Create a Learning Plan | Builds a personalized, phased learning plan to take users from their current skill level to building their first Copilot Studio agent or beyond. |
| Troubleshoot | Helps diagnose and fix issues such as topics not triggering, broken connectors, or unexpected agent behavior in Copilot Studio and Power Platform. |
| What To Use When | Explains the differences between Agent Builder and Copilot Studio and recommends the right tool based on the user's scenario and requirements. |
| Key Concepts | Breaks down AI and platform concepts - such as MCP, agentic AI, and declarative agents - in plain language calibrated to the user's experience level. |
| What's New | Surfaces the latest features and updates across Copilot Studio and M365 Copilot, highlighting what to try first based on the user's profile. |
| Agentic AI Decoded | Explains the differences between agentic AI, autonomous agents, and multi-agent orchestration with clear definitions and practical context. |

## Extension opportunities

The current implementation is intentionally scoped to public Microsoft Learn content. You can extend the agent in several directions by connecting to additional resources via Microsoft 365 Copilot connectors or API plugins.

Suggestions for such connections include:

- **Adding internal documentation as a knowledge source:** Attach a SharePoint site or OneDrive folder containing your organization's runbooks, golden paths, or platform standards so answers blend Microsoft guidance with internal practice.
- **Layering Copilot connectors for internal knowledge:** Connect a knowledge base such as Confluence or ServiceNow Knowledge via a Copilot connector to surface internal articles alongside Microsoft Learn results.
- **Broadening the web search scope:** Add complementary domains (for example, techcommunity.microsoft.com or devblogs.microsoft.com) to bring in community insights and product-team blog content.
- **Pairing with Microsoft Graph capabilities:** Enable People or Email capabilities so the agent can suggest internal experts or relevant threads when documentation alone doesn't resolve the issue.

[!INCLUDE [agent-template-extension-note](includes/agent-template-extension-note.md)]

## Limitations

The following limitations apply to this template:

- **Interacting with the agent:** Agents created with this template are designed to answer one question at a time. For best results, users shouldn't ask multiple or compound questions in a single prompt.
- **Handling sensitive information:** When you create agents with this template, it's your responsibility to ensure that any personal or sensitive information used in the agent is handled according to your organization's data privacy and data handling policies. The agent adds all provided input to its general knowledge, so don't provide information that shouldn't be used in AI-generated content. Always review outputs to make sure no confidential details are inappropriately revealed.
- **Incorrect or harmful responses:** Although agents based on this template are designed to prevent the output of incorrect and harmful content, these agents use generative AI technology, which can sometimes make mistakes. A disclaimer is included to remind users to verify accuracy before making decisions, especially financial decisions. Customers are responsible for conducting due diligence on AI-generated content. You can edit the disclaimer to align with your organization's policies, but we don't recommend removing it. For more information, review the [supplemental terms](https://www.microsoft.com/business-applications/legal/supp-powerplatform-preview/).
- **Agent output is a draft, not final authority:** The briefings and other materials generated by the agent are based on the knowledge sources and rules you configure, plus general AI training. They do not represent official company policy or the personal advice of Microsoft. Think of the agent as a smart assistant that gives you a strong starting draft. It might not capture every nuance of the user's specific situation or nuances in your corporate policies. Always have a human review and, if necessary, edit the content. For instance, tone might need slight adjusting for a particular audience, or there might be context only a human communicator knows to add.
- **Compliance with regulations and policies:** Users must make sure that any content the agent helps produce still complies with all relevant laws and industry regulations in your region. For example, draft public messaging might need to meet standards for financial disclosures, marketing communications, or labor laws (for HR announcements). The agent won't know about specific local legal requirements unless those guidelines are part of its knowledge base. It's your responsibility to ensure final communications are legally compliant and adhere to your company's compliance and governance rules.

## Related content

- [Agent Builder in Microsoft 365 Copilot](agent-builder.md)
- [Build agents with Agent Builder](agent-builder-build-agents.md)
- [Publish and manage agents](agent-builder-share-manage-agents.md)
