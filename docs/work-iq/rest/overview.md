---
title: Work IQ REST API Overview
description: Use the Work IQ REST API to programmatically start and continue conversations with Microsoft 365 Copilot.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.localizationpriority: medium
ms.date: 05/15/2026
ms.topic: overview
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Overview of the Work IQ REST API

The Work IQ REST API enables you to programmatically engage in multiturn conversations with Microsoft 365 Copilot while using enterprise search grounding and web search grounding.

## Why use the REST API?

The REST API provides a secure and compliant way to integrate Microsoft 365 Copilot into your custom generative AI solutions. You don't need to egress data, break permissions, or compromise on security and compliance. Instead of building and maintaining separate vector indexes, large-language models, and orchestration layers, custom applications can hand off prompts to the REST API and receive fully synthesized answers grounded in web and work data.

### Manage compliance and safety risks

The REST API uses the built-in security and compliance features in Microsoft 365 to ensure that data source permissions and compliance settings are preserved. As a result, using the REST API prevents data leaks and ensures that sensitive information from one client is never accessible to another, which is essential for maintaining strict security and compliance standards. Within an organization, the permissions model in Microsoft 365 ensures that individuals can only get results from the content they're allowed to access.

### Solve for relevancy and freshness

Because the REST API uses enterprise search grounding, its answers are always fresh and relevant. It eliminates the need to maintain separate, costly data pipelines or orchestrators that don't fully understand Microsoft 365 context and signals.

### Lower cost of ownership and development effort

The REST API eliminates the need to maintain a custom orchestration layer or build a secure data export and indexing pipeline that can incur significant costs for organizations.

## REST API capabilities

The REST API uses the following capabilities to answer natural language prompts:

- Enterprise search grounding
- Web search grounding

The API supports natural language prompts and uses the Microsoft 365 Copilot stack to return relevant answers, all within the Microsoft 365 trust boundary. In addition, the REST API allows you to provide your OneDrive and SharePoint files as context and toggle web search grounding. These options give you more control over how the REST API addresses your prompts.

## Known limitations

The following limitations apply to the REST API:

- The REST API doesn't support action or content generation skills like creating files, sending emails, or scheduling meetings.
- The REST API only responds with textual responses.
- The REST API doesn't support tools such as code interpreter and graphic art.
- The REST API doesn't support long running tasks. Chat messages that include long running tasks are prone to gateway timeouts.
- The REST API uses both enterprise search grounding and web search grounding by default.
- Toggling off web search grounding is a single-turn action. You must toggle off web search grounding for each chat message where it isn't required.
- The REST API is subject to all limitations of the [Microsoft 365 Copilot semantic index](/microsoftsearch/semantic-index-for-copilot).
- The REST API returns AI-generated responses. AI-generated content might be inaccurate, so verify it before use.
- Graph explorer doesn't support streamed conversations with the REST API.

## Next step

> [!div class="nextstepaction"]
> [Chat with Work IQ](copilotroot-post-conversations.md)
