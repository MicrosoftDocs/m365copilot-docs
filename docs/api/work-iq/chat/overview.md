---
title: Work IQ Chat API Overview (Preview)
description: Use the Work IQ Chat API to programmatically start and continue conversations with Microsoft 365 Copilot.
author: marina-hayrapetyan
ms.author: mhayrapetyan
ms.localizationpriority: medium
ms.date: 05/15/2026
ms.topic: overview
---

<!-- cSpell:ignore hayrapetyan mhayrapetyan -->

# Overview of the Work IQ Chat API (preview)

The Work IQ Chat API enables you to programmatically engage in multiturn conversations with Microsoft 365 Copilot while using enterprise search grounding and web search grounding.

## Why use the Chat API?

The Chat API provides a secure and compliant way to integrate Microsoft 365 Copilot into your custom generative AI solutions. You don't need to egress data, break permissions, or compromise on security and compliance. Instead of building and maintaining separate vector indexes, large-language models, and orchestration layers, custom applications can hand off prompts to the Chat API and receive fully synthesized answers grounded in web and work data.

### Manage compliance and safety risks

The Chat API uses the built-in security and compliance features in Microsoft 365 to ensure that data source permissions and compliance settings are preserved. As a result, using the Chat API prevents data leaks and ensures that sensitive information from one client is never accessible to another, which is essential for maintaining strict security and compliance standards. Within an organization, the permissions model in Microsoft 365 ensures that individuals can only get results from the content they're allowed to access.

### Solve for relevancy and freshness

Because the Chat API uses enterprise search grounding, its answers are always fresh and relevant. It eliminates the need to maintain separate, costly data pipelines or orchestrators that don't fully understand Microsoft 365 context and signals.

### Lower cost of ownership and development effort

The Chat API eliminates the need to maintain a custom orchestration layer or build a secure data export and indexing pipeline that can incur significant costs for organizations.

## Chat API capabilities

The Chat API uses the following capabilities to answer natural language prompts:

- Enterprise search grounding
- Web search grounding

The API supports natural language prompts and uses the Microsoft 365 Copilot stack to return relevant answers, all within the Microsoft 365 trust boundary. In addition, the Chat API allows you to provide your OneDrive and SharePoint files as context and toggle web search grounding. These options give you more control over how the Chat API addresses your prompts.

## Licensing

Users with a Microsoft 365 Copilot add-on license can use the Chat API at no extra cost. Support for users without a Microsoft 365 Copilot add-on license isn't currently available.

By accessing or using the Microsoft 365 Copilot Chat API, you agree to the [Microsoft 365 Copilot APIs Terms of Use (preview)](/legal/m365-copilot-apis/terms-of-use?context=/microsoft-365/copilot/extensibility/context).

## Known limitations

The following limitations apply to the Chat API:

- The Chat API doesn't support action or content generation skills like creating files, sending emails, or scheduling meetings.
- The Chat API only responds with textual responses.
- The Chat API doesn't support tools such as code interpreter and graphic art.
- The Chat API doesn't support long running tasks. Chat messages that include long running tasks are prone to gateway timeouts.
- The Chat API uses both enterprise search grounding and web search grounding by default.
- Toggling off web search grounding is a single-turn action. You must toggle off web search grounding for each chat message where it isn't required.
- The Chat API is subject to all limitations of the [Microsoft 365 Copilot semantic index](/microsoftsearch/semantic-index-for-copilot).
- The Chat API returns AI-generated responses. AI-generated content might be inaccurate, so verify it before use.
- Graph explorer doesn't support streamed conversations with the Chat API.

## Next step

> [!div class="nextstepaction"]
> [Chat with Microsoft 365 Copilot](copilotroot-post-conversations.md)
