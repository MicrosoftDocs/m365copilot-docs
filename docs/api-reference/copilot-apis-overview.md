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

Enterprise developers face a critical challenge today: how to leverage the power of AI while maintaining secure access to organizational knowledge without compromising compliance or governance. Traditional approaches force you to build complex AI systems from scratch and extract sensitive data into external sources. The Microsoft 365 Copilot APIs offer an alternative approach: access to production-ready AI capabilities that work directly with your Microsoft 365 data where it already lives.


The Copilot APIs enable you to securely access Microsoft 365 Copilot capabilities in your own applications and custom engine agents, while aligning with Microsoft 365’s compliance commitments. Whether you are building a [custom engine agent](../overview-custom-engine-agent.md) for Microsoft 365 Copilot with your own models or orchestrator, or building a conversational experience in your own applications, the Copilot APIs provide access to components that power Microsoft 365 Copilot experiences.


## Featured Copilot APIs

The Copilot APIs provide a comprehensive set of capabilities that enable developers to build AI-powered applications grounded in enterprise data. These APIs cover different development scenarios: 

| API | Use it to  | Example scenario |
| --- | ----------- | ---------------- |
| Retrieval API (coming soon to public preview) | Retrieve relevant information from Microsoft 365 content in a secure and compliant way | Connect your own AI models to Microsoft 365 content without data extraction. Build specialized assistants that respond based on your organization's up-to-date documentation, policies, and knowledge bases. These applications can provide contextually relevant information to employees across departments while respecting document access controls and sensitivity labels. |
| Chat API (coming soon to public preview) | Enable conversational experiences powered by Microsoft 365 Copilot in your custom applications | Integrate Microsoft 365 Copilot into your enterprise applications that can answer questions, perform tasks, and provide guidance based on Microsoft 365 data and user context. These interfaces can improve user productivity by bringing AI capabilities directly into the tools they use every day, from custom portals to mobile apps. |
| [Interaction Export API](/graph/api/aiinteractionhistory-getallenterpriseinteractions) | Enables compliance solutions to capture and archive user interactions with Copilot across Microsoft 365 applications | Develop systems that maintain comprehensive records of AI interactions, enable monitoring of AI usage, and ensure compliance with organizational policies and regulatory requirements. These solutions are particularly valuable for regulated industries where documenting and reviewing AI-assisted content generation is necessary. |
| [Meeting Insights API](/graph/api/onlinemeeting-list-aiinsights) | Extract AI generated meeting notes, action items and discussion topics for Teams meetings. | Create applications that automatically extract and organize action items, decisions, and summaries from Teams meetings. Link these with project management tools, CRM systems, or custom workflows. These systems can transform meetings from time spent to value created by capturing, organizing, and activating meeting outcomes automatically. |

## Key beneftis

The Copilot APIs provide the following essential benefits for your applications:

- **Secure grounding, governance and compliance**: Access Microsoft 365's knowledge index directly, with all existing permissions, sensitivity labels, compliance controls, audit, logging, monitoring, and policy enforcement automatically respected.
- **Production-ready AI**: Accelerate the development of your custom Retrieval Augmented Generation (RAG) pipelines and meeting transcription processing by using the same production-grade AI capabilities that power Microsoft 365 Copilot. Whether you develop your solutions using Azure AI Foundry, Microsoft Copilot Studio, or the Microsoft Agents SDK, the Copilot APIs are seamlessly integrated into these platforms.
- **Responsible AI**: Safety is provided when you’re using these Copilot and intelligent experiences, so you’re protected against harmful content.

## Get Started 

Start integrating and unlocking the full potential of the Copilot APIs in your applications and custom engine agents.

### Licensing requirements

The Copilot APIs require specific licensing for both access and underlying data: 

- **Microsoft 365 Copilot license**: Required for each user who will access Microsoft 365 Copilot functionality via these APIs. This license provides access to the AI capabilities that power the APIs. Support for users without a Microsoft 365 Copilot license is currently not available.
- **Microsoft 365 subscription**: An E3 or E5 subscription (or equivalent) is required as the foundation for Microsoft 365 Copilot. This subscription provides access to the Microsoft 365 services and data that Copilot builds upon.
- **API-specific add-ons**: Some advanced API capabilities may require additional licensing or quota allocations, especially for high-volume scenarios. Consult the [Microsoft 365 Copilot licensing documentation](/copilot/microsoft-365/microsoft-365-copilot-licensing) for specific requirements. 

### REST API integration

The Copilot APIs are available as standard REST APIs in the `https://graph.microsoft.com/copilot` endpoint in Microsoft Graph API. This integration makes the APIs accessible from any programming language or platform that supports HTTP requests. They use the same [authentication and authorization](/graph/auth/) process as other Microsoft Graph APIs.

## How Copilot APIs differ from Microsoft Graph APIs

While the Microsoft Graph APIs generally provide CRUD operations on Microsoft 365 data, the Copilot APIs deliver AI-powered capabilities built on that data. The Microsoft Graph APIs are used when you need data access and manipulation, whereas the Copilot APIs are used when you need AI reasoning over that data. This fundamental difference is reflected in the licensing model: the Microsoft Graph APIs are available under standard Microsoft 365 license terms, while the Copilot APIs require Microsoft 365 Copilot licenses. This licensing model delivers higher-value AI capabilities beyond standard data access.

## Related content

- [Try with Graph Explorer](https://developer.microsoft.com/graph/graph-explorer)
- [Find out how to get an auth token in your app. in your app](/graph/auth/auth-concepts)
- [Overview of the Microsoft 365 Copilot Retrieval API (preview)](retrieval-api-overview.md)
- [Microsoft 365 Copilot Interactions & Microsoft 365 Chat (Preview)](/microsoftteams/export-teams-content#microsoft-365-copilot-interactions--microsoft-365-chat-preview)
- [Get AI-generated meeting summaries with Meeting AI Insights API](/microsoftteams/platform/graph-api/meeting-transcripts/meeting-insights)
