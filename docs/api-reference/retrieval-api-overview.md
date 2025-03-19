---
title: Microsoft 365 Copilot Retrieval API Overview (Preview)
description: "Use the Microsoft 365 Copilot retrieval API to ground data for your generative AI solution. Extract relevant content from SharePoint and Microsoft Graph connectors, while complying with the access controls defined for the tenant."
author: lramosvea
ms.author: lramosvea
ms.localizationpriority: medium
ms.date: 03/11/2025
ms.topic: overview
---
# Overview of the Microsoft 365 Copilot retrieval API (preview)

The Microsoft 365 Copilot APIs provide access to components that power Copilot experiences, unlocking the ability to enhance your custom engine agents with Microsoft 365 Copilot capabilities. The Microsoft 365 Copilot retrieval API allows you to ground your generative AI solutions with your Microsoft 365 and non-Microsoft knowledge, and returns relevant text chunks from the hybrid index that powers Microsoft 365 Copilot.

The retrieval API offers a streamlined solution for Retrieval Augmented Generation (RAG) without the need to replicate, index, and chunk your data and keep it secure in a separate index. The API understands the user's context and intent and performs query transformations to yield the most relevant results, which is more difficult to achieve with lexical or even basic RAG from alternate sources.

RAG is essential when you're building generative AI solutions and want to use Microsoft 365 knowledge. When you integrate RAG, your solutions can provide more accurate, contextually relevant responses grounded in the vast repository of organizational data within Microsoft 365. The  retrieval API allows for the extraction of up-to-date, secure, and precise information from Microsoft 365. RAG ensures that the generative AI models generate plausible text and are informed by the latest and most relevant data, which enhances the reliability and usefulness of the model.

## Why use the retrieval API?

The retrieval API offers a secure and compliant way to retrieve relevant text chunks from all your data sources, without the need to egress data, break permissions, or compromise on security and compliance.

Imagine a consulting firm that specializes in providing tailored solutions for their clients, with a significant portion of their work focused on data stored in SharePoint. The firm is developing a customer engine agent to assist their consultants in preparing for important client meetings. This agent must access and retrieve accurate and up-to-date information from SharePoint. Because the firm works with two major clients who are direct competitors in the market, they have a critical need to maintain rigorous security and compliance standards to ensure that one client's documents and data are never accessible to the other. The retrieval API helps the firm manage compliance and safety risks and ensure the relevance and freshness of the data, and simplifies development effort to reduce costs.

### Manage compliance and safety risks

The retrieval API uses the built-in security and compliance features in Microsoft 365 to ensure that to data source permissions and compliance settings are applied. By indexing data in place, it prevents data leaks and ensures that sensitive information from one client is never accessible to another, which is essential for maintaining strict security and compliance standards. By using the retrieval API, the consulting firm can guarantee that only authorized information is accessed and viewed.

### Solve for relevancy and freshness

The Microsoft 365 Copilot retrieval API provides access to the most accurate and up-to-date information to ensure that the data retrieved is fresh and relevant and eliminate the need to maintain separate, costly data pipelines. This helps the consulting firm to guarantee that consultants are prepared with the latest insights for their client meetings.

### Lower cost of ownership and development effort

Using the Microsoft 365 Copilot retrieval API, the firm can The retrieval API eliminates the need to build a secure data export and indexing pipeline that can incur significant costs for organizations. The API includes all the required capabilities, including:

- Search provider management
- Crawlers
- Data connectors
- Data storage
- Content parsers
- Indexing
- Security

By using these built-in features, organizations can avoid expenses and complexities and maintain stringent access controls and compliance with Microsoft 365.

## Retrieval API capabilities

The retrieval API currently allows you to retrieve data from the following data sources:

- SharePoint Online
- Microsoft Graph connectors

The API supports natural language queries and uses the Microsoft 365 Copilot stack to retrieve relevant grounding context from the Microsoft 365 hybrid index. You can use the API to scope your retrieval using KQL to retrieve from the most important content for your use case. With KQL, you can filter by URLs, date ranges, file types, specific metadata properties, and more.

## Known limitations

The following are the current throttling and other limitations to the retrieval API:

- The **queryString** request parameter has a limit of 1,500 characters.
- The **maximumNumberOfResults** request parameter has a maximum value of 10.
- Up to 200 requests per user per hour are supported.
- Non-textual content, including tables, images, and charts, is not supported.
- Results from files with .docx, .pptx, and .pdf extensions that are larger than 512 MB are not supported. Results from files with any other extension that are larger than 150 MB are not supported.

## Licensing

The retrieval API is available at no additional cost to users with a Microsoft 365 Copilot license. Support for users without a Microsoft 365 Copilot license is currently not available.

## Next steps

- [Use the retrieval API](../api/copilotroot-retrieval.md)
