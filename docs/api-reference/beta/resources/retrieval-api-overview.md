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

The Microsoft 365 Copilot APIs help you enhance your custom engine agents with Microsoft 365 Copilot capabilities by providing access to components that power Copilot experiences. The Microsoft 365 Copilot retrieval API allows you to ground your generative AI solutions with your Microsoft 365 and non-Microsoft knowledge. The API returns relevant text chunks from the hybrid index that powers Microsoft 365 Copilot.

The Microsoft 365 Copilot retrieval API offers a streamlined solution for Retrieval Augmented Generation (RAG) without the need to replicate, index, and chunk your data and keep it secure in a separate index. The API understands the user's context and intent and performs query transformations to yield the most relevant results, which is more difficult to achieve with lexical or even basic RAG from alternate sources.

## Why is Retrieval-Augmented Generation (RAG) important?

RAG is essential when you're building generative AI solutions and want to use Microsoft 365 knowledge. When you integrate RAG, your solutions can provide more accurate, contextually relevant responses grounded in the vast repository of organizational data within Microsoft 365. The Copilot retrieval API allows for the extraction of up-to-date, secure, and precise information from Microsoft 365. RAG ensures that the generative AI models generate plausible text and are informed by the latest and most relevant data, which enhances the reliability and usefulness of the model.

## Why use the retrieval API?

The retrieval API offers a secure and compliant way to retrieve relevant text chunks from all your data sources, without the need to egress data, break permissions, or compromise on security and compliance.

Imagine a consulting firm that specializes in providing tailored solutions for their clients, with a significant portion of their work focusing on data stored in SharePoint. The firm is currently developing a customer engine agent to assist their consultants in preparing for important client meetings. This engine must access and retrieve accurate and up-to-date information from SharePoint, ensuring consultants are well-prepared with the latest insights. However, the firm works with two major clients who are direct competitors in the market. This situation creates a critical need for maintaining rigorous security and compliance standards, ensuring that the documents and data of one client are never accessible to the other.

**Manage compliance and safety risks**

By using the Microsoft 365 Copilot retrieval API, the consulting firm can guarantee that only authorized information is accessed and viewed. This API makes use of Microsoft 365's built-in security and compliance features, ensuring that data source permissions and compliance settings are respected. By indexing data in place, it prevents data leaks and ensures that sensitive information from one client is never accessible to another. This is essential for maintaining strict security and compliance standards.

**Solve for relevancy and freshness**

The consulting firm can rely on the Microsoft 365 Copilot retrieval API to provide top-quality on the Microsoft 365 data with accurate and up-to-date information. This API ensures that the data retrieved is always fresh and relevant, eliminating the need to maintain separate, costly data pipelines. This guarantees that consultants are well-prepared with the latest insights for their client meetings.

**Lower cost of ownership and development effort**

Using the Microsoft 365 Copilot retrieval API, the firm can eliminate the need to build a secure data export and indexing pipeline, which would otherwise incur significant costs. This API includes all necessary capabilities such as: search provider management, crawlers, data connectors, data storage, content parsers, indexing, and security. By using these built-in features, the firm can avoid these expenses and complexities, ensuring stringent access controls and compliance with Microsoft 365.



## Use the Microsoft 365 Copilot Retrieval API

### Retrieve data from your Microsoft 365 sources

The Microsoft 365 Copilot Retrieval API currently allows you to retrieve data from the following data sources:
- SharePoint Online
- Graph Connectors

Support for additional Microsoft 365 data sources will come in the future.

### Support for natural language queries

The Microsoft 365 Copilot Retrieval API supports natural language queries and leverages the Microsoft 365 Copilot stack to retrieve relevant grounding context from the Microsoft 365 hybrid index.

### Narrow retrieval scope

The Retrieval API allows you to scope your retrieval using KQL, so that you can retrieve from the most important content for your use case. With KQL, you can filter by URLs, date ranges, file types, specific metadata proprties, and more.

### Known limitations

The following are the current throttling and other limits for the Microsoft 365 Copilot Retrieval API:
- The **queryString** request parameter has a limit of 1,500 characters
- The **maximumNumberOfResults** request parameter has a maximum value of 10
- Request limit of up to 200 requests per user per hour
- Non-textual content, including tables, images, and charts, is not supported.
- Results from files with docx, pptx, and pdf extensions that are larger than 512 MB are not supported. Results from files with any other extension that are larger than 150 MB are not supported.
- 

### Licensing

The Microsoft 365 Retrieval API is available at no addtional cost to users with a Microsoft 365 Copilot license. Support for users without a Microsoft 365 Copilot license will come in the future.

### Next steps

- [Use the retrieval API to ground your generative AI solution with SharePoint and Graph Connectors content](../api/copilotroot-retrieval.md)
