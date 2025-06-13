---
title: Microsoft 365 Copilot APIs Overview
description: "Use the Copilot APIs to securely access Microsoft 365 Copilot capabilities in your own applications and custom engine agents, while aligning with the compliance standards built in to Microsoft 365."
author: lramosvea
ms.author: lramosvea
ms.topic: conceptual
ms.date: 06/09/2025
ms.localizationpriority: medium
doc_type: conceptualPageType
---

# Microsoft 365 Copilot APIs overview

The Microsoft 365 Copilot APIs enable you to securely access Microsoft 365 Copilot capabilities in your own applications and custom engine agents, while aligning with compliance standards of Microsoft 365. Whether you're building a [custom engine agent](overview-custom-engine-agent.md) for Microsoft 365 Copilot with your own models or orchestrator or a conversational experience in your own applications, the Copilot APIs provide access to components that power Microsoft 365 Copilot experiences.

Enterprise developers face a critical challenge today: how to harness the power of AI while maintaining secure access to organizational knowledge, without compromising compliance or governance. Traditional approaches force you to build complex AI systems from scratch and extract sensitive data into external sources. The Microsoft 365 Copilot APIs offer access to production-ready AI capabilities that work directly with your Microsoft 365 data.


## Copilot API capabilities

The Copilot APIs provide a comprehensive set of capabilities that enable you to build AI-powered applications grounded in enterprise data. 

The following table lists the APIs and describes their capabilities and scenarios.

| API | Use it to  | Example scenario |
| --- | ----------- | ---------------- |
| [Retrieval API (preview)](/microsoft-365-copilot/extensibility/api-reference/retrieval-api-overview) | Retrieve relevant information from Microsoft 365 content in a secure and compliant way. | Connect your own AI models to Microsoft 365 content without data extraction. Build specialized assistants that respond based on your organization's up-to-date documentation, policies, and knowledge bases. These applications can provide contextually relevant information to employees across departments while respecting document access controls and sensitivity labels. |
| [Interaction Export API](/microsoftteams/export-teams-content#microsoft-365-copilot-interactions--microsoft-365-chat-preview) | Enable compliance solutions to capture and archive user interactions with Copilot across Microsoft 365 applications. | Develop systems that maintain comprehensive records of AI interactions, enable monitoring of AI usage, and ensure compliance with organizational policies and regulatory requirements. These solutions are valuable for regulated industries where documenting and reviewing AI-assisted content generation is necessary. |
| [Change Notifications API (preview)](/graph/aiinteraction-changenotifications-overview) | Subscribe to change notifications for Copilot interactions across Microsoft 365. | Build applications that monitor and log AI interactions in real time, enabling proactive compliance checks, anomaly detection, and auditing. |
| [Meeting Insights API (preview)](/microsoftteams/platform/graph-api/meeting-transcripts/meeting-insights) | Extract AI-generated meeting notes, action items, and discussion topics for Teams meetings. | Create applications that automatically extract and organize action items, decisions, and summaries from Teams meetings. Link these with project management tools, CRM systems, or custom workflows. These systems can transform meetings from time spent to value created by capturing, organizing, and activating meeting outcomes automatically. |
| Chat API (available for public preview soon) | Enable conversational experiences powered by Microsoft 365 Copilot in your custom applications. | Integrate Microsoft 365 Copilot into your enterprise applications that can answer questions, perform tasks, and provide guidance based on Microsoft 365 data and user context. These interfaces can improve user productivity by bringing AI capabilities directly into the tools they use every day, from custom portals to mobile apps. |

## Key benefits

The Copilot APIs provide the following benefits for your applications:

- **Secure grounding, governance and compliance** - Access Microsoft 365's knowledge index directly. All existing permissions, sensitivity labels, compliance controls, audit, logging, monitoring, and policy enforcement are automatically respected.
- **Production-ready AI** - Accelerate the development of your custom Retrieval Augmented Generation (RAG) pipelines and meeting transcription processing by using the same production-grade AI capabilities that power Microsoft 365 Copilot. Whether you develop your solutions using Azure AI Foundry, Microsoft Copilot Studio, or the Microsoft Agents SDK, the Copilot APIs are seamlessly integrated into the platform.
- **Responsible AI** - When you use these Copilot and intelligent experiences, you're protected against harmful content via RAI validation checks.

## Requirements

To integrate and unlock the full potential of the Copilot APIs in your applications and custom engine agents, you need access to the following:

- Microsoft 365 Copilot license - Required for each user who accesses Microsoft 365 Copilot functionality via these APIs. This license provides access to the AI capabilities that power the APIs.

- Microsoft 365 subscription: An E3 or E5 subscription (or equivalent) is the foundation for Microsoft 365 Copilot. This subscription provides access to the Microsoft 365 services and data that Copilot builds upon.

## REST API integration

The Copilot APIs are available as standard REST APIs under the Microsoft Graph namespace (`graph.microsoft.com/v1.0/copilot` and `graph.microsoft.com/beta/copilot`). This integration makes the APIs accessible from any programming language or platform that supports HTTP requests. The APIs use the same [authentication and authorization](/graph/auth/) process that other Microsoft Graph APIs use. All Copilot APIs respect your organization's existing policies, including identity access, conditional access, sensitivity labels, and permission trimming, by default.

## Copilot APIs vs. Microsoft Graph APIs

Microsoft Graph APIs generally provide CRUD operations on Microsoft 365 data. The Copilot APIs deliver AI-powered capabilities built on Microsoft 365 data. Use Microsoft Graph APIs when you need to manipulate and access data; use the Copilot APIs when you need AI to reason over that data. This fundamental difference is reflected in the licensing model: the Microsoft Graph APIs are available under standard Microsoft 365 license terms; the Copilot APIs require a Microsoft 365 Copilot license. This licensing model delivers higher-value AI capabilities beyond standard data access.

## Related content

- [Try with Graph Explorer](https://developer.microsoft.com/graph/graph-explorer)
- [Find out how to get an auth token in your app](/graph/auth/auth-concepts)
- [Get all enterprise interactions](/graph/api/aiinteractionhistory-getallenterpriseinteractions)
- [Call AI insight](/graph/api/resources/callaiinsight)
- [Custom engine agents for Microsoft 365](/microsoft-365-copilot/extensibility/overview-custom-engine-agent)
- [Licensing and cost considerations for Copilot extensibility options](/microsoft-365-copilot/extensibility/cost-considerations)
