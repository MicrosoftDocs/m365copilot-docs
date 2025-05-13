---
title: Microsoft 365 Copilot APIs Overview
description: "The Microsoft 365 Copilot APIs enable you to securely access Microsoft 365 Copilot capabilities in your own applications and custom engine agents, while aligning with Microsoft 365’s compliance commitments."
author: lramosvea
ms.author: lramosvea
ms.topic: conceptual
ms.date: 05/07/2025
ms.localizationpriority: medium
doc_type: conceptualPageType
---

# Microsoft 365 Copilot APIs Overview

Enterprise developers face a critical challenge today: how to leverage the power of AI while maintaining secure access to organizational knowledge without compromising compliance or governance. Traditional approaches force you to build complex AI systems from scratch and extract sensitive data into external sources. The Microsoft 365 Copilot APIs offer an alternative approach: access to production-ready AI capabilities that work directly with your Microsoft 365 data where it already lives


The Copilot APIs enable you to securely access Microsoft 365 Copilot capabilities in your own applications and custom engine agents, while aligning with Microsoft 365’s compliance commitments. Whether you are building a [custom engine agent](../overview-custom-engine-agent.md) for Microsoft 365 Copilot with your own models or orchestrator, or building a conversational experience in your own applications, the Copilot APIs provide access to components that power Microsoft 365 Copilot experiences.


## Key capabilities

The Copilot APIs provide you with the following essential capabilities:

- **Secure grounding:** Access Microsoft 365's knowledge index directly, with all existing permissions, sensitivity labels, and compliance controls automatically respected.
- **Governance and compliance:** Audit, logging, monitoring, and policy enforcement are respected.
- **Production-ready AI:** Accelerate the development of your custom Retrieval Augmented Generation (RAG) pipelines and meeting transcription processing by using the same production-grade AI capabilities that power Microsoft 365 Copilot.
- **User-centric integration:** Embed Microsoft Copilot capabilities in custom applications, workflows, and interfaces, making AI assistants available exactly where your users need them.
- **Responsible AI:** Safety is provided when you’re using these Copilot and intelligent experiences, so you’re protected against harmful content.

## Featured Copilot APIs


| API | Description | Example Scenario |
| --- | ----------- | ---------------- |
| [Retrieval API](copilotroot-retrieval.md)                                           | Offers a streamlined solution for Retrieval Augmented Generation (RAG) in a secure and compliant way. | Ground Large Language Model (LLM) responses in your organization's SharePoint documents and wikis, and Graph Connector data. |
| [Activity Export API](/graph/api/aiinteractionhistory-getallenterpriseinteractions) | Allows you to export Copilot interactions data which includes the user prompt to Copilot and the Copilot response back to the user. | Maintain records of AI interactions for regulated industries. |
| [Meeting Insights API](/graph/api/onlinemeeting-list-aiinsights) | Provides insights equivalent to the Intelligent Recap feature in the Teams client, including AI Notes, action items, and Topics. | Automatically capture action items and notes from sales calls. |


## How Copilot APIs differ from Microsoft Graph APIs

While the Microsoft Graph APIs generally provide CRUD operations on Microsoft 365 data, the Copilot APIs deliver AI-powered capabilities built on that data. The Microsoft Graph APIs are used when you need data access and manipulation, whereas the Copilot APIs are used when you need AI reasoning over that data. This fundamental difference is reflected in the licensing model: the Microsoft Graph APIs are available under standard Microsoft 365 license terms, while the Copilot APIs require Microsoft 365 Copilot licenses. This licensing model delivers higher-value AI capabilities beyond standard data access.

## Usage scenarios

With Microsoft 365 Copilot APIs, you can create powerful enterprise applications that combine the intelligence of AI with the security and familiarity of Microsoft 365. Here are some of the possibilities:

- **Custom knowledge applications:** Connect your own AI models to Microsoft 365 content without data extraction. Build specialized assistants that respond based on your organization's up-to-date documentation, policies, and knowledge bases. These applications can provide contextually relevant information to employees across departments while respecting document access controls and sensitivity labels.
- **Conversational interfaces for Line-of-Business applications:** Integrate Microsoft 365 Copilot into your enterprise applications that can answer questions, perform tasks, and provide guidance based on Microsoft 365 data and user context. These interfaces can improve user productivity by bringing AI capabilities directly into the tools they use every day, from custom portals to mobile apps.
- **Meeting intelligence systems:** Create applications that automatically extract and organize action items, decisions, and summaries from Teams meetings. Link these with project management tools, CRM systems, or custom workflows. These systems can transform meetings from time spent to value created by capturing, organizing, and activating meeting outcomes automatically.
- **Enterprise compliance solutions:** Develop systems that maintain comprehensive records of AI interactions, enable monitoring of AI usage, and ensure compliance with organizational policies and regulatory requirements. These solutions are particularly valuable for regulated industries where documenting and reviewing AI-assisted content generation is necessary.


## Accessing the Copilot APIs

The Copilot APIs are accessible through the following integration paths to accommodate different development environments and preferences.

### REST API integration

The Copilot APIs are available as standard REST APIs in the `https://graph.microsoft.com/copilot` endpoint in Microsoft Graph API. This integration makes the APIs accessible from any programming language or platform that supports HTTP requests. They use the same [authentication and authorization](/graph/auth/) process as other Microsoft Graph APIs.

### SDK and libraries integration

The Microsoft 365 Agents SDK provides a dedicated module for the Copilot APIs, featuring support for C#, Python, and TypeScript in the `Microsoft.Agents.M365Copilot` namespace. This SDK simplifies the development of enterprise-grade, scalable, multi-channel agents. With this SDK, you can enable your agents to interact seamlessly with the Copilot APIs, benefiting from built-in features such as authentication and paging to promote efficiency and reliability. For more information about the Copilot APIs client libraries, see [Use client libraries](../sdks/api-libraries.md).

## Eligible licenses

The Copilot APIs require specific licensing for both access and underlying data:

- **Microsoft 365 Copilot license:** Required for each user who will access Microsoft 365 Copilot functionality via these APIs. This license provides access to the AI capabilities that power the APIs. Support for users without a Microsoft 365 Copilot license is currently not available.
- **Microsoft 365 subscription:** An E3 or E5 subscription (or equivalent) is required as the foundation for Microsoft 365 Copilot. This subscription provides access to the Microsoft 365 services and data that Copilot builds upon.

## Security and compliance 

The Copilot APIs inherit the robust security and compliance infrastructure of the Microsoft 365 platform, ensuring that your AI-enhanced applications maintain enterprise standards for data protection. 

### Security framework

The security model for the Copilot APIs is built on these key pillars:
- **Identity-based access:** All API requests are authenticated using Microsoft identity platform tokens, ensuring strong identity verification.
- **Delegated permissions model:** APIs operate in the security context of the authenticated user, inheriting their access limitations and permissions across Microsoft 365.
- **Conditional Access integration:** Support for Conditional Access policies allows organizations to enforce additional security requirements for API access based on user, device, network, and risk signals.
- **Sensitivity label enforcement:** All Copilot APIs respect sensitivity labels applied to content, ensuring that protected information maintains its protection even when accessed through APIs.
- **Tenant boundaries:** API access is strictly limited within tenant boundaries, preventing cross-tenant data exposure.

**Key Security Features:**

- Delegated permissions model using OAuth 2.0
- Tenant Admin Consent Options for controlling API access
- Integration with Microsoft Purview sensitivity labels
- Support for Microsoft Entra Conditional Access policies
- Comprehensive audit logging for security monitoring

The permissions required for each API are scoped to the specific capabilities needed, following the principle of least privilege. For example, the Meeting Insights API requires permissions to access meeting content, while the Retrieval API requires permissions to access the target SharePoint sites and content.

This security framework ensures that Copilot APIs maintain the same high standards for data protection, access control, and compliance as the rest of the Microsoft 365 ecosystem. Thus you can be confident that your AI applications meet enterprise security requirements.

### Compliance capabilities

Microsoft 365 Copilot APIs maintain compliance with regulatory requirements through:
- **Comprehensive audit logging:** All API operations are logged in the Microsoft Purview audit log, providing visibility into who accessed what information and when.
- **eDiscovery support:** Content retrieved or generated through Microsoft 365 Copilot APIs is subject to eDiscovery and legal hold requirements.
- **Data residency controls:** APIs respect configured data residence settings, maintaining geographical boundaries for sensitive information.
- **Information barriers:** Copilot APIs honor information barrier policies, preventing unauthorized information sharing between segregated groups.
- **Retention policy enforcement:** Content access respects configured retention policies, ensuring compliance with data lifecycle requirements.

## Error handling

The Copilot APIs follow standard HTTP status codes and provide detailed error information in responses, enabling your application to respond appropriately to different failure scenarios.

### Common error scenarios

Your application should be prepared to handle different types of errors that the Copilot APIs may return:

- **Authentication errors (401):** Token missing, expired, or invalid.
- **Permission issues (403):** User lacks necessary permissions or license.
- **Resource limitations (429):** Rate limits or quota exceeded.
- **Service availability (503/504):** Temporary service unavailability.
- **Request validation (400):** Malformed request or invalid parameters.

## Related content

- [Try with Graph Explorer](https://developer.microsoft.com/graph/graph-explorer)
- [Find out how to get an auth token in your app. in your app](/graph/auth/auth-concepts)
- [Overview of the Microsoft 365 Copilot Retrieval API (preview)](retrieval-api-overview.md)
- [Microsoft 365 Copilot Interactions & Microsoft 365 Chat (Preview)](/microsoftteams/export-teams-content#microsoft-365-copilot-interactions--microsoft-365-chat-preview)
- [Get meeting AI summaries with Meeting AI Insights API](/microsoftteams/platform/graph-api/meeting-transcripts/meeting-insights)
