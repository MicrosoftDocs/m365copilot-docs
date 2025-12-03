---
title: Create a Request for Proposal generator agent from a template
description: Learn how to use the RFP Generator template in Microsoft 365 Copilot to create a declarative agent..
author: kmkoenen
ms.author: v-koenenkaty
ms.topic: article
ms.localizationpriority: medium
ms.date: 12/01/2025
---

# Use the Request for Proposal Generator template to build an agent

You can use the Request for Proposal Generator (RFP Generator) template in Microsoft 365 Copilot to build an agent that helps create comprehensive, tailored responses to Requests for Proposals (RFPs).

Agents built with the RFP Generator template are designed to streamline the RFP response process by drawing on your organization’s existing proposal content and templates. They ensure that first drafts of proposals are consistent with company standards and closely aligned to each prospective client’s needs.

The RFP Generator automates much of the initial writing and pulling in relevant information from past successful proposals. This automation significantly reduces the time required to produce a strong draft. The result is a more efficient proposal workflow: faster turnaround on RFPs, more accurate and compelling content in every response, and ultimately a higher win rate for new deals.

## Prerequisites

Before you begin working with the RFP Generator template, make sure you have:

- A working knowledge of how to [build agents with Microsoft 365 Copilot](agent-builder-build-agents.md).
- An understanding of how to [write effective instructions for declarative agents](declarative-agent-instructions.md).

## Capabilities

RFP Generator agents are especially useful in sales and proposal development scenarios. The following table highlights common use cases and how the agent adds value in each situation.

| Scenario | Description |
|---|---|
| **Drafting new RFP responses from templates** | Kick-starting an RFP response using your standard proposal template and boilerplate content. For example, when a new RFP arrives, the agent can fill out sections of your proposal document (executive summary, company background, product descriptions) using preapproved text. This provides the sales team with a solid first draft that they can then customize for the specific opportunity. It ensures no important sections are left blank and that the proposal starts off following the correct format. |
| **Reusing content from previous proposals** | Using answers and sections from past successful proposals to answer similar questions in a new RFP. If a question in a new RFP is about a topic you’ve answered before (say, a question about implementation methodology or service level agreements), the agent can retrieve the relevant content from your library of past proposals and adapt it to the current context. This saves time and brings forward lessons learned and polished text from earlier efforts, rather than reinventing the wheel each time. |
| **Customizing responses based on client needs** | Tailoring proposal content to speak directly to the specific client’s industry, challenges, or requirements. The agent can take a generic answer (for instance, a description of your cloud service architecture). and tweak the language to align with the client’s context. Examples of these tweaks include things like emphasizing healthcare data security if the client is a hospital, or emphasizing scalability and cost if the client is a startup. This results in a more personalized proposal that resonates with the client, showing that you understand their unique priorities. |
| **Accelerating internal review workflows** | Streamlining the process of getting input and approval from different stakeholders. The agent can highlight areas where specific team input is needed and route those issues to the appropriate team for review. For example, it can flag that legal should review the terms section, or that engineering should validate a technical description. By structuring the draft clearly the agent makes it easier for each reviewer to do their part. Some organizations might instruct the agent to include placeholders like "`<insert pricing>`" in pricing sections if human review is required. This organized first pass means less back-and-forth emails and clarifications during review, as everyone knows where their attention is needed. |
| **Enhancing proposal quality with prefilled content** | Improving the overall quality of the proposal by using the agent to prefill content with high-quality material. For instance, the agent can automatically insert the latest customer success stories or relevant case studies from your library whenever it sees an opportunity to strengthen a response. It might also populate tables, such as feature comparison matrices, with up-to-date data from your product specs. When you seed the proposal with rich, relevant content from the get-go, it helps the agent avoid generic or shallow responses. The sales team then only needs to refine this content, rather than create it from scratch, resulting in a more polished final proposal. |

## Extension opportunities

You can further enhance the RFP Generator agent by integrating additional data and functionality. The following examples list some ways to extend the agent’s capabilities beyond its default setup:

- **Upload example files for context:** Users can attach RFP documents or appendices during interactions. The agent can reference these files to provide more targeted responses—for example, locating and answering a specific question directly from the uploaded RFP. This ensures outputs are tailored to the actual document. (See Microsoft’s guidance on file upload.)
- **Connect to past proposal repositories (SharePoint):** Linking a SharePoint folder of previous RFP responses allows the agent to reuse proven content. If a new RFP asks about a familiar topic—like sustainability—the agent can retrieve and adapt a strong answer from past proposals, saving time and maintaining consistency. (Refer to Copilot Studio documentation for setup.)
- **Integrate corporate tools and data via Copilot Connectors:** When you connect the agent to internal systems like CRM, product databases, or content libraries you allow it to pull in client-specific data, current pricing, or approved language. This ensures responses are accurate, personalized, and compliant. Some integrations might require additional licensing or IT support—check Microsoft’s connector documentation for details.

> [!NOTE]
> Adding connections typically requires collaboration with the service owners and IT admins. Some functionality might be available only for users in tenants with metered usage or users with Microsoft 365 Copilot licenses.

## Limitations

While the RFP Generator agent is a powerful tool, it’s important to understand the template's boundaries and apply the template responsibly:

- **One interaction at a time:** The agent performs best when handling a single prompt or task. Avoid combining multiple requests in one query—for example, asking it to draft an answer, identify missing information, and summarize the RFP all at once. Breaking multiple questions into separate steps ensures more accurate and focused responses.
- **Handling sensitive information:** RFPs often contain confidential company data—such as pricing, strategy, or client references. Any content you input or generate must comply with your organization’s data governance policies. The agent might draw from past proposals or templates, so it’s your responsibility to ensure no sensitive or client-specific information is inadvertently reused. Always review outputs for compliance and anonymize where necessary.
- **Accuracy and reliability:** Although the agent uses templates and past content to generate responses, it might occasionally produce outdated, imprecise, or contextually mismatched information. Treat all outputs as drafts requiring human review. For example, if the agent suggests a compliance detail or technical specification, verify it against your latest documentation. Microsoft includes a disclaimer to remind users to verify the accuracy of generated content. Make sure to include the standard disclaimer unless your organization has an approved alternative.
- **Compliance with RFP and legal requirements:** Each RFP has its own rules—such as word limits, formatting, and mandatory sections. The agent doesn't enforce these rules unless explicitly instructed. Similarly, it doesn't apply legal or regulatory standards unless they’re built into its knowledge base. Users must guide the agent and ensure final proposals meet all submission and legal requirements.

## Related content

- [Overview of Agent Builder in Microsoft 365 Copilot](agent-builder.md)
- [Build agents with Microsoft 365 Copilot](agent-builder-build-agents.md)
- [Publish and manage agents](agent-builder-share-manage-agents.md)
