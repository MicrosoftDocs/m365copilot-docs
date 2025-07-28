---
title: Microsoft 365 Copilot Search API Overview (Preview)
description: "Use the Microsoft 365 Copilot Search API to perform semantic search across OneDrive content using natural language queries with contextual understanding and intelligent results."
author: swapnilsapar
ms.author: swapnilsapar
ms.localizationpriority: medium
ms.date: 7/28/2025
ms.topic: conceptual
---

# Overview of the Microsoft 365 Copilot Search API (preview)

The Microsoft 365 Copilot APIs provide access to components that power Copilot experiences, unlocking the ability to enhance your custom engine agents and generative AI solutions with Microsoft 365 Copilot capabilities. The Microsoft 365 Copilot Search API enables developers to perform semantic search across OneDrive content using natural language queries that understand context and intent, returning relevant documents and files with intelligent excerpts.

The Search API offers a streamlined solution for semantic document discovery without the need to replicate, index, or manage your data in a separate search infrastructure. The API leverages natural language processing to understand query intent and performs intelligent result ranking to yield the most relevant documents, which is more difficult to achieve with traditional keyword-based search approaches.

Semantic search is essential when you're building knowledge discovery solutions and want to surface Microsoft 365 content. When you implement semantic search, your solutions can provide more accurate, contextually relevant document discovery grounded in the vast repository of your organizational data. The Search API accomplishes this by extracting relevant document excerpts and metadata from OneDrive content. The Search API keeps your data in place and upholds your access and governance controls. The Search API ensures that search results are informed by the latest and most relevant content. This process enhances the discoverability and usefulness of your document-centric applications.

[Try your first Search API query in Graph Explorer](https://aka.ms/try_copilot_search_API_overview).

## Why use the Search API?

The Search API offers a secure and compliant way to perform semantic search across OneDrive content while optimizing for contextual relevance and user intent understanding. Thus, you don't need to egress data, break permissions, or compromise on security and compliance.

Custom knowledge applications can use the Search API to discover organization-specific documents stored in OneDrive. Rather than building and maintaining separate search indexes, these applications can instead leverage semantic search capabilities from Microsoft 365 data sources to surface relevant content the same way that Microsoft 365 Copilot does.

Enterprise knowledge applications that require intelligent document discovery can use the API's filtering capabilities to scope searches to specific OneDrive paths or content types, ensuring results only include approved sources while respecting information barriers and access controls.

Document-centric applications can combine semantic understanding with path-based filtering to create intuitive search experiences that help users find the right documents quickly based on natural language descriptions rather than exact keyword matches.

Imagine a financial services firm that stores critical client documents and research reports in OneDrive. The firm is developing a custom application to help their analysts quickly find relevant documents when preparing client presentations. This application must access and search through thousands of documents stored across different OneDrive folders. The firm works with multiple clients in similar market segments, making it crucial to find the most relevant documents quickly while maintaining strict security and compliance standards. The Search API helps the firm build intelligent search capabilities that understand context and intent while ensuring secure, compliant access to organizational knowledge.

### Manage compliance and safety risks

The Search API uses the built-in security and compliance features in Microsoft 365 to ensure that data source permissions and compliance settings are preserved. By searching data in place, it prevents data leaks and ensures that sensitive information is only accessible to authorized users, which is essential for maintaining strict security and compliance standards. Within an organization, Microsoft 365's permissions model ensures individuals can only get results from the content they are allowed to access.

### Solve for relevancy and intelligence

Because the Search API performs semantic search directly on OneDrive content without data duplication, its results are kept fresh and relevant, and it eliminates the need to maintain separate, costly search infrastructures. The API's natural language processing capabilities understand user intent beyond simple keyword matching.

### Lower cost of ownership and development effort

The Search API eliminates the need to build a secure data export and search indexing pipeline that can incur significant costs for organizations. The API includes all the required capabilities, including:

- Semantic search capabilities
- Natural language processing
- Content indexing
- Path-based filtering
- Pagination support
- Security and compliance

Organizations can use these built-in features to avoid expenses and complexities, and maintain stringent access controls and compliance within Microsoft 365.

## Search API capabilities

The Search API currently allows you to search data from the following data sources:

- OneDrive content (SharePoint and other data sources will be added in future releases)

The API supports natural language queries and uses semantic understanding to search through OneDrive content within the Microsoft 365 trust boundary. You can use the API to scope your search using KQL path expressions to search within the most important folders for your use case. With path filtering, you can restrict searches to specific OneDrive locations while maintaining semantic search capabilities.

## Licensing

The Search API is available at no extra cost to users with a Microsoft 365 Copilot license. Support for users without a Microsoft 365 Copilot license is currently not available.

## Best practices

The following best practices are applicable to both unfiltered queries (queries without a **filterExpression**) and filtered queries (queries with a **filterExpression**):

- The results returned by the Search API are ordered by relevance. Consider the **totalCount** when deciding how many results to process.
- Use all search results returned by the Search API for comprehensive document discovery.
- Avoid overly generic queries that might apply to a wide variety of content.
- Provide as much context in the query as possible for better semantic understanding.
- Your **query** should be descriptive and natural language-based.
- Avoid spelling errors in important keywords when you construct your **query**.

Apply the following best practice to filtered queries (queries with a **filterExpression**):

- If you want to filter using the **path** parameter in OneDrive, use the complete OneDrive URL path including the user's personal folder structure.

## Known limitations

The following are the current throttling and other limitations to the Search API:

- You need the **Files.Read.All** and **Sites.Read.All** permissions to search OneDrive content using the Search API.
- The Search API is optimized for semantic document discovery.
- The **query** request parameter has a limit of 1,500 characters.
- Currently only OneDrive is supported as a data source. SharePoint, external connectors, and other sources will be added in future releases.
- Only **path** expressions are supported in **filterExpression**. Additional KQL properties will be supported in future releases.
- The **pageSize** request parameter has a maximum value of 100.
- Up to 4 requests per second per user are supported.
- Up to 200 requests per user per hour are supported.
- Search from non-textual content, including embedded images and charts, is not supported.
- Results from files larger than 512 MB (.docx, .pptx, .pdf) or 150 MB (other extensions) are not supported.
- If **searchHits** in the response payload is empty, then no relevant results were found.

## Next step

> [!div class="nextstepaction"]
> [Use the Search API](copilot-search.md)

## Related content

- [Try with Graph explorer](https://aka.ms/try_copilot_search_API_overview)
