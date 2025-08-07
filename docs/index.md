---
title: Extend Microsoft 365 Copilot
description: Extend, enrich, and customize Microsoft 365 Copilot with Copilot connectors and agents.
author: jessicaaawu
ms.author: wujessica
ms.topic: overview
ms.localizationpriority: medium
ms.date: 05/27/2025
ms.custom: [copilot-learning-hub]
---

# Microsoft 365 Copilot extensibility overview

Microsoft 365 Copilot is an AI-powered productivity tool that integrates with Microsoft 365 apps to help users with business tasks in the flow of their work. With Copilot Chat, users can query data, gain insights, and streamline workflows in real time. You can extend Copilot to meet the needs of your users by integrating organizational knowledge and adding skills and workflows that are tailored to your business processes. This makes tasks like summarizing, content generation, and data retrieval more efficient and contextually relevant.

You can extend Copilot in several ways:

- Use [Microsoft 365 Copilot connectors](#enhance-knowledge-in-copilot-with-connectors) to ingest organizational data, enabling Copilot to access and reason over a broader set of enterprise information.

- Build [agents](#extend-copilot-with-agents) — powerful AI assistants that retrieve real-time insights and act on behalf of users—to tailor Copilot for automating specialized workflows and performing tasks.

- Use [Microsoft 365 Copilot APIs](#microsoft-365-copilot-apis) to programmatically access Copilot's capabilities in your custom applications and agents.

## Enhance knowledge in Copilot with connectors

[Copilot connectors](overview-copilot-connector.md) allow you to ingest and index data from multiple sources to add knowledge to Copilot. The data that Copilot accesses powers its intelligence. By using Copilot connectors, you can bring additional enterprise data into Microsoft Graph.

This enables Copilot to integrate and reason over a wider variety of data sources to deliver more contextually relevant responses, tailored to the needs and data access permissions of the user. Access to data remains secure and compliant: users can only retrieve information they're authorized to view to ensure that sensitive data remains protected.

By using Copilot connectors, you can:

- **Enrich Copilot** with data from your enterprise systems such as ERP, CRM, line-of-business databases, and knowledge management systems.
- **Provide more comprehensive insights** by allowing Copilot to summarize, analyze, and respond to data from multiple sources.
- **Use the intelligence of Copilot** in tools like Microsoft Search and ContextIQ to enable seamless integration within your existing infrastructure.

### Use prebuilt Copilot connectors

A number of [prebuilt Copilot connectors](/microsoftsearch/connectors-gallery) are available to configure within your tenant. These connectors enable Copilot to integrate with common enterprise applications—such as CRM systems, file storage solutions, and project management tools—without requiring any custom development.

### Build a custom Copilot connector

If an existing connector doesn't meet your needs, you can build a custom Copilot connector tailored to your specific business requirements. This allows you to bring in proprietary data, connect to specialist systems, or integrate unique workflows into Copilot. For more information, see [Build Copilot connectors for Microsoft 365 Copilot](/graph/connecting-external-content-build-quickstart?context=/microsoft-365-copilot/extensibility/context).

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

If a prebuilt agent doesn't meet your needs, you can build your own agent designed specifically for your workflows and business processes. Whether you need a highly specialized AI assistant or an advanced automation solution, you can develop agents using low-code or pro-code tools that match your preferred development environment and deployment needs. For more information, see [Agents overview](agents-overview.md).

The following table provides some examples of the types of agents you can develop for your organization.

| **Agent**                          | **Scenario** |
|-----------------------------------|--------------|
| Image creation agent for marketing campaign | If you need images for your marketing campaign, you can create an agent that develops marketing assets tailored to your campaign and respects your brand guidelines. |
| Product inventory agent for e-commerce | If your business operates in the realm of commerce, you can build an internal inventory agent by connecting it to your product database. For example, a user can ask Microsoft 365 Copilot to verify the availability of specific items, streamlining your internal processes. |
| Legal research AI | If your organization works in the legal domain, you can build a legal research agent that uses a custom-trained LLM for case law analysis and integrates external legal databases through API plugins. |

## Microsoft 365 Copilot APIs

[Microsoft 365 Copilot APIs](copilot-apis-overview.md) enable you to securely integrate Microsoft 365 Copilot features into your applications and custom engine agents, all while adhering to Microsoft 365's robust compliance, security, and responsible AI standards.

Whether you're developing a custom engine agent for Microsoft 365 Copilot with your own models or orchestrators or creating conversational experiences within your own apps, these APIs provide access to the core components that power Microsoft 365 Copilot. They allow you to deliver intelligent, enterprise-grade experiences with secure data handling, strong governance, and privacy by design.

You can integrate the following Copilot APIs:

- **Copilot Retrieval API** - Retrieve relevant information from Microsoft 365's semantic and lexical indexes. Whether you're building agents with Copilot's orchestration or your own models and orchestrators, this API lets you ground your solution in enterprise data—from SharePoint to external systems—via [Copilot connectors](/microsoftsearch/connectors-overview). It respects user and tenant-level governance, ensuring secure, compliant access to organizational knowledge.

    > [!NOTE]
    > The Copilot Retrieval API is currently in prerelease status and will be available for public preview soon.

- **Copilot Chat API** - Send prompts directly to Copilot and receive responses so you can embed Copilot-powered conversation experiences within your own applications. This API brings Copilot to your users wherever they work.

    > [!NOTE]
    > The Copilot Chat API is currently in prerelease status and will be available for public preview soon.

- **[Copilot Interaction Export API](/microsoftteams/export-teams-content)** - Export user interactions with Copilot, including prompts and responses. This API enables you to build data governance and protection solutions, as well as analyze Copilot usage in your application to optimize adoption.

- **[Copilot AI Meeting Insights API](/microsoftteams/platform/graph-api/meeting-transcripts/meeting-insights)** - Access insights from the Microsoft Teams Intelligent Recap feature—including AI-generated notes, action items, and @mentions. This API is ideal for building apps that extract and apply insights from meetings to drive follow-ups and decisions, such as in HR interviews, project management, sales, or customer engagement workflows.

## Related content

- [Copilot extensibility planning guide](planning-guide.md)
- [Agents overview](agents-overview.md)
- [Microsoft 365 Copilot connectors overview](overview-copilot-connector.md)
- [Microsoft 365 Copilot APIs overview](copilot-apis-overview.md)
