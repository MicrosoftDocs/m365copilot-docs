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

The Microsoft 365 Copilot APIs enable you to securely access Microsoft 365 Copilot capabilities in your own applications and custom engine agents, while aligning with Microsoft 365’s compliance commitments.

Whether you're building a [custom engine agent](../overview-custom-engine-agent.md) for Microsoft 365 Copilot with your own models or orchestrator, or building a conversational experience in your own applications, the Copilot APIs provide access to components that power Microsoft 365 Copilot experiences.

## Key capabilities

The Copilot APIs provide you with the following essential capabilities:

- **Secure grounding**: You can retrieve extracts from the Microsoft 365 semantic and lexical indexes in a secure and compliant way. With these APIs, you can ground your intelligent experiences on enterprise data such as Microsoft 365 data or external systems data using Copilot Connectors. You can do retrieval in a way that respects user and tenant level information production controls, governance, security, and information barriers.

- **Governance and compliance**: Audit, logging, monitoring, and policy enforcement are respected.

- **Responsible AI**: Safety is provided when you're using these Copilot and intelligent experiences, so you're protected against harmful content.

## Featured Copilot APIs

| API                                                                                 | Description |
|-------------------------------------------------------------------------------------|-------------|
| [Retrieval API](copilotroot-retrieval.md)                                           | This API offers a streamlined solution for Retrieval Augmented Generation (RAG) in a secure and compliant way.|
| [Activity Export API](/graph/api/aiinteractionhistory-getallenterpriseinteractions) | This API allows you to export Copilot interactions data which includes the user prompt to Copilot and the Copilot response back to the user. |
| [AI Meeting Insights API](/graph/api/onlinemeeting-list-aiinsights)                 | This API provides insights at par with the Intelligent Recap feature in the Teams client, including AI Notes, action items, and Topics. |

## How Copilot APIs differ from Microsoft Graph APIs

While the Microsoft Graph APIs are primarily intended to help you search, enumerate, and update Microsoft 365 data, the Copilot APIs are designed to enhance your custom engine agents with Microsoft 365 Copilot capabilities by providing access to components from the Copilot stack. Notably, the Microsoft Graph APIs are available under standard Microsoft 365 license terms, whereas using the Copilot APIs require an eligible Microsoft 365 Copilot license.

## Accessing the Copilot APIs

The Microsoft 365 Copilot APIs are accessible in the Microsoft Graph under the `https://graph.microsoft.com/copilot` endpoint to build your agents and applications. They use the same [authentication and authorization](/graph/auth/) process as other Microsoft Graph APIs.

The Microsoft 365 Agents SDK provides a dedicated module for the Copilot APIs, featuring support for  C#, Python, and TypeScript through the Microsoft.Agents.M365Copilot namespace. This SDK simplifies the development of enterprise-grade, scalable, multi-channel agents. With this SDK, you can enable your agents to interact seamlessly with the Copilot APIs, benefiting from built-in features such as authentication and paging to promote both efficiency and reliability.

## Eligible licenses

The Copilot APIs are available at no extra cost to users with a Microsoft 365 Copilot license. Support for users without a Microsoft 365 Copilot license is currently not available.

## Using the Copilot APIs in Custom Engine Agents

[Custom engine agents](../overview-custom-engine-agent.md) for Microsoft 365 Copilot enable full customization using your own orchestration or AI models and services. Code-first custom engine agents can be built using the Microsoft 365 Agents SDK which enables publishing agents to Microsoft 365 Copilot, Teams, and other third party services including custom applications and websites. The Microsoft 365 Agents SDK includes libraries for using the Microsoft Copilot APIs, so your custom engine agents can access the Microsoft 365 Copilot capabilities.

## Related content

- [Try with Graph Explorer](https://developer.microsoft.com/graph/graph-explorer)
- [Find out how to get an auth token in your app. in your app](/graph/auth/auth-concepts)
- [Overview of the Microsoft 365 Copilot Retrieval API (preview)](retrieval-api-overview.md)
- [Microsoft 365 Copilot Interactions & Microsoft 365 Chat (Preview)](/microsoftteams/export-teams-content#microsoft-365-copilot-interactions--microsoft-365-chat-preview)
- [Fetch Meeting Transcripts & Recordings - Teams](/microsoftteams/platform/graph-api/meeting-transcripts/overview-transcripts)
