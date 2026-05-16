---
title: Extend Microsoft 365 Copilot
description: Extend, enrich, and customize Microsoft 365 Copilot with Copilot connectors and agents.
author: jessicaaawu
ms.author: wujessica
ms.topic: overview
ms.localizationpriority: medium
ms.date: 05/13/2026
ms.custom: [copilot-learning-hub]
---

# Microsoft 365 Copilot extensibility overview

Microsoft 365 Copilot is an AI-powered productivity tool that integrates with Microsoft 365 apps to help users with business tasks in the flow of their work. With Copilot Chat, users can query data, gain insights, and streamline workflows in real time. You can extend Copilot to meet the needs of your users by integrating organizational knowledge and adding skills and workflows that are tailored to your business processes. Extending Copilot makes tasks like summarizing, content generation, and data retrieval more efficient and contextually relevant.

You can extend Copilot in several ways:

- Build [agents](#extend-copilot-with-agents) — powerful AI assistants that retrieve real-time insights and act on behalf of users—to tailor Copilot for automating specialized workflows and performing tasks.

- Use [Microsoft 365 Copilot connectors](#enhance-knowledge-in-copilot-with-connectors) to bring organizational data into Microsoft 365 Copilot, enabling Copilot to access and reason over a broader set of enterprise information.

- Use the [Microsoft Work IQ API](#microsoft-work-iq-api-preview) to build agentic and AI-powered applications that securely reason over Microsoft 365 work context.

- Use [Microsoft 365 Copilot APIs](#microsoft-365-copilot-apis) to programmatically access Copilot's capabilities in your custom applications and agents.

## Extend Copilot with agents

Agents extend the built-in capabilities of Copilot with knowledge, skills, and automated workflows to address your unique business needs.

### What are agents?

[Agents](agents-overview.md) for Microsoft 365 Copilot are specialized, AI-powered assistants designed to handle a host of tasks within an organization. By automating workflows and business processes, they streamline day-to-day operations and handle repetitive tasks to free up resources. These agents can securely retrieve and summarize information from Microsoft 365 and other enterprise data sources to deliver timely insights wherever needed.

Agents can take real-time actions—such as updating databases or triggering workflows—directly within the Microsoft 365 environment. Customizable to fit any industry or organizational need, agents for Copilot provide integrated solutions that adapt to your business's specific domain.

### Prebuilt agents you can integrate

A wide range of agents built by Microsoft and Microsoft partners are available to support multiple business functions. These agents provide ready-to-use solutions for common tasks like employee onboarding, IT helpdesk support, sales enablement, and customer service.

For example, the new [Sales Agent for Copilot](https://www.microsoft.com/microsoft-365/blog/2025/03/05/new-sales-agents-accessible-in-microsoft-365-copilot-help-teams-close-more-deals-faster/?msockid=3be55ff297446b3b1fdd4a4e93446d12) can automate workflows like turning your contacts into Sales Leads in either Dynamics or Salesforce.

You can deploy these agents as-is or further customize them by incorporating your organization's knowledge and business logic. You can browse [prebuilt agents in Microsoft 365 Copilot Chat](https://m365.cloud.microsoft/m365apps/f3a6e67f-850d-4dd9-960a-04c6638ded36/app:co:copilotplugins?source=copilotChat&fromCode=pwav2&redirectId=26FCE8716E9549689003C3D9B0893F92&auth=2).

### Build your own agent

If a prebuilt agent doesn't meet your needs, you can build your own agent [from a template](agent-builder-templates.md) or design something from scratch specifically for your workflows and business processes. Whether you need a highly specialized AI assistant or an advanced automation solution, you can develop agents using low-code or pro-code tools that match your preferred development environment and deployment needs. For more information, see [Agents overview](agents-overview.md).

The following table provides some examples of the types of agents you can develop for your organization.

| **Agent**                          | **Scenario** |
|-----------------------------------|--------------|
| Image creation agent for marketing campaign | If you need images for your marketing campaign, you can create an agent that develops marketing assets tailored to your campaign and respects your brand guidelines. |
| Product inventory agent for e-commerce | If your business operates in the realm of commerce, you can build an internal inventory agent by connecting it to your product database. For example, a user can ask Microsoft 365 Copilot to verify the availability of specific items, streamlining your internal processes. |
| Legal research AI | If your organization works in the legal domain, you can build a legal research agent that uses a custom-trained large language model (LLM) for case law analysis and integrates external legal databases through API plugins. |

## Enhance knowledge in Copilot with connectors

[Copilot connectors](overview-copilot-connector.md) bring external line-of-business data into Microsoft 365 Copilot so your users can search, reason over, and act on more of your enterprise content. The platform supports two connector models:

- **Synced connectors** ingest and index external content into Microsoft Graph.
- **Federated connectors** retrieve content in real time by using Model Context Protocol (MCP) without indexing data into Microsoft Graph.

Both connector types power Microsoft 365 Copilot and other Microsoft 365 intelligent experiences, such as Microsoft Search.

By using Copilot connectors, you can:

- **Enrich Copilot** with data from your enterprise systems such as ERP, CRM, line-of-business databases, and knowledge management systems.
- **Provide more comprehensive insights** by allowing Copilot to summarize, analyze, and respond to data from multiple sources.
- **Use the intelligence of Copilot** in tools like Microsoft Search and ContextIQ to enable seamless integration within your existing infrastructure.

### Use prebuilt Copilot connectors

Many [prebuilt Copilot connectors](/microsoftsearch/connectors-gallery) are available to configure within your tenant. These connectors enable Copilot to integrate with common enterprise applications—such as CRM systems, file storage solutions, and project management tools—without requiring any custom development.

### Build a custom Copilot connector

If an existing connector doesn't meet your needs, you can build a custom Copilot connector tailored to your specific business requirements. Custom connectors allow you to bring in proprietary data, connect to specialist systems, or integrate unique workflows into Copilot. For more information, see [Build Copilot connectors for Microsoft 365 Copilot](/graph/connecting-external-content-build-quickstart?context=/microsoft-365/copilot/extensibility/context).

## Microsoft Work IQ API (preview)

The [Microsoft Work IQ API](work-iq-api-overview.md) enables you to build agentic and AI-powered applications that securely reason over Microsoft 365 data while preserving existing permissions, compliance, and governance controls.

Work IQ is the intelligence layer behind Microsoft 365 Copilot and agents. It combines Microsoft 365 work data - emails, meetings, documents, and chats - with context such as relationships, preferences, and work patterns to assemble context, ground responses, select skills, and invoke tools. By calling the Work IQ API, your applications can tap into this same intelligence without building custom indexing, vector stores, or compliance pipelines.

All Work IQ requests run in the context of the signed-in user, respect Microsoft 365 permissions and sensitivity labels, and remain within the Microsoft 365 trust boundary, so your applications can reason over work data without exporting or duplicating content.

You can use Work IQ to reason over:

- Email messages
- Meetings and calendar data
- Documents in OneDrive and SharePoint
- Microsoft Teams messages
- People and organizational context
- Enterprise search results

Work IQ provides multiple protocols so you can pick the one that best fits your application or agent architecture:

- **Agent-to-Agent (A2A)** - Use for structured agent-to-agent communication and delegation, where agents operate autonomously and exchange structured tasks. Ideal for multi-agent systems.

- **Model Context Protocol (MCP)** - Use for tool-based context access from LLM-based clients such as Copilot or AI coding assistants in IDEs and CLIs.

For more information, see the [Work IQ API overview](work-iq-api-overview.md).

## Microsoft 365 Copilot APIs

[Microsoft 365 Copilot APIs](copilot-apis-overview.md) enable you to securely integrate Microsoft 365 Copilot features into your applications and custom engine agents, all while adhering to Microsoft 365's robust compliance, security, and responsible AI standards.

Whether you're developing a custom engine agent for Microsoft 365 Copilot with your own models or orchestrators or creating conversational experiences within your own apps, these APIs provide access to the core components that power Microsoft 365 Copilot. They allow you to deliver intelligent, enterprise-grade experiences with secure data handling, strong governance, and privacy by design.

You can integrate the following Copilot APIs:

- **[Copilot Retrieval API](api/ai-services/retrieval/overview.md)** - Retrieve relevant information from Microsoft 365's semantic and lexical indexes. Whether you're building agents with Copilot's orchestration or your own models and orchestrators, this API lets you ground your solution in enterprise data—from SharePoint to external systems—via [Copilot connectors](/microsoftsearch/connectors-overview). It respects user and tenant-level governance, ensuring secure, compliant access to organizational knowledge.

- **[Copilot Search API (preview)](api/ai-services/search/overview.md)** - Perform hybrid search (semantic and lexical) across OneDrive for work or school content using natural language queries with contextual understanding and intelligent results. This API enables applications to discover relevant documents and files using natural language descriptions rather than exact keyword matches, creating intuitive search experiences that understand user intent and surface the most relevant content.

- **[Copilot Chat API (preview)](api/ai-services/chat/overview.md)** - Send prompts directly to Copilot and receive responses so you can embed Copilot-powered conversation experiences within your own applications. This API brings Copilot to your users wherever they work.

- **[Copilot Interaction Export API](api/ai-services/interaction-export/resources/aiinteractionhistory.md)** - Export user interactions with Copilot, including prompts and responses. This API enables you to build data governance and protection solutions, and analyze Copilot usage in your application to optimize adoption.

- **[Copilot AI Meeting Insights API](api/ai-services/meeting-insights/resources/callaiinsight.md)** - Access insights from the Microsoft Teams Intelligent Recap feature—including AI-generated notes, action items, and @mentions. This API is ideal for building apps that extract and apply insights from meetings to drive follow-ups and decisions, such as in HR interviews, project management, sales, or customer engagement workflows.

## Related content

- [Copilot extensibility planning guide](planning-guide.md)
- [Agents overview](agents-overview.md)
- [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md)
- [Microsoft 365 Copilot APIs overview](copilot-apis-overview.md)
